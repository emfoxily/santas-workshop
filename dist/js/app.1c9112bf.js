(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],f=0,p=[];f<c.length;f++)i=c[f],a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"0628":function(t,e,n){"use strict";var r=n("0eff"),a=n.n(r);a.a},"0bc8":function(t,e,n){"use strict";var r=n("7cd9"),a=n.n(r);a.a},"0eff":function(t,e,n){},"198f":function(t,e,n){},"2a5f":function(t,e,n){"use strict";var r=n("d7b6"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",[n("router-view")],1)])},o=[],i={name:"app"},c=i,s=(n("034f"),n("2877")),u=Object(s["a"])(c,a,o,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navigation"),r("header",[r("router-link",{attrs:{to:"/home"}},[r("img",{attrs:{src:n("cf05"),alt:"Santa's Workshop"}})]),r("h3",[t._v("\n      Quality toys est. 1843 — unless you're on the naughty list\n    ")])],1)],1)},v=[],m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("ul",[r("li",[r("router-link",{attrs:{to:"/home"}},[r("img",{attrs:{src:n("b52e"),alt:"favicon"}})])],1),r("li",{staticClass:"links"},[r("router-link",{attrs:{to:"/team"}},[t._v("\n                  meet the team\n            ")])],1),r("li",{staticClass:"links"},[r("router-link",{attrs:{to:"/services"}},[t._v("\n                  services\n            ")])],1),r("li",{staticClass:"links"},[r("router-link",{attrs:{to:"/contact"}},[t._v("\n                  contact\n            ")])],1)])])},g=[],d={name:"Navigation"},h=d,_=(n("0bc8"),Object(s["a"])(h,m,g,!1,null,null,null));_.options.__file="Navigation.vue";var b=_.exports,y={name:"HomePage",components:{Navigation:b}},x=y,O=(n("2a5f"),Object(s["a"])(x,p,v,!1,null,"19c53221",null));O.options.__file="HomePage.vue";var j=O.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{staticClass:"trees",attrs:{src:n("7a46")}}),r("form",{staticClass:"login",attrs:{action:"/home"}},[r("input",{attrs:{type:"text",placeholder:"USERNAME"}}),r("br"),r("input",{attrs:{type:"password",placeholder:"PASSWORD"}}),r("br"),r("input",{attrs:{type:"submit",value:"LOGIN"}})]),r("img",{attrs:{src:n("f4de"),alt:"Login Sign"}})])}],w={name:"LoginPage"},k=w,N=(n("d359"),Object(s["a"])(k,P,S,!1,null,null,null));N.options.__file="LoginPage.vue";var E=N.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navigation")],1)},C=[],M={name:"Meet the Team",components:{Navigation:b}},T=M,L=(n("b0af"),Object(s["a"])(T,$,C,!1,null,null,null));L.options.__file="TeamPage.vue";var A=L.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navigation")],1)},J=[],R={name:"Services",components:{Navigation:b}},U=R,W=(n("0628"),Object(s["a"])(U,H,J,!1,null,null,null));W.options.__file="ServicesPage.vue";var D=W.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navigation")],1)},I=[],Q={name:"Contact",components:{Navigation:b}},q=Q,z=(n("6edb"),Object(s["a"])(q,G,I,!1,null,null,null));z.options.__file="ContactPage.vue";var B=z.exports;r["a"].use(f["a"]);var F=new f["a"]({mode:"history",routes:[{path:"/",name:"Login/Sign Up",component:E},{path:"/home",name:"Home",component:j},{path:"/team",name:"Meet The Team",component:A},{path:"/services",name:"Services",component:D},{path:"/contact",name:"Contact",component:B}]});r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(l)},router:F}).$mount("#app")},"64a9":function(t,e,n){},"6edb":function(t,e,n){"use strict";var r=n("9316"),a=n.n(r);a.a},"7a46":function(t,e,n){t.exports=n.p+"img/trees.1628b297.png"},"7cd9":function(t,e,n){},9316:function(t,e,n){},b0af:function(t,e,n){"use strict";var r=n("198f"),a=n.n(r);a.a},b52e:function(t,e,n){t.exports=n.p+"img/favicon.4889e2a7.png"},ce83:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.89a88699.png"},d359:function(t,e,n){"use strict";var r=n("ce83"),a=n.n(r);a.a},d7b6:function(t,e,n){},f4de:function(t,e,n){t.exports=n.p+"img/login-sign.28262424.png"}});
//# sourceMappingURL=app.1c9112bf.js.map