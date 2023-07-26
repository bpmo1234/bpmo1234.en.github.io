import{a as Me}from"/build/_shared/chunk-ODDNHQYY.js";import{a as ke}from"/build/_shared/chunk-QLU6BERC.js";import{c as p,f as A}from"/build/_shared/chunk-JEBMXGTI.js";var H=p((It,Z)=>{"use strict";Z.exports=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var a,o,n;if(Array.isArray(t)){if(a=t.length,a!=r.length)return!1;for(o=a;o--!==0;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(n=Object.keys(t),a=n.length,a!==Object.keys(r).length)return!1;for(o=a;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[o]))return!1;for(o=a;o--!==0;){var s=n[o];if(!e(t[s],r[s]))return!1}return!0}return t!==t&&r!==r}});var ee=p((Rt,X)=>{"use strict";var K;K=function(){var e={},t={};return e.on=function(r,a){var o={name:r,handler:a};return t[r]=t[r]||[],t[r].unshift(o),o},e.off=function(r){var a=t[r.name].indexOf(r);a!==-1&&t[r.name].splice(a,1)},e.trigger=function(r,a){var o=t[r],n;if(o)for(n=o.length;n--;)o[n].handler(a)},e};X.exports=K});var ae=p((Vt,re)=>{re.exports=function(t,r,a){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},n.type=r.type||"text/javascript",n.charset=r.charset||"utf8",n.async="async"in r?!!r.async:!0,n.src=t,r.attrs&&qe(n,r.attrs),r.text&&(n.text=""+r.text);var s="onload"in n?te:Ue;s(n,a),n.onload||te(n,a),o.appendChild(n)};function qe(e,t){for(var r in t)e.setAttribute(r,t[r])}function te(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Ue(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}});var oe=p((O,ne)=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});var Ye=ae(),Le=Fe(Ye);function Fe(e){return e&&e.__esModule?e:{default:e}}O.default=function(e){var t=new Promise(function(r){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){r(window.YT);return}else{var a=window.location.protocol==="http:"?"http:":"https:";(0,Le.default)(a+"//www.youtube.com/iframe_api",function(n){n&&e.trigger("error",n)})}var o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){o&&o(),r(window.YT)}});return t};ne.exports=O.default});var se=p((Nt,ie)=>{var w=1e3,S=w*60,E=S*60,C=E*24,Be=C*365.25;ie.exports=function(e,t){t=t||{};var r=typeof e;if(r==="string"&&e.length>0)return Qe(e);if(r==="number"&&isNaN(e)===!1)return t.long?Ge(e):je(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function Qe(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]),a=(t[2]||"ms").toLowerCase();switch(a){case"years":case"year":case"yrs":case"yr":case"y":return r*Be;case"days":case"day":case"d":return r*C;case"hours":case"hour":case"hrs":case"hr":case"h":return r*E;case"minutes":case"minute":case"mins":case"min":case"m":return r*S;case"seconds":case"second":case"secs":case"sec":case"s":return r*w;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function je(e){return e>=C?Math.round(e/C)+"d":e>=E?Math.round(e/E)+"h":e>=S?Math.round(e/S)+"m":e>=w?Math.round(e/w)+"s":e+"ms"}function Ge(e){return x(e,C,"day")||x(e,E,"hour")||x(e,S,"minute")||x(e,w,"second")||e+" ms"}function x(e,t,r){if(!(e<t))return e<t*1.5?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}});var ue=p((i,le)=>{i=le.exports=L.debug=L.default=L;i.coerce=Ze;i.disable=Je;i.enable=$e;i.enabled=We;i.humanize=se();i.names=[];i.skips=[];i.formatters={};var Y;function ze(e){var t=0,r;for(r in e)t=(t<<5)-t+e.charCodeAt(r),t|=0;return i.colors[Math.abs(t)%i.colors.length]}function L(e){function t(){if(t.enabled){var r=t,a=+new Date,o=a-(Y||a);r.diff=o,r.prev=Y,r.curr=a,Y=a;for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];n[0]=i.coerce(n[0]),typeof n[0]!="string"&&n.unshift("%O");var l=0;n[0]=n[0].replace(/%([a-zA-Z%])/g,function(d,m){if(d==="%%")return d;l++;var y=i.formatters[m];if(typeof y=="function"){var h=n[l];d=y.call(r,h),n.splice(l,1),l--}return d}),i.formatArgs.call(r,n);var u=t.log||i.log||console.log.bind(console);u.apply(r,n)}}return t.namespace=e,t.enabled=i.enabled(e),t.useColors=i.useColors(),t.color=ze(e),typeof i.init=="function"&&i.init(t),t}function $e(e){i.save(e),i.names=[],i.skips=[];for(var t=(typeof e=="string"?e:"").split(/[\s,]+/),r=t.length,a=0;a<r;a++)t[a]&&(e=t[a].replace(/\*/g,".*?"),e[0]==="-"?i.skips.push(new RegExp("^"+e.substr(1)+"$")):i.names.push(new RegExp("^"+e+"$")))}function Je(){i.enable("")}function We(e){var t,r;for(t=0,r=i.skips.length;t<r;t++)if(i.skips[t].test(e))return!1;for(t=0,r=i.names.length;t<r;t++)if(i.names[t].test(e))return!0;return!1}function Ze(e){return e instanceof Error?e.stack||e.message:e}});var ce=p((c,fe)=>{c=fe.exports=ue();c.log=Xe;c.formatArgs=Ke;c.save=et;c.load=de;c.useColors=He;c.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:tt();c.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function He(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}c.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}};function Ke(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+c.humanize(this.diff),!!t){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(n){n!=="%%"&&(a++,n==="%c"&&(o=a))}),e.splice(o,0,r)}}function Xe(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function et(e){try{e==null?c.storage.removeItem("debug"):c.storage.debug=e}catch{}}function de(){var e;try{e=c.storage.debug}catch{}return!e&&typeof process<"u"&&"env"in process&&(e=process.env.DEBUG),e}c.enable(de());function tt(){try{return window.localStorage}catch{}}});var ye=p((I,pe)=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"];pe.exports=I.default});var ve=p((R,he)=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"];he.exports=R.default});var me=p((V,ge)=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5};ge.exports=V.default});var be=p((N,Pe)=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});var rt=me(),b=at(rt);function at(e){return e&&e.__esModule?e:{default:e}}N.default={pauseVideo:{acceptableStates:[b.default.ENDED,b.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[b.default.ENDED,b.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[b.default.ENDED,b.default.PLAYING,b.default.PAUSED],stateChangeRequired:!0,timeout:3e3}};Pe.exports=N.default});var Se=p((T,we)=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});var nt=ce(),ot=D(nt),it=ye(),st=D(it),lt=ve(),ut=D(lt),dt=be(),_e=D(dt);function D(e){return e&&e.__esModule?e:{default:e}}var ft=(0,ot.default)("youtube-player"),F={};F.proxyEvents=function(e){var t={},r=function(m){var y="on"+m.slice(0,1).toUpperCase()+m.slice(1);t[y]=function(h){ft('event "%s"',y,h),e.trigger(m,h)}},a=!0,o=!1,n=void 0;try{for(var s=ut.default[Symbol.iterator](),l;!(a=(l=s.next()).done);a=!0){var u=l.value;r(u)}}catch(d){o=!0,n=d}finally{try{!a&&s.return&&s.return()}finally{if(o)throw n}}return t};F.promisifyPlayer=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r={},a=function(y){t&&_e.default[y]?r[y]=function(){for(var h=arguments.length,_=Array(h),g=0;g<h;g++)_[g]=arguments[g];return e.then(function(v){var P=_e.default[y],Ne=v.getPlayerState(),z=v[y].apply(v,_);return P.stateChangeRequired||Array.isArray(P.acceptableStates)&&P.acceptableStates.indexOf(Ne)===-1?new Promise(function($){var De=function J(){var Te=v.getPlayerState(),W=void 0;typeof P.timeout=="number"&&(W=setTimeout(function(){v.removeEventListener("onStateChange",J),$()},P.timeout)),Array.isArray(P.acceptableStates)&&P.acceptableStates.indexOf(Te)!==-1&&(v.removeEventListener("onStateChange",J),clearTimeout(W),$())};v.addEventListener("onStateChange",De)}).then(function(){return z}):z})}:r[y]=function(){for(var h=arguments.length,_=Array(h),g=0;g<h;g++)_[g]=arguments[g];return e.then(function(v){return v[y].apply(v,_)})}},o=!0,n=!1,s=void 0;try{for(var l=st.default[Symbol.iterator](),u;!(o=(u=l.next()).done);o=!0){var d=u.value;a(d)}}catch(m){n=!0,s=m}finally{try{!o&&l.return&&l.return()}finally{if(n)throw s}}return r};T.default=F;we.exports=T.default});var Ae=p((k,Ce)=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});var ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pt=ee(),yt=Q(pt),ht=oe(),vt=Q(ht),gt=Se(),Ee=Q(gt);function Q(e){return e&&e.__esModule?e:{default:e}}var B=void 0;k.default=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,a=(0,yt.default)();if(B||(B=(0,vt.default)(a)),t.events)throw new Error("Event handlers cannot be overwritten.");if(typeof e=="string"&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=Ee.default.proxyEvents(a);var o=new Promise(function(s){if((typeof e>"u"?"undefined":ct(e))==="object"&&e.playVideo instanceof Function){var l=e;s(l)}else B.then(function(u){var d=new u.Player(e,t);return a.on("ready",function(){s(d)}),null})}),n=Ee.default.promisifyPlayer(o,r);return n.on=a.on,n.off=a.off,n};Ce.exports=k.default});var f=A(Me()),M=A(ke()),Re=A(H()),Ve=A(Ae()),mt=Object.defineProperty,Pt=Object.defineProperties,bt=Object.getOwnPropertyDescriptors,Oe=Object.getOwnPropertySymbols,_t=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable,xe=(e,t,r)=>t in e?mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))_t.call(t,r)&&xe(e,r,t[r]);if(Oe)for(var r of Oe(t))wt.call(t,r)&&xe(e,r,t[r]);return e},G=(e,t)=>Pt(e,bt(t)),St=(e,t,r)=>new Promise((a,o)=>{var n=u=>{try{l(r.next(u))}catch(d){o(d)}},s=u=>{try{l(r.throw(u))}catch(d){o(d)}},l=u=>u.done?a(u.value):Promise.resolve(u.value).then(n,s);l((r=r.apply(e,t)).next())});function Et(e,t){var r,a;if(e.videoId!==t.videoId)return!0;let o=((r=e.opts)==null?void 0:r.playerVars)||{},n=((a=t.opts)==null?void 0:a.playerVars)||{};return o.start!==n.start||o.end!==n.end}function Ie(e={}){return G(j({},e),{height:0,width:0,playerVars:G(j({},e.playerVars),{autoplay:0,start:0,end:0})})}function Ct(e,t){return e.videoId!==t.videoId||!(0,Re.default)(Ie(e.opts),Ie(t.opts))}function At(e,t){var r,a,o,n;return e.id!==t.id||e.className!==t.className||((r=e.opts)==null?void 0:r.width)!==((a=t.opts)==null?void 0:a.width)||((o=e.opts)==null?void 0:o.height)!==((n=t.opts)==null?void 0:n.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title}var Ot={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},xt={videoId:f.default.string,id:f.default.string,className:f.default.string,iframeClassName:f.default.string,style:f.default.object,title:f.default.string,loading:f.default.oneOf(["lazy","eager"]),opts:f.default.objectOf(f.default.any),onReady:f.default.func,onError:f.default.func,onPlay:f.default.func,onPause:f.default.func,onEnd:f.default.func,onStateChange:f.default.func,onPlaybackRateChange:f.default.func,onPlaybackQualityChange:f.default.func},q=class extends M.default.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=t=>{var r,a;return(a=(r=this.props).onReady)==null?void 0:a.call(r,t)},this.onPlayerError=t=>{var r,a;return(a=(r=this.props).onError)==null?void 0:a.call(r,t)},this.onPlayerStateChange=t=>{var r,a,o,n,s,l,u,d;switch((a=(r=this.props).onStateChange)==null||a.call(r,t),t.data){case q.PlayerState.ENDED:(n=(o=this.props).onEnd)==null||n.call(o,t);break;case q.PlayerState.PLAYING:(l=(s=this.props).onPlay)==null||l.call(s,t);break;case q.PlayerState.PAUSED:(d=(u=this.props).onPause)==null||d.call(u,t);break;default:}},this.onPlayerPlaybackRateChange=t=>{var r,a;return(a=(r=this.props).onPlaybackRateChange)==null?void 0:a.call(r,t)},this.onPlayerPlaybackQualityChange=t=>{var r,a;return(a=(r=this.props).onPlaybackQualityChange)==null?void 0:a.call(r,t)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}let t=G(j({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=(0,Ve.default)(this.container,t),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(r=>{this.props.title&&r.setAttribute("title",this.props.title),this.props.loading&&r.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var t;(t=this.internalPlayer)==null||t.getIframe().then(r=>{this.props.id?r.setAttribute("id",this.props.id):r.removeAttribute("id"),this.props.iframeClassName?r.setAttribute("class",this.props.iframeClassName):r.removeAttribute("class"),this.props.opts&&this.props.opts.width?r.setAttribute("width",this.props.opts.width.toString()):r.removeAttribute("width"),this.props.opts&&this.props.opts.height?r.setAttribute("height",this.props.opts.height.toString()):r.removeAttribute("height"),this.props.title?r.setAttribute("title",this.props.title):r.setAttribute("title","YouTube video player"),this.props.loading?r.setAttribute("loading",this.props.loading):r.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var t,r,a,o;if(typeof this.props.videoId>"u"||this.props.videoId===null){(t=this.internalPlayer)==null||t.stopVideo();return}let n=!1,s={videoId:this.props.videoId};if((r=this.props.opts)!=null&&r.playerVars&&(n=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(s.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(s.endSeconds=this.props.opts.playerVars.end)),n){(a=this.internalPlayer)==null||a.loadVideoById(s);return}(o=this.internalPlayer)==null||o.cueVideoById(s)},this.refContainer=t=>{this.container=t},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return St(this,null,function*(){At(e,this.props)&&this.updatePlayer(),Ct(e,this.props)&&(yield this.resetPlayer()),Et(e,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return M.default.createElement("div",{className:this.props.className,style:this.props.style},M.default.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},U=q;U.propTypes=xt;U.defaultProps=Ot;U.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var Dt=U;export{Dt as a};
/*! Bundled license information:

sister/src/sister.js:
  (**
  * @link https://github.com/gajus/sister for the canonical source repository
  * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
  *)
*/
