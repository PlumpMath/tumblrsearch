(ns tumblrsearch.window
  (:require
    [om.core :as om :include-macros true]
    [tumblrsearch.search :refer [search]]
    ))

;; Window Scroll
;; -----------------------------------------------------------------------------

(defn scroll-remain []
  (let 
    [body (.. js/document -body)
     html (.. js/document -documentElement)
     w-height (max (.. body -scrollHeight)
                   (.. body -offsetHeight)
                   (.. html -clientHeight)
                   (.. html -scrollHeight)
                   (.. html -offsetHeight))]
    (- w-height (+ (.. js/window -innerHeight)
                   (.. js/window -scrollY)))))

(defn- setup-scroll-handler [{:keys [current-state current-search before] :as data}
                             ajax-chan]
  (.addEventListener js/window "scroll"
    (fn []
      (when (and (= :loaded current-state)
                 (> 100 (scroll-remain)))
        (om/transact! data #(assoc % :current-state :loading))
          (search ajax-chan current-search before)
       ))))

;; Window Resize
;; -----------------------------------------------------------------------------

(defn- setup-resize-handler [data]
  (.addEventListener 
    js/window "resize"
    (fn []
      (om/transact! data 
        #(assoc % :window-width (.. js/window -innerWidth))))))


(defn init [data ajax-chan]
  (setup-scroll-handler data ajax-chan)
  (setup-resize-handler data))
