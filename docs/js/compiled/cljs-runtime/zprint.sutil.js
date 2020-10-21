goog.provide('zprint.sutil');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sexpr], 0));
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zloc], 0));
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_(sexpr)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.seq(sexpr));
} else {
return cljs.core.seq(sexpr);
}
});
/**
 * Map a function of all of the elements to ther right
 *   of this.
 */
zprint.sutil.smap_right = (function zprint$sutil$smap_right(zfn,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,cljs.core.next(sexpr));
} else {
return null;
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.nthnext(sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_((function (){var G__62771 = cljs.core.first(sloc);
return (zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__62771) : zthing_QMARK_.call(null,G__62771));
})())){
return i;
} else {
var G__62953 = cljs.core.next(sloc);
var G__62954 = (i + (1));
sloc = G__62953;
i = G__62954;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.count(sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_(sexpr))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_(sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first(sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second(sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_(sexpr)) || (cljs.core.seq_QMARK_(sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_(sexpr)){
return cljs.core.last(sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_(x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return null;
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref(x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns(x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__62787 = arguments.length;
switch (G__62787) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),val], null);
}));

(zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(obj_term)),cljs.core.second(obj_term),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj_term,(2)))], null);
}));

(zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2);

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string') || (typeof x === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(p__62796,pair_seq,ns){
var map__62797 = p__62796;
var map__62797__$1 = (((((!((map__62797 == null))))?(((((map__62797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62797):map__62797);
var map_options = map__62797__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62797__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62797__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62797__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62797__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__4115__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4115__auto__;
}
})())){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__62805 = cljs.core.first(pair_seq__$1);
var seq__62806 = cljs.core.seq(vec__62805);
var first__62807 = cljs.core.first(seq__62806);
var seq__62806__$1 = cljs.core.next(seq__62806);
var k = first__62807;
var rest_of_pair = seq__62806__$1;
var pair = vec__62805;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace(k):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns__$1,current_ns)){
var G__62973 = ns__$1;
var G__62974 = cljs.core.next(pair_seq__$1);
var G__62975 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns__$1 = G__62973;
pair_seq__$1 = G__62974;
out = G__62975;
continue;
} else {
return null;
}
} else {
var G__62976 = current_ns;
var G__62977 = cljs.core.next(pair_seq__$1);
var G__62978 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons(strip_ns(k),rest_of_pair));
ns__$1 = G__62976;
pair_seq__$1 = G__62977;
out = G__62978;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__62982 = ns__$1;
var G__62983 = cljs.core.next(pair_seq__$1);
var G__62984 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns__$1 = G__62982;
pair_seq__$1 = G__62983;
out = G__62984;
continue;
} else {
return null;
}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,pair_seq], null);
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__62811 = zprint.zfns.zstring;
var znumstr_orig_val__62812 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__62813 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__62814 = zprint.zfns.zsexpr;
var zseqnws_orig_val__62815 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__62816 = zprint.zfns.zseqnws_w_nl;
var zmap_right_orig_val__62817 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__62818 = zprint.zfns.zfocus_style;
var zstart_orig_val__62819 = zprint.zfns.zstart;
var zfirst_orig_val__62820 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__62821 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__62822 = zprint.zfns.zsecond;
var zsecond_no_comment_orig_val__62823 = zprint.zfns.zsecond_no_comment;
var zthird_orig_val__62824 = zprint.zfns.zthird;
var zthird_no_comment_orig_val__62825 = zprint.zfns.zthird_no_comment;
var zfourth_orig_val__62826 = zprint.zfns.zfourth;
var znextnws_orig_val__62827 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__62828 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__62829 = zprint.zfns.znthnext;
var zcount_orig_val__62830 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__62831 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__62832 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__62833 = zprint.zfns.zmap_w_nl;
var zmap_w_nl_comma_orig_val__62834 = zprint.zfns.zmap_w_nl_comma;
var zanonfn_QMARK__orig_val__62835 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__62836 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__62837 = zprint.zfns.zfocus;
var zfind_path_orig_val__62838 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__62839 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__62840 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__62841 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__62842 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__62843 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__62844 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__62845 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__62846 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__62847 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__62848 = zprint.zfns.ztag;
var zlast_orig_val__62849 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__62850 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__62851 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__62852 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__62853 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__62854 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__62855 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__62856 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__62857 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__62858 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__62859 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__62860 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__62861 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__62862 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__62863 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__62864 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__62865 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__62866 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__62867 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__62868 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__62869 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__62870 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__62871 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__62872 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__62873 = zprint.zfns.zlift_ns;
var zfind_orig_val__62874 = zprint.zfns.zfind;
var ztake_append_orig_val__62875 = zprint.zfns.ztake_append;
var zstring_temp_val__62876 = zprint.sutil.sstring;
var znumstr_temp_val__62877 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__62878 = cljs.core.constantly(false);
var zsexpr_temp_val__62879 = cljs.core.identity;
var zseqnws_temp_val__62880 = zprint.sutil.sseqnws;
var zseqnws_w_nl_temp_val__62881 = zprint.sutil.sseqnws;
var zmap_right_temp_val__62882 = zprint.sutil.smap_right;
var zfocus_style_temp_val__62883 = zprint.sutil.sfocus_style;
var zstart_temp_val__62884 = zprint.sutil.sfirst;
var zfirst_temp_val__62885 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__62886 = zprint.sutil.sfirst;
var zsecond_temp_val__62887 = zprint.sutil.ssecond;
var zsecond_no_comment_temp_val__62888 = zprint.sutil.ssecond;
var zthird_temp_val__62889 = zprint.sutil.sthird;
var zthird_no_comment_temp_val__62890 = zprint.sutil.sthird;
var zfourth_temp_val__62891 = zprint.sutil.sfourth;
var znextnws_temp_val__62892 = cljs.core.next;
var znextnws_w_nl_temp_val__62893 = cljs.core.next;
var znthnext_temp_val__62894 = zprint.sutil.snthnext;
var zcount_temp_val__62895 = zprint.sutil.scount;
var zcount_zloc_seq_nc_nws_temp_val__62896 = zprint.sutil.scount;
var zmap_temp_val__62897 = zprint.sutil.smap;
var zmap_w_nl_temp_val__62898 = zprint.sutil.smap;
var zmap_w_nl_comma_temp_val__62899 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__62900 = cljs.core.constantly(false);
var zfn_obj_QMARK__temp_val__62901 = cljs.core.fn_QMARK_;
var zfocus_temp_val__62902 = zprint.sutil.sfocus;
var zfind_path_temp_val__62903 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__62904 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__62905 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__62906 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__62907 = cljs.core.map_QMARK_;
var znamespacedmap_QMARK__temp_val__62908 = cljs.core.constantly(false);
var zset_QMARK__temp_val__62909 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__62910 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__62911 = cljs.core.constantly(false);
var zuneval_QMARK__temp_val__62912 = cljs.core.constantly(false);
var ztag_temp_val__62913 = cljs.core.constantly(null);
var zlast_temp_val__62914 = zprint.sutil.slast;
var zarray_QMARK__temp_val__62915 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__62916 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__62917 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__62918 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__62919 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__62920 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__62921 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__62922 = cljs.core.constantly(false);
var zwhitespaceorcomment_QMARK__temp_val__62923 = cljs.core.constantly(false);
var zmap_all_temp_val__62924 = cljs.core.map;
var zfuture_QMARK__temp_val__62925 = cljs.core.constantly(false);
var zpromise_QMARK__temp_val__62926 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__62927 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__62928 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__62929 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__62930 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__62931 = cljs.core.constantly(false);
var zarray_to_shift_seq_temp_val__62932 = null;
var zdotdotdot_temp_val__62933 = cljs.core.constantly(new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__62934 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__62935 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__62936 = cljs.core.constantly(false);
var zreader_cond_w_coll_QMARK__temp_val__62937 = cljs.core.constantly(false);
var zlift_ns_temp_val__62938 = zprint.sutil.slift_ns;
var zfind_temp_val__62939 = zprint.sutil.sfind;
var ztake_append_temp_val__62940 = zprint.sutil.stake_append;
(zprint.zfns.zstring = zstring_temp_val__62876);

(zprint.zfns.znumstr = znumstr_temp_val__62877);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__62878);

