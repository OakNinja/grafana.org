define(["ModernizrProto","cssomPrefixes"],function(e,t){var n=function(e){var n,i=t.length,r=window.CSSRule;if("undefined"==typeof r)return void 0;if(!e)return!1;if(e=e.replace(/^@/,""),n=e.replace(/-/g,"_").toUpperCase()+"_RULE",n in r)return"@"+e;for(var o=0;i>o;o++){var a=t[o],s=a.toUpperCase()+"_"+n;if(s in r)return"@-"+a.toLowerCase()+"-"+e}return!1};return e.atRule=n,n});