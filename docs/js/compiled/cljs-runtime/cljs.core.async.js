goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__69171 = arguments.length;
switch (G__69171) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69172 = (function (f,blockable,meta69173){
this.f = f;
this.blockable = blockable;
this.meta69173 = meta69173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69174,meta69173__$1){
var self__ = this;
var _69174__$1 = this;
return (new cljs.core.async.t_cljs$core$async69172(self__.f,self__.blockable,meta69173__$1));
}));

(cljs.core.async.t_cljs$core$async69172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69174){
var self__ = this;
var _69174__$1 = this;
return self__.meta69173;
}));

(cljs.core.async.t_cljs$core$async69172.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69172.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async69172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async69172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta69173","meta69173",-1870764545,null)], null);
}));

(cljs.core.async.t_cljs$core$async69172.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69172");

(cljs.core.async.t_cljs$core$async69172.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69172");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69172.
 */
cljs.core.async.__GT_t_cljs$core$async69172 = (function cljs$core$async$__GT_t_cljs$core$async69172(f__$1,blockable__$1,meta69173){
return (new cljs.core.async.t_cljs$core$async69172(f__$1,blockable__$1,meta69173));
});

}

return (new cljs.core.async.t_cljs$core$async69172(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__69177 = arguments.length;
switch (G__69177) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__69183 = arguments.length;
switch (G__69183) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__69185 = arguments.length;
switch (G__69185) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_71286 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_71286) : fn1.call(null,val_71286));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_71286) : fn1.call(null,val_71286));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__69187 = arguments.length;
switch (G__69187) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___71290 = n;
var x_71291 = (0);
while(true){
if((x_71291 < n__4613__auto___71290)){
(a[x_71291] = x_71291);

var G__71293 = (x_71291 + (1));
x_71291 = G__71293;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69190 = (function (flag,meta69191){
this.flag = flag;
this.meta69191 = meta69191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69192,meta69191__$1){
var self__ = this;
var _69192__$1 = this;
return (new cljs.core.async.t_cljs$core$async69190(self__.flag,meta69191__$1));
}));

(cljs.core.async.t_cljs$core$async69190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69192){
var self__ = this;
var _69192__$1 = this;
return self__.meta69191;
}));

(cljs.core.async.t_cljs$core$async69190.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async69190.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async69190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta69191","meta69191",815216597,null)], null);
}));

(cljs.core.async.t_cljs$core$async69190.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69190");

(cljs.core.async.t_cljs$core$async69190.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69190");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69190.
 */
cljs.core.async.__GT_t_cljs$core$async69190 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async69190(flag__$1,meta69191){
return (new cljs.core.async.t_cljs$core$async69190(flag__$1,meta69191));
});

}

return (new cljs.core.async.t_cljs$core$async69190(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69193 = (function (flag,cb,meta69194){
this.flag = flag;
this.cb = cb;
this.meta69194 = meta69194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69195,meta69194__$1){
var self__ = this;
var _69195__$1 = this;
return (new cljs.core.async.t_cljs$core$async69193(self__.flag,self__.cb,meta69194__$1));
}));

(cljs.core.async.t_cljs$core$async69193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69195){
var self__ = this;
var _69195__$1 = this;
return self__.meta69194;
}));

(cljs.core.async.t_cljs$core$async69193.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async69193.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async69193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta69194","meta69194",1965828290,null)], null);
}));

(cljs.core.async.t_cljs$core$async69193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69193");

(cljs.core.async.t_cljs$core$async69193.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69193.
 */
cljs.core.async.__GT_t_cljs$core$async69193 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async69193(flag__$1,cb__$1,meta69194){
return (new cljs.core.async.t_cljs$core$async69193(flag__$1,cb__$1,meta69194));
});

}

