(ns tumblrsearch.core
  (:require [om.core :as om :include-macros true]
            [tumblrsearch.components.root :refer [root-component]]))

(enable-console-print!)

(def initial-state
  (atom {:current-state :search
         :current-search ""
         :current-items []
         :error ""
         :before 0}))

(om/root
  root-component
  initial-state
  {:target (. js/document (getElementById "app"))})
