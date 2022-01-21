(this["webpackJsonpfasten-web"]=this["webpackJsonpfasten-web"]||[]).push([[0],{127:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(1),i=a.n(r),c=a(28),s=a.n(c),o=a(7),l=a(10),d=a(8),u=a(9),p=a(13),h=a(6),g=h.a.div({minHeight:"100%",width:"100%",display:"flex",flexFlow:"column",margin:0,padding:0}),b=a(16),j=a.n(b),f=a(21),m=a(29),x=a(5),v=a.p+"static/media/fasten_logo.621b8d55.svg",O={fontSize:{xs:8,sm:10,md:14,lg:18,xl:22,xxl:30},fontWeight:{light:300,regular:400,boldLight:600,bold:700},padding:{none:0,tiny:4,sm:8,md:16,lg:24,xl:36,xxl:48},margin:{none:0,tiny:4,sm:8,md:16,lg:24,xl:36,xxl:48},breakpoints:{sm:600,md:960,lg:1280,xl:1920}},k=Object(x.a)(Object(x.a)({},O),{},{mediaQueries:Object.keys(O.breakpoints).reduce((function(e,t){return e[t]="@media (min-width: ".concat(O.breakpoints[t],"px)"),e}),{})}),y={transparent:"transparent",white:"#fff",primary:"#00A6D6",black:"#2f2e41",grey:"#9d9d9d",silver:"#a5b1c2",platinum:"#e0e1dd",platinumWhite:"#f8f9f9",highBlue:"#45aaf2",boyzoneBlue:"#2d98da",ntscBlue:"#4b7bec",royalBlue:"#3867d6",fusionRed:"#fc5c65",desireRed:"#eb3b5a",hibiscusOrange:"#fd9644",bronzeOrange:"#fa8231",flirtatiousYellow:"#fed330",taxiYellow:"#f7b731",reptileGreen:"#26de81",algalGreen:"#20bf6b",overlay:"rgba(80, 80, 80, 0.7)",transparentGrey:"#9d9d9daa"},w=Object(x.a)(Object(x.a)({},y),{},{informative:y.boyzoneBlue,positive:y.algalGreen,negative:y.desireRed,warning:y.taxiYellow}),S=Object(h.a)("nav")({display:"flex",justifyContent:"space-between",width:"100%",minHeight:"70px",zIndex:10,backgroundColor:w.primary,color:w.white,padding:"15px 0"}),L=h.a.div({marginLeft:k.margin.lg,marginRight:k.margin.md,width:"15%"}),C=h.a.div({display:"flex",alignItems:"center",alignContent:"flex-start"}),_=h.a.div({display:"flex",alignItems:"center",alignContent:"flex-end"}),N=h.a.div({display:"flex",alignItems:"flex-start",height:"100%"}),R=h.a.a({fontSize:k.fontSize.xl,paddingLeft:k.padding.none,paddingRight:k.padding.xl,paddingTop:k.padding.tiny,paddingBottom:k.padding.tiny,color:w.white,transition:"0.4s ease",alignSelf:"center",":hover":{color:w.platinum,transform:"scale(1.1)"}}),E=a(14),D=a(30),q={api:"https://api.fasten-project.eu",apiSuffix:"api",git:"https://github.com/fasten-project/",webpage:"https://fasten-project.eu/",ignoreNamespaceLinkage:["java.lang","java.util"]},F=function(e){return Object(n.jsx)(N,{children:Object(n.jsx)(R,Object(x.a)({},e))})},A=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(S,{children:[Object(n.jsx)(C,{children:Object(n.jsx)(E.b,{to:"/home",children:Object(n.jsx)(L,{children:Object(n.jsx)("img",{width:"100%",src:v,alt:"FASTEN, Developing an intelligent software package management systems."})})})}),Object(n.jsxs)(_,{children:[Object(n.jsx)(F,{href:q.webpage,target:"_blank",children:Object(n.jsx)(D.b,{})}),Object(n.jsx)(F,{href:q.git,target:"_blank",children:Object(n.jsx)(D.a,{})})]})]})}}]),a}(r.Component),I=Object(p.g)(A),V=h.a.div({marginTop:"5%",width:"100%","& a":{color:w.primary,textDecoration:"none",":hover":{filter:"brightness(85%)"}}}),z=h.a.p({width:"45%",margin:"auto",fontSize:k.fontSize.xl,textAlign:"center"}),T=h.a.div({position:"relative",width:"60%",zIndex:1,margin:"50px auto",marginBottom:k.margin.sm,"& input":{boxSizing:"border-box",outline:"none",border:"none",fontSize:k.fontSize.xxl,color:"#666666",display:"block",width:"100%",backgroundColor:"#e6e6e6",height:70,borderRadius:35,padding:"0 30px 0 100px",":focus + span":{color:w.primary,paddingLeft:k.padding.lg}},"& span":{fontSize:k.fontSize.xxl,display:"flex",alignItems:"center",position:"absolute",borderRadius:25,bottom:0,left:0,width:"100%",height:"100%",paddingLeft:k.padding.lg+10,pointerEvents:"none",color:"#666666",transition:"all 0.4s"}}),P=h.a.div({position:"fixed",bottom:20,left:"20%",margin:"0 auto",textAlign:"center",width:"60%"}),U=a(24),B=a(60),M=a.n(B),Q=a(70),H=a(133),J="An unknown error has occurred! Please try again later!",K=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(o.a)(this,a),(r=t.call(this,e)).name="APIResponseError",r.uid=Object(H.a)(),r.debug=void 0,r.debug=n,r}return a}(Object(Q.a)(Error)),W=function(e){if(e.response){if(e.response.status<500){var t;try{t=Object.values(e.response.data)[0]}catch(a){t=J}return new K(t,"Bad Response: "+e.message)}return new K(J,"Server has failed: "+e.message)}return new K("Please check your internet connection and try again!","Bad Response: "+e.message)};function G(e,t,a,n,r,i){return Y.apply(this,arguments)}function Y(){return(Y=Object(f.a)(j.a.mark((function e(t,a,n,r,i,c){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M()(new URL(a,n).href,Object(x.a)({method:t,data:c},i));case 3:if(s=e.sent,!r(s.data)){e.next=8;break}return e.abrupt("return",s.data);case 8:throw new K("Received malformed API data!","Data received: ".concat(JSON.stringify(s.data)));case 9:e.next=19;break;case 11:if(e.prev=11,e.t0=e.catch(0),console.log(e.t0.toString()),!(e.t0 instanceof K)){e.next=18;break}throw e.t0;case 18:throw W(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var $=a(3),X=$.e().shape({id:$.d().integer().positive().required(),package_name:$.f().required(),forge:$.f().required(),project_name:$.f().nullable(),repository:$.f().nullable(),created_at:$.c().max(new Date(Date.now())).nullable(),version:$.f().nullable()}).required(),Z=Object($.a)().of(X),ee={id:0,package_name:"",forge:"mvn",project_name:"",repository:"",created_at:null,version:null};function te(e){return X.isValidSync(e)}function ae(e){return Z.isValidSync(e)}var ne=$.e().shape({id:$.d().integer().positive().required(),package_version_id:$.d().integer().positive().required(),name:$.f().required(),created_at:$.c().max(new Date(Date.now())).nullable(),metadata:$.e().nullable()}).required(),re=Object($.a)().of(ne);function ie(e){return re.isValidSync(e)}var ce=$.e().shape({className:$.f().required(),uri:$.f().required(),rawEntity:$.f().required(),rawNamespace:$.f().optional()}).required(),se=$.e().shape({uri:$.f().required(),className:$.f().optional(),functionOrAttributeName:$.f().optional(),args:$.a().of(ce).required(),returnType:ce,rawForge:$.f().optional(),rawProduct:$.f().optional(),rawVersion:$.f().optional(),rawNamespace:$.f().optional(),rawEntity:$.f().optional()}).required();var oe=$.e().shape({id:$.d().integer().positive().required(),module_id:$.d().integer().positive().required(),fasten_uri:se,is_internal_call:$.b().required(),line_start:$.d().integer().nullable(),line_end:$.d().integer().nullable(),created_at:$.c().max(new Date(Date.now())).nullable(),metadata:$.e().nullable()}).required(),le=Object($.a)().of(oe),de={id:0,module_id:0,fasten_uri:{args:[],rawProduct:"",rawEntity:"",className:"",functionOrAttributeName:"",rawVersion:"1.0.0",uri:"",returnType:{rawEntity:"Logger",className:"Logger",uri:"Logger"},rawForge:"mvn",rawNamespace:""},is_internal_call:!0,line_start:0,line_end:0,created_at:null,metadata:null};function ue(e){return le.isValidSync(e)}var pe=$.e().shape({id:$.d().integer().positive().required(),package_id:$.d().integer().positive().required(),cg_generator:$.f().required(),version:$.f().required(),architecture:$.f().nullable(),created_at:$.c().max(new Date(Date.now())).nullable(),metadata:$.e().nullable()}).required(),he=Object($.a)().of(pe);function ge(e){return he.isValidSync(e)}var be=q.apiSuffix+"/mvn/packages/{0}",je=q.apiSuffix+"/mvn/packages/{0}/versions",fe=q.apiSuffix+"/mvn/packages/{0}/{1}/modules",me=q.apiSuffix+"/mvn/packages/{0}/{1}/modules/callables";function xe(e){return G("get",U.String.Format(be,e),q.api,te,{})}var ve=h.a.div({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",margin:"5% 0","& h4":{margin:"0 0 10px"}}),Oe=h.a.div({display:"inline-block",width:"15%",height:"150px",margin:"0 20px",padding:"20px",lineHeight:"1.5",textAlign:"left",overflow:"scroll",border:"1px solid rgba(200, 200, 200, .7)",boxShadow:"5px 5px 10px grey",borderRadius:10}),ke=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.pkgName,a=e.pkgDesc,r=e.pkgUrl;return Object(n.jsxs)(Oe,{children:[Object(n.jsx)("a",{href:r,children:Object(n.jsx)("h4",{children:t})}),Object(n.jsx)("span",{children:a})]})}}]),a}(r.Component),ye=Object(p.g)(ke),we=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(ve,{children:[Object(n.jsx)(ye,{pkgName:"Mockito Core",pkgDesc:"Tasty mocking framework for unit tests in Java.",pkgUrl:"/#/packages/org.mockito:mockito-core/1.10.18"}),Object(n.jsx)(ye,{pkgName:"Lagom",pkgDesc:"The opinionated microservices framework.",pkgUrl:"/#/packages/com.lightbend.lagom:lagom-scaladsl-cluster_2.11/1.4.1"}),Object(n.jsx)(ye,{pkgName:"SLF4J API",pkgDesc:"The Simple Logging Facade for Java.",pkgUrl:"/#/packages/org.slf4j:slf4j-api/1.1.0"}),Object(n.jsx)(ye,{pkgName:"Finagle",pkgDesc:"A network stack for distributed systems..",pkgUrl:"/#/packages/com.twitter:finagle-tunable_2.13/20.10.0"}),Object(n.jsx)(ye,{pkgName:"Dirigible",pkgDesc:"High-Productivity Application that provides development tools and a runtime environment.",pkgUrl:"/#/packages/org.eclipse.dirigible:dirigible-core-messaging/5.2.0"}),Object(n.jsx)(ye,{pkgName:"Codegen Lite",pkgDesc:"Holds the classes and templates required to generate the source files for the core SDK.",pkgUrl:"/#/packages/software.amazon.awssdk:codegen-lite/2.14.12"})]})}}]),a}(r.Component),Se=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(o.a)(this,a),(r=t.call(this,e,n)).state={searchQuery:""},r.handleSearchQueryChange=r.handleSearchQueryChange.bind(Object(m.a)(r)),r.handleSearch=r.handleSearch.bind(Object(m.a)(r)),r}return Object(l.a)(a,[{key:"handleSearchQueryChange",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"handleSearch",value:function(){var e=Object(f.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"==t.key){e.next=2;break}return e.abrupt("return");case 2:return a=this.state.searchQuery,e.prev=3,e.next=6,xe(a);case 6:this.props.history.push("/packages/".concat(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),this.props.history.push("/search?query=".concat(a));case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{}),Object(n.jsxs)(V,{children:[Object(n.jsx)(z,{children:"Learn about robustness and security of the packages in your software ecosystem."}),Object(n.jsxs)(T,{children:[Object(n.jsx)("input",{type:"text",name:"search",placeholder:"Search package",value:this.state.searchQuery,onChange:this.handleSearchQueryChange,onKeyDown:this.handleSearch}),Object(n.jsx)("span",{children:Object(n.jsx)(D.c,{})})]}),Object(n.jsx)(we,{}),Object(n.jsxs)(P,{children:[Object(n.jsxs)("p",{children:["Learn more about"," ",Object(n.jsx)("a",{href:"https://www.fasten-project.eu/view/Main/Overview",children:"concept"})," ","and"," ",Object(n.jsx)("a",{href:"https://www.fasten-project.eu/view/Main/Use-cases",children:"use cases"}),"."]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Disclaimer:"})," ",Object(n.jsx)("a",{href:"http://github.com/fasten-project/fasten",children:"FASTEN"})," is currently under development with a limited amount of packages available."]})]})]})]})}}]),a}(r.Component),Le=Object(p.g)(Se),Ce=h.a.div({width:"75%",margin:"5% auto"}),_e=h.a.div({margin:0,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%)",textAlign:"center"}),Ne=h.a.h1({margin:0,marginBottom:15}),Re=h.a.a({marginLeft:k.margin.sm,fontSize:k.fontSize.xl,color:w.primary,textDecoration:"none",":hover":{filter:"brightness(80%)"}}),Ee=h.a.h3({display:"inline-block",color:w.grey,margin:0}),De=h.a.div({marginTop:25}),qe=h.a.button((function(e){return{padding:"5px 10px",border:"none",outline:"none",transition:"ease 0.15s",backgroundColor:e.selected?w.primary:"revert",color:e.selected?w.white:"revert",":hover":{backgroundColor:w.primary,transform:"scale(1.05)",color:w.white,cursor:"pointer"}}})),Fe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,r){var i;return Object(o.a)(this,a),(i=t.call(this,e,r)).TabMenuItem=function(e){return Object(n.jsx)(qe,{selected:i.state.tabIndex==e.index,onClick:function(){return i.setState({tabIndex:e.index})},children:e.label})},i.state={tabIndex:0},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tabs.length>this.state.tabIndex?this.props.tabs[this.state.tabIndex].body:null;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(De,{children:this.props.tabs.map((function(t,a){return Object(n.jsx)(e.TabMenuItem,{index:a,label:t.label},"tab_".concat(a))}))}),t&&Object(n.jsx)(t,{})]})}}]),a}(r.Component),Ae=Object(p.g)(Fe),Ie=h.a.div({margin:"8% auto"}),Ve=h.a.p({fontSize:k.fontSize.xl,marginTop:k.margin.lg}),ze=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,r){var i;return Object(o.a)(this,a),(i=t.call(this,e,r)).renderVersionRow=function(e){var t=i.props.pkg;return Object(n.jsx)(Ve,{children:Object(n.jsx)(E.b,{to:"/packages/".concat(t,"/").concat(e.version),children:e.version})},"version_".concat(e.id))},i.renderModuleRow=function(e){var t=i.props,a=t.pkg,r=t.pkgVersion,c=e.name.split("/");return Object(n.jsx)(Ve,{children:Object(n.jsx)(E.b,{to:"/packages/".concat(a,"/").concat(r,"/").concat(encodeURIComponent(e.name||"...")),children:c[2]})},"module_".concat(e.id))},i.renderCallableRow=function(e){var t=i.props,a=t.pkg,r=t.pkgVersion,c=encodeURIComponent(e.fasten_uri.className||"..."),s=encodeURIComponent(e.fasten_uri.functionOrAttributeName||"...");return Object(n.jsxs)(Ve,{children:[Object(n.jsx)(E.b,{to:"/packages/".concat(a,"/").concat(r,"/").concat(c,"/").concat(s),children:e.fasten_uri.functionOrAttributeName}),"("," ",e.fasten_uri.args.map((function(t,c){return Object(n.jsxs)(n.Fragment,{children:[i.renderType(a,r,e.fasten_uri.rawNamespace,t),c+1!=e.fasten_uri.args.length&&", "]})}))," ",")"," : ",i.renderType(a,r,e.fasten_uri.rawNamespace,e.fasten_uri.returnType)]},"callable_".concat(e.id))},i.state={isLoading:!0,data:void 0},i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveEntities()}},{key:"retrieveEntities",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.prev=1,e.t0=this.props.kind,e.next=5,this.props.fetchEntities();case 5:e.t1=e.sent,t={kind:e.t0,entities:e.t1},this.setState({isLoading:!1,data:t}),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),this.setState({isLoading:!1}),this.props.history.push("/oops");case 14:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getTitle",value:function(){switch(this.props.kind){case"VERSIONS":return"Versions";case"MODULES":return"Modules";case"CALLABLES":return"Callables";default:return"Unknown"}}},{key:"renderType",value:function(e,t,a,r){return q.ignoreNamespaceLinkage.includes(r.rawNamespace)?Object(n.jsx)(n.Fragment,{children:r.className}):Object(n.jsx)("a",{href:"#/packages/".concat(e,"/").concat(t,"/")+encodeURIComponent("/".concat(r.rawNamespace||a,"/").concat(r.className)),children:r.className},r.rawEntity)}},{key:"renderRows",value:function(){var e,t,a,r,i,c;if(0==(null===(e=this.state.data)||void 0===e?void 0:e.entities.length))return this.renderEmptyWarning();switch(null===(t=this.state.data)||void 0===t?void 0:t.kind){case"VERSIONS":return null===(a=this.state.data)||void 0===a?void 0:a.entities.map(this.renderVersionRow);case"MODULES":return null===(r=this.state.data)||void 0===r?void 0:r.entities.map(this.renderModuleRow);case"CALLABLES":return null===(i=this.state.data)||void 0===i?void 0:i.entities.map(this.renderCallableRow);default:return Object(n.jsxs)("h1",{children:["Unknown Type ",null===(c=this.state.data)||void 0===c?void 0:c.kind]})}}},{key:"renderEmptyWarning",value:function(){var e,t="";switch(null===(e=this.state.data)||void 0===e?void 0:e.kind){case"VERSIONS":t="callables";break;case"MODULES":t="modules";break;case"CALLABLES":t="callables";break;default:t="entities"}return Object(n.jsxs)("h2",{children:["No ",t," available for this package."]})}},{key:"render",value:function(){return this.state.isLoading?Object(n.jsx)(n.Fragment,{}):Object(n.jsxs)(Ie,{children:[Object(n.jsx)("h3",{children:this.getTitle()}),Object(n.jsx)("hr",{}),this.renderRows()]})}}]),a}(r.Component),Te=Object(p.g)(ze),Pe=h.a.div({margin:"8% auto"}),Ue=h.a.p({fontSize:k.fontSize.lg,marginTop:k.margin.lg,a:{textDecoration:"none","&:last-child":{color:w.fusionRed}}}),Be=a(64),Me=a(132),Qe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,r){var i;return Object(o.a)(this,a),(i=t.call(this,e,r)).renderTitle=function(){var e=i.props.row.vulnerabilities;return Object(n.jsxs)("h3",{children:[e[0].id,e.length>1&&" + "+(e.length-1)]})},i.renderBody=function(){var e=i.props.row;return Object(n.jsx)(Ue,{children:e.chain.map((function(e,t){return Object(n.jsxs)(n.Fragment,{children:[t>0&&Object(n.jsx)("br",{}),t>0&&Object(n.jsxs)("span",{style:{marginLeft:50},children:[Object(n.jsx)(Be.a,{})," "]}),Object(n.jsxs)(E.b,{to:"/packages/".concat(e.rawProduct,"/").concat(e.rawVersion),children:[e.className,".",e.functionOrAttributeName]}),"("," ",e.args.map((function(t,a){return Object(n.jsxs)(n.Fragment,{children:[i.renderArgOrReturnType(e.rawProduct||"",e.rawVersion||"",e.rawNamespace,t),a+1!=e.args.length&&", "]})}))," ",")"," : ",i.renderArgOrReturnType(e.rawProduct||"",e.rawVersion||"",e.rawNamespace,e.returnType)]})}))},"vulnerability_".concat(e.vulnerabilities[0].id))},i.state={isExpanded:!1},i}return Object(l.a)(a,[{key:"renderArgOrReturnType",value:function(e,t,a,r){return q.ignoreNamespaceLinkage.includes(r.rawNamespace)?Object(n.jsx)(n.Fragment,{children:r.className}):Object(n.jsx)("a",{href:"#/packages/".concat(e,"/").concat(t,"/")+encodeURIComponent("/".concat(r.rawNamespace||a,"/").concat(r.className)),children:r.className},r.rawEntity)}},{key:"render",value:function(){return Object(n.jsxs)(Me.a.Item,{eventKey:this.props.eventKey,children:[Object(n.jsx)(Me.a.Header,{children:this.renderTitle()}),Object(n.jsx)(Me.a.Body,{children:this.renderBody()})]})}}]),a}(r.Component),He=Object(p.g)(Qe),Je=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(o.a)(this,a),(r=t.call(this,e,n)).state={isLoading:!0,data:[]},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveEntities()}},{key:"retrieveEntities",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.prev=1,t=this.props.retrieveEntitiesRequest,e.next=5,t();case 5:a=e.sent,this.setState({isLoading:!1,data:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),this.setState({isLoading:!1});case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t;return this.state.isLoading?Object(n.jsx)(n.Fragment,{}):Object(n.jsxs)(Pe,{children:[Object(n.jsx)("h3",{children:"Vulnerable Call Chains"}),Object(n.jsx)("hr",{}),0==(null===(e=this.state.data)||void 0===e?void 0:e.length)&&Object(n.jsx)("h2",{children:"No vulnerable call chains found for this package!"}),Object(n.jsx)(Me.a,{children:null===(t=this.state.data)||void 0===t?void 0:t.map((function(e,t){return Object(n.jsx)(He,{eventKey:t.toString(),row:e},"vulnerable_call_chain_row_"+t)}))})]})}}]),a}(r.Component),Ke=Object(p.g)(Je),We=$.e().shape({id:$.f().required()}).required(),Ge=$.e().shape({vulnerabilities:$.a().of(We).min(1).required(),chain:$.a().of(se).min(1).required()}).required(),Ye=Object($.a)().of(Ge);function $e(e){return Ye.isValidSync(e)}var Xe=q.apiSuffix+"/mvn/packages/{0}/{1}/vulnerable-call-chains";var Ze=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=[{label:"Modules",body:function(){return Object(n.jsx)(Te,{kind:"MODULES",pkg:e.props.pkg,pkgVersion:e.props.pkgVer,fetchEntities:function(){return t=e.props.pkg,a=e.props.pkgVer,G("get",U.String.Format(fe,t,a),q.api,ie,{});var t,a}})}},{label:"Vulnerable Call Chains",body:function(){return Object(n.jsx)(Ke,{retrieveEntitiesRequest:function(){return t=e.props.pkg,a=e.props.pkgVer,G("post",U.String.Format(Xe,t,a),q.api,$e,{});var t,a}})}},{label:"Versions",body:function(){return Object(n.jsx)(Te,{kind:"VERSIONS",pkg:e.props.pkg,pkgVersion:e.props.pkgVer,fetchEntities:function(){return t=e.props.pkg,G("get",U.String.Format(je,t),q.api,ge,{});var t}})}}];return Object(n.jsx)(Ae,{tabs:t})}}]),a}(r.Component),et=Object(p.g)(Ze),tt=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.pkg,a=e.pkgVer,r=e.namespace,i=[{label:"Callables",body:function(){return Object(n.jsx)(Te,{kind:"CALLABLES",pkg:t,pkgVersion:a,namespace:r,fetchEntities:function(){return function(e,t,a){return G("post",U.String.Format(me,e,t),q.api,ue,{headers:{"Content-Type":"text/plain"}},a)}(t,a,r)}})}}];return Object(n.jsx)(Ae,{tabs:i})}}]),a}(r.Component),at=Object(p.g)(tt),nt=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("h1",{children:"hello"})}}]),a}(r.Component),rt=Object(p.g)(nt),it=a(69),ct=a(68),st=h.a.div({width:"60%",margin:"15px auto","& a":{color:w.primary,textDecoration:"none",":hover":{filter:"brightness(85%)"}}}),ot=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{}),Object(n.jsxs)(st,{children:[Object(n.jsx)("h1",{children:"Page Not Found (404)"}),Object(n.jsx)("p",{children:"Looks like you have followed a broken link or entered a URL that does not exist on the site."}),Object(n.jsx)("a",{href:"/",children:"\u2190 Back to home page"})]})]})}}]),a}(r.Component),lt=Object(p.g)(ot),dt=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(o.a)(this,a),(r=t.call(this,e,n)).state={isLoading:!0,pkg:ee,isNotFound:!1},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrievePackage()}},{key:"retrievePackage",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),t=this.props.match.params.pkgParam,e.prev=2,e.next=5,xe(t);case 5:a=e.sent,this.setState({isLoading:!1,pkg:a,isNotFound:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),this.setState({isLoading:!1,isNotFound:!0});case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"renderAbstractionContent",value:function(){var e=this.props.match.params,t=e.verParam,a=e.moduleParam,r=e.callableParam,i=a?decodeURIComponent(a):null;return r?Object(n.jsx)(rt,{callable:de}):i?Object(n.jsx)(at,{pkg:this.state.pkg.package_name,pkgVer:t,namespace:i}):Object(n.jsx)(et,{pkg:this.state.pkg.package_name,pkgVer:t})}},{key:"render",value:function(){var e=this.state,t=e.pkg,a=e.isNotFound,r=this.props.match.params,i=r.verParam,c=r.moduleParam,s=r.callableParam;if(a)return Object(n.jsx)(lt,{});var o=c?decodeURIComponent(c):null,l=s?decodeURIComponent(s):null;return o&&(o=o.split("/")[2]),l&&"/"==l.charAt(0)&&(l=l.substring(1)),this.state.isLoading?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{}),Object(n.jsx)(_e,{children:Object(n.jsx)(ct.BeatLoader,{color:w.primary,size:20})})]}):0==t.id?Object(n.jsx)(p.a,{to:"/"}):void 0==i&&t.version?Object(n.jsx)(p.a,{to:"/packages/".concat(t.package_name,"/").concat(t.version)}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{}),Object(n.jsxs)(Ce,{children:[Object(n.jsxs)(Ne,{children:[Object(n.jsxs)(E.b,{to:"/packages/".concat(t.package_name)+(void 0===i?"":"/".concat(i)),children:[t.project_name||t.package_name," ",i]}),o&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{children:" / "}),Object(n.jsx)(E.b,{to:"/packages/".concat(t.package_name,"/").concat(i,"/").concat(c),children:o})]}),l&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{children:" / "}),Object(n.jsx)(E.b,{to:"/packages/".concat(t.package_name,"/").concat(i,"/").concat(c,"/").concat(s),children:l})]}),t.repository&&Object(n.jsx)(Re,{href:t.repository,children:Object(n.jsx)(it.a,{})})]}),t.created_at&&Object(n.jsxs)(Ee,{children:["Created ",t.created_at.toLocaleDateString()]}),this.renderAbstractionContent()]})]})}}]),a}(r.Component),ut=Object(p.g)(dt),pt=h.a.div({width:"60%",margin:"15px auto","& a":{color:w.primary,textDecoration:"none",":hover":{filter:"brightness(85%)"}}}),ht=h.a.div({position:"relative",width:"100%",zIndex:1,margin:"10px auto",marginBottom:k.margin.lg,"& input":{boxSizing:"border-box",outline:"none",border:"none",fontSize:k.fontSize.xxl,color:"#666666",display:"block",width:"100%",backgroundColor:"#e6e6e6",height:70,borderRadius:35,padding:"0 30px 0 100px",":focus + span":{color:w.primary,paddingLeft:k.padding.lg}},"& span":{fontSize:k.fontSize.xxl,display:"flex",alignItems:"center",position:"absolute",borderRadius:25,bottom:0,left:0,width:"100%",height:"100%",paddingLeft:k.padding.lg+10,pointerEvents:"none",color:"#666666",transition:"all 0.4s"}}),gt=h.a.a({display:"block",margin:"".concat(k.margin.none," ").concat(k.margin.lg,"px"),padding:"".concat(k.padding.tiny,"px ").concat(k.padding.md,"px"),verticalAlign:"center",height:k.margin.xxl,lineHeight:"".concat(k.margin.xxl,"px"),":hover":{backgroundColor:"rgba(82, 82, 82, .2)"}}),bt=q.apiSuffix+"/mvn/packages/search?packageName={0}";var jt=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;Object(o.a)(this,a);var i=(r=t.call(this,e,n)).props.location.search,c=new URLSearchParams(i).get("query")||"";return c||r.props.history.push("/"),r.state={isLoading:!0,searchQuery:c,suggestions:[]},r.handleSearchQueryChange=r.handleSearchQueryChange.bind(Object(m.a)(r)),r.handleSearch=r.handleSearch.bind(Object(m.a)(r)),r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.retrieveSuggestions()}},{key:"retrieveSuggestions",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),t=this.state.searchQuery,e.prev=2,e.next=5,n=t,G("get",U.String.Format(bt,n),q.api,ae,{});case 5:a=e.sent,this.setState({isLoading:!1,suggestions:a}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.toString()),this.setState({isLoading:!1});case 13:case"end":return e.stop()}var n}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleSearchQueryChange",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"handleSearch",value:function(e){"Enter"==e.key&&(this.props.history.push("/search?query=".concat(this.state.searchQuery)),this.retrieveSuggestions())}},{key:"render",value:function(){var e=this.state,t=e.suggestions,a=e.isLoading;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{}),Object(n.jsxs)(pt,{children:[Object(n.jsxs)(ht,{children:[Object(n.jsx)("input",{type:"text",name:"search",placeholder:"Search package",value:this.state.searchQuery,onChange:this.handleSearchQueryChange,onKeyDown:this.handleSearch}),Object(n.jsx)("span",{children:Object(n.jsx)(D.c,{})})]}),0==t.length&&!a&&Object(n.jsx)("h2",{style:{margin:k.margin.xxl},children:"No suggestions"}),t.map((function(e){return Object(n.jsx)(gt,{href:"/#/packages/"+e.package_name,children:e.package_name},e.id)}))]})]})}}]),a}(r.Component),ft=Object(p.g)(jt),mt=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.location;return Object(n.jsx)(g,{children:Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(n.jsx)(p.a,{to:"/home"})}}),Object(n.jsx)(p.b,{exact:!0,path:"/home",component:Le},e.key),Object(n.jsx)(p.b,{exact:!0,path:"/search",component:ft},e.key),Object(n.jsx)(p.b,{exact:!0,path:"/packages/:pkgParam/:verParam?/:moduleParam?/:callableParam?",component:ut},e.key),Object(n.jsx)(p.b,{component:lt})]})})}}]),a}(r.Component),xt=Object(p.g)(mt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(127),a(128);s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(E.a,{basename:"/",children:Object(n.jsx)(xt,{})})}),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[129,1,2]]]);
//# sourceMappingURL=main.4417e240.chunk.js.map