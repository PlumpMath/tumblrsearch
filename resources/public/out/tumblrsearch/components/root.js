// Compiled by ClojureScript 0.0-2322
goog.provide('tumblrsearch.components.root');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tumblrsearch.components.main');
goog.require('tumblrsearch.window');
goog.require('om_tools.dom');
goog.require('tumblrsearch.routing');
goog.require('om_tools.dom');
goog.require('tumblrsearch.search');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('tumblrsearch.components.header');
goog.require('tumblrsearch.search');
goog.require('tumblrsearch.window');
goog.require('tumblrsearch.components.header');
goog.require('om.core');
goog.require('tumblrsearch.components.main');
goog.require('om.core');
goog.require('tumblrsearch.routing');
var ufv___22449 = schema.utils.use_fn_validation;var output_schema22437_22450 = schema.core.Any;var input_schema22438_22451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker22439_22452 = schema.core.checker.call(null,input_schema22438_22451);var output_checker22440_22453 = schema.core.checker.call(null,output_schema22437_22450);/**
* Inputs: [data owner]
*/
tumblrsearch.components.root.root_component = ((function (ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453){
return (function root_component(G__22441,G__22442){var validate__15079__auto__ = ufv___22449.get_cell();if(cljs.core.truth_(validate__15079__auto__))
{var args__15080__auto___22454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22441,G__22442], null);var temp__4126__auto___22455 = input_checker22439_22452.call(null,args__15080__auto___22454);if(cljs.core.truth_(temp__4126__auto___22455))
{var error__15081__auto___22456 = temp__4126__auto___22455;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"root-component","root-component",-166494948,null),cljs.core.pr_str.call(null,error__15081__auto___22456)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22438_22451,new cljs.core.Keyword(null,"value","value",305978217),args__15080__auto___22454,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___22456], null));
} else
{}
} else
{}
var o__15082__auto__ = (function (){var data = G__22441;var owner = G__22442;while(true){
if(typeof tumblrsearch.components.root.t22446 !== 'undefined')
{} else
{
/**
* @constructor
*/
tumblrsearch.components.root.t22446 = (function (owner,data,validate__15079__auto__,G__22441,output_schema22437,input_schema22438,output_checker22440,input_checker22439,root_component,G__22442,ufv__,meta22447){
this.owner = owner;
this.data = data;
this.validate__15079__auto__ = validate__15079__auto__;
this.G__22441 = G__22441;
this.output_schema22437 = output_schema22437;
this.input_schema22438 = input_schema22438;
this.output_checker22440 = output_checker22440;
this.input_checker22439 = input_checker22439;
this.root_component = root_component;
this.G__22442 = G__22442;
this.ufv__ = ufv__;
this.meta22447 = meta22447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tumblrsearch.components.root.t22446.cljs$lang$type = true;
tumblrsearch.components.root.t22446.cljs$lang$ctorStr = "tumblrsearch.components.root/t22446";
tumblrsearch.components.root.t22446.cljs$lang$ctorPrWriter = ((function (validate__15079__auto__,ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453){
return (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"tumblrsearch.components.root/t22446");
});})(validate__15079__auto__,ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453))
;
tumblrsearch.components.root.t22446.prototype.om$core$IRenderState$ = true;
tumblrsearch.components.root.t22446.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__15079__auto__,ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453){
return (function (_,state){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,tumblrsearch.components.header.component,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),state], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,tumblrsearch.components.main.component,self__.data)],null)));
});})(validate__15079__auto__,ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453))
;
tumblrsearch.components.root.t22446.prototype.om$core$IWillMount$ = true;
tumblrsearch.components.root.t22446.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__15079__auto__,ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453){
return (function (_){var self__ = this;
var ___$1 = this;var ajax_chan = cljs.core.async.chan.call(null);tumblrsearch.window.init.call(null,self__.data,self__.owner,ajax_chan);
tumblrsearch.search.init.call(null,self__.data,ajax_chan);
tumblrsearch.routing.init.call(null,self__.data,ajax_chan,self__.owner);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"ajax-chan","ajax-chan",1933808038),ajax_chan);
});})(validate__15079__auto__,ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453))
;
tumblrsearch.components.root.t22446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__15079__auto__,ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453){
return (function (_22448){var self__ = this;
var _22448__$1 = this;return self__.meta22447;
});})(validate__15079__auto__,ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453))
;
tumblrsearch.components.root.t22446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__15079__auto__,ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453){
return (function (_22448,meta22447__$1){var self__ = this;
var _22448__$1 = this;return (new tumblrsearch.components.root.t22446(self__.owner,self__.data,self__.validate__15079__auto__,self__.G__22441,self__.output_schema22437,self__.input_schema22438,self__.output_checker22440,self__.input_checker22439,self__.root_component,self__.G__22442,self__.ufv__,meta22447__$1));
});})(validate__15079__auto__,ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453))
;
tumblrsearch.components.root.__GT_t22446 = ((function (validate__15079__auto__,ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453){
return (function __GT_t22446(owner__$1,data__$1,validate__15079__auto____$1,G__22441__$1,output_schema22437__$1,input_schema22438__$1,output_checker22440__$1,input_checker22439__$1,root_component__$1,G__22442__$1,ufv____$1,meta22447){return (new tumblrsearch.components.root.t22446(owner__$1,data__$1,validate__15079__auto____$1,G__22441__$1,output_schema22437__$1,input_schema22438__$1,output_checker22440__$1,input_checker22439__$1,root_component__$1,G__22442__$1,ufv____$1,meta22447));
});})(validate__15079__auto__,ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453))
;
}
return (new tumblrsearch.components.root.t22446(owner,data,validate__15079__auto__,G__22441,output_schema22437_22450,input_schema22438_22451,output_checker22440_22453,input_checker22439_22452,root_component,G__22442,ufv___22449,null));
break;
}
})();if(cljs.core.truth_(validate__15079__auto__))
{var temp__4126__auto___22457 = output_checker22440_22453.call(null,o__15082__auto__);if(cljs.core.truth_(temp__4126__auto___22457))
{var error__15081__auto___22458 = temp__4126__auto___22457;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"root-component","root-component",-166494948,null),cljs.core.pr_str.call(null,error__15081__auto___22458)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22437_22450,new cljs.core.Keyword(null,"value","value",305978217),o__15082__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___22458], null));
} else
{}
} else
{}
return o__15082__auto__;
});})(ufv___22449,output_schema22437_22450,input_schema22438_22451,input_checker22439_22452,output_checker22440_22453))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tumblrsearch.components.root.root_component),schema.core.make_fn_schema.call(null,output_schema22437_22450,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22438_22451], null)));
tumblrsearch.components.root.__GT_root_component = (function() {
var __GT_root_component = null;
var __GT_root_component__1 = (function (cursor__16847__auto__){return om.core.build.call(null,tumblrsearch.components.root.root_component,cursor__16847__auto__);
});
var __GT_root_component__2 = (function (cursor__16847__auto__,m22436){return om.core.build.call(null,tumblrsearch.components.root.root_component,cursor__16847__auto__,m22436);
});
__GT_root_component = function(cursor__16847__auto__,m22436){
switch(arguments.length){
case 1:
return __GT_root_component__1.call(this,cursor__16847__auto__);
case 2:
return __GT_root_component__2.call(this,cursor__16847__auto__,m22436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_root_component.cljs$core$IFn$_invoke$arity$1 = __GT_root_component__1;
__GT_root_component.cljs$core$IFn$_invoke$arity$2 = __GT_root_component__2;
return __GT_root_component;
})()
;

//# sourceMappingURL=root.js.map