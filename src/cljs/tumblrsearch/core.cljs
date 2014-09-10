(ns tumblrsearch.core
  (:require [om.core :as om :include-macros true]
            [tumblrsearch.components.root :refer [root-component]]))

(enable-console-print!)

(def image-size 400)

(def initial-state
  (atom {:current-state :search
         :current-search ""
         :current-items []
         :error ""
         :before 0
         :col-n (quot (.. js/window -innerWidth) image-size)
         }))

(om/root
  root-component
  initial-state
  {:target (. js/document (getElementById "app"))
   :shared {:image-size image-size}})
