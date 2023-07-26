import{a as g}from"/build/_shared/chunk-O57WGTOI.js";import{a as u}from"/build/_shared/chunk-NUWP7QIC.js";import{a as v}from"/build/_shared/chunk-NO7IKHGB.js";import{a as P}from"/build/_shared/chunk-65A6DYIU.js";import{a as d}from"/build/_shared/chunk-FL5UVREB.js";import{a as W}from"/build/_shared/chunk-AO66PQB5.js";import{b as F,c as A}from"/build/_shared/chunk-TQANA533.js";import{a as s}from"/build/_shared/chunk-NXMX6MFX.js";import{b as p}from"/build/_shared/chunk-CQDTB6KU.js";import{d as T}from"/build/_shared/chunk-OT3RM5IB.js";import{a as _,b as z}from"/build/_shared/chunk-QLU6BERC.js";import{c as N,f as o}from"/build/_shared/chunk-JEBMXGTI.js";var Y=N((q,R)=>{R.exports={}});var H=N((G,k)=>{k.exports={}});var B=o(_());var E=o(F());var e=o(z()),Q=L=>{let{id:a,type:i,title:n,overview:c,posterPath:x,tmdbRating:j,imdbRating:f,anilistRating:h,genresMedia:y,genresAnime:w,recommendationsMovies:m,recommendationsAnime:r,genresMovie:D,genresTv:$,episodes:b,season:S,providers:M}=L,l=T(),I=d("(max-width: 650px)",{initializeWithValue:!1}),C=d("(max-width: 768px)",{initializeWithValue:!1});return(0,e.jsxs)(e.Fragment,{children:[i==="anime"||i==="tv"?(0,e.jsxs)(e.Fragment,{children:[i==="anime"?(0,e.jsx)(g,{type:"anime",id:a,episodes:b,providers:M||[]}):null,i==="tv"?(0,e.jsx)(g,{type:"tv",id:a,episodes:b,season:S,providers:M||[]}):null,(0,e.jsx)(s,{y:10})]}):null,(0,e.jsxs)("div",{className:"flex w-full flex-row items-start justify-start gap-3 rounded-xl bg-content1 p-2 sm:p-4",children:[!C&&(x?(0,e.jsx)(A,{src:x,alt:n,title:n,disableSkeleton:!1,radius:"lg",classNames:{wrapper:"w-full h-auto aspect-[2/3] min-w-[auto] min-h-[auto] !max-w-[137px] lg:!max-w-[158px] xl:!max-w-[173px] 2xl:!max-w-[239px]"},loading:"lazy",placeholder:"empty",responsive:[{size:{width:137,height:205},maxWidth:1024},{size:{width:158,height:237},maxWidth:1280},{size:{width:173,height:260},maxWidth:1400},{size:{width:239,height:359}}],options:{contentType:E.MimeType.WEBP}}):(0,e.jsx)("div",{className:"flex items-center justify-center",children:(0,e.jsx)(W,{icon:(0,e.jsx)(P,{width:48,height:48}),radius:"xl",classNames:{base:"z-0 w-[137px] h-auto aspect-[2/3] lg:w-[158px] xl:w-[173px] 2xl:w-[239px]"}})})),(0,e.jsxs)("div",{className:"flex w-full flex-col items-start justify-start gap-y-4",children:[(0,e.jsx)("h3",{className:"font-semibold text-default-900",children:n}),i==="movie"||i==="tv"?(0,e.jsxs)("div",{className:"flex flex-row gap-x-6",children:[(0,e.jsx)(v,{rating:j?.toFixed(1),ratingType:"movie"}),f&&(0,e.jsxs)("div",{className:"flex flex-row items-center gap-x-2",children:[(0,e.jsx)("p",{className:"rounded-xl bg-[#ddb600] px-1 text-black",children:"IMDb"}),(0,e.jsx)("p",{children:f})]})]}):null,i==="anime"&&h?(0,e.jsx)(v,{rating:h,ratingType:"anime"}):null,(0,e.jsxs)("div",{className:"flex w-full flex-row flex-wrap items-center justify-start gap-x-3",children:[(i==="movie"||i==="tv")&&y?y.map(t=>(0,e.jsx)(p,{type:"button",size:I?"sm":"md",className:"mb-1 hover:opacity-80",onPress:()=>l(`/discover/${i==="movie"?"movies":"tv-shows"}?with_genres=${t?.id}`),children:t?.name},t?.id)):null,i==="anime"?w&&w.map((t,V)=>(0,e.jsx)(p,{type:"button",size:I?"sm":"md",className:"mb-1 hover:opacity-80",onPress:()=>l(`/discover/anime?genres=${t}`),children:t},V)):null]}),i==="movie"||i==="tv"?(0,e.jsx)("p",{style:{textAlign:"justify"},children:c}):null,i==="anime"?(0,e.jsx)("p",{style:{textAlign:"justify"},dangerouslySetInnerHTML:{__html:c||""}}):null]})]}),(0,e.jsx)(s,{y:10}),(i==="movie"||i==="tv")&&m&&m.length>0?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(u,{genresMovie:D,genresTv:$,items:m,itemsType:i,listName:"You May Also Like",listType:"slider-card",navigationButtons:!0,onClickViewMore:()=>l(`/${i==="movie"?"movies":"tv-shows"}/${a}/recommendations`),showMoreList:!0}),(0,e.jsx)(s,{y:10})]}):null,i==="anime"&&r&&r.length>0?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(u,{items:r,itemsType:"anime",listName:"You May Also Like",listType:"slider-card",navigationButtons:!0}),(0,e.jsx)(s,{y:10})]}):null]})},oe=(0,B.memo)(Q);export{Y as a,H as b,oe as c};
