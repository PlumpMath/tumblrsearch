(ns tumblrsearch.routing
  (:require
    [om.core :as om :include-macros true]
    [secretary.core :as secretary :include-macros true :refer [defroute]]
    [goog.events :as events]
    [goog.history.EventType :as EventType]
    [tumblrsearch.search :refer [new-search]])
  (:import
    goog.History))

(defn- setup-routing [data ajax-chan]
  (secretary/set-config! :prefix "#")
  (defroute "/" []
    (om/transact! data #(assoc % 
                               :current-state :search
                               :current-search ""
                               :current-items []
                               :before 0
                               )))
  (defroute "/search/:query" [query]
    (new-search data ajax-chan query)))

(defn- setup-history [owner]
  (let [h (History.)]
    (goog.events/listen h 
      EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
    (doto h
      (.setEnabled true))
    (om/set-state! owner :history h)))

(defn init [data ajax-chan owner]
  (setup-routing data ajax-chan) 
  (setup-history owner))
