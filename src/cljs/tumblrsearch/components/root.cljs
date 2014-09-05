(ns tumblrsearch.component.root
  (:require
    [om.core :as om :include-macros true]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]
    ; local
    [tumblrsearch.search  :as search]
    [tumblrsearch.window  :as window]
    [tumblrsearch.routing :as routing]))


;; Root Component
;; -----------------------------------------------------------------------------

(defcomponent root-component [data owner]
  (will-mount [_]
    (let [ajax-chan (chan)]
      (search/init  data ajax-chan)
      (window/init  data ajax-chan)
      (routing/init data ajax-chan owner)
      (om/set-state! owner :ajax-chan ajax-chan)))
  (render-state [_ state]
    (dom/div
      (om/build header-component data {:init-state state})
      (om/build main-component data))))
