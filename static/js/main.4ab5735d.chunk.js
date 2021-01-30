(this["webpackJsonpfasten-web"]=this["webpackJsonpfasten-web"]||[]).push([[0],{85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a.n(r),s=a(48),c=a.n(s),o=a(6),l=a(9),d=a(7),u=a(8),h=a(10),p=a(4),b=p.a.div({minHeight:"100%",width:"100%",display:"flex",flexFlow:"column",margin:0,padding:0}),g=a(23),j=a(19),m=a.p+"static/media/fasten_logo.621b8d55.svg",f={fontSize:{xs:8,sm:10,md:14,lg:18,xl:22,xxl:30},fontWeight:{light:300,regular:400,boldLight:600,bold:700},padding:{none:0,tiny:4,sm:8,md:16,lg:24,xl:36,xxl:48},margin:{none:0,tiny:4,sm:8,md:16,lg:24,xl:36,xxl:48},breakpoints:{sm:600,md:960,lg:1280,xl:1920}},x=Object(j.a)(Object(j.a)({},f),{},{mediaQueries:Object.keys(f.breakpoints).reduce((function(e,t){return e[t]="@media (min-width: ".concat(f.breakpoints[t],"px)"),e}),{})}),v={transparent:"transparent",white:"#fff",primary:"#00A6D6",black:"#2f2e41",grey:"#9d9d9d",silver:"#a5b1c2",platinum:"#e0e1dd",platinumWhite:"#f8f9f9",highBlue:"#45aaf2",boyzoneBlue:"#2d98da",ntscBlue:"#4b7bec",royalBlue:"#3867d6",fusionRed:"#fc5c65",desireRed:"#eb3b5a",hibiscusOrange:"#fd9644",bronzeOrange:"#fa8231",flirtatiousYellow:"#fed330",taxiYellow:"#f7b731",reptileGreen:"#26de81",algalGreen:"#20bf6b",overlay:"rgba(80, 80, 80, 0.7)",transparentGrey:"#9d9d9daa"},O=Object(j.a)(Object(j.a)({},v),{},{informative:v.boyzoneBlue,positive:v.algalGreen,negative:v.desireRed,warning:v.taxiYellow}),k=Object(p.a)("nav")({display:"flex",justifyContent:"space-between",width:"100%",minHeight:"70px",zIndex:10,backgroundColor:O.primary,color:O.white,padding:"15px 0"}),y=p.a.div({marginLeft:x.margin.lg,marginRight:x.margin.md,width:"15%"}),w=p.a.div({display:"flex",alignItems:"center",alignContent:"flex-start"}),S=p.a.div({display:"flex",alignItems:"center",alignContent:"flex-end"}),C=p.a.div({display:"flex",alignItems:"flex-start",height:"100%"}),L=p.a.a({fontSize:x.fontSize.xl,paddingLeft:x.padding.none,paddingRight:x.padding.xl,paddingTop:x.padding.tiny,paddingBottom:x.padding.tiny,color:O.white,transition:"0.4s ease",alignSelf:"center",":hover":{color:O.platinum,transform:"scale(1.1)"}}),_=a(11),R=a(24),D={api:"https://api.fasten-project.eu",apiSuffix:"api",git:"https://github.com/fasten-project/",webpage:"http://fasten-project.eu/"},E=function(e){return Object(n.jsx)(C,{children:Object(n.jsx)(L,Object(j.a)({},e))})},I=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(k,{children:[Object(n.jsx)(w,{children:Object(n.jsx)(_.b,{to:"/home",children:Object(n.jsx)(y,{children:Object(n.jsx)("img",{width:"100%",src:m,alt:"FASTEN, Developing an intelligent software package management systems."})})})}),Object(n.jsxs)(S,{children:[Object(n.jsx)(E,{href:D.webpage,target:"_blank",children:Object(n.jsx)(R.b,{})}),Object(n.jsx)(E,{href:D.git,target:"_blank",children:Object(n.jsx)(R.a,{})})]})]})}}]),a}(r.Component),q=Object(h.g)(I),z=p.a.div({marginTop:"12%",width:"100%","& a":{color:O.primary,textDecoration:"none",":hover":{filter:"brightness(85%)"}}}),N=p.a.p({width:"45%",margin:"auto",fontSize:x.fontSize.xl,textAlign:"center"}),A=p.a.p({textAlign:"center"}),V=p.a.div({position:"relative",width:"60%",zIndex:1,margin:"50px auto",marginBottom:x.margin.sm,"& input":{boxSizing:"border-box",outline:"none",border:"none",fontSize:x.fontSize.xxl,color:"#666666",display:"block",width:"100%",backgroundColor:"#e6e6e6",height:70,borderRadius:35,padding:"0 30px 0 100px",":focus + span":{color:O.primary,paddingLeft:x.padding.lg}},"& span":{fontSize:x.fontSize.xxl,display:"flex",alignItems:"center",position:"absolute",borderRadius:25,bottom:0,left:0,width:"100%",height:"100%",paddingLeft:x.padding.lg+10,pointerEvents:"none",color:"#666666",transition:"all 0.4s"}}),P=p.a.div({position:"fixed",bottom:20,left:"20%",margin:"0 auto",textAlign:"center",width:"60%"}),Q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(o.a)(this,a),(r=t.call(this,e,n)).state={searchQuery:""},r.handleSearchQueryChange=r.handleSearchQueryChange.bind(Object(g.a)(r)),r.handleSearch=r.handleSearch.bind(Object(g.a)(r)),r}return Object(l.a)(a,[{key:"handleSearchQueryChange",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"handleSearch",value:function(e){"Enter"==e.key&&this.props.history.push("/search?query=".concat(this.state.searchQuery))}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(q,{}),Object(n.jsxs)(z,{children:[Object(n.jsx)(N,{children:"Learn about robustness and security of the packages in your software ecosystem."}),Object(n.jsxs)(V,{children:[Object(n.jsx)("input",{type:"text",name:"search",placeholder:"Search package",value:this.state.searchQuery,onChange:this.handleSearchQueryChange,onKeyDown:this.handleSearch}),Object(n.jsx)("span",{children:Object(n.jsx)(R.c,{})})]}),Object(n.jsxs)(A,{children:["Example:"," ",Object(n.jsx)("a",{href:"/#/packages/jboss:jbossmq-client/3.2.3",children:"jboss:jbossmq-client"})]}),Object(n.jsxs)(P,{children:[Object(n.jsxs)("p",{children:["Learn more about"," ",Object(n.jsx)("a",{href:"https://www.fasten-project.eu/view/Main/Overview",children:"concept"})," ","and"," ",Object(n.jsx)("a",{href:"https://www.fasten-project.eu/view/Main/Use-cases",children:"use cases"}),"."]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Disclaimer:"})," ",Object(n.jsx)("a",{href:"http://github.com/fasten-project/fasten",children:"FASTEN"})," is currently under development with a limited amount of packages available."]})]})]})]})}}]),a}(r.Component),T=Object(h.g)(Q),U=a(13),B=a.n(U),M=a(18),F=p.a.div({width:"50%",margin:"5% auto"}),J=p.a.h1({margin:0,marginBottom:15}),W=p.a.a({marginLeft:x.margin.sm,fontSize:x.fontSize.xl,color:O.primary,textDecoration:"none",":hover":{filter:"brightness(80%)"}}),G=p.a.h3({display:"inline-block",color:O.grey,margin:0}),H=a(5),Y=H.e().shape({id:H.d().integer().positive().required(),package_name:H.f().required(),forge:H.f().required(),project_name:H.f().nullable(),repository:H.f().nullable(),created_at:H.c().max(new Date(Date.now())).nullable(),version:H.f().nullable()}).required(),K=Object(H.a)().of(Y),$={id:0,package_name:"",forge:"mvn",project_name:"",repository:"",created_at:null,version:null};function X(e){return Y.isValidSync(e)}function Z(e){return K.isValidSync(e)}var ee=a(27),te=a(52),ae=a.n(te),ne=a(55),re=a(88),ie="An unknown error has occurred! Please try again later!",se=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(o.a)(this,a),(r=t.call(this,e)).name="APIResponseError",r.uid=Object(re.a)(),r.debug=void 0,r.debug=n,r}return a}(Object(ne.a)(Error)),ce=function(e){if(e.response){if(e.response.status<500){var t;try{t=Object.values(e.response.data)[0]}catch(a){t=ie}return new se(t,"Bad Response: "+e.message)}return new se(ie,"Server has failed: "+e.message)}return new se("Please check your internet connection and try again!","Bad Response: "+e.message)};function oe(e,t,a,n,r,i){return le.apply(this,arguments)}function le(){return(le=Object(M.a)(B.a.mark((function e(t,a,n,r,i,s){var c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae()(new URL(a,n).href,Object(j.a)({method:t,data:s},i));case 3:if(c=e.sent,!r(c.data)){e.next=8;break}return e.abrupt("return",c.data);case 8:throw new se("Received malformed API data!","Data received: ".concat(JSON.stringify(c.data)));case 9:e.next=19;break;case 11:if(e.prev=11,e.t0=e.catch(0),console.log(e.t0.toString()),!(e.t0 instanceof se)){e.next=18;break}throw e.t0;case 18:throw ce(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var de=H.e().shape({id:H.d().integer().positive().required(),package_version_id:H.d().integer().positive().required(),namespace:H.f().required(),created_at:H.c().max(new Date(Date.now())).nullable(),metadata:H.e().nullable()}).required(),ue=Object(H.a)().of(de);function he(e){return ue.isValidSync(e)}var pe=H.e().shape({id:H.d().integer().positive().required(),module_id:H.d().integer().positive().required(),fasten_uri:H.f().required(),is_internal_call:H.b().required(),line_start:H.d().integer().required(),line_end:H.d().integer().required(),created_at:H.c().max(new Date(Date.now())).nullable(),metadata:H.e().nullable()}).required(),be=Object(H.a)().of(pe),ge={id:0,module_id:0,fasten_uri:"",is_internal_call:!0,line_start:0,line_end:0,created_at:null,metadata:null};function je(e){return be.isValidSync(e)}var me=D.apiSuffix+"/mvn/packages/{0}",fe=D.apiSuffix+"/mvn/packages/{0}/{1}/modules",xe=D.apiSuffix+"/mvn/packages/{0}/{1}/modules/callables";var ve=p.a.div({marginTop:25}),Oe=p.a.button((function(e){return{padding:"5px 10px",border:"none",outline:"none",transition:"ease 0.15s",backgroundColor:e.selected?O.primary:"revert",color:e.selected?O.white:"revert",":hover":{backgroundColor:O.primary,transform:"scale(1.05)",color:O.white,cursor:"pointer"}}})),ke=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,r){var i;return Object(o.a)(this,a),(i=t.call(this,e,r)).TabMenuItem=function(e){return Object(n.jsx)(Oe,{selected:i.state.tabIndex==e.index,onClick:function(){return i.setState({tabIndex:e.index})},children:e.label})},i.state={tabIndex:0},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tabs.length>this.state.tabIndex?this.props.tabs[this.state.tabIndex].body:null;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ve,{children:this.props.tabs.map((function(t,a){return Object(n.jsx)(e.TabMenuItem,{index:a,label:t.label},"tab_".concat(a))}))}),t&&Object(n.jsx)(t,{})]})}}]),a}(r.Component),ye=Object(h.g)(ke),we=p.a.div({margin:"8% auto"}),Se=p.a.p({fontSize:x.fontSize.xl,marginTop:x.margin.lg}),Ce=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,r){var i;return Object(o.a)(this,a),(i=t.call(this,e,r)).renderModuleRow=function(e){var t=i.props,a=t.pkg,r=t.pkgVersion;return Object(n.jsx)(Se,{children:Object(n.jsx)(_.b,{to:"/packages/".concat(a,"/").concat(r,"/").concat(encodeURIComponent(e.namespace||"...")),children:e.namespace})},"module_".concat(e.id))},i.renderCallableRow=function(e){var t=i.props,a=t.pkg,r=t.pkgVersion,s=t.namespace,c=encodeURIComponent(s||"..."),o=encodeURIComponent(e.fasten_uri);return Object(n.jsx)(Se,{children:Object(n.jsx)(_.b,{to:"/packages/".concat(a,"/").concat(r,"/").concat(c,"/").concat(o),children:decodeURIComponent(e.fasten_uri)})},"callable_".concat(e.id))},i.state={isLoading:!0,data:void 0},i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveEntities()}},{key:"retrieveEntities",value:function(){var e=Object(M.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.prev=1,e.t0=this.props.kind,e.next=5,this.props.fetchEntities();case 5:e.t1=e.sent,t={kind:e.t0,entities:e.t1},this.setState({isLoading:!1,data:t}),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(1),this.setState({isLoading:!1});case 13:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getTitle",value:function(){switch(this.props.kind){case"MODULES":return"Modules";case"CALLABLES":return"Callables";default:return"Unknown"}}},{key:"renderRows",value:function(){var e,t,a,r,i;if(0==(null===(e=this.state.data)||void 0===e?void 0:e.entities.length))return this.renderEmptyWarning();switch(null===(t=this.state.data)||void 0===t?void 0:t.kind){case"MODULES":return null===(a=this.state.data)||void 0===a?void 0:a.entities.map(this.renderModuleRow);case"CALLABLES":return null===(r=this.state.data)||void 0===r?void 0:r.entities.map(this.renderCallableRow);default:return Object(n.jsxs)("h1",{children:["Unknown Type ",null===(i=this.state.data)||void 0===i?void 0:i.kind]})}}},{key:"renderEmptyWarning",value:function(){var e,t="";switch(null===(e=this.state.data)||void 0===e?void 0:e.kind){case"MODULES":t="modules";break;case"CALLABLES":t="callables";break;default:t="entities"}return Object(n.jsxs)("h2",{children:["No ",t," available for this package."]})}},{key:"render",value:function(){return this.state.isLoading?Object(n.jsx)(n.Fragment,{}):Object(n.jsxs)(we,{children:[Object(n.jsx)("h3",{children:this.getTitle()}),Object(n.jsx)("hr",{}),this.renderRows()]})}}]),a}(r.Component),Le=Object(h.g)(Ce),_e=p.a.div({margin:"8% auto"}),Re=p.a.p({fontSize:x.fontSize.xl,marginTop:x.margin.lg,a:{textDecoration:"none","&:last-child":{color:O.fusionRed}}}),De=a(53),Ee=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,r){var i;return Object(o.a)(this,a),(i=t.call(this,e,r)).renderRow=function(e){return Object(n.jsx)(Re,{children:e.path.map((function(e,t){return Object(n.jsxs)(n.Fragment,{children:[t>0&&Object(n.jsx)("br",{}),t>0&&Object(n.jsxs)("span",{style:{marginLeft:50},children:[Object(n.jsx)(De.a,{})," "]}),Object(n.jsxs)(_.b,{to:e.id,children:[e.className,".",e.methodName]})]})}))},"vulnerability_".concat(e.id))},i.state={isLoading:!0,data:[]},i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveEntities()}},{key:"retrieveEntities",value:function(){var e=Object(M.a)(B.a.mark((function e(){var t,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.prev=1,t=this.props,t.pkg,t.pkgVersion,e.next=5,[{vulnerability:"https://nvd.nist.gov/vuln/detail/CVE-2019-11777",path:[{id:0,uri:"/org.jboss.mq/AcknowledgementRequest.<init>()/java.lang/VoidType",className:"AknowledgmentRequest",methodName:"init()"},{id:1,uri:"",className:"JavaLang",methodName:"Parse()"},{id:2,uri:"",className:"ParserJackson",methodName:"ParseJson()"}]},{vulnerability:"https://nvd.nist.gov/vuln/detail/CVE-2019-11777",path:[{id:0,uri:"/org.jboss.mq/Connection$1.newThread(/java.lang/Runnable)/java.lang/Thread",className:"Connection",methodName:"newThread()"},{id:1,uri:"",className:"EasyThreading",methodName:"threadRequest()"}]},{vulnerability:"https://nvd.nist.gov/vuln/detail/CVE-2019-11777",path:[{id:0,uri:"/org.jboss.mq/DurableSubscriptionID.getClientID()/java.lang/String",className:"DurableSubscriptionID",methodName:"getClientId()"},{id:1,uri:"",className:"UserRequest",methodName:"getUser()"},{id:2,uri:"",className:"NumberGenerator",methodName:"generateID()"}]}];case 5:a=e.sent,this.setState({isLoading:!1,data:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),this.setState({isLoading:!1});case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t;return this.state.isLoading?Object(n.jsx)(n.Fragment,{}):Object(n.jsxs)(_e,{children:[Object(n.jsx)("h3",{children:"Vulnerabilities"}),Object(n.jsx)("hr",{}),0==(null===(e=this.state.data)||void 0===e?void 0:e.length)&&Object(n.jsx)("h2",{children:"No vulnerabilities found for this package!"}),null===(t=this.state.data)||void 0===t?void 0:t.map(this.renderRow)]})}}]),a}(r.Component),Ie=Object(h.g)(Ee),qe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=[{label:"Modules",body:function(){return Object(n.jsx)(Le,{kind:"MODULES",pkg:e.props.pkg,pkgVersion:e.props.pkgVer,fetchEntities:function(){return t=e.props.pkg,a=e.props.pkgVer,oe("get",ee.String.Format(fe,t,a),D.api,he,{});var t,a}})}},{label:"Vulnerabilities",body:function(){return Object(n.jsx)(Ie,{pkg:e.props.pkg,pkgVersion:e.props.pkgVer})}}];return Object(n.jsx)(ye,{tabs:t})}}]),a}(r.Component),ze=Object(h.g)(qe),Ne=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.pkg,a=e.pkgVer,r=e.namespace,i=[{label:"Callables",body:function(){return Object(n.jsx)(Le,{kind:"CALLABLES",pkg:t,pkgVersion:a,namespace:r,fetchEntities:function(){return function(e,t,a){return oe("post",ee.String.Format(xe,e,t),D.api,je,{headers:{"Content-Type":"text/plain"}},a)}(t,a,r)}})}}];return Object(n.jsx)(ye,{tabs:i})}}]),a}(r.Component),Ae=Object(h.g)(Ne),Ve=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("h1",{children:"hello"})}}]),a}(r.Component),Pe=Object(h.g)(Ve),Qe=a(54),Te=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(o.a)(this,a),(r=t.call(this,e,n)).state={isLoading:!0,pkg:$},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrievePackage()}},{key:"retrievePackage",value:function(){var e=Object(M.a)(B.a.mark((function e(){var t,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),t=this.props.match.params.pkgParam,e.prev=2,e.next=5,n=t,oe("get",ee.String.Format(me,n),D.api,X,{});case 5:a=e.sent,this.setState({isLoading:!1,pkg:a}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.toString()),this.setState({isLoading:!1});case 13:case"end":return e.stop()}var n}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"renderAbstractionContent",value:function(){var e=this.props.match.params,t=e.verParam,a=e.moduleParam,r=e.callableParam,i=a?decodeURIComponent(a):null;return r?Object(n.jsx)(Pe,{callable:ge}):i?Object(n.jsx)(Ae,{pkg:this.state.pkg.package_name,pkgVer:t,namespace:i}):Object(n.jsx)(ze,{pkg:this.state.pkg.package_name,pkgVer:t})}},{key:"render",value:function(){var e=this.state.pkg,t=this.props.match.params,a=t.verParam,r=t.moduleParam,i=t.callableParam,s=r?decodeURIComponent(r):null,c=i?decodeURIComponent(i):null;return s&&"/"==s.charAt(0)&&(s=s.substring(1)),c&&"/"==c.charAt(0)&&(c=c.substring(1)),this.state.isLoading?Object(n.jsx)("h1",{children:"Loading..."}):0==e.id?Object(n.jsx)(h.a,{to:"/"}):void 0==a&&e.version?Object(n.jsx)(h.a,{to:"/packages/".concat(e.package_name,"/").concat(e.version)}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(q,{}),Object(n.jsxs)(F,{children:[Object(n.jsxs)(J,{children:[Object(n.jsxs)(_.b,{to:"/packages/".concat(e.package_name)+(void 0===a?"":"/".concat(a)),children:[e.project_name||e.package_name," ",a]}),s&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{children:" / "}),Object(n.jsx)(_.b,{to:"/packages/".concat(e.package_name,"/").concat(a,"/").concat(r),children:s})]}),c&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{children:" / "}),Object(n.jsx)(_.b,{to:"/packages/".concat(e.package_name,"/").concat(a,"/").concat(r,"/").concat(i),children:c})]}),e.repository&&Object(n.jsx)(W,{href:e.repository,children:Object(n.jsx)(Qe.a,{})})]}),e.created_at&&Object(n.jsxs)(G,{children:["Created ",e.created_at.toLocaleDateString()]}),this.renderAbstractionContent()]})]})}}]),a}(r.Component),Ue=Object(h.g)(Te),Be=p.a.div({width:"60%",margin:"15px auto","& a":{color:O.primary,textDecoration:"none",":hover":{filter:"brightness(85%)"}}}),Me=p.a.div({position:"relative",width:"100%",zIndex:1,margin:"10px auto",marginBottom:x.margin.lg,"& input":{boxSizing:"border-box",outline:"none",border:"none",fontSize:x.fontSize.xxl,color:"#666666",display:"block",width:"100%",backgroundColor:"#e6e6e6",height:70,borderRadius:35,padding:"0 30px 0 100px",":focus + span":{color:O.primary,paddingLeft:x.padding.lg}},"& span":{fontSize:x.fontSize.xxl,display:"flex",alignItems:"center",position:"absolute",borderRadius:25,bottom:0,left:0,width:"100%",height:"100%",paddingLeft:x.padding.lg+10,pointerEvents:"none",color:"#666666",transition:"all 0.4s"}}),Fe=p.a.a({display:"block",margin:"".concat(x.margin.none," ").concat(x.margin.lg,"px"),padding:"".concat(x.padding.tiny,"px ").concat(x.padding.md,"px"),verticalAlign:"center",height:x.margin.xxl,lineHeight:"".concat(x.margin.xxl,"px"),":hover":{backgroundColor:"rgba(82, 82, 82, .2)"}}),Je=D.apiSuffix+"/mvn/packages/search?packageName={0}";var We=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;Object(o.a)(this,a);var i=(r=t.call(this,e,n)).props.location.search,s=new URLSearchParams(i).get("query")||"";return s||r.props.history.push("/"),r.state={isLoading:!0,searchQuery:s,suggestions:[]},r.handleSearchQueryChange=r.handleSearchQueryChange.bind(Object(g.a)(r)),r.handleSearch=r.handleSearch.bind(Object(g.a)(r)),r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveSuggestions()}},{key:"retrieveSuggestions",value:function(){var e=Object(M.a)(B.a.mark((function e(){var t,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),t=this.state.searchQuery,e.prev=2,e.next=5,n=t,oe("get",ee.String.Format(Je,n),D.api,Z,{});case 5:(a=e.sent).find((function(e){return e.package_name==t}))&&this.props.history.push("/packages/".concat(t)),this.setState({isLoading:!1,suggestions:a}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.toString()),this.setState({isLoading:!1});case 14:case"end":return e.stop()}var n}),e,this,[[2,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleSearchQueryChange",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"handleSearch",value:function(e){"Enter"==e.key&&(this.props.history.push("/search?query=".concat(this.state.searchQuery)),this.retrieveSuggestions())}},{key:"render",value:function(){var e=this.state,t=e.suggestions,a=e.isLoading;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(q,{}),Object(n.jsxs)(Be,{children:[Object(n.jsxs)(Me,{children:[Object(n.jsx)("input",{type:"text",name:"search",placeholder:"Search package",value:this.state.searchQuery,onChange:this.handleSearchQueryChange,onKeyDown:this.handleSearch}),Object(n.jsx)("span",{children:Object(n.jsx)(R.c,{})})]}),0==t.length&&!a&&Object(n.jsx)("h2",{style:{margin:x.margin.xxl},children:"No suggestions"}),t.map((function(e){return Object(n.jsx)(Fe,{href:"/#/packages/"+e.package_name,children:e.package_name},e.id)}))]})]})}}]),a}(r.Component),Ge=Object(h.g)(We),He=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.location;return Object(n.jsx)(b,{children:Object(n.jsxs)(h.d,{children:[Object(n.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(n.jsx)(h.a,{to:"/home"})}}),Object(n.jsx)(h.b,{exact:!0,path:"/home",component:T},e.key),Object(n.jsx)(h.b,{exact:!0,path:"/search",component:Ge},e.key),Object(n.jsx)(h.b,{exact:!0,path:"/packages/:pkgParam/:verParam?/:moduleParam?/:callableParam?",component:Ue},e.key)]})})}}]),a}(r.Component),Ye=Object(h.g)(He);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(85);c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(_.a,{basename:"/",children:Object(n.jsx)(Ye,{})})}),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[86,1,2]]]);
//# sourceMappingURL=main.4ab5735d.chunk.js.map