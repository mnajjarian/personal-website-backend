(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[25,32,35],{16:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c);t.default=function(e){var t=e.text,a=e.handleClick;return n.a.createElement("button",{type:"submit",className:"button",onClick:a},t)}},25:function(e,t,a){"use strict";a.r(t),a.d(t,"Picture",(function(){return l}));var c=a(0),n=a.n(c);function l(e){var t=e.imgUrl,a=e.publicId,c=e.handleClick,l=e.checked;return n.a.createElement("div",{className:"picture",key:a,onClick:c(a)},n.a.createElement("img",{className:"picture__image",src:t,alt:"pic"}),n.a.createElement("input",{type:"checkbox",readOnly:!0,checked:l,className:"picture__checked"}))}t.default=l},31:function(e,t,a){"use strict";a.r(t);var c=a(59),n=a(1),l=a(12),i=a(0),r=a.n(i),u=a(16),d=a(25),m=a(13);t.default=function(e){var t=Object(i.useContext)(m.a),a=t.data.gallery,s=t.dataDispatch,o=t.dataService,p=a.reduce((function(e,t){return e[t.public_id]=!1,e}),[]),b=Object(i.useState)(p),f=Object(l.a)(b,2),h=f[0],y=f[1],k=function(){window.cloudinary.openUploadWidget({cloudName:"maryam47web",uploadPreset:"no2bkme1",tags:["xmas"]},(function(e,t){"success"===t.event&&s({type:"ADD_GALLERY",payload:t.info})}))},g=function(t){return function(){e.withCb&&e.cb(t),y(Object(n.a)({},h,Object(c.a)({},t,!h[t])))}},_=a.reduce((function(e,t){return h[t.public_id]&&e.push(t.public_id),e}),[]);return r.a.createElement("div",{className:"gallery"},a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(u.default,{text:"Add",handleClick:k}),_[0]&&r.a.createElement(u.default,{text:_.length>1?"Delete all":"Delete",handleClick:function(){o.removeImage(_[0])}})),r.a.createElement("div",{className:"gallery__contents"},a.map((function(e){return r.a.createElement(d.default,{checked:h[e.public_id],handleClick:g,key:e.public_id,publicId:e.public_id,imgUrl:"https://res.cloudinary.com/".concat("maryam47web","/image/upload/").concat(e.public_id,".jpg")})})))):r.a.createElement("div",{className:"gallery__empty"},"The gallery is empty! ",r.a.createElement(u.default,{text:"Add picture",handleClick:k})," "))}}}]);
//# sourceMappingURL=25.c47f4abc.chunk.js.map