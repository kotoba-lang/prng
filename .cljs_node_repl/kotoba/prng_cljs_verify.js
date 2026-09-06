// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :simple}
goog.provide('kotoba.prng_cljs_verify');
goog.require('cljs.core');
goog.require('kotoba.prng');
kotoba.prng_cljs_verify.jvm_w42 = (3326932332);
kotoba.prng_cljs_verify.jvm_i42 = (108);
kotoba.prng_cljs_verify.check_BANG_ = (function kotoba$prng_cljs_verify$check_BANG_(label,ok_QMARK_){
cljs.core.println.call(null,(cljs.core.truth_(ok_QMARK_)?["PASS ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''):["FAIL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('')));

if(cljs.core.truth_(ok_QMARK_)){
return null;
} else {
return process.exit((1));
}
});
kotoba.prng_cljs_verify._main = (function kotoba$prng_cljs_verify$_main(var_args){
var args__5732__auto__ = [];
var len__5726__auto___536 = arguments.length;
var i__5727__auto___537 = (0);
while(true){
if((i__5727__auto___537 < len__5726__auto___536)){
args__5732__auto__.push((arguments[i__5727__auto___537]));

var G__538 = (i__5727__auto___537 + (1));
i__5727__auto___537 = G__538;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return kotoba.prng_cljs_verify._main.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(kotoba.prng_cljs_verify._main.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var s0 = kotoba.prng.seed_state.call(null,(42));
var vec__527 = kotoba.prng.word_32.call(null,s0);
var w = cljs.core.nth.call(null,vec__527,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__527,(1),null);
var vec__530 = kotoba.prng.next_int.call(null,s0,(256));
var v = cljs.core.nth.call(null,vec__530,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__530,(1),null);
var vec__533 = kotoba.prng.word_32.call(null,s0);
var w1 = cljs.core.nth.call(null,vec__533,(0),null);
var ___$3 = cljs.core.nth.call(null,vec__533,(1),null);
var w1_SINGLEQUOTE_ = cljs.core.first.call(null,kotoba.prng.word_32.call(null,s0));
kotoba.prng_cljs_verify.check_BANG_.call(null,"word-32 host-parity (JVM 3326932332)",cljs.core._EQ_.call(null,w,kotoba.prng_cljs_verify.jvm_w42));

kotoba.prng_cljs_verify.check_BANG_.call(null,"next-int host-parity (JVM 108)",cljs.core._EQ_.call(null,v,kotoba.prng_cljs_verify.jvm_i42));

kotoba.prng_cljs_verify.check_BANG_.call(null,"word-32 deterministic on node",cljs.core._EQ_.call(null,w1,w1_SINGLEQUOTE_));

kotoba.prng_cljs_verify.check_BANG_.call(null,"word-32 in range",(((w >= (0))) && ((w < (4294967296)))));

return cljs.core.println.call(null,"cljs verify OK");
}));

(kotoba.prng_cljs_verify._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kotoba.prng_cljs_verify._main.cljs$lang$applyTo = (function (seq526){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq526));
}));

(cljs.core._STAR_main_cli_fn_STAR_ = kotoba.prng_cljs_verify._main);
