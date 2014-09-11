// Compiled by ClojureScript 0.0-2322
goog.provide('tumblrsearch.routing');
goog.require('cljs.core');
goog.require('tumblrsearch.search');
goog.require('secretary.core');
goog.require('goog.history.EventType');
goog.require('tumblrsearch.search');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('goog.events');
tumblrsearch.routing.setup_routing = (function setup_routing(data,ajax_chan){secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__22166__auto___22468 = (function (params__22167__auto__){if(cljs.core.map_QMARK_.call(null,params__22167__auto__))
{var map__22464 = params__22167__auto__;var map__22464__$1 = ((cljs.core.seq_QMARK_.call(null,map__22464))?cljs.core.apply.call(null,cljs.core.hash_map,map__22464):map__22464);return om.core.transact_BANG_.call(null,data,((function (map__22464,map__22464__$1){
return (function (p1__22459_SHARP_){return cljs.core.assoc.call(null,p1__22459_SHARP_,new cljs.core.Keyword(null,"current-state","current-state",1048284452),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"current-search","current-search",-1312903999),"",new cljs.core.Keyword(null,"current-items","current-items",292221155),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"before","before",-1633692388),(0));
});})(map__22464,map__22464__$1))
);
} else
{if(cljs.core.vector_QMARK_.call(null,params__22167__auto__))
{var vec__22465 = params__22167__auto__;return om.core.transact_BANG_.call(null,data,((function (vec__22465){
return (function (p1__22459_SHARP_){return cljs.core.assoc.call(null,p1__22459_SHARP_,new cljs.core.Keyword(null,"current-state","current-state",1048284452),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"current-search","current-search",-1312903999),"",new cljs.core.Keyword(null,"current-items","current-items",292221155),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"before","before",-1633692388),(0));
});})(vec__22465))
);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__22166__auto___22468);
var action__22166__auto__ = (function (params__22167__auto__){if(cljs.core.map_QMARK_.call(null,params__22167__auto__))
{var map__22466 = params__22167__auto__;var map__22466__$1 = ((cljs.core.seq_QMARK_.call(null,map__22466))?cljs.core.apply.call(null,cljs.core.hash_map,map__22466):map__22466);var query = cljs.core.get.call(null,map__22466__$1,new cljs.core.Keyword(null,"query","query",-1288509510));return tumblrsearch.search.new_search.call(null,data,ajax_chan,query);
} else
{if(cljs.core.vector_QMARK_.call(null,params__22167__auto__))
{var vec__22467 = params__22167__auto__;var query = cljs.core.nth.call(null,vec__22467,(0),null);return tumblrsearch.search.new_search.call(null,data,ajax_chan,query);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/search/:query",action__22166__auto__);
return ((function (action__22166__auto__){
return (function() { 
var G__22469__delegate = function (args__22165__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/search/:query",args__22165__auto__);
};
var G__22469 = function (var_args){
var args__22165__auto__ = null;if (arguments.length > 0) {
  args__22165__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22469__delegate.call(this,args__22165__auto__);};
G__22469.cljs$lang$maxFixedArity = 0;
G__22469.cljs$lang$applyTo = (function (arglist__22470){
var args__22165__auto__ = cljs.core.seq(arglist__22470);
return G__22469__delegate(args__22165__auto__);
});
G__22469.cljs$core$IFn$_invoke$arity$variadic = G__22469__delegate;
return G__22469;
})()
;
;})(action__22166__auto__))
});
tumblrsearch.routing.setup_history = (function setup_history(owner){var h = (new goog.History());goog.events.listen(h,goog.history.EventType.NAVIGATE,((function (h){
return (function (p1__22471_SHARP_){return secretary.core.dispatch_BANG_.call(null,p1__22471_SHARP_.token);
});})(h))
);
var G__22473_22474 = h;G__22473_22474.setEnabled(true);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"history","history",-247395220),h);
});
tumblrsearch.routing.init = (function init(data,ajax_chan,owner){tumblrsearch.routing.setup_routing.call(null,data,ajax_chan);
return tumblrsearch.routing.setup_history.call(null,owner);
});

//# sourceMappingURL=routing.js.map