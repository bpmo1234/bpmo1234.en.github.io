import{a as m,b as g}from"/build/_shared/chunk-TLKZEMLJ.js";import{n as R}from"/build/_shared/chunk-OT3RM5IB.js";import{a as x,b}from"/build/_shared/chunk-QLU6BERC.js";import{f as u}from"/build/_shared/chunk-JEBMXGTI.js";var e=u(x());var r=u(b());function B(a){return e.Children.toArray(a).filter(t=>e.isValidElement(t))}var y=e.forwardRef(({children:a,className:t,separator:n=(0,r.jsx)(g,{className:"h-4 w-4"}),addSeparator:c=!0,...l},p)=>{let s=B(a),d=s.map((o,i)=>{if(o.type===N)return e.cloneElement(o,{addSeparator:c,separator:n,isLastChild:s.length===i+1});if(o.type===e.Fragment){let f=B(o.props.children);return f.map((v,C)=>e.cloneElement(v,{addSeparator:c,separator:n,isLastChild:f.length===C+1&&s.length===i+1}))}return o});return(0,r.jsx)("nav",{className:m("relative break-words",t),"aria-label":"breadcrumb",...l,ref:p,children:(0,r.jsx)("ol",{className:"flex items-center",children:d})})});y.displayName="Breadcrumb";var N=e.forwardRef(({children:a,className:t,classNames:n,isLastChild:c,separator:l,addSeparator:p,to:s,...d},o)=>(0,r.jsxs)("li",{className:m("inline-flex items-center",t),...d,ref:o,children:[(0,r.jsx)(R,{to:s,className:({isActive:i})=>m(`text-sm font-medium ${i?"pointer-events-none aria-[current]:opacity-60":"underline-offset-4 hover:underline"} focus:outline-none focus:ring-2 focus:ring-primary`,n?.navlink),end:!0,children:a}),!c&&p&&(0,r.jsx)(h,{className:n?.separator,children:l})]}));N.displayName="BreadcrumbItem";var h=e.forwardRef(({className:a,...t},n)=>(0,r.jsx)("span",{className:m("mx-2 opacity-50",a),role:"presentation",...t,ref:n}));h.displayName="BreadcrumbSeparator";export{y as a,N as b};
