goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__73234){
var map__73237 = p__73234;
var map__73237__$1 = (((((!((map__73237 == null))))?(((((map__73237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73237):map__73237);
var m = map__73237__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73237__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73237__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__73267_73660 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73268_73661 = null;
var count__73269_73662 = (0);
var i__73270_73663 = (0);
while(true){
if((i__73270_73663 < count__73269_73662)){
var f_73664 = chunk__73268_73661.cljs$core$IIndexed$_nth$arity$2(null,i__73270_73663);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_73664], 0));


var G__73665 = seq__73267_73660;
var G__73666 = chunk__73268_73661;
var G__73667 = count__73269_73662;
var G__73668 = (i__73270_73663 + (1));
seq__73267_73660 = G__73665;
chunk__73268_73661 = G__73666;
count__73269_73662 = G__73667;
i__73270_73663 = G__73668;
continue;
} else {
var temp__5735__auto___73669 = cljs.core.seq(seq__73267_73660);
if(temp__5735__auto___73669){
var seq__73267_73670__$1 = temp__5735__auto___73669;
if(cljs.core.chunked_seq_QMARK_(seq__73267_73670__$1)){
var c__4556__auto___73671 = cljs.core.chunk_first(seq__73267_73670__$1);
var G__73672 = cljs.core.chunk_rest(seq__73267_73670__$1);
var G__73673 = c__4556__auto___73671;
var G__73674 = cljs.core.count(c__4556__auto___73671);
var G__73675 = (0);
seq__73267_73660 = G__73672;
chunk__73268_73661 = G__73673;
count__73269_73662 = G__73674;
i__73270_73663 = G__73675;
continue;
} else {
var f_73676 = cljs.core.first(seq__73267_73670__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_73676], 0));


var G__73677 = cljs.core.next(seq__73267_73670__$1);
var G__73678 = null;
var G__73679 = (0);
var G__73680 = (0);
seq__73267_73660 = G__73677;
chunk__73268_73661 = G__73678;
count__73269_73662 = G__73679;
i__73270_73663 = G__73680;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_73681 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_73681], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_73681)))?cljs.core.second(arglists_73681):arglists_73681)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__73323_73684 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73324_73685 = null;
var count__73325_73686 = (0);
var i__73326_73687 = (0);
while(true){
if((i__73326_73687 < count__73325_73686)){
var vec__73351_73688 = chunk__73324_73685.cljs$core$IIndexed$_nth$arity$2(null,i__73326_73687);
var name_73689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73351_73688,(0),null);
var map__73354_73690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73351_73688,(1),null);
var map__73354_73691__$1 = (((((!((map__73354_73690 == null))))?(((((map__73354_73690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73354_73690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73354_73690):map__73354_73690);
var doc_73692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73354_73691__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73354_73691__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_73689], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_73693], 0));

if(cljs.core.truth_(doc_73692)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_73692], 0));
} else {
}


var G__73694 = seq__73323_73684;
var G__73695 = chunk__73324_73685;
var G__73696 = count__73325_73686;
var G__73697 = (i__73326_73687 + (1));
seq__73323_73684 = G__73694;
chunk__73324_73685 = G__73695;
count__73325_73686 = G__73696;
i__73326_73687 = G__73697;
continue;
} else {
var temp__5735__auto___73698 = cljs.core.seq(seq__73323_73684);
if(temp__5735__auto___73698){
var seq__73323_73699__$1 = temp__5735__auto___73698;
if(cljs.core.chunked_seq_QMARK_(seq__73323_73699__$1)){
var c__4556__auto___73700 = cljs.core.chunk_first(seq__73323_73699__$1);
var G__73701 = cljs.core.chunk_rest(seq__73323_73699__$1);
var G__73702 = c__4556__auto___73700;
var G__73703 = cljs.core.count(c__4556__auto___73700);
var G__73704 = (0);
seq__73323_73684 = G__73701;
chunk__73324_73685 = G__73702;
count__73325_73686 = G__73703;
i__73326_73687 = G__73704;
continue;
} else {
var vec__73380_73705 = cljs.core.first(seq__73323_73699__$1);
var name_73706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73380_73705,(0),null);
var map__73383_73707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73380_73705,(1),null);
var map__73383_73708__$1 = (((((!((map__73383_73707 == null))))?(((((map__73383_73707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73383_73707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73383_73707):map__73383_73707);
var doc_73709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73383_73708__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73383_73708__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_73706], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_73710], 0));

if(cljs.core.truth_(doc_73709)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_73709], 0));
} else {
}


