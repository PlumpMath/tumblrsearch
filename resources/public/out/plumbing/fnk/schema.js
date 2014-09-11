// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__15109__15110__auto__){var G__23091 = p1__15109__15110__auto__;if(G__23091)
{var bit__12029__auto__ = null;if(cljs.core.truth_((function (){var or__11379__auto__ = bit__12029__auto__;if(cljs.core.truth_(or__11379__auto__))
{return or__11379__auto__;
} else
{return G__23091.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__23091.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__23091);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__23091);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__23092_SHARP_){return (cljs.core.val.call(null,p1__23092_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__23094 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__23094,(0),null);var v = cljs.core.nth.call(null,vec__23094,(1),null);var p = vec__23094;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___23100 = schema.utils.use_fn_validation;var output_schema23095_23101 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema23096_23102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker23097_23103 = schema.core.checker.call(null,input_schema23096_23102);var output_checker23098_23104 = schema.core.checker.call(null,output_schema23095_23101);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___23100,output_schema23095_23101,input_schema23096_23102,input_checker23097_23103,output_checker23098_23104){
return (function unwrap_schema_form_key(G__23099){var validate__15079__auto__ = ufv___23100.get_cell();if(cljs.core.truth_(validate__15079__auto__))
{var args__15080__auto___23105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23099], null);var temp__4126__auto___23106 = input_checker23097_23103.call(null,args__15080__auto___23105);if(cljs.core.truth_(temp__4126__auto___23106))
{var error__15081__auto___23107 = temp__4126__auto___23106;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__15081__auto___23107)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23096_23102,new cljs.core.Keyword(null,"value","value",305978217),args__15080__auto___23105,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23107], null));
} else
{}
} else
{}
var o__15082__auto__ = (function (){var k = G__23099;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__15079__auto__))
{var temp__4126__auto___23108 = output_checker23098_23104.call(null,o__15082__auto__);if(cljs.core.truth_(temp__4126__auto___23108))
{var error__15081__auto___23109 = temp__4126__auto___23108;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__15081__auto___23109)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23095_23101,new cljs.core.Keyword(null,"value","value",305978217),o__15082__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23109], null));
} else
{}
} else
{}
return o__15082__auto__;
});})(ufv___23100,output_schema23095_23101,input_schema23096_23102,input_checker23097_23103,output_checker23098_23104))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema23095_23101,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23096_23102], null)));
var ufv___23115 = schema.utils.use_fn_validation;var output_schema23110_23116 = schema.core.Any;var input_schema23111_23117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker23112_23118 = schema.core.checker.call(null,input_schema23111_23117);var output_checker23113_23119 = schema.core.checker.call(null,output_schema23110_23116);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___23115,output_schema23110_23116,input_schema23111_23117,input_checker23112_23118,output_checker23113_23119){
return (function explicit_schema_key_map(G__23114){var validate__15079__auto__ = ufv___23115.get_cell();if(cljs.core.truth_(validate__15079__auto__))
{var args__15080__auto___23120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23114], null);var temp__4126__auto___23121 = input_checker23112_23118.call(null,args__15080__auto___23120);if(cljs.core.truth_(temp__4126__auto___23121))
{var error__15081__auto___23122 = temp__4126__auto___23121;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__15081__auto___23122)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23111_23117,new cljs.core.Keyword(null,"value","value",305978217),args__15080__auto___23120,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23122], null));
} else
{}
} else
{}
var o__15082__auto__ = (function (){var s = G__23114;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__15079__auto__))
{var temp__4126__auto___23123 = output_checker23113_23119.call(null,o__15082__auto__);if(cljs.core.truth_(temp__4126__auto___23123))
{var error__15081__auto___23124 = temp__4126__auto___23123;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__15081__auto___23124)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23110_23116,new cljs.core.Keyword(null,"value","value",305978217),o__15082__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23124], null));
} else
{}
} else
{}
return o__15082__auto__;
});})(ufv___23115,output_schema23110_23116,input_schema23111_23117,input_checker23112_23118,output_checker23113_23119))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema23110_23116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23111_23117], null)));
var ufv___23130 = schema.utils.use_fn_validation;var output_schema23125_23131 = schema.core.Any;var input_schema23126_23132 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker23127_23133 = schema.core.checker.call(null,input_schema23126_23132);var output_checker23128_23134 = schema.core.checker.call(null,output_schema23125_23131);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___23130,output_schema23125_23131,input_schema23126_23132,input_checker23127_23133,output_checker23128_23134){
return (function split_schema_keys(G__23129){var validate__15079__auto__ = ufv___23130.get_cell();if(cljs.core.truth_(validate__15079__auto__))
{var args__15080__auto___23135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23129], null);var temp__4126__auto___23136 = input_checker23127_23133.call(null,args__15080__auto___23135);if(cljs.core.truth_(temp__4126__auto___23136))
{var error__15081__auto___23137 = temp__4126__auto___23136;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__15081__auto___23137)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23126_23132,new cljs.core.Keyword(null,"value","value",305978217),args__15080__auto___23135,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23137], null));
} else
{}
} else
{}
var o__15082__auto__ = (function (){var s = G__23129;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__15079__auto__))
{var temp__4126__auto___23138 = output_checker23128_23134.call(null,o__15082__auto__);if(cljs.core.truth_(temp__4126__auto___23138))
{var error__15081__auto___23139 = temp__4126__auto___23138;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__15081__auto___23139)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23125_23131,new cljs.core.Keyword(null,"value","value",305978217),o__15082__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23139], null));
} else
{}
} else
{}
return o__15082__auto__;
});})(ufv___23130,output_schema23125_23131,input_schema23126_23132,input_checker23127_23133,output_checker23128_23134))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema23125_23131,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23126_23132], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__23143){var vec__23144 = p__23143;var k = cljs.core.nth.call(null,vec__23144,(0),null);var v = cljs.core.nth.call(null,vec__23144,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__23145 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__23145,(0),null);var ov = cljs.core.nth.call(null,vec__23145,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__23146){
var key_project = cljs.core.first(arglist__23146);
arglist__23146 = cljs.core.next(arglist__23146);
var key_combine = cljs.core.first(arglist__23146);
arglist__23146 = cljs.core.next(arglist__23146);
var val_combine = cljs.core.first(arglist__23146);
var maps = cljs.core.rest(arglist__23146);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___23154 = schema.utils.use_fn_validation;var output_schema23148_23155 = plumbing.fnk.schema.InputSchema;var input_schema23149_23156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker23150_23157 = schema.core.checker.call(null,input_schema23149_23156);var output_checker23151_23158 = schema.core.checker.call(null,output_schema23148_23155);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___23154,output_schema23148_23155,input_schema23149_23156,input_checker23150_23157,output_checker23151_23158){
return (function union_input_schemata(G__23152,G__23153){var validate__15079__auto__ = ufv___23154.get_cell();if(cljs.core.truth_(validate__15079__auto__))
{var args__15080__auto___23159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23152,G__23153], null);var temp__4126__auto___23160 = input_checker23150_23157.call(null,args__15080__auto___23159);if(cljs.core.truth_(temp__4126__auto___23160))
{var error__15081__auto___23161 = temp__4126__auto___23160;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__15081__auto___23161)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23149_23156,new cljs.core.Keyword(null,"value","value",305978217),args__15080__auto___23159,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23161], null));
} else
{}
} else
{}
var o__15082__auto__ = (function (){var i1 = G__23152;var i2 = G__23153;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__15079__auto__,ufv___23154,output_schema23148_23155,input_schema23149_23156,input_checker23150_23157,output_checker23151_23158){
return (function (p1__23147_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__23147_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__23147_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__15079__auto__,ufv___23154,output_schema23148_23155,input_schema23149_23156,input_checker23150_23157,output_checker23151_23158))
,((function (validate__15079__auto__,ufv___23154,output_schema23148_23155,input_schema23149_23156,input_checker23150_23157,output_checker23151_23158){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__15079__auto__,ufv___23154,output_schema23148_23155,input_schema23149_23156,input_checker23150_23157,output_checker23151_23158))
,((function (validate__15079__auto__,ufv___23154,output_schema23148_23155,input_schema23149_23156,input_checker23150_23157,output_checker23151_23158){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__15079__auto__,ufv___23154,output_schema23148_23155,input_schema23149_23156,input_checker23150_23157,output_checker23151_23158))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__15079__auto__))
{var temp__4126__auto___23162 = output_checker23151_23158.call(null,o__15082__auto__);if(cljs.core.truth_(temp__4126__auto___23162))
{var error__15081__auto___23163 = temp__4126__auto___23162;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__15081__auto___23163)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23148_23155,new cljs.core.Keyword(null,"value","value",305978217),o__15082__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23163], null));
} else
{}
} else
{}
return o__15082__auto__;
});})(ufv___23154,output_schema23148_23155,input_schema23149_23156,input_checker23150_23157,output_checker23151_23158))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema23148_23155,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23149_23156], null)));
var ufv___23169 = schema.utils.use_fn_validation;var output_schema23164_23170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema23165_23171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker23166_23172 = schema.core.checker.call(null,input_schema23165_23171);var output_checker23167_23173 = schema.core.checker.call(null,output_schema23164_23170);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___23169,output_schema23164_23170,input_schema23165_23171,input_checker23166_23172,output_checker23167_23173){
return (function required_toplevel_keys(G__23168){var validate__15079__auto__ = ufv___23169.get_cell();if(cljs.core.truth_(validate__15079__auto__))
{var args__15080__auto___23174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23168], null);var temp__4126__auto___23175 = input_checker23166_23172.call(null,args__15080__auto___23174);if(cljs.core.truth_(temp__4126__auto___23175))
{var error__15081__auto___23176 = temp__4126__auto___23175;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__15081__auto___23176)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23165_23171,new cljs.core.Keyword(null,"value","value",305978217),args__15080__auto___23174,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23176], null));
} else
{}
} else
{}
var o__15082__auto__ = (function (){var input_schema = G__23168;while(true){
return cljs.core.keep.call(null,((function (validate__15079__auto__,ufv___23169,output_schema23164_23170,input_schema23165_23171,input_checker23166_23172,output_checker23167_23173){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__15079__auto__,ufv___23169,output_schema23164_23170,input_schema23165_23171,input_checker23166_23172,output_checker23167_23173))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__15079__auto__))
{var temp__4126__auto___23177 = output_checker23167_23173.call(null,o__15082__auto__);if(cljs.core.truth_(temp__4126__auto___23177))
{var error__15081__auto___23178 = temp__4126__auto___23177;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__15081__auto___23178)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23164_23170,new cljs.core.Keyword(null,"value","value",305978217),o__15082__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23178], null));
} else
{}
} else
{}
return o__15082__auto__;
});})(ufv___23169,output_schema23164_23170,input_schema23165_23171,input_checker23166_23172,output_checker23167_23173))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema23164_23170,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23165_23171], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12104__auto__ = (function iter__23187(s__23188){return (new cljs.core.LazySeq(null,(function (){var s__23188__$1 = s__23188;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23188__$1);if(temp__4126__auto__)
{var s__23188__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23188__$2))
{var c__12102__auto__ = cljs.core.chunk_first.call(null,s__23188__$2);var size__12103__auto__ = cljs.core.count.call(null,c__12102__auto__);var b__23190 = cljs.core.chunk_buffer.call(null,size__12103__auto__);if((function (){var i__23189 = (0);while(true){
if((i__23189 < size__12103__auto__))
{var vec__23193 = cljs.core._nth.call(null,c__12102__auto__,i__23189);var k = cljs.core.nth.call(null,vec__23193,(0),null);var v = cljs.core.nth.call(null,vec__23193,(1),null);cljs.core.chunk_append.call(null,b__23190,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__23195 = (i__23189 + (1));
i__23189 = G__23195;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23190),iter__23187.call(null,cljs.core.chunk_rest.call(null,s__23188__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23190),null);
}
} else
{var vec__23194 = cljs.core.first.call(null,s__23188__$2);var k = cljs.core.nth.call(null,vec__23194,(0),null);var v = cljs.core.nth.call(null,vec__23194,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__23187.call(null,cljs.core.rest.call(null,s__23188__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12104__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12104__auto__ = (function iter__23204(s__23205){return (new cljs.core.LazySeq(null,(function (){var s__23205__$1 = s__23205;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23205__$1);if(temp__4126__auto__)
{var s__23205__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23205__$2))
{var c__12102__auto__ = cljs.core.chunk_first.call(null,s__23205__$2);var size__12103__auto__ = cljs.core.count.call(null,c__12102__auto__);var b__23207 = cljs.core.chunk_buffer.call(null,size__12103__auto__);if((function (){var i__23206 = (0);while(true){
if((i__23206 < size__12103__auto__))
{var vec__23210 = cljs.core._nth.call(null,c__12102__auto__,i__23206);var k = cljs.core.nth.call(null,vec__23210,(0),null);var v = cljs.core.nth.call(null,vec__23210,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__23207,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__23212 = (i__23206 + (1));
i__23206 = G__23212;
continue;
}
} else
{{
var G__23213 = (i__23206 + (1));
i__23206 = G__23213;
continue;
}
}
} else
{{
var G__23214 = (i__23206 + (1));
i__23206 = G__23214;
continue;
}
}
} else
{{
var G__23215 = (i__23206 + (1));
i__23206 = G__23215;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23207),iter__23204.call(null,cljs.core.chunk_rest.call(null,s__23205__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23207),null);
}
} else
{var vec__23211 = cljs.core.first.call(null,s__23205__$2);var k = cljs.core.nth.call(null,vec__23211,(0),null);var v = cljs.core.nth.call(null,vec__23211,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__23204.call(null,cljs.core.rest.call(null,s__23205__$2)));
} else
{{
var G__23216 = cljs.core.rest.call(null,s__23205__$2);
s__23205__$1 = G__23216;
continue;
}
}
} else
{{
var G__23217 = cljs.core.rest.call(null,s__23205__$2);
s__23205__$1 = G__23217;
continue;
}
}
} else
{{
var G__23218 = cljs.core.rest.call(null,s__23205__$2);
s__23205__$1 = G__23218;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12104__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___23241 = schema.utils.use_fn_validation;var output_schema23219_23242 = schema.core.Any;var input_schema23220_23243 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker23221_23244 = schema.core.checker.call(null,input_schema23220_23243);var output_checker23222_23245 = schema.core.checker.call(null,output_schema23219_23242);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___23241,output_schema23219_23242,input_schema23220_23243,input_checker23221_23244,output_checker23222_23245){
return (function compose_schemata(G__23223,G__23224){var validate__15079__auto__ = true;if(validate__15079__auto__)
{var args__15080__auto___23246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23223,G__23224], null);var temp__4126__auto___23247 = input_checker23221_23244.call(null,args__15080__auto___23246);if(cljs.core.truth_(temp__4126__auto___23247))
{var error__15081__auto___23248 = temp__4126__auto___23247;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__15081__auto___23248)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23220_23243,new cljs.core.Keyword(null,"value","value",305978217),args__15080__auto___23246,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23248], null));
} else
{}
} else
{}
var o__15082__auto__ = (function (){var G__23235 = G__23223;var vec__23237 = G__23235;var i2 = cljs.core.nth.call(null,vec__23237,(0),null);var o2 = cljs.core.nth.call(null,vec__23237,(1),null);var G__23236 = G__23224;var vec__23238 = G__23236;var i1 = cljs.core.nth.call(null,vec__23238,(0),null);var o1 = cljs.core.nth.call(null,vec__23238,(1),null);var G__23235__$1 = G__23235;var G__23236__$1 = G__23236;while(true){
var vec__23239 = G__23235__$1;var i2__$1 = cljs.core.nth.call(null,vec__23239,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__23239,(1),null);var vec__23240 = G__23236__$1;var i1__$1 = cljs.core.nth.call(null,vec__23240,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__23240,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__15079__auto__)
{var temp__4126__auto___23249 = output_checker23222_23245.call(null,o__15082__auto__);if(cljs.core.truth_(temp__4126__auto___23249))
{var error__15081__auto___23250 = temp__4126__auto___23249;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__15081__auto___23250)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23219_23242,new cljs.core.Keyword(null,"value","value",305978217),o__15082__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23250], null));
} else
{}
} else
{}
return o__15082__auto__;
});})(ufv___23241,output_schema23219_23242,input_schema23220_23243,input_checker23221_23244,output_checker23222_23245))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema23219_23242,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23220_23243], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___23329 = schema.utils.use_fn_validation;var output_schema23251_23330 = schema.core.Any;var input_schema23252_23331 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker23253_23332 = schema.core.checker.call(null,input_schema23252_23331);var output_checker23254_23333 = schema.core.checker.call(null,output_schema23251_23330);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333){
return (function split_schema(G__23255,G__23256){var validate__15079__auto__ = ufv___23329.get_cell();if(cljs.core.truth_(validate__15079__auto__))
{var args__15080__auto___23334 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23255,G__23256], null);var temp__4126__auto___23335 = input_checker23253_23332.call(null,args__15080__auto___23334);if(cljs.core.truth_(temp__4126__auto___23335))
{var error__15081__auto___23336 = temp__4126__auto___23335;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__15081__auto___23336)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23252_23331,new cljs.core.Keyword(null,"value","value",305978217),args__15080__auto___23334,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23336], null));
} else
{}
} else
{}
var o__15082__auto__ = (function (){var s = G__23255;var ks = G__23256;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__12104__auto__ = ((function (ks__$1,validate__15079__auto__,ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333){
return (function iter__23293(s__23294){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__15079__auto__,ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333){
return (function (){var s__23294__$1 = s__23294;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23294__$1);if(temp__4126__auto__)
{var s__23294__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23294__$2))
{var c__12102__auto__ = cljs.core.chunk_first.call(null,s__23294__$2);var size__12103__auto__ = cljs.core.count.call(null,c__12102__auto__);var b__23296 = cljs.core.chunk_buffer.call(null,size__12103__auto__);if((function (){var i__23295 = (0);while(true){
if((i__23295 < size__12103__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__12102__auto__,i__23295);cljs.core.chunk_append.call(null,b__23296,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12104__auto__ = ((function (i__23295,in_QMARK_,c__12102__auto__,size__12103__auto__,b__23296,s__23294__$2,temp__4126__auto__,ks__$1,validate__15079__auto__,ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333){
return (function iter__23313(s__23314){return (new cljs.core.LazySeq(null,((function (i__23295,in_QMARK_,c__12102__auto__,size__12103__auto__,b__23296,s__23294__$2,temp__4126__auto__,ks__$1,validate__15079__auto__,ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333){
return (function (){var s__23314__$1 = s__23314;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23314__$1);if(temp__4126__auto____$1)
{var s__23314__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23314__$2))
{var c__12102__auto____$1 = cljs.core.chunk_first.call(null,s__23314__$2);var size__12103__auto____$1 = cljs.core.count.call(null,c__12102__auto____$1);var b__23316 = cljs.core.chunk_buffer.call(null,size__12103__auto____$1);if((function (){var i__23315 = (0);while(true){
if((i__23315 < size__12103__auto____$1))
{var vec__23319 = cljs.core._nth.call(null,c__12102__auto____$1,i__23315);var k = cljs.core.nth.call(null,vec__23319,(0),null);var v = cljs.core.nth.call(null,vec__23319,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__23316,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23337 = (i__23315 + (1));
i__23315 = G__23337;
continue;
}
} else
{{
var G__23338 = (i__23315 + (1));
i__23315 = G__23338;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23316),iter__23313.call(null,cljs.core.chunk_rest.call(null,s__23314__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23316),null);
}
} else
{var vec__23320 = cljs.core.first.call(null,s__23314__$2);var k = cljs.core.nth.call(null,vec__23320,(0),null);var v = cljs.core.nth.call(null,vec__23320,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23313.call(null,cljs.core.rest.call(null,s__23314__$2)));
} else
{{
var G__23339 = cljs.core.rest.call(null,s__23314__$2);
s__23314__$1 = G__23339;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__23295,in_QMARK_,c__12102__auto__,size__12103__auto__,b__23296,s__23294__$2,temp__4126__auto__,ks__$1,validate__15079__auto__,ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333))
,null,null));
});})(i__23295,in_QMARK_,c__12102__auto__,size__12103__auto__,b__23296,s__23294__$2,temp__4126__auto__,ks__$1,validate__15079__auto__,ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333))
;return iter__12104__auto__.call(null,s);
})()));
{
var G__23340 = (i__23295 + (1));
i__23295 = G__23340;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23296),iter__23293.call(null,cljs.core.chunk_rest.call(null,s__23294__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23296),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__23294__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12104__auto__ = ((function (in_QMARK_,s__23294__$2,temp__4126__auto__,ks__$1,validate__15079__auto__,ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333){
return (function iter__23321(s__23322){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__23294__$2,temp__4126__auto__,ks__$1,validate__15079__auto__,ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333){
return (function (){var s__23322__$1 = s__23322;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23322__$1);if(temp__4126__auto____$1)
{var s__23322__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__23322__$2))
{var c__12102__auto__ = cljs.core.chunk_first.call(null,s__23322__$2);var size__12103__auto__ = cljs.core.count.call(null,c__12102__auto__);var b__23324 = cljs.core.chunk_buffer.call(null,size__12103__auto__);if((function (){var i__23323 = (0);while(true){
if((i__23323 < size__12103__auto__))
{var vec__23327 = cljs.core._nth.call(null,c__12102__auto__,i__23323);var k = cljs.core.nth.call(null,vec__23327,(0),null);var v = cljs.core.nth.call(null,vec__23327,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__23324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23341 = (i__23323 + (1));
i__23323 = G__23341;
continue;
}
} else
{{
var G__23342 = (i__23323 + (1));
i__23323 = G__23342;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23324),iter__23321.call(null,cljs.core.chunk_rest.call(null,s__23322__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23324),null);
}
} else
{var vec__23328 = cljs.core.first.call(null,s__23322__$2);var k = cljs.core.nth.call(null,vec__23328,(0),null);var v = cljs.core.nth.call(null,vec__23328,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23321.call(null,cljs.core.rest.call(null,s__23322__$2)));
} else
{{
var G__23343 = cljs.core.rest.call(null,s__23322__$2);
s__23322__$1 = G__23343;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__23294__$2,temp__4126__auto__,ks__$1,validate__15079__auto__,ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333))
,null,null));
});})(in_QMARK_,s__23294__$2,temp__4126__auto__,ks__$1,validate__15079__auto__,ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333))
;return iter__12104__auto__.call(null,s);
})()),iter__23293.call(null,cljs.core.rest.call(null,s__23294__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__15079__auto__,ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333))
,null,null));
});})(ks__$1,validate__15079__auto__,ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333))
;return iter__12104__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__15079__auto__))
{var temp__4126__auto___23344 = output_checker23254_23333.call(null,o__15082__auto__);if(cljs.core.truth_(temp__4126__auto___23344))
{var error__15081__auto___23345 = temp__4126__auto___23344;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__15081__auto___23345)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23251_23330,new cljs.core.Keyword(null,"value","value",305978217),o__15082__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23345], null));
} else
{}
} else
{}
return o__15082__auto__;
});})(ufv___23329,output_schema23251_23330,input_schema23252_23331,input_checker23253_23332,output_checker23254_23333))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema23251_23330,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23252_23331], null)));
var ufv___23376 = schema.utils.use_fn_validation;var output_schema23346_23377 = plumbing.fnk.schema.GraphIOSchemata;var input_schema23347_23378 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker23348_23379 = schema.core.checker.call(null,input_schema23347_23378);var output_checker23349_23380 = schema.core.checker.call(null,output_schema23346_23377);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___23376,output_schema23346_23377,input_schema23347_23378,input_checker23348_23379,output_checker23349_23380){
return (function sequence_schemata(G__23350,G__23351){var validate__15079__auto__ = ufv___23376.get_cell();if(cljs.core.truth_(validate__15079__auto__))
{var args__15080__auto___23381 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23350,G__23351], null);var temp__4126__auto___23382 = input_checker23348_23379.call(null,args__15080__auto___23381);if(cljs.core.truth_(temp__4126__auto___23382))
{var error__15081__auto___23383 = temp__4126__auto___23382;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__15081__auto___23383)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23347_23378,new cljs.core.Keyword(null,"value","value",305978217),args__15080__auto___23381,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23383], null));
} else
{}
} else
{}
var o__15082__auto__ = (function (){var G__23367 = G__23350;var vec__23369 = G__23367;var i1 = cljs.core.nth.call(null,vec__23369,(0),null);var o1 = cljs.core.nth.call(null,vec__23369,(1),null);var G__23368 = G__23351;var vec__23370 = G__23368;var k = cljs.core.nth.call(null,vec__23370,(0),null);var vec__23371 = cljs.core.nth.call(null,vec__23370,(1),null);var i2 = cljs.core.nth.call(null,vec__23371,(0),null);var o2 = cljs.core.nth.call(null,vec__23371,(1),null);var G__23367__$1 = G__23367;var G__23368__$1 = G__23368;while(true){
var vec__23372 = G__23367__$1;var i1__$1 = cljs.core.nth.call(null,vec__23372,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__23372,(1),null);var vec__23373 = G__23368__$1;var k__$1 = cljs.core.nth.call(null,vec__23373,(0),null);var vec__23374 = cljs.core.nth.call(null,vec__23373,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__23374,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__23374,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__23375 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__23375,(0),null);var unused = cljs.core.nth.call(null,vec__23375,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__15079__auto__))
{var temp__4126__auto___23384 = output_checker23349_23380.call(null,o__15082__auto__);if(cljs.core.truth_(temp__4126__auto___23384))
{var error__15081__auto___23385 = temp__4126__auto___23384;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__15081__auto___23385)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23346_23377,new cljs.core.Keyword(null,"value","value",305978217),o__15082__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__15081__auto___23385], null));
} else
{}
} else
{}
return o__15082__auto__;
});})(ufv___23376,output_schema23346_23377,input_schema23347_23378,input_checker23348_23379,output_checker23349_23380))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema23346_23377,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23347_23378], null)));

//# sourceMappingURL=schema.js.map