(ns tumblrsearch.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer  [put! chan <! alts! timeout]]
            [clojure.string :as s]
            ; om
            [om.core :as om :include-macros true]
            ; local
            [tumblrsearch.components.root :refer [root-component]]
            ))

(enable-console-print!)

(def initial-state 
  (atom 
    {:current-state :search
     :current-search ""
     :current-items []
     :error ""
     :before 0}))

(om/root
  root-component
  initial-state
  {:target (. js/document (getElementById "app"))})
