goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__65280 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__65281 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__65281);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___65448 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___65448)){
var new_db_65449 = temp__5735__auto___65448;
var fexpr__65285_65450 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__65285_65450.cljs$core$IFn$_invoke$arity$1 ? fexpr__65285_65450.cljs$core$IFn$_invoke$arity$1(new_db_65449) : fexpr__65285_65450.call(null,new_db_65449));
} else {
}

var seq__65286 = cljs.core.seq(effects_without_db);
var chunk__65287 = null;
var count__65288 = (0);
var i__65289 = (0);
while(true){
if((i__65289 < count__65288)){
var vec__65307 = chunk__65287.cljs$core$IIndexed$_nth$arity$2(null,i__65289);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65307,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65307,(1),null);
var temp__5733__auto___65452 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___65452)){
var effect_fn_65453 = temp__5733__auto___65452;
(effect_fn_65453.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65453.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65453.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65458 = seq__65286;
var G__65459 = chunk__65287;
var G__65460 = count__65288;
var G__65461 = (i__65289 + (1));
seq__65286 = G__65458;
chunk__65287 = G__65459;
count__65288 = G__65460;
i__65289 = G__65461;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65286);
if(temp__5735__auto__){
var seq__65286__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65286__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65286__$1);
var G__65462 = cljs.core.chunk_rest(seq__65286__$1);
var G__65463 = c__4556__auto__;
var G__65464 = cljs.core.count(c__4556__auto__);
var G__65465 = (0);
seq__65286 = G__65462;
chunk__65287 = G__65463;
count__65288 = G__65464;
i__65289 = G__65465;
continue;
} else {
var vec__65326 = cljs.core.first(seq__65286__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65326,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65326,(1),null);
var temp__5733__auto___65466 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___65466)){
var effect_fn_65467 = temp__5733__auto___65466;
(effect_fn_65467.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65467.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65467.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65468 = cljs.core.next(seq__65286__$1);
var G__65469 = null;
var G__65470 = (0);
var G__65471 = (0);
seq__65286 = G__65468;
chunk__65287 = G__65469;
count__65288 = G__65470;
i__65289 = G__65471;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__64914__auto___65472 = re_frame.interop.now();
var duration__64915__auto___65473 = (end__64914__auto___65472 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__64915__auto___65473,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__64914__auto___65472);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__65280);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___65477 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___65477)){
var new_db_65478 = temp__5735__auto___65477;
var fexpr__65330_65479 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__65330_65479.cljs$core$IFn$_invoke$arity$1 ? fexpr__65330_65479.cljs$core$IFn$_invoke$arity$1(new_db_65478) : fexpr__65330_65479.call(null,new_db_65478));
} else {
}

