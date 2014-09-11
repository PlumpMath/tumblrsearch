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
    (cond
      (and
        (= ENTER k) (not (empty? query)))
        (do
          (.setToken (om/get-state owner :history) 
                     (str "search/" query))
          (new-search data ajax-chan query))
      (= ESC k)
      (do
        (.setToken (om/get-state owner :history) "")
        (om/set-state! owner :query "")))))

(defcomponent component [data owner]
  (init-state [_] {:query ""})
  (will-receive-props [_ next-props]
    (om/set-state! owner :query (:current-search next-props)))
  (render-state [_ {:keys [query ajax-chan] :as state}]
    (dom/div {:class "header"}
      (dom/h1 "Tumblr Image Search")
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
                    (.setToken (om/get-state owner :history) 
                               (str "/search/" query))
                    (new-search data ajax-chan query)
                    )} "Search")
      (when (= (:current-state data) :loading) (dom/h2 "Loading"))
      (when (= (:current-state data) :loaded-final) (dom/h2 "All Loaded"))
      (when (= (:current-state data) :error) 
        (dom/h2 (condp = (:error data)
                  :empty-search "No images found." 
                  :timeout      "Search timeout" 
                  :ajax         "Request error" 
                  "Unknown Error.")))
      )))
