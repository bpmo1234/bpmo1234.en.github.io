function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}var p;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(p||(p={}));var m;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(m||(m={}));var g=function(t,r){r===void 0&&(r={});let n=typeof r=="number"?{status:r}:r,o=new Headers(n.headers);return o.has("Content-Type")||o.set("Content-Type","application/json; charset=utf-8"),new Response(JSON.stringify(t),c({},n,{headers:o}))};var y=["post","put","patch","delete"],_=new Set(y),P=["get",...y],O=new Set(P);var I=Symbol("deferred");var u=(e,t={})=>g(e,t);var L=["/build/","/icons/","/favicons/","/images/","/locales/","/"],v="asset-cache",b="data-cache",w="document-cache";function a(...e){}function f(e,t){return t.includes(e.method.toLowerCase())}function M(e){return f(e,["get"])&&L.some(t=>e.url.startsWith(t))}function A(e){let t=new URL(e.url);return f(e,["get"])&&t.searchParams.get("_data")}function C(e){return f(e,["get"])&&e.mode==="navigate"}async function F(e,{response:t}){return t}async function U(e){let t=new Map;if(e.data.type==="REMIX_NAVIGATION"){let{isMount:r,location:n,matches:o,manifest:R}=e.data,i=n.pathname+n.search+n.hash,[S,D,E]=await Promise.all([caches.open(b),caches.open(w),caches.match(i)]);if((!E||!r)&&(a("Caching document for",i),t.set(i,D.add(i).catch(s=>{a(`Failed to cache document for ${i}:`,s)}))),r){for(let s of o)if(R.routes[s.id].hasLoader){let h=new URLSearchParams(n.search);h.set("_data",s.id);let d=h.toString();d=d?`?${d}`:"";let l=n.pathname+d+n.hash;t.has(l)||(a("Caching data for",l),t.set(l,S.add(l).catch(x=>{a(`Failed to cache data for ${l}:`,x)})))}}}e.data.type==="SKIP_WAITING"&&(a("Skipping waiting"),self.skipWaiting()),await Promise.all(t.values())}async function j(e){let t=new URL(e.request.url);if(M(e.request)){let r=await caches.match(e.request,{cacheName:v,ignoreVary:!0,ignoreSearch:!0});if(r)return a("Serving asset from cache",t.pathname),r;a("Serving asset from network",t.pathname);let n=await fetch(e.request);return n.status===200&&await(await caches.open(v)).put(e.request,n.clone()),n}if(A(e.request))try{a("Serving data from network",t.pathname+t.search);let r=await fetch(e.request.clone());return await(await caches.open(b)).put(e.request,r.clone()),r}catch{a("Serving data from network failed, falling back to cache",t.pathname+t.search);let n=await caches.match(e.request);return n?(n.headers.set("X-Remix-Worker","yes"),n):u({message:"Network Error"},{status:500,headers:{"X-Remix-Catch":"yes","X-Remix-Worker":"yes"}})}if(C(e.request))try{a("Serving document from network",t.pathname);let r=await fetch(e.request);return await(await caches.open(w)).put(e.request,r.clone()),r}catch(r){a("Serving document from network failed, falling back to cache",t.pathname);let n=await caches.match(e.request);if(n)return n;throw r}return fetch(e.request.clone())}var T=async e=>{let t=JSON.parse(e?.data.text()),r=t.title?t.title:"Sora PWA",n={body:t.body?t.body:"Notification Body Text",icon:t.icon?t.icon:"/favicons/android/android-launchericon-96-96.png",badge:t.badge?t.badge:"/favicons/android/android-launchericon-48-48.png",dir:t.dir?t.dir:"auto",image:t.image?t.image:void 0,silent:t.silent?t.silent:!1};self.registration.showNotification(r,{...n})};self.addEventListener("message",e=>{e.waitUntil(U(e))});self.addEventListener("push",e=>{e.waitUntil(T(e))});self.addEventListener("fetch",e=>{e.respondWith((async()=>{let t={};try{t.response=await j(e)}catch(r){t.error=r}return F(e,t)})())});
/*! Bundled license information:

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/responses.js:
  (**
   * @remix-run/server-runtime v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/index.js:
  (**
   * @remix-run/server-runtime v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
