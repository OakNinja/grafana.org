define(["../core","./var/rnumnonpx","./var/rmargin","./var/getStyles","../selector"],function(e,t,n,i){function o(o,r,d){var l,u,c,a,s=o.style;return d=d||i(o),d&&(a=d.getPropertyValue(r)||d[r]),d&&(""!==a||e.contains(o.ownerDocument,o)||(a=e.style(o,r)),t.test(a)&&n.test(r)&&(l=s.width,u=s.minWidth,c=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=d.width,s.width=l,s.minWidth=u,s.maxWidth=c)),void 0!==a?a+"":a}return o});