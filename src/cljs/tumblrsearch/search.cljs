(ns tumblrsearch.search
  (:require [cljs.core.async :as async :refer  [put! chan >! alts! timeout]])
  (:require-macros  cljs.core.async.macros :refer [go])
  (:import [goog.net Jsonp]
           [goog Uri]))

(defn gen-request [search-term before]
  (str "http://api.tumblr.com/v2/tagged"
       "?tag=" search-term
       "&before=" before
       "&api_key=pekKZHs4hKvshK1NRyXlawVhO203uYg0MMfGj5Tq8ts6M1Wq9Z"))

(defn async-request [ajax-chan search-term before]
  (let [uri (gen-request search-term before)
        req (Jsonp. (Uri. uri))
        t   (timeout 500)
        ch  (chan)]
    (.send req nil #(put! ch %))
    (go (let [[v c] (alts! [t ch])]
          (case 
            ; timeout
            (= c t) 
            (>! ajax-chan {:error :timeout})

            ; Response error
            (not (= (.. v -meta -status) 200))
            (>! ajax-chan {:error :ajax})

            ; response OK
            (>! ajax-chan {:error false
                           :search-term search-term
                           :items (-> v
                                      (.. -response)
                                      (js->clj :keywordize-keys true)
                                      (#(filter #(= (:type %) "photo"))))
                           }))))))

(defn new-search [data ajax-chan query]
  (om/transact! data 
    #(assoc %
            :state :loading
            :before 0
            :current-search query
            :current-items [])))

;; Response Handler
;; -----------------------------------------------------------------------------

(defn ajax-handler [data ajax-chan]
  (go-loop []
    (let [response (<! ajax-chan)]
      (when (and (= (:current-state @data) :loading)
                 (= (:current-search @data) 
                    (:search-term response)))
      (cond
        (:error response)
        (om/transact! data
          #(assoc % :current-state :error
                    :error (:error response)))

        (empty? (:items response))
        (if (empty? (:current-items @data))
          (om/transact! data
            #(assoc % :current-state :error
                      :error :empty-search))
          (om/transact! data 
            #(assoc % :current-state :loaded-final)))

        :else
        (om/transact! data
          #(assoc % :current-state :loaded
                    :current-items (concat (:current-items @data) 
                                           (:items response))
                    :before (:timestamp (last (response :items)))))))
      (recur))))