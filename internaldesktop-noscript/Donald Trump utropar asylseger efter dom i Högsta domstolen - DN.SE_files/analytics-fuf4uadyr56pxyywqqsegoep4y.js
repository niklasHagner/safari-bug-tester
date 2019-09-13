(function(){var k=this||self,l=function(a,b){a=a.split(".");var c=k;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};var n=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},p=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1};var q=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var r=window,u=document,v=function(a,b){u.addEventListener?u.addEventListener(a,b,!1):u.attachEvent&&u.attachEvent("on"+a,b)};var w={},x=function(){w.TAGGING=w.TAGGING||[];w.TAGGING[1]=!0};var y=/:[0-9]+$/,A=function(a,b){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=z(a.protocol)||z(r.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:r.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||r.location.hostname).replace(y,"").toLowerCase());var c=z(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":b="";a&&a.href&&(b=a.href.indexOf("#"),b=0>b?a.href:a.href.substr(0,
b));a=b;break;case "protocol":a=c;break;case "host":a=a.hostname.replace(y,"").toLowerCase();break;case "port":a=String(Number(a.port)||("http"==c?80:"https"==c?443:""));break;case "path":a.pathname||a.hostname||x();a="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;a=a.split("/");a:if(b=a[a.length-1],c=[],Array.prototype.indexOf)b=c.indexOf(b),b="number"==typeof b?b:-1;else{for(var d=0;d<c.length;d++)if(c[d]===b){b=d;break a}b=-1}0<=b&&(a[a.length-1]="");a=a.join("/");break;case "query":a=a.search.replace("?",
"");break;case "extension":a=a.pathname.split(".");a=1<a.length?a[a.length-1]:"";a=a.split("/")[0];break;case "fragment":a=a.hash.replace("#","");break;default:a=a&&a.href}return a},z=function(a){return a?a.replace(":","").toLowerCase():""},B=function(a){var b=u.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||x(),c="/"+c);a=b.hostname.replace(y,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:a,pathname:c,search:b.search,hash:b.hash,port:b.port}};function C(){for(var a=D,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function E(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var D,F,G=function(a){D=D||E();F=F||C();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),f=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,m=g>>2;g=(g&3)<<4|f>>4;f=(f&15)<<2|h>>6;h&=63;e||(h=64,d||(f=64));b.push(D[m],D[g],D[f],D[h])}return b.join("")},H=function(a){function b(m){for(;d<a.length;){var t=a.charAt(d++),L=F[t];if(null!=L)return L;if(!/^[\s\xa0]*$/.test(t))throw Error("Unknown base64 encoding at char: "+t);}return m}D=D||E();F=F||C();for(var c="",d=0;;){var e=
b(-1),g=b(0),f=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=f&&(c+=String.fromCharCode(g<<4&240|f>>2),64!=h&&(c+=String.fromCharCode(f<<6&192|h)))}};var I;function J(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var O=function(){var a=K,b=M,c=N(),d=function(f){a(f.target||f.srcElement||{})},e=function(f){b(f.target||f.srcElement||{})};if(!c.init){v("mousedown",d);v("keyup",d);v("submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},N=function(){var a={};var b=r.google_tag_data;r.google_tag_data=void 0===b?a:b;a=r.google_tag_data;b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var P=/(.*?)\*(.*?)\*(.*)/,Q=/([^?#]+)(\?[^#]*)?(#.*)?/,R=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,T=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(G(String(d))))}a=b.join("*");return["1",S(a),a].join("*")},S=function(a,b){a=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*");
if(!(b=I)){b=Array(256);for(var c=0;256>c;c++){for(var d=c,e=0;8>e;e++)d=d&1?d>>>1^3988292384:d>>>1;b[c]=d}}I=b;b=4294967295;for(c=0;c<a.length;c++)b=b>>>8^I[(b^a.charCodeAt(c))&255];return((b^-1)>>>0).toString(36)},ba=function(a){return function(b){var c=B(r.location.href),d=c.search.replace("?","");a:{var e=d.split("&");for(var g=0;g<e.length;g++){var f=e[g].split("=");if("_gl"===decodeURIComponent(f[0]).replace(/\+/g," ")){e=f.slice(1).join("=");break a}}e=void 0}b.query=U(e||"")||{};e=A(c,"fragment");
g=e.match(R);b.fragment=U(g&&g[3]||"")||{};a&&aa(c,d,e)}};function V(a){var b=R.exec(a);if(b){var c=b[2],d=b[4];a=b[1];d&&(a=a+c+d)}return a}
var aa=function(a,b,c){function d(e,g){e=V(e);e.length&&(e=g+e);return e}r.history&&r.history.replaceState&&(R.test(b)||R.test(c))&&(a=A(a,"path"),b=d(b,"?"),c=d(c,"#"),r.history.replaceState({},void 0,""+a+b+c))},U=function(a){var b=void 0===b?3:b;try{if(a){a:{for(var c=0;3>c;++c){var d=P.exec(a);if(d){var e=d;break a}a=decodeURIComponent(a)}e=void 0}if(e&&"1"===e[1]){var g=e[2],f=e[3];a:{for(e=0;e<b;++e)if(g===S(f,e)){var h=!0;break a}h=!1}if(h){b={};var m=f?f.split("*"):[];for(f=0;f<m.length;f+=
2)b[m[f]]=H(m[f+1]);return b}}}}catch(t){}};function W(a,b,c){function d(h){h=V(h);var m=h.charAt(h.length-1);h&&"&"!==m&&(h+="&");return h+f}c=void 0===c?!1:c;var e=Q.exec(b);if(!e)return"";b=e[1];var g=e[2]||"";e=e[3]||"";var f="_gl="+a;c?e="#"+d(e.substring(1)):g="?"+d(g.substring(1));return""+b+g+e}
function X(a,b,c){for(var d={},e={},g=N().decorators,f=0;f<g.length;++f){var h=g[f];(!c||h.forms)&&J(h.domains,b)&&(h.fragment?n(e,h.callback()):n(d,h.callback()))}p(d)&&(b=T(d),c?Y(b,a):Z(b,a,!1));!c&&p(e)&&(c=T(e),Z(c,a,!0))}function Z(a,b,c){b.href&&(a=W(a,b.href,void 0===c?!1:c),q.test(a)&&(b.href=a))}
function Y(a,b){if(b&&b.action){var c=(b.method||"").toLowerCase();if("get"===c){c=b.childNodes||[];for(var d=!1,e=0;e<c.length;e++){var g=c[e];if("_gl"===g.name){g.setAttribute("value",a);d=!0;break}}d||(c=u.createElement("input"),c.setAttribute("type","hidden"),c.setAttribute("name","_gl"),c.setAttribute("value",a),b.appendChild(c))}else"post"===c&&(a=W(a,b.action),q.test(a)&&(b.action=a))}}
var K=function(a){try{a:{for(var b=100;a&&0<b;){if(a.href&&a.nodeName.match(/^a(?:rea)?$/i)){var c=a;break a}a=a.parentNode;b--}c=null}if(c){var d=c.protocol;"http:"!==d&&"https:"!==d||X(c,c.hostname,!1)}}catch(e){}},M=function(a){try{if(a.action){var b=A(B(a.action),"host");X(a,b,!0)}}catch(c){}};l("google_tag_data.glBridge.auto",function(a,b,c,d){O();a={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};N().decorators.push(a)});l("google_tag_data.glBridge.decorate",function(a,b,c){c=!!c;a=T(a);if(b.tagName){if("a"==b.tagName.toLowerCase())return Z(a,b,c);if("form"==b.tagName.toLowerCase())return Y(a,b)}if("string"==typeof b)return W(a,b,c)});l("google_tag_data.glBridge.generate",T);
l("google_tag_data.glBridge.get",function(a,b){var c=ba(!!b);b=N();b.data||(b.data={query:{},fragment:{}},c(b.data));c={};if(b=b.data)n(c,b.query),a&&n(c,b.fragment);return c});})(window);
(function(){function La(a){var b=1,c;if(a)for(b=0,c=a.length-1;0<=c;c--){var d=a.charCodeAt(c);b=(b<<6&268435455)+d+(d<<14);d=b&266338304;b=0!=d?b^d>>21:b}return b};var $c=function(a){this.w=a||[]};$c.prototype.set=function(a){this.w[a]=!0};$c.prototype.encode=function(){for(var a=[],b=0;b<this.w.length;b++)this.w[b]&&(a[Math.floor(b/6)]^=1<<b%6);for(b=0;b<a.length;b++)a[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b]||0);return a.join("")+"~"};var ha=window.GoogleAnalyticsObject,wa;if(wa=void 0!=ha)wa=-1<(ha.constructor+"").indexOf("String");var Za;if(Za=wa){var Qa=window.GoogleAnalyticsObject;Za=Qa?Qa.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""}var gb=Za||"ga",jd=/^(?:utma\.)?\d+\.\d+$/,kd=/^amp-[\w.-]{22,64}$/,Ba=!1;var vd=new $c;function J(a){vd.set(a)}var Td=function(a){a=Dd(a);a=new $c(a);for(var b=vd.w.slice(),c=0;c<a.w.length;c++)b[c]=b[c]||a.w[c];return(new $c(b)).encode()},Dd=function(a){a=a.get(Gd);ka(a)||(a=[]);return a};var ea=function(a){return"function"==typeof a},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},qa=function(a){return void 0!=a&&-1<(a.constructor+"").indexOf("String")},D=function(a,b){return 0==a.indexOf(b)},sa=function(a){return a?a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""},ra=function(){for(var a=O.navigator.userAgent+(M.cookie?M.cookie:"")+(M.referrer?M.referrer:""),b=a.length,c=O.history.length;0<c;)a+=c--^b++;return[hd()^La(a)&2147483647,Math.round((new Date).getTime()/
1E3)].join(".")},ta=function(a){var b=M.createElement("img");b.width=1;b.height=1;b.src=a;return b},ua=function(){},K=function(a){if(encodeURIComponent instanceof Function)return encodeURIComponent(a);J(28);return a},L=function(a,b,c,d){try{a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}catch(e){J(27)}},f=/^[\w\-:/.?=&%!\[\]]+$/,Nd=/^[\w+/_-]+[=]{0,2}$/,be=function(a,b){return E(M.location[b?"href":"search"],a)},E=function(a,b){return(a=a.match("(?:&|#|\\?)"+
K(b).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==a.length?a[1]:""},xa=function(){var a=""+M.location.hostname;return 0==a.indexOf("www.")?a.substring(4):a},de=function(a,b){var c=a.indexOf(b);if(5==c||6==c)if(a=a.charAt(c+b.length),"/"==a||"?"==a||""==a||":"==a)return!0;return!1},ya=function(a,b){var c=M.referrer;if(/^(https?|android-app):\/\//i.test(c)){if(a)return c;a="//"+M.location.hostname;if(!de(c,a))return b&&(b=a.replace(/\./g,"-")+".cdn.ampproject.org",de(c,b))?void 0:
c}},za=function(a,b){if(1==b.length&&null!=b[0]&&"object"===typeof b[0])return b[0];for(var c={},d=Math.min(a.length+1,b.length),e=0;e<d;e++)if("object"===typeof b[e]){for(var g in b[e])b[e].hasOwnProperty(g)&&(c[g]=b[e][g]);break}else e<a.length&&(c[a[e]]=b[e]);return c};var ee=function(){this.keys=[];this.values={};this.m={}};ee.prototype.set=function(a,b,c){this.keys.push(a);c?this.m[":"+a]=b:this.values[":"+a]=b};ee.prototype.get=function(a){return this.m.hasOwnProperty(":"+a)?this.m[":"+a]:this.values[":"+a]};ee.prototype.map=function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b],d=this.get(c);d&&a(c,d)}};var O=window,M=document,va=function(a,b){return setTimeout(a,b)};var F=window,Ea=document,G=function(a){var b=F._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===F["ga-disable-"+a])return!0;try{var c=F.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}a=[];b=String(Ea.cookie||document.cookie).split(";");for(c=0;c<b.length;c++){var d=b[c].split("="),e=d[0].replace(/^\s*|\s*$/g,"");e&&"AMP_TOKEN"==e&&((d=d.slice(1).join("=").replace(/^\s*|\s*$/g,""))&&(d=decodeURIComponent(d)),a.push(d))}for(b=0;b<a.length;b++)if("$OPT_OUT"==a[b])return!0;return Ea.getElementById("__gaOptOutExtension")?
!0:!1};var Ca=function(a){var b=[],c=M.cookie.split(";");a=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c.length;d++){var e=c[d].match(a);e&&b.push(e[1])}return b},zc=function(a,b,c,d,e,g){e=G(e)?!1:eb.test(M.location.hostname)||"/"==c&&vc.test(d)?!1:!0;if(!e)return!1;b&&1200<b.length&&(b=b.substring(0,1200));c=a+"="+b+"; path="+c+"; ";g&&(c+="expires="+(new Date((new Date).getTime()+g)).toGMTString()+"; ");d&&"none"!==d&&(c+="domain="+d+";");d=M.cookie;M.cookie=c;if(!(d=d!=M.cookie))a:{a=Ca(a);
for(d=0;d<a.length;d++)if(b==a[d]){d=!0;break a}d=!1}return d},Cc=function(a){return encodeURIComponent?encodeURIComponent(a).replace(/\(/g,"%28").replace(/\)/g,"%29"):a},vc=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,eb=/(^|\.)doubleclick\.net$/i;var oc,Id=/^.*Version\/?(\d+)[^\d].*$/i,ne=function(){if(void 0!==O.__ga4__)return O.__ga4__;if(void 0===oc){var a=O.navigator.userAgent;if(a){var b=a;try{b=decodeURIComponent(a)}catch(c){}if(a=!(0<=b.indexOf("Chrome"))&&!(0<=b.indexOf("CriOS"))&&(0<=b.indexOf("Safari/")||0<=b.indexOf("Safari,")))b=Id.exec(b),a=11<=(b?Number(b[1]):-1);oc=a}else oc=!1}return oc};var Fa,Ga,fb,Ab,ja=/^https?:\/\/[^/]*cdn\.ampproject\.org\//,Ue=/^(?:www\.|m\.|amp\.)+/,Ub=[],da=function(a){if(ye(a[Kd])){if(void 0===Ab){var b;if(b=(b=De.get())&&b._ga||void 0)Ab=b,J(81)}if(void 0!==Ab)return a[Q]||(a[Q]=Ab),!1}if(a[Kd]){J(67);if(a[ac]&&"cookie"!=a[ac])return!1;if(void 0!==Ab)a[Q]||(a[Q]=Ab);else{a:{b=String(a[W]||xa());var c=String(a[Yb]||"/"),d=Ca(String(a[U]||"_ga"));b=na(d,b,c);if(!b||jd.test(b))b=!0;else if(b=Ca("AMP_TOKEN"),0==b.length)b=!0;else{if(1==b.length&&(b=decodeURIComponent(b[0]),
"$RETRIEVING"==b||"$OPT_OUT"==b||"$ERROR"==b||"$NOT_FOUND"==b)){b=!0;break a}b=!1}}if(b&&tc(ic,String(a[Na])))return!0}}return!1},ic=function(){Z.D([ua])},tc=function(a,b){var c=Ca("AMP_TOKEN");if(1<c.length)return J(55),!1;c=decodeURIComponent(c[0]||"");if("$OPT_OUT"==c||"$ERROR"==c||G(b))return J(62),!1;if(!ja.test(M.referrer)&&"$NOT_FOUND"==c)return J(68),!1;if(void 0!==Ab)return J(56),va(function(){a(Ab)},0),!0;if(Fa)return Ub.push(a),!0;if("$RETRIEVING"==c)return J(57),va(function(){tc(a,b)},
1E4),!0;Fa=!0;c&&"$"!=c[0]||(xc("$RETRIEVING",3E4),setTimeout(Mc,3E4),c="");return Pc(c,b)?(Ub.push(a),!0):!1},Pc=function(a,b,c){if(!window.JSON)return J(58),!1;var d=O.XMLHttpRequest;if(!d)return J(59),!1;var e=new d;if(!("withCredentials"in e))return J(60),!1;e.open("POST",(c||"https://ampcid.google.com/v1/publisher:getClientId")+"?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM",!0);e.withCredentials=!0;e.setRequestHeader("Content-Type","text/plain");e.onload=function(){Fa=!1;if(4==e.readyState){try{200!=
e.status&&(J(61),Qc("","$ERROR",3E4));var g=JSON.parse(e.responseText);g.optOut?(J(63),Qc("","$OPT_OUT",31536E6)):g.clientId?Qc(g.clientId,g.securityToken,31536E6):!c&&g.alternateUrl?(Ga&&clearTimeout(Ga),Fa=!0,Pc(a,b,g.alternateUrl)):(J(64),Qc("","$NOT_FOUND",36E5))}catch(ca){J(65),Qc("","$ERROR",3E4)}e=null}};d={originScope:"AMP_ECID_GOOGLE"};a&&(d.securityToken=a);e.send(JSON.stringify(d));Ga=va(function(){J(66);Qc("","$ERROR",3E4)},1E4);return!0},Mc=function(){Fa=!1},xc=function(a,b){if(void 0===
fb){fb="";for(var c=id(),d=0;d<c.length;d++){var e=c[d];if(zc("AMP_TOKEN",encodeURIComponent(a),"/",e,"",b)){fb=e;return}}}zc("AMP_TOKEN",encodeURIComponent(a),"/",fb,"",b)},Qc=function(a,b,c){Ga&&clearTimeout(Ga);b&&xc(b,c);Ab=a;b=Ub;Ub=[];for(c=0;c<b.length;c++)b[c](a)},ye=function(a){a:{if(ja.test(M.referrer)){var b=M.location.hostname.replace(Ue,"");b:{var c=M.referrer;c=c.replace(/^https?:\/\//,"");var d=c.replace(/^[^/]+/,"").split("/"),e=d[2];d=(d="s"==e?d[3]:e)?decodeURIComponent(d):d;if(!d){if(0==
c.indexOf("xn--")){c="";break b}(c=c.match(/(.*)\.cdn\.ampproject\.org\/?$/))&&2==c.length&&(d=c[1].replace(/-/g,".").replace(/\.\./g,"-"))}c=d?d.replace(Ue,""):""}(d=b===c)||(c="."+c,d=b.substring(b.length-c.length,b.length)===c);if(d){b=!0;break a}else J(78)}b=!1}return b&&!1!==a};var bd=function(a){return(a?"https:":Ba||"https:"==M.location.protocol?"https:":"http:")+"//www.google-analytics.com"},Da=function(a){this.name="len";this.message=a+"-8192"},ba=function(a,b,c){c=c||ua;if(2036>=b.length)wc(a,b,c);else if(8192>=b.length)x(a,b,c)||wd(a,b,c)||wc(a,b,c);else throw ge("len",b.length),new Da(b.length);},pe=function(a,b,c,d){d=d||ua;wd(a+"?"+b,"",d,c)},wc=function(a,b,c){var d=ta(a+"?"+b);d.onload=d.onerror=function(){d.onload=null;d.onerror=null;c()}},wd=function(a,b,c,
d){var e=O.XMLHttpRequest;if(!e)return!1;var g=new e;if(!("withCredentials"in g))return!1;a=a.replace(/^http:/,"https:");g.open("POST",a,!0);g.withCredentials=!0;g.setRequestHeader("Content-Type","text/plain");g.onreadystatechange=function(){if(4==g.readyState){if(d)try{var ca=g.responseText;if(1>ca.length)ge("xhr","ver","0"),c();else if("1"!=ca.charAt(0))ge("xhr","ver",String(ca.length)),c();else if(3<d.count++)ge("xhr","tmr",""+d.count),c();else if(1==ca.length)c();else{var l=ca.charAt(1);if("d"==
l)pe("https://stats.g.doubleclick.net/j/collect",d.U,d,c);else if("g"==l){wc("https://www.google.%/ads/ga-audiences".replace("%","com"),d.google,c);var k=ca.substring(2);k&&(/^[a-z.]{1,6}$/.test(k)?wc("https://www.google.%/ads/ga-audiences".replace("%",k),d.google,ua):ge("tld","bcc",k))}else ge("xhr","brc",l),c()}}catch(w){ge("xhr","rsp"),c()}else c();g=null}};g.send(b);return!0},x=function(a,b,c){return O.navigator.sendBeacon?O.navigator.sendBeacon(a,b)?(c(),!0):!1:!1},ge=function(a,b,c){1<=100*
Math.random()||G("?")||(a=["t=error","_e="+a,"_v=j79","sr=1"],b&&a.push("_f="+b),c&&a.push("_m="+K(c.substring(0,100))),a.push("aip=1"),a.push("z="+hd()),wc(bd(!0)+"/u/d",a.join("&"),ua))};var qc=function(){return O.gaData=O.gaData||{}},h=function(a){var b=qc();return b[a]=b[a]||{}};var Ha=function(){this.M=[]};Ha.prototype.add=function(a){this.M.push(a)};Ha.prototype.D=function(a){try{for(var b=0;b<this.M.length;b++){var c=a.get(this.M[b]);c&&ea(c)&&c.call(O,a)}}catch(d){}b=a.get(Ia);b!=ua&&ea(b)&&(a.set(Ia,ua,!0),setTimeout(b,10))};function Ja(a){if(100!=a.get(Ka)&&La(P(a,Q))%1E4>=100*R(a,Ka))throw"abort";}function Ma(a){if(G(P(a,Na)))throw"abort";}function Oa(){var a=M.location.protocol;if("http:"!=a&&"https:"!=a)throw"abort";}
function Pa(a){try{O.navigator.sendBeacon?J(42):O.XMLHttpRequest&&"withCredentials"in new O.XMLHttpRequest&&J(40)}catch(c){}a.set(ld,Td(a),!0);a.set(Ac,R(a,Ac)+1);var b=[];ue.map(function(c,d){d.F&&(c=a.get(c),void 0!=c&&c!=d.defaultValue&&("boolean"==typeof c&&(c*=1),b.push(d.F+"="+K(""+c))))});b.push("z="+Bd());a.set(Ra,b.join("&"),!0)}
function Sa(a){var b=P(a,fa);!b&&a.get(Vd)&&(b="beacon");var c=P(a,gd),d=P(a,oe),e=c||(d?d+"/3":bd(!1)+"/collect");switch(P(a,ad)){case "d":e=c||(d?d+"/32":bd(!1)+"/j/collect");b=a.get(qe)||void 0;pe(e,P(a,Ra),b,a.Z(Ia));break;case "b":e=c||(d?d+"/31":bd(!1)+"/r/collect");default:b?(c=P(a,Ra),d=(d=a.Z(Ia))||ua,"image"==b?wc(e,c,d):"xhr"==b&&wd(e,c,d)||"beacon"==b&&x(e,c,d)||ba(e,c,d)):ba(e,P(a,Ra),a.Z(Ia))}e=P(a,Na);e=h(e);b=e.hitcount;e.hitcount=b?b+1:1;e=P(a,Na);delete h(e).pending_experiments;
a.set(Ia,ua,!0)}function Hc(a){qc().expId&&a.set(Nc,qc().expId);qc().expVar&&a.set(Oc,qc().expVar);var b=P(a,Na);if(b=h(b).pending_experiments){var c=[];for(d in b)b.hasOwnProperty(d)&&b[d]&&c.push(encodeURIComponent(d)+"."+encodeURIComponent(b[d]));var d=c.join("!")}else d=void 0;d&&a.set(m,d,!0)}function cd(){if(O.navigator&&"preview"==O.navigator.loadPurpose)throw"abort";}function yd(a){var b=O.gaDevIds;ka(b)&&0!=b.length&&a.set("&did",b.join(","),!0)}
function vb(a){if(!a.get(Na))throw"abort";};var hd=function(){return Math.round(2147483647*Math.random())},Bd=function(){try{var a=new Uint32Array(1);O.crypto.getRandomValues(a);return a[0]&2147483647}catch(b){return hd()}};function Ta(a){var b=R(a,Ua);500<=b&&J(15);var c=P(a,Va);if("transaction"!=c&&"item"!=c){c=R(a,Wa);var d=(new Date).getTime(),e=R(a,Xa);0==e&&a.set(Xa,d);e=Math.round(2*(d-e)/1E3);0<e&&(c=Math.min(c+e,20),a.set(Xa,d));if(0>=c)throw"abort";a.set(Wa,--c)}a.set(Ua,++b)};var Ya=function(){this.data=new ee};Ya.prototype.get=function(a){var b=$a(a),c=this.data.get(a);b&&void 0==c&&(c=ea(b.defaultValue)?b.defaultValue():b.defaultValue);return b&&b.Z?b.Z(this,a,c):c};var P=function(a,b){a=a.get(b);return void 0==a?"":""+a},R=function(a,b){a=a.get(b);return void 0==a||""===a?0:Number(a)};Ya.prototype.Z=function(a){return(a=this.get(a))&&ea(a)?a:ua};
Ya.prototype.set=function(a,b,c){if(a)if("object"==typeof a)for(var d in a)a.hasOwnProperty(d)&&ab(this,d,a[d],c);else ab(this,a,b,c)};var ab=function(a,b,c,d){if(void 0!=c)switch(b){case Na:wb.test(c)}var e=$a(b);e&&e.o?e.o(a,b,c,d):a.data.set(b,c,d)};var ue=new ee,ve=[],bb=function(a,b,c,d,e){this.name=a;this.F=b;this.Z=d;this.o=e;this.defaultValue=c},$a=function(a){var b=ue.get(a);if(!b)for(var c=0;c<ve.length;c++){var d=ve[c],e=d[0].exec(a);if(e){b=d[1](e);ue.set(b.name,b);break}}return b},yc=function(a){var b;ue.map(function(c,d){d.F==a&&(b=d)});return b&&b.name},S=function(a,b,c,d,e){a=new bb(a,b,c,d,e);ue.set(a.name,a);return a.name},cb=function(a,b){ve.push([new RegExp("^"+a+"$"),b])},T=function(a,b,c){return S(a,b,c,void 0,db)},db=function(){};var hb=T("apiVersion","v"),ib=T("clientVersion","_v");S("anonymizeIp","aip");var jb=S("adSenseId","a"),Va=S("hitType","t"),Ia=S("hitCallback"),Ra=S("hitPayload");S("nonInteraction","ni");S("currencyCode","cu");S("dataSource","ds");var Vd=S("useBeacon",void 0,!1),fa=S("transport");S("sessionControl","sc","");S("sessionGroup","sg");S("queueTime","qt");var Ac=S("_s","_s");S("screenName","cd");var kb=S("location","dl",""),lb=S("referrer","dr"),mb=S("page","dp","");S("hostname","dh");
var nb=S("language","ul"),ob=S("encoding","de");S("title","dt",function(){return M.title||void 0});cb("contentGroup([0-9]+)",function(a){return new bb(a[0],"cg"+a[1])});var pb=S("screenColors","sd"),qb=S("screenResolution","sr"),rb=S("viewportSize","vp"),sb=S("javaEnabled","je"),tb=S("flashVersion","fl");S("campaignId","ci");S("campaignName","cn");S("campaignSource","cs");S("campaignMedium","cm");S("campaignKeyword","ck");S("campaignContent","cc");
var ub=S("eventCategory","ec"),xb=S("eventAction","ea"),yb=S("eventLabel","el"),zb=S("eventValue","ev"),Bb=S("socialNetwork","sn"),Cb=S("socialAction","sa"),Db=S("socialTarget","st"),Eb=S("l1","plt"),Fb=S("l2","pdt"),Gb=S("l3","dns"),Hb=S("l4","rrt"),Ib=S("l5","srt"),Jb=S("l6","tcp"),Kb=S("l7","dit"),Lb=S("l8","clt"),Ve=S("l9","_gst"),We=S("l10","_gbt"),Xe=S("l11","_cst"),Ye=S("l12","_cbt"),Mb=S("timingCategory","utc"),Nb=S("timingVar","utv"),Ob=S("timingLabel","utl"),Pb=S("timingValue","utt");
S("appName","an");S("appVersion","av","");S("appId","aid","");S("appInstallerId","aiid","");S("exDescription","exd");S("exFatal","exf");var Nc=S("expId","xid"),Oc=S("expVar","xvar"),m=S("exp","exp"),Rc=S("_utma","_utma"),Sc=S("_utmz","_utmz"),Tc=S("_utmht","_utmht"),Ua=S("_hc",void 0,0),Xa=S("_ti",void 0,0),Wa=S("_to",void 0,20);cb("dimension([0-9]+)",function(a){return new bb(a[0],"cd"+a[1])});cb("metric([0-9]+)",function(a){return new bb(a[0],"cm"+a[1])});S("linkerParam",void 0,void 0,Bc,db);
var Ze=T("_cd2l",void 0,!1),ld=S("usage","_u"),Gd=S("_um");S("forceSSL",void 0,void 0,function(){return Ba},function(a,b,c){J(34);Ba=!!c});var ed=S("_j1","jid"),ia=S("_j2","gjid");cb("\\&(.*)",function(a){var b=new bb(a[0],a[1]),c=yc(a[0].substring(1));c&&(b.Z=function(d){return d.get(c)},b.o=function(d,e,g,ca){d.set(c,g,ca)},b.F=void 0);return b});
var Qb=T("_oot"),dd=S("previewTask"),Rb=S("checkProtocolTask"),md=S("validationTask"),Sb=S("checkStorageTask"),Uc=S("historyImportTask"),Tb=S("samplerTask"),Vb=S("_rlt"),Wb=S("buildHitTask"),Xb=S("sendHitTask"),Vc=S("ceTask"),zd=S("devIdTask"),Cd=S("timingTask"),Ld=S("displayFeaturesTask"),oa=S("customTask"),V=T("name"),Q=T("clientId","cid"),n=T("clientIdTime"),xd=T("storedClientId"),Ad=S("userId","uid"),Na=T("trackingId","tid"),U=T("cookieName",void 0,"_ga"),W=T("cookieDomain"),Yb=T("cookiePath",
void 0,"/"),Zb=T("cookieExpires",void 0,63072E3),Hd=T("cookieUpdate",void 0,!0),$b=T("legacyCookieDomain"),Wc=T("legacyHistoryImport",void 0,!0),ac=T("storage",void 0,"cookie"),bc=T("allowLinker",void 0,!1),cc=T("allowAnchor",void 0,!0),Ka=T("sampleRate","sf",100),dc=T("siteSpeedSampleRate",void 0,1),ec=T("alwaysSendReferrer",void 0,!1),I=T("_gid","_gid"),la=T("_gcn"),Kd=T("useAmpClientId"),ce=T("_gclid"),fe=T("_gt"),he=T("_ge",void 0,7776E6),ie=T("_gclsrc"),je=T("storeGac",void 0,!0),oe=S("_x_19"),
gd=S("transportUrl"),Md=S("_r","_r"),qe=S("_dp"),ad=S("_jt",void 0,"n"),Ud=S("allowAdFeatures",void 0,!0);function X(a,b,c,d){b[a]=function(){try{return d&&J(d),c.apply(this,arguments)}catch(e){throw ge("exc",a,e&&e.name),e;}}};var Od=function(){this.V=100;this.$=this.fa=!1;this.oa="detourexp";this.groups=1},Ed=function(a){var b=new Od,c;if(b.fa&&b.$)return 0;b.$=!0;if(a){if(b.oa&&void 0!==a.get(b.oa))return R(a,b.oa);if(0==a.get(dc))return 0}if(0==b.V)return 0;void 0===c&&(c=Bd());return 0==c%b.V?Math.floor(c/b.V)%b.groups+1:0};function fc(){var a,b;if((b=(b=O.navigator)?b.plugins:null)&&b.length)for(var c=0;c<b.length&&!a;c++){var d=b[c];-1<d.name.indexOf("Shockwave Flash")&&(a=d.description)}if(!a)try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");a=e.GetVariable("$version")}catch(g){}if(!a)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),a="WIN 6,0,21,0",e.AllowScriptAccess="always",a=e.GetVariable("$version")}catch(g){}if(!a)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),a=e.GetVariable("$version")}catch(g){}a&&
(e=a.match(/[\d]+/g))&&3<=e.length&&(a=e[0]+"."+e[1]+" r"+e[2]);return a||void 0};var aa=function(a){var b=Math.min(R(a,dc),100);return La(P(a,Q))%100>=b?!1:!0},gc=function(a){var b={};if(Ec(b)||Fc(b)){var c=b[Eb];void 0==c||Infinity==c||isNaN(c)||(0<c?(Y(b,Gb),Y(b,Jb),Y(b,Ib),Y(b,Fb),Y(b,Hb),Y(b,Kb),Y(b,Lb),Y(b,Ve),Y(b,We),Y(b,Xe),Y(b,Ye),va(function(){a(b)},10)):L(O,"load",function(){gc(a)},!1))}},Ec=function(a){var b=O.performance||O.webkitPerformance;b=b&&b.timing;if(!b)return!1;var c=b.navigationStart;if(0==c)return!1;a[Eb]=b.loadEventStart-c;a[Gb]=b.domainLookupEnd-b.domainLookupStart;
a[Jb]=b.connectEnd-b.connectStart;a[Ib]=b.responseStart-b.requestStart;a[Fb]=b.responseEnd-b.responseStart;a[Hb]=b.fetchStart-c;a[Kb]=b.domInteractive-c;a[Lb]=b.domContentLoadedEventStart-c;a[Ve]=N.L-c;a[We]=N.ya-c;O.google_tag_manager&&O.google_tag_manager._li&&(b=O.google_tag_manager._li,a[Xe]=b.cst,a[Ye]=b.cbt);return!0},Fc=function(a){if(O.top!=O)return!1;var b=O.external,c=b&&b.onloadT;b&&!b.isValidLoadTime&&(c=void 0);2147483648<c&&(c=void 0);0<c&&b.setPageReadyTime();if(void 0==c)return!1;
a[Eb]=c;return!0},Y=function(a,b){var c=a[b];if(isNaN(c)||Infinity==c||0>c)a[b]=void 0},Fd=function(a){return function(b){if("pageview"==b.get(Va)&&!a.I){a.I=!0;var c=aa(b),d=0<E(P(b,kb),"gclid").length;(c||d)&&gc(function(e){c&&a.send("timing",e);d&&a.send("adtiming",e)})}}};var hc=!1,mc=function(a){if("cookie"==P(a,ac)){if(a.get(Hd)||P(a,xd)!=P(a,Q)){var b=1E3*R(a,Zb);ma(a,Q,U,b)}(a.get(Hd)||uc(a)!=P(a,I))&&ma(a,I,la,864E5);if(a.get(je)){var c=P(a,ce);if(c){var d=Math.min(R(a,he),1E3*R(a,Zb));d=Math.min(d,1E3*R(a,fe)+d-(new Date).getTime());a.data.set(he,d);b={};var e=P(a,fe),g=P(a,ie),ca=kc(P(a,Yb)),l=lc(P(a,W));a=P(a,Na);g&&"aw.ds"!=g?b&&(b.ua=!0):(c=["1",e,Cc(c)].join("."),0<d&&(b&&(b.ta=!0),zc("_gac_"+Cc(a),c,ca,l,a,d)));le(b)}}else J(75)}},ma=function(a,b,c,d){var e=
nd(a,b);if(e){c=P(a,c);var g=kc(P(a,Yb)),ca=lc(P(a,W)),l=P(a,Na);if("auto"!=ca)zc(c,e,g,ca,l,d)&&(hc=!0);else{J(32);for(var k=id(),w=0;w<k.length;w++)if(ca=k[w],a.data.set(W,ca),e=nd(a,b),zc(c,e,g,ca,l,d)){hc=!0;return}a.data.set(W,"auto")}}},uc=function(a){var b=Ca(P(a,la));return Xd(a,b)},nc=function(a){if("cookie"==P(a,ac)&&!hc&&(mc(a),!hc))throw"abort";},Yc=function(a){if(a.get(Wc)){var b=P(a,W),c=P(a,$b)||xa(),d=Xc("__utma",c,b);d&&(J(19),a.set(Tc,(new Date).getTime(),!0),a.set(Rc,d.R),(b=Xc("__utmz",
c,b))&&d.hash==b.hash&&a.set(Sc,b.R))}},nd=function(a,b){b=Cc(P(a,b));var c=lc(P(a,W)).split(".").length;a=jc(P(a,Yb));1<a&&(c+="-"+a);return b?["GA1",c,b].join("."):""},Xd=function(a,b){return na(b,P(a,W),P(a,Yb))},na=function(a,b,c){if(!a||1>a.length)J(12);else{for(var d=[],e=0;e<a.length;e++){var g=a[e];var ca=g.split(".");var l=ca.shift();("GA1"==l||"1"==l)&&1<ca.length?(g=ca.shift().split("-"),1==g.length&&(g[1]="1"),g[0]*=1,g[1]*=1,ca={H:g,s:ca.join(".")}):ca=kd.test(g)?{H:[0,0],s:g}:void 0;
ca&&d.push(ca)}if(1==d.length)return J(13),d[0].s;if(0==d.length)J(12);else{J(14);d=Gc(d,lc(b).split(".").length,0);if(1==d.length)return d[0].s;d=Gc(d,jc(c),1);1<d.length&&J(41);return d[0]&&d[0].s}}},Gc=function(a,b,c){for(var d=[],e=[],g,ca=0;ca<a.length;ca++){var l=a[ca];l.H[c]==b?d.push(l):void 0==g||l.H[c]<g?(e=[l],g=l.H[c]):l.H[c]==g&&e.push(l)}return 0<d.length?d:e},lc=function(a){return 0==a.indexOf(".")?a.substr(1):a},id=function(){var a=[],b=xa().split(".");if(4==b.length){var c=b[b.length-
1];if(parseInt(c,10)==c)return["none"]}for(c=b.length-2;0<=c;c--)a.push(b.slice(c).join("."));b=M.location.hostname;eb.test(b)||vc.test(b)||a.push("none");return a},kc=function(a){if(!a)return"/";1<a.length&&a.lastIndexOf("/")==a.length-1&&(a=a.substr(0,a.length-1));0!=a.indexOf("/")&&(a="/"+a);return a},jc=function(a){a=kc(a);return"/"==a?1:a.split("/").length},le=function(a){a.ta&&J(77);a.na&&J(74);a.pa&&J(73);a.ua&&J(69)};function Xc(a,b,c){"none"==b&&(b="");var d=[],e=Ca(a);a="__utma"==a?6:2;for(var g=0;g<e.length;g++){var ca=(""+e[g]).split(".");ca.length>=a&&d.push({hash:ca[0],R:e[g],O:ca})}if(0!=d.length)return 1==d.length?d[0]:Zc(b,d)||Zc(c,d)||Zc(null,d)||d[0]}function Zc(a,b){if(null==a)var c=a=1;else c=La(a),a=La(D(a,".")?a.substring(1):"."+a);for(var d=0;d<b.length;d++)if(b[d].hash==c||b[d].hash==a)return b[d]};var Jc=new RegExp(/^https?:\/\/([^\/:]+)/),De=O.google_tag_data.glBridge,Kc=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,od=/(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;function Bc(a){if(a.get(Ze))return J(35),De.generate($e(a));var b=P(a,Q),c=P(a,I)||"";b="_ga=2."+K(pa(c+b,0)+"."+c+"-"+b);(a=af(a))?(J(44),a="&_gac=1."+K([pa(a.qa,0),a.timestamp,a.qa].join("."))):a="";return b+a}
function Ic(a,b){var c=new Date,d=O.navigator,e=d.plugins||[];a=[a,d.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b];for(b=0;b<e.length;++b)a.push(e[b].description);return La(a.join("."))}function pa(a,b){var c=new Date,d=O.navigator,e=c.getHours()+Math.floor((c.getMinutes()+b)/60);return La([a,d.userAgent,d.language||"",c.getTimezoneOffset(),c.getYear(),c.getDate()+Math.floor(e/24),(24+e)%24,(60+c.getMinutes()+b)%60].join("."))}
var Dc=function(a){J(48);this.target=a;this.T=!1};Dc.prototype.ca=function(a,b){if(a){if(this.target.get(Ze))return De.decorate($e(this.target),a,b);if(a.tagName){if("a"==a.tagName.toLowerCase()){a.href&&(a.href=qd(this,a.href,b));return}if("form"==a.tagName.toLowerCase())return rd(this,a)}if("string"==typeof a)return qd(this,a,b)}};
var qd=function(a,b,c){var d=Kc.exec(b);d&&3<=d.length&&(b=d[1]+(d[3]?d[2]+d[3]:""));(d=od.exec(b))&&3<=d.length&&(b=d[1]+(d[3]?d[2]+d[3]:""));a=a.target.get("linkerParam");var e=b.indexOf("?");d=b.indexOf("#");c?b+=(-1==d?"#":"&")+a:(c=-1==e?"?":"&",b=-1==d?b+(c+a):b.substring(0,d)+c+a+b.substring(d));b=b.replace(/&+_ga=/,"&_ga=");return b=b.replace(/&+_gac=/,"&_gac=")},rd=function(a,b){if(b&&b.action)if("get"==b.method.toLowerCase()){a=a.target.get("linkerParam").split("&");for(var c=0;c<a.length;c++){var d=
a[c].split("="),e=d[1];d=d[0];for(var g=b.childNodes||[],ca=!1,l=0;l<g.length;l++)if(g[l].name==d){g[l].setAttribute("value",e);ca=!0;break}ca||(g=M.createElement("input"),g.setAttribute("type","hidden"),g.setAttribute("name",d),g.setAttribute("value",e),b.appendChild(g))}}else"post"==b.method.toLowerCase()&&(b.action=qd(a,b.action))};
Dc.prototype.S=function(a,b,c){function d(g){try{g=g||O.event;a:{var ca=g.target||g.srcElement;for(g=100;ca&&0<g;){if(ca.href&&ca.nodeName.match(/^a(?:rea)?$/i)){var l=ca;break a}ca=ca.parentNode;g--}l={}}("http:"==l.protocol||"https:"==l.protocol)&&sd(a,l.hostname||"")&&l.href&&(l.href=qd(e,l.href,b))}catch(k){J(26)}}var e=this;this.target.get(Ze)?De.auto(function(){return $e(e.target)},a,b?"fragment":"",c):(this.T||(this.T=!0,L(M,"mousedown",d,!1),L(M,"keyup",d,!1)),c&&L(M,"submit",function(g){g=
g||O.event;if((g=g.target||g.srcElement)&&g.action){var ca=g.action.match(Jc);ca&&sd(a,ca[1])&&rd(e,g)}}))};function sd(a,b){if(b==M.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}function ke(a,b){return b!=Ic(a,0)&&b!=Ic(a,-1)&&b!=Ic(a,-2)&&b!=pa(a,0)&&b!=pa(a,-1)&&b!=pa(a,-2)}function $e(a){var b=af(a);return{_ga:a.get(Q),_gid:a.get(I)||void 0,_gac:b?[b.qa,b.timestamp].join("."):void 0}}
function af(a){function b(e){return void 0==e||""===e?0:Number(e)}var c=a.get(ce);if(c&&a.get(je)){var d=b(a.get(fe));if(1E3*d+b(a.get(he))<=(new Date).getTime())J(76);else return{timestamp:d,qa:c}}};var p=/^(GTM|OPT)-[A-Z0-9]+$/,q=/;_gaexp=[^;]*/g,r=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,Aa=/^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,t=function(a){function b(d,e){e&&(c+="&"+d+"="+K(e))}var c="https://www.google-analytics.com/gtm/js?id="+K(a.id);"dataLayer"!=a.B&&b("l",a.B);b("t",a.target);b("cid",a.clientId);b("cidt",a.ka);b("gac",a.la);b("aip",a.ia);a.sync&&b("m","sync");b("cycle",a.G);a.qa&&b("gclid",a.qa);Aa.test(M.referrer)&&b("cb",String(hd()));return c};var Jd=function(a,b,c){this.aa=b;(b=c)||(b=(b=P(a,V))&&"t0"!=b?Wd.test(b)?"_gat_"+Cc(P(a,Na)):"_gat_"+Cc(b):"_gat");this.Y=b;this.ra=null},Rd=function(a,b){var c=b.get(Wb);b.set(Wb,function(e){Pd(a,e,ed);Pd(a,e,ia);var g=c(e);Qd(a,e);return g});var d=b.get(Xb);b.set(Xb,function(e){var g=d(e);if(se(e)){if(ne()!==H(a,e)){J(80);var ca={U:re(a,e,1),google:re(a,e,2),count:0};pe("https://stats.g.doubleclick.net/j/collect",ca.U,ca)}else ta(re(a,e,0));e.set(ed,"",!0)}return g})},Pd=function(a,b,c){!1===b.get(Ud)||
b.get(c)||("1"==Ca(a.Y)[0]?b.set(c,"",!0):b.set(c,""+hd(),!0))},Qd=function(a,b){se(b)&&zc(a.Y,"1",P(b,Yb),P(b,W),P(b,Na),6E4)},se=function(a){return!!a.get(ed)&&!1!==a.get(Ud)},re=function(a,b,c){var d=new ee,e=function(ca){$a(ca).F&&d.set($a(ca).F,b.get(ca))};e(hb);e(ib);e(Na);e(Q);e(ed);if(0==c||1==c)e(Ad),e(ia),e(I);d.set($a(ld).F,Td(b));var g="";d.map(function(ca,l){g+=K(ca)+"=";g+=K(""+l)+"&"});g+="z="+hd();0==c?g=a.aa+g:1==c?g="t=dc&aip=1&_r=3&"+g:2==c&&(g="t=sr&aip=1&_r=4&slf_rd=1&"+g);return g},
H=function(a,b){null===a.ra&&(a.ra=1===Ed(b),a.ra&&J(33));return a.ra},Wd=/^gtm\d+$/;var fd=function(a,b){a=a.b;if(!a.get("dcLoaded")){var c=new $c(Dd(a));c.set(29);a.set(Gd,c.w);b=b||{};var d;b[U]&&(d=Cc(b[U]));b=new Jd(a,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",d);Rd(b,a);a.set("dcLoaded",!0)}};var Sd=function(a){if(!a.get("dcLoaded")&&"cookie"==a.get(ac)){var b=new Jd(a);Pd(b,a,ed);Pd(b,a,ia);Qd(b,a);if(se(a)){var c=ne()!==H(b,a);a.set(Md,1,!0);c?(J(79),a.set(ad,"d",!0),a.set(qe,{U:re(b,a,1),google:re(b,a,2),count:0},!0)):a.set(ad,"b",!0)}}};var Lc=function(){var a=O.gaGlobal=O.gaGlobal||{};return a.hid=a.hid||hd()};var wb=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,pc=function(a){function b(e,g){d.b.data.set(e,g)}function c(e,g){b(e,g);d.filters.add(e)}var d=this;this.b=new Ya;this.filters=new Ha;b(V,a[V]);b(Na,sa(a[Na]));b(U,a[U]);b(W,a[W]||xa());b(Yb,a[Yb]);b(Zb,a[Zb]);b(Hd,a[Hd]);b($b,a[$b]);b(Wc,a[Wc]);b(bc,a[bc]);b(cc,a[cc]);b(Ka,a[Ka]);b(dc,a[dc]);b(ec,a[ec]);b(ac,a[ac]);b(Ad,a[Ad]);b(n,a[n]);b(Kd,a[Kd]);b(je,a[je]);b(Ze,a[Ze]);b(oe,a[oe]);b(hb,1);b(ib,"j79");c(Qb,Ma);c(oa,ua);c(dd,cd);c(Rb,Oa);c(md,vb);c(Sb,nc);c(Uc,
Yc);c(Tb,Ja);c(Vb,Ta);c(Vc,Hc);c(zd,yd);c(Ld,Sd);c(Wb,Pa);c(Xb,Sa);c(Cd,Fd(this));pd(this.b);td(this.b,a[Q]);this.b.set(jb,Lc())},td=function(a,b){var c=P(a,U);a.data.set(la,"_ga"==c?"_gid":c+"_gid");if("cookie"==P(a,ac)){hc=!1;c=Ca(P(a,U));c=Xd(a,c);if(!c){c=P(a,W);var d=P(a,$b)||xa();c=Xc("__utma",d,c);void 0!=c?(J(10),c=c.O[1]+"."+c.O[2]):c=void 0}c&&(hc=!0);if(d=c&&!a.get(Hd))if(d=c.split("."),2!=d.length)d=!1;else if(d=Number(d[1])){var e=R(a,Zb);d=d+e<(new Date).getTime()/1E3}else d=!1;d&&(c=
void 0);c&&(a.data.set(xd,c),a.data.set(Q,c),(c=uc(a))&&a.data.set(I,c));if(a.get(je)&&(c=a.get(ce),d=a.get(ie),!c||d&&"aw.ds"!=d)){c={};if(M){d=[];e=M.cookie.split(";");for(var g=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,ca=0;ca<e.length;ca++){var l=e[ca].match(g);l&&d.push({ja:l[1],value:l[2]})}e={};if(d&&d.length)for(g=0;g<d.length;g++)(ca=d[g].value.split("."),"1"!=ca[0]||3!=ca.length)?c&&(c.na=!0):ca[1]&&(e[d[g].ja]?c&&(c.pa=!0):e[d[g].ja]=[],e[d[g].ja].push({timestamp:ca[1],qa:ca[2]}));d=e}else d=
{};d=d[P(a,Na)];le(c);d&&0!=d.length&&(c=d[0],a.data.set(fe,c.timestamp),a.data.set(ce,c.qa))}}if(a.get(Hd)&&(c=be("_ga",!!a.get(cc)),g=be("_gl",!!a.get(cc)),d=De.get(a.get(cc)),e=d._ga,g&&0<g.indexOf("_ga*")&&!e&&J(30),g=d.gclid,ca=d._gac,c||e||g||ca))if(c&&e&&J(36),a.get(bc)||ye(a.get(Kd))){if(e&&(J(38),a.data.set(Q,e),d._gid&&(J(51),a.data.set(I,d._gid))),g?(J(82),a.data.set(ce,g),d.gclsrc&&a.data.set(ie,d.gclsrc)):ca&&(d=ca.split("."))&&2===d.length&&(J(37),a.data.set(ce,d[0]),a.data.set(fe,d[1])),
c)b:if(d=c.indexOf("."),-1==d)J(22);else{e=c.substring(0,d);g=c.substring(d+1);d=g.indexOf(".");c=g.substring(0,d);g=g.substring(d+1);if("1"==e){if(d=g,ke(d,c)){J(23);break b}}else if("2"==e){d=g.indexOf("-");e="";0<d?(e=g.substring(0,d),d=g.substring(d+1)):d=g.substring(1);if(ke(e+d,c)){J(53);break b}e&&(J(2),a.data.set(I,e))}else{J(22);break b}J(11);a.data.set(Q,d);if(c=be("_gac",!!a.get(cc)))c=c.split("."),"1"!=c[0]||4!=c.length?J(72):ke(c[3],c[1])?J(71):(a.data.set(ce,c[3]),a.data.set(fe,c[2]),
J(70))}}else J(21);b&&(J(9),a.data.set(Q,K(b)));a.get(Q)||((b=(b=O.gaGlobal&&O.gaGlobal.vid)&&-1!=b.search(jd)?b:void 0)?(J(17),a.data.set(Q,b)):(J(8),a.data.set(Q,ra())));a.get(I)||(J(3),a.data.set(I,ra()));mc(a)},pd=function(a){var b=O.navigator,c=O.screen,d=M.location;a.set(lb,ya(!!a.get(ec),!!a.get(Kd)));if(d){var e=d.pathname||"";"/"!=e.charAt(0)&&(J(31),e="/"+e);a.set(kb,d.protocol+"//"+d.hostname+e+d.search)}c&&a.set(qb,c.width+"x"+c.height);c&&a.set(pb,c.colorDepth+"-bit");c=M.documentElement;
var g=(e=M.body)&&e.clientWidth&&e.clientHeight,ca=[];c&&c.clientWidth&&c.clientHeight&&("CSS1Compat"===M.compatMode||!g)?ca=[c.clientWidth,c.clientHeight]:g&&(ca=[e.clientWidth,e.clientHeight]);c=0>=ca[0]||0>=ca[1]?"":ca.join("x");a.set(rb,c);a.set(tb,fc());a.set(ob,M.characterSet||M.charset);a.set(sb,b&&"function"===typeof b.javaEnabled&&b.javaEnabled()||!1);a.set(nb,(b&&(b.language||b.browserLanguage)||"").toLowerCase());a.data.set(ce,be("gclid",!0));a.data.set(ie,be("gclsrc",!0));a.data.set(fe,
Math.round((new Date).getTime()/1E3));if(d&&a.get(cc)&&(b=M.location.hash)){b=b.split(/[?&#]+/);d=[];for(c=0;c<b.length;++c)(D(b[c],"utm_id")||D(b[c],"utm_campaign")||D(b[c],"utm_source")||D(b[c],"utm_medium")||D(b[c],"utm_term")||D(b[c],"utm_content")||D(b[c],"gclid")||D(b[c],"dclid")||D(b[c],"gclsrc"))&&d.push(b[c]);0<d.length&&(b="#"+d.join("&"),a.set(kb,a.get(kb)+b))}};pc.prototype.get=function(a){return this.b.get(a)};pc.prototype.set=function(a,b){this.b.set(a,b)};
var me={pageview:[mb],event:[ub,xb,yb,zb],social:[Bb,Cb,Db],timing:[Mb,Nb,Pb,Ob]};pc.prototype.send=function(a){if(!(1>arguments.length)){if("string"===typeof arguments[0]){var b=arguments[0];var c=[].slice.call(arguments,1)}else b=arguments[0]&&arguments[0][Va],c=arguments;b&&(c=za(me[b]||[],c),c[Va]=b,this.b.set(c,void 0,!0),this.filters.D(this.b),this.b.data.m={})}};pc.prototype.ma=function(a,b){var c=this;u(a,c,b)||(v(a,function(){u(a,c,b)}),y(String(c.get(V)),a,void 0,b,!0))};var rc=function(a){if("prerender"==M.visibilityState)return!1;a();return!0},z=function(a){if(!rc(a)){J(16);var b=!1,c=function(){if(!b&&rc(a)){b=!0;var d=c,e=M;e.removeEventListener?e.removeEventListener("visibilitychange",d,!1):e.detachEvent&&e.detachEvent("onvisibilitychange",d)}};L(M,"visibilitychange",c)}};var te=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,sc=function(a){if(ea(a[0]))this.u=a[0];else{var b=te.exec(a[0]);null!=b&&4==b.length&&(this.c=b[1]||"t0",this.K=b[2]||"",this.C=b[3],this.a=[].slice.call(a,1),this.K||(this.A="create"==this.C,this.i="require"==this.C,this.g="provide"==this.C,this.ba="remove"==this.C),this.i&&(3<=this.a.length?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(qa(this.a[1])?this.X=this.a[1]:this.W=this.a[1])));b=a[1];a=a[2];if(!this.C)throw"abort";if(this.i&&(!qa(b)||""==b))throw"abort";
if(this.g&&(!qa(b)||""==b||!ea(a)))throw"abort";if(ud(this.c)||ud(this.K))throw"abort";if(this.g&&"t0"!=this.c)throw"abort";}};function ud(a){return 0<=a.indexOf(".")||0<=a.indexOf(":")};var Yd,Zd,$d,A;Yd=new ee;$d=new ee;A=new ee;Zd={ec:45,ecommerce:46,linkid:47};
var u=function(a,b,c){b==N||b.get(V);var d=Yd.get(a);if(!ea(d))return!1;b.plugins_=b.plugins_||new ee;if(b.plugins_.get(a))return!0;b.plugins_.set(a,new d(b,c||{}));return!0},y=function(a,b,c,d,e){if(!ea(Yd.get(b))&&!$d.get(b)){Zd.hasOwnProperty(b)&&J(Zd[b]);a=N.j(a);if(p.test(b)){J(52);if(!a)return!0;c=d||{};d={id:b,B:c.dataLayer||"dataLayer",ia:!!a.get("anonymizeIp"),sync:e,G:!1};a.get("&gtm")==b&&(d.G=!0);var g=String(a.get("name"));"t0"!=g&&(d.target=g);G(String(a.get("trackingId")))||(d.clientId=
String(a.get(Q)),d.ka=Number(a.get(n)),c=c.palindrome?r:q,c=(c=M.cookie.replace(/^|(; +)/g,";").match(c))?c.sort().join("").substring(1):void 0,d.la=c,d.qa=E(a.b.get(kb)||"","gclid"));c=d.B;g=(new Date).getTime();O[c]=O[c]||[];g={"gtm.start":g};e||(g.event="gtm.js");O[c].push(g);c=t(d)}!c&&Zd.hasOwnProperty(b)?(J(39),c=b+".js"):J(43);if(c){if(a){var ca=a.get(oe);qa(ca)||(ca=void 0)}c&&0<=c.indexOf("/")||(c=(ca?ca+"/34":bd(!1)+"/plugins/ua/")+c);ca=ae(c);a=ca.protocol;d=M.location.protocol;if(("https:"==
a||a==d||("http:"!=a?0:"http:"==d))&&B(ca)){if(ca=ca.url)a=(a=M.querySelector&&M.querySelector("script[nonce]")||null)?a.nonce||a.getAttribute&&a.getAttribute("nonce")||"":"",e?(e="",a&&Nd.test(a)&&(e=' nonce="'+a+'"'),f.test(ca)&&M.write("<script"+e+' src="'+ca+'">\x3c/script>')):(e=M.createElement("script"),e.type="text/javascript",e.async=!0,e.src=ca,a&&e.setAttribute("nonce",a),ca=M.getElementsByTagName("script")[0],ca.parentNode.insertBefore(e,ca));$d.set(b,!0)}}}},v=function(a,b){var c=A.get(a)||
[];c.push(b);A.set(a,c)},C=function(a,b){Yd.set(a,b);b=A.get(a)||[];for(var c=0;c<b.length;c++)b[c]();A.set(a,[])},B=function(a){var b=ae(M.location.href);if(D(a.url,"https://www.google-analytics.com/gtm/js?id="))return!0;if(a.query||0<=a.url.indexOf("?")||0<=a.path.indexOf("://"))return!1;if(a.host==b.host&&a.port==b.port)return!0;b="http:"==a.protocol?80:443;return"www.google-analytics.com"==a.host&&(a.port||b)==b&&D(a.path,"/plugins/")?!0:!1},ae=function(a){function b(l){var k=l.hostname||"",w=
0<=k.indexOf("]");k=k.split(w?"]":":")[0].toLowerCase();w&&(k+="]");w=(l.protocol||"").toLowerCase();w=1*l.port||("http:"==w?80:"https:"==w?443:"");l=l.pathname||"";D(l,"/")||(l="/"+l);return[k,""+w,l]}var c=M.createElement("a");c.href=M.location.href;var d=(c.protocol||"").toLowerCase(),e=b(c),g=c.search||"",ca=d+"//"+e[0]+(e[1]?":"+e[1]:"");D(a,"//")?a=d+a:D(a,"/")?a=ca+a:!a||D(a,"?")?a=ca+e[2]+(a||g):0>a.split("/")[0].indexOf(":")&&(a=ca+e[2].substring(0,e[2].lastIndexOf("/"))+"/"+a);c.href=a;
d=b(c);return{protocol:(c.protocol||"").toLowerCase(),host:d[0],port:d[1],path:d[2],query:c.search||"",url:a||""}};var Z={ga:function(){Z.f=[]}};Z.ga();Z.D=function(a){var b=Z.J.apply(Z,arguments);b=Z.f.concat(b);for(Z.f=[];0<b.length&&!Z.v(b[0])&&!(b.shift(),0<Z.f.length););Z.f=Z.f.concat(b)};Z.J=function(a){for(var b=[],c=0;c<arguments.length;c++)try{var d=new sc(arguments[c]);d.g?C(d.a[0],d.a[1]):(d.i&&(d.ha=y(d.c,d.a[0],d.X,d.W)),b.push(d))}catch(e){}return b};
Z.v=function(a){try{if(a.u)a.u.call(O,N.j("t0"));else{var b=a.c==gb?N:N.j(a.c);if(a.A){if("t0"==a.c&&(b=N.create.apply(N,a.a),null===b))return!0}else if(a.ba)N.remove(a.c);else if(b)if(a.i){if(a.ha&&(a.ha=y(a.c,a.a[0],a.X,a.W)),!u(a.a[0],b,a.W))return!0}else if(a.K){var c=a.C,d=a.a,e=b.plugins_.get(a.K);e[c].apply(e,d)}else b[a.C].apply(b,a.a)}}catch(g){}};var N=function(a){J(1);Z.D.apply(Z,[arguments])};N.h={};N.P=[];N.L=0;N.ya=0;N.answer=42;var we=[Na,W,V];N.create=function(a){var b=za(we,[].slice.call(arguments));b[V]||(b[V]="t0");var c=""+b[V];if(N.h[c])return N.h[c];if(da(b))return null;b=new pc(b);N.h[c]=b;N.P.push(b);c=qc().tracker_created;if(ea(c))try{c(b)}catch(d){}return b};N.remove=function(a){for(var b=0;b<N.P.length;b++)if(N.P[b].get(V)==a){N.P.splice(b,1);N.h[a]=null;break}};N.j=function(a){return N.h[a]};N.getAll=function(){return N.P.slice(0)};
N.N=function(){"ga"!=gb&&J(49);var a=O[gb];if(!a||42!=a.answer){N.L=a&&a.l;N.ya=1*new Date;N.loaded=!0;var b=O[gb]=N;X("create",b,b.create);X("remove",b,b.remove);X("getByName",b,b.j,5);X("getAll",b,b.getAll,6);b=pc.prototype;X("get",b,b.get,7);X("set",b,b.set,4);X("send",b,b.send);X("requireSync",b,b.ma);b=Ya.prototype;X("get",b,b.get);X("set",b,b.set);if("https:"!=M.location.protocol&&!Ba){a:{b=M.getElementsByTagName("script");for(var c=0;c<b.length&&100>c;c++){var d=b[c].src;if(d&&0==d.indexOf(bd(!0)+
"/analytics")){b=!0;break a}}b=!1}b&&(Ba=!0)}(O.gaplugins=O.gaplugins||{}).Linker=Dc;b=Dc.prototype;C("linker",Dc);X("decorate",b,b.ca,20);X("autoLink",b,b.S,25);C("displayfeatures",fd);C("adfeatures",fd);a=a&&a.q;ka(a)?Z.D.apply(N,a):J(50)}};N.da=function(){for(var a=N.getAll(),b=0;b<a.length;b++)a[b].get(V)};var xe=N.N,ze=O[gb];ze&&ze.r?xe():z(xe);z(function(){Z.D(["provide","render",ua])});})(window);

(function(){"use strict";var t;t=function(t){var n,e,r,i;for(n=1,e=0,i=65521,r=0;r<t.length;)n=(n+t.charCodeAt(r))%i,e=(e+n)%i,r++;return e<<16|n};var n,e=function(t){function n(t){if(!w){if(!a.body)return i(n);for(w=!0;t=b.shift();)t()}}function e(){a[l]===f&&r()}function r(){m?(a.removeEventListener(h,r,s),a.removeEventListener(g,e,s),n()):a[l]===f&&(a.detachEvent(p,r),n())}function i(n,e){"undefined"!=typeof t&&null!==t&&(e=t),setTimeout(n,+e>=0?e:1)}function o(t){"complete"===a.readyState||w?t():b.push(t)}var u=window,a=u.document,c=a.documentElement,s=!1,f="complete",l="readyState",d="attachEvent",v="addEventListener",h="DOMContentLoaded",g="readystatechange",p="onreadystatechange",m=v in a,y=s,w=s,b=[];if(a[l]===f)i(n);else if(m)a[v](h,r,s),a[v](g,e,s),u[v]("load",n,s);else{a[d](p,r),u[d]("onload",n);try{y=null==u.frameElement&&c}catch(I){}y&&y.doScroll&&!function E(){if(!w){try{y.doScroll("left")}catch(t){return i(E,50)}n()}}()}return o.version="1.2",o};n=function(){return 1};var r,i=function(){var t;try{t="undefined"==typeof window?global:window}catch(n){t={}}var e={Number:t.Number,Date:t.Date,String:t.String,Object:t.Object,SyntaxError:t.SyntaxError,TypeError:t.TypeError,Math:t.Math,JSON:t.JSON};return function(t){function n(e,r){function i(t){if(i[t]!==g)return i[t];var n;if("bug-string-char-index"==t)n="a"!="a"[0];else if("json"==t)n=i("json-stringify")&&i("json-parse");else{var e,a='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==t){var s=r.stringify,f="function"==typeof s&&y;if(f){(e=function(){return 1}).toJSON=e;try{f="0"===s(0)&&"0"===s(new o)&&'""'==s(new u)&&s(m)===g&&s(g)===g&&s()===g&&"1"===s(e)&&"[1]"==s([e])&&"[null]"==s([g])&&"null"==s(null)&&"[null,null,null]"==s([g,m,null])&&s({a:[e,!0,!1,null,"\x00\b\n\f\r	"]})==a&&"1"===s(null,e)&&"[\n 1,\n 2\n]"==s([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==s(new c(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==s(new c(864e13))&&'"-000001-01-01T00:00:00.000Z"'==s(new c(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==s(new c(-1))}catch(l){f=!1}}n=f}if("json-parse"==t){var d=r.parse;if("function"==typeof d)try{if(0===d("0")&&!d(!1)){e=d(a);var v=5==e.a.length&&1===e.a[0];if(v){try{v=!d('"	"')}catch(l){}if(v)try{v=1!==d("01")}catch(l){}if(v)try{v=1!==d("1.")}catch(l){}}}}catch(l){v=!1}n=v}}return i[t]=!!n}e||(e=t.Object()),r||(r=t.Object());var o=e.Number||t.Number,u=e.String||t.String,a=e.Object||t.Object,c=e.Date||t.Date,s=e.SyntaxError||t.SyntaxError,f=e.TypeError||t.TypeError,l=e.Math||t.Math,d=e.JSON||t.JSON;"object"==typeof d&&d&&(r.stringify=d.stringify,r.parse=d.parse);var v,h,g,p=a.prototype,m=p.toString,y=new c(-0xc782b5b800cec);try{y=-109252==y.getUTCFullYear()&&0===y.getUTCMonth()&&1===y.getUTCDate()&&10==y.getUTCHours()&&37==y.getUTCMinutes()&&6==y.getUTCSeconds()&&708==y.getUTCMilliseconds()}catch(w){}if(!i("json")){var b="[object Function]",I="[object Date]",E="[object Number]",A="[object String]",S="[object Array]",k="[object Boolean]",N=i("bug-string-char-index");if(!y)var U=l.floor,D=[0,31,59,90,120,151,181,212,243,273,304,334],x=function(t,n){return D[n]+365*(t-1970)+U((t-1969+(n=+(n>1)))/4)-U((t-1901+n)/100)+U((t-1601+n)/400)};(v=p.hasOwnProperty)||(v=function(t){var n,e={};return(e.__proto__=null,e.__proto__={toString:1},e).toString!=m?v=function(t){var n=this.__proto__,e=t in(this.__proto__=null,this);return this.__proto__=n,e}:(n=e.constructor,v=function(t){var e=(this.constructor||n).prototype;return t in this&&!(t in e&&this[t]===e[t])}),e=null,v.call(this,t)});var C={"boolean":1,number:1,string:1,undefined:1},T=function(t,n){var e=typeof t[n];return"object"==e?!!t[n]:!C[e]};if(h=function(t,n){var e,r,i,o=0;(e=function(){this.valueOf=0}).prototype.valueOf=0,r=new e;for(i in r)v.call(r,i)&&o++;return e=r=null,o?h=2==o?function(t,n){var e,r={},i=m.call(t)==b;for(e in t)i&&"prototype"==e||v.call(r,e)||!(r[e]=1)||!v.call(t,e)||n(e)}:function(t,n){var e,r,i=m.call(t)==b;for(e in t)i&&"prototype"==e||!v.call(t,e)||(r="constructor"===e)||n(e);(r||v.call(t,e="constructor"))&&n(e)}:(r=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],h=function(t,n){var e,i,o=m.call(t)==b,u=!o&&"function"!=typeof t.constructor&&T(t,"hasOwnProperty")?t.hasOwnProperty:v;for(e in t)o&&"prototype"==e||!u.call(t,e)||n(e);for(i=r.length;e=r[--i];u.call(t,e)&&n(e));}),h(t,n)},!i("json-stringify")){var M={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},R="000000",_=function(t,n){return(R+(n||0)).slice(-t)},$="\\u00",O=function(t){for(var n='"',e=0,r=t.length,i=!N||r>10,o=i&&(N?t.split(""):t);r>e;e++){var u=t.charCodeAt(e);switch(u){case 8:case 9:case 10:case 12:case 13:case 34:case 92:n+=M[u];break;default:if(32>u){n+=$+_(2,u.toString(16));break}n+=i?o[e]:t.charAt(e)}}return n+'"'},P=function(t,n,e,r,i,o,u){var a,c,s,l,d,p,y,w,b,N,D,C,T,M,R,$;try{a=n[t]}catch(j){}if("object"==typeof a&&a)if(c=m.call(a),c!=I||v.call(a,"toJSON"))"function"==typeof a.toJSON&&(c!=E&&c!=A&&c!=S||v.call(a,"toJSON"))&&(a=a.toJSON(t));else if(a>-1/0&&1/0>a){if(x){for(d=U(a/864e5),s=U(d/365.2425)+1970-1;x(s+1,0)<=d;s++);for(l=U((d-x(s,0))/30.42);x(s,l+1)<=d;l++);d=1+d-x(s,l),p=(a%864e5+864e5)%864e5,y=U(p/36e5)%24,w=U(p/6e4)%60,b=U(p/1e3)%60,N=p%1e3}else s=a.getUTCFullYear(),l=a.getUTCMonth(),d=a.getUTCDate(),y=a.getUTCHours(),w=a.getUTCMinutes(),b=a.getUTCSeconds(),N=a.getUTCMilliseconds();a=(0>=s||s>=1e4?(0>s?"-":"+")+_(6,0>s?-s:s):_(4,s))+"-"+_(2,l+1)+"-"+_(2,d)+"T"+_(2,y)+":"+_(2,w)+":"+_(2,b)+"."+_(3,N)+"Z"}else a=null;if(e&&(a=e.call(n,t,a)),null===a)return"null";if(c=m.call(a),c==k)return""+a;if(c==E)return a>-1/0&&1/0>a?""+a:"null";if(c==A)return O(""+a);if("object"==typeof a){for(M=u.length;M--;)if(u[M]===a)throw f();if(u.push(a),D=[],R=o,o+=i,c==S){for(T=0,M=a.length;M>T;T++)C=P(T,a,e,r,i,o,u),D.push(C===g?"null":C);$=D.length?i?"[\n"+o+D.join(",\n"+o)+"\n"+R+"]":"["+D.join(",")+"]":"[]"}else h(r||a,function(t){var n=P(t,a,e,r,i,o,u);n!==g&&D.push(O(t)+":"+(i?" ":"")+n)}),$=D.length?i?"{\n"+o+D.join(",\n"+o)+"\n"+R+"}":"{"+D.join(",")+"}":"{}";return u.pop(),$}};r.stringify=function(t,n,e){var r,i,o,u;if("function"==typeof n||"object"==typeof n&&n)if((u=m.call(n))==b)i=n;else if(u==S){o={};for(var a,c=0,s=n.length;s>c;a=n[c++],u=m.call(a),(u==A||u==E)&&(o[a]=1));}if(e)if((u=m.call(e))==E){if((e-=e%1)>0)for(r="",e>10&&(e=10);r.length<e;r+=" ");}else u==A&&(r=e.length<=10?e:e.slice(0,10));return P("",(a={},a[""]=t,a),i,o,r,"",[])}}if(!i("json-parse")){var j,B,L=u.fromCharCode,W={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},V=function(){throw j=B=null,s()},z=function(){for(var t,n,e,r,i,o=B,u=o.length;u>j;)switch(i=o.charCodeAt(j)){case 9:case 10:case 13:case 32:j++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=N?o.charAt(j):o[j],j++,t;case 34:for(t="@",j++;u>j;)if(i=o.charCodeAt(j),32>i)V();else if(92==i)switch(i=o.charCodeAt(++j)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=W[i],j++;break;case 117:for(n=++j,e=j+4;e>j;j++)i=o.charCodeAt(j),i>=48&&57>=i||i>=97&&102>=i||i>=65&&70>=i||V();t+=L("0x"+o.slice(n,j));break;default:V()}else{if(34==i)break;for(i=o.charCodeAt(j),n=j;i>=32&&92!=i&&34!=i;)i=o.charCodeAt(++j);t+=o.slice(n,j)}if(34==o.charCodeAt(j))return j++,t;V();default:if(n=j,45==i&&(r=!0,i=o.charCodeAt(++j)),i>=48&&57>=i){for(48==i&&(i=o.charCodeAt(j+1),i>=48&&57>=i)&&V(),r=!1;u>j&&(i=o.charCodeAt(j),i>=48&&57>=i);j++);if(46==o.charCodeAt(j)){for(e=++j;u>e&&(i=o.charCodeAt(e),i>=48&&57>=i);e++);e==j&&V(),j=e}if(i=o.charCodeAt(j),101==i||69==i){for(i=o.charCodeAt(++j),(43==i||45==i)&&j++,e=j;u>e&&(i=o.charCodeAt(e),i>=48&&57>=i);e++);e==j&&V(),j=e}return+o.slice(n,j)}if(r&&V(),"true"==o.slice(j,j+4))return j+=4,!0;if("false"==o.slice(j,j+5))return j+=5,!1;if("null"==o.slice(j,j+4))return j+=4,null;V()}return"$"},q=function(t){var n,e;if("$"==t&&V(),"string"==typeof t){if("@"==(N?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(n=[];t=z(),"]"!=t;e||(e=!0))e&&(","==t?(t=z(),"]"==t&&V()):V()),","==t&&V(),n.push(q(t));return n}if("{"==t){for(n={};t=z(),"}"!=t;e||(e=!0))e&&(","==t?(t=z(),"}"==t&&V()):V()),(","==t||"string"!=typeof t||"@"!=(N?t.charAt(0):t[0])||":"!=z())&&V(),n[t.slice(1)]=q(z());return n}V()}return t},K=function(t,n,e){var r=F(t,n,e);r===g?delete t[n]:t[n]=r},F=function(t,n,e){var r,i=t[n];if("object"==typeof i&&i)if(m.call(i)==S)for(r=i.length;r--;)K(i,r,e);else h(i,function(t){K(i,t,e)});return e.call(t,n,i)};r.parse=function(t,n){var e,r;return j=0,B=""+t,e=q(z()),"$"!=z()&&V(),j=B=null,n&&m.call(n)==b?F((r={},r[""]=e,r),"",n):e}}}return r.runInContext=n,r}var e="function"==typeof define&&define.amd,r="object"==typeof global&&global;if(!r||r.global!==r&&r.window!==r||(t=r),"object"!=typeof exports||!exports||exports.nodeType||e){var i=t.JSON,o=n(t,t.JSON3={noConflict:function(){return t.JSON=i,o}});t.JSON={parse:o.parse,stringify:o.stringify}}else n(t,exports)}(e),e.JSON}();r=function(t){var n,e,r,i,o,u,a,c,s,f,l,d,v,h,g,p,m;return a=2636928640,c=4022730752,n=2147483648,v=624,e=2147483647,u=2567483615,i=1812433253,l=397,r=4294967296,o=65535,m=11,g=15,f=18,h=7,d=[],s=v,p={seed:function(t){var n,e;for(s=v,d[0]=t>>>0,n=1,e=[];v>n;)d[n]=d[n-1]^d[n-1]>>>30,d[n]=(i*((d[n]&o<<16)>>>16)<<16)+(d[n]&o)*i+n>>>0,e.push(n++);return e},random:function(){var t,i;if(s>=v){for(t=0;v>t;)d[t]=(1===(1&d[(t+1)%v])?u:0)^(d[t]&n|d[(t+1)%v]&e)>>>1^d[t+l-(t>=v-l?v:0)],t++;s=0}return i=d[s],i^=i>>>m,i^=i<<h&a,i^=i<<g&c,i^=i>>>f,s++,i/r+(0>i?1:0)}},p.seed(t||(new Date).getTime()),p};var o,u=[].slice;o=function(t,n){return null==n&&(n={}),E(n).each(function(n,e){var r;return r=t[n],t[n]=function(){var n;return n=1<=arguments.length?u.call(arguments,0):[],e.apply(null,n),r?r.apply(t,n):void 0}}),t};var a;a=function(t,n){var e,r,i,o,u,a,c;return i=C(t[n])?w(t[n]).clone():[],o=!1,(null!=(c=t[n])?c.__isApi:void 0)||(t[n]={__isApi:!0,push:function(e){return o?e(t[n]):i.push(e)}}),a=function(e,r){var i,o,u,a,c,s,f;for(u=e.split("."),a=t[n],i=s=0,f=u.length-1;f>=0?f>=s:s>=f;i=f>=0?++s:--s)if(o=i===u.length-1,a){if(c=r(a,u[i],o),o)return c;a=a[u[i]]}},e=function(t){return a(t,function(t,n){return t[n]})},u=function(t,n){return a(t,function(t,e,r){return null!=t[e]?t[e]:t[e]=r?n:{}})},r=function(){return w(i).each(function(e){return H(e,[t[n]])}),o=!0},{processPushQueue:r,register:u,"try":function(t,n){return e(t)||u(t,n)}}};var c;c=function(t,n,e){return null!=t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent("on"+n,e),{off:l(function(){return y(t,n,e)})}};var s;s=function(t){var n,e;return e=0,n=p(),t=w(t),t.size()>0?t.each(function(r){return r.fail(n.reject).done(function(){return++e===t.size()?n.resolve():void 0})}):n.resolve(),n.promise()};var f;f=function(t){var n;return n=[],{on:function(t,e,r){return n.push(t.on(e,r))},attach:function(e,r,i){return n.push(t.attach(e,r,i))},delegate:function(e,r,i){return null==i&&(i={}),n.push(t.delegate(e,r,i))},off:function(){return w(n).each(function(t){return t.off()}),n=[]}}};var l,u=[].slice;l=function(t){var n;return n=!1,function(){var e;return e=1<=arguments.length?u.call(arguments,0):[],n?void 0:(n=!0,t.apply(null,e))}};var d;d=function(t){var n,e;return n=function(){return(new t.Date).getTime()},e=n(),{now:n,getOrigin:function(){return e}}};var v;v={generate:function(){return Math.floor(1e9*v.randomGenerator.random()).toString(36)}},v.randomGenerator=r(t(""+Math.random()+(new Date).getTime()));var h;h=function(t){var n,e,r,i;return e=function(t){return new Date(t.getTime())},t=t?e(t):new Date,i=function(n,r){var i;switch(r){case"day":case"days":return i=e(t),i.setDate(i.getDate()+n),i;case"hour":case"hours":return i=e(t),i.setHours(i.getHours()+n),i;case"minute":case"minutes":return i=e(t),i.setMinutes(i.getMinutes()+n),i;default:throw new Error("Invalid unit: "+r)}},n=function(t,n){return i(t,n)},r=function(t,n){return i(-t,n)},{it:function(){return t},isAfter:function(n){return t>n},add:n,subtract:r}},h.parse=function(t){return h(new Date(t))};var g;g=function(t){return M(t.setImmediate)?function(n){return t.setImmediate(n)}:"undefined"!=typeof t.MessageChannel?function(n){var e;return e=new t.MessageChannel,e.port1.onmessage=n,e.port2.postMessage(0)}:function(n){return t.setTimeout(n,0)}};var p,u=[].slice;p=function(){var t,n,e,r;return n=S(),r=!1,e=!1,t=[],n.on("done",function(){return r=!0}),n.on("fail",function(){return e=!0}),{promise:function(){return{done:function(i){return r?i.apply(null,t):e||n.on("done",i),this},fail:function(i){return e?i.apply(null,t):r||n.on("fail",i),this},then:function(i){return r||e?i.apply(null,t):n.on("then",i),this}}},resolve:function(){var i;return i=1<=arguments.length?u.call(arguments,0):[],t=i,r||e?void 0:(n.emit.apply(n,["done"].concat(u.call(i))),n.emit.apply(n,["then"].concat(u.call(i))),n.off())},reject:function(){var i;return i=1<=arguments.length?u.call(arguments,0):[],t=i,e||r?void 0:(n.emit.apply(n,["fail"].concat(u.call(i))),n.emit.apply(n,["then"].concat(u.call(i))),n.off())},isRejected:function(){return e},isResolved:function(){return r}}};var m,u=[].slice;m=function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],{from:function(n){return{to:function(e){return w(t).each(function(t){return n[t]?e[t]=M(n[t])?function(){return n[t].apply(n,arguments)}:n[t]:void 0}),e}}}}};var y;y=function(t,n,e){return null!=t.removeEventListener?t.removeEventListener(n,e,!1):t.detachEvent("on"+n,e)};var w,u=[].slice,b=[].indexOf||function(t){for(var n=0,e=this.length;e>n;n++)if(n in this&&this[n]===t)return n;return-1};w=function(){var t,n,e,r,i,o,a,c,s;if(e=1<=arguments.length?u.call(arguments,0):[],1===e.length){if(n=e[0],n&&n.__isA)return n;r=C(n)?n:[n]}else r=e;return s=function(t,n){var e;return n?M(n)?n(t):(e=t[n],M(e)?e.call(t):e):t},o=function(t){var n,e,i,o,u;for(u=[],n=i=0,o=r.length;o>i;n=++i)e=r[n],u.push(t(e,n));return u},c=function(t){return null!=t&&t!==!1},a=function(t,n){var e;return null==t&&(t=c),e=w([]),o(function(r){return n(s(r,t))?e.push(r):void 0}),e},i=function(t,n){var e,r;return e=null,r=null,o(function(i){var o;return o=s(i,t),null==r||null!=r&&n(o,r)?(e=i,r=o):void 0}),e},t={it:function(){return r},each:o,push:function(t){return r.push(t),this},get:function(t){return r[t]},size:function(){return r.length},firstItem:function(){return r[0]},lastItem:function(){return r[r.length-1]},include:function(t){return b.call(r,t)>=0},clear:function(){return r=[]},uniq:function(){var t,n,e,i;for(n=w([]),e=0,i=r.length;i>e;e++)t=r[e],n.include(t)||n.push(t);return n},first:function(t){var n,e,i,o;for(i=0,o=r.length;o>i;i++)if(n=r[i],e=s(n,t),c(e))return n;return null},last:function(t){return w(r.slice(0).reverse()).first(t)},presence:function(){return r.length>0?this:void 0},map:function(t){var n;return n=w([]),o(function(e){return n.push(s(e,t))}),n},all:function(t){var n,e,i;for(e=0,i=r.length;i>e;e++)if(n=r[e],!s(n,t))return!1;return!0},none:function(t){var n,e,i;for(e=0,i=r.length;i>e;e++)if(n=r[e],s(n,t))return!1;return!0},min:function(t){return i(t,function(t,n){return n>t})},max:function(t){return i(t,function(t,n){return t>n})},remove:function(t){var n,e;for(e=null,n=r.length;n--&&n>=0;)(M(t)&&t(r[n])||r[n]===t)&&(M(t)&&(e=r[n]),r.splice(n,1));return e},reject:function(t){return a(t,function(t){return t===!1})},select:function(t){return a(t,function(t){return t===!0})},sum:function(t){var n;return n=0,o(function(e){return n+=s(e,t)}),n},concat:function(t){return null==t&&(t=[]),t.__isA&&(t=t.it()),w(r.concat(t))},compact:function(){return this.select(c)},flatten:function(){var t;return t=w([]),o(function(n){return t=t.concat(n)}),t},sort:function(t){return w(r.sort(t))},clone:function(){return r.slice()},indexBy:function(t){var n,e,i,o;for(n=i=0,o=r.length;o>i;n=++i)if(e=r[n],s(e,t))return n;return-1},indexOf:function(t){return this.indexBy(function(n){return n===t})},__isA:!0},k(t,I)};var I,u=[].slice;I={any:function(t){var n;return n=!1,this.each(function(){var e;return e=1<=arguments.length?u.call(arguments,0):[],t.apply(null,e)?n=!0:void 0}),n},map:function(t){var n;return n=[],this.each(function(){var e;return e=1<=arguments.length?u.call(arguments,0):[],n.push(t.apply(null,e))}),n},count:function(t){var n;return n=0,this.each(function(){var e;return e=1<=arguments.length?u.call(arguments,0):[],t.apply(null,e)?n++:void 0}),n},isEmpty:function(){var t;return t=!0,this.each(function(){return t=!1}),t}};var E;E=function(t){var n,e;return null==t&&(t={}),t&&t.__isH?t:(n=function(n){var e,r,i;i=[];for(e in t)r=t[e],i.push(n(e,r));return i},e={it:function(){return t},each:n,extend:function(n){var e;return e={},E(t).each(function(t,n){return e[t]=n}),E(n).each(function(t,n){return e[t]=n}),e},merge:function(n){var e;return e={},E(t).each(function(t,n){return e[t]=n}),E(n).each(function(n,r){return e[n]=_(r)?e[n]?E(t[n]).merge(r):r:r}),e},clone:function(){var t;return t={},n(function(n,e){return t[n]=function(){return _(e)?E(e).clone():e}()}),t},"delete":function(n){var e;return e=t[n],delete t[n],e},__isH:!0},k(e,I))};var A;A=function(){var t,n,e;return e=[],t=function(t){var n,r,i,o;for(n=i=0,o=e.length;o>i;n=++i)if(r=e[n],r.key===t)return n;return-1},n={put:function(n,r){var i,o;if(null==n)throw new Error("Cannot put undefined key");return o={key:n,value:r},i=t(n),i>-1?e[i]=o:e.push(o),r},get:function(t){var n,r,i;for(r=0,i=e.length;i>r;r++)if(n=e[r],n.key===t)return n.value},each:function(t){var n,r,i,o,u,a;for(a=[],i=0,o=e.length;o>i;i++)u=e[i],n=u.key,r=u.value,a.push(t(n,r));return a},remove:function(n){var r;return r=t(n),r>-1?e.splice(r,1):void 0},clear:function(){return e=[]},"try":function(t,n){return this.get(t)||this.put(t,n())}},k(n,I)};var S,u=[].slice;S=function(t){var n,e;return null==t&&(t={}),e={},n={},{on:function(r,i){if(!M(i))throw new Error("EventEmitter.on: callback not a function");return null==n[r]&&(n[r]=[]),n[r].push(i),t.playback&&w(e[r]||[]).each(function(t){return i.apply(null,t)}),{off:l(function(){var t;return t=w(n[r]).indexOf(i),t>-1?n[r].splice(t,1):void 0})}},off:function(){return e={},n={}},emit:function(){var r,i,o;return o=arguments[0],r=2<=arguments.length?u.call(arguments,1):[],t.playback&&(null==e[o]&&(e[o]=[]),e[o].push(r)),i=w((n[o]||[]).slice()),i.each(function(t){return w(n[o]).include(t)?t.apply(null,r):void 0})},delegate:function(t,n){return this.on(t,function(){var e;return e=1<=arguments.length?u.call(arguments,0):[],n.emit.apply(n,[t].concat(u.call(e)))})}}};var k;k=function(t,n){var e,r;for(e in n)r=n[e],null==t[e]&&(t[e]=r);return t};var N,u=[].slice;N=function(t,n){var e,r,i,o,a,c,s;return null==n&&(n={}),e=10,s=w([]),o=0,a=S(n.eventEmitter),a.on("crash",function(){return o++}),i=function(n,r,i){return null==r&&(r=null),null==i&&(i={}),e>o?(null==n.withContext&&(n=U(n)),n=n.withContext(function(){return r?t+"("+r+")":t}()),n=n.withMeta({lastScope:r}),n=n.withMeta(i),a.emit("crash",n)):void 0},c=function(t,n){if(!M(n))throw new Error("guard: callback not a function");return function(){var e,r,o;e=1<=arguments.length?u.call(arguments,0):[],o=void 0;try{o=n.apply(null,e)}catch(a){if(r=a,"UnguardedException"===r.name)throw new Error(r.stack||r.message);i(U(r),t)}return o}},c.on=function(t,n){return c("Guard#on."+t,function(){return a.on(t,n)})()},c.emit=function(){var t,n;return n=arguments[0],t=2<=arguments.length?u.call(arguments,1):[],c("Guard#emit."+n,function(){return a.emit.apply(a,[n].concat(u.call(t)))})()},c.emitError=i,r=[],c.attach=function(t,n,e){var o,u,a;return a=t.on(n,c(n,e)),"crash"!==n&&(u=w(r).first(function(n){return n.target===t}),u?u.count++:(o=t.on("crash",function(t){return i(t,n)}),r.push({target:t,count:1,off:o.off}))),{off:l(function(){var n;return a.off(),u=w(r).first(function(n){return n.target===t}),u&&(u.count--,0===u.count)?(u.off(),n=w(r).indexBy(function(n){return n.target===t}),r.splice(n,1)):void 0})}},c.delegate=function(t,n,e){return null==e&&(e={}),c.attach(t,n,function(){var t,r;return t=1<=arguments.length?u.call(arguments,0):[],(r=e.to||c).emit.apply(r,[e.as||n].concat(u.call(t)))})},c.off=function(){var t,n,e;for(a.off(),n=0,e=r.length;e>n;n++)t=r[n],t.off();return r=[]},c};var U;U=function(t,n,e){return null==n&&(n=[]),null==e&&(e={}),{id:t.id,error:t,meta:e,withContext:function(r){return U(t,[r].concat(n),e)},withMeta:function(r){return U(t,n,E(e).extend(r))},isPublic:function(){return t["public"]===!0},toString:function(){return this.isPublic()?t.toString():n.join(":")+": "+t.message}}};var D;D=function(){var t;return t={},{await:function(n){return s(t[n]||[])},addHook:function(n,e){return null==t[n]&&(t[n]=[]),t[n].push(e)}}};var x;x=function(t){return t};var C;C=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};var T;T=function(t){return z(t,"nodeType")};var M;M=function(t){return"function"==typeof t};var R;R=function(t){return"[object Number]"===Object.prototype.toString.call(t)};var _;_=function(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)};var $;$=function(t){return null==t?!1:P(t)||C(t)?t.length>0:_(t)?Object.keys(t).length>0:M(t)?!0:void 0};var O;O=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)};var P;P=function(t){return null!=t&&"[object String]"===Object.prototype.toString.call(t)};var j;j=function(t,n,e){var r,o,u,a,s,f;return null==n&&(n=null),null==e&&(e={}),n||(n=t),r=[],null==e.eventEmitter&&(e.eventEmitter={}),null==(f=e.eventEmitter).playback&&(f.playback=!0),a=S(e.eventEmitter),u=function(t,n){return n.channel=t,i.stringify(n)},o=function(t){var n;try{return i.parse(t)}catch(e){return n=e,{}}},s=function(t){var n,e;return t&&t.data&&(e=o(t.data),e&&(n=e.channel))?a.emit(n,e,t):void 0},r.push(c(t,"message",s)),{on:function(t,n){var e;return e=a.on(t,n),r.push(e),e},off:function(){var t,n,e,i;for(i=[],n=0,e=r.length;e>n;n++)t=r[n],i.push(t.off());return i},emit:function(t,e,r){var i;return null==e&&(e={}),null==r&&(r=null),i=u(t,e),r?r.source.postMessage(i,r.origin):n.postMessage(i,"*")}}};var B;B=function(t){var n,e,r,i,o;return r=null,n=function(){var n,e,i,o,u;return r||(null==t[o=B.baseName]&&(t[o]={}),n=null!=(e=t[B.baseName])[u=B.instanceId]?e[u]:e[u]=++B.counter,r=null!=(i=B.data)[n]?i[n]:i[n]={id:n}),r},e=function(t){return n()[t]},i=function(t,e){return n()[t]=e},o=function(t,n){var r;return null!=(r=e(t))?r:i(t,n())},{get:e,set:i,"try":o}},B.baseName="__burt",B.instanceId=v.generate(),B.reset=function(){return B.counter=0,B.data={}},B.reset();var L;L=function(t,n,e){var r,i;return null==n&&(n={}),null==e&&(e=Math.random),i=t.message,r=t.description,{id:e(),name:"PublicError","public":!0,data:n,message:i,description:r,toString:function(){return F(r).compile(n)}}},L.prototype=Error.prototype,L.register=function(t,n){return{message:t,description:n}},L.MISSING_NAME=L.register("yisgob","Burt unit is missing name"),L.INVALID_CLOUD_KEY=L.register("yschde","Invalid cloud key format: {{cloudKey}}"),L.MISSING_TRACKING_KEY_AND_SITE_NAME=L.register("lptfjg","Missing tracking key and site name"),L.MISSING_TRACKING_KEY=L.register("vcfbnm","Missing tracking key"),L.INVALID_TRACKING_KEY=L.register("pstyjd","Invalid tracking key"),L.MISSING_SITE_NAME=L.register("jzsfwk","Missing site name"),L.MISSING_DOM_ID=L.register("hjgsrw","Did not find any node with id `{{id}}`"),L.INVALID_DEMOGRAPHICS_PROVIDER=L.register("qlcfgj","Invalid demographics provider `{{name}}`"),L.UNKNOWN_UNIT_TYPE=L.register("zapdwl","Unit type `{{type}}` is not valid"),L.INVALID_COMPONENT=L.register("tcgeho","Cannot use {{component}}, does not exist"),L.INVALID_RANGE=L.register("xljvmk","Not within valid range {{min}}..{{max}}"),L.MISSING_XDI_ID=L.register("lfsyvq","Missing xdi id for {{name}}"),L.TRACKING_ALREADY_STARTED=L.register("99ocz4","Tracking is already started, stop existing before starting new one"),L.TRACKING_NOT_STARTED=L.register("gstugg","Tracking cannot be stopped because it has not been started");var W;W=function(t,n){var e,r;return null==n&&(n={}),r=t.message,e=t.description,{data:n,message:r,description:e,toString:function(){return F(e).compile(n)}}},W.register=function(t,n){return{message:t,description:n}},W.DUPLICATE_NAME=W.register("zspobr","Duplicate name {{name}}"),W.MISSING_DOMAIN=W.register("dkyozx","Did not call #setDomain, using domain {{domain}}"),W.UNIT_RESTART_DEPRECATED=W.register("gluibd","Unit #restart is deprecated, use #destroy instead");var V,u=[].slice;V=function(t){return function(){var n;return n=1<=arguments.length?u.call(arguments,0):[],void t.apply(null,n)}};var z;z=function(t,n){return null!=(null!=t?t[n]:void 0)};var q;q=function(t){var n;return null==t&&(t=""),n=function(t){return q(t).trim()},{startsWith:function(n){return 0===t.indexOf(n)},endsWith:function(n){return-1!==t.indexOf(n,t.length-n.length)},toArray:function(){return w(t.split(",")).select($).map(n).it()},toNumber:function(){return Number(t)},trim:function(){return null!=t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}}};var K;K=function(t){var n,e,r;return e=0,r=null,n=function(){return(new t.Date).getTime()},{start:function(){return r?void 0:r=n()},reset:function(){return e=0,r=null},stop:function(){return r&&(e+=n()-r),r=null},getTime:function(){return r?e+(n()-r):e}}};var F;F=function(t){return{compile:function(n){var e,r,i;null==n&&(n={}),r=new String(t);for(e in n)i=n[e],r=r.replace(new RegExp("{{"+e+"}}","g"),i);return""+r}}};var G;G=function(t){var n;return n=function(n,e){var r;return r=t.setTimeout(e,n),{stop:function(){return t.clearTimeout(r)}}},{delay:n,every:function(t,e){var r,i,o;return r=1,o=void 0,i=function(){var u;return u=!1,e(function(){return o=n(t,function(){return u?void 0:(u=!0,i())})},r++)},o=n(t,i),{stop:function(){return o.stop()}}}}};var H;H=function(t,n){var e;try{return t.apply(null,n)}catch(r){throw e=r,new Y(e)}};var Y;Y=function(t){return null==t&&(t={}),this.name="UnguardedException",this.stack=t.stack,this.message=t.message},Y.prototype=Error.prototype;var J;J=function(t){var n,e,r;return r=function(t,n){return t.end?n>=t.start&&n<=t.end:n>=t.start},n=function(t,n){return w(t).all(function(t){return w(t).any(function(t){return r(t,n)})})},e=function(n,e){var i;return i=[],w(n).each(function(t){var n;return n=w(t).last(function(t){return r(t,e)}),i.push(n)}),w(i).min("end").end||(new t.Date).getTime()},{findOverlaps:function(t){var r,i;return r=[],i=w(t).map(function(t){return w(t).map("start")}).flatten().sort(function(t,n){return t-n}).uniq(),i.each(function(i){var o;return n(t,i)&&(o=e(t,i),o-i>0)?r.push({start:i,end:o}):void 0}),r}}};var X;X=function(){var t,n,e,r,i,o;return o=!1,t={},e={},r=[],n=function(t,n,r,i){return e[t]={fn:n,factory:i,dependencies:r}},i=function(n,r){var o;return o=0,w(r.dependencies).each(function(r){if(!e[r]){if("$"===r.charAt(0))return void(void 0===n[o++]&&n.push(null));throw new Error("Missing definition for "+r)}return n.push(function(){return e[r].factory?r.match(/^[A-Z]/)?{"new":function(){return i(Array.prototype.slice.call(arguments,0),e[r])}}:i([],e[r]):null!=t[r]?t[r]:t[r]=i([],e[r])}())}),r.fn.apply(null,n)},{factory:function(t,e,r){return null==r&&(r=[]),n(t,e,r,!0)},service:function(t,e,r){return null==r&&(r=[]),n(t,e,r,!1)},middleware:function(t,n){return null==n&&(n=[]),r.push({fn:t,dependencies:n})},run:l(function(t){var n,o;return n=0,(o=function(){return r.length>n?i([l(o)],r[n++]):i([],e[t]),null})()}),inject:function(n,e){return t={},i([],{fn:e,dependencies:n})}}};var Z;Z=X();var Q;Q=function(t,n){var e,r,i,o;return n.setTimeout&&(null!=(e=n.document)?null!=(r=e.documentElement)?r.getBoundingClientRect:void 0:void 0)&&-1===(null!=(i=n.location)?null!=(o=i.search)?"function"==typeof o.indexOf?o.indexOf("fb_xd_fragment"):void 0:void 0:void 0)&&"%22"===n.encodeURIComponent('"')?t():void 0};var tn;tn=function(t,n){var e;return e=N("errorMiddleware"),e.on("crash",n.push),e("next",t).call()};var nn;nn=function(t,n){return n.processPushQueue(),t()};var en;en=function(t,n){var e;return e=w(n.__burtTest||[]),e.each(function(t){return t(Z)}),t()};var rn;rn=function(t,n,e,r){var i,o,u,a,c,s;return o=N("Activity",{eventEmitter:{playback:!0}}),o.on("crash",t.push),i=f(o),u=!1,s={on:o.on,stop:function(){return i.off()}},a=function(t,n){var i;return null==n&&(n={}),n=E(n).clone(),u||(i=r.now()-r.getOrigin(),i>0&&i<Math.round(e/2)&&(n.delay=i),u=!0),o.emit("active",t,n)},c=function(t,n){return null==n&&(n={}),n=E(n).merge({delay:n.timeout}),o.emit("inactive",t,n)},i.attach(n,"active",a),i.attach(n,"inactive",c),i.delegate(n,"end"),n.isActive()&&a("active"),m("setActive","setInactive","isActive").from(n).to(s)};var on;on=function(){return 1e3};var un;un=function(t,n,e){var r,i,o;return o=N("ActivityConsumer",{eventEmitter:{playback:!0}}),o.on("crash",e.push),r=n["new"](),i=f(o),i.delegate(r,"active"),i.delegate(r,"inactive"),{start:function(){var n;return n={on:o.on},m("setActive","setInactive").from(r).to(n),t.register("activity",n)},stop:function(){return i.off(),r.stop()}}};var an;an=function(t,n,e,r,i,o,u){var a,c,s,f,l,d,v,h,g;return s=N("activityObserver"),s.on("crash",n.push),g=u["new"](o),c=g.document(),a=!1,h=void 0,f=r.getInitialEventsToIgnore(),i(function(){return t.delay(100,function(){return f={}})}),l=function(){return h&&h.stop(),h=t.delay(e,s("timout",function(){return v("timeout",{timeout:e})}))},d=function(t,n){return null==n&&(n={}),f[t]?void delete f[t]:(l(),a?void 0:(a=!0,s.emit("active",t,n)))},v=function(t,n){return null==n&&(n={}),a?(a=!1,s.emit("inactive",t,n)):void 0},g.on("blur",s("blur",function(){return v("blur")})),w("keydown","mousedown","mousemove").each(function(t){return c.on(t,s(t,function(){return d(t)}))}),w("touchmove","resize","focus","DOMMouseScroll","scroll").each(function(t){return g.on(t,s(t,function(){return d(t)}))}),w("unload","beforeunload").each(function(t){return g.on(t,s(t,function(){return void s.emit("end",t)}))}),{on:s.on,setActive:function(){return d("active")},setInactive:function(){return v("inactive")},isActive:function(){return a}}};var cn;cn=function(){return 6e4};var sn;sn=function(t,n,e){var r,i,o;return r=function(){return(n.get("burt-dev")||{}).enabled},i=function(e){return e?t.enableDevMode():t.enableProdMode(),n.set("burt-dev",{enabled:e})},o=function(){return i(t.isInProdMode())},{start:function(){return r()&&i(!0),e.register("dev.enable",function(){return i(!0)}),e.register("dev.disable",function(){return i(!1)}),e.register("dev.toggle",o)},stop:function(){}}};var fn,u=[].slice;fn=function(t,n,e,r){var i,o,a,c;return o=N("DoubleConsumer",{eventEmitter:{playback:!0}}),o.on("crash",t.push),c=!1,i=f(o),a=void 0,{on:o.on,makePageviewHandler:function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],a=r["new"].apply(r,t),c&&a.start(),i.delegate(a,"pageview"),a},start:function(){var t;return t={on:o.on,emit:o.emit,getVisitorId:function(){return e.getId()},start:function(){return c=!0,a?a.start():void 0}},n.register("double",t)},stop:function(){return i.off(),a?a.stop():void 0}}};var ln;ln=function(){return"DATACALIB100"};var dn;dn=function(){return"_burtNSDa"};var vn;vn=function(t,n,e,r,i){var o,u;return null==n&&(n={}),u=N("DoublePageviewHandler",{eventEmitter:{playback:!0}}),u.on("crash",e.push),o=f(u),{on:u.on,start:function(){var a,c;return c={on:u.on,emit:u.emit,getMediaKey:function(){return r},getSiteName:function(){return n.siteName+"-da"},getCategory:function(){return n.category},getSubCategory:function(){return n.subCategory},getDomain:function(){return n.domain},getPageviewId:t.getId,getPageUrl:function(){return n.pageUrl}},u.emit("pageview",c),a=function(t){var n,r,i,u,a,s;return a=N("unitGuard",{eventEmitter:{playback:!0}}),a.on("crash",e.push),s=t.meta,n=s.name,i=s.type,r=s.sticky,u={getNode:function(){return t.node.node},getMeta:function(){return{name:n,type:i,sticky:r}},on:a.on},o.delegate(t,"annotation",{to:a}),o.delegate(t,"connection",{to:a}),o.delegate(t,"stop",{to:a}),c.emit("unit",u)},o.delegate(t,"sync"),o.delegate(t,"annotation"),o.delegate(t,"connection"),o.attach(i,"sync",function(){return u.emit("user-segments")
}),o.attach(t,"unit",a)},stop:function(){return u.emit("stop"),o.off()}}};var hn;hn=function(t){return function(){return h(t()).add(1,"hour")}};var gn;gn=function(){return"cloud"};var pn,u=[].slice;pn=function(t){var n;return n=void 0,{configure:function(e){return n=t["new"](e)},all:function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],n.all.apply(n,t)},get:function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],n.get.apply(n,t)},set:function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],n.set.apply(n,t)},stop:function(){return null!=n?n.stop():void 0}}};var mn,u=[].slice;mn=function(t,n){var e;return e=function(){var t,e;return e=arguments[0],t=2<=arguments.length?u.call(arguments,1):[],void n[e].apply(n,t)},{start:function(){return t.register("cloudStore",function(t){if(!t.match(/^[A-Z0-9]{12}$/))throw new L(L.INVALID_CLOUD_KEY,{cloudKey:t});return n.configure(t),{all:function(t){return e("all",t)},get:function(t,n){return e("get",t,n)},set:function(t,n,r){return null==r&&(r={}),e("set",t,n,{expires:r.expires})}}})},stop:function(){return n.stop()}}};var yn,u=[].slice;yn=function(t,n,e,r,i,o,a){var c,s,f,d,v,h;return f=N("CookieStore",{eventEmitter:{playback:!0}}),f.on("crash",n.push),d=void 0,v=function(t){return t?function(){var n;return n=1<=arguments.length?u.call(arguments,0):[],f.on("ready",l(function(){return t.apply(null,n)}))}:f.emit("ready")},h={on:function(t,n){return d.on("burt.ns."+t,n)},emit:function(t,n,e){return n._id=o.next(),e&&d.on("burt.ns."+t+".response",function(t){return t._id===n._id?e(t):void 0}),d.emit("burt.ns."+t,n)}},r(function(){var n;return n=e.document.createElement("IFRAME"),n.src=i(t),n.style.display="none",e.document.body.appendChild(n),d=j(e,n.contentWindow),h.on("available",function(){return h.emit("start",{},function(){return v()})})}),c=v(function(t,n){return s(function(e){return n(e[t])})}),s=function(t){return h.emit("all",{},function(n){return t(a.decode(n.cookieString))})},{stop:function(){return d.off()},all:v(function(t){return s(t)}),get:c,set:function(t,n,e){var r;return null==e&&(e={}),r=p(),f.on("ready",function(){return h.emit("set",{cookieString:a.encode(t,n,{expires:e.expires||365})}),c(t,function(t){return t===n?r.resolve():r.reject()})}),r.promise()}}};var wn;wn=function(){return function(t){return"http://n.burt.io/"+t+"/index.html"}};var bn,u=[].slice;bn=function(t,n){var e,r;return e={success:!0,cached:!1},r=function(t){return E(t).each(function(t,e){return n.set(t,e)})},{configure:function(){var n;return n=1<=arguments.length?u.call(arguments,0):[],t.configure?t.configure.apply(t,n):void 0},all:function(e){var r;return r=n.all(),E(r).isEmpty()?t.all(e):e(r)},get:function(r,i){var o;return(o=n.get(r))?i(o,E(e).merge({cached:!0})):t.get(r,function(t,o){return null==o&&(o={}),n.set(r,t),i(t,E(e).merge(o))})},set:function(e,r,i){return t.set(e,r,i).done(function(){return n.set(e,r)})},stop:function(){return t.stop()}}};var In;In=function(){return"_burtNS"};var En;En=function(t,n,e,r,i){var o;return o=function(t){return t.expires&&t.expires<=n().getTime()},{get:function(t){return this.all()[t]},set:function(n,u){var a,c,s,f;c=t.get(i)||{};for(f in c)a=c[f],o(a)&&delete c[f];return null==c[e]&&(c[e]={}),c[e].expires=r().getTime(),null==(s=c[e]).value&&(s.value={}),c[e].value[n]=u,t.set(i,c)},all:function(){var n,r;if(r=t.get(i)||{},n=r[e]){if(!o(n))return n.value;r[e]=void 0,t.set(i,r)}return{}}}};var An;An=function(t,n){return function(e,r,i){return t.get(e,function(o,u){var a;return o?(u.cached=!0,i(o,u)):r.write?(a=n.generate(),t.set(e,a).then(function(){return t.get(e,function(t,n){return n.cached=!1,a!==t&&(n.success=!1),i(t,n)})})):i(o,u)})}};var Sn;Sn=function(){return"sync"};var kn;kn=function(t){return function(){return h(t()).add(1,"day")}};var Nn;Nn=function(){return"sync"};var Un;Un=function(t,n,e){var r;return r={},{get:function(i,o){var u;return(u=r[i])?o(u):t(""+n+"/status",function(t){return r=e.decode(t),o(r[i])})},set:function(i,o){var u;return u=p(),t(""+n+"/sync/"+i+"/"+o,function(t){return r=e.decode(t),r[i]?u.resolve():u.reject()}),u.promise()}}};var Dn;Dn=function(t){return""+t+"//sync.richmetrics.com"};var xn;xn=function(t){var n,e,r;return r=N("ActivityObservable",{eventEmitter:{playback:!0}}),n=t["new"](),e=f(r),e.delegate(n,"active",{as:"on"}),e.delegate(n,"inactive",{as:"off"}),{on:r.on,isOn:function(){return n.isActive()},stop:function(){return e.off(),n.stop()}}};var Cn;Cn=function(t,n){var e,r,i,o,u;return null==n&&(n={}),i=N("UnitVisibilityObserver"),u=function(e){return null==e&&(e=t.visibility(!0)),e>=n.min},o=u(),r=function(t){if(u(t)){if(!o)return o=!0,i.emit("on")}else if(o)return o=!1,i.emit("off")},e=f(i),e.attach(t,"change",r),e.attach(t,"visible",r),e.attach(t,"invisible",r),{on:i.on,stop:function(){return e.off()},isOn:function(){return o}}};var Tn,u=[].slice;Tn=function(t){var n,e,r;return r=N("powWowApi"),e=["on","start","quit","setPageview","annotate","connect","addUnit","stopUnit","annotateUnit","connectUnit","updateUnit","newError","newWarning","setDemographicsProvider"],n={},w(e).each(function(e){return n[e]=function(){var n,r;return n=1<=arguments.length?u.call(arguments,0):[],null!=(r=t.powWow)?r[e].apply(r,n):void 0}}),n};var Mn,u=[].slice;Mn=function(t,n,e,r,i,o,a){var c,s,l,d,v,h,g;return d=N("PowWowConsumer",{eventEmitter:{playback:!0}}),d.on("crash",t.push),c=f(d),v=void 0,l=!1,s=function(){var t,n;return t=p(),l?t.resolve():(n=r("SCRIPT",{src:i,id:"powwow-script"}),n.on("load",t.resolve),n.on("error",t.reject),t.promise().done(function(){return l=!0})),t.promise()},g=function(){return s().done(function(){return v&&v.start(),o.start(),e.set("powwow",{started:!0}),o.on("quit",function(){return e.set("powwow",{started:!1})})})},h=function(){return o.quit(),e.set("powwow",{started:!1})},{start:function(){var t;return t=(e.get("powwow")||{}).started,t&&g(),n.register("powWow.start",V(g)),n.register("powWow.quit",V(h)),n.register("powWow.on",V(d.on))},stop:function(){return c.off(),v&&v.stop(),o.quit()},makePageviewHandler:function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],v&&v.stop(),v=a["new"].apply(a,t),l&&v.start(),l&&o.start(),v}}};var Rn,b=[].indexOf||function(t){for(var n=0,e=this.length;e>n;n++)if(n in this&&this[n]===t)return n;return-1};Rn=function(t,n,e,r,i,o){var u,a,c,s;return null==n&&(n={}),a=N("PowWowPageviewHandler",{eventEmitter:{playback:!0}}),a.on("crash",e.push),u=f(a),s=[],c=function(t){var n,e,r,i,o,u,a,c,s,f;return s=t.meta,i=s.name,a=s.type,n=s.cloudKeys,o=s.sticky,f=t.geo(!0),c=f.width,e=f.height,u=f.top,r=f.left,{id:t.getId(),name:i,type:a,sticky:o,cloudKeys:n,width:c,height:e,top:u,left:r,filled:t.isFilled(),previewUrl:t.meta.previewUrl||t.meta.loadUrl}},{start:function(){var a;return o.setPageview(E(n).clone()),u.attach(e,"crash",function(t){return t.isPublic()?o.newError({code:t.error.message,message:t.toString()}):void 0}),u.attach(r,"warning",function(t){return o.newWarning({code:t.message,message:t.toString()})}),u.attach(t,"sync",function(t){return"cint"===t?o.setDemographicsProvider(t):void 0}),u.attach(t,"annotation",function(t){return o.annotate(t)}),u.attach(t,"connection",function(t){return o.connect(t)}),a=[],u.attach(t,"unit",function(t){var n,r,f,l;return n=t.meta.name,b.call(a,n)>=0?(l=W(W.DUPLICATE_NAME,{name:n}),o.newWarning({code:l.message,message:l.toString()})):a.push(n),f=N("unitGuard",{eventEmitter:{playback:!0}}),f.on("crash",e.push),r=c(t),r.on=f.on,r.emit=f.emit,o.addUnit(r),u.attach(t,"annotation",function(n){return o.annotateUnit(t.getId(),n)}),u.attach(t,"connection",function(n){return o.connectUnit(t.getId(),n)}),u.attach(t,"stop",function(){return o.stopUnit(t.getId())}),s.push(i.every(1e3,function(n){return t.isStopped()?void 0:(o.updateUnit(t.getId(),c(t)),n())}))})},stop:function(){return u.off(),w(s).each(function(t){return t.stop()})}}};var _n;_n=function(t){return""+t+"//dev.burt.io/panel/v0.1/panel.js"};var $n;$n=function(t,n,e){return function(r){return t.get(""+n.getName()+"/"+e.getId(),r)}};var On;On=function(t){return function(){return h(t()).add(1,"day")}};var Pn;Pn=function(){return"bomclv2"};var jn;jn=function(t,n,e){return{get:function(r,i){return n(t+r,function(t){return null==t&&(t={}),t.segments&&t.segments.splice(e,t.segments.length),i(t)})}}};var Bn;Bn=function(){return"https://bomcl.richmetrics.com/"};var Ln;Ln=function(t,n,e){var r,i,o;return i=N("profiles",{eventEmitter:{playback:!0}}),i.on("crash",t.push),o=l(function(){return n(function(t,n){return i.emit("sync",t,n)})}),r={getId:function(t){return i.on("sync",function(n){return e(function(){return t(n.master_id)})}),o(),null},getSegments:function(t){return i.on("sync",function(n){return e(function(){return t(n.segments)})}),o(),null}},E(r).extend({on:i.on})};var Wn;Wn=function(t,n){return{start:function(){return t.register("profiles",{getId:n.getId,getSegments:n.getSegments})},stop:function(){}}};var Vn;Vn=function(t,n,e,r){var i,o;return i=e.timeout,o=e.timestamp,{type:"activity",ty:n,vl:i,ct:o,wd:{w:r.viewport.width(),h:r.viewport.height()},ws:{x:r.viewport.left(),y:r.viewport.top()},tpd:t.getDuration(),apd:t.getActiveDuration(),avas:t.getActiveVisibleAdSpace(),val:t.getVisibleAdLoad(),aval:t.getActiveVisibleAdLoad()}};var zn;zn=function(t,n){return{type:"annotation",xs:t.scope,xn:t.name,xv:t.value,si:n}};var qn;qn=function(t,n){return{type:"connection",ys:t.scope,yn:t.name,yv:t.value,si:n}};var Kn;Kn=function(t,n,e){return{type:"customevent",id:t,nm:n,pv:e}};var Fn;Fn=function(t,n){return null==n&&(n={}),{type:"end",pc:n.ready,et:n.type,tpd:t.getDuration(),apd:t.getActiveDuration(),avas:t.getActiveVisibleAdSpace()}};var Gn;Gn=function(t,n){var e;return{type:"error",ms:n.toString(),si:null!=(e=n.meta)?e.sessionId:void 0,eu:t.getUrl().toString()}};var Hn;Hn=function(t,n,e,r){var i;return i=t.geo(),{type:"event",si:t.meta.sessionId,ty:n,mp:{x:e.left,y:e.top},vz:i.visibility(),ad:{w:i.width,h:i.height},ap:{x:i.left,y:i.top},pd:{w:r.width(),h:r.height()},wd:{w:r.viewport.width(),h:r.viewport.height()},ws:{x:r.viewport.left(),y:r.viewport.top()},eng:t.hasEngagement(),engd:t.getEngagementDuration()}};var Yn;Yn=function(t,n){var e;return e=n.geo(),{type:"fill",si:n.meta.sessionId,vz:e.visibility(),ad:{w:e.width,h:e.height},ap:{x:e.left,y:e.top},lu:n.meta.loadUrl,wu:n.meta.wrapperUrl,mt:n.meta.mediaType,nc:n.meta.nodeCount,ti:n.meta.connectValue,cks:w(n.meta.cloudKeys||[]).concat(t.meta.cloudKeys||[]).uniq().it(),sov:n.getShareOfView(),tpd:t.getDuration(),apd:t.getActiveDuration(),aa:e.area()}};var Jn;Jn=function(t,n,e,r){return E({av:e.toString()+"-JS",mk:n.getId(),ui:r.getId(),wn:n.getName()}).extend(t)};var Xn;Xn=function(){return{filter:x}};var Zn;Zn=function(t,n,e){var r,o,u,a,c,s,f,l,d,v,h,g;for(f={},u=d=0,h=n.length;h>d;u=++d)c=n[u],f[c]=!0;for(a={},v=0,g=t.length;g>v;v++)c=t[v],a[c]=!0,f[c]=!0;return r=function(t){return t?e.encodeURIComponent(t):void 0},o={id:function(t){return(null!=t?t.match(/^[A-Z0-9]{12}$/):void 0)?t:void 0},"boolean":function(t){return t?"1":t===!1?"0":void 0},identity:function(t){return r(t)},dimension:function(t){var n;return t&&(n=[],w("w","h").each(function(e){return function(r){var i;return null!=t[r]&&(i=e.integer(t[r]))?n.push(i):void 0}}(this)),2===n.length)?n.join("x"):void 0},position:function(t){var n;return t&&(n=[],w("x","y").each(function(e){return function(r){var i;return null!=t[r]&&(i=e.signed_integer(t[r]))?n.push(i):void 0}}(this)),2===n.length)?n.join("x"):void 0},downcase:function(t){return t?t.toLowerCase():void 0},integer:function(t){return(""+t).match(/^\d+$/)?t.toString():void 0},signed_integer:function(t){return(""+t).match(/^-?\d+$/)?t.toString():void 0},list:function(t){return t?t.join(","):void 0},sample:function(t){return t&&1===t?void 0:t},json:function(t){return r(C(t)||_(t)?i.stringify(t):t)},rate:function(t){return t>=0&&1>=t?(Math.round(1e4*t)/1e4).toString():void 0},"float":function(t){return(Math.round(1e4*t)/1e4).toString()}},s={id:"id",pi:"id",vi:"id",mk:"id",ui:"id",si:"id",mpi:"id",ae:"boolean",fs:"boolean",ss:"boolean",co:"boolean",ce:"boolean",pc:"boolean",ru:"boolean",ed:"boolean",qr:"boolean",eng:"boolean",type:"identity",ei:"identity",pr:"identity",ca:"identity",sc:"identity",eu:"identity",et:"identity",ln:"identity",lr:"identity",rf:"identity",av:"identity",ty:"identity",vl:"identity",pn:"identity",ms:"identity",md:"identity",wu:"identity",ti:"identity",ac:"identity",cc:"identity",lb:"identity",rt:"identity",lu:"identity",mt:"identity",nm:"identity",xs:"identity",xn:"identity",ys:"identity",yn:"identity",xv:"json",yv:"json",pv:"json",sr:"sample",tz:"signed_integer",ct:"signed_integer",sn:"integer",vz:"integer",nc:"integer",cv:"integer",tpd:"integer",apd:"integer",tvd30:"integer",avd30:"integer",tvd:"integer",avd:"integer",tvdf:"integer",avdf:"integer",engd:"integer",ld:"integer",val:"integer",aval:"integer",aa:"integer",amr:"float",avas:"rate",sov:"rate",ad:"dimension",pd:"dimension",sd:"dimension",wd:"dimension",ws:"position",ap:"position",mp:"position",wn:"downcase",cks:["id"]},l=function(t,n){var e,r,i,u,a,c;if(s[t]){if(C(s[t])){for(r=[],c=n||[],u=0,a=c.length;a>u;u++)e=c[u],(i=o[s[t][0]](e))&&r.push(i);return o.list(r)}return o[s[t]](n)}},{serialize:function(t){var n,e,r,i,u,c,d,v;d=[],n={},u=function(t,e){var r;return s[t]?null!=e&&(r=l(t,e))?d.push(t+"="+r):a[t]?(n["invalid "+t]="Mandatory param "+t+"="+e+" is invalid",d.push(t+"="+o.identity(e))):void 0:n["undefined "+t]="Param "+t+" not defined"};for(e in f)c=f[e],null!=t[e]&&u(e,t[e]);for(e in t)v=t[e],f[e]||u(e,v);for(r in a)i=a[r],null==t[r]&&(n["missing "+r]="Mandatory param "+r+" is missing");return{serializedFragment:d.join("&"),errors:n}}}};var Qn;Qn=function(t,n,e,r,i,o,u,a,c,s,f){var l,d;return l=t.getUrl(),d=f["new"](s.getId()).patch(),{type:"page",ae:!0,pc:n,tz:c.offset(),ca:t.meta.category||"unknown",sc:t.meta.subCategory,ed:!q(l.hostname()).endsWith(r.get()),ln:a.language(),co:i.isEnabled(),ru:u.isReturningUser(),pd:{w:e.width(),h:e.height()},sd:{w:e.screen.width(),h:e.screen.height()},wd:{w:e.viewport.width(),h:e.viewport.height()},ws:{x:e.viewport.left(),y:e.viewport.top()},cks:w(t.meta.cloudKeys).uniq().it(),eu:l.toString(),lr:o.last(),rf:o.orig(),vi:d,mpi:t.meta.masterPageviewId}};var te;te=function(t,n){return{type:"pageping",pd:{w:n.width(),h:n.height()},wd:{w:n.viewport.width(),h:n.viewport.height()},ws:{x:n.viewport.left(),y:n.viewport.top()},tpd:t.getDuration(),apd:t.getActiveDuration(),avas:t.getActiveVisibleAdSpace()}};var ne;ne=function(t,n,e,r){var i,o;return null==e&&(e={}),i=n.geo(e.cached),o=null!=e.visibility?e.visibility:i.visibility(),{type:"ping",si:n.meta.sessionId,vz:o,ad:{w:i.width,h:i.height},ap:{x:i.left,y:i.top},pd:{w:r.width(),h:r.height()},wd:{w:r.viewport.width(),h:r.viewport.height()},ws:{x:r.viewport.left(),y:r.viewport.top()},tpd:t.getDuration(),apd:t.getActiveDuration(),tvd30:n.getDuration(30),tvd:n.getDuration(50),avd30:n.getActiveDuration(30),avd:n.getActiveDuration(50),tvdf:n.getDuration(100),avdf:n.getActiveDuration(100),avas:t.getActiveVisibleAdSpace(),sov:n.getShareOfView(),amr:n.getActiveMediaRating(),val:t.getVisibleAdLoad(),aval:t.getActiveVisibleAdLoad(),aa:i.area()}};var ee;ee=function(t,n){return{type:"placement",pn:n.meta.name,si:n.meta.sessionId,cks:w(n.meta.cloudKeys||[]).concat(t.meta.cloudKeys||[]).uniq().it()}};var re;re=function(t,n,e){return{type:"ready",rt:n,pc:!0,pd:{w:e.width(),h:e.height()},wd:{w:e.viewport.width(),h:e.viewport.height()},ws:{x:e.viewport.left(),y:e.viewport.top()},tpd:t.getDuration(),apd:t.getActiveDuration(),qr:t.hasQualifiedReach(),ld:t.getDuration()}};var ie;ie=function(t,n,e,r){return"id"===r&&(r="burt"),{type:"sync",ei:t,fs:!n,ss:e,pr:r}};var oe;oe=function(t,n,e,r,i,o,u){var a,c,s,l,d;return s=N("RichActivityHandler"),s.on("crash",r.push),c=f(s),a=i["new"](),d=function(r,i){return null==i&&(i=!0),n.send(u["new"](t,{ready:e.isReady(),type:r}),{flush:!0,fast:i,keepBuffer:!0})},l=function(e,r){return null==r&&(r=null),n.send(o["new"](t,e,r))},c.attach(a,"active",l),c.attach(a,"inactive",l),c.attach(a,"end",d),{stop:function(t){return null==t&&(t="stop"),d(t,!1),c.off(),a.stop()}}};var ue;ue=function(t,n,e,r,i,o,u,a,c,s,l,d,v,h,g,p,m,y){var b,I,E,A,S,k,U;return I=N("RichConsumer"),I.on("crash",e.push),b=f(I),A=[],S=null,E=n||""+m+"//"+y.getName().replace(/\./g,"-")+".c.richmetrics.com/log",U=h["new"](t,E),k=function(n,e){var i,o;return i=r.generate(),U=h["new"](t,E),o=v["new"](i,n,e),U.send(o,{flush:!0}),U.stop()},{start:function(){var n,e;return n=g["new"](),e=p["new"](t),A.push(i["new"](t,U)),A.push(o["new"](t,U,n)),A.push(u["new"](t,U)),A.push(c["new"](e,U,n)),A.push(l["new"](e,U,n)),A.push(d["new"](U)),b.attach(t,"custom-event",k),S=s["new"](e,U)},stop:function(t){return b.off(),U.stop(t),w(A).each(function(n){return n.stop(t)}),S.stop()}}};var ae;ae=function(t,n,e,r){var i,o,u;return i=10,u=0,o=e.on("crash",function(e){return("function"==typeof e.isPublic?e.isPublic():0)?void 0:(u++<i&&n.send(r["new"](t,e)),u===i?n.send(r["new"](t,"Error limit "+i+" reached")):void 0)}),{stop:function(){return o.off()}}};var ce;ce=function(){return[1,1,2,4,6,8,10]};var se;se=function(t,n){return{generate:function(){var e,r,i;for(e="";e.length<6;)e=Math.floor(36*n.next()).toString(36)+e;return r=e.substring(0,6).toUpperCase(),i=Math.floor(t.now()/1e3).toString(36).toUpperCase(),i+r}}};var fe;fe=function(n,e,r){return null==r&&(r=t),{patch:function(){var t,i,o,u,a,c;return c=n.substring(0,6),a=n.substring(6),t=r(e.getName()),i=parseInt(a,36),o=5e9+(t^i),u=o.toString(36).toUpperCase(),u=u.substring(u.length-6,u.length),c+u}}};var le;le=function(){return["ct","pi","mk","wn","sn","ui"]};var de;de=function(t,n,e,r,i,o,u){var a,c,s,l;return c=N("RichPageHandler"),c.on("crash",r.push),a=f(c),n.send(i["new"](t,e.isReady()),{flush:!0}),s=function(t){return n.send(o["new"](t))},l=function(t){return n.send(u["new"](t))},a.attach(t,"annotation",s),a.attach(t,"connection",l),{stop:function(){return a.off()}}};var ve;ve=function(){return 5e3};var he;he=function(){return[40]};var ge;ge=function(t,n,e,r,i,o){var u,a,c;return a=N("RichPageReadyHandler"),a.on("crash",i.push),c=function(e){return n.send(r["new"](t,e),{flush:!0})},u=a.attach(e,"ready",function(t){return o(function(){return c(t)})}),{stop:function(){return u.off()}}};var pe;pe=function(t,n,e,r,i){var o,u,a,c,s;return u=!1,a=N("RichPagepingHandler"),a.on("crash",e.push),a.on("crash",function(){return u=!0,r.stop()}),o=f(a),s=function(){return n.send(i["new"](t))},c=function(){return u?void 0:r.reset()},o.attach(r,"event",s),o.on(n,"send",c),r.start(),{stop:function(){return o.off(),r.stop()}}};var me;me=function(t,n,e,r,i,o,u,a,c,s){var l,d,v,h,g,p,y,b,I,E,A;return p=N("RichPageview"),p.on("crash",n.push),g=f(p),y=o["new"](),d=s["new"](),E=a["new"](i),A=u["new"](i),b=[],g.attach(t,"stop",function(){return g.off(),d.stop(),y.stop()}),h=0,v=0,g.attach(t,"unit",function(t){var n;return n=c["new"](t),n.on("stop",function(){var t;return n.isVisible()&&h++,n.isActiveVisible()&&v++,t=w(b).indexOf(n),t>-1?b.splice(t,1):void 0}),b.push(n)}),l={top:0,left:0,right:0,bottom:0},I=function(){var t,n,e,r;if(d.isActive())return r=E.top(),n=E.left(),e=E.width()+n,t=E.height()+r,l.top=w([l.top,r]).min(),l.left=w([l.left,n]).min(),l.right=w([l.right,e]).max(),l.bottom=w([l.bottom,t]).max()},I(),g.attach(d,"active",I),g.attach(A,"change",I),t.hasQualifiedReach=function(){return e.isEnabled()||r.isReturningUser()},t.getActiveVisibleAdSpace=function(){var t,n;return t=0,w(b).each(function(n){var e,r,i;return n.isActiveVisible()?(i=n.geo(!0),r=i.width,e=i.height,t+=r*e):void 0}),n=(l.right-l.left)*(l.bottom-l.top),0===n?0:t/n},t.getVisibleAdLoad=function(){return h+w(b).count(function(t){return t.isVisible()})},t.getActiveVisibleAdLoad=function(){return v+w(b).count(function(t){return t.isActiveVisible()})},m("getDuration","getActiveDuration").from(y).to(t),t};var ye;ye=function(t,n){var e,r,i,o,u,a;return u=N("RichPageviewDurationAggregator"),r=0,i=n["new"](),a=t["new"](),a.start(),e=t["new"](),i.isOn()&&e.start(),o=f(u),o.attach(i,"on",function(t,n){return null==n&&(n={}),n.delay&&(r+=n.delay),e.start()}),o.attach(i,"off",function(t,n){return null==n&&(n={}),n.delay&&(r-=n.delay),e.stop()}),{getDuration:function(){return a.getTime()},getActiveDuration:function(){return e.getTime()+r},stop:function(){return o.off(),a.stop(),e.stop(),i.stop()}}};var we;we=function(){return[1,2,4,8,15,20,25,30,90]};var be;be=function(){return["type","sn"]};var Ie;Ie=function(t,n,e){var r;return r=n.on("sync",function(n,r){var i,o,u,a;return o=[],u=n.segments,i=r.cached,a=r.success,o.push(i?1:0),o.push(u.length?u.join(","):"_"),o=o.join("|"),t.send(e["new"](o,i,a,"bomcl_segments"))}),{stop:function(){return r.off()}}};var Ee;Ee=function(t,n,e,r){var i,o;return o=N("RichSyncHandler"),o.on("crash",e.push),i=t.on("sync",function(t,e,i){var o,u;return o=i.cached,u=i.success,e?n.send(r["new"](e,o,u,t)):void 0}),{stop:function(){return i.off()}}};var Ae;Ae=function(){return 78e5};var Se;Se=function(t,n,e,r,i,o){var u,a,c,s,l,d,v,h,g,p;return u=[30,50,100],v=N("RichUnit"),v.on("crash",n.push),c=f(v),a=o["new"](),p=r["new"](t),t.on("stop",function(){return c.off(),a.stop(),p.stop()}),t.isVisible=function(){return t.isFilled()&&p.getDuration(50)>1e3},t.isActiveVisible=function(){return t.isFilled()&&p.getActiveDuration(50)>1e3},t.getShareOfView=function(){var n,r,i,o,u,a;return a=e.viewport.width(),u=e.viewport.height(),n=t.geo(!0),i=n.width,r=n.height,o=a*u,0===o?0:i*r/o},h=!1,g=i["new"](),c.attach(t,"interaction",function(t){switch(t){case"mouseEnter":return g.start();case"mouseExit":return g.stop();case"click":return h=!0}}),t.hasEngagement=function(){return h||g.getTime()>1e3},t.getEngagementDuration=function(){return g.getTime()},l=function(){return 10*Math.log(1+t.getShareOfView()/.02)/Math.log(51)},d=function(t,n){var e,r,i,o,u,a,c,s;for(i=0,r=c=0,s=t.length;s>c;r=++c)u=t[r],e=n[r],a=10*Math.log(1+e/1e3/.5)/Math.log(61),a>10&&(a=10),o=a+u/10,o>i&&(i=o);return i},s=function(t){return p.getActiveDuration(t)},t.getActiveMediaRating=function(){var t,n;return n=w(p.getThresholds()),t=n.map(s),t.max()>0?(d(n.it(),t.it())+l())/3:0},m("getDuration","getActiveDuration").from(p).to(t),t};var ke;ke=function(t,n,e,r,i,o){var u,a,c,s,l,d,v,h,g;return u=[30,50,100],l=N("RichUnitDurationAggregator"),s=f(l),c=[],g=A(),h=A(),v=o["new"](),d=[],d.push(a=r["new"]()),a.isOn()&&c.push({start:n.now()}),s.attach(a,"on",function(t,e){var r,i;return null==e&&(e={}),c.length>0&&c[c.length-1].start&&!c[c.length-1].end?void 0:(i=n.now(),(r=e.delay)&&(i-=r),c.push({start:i}))}),s.attach(a,"off",function(t,e){var r,i;return null==e&&(e={}),i=n.now(),(r=e.delay)&&(i-=r),c[c.length-1].end=i}),w(u).each(function(r){var o,u,a;return d.push(u=i["new"](t,{min:r})),a=g.put(r,[]),o=e["new"](),u.isOn()&&o.start(),h.put(r,o),u.isOn()&&a.push({start:n.now()}),s.attach(u,"on",function(){return o.start(),a.push({start:n.now()})}),s.attach(u,"off",function(){return o.stop(),a[a.length-1].end=n.now()})}),{getDuration:function(t){return h.get(t).getTime()},getActiveDuration:function(t){var n;return n=v.findOverlaps([c,g.get(t)]),w(n).sum(function(t){return t.end-t.start})},getThresholds:function(){return u},stop:function(){return s.off(),w(d).each(function(t){return t.stop()})}}};var Ne;Ne=function(t,n,e,r,i,o,u,a,c,s,l,d,v){var h,g,p,m,y,w,b,I,E,A,S,k,U,D,x,C;return m=N("RichUnitHandler"),m.on("crash",function(t){return t=t.withMeta({sessionId:e.meta.sessionId}),i.push(t)}),I=v["new"](e),e.meta.sessionId=r.generate(),g=f(m),x=function(){return g.off(),o.stop()},D=function(){return n.send(u["new"](t,e))},E=function(t){return n.send(l["new"](t,e.meta.sessionId))},A=function(t){return n.send(d["new"](t,e.meta.sessionId))},S=function(t,r){return n.send(c["new"](e,t,r))},U=function(e){return null==e&&(e={}),null==e.cached&&(e.cached=!1),n.send(s["new"](t,I,e))},k=function(){return n.send(a["new"](t,e))},p=function(){return o.reset()},C=function(){return o.start(),U({cached:!0})},w=function(){return o.stop(),U({cached:!0})},b=function(){return k(),h()},D(),g.attach(e,"annotation",E),g.attach(e,"connection",A),g.attach(e,"stop",function(t){return null==t&&(t={}),x(),t.restart?U({cached:!0,visibility:0}):void 0}),y=!1,h=function(){return y?void 0:(y=!0,e.visibility()>0&&o.start(),g.attach(o,"event",U),g.attach(e,"interaction",S),g.attach(e,"change",p),g.attach(e,"visible",C),g.attach(e,"invisible",w))},g.attach(e,"ready",b),{stop:x}};var Ue;Ue=function(t,n,e,r,i,o,u,a,c,s){var f,l,d,v,h,g,p,m,y,w,b,I,E,A,S;return p=o["new"](),g=a["new"](),A=1,w=t.getId(),m=N("transport"),m.on("crash",e.push),I=[],b={},l=function(t){return t.join(";")},h=function(t,e){return null==e&&(e=!1),0===I.length||(i.get(n,l(I),t),e)?void 0:I=[]},v=m("enqueue",function(t){var e,r,o,u,a,c;c=p.serialize(t),a=c.serializedFragment,o=c.errors;for(e in o)r=o[e],b[e]||(b[e]=!0,m.emitError(new Error(r),"serialize",{sessionId:t.si}));return i.checkLength(n,a)?(u=l(I.concat([a])),i.checkLength(n,u)||h(),I.push(a)):m.emitError(new Error("Too large fragment: "+t.type),"enqueue-size",{sessionId:t.si})}),y=s.now(),d=function(){return s.now()-y},r.start(),f=m.attach(r,"event",h),E=m("send",function(t,n){var e;return null==n&&(n={}),t.sn=A++,t.pi=w,t.ct=d(),e=u["new"](t),e=g.filter(e),m.emit("send",e),v(e),n.flush||c.flushInstant?h(n.fast,n.keepBuffer):void 0}),S=function(){return f.off(),r.stop()},{on:m.on,send:E,stop:S}};var De;De=function(t,n,e,r){var i,o,u,a,c,s,l,d,v;return a=N("ActivityWatcher"),a.on("crash",r.push),i=n["new"](),u=[],s=!0,l=!1,o=f(a),c=function(n){var r,i;if(!t.isSuspended())return i=e.now(),t.getRequireContinuous()?u=[]:(r=w(u).lastItem())&&null==r.end&&(r.end=i),l&&n||s&&!n?void 0:u.push({start:i})},o.attach(i,"active",function(){return c(!0)}),o.attach(i,"inactive",function(){return c(!1)}),d=function(){return c(i.isActive())},v=function(){return u=[]},o.attach(t,"stop",v),o.attach(t,"start",d),o.attach(t,"restart",function(){return v(),d()}),{stop:function(){return o.off(),i.stop()},getEvents:function(){return u},api:{setRequireActive:function(t){return t&&(l=!1),s=t},setRequireInactive:function(t){return t&&(s=!1),l=t}}}};var J;J=function(t){var n,e,r;return r=function(t,n){return t.end?n>=t.start&&n<=t.end:n>=t.start},n=function(t,n){return w(t).all(function(t){return w(t).any(function(t){return r(t,n)})})},e=function(n,e){var i;return i=[],w(n).each(function(t){var n;return n=w(t).last(function(t){return r(t,e)}),i.push(n)}),w(i).min("end").end||(new t.Date).getTime()},{findOverlaps:function(t){var r,i;return r=[],i=w(t).map(function(t){return w(t).map("start")}).flatten().sort(function(t,n){return t-n}).uniq(),i.each(function(i){var o;return n(t,i)&&(o=e(t,i),o-i>0)?r.push({start:i,end:o}):void 0}),r}}};var xe;xe=function(t,n,e,r){var i,o,u,a,c,s,l,d;return u=N("VisibilityWatcher"),u.on("crash",r.push),c=0,a=100,o=[],i=f(u),s=function(){var r,i,u,s;if(!t.isSuspended())return i=e.now(),u=n.visibility(),s=u>=c&&a>=u,t.getRequireContinuous()&&!s?o=[]:(r=w(o).lastItem())&&null==r.end&&(r.end=i),s?o.push({start:i}):void 0},i.attach(n,"visible",s),i.attach(n,"invisible",s),i.attach(n,"change",s),l=s,d=function(){return o=[]},i.attach(t,"start",l),i.attach(t,"stop",d),i.attach(t,"restart",function(){return d(),l()}),{stop:function(){return i.off()},getEvents:function(){return o},api:{setVisibility:function(t,n){if(null==n&&(n=100),0>t||t>100||0>n||n>100)throw new L(L.INVALID_RANGE);return c=t,a=n}}}};var Ce,u=[].slice;Ce=function(t,n){var e,r,i,o,a,c,s,f,l,d,v,h;return i=N("Watcher"),i.on("crash",t.push),h=[],d=!0,r=0,c=!1,a=null,o=n["new"](),f=function(){return d=!1,i.emit("start")},l=function(){return d=!0,i.emit("stop")},s=function(){return d=!1,i.emit("restart")},e={start:f,stop:l,restart:s,setDuration:function(t){return r=1e3*t},setRequireContinuous:function(t){return c=t},register:function(t){return a=t}},v={on:i.on,isSuspended:function(){return d},getRequireContinuous:function(){return c}},{stop:function(){return w(h).each(function(t){return t.stop()})},getApi:function(){return e=E(e).clone(),w(h).each(function(t){return e=E(e).extend(t.api)}),e},register:function(){var t,n;return n=arguments[0],t=2<=arguments.length?u.call(arguments,1):[],t=[v].concat(t),h.push(n["new"].apply(n,t))},runCallback:function(){return l(),a?a():void 0},isFulfilled:function(){var t,n;return d?!1:w(h).isEmpty()?!1:(n=w(h).map("getEvents").it(),(t=w(o.findOverlaps(n)).presence())?t.sum(function(t){return t.end-t.start})>=r:!1)}}};var Te;Te=function(t,n,e,r,i,o,u){var a,c,s,l;return c=N("WatcherConsumer",{eventEmitter:{playback:!0}}),c.on("crash",e.push),a=f(c),s=[],l=[],{start:function(){var e;return e=function(t){return s.push(r.every(1e3,function(n){return t.isFulfilled()&&t.runCallback(),n()}))},t.register("addWatch",function(t){var n,r;return r=i["new"](),r.register(o),l.push(r),n=r.getApi(),t(n),e(r),{start:n.start,stop:n.stop,restart:n.restart}}),n.register("addWatch",function(t,n){var r,s;return r=p(),a.attach(c,"unit",function(a){var c,s;if(t===a.getId())return s=i["new"](),s.register(o),s.register(u,a),l.push(s),c=s.getApi(),n(c),e(s),r.resolve(c)}),s=r.promise(),{start:function(){return s.done(function(t){return t.start()})},stop:function(){return s.done(function(t){return t.stop()})},restart:function(){return s.done(function(t){return t.restart()})}}})},stop:function(){return a.off(),w(s).each(function(t){return t.stop()}),w(l).each(function(t){return t.stop()})},makePageviewHandler:function(t){return a.delegate(t,"unit")}}};var Me;Me=function(t,n,e,r){var i,o,u,a,c,s,l,d,v,h,g;return a=N("XdiConsumer",{eventEmitter:{playback:!0}}),a.on("crash",e.push),c=j(n),o=f(a),i=function(t,n){return o.attach(c,"burt.xdi."+t,n)},u=function(n){return w(t.getUnits()).first(function(t){return"xdi"===t.meta.type&&t.meta.xdiId===n})},s=function(t){throw t["public"]?new L(t.error):new Error(t.error)},l=function(t){var n,e;if(n=t.meta||{},!t.xdiId)throw new L(L.MISSING_XDI_ID,{name:n.name});return(e=u(t.xdiId))?(e.addMeta({cloudKeys:w(e.meta.cloudKeys||[]).concat(n.cloudKeys).it(),loadUrl:n.loadUrl,wrapperUrl:n.wrapperUrl,mediaType:n.mediaType,nodeCount:n.nodeCount,sticky:n.sticky}),e.ready()):void 0},d=function(t){var n;return(n=u(t.xdiId))?n.annotate(t.annotation):void 0},v=function(t){var n;return(n=u(t.xdiId))?n.connect(t.connection):void 0},h=function(t){var n;return(n=u(t.xdiId))?r["new"](n.meta).api.restart(t.meta):void 0},g=function(t){var n;return(n=u(t.xdiId))?r["new"](n.meta).api.stop():void 0},{start:function(){return i("start",function(t,n){return c.emit("burt.xdi.ready",null,n)}),i("error",s),i("unit",l),i("unit.annotation",d),i("unit.connection",v),i("unit.restart",h),i("unit.stop",g)},stop:function(){return o.off(),c.off()}}};var Re;Re=function(){};var _e;_e=function(t,n,e,r){var i;return r.get("burt-inject")?(i=n("script",{src:e}),i.on("load",t),i.on("error",t)):void 0};var $e;$e=function(t){var n;return(n=t.burtApi.double)&&t.burtApi.double.start(),n};var Oe;Oe=function(){return"_burtApi"};var Pe;Pe=function(){return"_burtAgencyDa"};var je;je=function(t,n,e,r,i,o,u,a,c,s,l,d,v){var h;return h=N("doubleController"),h.on("crash",n.push),u.setId(t.getVisitorId()),t.on("pageview",function(t){var n,u,g,p,m;return n=f(h),i.set(t.getDomain()||o),u=r.makePageview(),e.setId(t.getMediaKey()),e.setName(t.getSiteName()),u.addMeta({category:t.getCategory(),subCategory:t.getSubCategory(),pageUrl:"function"==typeof t.getPageUrl?t.getPageUrl():void 0}),t.getPageviewId&&u.addMeta({masterPageviewId:t.getPageviewId()}),n.attach(t,"sync",function(t){return"id"===t||"cint"===t?u.sync(t,{write:!1}):void 0}),n.attach(t,"annotation",u.annotate),n.attach(t,"connection",u.connect),n.attach(t,"user-segments",function(){return a.getSegments(function(){})}),n.attach(t,"unit",function(t){var e;return e=l["new"](d["new"](t.getNode()),t.getMeta()),n.attach(t,"stop",e.stop),n.attach(t,"added-meta",function(t){return"api"===t.previewUrlSource||"api"===t.filledSource?e.addMeta(t):void 0
}),n.attach(t,"annotation",function(t){return"span"!==t.source?e.annotate(t):void 0}),n.attach(t,"connection",function(t){return"span"!==t.source?e.connect(t):void 0}),u.addUnit(e)}),g=v["new"](u,void 0),g.start(),m=void 0,p=function(t){var e;return u?(m&&(m.stop(),m=void 0),n.off(),u.stop(),e=t?"timeout":void 0,g.stop(e),u=void 0):void 0},n.attach(t,"stop",function(){return p()}),m=c.delay(s,function(){return p(!0)})})};var Be;Be=function(){return{filter:function(t){return t.cks=[],t}}};var Le;Le=function(t,n){return n.register("use",function(){}),n.register("version",function(){}),n.register("trackById",function(){}),n.register("trackByNode",function(){}),n.register("withUnits",function(){}),n.register("withFilledUnits",function(){}),n.register("findUnit",function(){}),n.register("findUnits",function(){}),n.register("withUserSegments",function(){}),n.register("connect",function(){}),n.register("annotate",function(){}),n.register("startUnitTracking",function(){}),n.register("version",function(){}),n.register("setDemographicsProvider",function(){}),n.register("startTracking",function(){}),n.register("stopTracking",function(){}),n.register("setCategory",function(){}),n.register("setLogUrlBase",function(){}),t()};var We;We=function(){};var Ve;Ve=function(){return{get:function(){return this.domain},set:function(t){this.domain=t}}};var ze,u=[].slice;ze=function(t,n,e,r,i,o,a){var c,s,f,l,d,v,h,g,p,m,y,w,b,I,E,A,S,k,U,D,x,C,T,M,R,_,$,O,P,j,B;return m=N("masterApi",{eventEmitter:{playback:!0}}),m.on("crash",t.push),y=!1,$=!1,b=void 0,k=void 0,h=void 0,l=void 0,x=void 0,I=void 0,w=void 0,d=[],R=!1,_=!1,f=void 0,c=function(){return f=N("api",{eventEmitter:{playback:!0}}),f.getMediaKey=function(){return b},f.getSiteName=function(){return k},f.getCategory=function(){return l},f.getSubCategory=function(){return x},f.getCloudKeys=function(){return d},f.getDomain=function(){return h},f.getPageUrl=function(){return I},f.getLogUrlBase=function(){return w},f},E=function(){return y=!1,$=!1,b=void 0,k=void 0,h=void 0,l=void 0,x=void 0,d=[],R=!1,_=!1,f=c()},E(),v=function(t,n,e){return f.emit("connection",{scope:t,name:n,value:e})},s=function(t,n,e){return f.emit("annotation",{scope:t,name:n,value:e})},M=function(t,n){return f.emit("custom-event",t,n)},C=function(t,n){var e;return null==n&&(n={}),e=o["new"](n),f.emit("track-by-id",t,e.meta),e.api},T=function(t,n){var e;return null==n&&(n={}),e=o["new"](n),f.emit("track-by-node",t,e.meta),e.api},j=function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],f.emit.apply(f,["with-units"].concat(u.call(t)))},P=function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],f.emit.apply(f,["with-filled-units"].concat(u.call(t)))},p=function(){var t,n;return t=1<=arguments.length?u.call(arguments,0):[],n=a["new"](i.currentPageview(),t),n.matches().map(function(t){return o["new"](t.meta).api}).it()},g=function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],p.apply(null,t)[0]},B=function(t){return f.emit("user-segments",t)},S=function(t){if("cint"!==t)throw new L(L.INVALID_DEMOGRAPHICS_PROVIDER,{name:t});return f.emit("demographics-provider",t)},D=function(){return f.emit("start-unit-tracking")},O=function(t,n){return null==n&&(n=function(){}),m.emit("use",t,n)},U=function(t){if(R)m.emitError(new L(L.TRACKING_ALREADY_STARTED));else{if(R=!0,t.call(A,A),_=!0,null==l&&(l=e.generate()),!$&&!y)throw new L(L.MISSING_TRACKING_KEY_AND_SITE_NAME);h||n.push(W.MISSING_DOMAIN,{domain:r}),m.emit("start-tracking",f)}return void 0},A={on:m.on,startTracking:U,stopTracking:function(){return void(R?(E(),m.emit("stop-tracking")):m.emitError(new L(L.TRACKING_NOT_STARTED)))},setTrackingKey:function(t,n){if($=!0,!t)throw new L(L.MISSING_TRACKING_KEY);if(!t.match(/^[A-Z0-9]{12}$/))throw new L(L.INVALID_TRACKING_KEY,{mediaKey:t});if(!n)throw new L(L.MISSING_SITE_NAME);return b=t,k=n,y=!0},setDomain:function(t){return h=t},setCategory:function(t,n){return l=t,x=n},setPageUrl:function(t){return I=t},setLogUrlBase:function(t){if(_)throw new L(L.register("jsdii3","Calling #setLogUrlBase after tracking has been started is not allowed"));return w=t},addCloudKey:function(t){if(!t.match(/^[A-Z0-9]{12}$/))throw new L(L.INVALID_CLOUD_KEY,{cloudKey:t});return d.push(t)},startUnitTracking:D,trackById:C,trackByNode:T,setDemographicsProvider:S,withUserSegments:B,connect:v,annotate:s,trackEvent:M,withUnits:j,withFilledUnits:P,findUnit:g,findUnits:p,use:O}};var qe;qe=function(t,n,e,r){return n.register("version",r.toString()),n.register("trackById",e.trackById),n.register("trackByNode",e.trackByNode),n.register("withUnits",e.withUnits),n.register("withFilledUnits",e.withFilledUnits),n.register("findUnit",e.findUnit),n.register("findUnits",e.findUnits),n.register("withUserSegments",e.withUserSegments),n.register("connect",e.connect),n.register("annotate",e.annotate),n.register("startUnitTracking",e.startUnitTracking),n.register("setDemographicsProvider",e.setDemographicsProvider),n.register("setCategory",e.setCategory),n.register("setLogUrlBase",e.setLogUrlBase),n.register("use",e.use),n.register("trackEvent",e.trackEvent),n.register("startTracking",e.startTracking),n.register("stopTracking",e.stopTracking),t()};var Ke,u=[].slice;Ke=function(t,n,e,r,i,o,a,c,s,l,d,v,h,g,p,m,y,b,I,E,A,S,k,U){var D,x,C,T,M,R,_,$,O,P,j,B,L,W;return R=N("masterController"),R.on("crash",t.push),x=f(R),W=void 0,P=void 0,O=void 0,B=void 0,$=y["new"](),$.start(),M=I["new"](),M.start(),T=b["new"](),T.start(),D=E["new"](),D.start(),L=A["new"](),L.start(),C=k["new"](),C.start(),_=void 0,j=function(e){var r,i;return _?(x.off(),B&&(B.stop(),B=void 0),i=e?"timeout":void 0,P.stop(i),r=[W,$,M,T,D,L,C,O],_.stop(),w(r).each(function(t){return t.stop()}),t.reset(),n.reset(),_=void 0):void 0},e.on("stop-tracking",function(){return j()}),e.on("start-tracking",function(t){var n;return c.set(t.getDomain()||s),_=r.makePageview(),i.setId(t.getMediaKey()),i.setName(t.getSiteName()),_.sync("id",{write:!0}),_.addMeta({category:t.getCategory(),subCategory:t.getSubCategory(),cloudKeys:t.getCloudKeys(),pageUrl:t.getPageUrl()}),x.attach(t,"demographics-provider",function(t){return _.sync(t,{write:!1})}),x.attach(t,"annotation",_.annotate),x.attach(t,"connection",_.connect),x.attach(t,"custom-event",_.trackEvent),x.attach(t,"user-segments",function(t){return l.getSegments(t)}),n=h["new"](),x.attach(_,"unit",function(t){var e;return e=p["new"](t.meta),e.setUnit(t),e.on("annotation",t.annotate),e.on("connection",t.connect),e.on("stop",function(){return t.stop(),_?_.removeUnit(t):void 0}),e.on("restart",function(e){return null==e.name&&(e.name=t.meta.name),null==e.type&&(e.type=t.meta.type),e.restarted=!0,t.stop({restart:!0}),_.removeUnit(t),n.trackByNode(t.node.node,e)})}),x.attach(t,"with-units",function(){var t,n,e;return t=1<=arguments.length?u.call(arguments,0):[],n=t.pop(),e=g["new"](_,t),x.attach(e,"match",function(t){return o(function(){return n(p["new"](t.meta).api)})})}),x.attach(t,"with-filled-units",function(){var t,n,e;return t=1<=arguments.length?u.call(arguments,0):[],n=t.pop(),e=g["new"](_,t,{emitRestarted:!0}),x.attach(e,"match",function(t){return t.on("ready",function(){return o(function(){return n(p["new"](t.meta).api)})})})}),x.attach(n,"unit",function(t){return _.addUnit(t)}),x.attach(t,"start-unit-tracking",function(){return n.trackByClass("burt-unit")}),x.attach(t,"track-by-id",function(t,e){return n.trackById(t,e)}),x.attach(t,"track-by-node",function(t,e){return n.trackByNode(t,e)}),P=m["new"](_,t.getLogUrlBase()),P.start(),W=S["new"](_),W.start(),O=U["new"](),O.start(),$.makePageviewHandler(_,{mediaKey:t.getMediaKey(),siteName:t.getSiteName(),category:t.getCategory(),subCategory:t.getSubCategory(),domain:t.getDomain(),cloudKeys:t.getCloudKeys()}),M.makePageviewHandler(_,{domain:t.getDomain(),category:t.getCategory(),subCategory:t.getSubCategory(),siteName:t.getSiteName(),pageUrl:t.getPageUrl()}),L.makePageviewHandler(_),B=d.delay(v,function(){return j(!0)})}),e.on("use",function(t,n){return n()})};var Fe,u=[].slice;Fe=function(t,n,e){var r,i,o,a,c,s;return r=N("xdiApi",{eventEmitter:{playback:!0}}),r.on("crash",t.push),c=function(t,n){var r;return r=e["new"](t),n(r),r.api},o=function(t,n){return null==n&&(n={}),c(n,function(n){return r.emit("track-by-id",t,n.meta)})},a=function(t,n){return null==n&&(n={}),c(n,function(n){return r.emit("track-by-node",t,n.meta)})},i=function(){return r.emit("start-unit-tracking")},s=function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],r.emit.apply(r,["with-units"].concat(u.call(t)))},{on:r.on,run:function(t){return n.register("trackById",o),n.register("trackByNode",a),n.register("startUnitTracking",i),n.register("withUnits",s),t()}}};var Ge;Ge=function(t,n){return n.run(t)};var He,u=[].slice;He=function(t,n,e,r,i,o,a){var c,s,f,l;return c=N("xdiController"),c.on("crash",t.push),s=j(n,n.top),f=r.makePageview(),t.on("crash",function(t){return s.emit("burt.xdi.error",{"public":t.isPublic(),error:t.error})}),l=o["new"](),c.attach(f,"unit",function(t){var n;return n=a["new"](t.meta),n.setUnit(t),n.on("annotation",t.annotate),n.on("connection",t.connect),n.on("stop",function(){return s.emit("burt.xdi.unit.stop",{xdiId:t.meta.xdiId}),t.stop(),f.removeUnit(t)}),n.on("restart",function(n){return s.emit("burt.xdi.unit.restart",{xdiId:t.meta.xdiId,meta:n}),t.restart(),f.removeUnit(t),l.trackByNode(t.node.node)}),c.attach(t,"ready",function(){return s.emit("burt.xdi.unit",{xdiId:t.meta.xdiId,meta:t.meta})}),c.attach(t,"annotation",function(n){return s.emit("burt.xdi.unit.annotation",{xdiId:t.meta.xdiId,annotation:n})}),c.attach(t,"connection",function(n){return s.emit("burt.xdi.unit.connection",{xdiId:t.meta.xdiId,connection:n})})}),c.attach(e,"with-units",function(){var t,n,e;return t=1<=arguments.length?u.call(arguments,0):[],n=t.pop(),e=i["new"](f,t),e.on("match",function(t){return n(a["new"](t.meta).api)})}),l.on("unit",function(t){return f.addUnit(t)}),c.attach(e,"start-unit-tracking",function(){return l.trackByClass("burt-unit")}),c.attach(e,"track-by-id",function(t,n){return l.trackById(t,n)}),c.attach(e,"track-by-node",function(t,n){return l.trackByNode(t,n)})};var Ye;Ye=function(t){return{get:function(){return t}}};var Je;Je=function(t,n,e){var r;return e.hasPostMessage()?(r=j(n,n.top),r.on("burt.xdi.ready",t),r.emit("burt.xdi.start")):void 0};var Xe;Xe=function(t,n,e,r,i){var o,u,a,c,s;return s=0,c=N("adNodeFinder"),c.on("crash",r.push),o=function(r,o){var u,a,c,s,f;return c=r.get("tagName"),("OBJECT"===c||"EMBED"===c||"IMG"===c)&&(f=r.geo(),s=f.width,u=f.height,i>s||i>u)?!1:(a=function(){switch(c){case"OBJECT":case"EMBED":return n["new"](r);case"IMG":return t["new"](r);case"IFRAME":return e["new"](r);default:return!1}}(),a?(o.push(a),!0):!1)},u=function(t,n){var e,r,i,a;if(null==n&&(n=0),!t)throw new Error("Node not found");return a=w([]),e=o(t,a),!e&&2>n&&(r=t.find("IMG, OBJECT, EMBED, IFRAME"),i=w([]),1===r.size()?i.push(r.firstItem()):r.size()>1&&r.each(function(t){var n;return n=!1,r.each(function(e){return t!==e&&t.isChildOf(e)?n=!0:void 0}),n?void 0:i.push(t)}),i.each(function(t){var e;return e=u(t,n+1),e.each(a.push)})),a},a=function(t){var n,e;return e=0,n=null,t.each(function(t){var r,i,o,u;return u=t.node.geo(),o=u.width,i=u.height,r=o*i,r>e&&t.filled()?(n=t,e=r):void 0}),n},{find:u,getLargestNode:a}};var Ze;Ze=function(t,n,e){var r,i,o,u;return u=e["new"](n),o=null,i=function(){return{width:0,height:0,top:0,left:0,area:function(){return 0},visibility:function(){return 0}}},r=function(t){var n;return n=u.calculate(t.left,t.top,t.width,t.height),n>0?Math.round(100*n):0},{geo:function(n){return n&&o?o:o=function(){var n,e,o,u,a,c,s,f,l,d;return t.isEmpty()?i():(o=t.map("geo").select(function(t){return t.width>0&&t.height>0}),o.isEmpty()?i():(f=o.max(function(t){return t.left+t.width}),s=f.left+f.width,e=o.max(function(t){return t.top+t.height}),n=e.top+e.height,l=o.min("top").top,a=o.min("left").left,d=s-a,u=n-l,c={top:l,left:a,width:d,height:u,area:function(){return d*u},visibility:function(){return this.vis?this.vis:this.vis=r(c)}}))}()},visibility:function(t){var n;return n=this.geo(t),n.visibility()}}};var Qe;Qe=function(t){var n;return n=N("Carrier",{eventEmitter:{playback:!0}}),t["try"]("carrier",{on:n.on,emit:n.emit})};var tr;tr=function(){return{next:function(){return 1}}};var nr;nr=function(){return{adler32:t}};var er;er=function(t,n){var e,r;return r=n.encodeURIComponent,e=n.decodeURIComponent,{encode:function(n,e,i){var o,u;return null==i&&(i={}),u=i.expires,R(i.expires)&&(u=h.parse(t()).add(u,"days")),o=[],o.push(r(n)+"="+r(e)),u&&o.push("expires="+u.toUTCString()),i.path&&o.push("path="+i.path),o.join("; ")},decode:function(t){var n,r,i,o,u,a,c,s;if(o={},t)for(r=t.split("; "),a=0,c=r.length;c>a;a++)n=r[a],s=n.split("="),i=s[0],u=s[1],o[e(i)]=e(u);return o}}};var rr;rr=function(t,n){var e,r;return null==n&&(n={}),e="burt"===t?"id":t,r=E({id:{write:!0},cint:{write:!1}}).merge(n),{shouldWrite:function(){return r[e].write},cookieName:function(){return e}}};var ir;ir=function(t,n,e,r,i,o,u,a,f,l,d){var v,h,g,m,y,b,I,E,A,S;if(!t)throw new Error("Node not found");return b=N("DomNode"),b.on("crash",f.push),P(t)&&(t=n.document.createElement(t)),E=null,I=null,y=function(){return{width:0,height:0,top:0,left:0}},m=e["new"](t.ownerDocument),S=d["new"](n),g={},h=function(e,r){var i,o,u,a;try{null==E&&(E=t.ownerDocument&&(t.ownerDocument.defaultView||t.ownerDocument.parentWindow)!==n)}catch(c){u=c}if(o=e.style[r])return o;if(E)return void 0;if(!g[r])if(n.getComputedStyle)a=n.getComputedStyle(e,null),a&&a[r]&&(g[r]=a[r]);else if(e.currentStyle){if(i=e.currentStyle[r],"inherit"===i&&e.parentNode)try{i=h(e.parentNode,r)}catch(c){u=c}g[r]=i}return g[r]},A=B(t),v=[],{data:function(){return A},id:function(){return A.get("id")},node:t,document:m,window:m.window(),on:function(n,e){var r;return"crash"===n?b.on("crash",e):(r=c(t,n,e),v.push(r),r)},find:function(n){return this.isIframe()?i["new"](this).find(n):a["new"](t).find(n)},geo:function(){var n,e;if(!t.getBoundingClientRect)throw new Error(t.tagName+" has no getBoundingClientRect");if(this.isHidden())return y();try{e=t.getBoundingClientRect()}catch(r){return n=r,y()}return{top:Math.ceil(S.top()+e.top-m.clientTop()),left:Math.ceil(S.left()+e.left-m.clientLeft()),width:Math.round(e.width||t.offsetWidth),height:Math.round(e.height||t.offsetHeight)}},area:function(){var t,n,e;return e=this.geo(),n=e.width,t=e.height,n*t},get:function(n){return"src"===n?t.src:"class"===n?t.className:t.getAttribute(n)||t[n]},set:function(n,e){return t.setAttribute(n,e)},dataAttr:function(t){return this.get("data-"+t)},parent:function(){return t.parentNode},insertBefore:function(n){return this.parent().insertBefore(n.node,t)},remove:function(){var n;return w(v).each(function(t){return t.off()}),null!=t.removeNode?t.removeNode(!0):null!=(n=this.parent())?n.removeChild(t):void 0},isChildOf:function(n){return t.parentNode===n.node},isHidden:function(){return null==I&&(I="hidden"===this.style("visibility")||"none"===this.style("display"),l.delay(5e3,function(){return I=null})),I},style:function(n){return h(t,n)},isIframe:function(){return"IFRAME"===t.tagName},isImage:function(){return"IMG"===t.tagName},isFlash:function(){var n;return"OBJECT"===(n=t.tagName)||"EMBED"===n},loaded:function(){var t;return this.isImage()?o["new"](this).loaded():this.isFlash()?u["new"](this).loaded():this.isIframe()?i["new"](this).loaded():(t=p(),s(this.find("img, object, embed, iframe").map("loaded")).then(t.resolve),t.promise())},hasId:function(n){return n===t.id||n==="#"+t.id},hasClass:function(n){return $(t.className)?w(t.className.split(" ")).any(function(t){return t===n||"."+t===n}):!1},equals:function(n){return t===n}}};var or;or=function(t,n){return{find:function(e){var r,i,o,u,a,c,s,f,l,d;if(!q(e).startsWith("#")){if(i=w([]),q(e).startsWith("."))if(null!=t.getElementsByClassName)for(l=t.getElementsByClassName(e.slice(1)),a=0,s=l.length;s>a;a++)r=l[a],i.push(n["new"](r));else for(o=new RegExp("(^| )"+e.slice(1)+"( |$)"),d=t.getElementsByTagName("*"),c=0,f=d.length;f>c;c++)r=d[c],o.test(r.className)&&i.push(n["new"](r));else u=w(e.split(",")).map(function(t){return q(t).trim()}),u.each(function(e){var r,o,u,a,c;for(a=t.getElementsByTagName(e),c=[],o=0,u=a.length;u>o;o++)r=a[o],c.push(i.push(n["new"](r)));return c});return i}return(r=t.getElementById(e.slice(1)))?n["new"](r):void 0}}};var ur;ur=function(t,n,e){var r,i,o;return r=0,o=S({playback:!0}),i={},{push:function(u){if(!i[u.id]){if(i[u.id]=!0,!_(u))throw new Error("errorHandler.push was called with a non object");return r++<100&&(o.emit("crash",u),n.throwErrors)?t(function(){if(e.error(u.toString()),u.error)throw u.error}):void 0}},on:o.on,reset:function(){return i={},o.off()}}};var ar;ar=function(t){var n,e,r,i;return i=t.navigator.userAgent,e=void 0,n=function(){var t,n;return null!=e?e:(t=new RegExp("MSIE[\\/ ]([\\d\\w\\.\\-]+)","i"),n=i.match(t),e=n?n[1]:!1,q(e).toNumber())},r={},r.initialEvents={},n()?(r.crazyScriptOrder=!0,r.shortDomainBug=!0,r.initialEvents.focus=!0,n()<=8&&(r.initialEvents.mousemove=!0)):/Opera/.test(i)?r.crazyScriptOrder=!0:i.match(/webkit/i)&&i.match(/(iPad|iPhone|Android|Mobile)/)?r.initialEvents.resize=!0:/Firefox/.test(i)&&(r.initialEvents.focus=!0),{getInitialEventsToIgnore:function(){return r.initialEvents},hasInitialMouseMove:function(){return!!r.initialEvents.mousemove},hasInitialFocus:function(){return!!r.initialEvents.focus},hasInitialResize:function(){return!!r.initialEvents.resize},hasCrazyScriptOrder:function(){return!!r.crazyScriptOrder},hasShortDomainBug:function(){return!!r.shortDomainBug},hasPostMessage:function(){return z(t,"postMessage")}}};var cr;cr=function(){var t;return t=function(n,e){var r,i;if(0===e.length)return!0;try{return i=n[e.shift()],null!=i?t(i,e):!1}catch(o){return r=o,!1}}};var sr;sr=function(){return v};var fr;fr=function(t,n,e){var r,i;return i=N("inject"),r=e["new"](t),function(t,e){var o,u,a,c,s,d;null==e&&(e={}),c=n["new"](t);for(o in e)d=e[o],c.set(o,d);return a=r.find("script").firstItem(),a.insertBefore(c),u=f(i),s=l(function(){return u.off()}),u.delegate(c,"load"),u.delegate(c,"error"),i.on("load",s),i.on("error",s),{on:i.on}}};var lr;lr=function(t,n,e){return function(r,i){var o,u,a;return u={},u.callback="burt_callback_"+n.generate(),t[u.callback]=i,e.get(r,function(){var t;t=[];for(o in u)a=u[o],t.push(""+o+"="+a);return t}().join("&"))}};var dr;dr=function(t,n,e,r,i){var o,u;return o=N("LazyLoader"),o.on("crash",t.push),u={},{use:function(t,n){var e;if(e=u[t])return e.on("burt."+t+".available",function(){return e.on("burt."+t+".ready",n),e.emit("burt."+t+".start")});throw new L(L.INVALID_COMPONENT,{component:t})},register:function(t,e,a){return null==a&&(a={}),o("lazy:"+t,function(){var c,s,f,l;if(!a.crossDomain||r.hasPostMessage())return l=e["new"](),u[t]=f=a.crossDomain?(s=a.hostWindow||n,c=a.clientWindow||n,j(s,c)):i["new"](),f.emit("burt."+t+".available"),o.attach(f,"burt."+t+".start",function(n,e){return l.start(function(){return f.emit("burt."+t+".ready",n,e)})})})()}}};var vr;vr=function(t){return{language:function(){return t.navigator.language||t.navigator.userLanguage}}};var hr,u=[].slice;hr=function(t){var n;return n=function(){var n,e;return n=1<=arguments.length?u.call(arguments,0):[],(e=t.console)?e.log.apply(e,n):void 0},{warn:function(t){return n("[WARNING]",t)},error:function(t){return n("[ERROR]",t)},info:function(t){return n("[INFO]",t)}}};var gr;gr=function(){return{numberGenerator:function(t){return r(t)}}};var pr;pr=function(t,n,e){var r,i,o,u,a,c,s;return o=N("FlashNode"),o.on("crash",e.push),s=t.data(),r=t.find("embed, object").lastItem()||t,r!==t&&(i=r.geo(),c=t.geo(),(0===i.width||0===i.height)&&c.width>0&&c.height>0&&(r=t)),u=function(t){var n;try{return void 0!==t.PercentLoaded()}catch(e){return n=e,!1}},a=function(t){return u(t)&&t.PercentLoaded()>=100},{node:r,loadUrl:function(){switch(r.get("tagName")){case"OBJECT":return r.get("data")||function(){var t,n,e,i;for(i=r.node.childNodes,n=0,e=i.length;e>n;n++)if(t=i[n],"movie"===t.name)return t.value}();case"EMBED":return r.get("src")}},mediaType:function(){return r.get("tagName")},filled:function(){return!!s["try"]("filled",function(){var n,e,r;return r=t.geo(),e=r.width,n=r.height,n>10&&e>10?!0:null})},loaded:function(){return s["try"]("loadPromise",function(){var t;return t=p(),o("initialCheck",function(){return a(r.node)?t.resolve():n.every(200,o("loaded",function(n,e){if(!t.isResolved()){if(a(r.node))return t.resolve();if(50>e)return n();if(!u(r.node))return t.resolve()}}))})(),t.promise()})}}};var mr;mr=function(t,n,e,r,i,o){var u,a,f,l,d,v;return f=N("IframeNode"),f.on("crash",e.push),u=function(){return l()?i.find(o["new"](t.node.contentWindow.document.body)):w([])},d=null,a=function(){return null!=d?d:d=i.getLargestNode(u())},l=function(){return r(t.node,["contentWindow","document","body","childNodes"])},v=t.data(),{node:t,loadUrl:function(){var t;return t=a(),t?t.loadUrl():null},wrapperUrl:function(){var n,e;return e=a(),e&&e.wrapperUrl?e.wrapperUrl():(n=t.get("src"),q(n).startsWith("javascript:")?void 0:n)},mediaType:function(){return"IFRAME"},filled:function(){return!!v["try"]("filled",function(){return l()?a()?!0:null:!0})},loaded:function(){return v["try"]("loadPromise",function(){var e,r,i;return r=p(),i=p(),e=c(t.node,"load",i.resolve),i.promise().then(function(){var t,n;return e.off(),n=u().map("loaded"),t=s(n),t.then(function(){return r.resolve()})}),n.every(100,f("loaded",function(n,e){var o,u,a,c;return l()&&(o=t.node.contentWindow.document,i.isResolved()||"complete"===o.readyState&&((null!=o?null!=(u=o.body)?null!=(a=u.childNodes)?a.length:void 0:void 0:void 0)>0||"about:blank"!==(null!=o?null!=(c=o.location)?c.href:void 0:void 0))&&i.resolve()),50>e?n():i.isResolved()?void 0:r.resolve()})),r.promise()})},isAccessible:l,find:function(n){return o["new"](t.node.contentWindow.document.body).find(n)}}};var yr;yr=function(t,n,e){var r,i;return r=N("ImgNode"),r.on("crash",e.push),i=t.data(),{node:t,loadUrl:function(){return t.get("src")},mediaType:function(){return"IMG"},filled:function(){return!!i["try"]("filled",function(){var n,e,r;return r=t.geo(),e=r.width,n=r.height,n>10&&e>10?!0:null})},loaded:function(){return i["try"]("loadPromise",function(){var e;return e=p(),r("initialCheck",function(){return t.node.complete?e.resolve():n.every(200,r("loaded",function(n,r){var i;return e.isResolved()?void 0:t.node.complete?e.resolve():50>r?n():i=c(t.node,"load",function(){return i.off(),e.resolve()})}))})(),e.promise()})}}};var wr;wr=function(){return function(){return new Date}};var br;br=function(t,n,e){return e["new"](t,n)};var Ir;Ir=function(t,n,e,r,i,o){var u,a,c,s,d,v,h,g,p;if(d=N("PageReady",{eventEmitter:{playback:!0}}),d.on("crash",n.push),p=i["new"](e),c=o["new"](r),v=!1,u=f(d),h=l(function(t){return d.emit("ready",t),u.off(),v=!0}),"complete"===r.readyState?h(r.readyState):(u.attach(c,"readystatechange",function(){return h(r.readyState)}),u.attach(c,"DOMContentLoaded",function(){return h("DOMContentLoaded")}),u.attach(p,"load",function(){return h("load")})),r.attachEvent){g=!1;try{g=null==e.frameElement&&r.documentElement}catch(m){s=m}g&&r.documentElement.doScroll&&(a=function(){try{r.documentElement.doScroll("left")}catch(n){return s=n,void t.delay(50,d("doScrollCheck",a))}return h("scroll")})()}return{on:d.on,isReady:function(){return v}}};var Er;Er=function(){return"_burtAgency"};var Ar;Ar=function(t,n,e,r,i){var o;return o=function(t){return _(t)&&null!=t.value&&null!=t.expires?i.now()<new Date(t.expires).getTime()?t.value:void 0:t},{get:function(n){var r;return null==n&&(n=null),r=t.get(e)||{},n?o(r[n]):r},set:function(r,u,a){var c,s,f,l,d,v,h;null==a&&(a={}),c=this.get(r),c&&_(c)&&_(u)&&(u=E(c).merge(u)),a.expires&&(R(a.expires)&&(f=a.expires,l=new Date(i.now()),l.setDate(l.getDate()+f),a.expires=l.getTime()),u={expires:a.expires,value:u}),s={},h=this.get();for(d in h)v=h[d],null!=o(v)&&(s[d]=v);return s[r]=u,t.set(e,s,{path:n.path,domain:n.domain()})},isEnabled:function(){var t;return t=r.generate(),this.set("random",t),this.get("random")===t}}};var Sr;Sr=function(t){var n,e,r;return n=t.document,r=function(n){return t.encodeURIComponent(n)},e=function(n){return t.decodeURIComponent(n)},{set:function(t,e,i){var o,u,a,c;null==e&&(e=""),null==i&&(i={}),null==i.path&&(i.path="/"),null==i.expires&&(i.expires=365),null==i.secure&&(i.secure=!1),o=[];for(a in i)c=i[a],"domain"!==a||c||(c=""),"expires"===a&&(R(c)&&(u=c,c=new Date,c.setUTCDate(c.getUTCDate()+u)),null!=c.toUTCString&&(c=c.toUTCString())),"secure"===a?c&&o.push("; "+a):c&&o.push("; "+a+"="+c);return n.cookie=r(t)+"="+r(e)+o.join(""),!i.domain||e&&this.get(t)===e?void 0:this.set(t,e,E(i).extend({domain:null}))},get:function(t){var r,i,o,u,a,c,s;for(i=n.cookie.split("; "),a=0,c=i.length;c>a;a++)if(r=i[a],s=r.split("="),o=s[0],u=s[1],e(o)===t)return e(u)}}};var kr;kr=function(){return"/"};var Nr;Nr=function(t,n,e,r){return{path:e,domain:function(){var e,i,o;return i=n.get(),"localhost"===i?void 0:(e=t.document.domain,o=r.hasShortDomainBug(),o&&i===e&&i.match(/(\.|^)[^.]{2}\.[^\.]+$/)&&2===i.split(".").length?null:o&&i.split(".").length<3&&i.match(/(\.|^)[^.]{2}\.[^\.]+$/)?"."+e:"."+i)}}};var Ur;Ur=function(t){return{get:function(n){var e;try{return i.parse(t.get(n))}catch(r){e=r}},set:function(n,e,r){return null==r&&(r={}),t.set(n,i.stringify(e),r)}}};var Dr;Dr=function(t){return"http:"===t.location.protocol?"http:":"https:"};var xr;xr=function(t,n,e,r,i,o){var u,a,c;return u=void 0,c=void 0,a=0,{createSeed:function(){var n,e,u,s,f,l,d,v,h,g,p,m,y,w;if(v=[],u=function(t){return(null!=t?t.toString:void 0)?(t=t.toString(),v.push(t)):void 0},n=function(t){var n,e;e=[];for(n in t)e.push(M(t[n])?void 0:u(t[n]));return e},e=function(t,n){var e,r,i,o,a,c,s,f,l;for(l=[],a=0,s=n.length;s>a;a++){for(o=n[a],e=t,c=0,f=o.length;f>c;c++){i=o[c];try{e=e[i]}catch(d){r=d,e=i}}l.push(u(e))}return l},e(t,[["location","href"],["document","referrer"]]),l=t.navigator,e(l,[["userAgent"],["language"],["product"],["appVersion"],["onLine"],["platform"],["vendor"],["appCodeName"],["cookieEnabled"],["appName"],["productSub"],["vendorSub"]]),l.plugins)for(y=l.plugins,h=0,p=y.length;p>h;h++)d=y[h],n(d);if(l.mimeTypes)for(w=l.mimeTypes,g=0,m=w.length;m>g;g++)f=w[g],n(f);return t.screen&&n(t.screen),t.history&&u(t.history.length),t.Math&&u(t.Math.random()),u(++a),u(o.offset()),u(r.toString),s=i.now(),u(s),c=v.join("|")},next:function(){return null==c&&(c=this.createSeed()),null==u&&(u=n.numberGenerator(e.adler32(c))),u.random()}}};var Cr;Cr=function(t,n,e,r){var i,o;return o=t.document.referrer,i=t.location.hostname,{last:function(){return o},orig:function(){return n.get("referrer")||function(){var t;return o&&i&&(t=new RegExp("^(https?://)?([^/]*)"+e.get(),"i"),!t.test(o))?(n.set("referrer",o,{expires:h(r()).add(30,"minutes")}),o):void 0}()}}};var Tr;Tr=function(t,n,e,r,i){var o,u,a,c;return c=N("Request"),c.on("crash",e.push),u=i["new"](t.document),o=function(t,e){return(t+e).length<=n},a=c("get",function(t,n,e){var i,a,s;if(!o(t,n))throw new Error("Request too long");return e?(s=r["new"]("img"),s.set("src",t+"?"+n)):(s=r["new"]("script"),s.set("src",t+"?"+n),s.set("type","text/javascript"),i=f(c),a=l(function(){return i.off(),s.remove()}),w("load","error").each(function(t){return i.attach(s,t,a)}),i.attach(s,"readystatechange",function(){var t;return t=s.get("readyState"),!t||/loaded|complete/.test(t)?a():void 0}),u.addScript(s))}),{get:a,checkLength:o}};var Mr;Mr=function(){return 1900};var Rr;Rr=function(t,n,e,r){var i,o,u,a,c,s,f,l;return null==n&&(n=0),c=void 0,l=!0,i=-1,o=N("Scheduler"),o.on("crash",function(){return f()}),u=o("next",function(){return l?void 0:(t.length>i+1&&i++,c=e.delay(n+1e3*t[i]*r.next(),o("timer",function(){return u(),o.emit("event")})))}),f=function(){return l=!0,i=-1,c?c.stop():void 0},s=function(){return l?(l=!1,u()):void 0},a=function(){return this.stop(),this.start()},{stop:f,start:s,reset:a,on:o.on}};var _r;_r=function(t,n){return n["new"](t)};var $r;$r=function(){return 30};var Or;Or=function(){return{next:function(){return Math.random()}}};var Pr;Pr=function(){return{offset:function(){return(new Date).getTimezoneOffset().toString()}}};var jr;jr=function(t,n){var e;return e=n.document.createElement("a"),e.href=t,{normalize:function(){var n,r,i;return n=(e.href||"").length,i=(e.search||"").length,r=e.href.slice(0,n-i),r.length<t.length?r:t},host:function(){return e.host},hostname:function(){return e.hostname},port:function(){return Number(e.port)||(this.protocol().match(/https/)?443:80)},search:function(){return e.search},pathname:function(){return"/"===e.pathname[0]?e.pathname:"/"+e.pathname},protocol:function(){return e.protocol},encode:function(){return n.encodeURIComponent(t)},toString:function(){return t}}};var Br;Br=function(t,n){var e;return e=n["new"](t),{calculate:function(t,n,r,i){var o,u,a,c,s,f,l;return c={x:{start:e.left(),end:e.left()+e.width()},y:{start:e.top(),end:e.top()+e.height()}},u={x:{start:t,end:t+r},y:{start:n,end:n+i}},o={x:this.intersect(u.x,c.x),y:this.intersect(u.y,c.y)},l=o.x.start-o.x.end,s=o.y.start-o.y.end,f=l*s,a=r*i,0===a?0:f/a},intersect:function(t,n){return t.end<t.start||n.end<n.start||n.end<t.start||t.end<n.start?{start:0,end:0}:{start:Math.max(n.start,t.start),end:Math.min(t.end,n.end)}}}};var Lr;Lr=function(t,n,e){return{getId:function(){var r;return r=t.get("vid"),r||(r=n.generate()),t.set("vid",r,{expires:h(e()).add(30,"minutes")}),r}}};var Wr;Wr=function(t,n){var e,r;return e=null,r=!!t.get("id"),{setId:function(t){return e=t},getId:function(){return e||(e=t.get("id"))||(e=n.generate(),t.set("id",e)),e},setReturningUser:function(t){return r=t},isReturningUser:function(){return r}}};var Vr;Vr=function(t,n){var e;return e=S({playback:!0}),e.on("warning",function(e){return t.throwErrors?n.warn(e.toString()):void 0}),{on:e.on,push:function(t,n){return null==n&&(n={}),e.emit("warning",W(t,n))},reset:e.off}};var zr;zr=function(t,n,e,r,i,o){var u,a;return u=N("WindowObserver"),u.on("crash",n.stop),a=o["new"](t),B(t)["try"]("WindowObserver",function(){var t,o,c;return c=void 0,t=!1,o=function(){var a;return c?t=!0:(t=!1,u.emit("change"),a=Math.round(i/2+i/2*r.next()),c=e.delay(a,function(){return c.stop(),c=null,t&&o(),n.start()}))},u.attach(a,"resize",function(){return n.stop(),o()}),u.attach(a,"scroll",function(){return n.stop(),o()}),n.start(),u.attach(n,"event",function(){return u.emit("change")}),{on:u.on}})};var qr;qr=function(){return[8]};var Kr;Kr=function(){return window};var Fr;Fr=function(t,n){return a(t,n)};var Gr;Gr=function(){return"burtApi"};var Hr;Hr=function(){return"//m.burt.io/current.js"};var Yr;Yr=function(t){return t.document.domain.replace(/^www\./,"")};var Jr;Jr=function(){return{flushInstant:!1,throwErrors:!1,isInDevMode:function(){return this.flushInstant&&this.throwErrors},isInProdMode:function(){return!this.isInDevMode()},enableDevMode:function(){return this.flushInstant=!0,this.throwErrors=!0},enableProdMode:function(){return this.flushInstant=!1,this.throwErrors=!1}}};var Xr;Xr=function(t){return t.document};var Zr;Zr=function(){return window};var Qr;Qr=function(){var t;return t=N("unitApi",{eventEmitter:{playback:!0}}),{register:function(n,e){return t.emit("register",n,e)},on:t.on}};var ti;ti=function(){return{major:1,minor:17,patch:0,preReleaseId:"BS",toString:function(){var t;return t="x"+this.major+"."+this.minor+"."+this.patch,null!=this.preReleaseId&&(t+="-"+this.preReleaseId),t}}};var ni,u=[].slice;ni=function(t,n,e,r,i,o){var a;return a=t.uid||n.generate(),o["try"](a,function(){var n,o,c,s;return c=N("ApiUnit",{eventEmitter:{playback:!0}}),c.on("crash",e.push),s=void 0,n={getName:function(){return t.name||(s?s.meta.name:void 0)},getMeta:function(){return t},getNode:function(){return s?s.node.node:void 0},annotate:function(t,n,e){return c.emit("annotation",{scope:t,name:n,value:e})
},connect:function(t,n,e){return c.emit("connection",{scope:t,name:n,value:e})},setPreviewUrl:function(t){return s?s.addMeta({previewUrl:t,previewUrlSource:"api"}):void 0},fill:function(){return s&&!this.isFilled()?s.addMeta({filled:!0,filledSource:"api"}):void 0},isFilled:function(){return s?s.isFilled():!1},restart:function(t){return null==t&&(t={}),r.push(W.UNIT_RESTART_DEPRECATED),c.emit("restart",t)},stop:V(function(){return c.emit("stop")}),destroy:V(function(){return c.emit("stop")})},o=i.on("register",function(t,e){return n[t]=function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],e.apply(null,[a].concat(u.call(t)))}}),{on:c.on,api:n,meta:function(){var n;return n=E(t).clone(),null==n.uid&&(n.uid=a),n}(),setUnit:function(t){return s=t,s.on("stop",function(){return o.off()})}}})};var ei;ei=function(){var t;return t={},{"try":function(n,e){return null!=t[n]?t[n]:t[n]=e()}}};var ri;ri=function(t,n,e,r,i,u,a,c){var s,l,d,v,h,g,m,y,b,I,A,S;if(null==n&&(n={}),g={type:"ad",cloudKeys:[],connections:[],annotations:[]},d=p(),h=N("BurtUnit"),h.on("crash",e.push),h.on("crash",function(t){return"meta"===t.meta.lastScope?d.reject():void 0}),s=f(h),v=function(t){var n,e,r;r=[];for(n in t)e=t[n],r.push(e?C(g[n])?g[n]=g[n].concat(e):g[n]=e:void 0);return r},A=function(t){if(!t.match(/^[A-Z0-9]{12}$/))throw new L(L.INVALID_CLOUD_KEY,{cloudKey:t})},v(a["new"](t).getMetadata()),v(n),y=g.type,m=g.name,l=g.cloudKeys,S=g.xdiId,!m&&!S)throw new L(L.MISSING_NAME);return w(l).each(A),I=E(g).clone(),b=function(){switch(y){case"area":case"video":return r["new"](t,I);case"ad":return i["new"](t,I);case"xdi":return u["new"](t,I);default:throw new L(L.UNKNOWN_UNIT_TYPE,{type:y})}}(),b.addHook("ready",d.promise()),s.attach(b,"almost-ready",function(){return c["new"](t).find(h("meta",function(t){var n,e,r;return t.each(function(t){return v(a["new"](t).getMetadata())}),l=g.cloudKeys,e=g.connectProvider,n=g.connectId,r=g.connectValue,w(l).each(A),w(E(g)["delete"]("connections")||[]).each(b.connect),w(E(g)["delete"]("annotations")||[]).each(b.annotate),b.addMeta(E(g).clone()),d.resolve()}))}),o(b,{stop:function(){return h.off(),s.off()}})};var ii;ii=function(t,n){return{find:function(e){var r,i,o;return r=t.find(".burt-unit-metadata"),i=p(),i.promise().then(function(){return e(r)}),o=t.find("IFRAME").select(function(t){return n["new"](t).isAccessible()}),o.size()>0?s(o.map("loaded")).then(function(){return o.each(function(t){var e;return e=n["new"](t),e.find(".burt-unit-metadata").each(r.push)}),i.resolve()}):i.resolve()}}};var oi;oi=function(t){var n,e;return n=function(n){return t.dataAttr(n)},e=function(t){var e,r,i,o;return r=n(""+t+"-scope"),e=n(""+t+"-name"),i=n(""+t+"-value"),o=n(""+t+"-values"),r&&e&&(i||o)?[{scope:r,name:e,value:i||q(o).toArray(),source:"span"}]:void 0},{getMetadata:function(){var t,r;return r={name:n("name"),type:n("type"),xdiId:n("xdi-id"),connectProvider:n("connect-provider"),connectId:n("connect-id"),filled:n("filled")&&"true"===n("filled"),sticky:"true"===n("sticky"),previewUrl:n("preview-url"),cloudKeys:(t=n("cloud-keys"))?q(t).toArray():void 0},$(r.connectProvider)&&$(r.connectId)&&(r.connectValue=n("connect-value")),r.connections=e("connect"),r.annotations=e("annotate"),r}}};var ui;ui=function(t){return{generate:function(){var n;return n=t.location.pathname.split("/"),n.length>=2?""===n[1]?"frontpage":n[1]:void 0}}};var ai;ai=function(t,n,e){var r,i,o;return null==e&&(e={}),r=N("UnitMatcher",{eventEmitter:{playback:!0}}),i=function(t){var e;return e=t.meta.name,w(n).isEmpty()?!0:w(n).any(function(n){if(P(n)){if(n===e)return!0;if(q(n).startsWith("#")&&t.node.hasId(n))return!0;if(q(n).startsWith(".")&&t.node.hasClass(n))return!0}else{if(O(n)&&e.match(n))return!0;if(T(n)&&t.node.equals(n))return!0}})},o=function(){return w(t.getUnits()).select(i)},t.on("unit",function(t){return!i(t)||t.meta.restarted&&!e.emitRestarted||t.isStopped()?void 0:r.emit("match",t)}),{on:r.on,matches:o}};var ci;ci=function(t,n,e,r,i,o){var u,a,c;return c=N("UnitTracker"),c.on("crash",n.push),a=o["new"](e.document),u=function(t,n){return null==n&&(n={}),c.emit("unit",r["new"](t,n))},{on:c.on,trackById:function(n,e){return null==e&&(e={}),t(c("ready-id",function(){var t;if(t=a.find("#"+n),!t)throw new L(L.MISSING_DOM_ID,{id:n});return u(t,e)}))},trackByNode:function(t,n){return null==n&&(n={}),u(i["new"](t),n)},trackByClass:function(n){return t(c("ready-class",function(){return a.find("."+n).each(c("each",u))}))}}};var si;si=function(t,n,e,r,i,u,a){var c,l,d,v,h,g,p,m,y,b,I,E;return null==n&&(n={}),y=w([]),d={},g=!1,b=e["new"](t,n),b.isFilled=function(){return g},h=N("AdUnit"),h.on("crash",b.emitError),p=void 0,m=0,l=f(h),c=function(){return y.any(function(t){return t.filled()})},v=function(n){var e,i,o,u,f;return null==n&&(n=!1),u=!1,o={},i=[],e=r.find(t),e.each(function(t){var n;return n=t.node.id(),o[n]=!0,d[n]?void 0:(i.push(t),y.push(t),b.addNode(t.node),d[n]=!0,u=!0)}),w(b.getNodes()).map("id").each(function(t){return o[t]?void 0:(b.removeNode(t),y.remove(function(n){return n.node.id()===t}),d[t]=void 0,u=!0)}),!g&&n&&c()&&(u=!0),n&&u?(a.stop(),f=s(w(i).map("loaded")),f.then(h("addedNodesLoaded",function(){return I(),b.ready(),a.start()}))):void 0},I=function(){return c()&&(p=r.getLargestNode(y))?(g=!0,b.meta.mediaType=p.mediaType(),b.meta.loadUrl=function(){var t,n;return t=p.loadUrl(),t&&(n=i["new"](t),n.encode().length>1400&&(t=n.normalize())),t}(),!p.loadUrl()&&p.wrapperUrl&&(b.meta.wrapperUrl=p.wrapperUrl()),b.meta.nodeCount=y.size()):void 0},l.attach(a,"event",function(){return v(!0)}),E=function(){return t.loaded().then(h("loaded",function(){return v(),I(),b.ready(),a.start(),b.emit("almost-ready")}))},b.on("added-meta",function(n){return(n.previewUrl||n.filled)&&(b.meta.loadUrl=void 0,b.meta.wrapperUrl=void 0),n.filled?(g=!0,b.addNode(t),a.stop(),b.ready(!1)):void 0}),u(h("domReady",function(){return E()})),o(b,{stop:function(){return h.off(),l.off(),a.stop()}})};var fi;fi=function(){return 20};var li;li=function(){return[1,2,4,8,15,20,25,30,90]};var di;di=function(t,n,e){return B(t)["try"]("Doc",function(){var r;return r=N("Doc"),{it:function(){return t},window:function(){return e["new"](t.defaultView||t.parentWindow)},find:function(e){return n["new"](t).find(e)},on:function(n,e){return"crash"===n?r.on("crash",e):c(t,n,e)},clientTop:function(){var n,e;return(null!=(n=t.documentElement)?n.clientTop:void 0)||(null!=(e=t.body)?e.clientTop:void 0)||0},clientLeft:function(){var n,e;return(null!=(n=t.documentElement)?n.clientLeft:void 0)||(null!=(e=t.body)?e.clientLeft:void 0)||0},addScript:function(n){var e;return(e=t.getElementsByTagName("script")[0])?e.parentNode.insertBefore(n.node,e):t.head.appendChild(n.node)}}})};var vi;vi=function(t,n,e,r,i){var o,u,a,c,s,f;return c=N("page",{eventEmitter:{playback:!0}}),c.on("crash",t.push),s=r["new"](),f=i["new"](),a=n.document,u=function(t){var n,e,r,i,o;return w(null!=(n=a.body)?n["scroll"+t]:void 0,null!=(e=a.body)?e["offset"+t]:void 0,null!=(r=a.documentElement)?r["client"+t]:void 0,null!=(i=a.documentElement)?i["scroll"+t]:void 0,null!=(o=a.documentElement)?o["offset"+t]:void 0).max()},o=null,c.on("pageview",function(t){return o=t}),{makePageview:function(){var t;return t=e["new"](),c.emit("pageview",t),t},currentPageview:function(){return o},width:function(){return u("Width")},height:function(){return u("Height")},screen:s,viewport:f,on:c.on}};var hi;hi=function(t,n,e,r,i){var o,u,a,c;return o=N("Pageview",{eventEmitter:{playback:!0}}),o.on("crash",n.push),a=!1,c=[],u=r.generate(),{on:o.on,getUrl:function(){return i["new"](this.meta.pageUrl||e.location.href)},addUnit:function(t){return c.push(t),o.emit("unit",t)},removeUnit:function(t){var n;return n=w(c).indexOf(t),n>-1?c.splice(n,1):void 0},meta:{},addMeta:function(t){return this.meta=E(this.meta).merge(t)},connect:function(t){return o.emit("connection",t)},annotate:function(t){return o.emit("annotation",t)},trackEvent:function(t,n){return o.emit("custom-event",t,n)},sync:function(n,e){return null==e&&(e={}),t(n,e,function(t,e){return o.emit("sync",n,t,e)})},getUnits:function(){return c},stop:function(){return o.emit("stop"),o.off(),a=!0,w(c).each(function(t){return t.meta.sticky?void 0:t.stop()})},getId:function(){return u},isStopped:function(){return a}}};var gi;gi=function(t){return{width:function(){return t.screen.width},height:function(){return t.screen.height}}};var pi;pi=function(t){var n,e;return n=t.document,e=function(t){return R(t)&&t>0},{top:function(){var e,r,i,o;return r=t.pageYOffset,R(r)?r:(i=null!=(o=n.documentElement)?o.scrollTop:void 0,R(i)?i:(e=n.body)?e.scrollTop:0)},left:function(){var e,r,i,o;return r=t.pageXOffset,R(r)?r:(i=null!=(o=n.documentElement)?o.scrollLeft:void 0,R(i)?i:(e=n.body)?e.scrollLeft:0)},width:function(){var r,i;return t.innerWidth||w(null!=(r=n.documentElement)?r.clientWidth:void 0,null!=(i=n.body)?i.clientWidth:void 0).first(e)||0},height:function(){var r,i;return t.innerHeight||w(null!=(r=n.documentElement)?r.clientHeight:void 0,null!=(i=n.body)?i.clientHeight:void 0).first(e)||0}}};var mi;mi=function(t,n){return B(t)["try"]("Win",function(){var e;return e=N("Win"),{it:function(){return t},document:function(){return n["new"](t.document)},on:function(n,r){return"crash"===n?e.on("crash",r):c(t,n,r)}}})};var yi;yi=function(){return{setId:function(t){this.id=t},setName:function(t){this.name=t},getId:function(){return this.id},getName:function(){return this.name}}};var wi;wi=function(t,n,e,r){var i,u,a;return null==n&&(n={}),u=e["new"](t,n),u.isFilled=function(){return!0},i=N("AreaUnit"),i.on("crash",u.emitError),u.addNode(t),a=function(){return t.loaded().then(i("loaded",function(){return u.ready()}))},r(i("domReady",a)),o(u,{stop:function(){return i.off()}})};var bi;bi=function(t,n,e,r,i,o){var u,a,c,s,l,d,v,h,g,p,y,b,I,A,S;for(null==n&&(n={}),s=N("Unit",{eventEmitter:{playback:!0}}),s.on("crash",e.push),u=f(s),h=!1,v=!1,l=D(),g=w([]),b=t.window.it(),d=null!=n.uid?n.uid:n.uid=o.generate(),p={node:t,getId:function(){return d},ready:function(t){return null==t&&(t=!0),!v&&this.isFilled()?(v=!0,s.emit("almost-ready"),t?l.await("ready").then(function(){return s.emit("ready")}):s.emit("ready")):void 0},isFilled:function(){throw new Error("Not implemented #isFilled")},getNodes:function(){return g.it()},addNode:function(t){return g.push(t),s.emit("addNode",t)},removeNode:function(t){var n;return n=g.remove(function(n){return n.id()===t}),n?s.emit("removeNode",n):void 0},isReady:function(){return v},meta:n,addMeta:function(t){var n,e,r;n={};for(e in t)r=t[e],C(r)&&0===r.length||this.meta[e]!==r&&(this.meta[e]=r,n[e]=r);return E(n).isEmpty()?void 0:(n.previewUrl&&this.connect({scope:"burt.creative",name:"preview-url",value:n.previewUrl}),s.emit("added-meta",n))},connect:function(t){return s.emit("connection",t)},annotate:function(t){return s.emit("annotation",t)},stop:function(t){return null==t&&(t={}),h=!0,u.off(),s.emit("stop",t),s.off(),y.stop()},isStopped:function(){return h}},m("addHook").from(l).to(p),m("on","emit","emitError").from(s).to(p),a=i["new"](g,b),m("geo","visibility").from(a).to(p),y=r["new"](p,b),S=["interaction","change","visible","invisible"],I=0,A=S.length;A>I;I++)c=S[I],u.delegate(y,c,{to:p});return p};var Ii;Ii=function(t,n,e,r,i){var o,u,a,c,s,l,d,v,h,g,p,m,y,w,b,I;return d=N("UnitObserver",{eventEmitter:{playback:!0}}),d.on("crash",e.push),u=f(d),a=A(),o=function(t,n,e){var r;return r=a["try"](t,function(){return f(d)}),r.attach(t,n,e)},w=function(t){return a.each(function(n,e){return!t||t&&t===n?e.off():void 0}),t?a.remove(t):a.clear()},p=function(){return w(),u.off()},b=i["new"](n),g=0,s=0,y=function(){return 0===g&&s>0},m=function(){return g>0&&0===s},I=function(){return g>0&&g!==s},c=function(n){return null==n&&(n=!1),s=t.visibility(),y()?d.emit("visible",s):m()?d.emit("invisible",s):I()?d.emit("change",s):n&&s>0&&d.emit("change",s),g=s},u.attach(r["new"](n),"change",c),l=function(t){var n,e;return e=0,n=0,t.pageX||t.pageY?(e=t.pageY,n=t.pageX):(t.clientX||t.clientY)&&(e=t.clientY+b.top(),n=t.clientX+b.left()),{top:e,left:n}},h=null,v=function(t,n,e){var r,i,o,u,a,c;return e!==h?(h=e,i=l(n,t),o=i.top,r=i.left,a=t.geo(),c=a.top,u=a.left,d.emit("interaction",e,{top:o-c,left:r-u})):void 0},u.attach(t,"addNode",function(t){return o(t,"click",function(n){return v(t,n,"click")}),o(t,"mouseover",function(n){return v(t,n,"mouseEnter")}),o(t,"mouseout",function(n){return v(t,n,"mouseExit")}),c(!0)}),u.attach(t,"removeNode",function(t){return w(t),c(!0)}),{on:d.on,stop:p}};var Ei;Ei=function(t,n,e){var r;return null==n&&(n={}),r=e["new"](t,n),r.isFilled=function(){return!0},r.addNode(t),r},Z.service("a0",cn),Z.service("a1",on),Z.service("a2",an,["t3n","e4a","a0","f45","d4f","s3w","W3u"]),Z.factory("A3",rn,["e4a","a2","a0","c48"]),Z.factory("A4",un,["b2n","A3","e4a"]),Z.factory("D5",sn,["e2o","s4q","b2n"]),Z.factory("D6",fn,["e4a","b2n","v3p","D7"]),Z.factory("D7",vn,["$50","$51","e4a","d8","p14"]),Z.service("d8",ln),Z.service("s9",Dn,["p4m"]),Z.service("ca",wn),Z.service("sb",Sn),Z.factory("Cc",yn,["$52","e4a","s3w","d4f","ca","r3k","c4u"]),Z.service("sd",Un,["jp","s9","c4u"]),Z.service("ce",pn,["Cc"]),Z.service("sf",bn,["sd","sm"]),Z.service("cg",bn,["ce","cn"]),Z.service("sh",Nn),Z.service("ci",gn),Z.service("sj",kn,["n47"]),Z.service("ck",hn,["n47"]),Z.service("nl",In),Z.service("sm",En,["s4q","n47","sh","sj","nl"]),Z.service("cn",En,["s4q","n47","ci","ck","nl"]),Z.service("so",An,["sf","r27"]),Z.service("jp",lr,["s3w","i4c","r3q"]),Z.factory("Cq",mn,["b2n","cg"]),Z.factory("Ar",xn,["A3"]),Z.factory("Us",Cn,["$53"]),Z.factory("Pt",Mn,["e4a","b2n","s4q","i4k","pw","pv","Pu"]),Z.factory("Pu",Rn,["$50","$51","e4a","w4b","t3n","pv"]),Z.service("pv",Tn,["s3w"]),Z.service("pw",_n,["p4m"]),Z.service("bx",Bn),Z.service("by",jn,["bx","jp","s4h"]),Z.service("bz",bn,["by","b12"]),Z.service("b10",Pn),Z.service("b11",On,["n47"]),Z.service("b12",En,["s4q","n47","b10","b11","nl"]),Z.service("b13",$n,["bz","s2r","v3p"]),Z.service("p14",Ln,["e4a","b13","d3o"]),Z.factory("P15",Wn,["b2n","p14"]),Z.factory("R16",ue,["$50","e4a","r27","R1e","R18","R1b","R1d","R17","R1a","R19","R1c","C1v","T26","P44","R2a","p4m","s2r"]),Z.factory("R17",oe,["$54","$55","$56","e4a","A3","A1h","E1i"]),Z.factory("R18",de,["$50","$55","$56","e4a","P1n","A1t","C1u"]),Z.factory("R19",ge,["$54","$55","$56","R1s","e4a","d3o"]),Z.factory("R1a",pe,["$54","$55","e4a","p1y","P1o"]),Z.factory("R1b",Ee,["$50","$55","e4a","S1q"]),Z.factory("R1c",Ie,["$55","p14","S1q"]),Z.factory("R1d",Ne,["$54","$55","$53","r27","e4a","r1w","P1r","F1l","E1k","P1p","A1t","C1u","R2b"]),Z.factory("R1e",ae,["$50","$55","e4a","E1j"]),Z.factory("F1f",Jn,["$57","s2r","v2k","v3p"]),Z.factory("F1g",Xn),Z.factory("A1h",Vn,["$54","$58","$59","p2s"]),Z.factory("E1i",Fn,["$59"]),Z.factory("E1j",Gn,["$50","$5a"]),Z.factory("E1k",Hn,["$5b","$58","$5c","p2s"]),Z.factory("F1l",Yn,["$54","$5b"]),Z.factory("F1m",Zn,["r20","r1z","a3x"]),Z.factory("P1n",Qn,["$50","$5d","p2s","d2q","p4n","r4g","v3p","l4v","t4w","v4x","R2c"]),Z.factory("P1o",te,["$54","p2s"]),Z.factory("P1p",ne,["$54","$5b","$59","p2s"]),Z.factory("S1q",ie,["$5e","$5f","$5g","$5h"]),Z.factory("P1r",ee,["$50","$53"]),Z.factory("R1s",re,["$54","$58","p2s"]),Z.factory("A1t",zn,["$5i","$5j"]),Z.factory("C1u",qn,["$5k","$5j"]),Z.factory("C1v",Kn,["$5l","$5m","$5n"]),Z.factory("r1w",_r,["r21","R3h"]),Z.factory("t1x",_r,["r24","N3i"]),Z.service("p1y",br,["r22","r23","R3h"]),Z.service("r1z",be),Z.service("r20",le),Z.service("r21",we),Z.service("r22",he),Z.service("r23",ve),Z.service("r24",ce),Z.service("r25",Ae),Z.factory("T26",Ue,["$50","e4a","t1x","r3q","F1m","F1f","F1g","e2o","c48"]),Z.service("r27",se,["c48","r3k"]),Z.factory("R28",ye,["S4y","Ar"]),Z.factory("R29",ke,["$53","c48","S4y","Ar","Us","O2h"]),Z.factory("R2a",me,["$50","e4a","p4n","v3p","s3w","R28","W3g","V2v","R2b","A3"]),Z.factory("R2b",Se,["$53","e4a","p2s","R29","S4y","A3"]),Z.factory("R2c",fe,["$5o","s2r"]),Z.factory("W2d",Te,["b2n","u38","e4a","t3n","W2e","A2f","V2g"]),Z.factory("W2e",Ce,["e4a","O2h"]),Z.factory("A2f",De,["$5p","A3","c48","e4a"]),Z.factory("V2g",xe,["$5p","$53","c48","e4a"]),Z.factory("O2h",J,["s3w"]),Z.factory("X2i",Ei,["$5q","$51","U2z"]),Z.factory("X2j",Me,["$50","s3w","e4a","A37"]),Z.service("v2k",ti),Z.service("b2l",Gr),Z.service("b2m",Er),Z.service("b2n",Fr,["s3w","b2l"]),Z.service("e2o",Jr),Z.service("c2p",Hr),Z.service("d2q",Ve),Z.service("s2r",yi),Z.service("p2s",vi,["e4a","s3w","P2t","S2u","V2v"]),Z.factory("P2t",hi,["so","e4a","s3w","r27","U3y"]),Z.factory("S2u",gi,["s3w"]),Z.factory("V2v",pi,["s3w"]),Z.factory("D2w",rr,["$5h","$59"]),Z.service("l2x",hr,["s3w"]),Z.factory("a2y",_r,["f3j","R3h"]),Z.factory("U2z",bi,["$5q","$51","e4a","U32","B3s","i4c"]),Z.factory("A30",wi,["$5r","$51","U2z","d4f","d3o"]),Z.factory("A31",si,["$5q","$51","U2z","a43","U3y","d4f","a2y","d3o"]),Z.factory("U32",Ii,["$53","$5s","e4a","W3g","V2v"]),Z.factory("U33",ci,["d4f","e4a","s3w","B34","D3z","D3t"]),Z.factory("B34",ri,["$5q","$51","e4a","A30","A31","X2i","B35","B36"]),Z.factory("B35",oi,["$5q"]),Z.factory("B36",ii,["$5q","I42"]),Z.factory("A37",ni,["$51","i4c","e4a","w4b","u38","a39"]),Z.service("u38",Qr),Z.service("a39",ei),Z.service("s3a",ui,["s3w"]),Z.factory("U3b",ai,["$50","$5t"]),Z.service("m3c",ze,["e4a","w4b","s3a","d4s","p2s","A37","U3b"]),Z.factory("L3d",dr,["e4a","s3w","b2n","f45","C4l"]),Z.service("w3e",qr),Z.factory("w3f",_r,["w3e","R3h"]),Z.factory("W3g",zr,["$5s","w3f","t3n","s3m","a1","W3u"]),Z.factory("R3h",Rr,["$5u","$5v","t3n","s3m"]),Z.factory("N3i",Rr,["$5u","$5v","t3n","c3l"]),Z.service("f3j",li),Z.service("r3k",xr,["a3x","m4d","c46","v2k","c48","t4w"]),Z.service("c3l",tr),Z.service("s3m",Or),Z.service("t3n",G,["a3x"]),Z.service("d3o",g,["a3x"]),Z.service("v3p",Wr,["p4n","r27"]),Z.service("r3q",Tr,["s3w","r3r","e4a","D3z","D3t"]),Z.service("r3r",Mr),Z.factory("B3s",Ze,["$5r","$5s","V4i"]),Z.factory("D3t",di,["$5w","D49","W3u"]),Z.factory("W3u",mi,["$5s","D3t"]),Z.service("s3v",Xr,["s3w"]),Z.service("s3w",Zr),Z.service("a3x",Kr),Z.factory("U3y",jr,["$5x","a3x"]),Z.factory("D3z",ir,["$5q","s3w","D3t","D3z","I42","I41","F40","D49","e4a","t3n","V2v"]),Z.factory("F40",pr,["$5y","t3n","e4a"]),Z.factory("I41",yr,["$5y","t3n","e4a"]),Z.factory("I42",mr,["$5y","t3n","e4a","h4j","a43","D3z"]),Z.factory("a43",Xe,["I41","F40","I42","e4a","m4t"]),Z.factory("P44",Ir,["t3n","e4a","s3w","s3v","D3t","W3u"]),Z.service("f45",ar,["a3x"]),Z.service("c46",nr),Z.service("n47",wr),Z.service("c48",d,["a3x"]),Z.factory("D49",or,["$5z","D3z"]),Z.service("e4a",ur,["d3o","e2o","l2x"]),Z.service("w4b",Vr,["e2o","l2x"]),Z.service("i4c",sr),Z.service("m4d",gr),Z.service("d4e",n),Z.service("d4f",e,["d4e"]),Z.service("r4g",Cr,["s3w","p4n","d2q","n47"]),Z.service("s4h",$r),Z.factory("V4i",Br,["$5s","V2v"]),Z.service("h4j",cr),Z.service("i4k",fr,["s3v","D3z","D3t"]),Z.factory("C4l",Qe,["b2n"]),Z.service("p4m",Dr,["s3w"]),Z.service("p4n",Ar,["s4q","c4o","b2m","r27","c48"]),Z.service("c4o",Nr,["s3w","d2q","c4r","f45"]),Z.service("c4p",Sr,["s3w"]),Z.service("s4q",Ur,["c4p"]),Z.service("c4r",kr),Z.service("d4s",Yr,["s3w"]),Z.service("m4t",fi),Z.service("c4u",er,["n47","a3x"]),Z.service("l4v",vr,["a3x"]),Z.service("t4w",Pr),Z.service("v4x",Lr,["p4n","r27","n47"]),Z.factory("S4y",K,["a3x"]),Z.service("m4z",Ke,["e4a","w4b","m3c","p2s","s2r","d3o","s3w","d2q","d4s","p14","t3n","r25","U33","U3b","A37","R16","Pt","D5","D6","A4","W2d","X2j","Cq","P15"]),Z.middleware(tn,["$60","e4a"]),Z.middleware(Q,["$60","s3w"]),Z.middleware(qe,["$60","b2n","m3c","v2k"]),Z.middleware(nn,["$60","b2n"]),Z.run("m4z")}).call(this);

// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"105",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof burtApi})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mediaid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return screen9.player.controllersList[0].config.mediainfo.title}catch(a){return ",["escape",["macro",1],8,16],"}})();"]
    },{
      "function":"__cid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.uniqueEventId"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_pageCounter\");a=a?JSON.parse(a):{latest:void 0,history:{}};var c=String(",["escape",["macro",4],8,16],");var b=",["escape",["macro",5],8,16],";\"pageview beta\"===b\u0026\u0026\"undefined\"===typeof a.history[c]?(b=\"undefined\"===typeof a.latest?0:a.history[a.latest]+1,a.history[c]=b,a.latest=c,google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.set(\"_pageCounter\",JSON.stringify(a))):b=a.history[a.latest];return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_originalPageType\");if(\"undefined\"===typeof a||\"(not set)\"===a)a=",["escape",["macro",7],8,16],",google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.set(\"_originalPageType\",a);return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.page"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_originalPage\");if(\"undefined\"===typeof a||\"(not set)\"===a)a=",["escape",["macro",9],8,16],",google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.set(\"_originalPage\",a);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_physicalPageId\");if(\"undefined\"===typeof a){for(a=\"\";6\u003Ea.length;)a=Math.floor(36*Math.random()).toString(36)+a;a=a.substring(0,6).toLowerCase();var b=Math.floor(Date.now()\/1E3).toString(36).toLowerCase();a=b+a;google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.set(\"_physicalPageId\",a)}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.segmentId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",13],8,16],".join(\", \")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(b,a){for(var c in b)if(b[c])for(var d in a)b[c].hasOwnProperty(a[d].name.toString())\u0026\u0026(b[c][\"dimension\".concat(a[d].index.toString())]=b[c].hasOwnProperty(a[d].name.toString())?b[c][a[d].name.toString()]:void 0,delete b[c][a[d].name.toString()]);return b}return function(b){var a=",["escape",["macro",15],8,16],";if(a){a=JSON.parse(JSON.stringify(a));for(var c in a)a[c].hasOwnProperty(\"products\")\u0026\u0026(a[c].products=e(a[c].products,b));a.hasOwnProperty(\"impressions\")\u0026\u0026(a.impressions=e(a.impressions,\nb));a.currencyCode=a.currencyCode||\"SEK\";return{ecommerce:a}}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articleTagLabelList"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],".join(\", \")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.flowName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"One-Click Campaigner Popup;Non-Campaigner Popup;UC Popup;Campaigner Popup;Subscription Page;Business Subscription Page;Campaigner;Adblock Paywall;Article Paywall;Popup Purchase Flow;Slide-up Paywall\".split(\";\");return a.includes(",["escape",["macro",19],8,16],")?",["escape",["macro",19],8,16],":\"Unnamed Flow\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoInfo.promoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"promoInfo.promoName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"promoInfo.promoCreative"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"promoInfo.promoPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"promoInfo.promoAction"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=void 0,b={id:",["escape",["macro",21],8,16],",name:",["escape",["macro",22],8,16],",creative:",["escape",["macro",23],8,16],",position:",["escape",["macro",24],8,16],"};\"Impression\"===",["escape",["macro",25],8,16],"?(a={ecommerce:{promoView:{promotions:[]}}},a.ecommerce.promoView.promotions.push(b)):\"Click\"===",["escape",["macro",25],8,16],"\u0026\u0026(a={ecommerce:{promoClick:{promotions:[]}}},a.ecommerce.promoClick.promotions.push(b));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b={startpage:\"Start Page\",homepage:\"Start Page\",sectionpage:\"Article List Page\",nyhetsdygn:\"Article List Page\",article:\"Article Page\",articlepage:\"Article Page\",inlinearticlepage:\"Article Page\",cnavarticlepagedata:\"Article Page\",comicspage:\"Comics List Page\",adhocpage:\"Ad Hoc Page\",authorpage:\"Article List Page\",nativead:\"Native Ad Page\",fullpage:\"Navigation Page\",meny:\"Navigation Page\",tagpage:\"Article List Page\",alltags:\"Tag List Page\",\"error-page\":\"Error Page\",\nbors:\"Stock Overview Page\",stockpage:\"Stock Page\",kalendariet:\"Event List Page\",kalendarietevent:\"Event Page\",calendarmainpage:\"Event List Page\",calendaritempage:\"Event Page\",login:\"Login Page\",quiz:\"Quiz Page\",quizpage:\"Quiz Page\",search:\"Search Page\",searchpage:\"Search Page\",sokpage:\"Search Page\",\"search overlay\":\"Search Page\",other:\"Information Page\",productpage:\"Information Page\",\"account page\":\"Account Settings Page\",settingspage:\"Account Settings Page\",newsletterlist:\"Newsletter List Page\",\nnewsletterspage:\"Newsletter List Page\",listoffers:\"Offer List Page\",feedpage:\"Article List Page\",foretag:\"Information Page\",telemarketing:\"Telemarketing Page\"};\"string\"!==typeof a||\"\"===a?a=\"(not set)\":\"undefined\"!=typeof b[a.toLowerCase()]\u0026\u0026(a=b[a.toLowerCase()]);return a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userInfo.anonymousGuid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userInfo.userId"
    },{
      "function":"__j",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var g=\"https:\/\/tracking.bonnier.news\/v1\/collect\/\",c=\"_\"+b.get(\"trackingId\")+\"_sendHitTask\",h=window[c]=window[c]||b.get(\"sendHitTask\");for(i=\"\";6\u003Ei.length;)i=Math.floor(36*Math.random()).toString(36)+i;eventId=i.substring(0,6).toLowerCase()+Math.floor(Date.now()\/1E3).toString(36).toLowerCase();google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.set(\"_hitId\",eventId);\"Pageview\"!==",["escape",["macro",5],8,16],"\u0026\u0026\"pageview beta\"!==",["escape",["macro",5],8,16],"||google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.set(\"_pageId\",\neventId);b.set(\"dimension78\",google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_pageId\"));b.set(\"sendHitTask\",function(c){var d=c.get(\"hitPayload\"),f={anonymous_user_id:",["escape",["macro",28],8,16],",user_id:",["escape",["macro",29],8,16],"};for(a in f)if(f.hasOwnProperty(a)){var e=f[a];\"\"!==e\u0026\u0026\"(not set)\"!==e\u0026\u0026\"undefined\"!==typeof e\u0026\u0026(d=d+\"\\x26\"+a+\"\\x3d\"+e)}var a=",["escape",["macro",30],8,16],".toLowerCase();a=\/samsungbrowser|crios|edge|gsa|instagram|fban|fbios\/.test(a);(a=navigator.sendBeacon\u0026\u0026!a)?navigator.sendBeacon(g,\nd):(a=new XMLHttpRequest,a.open(\"POST\",g,!0),a.send(d));if(\"true\"===b.get(\"doNotSendToGA\"))throw\"Aborted tracking for test user.\";h(c)})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.pageTitle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var a=[{pattern:\/^\\\/brandstudio\\\/.+\/,pageType:\"Native Ad Page\",mainSection:\"Brandstudio\",subsection:void 0},{pattern:\/^\\\/om\\\/$\/,pageType:\"Tag List Page\",mainSection:\"Om\",subsection:void 0},{pattern:\/^\\\/om\\\/.+\/,pageType:\"Article List Page\",mainSection:\"Om\",subsection:",["escape",["macro",32],8,16],"},{pattern:\/^\\\/av\\\/$\/,pageType:\"Profile List Page\",mainSection:\"Av\",subsection:void 0},{pattern:\/^\\\/av\\\/.+\/,pageType:\"Article List Page\",mainSection:\"Av\",subsection:",["escape",["macro",32],8,16],"},\n{pattern:\/^\\\/sok\\\/$\/,pageType:\"Search Page\",mainSection:\"S\\u00f6k\",subsection:void 0},{pattern:\/^\\\/orderverifieringtm\\\/.+\/,pageType:\"Telemarketing Page\",mainSection:\"Telemarketing\",subsection:void 0},{pattern:\/^\\\/foretag\\\/$\/,pageType:\"Subscription Promotion Page\",mainSection:\"Prenumeration\",subsection:\"F\\u00f6retag\"},{pattern:\/^\\\/app\\\/$\/,pageType:\"Information Page\",mainSection:\"Appar\",subsection:void 0},{pattern:\/^\\\/ekonomi\\\/sok-utbildning\\\/$\/,pageType:\"Education Overview Page\",mainSection:\"Ekonomi\",\nsubsection:\"S\\u00f6k utbildning\"},{pattern:\/^\\\/familj\\\/dodsannonser\\\/$\/,pageType:\"Obituary Page\",mainSection:\"Familj\",subsection:\"D\\u00f6dsannonser\"},{pattern:\/^\\\/kontakt\\\/$\/,pageType:\"Information Page\",mainSection:\"Kontakt\",subsection:void 0},{pattern:\/^\\\/utbud\\\/$\/,pageType:\"Navigation Page\",mainSection:\"Utbud\",subsection:void 0},{pattern:\/^\\\/val\\\/$\/,pageType:\"Ad Hoc Page\",mainSection:\"Val\",subsection:void 0},{pattern:\/^\\\/webbspel\\\/ord-pa-ord\\\/$\/,pageType:\"Game Page\",mainSection:\"Webbspel\",subsection:\"Ord p\\u00e5 ord\"},\n{pattern:\/^\\\/webbspel\\\/sudoku\\\/$\/,pageType:\"Game Page\",mainSection:\"Webbspel\",subsection:\"Sudoku\"},{pattern:\/^\\\/meny\\\/$\/,pageType:\"Navigation Page\",mainSection:\"Meny\",subsection:void 0},{pattern:\/^\\\/nyhetsbrev\\\/$\/,pageType:\"Newsletter List Page\",mainSection:\"Nyhetsbrev\",subsection:void 0},{pattern:\/^\\\/ekonomi\\\/bors\\\/$\/,pageType:\"Stock Overview Page\",mainSection:\"Ekonomi\",subsection:\"B\\u00f6rs\\u00f6versikt\"}];return a.find(function(a){return a.pattern.test(b)})}})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"gtmCategory"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"UNDEFINED",
      "vtp_name":"articleUrl"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",37],
      "vtp_defaultValue":["template","?",["macro",37]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",36],
      "vtp_defaultValue":["template",["macro",36],["macro",38]],
      "vtp_map":["list",["map","key","UNDEFINED","value","UNDEFINED"]]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["macro",39],
      "vtp_name":"url"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",40],
      "vtp_defaultValue":["macro",40],
      "vtp_map":["list",["map","key","UNDEFINED","value",["template",["macro",41],["macro",38]]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",33],8,16],"(window.location.pathname);return a=\"undefined\"!==typeof a?a.pageType:",["escape",["macro",27],8,16],"(",["escape",["macro",7],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articleAccessLevel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.isAutorefresh"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.authors"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articlePublishDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.browserHasAdblocker"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",48],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","Unknown","value","Searching"],["map","key","Yes","value","Active"],["map","key","No","value","Not found"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.pageId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"environmentInfo.brandLine"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"userInfo.loggedIn"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",52],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","true","value","Logged In"],["map","key","false","value","Logged Out"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"environmentInfo.brandName"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"DNApp"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"DNAppVersion"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",55],
      "vtp_defaultValue":"N\/A",
      "vtp_map":["list",["map","key","tablet","value",["macro",56]],["map","key","mobile","value",["macro",56]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"environmentInfo.isFailover"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articleIndex"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"userInfo.hasSubscription"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",60],
      "vtp_map":["list",["map","key","true","value","Subscriber"],["map","key","false","value","Non-Subscriber"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",52],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","false","value","Logged Out"],["map","key","true","value",["macro",61]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.displayEvent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"environmentInfo.environment"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",64],
      "vtp_defaultValue":["macro",64],
      "vtp_map":["list",["map","key","production","value","Production"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.mainSectionLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",66],8,16],",b=",["escape",["macro",33],8,16],"(window.location.pathname);return a=\"undefined\"!==typeof b?b.mainSection:a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.subSectionLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",68],8,16],",b=",["escape",["macro",33],8,16],"(window.location.pathname);a=\"undefined\"!==typeof b?b.subsection:a;\"undefined\"===typeof a\u0026\u0026(a=\"(not set)\");return a})();"]
    },{
      "function":"__r"
    },{
      "function":"__c",
      "vtp_value":"UA-6629581-1"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"],["map","fieldName","page","value",["macro",42]],["map","fieldName","customTask","value",["macro",31]],["map","fieldName","dataSource","value","web"]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",43]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",44]],["map","index","7","dimension",["macro",45]],["map","index","8","dimension",["macro",46]],["map","index","9","dimension",["macro",47]],["map","index","10","dimension",["macro",49]],["map","index","11","dimension",["macro",50]],["map","index","15","dimension",["macro",12]],["map","index","22","dimension",["macro",51]],["map","index","23","dimension",["macro",53]],["map","index","24","dimension",["macro",54]],["map","index","27","dimension",["macro",12]],["map","index","30","dimension",["macro",57]],["map","index","31","dimension",["macro",58]],["map","index","32","dimension",["macro",59]],["map","index","35","dimension",["macro",43]],["map","index","37","dimension",["macro",62]],["map","index","38","dimension",["macro",18]],["map","index","41","dimension",["macro",12]],["map","index","42","dimension",["macro",63]],["map","index","44","dimension",["macro",3]],["map","index","45","dimension",["macro",5]],["map","index","46","dimension",["macro",12]],["map","index","69","dimension",["macro",65]],["map","index","70","dimension",["macro",67]],["map","index","76","dimension",["macro",69]],["map","index","77","dimension",["macro",70]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"gtmAction"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"gtmLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"eventInfo.nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"video.time"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",80],
      "vtp_defaultValue":"Resume",
      "vtp_map":["list",["map","key","0","value","Play"],["map","key","-1","value","Preroll Play"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",79],
      "vtp_defaultValue":["macro",79],
      "vtp_map":["list",["map","key","resume","value",["macro",81]],["map","key","pause","value","Paused"],["map","key","finish","value","Finished"],["map","key","before-seek","value","seeked"]]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_stripWww":true,
      "vtp_component":"HOST",
      "vtp_customUrlSource":["macro",84],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",52],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","true","value","1"],["map","key","false","value","0"]]
    },{
      "function":"__c",
      "vtp_value":["template",["macro",34],":",["macro",73]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",73],
      "vtp_defaultValue":["macro",73],
      "vtp_map":["list",["map","key","Köp - Betalvägg","value","Köp - Betalvägg"],["map","key","Påtvingad Köp - Betalvägg","value","Köp - Påtvingad Betalvägg"],["map","key","köp - betalvägg","value","Köp - Betalvägg"],["map","key","påtvingad köp - betalvägg","value","Köp - Påtvingad Betalvägg"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order_campaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.flowName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.stepName"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",92],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","Autogiro Offer","value","true"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.experimentName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.experimentVariation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.stepName"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",97],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","Start","value","1"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",97],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","Purchase Receipt","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.product"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.flowId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.stepVariant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.flowVariant"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",16],8,16],"([{name:\"purchaseType\",index:54}])})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.context"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.paymentModule"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.timingVariable"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.paywallId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo.timingValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.linkType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.linkLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.socialTarget"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.socialAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.socialNetwork"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",25],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","Impression","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.tagLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.tagId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.linkContext"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.linkPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.linkTagId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.linkContentId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.timeEngaged"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"eventInfo.pageId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.mainSectionURISegment"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",41],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"BI_News",
      "vtp_ignoreCase":false,
      "vtp_map":["list",["map","key","^\/kultur-noje\/","value","BI_ArtsEntertainment"],["map","key","^\/ekonomi\/motor\/","value","BI_Automotive"],["map","key","^\/ekonomi\/jobb-karriar\/","value","BI_Career"],["map","key","^\/ekonomi\/sokjobb\/","value","BI_Career"],["map","key","^\/ekonomi\/sok-utbildning\/","value","BI_Education"],["map","key","^\/ekonomi\/","value","BI_Business"],["map","key","^\/mat-dryck\/","value","BI_FoodDrink"],["map","key","^\/ledare\/","value","BI_LawGovermentPolitics"],["map","key","^\/debatt\/","value","BI_LawGovermentPolitics"],["map","key","^\/sport\/","value","BI_Sport"],["map","key","^\/resor\/","value","BI_Travel"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",48],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","Yes","value","true"],["map","key","No","value","false"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",64],
      "vtp_defaultValue":"true",
      "vtp_map":["list",["map","key","production","value","false"],["map","key","(not set)","value","(not set)"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",44],
      "vtp_defaultValue":"(not set)",
      "vtp_map":["list",["map","key","none","value","free"],["map","key","free","value","free"],["map","key","limited","value","limited"],["map","key","locked","value","locked"]]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"okänt",
      "vtp_name":"loggedIn"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"weight"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articleIsNative"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articlePublishTime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articleTagIdList"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.articleTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"environmentInfo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"environmentInfo.version"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.httpStatusCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageInfo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.subSectionURISegment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"pageInfo.isStandalone"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"userInfo"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",73],
      "vtp_defaultValue":["macro",73],
      "vtp_map":["list",["map","key","Gått in i betalväggen","value","Hit the Paywall"],["map","key","Påtvingad Gått in i betalväggen","value","Forced Hit the Paywall"],["map","key","Köp - betalvägg","value","Paywall purchase"],["map","key","Påtvingad Köp - betalvägg","value","Forced Paywall purchase"],["map","key","Påbörjat köp","value","Initiated purchase"],["map","key","Påtvingad Påbörjat köp","value","Forced Initiated purchase"],["map","key","Besökt låst artikel","value","Visited locked article"],["map","key","Påtvingad Besökt låst artikel","value","Forced Visited locked article"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",60],
      "vtp_defaultValue":"partialaccess",
      "vtp_map":["list",["map","key","true","value","fullaccess"],["map","key","false","value","partialaccess"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventInfo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"userInfo.isAutoSsoLogin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"flowInfo.period"
    },{
      "function":"__c",
      "vtp_value":["template",["macro",103],":",["macro",97]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",149],
      "vtp_map":["list",["map","key","Frequence Locked:Start","value","Hit the Paywall"],["map","key","Hard Locked:Start","value","Forced Hit the Paywall"],["map","key","Frequence Locked:Purchase Receipt","value","Paywall purchase"],["map","key","Hard Locked:Purchase Receipt","value","Forced Paywall purchase"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"flowInfo"
    }],
  "tags":[{
      "function":"__html",
      "priority":99999,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{document.gtmEngagement.previousPageId=google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_pageId\"),document.gtmEngagement.virtualPageView(),console.log(document.gtmEngagement.previousPageId)}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__ua",
      "priority":9999,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_metric":["list",["map","index","3","metric",["macro",87]]],
      "vtp_gaSettings":["macro",72],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Page View - All Pages"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":77
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",34],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",73],
      "vtp_eventLabel":["macro",74],
      "vtp_dimension":["list",["map","index","46","dimension","GA - AB Test"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",75],
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",76],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["macro",78],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Event Passthrough"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":60
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","true"]],
      "vtp_eventCategory":"OTHER",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"eCommerce",
      "vtp_eventLabel":"eCommerce",
      "vtp_dimension":["list",["map","index","46","dimension","GA - E-commerce Forward"]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":61
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",82],
      "vtp_eventLabel":["macro",2],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Video"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template","Click to ",["macro",86]],
      "vtp_eventLabel":["macro",84],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Outbound Links"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":76
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Konvertering",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",89],
      "vtp_eventLabel":["template","Betalvägg - ",["macro",74]],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Paywall - Conversion"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":78
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Inventory",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",73],
      "vtp_eventLabel":["template","Betalvägg - ",["macro",74]],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Paywall - Inventory"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":79
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",90]]],
      "vtp_trackType":"TRACK_TRANSACTION",
      "vtp_gaSettings":["macro",72],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Paywall - Transaction"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTransaction":true,
      "tag_id":81
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",93],
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Account Settings",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template",["macro",91]," - ",["macro",94]],
      "vtp_eventLabel":["macro",92],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Account Settings - Overlay"],["map","index","50","dimension",["macro",14]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":100
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"AB-test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",95],
      "vtp_eventLabel":["macro",96],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Experiment"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":101
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Article Paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric",["macro",98]],["map","index","4","metric",["macro",99]]],
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"Impression",
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Article Paywall - Impression"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":102
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",104],
      "vtp_eventCategory":"Article Paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric",["macro",98]],["map","index","4","metric",["macro",99]]],
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"Impression",
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Article Paywall - Impression with Ecommerce"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":103
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template",["macro",105]," ",["macro",106]],
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Purchase Flow - Interaction"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template",["macro",101]," - Impression"],
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Purchase Flow - Popup Impression"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":106
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",104],
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template",["macro",101]," - Impression"],
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Purchase Flow - Popup Impression with Ecommerce"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":107
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","sampleRate","value","1"]],
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["macro",107],
      "vtp_gaSettings":["macro",72],
      "vtp_timingCategory":"Paywall Performance",
      "vtp_timingVar":["macro",108],
      "vtp_dimension":["list",["map","index","27","dimension",["macro",109]],["map","index","46","dimension","GA - Paywall Performance"]],
      "vtp_timingValue":["macro",110],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":110
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"Impression",
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Purchase Flow - Impression"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":111
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",104],
      "vtp_eventCategory":["macro",20],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"Impression",
      "vtp_eventLabel":["macro",97],
      "vtp_dimension":["list",["map","index","34","dimension",["macro",100]],["map","index","46","dimension","GA - Purchase Flow - Impression with Ecommerce"],["map","index","51","dimension",["macro",101]],["map","index","52","dimension",["macro",102]],["map","index","53","dimension",["macro",103]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":112
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template",["macro",111]," Click"],
      "vtp_eventLabel":["macro",112],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Menu Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":114
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template",["macro",113]," ",["macro",114]],
      "vtp_eventLabel":["macro",115],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Social"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":115
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",116],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",26],
      "vtp_eventCategory":"Internal Promotion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":["template",["macro",24]," ",["macro",25]],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Internal Promotion"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Watchlist",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",117],
      "vtp_eventLabel":["macro",118],
      "vtp_dimension":["list",["map","index","80","dimension",["macro",119]],["map","index","46","dimension","GA - Watchlist - Save Article"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":117
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Watchlist",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["template","Article Link Click - ",["macro",120]],
      "vtp_eventLabel":["macro",121],
      "vtp_dimension":["list",["map","index","75","dimension",["macro",122]],["map","index","80","dimension",["macro",123]],["map","index","46","dimension","GA - Watchlist Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":118
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","doNotSendToGA","value","true"]],
      "vtp_eventCategory":"Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":"Active Duration",
      "vtp_eventLabel":["macro",124],
      "vtp_dimension":["list",["map","index","78","dimension",["macro",125]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":120
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Watchlist",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",72],
      "vtp_eventAction":["macro",117],
      "vtp_eventLabel":["macro",118],
      "vtp_dimension":["list",["map","index","46","dimension","GA - Watchlist - Follow Subject or Author"],["map","index","75","dimension",["macro",119]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8977820_86",
      "tag_id":123
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg style=\"display: none\" src=\"https:\/\/inviso.rampanel.com\/ram\/Inviso?i=15799\u0026amp;c=80\u0026amp;n=dnse\u0026amp;cg=1\u0026amp;r=1\u0026amp;rdir=1\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":86
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _cInfo=_cInfo||[];(function(){if(null===document.cookie.match(\"__codnt\")){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/analytics.codigo.se\/j\/ec4d2cb730074fc6b0f285b35d1346df.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":87
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _cInfo=_cInfo||[];(function(){var b=",["escape",["macro",67],8,16],",c=",["escape",["macro",69],8,16],",a=\"\/error\";\"Error Page\"==",["escape",["macro",43],8,16],"?a=\"\/404\":\"string\"===typeof b\u0026\u0026\"(not set)\"!==b\u0026\u0026(a=\"\/\"+b,\"string\"===typeof c\u0026\u0026\"(not set)\"!==c\u0026\u0026(a+=\"\/\"+c));null===document.cookie.match(\"__codnt\")\u0026\u0026window._cInfo.push({cmd:\"_trackContentPath\",val:a},{cmd:\"_executeTracking\"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _cInfo=_cInfo||[];(function(){null===document.cookie.match(\"__codnt\")\u0026\u0026window._cInfo.push({cmd:\"_trackContentPath\",val:\"\/playtv\/\"+",["escape",["macro",126],8,16],"},{cmd:\"_executeTracking\"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function a(a){return\"undefined\"!==typeof a\u0026\u0026\"(not set)\"!==a\u0026\u0026\"(not_set)\"!==a?String(a):\"\"}function c(a,b,c,d){\"\"!==c\u0026\u0026\"{}\"!==c\u0026\u0026d.annotate(a,b,c)}function k(a){var b={};a.forEach(function(a){for(var c in a)if(a.hasOwnProperty(c)){var e=a[c];\"\"!==e\u0026\u0026(b[c]=e)}});return b}function h(a){return a.toLowerCase().replace(\/\\u00e5\/g,\"a\").replace(\/\\u00e4\/g,\"a\").replace(\/\\u00f6\/g,\"o\").replace(\/[^a-z0-9_]\/g,\"_\")}window.burtApi=window.burtApi||[];try{window.burtApi.push(function(g){\"Page load\"!==",["escape",["macro",63],8,16],"\u0026\u0026\ng.stopTracking();g.startTracking(function(b){b.setTrackingKey(\"DN059BPN618Z\",\"dn\");b.setDomain(\"dn.se\");b.addCloudKey(\"INS8GFMRVMI1\");b.setDemographicsProvider(\"cint\");var g=a(",["escape",["macro",27],8,16],"(",["escape",["macro",7],8,16],")),d=\"\",e=\"\",f=\"\",l=\"\";a(",["escape",["macro",66],8,16],")\u0026\u0026(d=h(",["escape",["macro",66],8,16],"),\"nyheter\"===d\u0026\u0026\"\/\"===",["escape",["macro",41],8,16],"\u0026\u0026(d=\"frontpage\"),\"kultur\"===d\u0026\u0026(d=\"kultur-noje\"),f=\"dn|dn_se|\"+d,a(",["escape",["macro",68],8,16],")\u0026\u0026(e=h(",["escape",["macro",68],8,16],"),l=f+\"|\"+e));c(\"burt.content\",\"tags\",[",["escape",["macro",127],8,16],",\n\"dn\",\"dn|dn_se\",f,l].filter(Boolean),b);f=a(",["escape",["macro",29],8,16],");\"\"!==f\u0026\u0026\"{}\"!==f\u0026\u0026b.connect(\"burt.beacon\",\"serviceplus-id\",f);b.setCategory(d,e);0\u003C=g.indexOf(\"Article Page\")\u0026\u0026b.connect(\"bonnier.content\",\"nerd-article-id\",a(",["escape",["macro",50],8,16],"),b);c(\"content\",\"brand\",JSON.stringify(k([{brand_parent:\"dn\"},{brand_child:\"dn_se\"}])),b);c(\"content\",\"id\",JSON.stringify(k([{content_id:a(",["escape",["macro",50],8,16],")},{content_desc:a(",["escape",["macro",50],8,16],")?\"nav\":\"\"}])),b);c(\"client\",\"logged_in_data\",JSON.stringify(k([{login_id:a(",["escape",["macro",29],8,16],")},\n{login_system:a(",["escape",["macro",29],8,16],")?\"serviceplus\":\"\"}])),b);c(\"client\",\"adblock\",a(",["escape",["macro",128],8,16],"),b);c(\"client\",\"anonymous_user_id\",a(",["escape",["macro",28],8,16],"),b);c(\"content\",\"is_test_env\",a(",["escape",["macro",129],8,16],"),b);c(\"client\",\"is_subscriber\",a(",["escape",["macro",60],8,16],"),b);c(\"content\",\"category\",d,b);c(\"content\",\"sub_category\",e,b);c(\"content\",\"page_type\",h(g),b);c(\"client\",\"user_logged_in\",a(",["escape",["macro",52],8,16],"),b);c(\"content\",\"content_access_restriction\",h(a(",["escape",["macro",130],8,16],")),\nb);Number.isInteger(",["escape",["macro",59],8,16],")\u0026\u0026c(\"content\",\"page_index\",String(",["escape",["macro",59],8,16],"+1),b)})})}catch(g){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":95
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=\"\";\"Hard Locked\"===",["escape",["macro",103],8,16],"?a=\"Forced Hit the Paywall\":\"Frequence Locked\"===",["escape",["macro",103],8,16],"\u0026\u0026(a=\"Hit the Paywall\");window.burtApi=window.burtApi||[];window.burtApi.push(function(b){b.annotate(\"content\",\"paywall_impression\",JSON.stringify({paywall_id:a,paywall_type:a+\" - \"+",["escape",["macro",101],8,16],"}))})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":108
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=\"\";\"Hard Locked\"===",["escape",["macro",103],8,16],"?a=\"Forced Paywall purchase\":\"Frequence Locked\"===",["escape",["macro",103],8,16],"\u0026\u0026(a=\"Paywall purchase\");window.burtApi=window.burtApi||[];window.burtApi.push(function(b){b.annotate(\"content\",\"paywall_result\",JSON.stringify({paywall_id:a,paywall_type:a+\" - \"+",["escape",["macro",101],8,16],"}))})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c,e,h,f,g,d,k,l=function(){c=!0;e=h=f=g=d=k=void 0;clearTimeout(h)},a=function(a,b){window.addEventListener?window.addEventListener(a,b):window.attachEvent\u0026\u0026window.attachEvent(\"on\"+a,b)},m=function(a){c||(f=(new Date).getTime(),g=f-e,\"number\"===typeof g\u0026\u00260\u003Cg\u0026\u002611E3\u003Ef-k\u0026\u0026window.dataLayer.push({event:\"Engaged Time\",eventInfo:{idleStartTime:f,timeEngaged:g,eventType:a,engagedStartTime:e,pageId:\"virtual pageview\"===a?document.gtmEngagement.previousPageId:google_tag_manager[",["escape",["macro",3],8,16],"].dataLayer.get(\"_pageId\")}}));\nl();c=!0},b=function(a){d=(new Date).getTime();\"visibilitychange\"===a.type\u0026\u0026\"hidden\"===document.visibilityState?m(a.type):(c?(e=d,c=!1):1E4\u003Cd-k\u0026\u0026(l(),e=d,c=!1),clearTimeout(h),h=window.setTimeout(m,1E4,a.type),k=d)};document.gtmEngagement={};document.gtmEngagement.virtualPageView=function(){m(\"virtual pageview\");l()};l();a(\"mousedown\",b);a(\"keydown\",b);a(\"scroll\",b);a(\"mousemove\",b);a(\"beforeunload\",b);a(\"visibilitychange\",b);a(\"popstate\",b);a(\"pushstate\",b);a(\"wheel\",b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":119
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"AB-test"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"trackEvent"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Google Analytics Event"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"eCommerceAction"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"video-action"
    },{
      "function":"_eq",
      "arg0":["macro",79],
      "arg1":"seek"
    },{
      "function":"_re",
      "arg0":["macro",83],
      "arg1":"^https?:\\\/\\\/([^\\\/\\.]*\\.)?dn\\.se.*"
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":".*javascript:void.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^https?:\\\/\\\/([^\\\/\\.]*\\.)?dn\\.se.*",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",84],
      "arg1":"mailto:"
    },{
      "function":"_sw",
      "arg0":["macro",84],
      "arg1":"javascript:"
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":"^\\\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",84],
      "arg1":".*[a-zA-Z].*"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"(^$|((^|,)8977820_86($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Pageview"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"Konvertering:.*Köp - betalvägg",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"Inventory:.*(Gått in i betalväggen|Besökt låst artikel)"
    },{
      "function":"_cn",
      "arg0":["macro",91],
      "arg1":"Change to Autogiro"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Overlay"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"AB-test"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"Article Paywall"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Flow Impression"
    },{
      "function":"_eq",
      "arg0":["macro",97],
      "arg1":"OCU Confirmation"
    },{
      "function":"_eq",
      "arg0":["macro",97],
      "arg1":"Purchase Receipt"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Flow Interaction"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"Popup"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Paywall Performance"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Menu Click"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Social Event"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Internal Promotion"
    },{
      "function":"_re",
      "arg0":["macro",117],
      "arg1":"Save Article",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Watchlist"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Watchlist Click"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Engaged Time"
    },{
      "function":"_re",
      "arg0":["macro",117],
      "arg1":"follow",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Critical Content Loaded"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"Virtual"
    },{
      "function":"_cn",
      "arg0":["macro",82],
      "arg1":"Play"
    },{
      "function":"_eq",
      "arg0":["macro",97],
      "arg1":"Start"
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"Flow Impression"
    }],
  "rules":[
    [["if",0,1],["add",2]],
    [["if",2],["add",3]],
    [["if",3],["add",4]],
    [["if",4],["add",5]],
    [["if",6,12,13,14],["unless",7,8,9,10,11],["add",6]],
    [["if",15],["add",1,32,35]],
    [["if",1,16],["add",7,9]],
    [["if",1,17],["add",8]],
    [["if",18,19],["add",10]],
    [["if",20],["add",11]],
    [["if",21,22],["add",12],["block",18,19]],
    [["if",21,22,24],["add",13]],
    [["if",21,22,23],["add",13]],
    [["if",25],["add",14]],
    [["if",22,26],["add",15],["block",18,19]],
    [["if",22,24,26],["add",16]],
    [["if",27],["add",17]],
    [["if",22],["add",18]],
    [["if",22,24],["add",19],["block",12,15,18]],
    [["if",28],["add",20]],
    [["if",29],["add",21]],
    [["if",30],["add",22]],
    [["if",31,32],["add",23]],
    [["if",33],["add",24]],
    [["if",34],["add",25]],
    [["if",32,35],["add",26]],
    [["if",36],["add",27]],
    [["if",37],["add",28,29,30]],
    [["if",15,38],["add",30,0]],
    [["if",4,39],["add",31]],
    [["if",21,22,40],["add",33]],
    [["if",21,24,41],["add",34]],
    [["if",4,5],["block",5]],
    [["if",22,23],["block",12]]]
},
"runtime":[
[],[]
]



};
var aa,da=this||self,ea=function(a){return"boolean"==typeof a},fa=/^[\w+/_-]+[=]{0,2}$/,ha=null;var ia=function(){},ja=function(a){return"function"==typeof a},ka=function(a){return"string"==typeof a},la=function(a){return"number"==typeof a&&!isNaN(a)},ma=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},pa=function(a,b){if(a&&ma(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},qa=function(a,b){if(!la(a)||
!la(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},sa=function(a,b){for(var c=new ra,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ua=function(a){return Math.round(Number(a))||0},va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=function(a){var b=[];if(ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},xa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},ya=function(){return(new Date).getTime()},ra=function(){this.prefix="gtm.";this.values={}};ra.prototype.set=function(a,b){this.values[this.prefix+a]=b};ra.prototype.get=function(a){return this.values[this.prefix+a]};ra.prototype.contains=function(a){return void 0!==this.get(a)};
var za=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Aa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Da=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ea=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Fa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ga=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ha=function(a){if(null==a)return String(a);var b=Ga.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ia=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ja=function(a){if(!a||"object"!=Ha(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ia(a,"constructor")&&!Ia(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ia(a,b)},f=function(a,b){var c=b||("array"==Ha(a)?[]:{}),d;for(d in a)if(Ia(a,d)){var e=a[d];"array"==Ha(e)?("array"!=Ha(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ja(e)?(Ja(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};
var Ka=[],La={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ma=function(a){return La[a]},Na=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ua=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Va={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Wa=function(a){return Va[a]};
Ka[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ua,Wa)+"'"}};var db=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,eb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},fb=function(a){return eb[a]};Ka[16]=function(a){return a};var ib=[],jb=[],kb=[],lb=[],mb=[],ob={},pb,qb,rb,sb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},tb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!ob[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?ob[c](e):(void 0)(c,e,b)},vb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ub(a[e],b,c));return d},
wb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=ob[b];return c?c.priorityOverride||0:0},ub=function(a,b,c){if(ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ub(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=ib[g];if(!h||b.Bc(h))return;c[g]=!0;try{var k=vb(h,b,c);k.vtp_gtmEventId=b.id;d=tb(k,b);rb&&(d=rb.Ff(d,k))}catch(w){b.be&&b.be(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[ub(a[l],b,c)]=ub(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=ub(a[n],b,c);qb&&(m=m||q===qb.xb);d.push(q)}return qb&&m?qb.If(d):d.join("");case "escape":d=ub(a[1],b,c);if(qb&&ma(a[1])&&"macro"===a[1][0]&&qb.jg(a))return qb.vg(d);d=String(d);for(var t=2;t<a.length;t++)Ka[a[t]]&&(d=Ka[a[t]](d));return d;case "tag":var p=a[1];if(!lb[p])throw Error("Unable to resolve tag reference "+p+".");return d={Od:a[2],index:p};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=xb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},xb=function(a,b,c){try{return pb(vb(a,b,c))}catch(d){JSON.stringify(a)}return null};var yb=function(){var a=function(b){return{toString:function(){return b}}};return{ed:a("convert_case_to"),fd:a("convert_false_to"),gd:a("convert_null_to"),hd:a("convert_true_to"),jd:a("convert_undefined_to"),dh:a("debug_mode_metadata"),la:a("function"),Te:a("instance_name"),Ue:a("live_only"),Ve:a("malware_disabled"),We:a("metadata"),fh:a("original_vendor_template_id"),Xe:a("once_per_event"),Cd:a("once_per_load"),Dd:a("setup_tags"),Ed:a("tag_id"),Fd:a("teardown_tags")}}();var zb=null,Cb=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];zb=Ab(a);for(var e=0;e<jb.length;e++){var g=jb[e],h=Bb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<lb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=zb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=zb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Ab=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=xb(kb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
for(var Fb="floor ceil round max min abs pow sqrt".split(" "),Gb=0;Gb<Fb.length;Gb++)Math.hasOwnProperty(Fb[Gb]);var u=window,C=document,Hb=navigator,Ib=C.currentScript&&C.currentScript.src,Jb=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},Kb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Lb=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Kb(d,b);c&&(d.onerror=c);var e;if(null===ha)b:{var g=da.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ha=k;break b}}ha=""}e=ha;e&&d.setAttribute("nonce",e);var l=C.getElementsByTagName("script")[0]||C.body||C.head;l.parentNode.insertBefore(d,l);return d},Mb=function(){if(Ib){var a=Ib.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Nb=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||
C.body||C.head;d.parentNode.insertBefore(c,d);Kb(c,b);void 0!==a&&(c.src=a);return c},Ob=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},D=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Pb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){u.setTimeout(a,0)},Qb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Rb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Sb=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Tb=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ub=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={$b:"event_callback",Na:"event_timeout",W:"gtag.config",P:"allow_ad_personalization_signals",S:"cookie_expires",Ma:"cookie_update",xa:"session_duration"};var ic=/[A-Z]+/,jc=/\s/,kc=function(a){if(ka(a)&&(a=xa(a),!jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],N:d}}}}},mc=function(a){for(var b={},c=0;c<a.length;++c){var d=kc(a[c]);d&&(b[d.id]=d)}lc(b);var e=[];ta(b,function(g,h){e.push(h)});return e};
function lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.N[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var nc={},oc=null,pc=Math.random();nc.i="GTM-PZ2FZGR";nc.Bb="941";var qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},rc="www.googletagmanager.com/gtm.js";var sc=rc,tc=null,uc=null,vc=null,wc="//www.googletagmanager.com/a?id="+nc.i+"&cv=105",xc={},zc={},Ac=function(){var a=oc.sequence||0;oc.sequence=a+1;return a};var Bc={},Cc=function(a,b){Bc[a]=Bc[a]||[];Bc[a][b]=!0},Dc=function(a){for(var b=[],c=Bc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Ec=function(){return"&tc="+lb.filter(function(a){return a}).length},Nc=function(){Fc&&(u.clearTimeout(Fc),Fc=void 0);void 0===Gc||Hc[Gc]&&!Ic||(Jc[Gc]||Kc.lg()||0>=Lc--?(Cc("GTM",1),Jc[Gc]=!0):(Kc.Gg(),Ob(Mc()),Hc[Gc]=!0,Ic=""))},Mc=function(){var a=Gc;if(void 0===a)return"";var b=Dc("GTM"),c=Dc("TAGGING");return[Oc,Hc[a]?"":"&es=1",Pc[a],b?"&u="+b:"",c?"&ut="+c:"",Ec(),Ic,"&z=0"].join("")},Qc=function(){return[wc,"&v=3&t=t","&pid="+qa(),"&rv="+nc.Bb].join("")},Rc="0.005000">
Math.random(),Oc=Qc(),Sc=function(){Oc=Qc()},Hc={},Ic="",Gc=void 0,Pc={},Jc={},Fc=void 0,Kc=function(a,b){var c=0,d=0;return{lg:function(){if(c<a)return!1;ya()-d>=b&&(c=0);return c>=a},Gg:function(){ya()-d>=b&&(c=0);c++;d=ya()}}}(2,1E3),Lc=1E3,Tc=function(a,b){if(Rc&&!Jc[a]&&Gc!==a){Nc();Gc=a;Ic="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Pc[a]="&e="+c+"&eid="+a;Fc||(Fc=u.setTimeout(Nc,500))}},Uc=function(a,b,c){if(Rc&&!Jc[a]&&b){a!==Gc&&(Nc(),Gc=a);var d=String(b[yb.la]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Ic=Ic?Ic+"."+e:"&tr="+e;Fc||(Fc=u.setTimeout(Nc,500));2022<=Mc().length&&Nc()}};var Vc={},Wc=new ra,Xc={},Yc={},bd={name:"dataLayer",set:function(a,b){f(Zc(a,b),Xc);$c()},get:function(a){return ad(a,2)},reset:function(){Wc=new ra;Xc={};$c()}},ad=function(a,b){if(2!=b){var c=Wc.get(a);if(Rc){var d=cd(a);c!==d&&Cc("GTM",5)}return c}return cd(a)},cd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:ed(d)},ed=function(a){for(var b=Xc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var hd=function(a,b){Yc.hasOwnProperty(a)||(Wc.set(a,b),f(Zc(a,b),Xc),$c())},Zc=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},$c=function(a){ta(Yc,function(b,c){Wc.set(b,c);f(Zc(b,void 0),Xc);f(Zc(b,c),Xc);a&&delete Yc[b]})},id=function(a,b,c){Vc[a]=Vc[a]||{};var d=1!==c?cd(b):Wc.get(b);"array"===Ha(d)||"object"===Ha(d)?Vc[a][b]=f(d):Vc[a][b]=d},jd=function(a,b){if(Vc[a])return Vc[a][b]};var kd=function(){var a=!1;return a};var J=function(a,b,c,d){return(2===ld()||d||"http:"!=u.location.protocol?a:b)+c},ld=function(){var a=Mb(),b;if(1===a)a:{var c=sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var zd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Ad={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Bd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Cd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ed=function(a){var b=ad("gtm.whitelist");b&&Cc("GTM",9);var c=b&&Fa(wa(b),Ad),d=ad("gtm.blacklist");d||(d=ad("tagTypeBlacklist"))&&Cc("GTM",3);
d?Cc("GTM",8):d=[];Dd()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=oa(wa(d),"google")&&Cc("GTM",2);var e=d&&Fa(wa(d),Bd),g={};return function(h){var k=h&&h[yb.la];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=zc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>oa(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>
oa(c,l[q])){Cc("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=oa(e,k);if(p)t=p;else{var r=sa(e,l||[]);r&&Cc("GTM",10);t=r}}var v=!m||t;v||!(0<=oa(l,"sandboxedScripts"))||c&&-1!==oa(c,"sandboxedScripts")||(v=sa(e,Cd));return g[k]=v}},Dd=function(){return zd.test(u.location&&u.location.hostname)};var Fd={Ff:function(a,b){b[yb.ed]&&"string"===typeof a&&(a=1==b[yb.ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(yb.gd)&&null===a&&(a=b[yb.gd]);b.hasOwnProperty(yb.jd)&&void 0===a&&(a=b[yb.jd]);b.hasOwnProperty(yb.hd)&&!0===a&&(a=b[yb.hd]);b.hasOwnProperty(yb.fd)&&!1===a&&(a=b[yb.fd]);return a}};var Gd={active:!0,isWhitelisted:function(){return!0}},Hd=function(a){var b=oc.zones;!b&&a&&(b=oc.zones=a());return b};var Id=!1,Jd=0,Kd=[];function Ld(a){if(!Id){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Id=!0;for(var e=0;e<Kd.length;e++)G(Kd[e])}Kd.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function Md(){if(!Id&&140>Jd){Jd++;try{C.documentElement.doScroll("left"),Ld()}catch(a){u.setTimeout(Md,50)}}}var Nd=function(a){Id?a():Kd.push(a)};var Od={},Pd={},Qd=function(a,b,c,d){if(!Pd[a]||qc[b]||"__zone"===b)return-1;var e={};Ja(d)&&(e=f(d,e));e.id=c;e.status="timeout";return Pd[a].tags.push(e)-1},Rd=function(a,b,c,d){if(Pd[a]){var e=Pd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Sd(a){for(var b=Od[a]||[],c=0;c<b.length;c++)b[c]();Od[a]={push:function(d){d(nc.i,Pd[a])}}}
var Vd=function(a,b,c){Pd[a]={tags:[]};ja(b)&&Td(a,b);c&&u.setTimeout(function(){return Sd(a)},Number(c));return Ud(a)},Td=function(a,b){Od[a]=Od[a]||[];Od[a].push(Aa(function(){return G(function(){b(nc.i,Pd[a])})}))};function Ud(a){var b=0,c=0,d=!1;return{add:function(){c++;return Aa(function(){b++;d&&b>=c&&Sd(a)})},pf:function(){d=!0;b>=c&&Sd(a)}}};var Wd=function(){function a(d){return!la(d)||0>d?0:d}if(!oc._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=la(bd.get("gtm.start"))?bd.get("gtm.start"):0;oc._li={cst:a(c-b),cbt:a(uc-b)}}};var $d=!1,ae=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},be=!1;
var ce=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||Cc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}Wd();return u[b]},de=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ae();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var fe=function(){},ee=function(){return u.GoogleAnalyticsObject||"ga"};var he=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ie=/:[0-9]+$/,je=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},me=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ke(a.protocol)||ke(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(ie,"").toLowerCase());var g=b,h,k=ke(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=le(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(ie,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Cc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=oa(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=je(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ke=function(a){return a?a.replace(":","").toLowerCase():""},le=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
ne=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Cc("TAGGING",1),c="/"+c);var d=b.hostname.replace(ie,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var te=function(a){};function se(a,b){a.containerId=nc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ue(a,b,c,d){var e=lb[a],g=ve(a,b,c,d);if(!g)return null;var h=ub(e[yb.Dd],c,[]);if(h&&h.length){var k=h[0];g=ue(k.index,{J:g,U:1===k.Od?b.terminate:g,terminate:b.terminate},c,d)}return g}
function ve(a,b,c,d){function e(){if(g[yb.Ve])k();else{var w=vb(g,c,[]),x=Qd(c.id,String(g[yb.la]),Number(g[yb.Ed]),w[yb.We]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var B=ya()-z;Uc(c.id,lb[a],"5");Rd(c.id,x,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var B=ya()-z;Uc(c.id,lb[a],"6");Rd(c.id,x,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;Uc(c.id,g,"1");var A=function(B){var E=ya()-z;te(B);Uc(c.id,g,"7");Rd(c.id,x,"exception",E);y||(y=!0,k())};var z=ya();try{tb(w,c)}catch(B){A(B)}}}var g=lb[a],h=b.J,k=b.U,l=b.terminate;if(c.Bc(g))return null;var m=ub(g[yb.Fd],c,[]);if(m&&m.length){var n=m[0],q=ue(n.index,{J:h,U:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.Od?l:q}if(g[yb.Cd]||g[yb.Xe]){var t=g[yb.Cd]?mb:c.Qg,p=h,r=k;if(!t[a]){e=Aa(e);var v=we(a,t,e);h=v.J;k=v.U}return function(){t[a](p,r)}}return e}
function we(a,b,c){var d=[],e=[];b[a]=xe(d,e,c);return{J:function(){b[a]=ye;for(var g=0;g<d.length;g++)d[g]()},U:function(){b[a]=ze;for(var g=0;g<e.length;g++)e[g]()}}}function xe(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ye(a){a()}function ze(a,b){b()};var Ce=function(a,b){for(var c=[],d=0;d<lb.length;d++)if(a.cb[d]){var e=lb[d];var g=b.add();try{var h=ue(d,{J:g,U:g,terminate:g},a,d);h?c.push({te:d,ie:wb(e),Qf:h}):(Ae(d,a),g())}catch(l){g()}}b.pf();c.sort(Be);for(var k=0;k<c.length;k++)c[k].Qf();return 0<c.length};function Be(a,b){var c,d=b.ie,e=a.ie;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.te,k=b.te;g=h>k?1:h<k?-1:0}return g}
function Ae(a,b){if(!Rc)return;var c=function(d){var e=b.Bc(lb[d])?"3":"4",g=ub(lb[d][yb.Dd],b,[]);g&&g.length&&c(g[0].index);Uc(b.id,lb[d],e);var h=ub(lb[d][yb.Fd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var De=!1,Ee=function(a,b,c,d,e){if("gtm.js"==b){if(De)return!1;De=!0}Tc(a,b);var g=Vd(a,d,e);id(a,"event",1);id(a,"ecommerce",1);id(a,"gtm");var h={id:a,name:b,Bc:Ed(c),cb:[],Qg:[],be:function(n){Cc("GTM",6);te(n)}};h.cb=Cb(h);var k=Ce(h,g);"gtm.js"!==b&&"gtm.sync"!==b||fe();if(!k)return k;for(var l=0;l<h.cb.length;l++)if(h.cb[l]){var m=
lb[l];if(m&&!qc[String(m[yb.la])])return!0}return!1};var Ge=function(a,b,c,d){var e=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.globalConfig=d||{};this.getWithConfig=function(g){if(e.eventModel.hasOwnProperty(g))return e.eventModel[g];if(e.targetConfig.hasOwnProperty(g))return e.targetConfig[g];if(e.containerConfig.hasOwnProperty(g))return e.containerConfig[g];if(e.globalConfig.hasOwnProperty(g))return e.globalConfig[g]}};function He(){var a=oc;return a.gcq=a.gcq||new Ie}
var Je=function(a,b){He().register(a,b)},Ke=function(a,b,c,d){He().push("event",[b,a],c,d)},Le=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.je=null;this.Yd=!1},Me=function(a,b,c,d,e){this.type=a;this.Vg=b;this.O=c||"";this.Eb=d;this.defer=e},Ie=function(){this.Kd={};this.Td={};this.Xa=[]},Ne=function(a,b){var c=kc(b);return a.Kd[c.containerId]=a.Kd[c.containerId]||new Le},Oe=function(a,b,c,d){if(d.O){var e=Ne(a,d.O),g=e.je;if(g){var h=f(c),k=f(e.targetConfig[d.O]),l=
f(e.containerConfig),m=f(a.Td),n=new Ge(h,k,l,m);try{g(b,d.Vg,n)}catch(q){}}}};Ie.prototype.register=function(a,b){3!==Ne(this,a).status&&(Ne(this,a).je=b,Ne(this,a).status=3,this.flush())};
Ie.prototype.push=function(a,b,c,d){var e=Math.floor(ya()/1E3);if(c){var g=kc(c);if(g&&1===Ne(this,c).status&&(Ne(this,c).status=2,this.push("require",[],g.containerId),!kd())){var h=encodeURIComponent(g.containerId);Lb(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+h+"&l=dataLayer&cx=c"))}}this.Xa.push(new Me(a,e,c,b,d));d||this.flush()};
Ie.prototype.flush=function(a){for(var b=this;this.Xa.length;){var c=this.Xa[0];if(c.defer)c.defer=!1,this.Xa.push(c);else switch(c.type){case "require":if(3!==Ne(this,c.O).status&&!a)return;break;case "set":ta(c.Eb[0],function(l,m){b.Td[l]=m});break;case "config":var d=c.Eb[0],e=!!d[H.vb];delete d[H.vb];var g=Ne(this,c.O),h=kc(c.O),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.O]={});g.Yd&&e||Oe(this,H.W,d,c);g.Yd=!0;k?f(d,g.containerConfig):f(d,g.targetConfig[c.O]);break;case "event":Oe(this,
c.Eb[1],c.Eb[0],c)}this.Xa.shift()}};var Pe=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Se=function(a,b,c,d){var e=Qe(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Re(e,function(g){return g.Jb},b);if(1===e.length)return e[0].id;e=Re(e,function(g){return g.eb},c);return e[0]?e[0].id:void 0}};
function Te(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Pe(b,e).indexOf(c)}
var Xe=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,t=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var r=h[p];if(null!=r)switch(p){case "secure":r&&(m+="; secure");break;case "domain":q=r;break;default:"path"==p&&(t=r),"expires"==p&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+p+"="+r}}if("auto"===q){for(var v=Ue(),w=0;w<v.length;++w){var x="none"!=v[w]?v[w]:void 0;if(!We(x,t)&&Te(m+(x?"; domain="+x:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!We(q,t)&&Te(m,a,l)}return k};function Re(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Qe(a,b){for(var c=[],d=Pe(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Jb:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var Ye=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ze=/(^|\.)doubleclick\.net$/i,We=function(a,b){return Ze.test(document.location.hostname)||"/"===b&&Ye.test(a)},Ue=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Ze.test(e)||Ye.test(e)||a.push("none");return a};var $e=new function(){this.Nc={}};var af=null,bf={},cf={},df,ef=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[H.$b]&&(c.eventCallback=b[H.$b]),b[H.Na]&&(c.eventTimeout=b[H.Na]));return c};
var lf={config:function(a){},event:function(a){var b=a[1];if(ka(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ja(a[2]))return;c=a[2]}var d=ef(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];$e.Nc[b]?$e.Nc[b].push(c):$e.Nc[b]=[c]}},set:function(a){var b;2==a.length&&Ja(a[1])?b=f(a[1]):3==a.length&&ka(a[1])&&(b={},b[a[1]]=a[2]);if(b){
b._clear=!0;return b}}},mf={policy:!0};var of=function(a){return nf?C.querySelectorAll(a):null},pf=function(a,b){if(!nf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},qf=!1;if(C.querySelectorAll)try{var rf=C.querySelectorAll(":root");rf&&1==rf.length&&rf[0]==C.documentElement&&(qf=!0)}catch(a){}var nf=qf;var yf=function(a){if(xf(a))return a;this.Yg=a};yf.prototype.Xf=function(){return this.Yg};var xf=function(a){return!a||"object"!==Ha(a)||Ja(a)?!1:"getUntrustedUpdateValue"in a};yf.prototype.getUntrustedUpdateValue=yf.prototype.Xf;var zf=!1,Af=[];function Bf(){if(!zf){zf=!0;for(var a=0;a<Af.length;a++)G(Af[a])}}var Cf=function(a){zf?G(a):Af.push(a)};var Df=[],Ef=!1,Ff=function(a){return u["dataLayer"].push(a)},Gf=function(a){var b=oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},If=function(a){var b=a._clear;ta(a,function(g,h){"_clear"!==g&&(b&&hd(g,void 0),hd(g,h))});tc||(tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ac(),a["gtm.uniqueEventId"]=d,hd("gtm.uniqueEventId",d));vc=c;var e=Hf(a);
vc=null;switch(c){case "gtm.init":Cc("GTM",19),e&&Cc("GTM",20)}return e};function Hf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=oc.zones;d=e?e.checkState(nc.i,c):Gd;return d.active?Ee(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Jf=function(){for(var a=!1;!Ef&&0<Df.length;){Ef=!0;delete Xc.eventModel;$c();var b=Df.shift();if(null!=b){var c=xf(b);if(c){var d=b;b=xf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ad(h,1);if(ma(k)||Ja(k))k=f(k);Yc[h]=k}}try{if(ja(b))try{b.call(bd)}catch(v){}else if(ma(b)){var l=b;if(ka(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),t=ad(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&ka(b[0])){var r=lf[b[0]];if(r&&(!c||!mf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Ef=!1;continue}}a=If(b)||a}}finally{c&&$c(!0)}}Ef=!1}
return!a},Kf=function(){var a=Jf();try{var b=nc.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Lf=function(){var a=Jb("dataLayer",[]),b=Jb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Nd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Cf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new yf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Df.push.apply(Df,d);if(300<this.length)for(Cc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Jf()&&h};Df.push.apply(Df,a.slice(0));G(Kf)};var Mf;var hg={};hg.xb=new String("undefined");
var ig=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===hg.xb?b:a[d]);return c.join("")}};ig.prototype.toString=function(){return this.resolve("undefined")};ig.prototype.valueOf=ig.prototype.toString;hg.Ze=ig;hg.kc={};hg.If=function(a){return new ig(a)};var jg={};hg.Hg=function(a,b){var c=Ac();jg[c]=[a,b];return c};hg.Ld=function(a){var b=a?0:1;return function(c){var d=jg[c];if(d&&"function"===typeof d[b])d[b]();jg[c]=void 0}};hg.jg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};hg.vg=function(a){if(a===hg.xb)return a;var b=Ac();hg.kc[b]=a;return'google_tag_manager["'+nc.i+'"].macro('+b+")"};hg.ng=function(a,b,c){a instanceof hg.Ze&&(a=a.resolve(hg.Hg(b,c)),b=ia);return{zc:a,J:b}};var kg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Qb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},lg=function(a){oc.hasOwnProperty("autoEventsSettings")||(oc.autoEventsSettings={});var b=oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},mg=function(a,b,c){lg(a)[b]=c},ng=function(a,b,c,d){var e=lg(a),g=za(e,b,d);e[b]=c(g)},og=function(a,b,c){var d=lg(a);return za(d,b,c)};var pg=function(){for(var a=Hb.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ya()/1E3)].join(".")},sg=function(a,b,c,d){var e=qg(b);return Se(a,e,rg(c),d)},tg=function(a,b,c,d){var e=""+qg(c),g=rg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},qg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},rg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var ug=["1"],vg={},zg=function(a,b,c,d){var e=wg(a);vg[e]||xg(e,b,c)||(yg(e,pg(),b,c,d),xg(e,b,c))};function yg(a,b,c,d,e){var g=tg(b,"1",d,c);Xe(a,g,c,d,0==e?void 0:new Date(ya()+1E3*(void 0==e?7776E3:e)))}function xg(a,b,c){var d=sg(a,b,c,ug);d&&(vg[a]=d);return d}function wg(a){return(a||"_gcl")+"_au"};var Ag=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Yc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Yc]||(g[a[h].Yc]=[]),g[a[h].Yc].push({timestamp:k[1],Uf:k[2]}))}return g};function Bg(){for(var a=Cg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Dg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Cg,Eg,Fg=function(a){Cg=Cg||Dg();Eg=Eg||Bg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Cg[l],Cg[m],Cg[n],Cg[q])}return b.join("")},Gg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Eg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Cg=Cg||Dg();Eg=Eg||
Bg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Hg;function Ig(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Mg=function(){var a=Jg,b=Kg,c=Lg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){D(C,"mousedown",d);D(C,"keyup",d);D(C,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Lg=function(){var a=Jb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ng=/(.*?)\*(.*?)\*(.*)/,Og=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Pg=/^(?:www\.|m\.|amp\.)+/,Qg=/([^?#]+)(\?[^#]*)?(#.*)?/,Rg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Tg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Fg(String(d))))}var e=b.join("*");return["1",Sg(e),e].join("*")},Sg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Hg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Hg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Hg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Vg=function(){return function(a){var b=ne(u.location.href),c=b.search.replace("?",""),d=je(c,"_gl",!0)||"";a.query=Ug(d)||{};var e=me(b,"fragment").match(Rg);a.fragment=Ug(e&&e[3]||
"")||{}}},Wg=function(){var a=Vg(),b=Lg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Da(c,d.query),Da(c,d.fragment));return c},Ug=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Ng.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Sg(k,n)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)q[t[p]]=Gg(t[p+1]);return q}}}}catch(r){}};
function Xg(a,b,c){function d(m){var n=m,q=Rg.exec(n),t=n;if(q){var p=q[2],r=q[4];t=q[1];r&&(t=t+p+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Qg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Yg(a,b,c){for(var d={},e={},g=Lg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Ig(k.domains,b)&&(k.fragment?Da(e,k.callback()):Da(d,k.callback()))}if(Ea(d)){var l=Tg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,t=0;t<n.length;t++){var p=n[t];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var r=C.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Xg(l,a.action);he.test(v)&&(a.action=v)}}}else Zg(l,a,!1)}if(!c&&Ea(e)){var w=Tg(e);Zg(w,a,!0)}}function Zg(a,b,c){if(b.href){var d=Xg(a,b.href,void 0===c?!1:c);he.test(d)&&(b.href=d)}}
var Jg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Yg(e,e.hostname,!1)}}catch(h){}},Kg=function(a){try{if(a.action){var b=me(ne(a.action),"host");Yg(a,b,!0)}}catch(c){}},$g=function(a,b,c,d){Mg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Lg().decorators.push(e)},ah=function(){var a=C.location.hostname,b=Og.exec(C.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Pg,""),l=e.replace(Pg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},bh=function(a,b){return!1===a?!1:a||b||ah()};var ch={};var dh=/^\w+$/,eh=/^[\w-]+$/,fh=/^~?[\w-]+$/,gh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function hh(a){return a&&"string"==typeof a&&a.match(dh)?a:"_gcl"}var jh=function(){var a=ne(u.location.href),b=me(a,"query",!1,void 0,"gclid"),c=me(a,"query",!1,void 0,"gclsrc"),d=me(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||je(e,"gclid",void 0);c=c||je(e,"gclsrc",void 0)}return ih(b,c,d)};
function ih(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(eh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==ch.gtm_3pds?0:ch.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var lh=function(a){var b=jh();kh(b,a)};
function kh(a,b,c){function d(q,t){var p=mh(q,e);p&&Xe(p,t,h,g,l,!0)}b=b||{};var e=hh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ic?7776E3:b.Ic;c=c||ya();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Ch?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var oh=function(a,b,c,d,e){for(var g=Wg(),h=hh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==gh[l]){var m=mh(l,h),n=g[m];if(n){var q=Math.min(nh(n),ya()),t;b:{for(var p=q,r=Pe(m,C.cookie),v=0;v<r.length;++v)if(nh(r[v])>p){t=!0;break b}t=!1}t||Xe(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};kh(ih(g.gclid,g.gclsrc),w)},mh=function(a,b){var c=gh[a];if(void 0!==c)return b+c},nh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ph(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var qh=function(a,b,c,d,e){if(ma(b)){var g=hh(e);$g(function(){for(var h={},k=0;k<a.length;++k){var l=mh(a[k],g);if(l){var m=Pe(l,C.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},rh=function(a){return a.filter(function(b){return fh.test(b)})},sh=function(a){for(var b=["aw","dc"],c=hh(a&&a.prefix),d={},e=0;e<b.length;e++)gh[b[e]]&&(d[b[e]]=gh[b[e]]);ta(d,function(g,h){var k=Pe(c+h,C.cookie);if(k.length){var l=k[0],m=nh(l),n={};n[g]=[ph(l)];kh(n,a,m)}})};var th=/^\d+\.fls\.doubleclick\.net$/;function uh(a){var b=ne(u.location.href),c=me(b,"host",!1);if(c&&c.match(th)){var d=me(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function vh(a,b){if("aw"==a||"dc"==a){var c=uh("gcl"+a);if(c)return c.split(".")}var d=hh(b);if("_gcl"==d){var e;e=jh()[a]||[];if(0<e.length)return e}var g=mh(a,d),h;if(g){var k=[];if(C.cookie){var l=Pe(g,C.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=ph(l[m]);n&&-1===oa(k,n)&&k.push(n)}h=rh(k)}else h=k}else h=k}else h=[];return h}
var wh=function(){var a=uh("gac");if(a)return decodeURIComponent(a);var b=Ag(),c=[];ta(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Uf);g=rh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},xh=function(a,b,c,d,e){zg(b,c,d,e);var g=vg[wg(b)],h=jh().dc||[],k=!1;if(g&&0<h.length){var l=oc.joined_au=oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",t=q=q+"?gclid="+h[n]+"&auiddc="+g;Hb.sendBeacon&&Hb.sendBeacon(t)||Ob(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=wg(b),r=vg[p];r&&yg(p,r,c,d,e)}};var yh;if(3===nc.Bb.length)yh="g";else{var zh="G";yh=zh}
var Ah={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:yh,OPT:"o"},Bh=function(a){var b=nc.i.split("-"),c=b[0].toUpperCase(),d=Ah[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===nc.Bb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+nc.Bb+e};var Hh=["input","select","textarea"],Ih=["button","hidden","image","reset","submit"],Jh=function(a){var b=a.tagName.toLowerCase();return!pa(Hh,function(c){return c===b})||"input"===b&&pa(Ih,function(c){return c===a.type.toLowerCase()})?!1:!0},Kh=function(a){return a.form?a.form.tagName?a.form:C.getElementById(a.form):Tb(a,["form"],100)},Lh=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Jh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Oh=!!u.MutationObserver,Ph=void 0,Qh=function(a){if(!Ph){var b=function(){var c=C.body;if(c)if(Oh)(new MutationObserver(function(){for(var e=0;e<Ph.length;e++)G(Ph[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;D(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Ph.length;e++)G(Ph[e])}))})}};Ph=[];C.body?b():G(b)}Ph.push(a)};var ri=u.clearTimeout,si=u.setTimeout,K=function(a,b,c){if(kd()){b&&G(b)}else return Lb(a,b,c)},ti=function(){return u.location.href},ui=function(a){return me(ne(a),"fragment")},vi=function(a){return le(ne(a))},wi=null;
var xi=function(a,b){return ad(a,b||2)},yi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Ff(a)},zi=function(a,b){u[a]=b},W=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},Ai=function(a,b,c){return Pe(a,b,void 0===c?!0:!!c)},Bi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Ic:d};lh(e);sh(e)},Ci=function(a,b,c,d,e){oh(a,b,c,d,e);},Di=function(a,b,c,d,e){
qh(a,b,c,d,e);},Ei=function(a,b){if(kd()){b&&G(b)}else Nb(a,b)},Fi=function(a){return!!og(a,"init",!1)},Gi=function(a){mg(a,"init",!0)},Hi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":sc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(J("https://","http://",d))},Ii=function(a,b){var c=a[b];
return c};
var Ki=hg.ng;var Li=new ra,Mi=function(a,b){function c(h){var k=ne(h),l=me(k,"protocol"),m=me(k,"host",!0),n=me(k,"port"),q=me(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Ni=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ma(c)){for(var d=0;d<c.length;d++)if(Ni({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=oa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,r=Li.get(p);r||(r=new RegExp(c,t),Li.set(p,r));q=r.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Mi(b,c)}return!1};var Pi={},Qi=function(){if(u._gtmexpgrp&&u._gtmexpgrp.hasOwnProperty(1))return u._gtmexpgrp[1];void 0===Pi[1]&&(Pi[1]=Math.floor(2*Math.random()));return Pi[1]};var Ri=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Si={},Ti=encodeURI,Y=encodeURIComponent,Ui=Ob;var Vi=function(a,b){if(!a)return!1;var c=me(ne(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Wi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Si.kg=function(){var a=!1;return a};var vj=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||qa();return a.hid};var ek=window,fk=document,gk=function(a){var b=ek._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ek["ga-disable-"+a])return!0;try{var c=ek.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Pe("AMP_TOKEN",fk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return fk.getElementById("__gaOptOutExtension")?!0:!1};var lk=function(a,b,c){Ke(b,c,a)},mk=function(a,b,c){Ke(b,c,a,!0)},ok=function(a,b){},nk=function(a,b){},
pk=function(a){return"_"===a.charAt(0)},qk=function(a){ta(a,function(c){pk(c)&&delete a[c]});var b=a[H.wb]||{};ta(b,function(c){pk(c)&&delete b[c]})};var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(jd(a.vtp_gtmEventId,"event"))})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Ai(a.vtp_name,xi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return qa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:xi("gtm.url",1))||ti();var d=b[a("vtp_component")];if(!d||"URL"==d)return vi(String(c));var e=ne(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ma(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var q=me(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=me(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=xi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;f(Wi(n.vtp_fieldsToSet,"fieldName","value"),g);f(Wi(n.vtp_contentGroup,"index","group"),h);f(Wi(n.vtp_dimension,"index","dimension"),k);f(Wi(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=f(n);d=f(d,q)}f(Wi(d.vtp_fieldsToSet,"fieldName","value"),g);f(Wi(d.vtp_contentGroup,
"index","group"),h);f(Wi(d.vtp_dimension,"index","dimension"),k);f(Wi(d.vtp_metric,"index","metric"),l);var t=ce(d.vtp_functionName);if(ja(t)){var p="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,p=r+"."):(r="gtm"+Ac(),p=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},x=function(T){var O=[].slice.call(arguments,0);O[0]=p+O[0];t.apply(window,O)},y=function(T,O){return void 0===O?O:T(O)},A=function(T,O){if(O)for(var na in O)O.hasOwnProperty(na)&&x("set",T+na,O[na])},z=function(){
var T=function(Ak,Ch,Bk){if(!Ja(Ch))return!1;for(var yc=za(Object(Ch),Bk,[]),Ve=0;yc&&Ve<yc.length;Ve++)x(Ak,yc[Ve]);return!!yc&&0<yc.length},O;if(d.vtp_useEcommerceDataLayer){var na=!1;na||(O=xi("ecommerce",1))}else d.vtp_ecommerceMacroData&&(O=d.vtp_ecommerceMacroData.ecommerce);if(!Ja(O))return;O=Object(O);var Ra=za(g,"currencyCode",O.currencyCode);
void 0!==Ra&&x("set","&cu",Ra);T("ec:addImpression",O,"impressions");if(T("ec:addPromo",O[O.promoClick?"promoClick":"promoView"],"promotions")&&O.promoClick){x("ec:setAction","promo_click",O.promoClick.actionField);return}for(var Ba="detail checkout checkout_option click add remove purchase refund".split(" "),Sa="refund purchase remove checkout checkout_option add click detail".split(" "),Ta=0;Ta<Ba.length;Ta++){var gb=O[Ba[Ta]];if(gb){T("ec:addProduct",gb,"products");x("ec:setAction",Ba[Ta],gb.actionField);
if(Rc)for(var nb=0;nb<Sa.length;nb++){var Wb=O[Sa[nb]];if(Wb){Wb!==gb&&Cc("GTM",13);break}}break}}},B=function(T,O,na){var Ra=0;if(T)for(var Ba in T)if(T.hasOwnProperty(Ba)&&(na&&v[Ba]||!na&&void 0===v[Ba])){var Sa=w[Ba]?va(T[Ba]):T[Ba];"anonymizeIp"!=Ba||Sa||(Sa=void 0);O[Ba]=Sa;Ra++}return Ra},E={name:r};B(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);x("set","&gtm",Bh(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(T,O){void 0!==d[O]&&x("set",T,d[O])})("nonInteraction","vtp_nonInteraction");A("contentGroup",h);A("dimension",k);A("metric",l);var F={};B(g,F,!1)&&x("set",F);var M;
d.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var T=g&&g.hitCallback;ja(T)&&T();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());var Q={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(ua,d.vtp_eventValue||
e.value)};B(M,Q,!1);x("send",Q);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){
x("require","ecommerce","//www.google-analytics.com/plugins/ua/ecommerce.js");var U=function(T){return xi("transaction"+T,1)},P=U("Id");x("ecommerce:addTransaction",{id:P,affiliation:U("Affiliation"),revenue:U("Total"),shipping:U("Shipping"),tax:U("Tax")});for(var N=U("Products")||[],L=0;L<N.length;L++){var I=N[L];x("ecommerce:addItem",{id:P,sku:I.sku,name:I.name,category:I.category,price:I.price,quantity:I.quantity})}x("ecommerce:send");}else if("TRACK_TIMING"==
d.vtp_trackType){var R={hitType:"timing",timingCategory:String(d.vtp_timingCategory||e.category),timingVar:String(d.vtp_timingVar||e.name),timingValue:ua(d.vtp_timingValue||e.value),timingLabel:y(String,d.vtp_timingLabel||e.label)};B(M,R,!1);x("send",R);}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var X=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:X})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ba="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:ba})}M?x("send","pageview",M):x("send","pageview");}if(!a){var ca=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ca="internal/"+ca);a=!0;var Ca=J("https:","http:","//www.google-analytics.com/"+ca,g&&g.forceSSL);K(Ca,function(){var T=ae();T&&T.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return nc.i})}();

Z.a.aev=["google"],function(){function a(p,r){var v=jd(p,"gtm");if(v)return v[r]}function b(p,r,v,w){w||(w="element");var x=p+"."+r,y;if(n.hasOwnProperty(x))y=n[x];else{var A=a(p,w);if(A&&(y=v(A),n[x]=y,q.push(x),35<q.length)){var z=q.shift();delete n[z]}}return y}function c(p,r,v){var w=a(p,t[r]);return void 0!==w?w:v}function d(p,r){if(!p)return!1;var v=e(ti());ma(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<r.length;x++)if(r[x]instanceof RegExp){if(r[x].test(p))return!1}else{var y=
r[x];if(0!=y.length){if(0<=e(p).indexOf(y))return!1;w.push(e(y))}}return!Vi(p,w)}function e(p){m.test(p)||(p="http://"+p);return me(ne(p),"HOST",!0)}function g(p,r,v){switch(p){case "SUBMIT_TEXT":return b(r,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(r,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(r,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return Qb(p,"value");case "button":return Rb(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var r=0,v=0;v<p.elements.length;v++)Jh(p.elements[v])&&r++;return r}}function l(p,r,v){var w=a(p,"interactedFormField");return w&&Qb(w,r)||v}var m=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var r=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var x=a(r,"element");return x&&x.tagName||
v;case "TEXT":return b(r,w,Rb)||v;case "URL":var y;a:{var A=String(a(r,"elementUrl")||v||""),z=ne(A),B=String(p.vtp_component||"URL");switch(B){case "URL":y=A;break a;case "IS_OUTBOUND":y=d(A,p.vtp_affiliatedDomains);break a;default:y=me(z,B,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return y;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(r,w,v);else{var F=p.vtp_attribute,M=a(r,"element");E=M&&Qb(M,F)||v||""}return E;case "MD":var Q=p.vtp_mdValue,S=b(r,"MD",di);return Q&&S?gi(S,Q)||
v:S||v;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=f(a),c=b;c[yb.la]=null;c[yb.Te]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Wi(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Kb(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){G(h)}}}var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Ki(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.zc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Sb(h),k,e)()}else si(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();






Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Tb(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=og("lcl",k?"nv.mwt":"mwt",0),m;m=k?og("lcl","nv.ids",[]):og("lcl","ids",[]);if(m.length){var n=kg(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var q=W((Ii(h,"target")||"_self").substring(1)),t=!0;if(yi(n,Gf(function(){t&&q&&(q.location.href=Ii(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else yi(n,function(){},l||2E3);return!0}}};D(c,"click",e,!1);D(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=Ii(d,"href"),h=g.indexOf("#"),k=Ii(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=vi(g),m=vi(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};ng("lcl","mwt",k,0);e||ng("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};ng("lcl","ids",l,[]);e||ng("lcl","nv.ids",l,[]);Fi("lcl")||(a(),Gi("lcl"));G(c.vtp_gtmOnSuccess)})}();

var zk={};zk.macro=function(a){if(hg.kc.hasOwnProperty(a))return hg.kc[a]},zk.onHtmlSuccess=hg.Ld(!0),zk.onHtmlFailure=hg.Ld(!1);zk.dataLayer=bd;zk.callback=function(a){xc.hasOwnProperty(a)&&ja(xc[a])&&xc[a]();delete xc[a]};zk.uf=function(){oc[nc.i]=zk;Da(zc,Z.a);qb=qb||hg;rb=Fd};
zk.fg=function(){ch.gtm_3pds=!0;oc=u.google_tag_manager=u.google_tag_manager||{};if(oc[nc.i]){var a=oc.zones;a&&a.unregisterChild(nc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ib.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)lb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)kb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);jb.push(q)}ob=Z;pb=Ni;zk.uf();Lf();Id=!1;Jd=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)Ld();else{D(C,"DOMContentLoaded",Ld);D(C,"readystatechange",Ld);if(C.createEventObject&&C.documentElement.doScroll){var p=!0;try{p=!u.frameElement}catch(x){}p&&Md()}D(u,"load",Ld)}zf=!1;"complete"===C.readyState?Bf():
D(u,"load",Bf);a:{if(!Rc)break a;u.setInterval(Sc,864E5);}
uc=(new Date).getTime();}};(0,zk.fg)();

})()
