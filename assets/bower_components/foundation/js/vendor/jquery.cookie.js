/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return a.raw?e:encodeURIComponent(e)}function n(e){return a.raw?e:decodeURIComponent(e)}function i(e){return t(a.json?JSON.stringify(e):String(e))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(s," "))}catch(t){return}try{return a.json?JSON.parse(e):e}catch(t){}}function o(t,n){var i=a.raw?t:r(t);return e.isFunction(n)?n(i):i}var s=/\+/g,a=e.cookie=function(r,s,u){if(void 0!==s&&!e.isFunction(s)){if(u=e.extend({},a.defaults,u),"number"==typeof u.expires){var c=u.expires,l=u.expires=new Date;l.setDate(l.getDate()+c)}return document.cookie=[t(r),"=",i(s),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}for(var d=r?void 0:{},f=document.cookie?document.cookie.split("; "):[],p=0,h=f.length;h>p;p++){var m=f[p].split("="),g=n(m.shift()),v=m.join("=");if(r&&r===g){d=o(v,s);break}r||void 0===(v=o(v))||(d[g]=v)}return d};a.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});