!function(e,t,n){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.4.7",settings:{index:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all"},init:function(t,n,r){Foundation.inherit(this,"add_custom_rule register_media throttle");var o=this;o.register_media("topbar","foundation-mq-topbar"),this.bindings(n,r),o.S("["+this.attr_name()+"]",this.scope).each(function(){var t=e(this),n=t.data(o.attr_name(!0)+"-init");o.S("section, .top-bar-section",this),t.data("index",0);var r=t.parent();r.hasClass("fixed")||o.is_sticky(t,r,n)?(o.settings.sticky_class=n.sticky_class,o.settings.sticky_topbar=t,t.data("height",r.outerHeight()),t.data("stickyoffset",r.offset().top)):t.data("height",t.outerHeight()),n.assembled||o.assemble(t),n.is_hover?o.S(".has-dropdown",t).addClass("not-click"):o.S(".has-dropdown",t).removeClass("not-click"),o.add_custom_rule(".f-topbar-fixed { padding-top: "+t.data("height")+"px }"),r.hasClass("fixed")&&o.S("body").addClass("f-topbar-fixed")})},is_sticky:function(e,t,n){var r=t.hasClass(n.sticky_class);return r&&"all"===n.sticky_on?!0:r&&this.small()&&"small"===n.sticky_on?matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches&&!matchMedia(Foundation.media_queries.large).matches:r&&this.medium()&&"medium"===n.sticky_on?matchMedia(Foundation.media_queries.small).matches&&matchMedia(Foundation.media_queries.medium).matches&&!matchMedia(Foundation.media_queries.large).matches:r&&this.large()&&"large"===n.sticky_on?matchMedia(Foundation.media_queries.small).matches&&matchMedia(Foundation.media_queries.medium).matches&&matchMedia(Foundation.media_queries.large).matches:!1},toggle:function(n){var r,o=this;r=n?o.S(n).closest("["+this.attr_name()+"]"):o.S("["+this.attr_name()+"]");var i=r.data(this.attr_name(!0)+"-init"),a=o.S("section, .top-bar-section",r);o.breakpoint()&&(o.rtl?(a.css({right:"0%"}),e(">.name",a).css({right:"100%"})):(a.css({left:"0%"}),e(">.name",a).css({left:"100%"})),o.S("li.moved",a).removeClass("moved"),r.data("index",0),r.toggleClass("expanded").css("height","")),i.scrolltop?r.hasClass("expanded")?r.parent().hasClass("fixed")&&(i.scrolltop?(r.parent().removeClass("fixed"),r.addClass("fixed"),o.S("body").removeClass("f-topbar-fixed"),t.scrollTo(0,0)):r.parent().removeClass("expanded")):r.hasClass("fixed")&&(r.parent().addClass("fixed"),r.removeClass("fixed"),o.S("body").addClass("f-topbar-fixed")):(o.is_sticky(r,r.parent(),i)&&r.parent().addClass("fixed"),r.parent().hasClass("fixed")&&(r.hasClass("expanded")?(r.addClass("fixed"),r.parent().addClass("expanded"),o.S("body").addClass("f-topbar-fixed")):(r.removeClass("fixed"),r.parent().removeClass("expanded"),o.update_sticky_positioning())))},timer:null,events:function(){var n=this,r=this.S;r(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(e){e.preventDefault(),n.toggle(this)}).on("click.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(){var t=e(this).closest("li");!n.breakpoint()||t.hasClass("back")||t.hasClass("has-dropdown")||n.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(t){var o=r(this),i=r(t.target),a=o.closest("["+n.attr_name()+"]"),s=a.data(n.attr_name(!0)+"-init");return i.data("revealId")?(n.toggle(),void 0):(n.breakpoint()||(!s.is_hover||Modernizr.touch)&&(t.stopImmediatePropagation(),o.hasClass("hover")?(o.removeClass("hover").find("li").removeClass("hover"),o.parents("li.hover").removeClass("hover")):(o.addClass("hover"),e(o).siblings().removeClass("hover"),"A"===i[0].nodeName&&i.parent().hasClass("has-dropdown")&&t.preventDefault())),void 0)}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(e){if(n.breakpoint()){e.preventDefault();var t=r(this),o=t.closest("["+n.attr_name()+"]"),i=o.find("section, .top-bar-section"),a=(t.next(".dropdown").outerHeight(),t.closest("li"));o.data("index",o.data("index")+1),a.addClass("moved"),n.rtl?(i.css({right:-(100*o.data("index"))+"%"}),i.find(">.name").css({right:100*o.data("index")+"%"})):(i.css({left:-(100*o.data("index"))+"%"}),i.find(">.name").css({left:100*o.data("index")+"%"})),o.css("height",t.siblings("ul").outerHeight(!0)+o.data("height"))}}),r(t).off(".topbar").on("resize.fndtn.topbar",n.throttle(function(){n.resize.call(n)},50)).trigger("resize").trigger("resize.fndtn.topbar").load(function(){r(this).trigger("resize.fndtn.topbar")}),r("body").off(".topbar").on("click.fndtn.topbar",function(e){var t=r(e.target).closest("li").closest("li.hover");t.length>0||r("["+n.attr_name()+"] li.hover").removeClass("hover")}),r(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(e){e.preventDefault();var t=r(this),o=t.closest("["+n.attr_name()+"]"),i=o.find("section, .top-bar-section"),a=(o.data(n.attr_name(!0)+"-init"),t.closest("li.moved")),s=a.parent();o.data("index",o.data("index")-1),n.rtl?(i.css({right:-(100*o.data("index"))+"%"}),i.find(">.name").css({right:100*o.data("index")+"%"})):(i.css({left:-(100*o.data("index"))+"%"}),i.find(">.name").css({left:100*o.data("index")+"%"})),0===o.data("index")?o.css("height",""):o.css("height",s.outerHeight(!0)+o.data("height")),setTimeout(function(){a.removeClass("moved")},300)}),r(this.scope).find(".dropdown a").focus(function(){e(this).parents(".has-dropdown").addClass("hover")}).blur(function(){e(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var e=this;e.S("["+this.attr_name()+"]").each(function(){var t,r=e.S(this),o=r.data(e.attr_name(!0)+"-init"),i=r.parent("."+e.settings.sticky_class);if(!e.breakpoint()){var a=r.hasClass("expanded");r.css("height","").removeClass("expanded").find("li").removeClass("hover"),a&&e.toggle(r)}e.is_sticky(r,i,o)&&(i.hasClass("fixed")?(i.removeClass("fixed"),t=i.offset().top,e.S(n.body).hasClass("f-topbar-fixed")&&(t-=r.data("height")),r.data("stickyoffset",t),i.addClass("fixed")):(t=i.offset().top,r.data("stickyoffset",t)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(t){var n=this,r=t.data(this.attr_name(!0)+"-init"),o=n.S("section, .top-bar-section",t);o.detach(),n.S(".has-dropdown>a",o).each(function(){var t,o=n.S(this),i=o.siblings(".dropdown"),a=o.attr("href");i.find(".title.back").length||(t=1==r.mobile_show_parent_link&&a?e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="'+a+'">'+o.html()+"</a></li>"):e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),1==r.custom_back_text?e("h5>a",t).html(r.back_text):e("h5>a",t).html("&laquo; "+o.html()),i.prepend(t))}),o.appendTo(t),this.sticky(),this.assembled(t)},assembled:function(t){t.data(this.attr_name(!0),e.extend({},t.data(this.attr_name(!0)),{assembled:!0}))},height:function(t){var n=0,r=this;return e("> li",t).each(function(){n+=r.S(this).outerHeight(!0)}),n},sticky:function(){var e=this;this.S(t).on("scroll",function(){e.update_sticky_positioning()})},update_sticky_positioning:function(){var e="."+this.settings.sticky_class,n=this.S(t),r=this;if(r.settings.sticky_topbar&&r.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var o=this.settings.sticky_topbar.data("stickyoffset");r.S(e).hasClass("expanded")||(n.scrollTop()>o?r.S(e).hasClass("fixed")||(r.S(e).addClass("fixed"),r.S("body").addClass("f-topbar-fixed")):n.scrollTop()<=o&&r.S(e).hasClass("fixed")&&(r.S(e).removeClass("fixed"),r.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(t).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document);