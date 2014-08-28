(defproject tumblrsearch "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [com.facebook/react "0.11.1"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [ring "1.2.2"]
                 [compojure "1.1.8"]
                 [enlive "1.1.5"]
                 [cljs-ajax "0.2.6"]
                 [om "0.7.1"]
                 [figwheel "0.1.4-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "1.0.3"]]

  :cljsbuild {:builds
              [
               {:id "dev"
                :source-paths ["src/cljs"]
                :compiler {:output-dir "resources/public/out/"
                           :output-to     "resources/public/app.js"
                           :optimizations :none
                           :pretty-print  true
                           :source-map    true
                           }}
               {:id "release"
                :source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/app-min.js"
                           :optimizations :advanced
                           :pretty-print false
                           :output-wrapper false
                           :preamble ["react/react.min.js"]
                           :externs ["react/externs/react.js"]
                           }}
               ]}

  :profiles {:dev
             {:repl-options {:init-ns tumblrsearch.server}
              :plugins [[com.cemerick/austin "0.1.5-SNAPSHOT"]
                        [lein-cljsbuild "1.0.3"]
                        [lein-figwheel "0.1.2-SNAPSHOT"]]
              :figwheel {:http-server-root "public" ;; resources/public
                         :port 3449 }}})
