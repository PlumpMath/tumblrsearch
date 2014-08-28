(defproject tumblrsearch "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 ; server scaffolding
                 [compojure "1.1.8"]
                 [ring "1.2.2"]
                 [figwheel "0.1.4-SNAPSHOT"] 
                 ; cljs
                 [org.clojure/clojurescript "0.0-2322"]
                 [enlive "1.1.5"]
                 [cljs-ajax "0.2.6"]
                 [com.facebook/react "0.11.1"]
                 [om "0.7.1"]
                 ]

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
                           :optimizations :simple
                           :pretty-print true
                           :output-wrapper false
                           :preamble ["react/react.min.js"]
                           :externs ["react/externs/react.js"]
                           }}
               ]}
  :figwheel {:http-server-root "public" :port 3449 }
  :profiles {:dev {:plugins [[lein-cljsbuild "1.0.3"]
                             [lein-figwheel "0.1.4-SNAPSHOT"]
                             [com.cemerick/austin "0.1.5"]]
                   :repl-options {:init-ns tumblrsearch.server}
                   }
             }
)
