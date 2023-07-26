import{a as $i}from"/build/_shared/chunk-QLU6BERC.js";import{c as je}from"/build/_shared/chunk-JEBMXGTI.js";var Re=je(($,le)=>{(function(r,e){"use strict";var i="1.0.35",n="",t="?",m="function",g="undefined",E="object",U="string",Q="major",o="model",l="name",a="type",s="vendor",u="version",I="architecture",H="console",f="mobile",w="tablet",V="smarttv",D="wearable",me="embedded",ve=350,ee="Amazon",Y="Apple",xe="ASUS",Me="BlackBerry",j="Browser",ie="Chrome",Hi="Edge",re="Firefox",ne="Google",Ce="Huawei",we="LG",fe="Microsoft",Ie="Motorola",te="Opera",pe="Samsung",We="Sharp",ae="Sony",wn="Viera",ge="Xiaomi",he="Zebra",_e="Facebook",Ne="Chromium OS",Ue="Mac OS",Yi=function(p,y){var v={};for(var O in p)y[O]&&y[O].length%2===0?v[O]=y[O].concat(p[O]):v[O]=p[O];return v},oe=function(p){for(var y={},v=0;v<p.length;v++)y[p[v].toUpperCase()]=p[v];return y},Fe=function(p,y){return typeof p===U?G(y).indexOf(G(p))!==-1:!1},G=function(p){return p.toLowerCase()},Gi=function(p){return typeof p===U?p.replace(/[^\d\.]/g,n).split(".")[0]:e},ye=function(p,y){if(typeof p===U)return p=p.replace(/^\s\s*/,n),typeof y===g?p:p.substring(0,ve)},Z=function(p,y){for(var v=0,O,F,W,h,b,_;v<y.length&&!b;){var Te=y[v],De=y[v+1];for(O=F=0;O<Te.length&&!b&&Te[O];)if(b=Te[O++].exec(p),b)for(W=0;W<De.length;W++)_=b[++F],h=De[W],typeof h===E&&h.length>0?h.length===2?typeof h[1]==m?this[h[0]]=h[1].call(this,_):this[h[0]]=h[1]:h.length===3?typeof h[1]===m&&!(h[1].exec&&h[1].test)?this[h[0]]=_?h[1].call(this,_,h[2]):e:this[h[0]]=_?_.replace(h[1],h[2]):e:h.length===4&&(this[h[0]]=_?h[3].call(this,_.replace(h[1],h[2])):e):this[h]=_||e;v+=2}},Oe=function(p,y){for(var v in y)if(typeof y[v]===E&&y[v].length>0){for(var O=0;O<y[v].length;O++)if(Fe(y[v][O],p))return v===t?e:v}else if(Fe(y[v],p))return v===t?e:v;return p},Zi={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},Be={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Le={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[u,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[u,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,u],[/opios[\/ ]+([\w\.]+)/i],[u,[l,te+" Mini"]],[/\bopr\/([\w\.]+)/i],[u,[l,te]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[l,u],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[u,[l,"UC"+j]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[u,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[u,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[u,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[u,[l,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[u,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure "+j],u],[/\bfocus\/([\w\.]+)/i],[u,[l,re+" Focus"]],[/\bopt\/([\w\.]+)/i],[u,[l,te+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[u,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[u,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[u,[l,te+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[u,[l,"MIUI "+j]],[/fxios\/([-\w\.]+)/i],[u,[l,re]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 "+j]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 "+j],u],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],u],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,u],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,_e],u],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,u],[/\bgsa\/([\w\.]+) .*safari\//i],[u,[l,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[u,[l,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[u,[l,ie+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,ie+" WebView"],u],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[u,[l,"Android "+j]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,u],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[u,[l,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[u,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[u,Oe,Zi]],[/(webkit|khtml)\/([\w\.]+)/i],[l,u],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],u],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[u,[l,re+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[l,u],[/(cobalt)\/([\w\.]+)/i],[l,[u,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[I,"amd64"]],[/(ia32(?=;))/i],[[I,G]],[/((?:i[346]|x)86)[;\)]/i],[[I,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[I,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[I,"armhf"]],[/windows (ce|mobile); ppc;/i],[[I,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[I,/ower/,n,G]],[/(sun4\w)[;\)]/i],[[I,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[I,G]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[o,[s,pe],[a,w]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[o,[s,pe],[a,f]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[o,[s,Y],[a,f]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[o,[s,Y],[a,w]],[/(macintosh);/i],[o,[s,Y]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[o,[s,We],[a,f]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[o,[s,Ce],[a,w]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[o,[s,Ce],[a,f]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[o,/_/g," "],[s,ge],[a,f]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[o,/_/g," "],[s,ge],[a,w]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[o,[s,"OPPO"],[a,f]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[o,[s,"Vivo"],[a,f]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[o,[s,"Realme"],[a,f]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[o,[s,Ie],[a,f]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[o,[s,Ie],[a,w]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[o,[s,we],[a,w]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[o,[s,we],[a,f]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[o,[s,"Lenovo"],[a,w]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[o,/_/g," "],[s,"Nokia"],[a,f]],[/(pixel c)\b/i],[o,[s,ne],[a,w]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[o,[s,ne],[a,f]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[o,[s,ae],[a,f]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[o,"Xperia Tablet"],[s,ae],[a,w]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[o,[s,"OnePlus"],[a,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[o,[s,ee],[a,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[o,/(.+)/g,"Fire Phone $1"],[s,ee],[a,f]],[/(playbook);[-\w\),; ]+(rim)/i],[o,s,[a,w]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[o,[s,Me],[a,f]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[o,[s,xe],[a,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[o,[s,xe],[a,f]],[/(nexus 9)/i],[o,[s,"HTC"],[a,w]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[s,[o,/_/g," "],[a,f]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[o,[s,"Acer"],[a,w]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[o,[s,"Meizu"],[a,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[s,o,[a,f]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[s,o,[a,w]],[/(surface duo)/i],[o,[s,fe],[a,w]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[o,[s,"Fairphone"],[a,f]],[/(u304aa)/i],[o,[s,"AT&T"],[a,f]],[/\bsie-(\w*)/i],[o,[s,"Siemens"],[a,f]],[/\b(rct\w+) b/i],[o,[s,"RCA"],[a,w]],[/\b(venue[\d ]{2,7}) b/i],[o,[s,"Dell"],[a,w]],[/\b(q(?:mv|ta)\w+) b/i],[o,[s,"Verizon"],[a,w]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[o,[s,"Barnes & Noble"],[a,w]],[/\b(tm\d{3}\w+) b/i],[o,[s,"NuVision"],[a,w]],[/\b(k88) b/i],[o,[s,"ZTE"],[a,w]],[/\b(nx\d{3}j) b/i],[o,[s,"ZTE"],[a,f]],[/\b(gen\d{3}) b.+49h/i],[o,[s,"Swiss"],[a,f]],[/\b(zur\d{3}) b/i],[o,[s,"Swiss"],[a,w]],[/\b((zeki)?tb.*\b) b/i],[o,[s,"Zeki"],[a,w]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[s,"Dragon Touch"],o,[a,w]],[/\b(ns-?\w{0,9}) b/i],[o,[s,"Insignia"],[a,w]],[/\b((nxa|next)-?\w{0,9}) b/i],[o,[s,"NextBook"],[a,w]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[s,"Voice"],o,[a,f]],[/\b(lvtel\-)?(v1[12]) b/i],[[s,"LvTel"],o,[a,f]],[/\b(ph-1) /i],[o,[s,"Essential"],[a,f]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[o,[s,"Envizen"],[a,w]],[/\b(trio[-\w\. ]+) b/i],[o,[s,"MachSpeed"],[a,w]],[/\btu_(1491) b/i],[o,[s,"Rotor"],[a,w]],[/(shield[\w ]+) b/i],[o,[s,"Nvidia"],[a,w]],[/(sprint) (\w+)/i],[s,o,[a,f]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[s,fe],[a,f]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[o,[s,he],[a,w]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[o,[s,he],[a,f]],[/smart-tv.+(samsung)/i],[s,[a,V]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[s,pe],[a,V]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[s,we],[a,V]],[/(apple) ?tv/i],[s,[o,Y+" TV"],[a,V]],[/crkey/i],[[o,ie+"cast"],[s,ne],[a,V]],[/droid.+aft(\w)( bui|\))/i],[o,[s,ee],[a,V]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[o,[s,We],[a,V]],[/(bravia[\w ]+)( bui|\))/i],[o,[s,ae],[a,V]],[/(mitv-\w{5}) bui/i],[o,[s,ge],[a,V]],[/Hbbtv.*(technisat) (.*);/i],[s,o,[a,V]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[s,ye],[o,ye],[a,V]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[a,V]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[s,o,[a,H]],[/droid.+; (shield) bui/i],[o,[s,"Nvidia"],[a,H]],[/(playstation [345portablevi]+)/i],[o,[s,ae],[a,H]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[o,[s,fe],[a,H]],[/((pebble))app/i],[s,o,[a,D]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[o,[s,Y],[a,D]],[/droid.+; (glass) \d/i],[o,[s,ne],[a,D]],[/droid.+; (wt63?0{2,3})\)/i],[o,[s,he],[a,D]],[/(quest( 2| pro)?)/i],[o,[s,_e],[a,D]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[s,[a,me]],[/(aeobc)\b/i],[o,[s,ee],[a,me]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[o,[a,f]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[o,[a,w]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[a,w]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[a,f]],[/(android[-\w\. ]{0,9});.+buil/i],[o,[s,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[u,[l,Hi+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[u,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[l,u],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[u,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,u],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[u,Oe,Be]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[u,Oe,Be]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[u,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,Ue],[u,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[u,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,u],[/\(bb(10);/i],[u,[l,Me]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[u,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[u,[l,re+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[u,[l,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[u,[l,"watchOS"]],[/crkey\/([\d\.]+)/i],[u,[l,ie+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[l,Ne],u],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,u],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],u],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[l,u]]},x=function(p,y){if(typeof p===E&&(y=p,p=e),!(this instanceof x))return new x(p,y).getResult();var v=typeof r!==g&&r.navigator?r.navigator:e,O=p||(v&&v.userAgent?v.userAgent:n),F=v&&v.userAgentData?v.userAgentData:e,W=y?Yi(Le,y):Le,h=v&&v.userAgent==O;return this.getBrowser=function(){var b={};return b[l]=e,b[u]=e,Z.call(b,O,W.browser),b[Q]=Gi(b[u]),h&&v&&v.brave&&typeof v.brave.isBrave==m&&(b[l]="Brave"),b},this.getCPU=function(){var b={};return b[I]=e,Z.call(b,O,W.cpu),b},this.getDevice=function(){var b={};return b[s]=e,b[o]=e,b[a]=e,Z.call(b,O,W.device),h&&!b[a]&&F&&F.mobile&&(b[a]=f),h&&b[o]=="Macintosh"&&v&&typeof v.standalone!==g&&v.maxTouchPoints&&v.maxTouchPoints>2&&(b[o]="iPad",b[a]=w),b},this.getEngine=function(){var b={};return b[l]=e,b[u]=e,Z.call(b,O,W.engine),b},this.getOS=function(){var b={};return b[l]=e,b[u]=e,Z.call(b,O,W.os),h&&!b[l]&&F&&F.platform!="Unknown"&&(b[l]=F.platform.replace(/chrome os/i,Ne).replace(/macos/i,Ue)),b},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return O},this.setUA=function(b){return O=typeof b===U&&b.length>ve?ye(b,ve):b,this},this.setUA(O),this};x.VERSION=i,x.BROWSER=oe([l,u,Q]),x.CPU=oe([I]),x.DEVICE=oe([o,s,a,H,f,V,w,D,me]),x.ENGINE=x.OS=oe([l,u]),typeof $!==g?(typeof le!==g&&le.exports&&($=le.exports=x),$.UAParser=x):typeof define===m&&define.amd?define(function(){return x}):typeof r!==g&&(r.UAParser=x);var R=typeof r!==g&&(r.jQuery||r.Zepto);if(R&&!R.ua){var se=new x;R.ua=se.getResult(),R.ua.get=function(){return se.getUA()},R.ua.set=function(p){se.setUA(p);var y=se.getResult();for(var v in y)R.ua[v]=y[v]}}})(typeof window=="object"?window:$)});var vn=je(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});function Xi(r){return r&&typeof r=="object"&&"default"in r?r.default:r}var A=$i(),T=Xi(A),Ge=Re(),B=new Ge,P=B.getBrowser(),Ki=B.getCPU(),M=B.getDevice(),Pe=B.getEngine(),L=B.getOS(),K=B.getUA(),Ze=function(e){return B.setUA(e)},J=function(e){if(!e){console.error("No userAgent string was provided");return}var i=new Ge(e);return{UA:i,browser:i.getBrowser(),cpu:i.getCPU(),device:i.getDevice(),engine:i.getEngine(),os:i.getOS(),ua:i.getUA(),setUserAgent:function(t){return i.setUA(t)}}},$e=Object.freeze({ClientUAInstance:B,browser:P,cpu:Ki,device:M,engine:Pe,os:L,ua:K,setUa:Ze,parseUserAgent:J});function ze(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})),i.push.apply(i,n)}return i}function Ji(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?ze(Object(i),!0).forEach(function(n){ir(r,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):ze(Object(i)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(i,n))})}return r}function X(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?X=function(e){return typeof e}:X=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(r)}function Qi(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function qe(r,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function er(r,e,i){return e&&qe(r.prototype,e),i&&qe(r,i),r}function ir(r,e,i){return e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function Ee(){return Ee=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r[n]=i[n])}return r},Ee.apply(this,arguments)}function rr(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Ae(r,e)}function Se(r){return Se=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},Se(r)}function Ae(r,e){return Ae=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},Ae(r,e)}function nr(r,e){if(r==null)return{};var i={},n=Object.keys(r),t,m;for(m=0;m<n.length;m++)t=n[m],!(e.indexOf(t)>=0)&&(i[t]=r[t]);return i}function C(r,e){if(r==null)return{};var i=nr(r,e),n,t;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(r);for(t=0;t<m.length;t++)n=m[t],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(i[n]=r[n])}return i}function ue(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function tr(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ue(r)}function ar(r,e){return or(r)||sr(r,e)||lr(r,e)||ur()}function or(r){if(Array.isArray(r))return r}function sr(r,e){var i=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(i!=null){var n=[],t=!0,m=!1,g,E;try{for(i=i.call(r);!(t=(g=i.next()).done)&&(n.push(g.value),!(e&&n.length===e));t=!0);}catch(U){m=!0,E=U}finally{try{!t&&i.return!=null&&i.return()}finally{if(m)throw E}}return n}}function lr(r,e){if(r){if(typeof r=="string")return He(r,e);var i=Object.prototype.toString.call(r).slice(8,-1);if(i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set")return Array.from(r);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return He(r,e)}}function He(r,e){(e==null||e>r.length)&&(e=r.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=r[i];return n}function ur(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var S={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},k={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},q={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},dr={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},cr=function(e){switch(e){case S.Mobile:return{isMobile:!0};case S.Tablet:return{isTablet:!0};case S.SmartTv:return{isSmartTV:!0};case S.Console:return{isConsole:!0};case S.Wearable:return{isWearable:!0};case S.Browser:return{isBrowser:!0};case S.Embedded:return{isEmbedded:!0};default:return dr}},br=function(e){return Ze(e)},c=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none";return e||i},ke=function(){return typeof window<"u"&&(window.navigator||navigator)?window.navigator||navigator:!1},Ve=function(e){var i=ke();return i&&i.platform&&(i.platform.indexOf(e)!==-1||i.platform==="MacIntel"&&i.maxTouchPoints>1&&!window.MSStream)},mr=function(e,i,n,t,m){return{isBrowser:e,browserMajorVersion:c(i.major),browserFullVersion:c(i.version),browserName:c(i.name),engineName:c(n.name),engineVersion:c(n.version),osName:c(t.name),osVersion:c(t.version),userAgent:c(m)}},Ye=function(e,i,n,t){return Ji({},e,{vendor:c(i.vendor),model:c(i.model),os:c(n.name),osVersion:c(n.version),ua:c(t)})},vr=function(e,i,n,t){return{isSmartTV:e,engineName:c(i.name),engineVersion:c(i.version),osName:c(n.name),osVersion:c(n.version),userAgent:c(t)}},wr=function(e,i,n,t){return{isConsole:e,engineName:c(i.name),engineVersion:c(i.version),osName:c(n.name),osVersion:c(n.version),userAgent:c(t)}},fr=function(e,i,n,t){return{isWearable:e,engineName:c(i.name),engineVersion:c(i.version),osName:c(n.name),osVersion:c(n.version),userAgent:c(t)}},pr=function(e,i,n,t,m){return{isEmbedded:e,vendor:c(i.vendor),model:c(i.model),engineName:c(n.name),engineVersion:c(n.version),osName:c(t.name),osVersion:c(t.version),userAgent:c(m)}};function gr(r){var e=r?J(r):$e,i=e.device,n=e.browser,t=e.engine,m=e.os,g=e.ua,E=cr(i.type),U=E.isBrowser,Q=E.isMobile,o=E.isTablet,l=E.isSmartTV,a=E.isConsole,s=E.isWearable,u=E.isEmbedded;if(U)return mr(U,n,t,m,g);if(l)return vr(l,t,m,g);if(a)return wr(a,t,m,g);if(Q||o)return Ye(E,i,m,g);if(s)return fr(s,t,m,g);if(u)return pr(u,i,t,m,g)}var Xe=function(e){var i=e.type;return i===S.Mobile},Ke=function(e){var i=e.type;return i===S.Tablet},Je=function(e){var i=e.type;return i===S.Mobile||i===S.Tablet},Qe=function(e){var i=e.type;return i===S.SmartTv},de=function(e){var i=e.type;return i===S.Browser},ei=function(e){var i=e.type;return i===S.Wearable},ii=function(e){var i=e.type;return i===S.Console},ri=function(e){var i=e.type;return i===S.Embedded},ni=function(e){var i=e.vendor;return c(i)},ti=function(e){var i=e.model;return c(i)},ai=function(e){var i=e.type;return c(i,"browser")},oi=function(e){var i=e.name;return i===q.Android},si=function(e){var i=e.name;return i===q.Windows},li=function(e){var i=e.name;return i===q.MAC_OS},ui=function(e){var i=e.name;return i===q.WindowsPhone},di=function(e){var i=e.name;return i===q.IOS},ci=function(e){var i=e.version;return c(i)},bi=function(e){var i=e.name;return c(i)},mi=function(e){var i=e.name;return i===k.Chrome},vi=function(e){var i=e.name;return i===k.Firefox},wi=function(e){var i=e.name;return i===k.Chromium},ce=function(e){var i=e.name;return i===k.Edge},fi=function(e){var i=e.name;return i===k.Yandex},pi=function(e){var i=e.name;return i===k.Safari||i===k.MobileSafari},gi=function(e){var i=e.name;return i===k.MobileSafari},hi=function(e){var i=e.name;return i===k.Opera},yi=function(e){var i=e.name;return i===k.InternetExplorer||i===k.Ie},Oi=function(e){var i=e.name;return i===k.MIUI},Ti=function(e){var i=e.name;return i===k.SamsungBrowser},Ei=function(e){var i=e.version;return c(i)},Si=function(e){var i=e.major;return c(i)},Ai=function(e){var i=e.name;return c(i)},Pi=function(e){var i=e.name;return c(i)},ki=function(e){var i=e.version;return c(i)},Vi=function(){var e=ke(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return typeof i=="string"?/electron/.test(i):!1},z=function(e){return typeof e=="string"&&e.indexOf("Edg/")!==-1},xi=function(){var e=ke();return e&&(/iPad|iPhone|iPod/.test(e.platform)||e.platform==="MacIntel"&&e.maxTouchPoints>1)&&!window.MSStream},N=function(){return Ve("iPad")},Mi=function(){return Ve("iPhone")},Ci=function(){return Ve("iPod")},Ii=function(e){return c(e)};function Wi(r){var e=r||$e,i=e.device,n=e.browser,t=e.os,m=e.engine,g=e.ua;return{isSmartTV:Qe(i),isConsole:ii(i),isWearable:ei(i),isEmbedded:ri(i),isMobileSafari:gi(n)||N(),isChromium:wi(n),isMobile:Je(i)||N(),isMobileOnly:Xe(i),isTablet:Ke(i)||N(),isBrowser:de(i),isDesktop:de(i),isAndroid:oi(t),isWinPhone:ui(t),isIOS:di(t)||N(),isChrome:mi(n),isFirefox:vi(n),isSafari:pi(n),isOpera:hi(n),isIE:yi(n),osVersion:ci(t),osName:bi(t),fullBrowserVersion:Ei(n),browserVersion:Si(n),browserName:Ai(n),mobileVendor:ni(i),mobileModel:ti(i),engineName:Pi(m),engineVersion:ki(m),getUA:Ii(g),isEdge:ce(n)||z(g),isYandex:fi(n),deviceType:ai(i),isIOS13:xi(),isIPad13:N(),isIPhone13:Mi(),isIPod13:Ci(),isElectron:Vi(),isEdgeChromium:z(g),isLegacyEdge:ce(n)&&!z(g),isWindows:si(t),isMacOs:li(t),isMIUI:Oi(n),isSamsungBrowser:Ti(n)}}var _i=Qe(M),Ni=ii(M),Ui=ei(M),hr=ri(M),yr=gi(P)||N(),Or=wi(P),be=Je(M)||N(),Fi=Xe(M),Bi=Ke(M)||N(),Li=de(M),Tr=de(M),Di=oi(L),ji=ui(L),Ri=di(L)||N(),Er=mi(P),Sr=vi(P),Ar=pi(P),Pr=hi(P),zi=yi(P),kr=ci(L),Vr=bi(L),xr=Ei(P),Mr=Si(P),Cr=Ai(P),Ir=ni(M),Wr=ti(M),_r=Pi(Pe),Nr=ki(Pe),Ur=Ii(K),Fr=ce(P)||z(K),Br=fi(P),Lr=ai(M),Dr=xi(),jr=N(),Rr=Mi(),zr=Ci(),qr=Vi(),Hr=z(K),Yr=ce(P)&&!z(K),Gr=si(L),Zr=li(L),$r=Oi(P),Xr=Ti(P),Kr=function(e){if(!e||typeof e!="string"){console.error("No valid user agent string was provided");return}var i=J(e),n=i.device,t=i.browser,m=i.os,g=i.engine,E=i.ua;return Wi({device:n,browser:t,os:m,engine:g,ua:E})},Jr=function(e){var i=e.renderWithFragment,n=e.children,t=C(e,["renderWithFragment","children"]);return Di?i?T.createElement(A.Fragment,null,n):T.createElement("div",t,n):null},Qr=function(e){var i=e.renderWithFragment,n=e.children,t=C(e,["renderWithFragment","children"]);return Li?i?T.createElement(A.Fragment,null,n):T.createElement("div",t,n):null},en=function(e){var i=e.renderWithFragment,n=e.children,t=C(e,["renderWithFragment","children"]);return zi?i?T.createElement(A.Fragment,null,n):T.createElement("div",t,n):null},rn=function(e){var i=e.renderWithFragment,n=e.children,t=C(e,["renderWithFragment","children"]);return Ri?i?T.createElement(A.Fragment,null,n):T.createElement("div",t,n):null},nn=function(e){var i=e.renderWithFragment,n=e.children,t=C(e,["renderWithFragment","children"]);return be?i?T.createElement(A.Fragment,null,n):T.createElement("div",t,n):null},tn=function(e){var i=e.renderWithFragment,n=e.children,t=C(e,["renderWithFragment","children"]);return Bi?i?T.createElement(A.Fragment,null,n):T.createElement("div",t,n):null},an=function(e){var i=e.renderWithFragment,n=e.children,t=C(e,["renderWithFragment","children"]);return ji?i?T.createElement(A.Fragment,null,n):T.createElement("div",t,n):null},on=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,m=e.style,g=C(e,["renderWithFragment","children","viewClassName","style"]);return Fi?i?T.createElement(A.Fragment,null,n):T.createElement("div",g,n):null},sn=function(e){var i=e.renderWithFragment,n=e.children,t=C(e,["renderWithFragment","children"]);return _i?i?T.createElement(A.Fragment,null,n):T.createElement("div",t,n):null},ln=function(e){var i=e.renderWithFragment,n=e.children,t=C(e,["renderWithFragment","children"]);return Ni?i?T.createElement(A.Fragment,null,n):T.createElement("div",t,n):null},un=function(e){var i=e.renderWithFragment,n=e.children,t=C(e,["renderWithFragment","children"]);return Ui?i?T.createElement(A.Fragment,null,n):T.createElement("div",t,n):null},dn=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,m=e.style,g=e.condition,E=C(e,["renderWithFragment","children","viewClassName","style","condition"]);return g?i?T.createElement(A.Fragment,null,n):T.createElement("div",E,n):null};function cn(r){return function(e){rr(i,e);function i(n){var t;return Qi(this,i),t=tr(this,Se(i).call(this,n)),t.isEventListenerAdded=!1,t.handleOrientationChange=t.handleOrientationChange.bind(ue(t)),t.onOrientationChange=t.onOrientationChange.bind(ue(t)),t.onPageLoad=t.onPageLoad.bind(ue(t)),t.state={isLandscape:!1,isPortrait:!1},t}return er(i,[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var t=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:t===0,isLandscape:t===90})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){(typeof window>"u"?"undefined":X(window))!==void 0&&be&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return T.createElement(r,Ee({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}]),i}(T.Component)}function bn(){var r=A.useState(function(){var m=window.innerWidth>window.innerHeight?90:0;return{isPortrait:m===0,isLandscape:m===90,orientation:m===0?"portrait":"landscape"}}),e=ar(r,2),i=e[0],n=e[1],t=A.useCallback(function(){var m=window.innerWidth>window.innerHeight?90:0,g={isPortrait:m===0,isLandscape:m===90,orientation:m===0?"portrait":"landscape"};i.orientation!==g.orientation&&n(g)},[i.orientation]);return A.useEffect(function(){return(typeof window>"u"?"undefined":X(window))!==void 0&&be&&(t(),window.addEventListener("load",t,!1),window.addEventListener("resize",t,!1)),function(){window.removeEventListener("resize",t,!1),window.removeEventListener("load",t,!1)}},[t]),i}function qi(r){var e=r||window.navigator.userAgent;return J(e)}function mn(r){var e=r||window.navigator.userAgent,i=qi(e),n=Wi(i);return[n,i]}d.AndroidView=Jr;d.BrowserTypes=k;d.BrowserView=Qr;d.ConsoleView=ln;d.CustomView=dn;d.IEView=en;d.IOSView=rn;d.MobileOnlyView=on;d.MobileView=nn;d.OsTypes=q;d.SmartTVView=sn;d.TabletView=tn;d.WearableView=un;d.WinPhoneView=an;d.browserName=Cr;d.browserVersion=Mr;d.deviceDetect=gr;d.deviceType=Lr;d.engineName=_r;d.engineVersion=Nr;d.fullBrowserVersion=xr;d.getSelectorsByUserAgent=Kr;d.getUA=Ur;d.isAndroid=Di;d.isBrowser=Li;d.isChrome=Er;d.isChromium=Or;d.isConsole=Ni;d.isDesktop=Tr;d.isEdge=Fr;d.isEdgeChromium=Hr;d.isElectron=qr;d.isEmbedded=hr;d.isFirefox=Sr;d.isIE=zi;d.isIOS=Ri;d.isIOS13=Dr;d.isIPad13=jr;d.isIPhone13=Rr;d.isIPod13=zr;d.isLegacyEdge=Yr;d.isMIUI=$r;d.isMacOs=Zr;d.isMobile=be;d.isMobileOnly=Fi;d.isMobileSafari=yr;d.isOpera=Pr;d.isSafari=Ar;d.isSamsungBrowser=Xr;d.isSmartTV=_i;d.isTablet=Bi;d.isWearable=Ui;d.isWinPhone=ji;d.isWindows=Gr;d.isYandex=Br;d.mobileModel=Wr;d.mobileVendor=Ir;d.osName=Vr;d.osVersion=kr;d.parseUserAgent=J;d.setUserAgent=br;d.useDeviceData=qi;d.useDeviceSelectors=mn;d.useMobileOrientation=bn;d.withOrientationChange=cn});export{vn as a};
