import{g as u}from"/build/_shared/chunk-4LJTPU4C.js";import{a as c}from"/build/_shared/chunk-QLU6BERC.js";import{f as a}from"/build/_shared/chunk-JEBMXGTI.js";var h=a(c(),1);function y(e){let[n,r]=(0,h.useState)(void 0);return u(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let f=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;let b=i[0],t,o;if("borderBoxSize"in b){let s=b.borderBoxSize,d=Array.isArray(s)?s[0]:s;t=d.inlineSize,o=d.blockSize}else t=e.offsetWidth,o=e.offsetHeight;r({width:t,height:o})});return f.observe(e,{box:"border-box"}),()=>f.unobserve(e)}else r(void 0)},[e]),n}export{y as a};
