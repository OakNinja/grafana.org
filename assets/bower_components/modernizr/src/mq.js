define(["ModernizrProto","injectElementWithStyles"],function(e,t){var n=function(){var e=window.matchMedia||window.msMatchMedia;return e?function(t){var n=e(t);return n&&n.matches||!1}:function(e){var n=!1;return t("@media "+e+" { #modernizr { position: absolute; } }",function(e){n="absolute"==(window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle).position}),n}}();return e.mq=n,n});