var seq__65331 = cljs.core.seq(effects_without_db);
var chunk__65332 = null;
var count__65333 = (0);
var i__65334 = (0);
while(true){
if((i__65334 < count__65333)){
var vec__65353 = chunk__65332.cljs$core$IIndexed$_nth$arity$2(null,i__65334);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65353,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65353,(1),null);
var temp__5733__auto___65486 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___65486)){
var effect_fn_65487 = temp__5733__auto___65486;
(effect_fn_65487.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65487.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65487.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65488 = seq__65331;
var G__65489 = chunk__65332;
var G__65490 = count__65333;
var G__65491 = (i__65334 + (1));
seq__65331 = G__65488;
chunk__65332 = G__65489;
count__65333 = G__65490;
i__65334 = G__65491;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65331);
if(temp__5735__auto__){
var seq__65331__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65331__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65331__$1);
var G__65496 = cljs.core.chunk_rest(seq__65331__$1);
var G__65497 = c__4556__auto__;
var G__65498 = cljs.core.count(c__4556__auto__);
var G__65499 = (0);
seq__65331 = G__65496;
chunk__65332 = G__65497;
count__65333 = G__65498;
i__65334 = G__65499;
continue;
} else {
var vec__65356 = cljs.core.first(seq__65331__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65356,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65356,(1),null);
var temp__5733__auto___65500 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___65500)){
var effect_fn_65501 = temp__5733__auto___65500;
(effect_fn_65501.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65501.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65501.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65502 = cljs.core.next(seq__65331__$1);
var G__65503 = null;
var G__65504 = (0);
var G__65505 = (0);
seq__65331 = G__65502;
chunk__65332 = G__65503;
count__65333 = G__65504;
i__65334 = G__65505;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__65362){
var map__65363 = p__65362;
var map__65363__$1 = (((((!((map__65363 == null))))?(((((map__65363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65363):map__65363);
var effect = map__65363__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65363__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65363__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__65374 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__65375 = null;
var count__65376 = (0);
var i__65377 = (0);
while(true){
if((i__65377 < count__65376)){
var effect = chunk__65375.cljs$core$IIndexed$_nth$arity$2(null,i__65377);
re_frame.fx.dispatch_later(effect);


var G__65510 = seq__65374;
var G__65511 = chunk__65375;
var G__65512 = count__65376;
var G__65513 = (i__65377 + (1));
seq__65374 = G__65510;
chunk__65375 = G__65511;
count__65376 = G__65512;
i__65377 = G__65513;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65374);
if(temp__5735__auto__){
var seq__65374__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65374__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65374__$1);
var G__65514 = cljs.core.chunk_rest(seq__65374__$1);
var G__65515 = c__4556__auto__;
var G__65516 = cljs.core.count(c__4556__auto__);
var G__65517 = (0);
seq__65374 = G__65514;
chunk__65375 = G__65515;
count__65376 = G__65516;
i__65377 = G__65517;
continue;
} else {
var effect = cljs.core.first(seq__65374__$1);
re_frame.fx.dispatch_later(effect);


var G__65518 = cljs.core.next(seq__65374__$1);
var G__65519 = null;
var G__65520 = (0);
var G__65521 = (0);
seq__65374 = G__65518;
chunk__65375 = G__65519;
count__65376 = G__65520;
i__65377 = G__65521;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__65382 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__65383 = null;
var count__65384 = (0);
var i__65385 = (0);
while(true){
if((i__65385 < count__65384)){
var vec__65413 = chunk__65383.cljs$core$IIndexed$_nth$arity$2(null,i__65385);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65413,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65413,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___65525 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___65525)){
var effect_fn_65526 = temp__5733__auto___65525;
(effect_fn_65526.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65526.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65526.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__65527 = seq__65382;
var G__65528 = chunk__65383;
var G__65529 = count__65384;
var G__65530 = (i__65385 + (1));
seq__65382 = G__65527;
chunk__65383 = G__65528;
count__65384 = G__65529;
i__65385 = G__65530;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65382);
if(temp__5735__auto__){
var seq__65382__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65382__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65382__$1);
var G__65531 = cljs.core.chunk_rest(seq__65382__$1);
var G__65532 = c__4556__auto__;
var G__65533 = cljs.core.count(c__4556__auto__);
var G__65534 = (0);
seq__65382 = G__65531;
chunk__65383 = G__65532;
count__65384 = G__65533;
i__65385 = G__65534;
continue;
} else {
var vec__65423 = cljs.core.first(seq__65382__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65423,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65423,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___65537 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___65537)){
var effect_fn_65538 = temp__5733__auto___65537;
(effect_fn_65538.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65538.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65538.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__65539 = cljs.core.next(seq__65382__$1);
var G__65540 = null;
var G__65541 = (0);
var G__65542 = (0);
seq__65382 = G__65539;
chunk__65383 = G__65540;
count__65384 = G__65541;
i__65385 = G__65542;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__65427 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__65428 = null;
var count__65429 = (0);
var i__65430 = (0);
while(true){
if((i__65430 < count__65429)){
var event = chunk__65428.cljs$core$IIndexed$_nth$arity$2(null,i__65430);
re_frame.router.dispatch(event);


var G__65543 = seq__65427;
var G__65544 = chunk__65428;
var G__65545 = count__65429;
var G__65546 = (i__65430 + (1));
seq__65427 = G__65543;
chunk__65428 = G__65544;
count__65429 = G__65545;
i__65430 = G__65546;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65427);
if(temp__5735__auto__){
var seq__65427__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65427__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65427__$1);
var G__65547 = cljs.core.chunk_rest(seq__65427__$1);
var G__65548 = c__4556__auto__;
var G__65549 = cljs.core.count(c__4556__auto__);
var G__65550 = (0);
seq__65427 = G__65547;
chunk__65428 = G__65548;
count__65429 = G__65549;
i__65430 = G__65550;
continue;
} else {
var event = cljs.core.first(seq__65427__$1);
re_frame.router.dispatch(event);


var G__65551 = cljs.core.next(seq__65427__$1);
var G__65552 = null;
var G__65553 = (0);
var G__65554 = (0);
seq__65427 = G__65551;
chunk__65428 = G__65552;
count__65429 = G__65553;
i__65430 = G__65554;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__65433 = cljs.core.seq(value);
var chunk__65434 = null;
var count__65435 = (0);
var i__65436 = (0);
while(true){
if((i__65436 < count__65435)){
var event = chunk__65434.cljs$core$IIndexed$_nth$arity$2(null,i__65436);
clear_event(event);


var G__65556 = seq__65433;
var G__65557 = chunk__65434;
var G__65558 = count__65435;
var G__65559 = (i__65436 + (1));
seq__65433 = G__65556;
chunk__65434 = G__65557;
count__65435 = G__65558;
i__65436 = G__65559;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65433);
if(temp__5735__auto__){
var seq__65433__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65433__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65433__$1);
var G__65560 = cljs.core.chunk_rest(seq__65433__$1);
var G__65561 = c__4556__auto__;
var G__65562 = cljs.core.count(c__4556__auto__);
var G__65563 = (0);
seq__65433 = G__65560;
chunk__65434 = G__65561;
count__65435 = G__65562;
i__65436 = G__65563;
continue;
} else {
var event = cljs.core.first(seq__65433__$1);
clear_event(event);


var G__65564 = cljs.core.next(seq__65433__$1);
var G__65565 = null;
var G__65566 = (0);
var G__65567 = (0);
seq__65433 = G__65564;
chunk__65434 = G__65565;
count__65435 = G__65566;
i__65436 = G__65567;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
