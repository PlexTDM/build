(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{193:function(e,t,r){},194:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(38),s=r.n(c),i=r(33),o=r(14),l=r(17),u=r.n(l),j=r(22),b=r(9),d=r(1),p=function(e){return Object(d.jsx)("div",{className:"container mx-auto",children:e.children})},h=r(79),O=r.n(h),x=function(e){return Object(d.jsx)("button",{onClick:e.onClick,className:"".concat("circle"===e.typ?"w-8 h-8 rounded-full":"rounded-xl py-2 px-4"," border-2 border-").concat(e.bg,"-400 bg-").concat(e.bg,"-400 transition duration-300 hover:bg-opacity-100 hover:text-white font-bold bg-opacity-30 text-").concat(e.bg,"-400 flex justify-center items-center"),children:e.val})},m=function(e){return Object(d.jsx)("input",{id:e.id,className:"w-full mb-4 py-2 px-4 rounded-md border border-gray-300",placeholder:e.placeholder,onChange:e.onChange,type:e.type,value:e.value})},f=function(e){return Object(d.jsx)("label",{htmlFor:e.htmlFor,className:"font-bold",children:e.label})},g=function(e){return Object(d.jsx)("form",{className:"w-96 flex w-full flex-col",onSubmit:e.onSubmit,children:e.children})},v=r(263),y=r(272),S=r(271),w=r(24),E="REG_USERS_REQ",R="REG_USERS_RES",C="REG_USERS_REQ",k="REG_USERS_REQ",P="REG_USERS_RES",_="REG_USERS_REQ",T=r(35),F=r.n(T),G=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(r){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:E}),t.next=4,F.a.post("https://biy-daalt-unnamed.herokuapp.com/register",e);case 4:a=t.sent,r({type:R,status:a.status,payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r({type:C,message:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(r){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:E}),t.next=4,F.a.post("https://biy-daalt-unnamed.herokuapp.com/login",e);case 4:a=t.sent,r({type:R,status:a.status,payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r({type:C,message:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},L=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(""),s=Object(b.a)(c,2),l=s[0],h=s[1],E=Object(a.useState)(""),R=Object(b.a)(E,2),C=R[0],k=R[1],P=Object(a.useState)(""),_=Object(b.a)(P,2),T=_[0],F=_[1],I=Object(w.b)(),L=Object(o.f)(),N=Object(w.c)((function(e){return e.register})),U=N.loading,A=N.data,B=N.error,D=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==r.trim()&&""!==l.trim()&&""!==C.trim()&&""!==T.trim()){e.next=3;break}return e.abrupt("return",O.a.fire({icon:"error",text:"All Fields are required!"}));case 3:I(G({username:r,email:l,number:C,password:T})),n(""),h(""),k(""),F("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(p,{children:Object(d.jsx)(S.a,{elevation:12,sx:{width:"30%",marginTop:"5rem",marginX:"auto",padding:"1rem",borderRadius:"5%",border:"10px ridge green"},children:Object(d.jsxs)(g,{children:[Object(d.jsx)(f,{htmlFor:"username",label:"Username"}),Object(d.jsx)(m,{onChange:function(e){return n(e.target.value)},value:r,id:"username",placeholder:"Username"}),Object(d.jsx)(f,{htmlFor:"email",label:"Email"}),Object(d.jsx)(m,{onChange:function(e){return h(e.target.value)},value:l,id:"email",placeholder:"Email"}),Object(d.jsx)(f,{htmlFor:"number",label:"Phone Number"}),Object(d.jsx)(m,{onChange:function(e){return k(e.target.value)},value:C,id:"number",placeholder:"Phone Number",type:"number"}),Object(d.jsx)(f,{htmlFor:"password",label:"Password"}),Object(d.jsx)(m,{onChange:function(e){return F(e.target.value)},value:T,id:"password",placeholder:"Password",type:"password"}),Object(d.jsx)(x,{onClick:D,val:"Register",bg:"green"}),Object(d.jsx)(i.b,{to:"/login",style:{width:"min-content",borderBottom:"1px solid green"},children:"Login"}),U&&Object(d.jsx)(y.a,{}),A.status&&200!==A.status?Object(d.jsxs)(v.a,{severity:"error",children:["error code ",A.status]}):200===A.status?setTimeout((function(){L("/login")}),500):"",B&&Object(d.jsxs)(v.a,{severity:"error",children:["error:",B]})]})})})},N=function(){var e=Object(o.f)(),t=Object(w.b)(),r=Object(w.c)((function(e){return e.login})),n=r.loading,c=r.data,s=r.status,l=r.error,h=Object(a.useState)(""),E=Object(b.a)(h,2),R=E[0],C=E[1],k=Object(a.useState)(""),P=Object(b.a)(k,2),_=P[0],T=P[1],F=function(){var e=Object(j.a)(u.a.mark((function e(r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),""!==R.trim()&&""!==_.trim()){e.next=3;break}return e.abrupt("return",O.a.fire({icon:"error",text:"All Fields are Required!"}));case 3:t(I({email:R,password:_})),G();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){C(""),T("")};return Object(d.jsx)(p,{children:Object(d.jsx)(S.a,{elevation:12,sx:{width:"30%",marginTop:"5rem",marginX:"auto",padding:"1rem",borderRadius:"5%"},children:Object(d.jsxs)(g,{onSubmit:F,children:[Object(d.jsx)(f,{htmlFor:"email",label:"Email"}),Object(d.jsx)(m,{onChange:function(e){return C(e.target.value)},value:R,id:"email",placeholder:"Email"}),Object(d.jsx)(f,{htmlFor:"password",label:"Password"}),Object(d.jsx)(m,{onChange:function(e){return T(e.target.value)},value:_,id:"password",placeholder:"Password",type:"password"}),Object(d.jsx)(x,{val:"Login",bg:"blue"}),Object(d.jsx)(i.b,{to:"/register",style:{width:"min-content",borderBottom:"1px solid green"},children:"Register"}),n&&Object(d.jsx)(y.a,{}),c?localStorage.setItem("currentUser",c.user._id):"",c&&200!==s?Object(d.jsxs)(v.a,{severity:"error",children:["error code ",c.status]}):200===s?void setTimeout((function(){e("/")}),500):"",l&&Object(d.jsxs)(v.a,{severity:"error",children:["error:",l]})]})})})},U=r(275),A=r(266),B=r(274),D=r(276),M=function(){return Object(d.jsx)("footer",{children:Object(d.jsx)(B.a,{px:{xs:3,sm:10},py:{xs:3,sm:5},color:"white",sx:{bgcolor:"primary.main"},children:Object(d.jsxs)(U.a,{maxWidth:"lg",children:[Object(d.jsxs)(A.a,{container:!0,spacing:5,children:[Object(d.jsxs)(A.a,{item:!0,xs:12,sm:4,children:[Object(d.jsx)(B.a,{borderBottom:1,children:"Help"}),Object(d.jsx)(B.a,{children:Object(d.jsx)(D.a,{href:"https://bit.ly/3dp3FDu",target:"_blank",color:"inherit",children:"Contact"})}),Object(d.jsx)(B.a,{children:Object(d.jsx)(D.a,{href:"https://bit.ly/3dp3FDu",color:"inherit",children:"Support"})}),Object(d.jsx)(B.a,{children:Object(d.jsx)(D.a,{href:"/",color:"inherit",children:"Privacy Policy"})})]}),Object(d.jsxs)(A.a,{item:!0,xs:12,sm:4,children:[Object(d.jsx)(B.a,{borderBottom:1,children:"Account"}),Object(d.jsx)(B.a,{children:Object(d.jsx)(D.a,{href:"/login",color:"inherit",children:"Login"})}),Object(d.jsx)(B.a,{children:Object(d.jsx)(D.a,{href:"/register",color:"inherit",children:"Register"})})]}),Object(d.jsxs)(A.a,{item:!0,xs:12,sm:4,children:[Object(d.jsx)(B.a,{borderBottom:1,children:"Messages"}),Object(d.jsx)(B.a,{children:Object(d.jsx)(D.a,{href:"/",color:"inherit",children:"Backup"})}),Object(d.jsx)(B.a,{children:Object(d.jsx)(D.a,{href:"/",color:"inherit",children:"History"})}),Object(d.jsx)(B.a,{children:Object(d.jsx)(D.a,{href:"/",color:"inherit",children:"Roll"})})]})]}),Object(d.jsx)(B.a,{textAlign:"center",pt:{xs:5,sm:5},pb:{xs:5,sm:0},children:"Gantulga Tengis \xae 2021"})]})})})},Q=r(18),H=r(259),W=r(260),q=r(261),J=r(278),X=r(269),z=function(e){var t=Object(Q.a)(Object(Q.a)({},e.sx),{},{width:56,height:56});return Object(d.jsx)(X.a,{className:e.className,alt:e.alt,src:e.src,sx:t})},K=r(255),V=r(279),Y="GET_PROFILE_PIC_RES",Z="GET_PROFILE_ERROR",$=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(r){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.a.get("https://biy-daalt-unnamed.herokuapp.com/profilePic/".concat(e));case 3:a=t.sent,n=a.data,r({type:Y,payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r({type:Z,message:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ee=r(267),te=r(127),re=r(264),ae=r(251),ne=r(122),ce=r.n(ne),se=(r(91),function(e){var t=a.useState(null),r=Object(b.a)(t,2),n=r[0],c=r[1],s=Boolean(n),i=Object(o.f)();return Object(d.jsx)("div",{children:e.id&&e.id?Object(d.jsxs)("div",{children:[Object(d.jsx)(ee.a,{id:"fade-button","aria-controls":"fade-menu","aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:function(e){c(e.currentTarget)},children:e.children}),Object(d.jsx)(te.a,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:n,open:s,onClose:function(){c(null)},TransitionComponent:ae.a,children:Object(d.jsxs)(re.a,{onClick:function(){c(null),console.log("clicked logout"),localStorage.removeItem("currentUser"),i("/login")},children:[Object(d.jsx)(ce.a,{color:"disabled"}),"Logout"]})})]}):Object(d.jsx)(ee.a,{sx:{marginTop:"20%",color:"blue"},onClick:function(){i("/login")},children:"Login"})})}),ie=function(e){var t=Object(w.b)(),r=Object(o.f)(),n=Object(w.c)((function(e){return e.getpfp})),c=n.data,s=Object(a.useState)("0"),i=Object(b.a)(s,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){e.id?t($(e.id)):t($("default"))}),[t,e]),Object(d.jsx)(J.a,{className:"navbar",color:"default",enableColorOnDark:!0,sx:{borderBottom:1,borderColor:"divider"},children:Object(d.jsx)(K.a,{value:l,children:Object(d.jsxs)(q.a,{value:l,onChange:function(e,t){u(t)},sx:{width:"100%"},children:[Object(d.jsx)(V.a,{icon:Object(d.jsx)("img",{src:"https://indra.amjilt.com/imagesSchool/logo-school.png",alt:"logo",width:"150px"}),value:"0",onClick:function(e){return r("/")}}),Object(d.jsx)(V.a,{value:"1",label:"Create Post",onClick:function(e){return r("/create")}}),Object(d.jsx)(V.a,{value:"2",label:"All Posts",onClick:function(e){return r("/")}}),Object(d.jsx)(V.a,{value:"3",label:"Anime",onClick:function(e){return r("/")}}),Object(d.jsx)(V.a,{value:"4",label:"Cars",onClick:function(e){return r("/")}}),Object(d.jsx)(B.a,{className:"navInput",component:"form",autoComplete:"off",sx:{gridColumn:"11 / 14",width:"25%",marginRight:3,marginLeft:17},children:Object(d.jsx)(H.a,{freeSolo:!0,autoHighlight:!0,onChange:function(e,t){return console.log(t)},options:[{title:"Harry Potter",year:2022}].map((function(e){return e.title})),renderInput:function(e){return Object(d.jsx)(W.a,Object(Q.a)(Object(Q.a)({},e),{},{label:"Search Posts",onChange:function(e){e.stopPropagation()}}))}})}),c&&c?Object(d.jsx)(se,{id:e.id,children:Object(d.jsx)(z,{alt:"Profile",src:c.message,className:"profilePic",sx:{gridColumn:"15 / 15"}})}):Object(d.jsx)(se,{id:e.id,children:Object(d.jsx)(z,{alt:"Profile",src:"".concat("https://plextdm.github.io/build","temp.png"),className:"profilePic",sx:{gridColumn:"15 / 15"}})})]})})})},oe=r(128),le=r(270),ue="GET_POSTS_RES",je="GET_POSTS_REQ",be="GET_POSTS_ERROR",de="CREATE_POSTS_RES",pe="CREATE_POSTS_REQ",he="CREATE_POSTS_ERROR",Oe=r(268),xe=r(280),me=r(281),fe=r(282),ge=r(283),ve=r(124),ye=r.n(ve),Se=r(273),we=r(277),Ee=r(123),Re=r.n(Ee),Ce=function(e){var t=function(){var e=Object(j.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("https://biy-daalt-unnamed.herokuapp.com/profilePic/".concat(t));case 2:r=e.sent,a=r.data,s(a.message);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=Object(a.useState)(""),n=Object(b.a)(r,2),c=n[0],s=n[1];return t(e.src),Object(d.jsx)(X.a,{src:c})},ke=function(e){var t=Object(w.b)(),r=Object(w.c)((function(e){return e.getPostsStatus})),n=r.loading,c=r.data;return Object(a.useEffect)((function(){return t(function(){var e=Object(j.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:je}),e.next=4,F.a.get("https://biy-daalt-unnamed.herokuapp.com/postGet");case 4:r=e.sent,t({type:ue,status:r.status,payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:be,message:e.t0.message});case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"3fr auto",gridColumnGap:"50px"},children:[n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Oe.a,{variant:"circular",width:40,height:40}),Object(d.jsx)(Oe.a,{variant:"rectangular",width:170,sx:{my:1}}),Object(d.jsx)(Oe.a,{variant:"rectangular",width:210,height:118})]}),c&&c.message.map((function(e,t){return Object(d.jsxs)(xe.a,{sx:{maxWidth:400,marginBottom:5},children:[Object(d.jsx)(me.a,{avatar:Object(d.jsx)(Ce,{src:e.Poster_id}),action:Object(d.jsx)(Se.a,{children:Object(d.jsx)(Re.a,{})}),title:e.Poster_id}),Object(d.jsx)(fe.a,{children:Object(d.jsx)(we.a,{variant:"body2",color:"text.secondary",children:e.text})}),Object(d.jsx)(ge.a,{disableSpacing:!0,children:Object(d.jsx)(Se.a,{"aria-label":"share",children:Object(d.jsx)(ye.a,{})})})]},"post-".concat(t))}))]})},Pe=r(256),_e=r(265),Te=function(e){var t=Object(a.useState)(""),r=Object(b.a)(t,2),n=r[0],c=r[1],s=Object(a.useState)(!0),i=Object(b.a)(s,2),o=i[0],l=i[1],p=Object(a.useState)(0),h=Object(b.a)(p,2),O=h[0],x=h[1],m=Object(a.useState)(null),f=Object(b.a)(m,2),g=f[0],S=f[1],E=Object(w.b)(),R=Object(w.c)((function(e){return e.postingStatus})),C=R.loading,k=R.data,P=R.error,_=e.id;Object(a.useEffect)((function(){return e.id?(S(!0),""!==n.trim()?l(!1):void l(!0)):S(!1)}),[n,e]);return Object(d.jsxs)("div",{style:{display:"grid",placeItems:"center"},children:[!g&&Object(d.jsx)(v.a,{severity:"error",children:"Login to Post"}),Object(d.jsxs)(_e.a,{value:O,label:"Type",onChange:function(e){x(e.target.value)},children:[Object(d.jsx)(re.a,{value:0,children:"General"}),Object(d.jsx)(re.a,{value:1,children:"Anime"}),Object(d.jsx)(re.a,{value:2,children:"Other"})]}),Object(d.jsx)(Pe.a,{placeholder:"Placeholder",value:n,onChange:function(e){return c(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)(ee.a,{variant:"outlined",onClick:function(){""!==n.trim()&&E(function(e){return function(){var t=Object(j.a)(u.a.mark((function t(r){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:pe}),t.next=4,F.a.post("https://biy-daalt-unnamed.herokuapp.com/post",e);case 4:a=t.sent,r({type:de,status:a.status,payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r({type:he,message:t.t0.message});case 11:case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}({value:n,_id:_}))},disabled:o,children:"Submit"}),C&&Object(d.jsx)(y.a,{}),k&&console.log("a",k),P&&Object(d.jsxs)(v.a,{severity:"error",children:["error:",P]})]})},Fe=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"404 Page not found"}),Object(d.jsx)(i.b,{style:{color:"blue"},to:e.to,children:e.text})]})},Ge=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),r=t[0],c=t[1];Object(a.useEffect)((function(){var e=localStorage.getItem("currentUser");e&&c(e)}),[]);var s=n.a.useMemo((function(){return Object(oe.a)({palette:{primary:{main:"#000"},mode:"dark"},components:{MuiInputLabel:{styleOverrides:{root:{"&.Mui-focused":{color:"whitesmoke"}}}}}})}),[]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(le.a,{theme:s,children:[Object(d.jsx)(ie,{id:r}),Object(d.jsx)(S.a,{sx:{marginTop:"65px",height:"90vh",display:"grid",placeItems:"center"},children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",element:Object(d.jsx)(ke,{})}),Object(d.jsx)(o.a,{path:"/create",element:Object(d.jsx)(Te,{id:r})}),Object(d.jsx)(o.a,{path:"/general",element:Object(d.jsx)("div",{})}),Object(d.jsx)(o.a,{path:"/anime",element:Object(d.jsx)("div",{})}),Object(d.jsx)(o.a,{path:"/cards",element:Object(d.jsx)("div",{})}),Object(d.jsx)(o.a,{path:"*",element:Object(d.jsx)(Fe,{to:"/",text:"Homepage"})})]})}),Object(d.jsx)(M,{})]})})},Ie=r(0).useState,Le=r(35),Ne=function(){var e=Ie(null),t=Object(b.a)(e,2),r=t[0],a=t[1],n=Ie(""),c=Object(b.a)(n,2),s=c[0],i=c[1],o=function(){var e=Object(j.a)(u.a.mark((function e(t){var a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("profilePicInput",r),e.next=5,Le.post("http://localhost:3001/profilePic/default",a,{headers:{"Content-Type":"multipart/form-data"}});case 5:n=e.sent,c=n.data,console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{onChange:function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(t.target.files[0]),i(URL.createObjectURL(t.target.files[0]));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),type:"file",name:"profilePicInput",accept:"image/*"}),Object(d.jsx)("button",{onClick:o,children:"Submit"}),r&&Object(d.jsx)("img",{src:s,alt:"profile"})]})},Ue=r(68),Ae=r(126),Be=r(125),De={loading:!1,data:{}},Me={loading:!1},Qe=Object(Ue.combineReducers)({register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!0});case R:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!1,status:t.status,data:t.payload});case C:return{error:t.message};default:return e}},getpfp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{data:t.payload};case Z:return{error:t.message};default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!0});case P:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!1,status:t.status,data:t.payload});case _:return{error:t.message};default:return e}},postingStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!0});case de:return Object(Q.a)(Object(Q.a)({},e),{},{status:t.status,loading:!1,data:t.payload});case he:return{error:t.message};default:return e}},getPostsStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!0});case ue:return Object(Q.a)(Object(Q.a)({},e),{},{status:t.status,loading:!1,data:t.payload});case be:return{error:t.message};default:return e}}}),He=[Ae.a],We=Object(Ue.createStore)(Qe,Object(Be.composeWithDevTools)(Ue.applyMiddleware.apply(void 0,He))),qe=(r(193),document.getElementById("root"));s.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(w.a,{store:We,children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/*",element:Object(d.jsx)(Ge,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/register",element:Object(d.jsx)(L,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/login",element:Object(d.jsx)(N,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/profile",element:Object(d.jsx)(Ne,{})}),Object(d.jsx)(o.a,{path:"*",element:Object(d.jsx)(Fe,{to:"/login",text:"Login"})})]})})}),qe)}},[[194,1,2]]]);
//# sourceMappingURL=main.492eb8c0.chunk.js.map