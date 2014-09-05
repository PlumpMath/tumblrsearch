(ns tumblrsearch.components.main
  (:require
    [clojure.string :as s]
    [om.core :as om :include-macros true]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]
    [secretary.core :as secretary :include-macros true :refer [defroute]]
    [goog.events :as events]
    [goog.history.EventType :as EventType]))

(def *IMAGE-SIZE* 400)

(defn item-view [item owner]
  (reify
    om/IRender
    (render [_]
      (dom/a #js {:href (:post_url item) :target "_blank"
                  :style #js {:position "absolute"
                              :height   (str (:height (:photo item)) "px")
                              :width    (str *IMAGE-SIZE* "px")
                              :top      (str (:y item) "px")
                              :left     (str (:x item) "px")}}
             (dom/img #js {:src (:url (:photo item))})))))

(defn- build-offset-grid [current-items window-width]
  (let [col-n (quot window-width *IMAGE-SIZE*)
        left-offset (-> (.. js/window -innerWidth)
                        (mod *IMAGE-SIZE*) (/ 2) (int))]
    (loop [items   current-items
           coll    []
           idx     0
           offsets (zipmap (range col-n) (repeat 0))]
      (if (empty? items) coll
        (let [item  (first items)
              title (s/replace (:slug item)  #"-"  " ") 
              photo (-> item :photos first :alt_sizes second)]
          (if (or (nil? (:height photo)) (nil? (:width photo)))
            ; nil size found - drop the image
            (recur (rest items) coll idx offsets)
            ; image ok - place image in grid
            (let [offset-n    (mod idx col-n)
                  offset      (apply min-key second offsets)
                  offset-x    (+ left-offset (* *IMAGE-SIZE* (first offset)))
                  offset-y    (second offset)
                  new-height  (int (* (:height photo) (/ *IMAGE-SIZE* (:width photo))))
                  new-offsets (update-in offsets [(first offset)] + new-height)
                  new-item {:index idx
                            :title title
                            :photo photo
                            :post_url (:post_url item)
                            :x offset-x
                            :y offset-y
                            }]
              (recur
                (rest items)
                (conj coll new-item)
                (inc idx)
                new-offsets))))))))

(defcomponent items-view [{:keys [current-items window-width]} owner]
  (render [_]
          (dom/div {:className "images"}
                   (om/build-all item-view 
                                 (build-offset-grid current-items 
                                                    window-width)))))

(defcomponent component [data owner]
  (render [_]
          (dom/div 
            (om/build items-view data))))
