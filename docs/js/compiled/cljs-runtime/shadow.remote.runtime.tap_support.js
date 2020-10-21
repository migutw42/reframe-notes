goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__70396,p__70397){
var map__70398 = p__70396;
var map__70398__$1 = (((((!((map__70398 == null))))?(((((map__70398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70398):map__70398);
var svc = map__70398__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70398__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70398__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70398__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__70399 = p__70397;
var map__70399__$1 = (((((!((map__70399 == null))))?(((((map__70399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70399):map__70399);
var msg = map__70399__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70399__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70399__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70399__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70399__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__70402,p__70403){
var map__70404 = p__70402;
var map__70404__$1 = (((((!((map__70404 == null))))?(((((map__70404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70404):map__70404);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70404__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__70405 = p__70403;
var map__70405__$1 = (((((!((map__70405 == null))))?(((((map__70405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70405):map__70405);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70405__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__70408,p__70409){
var map__70410 = p__70408;
var map__70410__$1 = (((((!((map__70410 == null))))?(((((map__70410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70410):map__70410);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70410__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70410__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__70411 = p__70409;
var map__70411__$1 = (((((!((map__70411 == null))))?(((((map__70411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70411):map__70411);
var msg = map__70411__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70411__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__70415,tid){
var map__70417 = p__70415;
var map__70417__$1 = (((((!((map__70417 == null))))?(((((map__70417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70417):map__70417);
var svc = map__70417__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70417__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__70425 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__70426 = null;
var count__70427 = (0);
var i__70428 = (0);
while(true){
if((i__70428 < count__70427)){
var vec__70436 = chunk__70426.cljs$core$IIndexed$_nth$arity$2(null,i__70428);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70436,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70436,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__70522 = seq__70425;
var G__70523 = chunk__70426;
var G__70524 = count__70427;
var G__70525 = (i__70428 + (1));
seq__70425 = G__70522;
chunk__70426 = G__70523;
count__70427 = G__70524;
i__70428 = G__70525;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__70425);
if(temp__5735__auto__){
var seq__70425__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70425__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__70425__$1);
var G__70527 = cljs.core.chunk_rest(seq__70425__$1);
var G__70528 = c__4556__auto__;
var G__70529 = cljs.core.count(c__4556__auto__);
var G__70530 = (0);
seq__70425 = G__70527;
chunk__70426 = G__70528;
count__70427 = G__70529;
i__70428 = G__70530;
continue;
} else {
var vec__70442 = cljs.core.first(seq__70425__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70442,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70442,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__70533 = cljs.core.next(seq__70425__$1);
var G__70534 = null;
var G__70535 = (0);
var G__70536 = (0);
seq__70425 = G__70533;
chunk__70426 = G__70534;
count__70427 = G__70535;
i__70428 = G__70536;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__70419_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__70419_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__70420_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__70420_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__70421_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__70421_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__70422_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__70422_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__70445){
var map__70446 = p__70445;
var map__70446__$1 = (((((!((map__70446 == null))))?(((((map__70446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70446):map__70446);
var svc = map__70446__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70446__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70446__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
