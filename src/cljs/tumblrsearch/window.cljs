(ns tumblrsearch.window
  (:require
    [om.core :as om :include-macros true]
    [tumblrsearch.search :refer [search]]
    [cljs.core.async :as async :refer [alts! chan <! put! close! timeout]]
    )
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

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

(defn- setup-scroll-handler [data ajax-chan]
  (.addEventListener js/window "scroll"
    (fn []
      (when (and (= :loaded (:current-state @data))
                 (> 100 (scroll-remain)))
        (om/transact! data #(assoc % :current-state :loading))
          (search ajax-chan (:current-search @data) (:before @data))))))

;; Window Resize
;; -----------------------------------------------------------------------------

(defn- setup-resize-handler [data image-width]
  (let [c (chan)]
    (go
      (loop [col-n (<! c)]
        (let [t (timeout 200)
              [v c'] (alts! [c t])]
          (if (= c' t)
            ; timeout
            (do
              (when (not= col-n (:col-n @data))
                (om/transact! data #(assoc % :col-n col-n)))
              (recur (<! c)))
            ; too fast
            (do
              (close! t)
              (recur v))))))
    (.addEventListener 
      js/window "resize"
      (fn []
        (let [col-n (quot (.. js/window -innerWidth) image-width)]
          (put! c col-n))))))

(defn init [data owner ajax-chan]
  (setup-scroll-handler data ajax-chan)
  (setup-resize-handler data (om/get-shared owner :image-width)))
