import{a as w}from"/build/_shared/chunk-3OEQ7K3T.js";import{a as y}from"/build/_shared/chunk-QLU6BERC.js";import{c as S,f as h}from"/build/_shared/chunk-JEBMXGTI.js";var V=S(O=>{"use strict";var v=y();function C(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var N=typeof Object.is=="function"?Object.is:C,z=v.useState,H=v.useEffect,k=v.useLayoutEffect,W=v.useDebugValue;function _(e,t){var r=t(),n=z({inst:{value:r,getSnapshot:t}}),o=n[0].inst,u=n[1];return k(function(){o.value=r,o.getSnapshot=t,D(o)&&u({inst:o})},[e,r,t]),H(function(){return D(o)&&u({inst:o}),e(function(){D(o)&&u({inst:o})})},[e]),W(r),r}function D(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!N(e,r)}catch{return!0}}function B(e,t){return t()}var F=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?B:_;O.useSyncExternalStore=v.useSyncExternalStore!==void 0?v.useSyncExternalStore:F});var j=S((ue,R)=>{"use strict";R.exports=V()});var P=S(M=>{"use strict";var E=y(),G=j();function J(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var K=typeof Object.is=="function"?Object.is:J,Q=G.useSyncExternalStore,U=E.useRef,X=E.useEffect,Z=E.useMemo,$=E.useDebugValue;M.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var u=U(null);if(u.current===null){var l={hasValue:!1,value:null};u.current=l}else l=u.current;u=Z(function(){function s(c){if(!p){if(p=!0,i=c,c=n(c),o!==void 0&&l.hasValue){var d=l.value;if(o(d,c))return f=d}return f=c}if(d=f,K(i,c))return d;var b=n(c);return o!==void 0&&o(d,b)?d:(i=c,f=b)}var p=!1,i,f,m=r===void 0?null:r;return[function(){return s(t())},m===null?void 0:function(){return s(m())}]},[t,r,n,o]);var a=Q(e,u[0],u[1]);return X(function(){l.hasValue=!0,l.value=a},[a]),$(a),a}});var q=S((ie,Y)=>{"use strict";Y.exports=P()});var x=e=>{let t,r=new Set,n=(s,p)=>{let i=typeof s=="function"?s(t):s;if(!Object.is(i,t)){let f=t;t=p??typeof i!="object"?i:Object.assign({},t,i),r.forEach(m=>m(t,f))}},o=()=>t,a={setState:n,getState:o,subscribe:s=>(r.add(s),()=>r.delete(s)),destroy:()=>{(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,o,a),a},g=e=>e?x(e):x;var T=h(y(),1),L=h(q(),1),{useSyncExternalStoreWithSelector:ee}=L.default;function te(e,t=e.getState,r){let n=ee(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return(0,T.useDebugValue)(n),n}var I=e=>{(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t=typeof e=="function"?g(e):e,r=(n,o)=>te(t,n,o);return Object.assign(r,t),r},A=e=>e?I(e):I;var re={viewportRef:{current:null},scrollY:new w,scrollYProgress:new w,scrollDirection:void 0,isShowOverlay:!1},ve=A(e=>({...re,setScrollDirection:t=>e({scrollDirection:t}),setViewportRef:t=>e({viewportRef:t}),setScrollY:t=>e({scrollY:t}),setScrollYProgress:t=>e({scrollYProgress:t}),setIsShowOverlay:t=>e({isShowOverlay:t})}));export{A as a,ve as b};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
