// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(n,t,u,e,f){var o,a,i;if(o=u[e],(a=e+1)===t)return function(r,n){var t,u;for(t=[],u=0;u<n;u++)t.push(r);return t}(n,o);for(i=0;i<o;i++)f.push(r(n,t,u,a,[]));return f}function n(n,t){return r(n,t.length,t,0,[])}export{n as default};
//# sourceMappingURL=mod.js.map
