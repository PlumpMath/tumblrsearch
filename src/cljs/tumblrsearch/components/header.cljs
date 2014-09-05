(ns tumblrsearch.components.header
  (:require 
    [om.core :as om :include-macros true]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]
    [tumblrsearch.search :refer [new-search]]
    ))

(def ENTER 13)
(def ESC 27)

(defn- key-event->keycode [e] (.-keyCode e))

(defn- handle-change [e owner]
  (om/set-state! owner :query (.. e -target -value)))

(defn- handle-keydown [e data owner {:keys [query ajax-chan]}]
  (let [k (key-event->keycode e)]
    (case
      (and 
        (= ENTER k) (not (empty? query)))
        (new-search data ajax-chan query)
      (= ESC k)
        (om/set-state! owner :query ""))))

(defcomponent component [data owner]
  (init-state [_] {:query ""})
  (render-state [_ {:keys [query ajax-chan] :as state}]
    (dom/div 
      ; input
      (dom/input
        {:type "text" 
          :value query
          :onChange #(handle-change % owner)
          :onKeyDown #(handle-keydown % data owner state)})
      ; search button
      (dom/button 
        {:onClick (fn [e]
                    (.preventDefault e)
                    (new-search data ajax-chan query)
                    )} "Search"))))
