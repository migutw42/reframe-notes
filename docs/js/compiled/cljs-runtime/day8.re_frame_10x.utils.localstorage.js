goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__65894 = arguments.length;
switch (G__65894) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__65916 = cljs.core.seq(Object.keys(localStorage));
var chunk__65917 = null;
var count__65918 = (0);
var i__65919 = (0);
while(true){
if((i__65919 < count__65918)){
var k = chunk__65917.cljs$core$IIndexed$_nth$arity$2(null,i__65919);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__65956 = seq__65916;
var G__65957 = chunk__65917;
var G__65958 = count__65918;
var G__65959 = (i__65919 + (1));
seq__65916 = G__65956;
chunk__65917 = G__65957;
count__65918 = G__65958;
i__65919 = G__65959;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65916);
if(temp__5735__auto__){
var seq__65916__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65916__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65916__$1);
var G__65960 = cljs.core.chunk_rest(seq__65916__$1);
var G__65961 = c__4556__auto__;
var G__65962 = cljs.core.count(c__4556__auto__);
var G__65963 = (0);
seq__65916 = G__65960;
chunk__65917 = G__65961;
count__65918 = G__65962;
i__65919 = G__65963;
continue;
} else {
var k = cljs.core.first(seq__65916__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__65966 = cljs.core.next(seq__65916__$1);
var G__65967 = null;
var G__65968 = (0);
var G__65969 = (0);
seq__65916 = G__65966;
chunk__65917 = G__65967;
count__65918 = G__65968;
i__65919 = G__65969;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
