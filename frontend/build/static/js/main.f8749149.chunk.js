(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,n){},125:function(e,n,t){},128:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(56),r=t.n(c),i=(t(69),t(6)),s=t(7),u=t(9),l=t(8),p=(t(70),t(1)),d=t(57),h=t.n(d),m=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:h.a.main_div},this.props.children)}}]),t}(o.a.Component),f=t(58),v=t.n(f),_=(t(31),t(59)),b=t.n(_),j=t(60),O=t.n(j),g=t(17),y=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=n.call.apply(n,[this].concat(o))).responseGoogle=function(n){console.log(n),b.a.post("http://localhost:5000/register?authType=google",{token:n.tokenId}).then((function(n){console.log(n.data),e.props.history.push("/chat")}))},e.handleSuccess=function(e){console.log(e)},e.handleFailure=function(e){console.log(e)},e}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(m,null,o.a.createElement("div",{className:O.a.main_div},o.a.createElement(v.a,{clientId:"245937553496-jj986qcag03f80buncc0grjq5mos2vun.apps.googleusercontent.com",buttonText:"GOOGLE SIGNIN",onSuccess:this.responseGoogle,cookiePolicy:"single_host_origin",uxMode:"popup"}),o.a.createElement(g.a,{clientId:"78f2x3kppicuu0",onFailure:this.handleFailure,onSuccess:this.handleSuccess,redirectUri:"http://localhost:3000",scope:"r_emailaddress"})))}}]),t}(o.a.Component),E=t(18),k=t.n(E),w=t(62),x=t.n(w),G=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:x.a.main_div},"sidebar")}}]),t}(o.a.Component),C=(t(125),function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"Content")}}]),t}(o.a.Component)),I=(o.a.Component,function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/chat",component:g.b}),o.a.createElement(p.a,{path:"/",component:y})))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=t(28);r.a.render(o.a.createElement(N.a,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},18:function(e,n,t){e.exports={main_div:"chat_main_div__2NeV5",sidebar:"chat_sidebar__tQY_i",content:"chat_content__23IFx"}},57:function(e,n,t){e.exports={main_div:"Layout_main_div__3GGDA"}},60:function(e,n,t){e.exports={main_div:"auth_main_div__2vwXl"}},62:function(e,n,t){e.exports={main_div:"sidebar_main_div__yuPlG"}},64:function(e,n,t){e.exports=t(128)},69:function(e,n,t){},70:function(e,n,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.f8749149.chunk.js.map