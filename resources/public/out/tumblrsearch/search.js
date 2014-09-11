// Compiled by ClojureScript 0.0-2322
goog.provide('tumblrsearch.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('goog.net.Jsonp');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
tumblrsearch.search.gen_request = (function gen_request(query,before){return ("http://api.tumblr.com/v2/tagged?tag="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)+"&before="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(before)+"&api_key=pekKZHs4hKvshK1NRyXlawVhO203uYg0MMfGj5Tq8ts6M1Wq9Z");
});
tumblrsearch.search.search = (function search(ajax_chan,query,before){var uri = tumblrsearch.search.gen_request.call(null,query,before);var req = (new goog.net.Jsonp((new goog.Uri(uri))));var t = cljs.core.async.timeout.call(null,(1500));var ch = cljs.core.async.chan.call(null);var c__18367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto__,uri,req,t,ch){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto__,uri,req,t,ch){
return (function (state_22593){var state_val_22594 = (state_22593[(1)]);if((state_val_22594 === (7)))
{var inst_22569 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"query","query",-1288509510)];var inst_22570 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),query];var inst_22571 = cljs.core.PersistentHashMap.fromArrays(inst_22569,inst_22570);var state_22593__$1 = state_22593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22593__$1,(10),ajax_chan,inst_22571);
} else
{if((state_val_22594 === (1)))
{var inst_22546 = (function (){return ((function (state_val_22594,c__18367__auto__,uri,req,t,ch){
return (function (p1__22475_SHARP_){return cljs.core.async.put_BANG_.call(null,ch,p1__22475_SHARP_);
});
;})(state_val_22594,c__18367__auto__,uri,req,t,ch))
})();var inst_22547 = req.send(null,inst_22546);var inst_22549 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22550 = [t,ch];var inst_22551 = (new cljs.core.PersistentVector(null,2,(5),inst_22549,inst_22550,null));var state_22593__$1 = (function (){var statearr_22595 = state_22593;(statearr_22595[(7)] = inst_22547);
return statearr_22595;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22593__$1,(2),inst_22551);
} else
{if((state_val_22594 === (4)))
{var inst_22554 = (state_22593[(8)]);var inst_22564 = inst_22554.meta;var inst_22565 = inst_22564.status;var inst_22566 = cljs.core._EQ_.call(null,inst_22565,(200));var inst_22567 = !(inst_22566);var state_22593__$1 = state_22593;if(inst_22567)
{var statearr_22596_22616 = state_22593__$1;(statearr_22596_22616[(1)] = (7));
} else
{var statearr_22597_22617 = state_22593__$1;(statearr_22597_22617[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22594 === (13)))
{var inst_22587 = (state_22593[(2)]);var state_22593__$1 = state_22593;var statearr_22598_22618 = state_22593__$1;(statearr_22598_22618[(2)] = inst_22587);
(statearr_22598_22618[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22594 === (6)))
{var inst_22562 = (state_22593[(2)]);var state_22593__$1 = state_22593;var statearr_22599_22619 = state_22593__$1;(statearr_22599_22619[(2)] = inst_22562);
(statearr_22599_22619[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22594 === (3)))
{var inst_22558 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"query","query",-1288509510)];var inst_22559 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318),query];var inst_22560 = cljs.core.PersistentHashMap.fromArrays(inst_22558,inst_22559);var state_22593__$1 = state_22593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22593__$1,(6),ajax_chan,inst_22560);
} else
{if((state_val_22594 === (12)))
{var state_22593__$1 = state_22593;var statearr_22600_22620 = state_22593__$1;(statearr_22600_22620[(2)] = null);
(statearr_22600_22620[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22594 === (2)))
{var inst_22553 = (state_22593[(9)]);var inst_22555 = (state_22593[(10)]);var inst_22553__$1 = (state_22593[(2)]);var inst_22554 = cljs.core.nth.call(null,inst_22553__$1,(0),null);var inst_22555__$1 = cljs.core.nth.call(null,inst_22553__$1,(1),null);var inst_22556 = cljs.core._EQ_.call(null,inst_22555__$1,t);var state_22593__$1 = (function (){var statearr_22601 = state_22593;(statearr_22601[(9)] = inst_22553__$1);
(statearr_22601[(10)] = inst_22555__$1);
(statearr_22601[(8)] = inst_22554);
return statearr_22601;
})();if(inst_22556)
{var statearr_22602_22621 = state_22593__$1;(statearr_22602_22621[(1)] = (3));
} else
{var statearr_22603_22622 = state_22593__$1;(statearr_22603_22622[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22594 === (11)))
{var inst_22553 = (state_22593[(9)]);var inst_22555 = (state_22593[(10)]);var inst_22554 = (state_22593[(8)]);var inst_22576 = (function (){var c = inst_22555;var v = inst_22554;var vec__22548 = inst_22553;return ((function (c,v,vec__22548,inst_22553,inst_22555,inst_22554,state_val_22594,c__18367__auto__,uri,req,t,ch){
return (function (item){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),"photo");
});
;})(c,v,vec__22548,inst_22553,inst_22555,inst_22554,state_val_22594,c__18367__auto__,uri,req,t,ch))
})();var inst_22577 = inst_22554.response;var inst_22578 = cljs.core.js__GT_clj.call(null,inst_22577,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);var inst_22579 = cljs.core.filter.call(null,inst_22576,inst_22578);var inst_22580 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"items","items",1031954938)];var inst_22581 = [false,query,inst_22579];var inst_22582 = cljs.core.PersistentHashMap.fromArrays(inst_22580,inst_22581);var state_22593__$1 = state_22593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22593__$1,(14),ajax_chan,inst_22582);
} else
{if((state_val_22594 === (9)))
{var inst_22589 = (state_22593[(2)]);var state_22593__$1 = state_22593;var statearr_22604_22623 = state_22593__$1;(statearr_22604_22623[(2)] = inst_22589);
(statearr_22604_22623[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22594 === (5)))
{var inst_22591 = (state_22593[(2)]);var state_22593__$1 = state_22593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22593__$1,inst_22591);
} else
{if((state_val_22594 === (14)))
{var inst_22584 = (state_22593[(2)]);var state_22593__$1 = state_22593;var statearr_22605_22624 = state_22593__$1;(statearr_22605_22624[(2)] = inst_22584);
(statearr_22605_22624[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22594 === (10)))
{var inst_22573 = (state_22593[(2)]);var state_22593__$1 = state_22593;var statearr_22606_22625 = state_22593__$1;(statearr_22606_22625[(2)] = inst_22573);
(statearr_22606_22625[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22594 === (8)))
{var state_22593__$1 = state_22593;var statearr_22607_22626 = state_22593__$1;(statearr_22607_22626[(1)] = (11));

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
}
}
});})(c__18367__auto__,uri,req,t,ch))
;return ((function (switch__18302__auto__,c__18367__auto__,uri,req,t,ch){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_22612 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22612[(0)] = state_machine__18303__auto__);
(statearr_22612[(1)] = (1));
return statearr_22612;
});
var state_machine__18303__auto____1 = (function (state_22593){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_22593);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e22613){if((e22613 instanceof Object))
{var ex__18306__auto__ = e22613;var statearr_22614_22627 = state_22593;(statearr_22614_22627[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22593);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22613;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22628 = state_22593;
state_22593 = G__22628;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_22593){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_22593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto__,uri,req,t,ch))
})();var state__18369__auto__ = (function (){var statearr_22615 = f__18368__auto__.call(null);(statearr_22615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto__);
return statearr_22615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto__,uri,req,t,ch))
);
return c__18367__auto__;
});
tumblrsearch.search.new_search = (function new_search(data,ajax_chan,query){om.core.transact_BANG_.call(null,data,(function (p1__22629_SHARP_){return cljs.core.assoc.call(null,p1__22629_SHARP_,new cljs.core.Keyword(null,"current-state","current-state",1048284452),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"before","before",-1633692388),(0),new cljs.core.Keyword(null,"current-search","current-search",-1312903999),query,new cljs.core.Keyword(null,"current-items","current-items",292221155),cljs.core.PersistentVector.EMPTY);
}));
return tumblrsearch.search.search.call(null,ajax_chan,query,(0));
});
tumblrsearch.search.init = (function init(data,ajax_chan){var c__18367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto__){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto__){
return (function (state_22765){var state_val_22766 = (state_22765[(1)]);if((state_val_22766 === (7)))
{var inst_22760 = (state_22765[(2)]);var state_22765__$1 = (function (){var statearr_22767 = state_22765;(statearr_22767[(7)] = inst_22760);
return statearr_22767;
})();var statearr_22768_22798 = state_22765__$1;(statearr_22768_22798[(2)] = null);
(statearr_22768_22798[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (1)))
{var state_22765__$1 = state_22765;var statearr_22769_22799 = state_22765__$1;(statearr_22769_22799[(2)] = null);
(statearr_22769_22799[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (4)))
{var inst_22718 = (state_22765[(8)]);var inst_22718__$1 = (state_22765[(2)]);var inst_22719 = cljs.core.deref.call(null,data);var inst_22720 = new cljs.core.Keyword(null,"current-state","current-state",1048284452).cljs$core$IFn$_invoke$arity$1(inst_22719);var inst_22721 = cljs.core._EQ_.call(null,inst_22720,new cljs.core.Keyword(null,"loading","loading",-737050189));var inst_22722 = cljs.core.deref.call(null,data);var inst_22723 = new cljs.core.Keyword(null,"current-search","current-search",-1312903999).cljs$core$IFn$_invoke$arity$1(inst_22722);var inst_22724 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(inst_22718__$1);var inst_22725 = cljs.core._EQ_.call(null,inst_22723,inst_22724);var inst_22726 = (inst_22721) && (inst_22725);var state_22765__$1 = (function (){var statearr_22770 = state_22765;(statearr_22770[(8)] = inst_22718__$1);
return statearr_22770;
})();if(cljs.core.truth_(inst_22726))
{var statearr_22771_22800 = state_22765__$1;(statearr_22771_22800[(1)] = (5));
} else
{var statearr_22772_22801 = state_22765__$1;(statearr_22772_22801[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (15)))
{var inst_22718 = (state_22765[(8)]);var inst_22743 = (function (){var response = inst_22718;return ((function (response,inst_22718,state_val_22766,c__18367__auto__){
return (function (p1__22632_SHARP_){return cljs.core.assoc.call(null,p1__22632_SHARP_,new cljs.core.Keyword(null,"current-state","current-state",1048284452),new cljs.core.Keyword(null,"loaded-final","loaded-final",2030901563));
});
;})(response,inst_22718,state_val_22766,c__18367__auto__))
})();var inst_22744 = om.core.transact_BANG_.call(null,data,inst_22743);var state_22765__$1 = state_22765;var statearr_22773_22802 = state_22765__$1;(statearr_22773_22802[(2)] = inst_22744);
(statearr_22773_22802[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (13)))
{var inst_22755 = (state_22765[(2)]);var state_22765__$1 = state_22765;var statearr_22774_22803 = state_22765__$1;(statearr_22774_22803[(2)] = inst_22755);
(statearr_22774_22803[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (6)))
{var state_22765__$1 = state_22765;var statearr_22775_22804 = state_22765__$1;(statearr_22775_22804[(2)] = null);
(statearr_22775_22804[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (17)))
{var inst_22718 = (state_22765[(8)]);var inst_22749 = (function (){var response = inst_22718;return ((function (response,inst_22718,state_val_22766,c__18367__auto__){
return (function (p1__22633_SHARP_){return cljs.core.assoc.call(null,p1__22633_SHARP_,new cljs.core.Keyword(null,"current-state","current-state",1048284452),new cljs.core.Keyword(null,"loaded","loaded",-1246482293),new cljs.core.Keyword(null,"current-items","current-items",292221155),cljs.core.concat.call(null,new cljs.core.Keyword(null,"current-items","current-items",292221155).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(response)),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,response.call(null,new cljs.core.Keyword(null,"items","items",1031954938)))));
});
;})(response,inst_22718,state_val_22766,c__18367__auto__))
})();var inst_22750 = om.core.transact_BANG_.call(null,data,inst_22749);var state_22765__$1 = state_22765;var statearr_22776_22805 = state_22765__$1;(statearr_22776_22805[(2)] = inst_22750);
(statearr_22776_22805[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (3)))
{var inst_22763 = (state_22765[(2)]);var state_22765__$1 = state_22765;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22765__$1,inst_22763);
} else
{if((state_val_22766 === (12)))
{var state_22765__$1 = state_22765;var statearr_22777_22806 = state_22765__$1;(statearr_22777_22806[(1)] = (17));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (2)))
{var state_22765__$1 = state_22765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22765__$1,(4),ajax_chan);
} else
{if((state_val_22766 === (19)))
{var inst_22753 = (state_22765[(2)]);var state_22765__$1 = state_22765;var statearr_22779_22807 = state_22765__$1;(statearr_22779_22807[(2)] = inst_22753);
(statearr_22779_22807[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (11)))
{var inst_22736 = cljs.core.deref.call(null,data);var inst_22737 = new cljs.core.Keyword(null,"current-items","current-items",292221155).cljs$core$IFn$_invoke$arity$1(inst_22736);var inst_22738 = cljs.core.empty_QMARK_.call(null,inst_22737);var state_22765__$1 = state_22765;if(inst_22738)
{var statearr_22780_22808 = state_22765__$1;(statearr_22780_22808[(1)] = (14));
} else
{var statearr_22781_22809 = state_22765__$1;(statearr_22781_22809[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (9)))
{var inst_22718 = (state_22765[(8)]);var inst_22733 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inst_22718);var inst_22734 = cljs.core.empty_QMARK_.call(null,inst_22733);var state_22765__$1 = state_22765;if(inst_22734)
{var statearr_22782_22810 = state_22765__$1;(statearr_22782_22810[(1)] = (11));
} else
{var statearr_22783_22811 = state_22765__$1;(statearr_22783_22811[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (5)))
{var inst_22718 = (state_22765[(8)]);var inst_22728 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_22718);var state_22765__$1 = state_22765;if(cljs.core.truth_(inst_22728))
{var statearr_22784_22812 = state_22765__$1;(statearr_22784_22812[(1)] = (8));
} else
{var statearr_22785_22813 = state_22765__$1;(statearr_22785_22813[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (14)))
{var inst_22718 = (state_22765[(8)]);var inst_22740 = (function (){var response = inst_22718;return ((function (response,inst_22718,state_val_22766,c__18367__auto__){
return (function (p1__22631_SHARP_){return cljs.core.assoc.call(null,p1__22631_SHARP_,new cljs.core.Keyword(null,"current-state","current-state",1048284452),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"empty-search","empty-search",864907322));
});
;})(response,inst_22718,state_val_22766,c__18367__auto__))
})();var inst_22741 = om.core.transact_BANG_.call(null,data,inst_22740);var state_22765__$1 = state_22765;var statearr_22786_22814 = state_22765__$1;(statearr_22786_22814[(2)] = inst_22741);
(statearr_22786_22814[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (16)))
{var inst_22746 = (state_22765[(2)]);var state_22765__$1 = state_22765;var statearr_22787_22815 = state_22765__$1;(statearr_22787_22815[(2)] = inst_22746);
(statearr_22787_22815[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (10)))
{var inst_22757 = (state_22765[(2)]);var state_22765__$1 = state_22765;var statearr_22788_22816 = state_22765__$1;(statearr_22788_22816[(2)] = inst_22757);
(statearr_22788_22816[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (18)))
{var state_22765__$1 = state_22765;var statearr_22789_22817 = state_22765__$1;(statearr_22789_22817[(2)] = null);
(statearr_22789_22817[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22766 === (8)))
{var inst_22718 = (state_22765[(8)]);var inst_22730 = (function (){var response = inst_22718;return ((function (response,inst_22718,state_val_22766,c__18367__auto__){
return (function (p1__22630_SHARP_){return cljs.core.assoc.call(null,p1__22630_SHARP_,new cljs.core.Keyword(null,"current-state","current-state",1048284452),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(response));
});
;})(response,inst_22718,state_val_22766,c__18367__auto__))
})();var inst_22731 = om.core.transact_BANG_.call(null,data,inst_22730);var state_22765__$1 = state_22765;var statearr_22790_22818 = state_22765__$1;(statearr_22790_22818[(2)] = inst_22731);
(statearr_22790_22818[(1)] = (10));
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
}
}
}
}
}
}
}
});})(c__18367__auto__))
;return ((function (switch__18302__auto__,c__18367__auto__){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_22794 = [null,null,null,null,null,null,null,null,null];(statearr_22794[(0)] = state_machine__18303__auto__);
(statearr_22794[(1)] = (1));
return statearr_22794;
});
var state_machine__18303__auto____1 = (function (state_22765){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_22765);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e22795){if((e22795 instanceof Object))
{var ex__18306__auto__ = e22795;var statearr_22796_22819 = state_22765;(statearr_22796_22819[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22765);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22795;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22820 = state_22765;
state_22765 = G__22820;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_22765){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_22765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto__))
})();var state__18369__auto__ = (function (){var statearr_22797 = f__18368__auto__.call(null);(statearr_22797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto__);
return statearr_22797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto__))
);
return c__18367__auto__;
});

//# sourceMappingURL=search.js.map