(zprint.zfns.zsexpr = zsexpr_temp_val__62879);

(zprint.zfns.zseqnws = zseqnws_temp_val__62880);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__62881);

(zprint.zfns.zmap_right = zmap_right_temp_val__62882);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__62883);

(zprint.zfns.zstart = zstart_temp_val__62884);

(zprint.zfns.zfirst = zfirst_temp_val__62885);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__62886);

(zprint.zfns.zsecond = zsecond_temp_val__62887);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_temp_val__62888);

(zprint.zfns.zthird = zthird_temp_val__62889);

(zprint.zfns.zthird_no_comment = zthird_no_comment_temp_val__62890);

(zprint.zfns.zfourth = zfourth_temp_val__62891);

(zprint.zfns.znextnws = znextnws_temp_val__62892);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__62893);

(zprint.zfns.znthnext = znthnext_temp_val__62894);

(zprint.zfns.zcount = zcount_temp_val__62895);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__62896);

(zprint.zfns.zmap = zmap_temp_val__62897);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__62898);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__62899);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__62900);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__62901);

(zprint.zfns.zfocus = zfocus_temp_val__62902);

(zprint.zfns.zfind_path = zfind_path_temp_val__62903);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__62904);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__62905);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__62906);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__62907);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__62908);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__62909);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__62910);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__62911);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__62912);

