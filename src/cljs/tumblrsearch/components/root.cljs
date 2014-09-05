(ns tumblrsearch.component.root
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [om.core :as om :include-macros true]
    [cljs.core.async :as async :refer  [put! chan <! alts! timeout]]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]
    [secretary.core :as secretary :include-macros true :refer [defroute]])
  (:import goog.History))


;; Root Component
;; -----------------------------------------------------------------------------

(defcomponent root-component [data owner]
  (will-mount [_]
              (let [ajax-chan (chan)]
                (setup-ajax-handler   data ajax-chan)
                (setup-scroll-handler data ajax-chan)
                (setup-resize-handler data)
                (setup-routes         data ajax-chan)
                (setup-history        owner) 
                (om/set-state! owner :ajax-chan ajax-chan)))
  (render-state [_ state]
                (dom/div
                  (om/build header-component data {:init-state state})
                  (om/build main-component data))))
