(this.webpackJsonpinstads=this.webpackJsonpinstads||[]).push([[0],{32:function(e,a,t){e.exports=t.p+"static/media/bg.f5c07640.svg"},34:function(e,a,t){e.exports=t(71)},39:function(e,a,t){},44:function(e,a,t){e.exports=t.p+"static/media/logo.252f12f9.svg"},45:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(17),o=t.n(s),l=(t(39),t(3)),i=t(4),c=t(6),u=t(5),m=t(1),h=t(7),p=t(11),d=t(8),g=(t(44),t(32)),f=t.n(g),E=(t(45),t(19)),v=t(33),b=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e="https://instagram.com/".concat(this.props.user.instagram),a="https://wa.me/".concat(this.props.user.whatsapp),t="mailto:".concat(this.props.user.email);return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile__bg"},r.a.createElement("img",{src:this.props.user.topPost,className:"profile__img"})),r.a.createElement("div",{className:"profile__content"},r.a.createElement("div",{className:"profile__img"},r.a.createElement("img",{src:this.props.user.avatar})),r.a.createElement("div",{className:"profile__personal-info"},r.a.createElement("h4",{className:"profile__name"},this.props.user.name),r.a.createElement("div",{className:"profile__location"},r.a.createElement("i",{className:"fas fa-map-marker-alt"}),r.a.createElement("p",null,this.props.user.location))),r.a.createElement("div",{className:"profile__contact"},r.a.createElement("a",{href:e,className:"instagram"},r.a.createElement(d.a,{icon:E.a})),r.a.createElement("a",{href:a,className:"whatsapp"},r.a.createElement(d.a,{icon:E.b})),r.a.createElement("a",{href:t,className:"email"},r.a.createElement(d.a,{icon:v.a})))),r.a.createElement("div",{className:"profile__stats"},r.a.createElement("div",{className:"profile__followers"},r.a.createElement("h4",null,this.props.user.followersCount),r.a.createElement("p",null,"Followers")),r.a.createElement("div",{className:"profile__real"},r.a.createElement("h4",null,this.props.user.activeFollowers,"%"),r.a.createElement("p",null,"Active Users")),r.a.createElement("div",{className:"profile__price"},r.a.createElement("h4",null,this.props.user.priceForPost,"$"),r.a.createElement("p",null,"/Post"))))}}]),a}(r.a.Component),y=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"featured__container"},this.props.users.map((function(e){return r.a.createElement(b,{user:e})})))}}]),a}(r.a.Component),C=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"profiles__list"},this.props.users.map((function(e){return r.a.createElement(b,{user:e})})))}}]),a}(r.a.Component),_=t(9),k=t.n(_),O=t(12),N=t.n(O),S=function(){function e(){Object(l.a)(this,e),this.rootUrl=window.location.href}return Object(i.a)(e,[{key:"getUsers",value:function(){var e;return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.a.awrap(N.a.get("".concat(this.rootUrl,"users")));case 2:return e=a.sent,a.abrupt("return",e.data);case 4:case"end":return a.stop()}}),null,this)}},{key:"login",value:function(e){var a;return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.awrap(N.a.post("".concat(this.rootUrl,"auth/login"),e));case 2:return a=t.sent,this.setToken(a.data.access_token),t.abrupt("return",a.data.username);case 5:case"end":return t.stop()}}),null,this)}},{key:"googleLogin",value:function(e){var a;return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.awrap(N.a.post("".concat(this.rootUrl,"auth/google"),e));case 2:return a=t.sent,this.setToken(a.data.access_token),t.abrupt("return",a.data.username);case 5:case"end":return t.stop()}}),null,this)}},{key:"facebookLogin",value:function(e){var a;return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.awrap(N.a.post("".concat(this.rootUrl,"auth/facebook"),e));case 2:return a=t.sent,this.setToken(a.data.access_token),t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),null,this)}},{key:"signup",value:function(e){var a;return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.awrap(N.a.post("".concat(this.rootUrl,"auth/signup"),e));case 2:return a=t.sent,this.setToken(a.data.access_token),t.abrupt("return",a.data.username);case 5:case"end":return t.stop()}}),null,this)}},{key:"completeSocailSignup",value:function(e){var a;return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.awrap(this.postAuthenticated("".concat(this.rootUrl,"auth/complete"),e));case 2:return a=t.sent,t.abrupt("return",a.data.username);case 4:case"end":return t.stop()}}),null,this)}},{key:"getUserDetails",value:function(){return this.getAuthenticated("".concat(this.rootUrl,"user"))}},{key:"updateUser",value:function(e){return this.putAuthenticated("".concat(this.rootUrl,"users"),e)}},{key:"setToken",value:function(e){this.authTokenHeader={Authorization:"Bearer ".concat(e)}}},{key:"getAuthenticated",value:function(e){var a,t;return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a={headers:this.authTokenHeader},n.next=3,k.a.awrap(N.a.get(e,a));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),null,this)}},{key:"postAuthenticated",value:function(e,a){var t={headers:this.authTokenHeader};return N.a.post(e,a,t)}},{key:"putAuthenticated",value:function(e,a){var t={headers:this.authTokenHeader};return N.a.put(e,a,t)}}]),e}(),j=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("li",{className:"nav__filter"},r.a.createElement("a",{href:"",className:"nav__filter-link"},this.props.categoryName))}}]),a}(r.a.Component),w=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",{className:"nav__filters"},["Sports","Food","TV & Movies","Gaming","Travel","Fashion","Music","Dance","Photography"].map((function(e){return r.a.createElement(j,{categoryName:e})})))}}]),a}(r.a.Component),M=t(13),P=t.n(M),x=t(14),U=t.n(x),L=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={},t.handleEmailChange=t.handleEmailChange.bind(Object(m.a)(t)),t.handlePasswordChange=t.handlePasswordChange.bind(Object(m.a)(t)),t.handleLogin=t.handleLogin.bind(Object(m.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e,a){e.preventDefault(),a(this.state)}},{key:"handleFacebookLogin",value:function(e,a){console.log(e),a&&a(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(P.a,{onRequestClose:this.props.closeModal,isOpen:this.props.isOpen},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h1",null,"Login"),r.a.createElement("div",{className:"modal-content__social"},r.a.createElement(U.a,{cssClass:"facebook-signing-button",appId:"992652077772172",fields:"name,email,gender",disableMobileRedirect:!0,callback:function(a){return e.handleFacebookLogin(a,e.props.facebookLogin)}})),r.a.createElement("div",{className:"divider"},r.a.createElement("span",null,"OR")),r.a.createElement("form",{onSubmit:function(a){return e.handleLogin(a,e.props.login)},className:"modal-content__form"},r.a.createElement("input",{onChange:this.handleEmailChange,type:"text",name:"",id:"",className:"modal-content__email",placeholder:"Enter your email",required:!0}),r.a.createElement("input",{onChange:this.handlePasswordChange,type:"password",name:"",id:"",className:"password",placeholder:"Password",required:!0}),r.a.createElement("button",null,"Continue")),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("p",null,"Not a member?"),r.a.createElement("a",{onClick:this.props.signup,className:"open-signup"},"Sign Up"))))}}]),a}(r.a.Component),A=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={},t.handleEmailChange=t.handleEmailChange.bind(Object(m.a)(t)),t.handlePasswordChange=t.handlePasswordChange.bind(Object(m.a)(t)),t.handlePhoneChange=t.handlePhoneChange.bind(Object(m.a)(t)),t.handleInstagramChange=t.handleInstagramChange.bind(Object(m.a)(t)),t.handleSignup=t.handleSignup.bind(Object(m.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handlePhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"handleInstagramChange",value:function(e){this.setState({instagram:e.target.value})}},{key:"handleSignup",value:function(e,a){e.preventDefault(),a(this.state)}},{key:"handleFacebookLogin",value:function(e,a){a&&a(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(P.a,{onRequestClose:this.props.closeModal,isOpen:this.props.isOpen},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h1",null,"Join INSTADS"),r.a.createElement("div",{className:"modal-content__social"},r.a.createElement(U.a,{cssClass:"facebook-signing-button",textButton:"Signup with Facebook",appId:"992652077772172",fields:"name,email,gender",disableMobileRedirect:!0,callback:function(a){return e.handleFacebookLogin(a,e.props.facebookLogin)}})),r.a.createElement("div",{className:"divider"},r.a.createElement("span",null,"OR")),r.a.createElement("form",{onSubmit:function(a){return e.handleSignup(a,e.props.signup)},className:"modal-content__form"},r.a.createElement("input",{onChange:this.handleEmailChange,type:"text",name:"",id:"",className:"modal-content__email",placeholder:"Enter your email",required:!0}),r.a.createElement("input",{onChange:this.handleInstagramChange,type:"text",name:"",id:"",className:"modal-content__instagram",placeholder:"Link To Instagram",required:!0}),r.a.createElement("input",{onChange:this.handlePasswordChange,type:"password",name:"",id:"",className:"password",placeholder:"Password",required:!0}),r.a.createElement("input",{onChange:this.handlePhoneChange,type:"text",name:"",id:"",className:"modal-content__email",placeholder:"Phone Number (Optional)"}),r.a.createElement("button",null,"Continue"),r.a.createElement("p",null,"By joining I agree to receive emails from INSTADS.")),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("p",null,"Already a member?"),r.a.createElement("a",{onClick:this.props.login,className:"open-login"},"Sign In"))))}}]),a}(r.a.Component),I=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={},t.handlePhoneChange=t.handlePhoneChange.bind(Object(m.a)(t)),t.handleInstagramChange=t.handleInstagramChange.bind(Object(m.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"handlePhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"handleInstagramChange",value:function(e){this.setState({instagram:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement(P.a,{isOpen:this.props.isOpen},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h1",null,"Complete Signup"),r.a.createElement("div",{className:"modal-content__form"},r.a.createElement("input",{onChange:this.handleInstagramChange,type:"text",name:"",id:"",className:"modal-content__instagram",placeholder:"Link To Instagram",required:!0}),r.a.createElement("input",{onChange:this.handlePhoneChange,type:"text",name:"",id:"",className:"modal-content__email",placeholder:"Phone Number (Optional)"}),r.a.createElement("button",{onClick:function(){return e.props.completeSignup(e.state)}},"Continue"),r.a.createElement("p",null,"By joining I agree to receive emails from INSTADS."))))}}]),a}(r.a.Component),F=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).onEmailChange=t.onEmailChange.bind(Object(m.a)(t)),t.onPasswordChange=t.onPasswordChange.bind(Object(m.a)(t)),t.onPhoneChange=t.onPhoneChange.bind(Object(m.a)(t)),t.onPriceChange=t.onPriceChange.bind(Object(m.a)(t)),t.onSave=t.onSave.bind(Object(m.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onPhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"onPriceChange",value:function(e){this.setState({priceForPost:e.target.value})}},{key:"onSave",value:function(e){e(this.state)}},{key:"render",value:function(){var e=this,a=this.props.user;return a?r.a.createElement(P.a,{onRequestClose:this.props.closeModal,isOpen:this.props.isOpen},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h1",null,a.name),r.a.createElement("p",null,a.email),r.a.createElement("p",null,a.instagram),r.a.createElement("div",{className:"modal-content__form"},r.a.createElement("input",{type:"text",name:"email",id:"email",onChange:this.onEmailChange,className:"modal-content__email",placeholder:"Change your Email",required:"true"}),r.a.createElement("input",{type:"password",name:"password",id:"password",onChange:this.onPasswordChange,className:"password",placeholder:"Change your Password",required:"true"}),r.a.createElement("input",{type:"text",name:"phone",id:"phone",onChange:this.onPhoneChange,className:"modal-content__email",placeholder:"Change your Phone Number"}),r.a.createElement("input",{type:"text",name:"priceForPost",id:"priceForPost",onChange:this.onPriceChange,className:"modal-content__email",placeholder:"Change your price for post"}),r.a.createElement("button",{onClick:function(){return e.onSave(e.props.onSave)}},"Save")))):null}}]),a}(r.a.Component),T=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={filter:null,users:null,error:null,isLoginModalOpen:!1,isSignupModalOpen:!1},t._api=new S,t.handleFilterChange=t.handleFilterChange.bind(Object(m.a)(t)),t.openLoginModal=t.openLoginModal.bind(Object(m.a)(t)),t.openSignupModal=t.openSignupModal.bind(Object(m.a)(t)),t.closeAuthModals=t.closeAuthModals.bind(Object(m.a)(t)),t.login=t.login.bind(Object(m.a)(t)),t.facebookLogin=t.facebookLogin.bind(Object(m.a)(t)),t.signup=t.signup.bind(Object(m.a)(t)),t.loadUsers=t.loadUsers.bind(Object(m.a)(t)),t.openUserModal=t.openUserModal.bind(Object(m.a)(t)),t.closeUserModal=t.closeUserModal.bind(Object(m.a)(t)),t.filterByCategory=t.filterByCategory.bind(Object(m.a)(t)),t.updateUser=t.updateUser.bind(Object(m.a)(t)),t.completeSocailSignup=t.completeSocailSignup.bind(Object(m.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"loadUsers",value:function(){var e=this;this._api.getUsers().then((function(a){e.setState({users:a,error:null})})).catch((function(a){e.setState({error:a})}))}},{key:"componentDidMount",value:function(){this.loadUsers()}},{key:"handleFilterChange",value:function(e){this.setState({filter:e.target.value})}},{key:"openUserModal",value:function(){this.setState({isUserModalOpen:!0})}},{key:"closeUserModal",value:function(){this.setState({isUserModalOpen:!1})}},{key:"openLoginModal",value:function(){this.setState({isLoginModalOpen:!0,isSignupModalOpen:!1})}},{key:"openSignupModal",value:function(){this.setState({isSignupModalOpen:!0,isLoginModalOpen:!1})}},{key:"closeAuthModals",value:function(){this.setState({isLoginModalOpen:!1,isSignupModalOpen:!1,isCompleteSignupModalOpen:!1})}},{key:"onAuth",value:function(){this.closeAuthModals(),this.loadUsers(),this.setUserDeatils()}},{key:"updateUser",value:function(e){var a=this;this._api.updateUser(e).then((function(){return a.closeUserModal()}))}},{key:"setUserDeatils",value:function(){var e=this;this._api.getUserDetails().then((function(a){return e.setState({user:a})}))}},{key:"login",value:function(e){var a=this;this._api.login(e).then((function(){return a.onAuth()}))}},{key:"facebookLogin",value:function(e){var a=this;this._api.facebookLogin(e).then((function(e){e.isProfileComplete?a.onAuth():a.setState({isSignupModalOpen:!1,isCompleteSignupModalOpen:!0})}))}},{key:"signup",value:function(e){var a=this;this._api.signup(e).then((function(){return a.onAuth()}))}},{key:"completeSocailSignup",value:function(e){var a=this;this._api.completeSocailSignup(e).then((function(){return a.onAuth()}))}},{key:"filterByCategory",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){var e=this;if(!this.state.users&&!this.state.error)return r.a.createElement("p",null,"Loading....");if(this.state.error&&!this.state.users)return r.a.createElement("p",null,"$",this.state.error.message);var a=this.state.users;this.state.filter&&(a=a.filter((function(a){return a.categories.includes(e.state.filter)})));var t,n=a.slice(0,4),s=!1;return this.state.user?(t=r.a.createElement("a",{onClick:this.openUserModal},this.state.user.name),s=!0):t=r.a.createElement("a",{onClick:this.openLoginModal},"Sign in"),r.a.createElement("body",null,r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav__row"},r.a.createElement("div",{className:"logo-box"},r.a.createElement("a",{className:"logo",href:""},"INSTADS")),r.a.createElement("div",{className:"nav__list"},r.a.createElement("a",{href:""},"Contact"),r.a.createElement("a",{href:""},"Help"),t,s?null:r.a.createElement("button",{onClick:this.openSignupModal,className:"join trigger"},"Become an Influencer"))),r.a.createElement(w,null)),r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__wrapper"},r.a.createElement("div",{className:"header__content"},r.a.createElement("h1",{className:"header__title"},"Find The Perfect Influencer ",r.a.createElement("br",null),"For Your Business"),r.a.createElement("label",{className:"header__search-box"},r.a.createElement(d.a,{icon:p.f}),r.a.createElement("input",{type:"text",onChange:this.handleFilterChange,className:"header__search",placeholder:'Try "Photography"'})),r.a.createElement("button",{onClick:this.openSignupModal,className:"join trigger responsive-signup"},"Become an Influencer")),r.a.createElement("div",{className:"header__bg"},r.a.createElement("img",{src:f.a,alt:"background"})))),r.a.createElement("main",{className:"main"},r.a.createElement("section",{className:"featured"},r.a.createElement("h3",null,"Featured"),r.a.createElement(y,{users:n})),r.a.createElement("section",{className:"categories"},r.a.createElement("h3",null,"Categories"),r.a.createElement("div",{className:"categories__container"},r.a.createElement("a",{onClick:function(){return e.filterByCategory("Sports")},className:"category"},r.a.createElement(d.a,{icon:p.j}),r.a.createElement("p",{className:"category__text"},"Sports")),r.a.createElement("a",{onClick:function(){return e.filterByCategory("Food")},className:"category"},r.a.createElement(d.a,{icon:p.i}),r.a.createElement("p",{className:"category__text"},"Food")),r.a.createElement("a",{onClick:function(){return e.filterByCategory("TV & Movies")},className:"category"},r.a.createElement(d.a,{icon:p.h}),r.a.createElement("p",{className:"category__text"},"TV & Movies")),r.a.createElement("a",{onClick:function(){return e.filterByCategory("Gaming")},className:"category"},r.a.createElement(d.a,{icon:p.b}),r.a.createElement("p",{className:"category__text"},"Gaming")),r.a.createElement("a",{onClick:function(){return e.filterByCategory("Travel")},className:"category"},r.a.createElement(d.a,{icon:p.e}),r.a.createElement("p",{className:"category__text"},"Travel")),r.a.createElement("a",{onClick:function(){return e.filterByCategory("Fashion")},className:"category"},r.a.createElement(d.a,{icon:p.g}),r.a.createElement("p",{className:"category__text"},"Fashion")),r.a.createElement("a",{onClick:function(){return e.filterByCategory("Music")},className:"category"},r.a.createElement(d.a,{icon:p.c}),r.a.createElement("p",{className:"category__text"},"Music")),r.a.createElement("a",{onClick:function(){return e.filterByCategory("Dance")},className:"category"},r.a.createElement(d.a,{icon:p.d}),r.a.createElement("p",{className:"category__text"},"Dance")),r.a.createElement("a",{onClick:function(){return e.filterByCategory("Photography")},className:"category"},r.a.createElement(d.a,{icon:p.a}),r.a.createElement("p",{className:"category__text"},"Photography")))),r.a.createElement("section",{className:"profiles"},r.a.createElement("p",{className:"profiles__sub-title"},"All Profiles"),r.a.createElement("h2",null,"Find Your Next Influencer"),r.a.createElement(C,{users:a}))),r.a.createElement("footer",{class:"footer"},r.a.createElement("div",{class:"logo"},"INSTADS"),r.a.createElement("ul",{class:"footer__nav"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"About us")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Download apps")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:this.openSignupModal},"Become a Influencer")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Careers")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Contact"))),r.a.createElement("p",{class:"footer__copyright"},"\xa9 by INSTADS. All rights reserved."))),r.a.createElement(L,{isOpen:this.state.isLoginModalOpen,closeModal:this.closeAuthModals,signup:this.openSignupModal,login:this.login,facebookLogin:this.facebookLogin}),r.a.createElement(A,{isOpen:this.state.isSignupModalOpen,closeModal:this.closeAuthModals,login:this.openLoginModal,signup:this.signup,facebookLogin:this.facebookLogin}),r.a.createElement(I,{isOpen:this.state.isCompleteSignupModalOpen,completeSignup:this.completeSocailSignup}),r.a.createElement(F,{closeModal:this.closeUserModal,onSave:this.updateUser,isOpen:this.state.isUserModalOpen,user:this.state.user}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.cc78fbe6.chunk.js.map