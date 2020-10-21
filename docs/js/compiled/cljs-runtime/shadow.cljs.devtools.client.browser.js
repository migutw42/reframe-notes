goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74378 = arguments.length;
var i__4737__auto___74379 = (0);
while(true){
if((i__4737__auto___74379 < len__4736__auto___74378)){
args__4742__auto__.push((arguments[i__4737__auto___74379]));

var G__74380 = (i__4737__auto___74379 + (1));
i__4737__auto___74379 = G__74380;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq74061){
var G__74065 = cljs.core.first(seq74061);
var seq74061__$1 = cljs.core.next(seq74061);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74065,seq74061__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__74089 = cljs.core.seq(sources);
var chunk__74090 = null;
var count__74091 = (0);
var i__74092 = (0);
while(true){
if((i__74092 < count__74091)){
var map__74117 = chunk__74090.cljs$core$IIndexed$_nth$arity$2(null,i__74092);
var map__74117__$1 = (((((!((map__74117 == null))))?(((((map__74117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74117):map__74117);
var src = map__74117__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74117__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74117__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74117__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74117__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e74120){var e_74387 = e74120;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_74387);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_74387.message)].join('')));
}

var G__74388 = seq__74089;
var G__74389 = chunk__74090;
var G__74390 = count__74091;
var G__74391 = (i__74092 + (1));
seq__74089 = G__74388;
chunk__74090 = G__74389;
count__74091 = G__74390;
i__74092 = G__74391;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__74089);
if(temp__5735__auto__){
var seq__74089__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74089__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__74089__$1);
var G__74392 = cljs.core.chunk_rest(seq__74089__$1);
var G__74393 = c__4556__auto__;
var G__74394 = cljs.core.count(c__4556__auto__);
var G__74395 = (0);
seq__74089 = G__74392;
chunk__74090 = G__74393;
count__74091 = G__74394;
i__74092 = G__74395;
continue;
} else {
var map__74125 = cljs.core.first(seq__74089__$1);
var map__74125__$1 = (((((!((map__74125 == null))))?(((((map__74125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74125):map__74125);
var src = map__74125__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74125__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74125__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74125__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74125__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e74129){var e_74398 = e74129;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_74398);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_74398.message)].join('')));
}

var G__74399 = cljs.core.next(seq__74089__$1);
var G__74400 = null;
var G__74401 = (0);
var G__74402 = (0);
seq__74089 = G__74399;
chunk__74090 = G__74400;
count__74091 = G__74401;
i__74092 = G__74402;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__74136 = cljs.core.seq(js_requires);
var chunk__74137 = null;
var count__74138 = (0);
var i__74139 = (0);
while(true){
if((i__74139 < count__74138)){
var js_ns = chunk__74137.cljs$core$IIndexed$_nth$arity$2(null,i__74139);
var require_str_74407 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_74407);


var G__74408 = seq__74136;
var G__74409 = chunk__74137;
var G__74410 = count__74138;
var G__74411 = (i__74139 + (1));
seq__74136 = G__74408;
chunk__74137 = G__74409;
count__74138 = G__74410;
i__74139 = G__74411;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__74136);
if(temp__5735__auto__){
var seq__74136__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74136__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__74136__$1);
var G__74412 = cljs.core.chunk_rest(seq__74136__$1);
var G__74413 = c__4556__auto__;
var G__74414 = cljs.core.count(c__4556__auto__);
var G__74415 = (0);
seq__74136 = G__74412;
chunk__74137 = G__74413;
count__74138 = G__74414;
i__74139 = G__74415;
continue;
} else {
var js_ns = cljs.core.first(seq__74136__$1);
var require_str_74416 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_74416);


var G__74417 = cljs.core.next(seq__74136__$1);
var G__74418 = null;
var G__74419 = (0);
var G__74420 = (0);
seq__74136 = G__74417;
chunk__74137 = G__74418;
count__74138 = G__74419;
i__74139 = G__74420;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__74146){
var map__74147 = p__74146;
var map__74147__$1 = (((((!((map__74147 == null))))?(((((map__74147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74147):map__74147);
var msg = map__74147__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74147__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74147__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74150(s__74151){
return (new cljs.core.LazySeq(null,(function (){
var s__74151__$1 = s__74151;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__74151__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__74160 = cljs.core.first(xs__6292__auto__);
var map__74160__$1 = (((((!((map__74160 == null))))?(((((map__74160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74160):map__74160);
var src = map__74160__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74160__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74160__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__74151__$1,map__74160,map__74160__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__74147,map__74147__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74150_$_iter__74152(s__74153){
return (new cljs.core.LazySeq(null,((function (s__74151__$1,map__74160,map__74160__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__74147,map__74147__$1,msg,info,reload_info){
return (function (){
var s__74153__$1 = s__74153;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__74153__$1);
if(temp__5735__auto____$1){
var s__74153__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74153__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__74153__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__74155 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__74154 = (0);
while(true){
if((i__74154 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__74154);
cljs.core.chunk_append(b__74155,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__74422 = (i__74154 + (1));
i__74154 = G__74422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74155),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74150_$_iter__74152(cljs.core.chunk_rest(s__74153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74155),null);
}
} else {
var warning = cljs.core.first(s__74153__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74150_$_iter__74152(cljs.core.rest(s__74153__$2)));
}
} else {
return null;
}
break;
}
});})(s__74151__$1,map__74160,map__74160__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__74147,map__74147__$1,msg,info,reload_info))
,null,null));
});})(s__74151__$1,map__74160,map__74160__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__74147,map__74147__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74150(cljs.core.rest(s__74151__$1)));
} else {
var G__74423 = cljs.core.rest(s__74151__$1);
s__74151__$1 = G__74423;
continue;
}
} else {
var G__74424 = cljs.core.rest(s__74151__$1);
s__74151__$1 = G__74424;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__74174_74425 = cljs.core.seq(warnings);
var chunk__74175_74426 = null;
var count__74176_74427 = (0);
var i__74177_74428 = (0);
while(true){
if((i__74177_74428 < count__74176_74427)){
var map__74190_74429 = chunk__74175_74426.cljs$core$IIndexed$_nth$arity$2(null,i__74177_74428);
var map__74190_74430__$1 = (((((!((map__74190_74429 == null))))?(((((map__74190_74429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74190_74429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74190_74429):map__74190_74429);
var w_74431 = map__74190_74430__$1;
var msg_74432__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74190_74430__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_74433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74190_74430__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_74434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74190_74430__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_74435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74190_74430__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_74435)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_74433),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_74434),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_74432__$1)].join(''));


var G__74436 = seq__74174_74425;
var G__74437 = chunk__74175_74426;
var G__74438 = count__74176_74427;
var G__74439 = (i__74177_74428 + (1));
seq__74174_74425 = G__74436;
chunk__74175_74426 = G__74437;
count__74176_74427 = G__74438;
i__74177_74428 = G__74439;
continue;
} else {
var temp__5735__auto___74440 = cljs.core.seq(seq__74174_74425);
if(temp__5735__auto___74440){
var seq__74174_74441__$1 = temp__5735__auto___74440;
if(cljs.core.chunked_seq_QMARK_(seq__74174_74441__$1)){
var c__4556__auto___74442 = cljs.core.chunk_first(seq__74174_74441__$1);
var G__74443 = cljs.core.chunk_rest(seq__74174_74441__$1);
var G__74444 = c__4556__auto___74442;
var G__74445 = cljs.core.count(c__4556__auto___74442);
var G__74446 = (0);
seq__74174_74425 = G__74443;
chunk__74175_74426 = G__74444;
count__74176_74427 = G__74445;
i__74177_74428 = G__74446;
continue;
} else {
var map__74192_74447 = cljs.core.first(seq__74174_74441__$1);
var map__74192_74448__$1 = (((((!((map__74192_74447 == null))))?(((((map__74192_74447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74192_74447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74192_74447):map__74192_74447);
var w_74449 = map__74192_74448__$1;
var msg_74450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74192_74448__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_74451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74192_74448__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_74452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74192_74448__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_74453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74192_74448__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_74453)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_74451),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_74452),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_74450__$1)].join(''));


var G__74454 = cljs.core.next(seq__74174_74441__$1);
var G__74455 = null;
var G__74456 = (0);
var G__74457 = (0);
seq__74174_74425 = G__74454;
chunk__74175_74426 = G__74455;
count__74176_74427 = G__74456;
i__74177_74428 = G__74457;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__74145_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__74145_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__74205){
var map__74206 = p__74205;
var map__74206__$1 = (((((!((map__74206 == null))))?(((((map__74206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74206):map__74206);
var msg = map__74206__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74206__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__74210 = cljs.core.seq(updates);
var chunk__74212 = null;
var count__74213 = (0);
var i__74214 = (0);
while(true){
if((i__74214 < count__74213)){
var path = chunk__74212.cljs$core$IIndexed$_nth$arity$2(null,i__74214);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__74267_74459 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__74270_74460 = null;
var count__74271_74461 = (0);
var i__74272_74462 = (0);
while(true){
if((i__74272_74462 < count__74271_74461)){
var node_74463 = chunk__74270_74460.cljs$core$IIndexed$_nth$arity$2(null,i__74272_74462);
var path_match_74464 = shadow.cljs.devtools.client.browser.match_paths(node_74463.getAttribute("href"),path);
if(cljs.core.truth_(path_match_74464)){
var new_link_74465 = (function (){var G__74288 = node_74463.cloneNode(true);
G__74288.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_74464),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74288;
})();
(new_link_74465.onload = ((function (seq__74267_74459,chunk__74270_74460,count__74271_74461,i__74272_74462,seq__74210,chunk__74212,count__74213,i__74214,new_link_74465,path_match_74464,node_74463,path,map__74206,map__74206__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_74463);
});})(seq__74267_74459,chunk__74270_74460,count__74271_74461,i__74272_74462,seq__74210,chunk__74212,count__74213,i__74214,new_link_74465,path_match_74464,node_74463,path,map__74206,map__74206__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_74464], 0));

goog.dom.insertSiblingAfter(new_link_74465,node_74463);


var G__74470 = seq__74267_74459;
var G__74471 = chunk__74270_74460;
var G__74472 = count__74271_74461;
var G__74473 = (i__74272_74462 + (1));
seq__74267_74459 = G__74470;
chunk__74270_74460 = G__74471;
count__74271_74461 = G__74472;
i__74272_74462 = G__74473;
continue;
} else {
var G__74474 = seq__74267_74459;
var G__74475 = chunk__74270_74460;
var G__74476 = count__74271_74461;
var G__74477 = (i__74272_74462 + (1));
seq__74267_74459 = G__74474;
chunk__74270_74460 = G__74475;
count__74271_74461 = G__74476;
i__74272_74462 = G__74477;
continue;
}
} else {
var temp__5735__auto___74478 = cljs.core.seq(seq__74267_74459);
if(temp__5735__auto___74478){
var seq__74267_74479__$1 = temp__5735__auto___74478;
if(cljs.core.chunked_seq_QMARK_(seq__74267_74479__$1)){
var c__4556__auto___74480 = cljs.core.chunk_first(seq__74267_74479__$1);
var G__74481 = cljs.core.chunk_rest(seq__74267_74479__$1);
var G__74482 = c__4556__auto___74480;
var G__74483 = cljs.core.count(c__4556__auto___74480);
var G__74484 = (0);
seq__74267_74459 = G__74481;
chunk__74270_74460 = G__74482;
count__74271_74461 = G__74483;
i__74272_74462 = G__74484;
continue;
} else {
var node_74485 = cljs.core.first(seq__74267_74479__$1);
var path_match_74486 = shadow.cljs.devtools.client.browser.match_paths(node_74485.getAttribute("href"),path);
if(cljs.core.truth_(path_match_74486)){
var new_link_74487 = (function (){var G__74291 = node_74485.cloneNode(true);
G__74291.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_74486),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74291;
})();
(new_link_74487.onload = ((function (seq__74267_74459,chunk__74270_74460,count__74271_74461,i__74272_74462,seq__74210,chunk__74212,count__74213,i__74214,new_link_74487,path_match_74486,node_74485,seq__74267_74479__$1,temp__5735__auto___74478,path,map__74206,map__74206__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_74485);
});})(seq__74267_74459,chunk__74270_74460,count__74271_74461,i__74272_74462,seq__74210,chunk__74212,count__74213,i__74214,new_link_74487,path_match_74486,node_74485,seq__74267_74479__$1,temp__5735__auto___74478,path,map__74206,map__74206__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_74486], 0));

goog.dom.insertSiblingAfter(new_link_74487,node_74485);


var G__74490 = cljs.core.next(seq__74267_74479__$1);
var G__74491 = null;
var G__74492 = (0);
var G__74493 = (0);
seq__74267_74459 = G__74490;
chunk__74270_74460 = G__74491;
count__74271_74461 = G__74492;
i__74272_74462 = G__74493;
continue;
} else {
var G__74494 = cljs.core.next(seq__74267_74479__$1);
var G__74495 = null;
var G__74496 = (0);
var G__74497 = (0);
seq__74267_74459 = G__74494;
chunk__74270_74460 = G__74495;
count__74271_74461 = G__74496;
i__74272_74462 = G__74497;
continue;
}
}
} else {
}
}
break;
}


var G__74498 = seq__74210;
var G__74499 = chunk__74212;
var G__74500 = count__74213;
var G__74501 = (i__74214 + (1));
seq__74210 = G__74498;
chunk__74212 = G__74499;
count__74213 = G__74500;
i__74214 = G__74501;
continue;
} else {
var G__74502 = seq__74210;
var G__74503 = chunk__74212;
var G__74504 = count__74213;
var G__74505 = (i__74214 + (1));
seq__74210 = G__74502;
chunk__74212 = G__74503;
count__74213 = G__74504;
i__74214 = G__74505;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__74210);
if(temp__5735__auto__){
var seq__74210__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74210__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__74210__$1);
var G__74506 = cljs.core.chunk_rest(seq__74210__$1);
var G__74507 = c__4556__auto__;
var G__74508 = cljs.core.count(c__4556__auto__);
var G__74509 = (0);
seq__74210 = G__74506;
chunk__74212 = G__74507;
count__74213 = G__74508;
i__74214 = G__74509;
continue;
} else {
var path = cljs.core.first(seq__74210__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__74300_74510 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__74303_74511 = null;
var count__74304_74512 = (0);
var i__74305_74513 = (0);
while(true){
if((i__74305_74513 < count__74304_74512)){
var node_74514 = chunk__74303_74511.cljs$core$IIndexed$_nth$arity$2(null,i__74305_74513);
var path_match_74515 = shadow.cljs.devtools.client.browser.match_paths(node_74514.getAttribute("href"),path);
if(cljs.core.truth_(path_match_74515)){
var new_link_74516 = (function (){var G__74322 = node_74514.cloneNode(true);
G__74322.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_74515),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74322;
})();
(new_link_74516.onload = ((function (seq__74300_74510,chunk__74303_74511,count__74304_74512,i__74305_74513,seq__74210,chunk__74212,count__74213,i__74214,new_link_74516,path_match_74515,node_74514,path,seq__74210__$1,temp__5735__auto__,map__74206,map__74206__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_74514);
});})(seq__74300_74510,chunk__74303_74511,count__74304_74512,i__74305_74513,seq__74210,chunk__74212,count__74213,i__74214,new_link_74516,path_match_74515,node_74514,path,seq__74210__$1,temp__5735__auto__,map__74206,map__74206__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_74515], 0));

goog.dom.insertSiblingAfter(new_link_74516,node_74514);


var G__74517 = seq__74300_74510;
var G__74518 = chunk__74303_74511;
var G__74519 = count__74304_74512;
var G__74520 = (i__74305_74513 + (1));
seq__74300_74510 = G__74517;
chunk__74303_74511 = G__74518;
count__74304_74512 = G__74519;
i__74305_74513 = G__74520;
continue;
} else {
var G__74521 = seq__74300_74510;
var G__74522 = chunk__74303_74511;
var G__74523 = count__74304_74512;
var G__74524 = (i__74305_74513 + (1));
seq__74300_74510 = G__74521;
chunk__74303_74511 = G__74522;
count__74304_74512 = G__74523;
i__74305_74513 = G__74524;
continue;
}
} else {
var temp__5735__auto___74525__$1 = cljs.core.seq(seq__74300_74510);
if(temp__5735__auto___74525__$1){
var seq__74300_74526__$1 = temp__5735__auto___74525__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74300_74526__$1)){
var c__4556__auto___74527 = cljs.core.chunk_first(seq__74300_74526__$1);
var G__74528 = cljs.core.chunk_rest(seq__74300_74526__$1);
var G__74529 = c__4556__auto___74527;
var G__74530 = cljs.core.count(c__4556__auto___74527);
var G__74531 = (0);
seq__74300_74510 = G__74528;
chunk__74303_74511 = G__74529;
count__74304_74512 = G__74530;
i__74305_74513 = G__74531;
continue;
} else {
var node_74532 = cljs.core.first(seq__74300_74526__$1);
var path_match_74533 = shadow.cljs.devtools.client.browser.match_paths(node_74532.getAttribute("href"),path);
if(cljs.core.truth_(path_match_74533)){
var new_link_74534 = (function (){var G__74323 = node_74532.cloneNode(true);
G__74323.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_74533),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74323;
})();
(new_link_74534.onload = ((function (seq__74300_74510,chunk__74303_74511,count__74304_74512,i__74305_74513,seq__74210,chunk__74212,count__74213,i__74214,new_link_74534,path_match_74533,node_74532,seq__74300_74526__$1,temp__5735__auto___74525__$1,path,seq__74210__$1,temp__5735__auto__,map__74206,map__74206__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_74532);
});})(seq__74300_74510,chunk__74303_74511,count__74304_74512,i__74305_74513,seq__74210,chunk__74212,count__74213,i__74214,new_link_74534,path_match_74533,node_74532,seq__74300_74526__$1,temp__5735__auto___74525__$1,path,seq__74210__$1,temp__5735__auto__,map__74206,map__74206__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_74533], 0));

goog.dom.insertSiblingAfter(new_link_74534,node_74532);


var G__74536 = cljs.core.next(seq__74300_74526__$1);
var G__74537 = null;
var G__74538 = (0);
var G__74539 = (0);
seq__74300_74510 = G__74536;
chunk__74303_74511 = G__74537;
count__74304_74512 = G__74538;
i__74305_74513 = G__74539;
continue;
} else {
var G__74540 = cljs.core.next(seq__74300_74526__$1);
var G__74541 = null;
var G__74542 = (0);
var G__74543 = (0);
seq__74300_74510 = G__74540;
chunk__74303_74511 = G__74541;
count__74304_74512 = G__74542;
i__74305_74513 = G__74543;
continue;
}
}
} else {
}
}
break;
}


var G__74546 = cljs.core.next(seq__74210__$1);
var G__74547 = null;
var G__74548 = (0);
var G__74549 = (0);
seq__74210 = G__74546;
chunk__74212 = G__74547;
count__74213 = G__74548;
i__74214 = G__74549;
continue;
} else {
var G__74550 = cljs.core.next(seq__74210__$1);
var G__74551 = null;
var G__74552 = (0);
var G__74553 = (0);
seq__74210 = G__74550;
chunk__74212 = G__74551;
count__74213 = G__74552;
i__74214 = G__74553;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__74326){
var map__74327 = p__74326;
var map__74327__$1 = (((((!((map__74327 == null))))?(((((map__74327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74327):map__74327);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74327__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__74332){
var map__74333 = p__74332;
var map__74333__$1 = (((((!((map__74333 == null))))?(((((map__74333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74333):map__74333);
var _ = map__74333__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74333__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__74339,done,error){
var map__74340 = p__74339;
var map__74340__$1 = (((((!((map__74340 == null))))?(((((map__74340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74340):map__74340);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74340__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__74343,done,error){
var map__74344 = p__74343;
var map__74344__$1 = (((((!((map__74344 == null))))?(((((map__74344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74344):map__74344);
var msg = map__74344__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74344__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74344__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74344__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__74353){
var map__74354 = p__74353;
var map__74354__$1 = (((((!((map__74354 == null))))?(((((map__74354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74354):map__74354);
var src = map__74354__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74354__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__74358 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__74358) : done.call(null,G__74358));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__74359){
var map__74360 = p__74359;
var map__74360__$1 = (((((!((map__74360 == null))))?(((((map__74360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74360):map__74360);
var msg__$1 = map__74360__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74360__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e74362){var ex = e74362;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__74365){
var map__74366 = p__74365;
var map__74366__$1 = (((((!((map__74366 == null))))?(((((map__74366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74366):map__74366);
var env = map__74366__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74366__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__74369){
var map__74370 = p__74369;
var map__74370__$1 = (((((!((map__74370 == null))))?(((((map__74370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74370):map__74370);
var msg = map__74370__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74370__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__74372){
var map__74373 = p__74372;
var map__74373__$1 = (((((!((map__74373 == null))))?(((((map__74373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74373):map__74373);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74373__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74373__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__74375){
var map__74376 = p__74375;
var map__74376__$1 = (((((!((map__74376 == null))))?(((((map__74376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74376):map__74376);
var svc = map__74376__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74376__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
