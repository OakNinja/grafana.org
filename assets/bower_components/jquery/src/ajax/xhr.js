define(["../core","../var/support","../ajax"],function(e,t){e.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var n=0,i={},r={0:200,1223:204},o=e.ajaxSettings.xhr();window.ActiveXObject&&e(window).on("unload",function(){for(var e in i)i[e]()}),t.cors=!!o&&"withCredentials"in o,t.ajax=o=!!o,e.ajaxTransport(function(e){var s;return t.cors||o&&!e.crossDomain?{send:function(t,o){var a,l=e.xhr(),c=++n;if(l.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)l[a]=e.xhrFields[a];e.mimeType&&l.overrideMimeType&&l.overrideMimeType(e.mimeType),e.crossDomain||t["X-Requested-With"]||(t["X-Requested-With"]="XMLHttpRequest");for(a in t)l.setRequestHeader(a,t[a]);s=function(e){return function(){s&&(delete i[c],s=l.onload=l.onerror=null,"abort"===e?l.abort():"error"===e?o(l.status,l.statusText):o(r[l.status]||l.status,l.statusText,"string"==typeof l.responseText?{text:l.responseText}:void 0,l.getAllResponseHeaders()))}},l.onload=s(),l.onerror=s("error"),s=i[c]=s("abort");try{l.send(e.hasContent&&e.data||null)}catch(u){if(s)throw u}},abort:function(){s&&s()}}:void 0})});