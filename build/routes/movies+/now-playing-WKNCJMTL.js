import{a as x}from"/build/_shared/chunk-6TVKIBKR.js";import"/build/_shared/chunk-UFQ7JC3I.js";import{a as f}from"/build/_shared/chunk-ZXM5JEIC.js";import{a as L}from"/build/_shared/chunk-AN4HOKES.js";import{a as w}from"/build/_shared/chunk-NUWP7QIC.js";import"/build/_shared/chunk-FWNPCILQ.js";import"/build/_shared/chunk-QIV3LQ3I.js";import"/build/_shared/chunk-RHMBYA3G.js";import"/build/_shared/chunk-MTFSXZFZ.js";import"/build/_shared/chunk-56VXFNSV.js";import"/build/_shared/chunk-UIEN6MX3.js";import"/build/_shared/chunk-PVLFFDYO.js";import"/build/_shared/chunk-5ITNFNVW.js";import"/build/_shared/chunk-2U5IOMZT.js";import"/build/_shared/chunk-RCF6322T.js";import"/build/_shared/chunk-FHD6BXRZ.js";import"/build/_shared/chunk-HHWVOGW6.js";import"/build/_shared/chunk-S23KMKSF.js";import"/build/_shared/chunk-VMR2D5E2.js";import"/build/_shared/chunk-6XH6CZM3.js";import"/build/_shared/chunk-UUFKR7CL.js";import"/build/_shared/chunk-ODDNHQYY.js";import{a as N}from"/build/_shared/chunk-RA2CXU7U.js";import"/build/_shared/chunk-P5OZIZVO.js";import"/build/_shared/chunk-CEP3TN4Z.js";import"/build/_shared/chunk-5SF556RN.js";import"/build/_shared/chunk-HASDG25T.js";import"/build/_shared/chunk-VQ5EC5B2.js";import{b as d}from"/build/_shared/chunk-3OEQ7K3T.js";import{b as g}from"/build/_shared/chunk-J6UTVW47.js";import{a as u}from"/build/_shared/chunk-7T23YSQW.js";import"/build/_shared/chunk-U3HIYESC.js";import"/build/_shared/chunk-KFQLBWY7.js";import"/build/_shared/chunk-5MV7UISD.js";import"/build/_shared/chunk-L54RSDJF.js";import"/build/_shared/chunk-Q4FXHGWO.js";import"/build/_shared/chunk-PV3FM54N.js";import"/build/_shared/chunk-7ZDGSIBA.js";import"/build/_shared/chunk-NO7IKHGB.js";import"/build/_shared/chunk-65A6DYIU.js";import"/build/_shared/chunk-TWHYYFCA.js";import"/build/_shared/chunk-RQG6T6UG.js";import"/build/_shared/chunk-KOFAMGV2.js";import"/build/_shared/chunk-FL5UVREB.js";import"/build/_shared/chunk-56WF7HCU.js";import"/build/_shared/chunk-GBMHDDOY.js";import"/build/_shared/chunk-AO66PQB5.js";import"/build/_shared/chunk-KITECXBJ.js";import"/build/_shared/chunk-B5P4CYPT.js";import"/build/_shared/chunk-TQANA533.js";import"/build/_shared/chunk-E3HN6VYL.js";import"/build/_shared/chunk-NXMX6MFX.js";import"/build/_shared/chunk-OZSVYI4Q.js";import"/build/_shared/chunk-J3ZU6SDT.js";import"/build/_shared/chunk-ADMPE4EY.js";import"/build/_shared/chunk-HXGDBLUY.js";import"/build/_shared/chunk-UWVAGYA2.js";import"/build/_shared/chunk-4LJTPU4C.js";import"/build/_shared/chunk-CQDTB6KU.js";import"/build/_shared/chunk-GYMQZE7X.js";import"/build/_shared/chunk-CKU4S6GJ.js";import"/build/_shared/chunk-VRDZAOTH.js";import"/build/_shared/chunk-WQT5KMCO.js";import"/build/_shared/chunk-HEMBAUA6.js";import{a as y}from"/build/_shared/chunk-DGVX6BYT.js";import{b as v}from"/build/_shared/chunk-NYVQ56JW.js";import"/build/_shared/chunk-TLKZEMLJ.js";import"/build/_shared/chunk-UE6UC7GV.js";import{b as l,d as m,t as p}from"/build/_shared/chunk-OT3RM5IB.js";import{b as c}from"/build/_shared/chunk-QLU6BERC.js";import{f as t}from"/build/_shared/chunk-JEBMXGTI.js";var T=t(L());var e=t(N());var b=t(x());var i=t(c()),C=y(()=>[{title:"Sora - Now Playing Movies"},{name:"description",content:"Now Playing Movies"},{property:"og:url",content:"https://sorachill.vercel.app/movies/now-playing"},{property:"og:title",content:"Sora - Now Playing Movies"},{property:"og:description",content:"Now Playing Movies"},{name:"twitter:title",content:"Sora - Now Playing Movies"},{name:"twitter:description",content:"Now Playing Movies"}]);var E={breadcrumb:()=>(0,i.jsx)(v,{to:"/movies/now-playing",children:"Now Playing Movies"},"movies-now-playing"),miniTitle:()=>({title:"Movies",subtitle:"Now Playing",showImage:!1}),showListViewChangeButton:!0},D=()=>{let{movies:a}=p(),n=u("root"),P=l(),s=m(),o=f(),{t:h}=g(),M=(I,r)=>{r.offset?.x>100&&s("/movies/popular"),r.offset?.x<-100&&r.offset?.y>-50&&s("/movies/upcoming")};return(0,i.jsx)(d.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"flex w-full flex-col items-center justify-center px-3 sm:px-0",drag:e.isMobile&&o?"x":!1,dragConstraints:e.isMobile&&o?{left:0,right:0}:!1,dragElastic:e.isMobile&&o?.7:!1,onDragEnd:M,dragDirectionLock:e.isMobile&&o,draggable:e.isMobile&&o,children:(0,i.jsx)(w,{currentPage:a?.page,genresMovie:n?.genresMovie,genresTv:n?.genresTv,items:a?.items,itemsType:"movie",listName:h("now-playing-movies"),listType:"grid",showListTypeChangeButton:!0,totalPages:a?.totalPages})},P.key)},H=D;export{H as default,E as handle,C as meta};
