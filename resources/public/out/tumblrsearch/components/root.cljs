(ns tumblrsearch.components.root
  (:require
    [cljs.core.async :as async :refer [chan]]
    [om.core :as om :include-macros true]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]
    ; local
    [tumblrsearch.components.header :as header]
    [tumblrsearch.components.main :as main]
    [tumblrsearch.window :as window]
    [tumblrsearch.search :as search]
    [tumblrsearch.routing :as routing]))


;; Root Component
;; -----------------------------------------------------------------------------

(defcomponent root-component [data owner]
  (will-mount [_]
    (let [ajax-chan (chan)]
      (window/init data owner ajax-chan)
      (search/init data ajax-chan)
      (routing/init data ajax-chan owner)
      (om/set-state! owner :ajax-chan ajax-chan)
      ))
  (render-state [_ state]
    (dom/div
      (om/build header/component data {:init-state state})
      (om/build main/component data))))
