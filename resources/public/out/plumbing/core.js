// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__23663__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__23663 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__23663__delegate.call(this,m,k,f,x1,x2,xs);};
G__23663.cljs$lang$maxFixedArity = 5;
G__23663.cljs$lang$applyTo = (function (arglist__23664){
var m = cljs.core.first(arglist__23664);
arglist__23664 = cljs.core.next(arglist__23664);
var k = cljs.core.first(arglist__23664);
arglist__23664 = cljs.core.next(arglist__23664);
var f = cljs.core.first(arglist__23664);
arglist__23664 = cljs.core.next(arglist__23664);
var x1 = cljs.core.first(arglist__23664);
arglist__23664 = cljs.core.next(arglist__23664);
var x2 = cljs.core.first(arglist__23664);
var xs = cljs.core.rest(arglist__23664);
return G__23663__delegate(m,k,f,x1,x2,xs);
});
G__23663.cljs$core$IFn$_invoke$arity$variadic = G__23663__delegate;
return G__23663;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__16580__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23673_23679 = cljs.core.seq.call(null,m);var chunk__23674_23680 = null;var count__23675_23681 = (0);var i__23676_23682 = (0);while(true){
if((i__23676_23682 < count__23675_23681))
{var vec__23677_23683 = cljs.core._nth.call(null,chunk__23674_23680,i__23676_23682);var k_23684 = cljs.core.nth.call(null,vec__23677_23683,(0),null);var v_23685 = cljs.core.nth.call(null,vec__23677_23683,(1),null);var m23672_23686 = cljs.core.deref.call(null,m_atom__16580__auto__);cljs.core.reset_BANG_.call(null,m_atom__16580__auto__,cljs.core.assoc_BANG_.call(null,m23672_23686,k_23684,f.call(null,v_23685)));
{
var G__23687 = seq__23673_23679;
var G__23688 = chunk__23674_23680;
var G__23689 = count__23675_23681;
var G__23690 = (i__23676_23682 + (1));
seq__23673_23679 = G__23687;
chunk__23674_23680 = G__23688;
count__23675_23681 = G__23689;
i__23676_23682 = G__23690;
continue;
}
} else
{var temp__4126__auto___23691 = cljs.core.seq.call(null,seq__23673_23679);if(temp__4126__auto___23691)
{var seq__23673_23692__$1 = temp__4126__auto___23691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23673_23692__$1))
{var c__12135__auto___23693 = cljs.core.chunk_first.call(null,seq__23673_23692__$1);{
var G__23694 = cljs.core.chunk_rest.call(null,seq__23673_23692__$1);
var G__23695 = c__12135__auto___23693;
var G__23696 = cljs.core.count.call(null,c__12135__auto___23693);
var G__23697 = (0);
seq__23673_23679 = G__23694;
chunk__23674_23680 = G__23695;
count__23675_23681 = G__23696;
i__23676_23682 = G__23697;
continue;
}
} else
{var vec__23678_23698 = cljs.core.first.call(null,seq__23673_23692__$1);var k_23699 = cljs.core.nth.call(null,vec__23678_23698,(0),null);var v_23700 = cljs.core.nth.call(null,vec__23678_23698,(1),null);var m23672_23701 = cljs.core.deref.call(null,m_atom__16580__auto__);cljs.core.reset_BANG_.call(null,m_atom__16580__auto__,cljs.core.assoc_BANG_.call(null,m23672_23701,k_23699,f.call(null,v_23700)));
{
var G__23702 = cljs.core.next.call(null,seq__23673_23692__$1);
var G__23703 = null;
var G__23704 = (0);
var G__23705 = (0);
seq__23673_23679 = G__23702;
chunk__23674_23680 = G__23703;
count__23675_23681 = G__23704;
i__23676_23682 = G__23705;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16580__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__16580__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23714_23720 = cljs.core.seq.call(null,m);var chunk__23715_23721 = null;var count__23716_23722 = (0);var i__23717_23723 = (0);while(true){
if((i__23717_23723 < count__23716_23722))
{var vec__23718_23724 = cljs.core._nth.call(null,chunk__23715_23721,i__23717_23723);var k_23725 = cljs.core.nth.call(null,vec__23718_23724,(0),null);var v_23726 = cljs.core.nth.call(null,vec__23718_23724,(1),null);var m23713_23727 = cljs.core.deref.call(null,m_atom__16580__auto__);cljs.core.reset_BANG_.call(null,m_atom__16580__auto__,cljs.core.assoc_BANG_.call(null,m23713_23727,f.call(null,k_23725),v_23726));
{
var G__23728 = seq__23714_23720;
var G__23729 = chunk__23715_23721;
var G__23730 = count__23716_23722;
var G__23731 = (i__23717_23723 + (1));
seq__23714_23720 = G__23728;
chunk__23715_23721 = G__23729;
count__23716_23722 = G__23730;
i__23717_23723 = G__23731;
continue;
}
} else
{var temp__4126__auto___23732 = cljs.core.seq.call(null,seq__23714_23720);if(temp__4126__auto___23732)
{var seq__23714_23733__$1 = temp__4126__auto___23732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23714_23733__$1))
{var c__12135__auto___23734 = cljs.core.chunk_first.call(null,seq__23714_23733__$1);{
var G__23735 = cljs.core.chunk_rest.call(null,seq__23714_23733__$1);
var G__23736 = c__12135__auto___23734;
var G__23737 = cljs.core.count.call(null,c__12135__auto___23734);
var G__23738 = (0);
seq__23714_23720 = G__23735;
chunk__23715_23721 = G__23736;
count__23716_23722 = G__23737;
i__23717_23723 = G__23738;
continue;
}
} else
{var vec__23719_23739 = cljs.core.first.call(null,seq__23714_23733__$1);var k_23740 = cljs.core.nth.call(null,vec__23719_23739,(0),null);var v_23741 = cljs.core.nth.call(null,vec__23719_23739,(1),null);var m23713_23742 = cljs.core.deref.call(null,m_atom__16580__auto__);cljs.core.reset_BANG_.call(null,m_atom__16580__auto__,cljs.core.assoc_BANG_.call(null,m23713_23742,f.call(null,k_23740),v_23741));
{
var G__23743 = cljs.core.next.call(null,seq__23714_23733__$1);
var G__23744 = null;
var G__23745 = (0);
var G__23746 = (0);
seq__23714_23720 = G__23743;
chunk__23715_23721 = G__23744;
count__23716_23722 = G__23745;
i__23717_23723 = G__23746;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16580__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__16580__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23753_23757 = cljs.core.seq.call(null,ks);var chunk__23754_23758 = null;var count__23755_23759 = (0);var i__23756_23760 = (0);while(true){
if((i__23756_23760 < count__23755_23759))
{var k_23761 = cljs.core._nth.call(null,chunk__23754_23758,i__23756_23760);var m23752_23762 = cljs.core.deref.call(null,m_atom__16580__auto__);cljs.core.reset_BANG_.call(null,m_atom__16580__auto__,cljs.core.assoc_BANG_.call(null,m23752_23762,k_23761,f.call(null,k_23761)));
{
var G__23763 = seq__23753_23757;
var G__23764 = chunk__23754_23758;
var G__23765 = count__23755_23759;
var G__23766 = (i__23756_23760 + (1));
seq__23753_23757 = G__23763;
chunk__23754_23758 = G__23764;
count__23755_23759 = G__23765;
i__23756_23760 = G__23766;
continue;
}
} else
{var temp__4126__auto___23767 = cljs.core.seq.call(null,seq__23753_23757);if(temp__4126__auto___23767)
{var seq__23753_23768__$1 = temp__4126__auto___23767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23753_23768__$1))
{var c__12135__auto___23769 = cljs.core.chunk_first.call(null,seq__23753_23768__$1);{
var G__23770 = cljs.core.chunk_rest.call(null,seq__23753_23768__$1);
var G__23771 = c__12135__auto___23769;
var G__23772 = cljs.core.count.call(null,c__12135__auto___23769);
var G__23773 = (0);
seq__23753_23757 = G__23770;
chunk__23754_23758 = G__23771;
count__23755_23759 = G__23772;
i__23756_23760 = G__23773;
continue;
}
} else
{var k_23774 = cljs.core.first.call(null,seq__23753_23768__$1);var m23752_23775 = cljs.core.deref.call(null,m_atom__16580__auto__);cljs.core.reset_BANG_.call(null,m_atom__16580__auto__,cljs.core.assoc_BANG_.call(null,m23752_23775,k_23774,f.call(null,k_23774)));
{
var G__23776 = cljs.core.next.call(null,seq__23753_23768__$1);
var G__23777 = null;
var G__23778 = (0);
var G__23779 = (0);
seq__23753_23757 = G__23776;
chunk__23754_23758 = G__23777;
count__23755_23759 = G__23778;
i__23756_23760 = G__23779;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16580__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__16580__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23786_23790 = cljs.core.seq.call(null,vs);var chunk__23787_23791 = null;var count__23788_23792 = (0);var i__23789_23793 = (0);while(true){
if((i__23789_23793 < count__23788_23792))
{var v_23794 = cljs.core._nth.call(null,chunk__23787_23791,i__23789_23793);var m23785_23795 = cljs.core.deref.call(null,m_atom__16580__auto__);cljs.core.reset_BANG_.call(null,m_atom__16580__auto__,cljs.core.assoc_BANG_.call(null,m23785_23795,f.call(null,v_23794),v_23794));
{
var G__23796 = seq__23786_23790;
var G__23797 = chunk__23787_23791;
var G__23798 = count__23788_23792;
var G__23799 = (i__23789_23793 + (1));
seq__23786_23790 = G__23796;
chunk__23787_23791 = G__23797;
count__23788_23792 = G__23798;
i__23789_23793 = G__23799;
continue;
}
} else
{var temp__4126__auto___23800 = cljs.core.seq.call(null,seq__23786_23790);if(temp__4126__auto___23800)
{var seq__23786_23801__$1 = temp__4126__auto___23800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23786_23801__$1))
{var c__12135__auto___23802 = cljs.core.chunk_first.call(null,seq__23786_23801__$1);{
var G__23803 = cljs.core.chunk_rest.call(null,seq__23786_23801__$1);
var G__23804 = c__12135__auto___23802;
var G__23805 = cljs.core.count.call(null,c__12135__auto___23802);
var G__23806 = (0);
seq__23786_23790 = G__23803;
chunk__23787_23791 = G__23804;
count__23788_23792 = G__23805;
i__23789_23793 = G__23806;
continue;
}
} else
{var v_23807 = cljs.core.first.call(null,seq__23786_23801__$1);var m23785_23808 = cljs.core.deref.call(null,m_atom__16580__auto__);cljs.core.reset_BANG_.call(null,m_atom__16580__auto__,cljs.core.assoc_BANG_.call(null,m23785_23808,f.call(null,v_23807),v_23807));
{
var G__23809 = cljs.core.next.call(null,seq__23786_23801__$1);
var G__23810 = null;
var G__23811 = (0);
var G__23812 = (0);
seq__23786_23790 = G__23809;
chunk__23787_23791 = G__23810;
count__23788_23792 = G__23811;
i__23789_23793 = G__23812;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16580__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__23813){var vec__23815 = p__23813;var k = cljs.core.nth.call(null,vec__23815,(0),null);var ks = cljs.core.nthnext.call(null,vec__23815,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__11367__auto__ = ks;if(and__11367__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__11367__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__16580__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__23824_23830 = cljs.core.seq.call(null,x);var chunk__23825_23831 = null;var count__23826_23832 = (0);var i__23827_23833 = (0);while(true){
if((i__23827_23833 < count__23826_23832))
{var vec__23828_23834 = cljs.core._nth.call(null,chunk__23825_23831,i__23827_23833);var k_23835 = cljs.core.nth.call(null,vec__23828_23834,(0),null);var v_23836 = cljs.core.nth.call(null,vec__23828_23834,(1),null);var m23823_23837 = cljs.core.deref.call(null,m_atom__16580__auto__);cljs.core.reset_BANG_.call(null,m_atom__16580__auto__,cljs.core.assoc_BANG_.call(null,m23823_23837,((typeof k_23835 === 'string')?cljs.core.keyword.call(null,k_23835):k_23835),keywordize_map.call(null,v_23836)));
{
var G__23838 = seq__23824_23830;
var G__23839 = chunk__23825_23831;
var G__23840 = count__23826_23832;
var G__23841 = (i__23827_23833 + (1));
seq__23824_23830 = G__23838;
chunk__23825_23831 = G__23839;
count__23826_23832 = G__23840;
i__23827_23833 = G__23841;
continue;
}
} else
{var temp__4126__auto___23842 = cljs.core.seq.call(null,seq__23824_23830);if(temp__4126__auto___23842)
{var seq__23824_23843__$1 = temp__4126__auto___23842;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23824_23843__$1))
{var c__12135__auto___23844 = cljs.core.chunk_first.call(null,seq__23824_23843__$1);{
var G__23845 = cljs.core.chunk_rest.call(null,seq__23824_23843__$1);
var G__23846 = c__12135__auto___23844;
var G__23847 = cljs.core.count.call(null,c__12135__auto___23844);
var G__23848 = (0);
seq__23824_23830 = G__23845;
chunk__23825_23831 = G__23846;
count__23826_23832 = G__23847;
i__23827_23833 = G__23848;
continue;
}
} else
{var vec__23829_23849 = cljs.core.first.call(null,seq__23824_23843__$1);var k_23850 = cljs.core.nth.call(null,vec__23829_23849,(0),null);var v_23851 = cljs.core.nth.call(null,vec__23829_23849,(1),null);var m23823_23852 = cljs.core.deref.call(null,m_atom__16580__auto__);cljs.core.reset_BANG_.call(null,m_atom__16580__auto__,cljs.core.assoc_BANG_.call(null,m23823_23852,((typeof k_23850 === 'string')?cljs.core.keyword.call(null,k_23850):k_23850),keywordize_map.call(null,v_23851)));
{
var G__23853 = cljs.core.next.call(null,seq__23824_23843__$1);
var G__23854 = null;
var G__23855 = (0);
var G__23856 = (0);
seq__23824_23830 = G__23853;
chunk__23825_23831 = G__23854;
count__23826_23832 = G__23855;
i__23827_23833 = G__23856;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__16580__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__16649__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__16649__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__23857 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__23858 = cljs.core.next.call(null,ks);
m = G__23857;
ks = G__23858;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__11379__auto__ = m;if(cljs.core.truth_(or__11379__auto__))
{return or__11379__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__12104__auto__ = (function iter__23867(s__23868){return (new cljs.core.LazySeq(null,(function (){var s__23868__$1 = s__23868;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23868__$1);if(temp__4126__auto__)
{var s__23868__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23868__$2))
{var c__12102__auto__ = cljs.core.chunk_first.call(null,s__23868__$2);var size__12103__auto__ = cljs.core.count.call(null,c__12102__auto__);var b__23870 = cljs.core.chunk_buffer.call(null,size__12103__auto__);if((function (){var i__23869 = (0);while(true){
if((i__23869 < size__12103__auto__))
{var vec__23873 = cljs.core._nth.call(null,c__12102__auto__,i__23869);var k = cljs.core.nth.call(null,vec__23873,(0),null);var v = cljs.core.nth.call(null,vec__23873,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__23870,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__23875 = (i__23869 + (1));
i__23869 = G__23875;
continue;
}
} else
{{
var G__23876 = (i__23869 + (1));
i__23869 = G__23876;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23870),iter__23867.call(null,cljs.core.chunk_rest.call(null,s__23868__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23870),null);
}
} else
{var vec__23874 = cljs.core.first.call(null,s__23868__$2);var k = cljs.core.nth.call(null,vec__23874,(0),null);var v = cljs.core.nth.call(null,vec__23874,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23867.call(null,cljs.core.rest.call(null,s__23868__$2)));
} else
{{
var G__23877 = cljs.core.rest.call(null,s__23868__$2);
s__23868__$1 = G__23877;
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
});return iter__12104__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__23878){
var m = cljs.core.first(arglist__23878);
var kvs = cljs.core.rest(arglist__23878);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__23879){
var m = cljs.core.first(arglist__23879);
arglist__23879 = cljs.core.next(arglist__23879);
var key_seq = cljs.core.first(arglist__23879);
arglist__23879 = cljs.core.next(arglist__23879);
var f = cljs.core.first(arglist__23879);
var args = cljs.core.rest(arglist__23879);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__12104__auto__ = ((function (s){
return (function iter__23884(s__23885){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__23885__$1 = s__23885;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23885__$1);if(temp__4126__auto__)
{var s__23885__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23885__$2))
{var c__12102__auto__ = cljs.core.chunk_first.call(null,s__23885__$2);var size__12103__auto__ = cljs.core.count.call(null,c__12102__auto__);var b__23887 = cljs.core.chunk_buffer.call(null,size__12103__auto__);if((function (){var i__23886 = (0);while(true){
if((i__23886 < size__12103__auto__))
{var x = cljs.core._nth.call(null,c__12102__auto__,i__23886);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__23887,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__23888 = (i__23886 + (1));
i__23886 = G__23888;
continue;
}
} else
{{
var G__23889 = (i__23886 + (1));
i__23886 = G__23889;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23887),iter__23884.call(null,cljs.core.chunk_rest.call(null,s__23885__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23887),null);
}
} else
{var x = cljs.core.first.call(null,s__23885__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__23884.call(null,cljs.core.rest.call(null,s__23885__$2)));
} else
{{
var G__23890 = cljs.core.rest.call(null,s__23885__$2);
s__23885__$1 = G__23890;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__12104__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__23891){
var colls = cljs.core.seq(arglist__23891);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__23892__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__23893 = conj_when.call(null,coll,x);
var G__23894 = cljs.core.first.call(null,xs);
var G__23895 = cljs.core.next.call(null,xs);
coll = G__23893;
x = G__23894;
xs = G__23895;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__23892 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23892__delegate.call(this,coll,x,xs);};
G__23892.cljs$lang$maxFixedArity = 2;
G__23892.cljs$lang$applyTo = (function (arglist__23896){
var coll = cljs.core.first(arglist__23896);
arglist__23896 = cljs.core.next(arglist__23896);
var x = cljs.core.first(arglist__23896);
var xs = cljs.core.rest(arglist__23896);
return G__23892__delegate(coll,x,xs);
});
G__23892.cljs$core$IFn$_invoke$arity$variadic = G__23892__delegate;
return G__23892;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__23898__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__23897_SHARP_){return cljs.core.apply.call(null,f,p1__23897_SHARP_,args);
}));
};
var G__23898 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23898__delegate.call(this,a,f,args);};
G__23898.cljs$lang$maxFixedArity = 2;
G__23898.cljs$lang$applyTo = (function (arglist__23899){
var a = cljs.core.first(arglist__23899);
arglist__23899 = cljs.core.next(arglist__23899);
var f = cljs.core.first(arglist__23899);
var args = cljs.core.rest(arglist__23899);
return G__23898__delegate(a,f,args);
});
G__23898.cljs$core$IFn$_invoke$arity$variadic = G__23898__delegate;
return G__23898;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__23900__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__23900 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23900__delegate.call(this,f,arg,args);};
G__23900.cljs$lang$maxFixedArity = 2;
G__23900.cljs$lang$applyTo = (function (arglist__23901){
var f = cljs.core.first(arglist__23901);
arglist__23901 = cljs.core.next(arglist__23901);
var arg = cljs.core.first(arglist__23901);
var args = cljs.core.rest(arglist__23901);
return G__23900__delegate(f,arg,args);
});
G__23900.cljs$core$IFn$_invoke$arity$variadic = G__23900__delegate;
return G__23900;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map