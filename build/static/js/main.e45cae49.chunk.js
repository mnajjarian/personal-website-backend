(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[37],{10:function(e,t,a){"use strict";var n=a(8),r=a(0),o=a.n(r),c=a(1),s={isLoggedIn:!1},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNIN_ERROR":case"SIGNUP_ERROR":return Object(c.a)({},e,{error:t.payload});case"SIGNIN_SUCCESS":return Object(c.a)({},e,{id:t.payload.id,isLoggedIn:!0,error:null});case"LOGOUT_USER":return Object(c.a)({},e,{isLoggedIn:!1,error:null});case"SET_AUTH":return Object(c.a)({},e,{isLoggedIn:t.payload.auth});default:return e}};a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var l=Object(r.createContext)({}),u=function(e){var t=e.children,a=Object(r.useReducer)(i,s),c=Object(n.a)(a,2),u={authState:c[0],authDispatch:c[1]};return o.a.createElement(l.Provider,{value:u},t)}},101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),c=a.n(o),s=a(12),i=a(10),l=a(19),u=(a(101),a(4)),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(i.b,null,r.a.createElement(u.b,null,r.a.createElement(s.a,null,r.a.createElement(l.App,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()},15:function(e,t,a){"use strict";a.r(t),a.d(t,"Layout",(function(){return s}));var n=a(0),r=a.n(n),o=a(20),c=a(21),s=function(e){var t=e.children;return r.a.createElement("div",{className:"container--fluid"},r.a.createElement(o.Nav,null),t,r.a.createElement(c.Footer,null))}},18:function(e,t,a){"use strict";a.r(t),a.d(t,"Button",(function(){return o}));var n=a(0),r=a.n(n);function o(e){var t=e.text,a=e.handleClick;return r.a.createElement("button",{type:"submit",className:"button",onClick:a},t)}},19:function(e,t,a){"use strict";a.r(t),a.d(t,"App",(function(){return u}));var n=a(0),r=a.n(n),o=a(10),c=a(4),s=a(23),i=a(30),l=a(33);function u(){var e=Object(n.useContext)(o.a).authDispatch,t=Object(n.useContext)(c.a).dataDispatch;return Object(n.useEffect)((function(){var a=new i.a(t);new l.a(e).authenticate(),a.getPosts(),a.getUsers(),a.getGallery()}),[t,e]),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(s.Routes,null))}},20:function(e,t,a){"use strict";a.r(t),a.d(t,"Nav",(function(){return u}));var n=a(8),r=a(0),o=a.n(r),c=a(16),s=a.n(c),i=a(12),l=a(10);function u(){var e=o.a.useState(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],u=Object(r.useContext)(l.a).authState.isLoggedIn;return Object(r.useEffect)((function(){var e=document.getElementById("navbar"),t=function(){window.scrollY>=50&&e?e.classList.add("sticky"):e&&e.classList.remove("sticky")};return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}),[]),o.a.createElement("div",{id:"navbar",className:"navbar"},o.a.createElement("div",{className:s()({navbar__menu:!0,navbar__menu__change:a}),onClick:function(){return c(!a)}},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement("nav",{id:"nav",className:s()({navbar__items:!0,show:!a})},o.a.createElement("ul",{className:"navbar__items__list"},o.a.createElement("a",{href:"/#home"},"home"),o.a.createElement("a",{href:"/#about"},"about"),o.a.createElement("a",{href:"/#contact"},"contact"),o.a.createElement(i.c,{to:"/blog"},"blog"),u&&o.a.createElement(i.c,{to:"/dashboard"},"Dashboard"))))}},21:function(e,t,a){"use strict";a.r(t),a.d(t,"Footer",(function(){return i}));var n=a(0),r=a.n(n),o=a(34),c=a.n(o),s=a(22);function i(){return r.a.createElement("section",{id:"contact",className:"footer col-sm-12 col-md-6"},r.a.createElement("h1",null,"let's get in touch!"),r.a.createElement("div",{className:"footer__social"},r.a.createElement("a",{className:"navbar__social__link",href:"https://www.linkedin.com/in/maryam-tavakoli/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{className:"navbar__social__icon",src:c.a,alt:"icon"}))),r.a.createElement(s.Subscription,null))}},22:function(e,t,a){"use strict";a.r(t),a.d(t,"Subscription",(function(){return u}));var n=a(8),r=a(0),o=a.n(r),c=a(18),s=a(9),i=a(16),l=a.n(i);function u(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],i=t[1],u=Object(r.useState)(!1),d=Object(n.a)(u,2),m=d[0],h=d[1],b=Object(r.useState)(null),p=Object(n.a)(b,2),f=p[0],E=p[1];return o.a.createElement("div",{className:"subscription col-sm-12 col-md-12"},o.a.createElement("h2",null,"or subscribe"),o.a.createElement("div",{className:"subscription__text"},"Recive updates and latest post direct in your email, Simply enter your email below"),o.a.createElement("div",{className:"form"},o.a.createElement("p",{className:l()({subscription__error:!0,subscription__shake:m})},f),o.a.createElement("div",{className:"form__group"},o.a.createElement("input",{className:"form__input",type:"email",name:"email",placeholder:"Enter your email",onChange:function(e){i(e.target.value)},onBlur:function(){console.log("blur"),a.length>0&&!Object(s.a)(a)?E("Please enter a valid email address"):E(null)}}),o.a.createElement(c.Button,{text:"submit",handleClick:function(){Object(s.a)(a)||(h(!0),setTimeout((function(){h(!1)}),500))}}))))}},23:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a(13),o=a(0),c=a.n(o),s=a(10),i=a(15),l=a(4);function u(){var e=Object(o.useContext)(l.a).data;if(!e.users.length)return c.a.createElement("div",null);var t=e.users[0].firstName+" "+e.users[0].lastName;return c.a.createElement("section",{id:"home",className:"header col-sm-12 col-md-12"},c.a.createElement("img",{src:e.users[0].imageUrl,alt:"author"}),c.a.createElement("h1",null,t),c.a.createElement("p",null,e.users[0].title),c.a.createElement("a",{href:"#about",className:"header__scroll"},c.a.createElement("div",{className:"header__scroll-down"})))}function d(){var e=Object(o.useContext)(s.a).authState,t=Object(o.useContext)(l.a).data.users;return t.length&&e?c.a.createElement("section",{id:"about",className:"about col-sm-12 col-md-12"},c.a.createElement("p",{className:"about-p"},t[0].bio)):c.a.createElement("div",null)}var m=a(9);function h(){var e=Object(o.useContext)(l.a).data.blogs.slice(0,3);return c.a.createElement("section",{className:"latest col-sm-12 col-md-10"},c.a.createElement("h1",null,"the latest blog posts"),e.map((function(e){return c.a.createElement("div",{key:e.id,className:"latest__card"},c.a.createElement("div",{className:"latest__card__title"},c.a.createElement("a",{href:"/blog/".concat(Object(m.b)(e.content).title.split(" ").join("-"))},Object(m.b)(e.content).title)),c.a.createElement("p",null,Object(m.b)(e.content).p.substring(0,250),"..."),c.a.createElement("div",{className:"latest__card__date"},c.a.createElement("time",{dateTime:e.createdAt},Object(m.c)(e.createdAt))))})))}function b(){return c.a.createElement(i.Layout,null,c.a.createElement(u,null),c.a.createElement(d,null),c.a.createElement(h,null))}var p=a(12),f=a(35),E=a.n(f);function g(e){var t=e.post,a=e.post.content,n=JSON.parse(a).blocks.filter((function(e){return e.text.length})),r=n.filter((function(e){return"header-one"===e.type}))[0],o=n.filter((function(e){return"unstyled"===e.type}))[0];return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement(p.b,{to:"/blog/".concat(r.text.split(" ").join("-")),className:"card__title"},c.a.createElement("h5",null,r.text)),t.comments.length>0&&c.a.createElement("div",{className:"card__icon"},c.a.createElement("span",null,t.comments.length),c.a.createElement("img",{src:E.a,alt:"comment icon"}))),c.a.createElement("div",{className:"card__text"},o.text),c.a.createElement("div",{className:"card__footer"},c.a.createElement("time",{dateTime:t.createdAt},Object(m.c)(t.createdAt))))}function y(){var e=Object(o.useContext)(l.a).data.blogs;return e.length?c.a.createElement("div",{className:"row articles"},c.a.createElement("div",{className:"col-sm-12 col-md-8"},e.map((function(e){return c.a.createElement(g,{key:e.id,post:e})})))):c.a.createElement("div",{className:"blog"},c.a.createElement("div",{className:"blog__empty"},c.a.createElement("div",null,"There is nothing here!"),c.a.createElement("div",null,"You can create new post through your"," ",c.a.createElement("a",{className:"blog__empty__link",href:"/dashboard/create"},"Dashboard"),".")))}function v(){return c.a.createElement("section",{className:"row jumbotron"},c.a.createElement("div",{className:"col-sm-12 col-md-8"},c.a.createElement("h1",{className:"jumbotron__title"},"articles"),c.a.createElement("p",{className:"jumbotron__text"},c.a.createElement("em",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget. Feugiat nibh sed pulvinar proin gravida hendrerit. Vitae justo eget magna fermentum. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Venenatis urna cursus eget nunc scelerisque viverra mauris in."))))}function _(){return Object(o.useContext)(l.a).data.blogs.length?c.a.createElement(i.Layout,null,c.a.createElement(v,null),c.a.createElement(y,null)):c.a.createElement("div",null)}a.d(t,"Routes",(function(){return j}));var O=function(e){return Object(o.lazy)((function(){return a(84)("./".concat(e,"/").concat(e)).then((function(t){return{default:t[e]}}))}))},S=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(40)]).then(a.bind(null,378)).then((function(e){return{default:e.Post}}))})),D=O("Login"),N=O("Dashboard");function j(){var e=Object(o.useContext)(s.a).authState.isLoggedIn;return c.a.createElement(r.d,null,c.a.createElement(r.b,{exact:!0,path:"/",component:b}),c.a.createElement(r.b,{exact:!0,path:"/login",component:D}),c.a.createElement(r.b,{exact:!0,path:"/blog",component:_}),c.a.createElement(r.b,{exact:!0,path:"/blog/:id",component:function(e){return e?c.a.createElement(S,e):null}}),c.a.createElement((function(t){var a=t.Component,o=t.path,s=Object(n.a)(t,["Component","path"]);return c.a.createElement(r.b,{path:o,render:function(t){return e?c.a.createElement(a,Object.assign({},t,s)):c.a.createElement(r.a,{to:{pathname:"/login",state:{from:t.location}}})}})}),{path:"/dashboard",Component:function(e){var t=e.match;return c.a.createElement(N,{match:t})}}))}},3:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(25),r=a.n(n).a.create({withCredentials:!0,baseURL:"/api"})},30:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(24),r=a(25),o=a.n(r),c=a(3),s=function e(t){var a=this;Object(n.a)(this,e),this.dispatch=void 0,this.getPosts=function(){c.a.get("/posts").then((function(e){a.dispatch({type:"FETCH_POSTS",payload:e.data})})).catch((function(e){console.log(e)}))},this.createNewPost=function(e){c.a.post("/posts",e).then((function(e){a.dispatch({type:"ADD_POST",payload:e.data})})).catch((function(e){console.log(e)}))},this.updatePost=function(e,t){c.a.put("/posts/".concat(e),{content:t}).then((function(e){a.dispatch({type:"EDIT_POST",payload:e.data})})).catch((function(e){console.log(e)}))},this.getUsers=function(){c.a.get("/users").then((function(e){a.dispatch({type:"FETCH_USERS",payload:e.data})}))},this.updateUser=function(e,t,n){console.log(t),c.a.put("/users/".concat(e),{obj:t,publicId:n}).then((function(e){e.data._id?a.dispatch({type:"UPDATE_USER",payload:e.data}):a.dispatch({type:"ERROR_MESSAGE",payload:e.data})})).catch((function(e){console.log(e)}))},this.removeImage=function(e){c.a.delete("/assets/".concat(e)).then((function(){a.dispatch({type:"REMOVE_IMAGE",payload:e})}))},this.removeAssets=function(e){c.a.post("/assets",e).then((function(e){console.log(e.data)}))},this.removePost=function(e){c.a.delete("/posts/".concat(e)).then((function(){a.dispatch({type:"REMOVE_POST",payload:e})}))},this.addComment=function(e){c.a.post("/comments",e).then((function(e){a.dispatch({type:"ADD_COMMENT",payload:e.data})})).catch((function(e){console.log(e)}))},this.removeComment=function(e){c.a.delete("/comments/".concat(e)).then((function(e){a.dispatch({type:"REMOVE_COMMENT",payload:e.data})})).catch((function(){window.location.href="/dashboard/posts"}))},this.getGallery=function(){o.a.get("https://res.cloudinary.com/".concat("maryam47web","/image/list/xmas.json")).then((function(e){a.dispatch({type:"FETCH_GALLERY",payload:e.data.resources})})).catch((function(e){console.log(e)}))},this.dispatch=t}},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(24),r=a(3),o=function e(t){var a=this;Object(n.a)(this,e),this.dispatch=void 0,this.signup=function(e){r.a.post("/signup",e).then((function(e){a.dispatch({type:"SIGNIN_SUCCESS",payload:e.data})})).catch((function(e){a.dispatch({type:"SET_ERRORS",payload:e.message})}))},this.signin=function(e){r.a.post("/login",e).then((function(e){a.dispatch({type:"SIGNIN_SUCCESS",payload:e.data})})).catch((function(e){a.dispatch({type:"SET_ERRORS",payload:e.message})}))},this.logout=function(){r.a.get("/logout").then((function(){a.dispatch({type:"LOGOUT_USER"})})).catch((function(e){console.log(e)}))},this.authenticate=function(){r.a.get("/auth").then((function(e){a.dispatch({type:"SET_AUTH",payload:e.data})})).catch((function(e){console.log(e)}))},this.dispatch=t}},34:function(e,t,a){e.exports=a.p+"static/media/linkedin-2.4c13d5e4.svg"},35:function(e,t,a){e.exports=a.p+"static/media/bubble.3eaa3469.svg"},4:function(e,t,a){"use strict";var n=a(8),r=a(0),o=a.n(r),c=a(1),s={isFetched:!1,blogs:[],users:[],gallery:[],message:null};var i=function(e,t){switch(t.type){case"FETCH_USERS":return Object(c.a)({},e,{users:t.payload});case"UPDATE_USER":return Object(c.a)({},e,{users:e.users.map((function(e){return e._id!==t.payload.userId?e:t.payload}))});case"UPDATE_USER_IMAGE":var a=e.users.filter((function(e){return e._id===t.payload.userId}))[0];return a.imageUrl=t.payload.obj.imageUrl,Object(c.a)({},e,{users:e.users.map((function(e){return e._id!==t.payload.userId?e:a}))});case"FETCH_POSTS":return Object(c.a)({},e,{blogs:(o=t.payload,o.sort((function(e,t){return Number(new Date(t.createdAt))-Number(new Date(e.createdAt))})))});case"POSTS_FECHED":return Object(c.a)({},e,{isFetched:!0});case"FETCH_GALLERY":return Object(c.a)({},e,{gallery:t.payload});case"SET_AVATAR":return Object(c.a)({},e);case"ADD_GALLERY":return Object(c.a)({},e,{gallery:e.gallery.concat(t.payload)});case"ADD_POST":return Object(c.a)({},e,{blogs:e.blogs.concat(t.payload)});case"EDIT_POST":return Object(c.a)({},e,{blogs:e.blogs.map((function(e){return e.id!==t.payload.id?e:t.payload}))});case"REMOVE_POST":return Object(c.a)({},e,{blogs:e.blogs.filter((function(e){return e.id!==t.payload}))});case"REMOVE_IMAGE":return Object(c.a)({},e,{gallery:e.gallery.filter((function(e){return e.public_id!==t.payload}))});case"ADD_COMMENT":var n=e.blogs.filter((function(e){return e.id===t.payload.post}))[0];return n.comments=n.comments.concat(t.payload),Object(c.a)({},e,{blogs:e.blogs.map((function(e){return e.id===t.payload._id?n:e}))});case"REMOVE_COMMENT":var r=e.blogs.filter((function(e){return e.id===t.payload.post}))[0];return r.comments=r.comments.filter((function(e){return e._id!==t.payload._id})),Object(c.a)({},e,{blogs:e.blogs.map((function(e){return e.id===t.payload.post?r:e}))});case"ERROR_MESSAGE":return Object(c.a)({},e,{message:t.payload});case"REMOVE_MESSAGE":return Object(c.a)({},e,{message:null});default:return function(e){throw new Error("Unexpected object: "+e)}(t)}var o};a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var l=Object(r.createContext)({}),u=function(e){var t=e.children,a=Object(r.useReducer)(i,s),c=Object(n.a)(a,2),u={data:c[0],dataDispatch:c[1]};return o.a.createElement(l.Provider,{value:u},t)}},75:function(e,t,a){e.exports=a(102)},84:function(e,t,a){var n={"./App/App":[19,9],"./App/App.tsx":[19,9],"./Button/Button":[18,9],"./Button/Button.tsx":[18,9],"./Button/_style.scss":[112,7,42],"./Dashboard/CommentList/CommentList":[55,9,6],"./Dashboard/CommentList/CommentList.tsx":[55,9,6],"./Dashboard/CommentList/_style.scss":[103,7,25],"./Dashboard/Dashboard":[65,9,16],"./Dashboard/Dashboard.tsx":[65,9,16],"./Dashboard/Gallery/Gallery":[56,9,7],"./Dashboard/Gallery/Gallery.tsx":[56,9,7],"./Dashboard/Gallery/_style.scss":[104,7,26],"./Dashboard/HeaderStyleDropdown/HeaderStyleDropdown":[50,9,11],"./Dashboard/HeaderStyleDropdown/HeaderStyleDropdown.tsx":[50,9,11],"./Dashboard/Media/Media":[51,9,12],"./Dashboard/Media/Media.tsx":[51,9,12],"./Dashboard/MediaBlockRenderer/MediaBlockRenderer":[57,9,10],"./Dashboard/MediaBlockRenderer/MediaBlockRenderer.tsx":[57,9,10],"./Dashboard/Nav/Nav":[61,9,29],"./Dashboard/Nav/Nav.tsx":[61,9,29],"./Dashboard/Nav/_style.scss":[105,7,20],"./Dashboard/PctureChoice/PctureChoice":[49,9,13],"./Dashboard/PctureChoice/PctureChoice.tsx":[49,9,13],"./Dashboard/PctureChoice/_style.scss":[106,7,27],"./Dashboard/PostTable/PostTable":[67,9,5],"./Dashboard/PostTable/PostTable.tsx":[67,9,5],"./Dashboard/PostTable/_style.scss":[107,7,21],"./Dashboard/Preview/Preview":[68,9,0,2,8],"./Dashboard/Preview/Preview.tsx":[68,9,0,2,8],"./Dashboard/Profile/Profile":[62,9,15],"./Dashboard/Profile/Profile.tsx":[62,9,15],"./Dashboard/Profile/_style.scss":[108,7,22],"./Dashboard/RichEditor/RichEditor":[69,9,0,1,9],"./Dashboard/RichEditor/RichEditor.tsx":[69,9,0,1,9],"./Dashboard/RichEditor/_style.scss":[109,7,28],"./Dashboard/StyleButton/StyleButton":[52,9,4],"./Dashboard/StyleButton/StyleButton.tsx":[52,9,4],"./Dashboard/StyleTypes/StyleTypes":[60,9,3],"./Dashboard/StyleTypes/StyleTypes.tsx":[60,9,3],"./Dashboard/Toolbar/Toolbar":[63,9,0,1],"./Dashboard/Toolbar/Toolbar.tsx":[63,9,0,1],"./Dashboard/Toolbar/_style.scss":[110,7,23],"./Dashboard/_main.scss":[111,7,24],"./Dashboard/draft.db":[59,3,14],"./Dashboard/draft.db.json":[59,3,14],"./Footer/Footer":[21,9],"./Footer/Footer.tsx":[21,9],"./Footer/_style.scss":[113,7,46],"./Jumbotron/Jumbotron":[71,9,30],"./Jumbotron/Jumbotron.tsx":[71,9,30],"./Jumbotron/_style.scss":[114,7,43],"./LatestPost/LatestPost":[72,9,31],"./LatestPost/LatestPost.tsx":[72,9,31],"./LatestPost/_style.scss":[115,7,47],"./Layout/Layout":[15,9],"./Layout/Layout.tsx":[15,9],"./Loading/Loading":[64,9,32],"./Loading/Loading.tsx":[64,9,32],"./Loading/_style.scss":[116,7,48],"./Login/Login":[73,9,18],"./Login/Login.tsx":[73,9,18],"./Login/_style.scss":[117,7,44],"./Modal/Modal":[58,9,33],"./Modal/Modal.tsx":[58,9,33],"./Modal/_style.scss":[118,7,45],"./Navbar/Navbar":[20,9],"./Navbar/Navbar.tsx":[20,9],"./Navbar/_style.scss":[119,7,41],"./Notification/Notification":[66,9,34],"./Notification/Notification.tsx":[66,9,34],"./PostBlock/PostBlock":[70,9,35],"./PostBlock/PostBlock.tsx":[70,9,35],"./PostBlock/_style.scss":[120,7,49],"./Routes/Routes":[23,9],"./Routes/Routes.tsx":[23,9],"./Signup/Signup":[74,9,19],"./Signup/Signup.tsx":[74,9,19],"./Subscription/Subscription":[22,9],"./Subscription/Subscription.tsx":[22,9],"./Subscription/_style.scss":[121,7,50],"./Table/Table":[53,9,36],"./Table/Table.tsx":[53,9,36]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(2).map(a.e)).then((function(){return a.t(r,t[1])}))}r.keys=function(){return Object.keys(n)},r.id=84,e.exports=r},9:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"f",(function(){return c})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return i}));var n=function(e){return new Intl.DateTimeFormat("en-us",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e))},r=function(e){return new Intl.DateTimeFormat("en-us",{hour:"numeric",minute:"numeric"}).format(new Date(e))},o=function(e){return e.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/)},c=function(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";case"unstyled":return"RichEditor-paragraph";case"CODE":return"RichEditor-blockcode";case"STRIKETHROUGH":return"RichEditor-strikethrough";default:return""}},s=function(e){var t=JSON.parse(e),a=t.blocks.filter((function(e){return e.text.length})),n=a.filter((function(e){return"header-one"===e.type}))[0],r=a.filter((function(e){return"unstyled"===e.type}))[0],o=t.entityMap[0]?t.entityMap[0].data.src:null;return{title:n.text,p:r.text,url:o}},i=function(e){return new Intl.DateTimeFormat("en-us",{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date(e))}}},[[75,38,39]]]);
//# sourceMappingURL=main.e45cae49.chunk.js.map