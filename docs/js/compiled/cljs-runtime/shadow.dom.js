goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_72044 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_72044(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_72049 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_72049(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__71295 = coll;
var G__71296 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__71295,G__71296) : shadow.dom.lazy_native_coll_seq.call(null,G__71295,G__71296));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__71303 = arguments.length;
switch (G__71303) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__71307 = arguments.length;
switch (G__71307) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__71314 = arguments.length;
switch (G__71314) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__71323 = arguments.length;
switch (G__71323) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__71330 = arguments.length;
switch (G__71330) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__71333 = arguments.length;
switch (G__71333) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e71343){if((e71343 instanceof Object)){
var e = e71343;
return console.log("didnt support attachEvent",el,e);
} else {
throw e71343;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__71350 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__71351 = null;
var count__71352 = (0);
var i__71353 = (0);
while(true){
if((i__71353 < count__71352)){
var el = chunk__71351.cljs$core$IIndexed$_nth$arity$2(null,i__71353);
var handler_72098__$1 = ((function (seq__71350,chunk__71351,count__71352,i__71353,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__71350,chunk__71351,count__71352,i__71353,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_72098__$1);


var G__72099 = seq__71350;
var G__72100 = chunk__71351;
var G__72101 = count__71352;
var G__72102 = (i__71353 + (1));
seq__71350 = G__72099;
chunk__71351 = G__72100;
count__71352 = G__72101;
i__71353 = G__72102;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71350);
if(temp__5735__auto__){
var seq__71350__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71350__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71350__$1);
var G__72105 = cljs.core.chunk_rest(seq__71350__$1);
var G__72106 = c__4556__auto__;
var G__72107 = cljs.core.count(c__4556__auto__);
var G__72108 = (0);
seq__71350 = G__72105;
chunk__71351 = G__72106;
count__71352 = G__72107;
i__71353 = G__72108;
continue;
} else {
var el = cljs.core.first(seq__71350__$1);
var handler_72109__$1 = ((function (seq__71350,chunk__71351,count__71352,i__71353,el,seq__71350__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__71350,chunk__71351,count__71352,i__71353,el,seq__71350__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_72109__$1);


var G__72112 = cljs.core.next(seq__71350__$1);
var G__72113 = null;
var G__72114 = (0);
var G__72115 = (0);
seq__71350 = G__72112;
chunk__71351 = G__72113;
count__71352 = G__72114;
i__71353 = G__72115;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__71364 = arguments.length;
switch (G__71364) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__71371 = cljs.core.seq(events);
var chunk__71372 = null;
var count__71373 = (0);
var i__71374 = (0);
while(true){
if((i__71374 < count__71373)){
var vec__71385 = chunk__71372.cljs$core$IIndexed$_nth$arity$2(null,i__71374);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71385,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__72121 = seq__71371;
var G__72122 = chunk__71372;
var G__72123 = count__71373;
var G__72124 = (i__71374 + (1));
seq__71371 = G__72121;
chunk__71372 = G__72122;
count__71373 = G__72123;
i__71374 = G__72124;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71371);
if(temp__5735__auto__){
var seq__71371__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71371__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71371__$1);
var G__72125 = cljs.core.chunk_rest(seq__71371__$1);
var G__72126 = c__4556__auto__;
var G__72127 = cljs.core.count(c__4556__auto__);
var G__72128 = (0);
seq__71371 = G__72125;
chunk__71372 = G__72126;
count__71373 = G__72127;
i__71374 = G__72128;
continue;
} else {
var vec__71388 = cljs.core.first(seq__71371__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71388,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71388,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__72129 = cljs.core.next(seq__71371__$1);
var G__72130 = null;
var G__72131 = (0);
var G__72132 = (0);
seq__71371 = G__72129;
chunk__71372 = G__72130;
count__71373 = G__72131;
i__71374 = G__72132;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__71393 = cljs.core.seq(styles);
var chunk__71394 = null;
var count__71395 = (0);
var i__71396 = (0);
while(true){
if((i__71396 < count__71395)){
var vec__71407 = chunk__71394.cljs$core$IIndexed$_nth$arity$2(null,i__71396);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71407,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71407,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__72133 = seq__71393;
var G__72134 = chunk__71394;
var G__72135 = count__71395;
var G__72136 = (i__71396 + (1));
seq__71393 = G__72133;
chunk__71394 = G__72134;
count__71395 = G__72135;
i__71396 = G__72136;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71393);
if(temp__5735__auto__){
var seq__71393__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71393__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71393__$1);
var G__72140 = cljs.core.chunk_rest(seq__71393__$1);
var G__72141 = c__4556__auto__;
var G__72142 = cljs.core.count(c__4556__auto__);
var G__72143 = (0);
seq__71393 = G__72140;
chunk__71394 = G__72141;
count__71395 = G__72142;
i__71396 = G__72143;
continue;
} else {
var vec__71412 = cljs.core.first(seq__71393__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71412,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__72145 = cljs.core.next(seq__71393__$1);
var G__72146 = null;
var G__72147 = (0);
var G__72148 = (0);
seq__71393 = G__72145;
chunk__71394 = G__72146;
count__71395 = G__72147;
i__71396 = G__72148;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__71419_72149 = key;
var G__71419_72150__$1 = (((G__71419_72149 instanceof cljs.core.Keyword))?G__71419_72149.fqn:null);
switch (G__71419_72150__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_72155 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_72155,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_72155,"aria-");
}
})())){
el.setAttribute(ks_72155,value);
} else {
(el[ks_72155] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__71437){
var map__71438 = p__71437;
var map__71438__$1 = (((((!((map__71438 == null))))?(((((map__71438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71438):map__71438);
var props = map__71438__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71438__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__71440 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71440,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71440,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71440,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__71444 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__71444,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__71444;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__71446 = arguments.length;
switch (G__71446) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__71451){
var vec__71453 = p__71451;
var seq__71454 = cljs.core.seq(vec__71453);
var first__71455 = cljs.core.first(seq__71454);
var seq__71454__$1 = cljs.core.next(seq__71454);
var nn = first__71455;
var first__71455__$1 = cljs.core.first(seq__71454__$1);
var seq__71454__$2 = cljs.core.next(seq__71454__$1);
var np = first__71455__$1;
var nc = seq__71454__$2;
var node = vec__71453;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71460 = nn;
var G__71461 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__71460,G__71461) : create_fn.call(null,G__71460,G__71461));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71463 = nn;
var G__71464 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__71463,G__71464) : create_fn.call(null,G__71463,G__71464));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__71468 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71468,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71468,(1),null);
var seq__71472_72173 = cljs.core.seq(node_children);
var chunk__71473_72174 = null;
var count__71474_72175 = (0);
var i__71475_72176 = (0);
while(true){
if((i__71475_72176 < count__71474_72175)){
var child_struct_72178 = chunk__71473_72174.cljs$core$IIndexed$_nth$arity$2(null,i__71475_72176);
var children_72179 = shadow.dom.dom_node(child_struct_72178);
if(cljs.core.seq_QMARK_(children_72179)){
var seq__71504_72181 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_72179));
var chunk__71513_72182 = null;
var count__71514_72183 = (0);
var i__71515_72184 = (0);
while(true){
if((i__71515_72184 < count__71514_72183)){
var child_72185 = chunk__71513_72182.cljs$core$IIndexed$_nth$arity$2(null,i__71515_72184);
if(cljs.core.truth_(child_72185)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72185);


var G__72188 = seq__71504_72181;
var G__72189 = chunk__71513_72182;
var G__72190 = count__71514_72183;
var G__72191 = (i__71515_72184 + (1));
seq__71504_72181 = G__72188;
chunk__71513_72182 = G__72189;
count__71514_72183 = G__72190;
i__71515_72184 = G__72191;
continue;
} else {
var G__72194 = seq__71504_72181;
var G__72195 = chunk__71513_72182;
var G__72196 = count__71514_72183;
var G__72197 = (i__71515_72184 + (1));
seq__71504_72181 = G__72194;
chunk__71513_72182 = G__72195;
count__71514_72183 = G__72196;
i__71515_72184 = G__72197;
continue;
}
} else {
var temp__5735__auto___72198 = cljs.core.seq(seq__71504_72181);
if(temp__5735__auto___72198){
var seq__71504_72199__$1 = temp__5735__auto___72198;
if(cljs.core.chunked_seq_QMARK_(seq__71504_72199__$1)){
var c__4556__auto___72200 = cljs.core.chunk_first(seq__71504_72199__$1);
var G__72202 = cljs.core.chunk_rest(seq__71504_72199__$1);
var G__72203 = c__4556__auto___72200;
var G__72204 = cljs.core.count(c__4556__auto___72200);
var G__72205 = (0);
seq__71504_72181 = G__72202;
chunk__71513_72182 = G__72203;
count__71514_72183 = G__72204;
i__71515_72184 = G__72205;
continue;
} else {
var child_72206 = cljs.core.first(seq__71504_72199__$1);
if(cljs.core.truth_(child_72206)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72206);


var G__72207 = cljs.core.next(seq__71504_72199__$1);
var G__72208 = null;
var G__72209 = (0);
var G__72210 = (0);
seq__71504_72181 = G__72207;
chunk__71513_72182 = G__72208;
count__71514_72183 = G__72209;
i__71515_72184 = G__72210;
continue;
} else {
var G__72212 = cljs.core.next(seq__71504_72199__$1);
var G__72213 = null;
var G__72214 = (0);
var G__72215 = (0);
seq__71504_72181 = G__72212;
chunk__71513_72182 = G__72213;
count__71514_72183 = G__72214;
i__71515_72184 = G__72215;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_72179);
}


var G__72216 = seq__71472_72173;
var G__72217 = chunk__71473_72174;
var G__72218 = count__71474_72175;
var G__72219 = (i__71475_72176 + (1));
seq__71472_72173 = G__72216;
chunk__71473_72174 = G__72217;
count__71474_72175 = G__72218;
i__71475_72176 = G__72219;
continue;
} else {
var temp__5735__auto___72220 = cljs.core.seq(seq__71472_72173);
if(temp__5735__auto___72220){
var seq__71472_72222__$1 = temp__5735__auto___72220;
if(cljs.core.chunked_seq_QMARK_(seq__71472_72222__$1)){
var c__4556__auto___72223 = cljs.core.chunk_first(seq__71472_72222__$1);
var G__72224 = cljs.core.chunk_rest(seq__71472_72222__$1);
var G__72225 = c__4556__auto___72223;
var G__72226 = cljs.core.count(c__4556__auto___72223);
var G__72227 = (0);
seq__71472_72173 = G__72224;
chunk__71473_72174 = G__72225;
count__71474_72175 = G__72226;
i__71475_72176 = G__72227;
continue;
} else {
var child_struct_72230 = cljs.core.first(seq__71472_72222__$1);
var children_72231 = shadow.dom.dom_node(child_struct_72230);
if(cljs.core.seq_QMARK_(children_72231)){
var seq__71524_72234 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_72231));
var chunk__71526_72235 = null;
var count__71527_72236 = (0);
var i__71528_72237 = (0);
while(true){
if((i__71528_72237 < count__71527_72236)){
var child_72238 = chunk__71526_72235.cljs$core$IIndexed$_nth$arity$2(null,i__71528_72237);
if(cljs.core.truth_(child_72238)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72238);


var G__72240 = seq__71524_72234;
var G__72241 = chunk__71526_72235;
var G__72242 = count__71527_72236;
var G__72243 = (i__71528_72237 + (1));
seq__71524_72234 = G__72240;
chunk__71526_72235 = G__72241;
count__71527_72236 = G__72242;
i__71528_72237 = G__72243;
continue;
} else {
var G__72244 = seq__71524_72234;
var G__72245 = chunk__71526_72235;
var G__72246 = count__71527_72236;
var G__72247 = (i__71528_72237 + (1));
seq__71524_72234 = G__72244;
chunk__71526_72235 = G__72245;
count__71527_72236 = G__72246;
i__71528_72237 = G__72247;
continue;
}
} else {
var temp__5735__auto___72248__$1 = cljs.core.seq(seq__71524_72234);
if(temp__5735__auto___72248__$1){
var seq__71524_72250__$1 = temp__5735__auto___72248__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71524_72250__$1)){
var c__4556__auto___72252 = cljs.core.chunk_first(seq__71524_72250__$1);
var G__72253 = cljs.core.chunk_rest(seq__71524_72250__$1);
var G__72254 = c__4556__auto___72252;
var G__72255 = cljs.core.count(c__4556__auto___72252);
var G__72256 = (0);
seq__71524_72234 = G__72253;
chunk__71526_72235 = G__72254;
count__71527_72236 = G__72255;
i__71528_72237 = G__72256;
continue;
} else {
var child_72258 = cljs.core.first(seq__71524_72250__$1);
if(cljs.core.truth_(child_72258)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_72258);


var G__72259 = cljs.core.next(seq__71524_72250__$1);
var G__72260 = null;
var G__72261 = (0);
var G__72262 = (0);
seq__71524_72234 = G__72259;
chunk__71526_72235 = G__72260;
count__71527_72236 = G__72261;
i__71528_72237 = G__72262;
continue;
} else {
var G__72263 = cljs.core.next(seq__71524_72250__$1);
var G__72264 = null;
var G__72265 = (0);
var G__72266 = (0);
seq__71524_72234 = G__72263;
chunk__71526_72235 = G__72264;
count__71527_72236 = G__72265;
i__71528_72237 = G__72266;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_72231);
}


var G__72267 = cljs.core.next(seq__71472_72222__$1);
var G__72268 = null;
var G__72269 = (0);
var G__72270 = (0);
seq__71472_72173 = G__72267;
chunk__71473_72174 = G__72268;
count__71474_72175 = G__72269;
i__71475_72176 = G__72270;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__71549 = cljs.core.seq(node);
var chunk__71550 = null;
var count__71551 = (0);
var i__71552 = (0);
while(true){
if((i__71552 < count__71551)){
var n = chunk__71550.cljs$core$IIndexed$_nth$arity$2(null,i__71552);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__72280 = seq__71549;
var G__72281 = chunk__71550;
var G__72282 = count__71551;
var G__72283 = (i__71552 + (1));
seq__71549 = G__72280;
chunk__71550 = G__72281;
count__71551 = G__72282;
i__71552 = G__72283;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71549);
if(temp__5735__auto__){
var seq__71549__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71549__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71549__$1);
var G__72284 = cljs.core.chunk_rest(seq__71549__$1);
var G__72285 = c__4556__auto__;
var G__72286 = cljs.core.count(c__4556__auto__);
var G__72287 = (0);
seq__71549 = G__72284;
chunk__71550 = G__72285;
count__71551 = G__72286;
i__71552 = G__72287;
continue;
} else {
var n = cljs.core.first(seq__71549__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__72288 = cljs.core.next(seq__71549__$1);
var G__72289 = null;
var G__72290 = (0);
var G__72291 = (0);
seq__71549 = G__72288;
chunk__71550 = G__72289;
count__71551 = G__72290;
i__71552 = G__72291;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__71557 = arguments.length;
switch (G__71557) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__71560 = arguments.length;
switch (G__71560) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__71563 = arguments.length;
switch (G__71563) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72310 = arguments.length;
var i__4737__auto___72311 = (0);
while(true){
if((i__4737__auto___72311 < len__4736__auto___72310)){
args__4742__auto__.push((arguments[i__4737__auto___72311]));

var G__72312 = (i__4737__auto___72311 + (1));
i__4737__auto___72311 = G__72312;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__71589_72313 = cljs.core.seq(nodes);
var chunk__71590_72314 = null;
var count__71591_72315 = (0);
var i__71592_72316 = (0);
while(true){
if((i__71592_72316 < count__71591_72315)){
var node_72317 = chunk__71590_72314.cljs$core$IIndexed$_nth$arity$2(null,i__71592_72316);
fragment.appendChild(shadow.dom._to_dom(node_72317));


var G__72318 = seq__71589_72313;
var G__72319 = chunk__71590_72314;
var G__72320 = count__71591_72315;
var G__72321 = (i__71592_72316 + (1));
seq__71589_72313 = G__72318;
chunk__71590_72314 = G__72319;
count__71591_72315 = G__72320;
i__71592_72316 = G__72321;
continue;
} else {
var temp__5735__auto___72322 = cljs.core.seq(seq__71589_72313);
if(temp__5735__auto___72322){
var seq__71589_72323__$1 = temp__5735__auto___72322;
if(cljs.core.chunked_seq_QMARK_(seq__71589_72323__$1)){
var c__4556__auto___72324 = cljs.core.chunk_first(seq__71589_72323__$1);
var G__72325 = cljs.core.chunk_rest(seq__71589_72323__$1);
var G__72326 = c__4556__auto___72324;
var G__72327 = cljs.core.count(c__4556__auto___72324);
var G__72328 = (0);
seq__71589_72313 = G__72325;
chunk__71590_72314 = G__72326;
count__71591_72315 = G__72327;
i__71592_72316 = G__72328;
continue;
} else {
var node_72329 = cljs.core.first(seq__71589_72323__$1);
fragment.appendChild(shadow.dom._to_dom(node_72329));


var G__72330 = cljs.core.next(seq__71589_72323__$1);
var G__72331 = null;
var G__72332 = (0);
var G__72333 = (0);
seq__71589_72313 = G__72330;
chunk__71590_72314 = G__72331;
count__71591_72315 = G__72332;
i__71592_72316 = G__72333;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq71585){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71585));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__71623_72337 = cljs.core.seq(scripts);
var chunk__71624_72338 = null;
var count__71625_72339 = (0);
var i__71626_72340 = (0);
while(true){
if((i__71626_72340 < count__71625_72339)){
var vec__71641_72342 = chunk__71624_72338.cljs$core$IIndexed$_nth$arity$2(null,i__71626_72340);
var script_tag_72343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71641_72342,(0),null);
var script_body_72344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71641_72342,(1),null);
eval(script_body_72344);


var G__72346 = seq__71623_72337;
var G__72347 = chunk__71624_72338;
var G__72348 = count__71625_72339;
var G__72349 = (i__71626_72340 + (1));
seq__71623_72337 = G__72346;
chunk__71624_72338 = G__72347;
count__71625_72339 = G__72348;
i__71626_72340 = G__72349;
continue;
} else {
var temp__5735__auto___72350 = cljs.core.seq(seq__71623_72337);
if(temp__5735__auto___72350){
var seq__71623_72351__$1 = temp__5735__auto___72350;
if(cljs.core.chunked_seq_QMARK_(seq__71623_72351__$1)){
var c__4556__auto___72352 = cljs.core.chunk_first(seq__71623_72351__$1);
var G__72353 = cljs.core.chunk_rest(seq__71623_72351__$1);
var G__72354 = c__4556__auto___72352;
var G__72355 = cljs.core.count(c__4556__auto___72352);
var G__72356 = (0);
seq__71623_72337 = G__72353;
chunk__71624_72338 = G__72354;
count__71625_72339 = G__72355;
i__71626_72340 = G__72356;
continue;
} else {
var vec__71648_72357 = cljs.core.first(seq__71623_72351__$1);
var script_tag_72358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71648_72357,(0),null);
var script_body_72359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71648_72357,(1),null);
eval(script_body_72359);


var G__72360 = cljs.core.next(seq__71623_72351__$1);
var G__72361 = null;
var G__72362 = (0);
var G__72363 = (0);
seq__71623_72337 = G__72360;
chunk__71624_72338 = G__72361;
count__71625_72339 = G__72362;
i__71626_72340 = G__72363;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__71657){
var vec__71659 = p__71657;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71659,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71659,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__71673 = arguments.length;
switch (G__71673) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__71703 = cljs.core.seq(style_keys);
var chunk__71704 = null;
var count__71705 = (0);
var i__71706 = (0);
while(true){
if((i__71706 < count__71705)){
var it = chunk__71704.cljs$core$IIndexed$_nth$arity$2(null,i__71706);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__72380 = seq__71703;
var G__72381 = chunk__71704;
var G__72382 = count__71705;
var G__72383 = (i__71706 + (1));
seq__71703 = G__72380;
chunk__71704 = G__72381;
count__71705 = G__72382;
i__71706 = G__72383;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71703);
if(temp__5735__auto__){
var seq__71703__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71703__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71703__$1);
var G__72386 = cljs.core.chunk_rest(seq__71703__$1);
var G__72387 = c__4556__auto__;
var G__72388 = cljs.core.count(c__4556__auto__);
var G__72389 = (0);
seq__71703 = G__72386;
chunk__71704 = G__72387;
count__71705 = G__72388;
i__71706 = G__72389;
continue;
} else {
var it = cljs.core.first(seq__71703__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__72394 = cljs.core.next(seq__71703__$1);
var G__72395 = null;
var G__72396 = (0);
var G__72397 = (0);
seq__71703 = G__72394;
chunk__71704 = G__72395;
count__71705 = G__72396;
i__71706 = G__72397;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k71723,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__71731 = k71723;
var G__71731__$1 = (((G__71731 instanceof cljs.core.Keyword))?G__71731.fqn:null);
switch (G__71731__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71723,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__71732){
var vec__71733 = p__71732;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71733,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71733,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71722){
var self__ = this;
var G__71722__$1 = this;
return (new cljs.core.RecordIter((0),G__71722__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71724,other71725){
var self__ = this;
var this71724__$1 = this;
return (((!((other71725 == null)))) && ((this71724__$1.constructor === other71725.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71724__$1.x,other71725.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71724__$1.y,other71725.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71724__$1.__extmap,other71725.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__71722){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__71745 = cljs.core.keyword_identical_QMARK_;
var expr__71746 = k__4388__auto__;
if(cljs.core.truth_((pred__71745.cljs$core$IFn$_invoke$arity$2 ? pred__71745.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__71746) : pred__71745.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__71746)))){
return (new shadow.dom.Coordinate(G__71722,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71745.cljs$core$IFn$_invoke$arity$2 ? pred__71745.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__71746) : pred__71745.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__71746)))){
return (new shadow.dom.Coordinate(self__.x,G__71722,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__71722),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__71722){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__71722,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__71726){
var extmap__4419__auto__ = (function (){var G__71755 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71726,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__71726)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71755);
} else {
return G__71755;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__71726),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__71726),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k71759,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__71766 = k71759;
var G__71766__$1 = (((G__71766 instanceof cljs.core.Keyword))?G__71766.fqn:null);
switch (G__71766__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71759,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__71767){
var vec__71768 = p__71767;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71768,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71768,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71758){
var self__ = this;
var G__71758__$1 = this;
return (new cljs.core.RecordIter((0),G__71758__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71760,other71761){
var self__ = this;
var this71760__$1 = this;
return (((!((other71761 == null)))) && ((this71760__$1.constructor === other71761.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71760__$1.w,other71761.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71760__$1.h,other71761.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71760__$1.__extmap,other71761.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__71758){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__71799 = cljs.core.keyword_identical_QMARK_;
var expr__71800 = k__4388__auto__;
if(cljs.core.truth_((pred__71799.cljs$core$IFn$_invoke$arity$2 ? pred__71799.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__71800) : pred__71799.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__71800)))){
return (new shadow.dom.Size(G__71758,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71799.cljs$core$IFn$_invoke$arity$2 ? pred__71799.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__71800) : pred__71799.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__71800)))){
return (new shadow.dom.Size(self__.w,G__71758,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__71758),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__71758){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__71758,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__71763){
var extmap__4419__auto__ = (function (){var G__71819 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71763,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__71763)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71819);
} else {
return G__71819;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__71763),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__71763),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__72482 = (i + (1));
var G__72483 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__72482;
ret = G__72483;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__71850){
var vec__71852 = p__71850;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71852,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71852,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__71856 = arguments.length;
switch (G__71856) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__72494 = ps;
var G__72495 = (i + (1));
el__$1 = G__72494;
i = G__72495;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__71869 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71869,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71869,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71869,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__71873_72499 = cljs.core.seq(props);
var chunk__71874_72500 = null;
var count__71875_72501 = (0);
var i__71876_72502 = (0);
while(true){
if((i__71876_72502 < count__71875_72501)){
var vec__71883_72503 = chunk__71874_72500.cljs$core$IIndexed$_nth$arity$2(null,i__71876_72502);
var k_72504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71883_72503,(0),null);
var v_72505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71883_72503,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_72504);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_72504),v_72505);


var G__72506 = seq__71873_72499;
var G__72507 = chunk__71874_72500;
var G__72508 = count__71875_72501;
var G__72509 = (i__71876_72502 + (1));
seq__71873_72499 = G__72506;
chunk__71874_72500 = G__72507;
count__71875_72501 = G__72508;
i__71876_72502 = G__72509;
continue;
} else {
var temp__5735__auto___72510 = cljs.core.seq(seq__71873_72499);
if(temp__5735__auto___72510){
var seq__71873_72511__$1 = temp__5735__auto___72510;
if(cljs.core.chunked_seq_QMARK_(seq__71873_72511__$1)){
var c__4556__auto___72513 = cljs.core.chunk_first(seq__71873_72511__$1);
var G__72514 = cljs.core.chunk_rest(seq__71873_72511__$1);
var G__72515 = c__4556__auto___72513;
var G__72516 = cljs.core.count(c__4556__auto___72513);
var G__72517 = (0);
seq__71873_72499 = G__72514;
chunk__71874_72500 = G__72515;
count__71875_72501 = G__72516;
i__71876_72502 = G__72517;
continue;
} else {
var vec__71889_72520 = cljs.core.first(seq__71873_72511__$1);
var k_72521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71889_72520,(0),null);
var v_72522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71889_72520,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_72521);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_72521),v_72522);


var G__72523 = cljs.core.next(seq__71873_72511__$1);
var G__72524 = null;
var G__72525 = (0);
var G__72526 = (0);
seq__71873_72499 = G__72523;
chunk__71874_72500 = G__72524;
count__71875_72501 = G__72525;
i__71876_72502 = G__72526;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__71899 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71899,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71899,(1),null);
var seq__71903_72531 = cljs.core.seq(node_children);
var chunk__71905_72532 = null;
var count__71906_72533 = (0);
var i__71907_72534 = (0);
while(true){
if((i__71907_72534 < count__71906_72533)){
var child_struct_72535 = chunk__71905_72532.cljs$core$IIndexed$_nth$arity$2(null,i__71907_72534);
if((!((child_struct_72535 == null)))){
if(typeof child_struct_72535 === 'string'){
var text_72537 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_72537),child_struct_72535].join(''));
} else {
var children_72539 = shadow.dom.svg_node(child_struct_72535);
if(cljs.core.seq_QMARK_(children_72539)){
var seq__71951_72540 = cljs.core.seq(children_72539);
var chunk__71953_72541 = null;
var count__71954_72542 = (0);
var i__71955_72543 = (0);
while(true){
if((i__71955_72543 < count__71954_72542)){
var child_72550 = chunk__71953_72541.cljs$core$IIndexed$_nth$arity$2(null,i__71955_72543);
if(cljs.core.truth_(child_72550)){
node.appendChild(child_72550);


var G__72551 = seq__71951_72540;
var G__72552 = chunk__71953_72541;
var G__72553 = count__71954_72542;
var G__72554 = (i__71955_72543 + (1));
seq__71951_72540 = G__72551;
chunk__71953_72541 = G__72552;
count__71954_72542 = G__72553;
i__71955_72543 = G__72554;
continue;
} else {
var G__72555 = seq__71951_72540;
var G__72556 = chunk__71953_72541;
var G__72557 = count__71954_72542;
var G__72558 = (i__71955_72543 + (1));
seq__71951_72540 = G__72555;
chunk__71953_72541 = G__72556;
count__71954_72542 = G__72557;
i__71955_72543 = G__72558;
continue;
}
} else {
var temp__5735__auto___72560 = cljs.core.seq(seq__71951_72540);
if(temp__5735__auto___72560){
var seq__71951_72561__$1 = temp__5735__auto___72560;
if(cljs.core.chunked_seq_QMARK_(seq__71951_72561__$1)){
var c__4556__auto___72562 = cljs.core.chunk_first(seq__71951_72561__$1);
var G__72563 = cljs.core.chunk_rest(seq__71951_72561__$1);
var G__72564 = c__4556__auto___72562;
var G__72565 = cljs.core.count(c__4556__auto___72562);
var G__72566 = (0);
seq__71951_72540 = G__72563;
chunk__71953_72541 = G__72564;
count__71954_72542 = G__72565;
i__71955_72543 = G__72566;
continue;
} else {
var child_72567 = cljs.core.first(seq__71951_72561__$1);
if(cljs.core.truth_(child_72567)){
node.appendChild(child_72567);


var G__72568 = cljs.core.next(seq__71951_72561__$1);
var G__72569 = null;
var G__72570 = (0);
var G__72571 = (0);
seq__71951_72540 = G__72568;
chunk__71953_72541 = G__72569;
count__71954_72542 = G__72570;
i__71955_72543 = G__72571;
continue;
} else {
var G__72572 = cljs.core.next(seq__71951_72561__$1);
var G__72573 = null;
var G__72574 = (0);
var G__72575 = (0);
seq__71951_72540 = G__72572;
chunk__71953_72541 = G__72573;
count__71954_72542 = G__72574;
i__71955_72543 = G__72575;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_72539);
}
}


var G__72577 = seq__71903_72531;
var G__72578 = chunk__71905_72532;
var G__72579 = count__71906_72533;
var G__72580 = (i__71907_72534 + (1));
seq__71903_72531 = G__72577;
chunk__71905_72532 = G__72578;
count__71906_72533 = G__72579;
i__71907_72534 = G__72580;
continue;
} else {
var G__72581 = seq__71903_72531;
var G__72582 = chunk__71905_72532;
var G__72583 = count__71906_72533;
var G__72584 = (i__71907_72534 + (1));
seq__71903_72531 = G__72581;
chunk__71905_72532 = G__72582;
count__71906_72533 = G__72583;
i__71907_72534 = G__72584;
continue;
}
} else {
var temp__5735__auto___72586 = cljs.core.seq(seq__71903_72531);
if(temp__5735__auto___72586){
var seq__71903_72587__$1 = temp__5735__auto___72586;
if(cljs.core.chunked_seq_QMARK_(seq__71903_72587__$1)){
var c__4556__auto___72588 = cljs.core.chunk_first(seq__71903_72587__$1);
var G__72590 = cljs.core.chunk_rest(seq__71903_72587__$1);
var G__72591 = c__4556__auto___72588;
var G__72592 = cljs.core.count(c__4556__auto___72588);
var G__72593 = (0);
seq__71903_72531 = G__72590;
chunk__71905_72532 = G__72591;
count__71906_72533 = G__72592;
i__71907_72534 = G__72593;
continue;
} else {
var child_struct_72594 = cljs.core.first(seq__71903_72587__$1);
if((!((child_struct_72594 == null)))){
if(typeof child_struct_72594 === 'string'){
var text_72595 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_72595),child_struct_72594].join(''));
} else {
var children_72598 = shadow.dom.svg_node(child_struct_72594);
if(cljs.core.seq_QMARK_(children_72598)){
var seq__71975_72603 = cljs.core.seq(children_72598);
var chunk__71977_72604 = null;
var count__71978_72605 = (0);
var i__71979_72606 = (0);
while(true){
if((i__71979_72606 < count__71978_72605)){
var child_72607 = chunk__71977_72604.cljs$core$IIndexed$_nth$arity$2(null,i__71979_72606);
if(cljs.core.truth_(child_72607)){
node.appendChild(child_72607);


var G__72609 = seq__71975_72603;
var G__72610 = chunk__71977_72604;
var G__72611 = count__71978_72605;
var G__72612 = (i__71979_72606 + (1));
seq__71975_72603 = G__72609;
chunk__71977_72604 = G__72610;
count__71978_72605 = G__72611;
i__71979_72606 = G__72612;
continue;
} else {
var G__72614 = seq__71975_72603;
var G__72615 = chunk__71977_72604;
var G__72616 = count__71978_72605;
var G__72617 = (i__71979_72606 + (1));
seq__71975_72603 = G__72614;
chunk__71977_72604 = G__72615;
count__71978_72605 = G__72616;
i__71979_72606 = G__72617;
continue;
}
} else {
var temp__5735__auto___72619__$1 = cljs.core.seq(seq__71975_72603);
if(temp__5735__auto___72619__$1){
var seq__71975_72621__$1 = temp__5735__auto___72619__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71975_72621__$1)){
var c__4556__auto___72622 = cljs.core.chunk_first(seq__71975_72621__$1);
var G__72623 = cljs.core.chunk_rest(seq__71975_72621__$1);
var G__72624 = c__4556__auto___72622;
var G__72625 = cljs.core.count(c__4556__auto___72622);
var G__72626 = (0);
seq__71975_72603 = G__72623;
chunk__71977_72604 = G__72624;
count__71978_72605 = G__72625;
i__71979_72606 = G__72626;
continue;
} else {
var child_72627 = cljs.core.first(seq__71975_72621__$1);
if(cljs.core.truth_(child_72627)){
node.appendChild(child_72627);


var G__72628 = cljs.core.next(seq__71975_72621__$1);
var G__72629 = null;
var G__72630 = (0);
var G__72631 = (0);
seq__71975_72603 = G__72628;
chunk__71977_72604 = G__72629;
count__71978_72605 = G__72630;
i__71979_72606 = G__72631;
continue;
} else {
var G__72632 = cljs.core.next(seq__71975_72621__$1);
var G__72633 = null;
var G__72634 = (0);
var G__72635 = (0);
seq__71975_72603 = G__72632;
chunk__71977_72604 = G__72633;
count__71978_72605 = G__72634;
i__71979_72606 = G__72635;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_72598);
}
}


var G__72637 = cljs.core.next(seq__71903_72587__$1);
var G__72638 = null;
var G__72639 = (0);
var G__72640 = (0);
seq__71903_72531 = G__72637;
chunk__71905_72532 = G__72638;
count__71906_72533 = G__72639;
i__71907_72534 = G__72640;
continue;
} else {
var G__72641 = cljs.core.next(seq__71903_72587__$1);
var G__72642 = null;
var G__72643 = (0);
var G__72644 = (0);
seq__71903_72531 = G__72641;
chunk__71905_72532 = G__72642;
count__71906_72533 = G__72643;
i__71907_72534 = G__72644;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72648 = arguments.length;
var i__4737__auto___72649 = (0);
while(true){
if((i__4737__auto___72649 < len__4736__auto___72648)){
args__4742__auto__.push((arguments[i__4737__auto___72649]));

var G__72650 = (i__4737__auto___72649 + (1));
i__4737__auto___72649 = G__72650;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq71993){
var G__71994 = cljs.core.first(seq71993);
var seq71993__$1 = cljs.core.next(seq71993);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71994,seq71993__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__72006 = arguments.length;
switch (G__72006) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__69095__auto___72658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69096__auto__ = (function (){var switch__68974__auto__ = (function (state_72021){
var state_val_72022 = (state_72021[(1)]);
if((state_val_72022 === (1))){
var state_72021__$1 = state_72021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72021__$1,(2),once_or_cleanup);
} else {
if((state_val_72022 === (2))){
var inst_72018 = (state_72021[(2)]);
var inst_72019 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_72021__$1 = (function (){var statearr_72027 = state_72021;
(statearr_72027[(7)] = inst_72018);

return statearr_72027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72021__$1,inst_72019);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__68975__auto__ = null;
var shadow$dom$state_machine__68975__auto____0 = (function (){
var statearr_72030 = [null,null,null,null,null,null,null,null];
(statearr_72030[(0)] = shadow$dom$state_machine__68975__auto__);

(statearr_72030[(1)] = (1));

return statearr_72030;
});
var shadow$dom$state_machine__68975__auto____1 = (function (state_72021){
while(true){
var ret_value__68976__auto__ = (function (){try{while(true){
var result__68977__auto__ = switch__68974__auto__(state_72021);
if(cljs.core.keyword_identical_QMARK_(result__68977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__68977__auto__;
}
break;
}
}catch (e72031){var ex__68978__auto__ = e72031;
var statearr_72032_72659 = state_72021;
(statearr_72032_72659[(2)] = ex__68978__auto__);


if(cljs.core.seq((state_72021[(4)]))){
var statearr_72033_72660 = state_72021;
(statearr_72033_72660[(1)] = cljs.core.first((state_72021[(4)])));

} else {
throw ex__68978__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__68976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72661 = state_72021;
state_72021 = G__72661;
continue;
} else {
return ret_value__68976__auto__;
}
break;
}
});
shadow$dom$state_machine__68975__auto__ = function(state_72021){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__68975__auto____0.call(this);
case 1:
return shadow$dom$state_machine__68975__auto____1.call(this,state_72021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__68975__auto____0;
shadow$dom$state_machine__68975__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__68975__auto____1;
return shadow$dom$state_machine__68975__auto__;
})()
})();
var state__69097__auto__ = (function (){var statearr_72036 = f__69096__auto__();
(statearr_72036[(6)] = c__69095__auto___72658);

return statearr_72036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69097__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
