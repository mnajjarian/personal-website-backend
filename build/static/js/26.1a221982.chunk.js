(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[26,33,49,52],{129:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var u=typeof r;if("string"===u||"number"===u)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===u)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},130:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o}));var r=function(e){return new Intl.DateTimeFormat("en-us",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e))},a=function(e){return new Intl.DateTimeFormat("en-us",{hour:"numeric",minute:"numeric"}).format(new Date(e))},u=function(e){return e.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/)},c=function(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";case"unstyled":return"RichEditor-paragraph";case"CODE":return"RichEditor-blockcode";case"STRIKETHROUGH":return"RichEditor-strikethrough";default:return""}},i=function(e){var t=JSON.parse(e),n=t.blocks.filter((function(e){return e.text.length})),r=n.filter((function(e){return"header-one"===e.type}))[0],a=n.filter((function(e){return"unstyled"===e.type}))[0],u=t.entityMap[0]?t.entityMap[0].data.src:null;return{title:r.text,p:a.text,url:u}},o=function(e){return new Intl.DateTimeFormat("en-us",{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(e))}},36:function(e,t,n){"use strict";n.r(t),n.d(t,"Button",(function(){return u}));var r=n(0),a=n.n(r);function u(e){var t=e.text,n=e.handleClick;return a.a.createElement("button",{type:"submit",className:"button",onClick:n},t)}},37:function(e,t,n){"use strict";n.r(t),n.d(t,"Modal",(function(){return i}));var r=n(0),a=n.n(r),u=n(22),c=document.createElement("portal");function i(e){var t=e.toggleModal,n=e.children;return Object(r.useEffect)((function(){return document.body.appendChild(c),function(){document.body.removeChild(c)}}),[]),Object(u.createPortal)(a.a.createElement("div",{className:"modal"},a.a.createElement("div",{className:"modal__overlay",onClick:t}),a.a.createElement("div",{className:"modal__body"},n)),c)}},40:function(e,t,n){"use strict";n.r(t),n.d(t,"Subscription",(function(){return s}));var r=n(12),a=n(0),u=n.n(a),c=n(36),i=n(130),o=n(129),l=n.n(o);function s(e){var t=e.handleToggle,n=Object(a.useState)(""),o=Object(r.a)(n,2),s=o[0],m=o[1],f=Object(a.useState)(!1),d=Object(r.a)(f,2),p=d[0],b=d[1],h=Object(a.useState)(null),v=Object(r.a)(h,2),y=v[0],E=v[1];return u.a.createElement("div",{className:"subscription"},u.a.createElement("h2",null,"Subscription"),u.a.createElement("div",{className:"subscription__text"},"Recive updates and latest post direct in your email, Simply enter your email below"),u.a.createElement("div",{className:"form"},u.a.createElement("p",{className:l()({subscription__error:!0,subscription__shake:p})},y),u.a.createElement("div",{className:"form__group"},u.a.createElement("input",{className:"form__input",type:"email",name:"email",placeholder:"Enter your email",onChange:function(e){m(e.target.value)},onBlur:function(){console.log("blur"),s.length>0&&!Object(i.a)(s)?E("*Please enter a valid email address"):E(null)}}),u.a.createElement(c.Button,{text:"submit",handleClick:function(){Object(i.a)(s)?setTimeout((function(){t()}),500):(b(!0),setTimeout((function(){b(!1)}),500))}}))))}},44:function(e,t,n){"use strict";n.r(t),n.d(t,"Footer",(function(){return o}));var r=n(12),a=n(0),u=n.n(a),c=n(37),i=n(40);function o(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],l=function(){return o(!n)};return u.a.createElement("div",{className:"footer"},u.a.createElement("div",{className:"footer__subtitle"},"site by"," ",u.a.createElement("a",{className:"footer__subtitle__link",href:"https://github.com/mnajjarian",rel:"noopener noreferrer",target:"_blank"},"mahdi najjarian")),u.a.createElement("span",{className:"footer__subscribe",role:"button",onClick:l},"subscribe"),n&&u.a.createElement(c.Modal,{toggleModal:l},u.a.createElement(i.Subscription,{handleToggle:l})))}}}]);
//# sourceMappingURL=26.1a221982.chunk.js.map