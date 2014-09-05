(ns tumblrsearch.components.root
  (:require

    [cljs.core.async :as async :refer [chan]]
    [om.core :as om :include-macros true]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]
    ; local
    [tumblrsearch.components.header :as header]
    [tumblrsearch.components.main :as main]
    ))


;; Root Component
;; -----------------------------------------------------------------------------

(defcomponent root-component [data owner]
  (render-state [_ state]
    (dom/div
      (om/build header/component data {:init-state state})
      (om/build main/component data)
      )))
