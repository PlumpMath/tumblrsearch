// Compiled by ClojureScript 0.0-2322
goog.provide('tumblrsearch.components.header');
goog.require('cljs.core');
goog.require('tumblrsearch.search');
goog.require('tumblrsearch.search');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
tumblrsearch.components.header.ENTER = (13);
tumblrsearch.components.header.ESC = (27);
tumblrsearch.components.header.key_event__GT_keycode = (function key_event__GT_keycode(e){return e.keyCode;
});
tumblrsearch.components.header.handle_change = (function handle_change(e,owner){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"query","query",-1288509510),e.target.value);
});
tumblrsearch.components.header.handle_keydown = (function handle_keydown(e,data,owner,p__22117){var map__22119 = p__22117;var map__22119__$1 = ((cljs.core.seq_QMARK_.call(null,map__22119))?cljs.core.apply.call(null,cljs.core.hash_map,map__22119):map__22119);var ajax_chan = cljs.core.get.call(null,map__22119__$1,new cljs.core.Keyword(null,"ajax-chan","ajax-chan",1933808038));var query = cljs.core.get.call(null,map__22119__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var k = tumblrsearch.components.header.key_event__GT_keycode.call(null,e);if((cljs.core._EQ_.call(null,tumblrsearch.components.header.ENTER,k)) && (!(cljs.core.empty_QMARK_.call(null,query))))
{om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"history","history",-247395220)).setToken(("search/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));
return tumblrsearch.search.new_search.call(null,data,ajax_chan,query);
} else
{if(cljs.core._EQ_.call(null,tumblrsearch.components.header.ESC,k))
{om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"history","history",-247395220)).setToken("");
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"query","query",-1288509510),"");
} else
{return null;
}
}
});
var ufv___22145 = schema.utils.use_fn_validation;var output_schema22123_22146 = schema.core.Any;var input_schema22124_22147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker22125_22148 = schema.core.checker.call(null,input_schema22124_22147);var output_checker22126_22149 = schema.core.checker.call(null,output_schema22123_22146);/**
* Inputs: [data owner]
*/
tumblrsearch.components.header.component = ((function (ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149){
return (function component(G__22127,G__22128){var validate__15079__auto__ = ufv___22145.get_cell();if(cljs.core.truth_(validate__15079__auto__))
{var args__15080__auto___22150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22127,G__22128], null);var temp__4126__auto___22151 = input_checker22125_22148.call(null,args__15080__auto___22150);if(cljs.core.truth_(temp__4126__auto___22151))
{var error__15081__auto___22152 = temp__4126__auto___22151;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__15081__auto___22152)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22124_22147,new cljs.core.Keyword(null,"value","value",305978217),args__15080__auto___22150,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___22152], null));
} else
{}
} else
{}
var o__15082__auto__ = (function (){var data = G__22127;var owner = G__22128;while(true){
if(typeof tumblrsearch.components.header.t22137 !== 'undefined')
{} else
{
/**
* @constructor
*/
tumblrsearch.components.header.t22137 = (function (owner,output_schema22123,data,validate__15079__auto__,input_schema22124,G__22128,output_checker22126,component,input_checker22125,ufv__,G__22127,meta22138){
this.owner = owner;
this.output_schema22123 = output_schema22123;
this.data = data;
this.validate__15079__auto__ = validate__15079__auto__;
this.input_schema22124 = input_schema22124;
this.G__22128 = G__22128;
this.output_checker22126 = output_checker22126;
this.component = component;
this.input_checker22125 = input_checker22125;
this.ufv__ = ufv__;
this.G__22127 = G__22127;
this.meta22138 = meta22138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tumblrsearch.components.header.t22137.cljs$lang$type = true;
tumblrsearch.components.header.t22137.cljs$lang$ctorStr = "tumblrsearch.components.header/t22137";
tumblrsearch.components.header.t22137.cljs$lang$ctorPrWriter = ((function (validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149){
return (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"tumblrsearch.components.header/t22137");
});})(validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149))
;
tumblrsearch.components.header.t22137.prototype.om$core$IRenderState$ = true;
tumblrsearch.components.header.t22137.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149){
return (function (_,p__22140){var self__ = this;
var map__22141 = p__22140;var map__22141__$1 = ((cljs.core.seq_QMARK_.call(null,map__22141))?cljs.core.apply.call(null,cljs.core.hash_map,map__22141):map__22141);var state = map__22141__$1;var ajax_chan = cljs.core.get.call(null,map__22141__$1,new cljs.core.Keyword(null,"ajax-chan","ajax-chan",1933808038));var query = cljs.core.get.call(null,map__22141__$1,new cljs.core.Keyword(null,"query","query",-1288509510));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"className": "header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h1(null,"Tumblr Image Search"),om.dom.input.call(null,{"onKeyDown": om_tools.dom.format_opts.call(null,((function (___$1,map__22141,map__22141__$1,state,ajax_chan,query,validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149){
return (function (p1__22121_SHARP_){return tumblrsearch.components.header.handle_keydown.call(null,p1__22121_SHARP_,self__.data,self__.owner,state);
});})(___$1,map__22141,map__22141__$1,state,ajax_chan,query,validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149))
), "onChange": om_tools.dom.format_opts.call(null,((function (___$1,map__22141,map__22141__$1,state,ajax_chan,query,validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149){
return (function (p1__22120_SHARP_){return tumblrsearch.components.header.handle_change.call(null,p1__22120_SHARP_,self__.owner);
});})(___$1,map__22141,map__22141__$1,state,ajax_chan,query,validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149))
), "value": om_tools.dom.format_opts.call(null,query), "type": "text"}),React.DOM.button({"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__22141,map__22141__$1,state,ajax_chan,query,validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149){
return (function (e){e.preventDefault();
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"history","history",-247395220)).setToken(("search/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));
return tumblrsearch.search.new_search.call(null,self__.data,ajax_chan,query);
});})(___$1,map__22141,map__22141__$1,state,ajax_chan,query,validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149))
)},"Search"),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-state","current-state",1048284452).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"loading","loading",-737050189)))?React.DOM.h2(null,"Loading"):null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-state","current-state",1048284452).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"loaded-final","loaded-final",2030901563)))?React.DOM.h2(null,"All Loaded"):null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-state","current-state",1048284452).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"error","error",-978969032)))?om_tools.dom.element.call(null,React.DOM.h2,(function (){var pred__22142 = cljs.core._EQ_;var expr__22143 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(pred__22142.call(null,new cljs.core.Keyword(null,"empty-search","empty-search",864907322),expr__22143)))
{return "No images found.";
} else
{if(cljs.core.truth_(pred__22142.call(null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),expr__22143)))
{return "Search timeout";
} else
{if(cljs.core.truth_(pred__22142.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),expr__22143)))
{return "Request error";
} else
{return "Unknown Error.";
}
}
}
})(),cljs.core.PersistentVector.EMPTY):null)],null))));
});})(validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149))
;
tumblrsearch.components.header.t22137.prototype.om$core$IWillReceiveProps$ = true;
tumblrsearch.components.header.t22137.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149){
return (function (_,next_props){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"current-search","current-search",-1312903999).cljs$core$IFn$_invoke$arity$1(next_props));
});})(validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149))
;
tumblrsearch.components.header.t22137.prototype.om$core$IInitState$ = true;
tumblrsearch.components.header.t22137.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});})(validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149))
;
tumblrsearch.components.header.t22137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149){
return (function (_22139){var self__ = this;
var _22139__$1 = this;return self__.meta22138;
});})(validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149))
;
tumblrsearch.components.header.t22137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149){
return (function (_22139,meta22138__$1){var self__ = this;
var _22139__$1 = this;return (new tumblrsearch.components.header.t22137(self__.owner,self__.output_schema22123,self__.data,self__.validate__15079__auto__,self__.input_schema22124,self__.G__22128,self__.output_checker22126,self__.component,self__.input_checker22125,self__.ufv__,self__.G__22127,meta22138__$1));
});})(validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149))
;
tumblrsearch.components.header.__GT_t22137 = ((function (validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149){
return (function __GT_t22137(owner__$1,output_schema22123__$1,data__$1,validate__15079__auto____$1,input_schema22124__$1,G__22128__$1,output_checker22126__$1,component__$1,input_checker22125__$1,ufv____$1,G__22127__$1,meta22138){return (new tumblrsearch.components.header.t22137(owner__$1,output_schema22123__$1,data__$1,validate__15079__auto____$1,input_schema22124__$1,G__22128__$1,output_checker22126__$1,component__$1,input_checker22125__$1,ufv____$1,G__22127__$1,meta22138));
});})(validate__15079__auto__,ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149))
;
}
return (new tumblrsearch.components.header.t22137(owner,output_schema22123_22146,data,validate__15079__auto__,input_schema22124_22147,G__22128,output_checker22126_22149,component,input_checker22125_22148,ufv___22145,G__22127,null));
break;
}
})();if(cljs.core.truth_(validate__15079__auto__))
{var temp__4126__auto___22153 = output_checker22126_22149.call(null,o__15082__auto__);if(cljs.core.truth_(temp__4126__auto___22153))
{var error__15081__auto___22154 = temp__4126__auto___22153;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__15081__auto___22154)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22123_22146,new cljs.core.Keyword(null,"value","value",305978217),o__15082__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___22154], null));
} else
{}
} else
{}
return o__15082__auto__;
});})(ufv___22145,output_schema22123_22146,input_schema22124_22147,input_checker22125_22148,output_checker22126_22149))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tumblrsearch.components.header.component),schema.core.make_fn_schema.call(null,output_schema22123_22146,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22124_22147], null)));
tumblrsearch.components.header.__GT_component = (function() {
var __GT_component = null;
var __GT_component__1 = (function (cursor__16847__auto__){return om.core.build.call(null,tumblrsearch.components.header.component,cursor__16847__auto__);
});
var __GT_component__2 = (function (cursor__16847__auto__,m22122){return om.core.build.call(null,tumblrsearch.components.header.component,cursor__16847__auto__,m22122);
});
__GT_component = function(cursor__16847__auto__,m22122){
switch(arguments.length){
case 1:
return __GT_component__1.call(this,cursor__16847__auto__);
case 2:
return __GT_component__2.call(this,cursor__16847__auto__,m22122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_component.cljs$core$IFn$_invoke$arity$1 = __GT_component__1;
__GT_component.cljs$core$IFn$_invoke$arity$2 = __GT_component__2;
return __GT_component;
})()
;

//# sourceMappingURL=header.js.map