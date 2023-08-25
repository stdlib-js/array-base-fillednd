"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=v(function(g,l){
var a=require('@stdlib/array-base-filled/dist');function s(e,r,u,f,c){var t,i,n;if(t=u[f],i=f+1,i===r)return a(e,t);for(n=0;n<t;n++)c.push(s(e,r,u,i,[]));return c}function d(e,r){return s(e,r.length,r,0,[])}l.exports=d
});var q=o();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
