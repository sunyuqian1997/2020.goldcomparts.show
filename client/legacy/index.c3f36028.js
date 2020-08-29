import{r as t,u as s,_ as a,a as r,b as n,c as e,i as c,s as o,d as i,S as f,f as u,e as l,t as h,j as v,k as m,h as p,l as d,g,m as E,n as b,o as y,v as x,q as R,w,p as A,x as I}from"./client.0ba1f643.js";import{t as D}from"./tsv.c906c42a.js";import{s as j}from"./helpers.38afc14c.js";function N(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,e=r(t);if(s){var c=r(this).constructor;a=Reflect.construct(e,arguments,c)}else a=e.apply(this,arguments);return n(this,a)}}function V(t,s,a){var r=t.slice();return r[2]=s[a],r}function M(t){var s,a,r,n,e,c,o,i,f,R,w,A=t[2].name+"",I=(t[2].otherName?"  (".concat(t[2].otherName,")"):"")+"";return{c:function(){s=u("div"),a=u("a"),r=u("img"),c=l(),o=h(A),i=l(),f=h(I),w=l(),this.h()},l:function(t){s=v(t,"DIV",{class:!0});var n=m(s);a=v(n,"A",{href:!0});var e=m(a);r=v(e,"IMG",{class:!0,src:!0,alt:!0}),c=p(e),o=d(e,A),i=p(e),f=d(e,I),e.forEach(g),w=p(n),n.forEach(g),this.h()},h:function(){E(r,"class","bio-photo svelte-1uzmr0d"),r.src!==(n="img/bios/"+t[2].username+".jpeg")&&E(r,"src",n),E(r,"alt",e=t[2].name),E(a,"href",R="artists/"+j(t[2].name)),E(s,"class","bio-box svelte-1uzmr0d")},m:function(t,n){b(t,s,n),y(s,a),y(a,r),y(a,c),y(a,o),y(a,i),y(a,f),y(s,w)},p:function(t,s){1&s&&r.src!==(n="img/bios/"+t[2].username+".jpeg")&&E(r,"src",n),1&s&&e!==(e=t[2].name)&&E(r,"alt",e),1&s&&A!==(A=t[2].name+"")&&x(o,A),1&s&&I!==(I=(t[2].otherName?"  (".concat(t[2].otherName,")"):"")+"")&&x(f,I),1&s&&R!==(R="artists/"+j(t[2].name))&&E(a,"href",R)},d:function(t){t&&g(s)}}}function S(t){for(var s,a,r,n,e,c,o,i,f,x,D,j,N,S,$=t[0],z=[],C=0;C<$.length;C+=1)z[C]=M(V(t,$,C));return{c:function(){s=l(),a=u("section"),r=u("div"),n=u("div"),e=u("h1"),c=h("Artists"),o=l(),i=u("h2"),f=h("MA/MFA Computational Arts 2020 - Goldsmiths"),x=l(),D=u("section"),j=u("div"),N=u("div"),S=u("div");for(var t=0;t<z.length;t+=1)z[t].c();this.h()},l:function(t){R('[data-svelte="svelte-1xemdmz"]',document.head).forEach(g),s=p(t),a=v(t,"SECTION",{class:!0});var u=m(a);r=v(u,"DIV",{class:!0});var l=m(r);n=v(l,"DIV",{class:!0});var h=m(n);e=v(h,"H1",{class:!0});var E=m(e);c=d(E,"Artists"),E.forEach(g),o=p(h),i=v(h,"H2",{class:!0});var b=m(i);f=d(b,"MA/MFA Computational Arts 2020 - Goldsmiths"),b.forEach(g),h.forEach(g),l.forEach(g),u.forEach(g),x=p(t),D=v(t,"SECTION",{class:!0});var y=m(D);j=v(y,"DIV",{class:!0});var w=m(j);N=v(w,"DIV",{class:!0});var A=m(N);S=v(A,"DIV",{class:!0});for(var I=m(S),V=0;V<z.length;V+=1)z[V].l(I);I.forEach(g),A.forEach(g),w.forEach(g),y.forEach(g),this.h()},h:function(){document.title="Final Show - 2020",E(e,"class","title"),E(i,"class","subtitle"),E(n,"class","container"),E(r,"class","hero-body"),E(a,"class","hero is-primary"),E(S,"class","bio-boxes svelte-1uzmr0d"),E(N,"class","content"),E(j,"class","container"),E(D,"class","section")},m:function(t,u){b(t,s,u),b(t,a,u),y(a,r),y(r,n),y(n,e),y(e,c),y(n,o),y(n,i),y(i,f),b(t,x,u),b(t,D,u),y(D,j),y(j,N),y(N,S);for(var l=0;l<z.length;l+=1)z[l].m(S,null)},p:function(t,s){var a=w(s,1)[0];if(1&a){var r;for($=t[0],r=0;r<$.length;r+=1){var n=V(t,$,r);z[r]?z[r].p(n,a):(z[r]=M(n),z[r].c(),z[r].m(S,null))}for(;r<z.length;r+=1)z[r].d(1);z.length=$.length}},i:A,o:A,d:function(t){t&&g(s),t&&g(a),t&&g(x),t&&g(D),I(z,t)}}}function $(t){return z.apply(this,arguments)}function z(){return(z=t(s.mark((function t(a){var r;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.params,t.next=3,this.fetch("artists.tsv").then((function(t){return t.text()}));case 3:return r=t.sent,t.abrupt("return",{artistsRows:r});case 5:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function C(t,s,a){var r,n=s.artistsRows;return t.$set=function(t){"artistsRows"in t&&a(1,n=t.artistsRows)},t.$$.update=function(){2&t.$$.dirty&&a(0,r=D(n))},[r,n]}var F=function(t){a(r,f);var s=N(r);function r(t){var a;return e(this,r),a=s.call(this),c(i(a),t,C,S,o,{artistsRows:1}),a}return r}();export default F;export{$ as preload};
