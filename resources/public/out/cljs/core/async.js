// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25443 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25443 = (function (f,fn_handler,meta25444){
this.f = f;
this.fn_handler = fn_handler;
this.meta25444 = meta25444;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25443.cljs$lang$type = true;
cljs.core.async.t25443.cljs$lang$ctorStr = "cljs.core.async/t25443";
cljs.core.async.t25443.cljs$lang$ctorPrWriter = (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"cljs.core.async/t25443");
});
cljs.core.async.t25443.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25445){var self__ = this;
var _25445__$1 = this;return self__.meta25444;
});
cljs.core.async.t25443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25445,meta25444__$1){var self__ = this;
var _25445__$1 = this;return (new cljs.core.async.t25443(self__.f,self__.fn_handler,meta25444__$1));
});
cljs.core.async.__GT_t25443 = (function __GT_t25443(f__$1,fn_handler__$1,meta25444){return (new cljs.core.async.t25443(f__$1,fn_handler__$1,meta25444));
});
}
return (new cljs.core.async.t25443(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25447 = buff;if(G__25447)
{var bit__12029__auto__ = null;if(cljs.core.truth_((function (){var or__11379__auto__ = bit__12029__auto__;if(cljs.core.truth_(or__11379__auto__))
{return or__11379__auto__;
} else
{return G__25447.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25447.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25447);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25447);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_25448 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25448);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_25448,ret){
return (function (){return fn1.call(null,val_25448);
});})(val_25448,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12235__auto___25449 = n;var x_25450 = (0);while(true){
if((x_25450 < n__12235__auto___25449))
{(a[x_25450] = (0));
{
var G__25451 = (x_25450 + (1));
x_25450 = G__25451;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__25452 = (i + (1));
i = G__25452;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25456 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25456 = (function (flag,alt_flag,meta25457){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25457 = meta25457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25456.cljs$lang$type = true;
cljs.core.async.t25456.cljs$lang$ctorStr = "cljs.core.async/t25456";
cljs.core.async.t25456.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"cljs.core.async/t25456");
});})(flag))
;
cljs.core.async.t25456.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25458){var self__ = this;
var _25458__$1 = this;return self__.meta25457;
});})(flag))
;
cljs.core.async.t25456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25458,meta25457__$1){var self__ = this;
var _25458__$1 = this;return (new cljs.core.async.t25456(self__.flag,self__.alt_flag,meta25457__$1));
});})(flag))
;
cljs.core.async.__GT_t25456 = ((function (flag){
return (function __GT_t25456(flag__$1,alt_flag__$1,meta25457){return (new cljs.core.async.t25456(flag__$1,alt_flag__$1,meta25457));
});})(flag))
;
}
return (new cljs.core.async.t25456(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25462 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25462 = (function (cb,flag,alt_handler,meta25463){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25463 = meta25463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25462.cljs$lang$type = true;
cljs.core.async.t25462.cljs$lang$ctorStr = "cljs.core.async/t25462";
cljs.core.async.t25462.cljs$lang$ctorPrWriter = (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"cljs.core.async/t25462");
});
cljs.core.async.t25462.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25462.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25462.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25464){var self__ = this;
var _25464__$1 = this;return self__.meta25463;
});
cljs.core.async.t25462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25464,meta25463__$1){var self__ = this;
var _25464__$1 = this;return (new cljs.core.async.t25462(self__.cb,self__.flag,self__.alt_handler,meta25463__$1));
});
cljs.core.async.__GT_t25462 = (function __GT_t25462(cb__$1,flag__$1,alt_handler__$1,meta25463){return (new cljs.core.async.t25462(cb__$1,flag__$1,alt_handler__$1,meta25463));
});
}
return (new cljs.core.async.t25462(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25465_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25465_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25466_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25466_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11379__auto__ = wport;if(cljs.core.truth_(or__11379__auto__))
{return or__11379__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__25467 = (i + (1));
i = G__25467;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11379__auto__ = ret;if(cljs.core.truth_(or__11379__auto__))
{return or__11379__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__11367__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11367__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11367__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__25468){var map__25470 = p__25468;var map__25470__$1 = ((cljs.core.seq_QMARK_.call(null,map__25470))?cljs.core.apply.call(null,cljs.core.hash_map,map__25470):map__25470);var opts = map__25470__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25468 = null;if (arguments.length > 1) {
  p__25468 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25468);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25471){
var ports = cljs.core.first(arglist__25471);
var p__25468 = cljs.core.rest(arglist__25471);
return alts_BANG___delegate(ports,p__25468);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__18367__auto___25566 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___25566){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___25566){
return (function (state_25542){var state_val_25543 = (state_25542[(1)]);if((state_val_25543 === (7)))
{var inst_25538 = (state_25542[(2)]);var state_25542__$1 = state_25542;var statearr_25544_25567 = state_25542__$1;(statearr_25544_25567[(2)] = inst_25538);
(statearr_25544_25567[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25543 === (1)))
{var state_25542__$1 = state_25542;var statearr_25545_25568 = state_25542__$1;(statearr_25545_25568[(2)] = null);
(statearr_25545_25568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25543 === (4)))
{var inst_25521 = (state_25542[(7)]);var inst_25521__$1 = (state_25542[(2)]);var inst_25522 = (inst_25521__$1 == null);var state_25542__$1 = (function (){var statearr_25546 = state_25542;(statearr_25546[(7)] = inst_25521__$1);
return statearr_25546;
})();if(cljs.core.truth_(inst_25522))
{var statearr_25547_25569 = state_25542__$1;(statearr_25547_25569[(1)] = (5));
} else
{var statearr_25548_25570 = state_25542__$1;(statearr_25548_25570[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25543 === (13)))
{var state_25542__$1 = state_25542;var statearr_25549_25571 = state_25542__$1;(statearr_25549_25571[(2)] = null);
(statearr_25549_25571[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25543 === (6)))
{var inst_25521 = (state_25542[(7)]);var state_25542__$1 = state_25542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25542__$1,(11),to,inst_25521);
} else
{if((state_val_25543 === (3)))
{var inst_25540 = (state_25542[(2)]);var state_25542__$1 = state_25542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25542__$1,inst_25540);
} else
{if((state_val_25543 === (12)))
{var state_25542__$1 = state_25542;var statearr_25550_25572 = state_25542__$1;(statearr_25550_25572[(2)] = null);
(statearr_25550_25572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25543 === (2)))
{var state_25542__$1 = state_25542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25542__$1,(4),from);
} else
{if((state_val_25543 === (11)))
{var inst_25531 = (state_25542[(2)]);var state_25542__$1 = state_25542;if(cljs.core.truth_(inst_25531))
{var statearr_25551_25573 = state_25542__$1;(statearr_25551_25573[(1)] = (12));
} else
{var statearr_25552_25574 = state_25542__$1;(statearr_25552_25574[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25543 === (9)))
{var state_25542__$1 = state_25542;var statearr_25553_25575 = state_25542__$1;(statearr_25553_25575[(2)] = null);
(statearr_25553_25575[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25543 === (5)))
{var state_25542__$1 = state_25542;if(cljs.core.truth_(close_QMARK_))
{var statearr_25554_25576 = state_25542__$1;(statearr_25554_25576[(1)] = (8));
} else
{var statearr_25555_25577 = state_25542__$1;(statearr_25555_25577[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25543 === (14)))
{var inst_25536 = (state_25542[(2)]);var state_25542__$1 = state_25542;var statearr_25556_25578 = state_25542__$1;(statearr_25556_25578[(2)] = inst_25536);
(statearr_25556_25578[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25543 === (10)))
{var inst_25528 = (state_25542[(2)]);var state_25542__$1 = state_25542;var statearr_25557_25579 = state_25542__$1;(statearr_25557_25579[(2)] = inst_25528);
(statearr_25557_25579[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25543 === (8)))
{var inst_25525 = cljs.core.async.close_BANG_.call(null,to);var state_25542__$1 = state_25542;var statearr_25558_25580 = state_25542__$1;(statearr_25558_25580[(2)] = inst_25525);
(statearr_25558_25580[(1)] = (10));
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
});})(c__18367__auto___25566))
;return ((function (switch__18302__auto__,c__18367__auto___25566){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_25562 = [null,null,null,null,null,null,null,null];(statearr_25562[(0)] = state_machine__18303__auto__);
(statearr_25562[(1)] = (1));
return statearr_25562;
});
var state_machine__18303__auto____1 = (function (state_25542){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_25542);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e25563){if((e25563 instanceof Object))
{var ex__18306__auto__ = e25563;var statearr_25564_25581 = state_25542;(statearr_25564_25581[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25542);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25563;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25582 = state_25542;
state_25542 = G__25582;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_25542){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_25542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___25566))
})();var state__18369__auto__ = (function (){var statearr_25565 = f__18368__auto__.call(null);(statearr_25565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___25566);
return statearr_25565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___25566))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__25766){var vec__25767 = p__25766;var v = cljs.core.nth.call(null,vec__25767,(0),null);var p = cljs.core.nth.call(null,vec__25767,(1),null);var job = vec__25767;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__18367__auto___25949 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___25949,res,vec__25767,v,p,job,jobs,results){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___25949,res,vec__25767,v,p,job,jobs,results){
return (function (state_25772){var state_val_25773 = (state_25772[(1)]);if((state_val_25773 === (2)))
{var inst_25769 = (state_25772[(2)]);var inst_25770 = cljs.core.async.close_BANG_.call(null,res);var state_25772__$1 = (function (){var statearr_25774 = state_25772;(statearr_25774[(7)] = inst_25769);
return statearr_25774;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25772__$1,inst_25770);
} else
{if((state_val_25773 === (1)))
{var state_25772__$1 = state_25772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25772__$1,(2),res,v);
} else
{return null;
}
}
});})(c__18367__auto___25949,res,vec__25767,v,p,job,jobs,results))
;return ((function (switch__18302__auto__,c__18367__auto___25949,res,vec__25767,v,p,job,jobs,results){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_25778 = [null,null,null,null,null,null,null,null];(statearr_25778[(0)] = state_machine__18303__auto__);
(statearr_25778[(1)] = (1));
return statearr_25778;
});
var state_machine__18303__auto____1 = (function (state_25772){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_25772);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e25779){if((e25779 instanceof Object))
{var ex__18306__auto__ = e25779;var statearr_25780_25950 = state_25772;(statearr_25780_25950[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25772);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25779;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25951 = state_25772;
state_25772 = G__25951;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_25772){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_25772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___25949,res,vec__25767,v,p,job,jobs,results))
})();var state__18369__auto__ = (function (){var statearr_25781 = f__18368__auto__.call(null);(statearr_25781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___25949);
return statearr_25781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___25949,res,vec__25767,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__25782){var vec__25783 = p__25782;var v = cljs.core.nth.call(null,vec__25783,(0),null);var p = cljs.core.nth.call(null,vec__25783,(1),null);var job = vec__25783;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12235__auto___25952 = n;var __25953 = (0);while(true){
if((__25953 < n__12235__auto___25952))
{var G__25784_25954 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__25784_25954) {
case "async":
var c__18367__auto___25956 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__25953,c__18367__auto___25956,G__25784_25954,n__12235__auto___25952,jobs,results,process,async){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (__25953,c__18367__auto___25956,G__25784_25954,n__12235__auto___25952,jobs,results,process,async){
return (function (state_25797){var state_val_25798 = (state_25797[(1)]);if((state_val_25798 === (7)))
{var inst_25793 = (state_25797[(2)]);var state_25797__$1 = state_25797;var statearr_25799_25957 = state_25797__$1;(statearr_25799_25957[(2)] = inst_25793);
(statearr_25799_25957[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (6)))
{var state_25797__$1 = state_25797;var statearr_25800_25958 = state_25797__$1;(statearr_25800_25958[(2)] = null);
(statearr_25800_25958[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (5)))
{var state_25797__$1 = state_25797;var statearr_25801_25959 = state_25797__$1;(statearr_25801_25959[(2)] = null);
(statearr_25801_25959[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (4)))
{var inst_25787 = (state_25797[(2)]);var inst_25788 = async.call(null,inst_25787);var state_25797__$1 = state_25797;if(cljs.core.truth_(inst_25788))
{var statearr_25802_25960 = state_25797__$1;(statearr_25802_25960[(1)] = (5));
} else
{var statearr_25803_25961 = state_25797__$1;(statearr_25803_25961[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25798 === (3)))
{var inst_25795 = (state_25797[(2)]);var state_25797__$1 = state_25797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25797__$1,inst_25795);
} else
{if((state_val_25798 === (2)))
{var state_25797__$1 = state_25797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25797__$1,(4),jobs);
} else
{if((state_val_25798 === (1)))
{var state_25797__$1 = state_25797;var statearr_25804_25962 = state_25797__$1;(statearr_25804_25962[(2)] = null);
(statearr_25804_25962[(1)] = (2));
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
});})(__25953,c__18367__auto___25956,G__25784_25954,n__12235__auto___25952,jobs,results,process,async))
;return ((function (__25953,switch__18302__auto__,c__18367__auto___25956,G__25784_25954,n__12235__auto___25952,jobs,results,process,async){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_25808 = [null,null,null,null,null,null,null];(statearr_25808[(0)] = state_machine__18303__auto__);
(statearr_25808[(1)] = (1));
return statearr_25808;
});
var state_machine__18303__auto____1 = (function (state_25797){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_25797);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e25809){if((e25809 instanceof Object))
{var ex__18306__auto__ = e25809;var statearr_25810_25963 = state_25797;(statearr_25810_25963[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25797);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25809;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25964 = state_25797;
state_25797 = G__25964;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_25797){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_25797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(__25953,switch__18302__auto__,c__18367__auto___25956,G__25784_25954,n__12235__auto___25952,jobs,results,process,async))
})();var state__18369__auto__ = (function (){var statearr_25811 = f__18368__auto__.call(null);(statearr_25811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___25956);
return statearr_25811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(__25953,c__18367__auto___25956,G__25784_25954,n__12235__auto___25952,jobs,results,process,async))
);

break;
case "compute":
var c__18367__auto___25965 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__25953,c__18367__auto___25965,G__25784_25954,n__12235__auto___25952,jobs,results,process,async){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (__25953,c__18367__auto___25965,G__25784_25954,n__12235__auto___25952,jobs,results,process,async){
return (function (state_25824){var state_val_25825 = (state_25824[(1)]);if((state_val_25825 === (7)))
{var inst_25820 = (state_25824[(2)]);var state_25824__$1 = state_25824;var statearr_25826_25966 = state_25824__$1;(statearr_25826_25966[(2)] = inst_25820);
(statearr_25826_25966[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25825 === (6)))
{var state_25824__$1 = state_25824;var statearr_25827_25967 = state_25824__$1;(statearr_25827_25967[(2)] = null);
(statearr_25827_25967[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25825 === (5)))
{var state_25824__$1 = state_25824;var statearr_25828_25968 = state_25824__$1;(statearr_25828_25968[(2)] = null);
(statearr_25828_25968[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25825 === (4)))
{var inst_25814 = (state_25824[(2)]);var inst_25815 = process.call(null,inst_25814);var state_25824__$1 = state_25824;if(cljs.core.truth_(inst_25815))
{var statearr_25829_25969 = state_25824__$1;(statearr_25829_25969[(1)] = (5));
} else
{var statearr_25830_25970 = state_25824__$1;(statearr_25830_25970[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25825 === (3)))
{var inst_25822 = (state_25824[(2)]);var state_25824__$1 = state_25824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25824__$1,inst_25822);
} else
{if((state_val_25825 === (2)))
{var state_25824__$1 = state_25824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25824__$1,(4),jobs);
} else
{if((state_val_25825 === (1)))
{var state_25824__$1 = state_25824;var statearr_25831_25971 = state_25824__$1;(statearr_25831_25971[(2)] = null);
(statearr_25831_25971[(1)] = (2));
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
});})(__25953,c__18367__auto___25965,G__25784_25954,n__12235__auto___25952,jobs,results,process,async))
;return ((function (__25953,switch__18302__auto__,c__18367__auto___25965,G__25784_25954,n__12235__auto___25952,jobs,results,process,async){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_25835 = [null,null,null,null,null,null,null];(statearr_25835[(0)] = state_machine__18303__auto__);
(statearr_25835[(1)] = (1));
return statearr_25835;
});
var state_machine__18303__auto____1 = (function (state_25824){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_25824);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e25836){if((e25836 instanceof Object))
{var ex__18306__auto__ = e25836;var statearr_25837_25972 = state_25824;(statearr_25837_25972[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25824);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25836;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25973 = state_25824;
state_25824 = G__25973;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_25824){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_25824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(__25953,switch__18302__auto__,c__18367__auto___25965,G__25784_25954,n__12235__auto___25952,jobs,results,process,async))
})();var state__18369__auto__ = (function (){var statearr_25838 = f__18368__auto__.call(null);(statearr_25838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___25965);
return statearr_25838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(__25953,c__18367__auto___25965,G__25784_25954,n__12235__auto___25952,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__25974 = (__25953 + (1));
__25953 = G__25974;
continue;
}
} else
{}
break;
}
var c__18367__auto___25975 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___25975,jobs,results,process,async){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___25975,jobs,results,process,async){
return (function (state_25860){var state_val_25861 = (state_25860[(1)]);if((state_val_25861 === (9)))
{var inst_25853 = (state_25860[(2)]);var state_25860__$1 = (function (){var statearr_25862 = state_25860;(statearr_25862[(7)] = inst_25853);
return statearr_25862;
})();var statearr_25863_25976 = state_25860__$1;(statearr_25863_25976[(2)] = null);
(statearr_25863_25976[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25861 === (8)))
{var inst_25846 = (state_25860[(8)]);var inst_25851 = (state_25860[(2)]);var state_25860__$1 = (function (){var statearr_25864 = state_25860;(statearr_25864[(9)] = inst_25851);
return statearr_25864;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25860__$1,(9),results,inst_25846);
} else
{if((state_val_25861 === (7)))
{var inst_25856 = (state_25860[(2)]);var state_25860__$1 = state_25860;var statearr_25865_25977 = state_25860__$1;(statearr_25865_25977[(2)] = inst_25856);
(statearr_25865_25977[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25861 === (6)))
{var inst_25841 = (state_25860[(10)]);var inst_25846 = (state_25860[(8)]);var inst_25846__$1 = cljs.core.async.chan.call(null,(1));var inst_25847 = cljs.core.PersistentVector.EMPTY_NODE;var inst_25848 = [inst_25841,inst_25846__$1];var inst_25849 = (new cljs.core.PersistentVector(null,2,(5),inst_25847,inst_25848,null));var state_25860__$1 = (function (){var statearr_25866 = state_25860;(statearr_25866[(8)] = inst_25846__$1);
return statearr_25866;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25860__$1,(8),jobs,inst_25849);
} else
{if((state_val_25861 === (5)))
{var inst_25844 = cljs.core.async.close_BANG_.call(null,jobs);var state_25860__$1 = state_25860;var statearr_25867_25978 = state_25860__$1;(statearr_25867_25978[(2)] = inst_25844);
(statearr_25867_25978[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25861 === (4)))
{var inst_25841 = (state_25860[(10)]);var inst_25841__$1 = (state_25860[(2)]);var inst_25842 = (inst_25841__$1 == null);var state_25860__$1 = (function (){var statearr_25868 = state_25860;(statearr_25868[(10)] = inst_25841__$1);
return statearr_25868;
})();if(cljs.core.truth_(inst_25842))
{var statearr_25869_25979 = state_25860__$1;(statearr_25869_25979[(1)] = (5));
} else
{var statearr_25870_25980 = state_25860__$1;(statearr_25870_25980[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25861 === (3)))
{var inst_25858 = (state_25860[(2)]);var state_25860__$1 = state_25860;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25860__$1,inst_25858);
} else
{if((state_val_25861 === (2)))
{var state_25860__$1 = state_25860;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25860__$1,(4),from);
} else
{if((state_val_25861 === (1)))
{var state_25860__$1 = state_25860;var statearr_25871_25981 = state_25860__$1;(statearr_25871_25981[(2)] = null);
(statearr_25871_25981[(1)] = (2));
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
});})(c__18367__auto___25975,jobs,results,process,async))
;return ((function (switch__18302__auto__,c__18367__auto___25975,jobs,results,process,async){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_25875 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25875[(0)] = state_machine__18303__auto__);
(statearr_25875[(1)] = (1));
return statearr_25875;
});
var state_machine__18303__auto____1 = (function (state_25860){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_25860);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e25876){if((e25876 instanceof Object))
{var ex__18306__auto__ = e25876;var statearr_25877_25982 = state_25860;(statearr_25877_25982[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25860);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25876;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25983 = state_25860;
state_25860 = G__25983;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_25860){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_25860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___25975,jobs,results,process,async))
})();var state__18369__auto__ = (function (){var statearr_25878 = f__18368__auto__.call(null);(statearr_25878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___25975);
return statearr_25878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___25975,jobs,results,process,async))
);
var c__18367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto__,jobs,results,process,async){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto__,jobs,results,process,async){
return (function (state_25916){var state_val_25917 = (state_25916[(1)]);if((state_val_25917 === (7)))
{var inst_25912 = (state_25916[(2)]);var state_25916__$1 = state_25916;var statearr_25918_25984 = state_25916__$1;(statearr_25918_25984[(2)] = inst_25912);
(statearr_25918_25984[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (20)))
{var state_25916__$1 = state_25916;var statearr_25919_25985 = state_25916__$1;(statearr_25919_25985[(2)] = null);
(statearr_25919_25985[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (1)))
{var state_25916__$1 = state_25916;var statearr_25920_25986 = state_25916__$1;(statearr_25920_25986[(2)] = null);
(statearr_25920_25986[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (4)))
{var inst_25881 = (state_25916[(7)]);var inst_25881__$1 = (state_25916[(2)]);var inst_25882 = (inst_25881__$1 == null);var state_25916__$1 = (function (){var statearr_25921 = state_25916;(statearr_25921[(7)] = inst_25881__$1);
return statearr_25921;
})();if(cljs.core.truth_(inst_25882))
{var statearr_25922_25987 = state_25916__$1;(statearr_25922_25987[(1)] = (5));
} else
{var statearr_25923_25988 = state_25916__$1;(statearr_25923_25988[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (15)))
{var inst_25894 = (state_25916[(8)]);var state_25916__$1 = state_25916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25916__$1,(18),to,inst_25894);
} else
{if((state_val_25917 === (21)))
{var inst_25907 = (state_25916[(2)]);var state_25916__$1 = state_25916;var statearr_25924_25989 = state_25916__$1;(statearr_25924_25989[(2)] = inst_25907);
(statearr_25924_25989[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (13)))
{var inst_25909 = (state_25916[(2)]);var state_25916__$1 = (function (){var statearr_25925 = state_25916;(statearr_25925[(9)] = inst_25909);
return statearr_25925;
})();var statearr_25926_25990 = state_25916__$1;(statearr_25926_25990[(2)] = null);
(statearr_25926_25990[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (6)))
{var inst_25881 = (state_25916[(7)]);var state_25916__$1 = state_25916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25916__$1,(11),inst_25881);
} else
{if((state_val_25917 === (17)))
{var inst_25902 = (state_25916[(2)]);var state_25916__$1 = state_25916;if(cljs.core.truth_(inst_25902))
{var statearr_25927_25991 = state_25916__$1;(statearr_25927_25991[(1)] = (19));
} else
{var statearr_25928_25992 = state_25916__$1;(statearr_25928_25992[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (3)))
{var inst_25914 = (state_25916[(2)]);var state_25916__$1 = state_25916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25916__$1,inst_25914);
} else
{if((state_val_25917 === (12)))
{var inst_25891 = (state_25916[(10)]);var state_25916__$1 = state_25916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25916__$1,(14),inst_25891);
} else
{if((state_val_25917 === (2)))
{var state_25916__$1 = state_25916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25916__$1,(4),results);
} else
{if((state_val_25917 === (19)))
{var state_25916__$1 = state_25916;var statearr_25929_25993 = state_25916__$1;(statearr_25929_25993[(2)] = null);
(statearr_25929_25993[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (11)))
{var inst_25891 = (state_25916[(2)]);var state_25916__$1 = (function (){var statearr_25930 = state_25916;(statearr_25930[(10)] = inst_25891);
return statearr_25930;
})();var statearr_25931_25994 = state_25916__$1;(statearr_25931_25994[(2)] = null);
(statearr_25931_25994[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (9)))
{var state_25916__$1 = state_25916;var statearr_25932_25995 = state_25916__$1;(statearr_25932_25995[(2)] = null);
(statearr_25932_25995[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (5)))
{var state_25916__$1 = state_25916;if(cljs.core.truth_(close_QMARK_))
{var statearr_25933_25996 = state_25916__$1;(statearr_25933_25996[(1)] = (8));
} else
{var statearr_25934_25997 = state_25916__$1;(statearr_25934_25997[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (14)))
{var inst_25894 = (state_25916[(8)]);var inst_25896 = (state_25916[(11)]);var inst_25894__$1 = (state_25916[(2)]);var inst_25895 = (inst_25894__$1 == null);var inst_25896__$1 = cljs.core.not.call(null,inst_25895);var state_25916__$1 = (function (){var statearr_25935 = state_25916;(statearr_25935[(8)] = inst_25894__$1);
(statearr_25935[(11)] = inst_25896__$1);
return statearr_25935;
})();if(inst_25896__$1)
{var statearr_25936_25998 = state_25916__$1;(statearr_25936_25998[(1)] = (15));
} else
{var statearr_25937_25999 = state_25916__$1;(statearr_25937_25999[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (16)))
{var inst_25896 = (state_25916[(11)]);var state_25916__$1 = state_25916;var statearr_25938_26000 = state_25916__$1;(statearr_25938_26000[(2)] = inst_25896);
(statearr_25938_26000[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (10)))
{var inst_25888 = (state_25916[(2)]);var state_25916__$1 = state_25916;var statearr_25939_26001 = state_25916__$1;(statearr_25939_26001[(2)] = inst_25888);
(statearr_25939_26001[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (18)))
{var inst_25899 = (state_25916[(2)]);var state_25916__$1 = state_25916;var statearr_25940_26002 = state_25916__$1;(statearr_25940_26002[(2)] = inst_25899);
(statearr_25940_26002[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25917 === (8)))
{var inst_25885 = cljs.core.async.close_BANG_.call(null,to);var state_25916__$1 = state_25916;var statearr_25941_26003 = state_25916__$1;(statearr_25941_26003[(2)] = inst_25885);
(statearr_25941_26003[(1)] = (10));
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
}
}
});})(c__18367__auto__,jobs,results,process,async))
;return ((function (switch__18302__auto__,c__18367__auto__,jobs,results,process,async){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_25945 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25945[(0)] = state_machine__18303__auto__);
(statearr_25945[(1)] = (1));
return statearr_25945;
});
var state_machine__18303__auto____1 = (function (state_25916){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_25916);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e25946){if((e25946 instanceof Object))
{var ex__18306__auto__ = e25946;var statearr_25947_26004 = state_25916;(statearr_25947_26004[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25916);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25946;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26005 = state_25916;
state_25916 = G__26005;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_25916){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_25916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto__,jobs,results,process,async))
})();var state__18369__auto__ = (function (){var statearr_25948 = f__18368__auto__.call(null);(statearr_25948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto__);
return statearr_25948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto__,jobs,results,process,async))
);
return c__18367__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18367__auto___26106 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___26106,tc,fc){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___26106,tc,fc){
return (function (state_26081){var state_val_26082 = (state_26081[(1)]);if((state_val_26082 === (7)))
{var inst_26077 = (state_26081[(2)]);var state_26081__$1 = state_26081;var statearr_26083_26107 = state_26081__$1;(statearr_26083_26107[(2)] = inst_26077);
(statearr_26083_26107[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26082 === (1)))
{var state_26081__$1 = state_26081;var statearr_26084_26108 = state_26081__$1;(statearr_26084_26108[(2)] = null);
(statearr_26084_26108[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26082 === (4)))
{var inst_26058 = (state_26081[(7)]);var inst_26058__$1 = (state_26081[(2)]);var inst_26059 = (inst_26058__$1 == null);var state_26081__$1 = (function (){var statearr_26085 = state_26081;(statearr_26085[(7)] = inst_26058__$1);
return statearr_26085;
})();if(cljs.core.truth_(inst_26059))
{var statearr_26086_26109 = state_26081__$1;(statearr_26086_26109[(1)] = (5));
} else
{var statearr_26087_26110 = state_26081__$1;(statearr_26087_26110[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26082 === (13)))
{var state_26081__$1 = state_26081;var statearr_26088_26111 = state_26081__$1;(statearr_26088_26111[(2)] = null);
(statearr_26088_26111[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26082 === (6)))
{var inst_26058 = (state_26081[(7)]);var inst_26064 = p.call(null,inst_26058);var state_26081__$1 = state_26081;if(cljs.core.truth_(inst_26064))
{var statearr_26089_26112 = state_26081__$1;(statearr_26089_26112[(1)] = (9));
} else
{var statearr_26090_26113 = state_26081__$1;(statearr_26090_26113[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26082 === (3)))
{var inst_26079 = (state_26081[(2)]);var state_26081__$1 = state_26081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26081__$1,inst_26079);
} else
{if((state_val_26082 === (12)))
{var state_26081__$1 = state_26081;var statearr_26091_26114 = state_26081__$1;(statearr_26091_26114[(2)] = null);
(statearr_26091_26114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26082 === (2)))
{var state_26081__$1 = state_26081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26081__$1,(4),ch);
} else
{if((state_val_26082 === (11)))
{var inst_26058 = (state_26081[(7)]);var inst_26068 = (state_26081[(2)]);var state_26081__$1 = state_26081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26081__$1,(8),inst_26068,inst_26058);
} else
{if((state_val_26082 === (9)))
{var state_26081__$1 = state_26081;var statearr_26092_26115 = state_26081__$1;(statearr_26092_26115[(2)] = tc);
(statearr_26092_26115[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26082 === (5)))
{var inst_26061 = cljs.core.async.close_BANG_.call(null,tc);var inst_26062 = cljs.core.async.close_BANG_.call(null,fc);var state_26081__$1 = (function (){var statearr_26093 = state_26081;(statearr_26093[(8)] = inst_26061);
return statearr_26093;
})();var statearr_26094_26116 = state_26081__$1;(statearr_26094_26116[(2)] = inst_26062);
(statearr_26094_26116[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26082 === (14)))
{var inst_26075 = (state_26081[(2)]);var state_26081__$1 = state_26081;var statearr_26095_26117 = state_26081__$1;(statearr_26095_26117[(2)] = inst_26075);
(statearr_26095_26117[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26082 === (10)))
{var state_26081__$1 = state_26081;var statearr_26096_26118 = state_26081__$1;(statearr_26096_26118[(2)] = fc);
(statearr_26096_26118[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26082 === (8)))
{var inst_26070 = (state_26081[(2)]);var state_26081__$1 = state_26081;if(cljs.core.truth_(inst_26070))
{var statearr_26097_26119 = state_26081__$1;(statearr_26097_26119[(1)] = (12));
} else
{var statearr_26098_26120 = state_26081__$1;(statearr_26098_26120[(1)] = (13));
}
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
});})(c__18367__auto___26106,tc,fc))
;return ((function (switch__18302__auto__,c__18367__auto___26106,tc,fc){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_26102 = [null,null,null,null,null,null,null,null,null];(statearr_26102[(0)] = state_machine__18303__auto__);
(statearr_26102[(1)] = (1));
return statearr_26102;
});
var state_machine__18303__auto____1 = (function (state_26081){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_26081);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e26103){if((e26103 instanceof Object))
{var ex__18306__auto__ = e26103;var statearr_26104_26121 = state_26081;(statearr_26104_26121[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26081);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26103;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26122 = state_26081;
state_26081 = G__26122;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_26081){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_26081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___26106,tc,fc))
})();var state__18369__auto__ = (function (){var statearr_26105 = f__18368__auto__.call(null);(statearr_26105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___26106);
return statearr_26105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___26106,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto__){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto__){
return (function (state_26169){var state_val_26170 = (state_26169[(1)]);if((state_val_26170 === (7)))
{var inst_26165 = (state_26169[(2)]);var state_26169__$1 = state_26169;var statearr_26171_26187 = state_26169__$1;(statearr_26171_26187[(2)] = inst_26165);
(statearr_26171_26187[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26170 === (6)))
{var inst_26158 = (state_26169[(7)]);var inst_26155 = (state_26169[(8)]);var inst_26162 = f.call(null,inst_26155,inst_26158);var inst_26155__$1 = inst_26162;var state_26169__$1 = (function (){var statearr_26172 = state_26169;(statearr_26172[(8)] = inst_26155__$1);
return statearr_26172;
})();var statearr_26173_26188 = state_26169__$1;(statearr_26173_26188[(2)] = null);
(statearr_26173_26188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26170 === (5)))
{var inst_26155 = (state_26169[(8)]);var state_26169__$1 = state_26169;var statearr_26174_26189 = state_26169__$1;(statearr_26174_26189[(2)] = inst_26155);
(statearr_26174_26189[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26170 === (4)))
{var inst_26158 = (state_26169[(7)]);var inst_26158__$1 = (state_26169[(2)]);var inst_26159 = (inst_26158__$1 == null);var state_26169__$1 = (function (){var statearr_26175 = state_26169;(statearr_26175[(7)] = inst_26158__$1);
return statearr_26175;
})();if(cljs.core.truth_(inst_26159))
{var statearr_26176_26190 = state_26169__$1;(statearr_26176_26190[(1)] = (5));
} else
{var statearr_26177_26191 = state_26169__$1;(statearr_26177_26191[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26170 === (3)))
{var inst_26167 = (state_26169[(2)]);var state_26169__$1 = state_26169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26169__$1,inst_26167);
} else
{if((state_val_26170 === (2)))
{var state_26169__$1 = state_26169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26169__$1,(4),ch);
} else
{if((state_val_26170 === (1)))
{var inst_26155 = init;var state_26169__$1 = (function (){var statearr_26178 = state_26169;(statearr_26178[(8)] = inst_26155);
return statearr_26178;
})();var statearr_26179_26192 = state_26169__$1;(statearr_26179_26192[(2)] = null);
(statearr_26179_26192[(1)] = (2));
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
});})(c__18367__auto__))
;return ((function (switch__18302__auto__,c__18367__auto__){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_26183 = [null,null,null,null,null,null,null,null,null];(statearr_26183[(0)] = state_machine__18303__auto__);
(statearr_26183[(1)] = (1));
return statearr_26183;
});
var state_machine__18303__auto____1 = (function (state_26169){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_26169);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e26184){if((e26184 instanceof Object))
{var ex__18306__auto__ = e26184;var statearr_26185_26193 = state_26169;(statearr_26185_26193[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26169);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26184;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26194 = state_26169;
state_26169 = G__26194;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_26169){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_26169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto__))
})();var state__18369__auto__ = (function (){var statearr_26186 = f__18368__auto__.call(null);(statearr_26186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto__);
return statearr_26186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto__))
);
return c__18367__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto__){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto__){
return (function (state_26268){var state_val_26269 = (state_26268[(1)]);if((state_val_26269 === (7)))
{var inst_26250 = (state_26268[(2)]);var state_26268__$1 = state_26268;var statearr_26270_26293 = state_26268__$1;(statearr_26270_26293[(2)] = inst_26250);
(statearr_26270_26293[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26269 === (1)))
{var inst_26244 = cljs.core.seq.call(null,coll);var inst_26245 = inst_26244;var state_26268__$1 = (function (){var statearr_26271 = state_26268;(statearr_26271[(7)] = inst_26245);
return statearr_26271;
})();var statearr_26272_26294 = state_26268__$1;(statearr_26272_26294[(2)] = null);
(statearr_26272_26294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26269 === (4)))
{var inst_26245 = (state_26268[(7)]);var inst_26248 = cljs.core.first.call(null,inst_26245);var state_26268__$1 = state_26268;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26268__$1,(7),ch,inst_26248);
} else
{if((state_val_26269 === (13)))
{var inst_26262 = (state_26268[(2)]);var state_26268__$1 = state_26268;var statearr_26273_26295 = state_26268__$1;(statearr_26273_26295[(2)] = inst_26262);
(statearr_26273_26295[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26269 === (6)))
{var inst_26253 = (state_26268[(2)]);var state_26268__$1 = state_26268;if(cljs.core.truth_(inst_26253))
{var statearr_26274_26296 = state_26268__$1;(statearr_26274_26296[(1)] = (8));
} else
{var statearr_26275_26297 = state_26268__$1;(statearr_26275_26297[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26269 === (3)))
{var inst_26266 = (state_26268[(2)]);var state_26268__$1 = state_26268;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26268__$1,inst_26266);
} else
{if((state_val_26269 === (12)))
{var state_26268__$1 = state_26268;var statearr_26276_26298 = state_26268__$1;(statearr_26276_26298[(2)] = null);
(statearr_26276_26298[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26269 === (2)))
{var inst_26245 = (state_26268[(7)]);var state_26268__$1 = state_26268;if(cljs.core.truth_(inst_26245))
{var statearr_26277_26299 = state_26268__$1;(statearr_26277_26299[(1)] = (4));
} else
{var statearr_26278_26300 = state_26268__$1;(statearr_26278_26300[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26269 === (11)))
{var inst_26259 = cljs.core.async.close_BANG_.call(null,ch);var state_26268__$1 = state_26268;var statearr_26279_26301 = state_26268__$1;(statearr_26279_26301[(2)] = inst_26259);
(statearr_26279_26301[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26269 === (9)))
{var state_26268__$1 = state_26268;if(cljs.core.truth_(close_QMARK_))
{var statearr_26280_26302 = state_26268__$1;(statearr_26280_26302[(1)] = (11));
} else
{var statearr_26281_26303 = state_26268__$1;(statearr_26281_26303[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26269 === (5)))
{var inst_26245 = (state_26268[(7)]);var state_26268__$1 = state_26268;var statearr_26282_26304 = state_26268__$1;(statearr_26282_26304[(2)] = inst_26245);
(statearr_26282_26304[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26269 === (10)))
{var inst_26264 = (state_26268[(2)]);var state_26268__$1 = state_26268;var statearr_26283_26305 = state_26268__$1;(statearr_26283_26305[(2)] = inst_26264);
(statearr_26283_26305[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26269 === (8)))
{var inst_26245 = (state_26268[(7)]);var inst_26255 = cljs.core.next.call(null,inst_26245);var inst_26245__$1 = inst_26255;var state_26268__$1 = (function (){var statearr_26284 = state_26268;(statearr_26284[(7)] = inst_26245__$1);
return statearr_26284;
})();var statearr_26285_26306 = state_26268__$1;(statearr_26285_26306[(2)] = null);
(statearr_26285_26306[(1)] = (2));
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
});})(c__18367__auto__))
;return ((function (switch__18302__auto__,c__18367__auto__){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_26289 = [null,null,null,null,null,null,null,null];(statearr_26289[(0)] = state_machine__18303__auto__);
(statearr_26289[(1)] = (1));
return statearr_26289;
});
var state_machine__18303__auto____1 = (function (state_26268){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_26268);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e26290){if((e26290 instanceof Object))
{var ex__18306__auto__ = e26290;var statearr_26291_26307 = state_26268;(statearr_26291_26307[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26268);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26290;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26308 = state_26268;
state_26268 = G__26308;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_26268){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_26268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto__))
})();var state__18369__auto__ = (function (){var statearr_26292 = f__18368__auto__.call(null);(statearr_26292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto__);
return statearr_26292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto__))
);
return c__18367__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj26310 = {};return obj26310;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11367__auto__ = _;if(and__11367__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11367__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12006__auto__ = (((_ == null))?null:_);return (function (){var or__11379__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26312 = {};return obj26312;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11367__auto__ = m;if(and__11367__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11367__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12006__auto__ = (((m == null))?null:m);return (function (){var or__11379__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11367__auto__ = m;if(and__11367__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11367__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12006__auto__ = (((m == null))?null:m);return (function (){var or__11379__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11367__auto__ = m;if(and__11367__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11367__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12006__auto__ = (((m == null))?null:m);return (function (){var or__11379__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26534 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26534 = (function (cs,ch,mult,meta26535){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26535 = meta26535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26534.cljs$lang$type = true;
cljs.core.async.t26534.cljs$lang$ctorStr = "cljs.core.async/t26534";
cljs.core.async.t26534.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"cljs.core.async/t26534");
});})(cs))
;
cljs.core.async.t26534.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26534.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26534.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26534.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26534.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26534.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26536){var self__ = this;
var _26536__$1 = this;return self__.meta26535;
});})(cs))
;
cljs.core.async.t26534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26536,meta26535__$1){var self__ = this;
var _26536__$1 = this;return (new cljs.core.async.t26534(self__.cs,self__.ch,self__.mult,meta26535__$1));
});})(cs))
;
cljs.core.async.__GT_t26534 = ((function (cs){
return (function __GT_t26534(cs__$1,ch__$1,mult__$1,meta26535){return (new cljs.core.async.t26534(cs__$1,ch__$1,mult__$1,meta26535));
});})(cs))
;
}
return (new cljs.core.async.t26534(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18367__auto___26755 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___26755,cs,m,dchan,dctr,done){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___26755,cs,m,dchan,dctr,done){
return (function (state_26667){var state_val_26668 = (state_26667[(1)]);if((state_val_26668 === (7)))
{var inst_26663 = (state_26667[(2)]);var state_26667__$1 = state_26667;var statearr_26669_26756 = state_26667__$1;(statearr_26669_26756[(2)] = inst_26663);
(statearr_26669_26756[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (20)))
{var inst_26568 = (state_26667[(7)]);var inst_26578 = cljs.core.first.call(null,inst_26568);var inst_26579 = cljs.core.nth.call(null,inst_26578,(0),null);var inst_26580 = cljs.core.nth.call(null,inst_26578,(1),null);var state_26667__$1 = (function (){var statearr_26670 = state_26667;(statearr_26670[(8)] = inst_26579);
return statearr_26670;
})();if(cljs.core.truth_(inst_26580))
{var statearr_26671_26757 = state_26667__$1;(statearr_26671_26757[(1)] = (22));
} else
{var statearr_26672_26758 = state_26667__$1;(statearr_26672_26758[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (27)))
{var inst_26539 = (state_26667[(9)]);var inst_26610 = (state_26667[(10)]);var inst_26608 = (state_26667[(11)]);var inst_26615 = (state_26667[(12)]);var inst_26615__$1 = cljs.core._nth.call(null,inst_26608,inst_26610);var inst_26616 = cljs.core.async.put_BANG_.call(null,inst_26615__$1,inst_26539,done);var state_26667__$1 = (function (){var statearr_26673 = state_26667;(statearr_26673[(12)] = inst_26615__$1);
return statearr_26673;
})();if(cljs.core.truth_(inst_26616))
{var statearr_26674_26759 = state_26667__$1;(statearr_26674_26759[(1)] = (30));
} else
{var statearr_26675_26760 = state_26667__$1;(statearr_26675_26760[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (1)))
{var state_26667__$1 = state_26667;var statearr_26676_26761 = state_26667__$1;(statearr_26676_26761[(2)] = null);
(statearr_26676_26761[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (24)))
{var inst_26568 = (state_26667[(7)]);var inst_26585 = (state_26667[(2)]);var inst_26586 = cljs.core.next.call(null,inst_26568);var inst_26548 = inst_26586;var inst_26549 = null;var inst_26550 = (0);var inst_26551 = (0);var state_26667__$1 = (function (){var statearr_26677 = state_26667;(statearr_26677[(13)] = inst_26551);
(statearr_26677[(14)] = inst_26585);
(statearr_26677[(15)] = inst_26549);
(statearr_26677[(16)] = inst_26548);
(statearr_26677[(17)] = inst_26550);
return statearr_26677;
})();var statearr_26678_26762 = state_26667__$1;(statearr_26678_26762[(2)] = null);
(statearr_26678_26762[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (39)))
{var state_26667__$1 = state_26667;var statearr_26682_26763 = state_26667__$1;(statearr_26682_26763[(2)] = null);
(statearr_26682_26763[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (4)))
{var inst_26539 = (state_26667[(9)]);var inst_26539__$1 = (state_26667[(2)]);var inst_26540 = (inst_26539__$1 == null);var state_26667__$1 = (function (){var statearr_26683 = state_26667;(statearr_26683[(9)] = inst_26539__$1);
return statearr_26683;
})();if(cljs.core.truth_(inst_26540))
{var statearr_26684_26764 = state_26667__$1;(statearr_26684_26764[(1)] = (5));
} else
{var statearr_26685_26765 = state_26667__$1;(statearr_26685_26765[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (15)))
{var inst_26551 = (state_26667[(13)]);var inst_26549 = (state_26667[(15)]);var inst_26548 = (state_26667[(16)]);var inst_26550 = (state_26667[(17)]);var inst_26564 = (state_26667[(2)]);var inst_26565 = (inst_26551 + (1));var tmp26679 = inst_26549;var tmp26680 = inst_26548;var tmp26681 = inst_26550;var inst_26548__$1 = tmp26680;var inst_26549__$1 = tmp26679;var inst_26550__$1 = tmp26681;var inst_26551__$1 = inst_26565;var state_26667__$1 = (function (){var statearr_26686 = state_26667;(statearr_26686[(13)] = inst_26551__$1);
(statearr_26686[(18)] = inst_26564);
(statearr_26686[(15)] = inst_26549__$1);
(statearr_26686[(16)] = inst_26548__$1);
(statearr_26686[(17)] = inst_26550__$1);
return statearr_26686;
})();var statearr_26687_26766 = state_26667__$1;(statearr_26687_26766[(2)] = null);
(statearr_26687_26766[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (21)))
{var inst_26589 = (state_26667[(2)]);var state_26667__$1 = state_26667;var statearr_26691_26767 = state_26667__$1;(statearr_26691_26767[(2)] = inst_26589);
(statearr_26691_26767[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (31)))
{var inst_26615 = (state_26667[(12)]);var inst_26619 = done.call(null,null);var inst_26620 = cljs.core.async.untap_STAR_.call(null,m,inst_26615);var state_26667__$1 = (function (){var statearr_26692 = state_26667;(statearr_26692[(19)] = inst_26619);
return statearr_26692;
})();var statearr_26693_26768 = state_26667__$1;(statearr_26693_26768[(2)] = inst_26620);
(statearr_26693_26768[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (32)))
{var inst_26607 = (state_26667[(20)]);var inst_26609 = (state_26667[(21)]);var inst_26610 = (state_26667[(10)]);var inst_26608 = (state_26667[(11)]);var inst_26622 = (state_26667[(2)]);var inst_26623 = (inst_26610 + (1));var tmp26688 = inst_26607;var tmp26689 = inst_26609;var tmp26690 = inst_26608;var inst_26607__$1 = tmp26688;var inst_26608__$1 = tmp26690;var inst_26609__$1 = tmp26689;var inst_26610__$1 = inst_26623;var state_26667__$1 = (function (){var statearr_26694 = state_26667;(statearr_26694[(20)] = inst_26607__$1);
(statearr_26694[(21)] = inst_26609__$1);
(statearr_26694[(10)] = inst_26610__$1);
(statearr_26694[(11)] = inst_26608__$1);
(statearr_26694[(22)] = inst_26622);
return statearr_26694;
})();var statearr_26695_26769 = state_26667__$1;(statearr_26695_26769[(2)] = null);
(statearr_26695_26769[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (40)))
{var inst_26635 = (state_26667[(23)]);var inst_26639 = done.call(null,null);var inst_26640 = cljs.core.async.untap_STAR_.call(null,m,inst_26635);var state_26667__$1 = (function (){var statearr_26696 = state_26667;(statearr_26696[(24)] = inst_26639);
return statearr_26696;
})();var statearr_26697_26770 = state_26667__$1;(statearr_26697_26770[(2)] = inst_26640);
(statearr_26697_26770[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (33)))
{var inst_26626 = (state_26667[(25)]);var inst_26628 = cljs.core.chunked_seq_QMARK_.call(null,inst_26626);var state_26667__$1 = state_26667;if(inst_26628)
{var statearr_26698_26771 = state_26667__$1;(statearr_26698_26771[(1)] = (36));
} else
{var statearr_26699_26772 = state_26667__$1;(statearr_26699_26772[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (13)))
{var inst_26558 = (state_26667[(26)]);var inst_26561 = cljs.core.async.close_BANG_.call(null,inst_26558);var state_26667__$1 = state_26667;var statearr_26700_26773 = state_26667__$1;(statearr_26700_26773[(2)] = inst_26561);
(statearr_26700_26773[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (22)))
{var inst_26579 = (state_26667[(8)]);var inst_26582 = cljs.core.async.close_BANG_.call(null,inst_26579);var state_26667__$1 = state_26667;var statearr_26701_26774 = state_26667__$1;(statearr_26701_26774[(2)] = inst_26582);
(statearr_26701_26774[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (36)))
{var inst_26626 = (state_26667[(25)]);var inst_26630 = cljs.core.chunk_first.call(null,inst_26626);var inst_26631 = cljs.core.chunk_rest.call(null,inst_26626);var inst_26632 = cljs.core.count.call(null,inst_26630);var inst_26607 = inst_26631;var inst_26608 = inst_26630;var inst_26609 = inst_26632;var inst_26610 = (0);var state_26667__$1 = (function (){var statearr_26702 = state_26667;(statearr_26702[(20)] = inst_26607);
(statearr_26702[(21)] = inst_26609);
(statearr_26702[(10)] = inst_26610);
(statearr_26702[(11)] = inst_26608);
return statearr_26702;
})();var statearr_26703_26775 = state_26667__$1;(statearr_26703_26775[(2)] = null);
(statearr_26703_26775[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (41)))
{var inst_26626 = (state_26667[(25)]);var inst_26642 = (state_26667[(2)]);var inst_26643 = cljs.core.next.call(null,inst_26626);var inst_26607 = inst_26643;var inst_26608 = null;var inst_26609 = (0);var inst_26610 = (0);var state_26667__$1 = (function (){var statearr_26704 = state_26667;(statearr_26704[(20)] = inst_26607);
(statearr_26704[(21)] = inst_26609);
(statearr_26704[(10)] = inst_26610);
(statearr_26704[(27)] = inst_26642);
(statearr_26704[(11)] = inst_26608);
return statearr_26704;
})();var statearr_26705_26776 = state_26667__$1;(statearr_26705_26776[(2)] = null);
(statearr_26705_26776[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (43)))
{var state_26667__$1 = state_26667;var statearr_26706_26777 = state_26667__$1;(statearr_26706_26777[(2)] = null);
(statearr_26706_26777[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (29)))
{var inst_26651 = (state_26667[(2)]);var state_26667__$1 = state_26667;var statearr_26707_26778 = state_26667__$1;(statearr_26707_26778[(2)] = inst_26651);
(statearr_26707_26778[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (44)))
{var inst_26660 = (state_26667[(2)]);var state_26667__$1 = (function (){var statearr_26708 = state_26667;(statearr_26708[(28)] = inst_26660);
return statearr_26708;
})();var statearr_26709_26779 = state_26667__$1;(statearr_26709_26779[(2)] = null);
(statearr_26709_26779[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (6)))
{var inst_26599 = (state_26667[(29)]);var inst_26598 = cljs.core.deref.call(null,cs);var inst_26599__$1 = cljs.core.keys.call(null,inst_26598);var inst_26600 = cljs.core.count.call(null,inst_26599__$1);var inst_26601 = cljs.core.reset_BANG_.call(null,dctr,inst_26600);var inst_26606 = cljs.core.seq.call(null,inst_26599__$1);var inst_26607 = inst_26606;var inst_26608 = null;var inst_26609 = (0);var inst_26610 = (0);var state_26667__$1 = (function (){var statearr_26710 = state_26667;(statearr_26710[(20)] = inst_26607);
(statearr_26710[(21)] = inst_26609);
(statearr_26710[(10)] = inst_26610);
(statearr_26710[(30)] = inst_26601);
(statearr_26710[(11)] = inst_26608);
(statearr_26710[(29)] = inst_26599__$1);
return statearr_26710;
})();var statearr_26711_26780 = state_26667__$1;(statearr_26711_26780[(2)] = null);
(statearr_26711_26780[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (28)))
{var inst_26607 = (state_26667[(20)]);var inst_26626 = (state_26667[(25)]);var inst_26626__$1 = cljs.core.seq.call(null,inst_26607);var state_26667__$1 = (function (){var statearr_26712 = state_26667;(statearr_26712[(25)] = inst_26626__$1);
return statearr_26712;
})();if(inst_26626__$1)
{var statearr_26713_26781 = state_26667__$1;(statearr_26713_26781[(1)] = (33));
} else
{var statearr_26714_26782 = state_26667__$1;(statearr_26714_26782[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (25)))
{var inst_26609 = (state_26667[(21)]);var inst_26610 = (state_26667[(10)]);var inst_26612 = (inst_26610 < inst_26609);var inst_26613 = inst_26612;var state_26667__$1 = state_26667;if(cljs.core.truth_(inst_26613))
{var statearr_26715_26783 = state_26667__$1;(statearr_26715_26783[(1)] = (27));
} else
{var statearr_26716_26784 = state_26667__$1;(statearr_26716_26784[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (34)))
{var state_26667__$1 = state_26667;var statearr_26717_26785 = state_26667__$1;(statearr_26717_26785[(2)] = null);
(statearr_26717_26785[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (17)))
{var state_26667__$1 = state_26667;var statearr_26718_26786 = state_26667__$1;(statearr_26718_26786[(2)] = null);
(statearr_26718_26786[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (3)))
{var inst_26665 = (state_26667[(2)]);var state_26667__$1 = state_26667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26667__$1,inst_26665);
} else
{if((state_val_26668 === (12)))
{var inst_26594 = (state_26667[(2)]);var state_26667__$1 = state_26667;var statearr_26719_26787 = state_26667__$1;(statearr_26719_26787[(2)] = inst_26594);
(statearr_26719_26787[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (2)))
{var state_26667__$1 = state_26667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(4),ch);
} else
{if((state_val_26668 === (23)))
{var state_26667__$1 = state_26667;var statearr_26720_26788 = state_26667__$1;(statearr_26720_26788[(2)] = null);
(statearr_26720_26788[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (35)))
{var inst_26649 = (state_26667[(2)]);var state_26667__$1 = state_26667;var statearr_26721_26789 = state_26667__$1;(statearr_26721_26789[(2)] = inst_26649);
(statearr_26721_26789[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (19)))
{var inst_26568 = (state_26667[(7)]);var inst_26572 = cljs.core.chunk_first.call(null,inst_26568);var inst_26573 = cljs.core.chunk_rest.call(null,inst_26568);var inst_26574 = cljs.core.count.call(null,inst_26572);var inst_26548 = inst_26573;var inst_26549 = inst_26572;var inst_26550 = inst_26574;var inst_26551 = (0);var state_26667__$1 = (function (){var statearr_26722 = state_26667;(statearr_26722[(13)] = inst_26551);
(statearr_26722[(15)] = inst_26549);
(statearr_26722[(16)] = inst_26548);
(statearr_26722[(17)] = inst_26550);
return statearr_26722;
})();var statearr_26723_26790 = state_26667__$1;(statearr_26723_26790[(2)] = null);
(statearr_26723_26790[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (11)))
{var inst_26568 = (state_26667[(7)]);var inst_26548 = (state_26667[(16)]);var inst_26568__$1 = cljs.core.seq.call(null,inst_26548);var state_26667__$1 = (function (){var statearr_26724 = state_26667;(statearr_26724[(7)] = inst_26568__$1);
return statearr_26724;
})();if(inst_26568__$1)
{var statearr_26725_26791 = state_26667__$1;(statearr_26725_26791[(1)] = (16));
} else
{var statearr_26726_26792 = state_26667__$1;(statearr_26726_26792[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (9)))
{var inst_26596 = (state_26667[(2)]);var state_26667__$1 = state_26667;var statearr_26727_26793 = state_26667__$1;(statearr_26727_26793[(2)] = inst_26596);
(statearr_26727_26793[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (5)))
{var inst_26546 = cljs.core.deref.call(null,cs);var inst_26547 = cljs.core.seq.call(null,inst_26546);var inst_26548 = inst_26547;var inst_26549 = null;var inst_26550 = (0);var inst_26551 = (0);var state_26667__$1 = (function (){var statearr_26728 = state_26667;(statearr_26728[(13)] = inst_26551);
(statearr_26728[(15)] = inst_26549);
(statearr_26728[(16)] = inst_26548);
(statearr_26728[(17)] = inst_26550);
return statearr_26728;
})();var statearr_26729_26794 = state_26667__$1;(statearr_26729_26794[(2)] = null);
(statearr_26729_26794[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (14)))
{var state_26667__$1 = state_26667;var statearr_26730_26795 = state_26667__$1;(statearr_26730_26795[(2)] = null);
(statearr_26730_26795[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (45)))
{var inst_26657 = (state_26667[(2)]);var state_26667__$1 = state_26667;var statearr_26731_26796 = state_26667__$1;(statearr_26731_26796[(2)] = inst_26657);
(statearr_26731_26796[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (26)))
{var inst_26599 = (state_26667[(29)]);var inst_26653 = (state_26667[(2)]);var inst_26654 = cljs.core.seq.call(null,inst_26599);var state_26667__$1 = (function (){var statearr_26732 = state_26667;(statearr_26732[(31)] = inst_26653);
return statearr_26732;
})();if(inst_26654)
{var statearr_26733_26797 = state_26667__$1;(statearr_26733_26797[(1)] = (42));
} else
{var statearr_26734_26798 = state_26667__$1;(statearr_26734_26798[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (16)))
{var inst_26568 = (state_26667[(7)]);var inst_26570 = cljs.core.chunked_seq_QMARK_.call(null,inst_26568);var state_26667__$1 = state_26667;if(inst_26570)
{var statearr_26735_26799 = state_26667__$1;(statearr_26735_26799[(1)] = (19));
} else
{var statearr_26736_26800 = state_26667__$1;(statearr_26736_26800[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (38)))
{var inst_26646 = (state_26667[(2)]);var state_26667__$1 = state_26667;var statearr_26737_26801 = state_26667__$1;(statearr_26737_26801[(2)] = inst_26646);
(statearr_26737_26801[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (30)))
{var state_26667__$1 = state_26667;var statearr_26738_26802 = state_26667__$1;(statearr_26738_26802[(2)] = null);
(statearr_26738_26802[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (10)))
{var inst_26551 = (state_26667[(13)]);var inst_26549 = (state_26667[(15)]);var inst_26557 = cljs.core._nth.call(null,inst_26549,inst_26551);var inst_26558 = cljs.core.nth.call(null,inst_26557,(0),null);var inst_26559 = cljs.core.nth.call(null,inst_26557,(1),null);var state_26667__$1 = (function (){var statearr_26739 = state_26667;(statearr_26739[(26)] = inst_26558);
return statearr_26739;
})();if(cljs.core.truth_(inst_26559))
{var statearr_26740_26803 = state_26667__$1;(statearr_26740_26803[(1)] = (13));
} else
{var statearr_26741_26804 = state_26667__$1;(statearr_26741_26804[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (18)))
{var inst_26592 = (state_26667[(2)]);var state_26667__$1 = state_26667;var statearr_26742_26805 = state_26667__$1;(statearr_26742_26805[(2)] = inst_26592);
(statearr_26742_26805[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (42)))
{var state_26667__$1 = state_26667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(45),dchan);
} else
{if((state_val_26668 === (37)))
{var inst_26626 = (state_26667[(25)]);var inst_26539 = (state_26667[(9)]);var inst_26635 = (state_26667[(23)]);var inst_26635__$1 = cljs.core.first.call(null,inst_26626);var inst_26636 = cljs.core.async.put_BANG_.call(null,inst_26635__$1,inst_26539,done);var state_26667__$1 = (function (){var statearr_26743 = state_26667;(statearr_26743[(23)] = inst_26635__$1);
return statearr_26743;
})();if(cljs.core.truth_(inst_26636))
{var statearr_26744_26806 = state_26667__$1;(statearr_26744_26806[(1)] = (39));
} else
{var statearr_26745_26807 = state_26667__$1;(statearr_26745_26807[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26668 === (8)))
{var inst_26551 = (state_26667[(13)]);var inst_26550 = (state_26667[(17)]);var inst_26553 = (inst_26551 < inst_26550);var inst_26554 = inst_26553;var state_26667__$1 = state_26667;if(cljs.core.truth_(inst_26554))
{var statearr_26746_26808 = state_26667__$1;(statearr_26746_26808[(1)] = (10));
} else
{var statearr_26747_26809 = state_26667__$1;(statearr_26747_26809[(1)] = (11));
}
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
}
}
}
}
}
}
}
});})(c__18367__auto___26755,cs,m,dchan,dctr,done))
;return ((function (switch__18302__auto__,c__18367__auto___26755,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_26751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26751[(0)] = state_machine__18303__auto__);
(statearr_26751[(1)] = (1));
return statearr_26751;
});
var state_machine__18303__auto____1 = (function (state_26667){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_26667);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e26752){if((e26752 instanceof Object))
{var ex__18306__auto__ = e26752;var statearr_26753_26810 = state_26667;(statearr_26753_26810[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26752;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26811 = state_26667;
state_26667 = G__26811;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_26667){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_26667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___26755,cs,m,dchan,dctr,done))
})();var state__18369__auto__ = (function (){var statearr_26754 = f__18368__auto__.call(null);(statearr_26754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___26755);
return statearr_26754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___26755,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj26813 = {};return obj26813;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11367__auto__ = m;if(and__11367__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11367__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12006__auto__ = (((m == null))?null:m);return (function (){var or__11379__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11367__auto__ = m;if(and__11367__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11367__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12006__auto__ = (((m == null))?null:m);return (function (){var or__11379__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11367__auto__ = m;if(and__11367__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11367__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12006__auto__ = (((m == null))?null:m);return (function (){var or__11379__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11367__auto__ = m;if(and__11367__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11367__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12006__auto__ = (((m == null))?null:m);return (function (){var or__11379__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11367__auto__ = m;if(and__11367__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11367__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12006__auto__ = (((m == null))?null:m);return (function (){var or__11379__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t26933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26933 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26934){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26934 = meta26934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26933.cljs$lang$type = true;
cljs.core.async.t26933.cljs$lang$ctorStr = "cljs.core.async/t26933";
cljs.core.async.t26933.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"cljs.core.async/t26933");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26933.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26933.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26933.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26933.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26933.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26933.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26933.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26935){var self__ = this;
var _26935__$1 = this;return self__.meta26934;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26935,meta26934__$1){var self__ = this;
var _26935__$1 = this;return (new cljs.core.async.t26933(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26934__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26933 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26933(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26934){return (new cljs.core.async.t26933(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26934));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26933(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__18367__auto___27052 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___27052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___27052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27005){var state_val_27006 = (state_27005[(1)]);if((state_val_27006 === (7)))
{var inst_26949 = (state_27005[(7)]);var inst_26954 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26949);var state_27005__$1 = state_27005;var statearr_27007_27053 = state_27005__$1;(statearr_27007_27053[(2)] = inst_26954);
(statearr_27007_27053[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (20)))
{var inst_26964 = (state_27005[(8)]);var state_27005__$1 = state_27005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27005__$1,(23),out,inst_26964);
} else
{if((state_val_27006 === (1)))
{var inst_26939 = (state_27005[(9)]);var inst_26939__$1 = calc_state.call(null);var inst_26940 = cljs.core.seq_QMARK_.call(null,inst_26939__$1);var state_27005__$1 = (function (){var statearr_27008 = state_27005;(statearr_27008[(9)] = inst_26939__$1);
return statearr_27008;
})();if(inst_26940)
{var statearr_27009_27054 = state_27005__$1;(statearr_27009_27054[(1)] = (2));
} else
{var statearr_27010_27055 = state_27005__$1;(statearr_27010_27055[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (24)))
{var inst_26957 = (state_27005[(10)]);var inst_26949 = inst_26957;var state_27005__$1 = (function (){var statearr_27011 = state_27005;(statearr_27011[(7)] = inst_26949);
return statearr_27011;
})();var statearr_27012_27056 = state_27005__$1;(statearr_27012_27056[(2)] = null);
(statearr_27012_27056[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (4)))
{var inst_26939 = (state_27005[(9)]);var inst_26945 = (state_27005[(2)]);var inst_26946 = cljs.core.get.call(null,inst_26945,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_26947 = cljs.core.get.call(null,inst_26945,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_26948 = cljs.core.get.call(null,inst_26945,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_26949 = inst_26939;var state_27005__$1 = (function (){var statearr_27013 = state_27005;(statearr_27013[(11)] = inst_26947);
(statearr_27013[(7)] = inst_26949);
(statearr_27013[(12)] = inst_26946);
(statearr_27013[(13)] = inst_26948);
return statearr_27013;
})();var statearr_27014_27057 = state_27005__$1;(statearr_27014_27057[(2)] = null);
(statearr_27014_27057[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (15)))
{var state_27005__$1 = state_27005;var statearr_27015_27058 = state_27005__$1;(statearr_27015_27058[(2)] = null);
(statearr_27015_27058[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (21)))
{var inst_26957 = (state_27005[(10)]);var inst_26949 = inst_26957;var state_27005__$1 = (function (){var statearr_27016 = state_27005;(statearr_27016[(7)] = inst_26949);
return statearr_27016;
})();var statearr_27017_27059 = state_27005__$1;(statearr_27017_27059[(2)] = null);
(statearr_27017_27059[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (13)))
{var inst_27001 = (state_27005[(2)]);var state_27005__$1 = state_27005;var statearr_27018_27060 = state_27005__$1;(statearr_27018_27060[(2)] = inst_27001);
(statearr_27018_27060[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (22)))
{var inst_26999 = (state_27005[(2)]);var state_27005__$1 = state_27005;var statearr_27019_27061 = state_27005__$1;(statearr_27019_27061[(2)] = inst_26999);
(statearr_27019_27061[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (6)))
{var inst_27003 = (state_27005[(2)]);var state_27005__$1 = state_27005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27005__$1,inst_27003);
} else
{if((state_val_27006 === (25)))
{var state_27005__$1 = state_27005;var statearr_27020_27062 = state_27005__$1;(statearr_27020_27062[(2)] = null);
(statearr_27020_27062[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (17)))
{var inst_26979 = (state_27005[(14)]);var state_27005__$1 = state_27005;var statearr_27021_27063 = state_27005__$1;(statearr_27021_27063[(2)] = inst_26979);
(statearr_27021_27063[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (3)))
{var inst_26939 = (state_27005[(9)]);var state_27005__$1 = state_27005;var statearr_27022_27064 = state_27005__$1;(statearr_27022_27064[(2)] = inst_26939);
(statearr_27022_27064[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (12)))
{var inst_26979 = (state_27005[(14)]);var inst_26960 = (state_27005[(15)]);var inst_26965 = (state_27005[(16)]);var inst_26979__$1 = inst_26960.call(null,inst_26965);var state_27005__$1 = (function (){var statearr_27023 = state_27005;(statearr_27023[(14)] = inst_26979__$1);
return statearr_27023;
})();if(cljs.core.truth_(inst_26979__$1))
{var statearr_27024_27065 = state_27005__$1;(statearr_27024_27065[(1)] = (17));
} else
{var statearr_27025_27066 = state_27005__$1;(statearr_27025_27066[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (2)))
{var inst_26939 = (state_27005[(9)]);var inst_26942 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26939);var state_27005__$1 = state_27005;var statearr_27026_27067 = state_27005__$1;(statearr_27026_27067[(2)] = inst_26942);
(statearr_27026_27067[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (23)))
{var inst_26990 = (state_27005[(2)]);var state_27005__$1 = state_27005;if(cljs.core.truth_(inst_26990))
{var statearr_27027_27068 = state_27005__$1;(statearr_27027_27068[(1)] = (24));
} else
{var statearr_27028_27069 = state_27005__$1;(statearr_27028_27069[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (19)))
{var inst_26987 = (state_27005[(2)]);var state_27005__$1 = state_27005;if(cljs.core.truth_(inst_26987))
{var statearr_27029_27070 = state_27005__$1;(statearr_27029_27070[(1)] = (20));
} else
{var statearr_27030_27071 = state_27005__$1;(statearr_27030_27071[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (11)))
{var inst_26964 = (state_27005[(8)]);var inst_26970 = (inst_26964 == null);var state_27005__$1 = state_27005;if(cljs.core.truth_(inst_26970))
{var statearr_27031_27072 = state_27005__$1;(statearr_27031_27072[(1)] = (14));
} else
{var statearr_27032_27073 = state_27005__$1;(statearr_27032_27073[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (9)))
{var inst_26957 = (state_27005[(10)]);var inst_26957__$1 = (state_27005[(2)]);var inst_26958 = cljs.core.get.call(null,inst_26957__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_26959 = cljs.core.get.call(null,inst_26957__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_26960 = cljs.core.get.call(null,inst_26957__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_27005__$1 = (function (){var statearr_27033 = state_27005;(statearr_27033[(15)] = inst_26960);
(statearr_27033[(17)] = inst_26959);
(statearr_27033[(10)] = inst_26957__$1);
return statearr_27033;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27005__$1,(10),inst_26958);
} else
{if((state_val_27006 === (5)))
{var inst_26949 = (state_27005[(7)]);var inst_26952 = cljs.core.seq_QMARK_.call(null,inst_26949);var state_27005__$1 = state_27005;if(inst_26952)
{var statearr_27034_27074 = state_27005__$1;(statearr_27034_27074[(1)] = (7));
} else
{var statearr_27035_27075 = state_27005__$1;(statearr_27035_27075[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (14)))
{var inst_26965 = (state_27005[(16)]);var inst_26972 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26965);var state_27005__$1 = state_27005;var statearr_27036_27076 = state_27005__$1;(statearr_27036_27076[(2)] = inst_26972);
(statearr_27036_27076[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (26)))
{var inst_26995 = (state_27005[(2)]);var state_27005__$1 = state_27005;var statearr_27037_27077 = state_27005__$1;(statearr_27037_27077[(2)] = inst_26995);
(statearr_27037_27077[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (16)))
{var inst_26975 = (state_27005[(2)]);var inst_26976 = calc_state.call(null);var inst_26949 = inst_26976;var state_27005__$1 = (function (){var statearr_27038 = state_27005;(statearr_27038[(7)] = inst_26949);
(statearr_27038[(18)] = inst_26975);
return statearr_27038;
})();var statearr_27039_27078 = state_27005__$1;(statearr_27039_27078[(2)] = null);
(statearr_27039_27078[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (10)))
{var inst_26964 = (state_27005[(8)]);var inst_26965 = (state_27005[(16)]);var inst_26963 = (state_27005[(2)]);var inst_26964__$1 = cljs.core.nth.call(null,inst_26963,(0),null);var inst_26965__$1 = cljs.core.nth.call(null,inst_26963,(1),null);var inst_26966 = (inst_26964__$1 == null);var inst_26967 = cljs.core._EQ_.call(null,inst_26965__$1,change);var inst_26968 = (inst_26966) || (inst_26967);var state_27005__$1 = (function (){var statearr_27040 = state_27005;(statearr_27040[(8)] = inst_26964__$1);
(statearr_27040[(16)] = inst_26965__$1);
return statearr_27040;
})();if(cljs.core.truth_(inst_26968))
{var statearr_27041_27079 = state_27005__$1;(statearr_27041_27079[(1)] = (11));
} else
{var statearr_27042_27080 = state_27005__$1;(statearr_27042_27080[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (18)))
{var inst_26960 = (state_27005[(15)]);var inst_26959 = (state_27005[(17)]);var inst_26965 = (state_27005[(16)]);var inst_26982 = cljs.core.empty_QMARK_.call(null,inst_26960);var inst_26983 = inst_26959.call(null,inst_26965);var inst_26984 = cljs.core.not.call(null,inst_26983);var inst_26985 = (inst_26982) && (inst_26984);var state_27005__$1 = state_27005;var statearr_27043_27081 = state_27005__$1;(statearr_27043_27081[(2)] = inst_26985);
(statearr_27043_27081[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27006 === (8)))
{var inst_26949 = (state_27005[(7)]);var state_27005__$1 = state_27005;var statearr_27044_27082 = state_27005__$1;(statearr_27044_27082[(2)] = inst_26949);
(statearr_27044_27082[(1)] = (9));
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
}
}
}
}
}
}
}
});})(c__18367__auto___27052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__18302__auto__,c__18367__auto___27052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_27048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27048[(0)] = state_machine__18303__auto__);
(statearr_27048[(1)] = (1));
return statearr_27048;
});
var state_machine__18303__auto____1 = (function (state_27005){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_27005);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e27049){if((e27049 instanceof Object))
{var ex__18306__auto__ = e27049;var statearr_27050_27083 = state_27005;(statearr_27050_27083[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27005);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27049;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27084 = state_27005;
state_27005 = G__27084;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_27005){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_27005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___27052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__18369__auto__ = (function (){var statearr_27051 = f__18368__auto__.call(null);(statearr_27051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___27052);
return statearr_27051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___27052,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj27086 = {};return obj27086;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11367__auto__ = p;if(and__11367__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11367__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12006__auto__ = (((p == null))?null:p);return (function (){var or__11379__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11367__auto__ = p;if(and__11367__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11367__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12006__auto__ = (((p == null))?null:p);return (function (){var or__11379__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11367__auto__ = p;if(and__11367__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11367__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12006__auto__ = (((p == null))?null:p);return (function (){var or__11379__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11367__auto__ = p;if(and__11367__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11367__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12006__auto__ = (((p == null))?null:p);return (function (){var or__11379__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12006__auto__)]);if(or__11379__auto__)
{return or__11379__auto__;
} else
{var or__11379__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11379__auto____$1)
{return or__11379__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__11379__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11379__auto__))
{return or__11379__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11379__auto__,mults){
return (function (p1__27087_SHARP_){if(cljs.core.truth_(p1__27087_SHARP_.call(null,topic)))
{return p1__27087_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27087_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11379__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27210 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27210 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27211){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27211 = meta27211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27210.cljs$lang$type = true;
cljs.core.async.t27210.cljs$lang$ctorStr = "cljs.core.async/t27210";
cljs.core.async.t27210.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"cljs.core.async/t27210");
});})(mults,ensure_mult))
;
cljs.core.async.t27210.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27210.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27210.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27210.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27210.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27210.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27212){var self__ = this;
var _27212__$1 = this;return self__.meta27211;
});})(mults,ensure_mult))
;
cljs.core.async.t27210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27212,meta27211__$1){var self__ = this;
var _27212__$1 = this;return (new cljs.core.async.t27210(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27211__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27210 = ((function (mults,ensure_mult){
return (function __GT_t27210(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27211){return (new cljs.core.async.t27210(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27211));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27210(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18367__auto___27332 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___27332,mults,ensure_mult,p){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___27332,mults,ensure_mult,p){
return (function (state_27284){var state_val_27285 = (state_27284[(1)]);if((state_val_27285 === (7)))
{var inst_27280 = (state_27284[(2)]);var state_27284__$1 = state_27284;var statearr_27286_27333 = state_27284__$1;(statearr_27286_27333[(2)] = inst_27280);
(statearr_27286_27333[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (20)))
{var state_27284__$1 = state_27284;var statearr_27287_27334 = state_27284__$1;(statearr_27287_27334[(2)] = null);
(statearr_27287_27334[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (1)))
{var state_27284__$1 = state_27284;var statearr_27288_27335 = state_27284__$1;(statearr_27288_27335[(2)] = null);
(statearr_27288_27335[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (24)))
{var inst_27263 = (state_27284[(7)]);var inst_27272 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27263);var state_27284__$1 = state_27284;var statearr_27289_27336 = state_27284__$1;(statearr_27289_27336[(2)] = inst_27272);
(statearr_27289_27336[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (4)))
{var inst_27215 = (state_27284[(8)]);var inst_27215__$1 = (state_27284[(2)]);var inst_27216 = (inst_27215__$1 == null);var state_27284__$1 = (function (){var statearr_27290 = state_27284;(statearr_27290[(8)] = inst_27215__$1);
return statearr_27290;
})();if(cljs.core.truth_(inst_27216))
{var statearr_27291_27337 = state_27284__$1;(statearr_27291_27337[(1)] = (5));
} else
{var statearr_27292_27338 = state_27284__$1;(statearr_27292_27338[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (15)))
{var inst_27257 = (state_27284[(2)]);var state_27284__$1 = state_27284;var statearr_27293_27339 = state_27284__$1;(statearr_27293_27339[(2)] = inst_27257);
(statearr_27293_27339[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (21)))
{var inst_27277 = (state_27284[(2)]);var state_27284__$1 = (function (){var statearr_27294 = state_27284;(statearr_27294[(9)] = inst_27277);
return statearr_27294;
})();var statearr_27295_27340 = state_27284__$1;(statearr_27295_27340[(2)] = null);
(statearr_27295_27340[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (13)))
{var inst_27239 = (state_27284[(10)]);var inst_27241 = cljs.core.chunked_seq_QMARK_.call(null,inst_27239);var state_27284__$1 = state_27284;if(inst_27241)
{var statearr_27296_27341 = state_27284__$1;(statearr_27296_27341[(1)] = (16));
} else
{var statearr_27297_27342 = state_27284__$1;(statearr_27297_27342[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (22)))
{var inst_27269 = (state_27284[(2)]);var state_27284__$1 = state_27284;if(cljs.core.truth_(inst_27269))
{var statearr_27298_27343 = state_27284__$1;(statearr_27298_27343[(1)] = (23));
} else
{var statearr_27299_27344 = state_27284__$1;(statearr_27299_27344[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (6)))
{var inst_27265 = (state_27284[(11)]);var inst_27263 = (state_27284[(7)]);var inst_27215 = (state_27284[(8)]);var inst_27263__$1 = topic_fn.call(null,inst_27215);var inst_27264 = cljs.core.deref.call(null,mults);var inst_27265__$1 = cljs.core.get.call(null,inst_27264,inst_27263__$1);var state_27284__$1 = (function (){var statearr_27300 = state_27284;(statearr_27300[(11)] = inst_27265__$1);
(statearr_27300[(7)] = inst_27263__$1);
return statearr_27300;
})();if(cljs.core.truth_(inst_27265__$1))
{var statearr_27301_27345 = state_27284__$1;(statearr_27301_27345[(1)] = (19));
} else
{var statearr_27302_27346 = state_27284__$1;(statearr_27302_27346[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (25)))
{var inst_27274 = (state_27284[(2)]);var state_27284__$1 = state_27284;var statearr_27303_27347 = state_27284__$1;(statearr_27303_27347[(2)] = inst_27274);
(statearr_27303_27347[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (17)))
{var inst_27239 = (state_27284[(10)]);var inst_27248 = cljs.core.first.call(null,inst_27239);var inst_27249 = cljs.core.async.muxch_STAR_.call(null,inst_27248);var inst_27250 = cljs.core.async.close_BANG_.call(null,inst_27249);var inst_27251 = cljs.core.next.call(null,inst_27239);var inst_27225 = inst_27251;var inst_27226 = null;var inst_27227 = (0);var inst_27228 = (0);var state_27284__$1 = (function (){var statearr_27304 = state_27284;(statearr_27304[(12)] = inst_27226);
(statearr_27304[(13)] = inst_27227);
(statearr_27304[(14)] = inst_27228);
(statearr_27304[(15)] = inst_27250);
(statearr_27304[(16)] = inst_27225);
return statearr_27304;
})();var statearr_27305_27348 = state_27284__$1;(statearr_27305_27348[(2)] = null);
(statearr_27305_27348[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (3)))
{var inst_27282 = (state_27284[(2)]);var state_27284__$1 = state_27284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27284__$1,inst_27282);
} else
{if((state_val_27285 === (12)))
{var inst_27259 = (state_27284[(2)]);var state_27284__$1 = state_27284;var statearr_27306_27349 = state_27284__$1;(statearr_27306_27349[(2)] = inst_27259);
(statearr_27306_27349[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (2)))
{var state_27284__$1 = state_27284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27284__$1,(4),ch);
} else
{if((state_val_27285 === (23)))
{var state_27284__$1 = state_27284;var statearr_27307_27350 = state_27284__$1;(statearr_27307_27350[(2)] = null);
(statearr_27307_27350[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (19)))
{var inst_27265 = (state_27284[(11)]);var inst_27215 = (state_27284[(8)]);var inst_27267 = cljs.core.async.muxch_STAR_.call(null,inst_27265);var state_27284__$1 = state_27284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27284__$1,(22),inst_27267,inst_27215);
} else
{if((state_val_27285 === (11)))
{var inst_27239 = (state_27284[(10)]);var inst_27225 = (state_27284[(16)]);var inst_27239__$1 = cljs.core.seq.call(null,inst_27225);var state_27284__$1 = (function (){var statearr_27308 = state_27284;(statearr_27308[(10)] = inst_27239__$1);
return statearr_27308;
})();if(inst_27239__$1)
{var statearr_27309_27351 = state_27284__$1;(statearr_27309_27351[(1)] = (13));
} else
{var statearr_27310_27352 = state_27284__$1;(statearr_27310_27352[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (9)))
{var inst_27261 = (state_27284[(2)]);var state_27284__$1 = state_27284;var statearr_27311_27353 = state_27284__$1;(statearr_27311_27353[(2)] = inst_27261);
(statearr_27311_27353[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (5)))
{var inst_27222 = cljs.core.deref.call(null,mults);var inst_27223 = cljs.core.vals.call(null,inst_27222);var inst_27224 = cljs.core.seq.call(null,inst_27223);var inst_27225 = inst_27224;var inst_27226 = null;var inst_27227 = (0);var inst_27228 = (0);var state_27284__$1 = (function (){var statearr_27312 = state_27284;(statearr_27312[(12)] = inst_27226);
(statearr_27312[(13)] = inst_27227);
(statearr_27312[(14)] = inst_27228);
(statearr_27312[(16)] = inst_27225);
return statearr_27312;
})();var statearr_27313_27354 = state_27284__$1;(statearr_27313_27354[(2)] = null);
(statearr_27313_27354[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (14)))
{var state_27284__$1 = state_27284;var statearr_27317_27355 = state_27284__$1;(statearr_27317_27355[(2)] = null);
(statearr_27317_27355[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (16)))
{var inst_27239 = (state_27284[(10)]);var inst_27243 = cljs.core.chunk_first.call(null,inst_27239);var inst_27244 = cljs.core.chunk_rest.call(null,inst_27239);var inst_27245 = cljs.core.count.call(null,inst_27243);var inst_27225 = inst_27244;var inst_27226 = inst_27243;var inst_27227 = inst_27245;var inst_27228 = (0);var state_27284__$1 = (function (){var statearr_27318 = state_27284;(statearr_27318[(12)] = inst_27226);
(statearr_27318[(13)] = inst_27227);
(statearr_27318[(14)] = inst_27228);
(statearr_27318[(16)] = inst_27225);
return statearr_27318;
})();var statearr_27319_27356 = state_27284__$1;(statearr_27319_27356[(2)] = null);
(statearr_27319_27356[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (10)))
{var inst_27226 = (state_27284[(12)]);var inst_27227 = (state_27284[(13)]);var inst_27228 = (state_27284[(14)]);var inst_27225 = (state_27284[(16)]);var inst_27233 = cljs.core._nth.call(null,inst_27226,inst_27228);var inst_27234 = cljs.core.async.muxch_STAR_.call(null,inst_27233);var inst_27235 = cljs.core.async.close_BANG_.call(null,inst_27234);var inst_27236 = (inst_27228 + (1));var tmp27314 = inst_27226;var tmp27315 = inst_27227;var tmp27316 = inst_27225;var inst_27225__$1 = tmp27316;var inst_27226__$1 = tmp27314;var inst_27227__$1 = tmp27315;var inst_27228__$1 = inst_27236;var state_27284__$1 = (function (){var statearr_27320 = state_27284;(statearr_27320[(12)] = inst_27226__$1);
(statearr_27320[(13)] = inst_27227__$1);
(statearr_27320[(14)] = inst_27228__$1);
(statearr_27320[(17)] = inst_27235);
(statearr_27320[(16)] = inst_27225__$1);
return statearr_27320;
})();var statearr_27321_27357 = state_27284__$1;(statearr_27321_27357[(2)] = null);
(statearr_27321_27357[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (18)))
{var inst_27254 = (state_27284[(2)]);var state_27284__$1 = state_27284;var statearr_27322_27358 = state_27284__$1;(statearr_27322_27358[(2)] = inst_27254);
(statearr_27322_27358[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27285 === (8)))
{var inst_27227 = (state_27284[(13)]);var inst_27228 = (state_27284[(14)]);var inst_27230 = (inst_27228 < inst_27227);var inst_27231 = inst_27230;var state_27284__$1 = state_27284;if(cljs.core.truth_(inst_27231))
{var statearr_27323_27359 = state_27284__$1;(statearr_27323_27359[(1)] = (10));
} else
{var statearr_27324_27360 = state_27284__$1;(statearr_27324_27360[(1)] = (11));
}
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
}
}
}
}
}
}
});})(c__18367__auto___27332,mults,ensure_mult,p))
;return ((function (switch__18302__auto__,c__18367__auto___27332,mults,ensure_mult,p){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_27328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27328[(0)] = state_machine__18303__auto__);
(statearr_27328[(1)] = (1));
return statearr_27328;
});
var state_machine__18303__auto____1 = (function (state_27284){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_27284);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e27329){if((e27329 instanceof Object))
{var ex__18306__auto__ = e27329;var statearr_27330_27361 = state_27284;(statearr_27330_27361[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27284);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27329;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27362 = state_27284;
state_27284 = G__27362;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_27284){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_27284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___27332,mults,ensure_mult,p))
})();var state__18369__auto__ = (function (){var statearr_27331 = f__18368__auto__.call(null);(statearr_27331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___27332);
return statearr_27331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___27332,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__18367__auto___27499 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___27499,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___27499,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27469){var state_val_27470 = (state_27469[(1)]);if((state_val_27470 === (7)))
{var state_27469__$1 = state_27469;var statearr_27471_27500 = state_27469__$1;(statearr_27471_27500[(2)] = null);
(statearr_27471_27500[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27470 === (1)))
{var state_27469__$1 = state_27469;var statearr_27472_27501 = state_27469__$1;(statearr_27472_27501[(2)] = null);
(statearr_27472_27501[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27470 === (4)))
{var inst_27433 = (state_27469[(7)]);var inst_27435 = (inst_27433 < cnt);var state_27469__$1 = state_27469;if(cljs.core.truth_(inst_27435))
{var statearr_27473_27502 = state_27469__$1;(statearr_27473_27502[(1)] = (6));
} else
{var statearr_27474_27503 = state_27469__$1;(statearr_27474_27503[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27470 === (15)))
{var inst_27465 = (state_27469[(2)]);var state_27469__$1 = state_27469;var statearr_27475_27504 = state_27469__$1;(statearr_27475_27504[(2)] = inst_27465);
(statearr_27475_27504[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27470 === (13)))
{var inst_27458 = cljs.core.async.close_BANG_.call(null,out);var state_27469__$1 = state_27469;var statearr_27476_27505 = state_27469__$1;(statearr_27476_27505[(2)] = inst_27458);
(statearr_27476_27505[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27470 === (6)))
{var state_27469__$1 = state_27469;var statearr_27477_27506 = state_27469__$1;(statearr_27477_27506[(2)] = null);
(statearr_27477_27506[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27470 === (3)))
{var inst_27467 = (state_27469[(2)]);var state_27469__$1 = state_27469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27469__$1,inst_27467);
} else
{if((state_val_27470 === (12)))
{var inst_27455 = (state_27469[(8)]);var inst_27455__$1 = (state_27469[(2)]);var inst_27456 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27455__$1);var state_27469__$1 = (function (){var statearr_27478 = state_27469;(statearr_27478[(8)] = inst_27455__$1);
return statearr_27478;
})();if(cljs.core.truth_(inst_27456))
{var statearr_27479_27507 = state_27469__$1;(statearr_27479_27507[(1)] = (13));
} else
{var statearr_27480_27508 = state_27469__$1;(statearr_27480_27508[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27470 === (2)))
{var inst_27432 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27433 = (0);var state_27469__$1 = (function (){var statearr_27481 = state_27469;(statearr_27481[(7)] = inst_27433);
(statearr_27481[(9)] = inst_27432);
return statearr_27481;
})();var statearr_27482_27509 = state_27469__$1;(statearr_27482_27509[(2)] = null);
(statearr_27482_27509[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27470 === (11)))
{var inst_27433 = (state_27469[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27469,(10),Object,null,(9));var inst_27442 = chs__$1.call(null,inst_27433);var inst_27443 = done.call(null,inst_27433);var inst_27444 = cljs.core.async.take_BANG_.call(null,inst_27442,inst_27443);var state_27469__$1 = state_27469;var statearr_27483_27510 = state_27469__$1;(statearr_27483_27510[(2)] = inst_27444);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27469__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27470 === (9)))
{var inst_27433 = (state_27469[(7)]);var inst_27446 = (state_27469[(2)]);var inst_27447 = (inst_27433 + (1));var inst_27433__$1 = inst_27447;var state_27469__$1 = (function (){var statearr_27484 = state_27469;(statearr_27484[(10)] = inst_27446);
(statearr_27484[(7)] = inst_27433__$1);
return statearr_27484;
})();var statearr_27485_27511 = state_27469__$1;(statearr_27485_27511[(2)] = null);
(statearr_27485_27511[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27470 === (5)))
{var inst_27453 = (state_27469[(2)]);var state_27469__$1 = (function (){var statearr_27486 = state_27469;(statearr_27486[(11)] = inst_27453);
return statearr_27486;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27469__$1,(12),dchan);
} else
{if((state_val_27470 === (14)))
{var inst_27455 = (state_27469[(8)]);var inst_27460 = cljs.core.apply.call(null,f,inst_27455);var state_27469__$1 = state_27469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27469__$1,(16),out,inst_27460);
} else
{if((state_val_27470 === (16)))
{var inst_27462 = (state_27469[(2)]);var state_27469__$1 = (function (){var statearr_27487 = state_27469;(statearr_27487[(12)] = inst_27462);
return statearr_27487;
})();var statearr_27488_27512 = state_27469__$1;(statearr_27488_27512[(2)] = null);
(statearr_27488_27512[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27470 === (10)))
{var inst_27437 = (state_27469[(2)]);var inst_27438 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27469__$1 = (function (){var statearr_27489 = state_27469;(statearr_27489[(13)] = inst_27437);
return statearr_27489;
})();var statearr_27490_27513 = state_27469__$1;(statearr_27490_27513[(2)] = inst_27438);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27469__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27470 === (8)))
{var inst_27451 = (state_27469[(2)]);var state_27469__$1 = state_27469;var statearr_27491_27514 = state_27469__$1;(statearr_27491_27514[(2)] = inst_27451);
(statearr_27491_27514[(1)] = (5));
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
});})(c__18367__auto___27499,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__18302__auto__,c__18367__auto___27499,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_27495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27495[(0)] = state_machine__18303__auto__);
(statearr_27495[(1)] = (1));
return statearr_27495;
});
var state_machine__18303__auto____1 = (function (state_27469){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_27469);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e27496){if((e27496 instanceof Object))
{var ex__18306__auto__ = e27496;var statearr_27497_27515 = state_27469;(statearr_27497_27515[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27469);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27496;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27516 = state_27469;
state_27469 = G__27516;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_27469){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_27469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___27499,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__18369__auto__ = (function (){var statearr_27498 = f__18368__auto__.call(null);(statearr_27498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___27499);
return statearr_27498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___27499,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18367__auto___27624 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___27624,out){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___27624,out){
return (function (state_27600){var state_val_27601 = (state_27600[(1)]);if((state_val_27601 === (7)))
{var inst_27579 = (state_27600[(7)]);var inst_27580 = (state_27600[(8)]);var inst_27579__$1 = (state_27600[(2)]);var inst_27580__$1 = cljs.core.nth.call(null,inst_27579__$1,(0),null);var inst_27581 = cljs.core.nth.call(null,inst_27579__$1,(1),null);var inst_27582 = (inst_27580__$1 == null);var state_27600__$1 = (function (){var statearr_27602 = state_27600;(statearr_27602[(9)] = inst_27581);
(statearr_27602[(7)] = inst_27579__$1);
(statearr_27602[(8)] = inst_27580__$1);
return statearr_27602;
})();if(cljs.core.truth_(inst_27582))
{var statearr_27603_27625 = state_27600__$1;(statearr_27603_27625[(1)] = (8));
} else
{var statearr_27604_27626 = state_27600__$1;(statearr_27604_27626[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27601 === (1)))
{var inst_27571 = cljs.core.vec.call(null,chs);var inst_27572 = inst_27571;var state_27600__$1 = (function (){var statearr_27605 = state_27600;(statearr_27605[(10)] = inst_27572);
return statearr_27605;
})();var statearr_27606_27627 = state_27600__$1;(statearr_27606_27627[(2)] = null);
(statearr_27606_27627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27601 === (4)))
{var inst_27572 = (state_27600[(10)]);var state_27600__$1 = state_27600;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27600__$1,(7),inst_27572);
} else
{if((state_val_27601 === (6)))
{var inst_27596 = (state_27600[(2)]);var state_27600__$1 = state_27600;var statearr_27607_27628 = state_27600__$1;(statearr_27607_27628[(2)] = inst_27596);
(statearr_27607_27628[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27601 === (3)))
{var inst_27598 = (state_27600[(2)]);var state_27600__$1 = state_27600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27600__$1,inst_27598);
} else
{if((state_val_27601 === (2)))
{var inst_27572 = (state_27600[(10)]);var inst_27574 = cljs.core.count.call(null,inst_27572);var inst_27575 = (inst_27574 > (0));var state_27600__$1 = state_27600;if(cljs.core.truth_(inst_27575))
{var statearr_27609_27629 = state_27600__$1;(statearr_27609_27629[(1)] = (4));
} else
{var statearr_27610_27630 = state_27600__$1;(statearr_27610_27630[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27601 === (11)))
{var inst_27572 = (state_27600[(10)]);var inst_27589 = (state_27600[(2)]);var tmp27608 = inst_27572;var inst_27572__$1 = tmp27608;var state_27600__$1 = (function (){var statearr_27611 = state_27600;(statearr_27611[(11)] = inst_27589);
(statearr_27611[(10)] = inst_27572__$1);
return statearr_27611;
})();var statearr_27612_27631 = state_27600__$1;(statearr_27612_27631[(2)] = null);
(statearr_27612_27631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27601 === (9)))
{var inst_27580 = (state_27600[(8)]);var state_27600__$1 = state_27600;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27600__$1,(11),out,inst_27580);
} else
{if((state_val_27601 === (5)))
{var inst_27594 = cljs.core.async.close_BANG_.call(null,out);var state_27600__$1 = state_27600;var statearr_27613_27632 = state_27600__$1;(statearr_27613_27632[(2)] = inst_27594);
(statearr_27613_27632[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27601 === (10)))
{var inst_27592 = (state_27600[(2)]);var state_27600__$1 = state_27600;var statearr_27614_27633 = state_27600__$1;(statearr_27614_27633[(2)] = inst_27592);
(statearr_27614_27633[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27601 === (8)))
{var inst_27581 = (state_27600[(9)]);var inst_27579 = (state_27600[(7)]);var inst_27572 = (state_27600[(10)]);var inst_27580 = (state_27600[(8)]);var inst_27584 = (function (){var c = inst_27581;var v = inst_27580;var vec__27577 = inst_27579;var cs = inst_27572;return ((function (c,v,vec__27577,cs,inst_27581,inst_27579,inst_27572,inst_27580,state_val_27601,c__18367__auto___27624,out){
return (function (p1__27517_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27517_SHARP_);
});
;})(c,v,vec__27577,cs,inst_27581,inst_27579,inst_27572,inst_27580,state_val_27601,c__18367__auto___27624,out))
})();var inst_27585 = cljs.core.filterv.call(null,inst_27584,inst_27572);var inst_27572__$1 = inst_27585;var state_27600__$1 = (function (){var statearr_27615 = state_27600;(statearr_27615[(10)] = inst_27572__$1);
return statearr_27615;
})();var statearr_27616_27634 = state_27600__$1;(statearr_27616_27634[(2)] = null);
(statearr_27616_27634[(1)] = (2));
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
});})(c__18367__auto___27624,out))
;return ((function (switch__18302__auto__,c__18367__auto___27624,out){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_27620 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27620[(0)] = state_machine__18303__auto__);
(statearr_27620[(1)] = (1));
return statearr_27620;
});
var state_machine__18303__auto____1 = (function (state_27600){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_27600);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e27621){if((e27621 instanceof Object))
{var ex__18306__auto__ = e27621;var statearr_27622_27635 = state_27600;(statearr_27622_27635[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27600);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27621;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27636 = state_27600;
state_27600 = G__27636;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_27600){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_27600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___27624,out))
})();var state__18369__auto__ = (function (){var statearr_27623 = f__18368__auto__.call(null);(statearr_27623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___27624);
return statearr_27623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___27624,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18367__auto___27729 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___27729,out){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___27729,out){
return (function (state_27706){var state_val_27707 = (state_27706[(1)]);if((state_val_27707 === (7)))
{var inst_27688 = (state_27706[(7)]);var inst_27688__$1 = (state_27706[(2)]);var inst_27689 = (inst_27688__$1 == null);var inst_27690 = cljs.core.not.call(null,inst_27689);var state_27706__$1 = (function (){var statearr_27708 = state_27706;(statearr_27708[(7)] = inst_27688__$1);
return statearr_27708;
})();if(inst_27690)
{var statearr_27709_27730 = state_27706__$1;(statearr_27709_27730[(1)] = (8));
} else
{var statearr_27710_27731 = state_27706__$1;(statearr_27710_27731[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27707 === (1)))
{var inst_27683 = (0);var state_27706__$1 = (function (){var statearr_27711 = state_27706;(statearr_27711[(8)] = inst_27683);
return statearr_27711;
})();var statearr_27712_27732 = state_27706__$1;(statearr_27712_27732[(2)] = null);
(statearr_27712_27732[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27707 === (4)))
{var state_27706__$1 = state_27706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27706__$1,(7),ch);
} else
{if((state_val_27707 === (6)))
{var inst_27701 = (state_27706[(2)]);var state_27706__$1 = state_27706;var statearr_27713_27733 = state_27706__$1;(statearr_27713_27733[(2)] = inst_27701);
(statearr_27713_27733[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27707 === (3)))
{var inst_27703 = (state_27706[(2)]);var inst_27704 = cljs.core.async.close_BANG_.call(null,out);var state_27706__$1 = (function (){var statearr_27714 = state_27706;(statearr_27714[(9)] = inst_27703);
return statearr_27714;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27706__$1,inst_27704);
} else
{if((state_val_27707 === (2)))
{var inst_27683 = (state_27706[(8)]);var inst_27685 = (inst_27683 < n);var state_27706__$1 = state_27706;if(cljs.core.truth_(inst_27685))
{var statearr_27715_27734 = state_27706__$1;(statearr_27715_27734[(1)] = (4));
} else
{var statearr_27716_27735 = state_27706__$1;(statearr_27716_27735[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27707 === (11)))
{var inst_27683 = (state_27706[(8)]);var inst_27693 = (state_27706[(2)]);var inst_27694 = (inst_27683 + (1));var inst_27683__$1 = inst_27694;var state_27706__$1 = (function (){var statearr_27717 = state_27706;(statearr_27717[(8)] = inst_27683__$1);
(statearr_27717[(10)] = inst_27693);
return statearr_27717;
})();var statearr_27718_27736 = state_27706__$1;(statearr_27718_27736[(2)] = null);
(statearr_27718_27736[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27707 === (9)))
{var state_27706__$1 = state_27706;var statearr_27719_27737 = state_27706__$1;(statearr_27719_27737[(2)] = null);
(statearr_27719_27737[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27707 === (5)))
{var state_27706__$1 = state_27706;var statearr_27720_27738 = state_27706__$1;(statearr_27720_27738[(2)] = null);
(statearr_27720_27738[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27707 === (10)))
{var inst_27698 = (state_27706[(2)]);var state_27706__$1 = state_27706;var statearr_27721_27739 = state_27706__$1;(statearr_27721_27739[(2)] = inst_27698);
(statearr_27721_27739[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27707 === (8)))
{var inst_27688 = (state_27706[(7)]);var state_27706__$1 = state_27706;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27706__$1,(11),out,inst_27688);
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
});})(c__18367__auto___27729,out))
;return ((function (switch__18302__auto__,c__18367__auto___27729,out){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_27725 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27725[(0)] = state_machine__18303__auto__);
(statearr_27725[(1)] = (1));
return statearr_27725;
});
var state_machine__18303__auto____1 = (function (state_27706){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_27706);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e27726){if((e27726 instanceof Object))
{var ex__18306__auto__ = e27726;var statearr_27727_27740 = state_27706;(statearr_27727_27740[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27706);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27726;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27741 = state_27706;
state_27706 = G__27741;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_27706){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_27706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___27729,out))
})();var state__18369__auto__ = (function (){var statearr_27728 = f__18368__auto__.call(null);(statearr_27728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___27729);
return statearr_27728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___27729,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27749 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27749 = (function (ch,f,map_LT_,meta27750){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27750 = meta27750;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27749.cljs$lang$type = true;
cljs.core.async.t27749.cljs$lang$ctorStr = "cljs.core.async/t27749";
cljs.core.async.t27749.cljs$lang$ctorPrWriter = (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"cljs.core.async/t27749");
});
cljs.core.async.t27749.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27749.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t27749.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27749.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27752 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27752 = (function (fn1,_,meta27750,ch,f,map_LT_,meta27753){
this.fn1 = fn1;
this._ = _;
this.meta27750 = meta27750;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27753 = meta27753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27752.cljs$lang$type = true;
cljs.core.async.t27752.cljs$lang$ctorStr = "cljs.core.async/t27752";
cljs.core.async.t27752.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"cljs.core.async/t27752");
});})(___$1))
;
cljs.core.async.t27752.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27752.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27742_SHARP_){return f1.call(null,(((p1__27742_SHARP_ == null))?null:self__.f.call(null,p1__27742_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27754){var self__ = this;
var _27754__$1 = this;return self__.meta27753;
});})(___$1))
;
cljs.core.async.t27752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27754,meta27753__$1){var self__ = this;
var _27754__$1 = this;return (new cljs.core.async.t27752(self__.fn1,self__._,self__.meta27750,self__.ch,self__.f,self__.map_LT_,meta27753__$1));
});})(___$1))
;
cljs.core.async.__GT_t27752 = ((function (___$1){
return (function __GT_t27752(fn1__$1,___$2,meta27750__$1,ch__$2,f__$2,map_LT___$2,meta27753){return (new cljs.core.async.t27752(fn1__$1,___$2,meta27750__$1,ch__$2,f__$2,map_LT___$2,meta27753));
});})(___$1))
;
}
return (new cljs.core.async.t27752(fn1,___$1,self__.meta27750,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11367__auto__ = ret;if(cljs.core.truth_(and__11367__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11367__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t27749.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27749.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27749.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27751){var self__ = this;
var _27751__$1 = this;return self__.meta27750;
});
cljs.core.async.t27749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27751,meta27750__$1){var self__ = this;
var _27751__$1 = this;return (new cljs.core.async.t27749(self__.ch,self__.f,self__.map_LT_,meta27750__$1));
});
cljs.core.async.__GT_t27749 = (function __GT_t27749(ch__$1,f__$1,map_LT___$1,meta27750){return (new cljs.core.async.t27749(ch__$1,f__$1,map_LT___$1,meta27750));
});
}
return (new cljs.core.async.t27749(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27758 = (function (ch,f,map_GT_,meta27759){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27759 = meta27759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27758.cljs$lang$type = true;
cljs.core.async.t27758.cljs$lang$ctorStr = "cljs.core.async/t27758";
cljs.core.async.t27758.cljs$lang$ctorPrWriter = (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"cljs.core.async/t27758");
});
cljs.core.async.t27758.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27758.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t27758.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27758.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27758.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27758.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27760){var self__ = this;
var _27760__$1 = this;return self__.meta27759;
});
cljs.core.async.t27758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27760,meta27759__$1){var self__ = this;
var _27760__$1 = this;return (new cljs.core.async.t27758(self__.ch,self__.f,self__.map_GT_,meta27759__$1));
});
cljs.core.async.__GT_t27758 = (function __GT_t27758(ch__$1,f__$1,map_GT___$1,meta27759){return (new cljs.core.async.t27758(ch__$1,f__$1,map_GT___$1,meta27759));
});
}
return (new cljs.core.async.t27758(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27764 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27764 = (function (ch,p,filter_GT_,meta27765){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27765 = meta27765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27764.cljs$lang$type = true;
cljs.core.async.t27764.cljs$lang$ctorStr = "cljs.core.async/t27764";
cljs.core.async.t27764.cljs$lang$ctorPrWriter = (function (this__11946__auto__,writer__11947__auto__,opt__11948__auto__){return cljs.core._write.call(null,writer__11947__auto__,"cljs.core.async/t27764");
});
cljs.core.async.t27764.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27764.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t27764.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27764.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27764.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27764.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27764.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27766){var self__ = this;
var _27766__$1 = this;return self__.meta27765;
});
cljs.core.async.t27764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27766,meta27765__$1){var self__ = this;
var _27766__$1 = this;return (new cljs.core.async.t27764(self__.ch,self__.p,self__.filter_GT_,meta27765__$1));
});
cljs.core.async.__GT_t27764 = (function __GT_t27764(ch__$1,p__$1,filter_GT___$1,meta27765){return (new cljs.core.async.t27764(ch__$1,p__$1,filter_GT___$1,meta27765));
});
}
return (new cljs.core.async.t27764(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18367__auto___27849 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___27849,out){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___27849,out){
return (function (state_27828){var state_val_27829 = (state_27828[(1)]);if((state_val_27829 === (7)))
{var inst_27824 = (state_27828[(2)]);var state_27828__$1 = state_27828;var statearr_27830_27850 = state_27828__$1;(statearr_27830_27850[(2)] = inst_27824);
(statearr_27830_27850[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27829 === (1)))
{var state_27828__$1 = state_27828;var statearr_27831_27851 = state_27828__$1;(statearr_27831_27851[(2)] = null);
(statearr_27831_27851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27829 === (4)))
{var inst_27810 = (state_27828[(7)]);var inst_27810__$1 = (state_27828[(2)]);var inst_27811 = (inst_27810__$1 == null);var state_27828__$1 = (function (){var statearr_27832 = state_27828;(statearr_27832[(7)] = inst_27810__$1);
return statearr_27832;
})();if(cljs.core.truth_(inst_27811))
{var statearr_27833_27852 = state_27828__$1;(statearr_27833_27852[(1)] = (5));
} else
{var statearr_27834_27853 = state_27828__$1;(statearr_27834_27853[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27829 === (6)))
{var inst_27810 = (state_27828[(7)]);var inst_27815 = p.call(null,inst_27810);var state_27828__$1 = state_27828;if(cljs.core.truth_(inst_27815))
{var statearr_27835_27854 = state_27828__$1;(statearr_27835_27854[(1)] = (8));
} else
{var statearr_27836_27855 = state_27828__$1;(statearr_27836_27855[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27829 === (3)))
{var inst_27826 = (state_27828[(2)]);var state_27828__$1 = state_27828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27828__$1,inst_27826);
} else
{if((state_val_27829 === (2)))
{var state_27828__$1 = state_27828;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27828__$1,(4),ch);
} else
{if((state_val_27829 === (11)))
{var inst_27818 = (state_27828[(2)]);var state_27828__$1 = state_27828;var statearr_27837_27856 = state_27828__$1;(statearr_27837_27856[(2)] = inst_27818);
(statearr_27837_27856[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27829 === (9)))
{var state_27828__$1 = state_27828;var statearr_27838_27857 = state_27828__$1;(statearr_27838_27857[(2)] = null);
(statearr_27838_27857[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27829 === (5)))
{var inst_27813 = cljs.core.async.close_BANG_.call(null,out);var state_27828__$1 = state_27828;var statearr_27839_27858 = state_27828__$1;(statearr_27839_27858[(2)] = inst_27813);
(statearr_27839_27858[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27829 === (10)))
{var inst_27821 = (state_27828[(2)]);var state_27828__$1 = (function (){var statearr_27840 = state_27828;(statearr_27840[(8)] = inst_27821);
return statearr_27840;
})();var statearr_27841_27859 = state_27828__$1;(statearr_27841_27859[(2)] = null);
(statearr_27841_27859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27829 === (8)))
{var inst_27810 = (state_27828[(7)]);var state_27828__$1 = state_27828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27828__$1,(11),out,inst_27810);
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
});})(c__18367__auto___27849,out))
;return ((function (switch__18302__auto__,c__18367__auto___27849,out){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_27845 = [null,null,null,null,null,null,null,null,null];(statearr_27845[(0)] = state_machine__18303__auto__);
(statearr_27845[(1)] = (1));
return statearr_27845;
});
var state_machine__18303__auto____1 = (function (state_27828){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_27828);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e27846){if((e27846 instanceof Object))
{var ex__18306__auto__ = e27846;var statearr_27847_27860 = state_27828;(statearr_27847_27860[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27828);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27846;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27861 = state_27828;
state_27828 = G__27861;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_27828){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_27828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___27849,out))
})();var state__18369__auto__ = (function (){var statearr_27848 = f__18368__auto__.call(null);(statearr_27848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___27849);
return statearr_27848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___27849,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto__){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto__){
return (function (state_28027){var state_val_28028 = (state_28027[(1)]);if((state_val_28028 === (7)))
{var inst_28023 = (state_28027[(2)]);var state_28027__$1 = state_28027;var statearr_28029_28070 = state_28027__$1;(statearr_28029_28070[(2)] = inst_28023);
(statearr_28029_28070[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (20)))
{var inst_27993 = (state_28027[(7)]);var inst_28004 = (state_28027[(2)]);var inst_28005 = cljs.core.next.call(null,inst_27993);var inst_27979 = inst_28005;var inst_27980 = null;var inst_27981 = (0);var inst_27982 = (0);var state_28027__$1 = (function (){var statearr_28030 = state_28027;(statearr_28030[(8)] = inst_27982);
(statearr_28030[(9)] = inst_28004);
(statearr_28030[(10)] = inst_27979);
(statearr_28030[(11)] = inst_27980);
(statearr_28030[(12)] = inst_27981);
return statearr_28030;
})();var statearr_28031_28071 = state_28027__$1;(statearr_28031_28071[(2)] = null);
(statearr_28031_28071[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (1)))
{var state_28027__$1 = state_28027;var statearr_28032_28072 = state_28027__$1;(statearr_28032_28072[(2)] = null);
(statearr_28032_28072[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (4)))
{var inst_27968 = (state_28027[(13)]);var inst_27968__$1 = (state_28027[(2)]);var inst_27969 = (inst_27968__$1 == null);var state_28027__$1 = (function (){var statearr_28033 = state_28027;(statearr_28033[(13)] = inst_27968__$1);
return statearr_28033;
})();if(cljs.core.truth_(inst_27969))
{var statearr_28034_28073 = state_28027__$1;(statearr_28034_28073[(1)] = (5));
} else
{var statearr_28035_28074 = state_28027__$1;(statearr_28035_28074[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (15)))
{var state_28027__$1 = state_28027;var statearr_28039_28075 = state_28027__$1;(statearr_28039_28075[(2)] = null);
(statearr_28039_28075[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (21)))
{var state_28027__$1 = state_28027;var statearr_28040_28076 = state_28027__$1;(statearr_28040_28076[(2)] = null);
(statearr_28040_28076[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (13)))
{var inst_27982 = (state_28027[(8)]);var inst_27979 = (state_28027[(10)]);var inst_27980 = (state_28027[(11)]);var inst_27981 = (state_28027[(12)]);var inst_27989 = (state_28027[(2)]);var inst_27990 = (inst_27982 + (1));var tmp28036 = inst_27979;var tmp28037 = inst_27980;var tmp28038 = inst_27981;var inst_27979__$1 = tmp28036;var inst_27980__$1 = tmp28037;var inst_27981__$1 = tmp28038;var inst_27982__$1 = inst_27990;var state_28027__$1 = (function (){var statearr_28041 = state_28027;(statearr_28041[(14)] = inst_27989);
(statearr_28041[(8)] = inst_27982__$1);
(statearr_28041[(10)] = inst_27979__$1);
(statearr_28041[(11)] = inst_27980__$1);
(statearr_28041[(12)] = inst_27981__$1);
return statearr_28041;
})();var statearr_28042_28077 = state_28027__$1;(statearr_28042_28077[(2)] = null);
(statearr_28042_28077[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (22)))
{var state_28027__$1 = state_28027;var statearr_28043_28078 = state_28027__$1;(statearr_28043_28078[(2)] = null);
(statearr_28043_28078[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (6)))
{var inst_27968 = (state_28027[(13)]);var inst_27977 = f.call(null,inst_27968);var inst_27978 = cljs.core.seq.call(null,inst_27977);var inst_27979 = inst_27978;var inst_27980 = null;var inst_27981 = (0);var inst_27982 = (0);var state_28027__$1 = (function (){var statearr_28044 = state_28027;(statearr_28044[(8)] = inst_27982);
(statearr_28044[(10)] = inst_27979);
(statearr_28044[(11)] = inst_27980);
(statearr_28044[(12)] = inst_27981);
return statearr_28044;
})();var statearr_28045_28079 = state_28027__$1;(statearr_28045_28079[(2)] = null);
(statearr_28045_28079[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (17)))
{var inst_27993 = (state_28027[(7)]);var inst_27997 = cljs.core.chunk_first.call(null,inst_27993);var inst_27998 = cljs.core.chunk_rest.call(null,inst_27993);var inst_27999 = cljs.core.count.call(null,inst_27997);var inst_27979 = inst_27998;var inst_27980 = inst_27997;var inst_27981 = inst_27999;var inst_27982 = (0);var state_28027__$1 = (function (){var statearr_28046 = state_28027;(statearr_28046[(8)] = inst_27982);
(statearr_28046[(10)] = inst_27979);
(statearr_28046[(11)] = inst_27980);
(statearr_28046[(12)] = inst_27981);
return statearr_28046;
})();var statearr_28047_28080 = state_28027__$1;(statearr_28047_28080[(2)] = null);
(statearr_28047_28080[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (3)))
{var inst_28025 = (state_28027[(2)]);var state_28027__$1 = state_28027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28027__$1,inst_28025);
} else
{if((state_val_28028 === (12)))
{var inst_28013 = (state_28027[(2)]);var state_28027__$1 = state_28027;var statearr_28048_28081 = state_28027__$1;(statearr_28048_28081[(2)] = inst_28013);
(statearr_28048_28081[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (2)))
{var state_28027__$1 = state_28027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28027__$1,(4),in$);
} else
{if((state_val_28028 === (23)))
{var inst_28021 = (state_28027[(2)]);var state_28027__$1 = state_28027;var statearr_28049_28082 = state_28027__$1;(statearr_28049_28082[(2)] = inst_28021);
(statearr_28049_28082[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (19)))
{var inst_28008 = (state_28027[(2)]);var state_28027__$1 = state_28027;var statearr_28050_28083 = state_28027__$1;(statearr_28050_28083[(2)] = inst_28008);
(statearr_28050_28083[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (11)))
{var inst_27993 = (state_28027[(7)]);var inst_27979 = (state_28027[(10)]);var inst_27993__$1 = cljs.core.seq.call(null,inst_27979);var state_28027__$1 = (function (){var statearr_28051 = state_28027;(statearr_28051[(7)] = inst_27993__$1);
return statearr_28051;
})();if(inst_27993__$1)
{var statearr_28052_28084 = state_28027__$1;(statearr_28052_28084[(1)] = (14));
} else
{var statearr_28053_28085 = state_28027__$1;(statearr_28053_28085[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (9)))
{var inst_28015 = (state_28027[(2)]);var inst_28016 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_28027__$1 = (function (){var statearr_28054 = state_28027;(statearr_28054[(15)] = inst_28015);
return statearr_28054;
})();if(cljs.core.truth_(inst_28016))
{var statearr_28055_28086 = state_28027__$1;(statearr_28055_28086[(1)] = (21));
} else
{var statearr_28056_28087 = state_28027__$1;(statearr_28056_28087[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (5)))
{var inst_27971 = cljs.core.async.close_BANG_.call(null,out);var state_28027__$1 = state_28027;var statearr_28057_28088 = state_28027__$1;(statearr_28057_28088[(2)] = inst_27971);
(statearr_28057_28088[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (14)))
{var inst_27993 = (state_28027[(7)]);var inst_27995 = cljs.core.chunked_seq_QMARK_.call(null,inst_27993);var state_28027__$1 = state_28027;if(inst_27995)
{var statearr_28058_28089 = state_28027__$1;(statearr_28058_28089[(1)] = (17));
} else
{var statearr_28059_28090 = state_28027__$1;(statearr_28059_28090[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (16)))
{var inst_28011 = (state_28027[(2)]);var state_28027__$1 = state_28027;var statearr_28060_28091 = state_28027__$1;(statearr_28060_28091[(2)] = inst_28011);
(statearr_28060_28091[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28028 === (10)))
{var inst_27982 = (state_28027[(8)]);var inst_27980 = (state_28027[(11)]);var inst_27987 = cljs.core._nth.call(null,inst_27980,inst_27982);var state_28027__$1 = state_28027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28027__$1,(13),out,inst_27987);
} else
{if((state_val_28028 === (18)))
{var inst_27993 = (state_28027[(7)]);var inst_28002 = cljs.core.first.call(null,inst_27993);var state_28027__$1 = state_28027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28027__$1,(20),out,inst_28002);
} else
{if((state_val_28028 === (8)))
{var inst_27982 = (state_28027[(8)]);var inst_27981 = (state_28027[(12)]);var inst_27984 = (inst_27982 < inst_27981);var inst_27985 = inst_27984;var state_28027__$1 = state_28027;if(cljs.core.truth_(inst_27985))
{var statearr_28061_28092 = state_28027__$1;(statearr_28061_28092[(1)] = (10));
} else
{var statearr_28062_28093 = state_28027__$1;(statearr_28062_28093[(1)] = (11));
}
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
}
}
}
}
});})(c__18367__auto__))
;return ((function (switch__18302__auto__,c__18367__auto__){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_28066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28066[(0)] = state_machine__18303__auto__);
(statearr_28066[(1)] = (1));
return statearr_28066;
});
var state_machine__18303__auto____1 = (function (state_28027){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_28027);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e28067){if((e28067 instanceof Object))
{var ex__18306__auto__ = e28067;var statearr_28068_28094 = state_28027;(statearr_28068_28094[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28027);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28067;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28095 = state_28027;
state_28027 = G__28095;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_28027){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_28027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto__))
})();var state__18369__auto__ = (function (){var statearr_28069 = f__18368__auto__.call(null);(statearr_28069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto__);
return statearr_28069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto__))
);
return c__18367__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18367__auto___28192 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___28192,out){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___28192,out){
return (function (state_28167){var state_val_28168 = (state_28167[(1)]);if((state_val_28168 === (7)))
{var inst_28162 = (state_28167[(2)]);var state_28167__$1 = state_28167;var statearr_28169_28193 = state_28167__$1;(statearr_28169_28193[(2)] = inst_28162);
(statearr_28169_28193[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28168 === (1)))
{var inst_28144 = null;var state_28167__$1 = (function (){var statearr_28170 = state_28167;(statearr_28170[(7)] = inst_28144);
return statearr_28170;
})();var statearr_28171_28194 = state_28167__$1;(statearr_28171_28194[(2)] = null);
(statearr_28171_28194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28168 === (4)))
{var inst_28147 = (state_28167[(8)]);var inst_28147__$1 = (state_28167[(2)]);var inst_28148 = (inst_28147__$1 == null);var inst_28149 = cljs.core.not.call(null,inst_28148);var state_28167__$1 = (function (){var statearr_28172 = state_28167;(statearr_28172[(8)] = inst_28147__$1);
return statearr_28172;
})();if(inst_28149)
{var statearr_28173_28195 = state_28167__$1;(statearr_28173_28195[(1)] = (5));
} else
{var statearr_28174_28196 = state_28167__$1;(statearr_28174_28196[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28168 === (6)))
{var state_28167__$1 = state_28167;var statearr_28175_28197 = state_28167__$1;(statearr_28175_28197[(2)] = null);
(statearr_28175_28197[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28168 === (3)))
{var inst_28164 = (state_28167[(2)]);var inst_28165 = cljs.core.async.close_BANG_.call(null,out);var state_28167__$1 = (function (){var statearr_28176 = state_28167;(statearr_28176[(9)] = inst_28164);
return statearr_28176;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28167__$1,inst_28165);
} else
{if((state_val_28168 === (2)))
{var state_28167__$1 = state_28167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28167__$1,(4),ch);
} else
{if((state_val_28168 === (11)))
{var inst_28147 = (state_28167[(8)]);var inst_28156 = (state_28167[(2)]);var inst_28144 = inst_28147;var state_28167__$1 = (function (){var statearr_28177 = state_28167;(statearr_28177[(7)] = inst_28144);
(statearr_28177[(10)] = inst_28156);
return statearr_28177;
})();var statearr_28178_28198 = state_28167__$1;(statearr_28178_28198[(2)] = null);
(statearr_28178_28198[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28168 === (9)))
{var inst_28147 = (state_28167[(8)]);var state_28167__$1 = state_28167;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28167__$1,(11),out,inst_28147);
} else
{if((state_val_28168 === (5)))
{var inst_28147 = (state_28167[(8)]);var inst_28144 = (state_28167[(7)]);var inst_28151 = cljs.core._EQ_.call(null,inst_28147,inst_28144);var state_28167__$1 = state_28167;if(inst_28151)
{var statearr_28180_28199 = state_28167__$1;(statearr_28180_28199[(1)] = (8));
} else
{var statearr_28181_28200 = state_28167__$1;(statearr_28181_28200[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28168 === (10)))
{var inst_28159 = (state_28167[(2)]);var state_28167__$1 = state_28167;var statearr_28182_28201 = state_28167__$1;(statearr_28182_28201[(2)] = inst_28159);
(statearr_28182_28201[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28168 === (8)))
{var inst_28144 = (state_28167[(7)]);var tmp28179 = inst_28144;var inst_28144__$1 = tmp28179;var state_28167__$1 = (function (){var statearr_28183 = state_28167;(statearr_28183[(7)] = inst_28144__$1);
return statearr_28183;
})();var statearr_28184_28202 = state_28167__$1;(statearr_28184_28202[(2)] = null);
(statearr_28184_28202[(1)] = (2));
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
});})(c__18367__auto___28192,out))
;return ((function (switch__18302__auto__,c__18367__auto___28192,out){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_28188 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28188[(0)] = state_machine__18303__auto__);
(statearr_28188[(1)] = (1));
return statearr_28188;
});
var state_machine__18303__auto____1 = (function (state_28167){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_28167);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e28189){if((e28189 instanceof Object))
{var ex__18306__auto__ = e28189;var statearr_28190_28203 = state_28167;(statearr_28190_28203[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28167);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28189;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28204 = state_28167;
state_28167 = G__28204;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_28167){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_28167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___28192,out))
})();var state__18369__auto__ = (function (){var statearr_28191 = f__18368__auto__.call(null);(statearr_28191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___28192);
return statearr_28191;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___28192,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18367__auto___28339 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___28339,out){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___28339,out){
return (function (state_28309){var state_val_28310 = (state_28309[(1)]);if((state_val_28310 === (7)))
{var inst_28305 = (state_28309[(2)]);var state_28309__$1 = state_28309;var statearr_28311_28340 = state_28309__$1;(statearr_28311_28340[(2)] = inst_28305);
(statearr_28311_28340[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (1)))
{var inst_28272 = (new Array(n));var inst_28273 = inst_28272;var inst_28274 = (0);var state_28309__$1 = (function (){var statearr_28312 = state_28309;(statearr_28312[(7)] = inst_28273);
(statearr_28312[(8)] = inst_28274);
return statearr_28312;
})();var statearr_28313_28341 = state_28309__$1;(statearr_28313_28341[(2)] = null);
(statearr_28313_28341[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (4)))
{var inst_28277 = (state_28309[(9)]);var inst_28277__$1 = (state_28309[(2)]);var inst_28278 = (inst_28277__$1 == null);var inst_28279 = cljs.core.not.call(null,inst_28278);var state_28309__$1 = (function (){var statearr_28314 = state_28309;(statearr_28314[(9)] = inst_28277__$1);
return statearr_28314;
})();if(inst_28279)
{var statearr_28315_28342 = state_28309__$1;(statearr_28315_28342[(1)] = (5));
} else
{var statearr_28316_28343 = state_28309__$1;(statearr_28316_28343[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (15)))
{var inst_28299 = (state_28309[(2)]);var state_28309__$1 = state_28309;var statearr_28317_28344 = state_28309__$1;(statearr_28317_28344[(2)] = inst_28299);
(statearr_28317_28344[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (13)))
{var state_28309__$1 = state_28309;var statearr_28318_28345 = state_28309__$1;(statearr_28318_28345[(2)] = null);
(statearr_28318_28345[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (6)))
{var inst_28274 = (state_28309[(8)]);var inst_28295 = (inst_28274 > (0));var state_28309__$1 = state_28309;if(cljs.core.truth_(inst_28295))
{var statearr_28319_28346 = state_28309__$1;(statearr_28319_28346[(1)] = (12));
} else
{var statearr_28320_28347 = state_28309__$1;(statearr_28320_28347[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (3)))
{var inst_28307 = (state_28309[(2)]);var state_28309__$1 = state_28309;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28309__$1,inst_28307);
} else
{if((state_val_28310 === (12)))
{var inst_28273 = (state_28309[(7)]);var inst_28297 = cljs.core.vec.call(null,inst_28273);var state_28309__$1 = state_28309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28309__$1,(15),out,inst_28297);
} else
{if((state_val_28310 === (2)))
{var state_28309__$1 = state_28309;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28309__$1,(4),ch);
} else
{if((state_val_28310 === (11)))
{var inst_28289 = (state_28309[(2)]);var inst_28290 = (new Array(n));var inst_28273 = inst_28290;var inst_28274 = (0);var state_28309__$1 = (function (){var statearr_28321 = state_28309;(statearr_28321[(7)] = inst_28273);
(statearr_28321[(10)] = inst_28289);
(statearr_28321[(8)] = inst_28274);
return statearr_28321;
})();var statearr_28322_28348 = state_28309__$1;(statearr_28322_28348[(2)] = null);
(statearr_28322_28348[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (9)))
{var inst_28273 = (state_28309[(7)]);var inst_28287 = cljs.core.vec.call(null,inst_28273);var state_28309__$1 = state_28309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28309__$1,(11),out,inst_28287);
} else
{if((state_val_28310 === (5)))
{var inst_28273 = (state_28309[(7)]);var inst_28282 = (state_28309[(11)]);var inst_28277 = (state_28309[(9)]);var inst_28274 = (state_28309[(8)]);var inst_28281 = (inst_28273[inst_28274] = inst_28277);var inst_28282__$1 = (inst_28274 + (1));var inst_28283 = (inst_28282__$1 < n);var state_28309__$1 = (function (){var statearr_28323 = state_28309;(statearr_28323[(12)] = inst_28281);
(statearr_28323[(11)] = inst_28282__$1);
return statearr_28323;
})();if(cljs.core.truth_(inst_28283))
{var statearr_28324_28349 = state_28309__$1;(statearr_28324_28349[(1)] = (8));
} else
{var statearr_28325_28350 = state_28309__$1;(statearr_28325_28350[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (14)))
{var inst_28302 = (state_28309[(2)]);var inst_28303 = cljs.core.async.close_BANG_.call(null,out);var state_28309__$1 = (function (){var statearr_28327 = state_28309;(statearr_28327[(13)] = inst_28302);
return statearr_28327;
})();var statearr_28328_28351 = state_28309__$1;(statearr_28328_28351[(2)] = inst_28303);
(statearr_28328_28351[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (10)))
{var inst_28293 = (state_28309[(2)]);var state_28309__$1 = state_28309;var statearr_28329_28352 = state_28309__$1;(statearr_28329_28352[(2)] = inst_28293);
(statearr_28329_28352[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28310 === (8)))
{var inst_28273 = (state_28309[(7)]);var inst_28282 = (state_28309[(11)]);var tmp28326 = inst_28273;var inst_28273__$1 = tmp28326;var inst_28274 = inst_28282;var state_28309__$1 = (function (){var statearr_28330 = state_28309;(statearr_28330[(7)] = inst_28273__$1);
(statearr_28330[(8)] = inst_28274);
return statearr_28330;
})();var statearr_28331_28353 = state_28309__$1;(statearr_28331_28353[(2)] = null);
(statearr_28331_28353[(1)] = (2));
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
});})(c__18367__auto___28339,out))
;return ((function (switch__18302__auto__,c__18367__auto___28339,out){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_28335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28335[(0)] = state_machine__18303__auto__);
(statearr_28335[(1)] = (1));
return statearr_28335;
});
var state_machine__18303__auto____1 = (function (state_28309){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_28309);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e28336){if((e28336 instanceof Object))
{var ex__18306__auto__ = e28336;var statearr_28337_28354 = state_28309;(statearr_28337_28354[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28309);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28336;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28355 = state_28309;
state_28309 = G__28355;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_28309){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_28309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___28339,out))
})();var state__18369__auto__ = (function (){var statearr_28338 = f__18368__auto__.call(null);(statearr_28338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___28339);
return statearr_28338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___28339,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18367__auto___28498 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18367__auto___28498,out){
return (function (){var f__18368__auto__ = (function (){var switch__18302__auto__ = ((function (c__18367__auto___28498,out){
return (function (state_28468){var state_val_28469 = (state_28468[(1)]);if((state_val_28469 === (7)))
{var inst_28464 = (state_28468[(2)]);var state_28468__$1 = state_28468;var statearr_28470_28499 = state_28468__$1;(statearr_28470_28499[(2)] = inst_28464);
(statearr_28470_28499[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (1)))
{var inst_28427 = [];var inst_28428 = inst_28427;var inst_28429 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_28468__$1 = (function (){var statearr_28471 = state_28468;(statearr_28471[(7)] = inst_28428);
(statearr_28471[(8)] = inst_28429);
return statearr_28471;
})();var statearr_28472_28500 = state_28468__$1;(statearr_28472_28500[(2)] = null);
(statearr_28472_28500[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (4)))
{var inst_28432 = (state_28468[(9)]);var inst_28432__$1 = (state_28468[(2)]);var inst_28433 = (inst_28432__$1 == null);var inst_28434 = cljs.core.not.call(null,inst_28433);var state_28468__$1 = (function (){var statearr_28473 = state_28468;(statearr_28473[(9)] = inst_28432__$1);
return statearr_28473;
})();if(inst_28434)
{var statearr_28474_28501 = state_28468__$1;(statearr_28474_28501[(1)] = (5));
} else
{var statearr_28475_28502 = state_28468__$1;(statearr_28475_28502[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (15)))
{var inst_28458 = (state_28468[(2)]);var state_28468__$1 = state_28468;var statearr_28476_28503 = state_28468__$1;(statearr_28476_28503[(2)] = inst_28458);
(statearr_28476_28503[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (13)))
{var state_28468__$1 = state_28468;var statearr_28477_28504 = state_28468__$1;(statearr_28477_28504[(2)] = null);
(statearr_28477_28504[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (6)))
{var inst_28428 = (state_28468[(7)]);var inst_28453 = inst_28428.length;var inst_28454 = (inst_28453 > (0));var state_28468__$1 = state_28468;if(cljs.core.truth_(inst_28454))
{var statearr_28478_28505 = state_28468__$1;(statearr_28478_28505[(1)] = (12));
} else
{var statearr_28479_28506 = state_28468__$1;(statearr_28479_28506[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (3)))
{var inst_28466 = (state_28468[(2)]);var state_28468__$1 = state_28468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28468__$1,inst_28466);
} else
{if((state_val_28469 === (12)))
{var inst_28428 = (state_28468[(7)]);var inst_28456 = cljs.core.vec.call(null,inst_28428);var state_28468__$1 = state_28468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28468__$1,(15),out,inst_28456);
} else
{if((state_val_28469 === (2)))
{var state_28468__$1 = state_28468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28468__$1,(4),ch);
} else
{if((state_val_28469 === (11)))
{var inst_28432 = (state_28468[(9)]);var inst_28436 = (state_28468[(10)]);var inst_28446 = (state_28468[(2)]);var inst_28447 = [];var inst_28448 = inst_28447.push(inst_28432);var inst_28428 = inst_28447;var inst_28429 = inst_28436;var state_28468__$1 = (function (){var statearr_28480 = state_28468;(statearr_28480[(7)] = inst_28428);
(statearr_28480[(8)] = inst_28429);
(statearr_28480[(11)] = inst_28446);
(statearr_28480[(12)] = inst_28448);
return statearr_28480;
})();var statearr_28481_28507 = state_28468__$1;(statearr_28481_28507[(2)] = null);
(statearr_28481_28507[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (9)))
{var inst_28428 = (state_28468[(7)]);var inst_28444 = cljs.core.vec.call(null,inst_28428);var state_28468__$1 = state_28468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28468__$1,(11),out,inst_28444);
} else
{if((state_val_28469 === (5)))
{var inst_28429 = (state_28468[(8)]);var inst_28432 = (state_28468[(9)]);var inst_28436 = (state_28468[(10)]);var inst_28436__$1 = f.call(null,inst_28432);var inst_28437 = cljs.core._EQ_.call(null,inst_28436__$1,inst_28429);var inst_28438 = cljs.core.keyword_identical_QMARK_.call(null,inst_28429,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_28439 = (inst_28437) || (inst_28438);var state_28468__$1 = (function (){var statearr_28482 = state_28468;(statearr_28482[(10)] = inst_28436__$1);
return statearr_28482;
})();if(cljs.core.truth_(inst_28439))
{var statearr_28483_28508 = state_28468__$1;(statearr_28483_28508[(1)] = (8));
} else
{var statearr_28484_28509 = state_28468__$1;(statearr_28484_28509[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (14)))
{var inst_28461 = (state_28468[(2)]);var inst_28462 = cljs.core.async.close_BANG_.call(null,out);var state_28468__$1 = (function (){var statearr_28486 = state_28468;(statearr_28486[(13)] = inst_28461);
return statearr_28486;
})();var statearr_28487_28510 = state_28468__$1;(statearr_28487_28510[(2)] = inst_28462);
(statearr_28487_28510[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (10)))
{var inst_28451 = (state_28468[(2)]);var state_28468__$1 = state_28468;var statearr_28488_28511 = state_28468__$1;(statearr_28488_28511[(2)] = inst_28451);
(statearr_28488_28511[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28469 === (8)))
{var inst_28428 = (state_28468[(7)]);var inst_28432 = (state_28468[(9)]);var inst_28436 = (state_28468[(10)]);var inst_28441 = inst_28428.push(inst_28432);var tmp28485 = inst_28428;var inst_28428__$1 = tmp28485;var inst_28429 = inst_28436;var state_28468__$1 = (function (){var statearr_28489 = state_28468;(statearr_28489[(7)] = inst_28428__$1);
(statearr_28489[(8)] = inst_28429);
(statearr_28489[(14)] = inst_28441);
return statearr_28489;
})();var statearr_28490_28512 = state_28468__$1;(statearr_28490_28512[(2)] = null);
(statearr_28490_28512[(1)] = (2));
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
});})(c__18367__auto___28498,out))
;return ((function (switch__18302__auto__,c__18367__auto___28498,out){
return (function() {
var state_machine__18303__auto__ = null;
var state_machine__18303__auto____0 = (function (){var statearr_28494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28494[(0)] = state_machine__18303__auto__);
(statearr_28494[(1)] = (1));
return statearr_28494;
});
var state_machine__18303__auto____1 = (function (state_28468){while(true){
var ret_value__18304__auto__ = (function (){try{while(true){
var result__18305__auto__ = switch__18302__auto__.call(null,state_28468);if(cljs.core.keyword_identical_QMARK_.call(null,result__18305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18305__auto__;
}
break;
}
}catch (e28495){if((e28495 instanceof Object))
{var ex__18306__auto__ = e28495;var statearr_28496_28513 = state_28468;(statearr_28496_28513[(5)] = ex__18306__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28468);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28495;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28514 = state_28468;
state_28468 = G__28514;
continue;
}
} else
{return ret_value__18304__auto__;
}
break;
}
});
state_machine__18303__auto__ = function(state_28468){
switch(arguments.length){
case 0:
return state_machine__18303__auto____0.call(this);
case 1:
return state_machine__18303__auto____1.call(this,state_28468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18303__auto____0;
state_machine__18303__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18303__auto____1;
return state_machine__18303__auto__;
})()
;})(switch__18302__auto__,c__18367__auto___28498,out))
})();var state__18369__auto__ = (function (){var statearr_28497 = f__18368__auto__.call(null);(statearr_28497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18367__auto___28498);
return statearr_28497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18369__auto__);
});})(c__18367__auto___28498,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map