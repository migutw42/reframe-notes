goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__60946 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__60947 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__60947);

try{try{var seq__60950 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__60951 = null;
var count__60952 = (0);
var i__60953 = (0);
while(true){
if((i__60953 < count__60952)){
var vec__60963 = chunk__60951.cljs$core$IIndexed$_nth$arity$2(null,i__60953);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60963,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60963,(1),null);
var temp__5733__auto___61027 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61027)){
var effect_fn_61032 = temp__5733__auto___61027;
(effect_fn_61032.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61032.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61032.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61033 = seq__60950;
var G__61034 = chunk__60951;
var G__61035 = count__60952;
var G__61036 = (i__60953 + (1));
seq__60950 = G__61033;
chunk__60951 = G__61034;
count__60952 = G__61035;
i__60953 = G__61036;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60950);
if(temp__5735__auto__){
var seq__60950__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60950__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60950__$1);
var G__61037 = cljs.core.chunk_rest(seq__60950__$1);
var G__61038 = c__4556__auto__;
var G__61039 = cljs.core.count(c__4556__auto__);
var G__61040 = (0);
seq__60950 = G__61037;
chunk__60951 = G__61038;
count__60952 = G__61039;
i__60953 = G__61040;
continue;
} else {
var vec__60968 = cljs.core.first(seq__60950__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60968,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60968,(1),null);
var temp__5733__auto___61041 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61041)){
var effect_fn_61042 = temp__5733__auto___61041;
(effect_fn_61042.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61042.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61042.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61043 = cljs.core.next(seq__60950__$1);
var G__61044 = null;
var G__61045 = (0);
var G__61046 = (0);
seq__60950 = G__61043;
chunk__60951 = G__61044;
count__60952 = G__61045;
i__60953 = G__61046;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__60626__auto___61047 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now();
var duration__60627__auto___61048 = (end__60626__auto___61047 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__60627__auto___61048,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_(end__60626__auto___61047);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__60946);
}} else {
var seq__60972 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__60973 = null;
var count__60974 = (0);
var i__60975 = (0);
while(true){
if((i__60975 < count__60974)){
var vec__60983 = chunk__60973.cljs$core$IIndexed$_nth$arity$2(null,i__60975);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60983,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60983,(1),null);
var temp__5733__auto___61049 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61049)){
var effect_fn_61050 = temp__5733__auto___61049;
(effect_fn_61050.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61050.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61050.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61051 = seq__60972;
var G__61052 = chunk__60973;
var G__61053 = count__60974;
var G__61054 = (i__60975 + (1));
seq__60972 = G__61051;
chunk__60973 = G__61052;
count__60974 = G__61053;
i__60975 = G__61054;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60972);
if(temp__5735__auto__){
var seq__60972__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60972__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60972__$1);
var G__61055 = cljs.core.chunk_rest(seq__60972__$1);
var G__61056 = c__4556__auto__;
var G__61057 = cljs.core.count(c__4556__auto__);
var G__61058 = (0);
seq__60972 = G__61055;
chunk__60973 = G__61056;
count__60974 = G__61057;
i__60975 = G__61058;
continue;
} else {
var vec__60987 = cljs.core.first(seq__60972__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60987,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60987,(1),null);
var temp__5733__auto___61059 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___61059)){
var effect_fn_61060 = temp__5733__auto___61059;
(effect_fn_61060.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61060.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61060.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61061 = cljs.core.next(seq__60972__$1);
var G__61062 = null;
var G__61063 = (0);
var G__61064 = (0);
seq__60972 = G__61061;
chunk__60973 = G__61062;
count__60974 = G__61063;
i__60975 = G__61064;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__60990 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__60991 = null;
var count__60992 = (0);
var i__60993 = (0);
while(true){
if((i__60993 < count__60992)){
var map__61003 = chunk__60991.cljs$core$IIndexed$_nth$arity$2(null,i__60993);
var map__61003__$1 = (((((!((map__61003 == null))))?(((((map__61003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61003):map__61003);
var effect = map__61003__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__60990,chunk__60991,count__60992,i__60993,map__61003,map__61003__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__60990,chunk__60991,count__60992,i__60993,map__61003,map__61003__$1,effect,ms,dispatch))
,ms);
}


var G__61066 = seq__60990;
var G__61067 = chunk__60991;
var G__61068 = count__60992;
var G__61069 = (i__60993 + (1));
seq__60990 = G__61066;
chunk__60991 = G__61067;
count__60992 = G__61068;
i__60993 = G__61069;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60990);
if(temp__5735__auto__){
var seq__60990__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60990__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__60990__$1);
var G__61071 = cljs.core.chunk_rest(seq__60990__$1);
var G__61072 = c__4556__auto__;
var G__61073 = cljs.core.count(c__4556__auto__);
var G__61074 = (0);
seq__60990 = G__61071;
chunk__60991 = G__61072;
count__60992 = G__61073;
i__60993 = G__61074;
continue;
} else {
var map__61006 = cljs.core.first(seq__60990__$1);
var map__61006__$1 = (((((!((map__61006 == null))))?(((((map__61006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61006):map__61006);
var effect = map__61006__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61006__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61006__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__60990,chunk__60991,count__60992,i__60993,map__61006,map__61006__$1,effect,ms,dispatch,seq__60990__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__60990,chunk__60991,count__60992,i__60993,map__61006,map__61006__$1,effect,ms,dispatch,seq__60990__$1,temp__5735__auto__))
,ms);
}


var G__61076 = cljs.core.next(seq__60990__$1);
var G__61077 = null;
var G__61078 = (0);
var G__61079 = (0);
seq__60990 = G__61076;
chunk__60991 = G__61077;
count__60992 = G__61078;
i__60993 = G__61079;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__61010 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61011 = null;
var count__61012 = (0);
var i__61013 = (0);
while(true){
if((i__61013 < count__61012)){
var event = chunk__61011.cljs$core$IIndexed$_nth$arity$2(null,i__61013);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__61083 = seq__61010;
var G__61084 = chunk__61011;
var G__61085 = count__61012;
var G__61086 = (i__61013 + (1));
seq__61010 = G__61083;
chunk__61011 = G__61084;
count__61012 = G__61085;
i__61013 = G__61086;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61010);
if(temp__5735__auto__){
var seq__61010__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61010__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61010__$1);
var G__61087 = cljs.core.chunk_rest(seq__61010__$1);
var G__61088 = c__4556__auto__;
var G__61089 = cljs.core.count(c__4556__auto__);
var G__61090 = (0);
seq__61010 = G__61087;
chunk__61011 = G__61088;
count__61012 = G__61089;
i__61013 = G__61090;
continue;
} else {
var event = cljs.core.first(seq__61010__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__61091 = cljs.core.next(seq__61010__$1);
var G__61092 = null;
var G__61093 = (0);
var G__61094 = (0);
seq__61010 = G__61091;
chunk__61011 = G__61092;
count__61012 = G__61093;
i__61013 = G__61094;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__61014 = cljs.core.seq(value);
var chunk__61015 = null;
var count__61016 = (0);
var i__61017 = (0);
while(true){
if((i__61017 < count__61016)){
var event = chunk__61015.cljs$core$IIndexed$_nth$arity$2(null,i__61017);
clear_event(event);


var G__61099 = seq__61014;
var G__61100 = chunk__61015;
var G__61101 = count__61016;
var G__61102 = (i__61017 + (1));
seq__61014 = G__61099;
chunk__61015 = G__61100;
count__61016 = G__61101;
i__61017 = G__61102;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61014);
if(temp__5735__auto__){
var seq__61014__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61014__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61014__$1);
var G__61103 = cljs.core.chunk_rest(seq__61014__$1);
var G__61104 = c__4556__auto__;
var G__61105 = cljs.core.count(c__4556__auto__);
var G__61106 = (0);
seq__61014 = G__61103;
chunk__61015 = G__61104;
count__61016 = G__61105;
i__61017 = G__61106;
continue;
} else {
var event = cljs.core.first(seq__61014__$1);
clear_event(event);


var G__61107 = cljs.core.next(seq__61014__$1);
var G__61108 = null;
var G__61109 = (0);
var G__61110 = (0);
seq__61014 = G__61107;
chunk__61015 = G__61108;
count__61016 = G__61109;
i__61017 = G__61110;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.js.map
