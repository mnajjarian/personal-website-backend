(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[20,26],{169:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var s in n)t.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},190:function(e,a,t){e.exports=t.p+"static/media/avatar.41c9a2b3.png"},42:function(e,a,t){"use strict";t.r(a);var n=t(12),r=t(0),c=t.n(r),l=t(169),s=t.n(l),o=t(2),u=t(18),i=t(14),m=t(13);a.default=function(){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),l=a[0],v=a[1],_=Object(r.useContext)(i.a).authService,d=Object(r.useContext)(m.a).data.users,f=Object(o.g)(),p=d[0],E=p?p.imageUrl:t(190),b=function(){_.logout(),f.push("/")},g=Object(r.useRef)(null);!function(e,a){Object(r.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&a()};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e,a])}(g,(function(){return v(!1)}));var h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"nav__list__group"},c.a.createElement(u.b,{to:"/"},"Home")),c.a.createElement("div",{className:"nav__list__group"},c.a.createElement(u.b,{to:"/dashboard/profile"},"Profile")),c.a.createElement("div",{className:"nav__list__group"},c.a.createElement(u.b,{to:"/dashboard/gallery"},"Gallery")),c.a.createElement("div",{className:"nav__list__group"},c.a.createElement(u.b,{to:"/dashboard/posts"},"Posts")),c.a.createElement("div",{className:"nav__list__group"},c.a.createElement(u.b,{to:"/dashboard/create"},"Create new")),c.a.createElement("div",{className:"nav__list__logout"},c.a.createElement("li",{onClick:b},"Logout")))};return c.a.createElement("div",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},h()),c.a.createElement("div",{ref:g,className:"nav__icon",onClick:function(){return v(!l)}},c.a.createElement("img",{className:"nav__icon__image",src:E,alt:"admin"}),c.a.createElement("ul",{className:s()({nav__logout:!0,"nav__logout-hide":!l})},c.a.createElement("li",{onClick:b},"Logout")),c.a.createElement("ul",{className:s()({nav__menu:!0,"nav__menu-hide":!l})},h())))}},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(42);a.default=function(e){var a=e.children;return r.a.createElement("div",{className:"dashboard"},r.a.createElement(c.default,null),a)}}}]);
//# sourceMappingURL=20.a23d68b5.chunk.js.map