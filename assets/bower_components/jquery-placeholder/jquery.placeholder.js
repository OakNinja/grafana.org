!function(e,t,n){function r(e){var t={},r=/^jQuery\d+$/;return n.each(e.attributes,function(e,n){n.specified&&!r.test(n.name)&&(t[n.name]=n.value)}),t}function o(e,t){var r=this,o=n(r);if(r.value==o.attr("placeholder")&&o.hasClass("placeholder"))if(o.data("placeholder-password")){if(o=o.hide().next().show().attr("id",o.removeAttr("id").data("placeholder-id")),e===!0)return o[0].value=t;o.focus()}else r.value="",o.removeClass("placeholder"),r==a()&&r.select()}function i(){var e,t=this,i=n(t),a=this.id;if(""==t.value){if("password"==t.type){if(!i.data("placeholder-textinput")){try{e=i.clone().attr({type:"text"})}catch(s){e=n("<input>").attr(n.extend(r(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":i,"placeholder-id":a}).bind("focus.placeholder",o),i.data({"placeholder-textinput":e,"placeholder-id":a}).before(e)}i=i.removeAttr("id").hide().prev().attr("id",a).show()}i.addClass("placeholder"),i[0].value=i.attr("placeholder")}else i.removeClass("placeholder")}function a(){try{return t.activeElement}catch(e){}}var s,u,l="[object OperaMini]"==Object.prototype.toString.call(e.operamini),c="placeholder"in t.createElement("input")&&!l,d="placeholder"in t.createElement("textarea")&&!l,f=n.fn,p=n.valHooks,h=n.propHooks;c&&d?(u=f.placeholder=function(){return this},u.input=u.textarea=!0):(u=f.placeholder=function(){var e=this;return e.filter((c?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":o,"blur.placeholder":i}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},u.input=c,u.textarea=d,s={get:function(e){var t=n(e),r=t.data("placeholder-password");return r?r[0].value:t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,t){var r=n(e),s=r.data("placeholder-password");return s?s[0].value=t:r.data("placeholder-enabled")?(""==t?(e.value=t,e!=a()&&i.call(e)):r.hasClass("placeholder")?o.call(e,!0,t)||(e.value=t):e.value=t,r):e.value=t}},c||(p.input=s,h.value=s),d||(p.textarea=s,h.value=s),n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(o);setTimeout(function(){e.each(i)},10)})}),n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);