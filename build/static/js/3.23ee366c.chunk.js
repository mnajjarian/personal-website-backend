(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3,4,5,18,20,22],{137:function(e,t,a){e.exports=a.p+"static/media/bubble.3eaa3469.svg"},138:function(e,t,a){e.exports=a.p+"static/media/linkedin-2.4c13d5e4.svg"},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a.n(n),l=a(28),i=document.createElement("portal");function o(e){var t=e.toggleModal,a=e.children;return Object(n.useEffect)((function(){return document.body.appendChild(i),function(){document.body.removeChild(i)}}),[]),Object(l.createPortal)(c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"modal__overlay",onClick:t}),c.a.createElement("div",{className:"modal__body"},a)),i)}},147:function(e,t,a){e.exports=a.p+"static/media/facebook-2.51f42ec5.svg"},148:function(e,t,a){e.exports=a.p+"static/media/linkedin-4.8cc2d3a8.svg"},149:function(e,t,a){e.exports=a.p+"static/media/save.70f9c9cd.svg"},150:function(e,t,a){e.exports=a.p+"static/media/twitter-2.9a35c67b.svg"},157:function(e,t,a){var n={"./Blockquote.svg":158,"./Bold.svg":159,"./CodeBlock.svg":160,"./Image.svg":161,"./Italic.svg":162,"./Monospace.svg":163,"./OL.svg":164,"./Strike.svg":165,"./UL.svg":166,"./Underline.svg":167,"./angel-up.svg":168,"./bubble.svg":137,"./clock-thin.svg":169,"./comment.svg":170,"./facebook-2.svg":147,"./iconCheck.svg":171,"./linkedin-2.svg":138,"./linkedin-4.svg":148,"./save.svg":149,"./time-3.svg":172,"./twitter-2.svg":150,"./user.svg":173};function c(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=l,e.exports=c,c.id=157},158:function(e,t,a){e.exports=a.p+"static/media/Blockquote.5244267c.svg"},159:function(e,t,a){e.exports=a.p+"static/media/Bold.24e86c54.svg"},160:function(e,t,a){e.exports=a.p+"static/media/CodeBlock.a2745814.svg"},161:function(e,t,a){e.exports=a.p+"static/media/Image.0195355f.svg"},162:function(e,t,a){e.exports=a.p+"static/media/Italic.431c4f8a.svg"},163:function(e,t,a){e.exports=a.p+"static/media/Monospace.a4c355c1.svg"},164:function(e,t,a){e.exports=a.p+"static/media/OL.735619e1.svg"},165:function(e,t,a){e.exports=a.p+"static/media/Strike.e35d7f33.svg"},166:function(e,t,a){e.exports=a.p+"static/media/UL.ff2d3d11.svg"},167:function(e,t,a){e.exports=a.p+"static/media/Underline.2f0cc38b.svg"},168:function(e,t,a){e.exports=a.p+"static/media/angel-up.7b28dc10.svg"},169:function(e,t,a){e.exports=a.p+"static/media/clock-thin.565fe25f.svg"},170:function(e,t,a){e.exports=a.p+"static/media/comment.808af9ea.svg"},171:function(e,t,a){e.exports=a.p+"static/media/iconCheck.a0b8efcf.svg"},172:function(e,t,a){e.exports=a.p+"static/media/time-3.9c3f305b.svg"},173:function(e,t,a){e.exports=a.p+"static/media/user.8702dc53.svg"},51:function(e,t,a){"use strict";a.r(t),a.d(t,"Picture",(function(){return l}));var n=a(0),c=a.n(n);function l(e){var t=e.imgUrl,a=e.publicId,n=e.handleClick,l=e.checked;return c.a.createElement("div",{className:"picture",key:a,onClick:n(a)},c.a.createElement("img",{className:"picture__image",src:t,alt:"pic"}),c.a.createElement("input",{type:"checkbox",readOnly:!0,checked:l,className:"picture__checked"}))}},52:function(e,t,a){"use strict";a.r(t),a.d(t,"HeaderStyleDropdown",(function(){return l}));var n=a(0),c=a.n(n);function l(e){var t=e.onToggle,a=e.active,n=e.headerOptions;return c.a.createElement("div",{className:"RichEditor-headers"},c.a.createElement("select",{className:"RichEditor-headers-select",value:a,onChange:function(e){var a=e.target.value;t(a)}},c.a.createElement("option",{className:"RichEditor-headers-option",key:"unstyled",value:"unstyled"},"Normal"),n.map((function(e){return c.a.createElement("option",{className:"RichEditor-headers-option",key:e.label,value:e.style},e.label)}))))}},53:function(e,t,a){"use strict";a.r(t),a.d(t,"StyleButton",(function(){return r}));var n=a(17),c=a(0),l=a.n(c),i=a(21),o=a.n(i);function r(e){var t,c=e.active,i=e.style,r=e.onToggle,s=e.label;return l.a.createElement("span",{className:o()("RichEditor-styleButton",(t={},Object(n.a)(t,"RichEditor-styleButton-".concat(s),!0),Object(n.a)(t,"RichEditor-activeButton",c),t)),onMouseDown:function(e){e.preventDefault(),r(i)}},l.a.createElement("img",{className:"RichEditor-styleButton-icon",src:a(157)("./".concat(s,".svg")),alt:"icon"}))}},56:function(e,t,a){"use strict";a.r(t),a.d(t,"Gallery",(function(){return v}));var n=a(22),c=a.n(n),l=a(30),i=a(17),o=a(1),r=a(9),s=a(0),u=a.n(s),d=a(26),p=a(51),m=a(12),g=a(27);function v(e){var t=Object(s.useContext)(m.a),a=t.data.gallery,n=t.dataDispatch,v=new g.a(n),f=a.reduce((function(e,t){return e[t.public_id]=!1,e}),[]),y=Object(s.useState)(f),b=Object(r.a)(y,2),E=b[0],h=b[1],k=function(){window.cloudinary.openUploadWidget({cloudName:"maryam47web",uploadPreset:"no2bkme1",tags:["xmas"]},(function(e,t){"success"===t.event&&n({type:"ADD_GALLERY",payload:t.info})}))},_=function(t){return function(){e.withCb&&e.cb(t),h(Object(o.a)({},E,Object(i.a)({},t,!E[t])))}},C=a.reduce((function(e,t){return E[t.public_id]&&e.push(t.public_id),e}),[]),O=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.removeImage(C[0]);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return u.a.createElement("div",{className:"gallery"},a.length?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,u.a.createElement(d.a,{text:"Add",handleClick:k}),C[0]&&u.a.createElement(d.a,{text:C.length>1?"Delete all":"Delete",handleClick:O})),u.a.createElement("div",{className:"gallery__contents"},a.map((function(e){return u.a.createElement(p.Picture,{checked:E[e.public_id],handleClick:_,key:e.public_id,publicId:e.public_id,imgUrl:"https://res.cloudinary.com/".concat("maryam47web","/image/upload/").concat(e.public_id,".jpg")})})))):u.a.createElement("div",{className:"gallery__empty"},"The gallery is empty! ",u.a.createElement(d.a,{text:"Add picture",handleClick:k})," "))}},58:function(e,t,a){"use strict";a.r(t),a.d(t,"StyleTypes",(function(){return s}));var n=a(0),c=a.n(n),l=a(52),i=a(53),o=[{label:"Bold",style:"BOLD",type:"INLINE_TYPE"},{label:"Italic",style:"ITALIC",type:"INLINE_TYPE"},{label:"Underline",style:"UNDERLINE",type:"INLINE_TYPE"},{label:"UL",style:"unordered-list-item",type:"BLOCK_TYPE"},{label:"OL",style:"ordered-list-item",type:"BLOCK_TYPE"},{label:"Blockquote",style:"blockquote",type:"BLOCK_TYPE"},{label:"CodeBlock",style:"code-block",type:"BLOCK_TYPE"},{label:"Monospace",style:"CODE",type:"INLINE_TYPE"},{label:"Strike",style:"STRIKETHROUGH",type:"INLINE_TYPE"},{label:"Image",style:"image",type:"IMAGE"}],r=[{label:"Heading 1",style:"header-one",type:"BLOCK_TYPE"},{label:"Heading 2",style:"header-two",type:"BLOCK_TYPE"},{label:"Heading 3",style:"header-three",type:"BLOCK_TYPE"},{label:"Heading 4",style:"header-four",type:"BLOCK_TYPE"},{label:"Heading 5",style:"header-five",type:"BLOCK_TYPE"},{label:"Heading 6",style:"header-six",type:"BLOCK_TYPE"}];function s(e){var t=e.editorState,a=e.onToggleBlock,n=e.onToggleInline,s=t.getSelection(),u=t.getCurrentContent().getBlockForKey(s.getStartKey()).getType(),d=t.getCurrentInlineStyle();return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.HeaderStyleDropdown,{headerOptions:r,active:u,onToggle:a}),o.map((function(e){return c.a.createElement(i.StyleButton,{active:"BLOCK_TYPE"===e.type?e.style===u:d.has(e.style),label:e.label,onToggle:"BLOCK_TYPE"===e.type?a:n,style:e.style,key:e.label})})))}},63:function(e,t,a){"use strict";a.r(t),a.d(t,"Toolbar",(function(){return v}));var n=a(9),c=a(0),l=a.n(c),i=a(174),o=a(21),r=a.n(o),s=a(26),u=a(58),d=a(144),p=a(56),m=a(149),g=a.n(m);function v(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),o=a[0],m=a[1],v=Object(c.useState)(!1),f=Object(n.a)(v,2),y=f[0],b=f[1],E=e.editorState,h=e.handleChange,k=e.onAddImage,_=e.handleSave,C=e.draft;return l.a.createElement("div",{className:"toolbar"},l.a.createElement("div",{className:"RichEditor-controls"},l.a.createElement(u.StyleTypes,{editorState:E,onToggleBlock:function(e){h(i.RichUtils.toggleBlockType(E,e))},onToggleInline:function(e){"image"===e&&m(!o),h(i.RichUtils.toggleInlineStyle(E,e))}})),l.a.createElement("div",{className:"toolbar__toggle",onClick:function(){return b(!y)}},l.a.createElement("img",{src:g.a,alt:"menu"})),l.a.createElement("div",{className:r()({toolbar__buttons:!0,"toolbar__buttons-hide":!y})},l.a.createElement(s.a,{text:C?"save":"draft",handleClick:_("save")}),l.a.createElement(s.a,{text:"publish",handleClick:_("publish")})),o&&l.a.createElement(d.a,{toggleModal:function(){return m(!o)}},l.a.createElement(p.Gallery,{withCb:!0,cb:function(e){k(e),m(!1)}})))}}}]);
//# sourceMappingURL=3.23ee366c.chunk.js.map