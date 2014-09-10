(ns tumblrsearch.search
  (:require 
    [cljs.core.async :as async :refer [put! chan >! <! alts! timeout]]
    [om.core :as om :include-macros true])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:import [goog.net Jsonp]
           [goog Uri]))

(defn gen-request [query before]
  (str "http://api.tumblr.com/v2/tagged"
       "?tag=" query
       "&before=" before
       "&api_key=pekKZHs4hKvshK1NRyXlawVhO203uYg0MMfGj5Tq8ts6M1Wq9Z"))

(defn search [ajax-chan query before]
  (let [uri (gen-request query before)
        req (Jsonp. (Uri. uri))
        t   (timeout 1000)
        ch  (chan)]
    (go (.send req nil #(put! ch %))
        (let [[v c] (alts! [t ch])]
          (cond
            ; Timeout
            (= c t)
            (>! ajax-chan {:error :timeout
                           :query query})
            ; Response not OK.
            (not (= (.. v -meta -status) 200))
            (>! ajax-chan {:error :ajax
                           :query query})
            ; Response OK
            :else
            (let [items (filter (fn [item] (= (:type item) "photo"))
                                (js->clj (.. v -response) :keywordize-keys true))]
              (>! ajax-chan {:error false
                             :query query
                             :items items})))))))

(defn new-search [data ajax-chan query]
  (om/transact! data 
    #(assoc % :current-state :loading
              :before 0
              :current-search query
              :current-items []))
    (search ajax-chan query 0))

;; Response Handler
;; -----------------------------------------------------------------------------

(defn init [data ajax-chan]
  (go (loop []
      (let [response (<! ajax-chan)]
      (when 
        (and (= (:current-state @data) :loading)
             (= (:current-search @data) 
                (:query response)))
        (cond
          ; error
          (:error response)
          (om/transact! data
            #(assoc % :current-state :error
                      :error (:error response)))
          ; empty response
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
      (recur)))))
