(this["webpackJsonpfasten-web"]=this["webpackJsonpfasten-web"]||[]).push([[0],{85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),i=n.n(r),s=n(48),c=n.n(s),o=n(6),l=n(9),d=n(7),u=n(8),p=n(11),h=n(5),b=h.a.div({minHeight:"100%",width:"100%",display:"flex",flexFlow:"column",margin:0,padding:0}),g=n(13),j=n.n(g),m=n(17),f=n(23),v=n(19),x=n.p+"static/media/fasten_logo.621b8d55.svg",O={fontSize:{xs:8,sm:10,md:14,lg:18,xl:22,xxl:30},fontWeight:{light:300,regular:400,boldLight:600,bold:700},padding:{none:0,tiny:4,sm:8,md:16,lg:24,xl:36,xxl:48},margin:{none:0,tiny:4,sm:8,md:16,lg:24,xl:36,xxl:48},breakpoints:{sm:600,md:960,lg:1280,xl:1920}},k=Object(v.a)(Object(v.a)({},O),{},{mediaQueries:Object.keys(O.breakpoints).reduce((function(e,t){return e[t]="@media (min-width: ".concat(O.breakpoints[t],"px)"),e}),{})}),y={transparent:"transparent",white:"#fff",primary:"#00A6D6",black:"#2f2e41",grey:"#9d9d9d",silver:"#a5b1c2",platinum:"#e0e1dd",platinumWhite:"#f8f9f9",highBlue:"#45aaf2",boyzoneBlue:"#2d98da",ntscBlue:"#4b7bec",royalBlue:"#3867d6",fusionRed:"#fc5c65",desireRed:"#eb3b5a",hibiscusOrange:"#fd9644",bronzeOrange:"#fa8231",flirtatiousYellow:"#fed330",taxiYellow:"#f7b731",reptileGreen:"#26de81",algalGreen:"#20bf6b",overlay:"rgba(80, 80, 80, 0.7)",transparentGrey:"#9d9d9daa"},w=Object(v.a)(Object(v.a)({},y),{},{informative:y.boyzoneBlue,positive:y.algalGreen,negative:y.desireRed,warning:y.taxiYellow}),S=Object(h.a)("nav")({display:"flex",justifyContent:"space-between",width:"100%",minHeight:"70px",zIndex:10,backgroundColor:w.primary,color:w.white,padding:"15px 0"}),C=h.a.div({marginLeft:k.margin.lg,marginRight:k.margin.md,width:"15%"}),L=h.a.div({display:"flex",alignItems:"center",alignContent:"flex-start"}),_=h.a.div({display:"flex",alignItems:"center",alignContent:"flex-end"}),R=h.a.div({display:"flex",alignItems:"flex-start",height:"100%"}),E=h.a.a({fontSize:k.fontSize.xl,paddingLeft:k.padding.none,paddingRight:k.padding.xl,paddingTop:k.padding.tiny,paddingBottom:k.padding.tiny,color:w.white,transition:"0.4s ease",alignSelf:"center",":hover":{color:w.platinum,transform:"scale(1.1)"}}),D=n(10),I=n(24),V={api:"https://api.fasten-project.eu",apiSuffix:"api",git:"https://github.com/fasten-project/",webpage:"http://fasten-project.eu/"},q=function(e){return Object(a.jsx)(R,{children:Object(a.jsx)(E,Object(v.a)({},e))})},N=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(S,{children:[Object(a.jsx)(L,{children:Object(a.jsx)(D.b,{to:"/home",children:Object(a.jsx)(C,{children:Object(a.jsx)("img",{width:"100%",src:x,alt:"FASTEN, Developing an intelligent software package management systems."})})})}),Object(a.jsxs)(_,{children:[Object(a.jsx)(q,{href:V.webpage,target:"_blank",children:Object(a.jsx)(I.b,{})}),Object(a.jsx)(q,{href:V.git,target:"_blank",children:Object(a.jsx)(I.a,{})})]})]})}}]),n}(r.Component),z=Object(p.g)(N),A=h.a.div({marginTop:"12%",width:"100%","& a":{color:w.primary,textDecoration:"none",":hover":{filter:"brightness(85%)"}}}),P=h.a.p({width:"45%",margin:"auto",fontSize:k.fontSize.xl,textAlign:"center"}),F=h.a.p({textAlign:"center"}),U=h.a.div({position:"relative",width:"60%",zIndex:1,margin:"50px auto",marginBottom:k.margin.sm,"& input":{boxSizing:"border-box",outline:"none",border:"none",fontSize:k.fontSize.xxl,color:"#666666",display:"block",width:"100%",backgroundColor:"#e6e6e6",height:70,borderRadius:35,padding:"0 30px 0 100px",":focus + span":{color:w.primary,paddingLeft:k.padding.lg}},"& span":{fontSize:k.fontSize.xxl,display:"flex",alignItems:"center",position:"absolute",borderRadius:25,bottom:0,left:0,width:"100%",height:"100%",paddingLeft:k.padding.lg+10,pointerEvents:"none",color:"#666666",transition:"all 0.4s"}}),B=h.a.div({position:"fixed",bottom:20,left:"20%",margin:"0 auto",textAlign:"center",width:"60%"}),Q=n(26),T=n(49),M=n.n(T),J=n(55),W=n(88),G="An unknown error has occurred! Please try again later!",H=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e,a){var r;return Object(o.a)(this,n),(r=t.call(this,e)).name="APIResponseError",r.uid=Object(W.a)(),r.debug=void 0,r.debug=a,r}return n}(Object(J.a)(Error)),Y=function(e){if(e.response){if(e.response.status<500){var t;try{t=Object.values(e.response.data)[0]}catch(n){t=G}return new H(t,"Bad Response: "+e.message)}return new H(G,"Server has failed: "+e.message)}return new H("Please check your internet connection and try again!","Bad Response: "+e.message)};function K(e,t,n,a,r,i){return $.apply(this,arguments)}function $(){return($=Object(m.a)(j.a.mark((function e(t,n,a,r,i,s){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M()(new URL(n,a).href,Object(v.a)({method:t,data:s},i));case 3:if(c=e.sent,!r(c.data)){e.next=8;break}return e.abrupt("return",c.data);case 8:throw new H("Received malformed API data!","Data received: ".concat(JSON.stringify(c.data)));case 9:e.next=19;break;case 11:if(e.prev=11,e.t0=e.catch(0),console.log(e.t0.toString()),!(e.t0 instanceof H)){e.next=18;break}throw e.t0;case 18:throw Y(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var X=n(4),Z=X.e().shape({id:X.d().integer().positive().required(),package_name:X.f().required(),forge:X.f().required(),project_name:X.f().nullable(),repository:X.f().nullable(),created_at:X.c().max(new Date(Date.now())).nullable(),version:X.f().nullable()}).required(),ee=Object(X.a)().of(Z),te={id:0,package_name:"",forge:"mvn",project_name:"",repository:"",created_at:null,version:null};function ne(e){return Z.isValidSync(e)}function ae(e){return ee.isValidSync(e)}var re=X.e().shape({id:X.d().integer().positive().required(),package_version_id:X.d().integer().positive().required(),namespace:X.f().required(),created_at:X.c().max(new Date(Date.now())).nullable(),metadata:X.e().nullable()}).required(),ie=Object(X.a)().of(re);function se(e){return ie.isValidSync(e)}var ce=X.e().shape({id:X.d().integer().positive().required(),module_id:X.d().integer().positive().required(),fasten_uri:X.f().required(),is_internal_call:X.b().required(),line_start:X.d().integer().required(),line_end:X.d().integer().required(),created_at:X.c().max(new Date(Date.now())).nullable(),metadata:X.e().nullable()}).required(),oe=Object(X.a)().of(ce),le={id:0,module_id:0,fasten_uri:"",is_internal_call:!0,line_start:0,line_end:0,created_at:null,metadata:null};function de(e){return oe.isValidSync(e)}var ue=X.e().shape({id:X.d().integer().positive().required(),package_id:X.d().integer().positive().required(),cg_generator:X.f().required(),version:X.f().required(),architecture:X.f().nullable(),created_at:X.c().max(new Date(Date.now())).nullable(),metadata:X.e().nullable()}).required(),pe=Object(X.a)().of(ue);function he(e){return pe.isValidSync(e)}var be=V.apiSuffix+"/mvn/packages/{0}",ge=V.apiSuffix+"/mvn/packages/{0}/versions",je=V.apiSuffix+"/mvn/packages/{0}/{1}/modules",me=V.apiSuffix+"/mvn/packages/{0}/{1}/modules/callables";function fe(e){return K("get",Q.String.Format(be,e),V.api,ne,{})}var ve=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e,a){var r;return Object(o.a)(this,n),(r=t.call(this,e,a)).state={searchQuery:""},r.handleSearchQueryChange=r.handleSearchQueryChange.bind(Object(f.a)(r)),r.handleSearch=r.handleSearch.bind(Object(f.a)(r)),r}return Object(l.a)(n,[{key:"handleSearchQueryChange",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"handleSearch",value:function(){var e=Object(m.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"==t.key){e.next=2;break}return e.abrupt("return");case 2:return n=this.state.searchQuery,e.prev=3,e.next=6,fe(n);case 6:this.props.history.push("/packages/".concat(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),this.props.history.push("/search?query=".concat(n));case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(z,{}),Object(a.jsxs)(A,{children:[Object(a.jsx)(P,{children:"Learn about robustness and security of the packages in your software ecosystem."}),Object(a.jsxs)(U,{children:[Object(a.jsx)("input",{type:"text",name:"search",placeholder:"Search package",value:this.state.searchQuery,onChange:this.handleSearchQueryChange,onKeyDown:this.handleSearch}),Object(a.jsx)("span",{children:Object(a.jsx)(I.c,{})})]}),Object(a.jsxs)(F,{children:["Example:"," ",Object(a.jsx)("a",{href:"/#/packages/jboss:jbossmq-client/3.2.3",children:"jboss:jbossmq-client"})]}),Object(a.jsxs)(B,{children:[Object(a.jsxs)("p",{children:["Learn more about"," ",Object(a.jsx)("a",{href:"https://www.fasten-project.eu/view/Main/Overview",children:"concept"})," ","and"," ",Object(a.jsx)("a",{href:"https://www.fasten-project.eu/view/Main/Use-cases",children:"use cases"}),"."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Disclaimer:"})," ",Object(a.jsx)("a",{href:"http://github.com/fasten-project/fasten",children:"FASTEN"})," is currently under development with a limited amount of packages available."]})]})]})]})}}]),n}(r.Component),xe=Object(p.g)(ve),Oe=h.a.div({width:"50%",margin:"5% auto"}),ke=h.a.h1({margin:0,marginBottom:15}),ye=h.a.a({marginLeft:k.margin.sm,fontSize:k.fontSize.xl,color:w.primary,textDecoration:"none",":hover":{filter:"brightness(80%)"}}),we=h.a.h3({display:"inline-block",color:w.grey,margin:0}),Se=h.a.div({marginTop:25}),Ce=h.a.button((function(e){return{padding:"5px 10px",border:"none",outline:"none",transition:"ease 0.15s",backgroundColor:e.selected?w.primary:"revert",color:e.selected?w.white:"revert",":hover":{backgroundColor:w.primary,transform:"scale(1.05)",color:w.white,cursor:"pointer"}}})),Le=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e,r){var i;return Object(o.a)(this,n),(i=t.call(this,e,r)).TabMenuItem=function(e){return Object(a.jsx)(Ce,{selected:i.state.tabIndex==e.index,onClick:function(){return i.setState({tabIndex:e.index})},children:e.label})},i.state={tabIndex:0},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.tabs.length>this.state.tabIndex?this.props.tabs[this.state.tabIndex].body:null;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Se,{children:this.props.tabs.map((function(t,n){return Object(a.jsx)(e.TabMenuItem,{index:n,label:t.label},"tab_".concat(n))}))}),t&&Object(a.jsx)(t,{})]})}}]),n}(r.Component),_e=Object(p.g)(Le),Re=h.a.div({margin:"8% auto"}),Ee=h.a.p({fontSize:k.fontSize.xl,marginTop:k.margin.lg}),De=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e,r){var i;return Object(o.a)(this,n),(i=t.call(this,e,r)).renderVersionRow=function(e){var t=i.props.pkg;return Object(a.jsx)(Ee,{children:Object(a.jsx)(D.b,{to:"/packages/".concat(t,"/").concat(e.version),children:e.version})},"version_".concat(e.id))},i.renderModuleRow=function(e){var t=i.props,n=t.pkg,r=t.pkgVersion;return Object(a.jsx)(Ee,{children:Object(a.jsx)(D.b,{to:"/packages/".concat(n,"/").concat(r,"/").concat(encodeURIComponent(e.namespace||"...")),children:e.namespace})},"module_".concat(e.id))},i.renderCallableRow=function(e){var t=i.props,n=t.pkg,r=t.pkgVersion,s=t.namespace,c=encodeURIComponent(s||"..."),o=encodeURIComponent(e.fasten_uri);return Object(a.jsx)(Ee,{children:Object(a.jsx)(D.b,{to:"/packages/".concat(n,"/").concat(r,"/").concat(c,"/").concat(o),children:decodeURIComponent(e.fasten_uri)})},"callable_".concat(e.id))},i.state={isLoading:!0,data:void 0},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.retrieveEntities()}},{key:"retrieveEntities",value:function(){var e=Object(m.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.prev=1,e.t0=this.props.kind,e.next=5,this.props.fetchEntities();case 5:e.t1=e.sent,t={kind:e.t0,entities:e.t1},this.setState({isLoading:!1,data:t}),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),this.setState({isLoading:!1}),this.props.history.push("/oops");case 14:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getTitle",value:function(){switch(this.props.kind){case"VERSIONS":return"Versions";case"MODULES":return"Modules";case"CALLABLES":return"Callables";default:return"Unknown"}}},{key:"renderRows",value:function(){var e,t,n,r,i,s;if(0==(null===(e=this.state.data)||void 0===e?void 0:e.entities.length))return this.renderEmptyWarning();switch(null===(t=this.state.data)||void 0===t?void 0:t.kind){case"VERSIONS":return null===(n=this.state.data)||void 0===n?void 0:n.entities.map(this.renderVersionRow);case"MODULES":return null===(r=this.state.data)||void 0===r?void 0:r.entities.map(this.renderModuleRow);case"CALLABLES":return null===(i=this.state.data)||void 0===i?void 0:i.entities.map(this.renderCallableRow);default:return Object(a.jsxs)("h1",{children:["Unknown Type ",null===(s=this.state.data)||void 0===s?void 0:s.kind]})}}},{key:"renderEmptyWarning",value:function(){var e,t="";switch(null===(e=this.state.data)||void 0===e?void 0:e.kind){case"VERSIONS":t="callables";break;case"MODULES":t="modules";break;case"CALLABLES":t="callables";break;default:t="entities"}return Object(a.jsxs)("h2",{children:["No ",t," available for this package."]})}},{key:"render",value:function(){return this.state.isLoading?Object(a.jsx)(a.Fragment,{}):Object(a.jsxs)(Re,{children:[Object(a.jsx)("h3",{children:this.getTitle()}),Object(a.jsx)("hr",{}),this.renderRows()]})}}]),n}(r.Component),Ie=Object(p.g)(De),Ve=h.a.div({margin:"8% auto"}),qe=h.a.p({fontSize:k.fontSize.xl,marginTop:k.margin.lg,a:{textDecoration:"none","&:last-child":{color:w.fusionRed}}}),Ne=n(53),ze=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e,r){var i;return Object(o.a)(this,n),(i=t.call(this,e,r)).renderRow=function(e){return Object(a.jsx)(qe,{children:e.path.map((function(e,t){return Object(a.jsxs)(a.Fragment,{children:[t>0&&Object(a.jsx)("br",{}),t>0&&Object(a.jsxs)("span",{style:{marginLeft:50},children:[Object(a.jsx)(Ne.a,{})," "]}),Object(a.jsxs)(D.b,{to:e.id,children:[e.className,".",e.methodName]})]})}))},"vulnerability_".concat(e.id))},i.state={isLoading:!0,data:[]},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.retrieveEntities()}},{key:"retrieveEntities",value:function(){var e=Object(m.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.prev=1,t=this.props,t.pkg,t.pkgVersion,e.next=5,[{vulnerability:"https://nvd.nist.gov/vuln/detail/CVE-2019-11777",path:[{id:0,uri:"/org.jboss.mq/AcknowledgementRequest.<init>()/java.lang/VoidType",className:"AknowledgmentRequest",methodName:"init()"},{id:1,uri:"",className:"JavaLang",methodName:"Parse()"},{id:2,uri:"",className:"ParserJackson",methodName:"ParseJson()"}]},{vulnerability:"https://nvd.nist.gov/vuln/detail/CVE-2019-11777",path:[{id:0,uri:"/org.jboss.mq/Connection$1.newThread(/java.lang/Runnable)/java.lang/Thread",className:"Connection",methodName:"newThread()"},{id:1,uri:"",className:"EasyThreading",methodName:"threadRequest()"}]},{vulnerability:"https://nvd.nist.gov/vuln/detail/CVE-2019-11777",path:[{id:0,uri:"/org.jboss.mq/DurableSubscriptionID.getClientID()/java.lang/String",className:"DurableSubscriptionID",methodName:"getClientId()"},{id:1,uri:"",className:"UserRequest",methodName:"getUser()"},{id:2,uri:"",className:"NumberGenerator",methodName:"generateID()"}]}];case 5:n=e.sent,this.setState({isLoading:!1,data:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),this.setState({isLoading:!1});case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t;return this.state.isLoading?Object(a.jsx)(a.Fragment,{}):Object(a.jsxs)(Ve,{children:[Object(a.jsx)("h3",{children:"Vulnerabilities"}),Object(a.jsx)("hr",{}),0==(null===(e=this.state.data)||void 0===e?void 0:e.length)&&Object(a.jsx)("h2",{children:"No vulnerabilities found for this package!"}),null===(t=this.state.data)||void 0===t?void 0:t.map(this.renderRow)]})}}]),n}(r.Component),Ae=Object(p.g)(ze),Pe=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=[{label:"Versions",body:function(){return Object(a.jsx)(Ie,{kind:"VERSIONS",pkg:e.props.pkg,pkgVersion:e.props.pkgVer,fetchEntities:function(){return t=e.props.pkg,K("get",Q.String.Format(ge,t),V.api,he,{});var t}})}},{label:"Modules",body:function(){return Object(a.jsx)(Ie,{kind:"MODULES",pkg:e.props.pkg,pkgVersion:e.props.pkgVer,fetchEntities:function(){return t=e.props.pkg,n=e.props.pkgVer,K("get",Q.String.Format(je,t,n),V.api,se,{});var t,n}})}},{label:"Vulnerabilities",body:function(){return Object(a.jsx)(Ae,{pkg:e.props.pkg,pkgVersion:e.props.pkgVer})}}];return Object(a.jsx)(_e,{tabs:t})}}]),n}(r.Component),Fe=Object(p.g)(Pe),Ue=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.pkg,n=e.pkgVer,r=e.namespace,i=[{label:"Callables",body:function(){return Object(a.jsx)(Ie,{kind:"CALLABLES",pkg:t,pkgVersion:n,namespace:r,fetchEntities:function(){return function(e,t,n){return K("post",Q.String.Format(me,e,t),V.api,de,{headers:{"Content-Type":"text/plain"}},n)}(t,n,r)}})}}];return Object(a.jsx)(_e,{tabs:i})}}]),n}(r.Component),Be=Object(p.g)(Ue),Qe=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("h1",{children:"hello"})}}]),n}(r.Component),Te=Object(p.g)(Qe),Me=n(54),Je=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e,a){var r;return Object(o.a)(this,n),(r=t.call(this,e,a)).state={isLoading:!0,pkg:te},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.retrievePackage()}},{key:"retrievePackage",value:function(){var e=Object(m.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),t=this.props.match.params.pkgParam,e.prev=2,e.next=5,fe(t);case 5:n=e.sent,this.setState({isLoading:!1,pkg:n}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),this.setState({isLoading:!1}),this.props.history.push("/oops");case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"renderAbstractionContent",value:function(){var e=this.props.match.params,t=e.verParam,n=e.moduleParam,r=e.callableParam,i=n?decodeURIComponent(n):null;return r?Object(a.jsx)(Te,{callable:le}):i?Object(a.jsx)(Be,{pkg:this.state.pkg.package_name,pkgVer:t,namespace:i}):Object(a.jsx)(Fe,{pkg:this.state.pkg.package_name,pkgVer:t})}},{key:"render",value:function(){var e=this.state.pkg,t=this.props.match.params,n=t.verParam,r=t.moduleParam,i=t.callableParam,s=r?decodeURIComponent(r):null,c=i?decodeURIComponent(i):null;return s&&"/"==s.charAt(0)&&(s=s.substring(1)),c&&"/"==c.charAt(0)&&(c=c.substring(1)),this.state.isLoading?Object(a.jsx)("h1",{children:"Loading..."}):0==e.id?Object(a.jsx)(p.a,{to:"/"}):void 0==n&&e.version?Object(a.jsx)(p.a,{to:"/packages/".concat(e.package_name,"/").concat(e.version)}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(z,{}),Object(a.jsxs)(Oe,{children:[Object(a.jsxs)(ke,{children:[Object(a.jsxs)(D.b,{to:"/packages/".concat(e.package_name)+(void 0===n?"":"/".concat(n)),children:[e.project_name||e.package_name," ",n]}),s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{children:" / "}),Object(a.jsx)(D.b,{to:"/packages/".concat(e.package_name,"/").concat(n,"/").concat(r),children:s})]}),c&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{children:" / "}),Object(a.jsx)(D.b,{to:"/packages/".concat(e.package_name,"/").concat(n,"/").concat(r,"/").concat(i),children:c})]}),e.repository&&Object(a.jsx)(ye,{href:e.repository,children:Object(a.jsx)(Me.a,{})})]}),e.created_at&&Object(a.jsxs)(we,{children:["Created ",e.created_at.toLocaleDateString()]}),this.renderAbstractionContent()]})]})}}]),n}(r.Component),We=Object(p.g)(Je),Ge=h.a.div({width:"60%",margin:"15px auto","& a":{color:w.primary,textDecoration:"none",":hover":{filter:"brightness(85%)"}}}),He=h.a.div({position:"relative",width:"100%",zIndex:1,margin:"10px auto",marginBottom:k.margin.lg,"& input":{boxSizing:"border-box",outline:"none",border:"none",fontSize:k.fontSize.xxl,color:"#666666",display:"block",width:"100%",backgroundColor:"#e6e6e6",height:70,borderRadius:35,padding:"0 30px 0 100px",":focus + span":{color:w.primary,paddingLeft:k.padding.lg}},"& span":{fontSize:k.fontSize.xxl,display:"flex",alignItems:"center",position:"absolute",borderRadius:25,bottom:0,left:0,width:"100%",height:"100%",paddingLeft:k.padding.lg+10,pointerEvents:"none",color:"#666666",transition:"all 0.4s"}}),Ye=h.a.a({display:"block",margin:"".concat(k.margin.none," ").concat(k.margin.lg,"px"),padding:"".concat(k.padding.tiny,"px ").concat(k.padding.md,"px"),verticalAlign:"center",height:k.margin.xxl,lineHeight:"".concat(k.margin.xxl,"px"),":hover":{backgroundColor:"rgba(82, 82, 82, .2)"}}),Ke=V.apiSuffix+"/mvn/packages/search?packageName={0}";var $e=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e,a){var r;Object(o.a)(this,n);var i=(r=t.call(this,e,a)).props.location.search,s=new URLSearchParams(i).get("query")||"";return s||r.props.history.push("/"),r.state={isLoading:!0,searchQuery:s,suggestions:[]},r.handleSearchQueryChange=r.handleSearchQueryChange.bind(Object(f.a)(r)),r.handleSearch=r.handleSearch.bind(Object(f.a)(r)),r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.retrieveSuggestions()}},{key:"retrieveSuggestions",value:function(){var e=Object(m.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),t=this.state.searchQuery,e.prev=2,e.next=5,a=t,K("get",Q.String.Format(Ke,a),V.api,ae,{});case 5:n=e.sent,this.setState({isLoading:!1,suggestions:n}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.toString()),this.setState({isLoading:!1});case 13:case"end":return e.stop()}var a}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleSearchQueryChange",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"handleSearch",value:function(e){"Enter"==e.key&&(this.props.history.push("/search?query=".concat(this.state.searchQuery)),this.retrieveSuggestions())}},{key:"render",value:function(){var e=this.state,t=e.suggestions,n=e.isLoading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(z,{}),Object(a.jsxs)(Ge,{children:[Object(a.jsxs)(He,{children:[Object(a.jsx)("input",{type:"text",name:"search",placeholder:"Search package",value:this.state.searchQuery,onChange:this.handleSearchQueryChange,onKeyDown:this.handleSearch}),Object(a.jsx)("span",{children:Object(a.jsx)(I.c,{})})]}),0==t.length&&!n&&Object(a.jsx)("h2",{style:{margin:k.margin.xxl},children:"No suggestions"}),t.map((function(e){return Object(a.jsx)(Ye,{href:"/#/packages/"+e.package_name,children:e.package_name},e.id)}))]})]})}}]),n}(r.Component),Xe=Object(p.g)($e),Ze=h.a.div({width:"60%",margin:"15px auto","& a":{color:w.primary,textDecoration:"none",":hover":{filter:"brightness(85%)"}}}),et=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(z,{}),Object(a.jsxs)(Ze,{children:[Object(a.jsx)("h1",{children:"Page Not Found (404)"}),Object(a.jsx)("p",{children:"Looks like you have followed a broken link or entered a URL that does not exist on the site."}),Object(a.jsx)("a",{href:"/",children:"\u2190 Back to home page"})]})]})}}]),n}(r.Component),tt=Object(p.g)(et),nt=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.location;return Object(a.jsx)(b,{children:Object(a.jsxs)(p.d,{children:[Object(a.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(p.a,{to:"/home"})}}),Object(a.jsx)(p.b,{exact:!0,path:"/home",component:xe},e.key),Object(a.jsx)(p.b,{exact:!0,path:"/search",component:Xe},e.key),Object(a.jsx)(p.b,{exact:!0,path:"/packages/:pkgParam/:verParam?/:moduleParam?/:callableParam?",component:We},e.key),Object(a.jsx)(p.b,{component:tt})]})})}}]),n}(r.Component),at=Object(p.g)(nt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(85);c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(D.a,{basename:"/",children:Object(a.jsx)(at,{})})}),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[86,1,2]]]);
//# sourceMappingURL=main.5a2a803a.chunk.js.map