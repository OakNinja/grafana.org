!function(){function e(e){var t={};for(var r in e)try{t[r]={type:typeof e[r],value:e[r]}}catch(n){t[r]={}}return t}function t(){var e=document.createElement("iframe");e.style.display="none";var t=document.getElementsByTagName("script")[0];return t.parentNode.insertBefore(e,t),e.src="about:blank",e.contentWindow}function r(e){var t=0;for(var r in e)t++;return t}function n(e){for(var t in i){var r=document.getElementById("__"+t),n=i[t].indexOf(e)>-1;if(n&&(r?r.checked:!0))return!0}}function o(){var o=function(){return this}(),i=e(o),s=t();for(var a in s)i[a]&&delete i[a];for(var a in i)n(a)&&delete i[a];window.__globalsCount=r(i),window.__globals=i,window.console&&console.log("Total number of global properties: "+__globalsCount),window.console&&console.dir(__globals)}var i={Prototype:"$$ $A $F $H $R $break $continue $w Abstract Ajax Class Enumerable Element Field Form "+"Hash Insertion ObjectRange PeriodicalExecuter Position Prototype Selector Template Toggle Try".split(" "),Scriptaculous:"Autocompleter Builder Control Draggable Draggables Droppables Effect Sortable SortableObserver Sound Scriptaculous".split(" "),Firebug:"loadFirebugConsole console _getFirebugConsoleElement _FirebugConsole _FirebugCommandLine _firebug".split(" "),Mozilla:"Components XPCNativeWrapper XPCSafeJSObjectWrapper getInterface netscape GetWeakReference GeckoActiveXObject".split(" "),GoogleAnalytics:"gaJsHost gaGlobal _gat _gaq pageTracker".split(" "),lazyGlobals:"onhashchange".split(" ")},s=document.getElementById("__analyze");s&&(s.onclick=o),o()}();