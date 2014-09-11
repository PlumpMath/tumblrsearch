// Compiled by ClojureScript 0.0-2322
goog.provide('tumblrsearch.core');
goog.require('cljs.core');
goog.require('tumblrsearch.components.root');
goog.require('tumblrsearch.components.root');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
tumblrsearch.core.image_width = (400);
tumblrsearch.core.initial_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"current-search","current-search",-1312903999),"",new cljs.core.Keyword(null,"current-items","current-items",292221155),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032),"",new cljs.core.Keyword(null,"before","before",-1633692388),(0),new cljs.core.Keyword(null,"col-n","col-n",-191254391),cljs.core.quot.call(null,window.innerWidth,tumblrsearch.core.image_width)], null));
om.core.root.call(null,tumblrsearch.components.root.root_component,tumblrsearch.core.initial_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image-width","image-width",737630851),tumblrsearch.core.image_width], null)], null));

//# sourceMappingURL=core.js.map