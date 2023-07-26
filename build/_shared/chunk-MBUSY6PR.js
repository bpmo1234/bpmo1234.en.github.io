import{a as le}from"/build/_shared/chunk-4EUDN2LI.js";import{c as Se,d as ae}from"/build/_shared/chunk-VJYUCGIE.js";import{b as ee}from"/build/_shared/chunk-R4UGCNGU.js";import{a as W,b as R,c as z,d as De,f as Ne}from"/build/_shared/chunk-55NVTXCL.js";import{a as q}from"/build/_shared/chunk-ZXM5JEIC.js";import{a as ye,b as O}from"/build/_shared/chunk-HHWVOGW6.js";import{b as Ce}from"/build/_shared/chunk-S23KMKSF.js";import{a as P}from"/build/_shared/chunk-VMR2D5E2.js";import{a as J}from"/build/_shared/chunk-P5OZIZVO.js";import{b as be,f as we}from"/build/_shared/chunk-3OEQ7K3T.js";import{a as ne}from"/build/_shared/chunk-NO7IKHGB.js";import{a as de}from"/build/_shared/chunk-65A6DYIU.js";import{a as xe}from"/build/_shared/chunk-TWHYYFCA.js";import{b as Y}from"/build/_shared/chunk-RQG6T6UG.js";import{a as E}from"/build/_shared/chunk-FL5UVREB.js";import{a as re}from"/build/_shared/chunk-AO66PQB5.js";import{a as ie,d as oe}from"/build/_shared/chunk-B5P4CYPT.js";import{b as Ee,c as se}from"/build/_shared/chunk-TQANA533.js";import{a as te}from"/build/_shared/chunk-NXMX6MFX.js";import{b as y}from"/build/_shared/chunk-CQDTB6KU.js";import{b as ve}from"/build/_shared/chunk-WQT5KMCO.js";import{b as Q,d as A,x as L}from"/build/_shared/chunk-OT3RM5IB.js";import{a as he,b as $}from"/build/_shared/chunk-QLU6BERC.js";import{f as N}from"/build/_shared/chunk-JEBMXGTI.js";var g=N(he());var pe=N(Ee());async function ce(r,s,t){try{return navigator.canShare({url:r})?(await navigator.share({title:s,text:t,url:r}),{status:"success",message:"Shared link accordingly!"}):{status:"bad",message:"Web Share API not supported"}}catch{throw new Error("Failed to share for some weird reason \u{1F937}\u200D\u2642\uFE0F!")}}var F=N(he());var f=N($()),Be=r=>{let{id:s,visible:t,closeHandler:c,type:o,title:i,origTitle:b,year:v,season:x,episode:C,animeType:w,isEnded:D}=r,h=L(),m=A(),B=ye(),{isShowSkipOpEdButton:u}=Y(),[p,T]=(0,F.useState)(),I=l=>{c(),o==="movie"?m(`/movies/${s}/watch?provider=${l.provider}&id=${l.id}`):o==="tv"?m(`/tv-shows/${s}/season/${x}/episode/${C}/watch?provider=${l.provider}&id=${l.id}`):o==="anime"&&m(`/anime/${s}/episode/${C}/watch?provider=${l.provider}&id=${l.id}&episode=${C}&skipOpEd=${u.value}`)};return(0,F.useEffect)(()=>{t&&(T([]),o==="movie"?h.load(`/api/provider?title=${i}&type=${o}&origTitle=${b}&year=${v}&isEnded=${D}&tmdbId=${s}`):o==="tv"?h.load(`/api/provider?title=${i}&type=${o}&origTitle=${b}&year=${v}&season=${x}&isEnded=${D}&tmdbId=${s}`):o==="anime"&&h.load(`/api/provider?title=${i}&type=${o}&origTitle=${b}&year=${v}&aid=${s}&animeType=${w}&isEnded=${D}`))},[t]),(0,F.useEffect)(()=>{h.data&&h.data.provider&&T(h.data.provider)},[h.data]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(De,{children:(0,f.jsx)(Ne,{children:"Select Provider"})}),(0,f.jsxs)("div",{className:"mt-4 flex w-full flex-col items-center justify-center",children:[p&&Array.isArray(p)?p.map(l=>(0,f.jsx)(y,{type:"button",variant:"light",onPress:()=>I(l),children:l.provider},l.id)):null,B==="loading"?(0,f.jsxs)("div",{role:"status",className:"max-w-sm animate-pulse",children:[(0,f.jsx)("div",{className:"mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"}),(0,f.jsx)("div",{className:"mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"}),(0,f.jsx)("div",{className:"mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"}),(0,f.jsx)("span",{className:"sr-only",children:"Loading..."})]}):null]})]})},me=Be;var n=N($()),_e=({color:r})=>(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:"M20.3591 12.7315C19.9891 12.7315 19.6791 12.4515 19.6391 12.0815C19.3991 9.88154 18.2191 7.90154 16.3991 6.64154C16.0691 6.41154 15.9891 5.96154 16.2191 5.63154C16.4491 5.30154 16.8991 5.22154 17.2291 5.45154C19.3991 6.96154 20.7991 9.32154 21.0891 11.9315C21.1291 12.3315 20.8391 12.6915 20.4391 12.7315C20.4091 12.7315 20.3891 12.7315 20.3591 12.7315Z",fill:r}),(0,n.jsx)("path",{d:"M3.73931 12.7812C3.71931 12.7812 3.68931 12.7812 3.66931 12.7812C3.26931 12.7412 2.97931 12.3812 3.01931 11.9812C3.28931 9.37118 4.66931 7.01118 6.81931 5.49118C7.13931 5.26118 7.59931 5.34118 7.82931 5.66118C8.05931 5.99118 7.97931 6.44118 7.65931 6.67118C5.85931 7.95118 4.68931 9.93118 4.46931 12.1212C4.42931 12.5012 4.10931 12.7812 3.73931 12.7812Z",fill:r}),(0,n.jsx)("path",{d:"M15.9906 21.1003C14.7606 21.6903 13.4406 21.9903 12.0606 21.9903C10.6206 21.9903 9.25059 21.6703 7.97059 21.0203C7.61059 20.8503 7.47059 20.4103 7.65059 20.0503C7.82059 19.6903 8.26059 19.5503 8.62059 19.7203C9.25059 20.0403 9.92059 20.2603 10.6006 20.3903C11.5206 20.5703 12.4606 20.5803 13.3806 20.4203C14.0606 20.3003 14.7306 20.0903 15.3506 19.7903C15.7206 19.6203 16.1606 19.7603 16.3206 20.1303C16.5006 20.4903 16.3606 20.9303 15.9906 21.1003Z",fill:r}),(0,n.jsx)("path",{d:"M12.0505 2.01172C10.5005 2.01172 9.23047 3.27172 9.23047 4.83172C9.23047 6.39172 10.4905 7.65172 12.0505 7.65172C13.6105 7.65172 14.8705 6.39172 14.8705 4.83172C14.8705 3.27172 13.6105 2.01172 12.0505 2.01172Z",fill:r}),(0,n.jsx)("path",{d:"M5.05047 13.8711C3.50047 13.8711 2.23047 15.1311 2.23047 16.6911C2.23047 18.2511 3.49047 19.5111 5.05047 19.5111C6.61047 19.5111 7.87047 18.2511 7.87047 16.6911C7.87047 15.1311 6.60047 13.8711 5.05047 13.8711Z",fill:r}),(0,n.jsx)("path",{d:"M18.9509 13.8711C17.4009 13.8711 16.1309 15.1311 16.1309 16.6911C16.1309 18.2511 17.3909 19.5111 18.9509 19.5111C20.5109 19.5111 21.7709 18.2511 21.7709 16.6911C21.7709 15.1311 20.5109 13.8711 18.9509 13.8711Z",fill:r})]}),je=({color:r})=>(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:"M20.6196 13.0701C20.2396 13.0701 19.9196 12.7801 19.8696 12.4001C19.6296 10.1401 18.4096 8.0901 16.5296 6.7901C16.1896 6.5501 16.1096 6.0901 16.3396 5.7501C16.5796 5.4101 17.0496 5.3301 17.3796 5.5601C19.6196 7.1101 21.0596 9.5501 21.3496 12.2401C21.3896 12.6501 21.0996 13.0201 20.6796 13.0701C20.6696 13.0701 20.6396 13.0701 20.6196 13.0701Z",fill:r}),(0,n.jsx)("path",{d:"M3.48991 13.12C3.45991 13.12 3.43991 13.12 3.40991 13.12C2.99991 13.07 2.69991 12.7 2.73991 12.29C3.00991 9.60001 4.43991 7.17001 6.64991 5.60001C6.98991 5.36001 7.45991 5.44001 7.69991 5.78001C7.93991 6.12001 7.85991 6.59001 7.51991 6.83001C5.65991 8.14001 4.45991 10.19 4.22991 12.45C4.19991 12.83 3.86991 13.12 3.48991 13.12Z",fill:r}),(0,n.jsx)("path",{d:"M12.06 22.61C10.58 22.61 9.16997 22.27 7.84997 21.61C7.47997 21.42 7.32997 20.97 7.51997 20.6C7.70997 20.23 8.15997 20.08 8.52997 20.27C10.69 21.36 13.29 21.38 15.47 20.33C15.84 20.15 16.29 20.31 16.47 20.68C16.65 21.05 16.49 21.5 16.12 21.68C14.84 22.3 13.48 22.61 12.06 22.61Z",fill:r}),(0,n.jsx)("path",{d:"M12.0593 8.43988C10.1093 8.43988 8.5293 6.85988 8.5293 4.90988C8.5293 2.95988 10.1093 1.37988 12.0593 1.37988C14.0093 1.37988 15.5893 2.95988 15.5893 4.90988C15.5893 6.85988 13.9993 8.43988 12.0593 8.43988ZM12.0593 2.88988C10.9393 2.88988 10.0293 3.79988 10.0293 4.91988C10.0293 6.03988 10.9393 6.94988 12.0593 6.94988C13.1793 6.94988 14.0893 6.03988 14.0893 4.91988C14.0893 3.79988 13.1693 2.88988 12.0593 2.88988Z",fill:r}),(0,n.jsx)("path",{d:"M4.83078 20.6701C2.88078 20.6701 1.30078 19.0901 1.30078 17.1401C1.30078 15.2001 2.88078 13.6101 4.83078 13.6101C6.78078 13.6101 8.36078 15.1901 8.36078 17.1401C8.36078 19.0801 6.78078 20.6701 4.83078 20.6701ZM4.83078 15.1101C3.71078 15.1101 2.80078 16.0201 2.80078 17.1401C2.80078 18.2601 3.71078 19.1701 4.83078 19.1701C5.95078 19.1701 6.86078 18.2601 6.86078 17.1401C6.86078 16.0201 5.95078 15.1101 4.83078 15.1101Z",fill:r}),(0,n.jsx)("path",{d:"M19.1706 20.6701C17.2206 20.6701 15.6406 19.0901 15.6406 17.1401C15.6406 15.2001 17.2206 13.6101 19.1706 13.6101C21.1206 13.6101 22.7006 15.1901 22.7006 17.1401C22.6906 19.0801 21.1106 20.6701 19.1706 20.6701ZM19.1706 15.1101C18.0506 15.1101 17.1406 16.0201 17.1406 17.1401C17.1406 18.2601 18.0506 19.1701 19.1706 19.1701C20.2906 19.1701 21.2006 18.2601 21.2006 17.1401C21.1906 16.0201 20.2906 15.1101 19.1706 15.1101Z",fill:r})]}),ke=({fill:r="currentColor",filled:s=!1,size:t=24,height:c=24,width:o=24,...i})=>{switch(s){case!1:return(0,n.jsx)("svg",{className:"",width:o||t,height:c||t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{display:"inline"},...i,children:(0,n.jsx)(je,{color:r})});default:return(0,n.jsxs)("svg",{className:"",width:o||t,height:c||t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{display:"inline"},...i,children:[(0,n.jsx)(_e,{color:r}),";"]})}};ke.displayName="ShareIcon";var ue=ke;var e=N($()),Ae=ve({base:"relative w-full overflow-hidden bg-fixed bg-[left_0px_top_0px] bg-no-repeat",variants:{sidebarMiniMode:{true:"sm:bg-[left_80px_top_0px]"},sidebarBoxedMode:{true:"sm:bg-[left_280px_top_0px]"}},compoundVariants:[{sidebarMiniMode:!0,sidebarBoxedMode:!0,class:"sm:bg-[left_110px_top_0px]"},{sidebarMiniMode:!1,sidebarBoxedMode:!1,class:"sm:bg-[left_250px_top_0px]"}]}),ht=r=>{let{type:s,item:t,imdbRating:c,color:o,trailerTime:i}=r,[b,v]=P(),[x,C]=P(),w=A(),D=Q(),h=q(),m=L(),{backgroundColor:B}=ae(o),u=E("(max-width: 650px)",{initializeWithValue:!1}),p=E("(max-width: 1280px)",{initializeWithValue:!1}),[T,I]=(0,g.useState)(!1),[l,H]=(0,g.useState)(!1),[U,X]=(0,g.useState)({}),[a,k]=(0,g.useState)(),{id:Z,tagline:_,genres:V,status:M}=t||{},d=t?.title||t?.name||"",G=t?.titleEng||t?.nameEng||"",j=t?.original_title||t?.original_name||"",K=Number(t?.runtime)??Number(t?.episode_run_time[0]),ge=t?.poster_path?xe?.posterUrl(t?.poster_path||"","w342"):void 0,fe=new Date(t?.release_date??(t?.first_air_date||"")).getFullYear(),Te=new Date(t?.release_date??(t?.first_air_date||"")).toLocaleDateString("fr-FR"),Me=t?.overview||t?.overview||"";(0,g.useEffect)(()=>{v.current&&v.current.scrollIntoView({behavior:"instant",block:"center",inline:"nearest"})},[v,D.pathname]),(0,g.useEffect)(()=>{o?.startsWith("#")&&m.load(`/api/color-palette?color=${o.replace("#","")}`)},[o]),(0,g.useEffect)(()=>{if(m.data&&m.data.color&&k(m.data.color),m.data&&m.data.videos){let{results:S}=m.data.videos,$e=S.find(Pe=>Pe.type==="Trailer");X($e)}},[m.data]);let Ie=S=>{H(S),S===!0&&m.load(`/${s==="movie"?"movies":"tv-shows"}/${Z}/videos`)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(oe,{radius:"none",style:{height:`calc(${b?.height}px)`,"--theme-movie-brand":h?B:"transparent"},classNames:{base:"flex flex-col w-full !bg-transparent bg-gradient-to-b !from-transparent from-[80px] !to-movie-brand-color border-0 to-[80px] sm:from-[200px] sm:to-[200px]"},children:(0,e.jsxs)(ie,{ref:v,className:"z-1 absolute bottom-0 flex grow flex-col items-center justify-center p-0",children:[(0,e.jsx)("div",{className:le({content:!0})}),(0,e.jsxs)("div",{className:"grid w-full max-w-[1920px] grid-cols-[1fr_2fr] grid-rows-[1fr_auto_auto] items-stretch justify-center gap-x-4 gap-y-6 px-3 pt-5 grid-areas-small sm:grid-rows-[auto_1fr_auto] sm:px-3.5 sm:grid-areas-wide xl:px-4 2xl:px-5",children:[(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center grid-in-image",ref:C,children:[ge?(0,e.jsx)(se,{src:ge,alt:d,radius:"xl",shadow:"xl",classNames:{wrapper:"w-full sm:w-3/4 xl:w-1/2",img:"aspect-[2/3] !min-h-[auto] !min-w-[auto]"},disableSkeleton:!1,placeholder:"empty",responsive:[{size:{width:Math.round((x?.width||0)*(!p&&!u?.5:p&&!u?.75:1)),height:Math.round((x?.width||0)*3*(!p&&!u?.5:p&&!u?.75:1)/2)}}],options:{contentType:pe.MimeType.WEBP}}):(0,e.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,e.jsx)(re,{icon:(0,e.jsx)(de,{width:48,height:48}),radius:"xl",classNames:{base:"w-full h-auto aspect-[2/3] sm:w-3/4 xl:w-1/2"}})}),u?null:(0,e.jsx)(te,{y:10})]}),(0,e.jsxs)("div",{className:"flex w-full flex-col items-start justify-start grid-in-title",children:[(0,e.jsx)("h1",{className:"!text-3xl md:!text-4xl",children:`${d}${u?"":` (${fe})`}`}),_?(0,e.jsx)("p",{className:"italic",children:_}):null]}),(0,e.jsxs)("div",{className:"flex flex-col gap-y-3 grid-in-info sm:gap-y-6",children:[(0,e.jsxs)("div",{className:"flex flex-row flex-wrap gap-3",children:[(0,e.jsxs)(O,{size:"xl",color:"primary",radius:"full",variant:"flat",style:a?{backgroundColor:a[200],borderColor:a[400]}:{borderColor:"$primaryLightActive"},classNames:{base:"duration-200 ease-in-out transition-all",content:"flex flex-row items-center gap-x-2"},children:[(0,e.jsx)(ne,{rating:t?.vote_average?.toFixed(1),ratingType:"movie",color:a?a[600]:void 0}),c?(0,e.jsxs)("div",{className:"ml-3 flex flex-row items-center gap-x-2",children:[(0,e.jsx)("h6",{className:"rounded-xl bg-[#ddb600] px-1 text-black",children:"IMDb"}),(0,e.jsx)("h6",{style:a?{color:a[600]}:{},children:c?.star})]}):null]}),(0,e.jsx)(O,{size:"xl",color:"primary",radius:"full",variant:"flat",className:"flex flex-row duration-200 ease-in-out transition-all",style:a?{backgroundColor:a[200],borderColor:a[400]}:{borderColor:"$primaryLightActive"},children:(0,e.jsxs)("h6",{style:a?{color:a[600]}:{},children:[Te,K?` \u2022 ${Math.floor(K/60)}h ${K%60}m`:null]})})]}),(0,e.jsx)("div",{className:"flex w-full flex-row flex-wrap items-center justify-start gap-3",children:V&&V?.map(S=>(0,e.jsx)(y,{type:"button",variant:"flat",size:u?"sm":"md",className:"hover:opacity-80",style:{transition:"all 0.2s ease-in-out",...a?{color:a[600],backgroundColor:a[200]}:{}},onPress:()=>w(`/discover/${s==="movie"?"movies":"tv-shows"}?with_genres=${S?.id}`),children:S?.name},S?.id))})]}),(0,e.jsxs)("div",{className:"mb-10 flex w-full flex-row flex-wrap items-center justify-between gap-4 grid-in-buttons",children:[(M==="Released"||M==="Ended"||M==="Returning Series")&&(0,e.jsxs)(W,{open:T,onOpenChange:I,children:[(0,e.jsx)(R,{asChild:!0,children:(0,e.jsx)(y,{type:"button",className:"w-full bg-gradient-to-br from-secondary to-primary to-50% text-lg font-bold text-primary-foreground sm:w-auto",size:"lg",children:"Watch now"})}),(0,e.jsx)(z,{children:(0,e.jsx)(me,{visible:T,closeHandler:()=>I(!1),type:s,title:G,origTitle:j,year:fe,id:t?.id,...s==="tv"&&{season:1,episode:1,isEnded:M==="Ended"},...s==="movie"&&{isEnded:M==="Released"}})})]}),(0,e.jsxs)("div",{className:"flex flex-row flex-wrap items-center justify-start gap-x-4",children:[(0,e.jsxs)(W,{open:l,onOpenChange:S=>Ie(S),children:[(0,e.jsx)(R,{asChild:!0,children:(0,e.jsx)(y,{type:"button",size:u?"sm":"md",children:"Watch Trailer"})}),(0,e.jsx)(z,{className:"overflow-hidden !p-0",children:(0,e.jsx)(ee,{trailer:U,currentTime:i})})]}),(0,e.jsx)(J,{content:"Share",placement:"top",isDisabled:u,showArrow:!0,closeDelay:0,children:(0,e.jsx)(y,{type:"button",size:u?"sm":"md",onPress:()=>ce(window.location.href,`${d}`,`${Me}`),isIconOnly:!0,children:(0,e.jsx)(ue,{})})})]})]})]})]})})})},vt=r=>{let{item:s,trailerTime:t}=r,{id:c,genres:o,title:i,releaseDate:b,rating:v,image:x,type:C,color:w,description:D,status:h,trailer:m}=s||{},B=A(),u=Q(),p=L(),T=q(),[I,l]=P(),[H,U]=P(),{backgroundColor:X}=ae(w),a=E("(max-width: 650px)",{initializeWithValue:!1}),k=E("(max-width: 1280px)",{initializeWithValue:!1}),[Z,_]=(0,g.useState)(!1),[V,M]=(0,g.useState)(!1),[d,G]=(0,g.useState)();return(0,g.useEffect)(()=>{l.current&&l.current.scrollIntoView({behavior:"instant",block:"center",inline:"nearest"})},[l,u.pathname]),(0,g.useEffect)(()=>{w?.startsWith("#")&&p.load(`/api/color-palette?color=${w.replace("#","")}`)},[w]),(0,g.useEffect)(()=>{p.data&&p.data.color&&G(p.data.color)},[p.data]),(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(oe,{radius:"none",style:{height:`calc(${I?.height}px)`,"--theme-movie-brand":T?X:"transparent"},classNames:{base:"flex flex-col w-full !bg-transparent bg-gradient-to-b !from-transparent from-[80px] !to-movie-brand-color border-0 to-[80px] sm:from-[200px] sm:to-[200px]"},children:(0,e.jsxs)(ie,{ref:l,className:"z-1 absolute bottom-0 flex grow flex-col justify-center p-0",children:[(0,e.jsx)("div",{className:le({content:!0})}),(0,e.jsxs)("div",{className:"grid w-full max-w-[1920px] grid-cols-[1fr_2fr] grid-rows-[1fr_auto_auto] items-stretch justify-center gap-x-4 gap-y-6 px-3 pt-5 grid-areas-small sm:grid-rows-[auto_1fr_auto] sm:px-3.5 sm:grid-areas-wide xl:px-4 2xl:px-5",children:[(0,e.jsxs)("div",{className:"flex flex-col items-center justify-center grid-in-image",ref:U,children:[x?(0,e.jsx)(se,{src:x,title:i?.userPreferred||i?.english||i?.romaji||i?.native,alt:i?.userPreferred||i?.english||i?.romaji||i?.native,radius:"xl",classNames:{wrapper:"w-full sm:w-3/4 xl:w-1/2",img:"aspect-[2/3] !min-h-[auto] !min-w-[auto]"},disableSkeleton:!1,placeholder:"empty",responsive:[{size:{width:Math.round((H?.width||0)*(!k&&!a?.5:k&&!a?.75:1)),height:Math.round((H?.width||0)*3*(!k&&!a?.5:k&&!a?.75:1)/2)}}],options:{contentType:pe.MimeType.WEBP}}):(0,e.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,e.jsx)(re,{icon:(0,e.jsx)(de,{width:48,height:48}),radius:"xl",classNames:{base:"w-full h-auto aspect-[2/3] sm:w-3/4 xl:w-1/2"}})}),a?null:(0,e.jsx)(te,{y:10})]}),(0,e.jsx)("div",{className:"flex w-full flex-col items-start justify-start grid-in-title",children:(0,e.jsx)("h1",{className:"!text-3xl md:!text-4xl",children:`${i?.userPreferred||i?.english||i?.romaji||i?.native}`})}),(0,e.jsxs)("div",{className:"flex flex-col gap-y-3 grid-in-info sm:gap-y-6",children:[(0,e.jsxs)("div",{className:"flex flex-row flex-wrap gap-3",children:[(0,e.jsx)(O,{size:"xl",color:"primary",radius:"full",variant:"flat",className:"duration-200 ease-in-out transition-all",style:d?{backgroundColor:d[200],borderColor:d[400]}:{borderColor:"$primaryLightActive"},children:(0,e.jsx)(ne,{rating:v,ratingType:"anime",color:d?d[600]:void 0})}),(0,e.jsx)(O,{size:"xl",color:"primary",radius:"full",variant:"flat",className:"flex flex-row duration-200 ease-in-out transition-all",style:d?{backgroundColor:d[200],borderColor:d[400]}:{borderColor:"$primaryLightActive"},children:(0,e.jsxs)("h6",{style:d?{color:d[600]}:{},children:[C,b?` \u2022 ${b}`:""]})})]}),(0,e.jsx)("div",{className:"flex w-full flex-row flex-wrap items-center justify-start gap-3",children:o&&o?.map(j=>(0,e.jsx)(y,{type:"button",variant:"flat",size:a?"sm":"md",className:"hover:opacity-80",style:{transition:"all 0.2s ease-in-out",...d?{color:d[600],backgroundColor:d[200]}:{}},onPress:()=>B(`/discover/anime?genres=${j}`),children:j},j))})]}),(0,e.jsxs)("div",{className:"mb-10 flex w-full flex-row flex-wrap items-center justify-between gap-4 grid-in-buttons",children:[(0,e.jsxs)(W,{open:Z,onOpenChange:_,children:[(0,e.jsx)(R,{asChild:!0,children:(0,e.jsx)(y,{type:"button",size:"lg",className:"w-full bg-gradient-to-br from-secondary to-primary to-50% text-lg font-bold text-primary-foreground sm:w-auto",children:"Watch now"})}),(0,e.jsx)(z,{children:(0,e.jsx)(me,{visible:Z,closeHandler:()=>_(!1),type:"anime",id:c,title:i?.english||"",origTitle:i?.native||"",year:Number(b),episode:1,season:void 0,animeType:C?.toLowerCase()||"tv",isEnded:h==="FINISHED"})})]}),(0,e.jsxs)("div",{className:"flex flex-row flex-wrap items-center justify-start gap-x-4",children:[m?(0,e.jsxs)(W,{open:V,onOpenChange:M,children:[(0,e.jsx)(R,{asChild:!0,children:(0,e.jsx)(y,{type:"button",size:a?"sm":"md",children:"Watch Trailer"})}),(0,e.jsx)(z,{className:"overflow-hidden !p-0",children:(0,e.jsx)(ee,{trailer:m,currentTime:t})})]}):null,(0,e.jsx)(J,{content:"Share",placement:"top",isDisabled:a,children:(0,e.jsx)(y,{type:"button",size:a?"sm":"md",onPress:()=>ce(window.location.href,`${i}`,`${D}`),isIconOnly:!0,children:(0,e.jsx)(ue,{})})})]})]})]})]})})})},bt=r=>{let{backdropPath:s,backgroundColor:t}=r,[c,o]=P(),i=q(),b=E("(max-width: 650px)",{initializeWithValue:!1}),{sidebarMiniMode:v,sidebarBoxedMode:x}=Y(),{scrollY:C}=Ce(h=>h),w=b?100:300,D=we(C,[0,800-w],[w,800]);return(0,e.jsx)("div",{ref:o,className:Ae({sidebarMiniMode:v.value,sidebarBoxedMode:x.value}),style:{backgroundImage:c?.width!==void 0?`url(/api/image?src=${encodeURIComponent(s||"https://raw.githubusercontent.com/Khanhtran47/Sora/master/app/assets/images/background-default.jpg")}&width=${Math.round(c?.width)}&height=${Math.round(c?.height)}&fit=cover&position=center&background[]=0&background[]=0&background[]=0&background[]=0&quality=80&compressionLevel=9&loop=0&delay=100&crop=null&contentType=image%2Fwebp)`:"none",aspectRatio:"2 / 1",visibility:c?.width!==void 0?"visible":"hidden",backgroundSize:`${c?.width}px auto`},children:(0,e.jsx)(be.div,{style:{position:"absolute",bottom:0,left:0,right:0,width:"100%",height:D,backgroundImage:i?`linear-gradient(to top, ${t}, ${Se(t).setAlpha(0)})`:"none"}})})};export{ht as a,vt as b,bt as c};
