(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[29],{62:function(e,a,t){"use strict";t.r(a);var n=t(8),c=t(0),r=t.n(c),l=t(16),s=t.n(l),o=t(13),u=t(12),i=t(10),m=t(4),_=t(33);function v(){var e=Object(c.useState)(!1),a=Object(n.a)(e,2),l=a[0],v=a[1],d=Object(c.useContext)(i.a).authDispatch,E=new _.a(d),b=Object(c.useContext)(m.a).data.users,g=Object(o.g)(),p=b[0],f=p?p.imageUrl:t(35),N=function(){E.logout(),g.push("/")},h=Object(c.useRef)(null);!function(e,a){Object(c.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&a()};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e,a])}(h,(function(){return v(!1)}));var j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav__list__group"},r.a.createElement(u.b,{to:"/"},"Home")),r.a.createElement("div",{className:"nav__list__group"},r.a.createElement(u.b,{to:"/dashboard/profile"},"Profile")),r.a.createElement("div",{className:"nav__list__group"},r.a.createElement(u.b,{to:"/dashboard/gallery"},"Gallery")),r.a.createElement("div",{className:"nav__list__group"},r.a.createElement(u.b,{to:"/dashboard/posts"},"Posts")),r.a.createElement("div",{className:"nav__list__group"},r.a.createElement(u.b,{to:"/dashboard/create"},"Create new")),r.a.createElement("div",{className:"nav__list__logout"},r.a.createElement("li",{onClick:N},"Logout")))};return r.a.createElement("div",{className:"nav"},r.a.createElement("ul",{className:"nav__list"},j()),r.a.createElement("div",{ref:h,className:"nav__icon",onClick:function(){return v(!l)}},r.a.createElement("img",{className:"nav__icon__image",src:f,alt:"admin"}),r.a.createElement("ul",{className:s()({nav__logout:!0,"nav__logout-hide":!l})},r.a.createElement("li",{onClick:N},"Logout")),r.a.createElement("ul",{className:s()({nav__menu:!0,"nav__menu-hide":!l})},j())))}t.d(a,"Nav",(function(){return v}))}}]);
//# sourceMappingURL=29.9bd14df6.chunk.js.map