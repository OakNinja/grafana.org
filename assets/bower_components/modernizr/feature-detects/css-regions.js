Modernizr.addTest("regions",function(){var t=Modernizr.prefixed("flowFrom"),e=Modernizr.prefixed("flowInto");if(!t||!e)return!1;var n=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div"),o="modernizr_flow_for_regions_check";i.innerText="M",n.style.cssText="top: 150px; left: 150px; padding: 0px;",r.style.cssText="width: 50px; height: 50px; padding: 42px;",r.style[t]=o,n.appendChild(i),n.appendChild(r),document.documentElement.appendChild(n);var s,a,l=i.getBoundingClientRect();return i.style[e]=o,s=i.getBoundingClientRect(),a=s.left-l.left,document.documentElement.removeChild(n),i=r=n=void 0,42==a});