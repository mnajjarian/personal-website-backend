(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{147:function(e,t,a){e.exports=a.p+"static/media/save.70f9c9cd.svg"},153:function(e,t,a){e.exports=a(320)},180:function(e,t,a){e.exports=a.p+"static/media/bio-image.4cec5674.jpg"},284:function(e,t){},286:function(e,t){},302:function(e,t,a){var n={"./Blockquote.svg":303,"./Bold.svg":304,"./CodeBlock.svg":305,"./Image.svg":306,"./Italic.svg":307,"./Monospace.svg":308,"./OL.svg":309,"./Strike.svg":310,"./UL.svg":311,"./Underline.svg":312,"./bubble.svg":96,"./clock-thin.svg":313,"./comment.svg":314,"./facebook-2.svg":92,"./facebook.svg":315,"./iconCheck.svg":316,"./instagram-2.svg":93,"./linkedin-2.svg":91,"./linkedin.svg":317,"./save.svg":147,"./time-3.svg":94,"./twitter-2.svg":318,"./user.svg":95};function c(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=l,e.exports=c,c.id=302},303:function(e,t,a){e.exports=a.p+"static/media/Blockquote.5244267c.svg"},304:function(e,t,a){e.exports=a.p+"static/media/Bold.24e86c54.svg"},305:function(e,t,a){e.exports=a.p+"static/media/CodeBlock.a2745814.svg"},306:function(e,t,a){e.exports=a.p+"static/media/Image.0195355f.svg"},307:function(e,t,a){e.exports=a.p+"static/media/Italic.431c4f8a.svg"},308:function(e,t,a){e.exports=a.p+"static/media/Monospace.a4c355c1.svg"},309:function(e,t,a){e.exports=a.p+"static/media/OL.735619e1.svg"},310:function(e,t,a){e.exports=a.p+"static/media/Strike.e35d7f33.svg"},311:function(e,t,a){e.exports=a.p+"static/media/UL.ff2d3d11.svg"},312:function(e,t,a){e.exports=a.p+"static/media/Underline.2f0cc38b.svg"},313:function(e,t,a){e.exports=a.p+"static/media/clock-thin.565fe25f.svg"},314:function(e,t,a){e.exports=a.p+"static/media/comment.808af9ea.svg"},315:function(e,t,a){e.exports=a.p+"static/media/facebook.30cb7c0a.svg"},316:function(e,t,a){e.exports=a.p+"static/media/iconCheck.a0b8efcf.svg"},317:function(e,t,a){e.exports=a.p+"static/media/linkedin.86bb45b8.svg"},318:function(e,t,a){e.exports=a.p+"static/media/twitter-2.cb645bcf.svg"},319:function(e,t,a){},320:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(37),r=a.n(l),o=a(6),s=a(3),i=a(5),m={isLoggedIn:!1},u=function(e,t){switch(t.type){case"SIGNIN_ERROR":case"SIGNUP_ERROR":return Object(i.a)({},e,{error:t.payload});case"SIGNIN_SUCCESS":return Object(i.a)({},e,{id:t.payload.id,isLoggedIn:!0,error:null});case"LOGOUT_USER":return Object(i.a)({},e,{isLoggedIn:!1,error:null});case"SET_AUTH":return Object(i.a)({},e,{isLoggedIn:t.payload.auth});default:return e}},d=a(45),p=a.n(d),E=a(60),_=a.n(E),f=_.a.create({withCredentials:!0,baseURL:"/api"}),g=Object(n.createContext)({}),b=a(152),h=a(19),v=a(9),y=a(12),N=a.n(y),O=function(e){return c.a.createElement("div",{className:"section"},c.a.createElement("section",{className:N()(Object(v.a)({section__content:!0},"section__content--".concat(e.flexDirect),!0))},c.a.createElement("img",{className:"section__img",style:{borderRadius:e.borderRadius},src:e.imgUrl?e.imgUrl:a(46),alt:"biography"}),c.a.createElement("article",{className:"section__article"},c.a.createElement("h2",{className:"section__article--title"},e.title),c.a.createElement("span",{className:"section__article--span"}),c.a.createElement("p",{className:"section__article--text"},e.text),e.text.length>20&&c.a.createElement(o.b,{to:e.href},e.btnText))))},C=function(){var e=c.a.useState(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useContext)(g).authState.isLoggedIn;return Object(n.useEffect)((function(){var e=document.getElementById("nav");if(e){var t=e.offsetTop,a=window.addEventListener("scroll",(function(){window.pageYOffset>t?e.classList.add("sticky"):e.classList.remove("sticky")}));return function(){return window.removeEventListener("scroll",a)}}}),[]),c.a.createElement("div",{id:"nav",className:"navbar"},c.a.createElement("div",{className:N()({navbar__menu:!0,navbar__menu__change:a}),onClick:function(){return l(!a)}},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)),c.a.createElement("nav",{id:"nav",className:N()({show:!a})},c.a.createElement("ul",null,c.a.createElement(o.c,{to:"/"},"Home"),c.a.createElement(o.c,{to:"/about"},"About"),c.a.createElement(o.c,{to:"/blog"},"Blog"),r&&c.a.createElement(o.c,{to:"/dashboard"},"Dashboard"))))},k={blogs:[],users:[],gallery:[]},j=function(e,t){switch(t.type){case"FETCH_USERS":return Object(i.a)({},e,{users:t.payload});case"UPDATE_USER":return Object(i.a)({},e,{users:e.users.map((function(e){return e._id!==t.payload.userId?e:t.payload}))});case"UPDATE_USER_IMAGE":var a=e.users.filter((function(e){return e._id===t.payload.userId}))[0];return a.imageUrl=t.payload.obj.imageUrl,Object(i.a)({},e,{users:e.users.map((function(e){return e._id!==t.payload.userId?e:a}))});case"FETCH_POSTS":return Object(i.a)({},e,{blogs:(l=t.payload,l.sort((function(e,t){return Number(new Date(t.createdAt))-Number(new Date(e.createdAt))})))});case"FETCH_GALLERY":return Object(i.a)({},e,{gallery:t.payload});case"SET_AVATAR":return Object(i.a)({},e);case"ADD_GALLERY":return Object(i.a)({},e,{gallery:e.gallery.concat(t.payload)});case"ADD_POST":return Object(i.a)({},e,{blogs:e.blogs.concat(t.payload)});case"REMOVE_POST":return Object(i.a)({},e,{blogs:e.blogs.filter((function(e){return e.id!==t.payload}))});case"REMOVE_IMAGE":return Object(i.a)({},e,{gallery:e.gallery.filter((function(e){return e.public_id!==t.payload}))});case"ADD_COMMENT":var n=e.blogs.filter((function(e){return e.id===t.payload.post}))[0];return n.comments=n.comments.concat(t.payload),Object(i.a)({},e,{blogs:e.blogs.map((function(e){return e.id===t.payload._id?n:e}))});case"REMOVE_COMMENT":var c=e.blogs.filter((function(e){return e.id===t.payload.post}))[0];return c.comments=c.comments.filter((function(e){return e._id!==t.payload._id})),Object(i.a)({},e,{blogs:e.blogs.map((function(e){return e.id===t.payload.post?c:e}))});default:return e}var l},S=Object(n.createContext)({}),x=function(){var e=Object(n.useContext)(S).data,t=e.users[0].firstName+" "+e.users[0].lastName;return c.a.createElement(n.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__content"},c.a.createElement("h1",{className:"header__title"},t),c.a.createElement("span",null,e.users[0].title))),c.a.createElement("div",{className:"nav__wrapper"},c.a.createElement(C,null)))},T=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("section",{className:"footer__section"},c.a.createElement("ul",{className:"footer__section__link"},c.a.createElement(o.c,{to:"/"},"Home"),c.a.createElement(o.c,{to:"/about"},"About"),c.a.createElement(o.c,{to:"/blog"},"Blog"))),c.a.createElement("section",{className:"footer__section"},c.a.createElement("ul",{className:"footer__section__list"},c.a.createElement("li",{className:"footer__section__items"},c.a.createElement("a",{className:"footer__section__link",href:"https://www.linkedin.com/in/maryam-tavakoli/",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("img",{src:a(91),alt:"icon"}))),c.a.createElement("li",{className:"footer__section__items"},c.a.createElement("a",{className:"footer__section__link",href:"https://www.facebook.com/maryam.tavakkoli.39566",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("img",{src:a(92),alt:"icon"}))),c.a.createElement("li",{className:"footer__section__items"},c.a.createElement("a",{className:"footer__section__link",href:"https://www.facebook.com/maryam.tavakkoli.39566",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("img",{src:a(93),alt:"icon"}))))),c.a.createElement("div",{className:"footer__subtitle"},"site by"," ",c.a.createElement("a",{className:"footer__subtitle__link",href:"https://github.com/mnajjarian",rel:"noopener noreferrer",target:"_blank"},"mahdi najjarian")))},w=function(){var e=Object(n.useContext)(g).authState,t=Object(n.useContext)(S).data.users;if(!t.length||!e)return c.a.createElement("div",null);var a=t[0],l=a.firstName,r=a.lastName,o=a.bio,s=a.imageUrl,i=l+" "+r;return c.a.createElement(n.Fragment,null,c.a.createElement(x,null),c.a.createElement(O,{imgUrl:s,title:i,href:"/about",btnText:"read more",flexDirect:"row",borderRadius:"50%",text:o}),c.a.createElement(T,null))},I=a(180),R=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(x,null),c.a.createElement(O,{imgUrl:I,title:"About Me",href:"/",btnText:"download full CV",flexDirect:"row-reverse",borderRadius:"0",text:'I am a second-year master student in "Cloud computing and services" with minors in "Entrepreneurship and business". I am doing my studies in \u201cEIT Digital Master School\u201d, where I will obtain a double-degree from two universities which I have studied in: Aalto University in Finland, and TU Delft in the Netherlands. Currently, I am working at Nokia Bell Labs, in Finland, as a thesis writer. In this position, I am conducting a research study on containerizing of a current telco IoT publish/subscribe application, and suitability of Kubernetes to be used for its deployment. Docker, Kubernetes, Nokia\u2019s cloud environment (NESC), Apache Kafka and GIT are technologies and tools which I am using during my work in Nokia.'}),c.a.createElement(T,null))},U=function(e){var t=e.posts.slice(1);return c.a.createElement("div",{className:"block"},c.a.createElement("h2",{className:"block__title"},"Latest Posts"),c.a.createElement("div",{className:"block__content"},t.map((function(e){return c.a.createElement("div",{key:e.id,className:"block__items"},c.a.createElement("time",{className:"block__time"},(t=e.createdAt,new Intl.DateTimeFormat("en-us",{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(t)))),c.a.createElement("a",{className:"block__link",target:"_blank",rel:"noopener noreferrer",href:"/blog/".concat(L(e.content).title.split(" ").join("-"))},L(e.content).title));var t}))))},L=function(e){var t=JSON.parse(e),a=t.blocks.filter((function(e){return e.text.length})),n=a.filter((function(e){return"header-one"===e.type}))[0],c=a.filter((function(e){return"unstyled"===e.type}))[0],l=t.entityMap[0]?t.entityMap[0].data.src:null;return{title:n.text,p:c.text,url:l}},D=function(e){return e.posts[0]?c.a.createElement("div",{className:"jumbotron",style:{backgroundImage:"url(".concat(L(e.posts[0].content).url,")")}},c.a.createElement("div",{className:"jumbotron__overlay"},c.a.createElement("div",{className:"jumbotron__post"},c.a.createElement("h1",{className:"jumbotron__title"},L(e.posts[0].content).title),c.a.createElement("p",{className:"jumbotron__text"},L(e.posts[0].content).p.substring(0,200),"..."),c.a.createElement("a",{href:"/blog/".concat(L(e.posts[0].content).title.split(" ").join("-")),className:"jumbotron__button",rel:"noopener noreferrer",target:"_blank"},"Read more")),e.posts.length>1&&c.a.createElement(U,{posts:e.posts}))):c.a.createElement("div",null)},A=a(94),P=a(95),B=a(96),F=function(e){return new Intl.DateTimeFormat("en-us",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e))},M=function(e){var t=e.post,a=e.post.content,n=JSON.parse(a),l=n.blocks.filter((function(e){return e.text.length})),r=l.filter((function(e){return"header-one"===e.type}))[0],s=l.filter((function(e){return"unstyled"===e.type}))[0],i=n.entityMap[0]?n.entityMap[0].data.src:null;return c.a.createElement("div",{className:"card__post"},c.a.createElement("section",{className:"card__post__section"},c.a.createElement("div",{className:"card__post__content"},c.a.createElement("h2",null,r.text),c.a.createElement("div",{className:"card__post__header"},c.a.createElement("span",{className:"card__post__icon"},c.a.createElement("img",{src:A,alt:"clock icon"}),c.a.createElement("strong",null,c.a.createElement("time",{dateTime:"2019-09-12",itemProp:t.createdAt},F(t.createdAt)))),c.a.createElement("span",{className:"card__post__icon"},c.a.createElement("img",{src:P,alt:"user icon"}),c.a.createElement("strong",null,t.user.firstName+" "+t.user.lastName)),c.a.createElement("span",{className:"card__post__icon"},c.a.createElement("img",{src:B,alt:"comment icon"}),c.a.createElement("strong",null,0===t.comments.length?"No":t.comments.length," ","Comments"))),c.a.createElement("div",{className:"card__post__items"},c.a.createElement("p",null,s.text.substring(0,380)+"... ",c.a.createElement(o.b,{to:"/blog/".concat(r.text.split(" ").join("-"))},"read more")),i&&c.a.createElement("div",{className:"card__post__image"},c.a.createElement("img",{className:"card__post__image",src:i,alt:r.text}))),c.a.createElement("ul",{className:"card__post__tags"}))))},Y=function(e){var t=e.posts;return t.length?c.a.createElement("div",{className:"blog"},c.a.createElement("div",{className:"blog__posts"},t.map((function(e){return c.a.createElement(M,{key:e.id,post:e})})))):c.a.createElement("div",{className:"blog"},c.a.createElement("div",{className:"blog__empty"},c.a.createElement("div",null,"There is nothing here!"),c.a.createElement("div",null,"You can create new post through your ",c.a.createElement("a",{className:"blog__empty__link",href:"/dashboard/create"},"Dashboard"),".")))},K=function(){var e=Object(n.useContext)(S).data.blogs;return c.a.createElement(n.Fragment,null,c.a.createElement(C,null),c.a.createElement(D,{posts:e}),c.a.createElement(Y,{posts:e}),c.a.createElement(T,null))},G=a(7),H=a(150),J=a.n(H),V=a(151),q=function(e){var t=e.text,a=e.handleClick;return c.a.createElement("button",{type:"submit",className:"button",onClick:a},t)},W=function(e){var t=Object(n.useState)({commenter:"",email:"",comment:"",post:e.postId}),a=Object(s.a)(t,2),l=a[0],r=a[1],o=Object(n.useContext)(S).dataService,m=function(e){var t=e.target,a=t.name,n=t.value;r(Object(i.a)({},l,Object(v.a)({},a,n)))},u=l.commenter,d=l.email,p=l.comment;return c.a.createElement("div",{className:"comments"},c.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();try{o.addComment(l)}catch(t){console.log(t)}}},c.a.createElement("h3",null,"Leave a comment"),c.a.createElement("div",{className:"form__group"},c.a.createElement("label",{className:"form__label",htmlFor:"commentor"},"Name"),c.a.createElement("input",{className:"form__input",type:"text",name:"commenter",value:u,onChange:m})),c.a.createElement("div",{className:"form__group"},c.a.createElement("label",{className:"form__label",htmlFor:"email"},"Email"),c.a.createElement("input",{className:"form__input",type:"email",name:"email",value:d,onChange:m})),c.a.createElement("div",{className:"form__group"},c.a.createElement("label",{className:"form__label",htmlFor:"comment"},"Comment"),c.a.createElement("textarea",{className:"form__textarea",name:"comment",value:p,onChange:m,rows:7,cols:12})),c.a.createElement("div",{className:"form__button"},c.a.createElement(q,{text:"Submit"}))))},z=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],r=a[1];return c.a.createElement("div",{className:"comment"},e.comments.length?c.a.createElement("p",{className:"comment__header"},"Comments"):"",e.comments.length>0&&e.comments.map((function(e){return c.a.createElement("div",{className:"comment__card"},c.a.createElement("div",{className:"comment__body",key:e._id},c.a.createElement("div",{className:"comment__title"},c.a.createElement("strong",null,e.commenter),c.a.createElement("div",{className:"comment__date"},F(e.createdAt),",  "+(t=e.createdAt,new Intl.DateTimeFormat("en-us",{hour:"numeric",minute:"numeric"}).format(new Date(t))))),c.a.createElement("p",{className:"comment__text"},e.comment)));var t})),c.a.createElement(W,{closeForm:function(){return r(!l)},postId:e.postId}))},Q=function(){return c.a.createElement("div",{className:"loading"},"Loading")},X=function(e){var t=e.match,a=Object(n.useContext)(S).data.blogs,l=t.params.id;if(!l)return c.a.createElement("div",null);var r=l.split("-").join(" "),o=a.find((function(e){return e.content.includes(r)}));if(!o)return c.a.createElement(Q,null);var s=JSON.parse(o.content),i=Object(G.convertFromRaw)(s),m=G.EditorState.createWithContent(i),u=Object(V.a)(m.getCurrentContent());return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"nav__wrapper"},c.a.createElement(C,null)),c.a.createElement("main",{className:"post"},c.a.createElement("article",{className:"post__article"},c.a.createElement("header",{className:"post__header"},c.a.createElement("p",null,"By ",o.user.firstName+" "+o.user.lastName,c.a.createElement("time",{className:"post__time"}," . ",new Intl.DateTimeFormat("en-us",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(o.createdAt)))," ")),J()(u),c.a.createElement("footer",{className:"post__footer"},c.a.createElement("div",{className:"post__social"},c.a.createElement("div",{className:"post__social__buttons "},c.a.createElement("div",{className:"post__social__facebook"}),c.a.createElement("div",{className:"post__social__linkedin"}),c.a.createElement("div",{className:"post__social__twitter"})))),c.a.createElement(z,{comments:o.comments,postId:o.id}))))},Z={username:"",password:""},$=function(){var e=Object(n.useState)(Z),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useContext)(g),o=r.authService,m=r.authState.isLoggedIn,u=a.username,d=a.password,E=function(e){var t=e.target,n=t.name,c=t.value;l(Object(i.a)({},a,Object(v.a)({},n,c)))};return m?c.a.createElement(h.a,{to:"/dashboard"}):c.a.createElement("div",{className:"login"},c.a.createElement("h1",null,"Please login to continue"),c.a.createElement("form",{className:"form",onSubmit:function(e){return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,p.a.awrap(o.signin(a));case 4:return t.abrupt("return",c.a.createElement(h.a,{to:"/dashboard"}));case 7:t.prev=7,t.t0=t.catch(1),alert(t.t0.message);case 10:case"end":return t.stop()}}),null,null,[[1,7]])}},c.a.createElement("div",{className:"form__group"},c.a.createElement("label",{className:"form__label",htmlFor:"username"},"Username"),c.a.createElement("input",{className:"form__input",type:"text",name:"username",placeholder:"Username",value:u,onChange:E})),c.a.createElement("div",{className:"form__group"},c.a.createElement("label",{className:"form__label",htmlFor:"password"},"Password"),c.a.createElement("input",{className:"form__input",type:"password",name:"password",placeholder:"Password",value:d,onChange:E})),c.a.createElement("div",{className:"form__button"},c.a.createElement(q,{text:"Login"}))))},ee=function(e,t){Object(n.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t()};return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[e,t])},te=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),l=t[0],r=t[1],i=Object(n.useContext)(g).authService,m=Object(n.useContext)(S).data.users,u=Object(h.g)(),d=m[0],p=d?d.imageUrl:a(46),E=function(){i.logout(),u.push("/")},_=Object(n.useRef)(null);ee(_,(function(){return r(!1)}));var f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"nav__list__group"},c.a.createElement(o.b,{to:"/"},"Home")),c.a.createElement("div",{className:"nav__list__group"},c.a.createElement(o.b,{to:"/dashboard/profile"},"Profile")),c.a.createElement("div",{className:"nav__list__group"},c.a.createElement(o.b,{to:"/dashboard/gallery"},"Gallery")),c.a.createElement("div",{className:"nav__list__group"},c.a.createElement(o.b,{to:"/dashboard/posts"},"Posts")),c.a.createElement("div",{className:"nav__list__group"},c.a.createElement(o.b,{to:"/dashboard/create"},"Create new")),c.a.createElement("div",{className:"nav__list__logout"},c.a.createElement("li",{onClick:E},"Logout")))};return c.a.createElement("div",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},f()),c.a.createElement("div",{ref:_,className:"nav__icon",onClick:function(){return r(!l)}},c.a.createElement("img",{className:"nav__icon__image",src:p||a(46),alt:"admin"}),c.a.createElement("ul",{className:N()({nav__logout:!0,"nav__logout-hide":!l})},c.a.createElement("li",{onClick:E},"Logout")),c.a.createElement("ul",{className:N()({nav__menu:!0,"nav__menu-hide":!l})},f())))},ae=function(e){var t=e.children;return c.a.createElement("div",{className:"dashboard"},c.a.createElement(te,null),t)},ne=function(e){var t=e.imgUrl,a=e.publicId,n=e.handleClick,l=e.checked;return c.a.createElement("div",{className:"picture",key:a,onClick:n(a)},c.a.createElement("img",{className:"picture__image",src:t,alt:"pic"}),c.a.createElement("input",{type:"checkbox",readOnly:!0,checked:l,className:"picture__checked"}))},ce=function(e){var t=Object(n.useContext)(S),a=t.data.gallery,l=t.dataDispatch,r=t.dataService,o=a.reduce((function(e,t){return e[t.public_id]=!1,e}),[]),m=Object(n.useState)(o),u=Object(s.a)(m,2),d=u[0],p=u[1],E=function(){window.cloudinary.openUploadWidget({cloudName:"maryam47web",uploadPreset:"no2bkme1",tags:["xmas"]},(function(e,t){"success"===t.event&&l({type:"ADD_GALLERY",payload:t.info})}))},_=function(t){return function(){e.withCb&&e.cb(t),p(Object(i.a)({},d,Object(v.a)({},t,!d[t])))}},f=a.reduce((function(e,t){return d[t.public_id]&&e.push(t.public_id),e}),[]);return c.a.createElement("div",{className:"gallery"},a.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(q,{text:"Add",handleClick:E}),f[0]&&c.a.createElement(q,{text:f.length>1?"Delete all":"Delete",handleClick:function(){r.removeImage(f[0])}})),c.a.createElement("div",{className:"gallery__contents"},a.map((function(e){return c.a.createElement(ne,{checked:d[e.public_id],handleClick:_,key:e.public_id,publicId:e.public_id,imgUrl:"https://res.cloudinary.com/".concat("maryam47web","/image/upload/").concat(e.public_id,".jpg")})})))):c.a.createElement("div",{className:"gallery__empty"},"The gallery is empty!  ",c.a.createElement(q,{text:"Add picture",handleClick:E})," "))},le=function(){var e=Object(n.useContext)(S),t=e.data.users,l=e.dataDispatch,r=e.dataService,o=t[0],m={username:o?o.username:"",firstName:o?o.firstName:"",lastName:o?o.lastName:"",title:o?o.title:"",bio:o?o.bio:"",imageUrl:o?o.imageUrl:""},u=Object(n.useState)(m),d=Object(s.a)(u,2),p=d[0],E=d[1],_=function(e){var t=e.target,a=t.name,n=t.value;E(Object(i.a)({},p,Object(v.a)({},a,n)))},f=p.firstName,g=p.lastName,b=p.username,h=p.title,y=p.bio,N=p.imageUrl,O=N?N.split("/"):"",C=O.length?O[O.length-1].split(".")[0]:"";return c.a.createElement("div",{className:"profile"},c.a.createElement("div",{className:"profile__content"},c.a.createElement("div",{className:"profile__photo"},c.a.createElement("img",{className:"profile__img",src:N||a(46),height:"200px",alt:"avatar"}),c.a.createElement("div",{className:"profile__photo__overlay"},c.a.createElement("button",{className:"profile__photo__edit",onClick:function(){window.cloudinary.openUploadWidget({cloudName:"maryam47web",uploadPreset:"no2bkme1",tags:["profile"]},(function(e,t){"success"===t.event&&(l({type:"UPDATE_USER_IMAGE",payload:{userId:o._id,obj:{imageUrl:t.info.secure_url}}}),r.updateUser(o._id,{imageUrl:t.info.url},C))}))}},"Change"))),c.a.createElement("form",{className:"form",onSubmit:function(){r.updateUser(o._id,p)}},c.a.createElement("div",{className:"form__group"},c.a.createElement("label",{className:"form__label",htmlFor:"firstName"},"First Name"),c.a.createElement("input",{className:"form__input",type:"text",name:"firstName",value:f,onChange:_,placeholder:"First name"})),c.a.createElement("div",{className:"form__group"},c.a.createElement("label",{className:"form__label",htmlFor:"lastName"},"Last Name"),c.a.createElement("input",{className:"form__input",type:"text",name:"lastName",value:g,onChange:_,placeholder:"Last Name"})),c.a.createElement("div",{className:"form__group"},c.a.createElement("label",{className:"form__label",htmlFor:"username"},"Email"),c.a.createElement("input",{className:"form__input",type:"text",name:"username",value:b,onChange:_,placeholder:"Email"})),c.a.createElement("div",{className:"form__group"},c.a.createElement("label",{className:"form__label",htmlFor:"title"},"Title"),c.a.createElement("input",{className:"form__input",type:"text",name:"title",value:h,onChange:_,placeholder:"title"})),c.a.createElement("div",{className:"form__group"},c.a.createElement("label",{className:"form__label",htmlFor:"bio"},"About"),c.a.createElement("textarea",{className:"form__textarea",cols:12,rows:9,name:"bio",value:y,onChange:_,placeholder:"Biography"})),c.a.createElement("div",{className:"form__button"},c.a.createElement(q,{text:"Save"})))))},re=function(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";case"unstyled":return"RichEditor-paragraph";case"CODE":return"RichEditor-blockcode";case"STRIKETHROUGH":return"RichEditor-strikethrough";default:return""}},oe=function(e){var t=e.onToggle,a=e.active,n=e.headerOptions;return c.a.createElement("div",{className:"RichEditor-headers"},c.a.createElement("select",{className:"RichEditor-headers-select",value:a,onChange:function(e){var a=e.target.value;t(a)}},c.a.createElement("option",{className:"RichEditor-headers-option",key:"unstyled",value:"unstyled"},"Normal"),n.map((function(e){return c.a.createElement("option",{className:"RichEditor-headers-option",key:e.label,value:e.style},e.label)}))))},se=function(e){var t,n=e.active,l=e.style,r=e.onToggle,o=e.label;return c.a.createElement("span",{className:N()("RichEditor-styleButton",(t={},Object(v.a)(t,"RichEditor-styleButton-".concat(o),!0),Object(v.a)(t,"RichEditor-activeButton",n),t)),onMouseDown:function(e){e.preventDefault(),r(l)}},c.a.createElement("img",{className:"RichEditor-styleButton-icon",src:a(302)("./".concat(o,".svg")),alt:"icon"}))},ie=[{label:"Bold",style:"BOLD",type:"INLINE_TYPE"},{label:"Italic",style:"ITALIC",type:"INLINE_TYPE"},{label:"Underline",style:"UNDERLINE",type:"INLINE_TYPE"},{label:"UL",style:"unordered-list-item",type:"BLOCK_TYPE"},{label:"OL",style:"ordered-list-item",type:"BLOCK_TYPE"},{label:"Blockquote",style:"blockquote",type:"BLOCK_TYPE"},{label:"CodeBlock",style:"code-block",type:"BLOCK_TYPE"},{label:"Monospace",style:"CODE",type:"INLINE_TYPE"},{label:"Strike",style:"STRIKETHROUGH",type:"INLINE_TYPE"},{label:"Image",style:"image",type:"IMAGE"}],me=[{label:"Heading 1",style:"header-one",type:"BLOCK_TYPE"},{label:"Heading 2",style:"header-two",type:"BLOCK_TYPE"},{label:"Heading 3",style:"header-three",type:"BLOCK_TYPE"},{label:"Heading 4",style:"header-four",type:"BLOCK_TYPE"},{label:"Heading 5",style:"header-five",type:"BLOCK_TYPE"},{label:"Heading 6",style:"header-six",type:"BLOCK_TYPE"}],ue=function(e){var t=e.editorState,a=e.onToggleBlock,l=e.onToggleInline,r=t.getSelection(),o=t.getCurrentContent().getBlockForKey(r.getStartKey()).getType(),s=t.getCurrentInlineStyle();return c.a.createElement(n.Fragment,null,c.a.createElement(oe,{headerOptions:me,active:o,onToggle:a}),ie.map((function(e){return c.a.createElement(se,{active:"BLOCK_TYPE"===e.type?e.style===o:s.has(e.style),label:e.label,onToggle:"BLOCK_TYPE"===e.type?a:l,style:e.style,key:e.label})})))},de=function(e){var t=e.handleClose,a=e.isOpen,n=e.children;return c.a.createElement("div",{className:N()({modal:!0,"modal-isOpen":a})},c.a.createElement("div",{className:"modal__content"},c.a.createElement("div",{className:"modal__close",onClick:t},"\xd7"),n))},pe=function(e){var t=Object(n.useState)(!1),l=Object(s.a)(t,2),r=l[0],o=l[1],i=Object(n.useState)(!1),m=Object(s.a)(i,2),u=m[0],d=m[1],p=e.editorState,E=e.handleChange,_=e.onAddImage,f=e.handleSave,g=e.variant,b=Object(n.useRef)(null);return ee(b,(function(){return o(!1)})),c.a.createElement("div",{ref:b,className:"toolbar"},c.a.createElement("div",{className:"RichEditor-controls"},c.a.createElement(ue,{editorState:p,onToggleBlock:function(e){E(G.RichUtils.toggleBlockType(p,e))},onToggleInline:function(e){"image"===e&&o(!r),E(G.RichUtils.toggleInlineStyle(p,e))}})),c.a.createElement("div",{className:"toolbar__toggle",onClick:function(){return d(!u)}},c.a.createElement("img",{src:a(147),alt:"menu"})),c.a.createElement("div",{className:N()({toolbar__buttons:!0,"toolbar__buttons-hide":!u})},c.a.createElement(q,{text:g,handleClick:f(g)})),c.a.createElement(de,{isOpen:r,handleClose:function(){return o(!1)}},c.a.createElement(ce,{withCb:!0,cb:function(e){_(e),o(!1)}})))},Ee=function(e){return e.src?c.a.createElement("img",{src:e.src,alt:"upload to cloud"}):null},_e=function(e){var t,a=e.contentState.getEntity(e.block.getEntityAt(0)),n=a.getData().src;return"image"===a.getType()&&(t=c.a.createElement(Ee,{src:n})),t},fe=function(e){return"atomic"===e.getType()?{component:_e,editable:!1}:null},ge=function(e){var t=Object(n.useContext)(S),a=t.data,l=t.dataService,r=e.blogId?a.blogs.filter((function(t){return t.id===e.blogId.id}))[0]:null,o=r?G.EditorState.createWithContent(Object(G.convertFromRaw)(JSON.parse(r.content))):G.EditorState.createEmpty(),i=Object(n.useState)(o),m=Object(s.a)(i,2),u=m[0],d=m[1],p=u.getCurrentContent(),E=Object(n.useState)(JSON.stringify(Object(G.convertToRaw)(p))),_=Object(s.a)(E,2),f=_[0],b=_[1],h=Object(n.useContext)(g).authState,v=Object(n.createRef)(),y=function(){v.current&&v.current.focus()},N=function(e){d(e),b(JSON.stringify(Object(G.convertToRaw)(p)))},O=u.getCurrentContent(),C="RichEditor-editor";return O.hasText()||"unstyled"!==O.getBlockMap().first().getType()&&(C+=" RichEditor-hidePlaceholder"),c.a.createElement("div",{className:"editor"},c.a.createElement("div",{className:"RichEditor"},c.a.createElement(pe,{variant:e.blogId?"Save":"Publish",onAddImage:function(e){var t="https://res.cloudinary.com/".concat("maryam47web","/image/upload/").concat(e,".jpg"),a=u.getCurrentContent().createEntity("image","IMMUTABLE",{src:t}),n=a.getLastCreatedEntityKey(),c=G.EditorState.set(u,{currentContent:a});d(G.AtomicBlockUtils.insertAtomicBlock(c,n," ")),setTimeout((function(){return y()}),0)},editorState:u,handleChange:N,handleSave:function(t){return function(){"Publish"===t?l.createNewPost({content:f,userId:h.id}):l.updatePost(e.blogId.id,f)}}}),c.a.createElement("div",{className:C,onClick:y},c.a.createElement(G.Editor,{ref:v,blockStyleFn:re,blockRendererFn:fe,editorState:u,handleKeyCommand:function(e,t){var a=G.RichUtils.handleKeyCommand(t,e);return a?(N(a),"handled"):"not-handled"},keyBindingFn:function(e){if(9===e.keyCode){var t=G.RichUtils.onTab(e,u,4);return t!==u&&N(t),null}return Object(G.getDefaultKeyBinding)(e)},onChange:N,placeholder:"Tell a story..."}))))},be=function(e){var t=Object(n.useContext)(S).dataService;return c.a.createElement("div",{className:"comments"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Number"),c.a.createElement("th",null,"Comment"),c.a.createElement("th",null,"Commenter"),c.a.createElement("th",null,"Email"),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",null,e.comments.map((function(e,a){return c.a.createElement("tr",{key:e._id},c.a.createElement("td",null,a+1),c.a.createElement("td",null,e.comment),c.a.createElement("td",null,e.commenter),c.a.createElement("td",null,e.email),c.a.createElement("td",null,c.a.createElement(q,{text:"Delete",handleClick:(n=e._id,function(){t.removeComment(n)})})));var n})))))},he=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([{commenter:"",email:"",comment:"",createdAt:"",_id:"",post:""}]),o=Object(s.a)(r,2),i=o[0],m=o[1],u=Object(n.useContext)(S),d=u.data.blogs,p=u.dataService;if(!d.length)return c.a.createElement("div",{className:"posts"},"You don't have any post in your blog.");return c.a.createElement("div",{className:"posts"},c.a.createElement(de,{isOpen:a,handleClose:function(){return l(!a)}},c.a.createElement(be,{comments:i})),c.a.createElement("div",{className:"posts-table"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Post"),c.a.createElement("th",null,"Title"),c.a.createElement("th",null,"Created"),c.a.createElement("th",null,"Updated"),c.a.createElement("th",null,"Comments"),c.a.createElement("th",null,"Edit"),c.a.createElement("th",null,"Delete"))),c.a.createElement("tbody",null,d.map((function(e,t){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,t+1),c.a.createElement("td",null,c.a.createElement("a",{href:"/blog/".concat(L(e.content).title.split(" ").join("-"))},L(e.content).title)),c.a.createElement("td",null,new Date(e.createdAt).toISOString().slice(0,10)),c.a.createElement("td",null,new Date(e.updatedAt).toISOString().slice(0,10)),c.a.createElement("td",null,c.a.createElement("a",{href:"/#",onClick:(r=e.comments,function(){m(r),l(!a)})},e.comments.length)),c.a.createElement("td",null,c.a.createElement("a",{href:"/dashboard/edit/".concat(e.id)},c.a.createElement(q,{text:"Edit"}))),c.a.createElement("td",null,c.a.createElement(q,{text:"Delete",handleClick:(n=e.id,function(){p.removePost(n)})})));var n,r}))))))},ve=function(){var e=Object(n.useContext)(g),t=e.authState.isLoggedIn,a=e.authService,l=Object(n.useContext)(S).dataService;Object(n.useEffect)((function(){a.authenticate(),l.getPosts(),l.getGallery(),l.getUsers()}),[]);return c.a.createElement("div",null,c.a.createElement(h.d,null,c.a.createElement(h.b,{exact:!0,path:"/",component:w}),c.a.createElement(h.b,{exact:!0,path:"/login",component:$}),c.a.createElement(h.b,{exact:!0,path:"/about",component:R}),c.a.createElement(h.b,{exact:!0,path:"/blog",component:K}),c.a.createElement(h.b,{exact:!0,path:"/blog/:id",component:function(e){return e?c.a.createElement(X,e):null}}),c.a.createElement((function(e){var a=e.component,n=e.path,l=Object(b.a)(e,["component","path"]);return c.a.createElement(h.b,{path:n,render:function(e){return t?c.a.createElement(a,Object.assign({},e,l)):c.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}})}),{path:"/dashboard",component:function(e){var t=e.match.url;return c.a.createElement(ae,null,c.a.createElement(h.b,{path:"".concat(t,"/profile"),component:le,exact:!0}),c.a.createElement(h.b,{path:"".concat(t,"/gallery"),component:ce,exact:!0}),c.a.createElement(h.b,{path:"".concat(t,"/create"),component:ge,exact:!0}),c.a.createElement(h.b,{path:"".concat(t,"/edit/:id"),component:function(e){var t=e.match;return c.a.createElement(ge,{blogId:t.params})},exact:!0}),c.a.createElement(h.b,{path:"".concat(t,"/posts"),component:he,exact:!0}))}})))};a(319);r.a.render(c.a.createElement((function(e){var t,a=e.children,l=Object(n.useReducer)(u,m),r=Object(s.a)(l,2),o=r[0],i=r[1],d={authState:o,authDispatch:i,authService:(t=i,{signup:function(e){f.post("/signup",e).then((function(e){t({type:"SIGNIN_SUCCESS",payload:e.data})})).catch((function(e){t({type:"SET_ERRORS",payload:e.message})}))},signin:function(e){f.post("/login",e,{withCredentials:!0}).then((function(e){t({type:"SIGNIN_SUCCESS",payload:e.data})})).catch((function(e){t({type:"SET_ERRORS",payload:e.message})}))},logout:function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:f.get("/logout").then((function(e){t({type:"LOGOUT_USER"})})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}))},authenticate:function(){f.get("/auth").then((function(e){t({type:"SET_AUTH",payload:e.data})})).catch((function(e){console.log(e)}))}})};return c.a.createElement(g.Provider,{value:d},a)}),null,c.a.createElement((function(e){var t,a=e.children,l=Object(n.useReducer)(j,k),r=Object(s.a)(l,2),o=r[0],i=r[1],m={data:o,dataDispatch:i,dataService:(t=i,{getPosts:function(){f.get("/posts").then((function(e){t({type:"FETCH_POSTS",payload:e.data})})).catch((function(e){console.log(e)}))},getGallery:function(){_.a.get("https://res.cloudinary.com/".concat("maryam47web","/image/list/xmas.json")).then((function(e){t({type:"FETCH_GALLERY",payload:e.data.resources})})).catch((function(e){console.log(e)}))},createNewPost:function(e){f.post("/posts",e).then((function(e){t({type:"ADD_POST",payload:e.data})})).catch((function(e){console.log(e)}))},updatePost:function(e,t){f.put("/posts/".concat(e),{content:t}).then((function(e){console.log(e.data)}))},removePost:function(e){f.delete("/posts/".concat(e)).then((function(a){t({type:"REMOVE_POST",payload:e})}))},getUsers:function(){f.get("/users").then((function(e){t({type:"FETCH_USERS",payload:e.data})}))},updateUser:function(e,a,n){f.put("/users/".concat(e),{obj:a,publicId:n}).then((function(e){t({type:"UPDATE_USER",payload:e.data})}))},removeAssets:function(e){f.post("/assets",e).then((function(e){console.log(e.data)}))},removeImage:function(e){f.delete("/assets/".concat(e)).then((function(a){t({type:"REMOVE_IMAGE",payload:e})}))},addComment:function(e){f.post("/comments",e).then((function(e){t({type:"ADD_COMMENT",payload:e.data})})).catch((function(e){console.log(e)}))},removeComment:function(e){f.delete("/comments/".concat(e)).then((function(e){t({type:"REMOVE_COMMENT",payload:e.data})})).catch((function(e){console.log(e)}))}})};return c.a.createElement(S.Provider,{value:m},a)}),null,c.a.createElement(o.a,null,c.a.createElement(ve,null)))),document.getElementById("root"))},46:function(e,t,a){e.exports=a.p+"static/media/avatar.41c9a2b3.png"},91:function(e,t,a){e.exports=a.p+"static/media/linkedin-2.b15dd458.svg"},92:function(e,t,a){e.exports=a.p+"static/media/facebook-2.bfe75be2.svg"},93:function(e,t,a){e.exports=a.p+"static/media/instagram-2.a00c56ee.svg"},94:function(e,t,a){e.exports=a.p+"static/media/time-3.9c3f305b.svg"},95:function(e,t,a){e.exports=a.p+"static/media/user.8702dc53.svg"},96:function(e,t,a){e.exports=a.p+"static/media/bubble.3eaa3469.svg"}},[[153,1,2]]]);
//# sourceMappingURL=main.c6a5e54e.chunk.js.map