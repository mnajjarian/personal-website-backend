(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4,5,20],{130:function(e,t,n){e.exports=n.p+"static/media/bubble.3eaa3469.svg"},131:function(e,t,n){e.exports=n.p+"static/media/linkedin-2.4c13d5e4.svg"},140:function(e,t,n){e.exports=n.p+"static/media/facebook-2.51f42ec5.svg"},141:function(e,t,n){e.exports=n.p+"static/media/linkedin-4.8cc2d3a8.svg"},142:function(e,t,n){e.exports=n.p+"static/media/save.70f9c9cd.svg"},143:function(e,t,n){e.exports=n.p+"static/media/twitter-2.9a35c67b.svg"},150:function(e,t,n){var a={"./Blockquote.svg":151,"./Bold.svg":152,"./CodeBlock.svg":153,"./Image.svg":154,"./Italic.svg":155,"./Monospace.svg":156,"./OL.svg":157,"./Strike.svg":158,"./UL.svg":159,"./Underline.svg":160,"./angel-up.svg":161,"./bubble.svg":130,"./clock-thin.svg":162,"./comment.svg":163,"./facebook-2.svg":140,"./iconCheck.svg":164,"./linkedin-2.svg":131,"./linkedin-4.svg":141,"./save.svg":142,"./time-3.svg":165,"./twitter-2.svg":143,"./user.svg":166};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id=150},151:function(e,t,n){e.exports=n.p+"static/media/Blockquote.5244267c.svg"},152:function(e,t,n){e.exports=n.p+"static/media/Bold.24e86c54.svg"},153:function(e,t,n){e.exports=n.p+"static/media/CodeBlock.a2745814.svg"},154:function(e,t,n){e.exports=n.p+"static/media/Image.0195355f.svg"},155:function(e,t,n){e.exports=n.p+"static/media/Italic.431c4f8a.svg"},156:function(e,t,n){e.exports=n.p+"static/media/Monospace.a4c355c1.svg"},157:function(e,t,n){e.exports=n.p+"static/media/OL.735619e1.svg"},158:function(e,t,n){e.exports=n.p+"static/media/Strike.e35d7f33.svg"},159:function(e,t,n){e.exports=n.p+"static/media/UL.ff2d3d11.svg"},160:function(e,t,n){e.exports=n.p+"static/media/Underline.2f0cc38b.svg"},161:function(e,t,n){e.exports=n.p+"static/media/angel-up.7b28dc10.svg"},162:function(e,t,n){e.exports=n.p+"static/media/clock-thin.565fe25f.svg"},163:function(e,t,n){e.exports=n.p+"static/media/comment.808af9ea.svg"},164:function(e,t,n){e.exports=n.p+"static/media/iconCheck.a0b8efcf.svg"},165:function(e,t,n){e.exports=n.p+"static/media/time-3.9c3f305b.svg"},166:function(e,t,n){e.exports=n.p+"static/media/user.8702dc53.svg"},46:function(e,t,n){"use strict";n.r(t),n.d(t,"HeaderStyleDropdown",(function(){return s}));var a=n(0),o=n.n(a);function s(e){var t=e.onToggle,n=e.active,a=e.headerOptions;return o.a.createElement("div",{className:"RichEditor-headers"},o.a.createElement("select",{className:"RichEditor-headers-select",value:n,onChange:function(e){var n=e.target.value;t(n)}},o.a.createElement("option",{className:"RichEditor-headers-option",key:"unstyled",value:"unstyled"},"Normal"),a.map((function(e){return o.a.createElement("option",{className:"RichEditor-headers-option",key:e.label,value:e.style},e.label)}))))}},47:function(e,t,n){"use strict";n.r(t),n.d(t,"StyleButton",(function(){return l}));var a=n(16),o=n(0),s=n.n(o),i=n(20),c=n.n(i);function l(e){var t,o=e.active,i=e.style,l=e.onToggle,r=e.label;return s.a.createElement("span",{className:c()("RichEditor-styleButton",(t={},Object(a.a)(t,"RichEditor-styleButton-".concat(r),!0),Object(a.a)(t,"RichEditor-activeButton",o),t)),onMouseDown:function(e){e.preventDefault(),l(i)}},s.a.createElement("img",{className:"RichEditor-styleButton-icon",src:n(150)("./".concat(r,".svg")),alt:"icon"}))}},52:function(e,t,n){"use strict";n.r(t),n.d(t,"StyleTypes",(function(){return r}));var a=n(0),o=n.n(a),s=n(46),i=n(47),c=[{label:"Bold",style:"BOLD",type:"INLINE_TYPE"},{label:"Italic",style:"ITALIC",type:"INLINE_TYPE"},{label:"Underline",style:"UNDERLINE",type:"INLINE_TYPE"},{label:"UL",style:"unordered-list-item",type:"BLOCK_TYPE"},{label:"OL",style:"ordered-list-item",type:"BLOCK_TYPE"},{label:"Blockquote",style:"blockquote",type:"BLOCK_TYPE"},{label:"CodeBlock",style:"code-block",type:"BLOCK_TYPE"},{label:"Monospace",style:"CODE",type:"INLINE_TYPE"},{label:"Strike",style:"STRIKETHROUGH",type:"INLINE_TYPE"},{label:"Image",style:"image",type:"IMAGE"}],l=[{label:"Heading 1",style:"header-one",type:"BLOCK_TYPE"},{label:"Heading 2",style:"header-two",type:"BLOCK_TYPE"},{label:"Heading 3",style:"header-three",type:"BLOCK_TYPE"},{label:"Heading 4",style:"header-four",type:"BLOCK_TYPE"},{label:"Heading 5",style:"header-five",type:"BLOCK_TYPE"},{label:"Heading 6",style:"header-six",type:"BLOCK_TYPE"}];function r(e){var t=e.editorState,n=e.onToggleBlock,a=e.onToggleInline,r=t.getSelection(),p=t.getCurrentContent().getBlockForKey(r.getStartKey()).getType(),d=t.getCurrentInlineStyle();return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.HeaderStyleDropdown,{headerOptions:l,active:p,onToggle:n}),c.map((function(e){return o.a.createElement(i.StyleButton,{active:"BLOCK_TYPE"===e.type?e.style===p:d.has(e.style),label:e.label,onToggle:"BLOCK_TYPE"===e.type?n:a,style:e.style,key:e.label})})))}}}]);
//# sourceMappingURL=4.d5306a77.chunk.js.map