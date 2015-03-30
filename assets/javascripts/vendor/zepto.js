!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var n,r=Object(this),i=r.length>>>0,o=0;if("function"!=typeof e)throw new TypeError;if(0==i&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in r){n=r[o++];break}if(++o>=i)throw new TypeError}for(;i>o;)o in r&&(n=e.call(t,n,r[o],o,r)),o++;return n})}();var Zepto=function(){function t(t){return null==t?String(t):Q[G.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&t.__proto__==Object.prototype}function a(t){return t instanceof Array}function s(t){return"number"==typeof t.length}function u(t){return j.call(t,function(t){return null!=t})}function l(t){return t.length>0?T.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function d(t){return t in F?F[t]:F[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||q[c(t)]?e:e+"px"}function p(t){var e,n;return D[t]||(e=M.createElement(t),M.body.appendChild(e),n=z(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),D[t]=n),D[t]}function h(t){return"children"in t?N.call(t.children):T.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function m(t,e,n){for(C in e)n&&(o(e[C])||a(e[C]))?(o(e[C])&&!o(t[C])&&(t[C]={}),a(e[C])&&!a(t[C])&&(t[C]=[]),m(t[C],e[C],n)):e[C]!==w&&(t[C]=e[C])}function g(t,e){return e===w?T(t):T(t).filter(e)}function v(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className,r=n&&n.baseVal!==w;return e===w?r?n.baseVal:n:(r?n.baseVal=e:t.className=e,void 0)}function _(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(e=Number(t))?/^[\[\{]/.test(t)?T.parseJSON(t):t:e):t}catch(n){return t}}function x(t,e){e(t);for(var n in t.childNodes)x(t.childNodes[n],e)}var w,C,T,k,E,S,A=[],N=A.slice,j=A.filter,M=window.document,D={},F={},z=M.defaultView.getComputedStyle,q={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},O=/^\s*<(\w+|!)[^>]*>/,P=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,L=/^(?:body|html)$/i,I=["val","css","html","text","data","width","height","offset"],$=["after","prepend","before","append"],H=M.createElement("table"),R=M.createElement("tr"),B={tr:M.createElement("tbody"),tbody:H,thead:H,tfoot:H,td:R,th:R,"*":M.createElement("div")},W=/complete|loaded|interactive/,U=/^\.([\w-]+)$/,X=/^#([\w-]*)$/,V=/^[\w-]+$/,Q={},G=Q.toString,Y={},Z=M.createElement("div");return Y.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=Z).appendChild(t),r=~Y.qsa(i,e).indexOf(t),o&&Z.removeChild(t),r},E=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},S=function(t){return j.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){t.replace&&(t=t.replace(P,"<$1></$2>")),e===w&&(e=O.test(t)&&RegExp.$1),e in B||(e="*");var r,i,a=B[e];return a.innerHTML=""+t,i=T.each(N.call(a.childNodes),function(){a.removeChild(this)}),o(n)&&(r=T(i),T.each(n,function(t,e){I.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},Y.Z=function(t,e){return t=t||[],t.__proto__=T.fn,t.selector=e||"",t},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,n){if(t){if(e(t))return T(M).ready(t);if(Y.isZ(t))return t;var r;if(a(t))r=u(t);else if(i(t))r=[o(t)?T.extend({},t):t],t=null;else if(O.test(t))r=Y.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return T(n).find(t);r=Y.qsa(M,t)}return Y.Z(r,t)}return Y.Z()},T=function(t,e){return Y.init(t,e)},T.extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},Y.qsa=function(t,e){var n;return r(t)&&X.test(e)?(n=t.getElementById(RegExp.$1))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:N.call(U.test(e)?t.getElementsByClassName(RegExp.$1):V.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},T.contains=function(t,e){return t!==e&&t.contains(e)},T.type=t,T.isFunction=e,T.isWindow=n,T.isArray=a,T.isPlainObject=o,T.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},T.inArray=function(t,e,n){return A.indexOf.call(e,t,n)},T.camelCase=E,T.trim=function(t){return t.trim()},T.uuid=0,T.support={},T.expr={},T.map=function(t,e){var n,r,i,o=[];if(s(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return l(o)},T.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},T.grep=function(t,e){return j.call(t,e)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Q["[object "+e+"]"]=e.toLowerCase()}),T.fn={forEach:A.forEach,reduce:A.reduce,push:A.push,sort:A.sort,indexOf:A.indexOf,concat:A.concat,map:function(t){return T(T.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return T(N.apply(this,arguments))},ready:function(t){return W.test(M.readyState)?t(T):M.addEventListener("DOMContentLoaded",function(){t(T)},!1),this},get:function(t){return t===w?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return A.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):T(j.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return T(S(this.concat(T(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&e(t.item)?N.call(t):T(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return T(n)},has:function(t){return this.filter(function(){return i(t)?T.contains(this,t):T(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:T(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:T(t)},find:function(t){var e,n=this;return e="object"==typeof t?T(t).filter(function(){var t=this;return A.some.call(n,function(e){return T.contains(e,t)})}):1==this.length?T(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)})},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=T(t));n&&!(i?i.indexOf(n)>=0:Y.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return T(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=T.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return g(e,t)},parent:function(t){return g(S(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return h(this)}),t)},contents:function(){return this.map(function(){return N.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return j.call(h(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return T.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==z(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=T(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){T(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){T(this[0]).before(t=T(t));for(var e;(e=t.children()).length;)t=e.first();T(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=T(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=T(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return T(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return T(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===w?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;T(this).empty().append(v(this,t,e,n))})},text:function(t){return t===w?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var n;return"string"==typeof t&&e===w?0==this.length||1!==this[0].nodeType?w:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(i(t))for(C in t)y(this,C,t[C]);else y(this,t,v(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&y(this,t)})},prop:function(t,e){return e===w?this[0]&&this[0][t]:this.each(function(n){this[t]=v(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+c(t),e);return null!==n?_(n):w},val:function(t){return t===w?this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=v(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=T(this),r=v(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2&&"string"==typeof e)return this[0]&&(this[0].style[E(e)]||z(this[0],"").getPropertyValue(e));var r="";if("string"==t(e))n||0===n?r=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(C in e)e[C]||0===e[C]?r+=c(C)+":"+f(C,e[C])+";":this.each(function(){this.style.removeProperty(c(C))});return this.each(function(){this.style.cssText+=";"+r})},index:function(t){return t?this.indexOf(T(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return A.some.call(this,function(t){return this.test(b(t))},d(t))},addClass:function(t){return this.each(function(e){k=[];var n=b(this),r=v(this,t,e,n);r.split(/\s+/g).forEach(function(t){T(this).hasClass(t)||k.push(t)},this),k.length&&b(this,n+(n?" ":"")+k.join(" "))})},removeClass:function(t){return this.each(function(e){return t===w?b(this,""):(k=b(this),v(this,t,e,k).split(/\s+/g).forEach(function(t){k=k.replace(d(t)," ")}),b(this,k.trim()),void 0)})},toggleClass:function(t,e){return this.each(function(n){var r=T(this),i=v(this,t,n,b(this));i.split(/\s+/g).forEach(function(t){(e===w?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=L.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(T(t).css("margin-top"))||0,n.left-=parseFloat(T(t).css("margin-left"))||0,r.top+=parseFloat(T(e[0]).css("border-top-width"))||0,r.left+=parseFloat(T(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||M.body;t&&!L.test(t.nodeName)&&"static"==T(t).css("position");)t=t.offsetParent;return t})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(t){T.fn[t]=function(e){var i,o=this[0],a=t.replace(/./,function(t){return t[0].toUpperCase()});return e===w?n(o)?o["inner"+a]:r(o)?o.documentElement["offset"+a]:(i=this.offset())&&i[t]:this.each(function(n){o=T(this),o.css(t,v(this,e,n,o[t]()))})}}),$.forEach(function(e,n){var r=n%2;T.fn[e]=function(){var e,i,o=T.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:Y.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return T(t).remove();x(i.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},T.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return T(t)[e](this),this}}),Y.Z.prototype=T.fn,Y.uniq=S,Y.deserializeValue=_,T.zepto=Y,T}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},r=t.match(/WebKit\/([\d.]+)/),i=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),a=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),s=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),u=s&&t.match(/TouchPad/),l=t.match(/Kindle\/([\d.]+)/),c=t.match(/Silk\/([\d._]+)/),d=t.match(/(BlackBerry).*Version\/([\d.]+)/),f=t.match(/(BB10).*Version\/([\d.]+)/),p=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),h=t.match(/PlayBook/),m=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),g=t.match(/Firefox\/([\d.]+)/);(n.webkit=!!r)&&(n.version=r[1]),i&&(e.android=!0,e.version=i[2]),a&&(e.ios=e.iphone=!0,e.version=a[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),s&&(e.webos=!0,e.version=s[2]),u&&(e.touchpad=!0),d&&(e.blackberry=!0,e.version=d[2]),f&&(e.bb10=!0,e.version=f[2]),p&&(e.rimtabletos=!0,e.version=p[2]),h&&(n.playbook=!0),l&&(e.kindle=!0,e.version=l[1]),c&&(n.silk=!0,n.version=c[1]),!c&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),m&&(n.chrome=!0,n.version=m[1]),g&&(n.firefox=!0,n.version=g[1]),e.tablet=!!(o||h||i&&!t.match(/Mobile/)||g&&t.match(/Tablet/)),e.phone=!(e.tablet||!(i||a||s||d||f||m&&t.match(/Android/)||m&&t.match(/CriOS\/([\d.]+)/)||g&&t.match(/Mobile/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=p++)}function n(t,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(f[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(e,n,r){"string"!=t.type(e)?t.each(e,r):e.split(/\s/).forEach(function(t){r(t,n)})}function a(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function s(t){return m[t]||t}function u(n,i,u,l,c,d){var p=e(n),h=f[p]||(f[p]=[]);o(i,u,function(e,i){var o=r(e);o.fn=i,o.sel=l,o.e in m&&(i=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=c&&c(i,e);var u=o.del||i;o.proxy=function(t){var e=u.apply(n,[t].concat(t.data));return e===!1&&(t.preventDefault(),t.stopPropagation()),e},o.i=h.length,h.push(o),n.addEventListener(s(o.e),o.proxy,a(o,d))})}function l(t,r,i,u,l){var c=e(t);o(r||"",i,function(e,r){n(t,e,r,u).forEach(function(e){delete f[c][e.i],t.removeEventListener(s(e.e),e.proxy,a(e,l))})})}function c(e){var n,r={originalEvent:e};for(n in e)y.test(n)||void 0===e[n]||(r[n]=e[n]);return t.each(b,function(t,n){r[t]=function(){return this[n]=g,e[t].apply(e,arguments)},r[n]=v}),r}function d(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var f=(t.zepto.qsa,{}),p=1,h={},m={mouseenter:"mouseover",mouseleave:"mouseout"};h.click=h.mousedown=h.mouseup=h.mousemove="MouseEvents",t.event={add:u,remove:l},t.proxy=function(n,r){if(t.isFunction(n)){var i=function(){return n.apply(r,arguments)};return i._zid=e(n),i}if("string"==typeof r)return t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){u(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){l(this,t,e)})},t.fn.one=function(t,e){return this.each(function(n,r){u(this,t,e,null,function(t,e){return function(){var n=t.apply(r,arguments);return l(r,e,t),n}})})};var g=function(){return!0},v=function(){return!1},y=/^([A-Z]|layer[XY]$)/,b={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,n,r){return this.each(function(i,o){u(o,n,r,e,function(n){return function(r){var i,a=t(r.target).closest(e,o).get(0);return a?(i=t.extend(c(r),{currentTarget:a,liveFired:o}),n.apply(a,[i].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,e,n){return this.each(function(){l(this,e,n,t)})},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r){return!n||t.isFunction(n)?this.bind(e,n||r):this.delegate(n,e,r)},t.fn.off=function(e,n,r){return!n||t.isFunction(n)?this.unbind(e,n||r):this.undelegate(n,e,r)},t.fn.trigger=function(e,n){return("string"==typeof e||t.isPlainObject(e))&&(e=t.Event(e)),d(e),e.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,s){i=c("string"==typeof e?t.Event(e):e),i.data=r,i.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){"string"!=typeof t&&(e=t,t=e.type);var n=document.createEvent(h[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.defaultPrevented}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:(n(e,r,"ajaxSend",[t,e]),void 0)}function a(t,e,r){var i=r.context,o="success";r.success.call(i,t,o,e),n(r,i,"ajaxSuccess",[e,r,t]),u(o,e,r)}function s(t,e,r,i){var o=i.context;i.error.call(o,r,e,t),n(i,o,"ajaxError",[r,i,t]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function l(){}function c(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==w?"json":_.test(t)?"script":x.test(t)&&"xml")||"text"}function d(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function f(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=d(e.url,e.data))}function p(e,n,r,i){var o=!t.isFunction(n);return{url:e,data:o?n:void 0,success:o?t.isFunction(r)?r:void 0:n,dataType:o?i||r:r}}function h(e,n,r,i){var o,a=t.isArray(n);t.each(n,function(n,s){o=t.type(s),i&&(n=r?i:i+"["+(a?"":n)+"]"),!i&&a?e.add(s.name,s.value):"array"==o||!r&&"object"==o?h(e,s,r,n):e.add(n,s)})}var m,g,v=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,_=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,w="application/json",C="text/html",T=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){if(!("type"in e))return t.ajax(e);var n,r="jsonp"+ ++v,i=y.createElement("script"),u=function(){clearTimeout(n),t(i).remove(),delete window[r]},c=function(t){u(),t&&"timeout"!=t||(window[r]=l),s(null,t||"abort",d,e)},d={abort:c};return o(d,e)===!1?(c("abort"),!1):(window[r]=function(t){u(),a(t,d,e)},i.onerror=function(){c("error")},i.src=e.url.replace(/=\?/,"="+r),t("head").append(i),e.timeout>0&&(n=setTimeout(function(){c("timeout")},e.timeout)),d)},t.ajaxSettings={type:"GET",beforeSend:l,success:l,error:l,complete:l,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:w,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{});for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);r(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),f(n),n.cache===!1&&(n.url=d(n.url,"_="+Date.now()));var i=n.dataType,u=/=\?/.test(n.url);if("jsonp"==i||u)return u||(n.url=d(n.url,"callback=?")),t.ajaxJSONP(n);var p,h=n.accepts[i],v={},y=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,b=n.xhr();n.crossDomain||(v["X-Requested-With"]="XMLHttpRequest"),h&&(v.Accept=h,h.indexOf(",")>-1&&(h=h.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(h)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(v["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=t.extend(v,n.headers||{}),b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=l,clearTimeout(p);var e,r=!1;if(b.status>=200&&b.status<300||304==b.status||0==b.status&&"file:"==y){i=i||c(b.getResponseHeader("content-type")),e=b.responseText;try{"script"==i?(1,eval)(e):"xml"==i?e=b.responseXML:"json"==i&&(e=T.test(e)?null:t.parseJSON(e))}catch(o){r=o}r?s(r,"parsererror",b,n):a(e,b,n)}else s(null,b.status?"error":"abort",b,n)}};var _="async"in n?n.async:!0;b.open(n.type,n.url,_);for(g in n.headers)b.setRequestHeader(g,n.headers[g]);return o(b,n)===!1?(b.abort(),!1):(n.timeout>0&&(p=setTimeout(function(){b.onreadystatechange=l,b.abort(),s(null,"timeout",b,n)},n.timeout)),b.send(n.data?n.data:null),b)},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),s=p(e,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(e){o.html(i?t("<div>").html(e.replace(b,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(s),this};var k=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(k(t)+"="+k(e))},h(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var r=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&("radio"!=r&&"checkbox"!=r||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t,e){function n(t){return r(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function r(t){return t.toLowerCase()}function i(t){return o?o+t:r(t)}var o,a,s,u,l,c,d,f,p="",h={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},m=window.document,g=m.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(h,function(t,n){return g.style[t+"TransitionProperty"]!==e?(p="-"+r(t)+"-",o=n,!1):void 0}),a=p+"transform",y[s=p+"transition-property"]=y[u=p+"transition-duration"]=y[l=p+"transition-timing-function"]=y[c=p+"animation-name"]=y[d=p+"animation-duration"]=y[f=p+"animation-timing-function"]="",t.fx={off:o===e&&g.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:p,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(e,n,r,i){return t.isPlainObject(n)&&(r=n.easing,i=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:t.fx.speeds[n]||t.fx.speeds._default)/1e3),this.anim(e,n,r,i)},t.fn.anim=function(r,i,o,p){var h,m,g,b={},_="",x=this,w=t.fx.transitionEnd;if(i===e&&(i=.4),t.fx.off&&(i=0),"string"==typeof r)b[c]=r,b[d]=i+"s",b[f]=o||"linear",w=t.fx.animationEnd;else{m=[];for(h in r)v.test(h)?_+=h+"("+r[h]+") ":(b[h]=r[h],m.push(n(h)));_&&(b[a]=_,m.push(a)),i>0&&"object"==typeof r&&(b[s]=m.join(", "),b[u]=i+"s",b[l]=o||"linear")}return g=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(w,g)}t(this).css(y),p&&p.call(this)},i>0&&this.bind(w,g),this.size()&&this.get(0).clientLeft,this.css(b),0>=i&&setTimeout(function(){x.each(function(){g.call(this)})},0),this},g=null}(Zepto),function(t,e){function n(n,r,i,o,a){"function"!=typeof r||a||(a=r,r=e);var s={opacity:i};return o&&(s.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(s,r,null,a)}function r(e,r,i,o){return n(e,r,0,i,function(){a.call(t(this)),o&&o.call(this)})}var i=window.document,o=(i.documentElement,t.fn.show),a=t.fn.hide,s=t.fn.toggle;t.fn.show=function(t,r){return o.call(this),t===e?t=0:this.css("opacity",0),n(this,t,1,"1,1",r)},t.fn.hide=function(t,n){return t===e?a.call(this):r(this,t,"0,0",n)},t.fn.toggle=function(n,r){return n===e||"boolean"==typeof n?s.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,r)})},t.fn.fadeTo=function(t,e,r){return n(this,t,e,null,r)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return r(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var r=t(this);r[0==r.css("opacity")||"none"==r.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(t){var e,n=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(n.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",e&&clearTimeout(e),e=setTimeout(function(){n=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(t){function e(e,r){var u=e[s],l=u&&i[u];if(void 0===r)return l||n(e);if(l){if(r in l)return l[r];var c=a(r);if(c in l)return l[c]}return o.call(t(e),r)}function n(e,n,o){var u=e[s]||(e[s]=++t.uuid),l=i[u]||(i[u]=r(e));return void 0!==n&&(l[a(n)]=o),l}function r(e){var n={};return t.each(e.attributes,function(e,r){0==r.name.indexOf("data-")&&(n[a(r.name.replace("data-",""))]=t.zepto.deserializeValue(r.value))}),n}var i={},o=t.fn.data,a=t.camelCase,s=t.expando="Zepto"+ +new Date;t.fn.data=function(r,i){return void 0===i?t.isPlainObject(r)?this.each(function(e,i){t.each(r,function(t,e){n(i,t,e)})}):0==this.length?void 0:e(this[0],r):this.each(function(){n(this,r,i)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[s],r=n&&i[n];r&&t.each(e,function(){delete r[a(this)]})})}}(Zepto),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,r,i=s.exec(t);if(i&&i[2]in a&&(n=a[i[2]],r=i[3],t=i[1],r)){var o=Number(r);r=isNaN(o)?r.replace(/^["']|["']$/g,""):o}return e(t,n,r)}var r=t.zepto,i=r.qsa,o=r.matches,a=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,r){return t(this).text().indexOf(r)>-1?this:void 0},has:function(t,e,n){return r.qsa(this,n).length?this:void 0}},s=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,l="Zepto"+ +new Date;r.qsa=function(e,o){return n(o,function(n,a,s){try{var c;!n&&a?n="*":u.test(n)&&(c=t(e).addClass(l),n="."+l+" "+n);var d=i(e,n)}catch(f){throw console.error("error performing selector: %o",o),f}finally{c&&c.removeClass(l)}return a?r.uniq(t.map(d,function(t,e){return a.call(t,e,d,s)})):d})},r.matches=function(t,e){return n(e,function(e,n,r){return!(e&&!o(t,e)||n&&n.call(t,null,r)!==t)})}}(Zepto),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=n.apply(this,arguments);return t.prevObject=this,t}})}(Zepto),function(t){function e(t){return"tagName"in t?t:t.parentNode}function n(t,e,n,r){var i=Math.abs(t-e),o=Math.abs(n-r);return i>=o?t-e>0?"Left":"Right":n-r>0?"Up":"Down"}function r(){l=null,c.last&&(c.el.trigger("longTap"),c={})}function i(){l&&clearTimeout(l),l=null}function o(){a&&clearTimeout(a),s&&clearTimeout(s),u&&clearTimeout(u),l&&clearTimeout(l),a=s=u=l=null,c={}}var a,s,u,l,c={},d=750;t(document).ready(function(){var f,p;t(document.body).bind("touchstart",function(n){f=Date.now(),p=f-(c.last||f),c.el=t(e(n.touches[0].target)),a&&clearTimeout(a),c.x1=n.touches[0].pageX,c.y1=n.touches[0].pageY,p>0&&250>=p&&(c.isDoubleTap=!0),c.last=f,l=setTimeout(r,d)}).bind("touchmove",function(t){i(),c.x2=t.touches[0].pageX,c.y2=t.touches[0].pageY,Math.abs(c.x1-c.x2)>10&&t.preventDefault()}).bind("touchend",function(){i(),c.x2&&Math.abs(c.x1-c.x2)>30||c.y2&&Math.abs(c.y1-c.y2)>30?u=setTimeout(function(){c.el.trigger("swipe"),c.el.trigger("swipe"+n(c.x1,c.x2,c.y1,c.y2)),c={}},0):"last"in c&&(s=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=o,c.el.trigger(e),c.isDoubleTap?(c.el.trigger("doubleTap"),c={}):a=setTimeout(function(){a=null,c.el.trigger("singleTap"),c={}},250)},0))}).bind("touchcancel",o),t(window).bind("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}(Zepto),this.Zepto&&function(t){var e,n;return e=function(t,e,n,r,i){var o,a;return t?(a=t[n](),o={width:["left","right"],height:["top","bottom"]},o[n].forEach(function(e){return a+=parseInt(t.css("padding-"+e),10),r&&(a+=parseInt(t.css("border-"+e+"-width"),10)),i?a+=parseInt(t.css("margin-"+e),10):void 0}),a):null},["width","height"].forEach(function(n){var r,i,o,a,s;return r=n.replace(/./,function(t){return t[0].toUpperCase()}),(i=t.fn)[a="inner"+r]||(i[a]=function(t){return e(this,r,n,!1,t)}),(o=t.fn)[s="outer"+r]||(o[s]=function(t){return e(this,r,n,!0,t)})}),(n=t.fn).detach||(n.detach=function(t){var e,n;return n=this,null!=t&&(n=n.filter(t)),e=n.clone(!0),n.remove(),e})}(Zepto);