(zprint.zfns.ztag = ztag_temp_val__62913);

(zprint.zfns.zlast = zlast_temp_val__62914);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__62915);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__62916);

(zprint.zfns.zderef = zderef_temp_val__62917);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__62918);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__62919);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__62920);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__62921);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__62922);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__62923);

(zprint.zfns.zmap_all = zmap_all_temp_val__62924);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__62925);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__62926);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__62927);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__62928);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__62929);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__62930);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__62931);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__62932);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__62933);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__62934);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__62935);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__62936);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__62937);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__62938);

(zprint.zfns.zfind = zfind_temp_val__62939);

(zprint.zfns.ztake_append = ztake_append_temp_val__62940);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {(zprint.zfns.ztake_append = ztake_append_orig_val__62875);

(zprint.zfns.zfind = zfind_orig_val__62874);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__62873);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__62872);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__62871);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__62870);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__62869);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__62868);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__62867);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__62866);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__62865);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__62864);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__62863);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__62862);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__62861);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__62860);

(zprint.zfns.zmap_all = zmap_all_orig_val__62859);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__62858);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__62857);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__62856);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__62855);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__62854);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__62853);

(zprint.zfns.zderef = zderef_orig_val__62852);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__62851);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__62850);

(zprint.zfns.zlast = zlast_orig_val__62849);

(zprint.zfns.ztag = ztag_orig_val__62848);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__62847);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__62846);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__62845);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__62844);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__62843);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__62842);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__62841);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__62840);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__62839);

(zprint.zfns.zfind_path = zfind_path_orig_val__62838);

(zprint.zfns.zfocus = zfocus_orig_val__62837);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__62836);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__62835);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__62834);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__62833);

(zprint.zfns.zmap = zmap_orig_val__62832);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__62831);

(zprint.zfns.zcount = zcount_orig_val__62830);

(zprint.zfns.znthnext = znthnext_orig_val__62829);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__62828);

(zprint.zfns.znextnws = znextnws_orig_val__62827);

(zprint.zfns.zfourth = zfourth_orig_val__62826);

(zprint.zfns.zthird_no_comment = zthird_no_comment_orig_val__62825);

(zprint.zfns.zthird = zthird_orig_val__62824);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_orig_val__62823);

(zprint.zfns.zsecond = zsecond_orig_val__62822);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__62821);

(zprint.zfns.zfirst = zfirst_orig_val__62820);

(zprint.zfns.zstart = zstart_orig_val__62819);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__62818);

(zprint.zfns.zmap_right = zmap_right_orig_val__62817);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__62816);

(zprint.zfns.zseqnws = zseqnws_orig_val__62815);

(zprint.zfns.zsexpr = zsexpr_orig_val__62814);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__62813);

(zprint.zfns.znumstr = znumstr_orig_val__62812);

(zprint.zfns.zstring = zstring_orig_val__62811);
}});

//# sourceMappingURL=zprint.sutil.js.map
