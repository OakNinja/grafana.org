!function(e,t){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.4.7",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(){var n=this,i=n.S,r=n.settings;n.set_expedition_position(),i(n.scope).off(".magellan").on("click.fndtn.magellan","["+n.add_namespace("data-magellan-arrival")+'] a[href^="#"]',function(t){t.preventDefault();var i=e(this).closest("["+n.attr_name()+"]"),r=i.data("magellan-expedition-init"),o=this.hash.split("#").join(""),s=e("a[name='"+o+"']");0===s.length&&(s=e("#"+o));var a=s.offset().top-r.destination_threshold+1;a-=i.outerHeight(),e("html, body").stop().animate({scrollTop:a},700,"swing",function(){history.pushState?history.pushState(null,null,"#"+o):location.hash="#"+o})}).on("scroll.fndtn.magellan",n.throttle(this.check_for_arrivals.bind(this),r.throttle_delay)),e(t).on("resize.fndtn.magellan",n.throttle(this.set_expedition_position.bind(this),r.throttle_delay))},check_for_arrivals:function(){var e=this;e.update_arrivals(),e.update_expedition_positions()},set_expedition_position:function(){var t=this;e("["+this.attr_name()+"=fixed]",t.scope).each(function(){var n,i,r=e(this),o=r.data("magellan-expedition-init"),s=r.attr("styles");r.attr("style",""),n=r.offset().top+o.threshold,i=parseInt(r.data("magellan-fixed-top")),isNaN(i)||(t.settings.fixed_top=i),r.data(t.data_attr("magellan-top-offset"),n),r.attr("style",s)})},update_expedition_positions:function(){var n=this,i=e(t).scrollTop();e("["+this.attr_name()+"=fixed]",n.scope).each(function(){var t=e(this),r=t.data("magellan-expedition-init"),o=t.attr("style"),s=t.data("magellan-top-offset");if(i+n.settings.fixed_top>=s){var a=t.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]");0===a.length&&(a=t.clone(),a.removeAttr(n.attr_name()),a.attr(n.add_namespace("data-magellan-expedition-clone"),""),t.before(a)),t.css({position:"fixed",top:r.fixed_top}).addClass("fixed")}else t.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]").remove(),t.attr("style",o).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var n=this,i=e(t).scrollTop();e("["+this.attr_name()+"]",n.scope).each(function(){var t=e(this),r=t.data(n.attr_name(!0)+"-init"),o=n.offsets(t,i),s=t.find("["+n.add_namespace("data-magellan-arrival")+"]"),a=!1;o.each(function(e,i){if(i.viewport_offset>=i.top_offset){var o=t.find("["+n.add_namespace("data-magellan-arrival")+"]");return o.not(i.arrival).removeClass(r.active_class),i.arrival.addClass(r.active_class),a=!0,!0}}),a||s.removeClass(r.active_class)})},offsets:function(t,n){var i=this,r=t.data(i.attr_name(!0)+"-init"),o=n;return t.find("["+i.add_namespace("data-magellan-arrival")+"]").map(function(){var n=e(this).data(i.data_attr("magellan-arrival")),s=e("["+i.add_namespace("data-magellan-destination")+"="+n+"]");if(s.length>0){var a=Math.floor(s.offset().top-r.destination_threshold-t.outerHeight());return{destination:s,arrival:e(this),top_offset:a,viewport_offset:o}}}).sort(function(e,t){return e.top_offset<t.top_offset?-1:e.top_offset>t.top_offset?1:0})},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){this.S(this.scope).off(".magellan"),this.S(t).off(".magellan")},reflow:function(){var t=this;e("["+t.add_namespace("data-magellan-expedition-clone")+"]",t.scope).remove()}}}(jQuery,window,window.document);