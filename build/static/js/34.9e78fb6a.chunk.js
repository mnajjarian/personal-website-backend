(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[34],{71:function(e,t,a){"use strict";a.r(t),a.d(t,"BlockCard",(function(){return o})),a.d(t,"PostBlock",(function(){return s}));var c=a(0),n=a.n(c),l=a(9),r=a(4);function o(e){var t=e.block;return n.a.createElement("div",{key:t.id,className:"block__items"},n.a.createElement("time",{className:"block__time"},Object(l.d)(t.createdAt)),n.a.createElement("a",{className:"block__link",target:"_blank",rel:"noopener noreferrer",href:"/blog/".concat(Object(l.b)(t.content).title.split(" ").join("-"))},Object(l.b)(t.content).title))}function s(){var e=Object(c.useContext)(r.a).data.blogs.slice(1);return n.a.createElement("div",{className:"block"},n.a.createElement("h2",{className:"block__title"},"Latest Posts"),n.a.createElement("div",{className:"block__content"},e.map((function(e){return n.a.createElement(o,{key:e.id,block:e})}))))}}}]);
//# sourceMappingURL=34.9e78fb6a.chunk.js.map