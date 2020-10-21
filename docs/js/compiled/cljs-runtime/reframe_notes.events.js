goog.provide('reframe_notes.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-notes.events","initialize-db","reframe-notes.events/initialize-db",-714733545),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__43942__auto__ = reframe_notes.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__43942__auto__;
}catch (e44293){var e = e44293;
throw e;
}}):(function (_,___$1){
return reframe_notes.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-notes.events","add-new-note","reframe-notes.events/add-new-note",-2027619935),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"notes","notes",600931004,null),cljs.core.list(new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),cljs.core.list(new cljs.core.Keyword(null,"next-id","next-id",-224240762),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"notes","notes",600931004,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),new cljs.core.Keyword(null,"title","title",636505583),"Untitled",new cljs.core.Keyword(null,"body","body",-2049205669),""], null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),(1)))))));

var result__43942__auto__ = (function (){var notes = (function (){var result__43942__auto__ = new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1((function (){var result__43942__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})();
var next_id = (function (){var result__43942__auto__ = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1((function (){var result__43942__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"next-id","next-id",-224240762),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})();
var result__43942__auto__ = (function (){var result__43949__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__43949__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__43942__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})(),new cljs.core.Keyword(null,"notes","notes",-1039600523),(function (){var result__43942__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var result__43942__auto__ = notes;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"notes","notes",600931004,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__43942__auto__;
})(),(function (){var result__43942__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var result__43942__auto__ = next_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__43942__auto__;
})(),new cljs.core.Keyword(null,"title","title",636505583),"Untitled",new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),new cljs.core.Keyword(null,"title","title",636505583),"Untitled",new cljs.core.Keyword(null,"body","body",-2049205669),""], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"notes","notes",600931004,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),new cljs.core.Keyword(null,"title","title",636505583),"Untitled",new cljs.core.Keyword(null,"body","body",-2049205669),""], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__43949__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"notes","notes",600931004,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),new cljs.core.Keyword(null,"title","title",636505583),"Untitled",new cljs.core.Keyword(null,"body","body",-2049205669),""], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43949__auto__;
})(),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(function (){var result__43942__auto__ = ((function (){var result__43942__auto__ = next_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(27),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__43942__auto__;
})() + (1));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(26),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(23),new cljs.core.Keyword(null,"result","result",1415092211),result__43949__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),(1))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43949__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"notes","notes",600931004,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),new cljs.core.Keyword(null,"title","title",636505583),"Untitled",new cljs.core.Keyword(null,"body","body",-2049205669),""], null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),(1)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__43942__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"notes","notes",600931004,null),cljs.core.list(new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),cljs.core.list(new cljs.core.Keyword(null,"next-id","next-id",-224240762),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"notes","notes",600931004,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),new cljs.core.Keyword(null,"title","title",636505583),"Untitled",new cljs.core.Keyword(null,"body","body",-2049205669),""], null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"next-id","next-id",1416290765,null),(1))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__43942__auto__;
}catch (e44294){var e = e44294;
throw e;
}}):(function (db,_){
var notes = new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(db);
var next_id = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(notes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),next_id,new cljs.core.Keyword(null,"title","title",636505583),"Untitled",new cljs.core.Keyword(null,"body","body",-2049205669),""], null))),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(next_id + (1)));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-notes.events","change-editing-note-id","reframe-notes.events/change-editing-note-id",533298212),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__44295){
var vec__44296 = p__44295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44296,(0),null);
var new_editing_note_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44296,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"new-editing-note-id","new-editing-note-id",-194392662,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064),new cljs.core.Symbol(null,"new-editing-note-id","new-editing-note-id",-194392662,null))));

var result__43942__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__43942__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__43942__auto__;
})(),new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064),(function (){var result__43942__auto__ = new_editing_note_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-editing-note-id","new-editing-note-id",-194392662,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064),new cljs.core.Symbol(null,"new-editing-note-id","new-editing-note-id",-194392662,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__43942__auto__;
}catch (e44299){var e = e44299;
throw e;
}}):(function (db,p__44300){
var vec__44301 = p__44300;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44301,(0),null);
var new_editing_note_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44301,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064),new_editing_note_id);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-notes.events","change-title","reframe-notes.events/change-title",-1846030930),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__44304){
var vec__44305 = p__44304;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44305,(0),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44305,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"notes","notes",600931004,null),cljs.core.list(new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"new-notes","new-notes",885801932,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"notes","notes",600931004,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"note","note",-1228137865,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Symbol(null,"note","note",-1228137865,null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"new-notes","new-notes",885801932,null)))));

