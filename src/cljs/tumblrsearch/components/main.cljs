(ns tumblrsearch.components.main
  (:require
    [clojure.string :as s]
    [om.core :as om :include-macros true]
    [om-tools.core :refer-macros [defcomponent]]
    [om-tools.dom :as dom :include-macros true]
    [secretary.core :as secretary :include-macros true :refer [defroute]]
    [goog.events :as events]
    [goog.history.EventType :as EventType]))

(defn item-view [item owner]
  (reify
    om/IRender
    (render [_]
      (dom/a #js {:href (:post_url item) :target "_blank"
                  :style #js {:position "absolute"
                              :height   (str (:height (:photo item)) "px")
                              :width    (str (om/get-shared owner :image-width) "px")
                              :top      (str (:y item) "px")
                              :left     (str (:x item) "px")}}
             (dom/img #js {:src (:url (:photo item))})))))


(defn- build-offset-grid [current-items col-n image-width]
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
                offset-x    (* image-width (first offset))
                offset-y    (second offset)
                new-height  (int (* (:height photo) (/ image-width (:width photo))))
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
              new-offsets)))))))

(defcomponent component [{:keys [current-items col-n]} owner]
  (render [_]
    (dom/div {:className "images"
              :style {:width (str (* col-n (om/get-shared owner :image-width)) "px")}}
      (om/build-all item-view
        (build-offset-grid current-items col-n (om/get-shared owner :image-width))))))
