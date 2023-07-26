import{c as _}from"/build/_shared/chunk-JEBMXGTI.js";var U=_(u=>{"use strict";var y=Symbol.for("react.element"),H=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),K=Symbol.for("react.context"),Q=Symbol.for("react.server_context"),X=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ee=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),S=Symbol.for("react.default_value"),j=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,I={};function p(e,t,n){this.props=e,this.context=t,this.refs=I,this.updater=n||P}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N(){}N.prototype=p.prototype;function C(e,t,n){this.props=e,this.context=t,this.refs=I,this.updater=n||P}var R=C.prototype=new N;R.constructor=C;V(R,p.prototype);R.isPureReactComponent=!0;var x=Array.isArray,q=Object.prototype.hasOwnProperty,$={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,n){var r,o={},c=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(c=""+t.key),t)q.call(t,r)&&!T.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),a=0;a<l;a++)s[a]=arguments[a+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:y,type:e,key:c,ref:i,props:o,_owner:$.current}}function ne(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function b(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function ue(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var O=/\/+/g;function E(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ue(""+e.key):t.toString(36)}function v(e,t,n,r,o){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case y:case H:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+E(i,0):r,x(o)?(n="",e!=null&&(n=e.replace(O,"$&/")+"/"),v(o,t,n,"",function(a){return a})):o!=null&&(b(o)&&(o=ne(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(O,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",x(e))for(var l=0;l<e.length;l++){c=e[l];var s=r+E(c,l);i+=v(c,t,n,s,o)}else if(s=re(e),typeof s=="function")for(e=s.call(e),l=0;!(c=e.next()).done;)c=c.value,s=r+E(c,l++),i+=v(c,t,n,s,o);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function d(e,t,n){if(e==null)return e;var r=[],o=0;return v(e,r,"","",function(c){return t.call(n,c,o++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var F={current:null};function ce(){return new WeakMap}function g(){return{s:0,v:void 0,o:null,p:null}}var f={current:null},m={transition:null},L={ReactCurrentDispatcher:f,ReactCurrentCache:F,ReactCurrentBatchConfig:m,ReactCurrentOwner:$,ContextRegistry:{}},w=L.ContextRegistry;u.Children={map:d,forEach:function(e,t,n){d(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!b(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=p;u.Fragment=Y;u.Profiler=J;u.PureComponent=C;u.StrictMode=G;u.Suspense=Z;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L;u.cache=function(e){return function(){var t=F.current;if(!t)return e.apply(null,arguments);var n=t.getCacheForType(ce);t=n.get(e),t===void 0&&(t=g(),n.set(e,t)),n=0;for(var r=arguments.length;n<r;n++){var o=arguments[n];if(typeof o=="function"||typeof o=="object"&&o!==null){var c=t.o;c===null&&(t.o=c=new WeakMap),t=c.get(o),t===void 0&&(t=g(),c.set(o,t))}else c=t.p,c===null&&(t.p=c=new Map),t=c.get(o),t===void 0&&(t=g(),c.set(o,t))}if(t.s===1)return t.v;if(t.s===2)throw t.v;try{var i=e.apply(null,arguments);return n=t,n.s=1,n.v=i}catch(l){throw i=t,i.s=2,i.v=l,l}}};u.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=V({},e.props),o=e.key,c=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,i=$.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)q.call(t,s)&&!T.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var a=0;a<s;a++)l[a]=arguments[a+2];r.children=l}return{$$typeof:y,type:e.type,key:o,ref:c,props:r,_owner:i}};u.createContext=function(e){return e={$$typeof:K,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:k,_context:e},e.Consumer=e};u.createElement=D;u.createFactory=function(e){var t=D.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.createServerContext=function(e,t){var n=!0;if(!w[e]){n=!1;var r={$$typeof:Q,_currentValue:t,_currentValue2:t,_defaultValue:t,_threadCount:0,Provider:null,Consumer:null,_globalName:e};r.Provider={$$typeof:k,_context:r},w[e]=r}if(r=w[e],r._defaultValue===S)r._defaultValue=t,r._currentValue===S&&(r._currentValue=t),r._currentValue2===S&&(r._currentValue2=t);else if(n)throw Error("ServerContext: "+e+" already defined");return r};u.forwardRef=function(e){return{$$typeof:X,render:e}};u.isValidElement=b;u.lazy=function(e){return{$$typeof:te,_payload:{_status:-1,_result:e},_init:oe}};u.memo=function(e,t){return{$$typeof:ee,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=m.transition;m.transition={};try{e()}finally{m.transition=t}};u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};u.unstable_useCacheRefresh=function(){return f.current.useCacheRefresh()};u.use=function(e){return f.current.use(e)};u.useCallback=function(e,t){return f.current.useCallback(e,t)};u.useContext=function(e){return f.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return f.current.useDeferredValue(e)};u.useEffect=function(e,t){return f.current.useEffect(e,t)};u.useId=function(){return f.current.useId()};u.useImperativeHandle=function(e,t,n){return f.current.useImperativeHandle(e,t,n)};u.useInsertionEffect=function(e,t){return f.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return f.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return f.current.useMemo(e,t)};u.useReducer=function(e,t,n){return f.current.useReducer(e,t,n)};u.useRef=function(e){return f.current.useRef(e)};u.useState=function(e){return f.current.useState(e)};u.useSyncExternalStore=function(e,t,n){return f.current.useSyncExternalStore(e,t,n)};u.useTransition=function(){return f.current.useTransition()};u.version="18.3.0-canary-0210f0b08-20230525"});var M=_((de,A)=>{"use strict";A.exports=U()});var B=_(h=>{"use strict";var ie=M(),le=Symbol.for("react.element"),se=Symbol.for("react.fragment"),fe=Object.prototype.hasOwnProperty,ae=ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pe={key:!0,ref:!0,__self:!0,__source:!0};function W(e,t,n){var r,o={},c=null,i=null;n!==void 0&&(c=""+n),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)fe.call(t,r)&&!pe.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:le,type:e,key:c,ref:i,props:o,_owner:ae.current}}h.Fragment=se;h.jsx=W;h.jsxs=W});var ye=_((me,z)=>{"use strict";z.exports=B()});export{M as a,ye as b};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
