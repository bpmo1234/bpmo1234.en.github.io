import{a as De,b as U}from"/build/_shared/chunk-DFIGMYQH.js";import{$ as xe,E as be,I as Z,J as ee,K as fe,L as f,M as me,O as he,V as Pe,Y as ge,ba as Ce,ga as q,ia as ke,ka as ve,la as ye,na as g,oa as oe,sa as $e,ta as p,x as ue,y as pe}from"/build/_shared/chunk-WQT5KMCO.js";import{a as w,b as Y}from"/build/_shared/chunk-QLU6BERC.js";import{f as P}from"/build/_shared/chunk-JEBMXGTI.js";var re=P(w(),1);var Se=P(w(),1);function ro(e){let{id:o,label:i,"aria-labelledby":s,"aria-label":r,labelElementType:l="label"}=e;o=Z(o);let t=Z(),a={};i?(s=s?`${s} ${t}`:t,a={id:t,htmlFor:l==="label"?o:void 0}):!s&&!r&&console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");let n=he({id:o,"aria-label":r,"aria-labelledby":s});return{labelProps:a,fieldProps:n}}function Ie(e){let{description:o,errorMessage:i,validationState:s}=e,{labelProps:r,fieldProps:l}=ro(e),t=ee([Boolean(o),Boolean(i),s]),a=ee([Boolean(o),Boolean(i),s]);return l=f(l,{"aria-describedby":[t,a,e["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:r,fieldProps:l,descriptionProps:{id:t},errorMessageProps:{id:a}}}function se(e,o,i){let{inputProps:s,isSelected:r,isPressed:l,isDisabled:t,isReadOnly:a}=De(e,o,i),{isIndeterminate:n}=e;return(0,Se.useEffect)(()=>{i.current&&(i.current.indeterminate=n)}),{inputProps:{...s,checked:r},isSelected:r,isPressed:l,isDisabled:t,isReadOnly:a}}var Ge=new WeakMap,Re=new WeakMap,Oe=new WeakMap;function Me(e,o){let{isDisabled:i,name:s}=e,{labelProps:r,fieldProps:l,descriptionProps:t,errorMessageProps:a}=Ie({...e,labelElementType:"span"});Re.set(o,t.id),Oe.set(o,a.id);let n=me(e,{labelable:!0});return Ge.set(o,s),{groupProps:f(n,{role:"group","aria-disabled":i||void 0,...l}),labelProps:r,descriptionProps:t,errorMessageProps:a}}function Ne(e,o,i){let s=U({isReadOnly:e.isReadOnly||o.isReadOnly,isSelected:o.isSelected(e.value),onChange(l){l?o.addValue(e.value):o.removeValue(e.value),e.onChange&&e.onChange(l)}}),r=se({...e,isReadOnly:e.isReadOnly||o.isReadOnly,isDisabled:e.isDisabled||o.isDisabled,name:e.name||Ge.get(o)},s,i);return{...r,inputProps:{...r.inputProps,"aria-describedby":[o.validationState==="invalid"?Oe.get(o):null,Re.get(o)].filter(Boolean).join(" ")||void 0}}}function Ee(e={}){let[o,i]=be(e.value,e.defaultValue||[],e.onChange);return{value:o,setValue(r){e.isReadOnly||e.isDisabled||i(r)},isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isSelected(r){return o.includes(r)},addValue(r){e.isReadOnly||e.isDisabled||o.includes(r)||i(o.concat(r))},removeValue(r){e.isReadOnly||e.isDisabled||o.includes(r)&&i(o.filter(l=>l!==r))},toggleValue(r){e.isReadOnly||e.isDisabled||(o.includes(r)?i(o.filter(l=>l!==r)):i(o.concat(r)))},validationState:e.validationState}}function _e(e){let{as:o,ref:i,classNames:s,children:r,label:l,size:t="md",color:a="primary",radius:n="md",orientation:k="vertical",lineThrough:m=!1,isDisabled:v=!1,disableAnimation:h=!1,description:z,errorMessage:T,className:V,...y}=e,L=o||"div",E=ve(i),I=Ee(y),{labelProps:B,groupProps:F,descriptionProps:A,errorMessageProps:W}=Me({"aria-label":typeof l=="string"?l:y["aria-label"],...y},I),S=(0,re.useMemo)(()=>({size:t,color:a,radius:n,lineThrough:m,isDisabled:v,disableAnimation:h,groupState:I}),[t,a,n,m,v,h,I]),u=(0,re.useMemo)(()=>pe(),[]),$=g(V,s?.base);return{Component:L,children:r,label:l,context:S,description:z,errorMessage:T,getGroupProps:()=>({ref:E,className:u.base({class:$}),...f(F,y)}),getLabelProps:()=>({className:u.label({class:s?.label}),...B}),getWrapperProps:()=>({className:u.wrapper({class:s?.wrapper}),role:"presentation","data-orientation":k}),getDescriptionProps:(c={})=>({...c,...A,className:u.description({class:g(s?.description,c?.className)})}),getErrorMessageProps:(c={})=>({...c,...W,className:u.errorMessage({class:g(s?.errorMessage,c?.className)})})}}var[we,Te]=ke({name:"CheckboxGroupContext",strict:!1});var x=P(Y(),1),Ve=q((e,o)=>{let{children:i,context:s,label:r,description:l,errorMessage:t,getGroupProps:a,getLabelProps:n,getWrapperProps:k,getDescriptionProps:m,getErrorMessageProps:v}=_e({ref:o,...e});return(0,x.jsxs)("div",{...a(),children:[r&&(0,x.jsx)("label",{...n(),children:r}),(0,x.jsx)("div",{...k(),children:(0,x.jsx)(we,{value:s,children:i})}),t?(0,x.jsx)("div",{...v(),children:t}):l?(0,x.jsx)("div",{...m(),children:l}):null]})});Ve.displayName="NextUI.CheckboxGroup";var ao=Ve;var M=P(Y(),1);function io(e){let{isSelected:o,disableAnimation:i,...s}=e;return(0,M.jsx)("svg",{"aria-hidden":"true",role:"presentation",viewBox:"0 0 17 18",...s,children:(0,M.jsx)("polyline",{fill:"none",points:"1 9 7 14 15 4",stroke:"currentColor",strokeDasharray:22,strokeDashoffset:o?44:66,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,style:!i&&o?{transition:"stroke-dashoffset 250ms linear 0.2s"}:{}})})}function lo(e){let{isSelected:o,disableAnimation:i,...s}=e;return(0,M.jsx)("svg",{stroke:"currentColor",strokeWidth:3,viewBox:"0 0 24 24",...s,children:(0,M.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function Le(e){let{isIndeterminate:o,...i}=e;return(0,M.jsx)(o?lo:io,{...i})}var D=P(w(),1),N=P(w(),1);function Be(e={}){var o,i,s,r,l,t;let a=Te(),n=!!a,{as:k,ref:m,value:v="",children:h,icon:z,name:T,isRequired:V=!1,isReadOnly:y=!1,autoFocus:L=!1,isSelected:E,size:I=(o=a?.size)!=null?o:"md",color:B=(i=a?.color)!=null?i:"primary",radius:F=(s=a?.radius)!=null?s:"md",lineThrough:A=(r=a?.lineThrough)!=null?r:!1,isDisabled:W=(l=a?.isDisabled)!=null?l:!1,disableAnimation:S=(t=a?.disableAnimation)!=null?t:!1,isIndeterminate:u=!1,validationState:$,defaultSelected:j,classNames:d,onChange:ae,className:ie,onValueChange:H,...c}=e;a&&$e&&(E&&oe("The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.","Checkbox"),j&&oe("The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.","Checkbox"));let We=k||"label",K=(0,N.useRef)(null),je=ye(m,K),J=(0,D.useId)(),Q=(0,N.useMemo)(()=>{let b=c["aria-label"]||typeof h=="string"?h:void 0;return{name:T,value:v,children:h,autoFocus:L,defaultSelected:j,isIndeterminate:u,isRequired:V,isSelected:E,isDisabled:W,isReadOnly:y,validationState:$,"aria-label":b,"aria-labelledby":c["aria-labelledby"]||J,onChange:H}},[v,T,J,h,L,u,W,y,E,j,$,c["aria-label"],c["aria-labelledby"],H]),{inputProps:G,isSelected:_,isDisabled:R,isReadOnly:Ke,isPressed:qe}=n?Ne({...Q,validationState:$},a.groupState,K):se(Q,U(Q),K),X=(0,N.useMemo)(()=>$==="invalid",[$]),le=R||Ke,[Ue,te]=(0,D.useState)(!1),{pressProps:ze}=Pe({isDisabled:le,onPressStart(b){b.pointerType!=="keyboard"&&te(!0)},onPressEnd(b){b.pointerType!=="keyboard"&&te(!1)}}),He=le?!1:Ue||qe;V&&(G.required=!0);let{hoverProps:Je,isHovered:ne}=ge({isDisabled:G.disabled}),{focusProps:Qe,isFocused:de,isFocusVisible:ce}=xe({autoFocus:G.autoFocus}),O=(0,N.useMemo)(()=>ue({color:B,size:I,radius:F,lineThrough:A,isDisabled:R,disableAnimation:S}),[B,I,F,A,R,S]),Xe=g(ie,d?.base),Ye=()=>({ref:je,className:O.base({class:Xe}),"data-disabled":p(R),"data-selected":p(_||u),"data-invalid":p(X),"data-hover":p(ne),"data-focus":p(de),"data-pressed":p(He),"data-readonly":p(G.readOnly),"data-focus-visible":p(ce),"data-indeterminate":p(u),...f(Je,ze,c)}),Ze=(b={})=>({...b,"aria-hidden":!0,className:g(O.wrapper({class:g(d?.wrapper,b?.className)}))}),eo=()=>({ref:K,...f(G,Qe),onChange:fe(G.onChange,ae)}),oo=(0,D.useCallback)(()=>({id:J,className:O.label({class:d?.label})}),[O,d?.label,R,_,X]),so=(0,D.useCallback)(()=>({isSelected:_,isIndeterminate:!!u,disableAnimation:!!S,className:O.icon({class:d?.icon})}),[O,d?.icon,_,u,S]);return{Component:We,icon:z,children:h,isSelected:_,isDisabled:R,isInvalid:X,isFocused:de,isHovered:ne,isFocusVisible:ce,getBaseProps:Ye,getWrapperProps:Ze,getInputProps:eo,getLabelProps:oo,getIconProps:so}}var Fe=P(w(),1),C=P(Y(),1),Ae=q((e,o)=>{let{Component:i,children:s,icon:r=(0,C.jsx)(Le,{}),getBaseProps:l,getWrapperProps:t,getInputProps:a,getIconProps:n,getLabelProps:k}=Be({ref:o,...e}),m=typeof r=="function"?r(n()):(0,Fe.cloneElement)(r,n());return(0,C.jsxs)(i,{...l(),children:[(0,C.jsx)(Ce,{children:(0,C.jsx)("input",{...a()})}),(0,C.jsx)("span",{...t(),children:m}),s&&(0,C.jsx)("span",{...k(),children:s})]})});Ae.displayName="NextUI.Checkbox";var to=Ae;export{ao as a,to as b};
