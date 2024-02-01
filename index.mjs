// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@v0.1.0-esm/index.mjs";function t(e,n,s,i,f){var u,a,d;if(u=s[i],(a=i+1)===n)return r(e,u);for(d=0;d<u;d++)f.push(t(e,n,s,a,[]));return f}function e(r,e){return t(r,e.length,e,0,[])}export{e as default};
//# sourceMappingURL=index.mjs.map
