(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[25],{52:function(e,a,t){"use strict";t.r(a),t.d(a,"AddComment",(function(){return i}));var m=t(16),n=t(1),l=t(12),c=t(0),o=t.n(c),r=t(25),s=t(11),u=t(26);function i(e){var a=Object(c.useState)({commenter:"",email:"",comment:"",post:e.postId}),t=Object(l.a)(a,2),i=t[0],p=t[1],_=Object(c.useContext)(s.a).dataDispatch,f=new u.a(_),b=function(e){var a=e.target,t=a.name,l=a.value;p(Object(n.a)({},i,Object(m.a)({},t,l)))},E=i.commenter,v=i.email,N=i.comment;return o.a.createElement("div",{className:"comment__form"},o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();try{f.addComment(i)}catch(a){console.log(a)}}},o.a.createElement("h3",null,"Leave a comment"),o.a.createElement("div",{className:"form__group"},o.a.createElement("label",{className:"form__label",htmlFor:"commentor"},"Name"),o.a.createElement("input",{className:"form__input",type:"text",name:"commenter",value:E,onChange:b})),o.a.createElement("div",{className:"form__group"},o.a.createElement("label",{className:"form__label",htmlFor:"email"},"Email"),o.a.createElement("input",{className:"form__input",type:"email",name:"email",value:v,onChange:b})),o.a.createElement("div",{className:"form__group"},o.a.createElement("label",{className:"form__label",htmlFor:"comment"},"Comment"),o.a.createElement("textarea",{className:"form__textarea",name:"comment",value:N,onChange:b,rows:3,cols:12})),o.a.createElement("div",{className:"form__button"},o.a.createElement(r.a,{text:"Submit"}))))}}}]);
//# sourceMappingURL=25.06c30852.chunk.js.map