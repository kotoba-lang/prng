// Compiled by ClojureScript 1.11.132 {:target :nodejs, :nodejs-rt true, :optimizations :simple}
goog.provide('kotoba.prng');
goog.require('cljs.core');
kotoba.prng.MULT = BigInt("6364136223846793005");
kotoba.prng.INC = BigInt("1442695040888963407");
/**
 * Scramble `seed` (any integer) into the initial 64-bit state.
 */
kotoba.prng.seed_state = (function kotoba$prng$seed_state(seed){
return ((BigInt(seed) * kotoba.prng.MULT) + kotoba.prng.INC);
});
/**
 * Advance `state` by one (wrapping 64-bit multiply-add); returns the new state.
 */
kotoba.prng.step_state = (function kotoba$prng$step_state(state){
return ((BigInt(state) * kotoba.prng.MULT) + kotoba.prng.INC);
});
/**
 * Advance the state and return `[word state']` where `word` is a 32-bit
 *   draw in `[0, 2^32)` — the LOW 32 bits of the advanced state, identical on
 *   every host (BigInt-exact in ClojureScript).
 */
kotoba.prng.word_32 = (function kotoba$prng$word_32(state){
var state_SINGLEQUOTE_ = kotoba.prng.step_state.call(null,state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Number(BigInt.asUintN((32),BigInt(state_SINGLEQUOTE_))),state_SINGLEQUOTE_], null);
});
/**
 * Advance the state and return `[value state']` with `value` uniform in
 *   `[0, bound)` for a POSITIVE `bound`, as `(word-32 state)` mod `bound`.
 */
kotoba.prng.next_int = (function kotoba$prng$next_int(state,bound){
if((cljs.core.long$.call(null,bound) <= (0))){
throw (new Error("next-int requires a positive bound"));
} else {
var vec__526 = kotoba.prng.word_32.call(null,state);
var w = cljs.core.nth.call(null,vec__526,(0),null);
var state_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__526,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,w,cljs.core.long$.call(null,bound)),state_SINGLEQUOTE_], null);
}
});