var result__43942__auto__ = (function (){var notes = (function (){var result__43942__auto__ = new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1((function (){var result__43942__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})();
var editing_note_id = (function (){var result__43942__auto__ = new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064).cljs$core$IFn$_invoke$arity$1((function (){var result__43942__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})();
var new_notes = (function (){var result__43942__auto__ = (function (){var result__43956__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var result__43942__auto__ = (function (note){
var result__43942__auto__ = (((function (){var result__43942__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var result__43942__auto__ = editing_note_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__43942__auto__;
})(),(function (){var result__43942__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1((function (){var result__43942__auto__ = note;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(19),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__43942__auto__;
})())?(function (){var result__43942__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__43942__auto__ = note;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(21),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__43942__auto__;
})(),new cljs.core.Keyword(null,"title","title",636505583),(function (){var result__43942__auto__ = new_title;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(23),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__43942__auto__;
})():(function (){var result__43942__auto__ = note;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(24),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Symbol(null,"note","note",-1228137865,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__43942__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"note","note",-1228137865,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Symbol(null,"note","note",-1228137865,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__43942__auto__;
})(),(function (){var result__43942__auto__ = notes;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"notes","notes",600931004,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__43956__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"note","note",-1228137865,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Symbol(null,"note","note",-1228137865,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__43956__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"notes","notes",600931004,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"note","note",-1228137865,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Symbol(null,"note","note",-1228137865,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})();
var result__43942__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__43942__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(27),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})(),new cljs.core.Keyword(null,"notes","notes",-1039600523),(function (){var result__43942__auto__ = new_notes;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(29),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-notes","new-notes",885801932,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(26),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"new-notes","new-notes",885801932,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__43942__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"notes","notes",600931004,null),cljs.core.list(new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"new-notes","new-notes",885801932,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"notes","notes",600931004,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"note","note",-1228137865,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Symbol(null,"note","note",-1228137865,null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"new-notes","new-notes",885801932,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__43942__auto__;
}catch (e44308){var e = e44308;
throw e;
}}):(function (db,p__44309){
var vec__44310 = p__44309;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44310,(0),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44310,(1),null);
var notes = new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(db);
var editing_note_id = new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064).cljs$core$IFn$_invoke$arity$1(db);
var new_notes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (note){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_note_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(note))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"title","title",636505583),new_title);
} else {
return note;
}
}),notes);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),new_notes);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reframe-notes.events","change-body","reframe-notes.events/change-body",-1959993424),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__44313){
var vec__44314 = p__44313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44314,(0),null);
var new_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44314,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"new-body","new-body",1867063841,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"notes","notes",600931004,null),cljs.core.list(new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"new-notes","new-notes",885801932,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"notes","notes",600931004,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"note","note",-1228137865,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol(null,"new-body","new-body",1867063841,null)),new cljs.core.Symbol(null,"note","note",-1228137865,null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"new-notes","new-notes",885801932,null)))));

var result__43942__auto__ = (function (){var notes = (function (){var result__43942__auto__ = new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1((function (){var result__43942__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})();
var editing_note_id = (function (){var result__43942__auto__ = new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064).cljs$core$IFn$_invoke$arity$1((function (){var result__43942__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})();
var new_notes = (function (){var result__43942__auto__ = (function (){var result__43956__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var result__43942__auto__ = (function (note){
var result__43942__auto__ = (((function (){var result__43942__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var result__43942__auto__ = editing_note_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__43942__auto__;
})(),(function (){var result__43942__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1((function (){var result__43942__auto__ = note;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(19),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__43942__auto__;
})())?(function (){var result__43942__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__43942__auto__ = note;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(21),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__43942__auto__;
})(),new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var result__43942__auto__ = new_body;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(23),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-body","new-body",1867063841,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol(null,"new-body","new-body",1867063841,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__43942__auto__;
})():(function (){var result__43942__auto__ = note;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(24),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol(null,"new-body","new-body",1867063841,null)),new cljs.core.Symbol(null,"note","note",-1228137865,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__43942__auto__;
});
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"note","note",-1228137865,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol(null,"new-body","new-body",1867063841,null)),new cljs.core.Symbol(null,"note","note",-1228137865,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__43942__auto__;
})(),(function (){var result__43942__auto__ = notes;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"notes","notes",600931004,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__43956__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"note","note",-1228137865,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol(null,"new-body","new-body",1867063841,null)),new cljs.core.Symbol(null,"note","note",-1228137865,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__43956__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"notes","notes",600931004,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"note","note",-1228137865,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol(null,"new-body","new-body",1867063841,null)),new cljs.core.Symbol(null,"note","note",-1228137865,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})();
var result__43942__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__43942__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(27),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})(),new cljs.core.Keyword(null,"notes","notes",-1039600523),(function (){var result__43942__auto__ = new_notes;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(29),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-notes","new-notes",885801932,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__43942__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(26),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"new-notes","new-notes",885801932,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__43942__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__43942__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"notes","notes",600931004,null),cljs.core.list(new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"new-notes","new-notes",885801932,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"notes","notes",600931004,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"note","note",-1228137865,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"editing-note-id","editing-note-id",488775463,null),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"note","note",-1228137865,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"note","note",-1228137865,null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol(null,"new-body","new-body",1867063841,null)),new cljs.core.Symbol(null,"note","note",-1228137865,null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Symbol(null,"new-notes","new-notes",885801932,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__43942__auto__;
}catch (e44317){var e = e44317;
throw e;
}}):(function (db,p__44318){
var vec__44319 = p__44318;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44319,(0),null);
var new_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44319,(1),null);
var notes = new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(db);
var editing_note_id = new cljs.core.Keyword(null,"editing-note-id","editing-note-id",-1151756064).cljs$core$IFn$_invoke$arity$1(db);
var new_notes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (note){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_note_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(note))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"body","body",-2049205669),new_body);
} else {
return note;
}
}),notes);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notes","notes",-1039600523),new_notes);
})));

//# sourceMappingURL=reframe_notes.events.js.map
