(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(10),o=n.n(i),c=n(9),r=n(3),l=n(4),u=n(6),h=n(5),m=n(7),d=(n(60),n(47)),p=n.n(d),v=n(48),f=n.n(v),b=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={loaded:!1},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onLoad",value:function(e){this.setState({loaded:!0})}},{key:"render",value:function(){return s.a.createElement("section",{id:"greeting",className:"app-content"},s.a.createElement("div",{className:"text-content"},s.a.createElement("div",{className:"title"},s.a.createElement("h1",null,"hi, I\u2019m",s.a.createElement("br",null),"Viktor",s.a.createElement("br",null),"Kukurba"),s.a.createElement("h2",null,"web developer"))),s.a.createElement("div",{className:"image-content d-none d-sm-block"},s.a.createElement("img",{alt:"I",onLoad:this.onLoad.bind(this),className:this.state.loaded?"loaded":"",src:p.a}),s.a.createElement("img",{alt:"I",onLoad:this.onLoad.bind(this),className:this.state.loaded?"loaded":"",src:f.a})),s.a.createElement("div",{className:"clear-fix"}))}}]),t}(a.Component),g=n(0),E=n.n(g);function j(e){var t=e.offsetTop;return e.offsetHeight+50>window.innerHeight?Math.abs(t-window.pageYOffset)<e.offsetHeight+50-window.innerHeight:t>=window.pageYOffset&&e.offsetHeight+t<=window.pageYOffset+window.innerHeight}var O=n(15),w=n(22),y=n.n(w),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return e},S=n(8),N=n(12),x="rotate-random-shape",T="rotate-all-shapes",C="SHAPE_CHANGE";function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Math.random()*e*t},a=(arguments.length>2?arguments[2]:void 0).positions[e];return a.rotate={x:n(),y:n(),z:n(),a:n(2)},a}var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:1},t=arguments.length>1?arguments[1]:void 0;switch(e.positions=e.positions||Object(N.a)(Array(e.count)).map(function(){return{rotate:{x:0,y:0,z:0,a:0}}}),t.type){case C:return window.ga&&window.ga("send",{hitType:"event",eventCategory:"ShapeSelect",eventAction:"click",eventLabel:t.shape}),Object(S.a)({},e,{active:t.shape});case x:var n=t.payload||{},a=n.index||Math.floor(Math.random()*e.count);return Object(S.a)({},e,{positions:Object(N.a)(e.positions.slice(0,a)).concat([I(a,n.capacity,e)],Object(N.a)(e.positions.slice(a+1,e.positions.length)))});case T:return Object(S.a)({},e,{positions:function(e,t){for(var n=[],a=0;a<t.count;a++)n.push(I(a,e,t));return n}(t.capacity,e)});default:return e}},M="social-click",D="Message was not sent. Please use other option to contact.",L="Message successfully sent.",H="I\u2019m open for new collaboration. Communicate me on contact form, mail or using social networks",P="viktor.kukurba@gmail.com",W="retrieve-social-info",_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(S.a)({},e,{social:t.social});default:return e}},R="technology-shown",U="retrieve-technologies",V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{technologies:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object.assign({},e,{technologies:e.technologies.map(function(e){return e.name===t.name&&(e.shown=!0),e})});case U:return Object(S.a)({},e,{technologies:t.technologies});default:return e}},Y="fetch-projects",J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(t.type===Y){var n=t.projects;return Object(S.a)({},e,{projects:n})}return e},B="section-visible",K="section-hidden",X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{active:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return-1===e.active.indexOf(t.section)?Object.assign({},e,{active:Object(N.a)(e.active).concat([t.section])}):e;case K:var n=e.active.indexOf(t.section);return-1!==n?Object.assign({},e,{active:Object(N.a)(e.active.splice(0,n)).concat(Object(N.a)(e.active.splice(n+1)))}):e;default:return e}},z=Object(O.c)({header:k,shapes:A,contacts:_,experience:V,portfolio:J,sections:X}),F=Object(O.d)(z,{shapes:{types:["sphere","hexagon","triangle"],active:"triangle",count:6},header:["about","experience","portfolio","contacts"],contacts:{social:[]},experience:{technologies:[]},portfolio:{projects:[]},sections:{active:[]}},Object(O.a)(y.a,y.a)),q={visibleSection:function(e){return{type:B,section:e}},hiddenSection:function(e){return{type:K,section:e}}},G=(n(62),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).timeoutVisible=0,e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,n=window.pageYOffset;window.addEventListener("scroll",function(){clearTimeout(e),n=window.pageYOffset,e=setTimeout(function(){window.pageYOffset===n?j(t.container)?F.dispatch(q.visibleSection(t.props.id)):F.dispatch(q.hiddenSection(t.props.id)):n=window.pageYOffset},100)})}},{key:"componentDidUpdate",value:function(e){var t=this;e.visible!==this.visible()?(clearTimeout(this.timeoutVisible),this.timeoutVisible=setTimeout(function(){window.ga("send","pageview",t.props.id)},3e3)):clearTimeout(this.timeoutVisible)}},{key:"render",value:function(){var e=this;return s.a.createElement("section",{ref:function(t){e.container=t},className:this.visible()+" app-section",id:this.props.id},this.props.children)}},{key:"visible",value:function(){return this.props.activeSections.includes(this.props.id)?"visible":""}}]),t}(a.Component));G.contextTypes={store:E.a.object,id:E.a.string,activeSections:E.a.array};var Q=Object(c.b)(function(e){return{activeSections:e.sections.active}})(G),Z=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).aboutStatements=["I working as frontend developer for more than 6 years of comercial development.\n      I have experience with modern UI frameworks Vue, Angular, React, and still I'm interested in improving my skills in it.\n      I've started programming with server side development using Microsoft technologies ASP.NET, ASP.NET MVC, ADO.NET, WebAPI using C#. \n      Also have faced server side on Python Django, PHP, WordPress. \n      That gives me knowladge and understanding how server side should be developed and how it works, \n      but still my strong side is Frontend.\n      In UI development used JQuery libraries, Angular 1.x, KnockoutJS, YUI, Phonegap/cordova, \n      Grunt, Bower, Webpack, Jasmine, CSS3, LESS, Bootstrap.\n      I graduated Master degree in Social Informatics at National University Lviv Polytechnic.\n      I like to meet new people and take part in new project with interesting challenges or help with extending or fixing existing."],e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(Q,{id:"about"},s.a.createElement("div",{className:"info content-box"},this.aboutStatements.map(function(e,t){return s.a.createElement("p",{key:t},e)})))}}]),t}(a.Component);Z.contextTypes={store:E.a.object};var $=Z,ee=n(11),te=(n(64),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={shown:!1,width:0},e.scrollHandler_=e.show.bind(Object(ee.a)(Object(ee.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.scrollHandler_),this.unsubscribeStore=F.subscribe(function(){var t=e.props.info.name,n=F.getState().experience.technologies.find(function(e){return e.name===t});n&&(e.setState({shown:n.shown,width:n.shown?n.val+"%":0}),n.shown&&e.unsubscribeStore())})}},{key:"componentWillUnmount",value:function(){this.unsubscribeStore(),window.removeEventListener("scroll",this.scrollHandler_)}},{key:"show",value:function(){!this.state.shown&&j(this.refs.container)&&(F.dispatch({type:R,name:this.props.info.name}),window.removeEventListener("scroll",this.scrollHandler_))}},{key:"render",value:function(){var e=this.props.info;return s.a.createElement("div",{className:e.name+" item technology",ref:"container"},s.a.createElement("div",{className:"title"},s.a.createElement("label",null,e.fullName)),s.a.createElement("div",{className:"bar-wrapper"},s.a.createElement("div",{className:"bar col-xs-12"},s.a.createElement("div",{className:"bar-value",style:{width:this.state.width}})),s.a.createElement("span",{className:"title bar-label",style:{left:this.state.width}},e.val,"%"),s.a.createElement("div",{className:"details"},e.details)))}}]),t}(a.Component)),ne=function(){return function(e){fetch("data/technologies.json").then(function(t){if(t.ok)return t.json().then(function(t){return e({type:U,technologies:t})});throw Error(t.responseText)}).catch(function(e){console.log(e.message)})}},ae=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).TEXT={HEADER:{MAIN:"My knowledge level in software development",SUB:"based on web technologies AJAX, REST, SOAP, JSON"}},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){F.dispatch(ne())}},{key:"renderTechnologies",value:function(){return this.props.technologies.map(function(e,t){return s.a.createElement(te,{ref:"tech-"+t,key:t,info:e})})}},{key:"render",value:function(){return s.a.createElement(Q,{id:"experience"},s.a.createElement("div",{className:"experience component"},s.a.createElement("header",null,s.a.createElement("h4",null,this.TEXT.HEADER.MAIN),s.a.createElement("h5",null,this.TEXT.HEADER.SUB)),s.a.createElement("div",{className:"technologies dimmed"},this.renderTechnologies()),s.a.createElement("div",{className:"clear-fix"})))}}]),t}(a.Component),se=Object(c.b)(function(e){return{technologies:e.experience.technologies}})(ae),ie=n(49),oe=n.n(ie),ce=function(){return function(e){fetch("data/projects.json").then(function(t){t.json().then(function(t){e({type:Y,projects:t})})})}},re=(n(83),n(85),{responsive:{0:{items:1},600:{items:2},1000:{items:3}},navText:['<i class="left"/>','<i class="right"/>'],margin:9,nav:!0,loop:!0,autoplay:!0}),le=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){F.dispatch(ce())}},{key:"renderProjects",value:function(){return this.props.projects.length&&this.props.projects.map(function(e,t){return s.a.createElement(ue,{key:t,index:t,project:e})})}},{key:"render",value:function(){return this.props.projects.length&&s.a.createElement(Q,{id:"portfolio"},s.a.createElement("div",{className:"portfolio component"},s.a.createElement("header",null,s.a.createElement("h4",null,"PORTFOLIO. MY LATEST WORKS")),s.a.createElement("div",{className:"projects dimmed"},s.a.createElement(oe.a,Object.assign({},re,{className:"owl-theme"}),this.renderProjects())),s.a.createElement("div",{className:"clear-fix"})))}}]),t}(a.Component),ue=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={activeIndex:0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.project.images.length-1,n=this,a=0;setTimeout(function(){setInterval(function(){a=a===e?0:a+1,n.setState({activeIndex:a})},t.WAIT_CONSTANTS.SLIDE_TIME)},this.props.index*t.WAIT_CONSTANTS.WAIT_TIME)}},{key:"getImages",value:function(){var e=this;return this.props.project.images.map(function(t,n){return s.a.createElement("img",{key:n,"data-index":e.state.activeIndex,alt:"project screen",className:e.getImageClass(n)})})}},{key:"getImageClass",value:function(e){var t=this.state.activeIndex,n=[1,1-this.props.project.images.length];return"proj-".concat(this.props.project.name,"-").concat(e," ")+(e===t?"active":n.indexOf(e-t)>-1?"next":"")}},{key:"projectClickHandler",value:function(){window.ga("send",{hitType:"event",eventCategory:"Portfolio",eventAction:"click",eventLabel:this.props.name})}},{key:"render",value:function(){var e=this.props.project;return s.a.createElement("div",{className:"project item"},s.a.createElement("a",{href:e.link,target:"_blank",onClick:this.projectClickHandler.bind(this),className:"content"},s.a.createElement("div",{className:"images-container"},this.getImages()),s.a.createElement("div",{className:"info"},s.a.createElement("span",null,e.info),s.a.createElement("br",null),s.a.createElement("label",null,"Technologies used:"),s.a.createElement("span",null,e.technologies))))}}]),t}(a.Component);ue.WAIT_CONSTANTS={WAIT_TIME:2e3,SLIDE_TIME:6e3};var he=Object(c.b)(function(e){return{projects:e.portfolio.projects}})(le),me=(n(87),{socialClick:function(e){return{type:M,social:e}},fetchSocialContacts:function(){return function(e){return fetch("data/social.json").then(function(t){t.json().then(function(t){e({type:W,social:t})})})}}}),de=(n(88),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={alert:{show:!1,success:!0,message:""},sending:!1,sendData:{name:"",email:"",subject:"",message:""}},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;F.dispatch(me.fetchSocialContacts()),this.unsubscribeStore=F.subscribe(function(){e.setState(F.getState().contacts.form)})}},{key:"componentWillUnMount",value:function(){this.unsubscribeStore()}},{key:"renderSocial",value:function(){return s.a.createElement("div",{className:"social-networks"},this.props.contacts.social.map(function(e,n){return s.a.createElement("a",{target:"_blank",key:n,onClick:function(){return t.handleSocialClick(e)},className:"icon-"+e.name,href:e.link})}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=new Headers;n.append("Content-Type","application/json"),this.setState({sending:!0}),fetch("/send-email.php",{method:"POST",body:JSON.stringify(this.state.sendData),headers:n}).then(function(e){if(e.ok)t.showSuccess(),window.ga("send",{hitType:"event",eventCategory:"Contacts",eventAction:"send",eventLabel:"email"});else if(!e.ok)throw Error(e.statusText)}).catch(function(e){t.setState({alert:{show:!0,success:!1,message:D},sending:!1})})}},{key:"handleChange",value:function(e){var t=this.state.sendData;t[e.target.name]=e.target.value,this.setState(t)}},{key:"closeMessage",value:function(){var e=this.state.alert;this.setState({alert:Object(S.a)({},e,{show:!1})})}},{key:"showSuccess",value:function(){var e=this,t=this.state.alert;this.setState({alert:Object(S.a)({},t,{show:!0,message:L}),sending:!1}),setTimeout(function(){e.closeMessage()},3e3)}},{key:"render",value:function(){return s.a.createElement(Q,{id:"contacts"},s.a.createElement("div",{className:"content content-box"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"info col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12"},s.a.createElement("p",null,H),s.a.createElement("a",{className:"position-absolute-md",href:"mailto:"+P},P)),s.a.createElement("form",{onSubmit:this.handleSubmit.bind(this),ref:"contactForm",className:"col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12"},s.a.createElement("div",{className:"row form-group"},s.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12"},s.a.createElement("input",{name:"name",required:!0,value:this.state.sendData.name,onChange:this.handleChange.bind(this),className:"form-control form-control-sm",placeholder:"Name"})),s.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12"},s.a.createElement("input",{name:"email",value:this.state.sendData.email,onChange:this.handleChange.bind(this),className:"form-control form-control-sm",placeholder:"Email"}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{name:"subject",value:this.state.sendData.subject,onChange:this.handleChange.bind(this),className:"form-control form-control-sm",placeholder:"Subject"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("textarea",{name:"message",required:!0,value:this.state.sendData.message,onChange:this.handleChange.bind(this),className:"form-control form-control-sm",placeholder:"Message"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("button",{className:"form-control form-control-sm",type:"submit"},this.state.sending?"Sending":"Send")),s.a.createElement("div",{className:"clear-fix"}),s.a.createElement("div",{className:(this.state.alert.show?"":" hidden ")+"alert-wrapper"},s.a.createElement("div",{className:"alert alert-dismissible"+(this.state.alert.success?" alert-success":" alert-danger"),role:"alert"},s.a.createElement("button",{type:"button",className:"close",onClick:this.closeMessage.bind(this),"aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"\xd7")),s.a.createElement("strong",null,this.state.alert.success?"Success":"Error","!")," ",this.state.alert.message)))),s.a.createElement("div",{className:"clear-fix"}),this.renderSocial()))}}],[{key:"handleSocialClick",value:function(e){window.ga("send",{hitType:"event",eventCategory:"Social",eventAction:"click",eventLabel:e.name})}}]),t}(a.Component)),pe=Object(c.b)(function(e){return{contacts:e.contacts}})(de),ve={rotateRandomShape:function(){return{type:x}},rotateAllShapes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:T,capacity:e}},changeShape:function(e){return{type:C,shape:e}}},fe=(n(90),function(e){function t(){var e;Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).setActiveShape=function(t){return e.setState({activeShape:t})};var n=+new Date;return e.rotateShapes=function(){+new Date-n>1e3&&(n=+new Date,F.dispatch(ve.rotateAllShapes(8)))},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.intervalId=setInterval(function(){return F.dispatch(ve.rotateRandomShape())},1e3),window.addEventListener("scroll",this.rotateShapes)}},{key:"componentWillUnMount",value:function(){window.removeEventListener("scroll",this.rotateShapes),clearInterval(this.intervalId)}},{key:"renderShapes",value:function(){var e=this;return this.props.positions.map(function(n,a){var i={transform:t.getTransformVal(n.rotate)};return s.a.createElement("div",{className:"figure-box col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12",key:a},s.a.createElement("img",{alt:"figure",style:i,className:"shape-".concat(e.props.activeShape,"-").concat(a)}))})}},{key:"render",value:function(){return s.a.createElement("div",{className:"figures-wrapper row "+this.props.shape},this.renderShapes())}}],[{key:"getTransformVal",value:function(e){return"rotate3d(".concat(e.x,", ").concat(e.y,", ").concat(e.z,", ").concat(e.a,"deg)\n    translate(-50%, -50%)")}}]),t}(a.Component));fe.defaultProps={shape:"triangle"};var be=Object(c.b)(function(e){return{positions:e.shapes.positions,activeShape:e.shapes.active}})(fe),ge=n(50),Ee=n(16),je=(n(99),function(e){function t(){var e;Object(r.a)(this,t),e=Object(u.a)(this,Object(h.a)(t).call(this));var n=F.getState();return e.toggle=e.toggle.bind(Object(ee.a)(Object(ee.a)(e))),e.state={shapes:n.shapes.types,links:n.header,activeShape:n.shapes.active,isOpen:!1},e.onShapeChange=function(e){this.setState({activeShape:e})}.bind(Object(ee.a)(Object(ee.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"getNavItems",value:function(){return this.state.links.map(function(e,t){return s.a.createElement(Ee.d,{className:"nav-item",key:t},s.a.createElement(ge.Link,{className:"nav-link",to:e,spy:!0,smooth:!0,offset:-50,duration:500},e))})}},{key:"componentWillMount",value:function(){var e=this;this.unsubscribeStore=F.subscribe(function(){var t=F.getState();e.setState({activeShape:t.shapes.active})})}},{key:"componentWillUnMount",value:function(){this.unsubscribeStore()}},{key:"getShapes",value:function(){var e=this;return s.a.createElement("div",{className:"label-block navbar-brand"},this.state.shapes.map(function(t,n){return s.a.createElement("span",{key:n,onClick:function(){return F.dispatch(ve.changeShape(t))},className:"label-element"+(e.state.activeShape===t?" active":"")+" "+t})}))}},{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement(Ee.e,{expand:"md",className:"nav navbar-light"},this.getShapes(),s.a.createElement(Ee.a,{onClick:this.toggle,className:"navbar-toggler hidden-md-up float-xs-right"+(this.state.isOpen?"":" collapsed"),id:"nav-icon3",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement(Ee.b,{isOpen:this.state.isOpen,navbar:!0},s.a.createElement(Ee.c,{className:"ml-auto float-right",navbar:!0},this.getNavItems()))))}}]),t}(a.Component)),Oe=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement(be,null),s.a.createElement(je,null),s.a.createElement("hr",null)),s.a.createElement("div",{className:"row"},s.a.createElement(b,null),s.a.createElement("hr",null),s.a.createElement($,null),s.a.createElement("hr",null),s.a.createElement(se,null),s.a.createElement("hr",null),s.a.createElement(he,null),s.a.createElement("hr",null),s.a.createElement(pe,null),s.a.createElement("footer",null,s.a.createElement("p",null,"All rights received. Viktor Kukurba. 2016."))))}}]),t}(a.Component);n(101),n(103);o.a.render(s.a.createElement(c.a,{store:F},s.a.createElement(Oe,null)),document.getElementById("root"))},47:function(e,t,n){e.exports=n.p+"static/media/opt-foto.f3b7d89d.jpg"},48:function(e,t,n){e.exports=n.p+"static/media/my_photo.5475ff3a.png"},52:function(e,t,n){e.exports=n(105)},60:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},83:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){},99:function(e,t,n){}},[[52,2,1]]]);
//# sourceMappingURL=main.0d0dbab3.chunk.js.map