define(["ModernizrProto","cssomPrefixes","is","testProps","domPrefixes","testDOMProps"],function(e,t,n,i,r,o){function a(e,a,s,c,l){var u=e.charAt(0).toUpperCase()+e.slice(1),d=(e+" "+t.join(u+" ")+u).split(" ");return n(a,"string")||n(a,"undefined")?i(d,a,c,l):(d=(e+" "+r.join(u+" ")+u).split(" "),o(d,a,s))}return e.testAllProps=a,a});