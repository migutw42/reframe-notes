goog.provide('reframe_notes.views');
reframe_notes.views.side_column = (function reframe_notes$views$side_column(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44336 = arguments.length;
var i__4737__auto___44337 = (0);
while(true){
if((i__4737__auto___44337 < len__4736__auto___44336)){
args__4742__auto__.push((arguments[i__4737__auto___44337]));

var G__44338 = (i__4737__auto___44337 + (1));
i__4737__auto___44337 = G__44338;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return reframe_notes.views.side_column.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(reframe_notes.views.side_column.cljs$core$IFn$_invoke$arity$variadic = (function (p__44323){
var map__44324 = p__44323;
var map__44324__$1 = (((((!((map__44324 == null))))?(((((map__44324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44324):map__44324);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44324__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#00D1B2",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"width","width",-384071477),"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"ReframeNote"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"auto"], null)], null),name], null)], null);
}));

(reframe_notes.views.side_column.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reframe_notes.views.side_column.cljs$lang$applyTo = (function (seq44322){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44322));
}));

reframe_notes.views.notes_column = (function reframe_notes$views$notes_column(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44339 = arguments.length;
var i__4737__auto___44340 = (0);
while(true){
if((i__4737__auto___44340 < len__4736__auto___44339)){
args__4742__auto__.push((arguments[i__4737__auto___44340]));

var G__44341 = (i__4737__auto___44340 + (1));
i__4737__auto___44340 = G__44341;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return reframe_notes.views.notes_column.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(reframe_notes.views.notes_column.cljs$core$IFn$_invoke$arity$variadic = (function (p__44327){
var map__44328 = p__44327;
var map__44328__$1 = (((((!((map__44328 == null))))?(((((map__44328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44328):map__44328);
var notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44328__$1,new cljs.core.Keyword(null,"notes","notes",-1039600523));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#F5F5F5",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1rem"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframe-notes.events","add-new-note","reframe-notes.events/add-new-note",-2027619935)], null));
})], null),"Add note"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (note){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem",new cljs.core.Keyword(null,"border","border",1444987323),"solid 1px #E0E0E0"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframe-notes.events","change-editing-note-id","reframe-notes.events/change-editing-note-id",533298212),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(note)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(note)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(note)], null)], null);
}),notes)], null);
}));

(reframe_notes.views.notes_column.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reframe_notes.views.notes_column.cljs$lang$applyTo = (function (seq44326){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44326));
}));

reframe_notes.views.editor_column = (function reframe_notes$views$editor_column(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44342 = arguments.length;
var i__4737__auto___44343 = (0);
while(true){
if((i__4737__auto___44343 < len__4736__auto___44342)){
args__4742__auto__.push((arguments[i__4737__auto___44343]));

var G__44344 = (i__4737__auto___44343 + (1));
i__4737__auto___44343 = G__44344;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return reframe_notes.views.editor_column.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(reframe_notes.views.editor_column.cljs$core$IFn$_invoke$arity$variadic = (function (p__44333){
var map__44334 = p__44333;
var map__44334__$1 = (((((!((map__44334 == null))))?(((((map__44334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44334):map__44334);
var editing_note = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44334__$1,new cljs.core.Keyword(null,"editing-note","editing-note",-389354282));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"5vh"], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(editing_note),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__44330_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframe-notes.events","change-title","reframe-notes.events/change-title",-1846030930),p1__44330_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"95vh"], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(editing_note),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__44331_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframe-notes.events","change-body","reframe-notes.events/change-body",-1959993424),p1__44331_SHARP_.target.value], null));
})], null)], null)], null);
}));

(reframe_notes.views.editor_column.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reframe_notes.views.editor_column.cljs$lang$applyTo = (function (seq44332){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44332));
}));

reframe_notes.views.main_panel = (function reframe_notes$views$main_panel(){
var name = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframe-notes.subs","name","reframe-notes.subs/name",1558419966)], null));
var notes = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframe-notes.subs","notes","reframe-notes.subs/notes",1325956634)], null));
var editing_note = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reframe-notes.subs","editing-note","reframe-notes.subs/editing-note",2043351849)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"margin","margin",-995903681),"-8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe_notes.views.side_column,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(name)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe_notes.views.notes_column,new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.deref(notes)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframe_notes.views.editor_column,new cljs.core.Keyword(null,"editing-note","editing-note",-389354282),cljs.core.deref(editing_note)], null)], null);
});

//# sourceMappingURL=reframe_notes.views.js.map