return (new cljs.core.async.t_cljs$core$async69193(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69205_SHARP_){
var G__69209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69205_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__69209) : fret.call(null,G__69209));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69206_SHARP_){
var G__69210 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69206_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__69210) : fret.call(null,G__69210));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__71297 = (i + (1));
i = G__71297;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71298 = arguments.length;
var i__4737__auto___71299 = (0);
while(true){
if((i__4737__auto___71299 < len__4736__auto___71298)){
args__4742__auto__.push((arguments[i__4737__auto___71299]));

var G__71300 = (i__4737__auto___71299 + (1));
i__4737__auto___71299 = G__71300;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__69215){
var map__69216 = p__69215;
var map__69216__$1 = (((((!((map__69216 == null))))?(((((map__69216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69216):map__69216);
var opts = map__69216__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq69212){
var G__69213 = cljs.core.first(seq69212);
var seq69212__$1 = cljs.core.next(seq69212);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69213,seq69212__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__69223 = arguments.length;
switch (G__69223) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__69095__auto___71305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_69254){
var state_val_69257 = (state_69254[(1)]);
if((state_val_69257 === (7))){
var inst_69249 = (state_69254[(2)]);
var state_69254__$1 = state_69254;
var statearr_69272_71308 = state_69254__$1;
(statearr_69272_71308[(2)] = inst_69249);

(statearr_69272_71308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69257 === (1))){
var state_69254__$1 = state_69254;
var statearr_69273_71309 = state_69254__$1;
(statearr_69273_71309[(2)] = null);

(statearr_69273_71309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69257 === (4))){
var inst_69230 = (state_69254[(7)]);
var inst_69230__$1 = (state_69254[(2)]);
var inst_69231 = (inst_69230__$1 == null);
var state_69254__$1 = (function (){var statearr_69277 = state_69254;
(statearr_69277[(7)] = inst_69230__$1);

return statearr_69277;
})();
if(cljs.core.truth_(inst_69231)){
var statearr_69278_71310 = state_69254__$1;
(statearr_69278_71310[(1)] = (5));

} else {
var statearr_69279_71311 = state_69254__$1;
(statearr_69279_71311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69257 === (13))){
var state_69254__$1 = state_69254;
var statearr_69280_71312 = state_69254__$1;
(statearr_69280_71312[(2)] = null);

(statearr_69280_71312[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69257 === (6))){
var inst_69230 = (state_69254[(7)]);
var state_69254__$1 = state_69254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69254__$1,(11),to,inst_69230);
} else {
if((state_val_69257 === (3))){
var inst_69251 = (state_69254[(2)]);
var state_69254__$1 = state_69254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69254__$1,inst_69251);
} else {
if((state_val_69257 === (12))){
var state_69254__$1 = state_69254;
var statearr_69283_71315 = state_69254__$1;
(statearr_69283_71315[(2)] = null);

(statearr_69283_71315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69257 === (2))){
var state_69254__$1 = state_69254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69254__$1,(4),from);
} else {
if((state_val_69257 === (11))){
var inst_69240 = (state_69254[(2)]);
var state_69254__$1 = state_69254;
if(cljs.core.truth_(inst_69240)){
var statearr_69284_71316 = state_69254__$1;
(statearr_69284_71316[(1)] = (12));

} else {
var statearr_69285_71317 = state_69254__$1;
(statearr_69285_71317[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69257 === (9))){
var state_69254__$1 = state_69254;
var statearr_69286_71318 = state_69254__$1;
(statearr_69286_71318[(2)] = null);

(statearr_69286_71318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69257 === (5))){
var state_69254__$1 = state_69254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69287_71319 = state_69254__$1;
(statearr_69287_71319[(1)] = (8));

} else {
var statearr_69291_71320 = state_69254__$1;
(statearr_69291_71320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69257 === (14))){
var inst_69247 = (state_69254[(2)]);
var state_69254__$1 = state_69254;
var statearr_69292_71322 = state_69254__$1;
(statearr_69292_71322[(2)] = inst_69247);

(statearr_69292_71322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69257 === (10))){
var inst_69237 = (state_69254[(2)]);
var state_69254__$1 = state_69254;
var statearr_69293_71324 = state_69254__$1;
(statearr_69293_71324[(2)] = inst_69237);

(statearr_69293_71324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69257 === (8))){
var inst_69234 = cljs.core.async.close_BANG_(to);
var state_69254__$1 = state_69254;
var statearr_69294_71325 = state_69254__$1;
(statearr_69294_71325[(2)] = inst_69234);

(statearr_69294_71325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__68975__auto__ = null;
var cljs$core$async$state_machine__68975__auto____0 = (function (){
var statearr_69295 = [null,null,null,null,null,null,null,null];
(statearr_69295[(0)] = cljs$core$async$state_machine__68975__auto__);

(statearr_69295[(1)] = (1));

return statearr_69295;
});
var cljs$core$async$state_machine__68975__auto____1 = (function (state_69254){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_69254);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e69296){var ex__68978__auto__ = e69296;
var statearr_69297_71326 = state_69254;
(statearr_69297_71326[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_69254[(4)]))){
var statearr_69298_71327 = state_69254;
(statearr_69298_71327[(1)] = cljs.core.first((state_69254[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71329 = state_69254;
state_69254 = G__71329;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$state_machine__68975__auto__ = function(state_69254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68975__auto____1.call(this,state_69254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68975__auto____0;
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68975__auto____1;
return cljs$core$async$state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_69299 = f__69096__auto__();
(statearr_69299[(6)] = c__69095__auto___71305);

return statearr_69299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__69300){
var vec__69301 = p__69300;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69301,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69301,(1),null);
var job = vec__69301;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__69095__auto___71331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_69308){
var state_val_69309 = (state_69308[(1)]);
if((state_val_69309 === (1))){
var state_69308__$1 = state_69308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69308__$1,(2),res,v);
} else {
if((state_val_69309 === (2))){
var inst_69305 = (state_69308[(2)]);
var inst_69306 = cljs.core.async.close_BANG_(res);
var state_69308__$1 = (function (){var statearr_69311 = state_69308;
(statearr_69311[(7)] = inst_69305);

return statearr_69311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69308__$1,inst_69306);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0 = (function (){
var statearr_69312 = [null,null,null,null,null,null,null,null];
(statearr_69312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__);

(statearr_69312[(1)] = (1));

return statearr_69312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1 = (function (state_69308){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_69308);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e69313){var ex__68978__auto__ = e69313;
var statearr_69314_71334 = state_69308;
(statearr_69314_71334[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_69308[(4)]))){
var statearr_69315_71335 = state_69308;
(statearr_69315_71335[(1)] = cljs.core.first((state_69308[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71336 = state_69308;
state_69308 = G__71336;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__ = function(state_69308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1.call(this,state_69308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_69316 = f__69096__auto__();
(statearr_69316[(6)] = c__69095__auto___71331);

return statearr_69316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__69317){
var vec__69318 = p__69317;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69318,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69318,(1),null);
var job = vec__69318;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___71337 = n;
var __71338 = (0);
while(true){
if((__71338 < n__4613__auto___71337)){
var G__69321_71339 = type;
var G__69321_71340__$1 = (((G__69321_71339 instanceof cljs.core.Keyword))?G__69321_71339.fqn:null);
switch (G__69321_71340__$1) {
case "compute":
var c__69095__auto___71342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__71338,c__69095__auto___71342,G__69321_71339,G__69321_71340__$1,n__4613__auto___71337,jobs,results,process,async){
return (function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = ((function (__71338,c__69095__auto___71342,G__69321_71339,G__69321_71340__$1,n__4613__auto___71337,jobs,results,process,async){
return (function (state_69334){
var state_val_69335 = (state_69334[(1)]);
if((state_val_69335 === (1))){
var state_69334__$1 = state_69334;
var statearr_69336_71344 = state_69334__$1;
(statearr_69336_71344[(2)] = null);

(statearr_69336_71344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69335 === (2))){
var state_69334__$1 = state_69334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69334__$1,(4),jobs);
} else {
if((state_val_69335 === (3))){
var inst_69332 = (state_69334[(2)]);
var state_69334__$1 = state_69334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69334__$1,inst_69332);
} else {
if((state_val_69335 === (4))){
var inst_69324 = (state_69334[(2)]);
var inst_69325 = process(inst_69324);
var state_69334__$1 = state_69334;
if(cljs.core.truth_(inst_69325)){
var statearr_69337_71345 = state_69334__$1;
(statearr_69337_71345[(1)] = (5));

} else {
var statearr_69338_71346 = state_69334__$1;
(statearr_69338_71346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69335 === (5))){
var state_69334__$1 = state_69334;
var statearr_69340_71347 = state_69334__$1;
(statearr_69340_71347[(2)] = null);

(statearr_69340_71347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69335 === (6))){
var state_69334__$1 = state_69334;
var statearr_69341_71348 = state_69334__$1;
(statearr_69341_71348[(2)] = null);

(statearr_69341_71348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69335 === (7))){
var inst_69330 = (state_69334[(2)]);
var state_69334__$1 = state_69334;
var statearr_69342_71349 = state_69334__$1;
(statearr_69342_71349[(2)] = inst_69330);

(statearr_69342_71349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__71338,c__69095__auto___71342,G__69321_71339,G__69321_71340__$1,n__4613__auto___71337,jobs,results,process,async))
;
return ((function (__71338,switch__68974__auto__,c__69095__auto___71342,G__69321_71339,G__69321_71340__$1,n__4613__auto___71337,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0 = (function (){
var statearr_69343 = [null,null,null,null,null,null,null];
(statearr_69343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__);

(statearr_69343[(1)] = (1));

return statearr_69343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1 = (function (state_69334){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_69334);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e69344){var ex__68978__auto__ = e69344;
var statearr_69345_71354 = state_69334;
(statearr_69345_71354[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_69334[(4)]))){
var statearr_69346_71355 = state_69334;
(statearr_69346_71355[(1)] = cljs.core.first((state_69334[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71356 = state_69334;
state_69334 = G__71356;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__ = function(state_69334){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1.call(this,state_69334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__;
})()
;})(__71338,switch__68974__auto__,c__69095__auto___71342,G__69321_71339,G__69321_71340__$1,n__4613__auto___71337,jobs,results,process,async))
})();
var state__69097__auto__ = (function (){var statearr_69347 = f__69096__auto__();
(statearr_69347[(6)] = c__69095__auto___71342);

return statearr_69347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
});})(__71338,c__69095__auto___71342,G__69321_71339,G__69321_71340__$1,n__4613__auto___71337,jobs,results,process,async))
);


break;
case "async":
var c__69095__auto___71357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__71338,c__69095__auto___71357,G__69321_71339,G__69321_71340__$1,n__4613__auto___71337,jobs,results,process,async){
return (function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = ((function (__71338,c__69095__auto___71357,G__69321_71339,G__69321_71340__$1,n__4613__auto___71337,jobs,results,process,async){
return (function (state_69360){
var state_val_69361 = (state_69360[(1)]);
if((state_val_69361 === (1))){
var state_69360__$1 = state_69360;
var statearr_69362_71358 = state_69360__$1;
(statearr_69362_71358[(2)] = null);

(statearr_69362_71358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69361 === (2))){
var state_69360__$1 = state_69360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69360__$1,(4),jobs);
} else {
if((state_val_69361 === (3))){
var inst_69358 = (state_69360[(2)]);
var state_69360__$1 = state_69360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69360__$1,inst_69358);
} else {
if((state_val_69361 === (4))){
var inst_69350 = (state_69360[(2)]);
var inst_69351 = async(inst_69350);
var state_69360__$1 = state_69360;
if(cljs.core.truth_(inst_69351)){
var statearr_69363_71359 = state_69360__$1;
(statearr_69363_71359[(1)] = (5));

} else {
var statearr_69364_71360 = state_69360__$1;
(statearr_69364_71360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69361 === (5))){
var state_69360__$1 = state_69360;
var statearr_69365_71361 = state_69360__$1;
(statearr_69365_71361[(2)] = null);

(statearr_69365_71361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69361 === (6))){
var state_69360__$1 = state_69360;
var statearr_69366_71363 = state_69360__$1;
(statearr_69366_71363[(2)] = null);

(statearr_69366_71363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69361 === (7))){
var inst_69356 = (state_69360[(2)]);
var state_69360__$1 = state_69360;
var statearr_69367_71365 = state_69360__$1;
(statearr_69367_71365[(2)] = inst_69356);

(statearr_69367_71365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__71338,c__69095__auto___71357,G__69321_71339,G__69321_71340__$1,n__4613__auto___71337,jobs,results,process,async))
;
return ((function (__71338,switch__68974__auto__,c__69095__auto___71357,G__69321_71339,G__69321_71340__$1,n__4613__auto___71337,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0 = (function (){
var statearr_69374 = [null,null,null,null,null,null,null];
(statearr_69374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__);

(statearr_69374[(1)] = (1));

return statearr_69374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1 = (function (state_69360){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_69360);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e69381){var ex__68978__auto__ = e69381;
var statearr_69383_71366 = state_69360;
(statearr_69383_71366[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_69360[(4)]))){
var statearr_69388_71367 = state_69360;
(statearr_69388_71367[(1)] = cljs.core.first((state_69360[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71368 = state_69360;
state_69360 = G__71368;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__ = function(state_69360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1.call(this,state_69360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__;
})()
;})(__71338,switch__68974__auto__,c__69095__auto___71357,G__69321_71339,G__69321_71340__$1,n__4613__auto___71337,jobs,results,process,async))
})();
var state__69097__auto__ = (function (){var statearr_69395 = f__69096__auto__();
(statearr_69395[(6)] = c__69095__auto___71357);

return statearr_69395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
});})(__71338,c__69095__auto___71357,G__69321_71339,G__69321_71340__$1,n__4613__auto___71337,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69321_71340__$1)].join('')));

}

var G__71369 = (__71338 + (1));
__71338 = G__71369;
continue;
} else {
}
break;
}

var c__69095__auto___71370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_69417){
var state_val_69418 = (state_69417[(1)]);
if((state_val_69418 === (7))){
var inst_69413 = (state_69417[(2)]);
var state_69417__$1 = state_69417;
var statearr_69420_71375 = state_69417__$1;
(statearr_69420_71375[(2)] = inst_69413);

(statearr_69420_71375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69418 === (1))){
var state_69417__$1 = state_69417;
var statearr_69421_71379 = state_69417__$1;
(statearr_69421_71379[(2)] = null);

(statearr_69421_71379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69418 === (4))){
var inst_69398 = (state_69417[(7)]);
var inst_69398__$1 = (state_69417[(2)]);
var inst_69399 = (inst_69398__$1 == null);
var state_69417__$1 = (function (){var statearr_69422 = state_69417;
(statearr_69422[(7)] = inst_69398__$1);

return statearr_69422;
})();
if(cljs.core.truth_(inst_69399)){
var statearr_69423_71380 = state_69417__$1;
(statearr_69423_71380[(1)] = (5));

} else {
var statearr_69424_71381 = state_69417__$1;
(statearr_69424_71381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69418 === (6))){
var inst_69398 = (state_69417[(7)]);
var inst_69403 = (state_69417[(8)]);
var inst_69403__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69405 = [inst_69398,inst_69403__$1];
var inst_69406 = (new cljs.core.PersistentVector(null,2,(5),inst_69404,inst_69405,null));
var state_69417__$1 = (function (){var statearr_69426 = state_69417;
(statearr_69426[(8)] = inst_69403__$1);

return statearr_69426;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69417__$1,(8),jobs,inst_69406);
} else {
if((state_val_69418 === (3))){
var inst_69415 = (state_69417[(2)]);
var state_69417__$1 = state_69417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69417__$1,inst_69415);
} else {
if((state_val_69418 === (2))){
var state_69417__$1 = state_69417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69417__$1,(4),from);
} else {
if((state_val_69418 === (9))){
var inst_69410 = (state_69417[(2)]);
var state_69417__$1 = (function (){var statearr_69429 = state_69417;
(statearr_69429[(9)] = inst_69410);

return statearr_69429;
})();
var statearr_69430_71391 = state_69417__$1;
(statearr_69430_71391[(2)] = null);

(statearr_69430_71391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69418 === (5))){
var inst_69401 = cljs.core.async.close_BANG_(jobs);
var state_69417__$1 = state_69417;
var statearr_69431_71392 = state_69417__$1;
(statearr_69431_71392[(2)] = inst_69401);

(statearr_69431_71392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69418 === (8))){
var inst_69403 = (state_69417[(8)]);
var inst_69408 = (state_69417[(2)]);
var state_69417__$1 = (function (){var statearr_69432 = state_69417;
(statearr_69432[(10)] = inst_69408);

return statearr_69432;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69417__$1,(9),results,inst_69403);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0 = (function (){
var statearr_69433 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__);

(statearr_69433[(1)] = (1));

return statearr_69433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1 = (function (state_69417){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_69417);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e69434){var ex__68978__auto__ = e69434;
var statearr_69435_71400 = state_69417;
(statearr_69435_71400[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_69417[(4)]))){
var statearr_69436_71401 = state_69417;
(statearr_69436_71401[(1)] = cljs.core.first((state_69417[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71402 = state_69417;
state_69417 = G__71402;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__ = function(state_69417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1.call(this,state_69417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_69437 = f__69096__auto__();
(statearr_69437[(6)] = c__69095__auto___71370);

return statearr_69437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


var c__69095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_69496){
var state_val_69497 = (state_69496[(1)]);
if((state_val_69497 === (7))){
var inst_69492 = (state_69496[(2)]);
var state_69496__$1 = state_69496;
var statearr_69498_71406 = state_69496__$1;
(statearr_69498_71406[(2)] = inst_69492);

(statearr_69498_71406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (20))){
var state_69496__$1 = state_69496;
var statearr_69499_71410 = state_69496__$1;
(statearr_69499_71410[(2)] = null);

(statearr_69499_71410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (1))){
var state_69496__$1 = state_69496;
var statearr_69500_71411 = state_69496__$1;
(statearr_69500_71411[(2)] = null);

(statearr_69500_71411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (4))){
var inst_69444 = (state_69496[(7)]);
var inst_69444__$1 = (state_69496[(2)]);
var inst_69445 = (inst_69444__$1 == null);
var state_69496__$1 = (function (){var statearr_69501 = state_69496;
(statearr_69501[(7)] = inst_69444__$1);

return statearr_69501;
})();
if(cljs.core.truth_(inst_69445)){
var statearr_69506_71415 = state_69496__$1;
(statearr_69506_71415[(1)] = (5));

} else {
var statearr_69507_71416 = state_69496__$1;
(statearr_69507_71416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (15))){
var inst_69464 = (state_69496[(8)]);
var state_69496__$1 = state_69496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69496__$1,(18),to,inst_69464);
} else {
if((state_val_69497 === (21))){
var inst_69487 = (state_69496[(2)]);
var state_69496__$1 = state_69496;
var statearr_69515_71417 = state_69496__$1;
(statearr_69515_71417[(2)] = inst_69487);

(statearr_69515_71417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (13))){
var inst_69489 = (state_69496[(2)]);
var state_69496__$1 = (function (){var statearr_69521 = state_69496;
(statearr_69521[(9)] = inst_69489);

return statearr_69521;
})();
var statearr_69522_71418 = state_69496__$1;
(statearr_69522_71418[(2)] = null);

(statearr_69522_71418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (6))){
var inst_69444 = (state_69496[(7)]);
var state_69496__$1 = state_69496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69496__$1,(11),inst_69444);
} else {
if((state_val_69497 === (17))){
var inst_69482 = (state_69496[(2)]);
var state_69496__$1 = state_69496;
if(cljs.core.truth_(inst_69482)){
var statearr_69528_71420 = state_69496__$1;
(statearr_69528_71420[(1)] = (19));

} else {
var statearr_69529_71421 = state_69496__$1;
(statearr_69529_71421[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (3))){
var inst_69494 = (state_69496[(2)]);
var state_69496__$1 = state_69496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69496__$1,inst_69494);
} else {
if((state_val_69497 === (12))){
var inst_69459 = (state_69496[(10)]);
var state_69496__$1 = state_69496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69496__$1,(14),inst_69459);
} else {
if((state_val_69497 === (2))){
var state_69496__$1 = state_69496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69496__$1,(4),results);
} else {
if((state_val_69497 === (19))){
var state_69496__$1 = state_69496;
var statearr_69534_71422 = state_69496__$1;
(statearr_69534_71422[(2)] = null);

(statearr_69534_71422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (11))){
var inst_69459 = (state_69496[(2)]);
var state_69496__$1 = (function (){var statearr_69552 = state_69496;
(statearr_69552[(10)] = inst_69459);

return statearr_69552;
})();
var statearr_69553_71423 = state_69496__$1;
(statearr_69553_71423[(2)] = null);

(statearr_69553_71423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (9))){
var state_69496__$1 = state_69496;
var statearr_69554_71424 = state_69496__$1;
(statearr_69554_71424[(2)] = null);

(statearr_69554_71424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (5))){
var state_69496__$1 = state_69496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69555_71425 = state_69496__$1;
(statearr_69555_71425[(1)] = (8));

} else {
var statearr_69556_71426 = state_69496__$1;
(statearr_69556_71426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (14))){
var inst_69464 = (state_69496[(8)]);
var inst_69464__$1 = (state_69496[(2)]);
var inst_69471 = (inst_69464__$1 == null);
var inst_69472 = cljs.core.not(inst_69471);
var state_69496__$1 = (function (){var statearr_69557 = state_69496;
(statearr_69557[(8)] = inst_69464__$1);

return statearr_69557;
})();
if(inst_69472){
var statearr_69558_71427 = state_69496__$1;
(statearr_69558_71427[(1)] = (15));

} else {
var statearr_69559_71428 = state_69496__$1;
(statearr_69559_71428[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (16))){
var state_69496__$1 = state_69496;
var statearr_69560_71429 = state_69496__$1;
(statearr_69560_71429[(2)] = false);

(statearr_69560_71429[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (10))){
var inst_69456 = (state_69496[(2)]);
var state_69496__$1 = state_69496;
var statearr_69561_71430 = state_69496__$1;
(statearr_69561_71430[(2)] = inst_69456);

(statearr_69561_71430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (18))){
var inst_69479 = (state_69496[(2)]);
var state_69496__$1 = state_69496;
var statearr_69563_71431 = state_69496__$1;
(statearr_69563_71431[(2)] = inst_69479);

(statearr_69563_71431[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69497 === (8))){
var inst_69453 = cljs.core.async.close_BANG_(to);
var state_69496__$1 = state_69496;
var statearr_69566_71432 = state_69496__$1;
(statearr_69566_71432[(2)] = inst_69453);

(statearr_69566_71432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0 = (function (){
var statearr_69569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__);

(statearr_69569[(1)] = (1));

return statearr_69569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1 = (function (state_69496){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_69496);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e69570){var ex__68978__auto__ = e69570;
var statearr_69571_71433 = state_69496;
(statearr_69571_71433[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_69496[(4)]))){
var statearr_69572_71434 = state_69496;
(statearr_69572_71434[(1)] = cljs.core.first((state_69496[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71435 = state_69496;
state_69496 = G__71435;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__ = function(state_69496){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1.call(this,state_69496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__68975__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_69575 = f__69096__auto__();
(statearr_69575[(6)] = c__69095__auto__);

return statearr_69575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));

return c__69095__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__69579 = arguments.length;
switch (G__69579) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__69593 = arguments.length;
switch (G__69593) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__69611 = arguments.length;
switch (G__69611) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__69095__auto___71448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_69637){
var state_val_69638 = (state_69637[(1)]);
if((state_val_69638 === (7))){
var inst_69633 = (state_69637[(2)]);
var state_69637__$1 = state_69637;
var statearr_69639_71449 = state_69637__$1;
(statearr_69639_71449[(2)] = inst_69633);

(statearr_69639_71449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69638 === (1))){
var state_69637__$1 = state_69637;
var statearr_69642_71450 = state_69637__$1;
(statearr_69642_71450[(2)] = null);

(statearr_69642_71450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69638 === (4))){
var inst_69614 = (state_69637[(7)]);
var inst_69614__$1 = (state_69637[(2)]);
var inst_69615 = (inst_69614__$1 == null);
var state_69637__$1 = (function (){var statearr_69646 = state_69637;
(statearr_69646[(7)] = inst_69614__$1);

return statearr_69646;
})();
if(cljs.core.truth_(inst_69615)){
var statearr_69647_71452 = state_69637__$1;
(statearr_69647_71452[(1)] = (5));

} else {
var statearr_69649_71456 = state_69637__$1;
(statearr_69649_71456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69638 === (13))){
var state_69637__$1 = state_69637;
var statearr_69650_71459 = state_69637__$1;
(statearr_69650_71459[(2)] = null);

(statearr_69650_71459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69638 === (6))){
var inst_69614 = (state_69637[(7)]);
var inst_69620 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_69614) : p.call(null,inst_69614));
var state_69637__$1 = state_69637;
if(cljs.core.truth_(inst_69620)){
var statearr_69653_71462 = state_69637__$1;
(statearr_69653_71462[(1)] = (9));

} else {
var statearr_69654_71465 = state_69637__$1;
(statearr_69654_71465[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69638 === (3))){
var inst_69635 = (state_69637[(2)]);
var state_69637__$1 = state_69637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69637__$1,inst_69635);
} else {
if((state_val_69638 === (12))){
var state_69637__$1 = state_69637;
var statearr_69655_71467 = state_69637__$1;
(statearr_69655_71467[(2)] = null);

(statearr_69655_71467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69638 === (2))){
var state_69637__$1 = state_69637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69637__$1,(4),ch);
} else {
if((state_val_69638 === (11))){
var inst_69614 = (state_69637[(7)]);
var inst_69624 = (state_69637[(2)]);
var state_69637__$1 = state_69637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69637__$1,(8),inst_69624,inst_69614);
} else {
if((state_val_69638 === (9))){
var state_69637__$1 = state_69637;
var statearr_69657_71476 = state_69637__$1;
(statearr_69657_71476[(2)] = tc);

(statearr_69657_71476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69638 === (5))){
var inst_69617 = cljs.core.async.close_BANG_(tc);
var inst_69618 = cljs.core.async.close_BANG_(fc);
var state_69637__$1 = (function (){var statearr_69660 = state_69637;
(statearr_69660[(8)] = inst_69617);

return statearr_69660;
})();
var statearr_69661_71484 = state_69637__$1;
(statearr_69661_71484[(2)] = inst_69618);

(statearr_69661_71484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69638 === (14))){
var inst_69631 = (state_69637[(2)]);
var state_69637__$1 = state_69637;
var statearr_69662_71485 = state_69637__$1;
(statearr_69662_71485[(2)] = inst_69631);

(statearr_69662_71485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69638 === (10))){
var state_69637__$1 = state_69637;
var statearr_69663_71486 = state_69637__$1;
(statearr_69663_71486[(2)] = fc);

(statearr_69663_71486[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69638 === (8))){
var inst_69626 = (state_69637[(2)]);
var state_69637__$1 = state_69637;
if(cljs.core.truth_(inst_69626)){
var statearr_69667_71487 = state_69637__$1;
(statearr_69667_71487[(1)] = (12));

} else {
var statearr_69668_71488 = state_69637__$1;
(statearr_69668_71488[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__68975__auto__ = null;
var cljs$core$async$state_machine__68975__auto____0 = (function (){
var statearr_69669 = [null,null,null,null,null,null,null,null,null];
(statearr_69669[(0)] = cljs$core$async$state_machine__68975__auto__);

(statearr_69669[(1)] = (1));

return statearr_69669;
});
var cljs$core$async$state_machine__68975__auto____1 = (function (state_69637){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_69637);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e69670){var ex__68978__auto__ = e69670;
var statearr_69671_71489 = state_69637;
(statearr_69671_71489[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_69637[(4)]))){
var statearr_69672_71490 = state_69637;
(statearr_69672_71490[(1)] = cljs.core.first((state_69637[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71491 = state_69637;
state_69637 = G__71491;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$state_machine__68975__auto__ = function(state_69637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68975__auto____1.call(this,state_69637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68975__auto____0;
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68975__auto____1;
return cljs$core$async$state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_69673 = f__69096__auto__();
(statearr_69673[(6)] = c__69095__auto___71448);

return statearr_69673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__69095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_69701){
var state_val_69702 = (state_69701[(1)]);
if((state_val_69702 === (7))){
var inst_69697 = (state_69701[(2)]);
var state_69701__$1 = state_69701;
var statearr_69703_71498 = state_69701__$1;
(statearr_69703_71498[(2)] = inst_69697);

(statearr_69703_71498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (1))){
var inst_69679 = init;
var inst_69680 = inst_69679;
var state_69701__$1 = (function (){var statearr_69706 = state_69701;
(statearr_69706[(7)] = inst_69680);

return statearr_69706;
})();
var statearr_69708_71499 = state_69701__$1;
(statearr_69708_71499[(2)] = null);

(statearr_69708_71499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (4))){
var inst_69683 = (state_69701[(8)]);
var inst_69683__$1 = (state_69701[(2)]);
var inst_69684 = (inst_69683__$1 == null);
var state_69701__$1 = (function (){var statearr_69709 = state_69701;
(statearr_69709[(8)] = inst_69683__$1);

return statearr_69709;
})();
if(cljs.core.truth_(inst_69684)){
var statearr_69711_71500 = state_69701__$1;
(statearr_69711_71500[(1)] = (5));

} else {
var statearr_69716_71501 = state_69701__$1;
(statearr_69716_71501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (6))){
var inst_69688 = (state_69701[(9)]);
var inst_69680 = (state_69701[(7)]);
var inst_69683 = (state_69701[(8)]);
var inst_69688__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_69680,inst_69683) : f.call(null,inst_69680,inst_69683));
var inst_69689 = cljs.core.reduced_QMARK_(inst_69688__$1);
var state_69701__$1 = (function (){var statearr_69717 = state_69701;
(statearr_69717[(9)] = inst_69688__$1);

return statearr_69717;
})();
if(inst_69689){
var statearr_69718_71502 = state_69701__$1;
(statearr_69718_71502[(1)] = (8));

} else {
var statearr_69719_71503 = state_69701__$1;
(statearr_69719_71503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (3))){
var inst_69699 = (state_69701[(2)]);
var state_69701__$1 = state_69701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69701__$1,inst_69699);
} else {
if((state_val_69702 === (2))){
var state_69701__$1 = state_69701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69701__$1,(4),ch);
} else {
if((state_val_69702 === (9))){
var inst_69688 = (state_69701[(9)]);
var inst_69680 = inst_69688;
var state_69701__$1 = (function (){var statearr_69720 = state_69701;
(statearr_69720[(7)] = inst_69680);

return statearr_69720;
})();
var statearr_69721_71506 = state_69701__$1;
(statearr_69721_71506[(2)] = null);

(statearr_69721_71506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (5))){
var inst_69680 = (state_69701[(7)]);
var state_69701__$1 = state_69701;
var statearr_69722_71507 = state_69701__$1;
(statearr_69722_71507[(2)] = inst_69680);

(statearr_69722_71507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (10))){
var inst_69695 = (state_69701[(2)]);
var state_69701__$1 = state_69701;
var statearr_69726_71508 = state_69701__$1;
(statearr_69726_71508[(2)] = inst_69695);

(statearr_69726_71508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69702 === (8))){
var inst_69688 = (state_69701[(9)]);
var inst_69691 = cljs.core.deref(inst_69688);
var state_69701__$1 = state_69701;
var statearr_69727_71509 = state_69701__$1;
(statearr_69727_71509[(2)] = inst_69691);

(statearr_69727_71509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__68975__auto__ = null;
var cljs$core$async$reduce_$_state_machine__68975__auto____0 = (function (){
var statearr_69728 = [null,null,null,null,null,null,null,null,null,null];
(statearr_69728[(0)] = cljs$core$async$reduce_$_state_machine__68975__auto__);

(statearr_69728[(1)] = (1));

return statearr_69728;
});
var cljs$core$async$reduce_$_state_machine__68975__auto____1 = (function (state_69701){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_69701);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e69729){var ex__68978__auto__ = e69729;
var statearr_69730_71510 = state_69701;
(statearr_69730_71510[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_69701[(4)]))){
var statearr_69733_71511 = state_69701;
(statearr_69733_71511[(1)] = cljs.core.first((state_69701[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71512 = state_69701;
state_69701 = G__71512;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__68975__auto__ = function(state_69701){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__68975__auto____1.call(this,state_69701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__68975__auto____0;
cljs$core$async$reduce_$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__68975__auto____1;
return cljs$core$async$reduce_$_state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_69735 = f__69096__auto__();
(statearr_69735[(6)] = c__69095__auto__);

return statearr_69735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));

return c__69095__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__69095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_69741){
var state_val_69744 = (state_69741[(1)]);
if((state_val_69744 === (1))){
var inst_69736 = cljs.core.async.reduce(f__$1,init,ch);
var state_69741__$1 = state_69741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69741__$1,(2),inst_69736);
} else {
if((state_val_69744 === (2))){
var inst_69738 = (state_69741[(2)]);
var inst_69739 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_69738) : f__$1.call(null,inst_69738));
var state_69741__$1 = state_69741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69741__$1,inst_69739);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__68975__auto__ = null;
var cljs$core$async$transduce_$_state_machine__68975__auto____0 = (function (){
var statearr_69749 = [null,null,null,null,null,null,null];
(statearr_69749[(0)] = cljs$core$async$transduce_$_state_machine__68975__auto__);

(statearr_69749[(1)] = (1));

return statearr_69749;
});
var cljs$core$async$transduce_$_state_machine__68975__auto____1 = (function (state_69741){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_69741);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e69750){var ex__68978__auto__ = e69750;
var statearr_69751_71520 = state_69741;
(statearr_69751_71520[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_69741[(4)]))){
var statearr_69752_71521 = state_69741;
(statearr_69752_71521[(1)] = cljs.core.first((state_69741[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71522 = state_69741;
state_69741 = G__71522;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__68975__auto__ = function(state_69741){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__68975__auto____1.call(this,state_69741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__68975__auto____0;
cljs$core$async$transduce_$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__68975__auto____1;
return cljs$core$async$transduce_$_state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_69753 = f__69096__auto__();
(statearr_69753[(6)] = c__69095__auto__);

return statearr_69753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));

return c__69095__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__69761 = arguments.length;
switch (G__69761) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__69095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_69790){
var state_val_69791 = (state_69790[(1)]);
if((state_val_69791 === (7))){
var inst_69770 = (state_69790[(2)]);
var state_69790__$1 = state_69790;
var statearr_69794_71530 = state_69790__$1;
(statearr_69794_71530[(2)] = inst_69770);

(statearr_69794_71530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69791 === (1))){
var inst_69764 = cljs.core.seq(coll);
var inst_69765 = inst_69764;
var state_69790__$1 = (function (){var statearr_69795 = state_69790;
(statearr_69795[(7)] = inst_69765);

return statearr_69795;
})();
var statearr_69796_71531 = state_69790__$1;
(statearr_69796_71531[(2)] = null);

(statearr_69796_71531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69791 === (4))){
var inst_69765 = (state_69790[(7)]);
var inst_69768 = cljs.core.first(inst_69765);
var state_69790__$1 = state_69790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69790__$1,(7),ch,inst_69768);
} else {
if((state_val_69791 === (13))){
var inst_69784 = (state_69790[(2)]);
var state_69790__$1 = state_69790;
var statearr_69799_71532 = state_69790__$1;
(statearr_69799_71532[(2)] = inst_69784);

(statearr_69799_71532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69791 === (6))){
var inst_69773 = (state_69790[(2)]);
var state_69790__$1 = state_69790;
if(cljs.core.truth_(inst_69773)){
var statearr_69800_71533 = state_69790__$1;
(statearr_69800_71533[(1)] = (8));

} else {
var statearr_69801_71534 = state_69790__$1;
(statearr_69801_71534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69791 === (3))){
var inst_69788 = (state_69790[(2)]);
var state_69790__$1 = state_69790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69790__$1,inst_69788);
} else {
if((state_val_69791 === (12))){
var state_69790__$1 = state_69790;
var statearr_69802_71535 = state_69790__$1;
(statearr_69802_71535[(2)] = null);

(statearr_69802_71535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69791 === (2))){
var inst_69765 = (state_69790[(7)]);
var state_69790__$1 = state_69790;
if(cljs.core.truth_(inst_69765)){
var statearr_69803_71536 = state_69790__$1;
(statearr_69803_71536[(1)] = (4));

} else {
var statearr_69804_71537 = state_69790__$1;
(statearr_69804_71537[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69791 === (11))){
var inst_69781 = cljs.core.async.close_BANG_(ch);
var state_69790__$1 = state_69790;
var statearr_69805_71538 = state_69790__$1;
(statearr_69805_71538[(2)] = inst_69781);

(statearr_69805_71538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69791 === (9))){
var state_69790__$1 = state_69790;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69806_71539 = state_69790__$1;
(statearr_69806_71539[(1)] = (11));

} else {
var statearr_69807_71540 = state_69790__$1;
(statearr_69807_71540[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69791 === (5))){
var inst_69765 = (state_69790[(7)]);
var state_69790__$1 = state_69790;
var statearr_69808_71541 = state_69790__$1;
(statearr_69808_71541[(2)] = inst_69765);

(statearr_69808_71541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69791 === (10))){
var inst_69786 = (state_69790[(2)]);
var state_69790__$1 = state_69790;
var statearr_69810_71542 = state_69790__$1;
(statearr_69810_71542[(2)] = inst_69786);

(statearr_69810_71542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69791 === (8))){
var inst_69765 = (state_69790[(7)]);
var inst_69776 = cljs.core.next(inst_69765);
var inst_69765__$1 = inst_69776;
var state_69790__$1 = (function (){var statearr_69811 = state_69790;
(statearr_69811[(7)] = inst_69765__$1);

return statearr_69811;
})();
var statearr_69812_71543 = state_69790__$1;
(statearr_69812_71543[(2)] = null);

(statearr_69812_71543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__68975__auto__ = null;
var cljs$core$async$state_machine__68975__auto____0 = (function (){
var statearr_69813 = [null,null,null,null,null,null,null,null];
(statearr_69813[(0)] = cljs$core$async$state_machine__68975__auto__);

(statearr_69813[(1)] = (1));

return statearr_69813;
});
var cljs$core$async$state_machine__68975__auto____1 = (function (state_69790){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_69790);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e69814){var ex__68978__auto__ = e69814;
var statearr_69815_71544 = state_69790;
(statearr_69815_71544[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_69790[(4)]))){
var statearr_69816_71545 = state_69790;
(statearr_69816_71545[(1)] = cljs.core.first((state_69790[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71546 = state_69790;
state_69790 = G__71546;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$state_machine__68975__auto__ = function(state_69790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68975__auto____1.call(this,state_69790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68975__auto____0;
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68975__auto____1;
return cljs$core$async$state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_69817 = f__69096__auto__();
(statearr_69817[(6)] = c__69095__auto__);

return statearr_69817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));

return c__69095__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__69822 = arguments.length;
switch (G__69822) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_71553 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_71553(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_71554 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_71554(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_71555 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_71555(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_71558 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_71558(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69844 = (function (ch,cs,meta69845){
this.ch = ch;
this.cs = cs;
this.meta69845 = meta69845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69846,meta69845__$1){
var self__ = this;
var _69846__$1 = this;
return (new cljs.core.async.t_cljs$core$async69844(self__.ch,self__.cs,meta69845__$1));
}));

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69846){
var self__ = this;
var _69846__$1 = this;
return self__.meta69845;
}));

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async69844.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async69844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta69845","meta69845",-558615412,null)], null);
}));

(cljs.core.async.t_cljs$core$async69844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69844");

(cljs.core.async.t_cljs$core$async69844.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69844.
 */
cljs.core.async.__GT_t_cljs$core$async69844 = (function cljs$core$async$mult_$___GT_t_cljs$core$async69844(ch__$1,cs__$1,meta69845){
return (new cljs.core.async.t_cljs$core$async69844(ch__$1,cs__$1,meta69845));
});

}

return (new cljs.core.async.t_cljs$core$async69844(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__69095__auto___71561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_69993){
var state_val_69994 = (state_69993[(1)]);
if((state_val_69994 === (7))){
var inst_69980 = (state_69993[(2)]);
var state_69993__$1 = state_69993;
var statearr_70007_71564 = state_69993__$1;
(statearr_70007_71564[(2)] = inst_69980);

(statearr_70007_71564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (20))){
var inst_69880 = (state_69993[(7)]);
var inst_69892 = cljs.core.first(inst_69880);
var inst_69893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69892,(0),null);
var inst_69894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69892,(1),null);
var state_69993__$1 = (function (){var statearr_70012 = state_69993;
(statearr_70012[(8)] = inst_69893);

return statearr_70012;
})();
if(cljs.core.truth_(inst_69894)){
var statearr_70013_71565 = state_69993__$1;
(statearr_70013_71565[(1)] = (22));

} else {
var statearr_70014_71566 = state_69993__$1;
(statearr_70014_71566[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (27))){
var inst_69922 = (state_69993[(9)]);
var inst_69849 = (state_69993[(10)]);
var inst_69924 = (state_69993[(11)]);
var inst_69929 = (state_69993[(12)]);
var inst_69929__$1 = cljs.core._nth(inst_69922,inst_69924);
var inst_69930 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_69929__$1,inst_69849,done);
var state_69993__$1 = (function (){var statearr_70015 = state_69993;
(statearr_70015[(12)] = inst_69929__$1);

return statearr_70015;
})();
if(cljs.core.truth_(inst_69930)){
var statearr_70016_71571 = state_69993__$1;
(statearr_70016_71571[(1)] = (30));

} else {
var statearr_70017_71573 = state_69993__$1;
(statearr_70017_71573[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (1))){
var state_69993__$1 = state_69993;
var statearr_70018_71575 = state_69993__$1;
(statearr_70018_71575[(2)] = null);

(statearr_70018_71575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (24))){
var inst_69880 = (state_69993[(7)]);
var inst_69899 = (state_69993[(2)]);
var inst_69900 = cljs.core.next(inst_69880);
var inst_69858 = inst_69900;
var inst_69859 = null;
var inst_69860 = (0);
var inst_69861 = (0);
var state_69993__$1 = (function (){var statearr_70019 = state_69993;
(statearr_70019[(13)] = inst_69860);

(statearr_70019[(14)] = inst_69858);

(statearr_70019[(15)] = inst_69859);

(statearr_70019[(16)] = inst_69899);

(statearr_70019[(17)] = inst_69861);

return statearr_70019;
})();
var statearr_70020_71576 = state_69993__$1;
(statearr_70020_71576[(2)] = null);

(statearr_70020_71576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (39))){
var state_69993__$1 = state_69993;
var statearr_70024_71578 = state_69993__$1;
(statearr_70024_71578[(2)] = null);

(statearr_70024_71578[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (4))){
var inst_69849 = (state_69993[(10)]);
var inst_69849__$1 = (state_69993[(2)]);
var inst_69850 = (inst_69849__$1 == null);
var state_69993__$1 = (function (){var statearr_70025 = state_69993;
(statearr_70025[(10)] = inst_69849__$1);

return statearr_70025;
})();
if(cljs.core.truth_(inst_69850)){
var statearr_70026_71582 = state_69993__$1;
(statearr_70026_71582[(1)] = (5));

} else {
var statearr_70027_71583 = state_69993__$1;
(statearr_70027_71583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (15))){
var inst_69860 = (state_69993[(13)]);
var inst_69858 = (state_69993[(14)]);
var inst_69859 = (state_69993[(15)]);
var inst_69861 = (state_69993[(17)]);
var inst_69876 = (state_69993[(2)]);
var inst_69877 = (inst_69861 + (1));
var tmp70021 = inst_69860;
var tmp70022 = inst_69858;
var tmp70023 = inst_69859;
var inst_69858__$1 = tmp70022;
var inst_69859__$1 = tmp70023;
var inst_69860__$1 = tmp70021;
var inst_69861__$1 = inst_69877;
var state_69993__$1 = (function (){var statearr_70028 = state_69993;
(statearr_70028[(13)] = inst_69860__$1);

(statearr_70028[(14)] = inst_69858__$1);

(statearr_70028[(15)] = inst_69859__$1);

(statearr_70028[(18)] = inst_69876);

(statearr_70028[(17)] = inst_69861__$1);

return statearr_70028;
})();
var statearr_70029_71587 = state_69993__$1;
(statearr_70029_71587[(2)] = null);

(statearr_70029_71587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (21))){
var inst_69903 = (state_69993[(2)]);
var state_69993__$1 = state_69993;
var statearr_70036_71588 = state_69993__$1;
(statearr_70036_71588[(2)] = inst_69903);

(statearr_70036_71588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (31))){
var inst_69929 = (state_69993[(12)]);
var inst_69937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_69929);
var state_69993__$1 = state_69993;
var statearr_70037_71596 = state_69993__$1;
(statearr_70037_71596[(2)] = inst_69937);

(statearr_70037_71596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (32))){
var inst_69923 = (state_69993[(19)]);
var inst_69922 = (state_69993[(9)]);
var inst_69924 = (state_69993[(11)]);
var inst_69921 = (state_69993[(20)]);
var inst_69939 = (state_69993[(2)]);
var inst_69940 = (inst_69924 + (1));
var tmp70033 = inst_69923;
var tmp70034 = inst_69922;
var tmp70035 = inst_69921;
var inst_69921__$1 = tmp70035;
var inst_69922__$1 = tmp70034;
var inst_69923__$1 = tmp70033;
var inst_69924__$1 = inst_69940;
var state_69993__$1 = (function (){var statearr_70038 = state_69993;
(statearr_70038[(19)] = inst_69923__$1);

(statearr_70038[(9)] = inst_69922__$1);

(statearr_70038[(11)] = inst_69924__$1);

(statearr_70038[(20)] = inst_69921__$1);

(statearr_70038[(21)] = inst_69939);

return statearr_70038;
})();
var statearr_70039_71600 = state_69993__$1;
(statearr_70039_71600[(2)] = null);

(statearr_70039_71600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (40))){
var inst_69953 = (state_69993[(22)]);
var inst_69957 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_69953);
var state_69993__$1 = state_69993;
var statearr_70040_71603 = state_69993__$1;
(statearr_70040_71603[(2)] = inst_69957);

(statearr_70040_71603[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (33))){
var inst_69944 = (state_69993[(23)]);
var inst_69946 = cljs.core.chunked_seq_QMARK_(inst_69944);
var state_69993__$1 = state_69993;
if(inst_69946){
var statearr_70041_71606 = state_69993__$1;
(statearr_70041_71606[(1)] = (36));

} else {
var statearr_70042_71607 = state_69993__$1;
(statearr_70042_71607[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (13))){
var inst_69870 = (state_69993[(24)]);
var inst_69873 = cljs.core.async.close_BANG_(inst_69870);
var state_69993__$1 = state_69993;
var statearr_70044_71610 = state_69993__$1;
(statearr_70044_71610[(2)] = inst_69873);

(statearr_70044_71610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (22))){
var inst_69893 = (state_69993[(8)]);
var inst_69896 = cljs.core.async.close_BANG_(inst_69893);
var state_69993__$1 = state_69993;
var statearr_70045_71612 = state_69993__$1;
(statearr_70045_71612[(2)] = inst_69896);

(statearr_70045_71612[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (36))){
var inst_69944 = (state_69993[(23)]);
var inst_69948 = cljs.core.chunk_first(inst_69944);
var inst_69949 = cljs.core.chunk_rest(inst_69944);
var inst_69950 = cljs.core.count(inst_69948);
var inst_69921 = inst_69949;
var inst_69922 = inst_69948;
var inst_69923 = inst_69950;
var inst_69924 = (0);
var state_69993__$1 = (function (){var statearr_70046 = state_69993;
(statearr_70046[(19)] = inst_69923);

(statearr_70046[(9)] = inst_69922);

(statearr_70046[(11)] = inst_69924);

(statearr_70046[(20)] = inst_69921);

return statearr_70046;
})();
var statearr_70047_71616 = state_69993__$1;
(statearr_70047_71616[(2)] = null);

(statearr_70047_71616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (41))){
var inst_69944 = (state_69993[(23)]);
var inst_69959 = (state_69993[(2)]);
var inst_69960 = cljs.core.next(inst_69944);
var inst_69921 = inst_69960;
var inst_69922 = null;
var inst_69923 = (0);
var inst_69924 = (0);
var state_69993__$1 = (function (){var statearr_70048 = state_69993;
(statearr_70048[(19)] = inst_69923);

(statearr_70048[(9)] = inst_69922);

(statearr_70048[(11)] = inst_69924);

(statearr_70048[(20)] = inst_69921);

(statearr_70048[(25)] = inst_69959);

return statearr_70048;
})();
var statearr_70049_71618 = state_69993__$1;
(statearr_70049_71618[(2)] = null);

(statearr_70049_71618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (43))){
var state_69993__$1 = state_69993;
var statearr_70050_71621 = state_69993__$1;
(statearr_70050_71621[(2)] = null);

(statearr_70050_71621[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (29))){
var inst_69968 = (state_69993[(2)]);
var state_69993__$1 = state_69993;
var statearr_70051_71627 = state_69993__$1;
(statearr_70051_71627[(2)] = inst_69968);

(statearr_70051_71627[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (44))){
var inst_69977 = (state_69993[(2)]);
var state_69993__$1 = (function (){var statearr_70052 = state_69993;
(statearr_70052[(26)] = inst_69977);

return statearr_70052;
})();
var statearr_70053_71631 = state_69993__$1;
(statearr_70053_71631[(2)] = null);

(statearr_70053_71631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (6))){
var inst_69913 = (state_69993[(27)]);
var inst_69912 = cljs.core.deref(cs);
var inst_69913__$1 = cljs.core.keys(inst_69912);
var inst_69914 = cljs.core.count(inst_69913__$1);
var inst_69915 = cljs.core.reset_BANG_(dctr,inst_69914);
var inst_69920 = cljs.core.seq(inst_69913__$1);
var inst_69921 = inst_69920;
var inst_69922 = null;
var inst_69923 = (0);
var inst_69924 = (0);
var state_69993__$1 = (function (){var statearr_70055 = state_69993;
(statearr_70055[(19)] = inst_69923);

(statearr_70055[(9)] = inst_69922);

(statearr_70055[(11)] = inst_69924);

(statearr_70055[(20)] = inst_69921);

(statearr_70055[(28)] = inst_69915);

(statearr_70055[(27)] = inst_69913__$1);

return statearr_70055;
})();
var statearr_70057_71638 = state_69993__$1;
(statearr_70057_71638[(2)] = null);

(statearr_70057_71638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (28))){
var inst_69921 = (state_69993[(20)]);
var inst_69944 = (state_69993[(23)]);
var inst_69944__$1 = cljs.core.seq(inst_69921);
var state_69993__$1 = (function (){var statearr_70060 = state_69993;
(statearr_70060[(23)] = inst_69944__$1);

return statearr_70060;
})();
if(inst_69944__$1){
var statearr_70061_71644 = state_69993__$1;
(statearr_70061_71644[(1)] = (33));

} else {
var statearr_70062_71645 = state_69993__$1;
(statearr_70062_71645[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (25))){
var inst_69923 = (state_69993[(19)]);
var inst_69924 = (state_69993[(11)]);
var inst_69926 = (inst_69924 < inst_69923);
var inst_69927 = inst_69926;
var state_69993__$1 = state_69993;
if(cljs.core.truth_(inst_69927)){
var statearr_70063_71647 = state_69993__$1;
(statearr_70063_71647[(1)] = (27));

} else {
var statearr_70064_71651 = state_69993__$1;
(statearr_70064_71651[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (34))){
var state_69993__$1 = state_69993;
var statearr_70066_71654 = state_69993__$1;
(statearr_70066_71654[(2)] = null);

(statearr_70066_71654[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (17))){
var state_69993__$1 = state_69993;
var statearr_70069_71658 = state_69993__$1;
(statearr_70069_71658[(2)] = null);

(statearr_70069_71658[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (3))){
var inst_69982 = (state_69993[(2)]);
var state_69993__$1 = state_69993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69993__$1,inst_69982);
} else {
if((state_val_69994 === (12))){
var inst_69908 = (state_69993[(2)]);
var state_69993__$1 = state_69993;
var statearr_70070_71662 = state_69993__$1;
(statearr_70070_71662[(2)] = inst_69908);

(statearr_70070_71662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (2))){
var state_69993__$1 = state_69993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69993__$1,(4),ch);
} else {
if((state_val_69994 === (23))){
var state_69993__$1 = state_69993;
var statearr_70072_71664 = state_69993__$1;
(statearr_70072_71664[(2)] = null);

(statearr_70072_71664[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (35))){
var inst_69966 = (state_69993[(2)]);
var state_69993__$1 = state_69993;
var statearr_70075_71667 = state_69993__$1;
(statearr_70075_71667[(2)] = inst_69966);

(statearr_70075_71667[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (19))){
var inst_69880 = (state_69993[(7)]);
var inst_69884 = cljs.core.chunk_first(inst_69880);
var inst_69885 = cljs.core.chunk_rest(inst_69880);
var inst_69886 = cljs.core.count(inst_69884);
var inst_69858 = inst_69885;
var inst_69859 = inst_69884;
var inst_69860 = inst_69886;
var inst_69861 = (0);
var state_69993__$1 = (function (){var statearr_70076 = state_69993;
(statearr_70076[(13)] = inst_69860);

(statearr_70076[(14)] = inst_69858);

(statearr_70076[(15)] = inst_69859);

(statearr_70076[(17)] = inst_69861);

return statearr_70076;
})();
var statearr_70077_71670 = state_69993__$1;
(statearr_70077_71670[(2)] = null);

(statearr_70077_71670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (11))){
var inst_69858 = (state_69993[(14)]);
var inst_69880 = (state_69993[(7)]);
var inst_69880__$1 = cljs.core.seq(inst_69858);
var state_69993__$1 = (function (){var statearr_70081 = state_69993;
(statearr_70081[(7)] = inst_69880__$1);

return statearr_70081;
})();
if(inst_69880__$1){
var statearr_70082_71676 = state_69993__$1;
(statearr_70082_71676[(1)] = (16));

} else {
var statearr_70083_71677 = state_69993__$1;
(statearr_70083_71677[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (9))){
var inst_69910 = (state_69993[(2)]);
var state_69993__$1 = state_69993;
var statearr_70084_71680 = state_69993__$1;
(statearr_70084_71680[(2)] = inst_69910);

(statearr_70084_71680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (5))){
var inst_69856 = cljs.core.deref(cs);
var inst_69857 = cljs.core.seq(inst_69856);
var inst_69858 = inst_69857;
var inst_69859 = null;
var inst_69860 = (0);
var inst_69861 = (0);
var state_69993__$1 = (function (){var statearr_70085 = state_69993;
(statearr_70085[(13)] = inst_69860);

(statearr_70085[(14)] = inst_69858);

(statearr_70085[(15)] = inst_69859);

(statearr_70085[(17)] = inst_69861);

return statearr_70085;
})();
var statearr_70087_71682 = state_69993__$1;
(statearr_70087_71682[(2)] = null);

(statearr_70087_71682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (14))){
var state_69993__$1 = state_69993;
var statearr_70088_71684 = state_69993__$1;
(statearr_70088_71684[(2)] = null);

(statearr_70088_71684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (45))){
var inst_69974 = (state_69993[(2)]);
var state_69993__$1 = state_69993;
var statearr_70089_71685 = state_69993__$1;
(statearr_70089_71685[(2)] = inst_69974);

(statearr_70089_71685[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (26))){
var inst_69913 = (state_69993[(27)]);
var inst_69970 = (state_69993[(2)]);
var inst_69971 = cljs.core.seq(inst_69913);
var state_69993__$1 = (function (){var statearr_70091 = state_69993;
(statearr_70091[(29)] = inst_69970);

return statearr_70091;
})();
if(inst_69971){
var statearr_70094_71689 = state_69993__$1;
(statearr_70094_71689[(1)] = (42));

} else {
var statearr_70095_71691 = state_69993__$1;
(statearr_70095_71691[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (16))){
var inst_69880 = (state_69993[(7)]);
var inst_69882 = cljs.core.chunked_seq_QMARK_(inst_69880);
var state_69993__$1 = state_69993;
if(inst_69882){
var statearr_70096_71692 = state_69993__$1;
(statearr_70096_71692[(1)] = (19));

} else {
var statearr_70097_71693 = state_69993__$1;
(statearr_70097_71693[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (38))){
var inst_69963 = (state_69993[(2)]);
var state_69993__$1 = state_69993;
var statearr_70101_71695 = state_69993__$1;
(statearr_70101_71695[(2)] = inst_69963);

(statearr_70101_71695[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (30))){
var state_69993__$1 = state_69993;
var statearr_70102_71698 = state_69993__$1;
(statearr_70102_71698[(2)] = null);

(statearr_70102_71698[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (10))){
var inst_69859 = (state_69993[(15)]);
var inst_69861 = (state_69993[(17)]);
var inst_69869 = cljs.core._nth(inst_69859,inst_69861);
var inst_69870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69869,(0),null);
var inst_69871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69869,(1),null);
var state_69993__$1 = (function (){var statearr_70103 = state_69993;
(statearr_70103[(24)] = inst_69870);

return statearr_70103;
})();
if(cljs.core.truth_(inst_69871)){
var statearr_70105_71702 = state_69993__$1;
(statearr_70105_71702[(1)] = (13));

} else {
var statearr_70108_71707 = state_69993__$1;
(statearr_70108_71707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (18))){
var inst_69906 = (state_69993[(2)]);
var state_69993__$1 = state_69993;
var statearr_70109_71709 = state_69993__$1;
(statearr_70109_71709[(2)] = inst_69906);

(statearr_70109_71709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (42))){
var state_69993__$1 = state_69993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69993__$1,(45),dchan);
} else {
if((state_val_69994 === (37))){
var inst_69849 = (state_69993[(10)]);
var inst_69953 = (state_69993[(22)]);
var inst_69944 = (state_69993[(23)]);
var inst_69953__$1 = cljs.core.first(inst_69944);
var inst_69954 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_69953__$1,inst_69849,done);
var state_69993__$1 = (function (){var statearr_70110 = state_69993;
(statearr_70110[(22)] = inst_69953__$1);

return statearr_70110;
})();
if(cljs.core.truth_(inst_69954)){
var statearr_70111_71714 = state_69993__$1;
(statearr_70111_71714[(1)] = (39));

} else {
var statearr_70112_71715 = state_69993__$1;
(statearr_70112_71715[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69994 === (8))){
var inst_69860 = (state_69993[(13)]);
var inst_69861 = (state_69993[(17)]);
var inst_69863 = (inst_69861 < inst_69860);
var inst_69864 = inst_69863;
var state_69993__$1 = state_69993;
if(cljs.core.truth_(inst_69864)){
var statearr_70115_71718 = state_69993__$1;
(statearr_70115_71718[(1)] = (10));

} else {
var statearr_70116_71719 = state_69993__$1;
(statearr_70116_71719[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__68975__auto__ = null;
var cljs$core$async$mult_$_state_machine__68975__auto____0 = (function (){
var statearr_70119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70119[(0)] = cljs$core$async$mult_$_state_machine__68975__auto__);

(statearr_70119[(1)] = (1));

return statearr_70119;
});
var cljs$core$async$mult_$_state_machine__68975__auto____1 = (function (state_69993){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_69993);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e70121){var ex__68978__auto__ = e70121;
var statearr_70122_71727 = state_69993;
(statearr_70122_71727[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_69993[(4)]))){
var statearr_70123_71728 = state_69993;
(statearr_70123_71728[(1)] = cljs.core.first((state_69993[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71729 = state_69993;
state_69993 = G__71729;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__68975__auto__ = function(state_69993){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__68975__auto____1.call(this,state_69993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__68975__auto____0;
cljs$core$async$mult_$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__68975__auto____1;
return cljs$core$async$mult_$_state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_70127 = f__69096__auto__();
(statearr_70127[(6)] = c__69095__auto___71561);

return statearr_70127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__70132 = arguments.length;
switch (G__70132) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_71736 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_71736(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_71737 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_71737(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_71738 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_71738(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_71741 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_71741(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_71744 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_71744(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71748 = arguments.length;
var i__4737__auto___71749 = (0);
while(true){
if((i__4737__auto___71749 < len__4736__auto___71748)){
args__4742__auto__.push((arguments[i__4737__auto___71749]));

var G__71750 = (i__4737__auto___71749 + (1));
i__4737__auto___71749 = G__71750;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__70160){
var map__70161 = p__70160;
var map__70161__$1 = (((((!((map__70161 == null))))?(((((map__70161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70161):map__70161);
var opts = map__70161__$1;
var statearr_70163_71751 = state;
(statearr_70163_71751[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_70164_71752 = state;
(statearr_70164_71752[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_70165_71753 = state;
(statearr_70165_71753[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq70155){
var G__70157 = cljs.core.first(seq70155);
var seq70155__$1 = cljs.core.next(seq70155);
var G__70158 = cljs.core.first(seq70155__$1);
var seq70155__$2 = cljs.core.next(seq70155__$1);
var G__70159 = cljs.core.first(seq70155__$2);
var seq70155__$3 = cljs.core.next(seq70155__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70157,G__70158,G__70159,seq70155__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70169 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta70170){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta70170 = meta70170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70171,meta70170__$1){
var self__ = this;
var _70171__$1 = this;
return (new cljs.core.async.t_cljs$core$async70169(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta70170__$1));
}));

(cljs.core.async.t_cljs$core$async70169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70171){
var self__ = this;
var _70171__$1 = this;
return self__.meta70170;
}));

(cljs.core.async.t_cljs$core$async70169.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async70169.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70169.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70169.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70169.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70169.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70169.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta70170","meta70170",-435696184,null)], null);
}));

(cljs.core.async.t_cljs$core$async70169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70169");

(cljs.core.async.t_cljs$core$async70169.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70169.
 */
cljs.core.async.__GT_t_cljs$core$async70169 = (function cljs$core$async$mix_$___GT_t_cljs$core$async70169(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70170){
return (new cljs.core.async.t_cljs$core$async70169(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70170));
});

}

return (new cljs.core.async.t_cljs$core$async70169(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69095__auto___71771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_70284){
var state_val_70285 = (state_70284[(1)]);
if((state_val_70285 === (7))){
var inst_70196 = (state_70284[(2)]);
var state_70284__$1 = state_70284;
var statearr_70290_71773 = state_70284__$1;
(statearr_70290_71773[(2)] = inst_70196);

(statearr_70290_71773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (20))){
var inst_70208 = (state_70284[(7)]);
var state_70284__$1 = state_70284;
var statearr_70293_71775 = state_70284__$1;
(statearr_70293_71775[(2)] = inst_70208);

(statearr_70293_71775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (27))){
var state_70284__$1 = state_70284;
var statearr_70296_71776 = state_70284__$1;
(statearr_70296_71776[(2)] = null);

(statearr_70296_71776[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (1))){
var inst_70182 = (state_70284[(8)]);
var inst_70182__$1 = calc_state();
var inst_70185 = (inst_70182__$1 == null);
var inst_70186 = cljs.core.not(inst_70185);
var state_70284__$1 = (function (){var statearr_70297 = state_70284;
(statearr_70297[(8)] = inst_70182__$1);

return statearr_70297;
})();
if(inst_70186){
var statearr_70298_71777 = state_70284__$1;
(statearr_70298_71777[(1)] = (2));

} else {
var statearr_70299_71778 = state_70284__$1;
(statearr_70299_71778[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (24))){
var inst_70232 = (state_70284[(9)]);
var inst_70241 = (state_70284[(10)]);
var inst_70255 = (state_70284[(11)]);
var inst_70255__$1 = (inst_70232.cljs$core$IFn$_invoke$arity$1 ? inst_70232.cljs$core$IFn$_invoke$arity$1(inst_70241) : inst_70232.call(null,inst_70241));
var state_70284__$1 = (function (){var statearr_70300 = state_70284;
(statearr_70300[(11)] = inst_70255__$1);

return statearr_70300;
})();
if(cljs.core.truth_(inst_70255__$1)){
var statearr_70301_71783 = state_70284__$1;
(statearr_70301_71783[(1)] = (29));

} else {
var statearr_70303_71784 = state_70284__$1;
(statearr_70303_71784[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (4))){
var inst_70199 = (state_70284[(2)]);
var state_70284__$1 = state_70284;
if(cljs.core.truth_(inst_70199)){
var statearr_70306_71785 = state_70284__$1;
(statearr_70306_71785[(1)] = (8));

} else {
var statearr_70307_71786 = state_70284__$1;
(statearr_70307_71786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (15))){
var inst_70226 = (state_70284[(2)]);
var state_70284__$1 = state_70284;
if(cljs.core.truth_(inst_70226)){
var statearr_70308_71787 = state_70284__$1;
(statearr_70308_71787[(1)] = (19));

} else {
var statearr_70309_71788 = state_70284__$1;
(statearr_70309_71788[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (21))){
var inst_70231 = (state_70284[(12)]);
var inst_70231__$1 = (state_70284[(2)]);
var inst_70232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70231__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70231__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70231__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_70284__$1 = (function (){var statearr_70312 = state_70284;
(statearr_70312[(9)] = inst_70232);

(statearr_70312[(13)] = inst_70233);

(statearr_70312[(12)] = inst_70231__$1);

return statearr_70312;
})();
return cljs.core.async.ioc_alts_BANG_(state_70284__$1,(22),inst_70234);
} else {
if((state_val_70285 === (31))){
var inst_70266 = (state_70284[(2)]);
var state_70284__$1 = state_70284;
if(cljs.core.truth_(inst_70266)){
var statearr_70316_71789 = state_70284__$1;
(statearr_70316_71789[(1)] = (32));

} else {
var statearr_70317_71794 = state_70284__$1;
(statearr_70317_71794[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (32))){
var inst_70240 = (state_70284[(14)]);
var state_70284__$1 = state_70284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70284__$1,(35),out,inst_70240);
} else {
if((state_val_70285 === (33))){
var inst_70231 = (state_70284[(12)]);
var inst_70208 = inst_70231;
var state_70284__$1 = (function (){var statearr_70319 = state_70284;
(statearr_70319[(7)] = inst_70208);

return statearr_70319;
})();
var statearr_70320_71798 = state_70284__$1;
(statearr_70320_71798[(2)] = null);

(statearr_70320_71798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (13))){
var inst_70208 = (state_70284[(7)]);
var inst_70215 = inst_70208.cljs$lang$protocol_mask$partition0$;
var inst_70216 = (inst_70215 & (64));
var inst_70217 = inst_70208.cljs$core$ISeq$;
var inst_70218 = (cljs.core.PROTOCOL_SENTINEL === inst_70217);
var inst_70219 = ((inst_70216) || (inst_70218));
var state_70284__$1 = state_70284;
if(cljs.core.truth_(inst_70219)){
var statearr_70321_71802 = state_70284__$1;
(statearr_70321_71802[(1)] = (16));

} else {
var statearr_70322_71803 = state_70284__$1;
(statearr_70322_71803[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (22))){
var inst_70241 = (state_70284[(10)]);
var inst_70240 = (state_70284[(14)]);
var inst_70239 = (state_70284[(2)]);
var inst_70240__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70239,(0),null);
var inst_70241__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70239,(1),null);
var inst_70242 = (inst_70240__$1 == null);
var inst_70243 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70241__$1,change);
var inst_70244 = ((inst_70242) || (inst_70243));
var state_70284__$1 = (function (){var statearr_70328 = state_70284;
(statearr_70328[(10)] = inst_70241__$1);

(statearr_70328[(14)] = inst_70240__$1);

return statearr_70328;
})();
if(cljs.core.truth_(inst_70244)){
var statearr_70329_71807 = state_70284__$1;
(statearr_70329_71807[(1)] = (23));

} else {
var statearr_70330_71811 = state_70284__$1;
(statearr_70330_71811[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (36))){
var inst_70231 = (state_70284[(12)]);
var inst_70208 = inst_70231;
var state_70284__$1 = (function (){var statearr_70332 = state_70284;
(statearr_70332[(7)] = inst_70208);

return statearr_70332;
})();
var statearr_70333_71812 = state_70284__$1;
(statearr_70333_71812[(2)] = null);

(statearr_70333_71812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (29))){
var inst_70255 = (state_70284[(11)]);
var state_70284__$1 = state_70284;
var statearr_70334_71816 = state_70284__$1;
(statearr_70334_71816[(2)] = inst_70255);

(statearr_70334_71816[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (6))){
var state_70284__$1 = state_70284;
var statearr_70335_71817 = state_70284__$1;
(statearr_70335_71817[(2)] = false);

(statearr_70335_71817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (28))){
var inst_70251 = (state_70284[(2)]);
var inst_70252 = calc_state();
var inst_70208 = inst_70252;
var state_70284__$1 = (function (){var statearr_70337 = state_70284;
(statearr_70337[(7)] = inst_70208);

(statearr_70337[(15)] = inst_70251);

return statearr_70337;
})();
var statearr_70341_71818 = state_70284__$1;
(statearr_70341_71818[(2)] = null);

(statearr_70341_71818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (25))){
var inst_70280 = (state_70284[(2)]);
var state_70284__$1 = state_70284;
var statearr_70342_71820 = state_70284__$1;
(statearr_70342_71820[(2)] = inst_70280);

(statearr_70342_71820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (34))){
var inst_70278 = (state_70284[(2)]);
var state_70284__$1 = state_70284;
var statearr_70343_71821 = state_70284__$1;
(statearr_70343_71821[(2)] = inst_70278);

(statearr_70343_71821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (17))){
var state_70284__$1 = state_70284;
var statearr_70345_71822 = state_70284__$1;
(statearr_70345_71822[(2)] = false);

(statearr_70345_71822[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (3))){
var state_70284__$1 = state_70284;
var statearr_70348_71823 = state_70284__$1;
(statearr_70348_71823[(2)] = false);

(statearr_70348_71823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (12))){
var inst_70282 = (state_70284[(2)]);
var state_70284__$1 = state_70284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70284__$1,inst_70282);
} else {
if((state_val_70285 === (2))){
var inst_70182 = (state_70284[(8)]);
var inst_70188 = inst_70182.cljs$lang$protocol_mask$partition0$;
var inst_70189 = (inst_70188 & (64));
var inst_70190 = inst_70182.cljs$core$ISeq$;
var inst_70191 = (cljs.core.PROTOCOL_SENTINEL === inst_70190);
var inst_70192 = ((inst_70189) || (inst_70191));
var state_70284__$1 = state_70284;
if(cljs.core.truth_(inst_70192)){
var statearr_70353_71825 = state_70284__$1;
(statearr_70353_71825[(1)] = (5));

} else {
var statearr_70354_71826 = state_70284__$1;
(statearr_70354_71826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (23))){
var inst_70240 = (state_70284[(14)]);
var inst_70246 = (inst_70240 == null);
var state_70284__$1 = state_70284;
if(cljs.core.truth_(inst_70246)){
var statearr_70355_71827 = state_70284__$1;
(statearr_70355_71827[(1)] = (26));

} else {
var statearr_70356_71828 = state_70284__$1;
(statearr_70356_71828[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (35))){
var inst_70269 = (state_70284[(2)]);
var state_70284__$1 = state_70284;
if(cljs.core.truth_(inst_70269)){
var statearr_70358_71829 = state_70284__$1;
(statearr_70358_71829[(1)] = (36));

} else {
var statearr_70361_71830 = state_70284__$1;
(statearr_70361_71830[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (19))){
var inst_70208 = (state_70284[(7)]);
var inst_70228 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_70208);
var state_70284__$1 = state_70284;
var statearr_70362_71831 = state_70284__$1;
(statearr_70362_71831[(2)] = inst_70228);

(statearr_70362_71831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (11))){
var inst_70208 = (state_70284[(7)]);
var inst_70212 = (inst_70208 == null);
var inst_70213 = cljs.core.not(inst_70212);
var state_70284__$1 = state_70284;
if(inst_70213){
var statearr_70363_71832 = state_70284__$1;
(statearr_70363_71832[(1)] = (13));

} else {
var statearr_70364_71833 = state_70284__$1;
(statearr_70364_71833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (9))){
var inst_70182 = (state_70284[(8)]);
var state_70284__$1 = state_70284;
var statearr_70365_71835 = state_70284__$1;
(statearr_70365_71835[(2)] = inst_70182);

(statearr_70365_71835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (5))){
var state_70284__$1 = state_70284;
var statearr_70366_71838 = state_70284__$1;
(statearr_70366_71838[(2)] = true);

(statearr_70366_71838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (14))){
var state_70284__$1 = state_70284;
var statearr_70367_71839 = state_70284__$1;
(statearr_70367_71839[(2)] = false);

(statearr_70367_71839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (26))){
var inst_70241 = (state_70284[(10)]);
var inst_70248 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_70241);
var state_70284__$1 = state_70284;
var statearr_70372_71840 = state_70284__$1;
(statearr_70372_71840[(2)] = inst_70248);

(statearr_70372_71840[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (16))){
var state_70284__$1 = state_70284;
var statearr_70373_71845 = state_70284__$1;
(statearr_70373_71845[(2)] = true);

(statearr_70373_71845[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (38))){
var inst_70274 = (state_70284[(2)]);
var state_70284__$1 = state_70284;
var statearr_70374_71847 = state_70284__$1;
(statearr_70374_71847[(2)] = inst_70274);

(statearr_70374_71847[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (30))){
var inst_70232 = (state_70284[(9)]);
var inst_70241 = (state_70284[(10)]);
var inst_70233 = (state_70284[(13)]);
var inst_70261 = cljs.core.empty_QMARK_(inst_70232);
var inst_70262 = (inst_70233.cljs$core$IFn$_invoke$arity$1 ? inst_70233.cljs$core$IFn$_invoke$arity$1(inst_70241) : inst_70233.call(null,inst_70241));
var inst_70263 = cljs.core.not(inst_70262);
var inst_70264 = ((inst_70261) && (inst_70263));
var state_70284__$1 = state_70284;
var statearr_70378_71851 = state_70284__$1;
(statearr_70378_71851[(2)] = inst_70264);

(statearr_70378_71851[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (10))){
var inst_70182 = (state_70284[(8)]);
var inst_70204 = (state_70284[(2)]);
var inst_70205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70204,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70204,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70204,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_70208 = inst_70182;
var state_70284__$1 = (function (){var statearr_70379 = state_70284;
(statearr_70379[(7)] = inst_70208);

(statearr_70379[(16)] = inst_70206);

(statearr_70379[(17)] = inst_70207);

(statearr_70379[(18)] = inst_70205);

return statearr_70379;
})();
var statearr_70380_71857 = state_70284__$1;
(statearr_70380_71857[(2)] = null);

(statearr_70380_71857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (18))){
var inst_70223 = (state_70284[(2)]);
var state_70284__$1 = state_70284;
var statearr_70381_71858 = state_70284__$1;
(statearr_70381_71858[(2)] = inst_70223);

(statearr_70381_71858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (37))){
var state_70284__$1 = state_70284;
var statearr_70382_71859 = state_70284__$1;
(statearr_70382_71859[(2)] = null);

(statearr_70382_71859[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70285 === (8))){
var inst_70182 = (state_70284[(8)]);
var inst_70201 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_70182);
var state_70284__$1 = state_70284;
var statearr_70384_71860 = state_70284__$1;
(statearr_70384_71860[(2)] = inst_70201);

(statearr_70384_71860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__68975__auto__ = null;
var cljs$core$async$mix_$_state_machine__68975__auto____0 = (function (){
var statearr_70387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70387[(0)] = cljs$core$async$mix_$_state_machine__68975__auto__);

(statearr_70387[(1)] = (1));

return statearr_70387;
});
var cljs$core$async$mix_$_state_machine__68975__auto____1 = (function (state_70284){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_70284);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e70388){var ex__68978__auto__ = e70388;
var statearr_70390_71861 = state_70284;
(statearr_70390_71861[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_70284[(4)]))){
var statearr_70393_71862 = state_70284;
(statearr_70393_71862[(1)] = cljs.core.first((state_70284[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71863 = state_70284;
state_70284 = G__71863;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__68975__auto__ = function(state_70284){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__68975__auto____1.call(this,state_70284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__68975__auto____0;
cljs$core$async$mix_$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__68975__auto____1;
return cljs$core$async$mix_$_state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_70394 = f__69096__auto__();
(statearr_70394[(6)] = c__69095__auto___71771);

return statearr_70394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_71864 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_71864(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_71865 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_71865(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_71866 = (function() {
var G__71867 = null;
var G__71867__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__71867__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__71867 = function(p,v){
switch(arguments.length){
case 1:
return G__71867__1.call(this,p);
case 2:
return G__71867__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__71867.cljs$core$IFn$_invoke$arity$1 = G__71867__1;
G__71867.cljs$core$IFn$_invoke$arity$2 = G__71867__2;
return G__71867;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__70416 = arguments.length;
switch (G__70416) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_71866(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_71866(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__70429 = arguments.length;
switch (G__70429) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__70423_SHARP_){
if(cljs.core.truth_((p1__70423_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70423_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__70423_SHARP_.call(null,topic)))){
return p1__70423_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70423_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70439 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta70440){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta70440 = meta70440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70441,meta70440__$1){
var self__ = this;
var _70441__$1 = this;
return (new cljs.core.async.t_cljs$core$async70439(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta70440__$1));
}));

(cljs.core.async.t_cljs$core$async70439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70441){
var self__ = this;
var _70441__$1 = this;
return self__.meta70440;
}));

(cljs.core.async.t_cljs$core$async70439.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async70439.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70439.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async70439.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async70439.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async70439.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async70439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta70440","meta70440",-487108476,null)], null);
}));

(cljs.core.async.t_cljs$core$async70439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70439");

(cljs.core.async.t_cljs$core$async70439.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70439.
 */
cljs.core.async.__GT_t_cljs$core$async70439 = (function cljs$core$async$__GT_t_cljs$core$async70439(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70440){
return (new cljs.core.async.t_cljs$core$async70439(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70440));
});

}

return (new cljs.core.async.t_cljs$core$async70439(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69095__auto___71893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_70519){
var state_val_70520 = (state_70519[(1)]);
if((state_val_70520 === (7))){
var inst_70515 = (state_70519[(2)]);
var state_70519__$1 = state_70519;
var statearr_70521_71895 = state_70519__$1;
(statearr_70521_71895[(2)] = inst_70515);

(statearr_70521_71895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (20))){
var state_70519__$1 = state_70519;
var statearr_70526_71896 = state_70519__$1;
(statearr_70526_71896[(2)] = null);

(statearr_70526_71896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (1))){
var state_70519__$1 = state_70519;
var statearr_70531_71897 = state_70519__$1;
(statearr_70531_71897[(2)] = null);

(statearr_70531_71897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (24))){
var inst_70498 = (state_70519[(7)]);
var inst_70507 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_70498);
var state_70519__$1 = state_70519;
var statearr_70532_71898 = state_70519__$1;
(statearr_70532_71898[(2)] = inst_70507);

(statearr_70532_71898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (4))){
var inst_70450 = (state_70519[(8)]);
var inst_70450__$1 = (state_70519[(2)]);
var inst_70451 = (inst_70450__$1 == null);
var state_70519__$1 = (function (){var statearr_70537 = state_70519;
(statearr_70537[(8)] = inst_70450__$1);

return statearr_70537;
})();
if(cljs.core.truth_(inst_70451)){
var statearr_70538_71902 = state_70519__$1;
(statearr_70538_71902[(1)] = (5));

} else {
var statearr_70539_71909 = state_70519__$1;
(statearr_70539_71909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (15))){
var inst_70492 = (state_70519[(2)]);
var state_70519__$1 = state_70519;
var statearr_70540_71910 = state_70519__$1;
(statearr_70540_71910[(2)] = inst_70492);

(statearr_70540_71910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (21))){
var inst_70512 = (state_70519[(2)]);
var state_70519__$1 = (function (){var statearr_70541 = state_70519;
(statearr_70541[(9)] = inst_70512);

return statearr_70541;
})();
var statearr_70542_71917 = state_70519__$1;
(statearr_70542_71917[(2)] = null);

(statearr_70542_71917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (13))){
var inst_70474 = (state_70519[(10)]);
var inst_70476 = cljs.core.chunked_seq_QMARK_(inst_70474);
var state_70519__$1 = state_70519;
if(inst_70476){
var statearr_70543_71918 = state_70519__$1;
(statearr_70543_71918[(1)] = (16));

} else {
var statearr_70544_71919 = state_70519__$1;
(statearr_70544_71919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (22))){
var inst_70504 = (state_70519[(2)]);
var state_70519__$1 = state_70519;
if(cljs.core.truth_(inst_70504)){
var statearr_70545_71920 = state_70519__$1;
(statearr_70545_71920[(1)] = (23));

} else {
var statearr_70546_71921 = state_70519__$1;
(statearr_70546_71921[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (6))){
var inst_70500 = (state_70519[(11)]);
var inst_70498 = (state_70519[(7)]);
var inst_70450 = (state_70519[(8)]);
var inst_70498__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_70450) : topic_fn.call(null,inst_70450));
var inst_70499 = cljs.core.deref(mults);
var inst_70500__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70499,inst_70498__$1);
var state_70519__$1 = (function (){var statearr_70547 = state_70519;
(statearr_70547[(11)] = inst_70500__$1);

(statearr_70547[(7)] = inst_70498__$1);

return statearr_70547;
})();
if(cljs.core.truth_(inst_70500__$1)){
var statearr_70548_71922 = state_70519__$1;
(statearr_70548_71922[(1)] = (19));

} else {
var statearr_70549_71923 = state_70519__$1;
(statearr_70549_71923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (25))){
var inst_70509 = (state_70519[(2)]);
var state_70519__$1 = state_70519;
var statearr_70550_71924 = state_70519__$1;
(statearr_70550_71924[(2)] = inst_70509);

(statearr_70550_71924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (17))){
var inst_70474 = (state_70519[(10)]);
var inst_70483 = cljs.core.first(inst_70474);
var inst_70484 = cljs.core.async.muxch_STAR_(inst_70483);
var inst_70485 = cljs.core.async.close_BANG_(inst_70484);
var inst_70486 = cljs.core.next(inst_70474);
var inst_70460 = inst_70486;
var inst_70461 = null;
var inst_70462 = (0);
var inst_70463 = (0);
var state_70519__$1 = (function (){var statearr_70551 = state_70519;
(statearr_70551[(12)] = inst_70461);

(statearr_70551[(13)] = inst_70462);

(statearr_70551[(14)] = inst_70485);

(statearr_70551[(15)] = inst_70463);

(statearr_70551[(16)] = inst_70460);

return statearr_70551;
})();
var statearr_70552_71929 = state_70519__$1;
(statearr_70552_71929[(2)] = null);

(statearr_70552_71929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (3))){
var inst_70517 = (state_70519[(2)]);
var state_70519__$1 = state_70519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70519__$1,inst_70517);
} else {
if((state_val_70520 === (12))){
var inst_70494 = (state_70519[(2)]);
var state_70519__$1 = state_70519;
var statearr_70553_71936 = state_70519__$1;
(statearr_70553_71936[(2)] = inst_70494);

(statearr_70553_71936[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (2))){
var state_70519__$1 = state_70519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70519__$1,(4),ch);
} else {
if((state_val_70520 === (23))){
var state_70519__$1 = state_70519;
var statearr_70554_71937 = state_70519__$1;
(statearr_70554_71937[(2)] = null);

(statearr_70554_71937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (19))){
var inst_70500 = (state_70519[(11)]);
var inst_70450 = (state_70519[(8)]);
var inst_70502 = cljs.core.async.muxch_STAR_(inst_70500);
var state_70519__$1 = state_70519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70519__$1,(22),inst_70502,inst_70450);
} else {
if((state_val_70520 === (11))){
var inst_70474 = (state_70519[(10)]);
var inst_70460 = (state_70519[(16)]);
var inst_70474__$1 = cljs.core.seq(inst_70460);
var state_70519__$1 = (function (){var statearr_70555 = state_70519;
(statearr_70555[(10)] = inst_70474__$1);

return statearr_70555;
})();
if(inst_70474__$1){
var statearr_70556_71941 = state_70519__$1;
(statearr_70556_71941[(1)] = (13));

} else {
var statearr_70557_71942 = state_70519__$1;
(statearr_70557_71942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (9))){
var inst_70496 = (state_70519[(2)]);
var state_70519__$1 = state_70519;
var statearr_70558_71946 = state_70519__$1;
(statearr_70558_71946[(2)] = inst_70496);

(statearr_70558_71946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (5))){
var inst_70457 = cljs.core.deref(mults);
var inst_70458 = cljs.core.vals(inst_70457);
var inst_70459 = cljs.core.seq(inst_70458);
var inst_70460 = inst_70459;
var inst_70461 = null;
var inst_70462 = (0);
var inst_70463 = (0);
var state_70519__$1 = (function (){var statearr_70559 = state_70519;
(statearr_70559[(12)] = inst_70461);

(statearr_70559[(13)] = inst_70462);

(statearr_70559[(15)] = inst_70463);

(statearr_70559[(16)] = inst_70460);

return statearr_70559;
})();
var statearr_70560_71950 = state_70519__$1;
(statearr_70560_71950[(2)] = null);

(statearr_70560_71950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (14))){
var state_70519__$1 = state_70519;
var statearr_70564_71957 = state_70519__$1;
(statearr_70564_71957[(2)] = null);

(statearr_70564_71957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (16))){
var inst_70474 = (state_70519[(10)]);
var inst_70478 = cljs.core.chunk_first(inst_70474);
var inst_70479 = cljs.core.chunk_rest(inst_70474);
var inst_70480 = cljs.core.count(inst_70478);
var inst_70460 = inst_70479;
var inst_70461 = inst_70478;
var inst_70462 = inst_70480;
var inst_70463 = (0);
var state_70519__$1 = (function (){var statearr_70565 = state_70519;
(statearr_70565[(12)] = inst_70461);

(statearr_70565[(13)] = inst_70462);

(statearr_70565[(15)] = inst_70463);

(statearr_70565[(16)] = inst_70460);

return statearr_70565;
})();
var statearr_70566_71961 = state_70519__$1;
(statearr_70566_71961[(2)] = null);

(statearr_70566_71961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (10))){
var inst_70461 = (state_70519[(12)]);
var inst_70462 = (state_70519[(13)]);
var inst_70463 = (state_70519[(15)]);
var inst_70460 = (state_70519[(16)]);
var inst_70468 = cljs.core._nth(inst_70461,inst_70463);
var inst_70469 = cljs.core.async.muxch_STAR_(inst_70468);
var inst_70470 = cljs.core.async.close_BANG_(inst_70469);
var inst_70471 = (inst_70463 + (1));
var tmp70561 = inst_70461;
var tmp70562 = inst_70462;
var tmp70563 = inst_70460;
var inst_70460__$1 = tmp70563;
var inst_70461__$1 = tmp70561;
var inst_70462__$1 = tmp70562;
var inst_70463__$1 = inst_70471;
var state_70519__$1 = (function (){var statearr_70570 = state_70519;
(statearr_70570[(12)] = inst_70461__$1);

(statearr_70570[(13)] = inst_70462__$1);

(statearr_70570[(17)] = inst_70470);

(statearr_70570[(15)] = inst_70463__$1);

(statearr_70570[(16)] = inst_70460__$1);

return statearr_70570;
})();
var statearr_70571_71965 = state_70519__$1;
(statearr_70571_71965[(2)] = null);

(statearr_70571_71965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (18))){
var inst_70489 = (state_70519[(2)]);
var state_70519__$1 = state_70519;
var statearr_70572_71969 = state_70519__$1;
(statearr_70572_71969[(2)] = inst_70489);

(statearr_70572_71969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70520 === (8))){
var inst_70462 = (state_70519[(13)]);
var inst_70463 = (state_70519[(15)]);
var inst_70465 = (inst_70463 < inst_70462);
var inst_70466 = inst_70465;
var state_70519__$1 = state_70519;
if(cljs.core.truth_(inst_70466)){
var statearr_70573_71970 = state_70519__$1;
(statearr_70573_71970[(1)] = (10));

} else {
var statearr_70574_71971 = state_70519__$1;
(statearr_70574_71971[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__68975__auto__ = null;
var cljs$core$async$state_machine__68975__auto____0 = (function (){
var statearr_70575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70575[(0)] = cljs$core$async$state_machine__68975__auto__);

(statearr_70575[(1)] = (1));

return statearr_70575;
});
var cljs$core$async$state_machine__68975__auto____1 = (function (state_70519){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_70519);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e70576){var ex__68978__auto__ = e70576;
var statearr_70577_71982 = state_70519;
(statearr_70577_71982[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_70519[(4)]))){
var statearr_70578_71983 = state_70519;
(statearr_70578_71983[(1)] = cljs.core.first((state_70519[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71984 = state_70519;
state_70519 = G__71984;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$state_machine__68975__auto__ = function(state_70519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68975__auto____1.call(this,state_70519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68975__auto____0;
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68975__auto____1;
return cljs$core$async$state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_70579 = f__69096__auto__();
(statearr_70579[(6)] = c__69095__auto___71893);

return statearr_70579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__70586 = arguments.length;
switch (G__70586) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__70595 = arguments.length;
switch (G__70595) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__70603 = arguments.length;
switch (G__70603) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__69095__auto___71992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_70658){
var state_val_70659 = (state_70658[(1)]);
if((state_val_70659 === (7))){
var state_70658__$1 = state_70658;
var statearr_70661_71996 = state_70658__$1;
(statearr_70661_71996[(2)] = null);

(statearr_70661_71996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (1))){
var state_70658__$1 = state_70658;
var statearr_70662_71997 = state_70658__$1;
(statearr_70662_71997[(2)] = null);

(statearr_70662_71997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (4))){
var inst_70613 = (state_70658[(7)]);
var inst_70612 = (state_70658[(8)]);
var inst_70616 = (inst_70613 < inst_70612);
var state_70658__$1 = state_70658;
if(cljs.core.truth_(inst_70616)){
var statearr_70663_71998 = state_70658__$1;
(statearr_70663_71998[(1)] = (6));

} else {
var statearr_70664_71999 = state_70658__$1;
(statearr_70664_71999[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (15))){
var inst_70644 = (state_70658[(9)]);
var inst_70649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_70644);
var state_70658__$1 = state_70658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70658__$1,(17),out,inst_70649);
} else {
if((state_val_70659 === (13))){
var inst_70644 = (state_70658[(9)]);
var inst_70644__$1 = (state_70658[(2)]);
var inst_70645 = cljs.core.some(cljs.core.nil_QMARK_,inst_70644__$1);
var state_70658__$1 = (function (){var statearr_70665 = state_70658;
(statearr_70665[(9)] = inst_70644__$1);

return statearr_70665;
})();
if(cljs.core.truth_(inst_70645)){
var statearr_70666_72000 = state_70658__$1;
(statearr_70666_72000[(1)] = (14));

} else {
var statearr_70667_72001 = state_70658__$1;
(statearr_70667_72001[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (6))){
var state_70658__$1 = state_70658;
var statearr_70668_72003 = state_70658__$1;
(statearr_70668_72003[(2)] = null);

(statearr_70668_72003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (17))){
var inst_70651 = (state_70658[(2)]);
var state_70658__$1 = (function (){var statearr_70670 = state_70658;
(statearr_70670[(10)] = inst_70651);

return statearr_70670;
})();
var statearr_70671_72007 = state_70658__$1;
(statearr_70671_72007[(2)] = null);

(statearr_70671_72007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (3))){
var inst_70656 = (state_70658[(2)]);
var state_70658__$1 = state_70658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70658__$1,inst_70656);
} else {
if((state_val_70659 === (12))){
var _ = (function (){var statearr_70672 = state_70658;
(statearr_70672[(4)] = cljs.core.rest((state_70658[(4)])));

return statearr_70672;
})();
var state_70658__$1 = state_70658;
var ex70669 = (state_70658__$1[(2)]);
var statearr_70673_72008 = state_70658__$1;
(statearr_70673_72008[(5)] = ex70669);


if((ex70669 instanceof Object)){
var statearr_70674_72010 = state_70658__$1;
(statearr_70674_72010[(1)] = (11));

(statearr_70674_72010[(5)] = null);

} else {
throw ex70669;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (2))){
var inst_70611 = cljs.core.reset_BANG_(dctr,cnt);
var inst_70612 = cnt;
var inst_70613 = (0);
var state_70658__$1 = (function (){var statearr_70675 = state_70658;
(statearr_70675[(7)] = inst_70613);

(statearr_70675[(8)] = inst_70612);

(statearr_70675[(11)] = inst_70611);

return statearr_70675;
})();
var statearr_70676_72013 = state_70658__$1;
(statearr_70676_72013[(2)] = null);

(statearr_70676_72013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (11))){
var inst_70623 = (state_70658[(2)]);
var inst_70624 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_70658__$1 = (function (){var statearr_70677 = state_70658;
(statearr_70677[(12)] = inst_70623);

return statearr_70677;
})();
var statearr_70678_72015 = state_70658__$1;
(statearr_70678_72015[(2)] = inst_70624);

(statearr_70678_72015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (9))){
var inst_70613 = (state_70658[(7)]);
var _ = (function (){var statearr_70679 = state_70658;
(statearr_70679[(4)] = cljs.core.cons((12),(state_70658[(4)])));

return statearr_70679;
})();
var inst_70630 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_70613) : chs__$1.call(null,inst_70613));
var inst_70631 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_70613) : done.call(null,inst_70613));
var inst_70632 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_70630,inst_70631);
var ___$1 = (function (){var statearr_70680 = state_70658;
(statearr_70680[(4)] = cljs.core.rest((state_70658[(4)])));

return statearr_70680;
})();
var state_70658__$1 = state_70658;
var statearr_70681_72026 = state_70658__$1;
(statearr_70681_72026[(2)] = inst_70632);

(statearr_70681_72026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (5))){
var inst_70642 = (state_70658[(2)]);
var state_70658__$1 = (function (){var statearr_70682 = state_70658;
(statearr_70682[(13)] = inst_70642);

return statearr_70682;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70658__$1,(13),dchan);
} else {
if((state_val_70659 === (14))){
var inst_70647 = cljs.core.async.close_BANG_(out);
var state_70658__$1 = state_70658;
var statearr_70683_72028 = state_70658__$1;
(statearr_70683_72028[(2)] = inst_70647);

(statearr_70683_72028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (16))){
var inst_70654 = (state_70658[(2)]);
var state_70658__$1 = state_70658;
var statearr_70684_72029 = state_70658__$1;
(statearr_70684_72029[(2)] = inst_70654);

(statearr_70684_72029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (10))){
var inst_70613 = (state_70658[(7)]);
var inst_70635 = (state_70658[(2)]);
var inst_70636 = (inst_70613 + (1));
var inst_70613__$1 = inst_70636;
var state_70658__$1 = (function (){var statearr_70685 = state_70658;
(statearr_70685[(7)] = inst_70613__$1);

(statearr_70685[(14)] = inst_70635);

return statearr_70685;
})();
var statearr_70686_72034 = state_70658__$1;
(statearr_70686_72034[(2)] = null);

(statearr_70686_72034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70659 === (8))){
var inst_70640 = (state_70658[(2)]);
var state_70658__$1 = state_70658;
var statearr_70687_72035 = state_70658__$1;
(statearr_70687_72035[(2)] = inst_70640);

(statearr_70687_72035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__68975__auto__ = null;
var cljs$core$async$state_machine__68975__auto____0 = (function (){
var statearr_70688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70688[(0)] = cljs$core$async$state_machine__68975__auto__);

(statearr_70688[(1)] = (1));

return statearr_70688;
});
var cljs$core$async$state_machine__68975__auto____1 = (function (state_70658){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_70658);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e70689){var ex__68978__auto__ = e70689;
var statearr_70690_72037 = state_70658;
(statearr_70690_72037[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_70658[(4)]))){
var statearr_70691_72038 = state_70658;
(statearr_70691_72038[(1)] = cljs.core.first((state_70658[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72041 = state_70658;
state_70658 = G__72041;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$state_machine__68975__auto__ = function(state_70658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68975__auto____1.call(this,state_70658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68975__auto____0;
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68975__auto____1;
return cljs$core$async$state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_70692 = f__69096__auto__();
(statearr_70692[(6)] = c__69095__auto___71992);

return statearr_70692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__70695 = arguments.length;
switch (G__70695) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69095__auto___72043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_70727){
var state_val_70728 = (state_70727[(1)]);
if((state_val_70728 === (7))){
var inst_70707 = (state_70727[(7)]);
var inst_70706 = (state_70727[(8)]);
var inst_70706__$1 = (state_70727[(2)]);
var inst_70707__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70706__$1,(0),null);
var inst_70708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70706__$1,(1),null);
var inst_70709 = (inst_70707__$1 == null);
var state_70727__$1 = (function (){var statearr_70729 = state_70727;
(statearr_70729[(7)] = inst_70707__$1);

(statearr_70729[(9)] = inst_70708);

(statearr_70729[(8)] = inst_70706__$1);

return statearr_70729;
})();
if(cljs.core.truth_(inst_70709)){
var statearr_70730_72045 = state_70727__$1;
(statearr_70730_72045[(1)] = (8));

} else {
var statearr_70731_72046 = state_70727__$1;
(statearr_70731_72046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70728 === (1))){
var inst_70696 = cljs.core.vec(chs);
var inst_70697 = inst_70696;
var state_70727__$1 = (function (){var statearr_70732 = state_70727;
(statearr_70732[(10)] = inst_70697);

return statearr_70732;
})();
var statearr_70733_72047 = state_70727__$1;
(statearr_70733_72047[(2)] = null);

(statearr_70733_72047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70728 === (4))){
var inst_70697 = (state_70727[(10)]);
var state_70727__$1 = state_70727;
return cljs.core.async.ioc_alts_BANG_(state_70727__$1,(7),inst_70697);
} else {
if((state_val_70728 === (6))){
var inst_70723 = (state_70727[(2)]);
var state_70727__$1 = state_70727;
var statearr_70734_72048 = state_70727__$1;
(statearr_70734_72048[(2)] = inst_70723);

(statearr_70734_72048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70728 === (3))){
var inst_70725 = (state_70727[(2)]);
var state_70727__$1 = state_70727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70727__$1,inst_70725);
} else {
if((state_val_70728 === (2))){
var inst_70697 = (state_70727[(10)]);
var inst_70699 = cljs.core.count(inst_70697);
var inst_70700 = (inst_70699 > (0));
var state_70727__$1 = state_70727;
if(cljs.core.truth_(inst_70700)){
var statearr_70736_72051 = state_70727__$1;
(statearr_70736_72051[(1)] = (4));

} else {
var statearr_70737_72053 = state_70727__$1;
(statearr_70737_72053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70728 === (11))){
var inst_70697 = (state_70727[(10)]);
var inst_70716 = (state_70727[(2)]);
var tmp70735 = inst_70697;
var inst_70697__$1 = tmp70735;
var state_70727__$1 = (function (){var statearr_70738 = state_70727;
(statearr_70738[(10)] = inst_70697__$1);

(statearr_70738[(11)] = inst_70716);

return statearr_70738;
})();
var statearr_70739_72054 = state_70727__$1;
(statearr_70739_72054[(2)] = null);

(statearr_70739_72054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70728 === (9))){
var inst_70707 = (state_70727[(7)]);
var state_70727__$1 = state_70727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70727__$1,(11),out,inst_70707);
} else {
if((state_val_70728 === (5))){
var inst_70721 = cljs.core.async.close_BANG_(out);
var state_70727__$1 = state_70727;
var statearr_70740_72055 = state_70727__$1;
(statearr_70740_72055[(2)] = inst_70721);

(statearr_70740_72055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70728 === (10))){
var inst_70719 = (state_70727[(2)]);
var state_70727__$1 = state_70727;
var statearr_70741_72056 = state_70727__$1;
(statearr_70741_72056[(2)] = inst_70719);

(statearr_70741_72056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70728 === (8))){
var inst_70697 = (state_70727[(10)]);
var inst_70707 = (state_70727[(7)]);
var inst_70708 = (state_70727[(9)]);
var inst_70706 = (state_70727[(8)]);
var inst_70711 = (function (){var cs = inst_70697;
var vec__70702 = inst_70706;
var v = inst_70707;
var c = inst_70708;
return (function (p1__70693_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__70693_SHARP_);
});
})();
var inst_70712 = cljs.core.filterv(inst_70711,inst_70697);
var inst_70697__$1 = inst_70712;
var state_70727__$1 = (function (){var statearr_70742 = state_70727;
(statearr_70742[(10)] = inst_70697__$1);

return statearr_70742;
})();
var statearr_70743_72061 = state_70727__$1;
(statearr_70743_72061[(2)] = null);

(statearr_70743_72061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__68975__auto__ = null;
var cljs$core$async$state_machine__68975__auto____0 = (function (){
var statearr_70744 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70744[(0)] = cljs$core$async$state_machine__68975__auto__);

(statearr_70744[(1)] = (1));

return statearr_70744;
});
var cljs$core$async$state_machine__68975__auto____1 = (function (state_70727){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_70727);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e70745){var ex__68978__auto__ = e70745;
var statearr_70746_72066 = state_70727;
(statearr_70746_72066[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_70727[(4)]))){
var statearr_70747_72068 = state_70727;
(statearr_70747_72068[(1)] = cljs.core.first((state_70727[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72070 = state_70727;
state_70727 = G__72070;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$state_machine__68975__auto__ = function(state_70727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68975__auto____1.call(this,state_70727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68975__auto____0;
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68975__auto____1;
return cljs$core$async$state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_70748 = f__69096__auto__();
(statearr_70748[(6)] = c__69095__auto___72043);

return statearr_70748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__70750 = arguments.length;
switch (G__70750) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69095__auto___72074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_70777){
var state_val_70778 = (state_70777[(1)]);
if((state_val_70778 === (7))){
var inst_70759 = (state_70777[(7)]);
var inst_70759__$1 = (state_70777[(2)]);
var inst_70760 = (inst_70759__$1 == null);
var inst_70761 = cljs.core.not(inst_70760);
var state_70777__$1 = (function (){var statearr_70782 = state_70777;
(statearr_70782[(7)] = inst_70759__$1);

return statearr_70782;
})();
if(inst_70761){
var statearr_70783_72079 = state_70777__$1;
(statearr_70783_72079[(1)] = (8));

} else {
var statearr_70784_72080 = state_70777__$1;
(statearr_70784_72080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70778 === (1))){
var inst_70754 = (0);
var state_70777__$1 = (function (){var statearr_70785 = state_70777;
(statearr_70785[(8)] = inst_70754);

return statearr_70785;
})();
var statearr_70786_72082 = state_70777__$1;
(statearr_70786_72082[(2)] = null);

(statearr_70786_72082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70778 === (4))){
var state_70777__$1 = state_70777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70777__$1,(7),ch);
} else {
if((state_val_70778 === (6))){
var inst_70772 = (state_70777[(2)]);
var state_70777__$1 = state_70777;
var statearr_70788_72085 = state_70777__$1;
(statearr_70788_72085[(2)] = inst_70772);

(statearr_70788_72085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70778 === (3))){
var inst_70774 = (state_70777[(2)]);
var inst_70775 = cljs.core.async.close_BANG_(out);
var state_70777__$1 = (function (){var statearr_70790 = state_70777;
(statearr_70790[(9)] = inst_70774);

return statearr_70790;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_70777__$1,inst_70775);
} else {
if((state_val_70778 === (2))){
var inst_70754 = (state_70777[(8)]);
var inst_70756 = (inst_70754 < n);
var state_70777__$1 = state_70777;
if(cljs.core.truth_(inst_70756)){
var statearr_70791_72088 = state_70777__$1;
(statearr_70791_72088[(1)] = (4));

} else {
var statearr_70792_72089 = state_70777__$1;
(statearr_70792_72089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70778 === (11))){
var inst_70754 = (state_70777[(8)]);
var inst_70764 = (state_70777[(2)]);
var inst_70765 = (inst_70754 + (1));
var inst_70754__$1 = inst_70765;
var state_70777__$1 = (function (){var statearr_70795 = state_70777;
(statearr_70795[(10)] = inst_70764);

(statearr_70795[(8)] = inst_70754__$1);

return statearr_70795;
})();
var statearr_70796_72090 = state_70777__$1;
(statearr_70796_72090[(2)] = null);

(statearr_70796_72090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70778 === (9))){
var state_70777__$1 = state_70777;
var statearr_70797_72091 = state_70777__$1;
(statearr_70797_72091[(2)] = null);

(statearr_70797_72091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70778 === (5))){
var state_70777__$1 = state_70777;
var statearr_70798_72096 = state_70777__$1;
(statearr_70798_72096[(2)] = null);

(statearr_70798_72096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70778 === (10))){
var inst_70769 = (state_70777[(2)]);
var state_70777__$1 = state_70777;
var statearr_70799_72097 = state_70777__$1;
(statearr_70799_72097[(2)] = inst_70769);

(statearr_70799_72097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70778 === (8))){
var inst_70759 = (state_70777[(7)]);
var state_70777__$1 = state_70777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70777__$1,(11),out,inst_70759);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__68975__auto__ = null;
var cljs$core$async$state_machine__68975__auto____0 = (function (){
var statearr_70800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70800[(0)] = cljs$core$async$state_machine__68975__auto__);

(statearr_70800[(1)] = (1));

return statearr_70800;
});
var cljs$core$async$state_machine__68975__auto____1 = (function (state_70777){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_70777);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e70801){var ex__68978__auto__ = e70801;
var statearr_70802_72103 = state_70777;
(statearr_70802_72103[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_70777[(4)]))){
var statearr_70803_72104 = state_70777;
(statearr_70803_72104[(1)] = cljs.core.first((state_70777[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72110 = state_70777;
state_70777 = G__72110;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$state_machine__68975__auto__ = function(state_70777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68975__auto____1.call(this,state_70777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68975__auto____0;
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68975__auto____1;
return cljs$core$async$state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_70805 = f__69096__auto__();
(statearr_70805[(6)] = c__69095__auto___72074);

return statearr_70805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70808 = (function (f,ch,meta70809){
this.f = f;
this.ch = ch;
this.meta70809 = meta70809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70810,meta70809__$1){
var self__ = this;
var _70810__$1 = this;
return (new cljs.core.async.t_cljs$core$async70808(self__.f,self__.ch,meta70809__$1));
}));

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70810){
var self__ = this;
var _70810__$1 = this;
return self__.meta70809;
}));

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70811 = (function (f,ch,meta70809,_,fn1,meta70812){
this.f = f;
this.ch = ch;
this.meta70809 = meta70809;
this._ = _;
this.fn1 = fn1;
this.meta70812 = meta70812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70813,meta70812__$1){
var self__ = this;
var _70813__$1 = this;
return (new cljs.core.async.t_cljs$core$async70811(self__.f,self__.ch,self__.meta70809,self__._,self__.fn1,meta70812__$1));
}));

(cljs.core.async.t_cljs$core$async70811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70813){
var self__ = this;
var _70813__$1 = this;
return self__.meta70812;
}));

(cljs.core.async.t_cljs$core$async70811.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async70811.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async70811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__70807_SHARP_){
var G__70818 = (((p1__70807_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__70807_SHARP_) : self__.f.call(null,p1__70807_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__70818) : f1.call(null,G__70818));
});
}));

(cljs.core.async.t_cljs$core$async70811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70809","meta70809",-1816997109,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async70808","cljs.core.async/t_cljs$core$async70808",-1619564478,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta70812","meta70812",-1148941359,null)], null);
}));

(cljs.core.async.t_cljs$core$async70811.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70811");

(cljs.core.async.t_cljs$core$async70811.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70811");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70811.
 */
cljs.core.async.__GT_t_cljs$core$async70811 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70811(f__$1,ch__$1,meta70809__$1,___$2,fn1__$1,meta70812){
return (new cljs.core.async.t_cljs$core$async70811(f__$1,ch__$1,meta70809__$1,___$2,fn1__$1,meta70812));
});

}

return (new cljs.core.async.t_cljs$core$async70811(self__.f,self__.ch,self__.meta70809,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__70825 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__70825) : self__.f.call(null,G__70825));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async70808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70809","meta70809",-1816997109,null)], null);
}));

(cljs.core.async.t_cljs$core$async70808.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70808");

(cljs.core.async.t_cljs$core$async70808.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70808");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70808.
 */
cljs.core.async.__GT_t_cljs$core$async70808 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70808(f__$1,ch__$1,meta70809){
return (new cljs.core.async.t_cljs$core$async70808(f__$1,ch__$1,meta70809));
});

}

return (new cljs.core.async.t_cljs$core$async70808(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70831 = (function (f,ch,meta70832){
this.f = f;
this.ch = ch;
this.meta70832 = meta70832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70833,meta70832__$1){
var self__ = this;
var _70833__$1 = this;
return (new cljs.core.async.t_cljs$core$async70831(self__.f,self__.ch,meta70832__$1));
}));

(cljs.core.async.t_cljs$core$async70831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70833){
var self__ = this;
var _70833__$1 = this;
return self__.meta70832;
}));

(cljs.core.async.t_cljs$core$async70831.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70831.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async70831.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70831.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async70831.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70831.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async70831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70832","meta70832",1930455878,null)], null);
}));

(cljs.core.async.t_cljs$core$async70831.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70831");

(cljs.core.async.t_cljs$core$async70831.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70831");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70831.
 */
cljs.core.async.__GT_t_cljs$core$async70831 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async70831(f__$1,ch__$1,meta70832){
return (new cljs.core.async.t_cljs$core$async70831(f__$1,ch__$1,meta70832));
});

}

return (new cljs.core.async.t_cljs$core$async70831(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70843 = (function (p,ch,meta70844){
this.p = p;
this.ch = ch;
this.meta70844 = meta70844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70845,meta70844__$1){
var self__ = this;
var _70845__$1 = this;
return (new cljs.core.async.t_cljs$core$async70843(self__.p,self__.ch,meta70844__$1));
}));

(cljs.core.async.t_cljs$core$async70843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70845){
var self__ = this;
var _70845__$1 = this;
return self__.meta70844;
}));

(cljs.core.async.t_cljs$core$async70843.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async70843.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async70843.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async70843.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async70843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70844","meta70844",-2084411034,null)], null);
}));

(cljs.core.async.t_cljs$core$async70843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70843");

(cljs.core.async.t_cljs$core$async70843.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70843.
 */
cljs.core.async.__GT_t_cljs$core$async70843 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async70843(p__$1,ch__$1,meta70844){
return (new cljs.core.async.t_cljs$core$async70843(p__$1,ch__$1,meta70844));
});

}

return (new cljs.core.async.t_cljs$core$async70843(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__70858 = arguments.length;
switch (G__70858) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69095__auto___72169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_70882){
var state_val_70883 = (state_70882[(1)]);
if((state_val_70883 === (7))){
var inst_70878 = (state_70882[(2)]);
var state_70882__$1 = state_70882;
var statearr_70884_72170 = state_70882__$1;
(statearr_70884_72170[(2)] = inst_70878);

(statearr_70884_72170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70883 === (1))){
var state_70882__$1 = state_70882;
var statearr_70885_72171 = state_70882__$1;
(statearr_70885_72171[(2)] = null);

(statearr_70885_72171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70883 === (4))){
var inst_70864 = (state_70882[(7)]);
var inst_70864__$1 = (state_70882[(2)]);
var inst_70865 = (inst_70864__$1 == null);
var state_70882__$1 = (function (){var statearr_70887 = state_70882;
(statearr_70887[(7)] = inst_70864__$1);

return statearr_70887;
})();
if(cljs.core.truth_(inst_70865)){
var statearr_70889_72192 = state_70882__$1;
(statearr_70889_72192[(1)] = (5));

} else {
var statearr_70890_72193 = state_70882__$1;
(statearr_70890_72193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70883 === (6))){
var inst_70864 = (state_70882[(7)]);
var inst_70869 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_70864) : p.call(null,inst_70864));
var state_70882__$1 = state_70882;
if(cljs.core.truth_(inst_70869)){
var statearr_70891_72201 = state_70882__$1;
(statearr_70891_72201[(1)] = (8));

} else {
var statearr_70892_72211 = state_70882__$1;
(statearr_70892_72211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70883 === (3))){
var inst_70880 = (state_70882[(2)]);
var state_70882__$1 = state_70882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70882__$1,inst_70880);
} else {
if((state_val_70883 === (2))){
var state_70882__$1 = state_70882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70882__$1,(4),ch);
} else {
if((state_val_70883 === (11))){
var inst_70872 = (state_70882[(2)]);
var state_70882__$1 = state_70882;
var statearr_70893_72229 = state_70882__$1;
(statearr_70893_72229[(2)] = inst_70872);

(statearr_70893_72229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70883 === (9))){
var state_70882__$1 = state_70882;
var statearr_70894_72233 = state_70882__$1;
(statearr_70894_72233[(2)] = null);

(statearr_70894_72233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70883 === (5))){
var inst_70867 = cljs.core.async.close_BANG_(out);
var state_70882__$1 = state_70882;
var statearr_70896_72239 = state_70882__$1;
(statearr_70896_72239[(2)] = inst_70867);

(statearr_70896_72239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70883 === (10))){
var inst_70875 = (state_70882[(2)]);
var state_70882__$1 = (function (){var statearr_70897 = state_70882;
(statearr_70897[(8)] = inst_70875);

return statearr_70897;
})();
var statearr_70898_72249 = state_70882__$1;
(statearr_70898_72249[(2)] = null);

(statearr_70898_72249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70883 === (8))){
var inst_70864 = (state_70882[(7)]);
var state_70882__$1 = state_70882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70882__$1,(11),out,inst_70864);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__68975__auto__ = null;
var cljs$core$async$state_machine__68975__auto____0 = (function (){
var statearr_70903 = [null,null,null,null,null,null,null,null,null];
(statearr_70903[(0)] = cljs$core$async$state_machine__68975__auto__);

(statearr_70903[(1)] = (1));

return statearr_70903;
});
var cljs$core$async$state_machine__68975__auto____1 = (function (state_70882){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_70882);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e70904){var ex__68978__auto__ = e70904;
var statearr_70905_72271 = state_70882;
(statearr_70905_72271[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_70882[(4)]))){
var statearr_70906_72272 = state_70882;
(statearr_70906_72272[(1)] = cljs.core.first((state_70882[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72273 = state_70882;
state_70882 = G__72273;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$state_machine__68975__auto__ = function(state_70882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68975__auto____1.call(this,state_70882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68975__auto____0;
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68975__auto____1;
return cljs$core$async$state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_70907 = f__69096__auto__();
(statearr_70907[(6)] = c__69095__auto___72169);

return statearr_70907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__70909 = arguments.length;
switch (G__70909) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__69095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_70976){
var state_val_70977 = (state_70976[(1)]);
if((state_val_70977 === (7))){
var inst_70972 = (state_70976[(2)]);
var state_70976__$1 = state_70976;
var statearr_70981_72292 = state_70976__$1;
(statearr_70981_72292[(2)] = inst_70972);

(statearr_70981_72292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (20))){
var inst_70940 = (state_70976[(7)]);
var inst_70952 = (state_70976[(2)]);
var inst_70954 = cljs.core.next(inst_70940);
var inst_70923 = inst_70954;
var inst_70924 = null;
var inst_70925 = (0);
var inst_70926 = (0);
var state_70976__$1 = (function (){var statearr_70982 = state_70976;
(statearr_70982[(8)] = inst_70925);

(statearr_70982[(9)] = inst_70924);

(statearr_70982[(10)] = inst_70926);

(statearr_70982[(11)] = inst_70923);

(statearr_70982[(12)] = inst_70952);

return statearr_70982;
})();
var statearr_70983_72298 = state_70976__$1;
(statearr_70983_72298[(2)] = null);

(statearr_70983_72298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (1))){
var state_70976__$1 = state_70976;
var statearr_70984_72301 = state_70976__$1;
(statearr_70984_72301[(2)] = null);

(statearr_70984_72301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (4))){
var inst_70912 = (state_70976[(13)]);
var inst_70912__$1 = (state_70976[(2)]);
var inst_70913 = (inst_70912__$1 == null);
var state_70976__$1 = (function (){var statearr_70985 = state_70976;
(statearr_70985[(13)] = inst_70912__$1);

return statearr_70985;
})();
if(cljs.core.truth_(inst_70913)){
var statearr_70989_72302 = state_70976__$1;
(statearr_70989_72302[(1)] = (5));

} else {
var statearr_70990_72303 = state_70976__$1;
(statearr_70990_72303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (15))){
var state_70976__$1 = state_70976;
var statearr_70994_72304 = state_70976__$1;
(statearr_70994_72304[(2)] = null);

(statearr_70994_72304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (21))){
var state_70976__$1 = state_70976;
var statearr_70995_72305 = state_70976__$1;
(statearr_70995_72305[(2)] = null);

(statearr_70995_72305[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (13))){
var inst_70925 = (state_70976[(8)]);
var inst_70924 = (state_70976[(9)]);
var inst_70926 = (state_70976[(10)]);
var inst_70923 = (state_70976[(11)]);
var inst_70934 = (state_70976[(2)]);
var inst_70936 = (inst_70926 + (1));
var tmp70991 = inst_70925;
var tmp70992 = inst_70924;
var tmp70993 = inst_70923;
var inst_70923__$1 = tmp70993;
var inst_70924__$1 = tmp70992;
var inst_70925__$1 = tmp70991;
var inst_70926__$1 = inst_70936;
var state_70976__$1 = (function (){var statearr_70996 = state_70976;
(statearr_70996[(8)] = inst_70925__$1);

(statearr_70996[(14)] = inst_70934);

(statearr_70996[(9)] = inst_70924__$1);

(statearr_70996[(10)] = inst_70926__$1);

(statearr_70996[(11)] = inst_70923__$1);

return statearr_70996;
})();
var statearr_70997_72341 = state_70976__$1;
(statearr_70997_72341[(2)] = null);

(statearr_70997_72341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (22))){
var state_70976__$1 = state_70976;
var statearr_70998_72345 = state_70976__$1;
(statearr_70998_72345[(2)] = null);

(statearr_70998_72345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (6))){
var inst_70912 = (state_70976[(13)]);
var inst_70921 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_70912) : f.call(null,inst_70912));
var inst_70922 = cljs.core.seq(inst_70921);
var inst_70923 = inst_70922;
var inst_70924 = null;
var inst_70925 = (0);
var inst_70926 = (0);
var state_70976__$1 = (function (){var statearr_70999 = state_70976;
(statearr_70999[(8)] = inst_70925);

(statearr_70999[(9)] = inst_70924);

(statearr_70999[(10)] = inst_70926);

(statearr_70999[(11)] = inst_70923);

return statearr_70999;
})();
var statearr_71000_72364 = state_70976__$1;
(statearr_71000_72364[(2)] = null);

(statearr_71000_72364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (17))){
var inst_70940 = (state_70976[(7)]);
var inst_70944 = cljs.core.chunk_first(inst_70940);
var inst_70946 = cljs.core.chunk_rest(inst_70940);
var inst_70947 = cljs.core.count(inst_70944);
var inst_70923 = inst_70946;
var inst_70924 = inst_70944;
var inst_70925 = inst_70947;
var inst_70926 = (0);
var state_70976__$1 = (function (){var statearr_71002 = state_70976;
(statearr_71002[(8)] = inst_70925);

(statearr_71002[(9)] = inst_70924);

(statearr_71002[(10)] = inst_70926);

(statearr_71002[(11)] = inst_70923);

return statearr_71002;
})();
var statearr_71003_72368 = state_70976__$1;
(statearr_71003_72368[(2)] = null);

(statearr_71003_72368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (3))){
var inst_70974 = (state_70976[(2)]);
var state_70976__$1 = state_70976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70976__$1,inst_70974);
} else {
if((state_val_70977 === (12))){
var inst_70962 = (state_70976[(2)]);
var state_70976__$1 = state_70976;
var statearr_71006_72370 = state_70976__$1;
(statearr_71006_72370[(2)] = inst_70962);

(statearr_71006_72370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (2))){
var state_70976__$1 = state_70976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70976__$1,(4),in$);
} else {
if((state_val_70977 === (23))){
var inst_70970 = (state_70976[(2)]);
var state_70976__$1 = state_70976;
var statearr_71008_72371 = state_70976__$1;
(statearr_71008_72371[(2)] = inst_70970);

(statearr_71008_72371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (19))){
var inst_70957 = (state_70976[(2)]);
var state_70976__$1 = state_70976;
var statearr_71011_72377 = state_70976__$1;
(statearr_71011_72377[(2)] = inst_70957);

(statearr_71011_72377[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (11))){
var inst_70940 = (state_70976[(7)]);
var inst_70923 = (state_70976[(11)]);
var inst_70940__$1 = cljs.core.seq(inst_70923);
var state_70976__$1 = (function (){var statearr_71012 = state_70976;
(statearr_71012[(7)] = inst_70940__$1);

return statearr_71012;
})();
if(inst_70940__$1){
var statearr_71013_72378 = state_70976__$1;
(statearr_71013_72378[(1)] = (14));

} else {
var statearr_71014_72379 = state_70976__$1;
(statearr_71014_72379[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (9))){
var inst_70964 = (state_70976[(2)]);
var inst_70965 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_70976__$1 = (function (){var statearr_71017 = state_70976;
(statearr_71017[(15)] = inst_70964);

return statearr_71017;
})();
if(cljs.core.truth_(inst_70965)){
var statearr_71018_72384 = state_70976__$1;
(statearr_71018_72384[(1)] = (21));

} else {
var statearr_71019_72385 = state_70976__$1;
(statearr_71019_72385[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (5))){
var inst_70915 = cljs.core.async.close_BANG_(out);
var state_70976__$1 = state_70976;
var statearr_71021_72390 = state_70976__$1;
(statearr_71021_72390[(2)] = inst_70915);

(statearr_71021_72390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (14))){
var inst_70940 = (state_70976[(7)]);
var inst_70942 = cljs.core.chunked_seq_QMARK_(inst_70940);
var state_70976__$1 = state_70976;
if(inst_70942){
var statearr_71022_72398 = state_70976__$1;
(statearr_71022_72398[(1)] = (17));

} else {
var statearr_71023_72399 = state_70976__$1;
(statearr_71023_72399[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (16))){
var inst_70960 = (state_70976[(2)]);
var state_70976__$1 = state_70976;
var statearr_71024_72400 = state_70976__$1;
(statearr_71024_72400[(2)] = inst_70960);

(statearr_71024_72400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70977 === (10))){
var inst_70924 = (state_70976[(9)]);
var inst_70926 = (state_70976[(10)]);
var inst_70931 = cljs.core._nth(inst_70924,inst_70926);
var state_70976__$1 = state_70976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70976__$1,(13),out,inst_70931);
} else {
if((state_val_70977 === (18))){
var inst_70940 = (state_70976[(7)]);
var inst_70950 = cljs.core.first(inst_70940);
var state_70976__$1 = state_70976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70976__$1,(20),out,inst_70950);
} else {
if((state_val_70977 === (8))){
var inst_70925 = (state_70976[(8)]);
var inst_70926 = (state_70976[(10)]);
var inst_70928 = (inst_70926 < inst_70925);
var inst_70929 = inst_70928;
var state_70976__$1 = state_70976;
if(cljs.core.truth_(inst_70929)){
var statearr_71025_72404 = state_70976__$1;
(statearr_71025_72404[(1)] = (10));

} else {
var statearr_71026_72405 = state_70976__$1;
(statearr_71026_72405[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__68975__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__68975__auto____0 = (function (){
var statearr_71030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71030[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__68975__auto__);

(statearr_71030[(1)] = (1));

return statearr_71030;
});
var cljs$core$async$mapcat_STAR__$_state_machine__68975__auto____1 = (function (state_70976){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_70976);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e71031){var ex__68978__auto__ = e71031;
var statearr_71032_72406 = state_70976;
(statearr_71032_72406[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_70976[(4)]))){
var statearr_71034_72407 = state_70976;
(statearr_71034_72407[(1)] = cljs.core.first((state_70976[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72408 = state_70976;
state_70976 = G__72408;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__68975__auto__ = function(state_70976){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__68975__auto____1.call(this,state_70976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__68975__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__68975__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_71037 = f__69096__auto__();
(statearr_71037[(6)] = c__69095__auto__);

return statearr_71037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));

return c__69095__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__71040 = arguments.length;
switch (G__71040) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__71044 = arguments.length;
switch (G__71044) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__71049 = arguments.length;
switch (G__71049) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69095__auto___72421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_71080){
var state_val_71084 = (state_71080[(1)]);
if((state_val_71084 === (7))){
var inst_71075 = (state_71080[(2)]);
var state_71080__$1 = state_71080;
var statearr_71088_72422 = state_71080__$1;
(statearr_71088_72422[(2)] = inst_71075);

(statearr_71088_72422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71084 === (1))){
var inst_71055 = null;
var state_71080__$1 = (function (){var statearr_71089 = state_71080;
(statearr_71089[(7)] = inst_71055);

return statearr_71089;
})();
var statearr_71090_72423 = state_71080__$1;
(statearr_71090_72423[(2)] = null);

(statearr_71090_72423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71084 === (4))){
var inst_71060 = (state_71080[(8)]);
var inst_71060__$1 = (state_71080[(2)]);
var inst_71061 = (inst_71060__$1 == null);
var inst_71062 = cljs.core.not(inst_71061);
var state_71080__$1 = (function (){var statearr_71091 = state_71080;
(statearr_71091[(8)] = inst_71060__$1);

return statearr_71091;
})();
if(inst_71062){
var statearr_71092_72424 = state_71080__$1;
(statearr_71092_72424[(1)] = (5));

} else {
var statearr_71093_72425 = state_71080__$1;
(statearr_71093_72425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71084 === (6))){
var state_71080__$1 = state_71080;
var statearr_71094_72430 = state_71080__$1;
(statearr_71094_72430[(2)] = null);

(statearr_71094_72430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71084 === (3))){
var inst_71077 = (state_71080[(2)]);
var inst_71078 = cljs.core.async.close_BANG_(out);
var state_71080__$1 = (function (){var statearr_71095 = state_71080;
(statearr_71095[(9)] = inst_71077);

return statearr_71095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71080__$1,inst_71078);
} else {
if((state_val_71084 === (2))){
var state_71080__$1 = state_71080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71080__$1,(4),ch);
} else {
if((state_val_71084 === (11))){
var inst_71060 = (state_71080[(8)]);
var inst_71069 = (state_71080[(2)]);
var inst_71055 = inst_71060;
var state_71080__$1 = (function (){var statearr_71097 = state_71080;
(statearr_71097[(7)] = inst_71055);

(statearr_71097[(10)] = inst_71069);

return statearr_71097;
})();
var statearr_71098_72436 = state_71080__$1;
(statearr_71098_72436[(2)] = null);

(statearr_71098_72436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71084 === (9))){
var inst_71060 = (state_71080[(8)]);
var state_71080__$1 = state_71080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71080__$1,(11),out,inst_71060);
} else {
if((state_val_71084 === (5))){
var inst_71055 = (state_71080[(7)]);
var inst_71060 = (state_71080[(8)]);
var inst_71064 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71060,inst_71055);
var state_71080__$1 = state_71080;
if(inst_71064){
var statearr_71101_72437 = state_71080__$1;
(statearr_71101_72437[(1)] = (8));

} else {
var statearr_71102_72438 = state_71080__$1;
(statearr_71102_72438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71084 === (10))){
var inst_71072 = (state_71080[(2)]);
var state_71080__$1 = state_71080;
var statearr_71103_72439 = state_71080__$1;
(statearr_71103_72439[(2)] = inst_71072);

(statearr_71103_72439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71084 === (8))){
var inst_71055 = (state_71080[(7)]);
var tmp71099 = inst_71055;
var inst_71055__$1 = tmp71099;
var state_71080__$1 = (function (){var statearr_71105 = state_71080;
(statearr_71105[(7)] = inst_71055__$1);

return statearr_71105;
})();
var statearr_71106_72444 = state_71080__$1;
(statearr_71106_72444[(2)] = null);

(statearr_71106_72444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__68975__auto__ = null;
var cljs$core$async$state_machine__68975__auto____0 = (function (){
var statearr_71107 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71107[(0)] = cljs$core$async$state_machine__68975__auto__);

(statearr_71107[(1)] = (1));

return statearr_71107;
});
var cljs$core$async$state_machine__68975__auto____1 = (function (state_71080){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_71080);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e71109){var ex__68978__auto__ = e71109;
var statearr_71110_72449 = state_71080;
(statearr_71110_72449[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_71080[(4)]))){
var statearr_71111_72450 = state_71080;
(statearr_71111_72450[(1)] = cljs.core.first((state_71080[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72454 = state_71080;
state_71080 = G__72454;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$state_machine__68975__auto__ = function(state_71080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68975__auto____1.call(this,state_71080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68975__auto____0;
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68975__auto____1;
return cljs$core$async$state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_71112 = f__69096__auto__();
(statearr_71112[(6)] = c__69095__auto___72421);

return statearr_71112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__71115 = arguments.length;
switch (G__71115) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69095__auto___72456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_71155){
var state_val_71156 = (state_71155[(1)]);
if((state_val_71156 === (7))){
var inst_71151 = (state_71155[(2)]);
var state_71155__$1 = state_71155;
var statearr_71157_72457 = state_71155__$1;
(statearr_71157_72457[(2)] = inst_71151);

(statearr_71157_72457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (1))){
var inst_71118 = (new Array(n));
var inst_71119 = inst_71118;
var inst_71120 = (0);
var state_71155__$1 = (function (){var statearr_71158 = state_71155;
(statearr_71158[(7)] = inst_71120);

(statearr_71158[(8)] = inst_71119);

return statearr_71158;
})();
var statearr_71159_72461 = state_71155__$1;
(statearr_71159_72461[(2)] = null);

(statearr_71159_72461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (4))){
var inst_71123 = (state_71155[(9)]);
var inst_71123__$1 = (state_71155[(2)]);
var inst_71124 = (inst_71123__$1 == null);
var inst_71125 = cljs.core.not(inst_71124);
var state_71155__$1 = (function (){var statearr_71160 = state_71155;
(statearr_71160[(9)] = inst_71123__$1);

return statearr_71160;
})();
if(inst_71125){
var statearr_71161_72462 = state_71155__$1;
(statearr_71161_72462[(1)] = (5));

} else {
var statearr_71162_72463 = state_71155__$1;
(statearr_71162_72463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (15))){
var inst_71145 = (state_71155[(2)]);
var state_71155__$1 = state_71155;
var statearr_71164_72466 = state_71155__$1;
(statearr_71164_72466[(2)] = inst_71145);

(statearr_71164_72466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (13))){
var state_71155__$1 = state_71155;
var statearr_71165_72468 = state_71155__$1;
(statearr_71165_72468[(2)] = null);

(statearr_71165_72468[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (6))){
var inst_71120 = (state_71155[(7)]);
var inst_71141 = (inst_71120 > (0));
var state_71155__$1 = state_71155;
if(cljs.core.truth_(inst_71141)){
var statearr_71166_72470 = state_71155__$1;
(statearr_71166_72470[(1)] = (12));

} else {
var statearr_71167_72471 = state_71155__$1;
(statearr_71167_72471[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (3))){
var inst_71153 = (state_71155[(2)]);
var state_71155__$1 = state_71155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71155__$1,inst_71153);
} else {
if((state_val_71156 === (12))){
var inst_71119 = (state_71155[(8)]);
var inst_71143 = cljs.core.vec(inst_71119);
var state_71155__$1 = state_71155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71155__$1,(15),out,inst_71143);
} else {
if((state_val_71156 === (2))){
var state_71155__$1 = state_71155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71155__$1,(4),ch);
} else {
if((state_val_71156 === (11))){
var inst_71135 = (state_71155[(2)]);
var inst_71136 = (new Array(n));
var inst_71119 = inst_71136;
var inst_71120 = (0);
var state_71155__$1 = (function (){var statearr_71169 = state_71155;
(statearr_71169[(7)] = inst_71120);

(statearr_71169[(10)] = inst_71135);

(statearr_71169[(8)] = inst_71119);

return statearr_71169;
})();
var statearr_71172_72476 = state_71155__$1;
(statearr_71172_72476[(2)] = null);

(statearr_71172_72476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (9))){
var inst_71119 = (state_71155[(8)]);
var inst_71133 = cljs.core.vec(inst_71119);
var state_71155__$1 = state_71155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71155__$1,(11),out,inst_71133);
} else {
if((state_val_71156 === (5))){
var inst_71120 = (state_71155[(7)]);
var inst_71128 = (state_71155[(11)]);
var inst_71123 = (state_71155[(9)]);
var inst_71119 = (state_71155[(8)]);
var inst_71127 = (inst_71119[inst_71120] = inst_71123);
var inst_71128__$1 = (inst_71120 + (1));
var inst_71129 = (inst_71128__$1 < n);
var state_71155__$1 = (function (){var statearr_71178 = state_71155;
(statearr_71178[(12)] = inst_71127);

(statearr_71178[(11)] = inst_71128__$1);

return statearr_71178;
})();
if(cljs.core.truth_(inst_71129)){
var statearr_71179_72478 = state_71155__$1;
(statearr_71179_72478[(1)] = (8));

} else {
var statearr_71180_72479 = state_71155__$1;
(statearr_71180_72479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (14))){
var inst_71148 = (state_71155[(2)]);
var inst_71149 = cljs.core.async.close_BANG_(out);
var state_71155__$1 = (function (){var statearr_71182 = state_71155;
(statearr_71182[(13)] = inst_71148);

return statearr_71182;
})();
var statearr_71183_72480 = state_71155__$1;
(statearr_71183_72480[(2)] = inst_71149);

(statearr_71183_72480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (10))){
var inst_71139 = (state_71155[(2)]);
var state_71155__$1 = state_71155;
var statearr_71184_72481 = state_71155__$1;
(statearr_71184_72481[(2)] = inst_71139);

(statearr_71184_72481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71156 === (8))){
var inst_71128 = (state_71155[(11)]);
var inst_71119 = (state_71155[(8)]);
var tmp71181 = inst_71119;
var inst_71119__$1 = tmp71181;
var inst_71120 = inst_71128;
var state_71155__$1 = (function (){var statearr_71185 = state_71155;
(statearr_71185[(7)] = inst_71120);

(statearr_71185[(8)] = inst_71119__$1);

return statearr_71185;
})();
var statearr_71186_72484 = state_71155__$1;
(statearr_71186_72484[(2)] = null);

(statearr_71186_72484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__68975__auto__ = null;
var cljs$core$async$state_machine__68975__auto____0 = (function (){
var statearr_71187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71187[(0)] = cljs$core$async$state_machine__68975__auto__);

(statearr_71187[(1)] = (1));

return statearr_71187;
});
var cljs$core$async$state_machine__68975__auto____1 = (function (state_71155){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_71155);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e71188){var ex__68978__auto__ = e71188;
var statearr_71189_72488 = state_71155;
(statearr_71189_72488[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_71155[(4)]))){
var statearr_71190_72489 = state_71155;
(statearr_71190_72489[(1)] = cljs.core.first((state_71155[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72492 = state_71155;
state_71155 = G__72492;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$state_machine__68975__auto__ = function(state_71155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68975__auto____1.call(this,state_71155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68975__auto____0;
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68975__auto____1;
return cljs$core$async$state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_71192 = f__69096__auto__();
(statearr_71192[(6)] = c__69095__auto___72456);

return statearr_71192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__71194 = arguments.length;
switch (G__71194) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69095__auto___72496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_71236){
var state_val_71237 = (state_71236[(1)]);
if((state_val_71237 === (7))){
var inst_71232 = (state_71236[(2)]);
var state_71236__$1 = state_71236;
var statearr_71238_72498 = state_71236__$1;
(statearr_71238_72498[(2)] = inst_71232);

(statearr_71238_72498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71237 === (1))){
var inst_71195 = [];
var inst_71196 = inst_71195;
var inst_71197 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_71236__$1 = (function (){var statearr_71239 = state_71236;
(statearr_71239[(7)] = inst_71196);

(statearr_71239[(8)] = inst_71197);

return statearr_71239;
})();
var statearr_71240_72519 = state_71236__$1;
(statearr_71240_72519[(2)] = null);

(statearr_71240_72519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71237 === (4))){
var inst_71200 = (state_71236[(9)]);
var inst_71200__$1 = (state_71236[(2)]);
var inst_71201 = (inst_71200__$1 == null);
var inst_71202 = cljs.core.not(inst_71201);
var state_71236__$1 = (function (){var statearr_71241 = state_71236;
(statearr_71241[(9)] = inst_71200__$1);

return statearr_71241;
})();
if(inst_71202){
var statearr_71242_72527 = state_71236__$1;
(statearr_71242_72527[(1)] = (5));

} else {
var statearr_71243_72528 = state_71236__$1;
(statearr_71243_72528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71237 === (15))){
var inst_71226 = (state_71236[(2)]);
var state_71236__$1 = state_71236;
var statearr_71244_72529 = state_71236__$1;
(statearr_71244_72529[(2)] = inst_71226);

(statearr_71244_72529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71237 === (13))){
var state_71236__$1 = state_71236;
var statearr_71245_72536 = state_71236__$1;
(statearr_71245_72536[(2)] = null);

(statearr_71245_72536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71237 === (6))){
var inst_71196 = (state_71236[(7)]);
var inst_71221 = inst_71196.length;
var inst_71222 = (inst_71221 > (0));
var state_71236__$1 = state_71236;
if(cljs.core.truth_(inst_71222)){
var statearr_71246_72544 = state_71236__$1;
(statearr_71246_72544[(1)] = (12));

} else {
var statearr_71247_72545 = state_71236__$1;
(statearr_71247_72545[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71237 === (3))){
var inst_71234 = (state_71236[(2)]);
var state_71236__$1 = state_71236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71236__$1,inst_71234);
} else {
if((state_val_71237 === (12))){
var inst_71196 = (state_71236[(7)]);
var inst_71224 = cljs.core.vec(inst_71196);
var state_71236__$1 = state_71236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71236__$1,(15),out,inst_71224);
} else {
if((state_val_71237 === (2))){
var state_71236__$1 = state_71236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71236__$1,(4),ch);
} else {
if((state_val_71237 === (11))){
var inst_71204 = (state_71236[(10)]);
var inst_71200 = (state_71236[(9)]);
var inst_71214 = (state_71236[(2)]);
var inst_71215 = [];
var inst_71216 = inst_71215.push(inst_71200);
var inst_71196 = inst_71215;
var inst_71197 = inst_71204;
var state_71236__$1 = (function (){var statearr_71248 = state_71236;
(statearr_71248[(7)] = inst_71196);

(statearr_71248[(8)] = inst_71197);

(statearr_71248[(11)] = inst_71216);

(statearr_71248[(12)] = inst_71214);

return statearr_71248;
})();
var statearr_71249_72576 = state_71236__$1;
(statearr_71249_72576[(2)] = null);

(statearr_71249_72576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71237 === (9))){
var inst_71196 = (state_71236[(7)]);
var inst_71212 = cljs.core.vec(inst_71196);
var state_71236__$1 = state_71236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71236__$1,(11),out,inst_71212);
} else {
if((state_val_71237 === (5))){
var inst_71204 = (state_71236[(10)]);
var inst_71200 = (state_71236[(9)]);
var inst_71197 = (state_71236[(8)]);
var inst_71204__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_71200) : f.call(null,inst_71200));
var inst_71205 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71204__$1,inst_71197);
var inst_71206 = cljs.core.keyword_identical_QMARK_(inst_71197,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_71207 = ((inst_71205) || (inst_71206));
var state_71236__$1 = (function (){var statearr_71250 = state_71236;
(statearr_71250[(10)] = inst_71204__$1);

return statearr_71250;
})();
if(cljs.core.truth_(inst_71207)){
var statearr_71251_72596 = state_71236__$1;
(statearr_71251_72596[(1)] = (8));

} else {
var statearr_71252_72599 = state_71236__$1;
(statearr_71252_72599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71237 === (14))){
var inst_71229 = (state_71236[(2)]);
var inst_71230 = cljs.core.async.close_BANG_(out);
var state_71236__$1 = (function (){var statearr_71254 = state_71236;
(statearr_71254[(13)] = inst_71229);

return statearr_71254;
})();
var statearr_71255_72613 = state_71236__$1;
(statearr_71255_72613[(2)] = inst_71230);

(statearr_71255_72613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71237 === (10))){
var inst_71219 = (state_71236[(2)]);
var state_71236__$1 = state_71236;
var statearr_71257_72620 = state_71236__$1;
(statearr_71257_72620[(2)] = inst_71219);

(statearr_71257_72620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71237 === (8))){
var inst_71204 = (state_71236[(10)]);
var inst_71196 = (state_71236[(7)]);
var inst_71200 = (state_71236[(9)]);
var inst_71209 = inst_71196.push(inst_71200);
var tmp71253 = inst_71196;
var inst_71196__$1 = tmp71253;
var inst_71197 = inst_71204;
var state_71236__$1 = (function (){var statearr_71258 = state_71236;
(statearr_71258[(14)] = inst_71209);

(statearr_71258[(7)] = inst_71196__$1);

(statearr_71258[(8)] = inst_71197);

return statearr_71258;
})();
var statearr_71259_72636 = state_71236__$1;
(statearr_71259_72636[(2)] = null);

(statearr_71259_72636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__68975__auto__ = null;
var cljs$core$async$state_machine__68975__auto____0 = (function (){
var statearr_71260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71260[(0)] = cljs$core$async$state_machine__68975__auto__);

(statearr_71260[(1)] = (1));

return statearr_71260;
});
var cljs$core$async$state_machine__68975__auto____1 = (function (state_71236){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_71236);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e71261){var ex__68978__auto__ = e71261;
var statearr_71262_72645 = state_71236;
(statearr_71262_72645[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_71236[(4)]))){
var statearr_71263_72646 = state_71236;
(statearr_71263_72646[(1)] = cljs.core.first((state_71236[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72647 = state_71236;
state_71236 = G__72647;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
cljs$core$async$state_machine__68975__auto__ = function(state_71236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__68975__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__68975__auto____1.call(this,state_71236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__68975__auto____0;
cljs$core$async$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__68975__auto____1;
return cljs$core$async$state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_71264 = f__69096__auto__();
(statearr_71264[(6)] = c__69095__auto___72496);

return statearr_71264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
