// Compiled by ClojureScript 0.0-2322
goog.provide('tumblrsearch.window');
goog.require('cljs.core');
goog.require('tumblrsearch.search');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('tumblrsearch.search');
goog.require('om.core');
goog.require('om.core');
tumblrsearch.window.scroll_remain = (function scroll_remain(){var body = document.body;var html = document.documentElement;var w_height = (function (){var x__11686__auto__ = (function (){var x__11686__auto__ = (function (){var x__11686__auto__ = (function (){var x__11686__auto__ = body.scrollHeight;var y__11687__auto__ = body.offsetHeight;return ((x__11686__auto__ > y__11687__auto__) ? x__11686__auto__ : y__11687__auto__);
})();var y__11687__auto__ = html.clientHeight;return ((x__11686__auto__ > y__11687__auto__) ? x__11686__auto__ : y__11687__auto__);
})();var y__11687__auto__ = html.scrollHeight;return ((x__11686__auto__ > y__11687__auto__) ? x__11686__auto__ : y__11687__auto__);
})();var y__11687__auto__ = html.offsetHeight;return ((x__11686__auto__ > y__11687__auto__) ? x__11686__auto__ : y__11687__auto__);
})();return (w_height - (window.innerHeight + window.scrollY));
});
tumblrsearch.window.setup_scroll_handler = (function setup_scroll_handler(data,ajax_chan){return window.addEventListener("scroll",(function (){if((((100) > tumblrsearch.window.scroll_remain.call(null))) && ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),new cljs.core.Keyword(null,"current-state","current-state",1048284452).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"current-state","current-state",1048284452).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))))))
{om.core.transact_BANG_.call(null,data,(function (p1__22821_SHARP_){return cljs.core.assoc.call(null,p1__22821_SHARP_,new cljs.core.Keyword(null,"current-state","current-state",1048284452),new cljs.core.Keyword(null,"loading","loading",-737050189));
}));
return tumblrsearch.search.search.call(null,ajax_chan,new cljs.core.Keyword(null,"current-search","current-search",-1312903999).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));
} else
{return null;
}
}));
});
tumblrsearch.window.setup_resize_handler = (function setup_resize_handler(data,image_width){var c = cljs.core.async.chan.call(null);var c__18367__auto___22943 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___22943,c){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___22943,c){
return (function (state_22918){var state_val_22919 = (state_22918[(1)]);if((state_val_22919 === (7)))
{var inst_22894 = (state_22918[(7)]);var inst_22888 = (state_22918[(8)]);var inst_22911 = cljs.core.async.close_BANG_.call(null,inst_22888);var inst_22885 = inst_22894;var state_22918__$1 = (function (){var statearr_22920 = state_22918;(statearr_22920[(9)] = inst_22885);
(statearr_22920[(10)] = inst_22911);
return statearr_22920;
})();var statearr_22921_22944 = state_22918__$1;(statearr_22921_22944[(2)] = null);
(statearr_22921_22944[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22919 === (1)))
{var state_22918__$1 = state_22918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22918__$1,(2),c);
} else
{if((state_val_22919 === (4)))
{var inst_22916 = (state_22918[(2)]);var state_22918__$1 = state_22918;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22918__$1,inst_22916);
} else
{if((state_val_22919 === (6)))
{var inst_22885 = (state_22918[(9)]);var inst_22898 = cljs.core.deref.call(null,data);var inst_22899 = new cljs.core.Keyword(null,"col-n","col-n",-191254391).cljs$core$IFn$_invoke$arity$1(inst_22898);var inst_22900 = cljs.core.not_EQ_.call(null,inst_22885,inst_22899);var state_22918__$1 = state_22918;if(inst_22900)
{var statearr_22922_22945 = state_22918__$1;(statearr_22922_22945[(1)] = (9));
} else
{var statearr_22923_22946 = state_22918__$1;(statearr_22923_22946[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22919 === (3)))
{var inst_22888 = (state_22918[(8)]);var inst_22888__$1 = cljs.core.async.timeout.call(null,(200));var inst_22889 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22890 = [c,inst_22888__$1];var inst_22891 = (new cljs.core.PersistentVector(null,2,(5),inst_22889,inst_22890,null));var state_22918__$1 = (function (){var statearr_22924 = state_22918;(statearr_22924[(8)] = inst_22888__$1);
return statearr_22924;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22918__$1,(5),inst_22891);
} else
{if((state_val_22919 === (12)))
{var inst_22908 = (state_22918[(2)]);var inst_22885 = inst_22908;var state_22918__$1 = (function (){var statearr_22925 = state_22918;(statearr_22925[(9)] = inst_22885);
return statearr_22925;
})();var statearr_22926_22947 = state_22918__$1;(statearr_22926_22947[(2)] = null);
(statearr_22926_22947[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22919 === (2)))
{var inst_22884 = (state_22918[(2)]);var inst_22885 = inst_22884;var state_22918__$1 = (function (){var statearr_22927 = state_22918;(statearr_22927[(9)] = inst_22885);
return statearr_22927;
})();var statearr_22928_22948 = state_22918__$1;(statearr_22928_22948[(2)] = null);
(statearr_22928_22948[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22919 === (11)))
{var inst_22906 = (state_22918[(2)]);var state_22918__$1 = (function (){var statearr_22929 = state_22918;(statearr_22929[(11)] = inst_22906);
return statearr_22929;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22918__$1,(12),c);
} else
{if((state_val_22919 === (9)))
{var inst_22885 = (state_22918[(9)]);var inst_22893 = (state_22918[(12)]);var inst_22895 = (state_22918[(13)]);var inst_22894 = (state_22918[(7)]);var inst_22888 = (state_22918[(8)]);var inst_22902 = (function (){var c_SINGLEQUOTE_ = inst_22895;var v = inst_22894;var vec__22887 = inst_22893;var t = inst_22888;var col_n = inst_22885;return ((function (c_SINGLEQUOTE_,v,vec__22887,t,col_n,inst_22885,inst_22893,inst_22895,inst_22894,inst_22888,state_val_22919,c__18367__auto___22943,c){
return (function (p1__22822_SHARP_){return cljs.core.assoc.call(null,p1__22822_SHARP_,new cljs.core.Keyword(null,"col-n","col-n",-191254391),col_n);
});
;})(c_SINGLEQUOTE_,v,vec__22887,t,col_n,inst_22885,inst_22893,inst_22895,inst_22894,inst_22888,state_val_22919,c__18367__auto___22943,c))
})();var inst_22903 = om.core.transact_BANG_.call(null,data,inst_22902);var state_22918__$1 = state_22918;var statearr_22930_22949 = state_22918__$1;(statearr_22930_22949[(2)] = inst_22903);
(statearr_22930_22949[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22919 === (5)))
{var inst_22893 = (state_22918[(12)]);var inst_22895 = (state_22918[(13)]);var inst_22888 = (state_22918[(8)]);var inst_22893__$1 = (state_22918[(2)]);var inst_22894 = cljs.core.nth.call(null,inst_22893__$1,(0),null);var inst_22895__$1 = cljs.core.nth.call(null,inst_22893__$1,(1),null);var inst_22896 = cljs.core._EQ_.call(null,inst_22895__$1,inst_22888);var state_22918__$1 = (function (){var statearr_22931 = state_22918;(statearr_22931[(12)] = inst_22893__$1);
(statearr_22931[(13)] = inst_22895__$1);
(statearr_22931[(7)] = inst_22894);
return statearr_22931;
})();if(inst_22896)
{var statearr_22932_22950 = state_22918__$1;(statearr_22932_22950[(1)] = (6));
} else
{var statearr_22933_22951 = state_22918__$1;(statearr_22933_22951[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22919 === (10)))
{var state_22918__$1 = state_22918;var statearr_22934_22952 = state_22918__$1;(statearr_22934_22952[(2)] = null);
(statearr_22934_22952[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22919 === (8)))
{var inst_22914 = (state_22918[(2)]);var state_22918__$1 = state_22918;var statearr_22935_22953 = state_22918__$1;(statearr_22935_22953[(2)] = inst_22914);
(statearr_22935_22953[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18367__auto___22943,c))
;return ((function (switch__18302__auto__,c__18367__auto___22943,c){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_22939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22939[(0)] = state_machine__18303__auto__);
(statearr_22939[(1)] = (1));
return statearr_22939;
});
var state_machine__18303__auto____1 = (function (state_22918){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_22918);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e22940){if((e22940 instanceof Object))
{var ex__18306__auto__ = e22940;var statearr_22941_22954 = state_22918;(statearr_22941_22954[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22918);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22940;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22955 = state_22918;
state_22918 = G__22955;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_22918){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_22918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___22943,c))
})();var state__18369__auto__ = (function (){var statearr_22942 = f__18368__auto__.call(null);(statearr_22942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___22943);
return statearr_22942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___22943,c))
);
return window.addEventListener("resize",((function (c){
return (function (){var col_n = cljs.core.quot.call(null,window.innerWidth,image_width);return cljs.core.async.put_BANG_.call(null,c,col_n);
});})(c))
);
});
tumblrsearch.window.init = (function init(data,owner,ajax_chan){tumblrsearch.window.setup_scroll_handler.call(null,data,ajax_chan);
return tumblrsearch.window.setup_resize_handler.call(null,data,om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"image-width","image-width",737630851)));
});

//# sourceMappingURL=window.js.map