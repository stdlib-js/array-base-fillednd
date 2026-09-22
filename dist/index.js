"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var o=v(function(g,l){
var a=require('@stdlib/array-base-filled/dist');function s(e,r,t,f,c){var i,n,u;if(i=t[f],n=f+1,n===r)return a(e,i);for(u=0;u<i;u++)c.push(s(e,r,t,n,[]));return c}function d(e,r){return s(e,r.length,r,0,[])}l.exports=d
});var q=o();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
