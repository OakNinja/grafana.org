define(["../core","../css"],function(t){function e(t,n,i,r,o){return new e.prototype.init(t,n,i,r,o)}t.Tween=e,e.prototype={constructor:e,init:function(e,n,i,r,o,s){this.elem=e,this.prop=i,this.easing=o||"swing",this.options=n,this.start=this.now=this.cur(),this.end=r,this.unit=s||(t.cssNumber[i]?"":"px")},cur:function(){var t=e.propHooks[this.prop];return t&&t.get?t.get(this):e.propHooks._default.get(this)},run:function(n){var i,r=e.propHooks[this.prop];return this.pos=i=this.options.duration?t.easing[this.easing](n,this.options.duration*n,0,1,this.options.duration):n,this.now=(this.end-this.start)*i+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),r&&r.set?r.set(this):e.propHooks._default.set(this),this}},e.prototype.init.prototype=e.prototype,e.propHooks={_default:{get:function(e){var n;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(n=t.css(e.elem,e.prop,""),n&&"auto"!==n?n:0):e.elem[e.prop]},set:function(e){t.fx.step[e.prop]?t.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[t.cssProps[e.prop]]||t.cssHooks[e.prop])?t.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},e.propHooks.scrollTop=e.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},t.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}},t.fx=e.prototype.init,t.fx.step={}});