(ns tumblrsearch.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl]
            [cljs.core.async :as async :refer  [put! chan <!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [figwheel.client :as fw :include-macros true]
            [clojure.string :as s :refer [replace]]
            )
  (:import [goog.net Jsonp]
           [goog Uri]
           ))



(enable-console-print!)


;; state ------------------------------------------

(def initial-state 
  {:current-state :search
   :current-search ""
   :error ""
   :current-items []
   :before 0
   })

(defn reset-state [state]
  (merge state initial-state))

;; Search ------------------------------------------------


; ajax ---

(defn gen-request [tag before]
  (str "http://api.tumblr.com/v2/tagged"
       "?tag=" tag
       "&before=" before
       "&api_key=pekKZHs4hKvshK1NRyXlawVhO203uYg0MMfGj5Tq8ts6M1Wq9Z"
       ))

(defn async-search [data ajax-chan]
  (let [search-term (:current-search data)
        before (:before data)
        uri (gen-request search-term before)
        req (Jsonp. (Uri. uri))
        ]
    (.send req nil
           #(if (= (.. % -meta -status) 200)
              ; 200 response - ok
              (put! ajax-chan {:error false
                               :search-term search-term
                               :items (filter (fn [item] (= (:type item) "photo"))
                                              (js->clj (.. % -response) :keywordize-keys true))})
              ; otherwise error
              (put! ajax-chan {:error true})))))

(defn new-search [data state owner]
  (when (not (empty? (:text state)))
    (om/transact!
      data #(assoc %
                   :current-state :loading
                   :current-search (:text state)
                   :current-items []
                   :before 0
                   ))
    (om/set-state! owner :text "")
    (go (async-search @data (:ajax-chan state)))))

; Key handling ---

(def ENTER 13)
(def ESC 27)

(defn key-event->keycode [e] (.-keyCode e))
(def legal-key #{ENTER ESC})
  
(defn handle-change [e owner {:keys [text]}]
  (om/set-state! owner :text (.. e -target -value)))

(defn handle-keydown [e data state owner]
  (let [k (key-event->keycode e)]
    (when (legal-key k) 
      (condp = k
        ENTER (new-search data state owner)
        ESC   (om/set-state! owner :text "")
        ))))

; render ---

(defn render-search [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:text ""})
    om/IRenderState
    (render-state [this state]
      (dom/div nil
               (dom/h1 nil "Tumblr Search")
               ; input
               (dom/input
                 #js {:type "text" 
                      :value (:text state)
                      :onChange #(handle-change % owner state)
                      :onKeyDown #(handle-keydown % data state owner)
                      })
               ; search button
               (dom/button 
                 #js {:onClick (fn [e]
                                 (.preventDefault e)
                                 (new-search data state owner))}
                 "Search")
               ; clear button
               (dom/button
                 #js {:onClick (fn [e]
                                 (.preventDefault e)
                                 (om/set-state! owner :text "")
                                 (om/transact! data reset-state)
                                 )}
                 "Clear")))
    ))

;; Photo -----

(defn photo-view [item owner]
  (reify
    om/IRender
    (render [_]
      (dom/p nil
             (dom/h2 nil (s/replace (:slug item)  #"-"  " "))
             (dom/a #js {:href (:post_url item) :target "_blank"}
               (dom/img #js {:src (-> item :photos first :alt_sizes second :url)}))
             ))))

;; Loading ------------------------------------------------

(defn render-loading [data owner]
  (om/component
    (dom/div nil
             ; title
             (dom/h1 nil (str "Current search: " 
                              (:current-search data)))
             (dom/button
               #js {:onClick (fn [e]
                               (.preventDefault e)
                               (om/transact! data reset-state))}
               "Reset")
             ; photo list
             (apply dom/div nil (om/build-all photo-view (:current-items data))) 
             ; loading
             (dom/h2 nil "loading")
             (dom/button 
               #js {:onClick (fn [e]
                               (.preventDefault e)
                               (om/transact! data reset-state ))}
               "Cancel"))))

;; loaded ------------------------------------------------


(defn render-loaded [data owner]
  (om/component
    (dom/div nil
             ; title
             (dom/h1 nil (str "Current search: " 
                              (:current-search data)))

             (dom/button
               #js {:onClick (fn [e]
                               (.preventDefault e)
                               (om/transact! data reset-state))}
               "Reset")
             ; photo list
             (apply dom/div nil (om/build-all photo-view (:current-items data))) 
             )))

;; error ------------------------------------------------

(defn render-error [data owner]
  (om/component
    (dom/div nil 
             (dom/h1 nil "error")
             (dom/h2 nil (:error data))
             (dom/button 
               #js {:onClick (fn [e]
                               (.preventDefault e)
                               (om/transact! data reset-state ))}
               "Cancel")
             )))

;; App -----------------------------------------------


(defn async-response-loop [data ajax-chan]
  (go
    (while true
      (let [response (<! ajax-chan)]
        (when (= (:current-state @data) :loading)
          (cond
            ; loading error
            (:error response)
              (om/transact! data
                            #(assoc %
                                    :before 0
                                    :current-state :error
                                    :error "AJAX error"
                                    :current-search ""
                                    :current-items []))

            (and (= (:current-search @data) (:search-term response))
                 (empty? (response :items)))
              ; nothing found error
              (if (empty? (:current-items @data))
                (om/transact! data
                              #(assoc %
                                      :before 0
                                      :current-state :error
                                      :error "Tag not found"
                                      :current-search ""
                                      :current-items []
                                      ))
                ; loaded final
                (om/transact! data #(assoc % :current-state :loaded-final)))

            ; not error, search term match, not empty - let's go!
            (and (= (:current-search @data) (:search-term response))
                 (not (empty? (response :items))))
              (om/transact! data
                            #(assoc %
                                    :current-state :loaded
                                    :current-items (concat (:current-items @data) 
                                                          (:items response))
                                    :before (:timestamp (last (response :items)))
                                    ))
            ))))))

(defn async-window-scroll [data ajax-chan]
  (.addEventListener js/window "scroll" 
    (fn []
      (when
        (and
          (= :loaded (:current-state @data))
          (> 100
            (- (.. js/document -body -offsetHeight)
               (+ (.. js/window -innerHeight)
                  (.. js/window -scrollY)))))
        (om/transact! data #(assoc % :current-state :loading))
        (go (async-search @data ajax-chan))))))


(om/root
  (fn [data owner]
    (reify
      om/IWillMount
      (will-mount [_]
        (let [ajax-chan (chan 1)]
          (async-response-loop data ajax-chan)
          (async-window-scroll data ajax-chan)
          (om/set-state! owner :ajax-chan ajax-chan)))
      om/IRenderState 
      (render-state [this local-state]
        (dom/div nil
                 (case (:current-state data)
                   :search  (om/build render-search data
                                      {:state {:ajax-chan (om/get-state owner :ajax-chan)}})
                   :loading (om/build render-loading data)
                   :loaded  (om/build render-loaded data)
                   :loaded-final (om/build render-loaded data)
                   (om/build render-error data)
                   )))))
  (atom initial-state)
  {:target (. js/document (getElementById "app"))})