var G__73711 = cljs.core.next(seq__73323_73699__$1);
var G__73712 = null;
var G__73713 = (0);
var G__73714 = (0);
seq__73323_73684 = G__73711;
chunk__73324_73685 = G__73712;
count__73325_73686 = G__73713;
i__73326_73687 = G__73714;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__73400 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__73401 = null;
var count__73402 = (0);
var i__73403 = (0);
while(true){
if((i__73403 < count__73402)){
var role = chunk__73401.cljs$core$IIndexed$_nth$arity$2(null,i__73403);
var temp__5735__auto___73721__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___73721__$1)){
var spec_73722 = temp__5735__auto___73721__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_73722)], 0));
} else {
}


var G__73723 = seq__73400;
var G__73724 = chunk__73401;
var G__73725 = count__73402;
var G__73726 = (i__73403 + (1));
seq__73400 = G__73723;
chunk__73401 = G__73724;
count__73402 = G__73725;
i__73403 = G__73726;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__73400);
if(temp__5735__auto____$1){
var seq__73400__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__73400__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73400__$1);
var G__73731 = cljs.core.chunk_rest(seq__73400__$1);
var G__73732 = c__4556__auto__;
var G__73733 = cljs.core.count(c__4556__auto__);
var G__73734 = (0);
seq__73400 = G__73731;
chunk__73401 = G__73732;
count__73402 = G__73733;
i__73403 = G__73734;
continue;
} else {
var role = cljs.core.first(seq__73400__$1);
var temp__5735__auto___73735__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___73735__$2)){
var spec_73736 = temp__5735__auto___73735__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_73736)], 0));
} else {
}


