define(["./core","./manipulation/var/rcheckableType","./core/init","./traversing","./attributes/prop"],function(e,t){function n(t,r,o,a){var u;if(e.isArray(r))e.each(r,function(e,r){o||i.test(t)?a(t,r):n(t+"["+("object"==typeof r?e:"")+"]",r,o,a)});else if(o||"object"!==e.type(r))a(t,r);else for(u in r)n(t+"["+u+"]",r[u],o,a)}var r=/%20/g,i=/\[\]$/,o=/\r?\n/g,a=/^(?:submit|button|image|reset|file)$/i,u=/^(?:input|select|textarea|keygen)/i;return e.param=function(t,i){var o,a=[],u=function(t,n){n=e.isFunction(n)?n():null==n?"":n,a[a.length]=encodeURIComponent(t)+"="+encodeURIComponent(n)};if(void 0===i&&(i=e.ajaxSettings&&e.ajaxSettings.traditional),e.isArray(t)||t.jquery&&!e.isPlainObject(t))e.each(t,function(){u(this.name,this.value)});else for(o in t)n(o,t[o],i,u);return a.join("&").replace(r,"+")},e.fn.extend({serialize:function(){return e.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=e.prop(this,"elements");return t?e.makeArray(t):this}).filter(function(){var n=this.type;return this.name&&!e(this).is(":disabled")&&u.test(this.nodeName)&&!a.test(n)&&(this.checked||!t.test(n))}).map(function(t,n){var r=e(this).val();return null==r?null:e.isArray(r)?e.map(r,function(e){return{name:n.name,value:e.replace(o,"\r\n")}}):{name:n.name,value:r.replace(o,"\r\n")}}).get()}}),e});