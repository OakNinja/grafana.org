function dumpModernizr(){var n="";dumpModernizr.old=dumpModernizr.old||{};for(var t in Modernizr)if(!dumpModernizr.old[t]&&(dumpModernizr.old[t]=!0,"function"!=typeof Modernizr[t]&&!/^test/.test(t)))if(~TEST.inputs.indexOf(t)){n+="<li><b>"+t+"{}</b><ul>";for(var e in Modernizr[t])n+='<li class="'+(Modernizr[t][e]?"yes":"")+'">'+e+": "+Modernizr[t][e]+"</li>";n+="</ul></li>"}else n+='<li  id="'+t+'" class="'+(Modernizr[t]?"yes":"")+'">'+t+": "+Modernizr[t]+"</li>";return n}function grabFeatDetects(){$.getScript("https://api.github.com/repos/Modernizr/Modernizr/git/trees/master?recursive=1&callback=processTree")}function processTree(n){for(var t=[],e=0;e<n.data.tree.length;e++){var r=n.data.tree[e],a=r.path.match(/^feature-detects\/(.*)/);if(a){var o="modernizr.github.com"==location.host?"../modernizr-git/":"../";t.push(o+a[0])}}var i=t.map(function(n){return jQuery.getScript(n)});jQuery.when.apply(jQuery,i).done(resultsToDOM)}function resultsToDOM(){var n=document.createElement("div"),t=document.getElementById("qunit-testresult")||document.getElementById("qunit-tests");n.className="output",n.innerHTML=dumpModernizr(),t.parentNode.insertBefore(n,t),document.getElementsByTagName("textarea")[0].innerHTML=JSON.stringify(Modernizr)}resultsToDOM(),grabFeatDetects(),setTimeout(resultsToDOM,5e3),setTimeout(resultsToDOM,15e3);