var G__73737 = cljs.core.next(seq__73400__$1);
var G__73738 = null;
var G__73739 = (0);
var G__73740 = (0);
seq__73400 = G__73737;
chunk__73401 = G__73738;
count__73402 = G__73739;
i__73403 = G__73740;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__73758 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__73759 = cljs.core.ex_cause(t);
via = G__73758;
t = G__73759;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__73498 = datafied_throwable;
var map__73498__$1 = (((((!((map__73498 == null))))?(((((map__73498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73498):map__73498);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73498__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73498__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73498__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__73499 = cljs.core.last(via);
var map__73499__$1 = (((((!((map__73499 == null))))?(((((map__73499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73499):map__73499);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73499__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73499__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73499__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__73500 = data;
var map__73500__$1 = (((((!((map__73500 == null))))?(((((map__73500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73500):map__73500);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73500__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73500__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73500__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__73501 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__73501__$1 = (((((!((map__73501 == null))))?(((((map__73501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73501):map__73501);
var top_data = map__73501__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__73531 = phase;
var G__73531__$1 = (((G__73531 instanceof cljs.core.Keyword))?G__73531.fqn:null);
switch (G__73531__$1) {
case "read-source":
var map__73535 = data;
var map__73535__$1 = (((((!((map__73535 == null))))?(((((map__73535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73535):map__73535);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73535__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73535__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__73548 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__73548__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73548,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__73548);
var G__73548__$2 = (cljs.core.truth_((function (){var fexpr__73549 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__73549.cljs$core$IFn$_invoke$arity$1 ? fexpr__73549.cljs$core$IFn$_invoke$arity$1(source) : fexpr__73549.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__73548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__73548__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73548__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__73548__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__73563 = top_data;
var G__73563__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73563,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__73563);
var G__73563__$2 = (cljs.core.truth_((function (){var fexpr__73564 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__73564.cljs$core$IFn$_invoke$arity$1 ? fexpr__73564.cljs$core$IFn$_invoke$arity$1(source) : fexpr__73564.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__73563__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__73563__$1);
var G__73563__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73563__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__73563__$2);
var G__73563__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73563__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__73563__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73563__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__73563__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__73568 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73568,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73568,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73568,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73568,(3),null);
var G__73571 = top_data;
var G__73571__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73571,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__73571);
var G__73571__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73571__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__73571__$1);
var G__73571__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73571__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__73571__$2);
var G__73571__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73571__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__73571__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73571__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__73571__$4;
}

break;
case "execution":
var vec__73574 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73574,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73574,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73574,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73574,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__73495_SHARP_){
var or__4126__auto__ = (p1__73495_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__73578 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__73578.cljs$core$IFn$_invoke$arity$1 ? fexpr__73578.cljs$core$IFn$_invoke$arity$1(p1__73495_SHARP_) : fexpr__73578.call(null,p1__73495_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__73579 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__73579__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73579,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__73579);
var G__73579__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73579__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__73579__$1);
var G__73579__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73579__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__73579__$2);
var G__73579__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73579__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__73579__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73579__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__73579__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73531__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__73593){
var map__73594 = p__73593;
var map__73594__$1 = (((((!((map__73594 == null))))?(((((map__73594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73594):map__73594);
var triage_data = map__73594__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73594__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73594__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73594__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73594__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73594__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73594__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73594__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73594__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__73600 = phase;
var G__73600__$1 = (((G__73600 instanceof cljs.core.Keyword))?G__73600.fqn:null);
switch (G__73600__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__73602 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__73603 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__73604 = loc;
var G__73605 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__73606_73856 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__73607_73857 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__73608_73858 = true;
var _STAR_print_fn_STAR__temp_val__73609_73859 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__73608_73858);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__73609_73859);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73591_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__73591_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__73607_73857);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__73606_73856);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__73602,G__73603,G__73604,G__73605) : format.call(null,G__73602,G__73603,G__73604,G__73605));

break;
case "macroexpansion":
var G__73611 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__73612 = cause_type;
var G__73613 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__73614 = loc;
var G__73615 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__73611,G__73612,G__73613,G__73614,G__73615) : format.call(null,G__73611,G__73612,G__73613,G__73614,G__73615));

break;
case "compile-syntax-check":
var G__73626 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__73627 = cause_type;
var G__73628 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__73629 = loc;
var G__73630 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__73626,G__73627,G__73628,G__73629,G__73630) : format.call(null,G__73626,G__73627,G__73628,G__73629,G__73630));

break;
case "compilation":
var G__73631 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__73632 = cause_type;
var G__73633 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__73634 = loc;
var G__73635 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__73631,G__73632,G__73633,G__73634,G__73635) : format.call(null,G__73631,G__73632,G__73633,G__73634,G__73635));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__73637 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__73638 = symbol;
var G__73639 = loc;
var G__73640 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__73642_73876 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__73643_73877 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__73644_73878 = true;
var _STAR_print_fn_STAR__temp_val__73645_73879 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__73644_73878);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__73645_73879);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73592_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__73592_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__73643_73877);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__73642_73876);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__73637,G__73638,G__73639,G__73640) : format.call(null,G__73637,G__73638,G__73639,G__73640));
} else {
var G__73648 = "Execution error%s at %s(%s).\n%s\n";
var G__73649 = cause_type;
var G__73650 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__73651 = loc;
var G__73652 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__73648,G__73649,G__73650,G__73651,G__73652) : format.call(null,G__73648,G__73649,G__73650,G__73651,G__73652));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73600__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
