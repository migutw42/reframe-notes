goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__64942){
var map__64943 = p__64942;
var map__64943__$1 = (((((!((map__64943 == null))))?(((((map__64943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64943):map__64943);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64943__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64943__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64943__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64943__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__64951_64991 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__64952_64992 = null;
var count__64953_64993 = (0);
var i__64954_64994 = (0);
while(true){
if((i__64954_64994 < count__64953_64993)){
var vec__64966_64995 = chunk__64952_64992.cljs$core$IIndexed$_nth$arity$2(null,i__64954_64994);
var k_64996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64966_64995,(0),null);
var cb_64997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64966_64995,(1),null);
try{var G__64970_64998 = cljs.core.deref(re_frame.trace.traces);
(cb_64997.cljs$core$IFn$_invoke$arity$1 ? cb_64997.cljs$core$IFn$_invoke$arity$1(G__64970_64998) : cb_64997.call(null,G__64970_64998));
}catch (e64969){var e_64999 = e64969;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_64996,"while storing",cljs.core.deref(re_frame.trace.traces),e_64999], 0));
}

var G__65000 = seq__64951_64991;
var G__65001 = chunk__64952_64992;
var G__65002 = count__64953_64993;
var G__65003 = (i__64954_64994 + (1));
seq__64951_64991 = G__65000;
chunk__64952_64992 = G__65001;
count__64953_64993 = G__65002;
i__64954_64994 = G__65003;
continue;
} else {
var temp__5735__auto___65008 = cljs.core.seq(seq__64951_64991);
if(temp__5735__auto___65008){
var seq__64951_65009__$1 = temp__5735__auto___65008;
if(cljs.core.chunked_seq_QMARK_(seq__64951_65009__$1)){
var c__4556__auto___65010 = cljs.core.chunk_first(seq__64951_65009__$1);
var G__65011 = cljs.core.chunk_rest(seq__64951_65009__$1);
var G__65012 = c__4556__auto___65010;
var G__65013 = cljs.core.count(c__4556__auto___65010);
var G__65014 = (0);
seq__64951_64991 = G__65011;
chunk__64952_64992 = G__65012;
count__64953_64993 = G__65013;
i__64954_64994 = G__65014;
continue;
} else {
var vec__64971_65019 = cljs.core.first(seq__64951_65009__$1);
var k_65020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64971_65019,(0),null);
var cb_65021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64971_65019,(1),null);
try{var G__64975_65025 = cljs.core.deref(re_frame.trace.traces);
(cb_65021.cljs$core$IFn$_invoke$arity$1 ? cb_65021.cljs$core$IFn$_invoke$arity$1(G__64975_65025) : cb_65021.call(null,G__64975_65025));
}catch (e64974){var e_65026 = e64974;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_65020,"while storing",cljs.core.deref(re_frame.trace.traces),e_65026], 0));
}

var G__65030 = cljs.core.next(seq__64951_65009__$1);
var G__65031 = null;
var G__65032 = (0);
var G__65033 = (0);
seq__64951_64991 = G__65030;
chunk__64952_64992 = G__65031;
count__64953_64993 = G__65032;
i__64954_64994 = G__65033;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
