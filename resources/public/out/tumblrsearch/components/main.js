// Compiled by ClojureScript 0.0-2322
goog.provide('tumblrsearch.components.main');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('om_tools.dom');
goog.require('goog.history.EventType');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clojure.string');
goog.require('goog.events');
tumblrsearch.components.main.item_view = (function item_view(item,owner){if(typeof tumblrsearch.components.main.t22260 !== 'undefined')
{} else
{
/**
* @constructor
*/
tumblrsearch.components.main.t22260 = (function (owner,item,item_view,meta22261){
this.owner = owner;
this.item = item;
this.item_view = item_view;
this.meta22261 = meta22261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tumblrsearch.components.main.t22260.cljs$lang$type = true;
tumblrsearch.components.main.t22260.cljs$lang$ctorStr = "tumblrsearch.components.main/t22260";
tumblrsearch.components.main.t22260.cljs$lang$ctorPrWriter = (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"tumblrsearch.components.main/t22260");
});
tumblrsearch.components.main.t22260.prototype.om$core$IRender$ = true;
tumblrsearch.components.main.t22260.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.a,{"style": {"left": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(self__.item))+"px"), "top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(self__.item))+"px"), "width": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"image-width","image-width",737630851)))+"px"), "height": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"photo","photo",-52852781).cljs$core$IFn$_invoke$arity$1(self__.item)))+"px"), "position": "absolute"}, "target": "_blank", "href": new cljs.core.Keyword(null,"post_url","post_url",1236476846).cljs$core$IFn$_invoke$arity$1(self__.item)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.img({"src": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"photo","photo",-52852781).cljs$core$IFn$_invoke$arity$1(self__.item))})],null))));
});
tumblrsearch.components.main.t22260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22262){var self__ = this;
var _22262__$1 = this;return self__.meta22261;
});
tumblrsearch.components.main.t22260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22262,meta22261__$1){var self__ = this;
var _22262__$1 = this;return (new tumblrsearch.components.main.t22260(self__.owner,self__.item,self__.item_view,meta22261__$1));
});
tumblrsearch.components.main.__GT_t22260 = (function __GT_t22260(owner__$1,item__$1,item_view__$1,meta22261){return (new tumblrsearch.components.main.t22260(owner__$1,item__$1,item_view__$1,meta22261));
});
}
return (new tumblrsearch.components.main.t22260(owner,item,item_view,null));
});
tumblrsearch.components.main.build_offset_grid = (function build_offset_grid(current_items,col_n,image_width){var items = current_items;var coll = cljs.core.PersistentVector.EMPTY;var idx = (0);var offsets = cljs.core.zipmap.call(null,cljs.core.range.call(null,col_n),cljs.core.repeat.call(null,(0)));while(true){
if(cljs.core.empty_QMARK_.call(null,items))
{return coll;
} else
{var item = cljs.core.first.call(null,items);var title = clojure.string.replace.call(null,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(item),/-/," ");var photo = cljs.core.second.call(null,new cljs.core.Keyword(null,"alt_sizes","alt_sizes",1950014535).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"photos","photos",11691538).cljs$core$IFn$_invoke$arity$1(item))));if(((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(photo) == null)) || ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(photo) == null)))
{{
var G__22263 = cljs.core.rest.call(null,items);
var G__22264 = coll;
var G__22265 = idx;
var G__22266 = offsets;
items = G__22263;
coll = G__22264;
idx = G__22265;
offsets = G__22266;
continue;
}
} else
{var offset_n = cljs.core.mod.call(null,idx,col_n);var offset = cljs.core.apply.call(null,cljs.core.min_key,cljs.core.second,offsets);var offset_x = (image_width * cljs.core.first.call(null,offset));var offset_y = cljs.core.second.call(null,offset);var new_height = ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(photo) * (image_width / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(photo))) | (0));var new_offsets = cljs.core.update_in.call(null,offsets,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,offset)], null),cljs.core._PLUS_,new_height);var new_item = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),idx,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"photo","photo",-52852781),photo,new cljs.core.Keyword(null,"post_url","post_url",1236476846),new cljs.core.Keyword(null,"post_url","post_url",1236476846).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"x","x",2099068185),offset_x,new cljs.core.Keyword(null,"y","y",-1757859776),offset_y], null);{
var G__22267 = cljs.core.rest.call(null,items);
var G__22268 = cljs.core.conj.call(null,coll,new_item);
var G__22269 = (idx + (1));
var G__22270 = new_offsets;
items = G__22267;
coll = G__22268;
idx = G__22269;
offsets = G__22270;
continue;
}
}
}
break;
}
});
var ufv___22292 = schema.utils.use_fn_validation;var output_schema22272_22293 = schema.core.Any;var input_schema22273_22294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker22274_22295 = schema.core.checker.call(null,input_schema22273_22294);var output_checker22275_22296 = schema.core.checker.call(null,output_schema22272_22293);/**
* Inputs: [{:keys [current-items col-n]} owner]
*/
tumblrsearch.components.main.component = ((function (ufv___22292,output_schema22272_22293,input_schema22273_22294,input_checker22274_22295,output_checker22275_22296){
return (function component(G__22276,G__22277){var validate__15079__auto__ = ufv___22292.get_cell();if(cljs.core.truth_(validate__15079__auto__))
{var args__15080__auto___22297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22276,G__22277], null);var temp__4126__auto___22298 = input_checker22274_22295.call(null,args__15080__auto___22297);if(cljs.core.truth_(temp__4126__auto___22298))
{var error__15081__auto___22299 = temp__4126__auto___22298;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__15081__auto___22299)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22273_22294,new cljs.core.Keyword(null,"value","value",305978217),args__15080__auto___22297,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___22299], null));
} else
{}
} else
{}
var o__15082__auto__ = (function (){var G__22286 = G__22276;var map__22287 = G__22286;var map__22287__$1 = ((cljs.core.seq_QMARK_.call(null,map__22287))?cljs.core.apply.call(null,cljs.core.hash_map,map__22287):map__22287);var col_n = cljs.core.get.call(null,map__22287__$1,new cljs.core.Keyword(null,"col-n","col-n",-191254391));var current_items = cljs.core.get.call(null,map__22287__$1,new cljs.core.Keyword(null,"current-items","current-items",292221155));var owner = G__22277;var G__22286__$1 = G__22286;var owner__$1 = owner;while(true){
var map__22288 = G__22286__$1;var map__22288__$1 = ((cljs.core.seq_QMARK_.call(null,map__22288))?cljs.core.apply.call(null,cljs.core.hash_map,map__22288):map__22288);var col_n__$1 = cljs.core.get.call(null,map__22288__$1,new cljs.core.Keyword(null,"col-n","col-n",-191254391));var current_items__$1 = cljs.core.get.call(null,map__22288__$1,new cljs.core.Keyword(null,"current-items","current-items",292221155));var owner__$2 = owner__$1;if(typeof tumblrsearch.components.main.t22289 !== 'undefined')
{} else
{
/**
* @constructor
*/
tumblrsearch.components.main.t22289 = (function (input_checker22274,owner,validate__15079__auto__,current_items,col_n,G__22277,component,output_schema22272,map__22287,G__22286,G__22276,ufv__,input_schema22273,map__22288,output_checker22275,meta22290){
this.input_checker22274 = input_checker22274;
this.owner = owner;
this.validate__15079__auto__ = validate__15079__auto__;
this.current_items = current_items;
this.col_n = col_n;
this.G__22277 = G__22277;
this.component = component;
this.output_schema22272 = output_schema22272;
this.map__22287 = map__22287;
this.G__22286 = G__22286;
this.G__22276 = G__22276;
this.ufv__ = ufv__;
this.input_schema22273 = input_schema22273;
this.map__22288 = map__22288;
this.output_checker22275 = output_checker22275;
this.meta22290 = meta22290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tumblrsearch.components.main.t22289.cljs$lang$type = true;
tumblrsearch.components.main.t22289.cljs$lang$ctorStr = "tumblrsearch.components.main/t22289";
tumblrsearch.components.main.t22289.cljs$lang$ctorPrWriter = ((function (map__22288,map__22288__$1,col_n__$1,current_items__$1,owner__$2,G__22286,map__22287,map__22287__$1,col_n,current_items,owner,validate__15079__auto__,ufv___22292,output_schema22272_22293,input_schema22273_22294,input_checker22274_22295,output_checker22275_22296){
return (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"tumblrsearch.components.main/t22289");
});})(map__22288,map__22288__$1,col_n__$1,current_items__$1,owner__$2,G__22286,map__22287,map__22287__$1,col_n,current_items,owner,validate__15079__auto__,ufv___22292,output_schema22272_22293,input_schema22273_22294,input_checker22274_22295,output_checker22275_22296))
;
tumblrsearch.components.main.t22289.prototype.om$core$IRender$ = true;
tumblrsearch.components.main.t22289.prototype.om$core$IRender$render$arity$1 = ((function (map__22288,map__22288__$1,col_n__$1,current_items__$1,owner__$2,G__22286,map__22287,map__22287__$1,col_n,current_items,owner,validate__15079__auto__,ufv___22292,output_schema22272_22293,input_schema22273_22294,input_checker22274_22295,output_checker22275_22296){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": {"width": om_tools.dom.format_opts.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.col_n * om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"image-width","image-width",737630851))))+"px"))}, "className": "images"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.call(null,tumblrsearch.components.main.item_view,tumblrsearch.components.main.build_offset_grid.call(null,self__.current_items,self__.col_n,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"image-width","image-width",737630851))))],null))));
});})(map__22288,map__22288__$1,col_n__$1,current_items__$1,owner__$2,G__22286,map__22287,map__22287__$1,col_n,current_items,owner,validate__15079__auto__,ufv___22292,output_schema22272_22293,input_schema22273_22294,input_checker22274_22295,output_checker22275_22296))
;
tumblrsearch.components.main.t22289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22288,map__22288__$1,col_n__$1,current_items__$1,owner__$2,G__22286,map__22287,map__22287__$1,col_n,current_items,owner,validate__15079__auto__,ufv___22292,output_schema22272_22293,input_schema22273_22294,input_checker22274_22295,output_checker22275_22296){
return (function (_22291){var self__ = this;
var _22291__$1 = this;return self__.meta22290;
});})(map__22288,map__22288__$1,col_n__$1,current_items__$1,owner__$2,G__22286,map__22287,map__22287__$1,col_n,current_items,owner,validate__15079__auto__,ufv___22292,output_schema22272_22293,input_schema22273_22294,input_checker22274_22295,output_checker22275_22296))
;
tumblrsearch.components.main.t22289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22288,map__22288__$1,col_n__$1,current_items__$1,owner__$2,G__22286,map__22287,map__22287__$1,col_n,current_items,owner,validate__15079__auto__,ufv___22292,output_schema22272_22293,input_schema22273_22294,input_checker22274_22295,output_checker22275_22296){
return (function (_22291,meta22290__$1){var self__ = this;
var _22291__$1 = this;return (new tumblrsearch.components.main.t22289(self__.input_checker22274,self__.owner,self__.validate__15079__auto__,self__.current_items,self__.col_n,self__.G__22277,self__.component,self__.output_schema22272,self__.map__22287,self__.G__22286,self__.G__22276,self__.ufv__,self__.input_schema22273,self__.map__22288,self__.output_checker22275,meta22290__$1));
});})(map__22288,map__22288__$1,col_n__$1,current_items__$1,owner__$2,G__22286,map__22287,map__22287__$1,col_n,current_items,owner,validate__15079__auto__,ufv___22292,output_schema22272_22293,input_schema22273_22294,input_checker22274_22295,output_checker22275_22296))
;
tumblrsearch.components.main.__GT_t22289 = ((function (map__22288,map__22288__$1,col_n__$1,current_items__$1,owner__$2,G__22286,map__22287,map__22287__$1,col_n,current_items,owner,validate__15079__auto__,ufv___22292,output_schema22272_22293,input_schema22273_22294,input_checker22274_22295,output_checker22275_22296){
return (function __GT_t22289(input_checker22274__$1,owner__$3,validate__15079__auto____$1,current_items__$2,col_n__$2,G__22277__$1,component__$1,output_schema22272__$1,map__22287__$2,G__22286__$2,G__22276__$1,ufv____$1,input_schema22273__$1,map__22288__$2,output_checker22275__$1,meta22290){return (new tumblrsearch.components.main.t22289(input_checker22274__$1,owner__$3,validate__15079__auto____$1,current_items__$2,col_n__$2,G__22277__$1,component__$1,output_schema22272__$1,map__22287__$2,G__22286__$2,G__22276__$1,ufv____$1,input_schema22273__$1,map__22288__$2,output_checker22275__$1,meta22290));
});})(map__22288,map__22288__$1,col_n__$1,current_items__$1,owner__$2,G__22286,map__22287,map__22287__$1,col_n,current_items,owner,validate__15079__auto__,ufv___22292,output_schema22272_22293,input_schema22273_22294,input_checker22274_22295,output_checker22275_22296))
;
}
return (new tumblrsearch.components.main.t22289(input_checker22274_22295,owner__$2,validate__15079__auto__,current_items__$1,col_n__$1,G__22277,component,output_schema22272_22293,map__22287__$1,G__22286__$1,G__22276,ufv___22292,input_schema22273_22294,map__22288__$1,output_checker22275_22296,null));
break;
}
})();if(cljs.core.truth_(validate__15079__auto__))
{var temp__4126__auto___22300 = output_checker22275_22296.call(null,o__15082__auto__);if(cljs.core.truth_(temp__4126__auto___22300))
{var error__15081__auto___22301 = temp__4126__auto___22300;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"component","component",-1098498987,null),cljs.core.pr_str.call(null,error__15081__auto___22301)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22272_22293,new cljs.core.Keyword(null,"value","value",305978217),o__15082__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___22301], null));
} else
{}
} else
{}
return o__15082__auto__;
});})(ufv___22292,output_schema22272_22293,input_schema22273_22294,input_checker22274_22295,output_checker22275_22296))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tumblrsearch.components.main.component),schema.core.make_fn_schema.call(null,output_schema22272_22293,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22273_22294], null)));
tumblrsearch.components.main.__GT_component = (function() {
var __GT_component = null;
var __GT_component__1 = (function (cursor__16847__auto__){return om.core.build.call(null,tumblrsearch.components.main.component,cursor__16847__auto__);
});
var __GT_component__2 = (function (cursor__16847__auto__,m22271){return om.core.build.call(null,tumblrsearch.components.main.component,cursor__16847__auto__,m22271);
});
__GT_component = function(cursor__16847__auto__,m22271){
switch(arguments.length){
case 1:
return __GT_component__1.call(this,cursor__16847__auto__);
case 2:
return __GT_component__2.call(this,cursor__16847__auto__,m22271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_component.cljs$core$IFn$_invoke$arity$1 = __GT_component__1;
__GT_component.cljs$core$IFn$_invoke$arity$2 = __GT_component__2;
return __GT_component;
})()
;

//# sourceMappingURL=main.js.map