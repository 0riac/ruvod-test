(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(e,t,a){e.exports=a(165)},139:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),l=a(24),o=a(53),u=(a(139),a(10)),m=a(38),s=a(17),d=a(167),b=a(213),f=a(59),v=a(104),E=a(215),p=a(209),j=a(4),O=a(26),h=a(169),g=a(205),w=a(201),y=a(74),I=a.n(y),C=a(73),k=a.n(C),x=a(204),S=a(109),R=a.n(S),A=a(108),T=a.n(A),z=a(203),U=Object(v.a)("div")({display:"flex",marginLeft:"46px",marginTop:"8px"}),N=function(e){var t=e.name,a=e.email,c=e.deleteItem,i=e.showCard,l=e.showMoreInfo,o=e.setStore;return Object(n.useEffect)((function(){setTimeout((function(){return o({showCard:!0})}),100)}),[]),r.a.createElement(w.a,{in:i},r.a.createElement(h.a,null,r.a.createElement(E.a,{p:2},r.a.createElement(z.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(z.a,{item:!0},r.a.createElement(z.a,{container:!0,alignItems:"center",direction:"row"},r.a.createElement(E.a,{mr:2},r.a.createElement(x.a,{size:"small",onClick:function(){return o({showMoreInfo:!l})}},l?r.a.createElement(k.a,null):r.a.createElement(I.a,null))),r.a.createElement(z.a,{item:!0},r.a.createElement(z.a,{container:!0,direction:"row",alignItems:"center",spacing:1},r.a.createElement(z.a,{item:!0},"Name:"),r.a.createElement(z.a,{item:!0},t))))),r.a.createElement(z.a,{item:!0},r.a.createElement(z.a,{container:!0,direction:"row",spacing:2},r.a.createElement(z.a,{item:!0},r.a.createElement(x.a,{size:"small",onClick:function(){o({edit:!0})}},r.a.createElement(T.a,{fontSize:"small"}))),r.a.createElement(z.a,{item:!0},r.a.createElement(x.a,{size:"small",onClick:function(){o({showCard:!1}),c()}},r.a.createElement(R.a,{fontSize:"small"})))))),r.a.createElement(g.a,{in:l},r.a.createElement(U,null,r.a.createElement(z.a,{container:!0,direction:"row",alignItems:"center",spacing:1},r.a.createElement(z.a,{item:!0},"User email:"),r.a.createElement(z.a,{item:!0},a)))))))},P=a(214),q=a(75),_=a.n(q),F=a(65),B=a.n(F),H=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,$=function(e){return H.test(e)},G=Object(v.a)("div")({display:"flex",marginLeft:"46px",marginTop:"10px"}),D=function(e){var t=e.name,a=e.email,c=e.showMoreInfo,i=e.showCard,l=e.setStore,o=e.updateItem,m=Object(n.useState)(t),s=Object(u.a)(m,2),d=s[0],b=s[1],f=Object(n.useState)(a),v=Object(u.a)(f,2),p=v[0],O=v[1],y=Object(n.useState)({}),C=Object(u.a)(y,2),S=C[0],R=S.name,A=S.email,T=C[1];return r.a.createElement(w.a,{in:i},r.a.createElement(h.a,null,r.a.createElement(E.a,{p:2},r.a.createElement(z.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(z.a,{item:!0},r.a.createElement(z.a,{container:!0,alignItems:"center"},r.a.createElement(E.a,{mr:2},r.a.createElement(x.a,{size:"small",onClick:function(){return l({showMoreInfo:!c})}},c?r.a.createElement(k.a,null):r.a.createElement(I.a,null))),r.a.createElement(z.a,{item:!0},r.a.createElement(z.a,{container:!0,direction:"row",alignItems:"center",spacing:1},r.a.createElement(z.a,{item:!0},"Name:"),r.a.createElement(z.a,{item:!0},r.a.createElement(P.a,{value:d,onChange:function(e){var t=e.target.value;b(t),T((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:null})}))},error:null===R||void 0===R?void 0:R.error})))))),r.a.createElement(z.a,{item:!0},r.a.createElement(z.a,{container:!0,direction:"row",spacing:2},r.a.createElement(z.a,{item:!0},r.a.createElement(x.a,{size:"small",onClick:function(){l({edit:!1})}},r.a.createElement(B.a,{fontSize:"small"}))),r.a.createElement(z.a,{item:!0},r.a.createElement(x.a,{size:"small",onClick:function(){(function(){var e;return d||(e=!0,T((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:{label:"Required",error:!0}})}))),$(p)||(e=!0,T((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:{label:"Is not a valid email",error:!0}})}))),!e})()&&(l({name:d,email:p,edit:!1}),o({name:d,email:p}))}},r.a.createElement(_.a,{fontSize:"small"})))))),r.a.createElement(g.a,{in:c},r.a.createElement(G,null,r.a.createElement(z.a,{container:!0,direction:"row",alignItems:"center",spacing:1},r.a.createElement(z.a,{item:!0},"User email:"),r.a.createElement(z.a,{item:!0},r.a.createElement(P.a,{value:p,onChange:function(e){var t=e.target.value;O(t),T((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:null})}))},error:null===A||void 0===A?void 0:A.error}))))))))},L=function(e){var t=e.deleteItem,a=e.updateItem,c=Object(O.a)(e,["deleteItem","updateItem"]),i=Object(n.useState)(Object(j.a)({},c)),l=Object(u.a)(i,2),o=l[0],m=l[1],s=o.edit,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m(Object(j.a)(Object(j.a)({},o),e))};return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(D,Object.assign({},o,{setStore:d,updateItem:a})):r.a.createElement(N,Object.assign({},o,{setStore:d,deleteItem:t})))},M=a(206),Q=function(){return r.a.createElement(h.a,null,r.a.createElement(E.a,{p:2},r.a.createElement(z.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(z.a,{item:!0},r.a.createElement(z.a,{container:!0,alignItems:"center",direction:"row"},r.a.createElement(E.a,{mr:4}),r.a.createElement(z.a,{item:!0},r.a.createElement(z.a,{container:!0,direction:"row",alignItems:"center",spacing:1},r.a.createElement(z.a,{item:!0},r.a.createElement(M.a,{variant:"text",height:30,width:50})),r.a.createElement(z.a,{item:!0},r.a.createElement(M.a,{variant:"text",height:30,width:150})))))),r.a.createElement(z.a,{item:!0},r.a.createElement(z.a,{container:!0,direction:"row",spacing:2},r.a.createElement(z.a,{item:!0},r.a.createElement(M.a,{variant:"text",height:30,width:20})),r.a.createElement(z.a,{item:!0},r.a.createElement(M.a,{variant:"text",height:30,width:20})))))))},W=a(207),J=function(e){var t=e.loading,a=e.users,n=void 0===a?[]:a,c=e.deleteItem,i=e.updateItem;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(z.a,{container:!0,spacing:3},Array(5).fill(null).map((function(e,t){return r.a.createElement(z.a,{item:!0,xs:12,key:t},r.a.createElement(Q,null))}))):r.a.createElement(r.a.Fragment,null,n.length?r.a.createElement(z.a,{container:!0,spacing:3},n.map((function(e){return r.a.createElement(z.a,{item:!0,xs:12,key:e.id},r.a.createElement(L,Object.assign({},e,{deleteItem:function(){return c(e.id)},updateItem:function(t){return i(e.id,t)}})))}))):r.a.createElement(W.a,null,"Users list is empty")))},K=a(114),Y=a.n(K),Z=a(208),V=a(67);function X(){var e=Object(V.a)(["\n  mutation updateUser($id: ID!, $user: UpdateUserInput!) {\n    updateUser(id: $id, input: $user) {\n      id\n      email\n      name\n    }\n  }\n"]);return X=function(){return e},e}function ee(){var e=Object(V.a)(["\n  mutation deleteUser($id: ID!) {\n    deleteUser(id: $id) {\n      id\n      email\n      name\n    }\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(V.a)(["\n  query getUsers($skip: Int, $limit: Int) {\n    users(skip: $skip, limit: $limit) {\n      id\n      email\n      name\n    }\n  }\n"]);return te=function(){return e},e}function ae(){var e=Object(V.a)(["\n  mutation createUser($user: CreateUserInput!) {\n    createUser(input: $user) {\n      id\n      email\n      name\n    }\n  }\n"]);return ae=function(){return e},e}var ne=Object(o.b)(ae()),re={limit:100},ce=Object(o.b)(te()),ie=Object(o.b)(ee()),le=Object(o.b)(X()),oe=Object(v.a)("div")({display:"flex",marginLeft:"16px",marginTop:"10px"}),ue=Object(v.a)("div")({position:"fixed",bottom:"15vh",right:"20vw"}),me={name:"",email:""},se=function(e){var t=e.defaultShow,a=Object(n.useState)(t),c=Object(u.a)(a,2),i=c[0],l=c[1],o=Object(n.useState)(me),m=Object(u.a)(o,2),s=m[0],d=m[1],b=s.name,v=s.email,p=Object(f.a)(ne,{update:function(e,t){var a=t.data.createUser,n=e.readQuery({query:ce,variables:re}).users;e.writeQuery({query:ce,data:{users:n.concat(a)},variables:re})}}),O=Object(u.a)(p,1)[0],g=Object(n.useRef)(),y=Object(n.useState)({}),I=Object(u.a)(y,2),C=I[0],k=C.name,S=C.email,R=I[1];Object(n.useEffect)((function(){i&&(null===g||void 0===g?void 0:g.current)&&g.current.focus()}),[i]);var A=function(e){l(e),e||(d(me),R({}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null,r.a.createElement(Z.a,{color:"primary",onClick:function(){return A(!i)}},i?r.a.createElement(B.a,null):r.a.createElement(Y.a,null))),r.a.createElement(w.a,{in:i},r.a.createElement(h.a,null,r.a.createElement(E.a,{p:2},r.a.createElement(z.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(z.a,{item:!0},r.a.createElement(z.a,{container:!0,alignItems:"center"},r.a.createElement(E.a,{mr:2}),r.a.createElement(z.a,{item:!0},r.a.createElement(z.a,{container:!0,direction:"row",alignItems:"center",spacing:1},r.a.createElement(z.a,{item:!0},"Name:"),r.a.createElement(z.a,{item:!0},r.a.createElement(P.a,{required:!0,value:b,onChange:function(e){var t=e.target.value;d(Object(j.a)(Object(j.a)({},s),{},{name:t})),R((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:null})}))},inputRef:g,error:null===k||void 0===k?void 0:k.error})))))),r.a.createElement(z.a,{item:!0},r.a.createElement(z.a,{container:!0,direction:"row",spacing:2},r.a.createElement(z.a,{item:!0},r.a.createElement(x.a,{size:"small",onClick:function(){A(!1)}},r.a.createElement(B.a,{fontSize:"small"}))),r.a.createElement(z.a,{item:!0},r.a.createElement(x.a,{size:"small",onClick:function(){(function(){var e;return b||(e=!0,R((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:{label:"Required",error:!0}})}))),$(v)||(e=!0,R((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:{label:"Is not a valid email",error:!0}})}))),!e})()&&(A(!1),O({variables:{user:{name:b,email:v}}}))}},r.a.createElement(_.a,{fontSize:"small"})))))),r.a.createElement(oe,null,r.a.createElement(z.a,{container:!0,direction:"row",alignItems:"center",spacing:1},r.a.createElement(z.a,{item:!0},"User email:"),r.a.createElement(z.a,{item:!0},r.a.createElement(P.a,{required:!0,value:v,onChange:function(e){var t=e.target.value;d(Object(j.a)(Object(j.a)({},s),{},{email:t})),R((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:null})}))},error:null===S||void 0===S?void 0:S.error}))))))))},de=a(15),be=a.n(de),fe=a(27),ve=a(34),Ee=a.n(ve),pe={TOKEN_STORAGE_KEY:"token",API_ENDPOINT:"https://ruvodtest.herokuapp.com",GITHUB_CLIENT_ID:"5244b7cfe39a6d040d6d",ROUTING_SUBPATH:"/ruvod-test"},je=pe.API_ENDPOINT,Oe=Object(n.createContext)(),he=function(e){return function(t){return r.a.createElement(Oe.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{useAuth:a}))}))}},ge=pe.ROUTING_SUBPATH,we=Object(v.a)(E.a)({overflowY:"scroll",display:"flex",flex:"1"}),ye=he((function(e){var t=e.useAuth,a=Object(f.b)(ce,{variables:re}),c=a.loading,i=a.data,l=a.refetch,o=Object(f.a)(ie,{update:function(e,t){var a=t.data.deleteUser,n=e.readQuery({query:ce,variables:re}).users;e.writeQuery({query:ce,data:{users:n.filter((function(e){return e.id!==(null===a||void 0===a?void 0:a.id)}))},variables:re})}}),m=Object(u.a)(o,1)[0],d=Object(f.a)(le),b=Object(u.a)(d,1)[0],v=t(),j=Object(u.a)(v,1)[0];return Object(n.useEffect)((function(){(null===j||void 0===j?void 0:j.refetch)&&l({variables:re})}),[]),r.a.createElement(we,{pt:2,mb:2},(null===j||void 0===j?void 0:j.notAuthorized)?r.a.createElement(s.a,{to:"".concat(ge,"/login")}):null,r.a.createElement(p.a,{maxWidth:"sm"},r.a.createElement(J,{users:null===i||void 0===i?void 0:i.users,loading:c,deleteItem:function(e){return m({variables:{id:e}})},updateItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b({variables:{id:e,user:t}})}}),r.a.createElement(E.a,{mt:3},r.a.createElement(se,null))))})),Ie=a(211),Ce=a(212),ke=a(210),xe=a(116),Se=a.n(xe),Re=a(115),Ae=a.n(Re),Te=pe.API_ENDPOINT,ze=pe.ROUTING_SUBPATH,Ue=Object(v.a)(x.a)({color:"#FFF"}),Ne=Object(v.a)(ke.a)({color:"#FFF",minHeight:"64px",textTransform:"none",borderRadius:0,fontSize:"16px"}),Pe=Object(v.a)(z.a)({minHeight:"64px"}),qe=he((function(e){var t=(0,e.useAuth)(),a=Object(u.a)(t,2),n=a[0],c=(n=void 0===n?{}:n).client,i=n.error,l=n.notAuthorized,o=a[1];return r.a.createElement(r.a.Fragment,null,i||l?r.a.createElement(s.a,{to:"".concat(ze,"/login")}):null,r.a.createElement("div",{style:{height:"64px"}}),r.a.createElement(Ie.a,{position:"fixed"},r.a.createElement(Ce.a,{disableGutters:!0},r.a.createElement(p.a,{maxWidth:"md"},r.a.createElement(Pe,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(z.a,{item:!0},r.a.createElement(m.b,{to:"".concat(ze,"/")},r.a.createElement(Ne,null,"Home"))),r.a.createElement(z.a,{item:!0},c?r.a.createElement(z.a,{container:!0,alignItems:"center",spacing:2},r.a.createElement(z.a,{item:!0},r.a.createElement("div",null,(null===c||void 0===c?void 0:c.name)?"Hi, ".concat(c.name):"Hi, user")),r.a.createElement(z.a,{item:!0},r.a.createElement(Ue,{onClick:Object(fe.a)(be.a.mark((function e(){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ee.a.get("".concat(Te,"/logout"),{withCredentials:!0});case 2:o((function(e){e.client;var t=Object(O.a)(e,["client"]);return Object(j.a)(Object(j.a)({},t),{},{notAuthorized:!0})}));case 3:case"end":return e.stop()}}),e)})))},r.a.createElement(Ae.a,null)))):r.a.createElement(m.b,{to:"".concat(ze,"/login")},r.a.createElement(Ue,null,r.a.createElement(Se.a,null)))))))))})),_e=a(48),Fe=a(119),Be=a.n(Fe),He=a(46),$e=a(47),Ge=a(117),De=a(121),Le=a(118);function Me(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",a=Object.keys(e);return a.reduce((function(n,r,c){var i="".concat(n).concat(r,"=").concat(e[r]);return c<a.length-1&&(i+=t),i}),"")}var Qe=function(){function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(He.a)(this,e),this.id=t,this.url=a,this.options=n}return Object($e.a)(e,[{key:"open",value:function(){var e=this.url,t=this.id,a=this.options;this.window=window.open(e,t,Me(a,","))}},{key:"close",value:function(){this.cancel(),this.window.close()}},{key:"poll",value:function(){var e=this;this.promise=new Promise((function(t,a){e._iid=window.setInterval((function(){try{var n=e.window;if(!n||!1!==n.closed)return e.close(),void a(new Error("The popup was closed"));if(n.location.href===e.url||"blank"===n.location.pathname)return;var r=n.location.search.replace(/^\?/,"").replace(/^\??\//,"").split("&").reduce((function(e,t){var a=t.split("="),n=Object(u.a)(a,2),r=n[0],c=n[1];return e[r]=c,e}),{});t(r),e.close()}catch(c){}}),500)}))}},{key:"cancel",value:function(){this._iid&&(window.clearInterval(this._iid),this._iid=null)}},{key:"then",value:function(){var e;return(e=this.promise).then.apply(e,arguments)}},{key:"catch",value:function(){var e;return(e=this.promise).then.apply(e,arguments)}}],[{key:"open",value:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=Object(Le.a)(this,t);return n.open(),n.poll(),n}}]),e}(),We=function(e){Object(Ge.a)(a,e);var t=Object(De.a)(a);function a(){var e;Object(He.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onBtnClick=function(){var t=e.props,a=Me({client_id:t.clientId,scope:t.scope,redirect_uri:t.redirectUri}),n=e.popup=Qe.open("github-oauth-authorize","https://github.com/login/oauth/authorize?".concat(a),{height:1e3,width:600});e.onRequest(),n.then((function(t){return e.onSuccess(t)}),(function(t){return e.onFailure(t)}))},e.onRequest=function(){e.props.onRequest()},e.onSuccess=function(t){if(!t.code)return e.onFailure(new Error("'code' not found"));e.props.onSuccess(t)},e.onFailure=function(t){e.props.onFailure(t)},e}return Object($e.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.buttonText,n=e.children,c={onClick:this.onBtnClick};return t&&(c.className=t),r.a.createElement("div",c,n||a)}}]),a}(n.Component);We.defaultProps={buttonText:"Sign in with GitHub",scope:"user:email",onRequest:function(){},onSuccess:function(){},onFailure:function(){}};var Je=We,Ke=pe.GITHUB_CLIENT_ID,Ye=Object(v.a)(x.a)((function(e){var t=e.theme;return{color:e.active?t.palette.primary.main:"#000"}})),Ze=function(e){var t=e.children,a=Object(O.a)(e,["children"]);return r.a.createElement(z.a,a,r.a.Children.map(t,(function(e,t){return r.a.createElement(z.a,{item:!0,key:t},e)})))},Ve=he((function(e){var t=e.active,a=(e.type,e.setAuthControls),c=(e.setRedirect,e.useAuth),i=e.onClick,l=c();Object(u.a)(l,2)[1];return Object(n.useEffect)((function(){return t&&a&&a({element:r.a.createElement(Ze,{container:!0,spacing:2,direction:"column"},r.a.createElement(W.a,null,"Follow the open window"),r.a.createElement(Ze,{container:!0,spacing:2,direction:"column"},r.a.createElement(ke.a,{variant:"outlined",onClick:function(){return i&&i()}},"Cancel")))}),function(){return a&&a(null)}}),[t]),r.a.createElement(Je,{clientId:Ke},r.a.createElement(Ye,{active:t,onClick:function(e){t&&e.stopPropagation(),i&&i()},onSuccess:function(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];(e=console).log.apply(e,["github args"].concat(a))},onFailure:function(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];(e=console).log.apply(e,["github args"].concat(a))}},r.a.createElement(Be.a,null)))})),Xe=a(120),et=a.n(Xe),tt=a(122),at=pe.API_ENDPOINT,nt=new tt.a({pathPrefix:"".concat(at,"/webauthn")}),rt=Object(v.a)(x.a)((function(e){var t=e.theme;return{color:e.active?t.palette.primary.main:"#000"}})),ct=Object(v.a)(P.a)({width:"100%"}),it=function(e){var t=e.children,a=Object(O.a)(e,["children"]);return r.a.createElement(z.a,a,r.a.Children.map(t,(function(e,t){return r.a.createElement(z.a,{item:!0,key:t},e)})))},lt=he((function(e){var t=e.onCancel,a=e.useAuth,c=e.setRedirect,i=a(),l=Object(u.a)(i,2)[1],o=Object(n.useState)({password:"",email:""}),m=Object(u.a)(o,2),s=m[0],d=m[1],b=s.password,f=s.email,v=Object(n.useRef)(),E=Object(n.useState)({}),p=Object(u.a)(E,2),O=p[0].email,h=p[1];Object(n.useEffect)((function(){(null===v||void 0===v?void 0:v.current)&&v.current.focus()}),[v]);var g=function(){var e;return b||(e=!0,h((function(e){return Object(j.a)(Object(j.a)({},e),{},{password:{label:"Required",error:!0}})}))),$(f)||(e=!0,h((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:{label:"Is not a valid email",error:!0}})}))),!e};return r.a.createElement(it,{container:!0,spacing:2,direction:"column"},r.a.createElement(it,{container:!0,spacing:2,direction:"column"},r.a.createElement(ct,{required:!0,variant:"outlined",type:"email",size:"small",value:f,onChange:function(e){var t=e.target.value;d(Object(j.a)(Object(j.a)({},s),{},{email:t})),h((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:null})}))},inputRef:v,error:null===O||void 0===O?void 0:O.error,label:(null===O||void 0===O?void 0:O.label)||"Email"})),r.a.createElement(it,{container:!0,justify:"space-between"},r.a.createElement(ke.a,{variant:"outlined",onClick:t},"Cancel"),r.a.createElement(ke.a,{variant:"contained",color:"primary",onClick:Object(fe.a)(be.a.mark((function e(){var t,a;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g()){e.next=15;break}return e.prev=1,e.next=4,nt.login({username:f});case 4:return e.next=6,Ee.a.get("".concat(at,"/auth/webauthn"),{withCredentials:!0});case 6:t=e.sent,a=t.client,l({client:a,refetch:!0}),c(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("register failed ".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))},"Login")))})),ot=he((function(e){var t=e.onCancel,a=e.useAuth,c=e.setRedirect,i=a(),l=Object(u.a)(i,2)[1],o=Object(n.useState)({name:"",email:""}),m=Object(u.a)(o,2),s=m[0],d=m[1],b=s.name,f=s.email,v=Object(n.useRef)(),E=Object(n.useState)({}),p=Object(u.a)(E,2),O=p[0],h=O.email,g=O.name,w=p[1];Object(n.useEffect)((function(){(null===v||void 0===v?void 0:v.current)&&v.current.focus()}),[v]);var y=function(){var e;return b||(e=!0,w((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:{label:"Required",error:!0}})}))),$(f)||(e=!0,w((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:{label:"Is not a valid email",error:!0}})}))),!e};return r.a.createElement(it,{container:!0,spacing:2,direction:"column"},r.a.createElement(it,{container:!0,spacing:2,direction:"column"},r.a.createElement(ct,{required:!0,variant:"outlined",type:"name",size:"small",value:b,onChange:function(e){var t=e.target.value;d(Object(j.a)(Object(j.a)({},s),{},{name:t})),w((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:null})}))},inputRef:v,error:null===g||void 0===g?void 0:g.error,label:(null===g||void 0===g?void 0:g.label)||"Name"}),r.a.createElement(ct,{required:!0,variant:"outlined",type:"email",size:"small",value:f,onChange:function(e){var t=e.target.value;d(Object(j.a)(Object(j.a)({},s),{},{email:t})),w((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:null})}))},error:null===h||void 0===h?void 0:h.error,label:(null===h||void 0===h?void 0:h.label)||"Email"})),r.a.createElement(it,{container:!0,justify:"space-between"},r.a.createElement(ke.a,{variant:"outlined",onClick:t},"Cancel"),r.a.createElement(ke.a,{variant:"contained",color:"primary",onClick:Object(fe.a)(be.a.mark((function e(){var t,a;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y()){e.next=15;break}return e.prev=1,e.next=4,nt.register({username:f,name:b});case 4:return e.next=6,Ee.a.get("".concat(at,"/auth/webauthn"),{withCredentials:!0});case 6:t=e.sent,a=t.client,l({client:a,refetch:!0}),c(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("register failed ".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))},"Registration")))})),ut=function(e){var t=e.setAuthControls,a=e.active,c=e.onClick,i=e.type,l=e.setRedirect;return Object(n.useEffect)((function(){if(a){var e;switch(i){case"login":e={element:r.a.createElement(lt,{onCancel:function(){return c&&c()},setRedirect:l})};break;case"registration":e={element:r.a.createElement(ot,{onCancel:function(){return c&&c()},setRedirect:l})}}t&&t(e||null)}return function(){return t&&t(null)}}),[a,i]),r.a.createElement(rt,{active:a,onClick:function(){c&&c()}},r.a.createElement(et.a,null))},mt=function(e){var t=e.children,a=e.itemProps,n=void 0===a?{}:a,c=e.value,i=e.onSelect,l=Object(O.a)(e,["children","itemProps","value","onSelect"]);return r.a.createElement(z.a,l,t.map((function(e,t){return r.a.createElement(z.a,{item:!0,key:t},r.a.cloneElement(e,Object(j.a)({active:t===c,onClick:function(){return i(t)}},n)))})))},st=function(e){var t=e.type,a=e.setAuthControls,c=e.setRedirect,i=Object(n.useState)(),l=Object(u.a)(i,2),o=l[0],m=l[1];return r.a.createElement(mt,{container:!0,justify:"center",spacing:1,onSelect:function(e){return m(e===o?null:e)},value:o,itemProps:{type:t,setAuthControls:a,setRedirect:c}},r.a.createElement(Ve,null),r.a.createElement(ut,null))},dt=pe.API_ENDPOINT,bt=pe.ROUTING_SUBPATH,ft=function(e){var t=e.children,a=Object(O.a)(e,["children"]);return r.a.createElement(z.a,a,r.a.Children.map(t,(function(e,t){return r.a.createElement(z.a,{item:!0,key:t},e)})))},vt=Object(v.a)(p.a)((function(e){var t,a=e.theme;return t={marginTop:a.spacing(2),width:"350px"},Object(_e.a)(t,a.breakpoints.down("md"),{width:"350px"}),Object(_e.a)(t,a.breakpoints.down("sm"),{width:"300px"}),t})),Et=Object(v.a)(W.a)((function(e){return{marginBottom:e.theme.spacing(6)}})),pt=Object(v.a)(P.a)({width:"100%"}),jt=he((function(e){var t=(0,e.useAuth)(),a=Object(u.a)(t,2)[1],c=Object(n.useState)(),i=Object(u.a)(c,2),l=i[0],o=i[1],d=Object(n.useState)({name:"",email:"",password:""}),b=Object(u.a)(d,2),f=b[0],v=b[1],p=f.name,O=f.email,g=f.password,w=Object(n.useRef)(),y=Object(n.useState)({}),I=Object(u.a)(y,2),C=I[0],k=C.name,x=C.email,S=C.password,R=I[1],A=Object(n.useState)(),T=Object(u.a)(A,2),z=T[0],U=T[1];Object(n.useEffect)((function(){(null===w||void 0===w?void 0:w.current)&&w.current.focus()}),[w]);return r.a.createElement(vt,null,l?r.a.createElement(s.a,{to:"/"}):null,r.a.createElement(h.a,null,r.a.createElement(E.a,{p:2},r.a.createElement(ft,{container:!0,justify:"center",spacing:2,direction:"column"},r.a.createElement(Et,{variant:"h6"},"Registration"),r.a.createElement(st,{type:"registration",setAuthControls:U,setRedirect:o}),z?null===z||void 0===z?void 0:z.element:r.a.createElement(ft,{container:!0,justify:"center",spacing:2,direction:"column"},r.a.createElement(ft,{container:!0,spacing:2,direction:"column"},r.a.createElement(pt,{required:!0,variant:"outlined",size:"small",value:p,onChange:function(e){var t=e.target.value;v(Object(j.a)(Object(j.a)({},f),{},{name:t})),R((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:null})}))},inputRef:w,error:null===k||void 0===k?void 0:k.error,label:(null===k||void 0===k?void 0:k.label)||"Name"}),r.a.createElement(pt,{required:!0,variant:"outlined",type:"email",size:"small",value:O,onChange:function(e){var t=e.target.value;v(Object(j.a)(Object(j.a)({},f),{},{email:t})),R((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:null})}))},error:null===x||void 0===x?void 0:x.error,label:(null===x||void 0===x?void 0:x.label)||"Email"}),r.a.createElement(pt,{required:!0,variant:"outlined",type:"password",size:"small",value:g,onChange:function(e){var t=e.target.value;v(Object(j.a)(Object(j.a)({},f),{},{password:t})),R((function(e){return Object(j.a)(Object(j.a)({},e),{},{password:null})}))},error:null===S||void 0===S?void 0:S.error,label:(null===S||void 0===S?void 0:S.label)||"Password"})),r.a.createElement(ft,{container:!0,justify:"space-between"},r.a.createElement(m.b,{to:"".concat(bt,"/login")},r.a.createElement(ke.a,{variant:"outlined"},"Login")),r.a.createElement(ke.a,{variant:"contained",color:"primary",onClick:function(){(function(){var e;return p||(e=!0,R((function(e){return Object(j.a)(Object(j.a)({},e),{},{name:{label:"Required",error:!0}})}))),g||(e=!0,R((function(e){return Object(j.a)(Object(j.a)({},e),{},{password:{label:"Required",error:!0}})}))),$(O)||(e=!0,R((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:{label:"Is not a valid email",error:!0}})}))),!e})()&&Ee.a.post("".concat(dt,"/createClient"),{email:O,password:g,name:p},{withCredentials:!0}).then((function(e){var t=e.data.client;a({client:t}),o(!0)})).catch((function(){R({password:{error:!0},email:{error:!0},name:{error:!0}})}))}},"Registration")))))))})),Ot=pe.API_ENDPOINT,ht=pe.ROUTING_SUBPATH,gt=function(e){var t=e.children,a=Object(O.a)(e,["children"]);return r.a.createElement(z.a,a,r.a.Children.map(t,(function(e,t){return r.a.createElement(z.a,{item:!0,key:t},e)})))},wt=Object(v.a)(p.a)((function(e){var t,a=e.theme;return t={marginTop:a.spacing(2),width:"350px"},Object(_e.a)(t,a.breakpoints.down("md"),{width:"350px"}),Object(_e.a)(t,a.breakpoints.down("sm"),{width:"300px"}),t})),yt=Object(v.a)(W.a)((function(e){return{marginBottom:e.theme.spacing(6)}})),It=Object(v.a)(P.a)({width:"100%"}),Ct=he((function(e){var t=(0,e.useAuth)(),a=Object(u.a)(t,2)[1],c=Object(n.useState)(),i=Object(u.a)(c,2),l=i[0],o=i[1],d=Object(n.useState)({password:"",email:""}),b=Object(u.a)(d,2),f=b[0],v=b[1],p=f.password,O=f.email,g=Object(n.useRef)(),w=Object(n.useState)({}),y=Object(u.a)(w,2),I=y[0],C=I.password,k=I.email,x=y[1],S=Object(n.useState)(),R=Object(u.a)(S,2),A=R[0],T=R[1];Object(n.useEffect)((function(){(null===g||void 0===g?void 0:g.current)&&g.current.focus()}),[g]);return r.a.createElement(wt,null,l?r.a.createElement(s.a,{to:"/"}):null,r.a.createElement(h.a,null,r.a.createElement(E.a,{p:2},r.a.createElement(gt,{container:!0,justify:"center",spacing:2,direction:"column"},r.a.createElement(yt,{variant:"h6"},"Login"),r.a.createElement(st,{type:"login",setAuthControls:T,setRedirect:o}),A?null===A||void 0===A?void 0:A.element:r.a.createElement(gt,{container:!0,justify:"center",spacing:2,direction:"column"},r.a.createElement(gt,{container:!0,spacing:2,direction:"column"},r.a.createElement(It,{required:!0,variant:"outlined",type:"email",size:"small",value:O,onChange:function(e){var t=e.target.value;v(Object(j.a)(Object(j.a)({},f),{},{email:t})),x((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:null})}))},inputRef:g,error:null===k||void 0===k?void 0:k.error,label:(null===k||void 0===k?void 0:k.label)||"Email"}),r.a.createElement(It,{required:!0,type:"password",variant:"outlined",size:"small",value:p,onChange:function(e){var t=e.target.value;v(Object(j.a)(Object(j.a)({},f),{},{password:t})),x((function(e){return Object(j.a)(Object(j.a)({},e),{},{password:null})}))},error:null===C||void 0===C?void 0:C.error,label:(null===C||void 0===C?void 0:C.label)||"Password"})),r.a.createElement(gt,{container:!0,justify:"space-between"},r.a.createElement(m.b,{to:"".concat(ht,"/registration")},r.a.createElement(ke.a,{variant:"outlined",href:"registration"},"Registration")),r.a.createElement(ke.a,{variant:"contained",color:"primary",onClick:function(){(function(){var e;return p||(e=!0,x((function(e){return Object(j.a)(Object(j.a)({},e),{},{password:{label:"Required",error:!0}})}))),$(O)||(e=!0,x((function(e){return Object(j.a)(Object(j.a)({},e),{},{email:{label:"Is not a valid email",error:!0}})}))),!e})()&&Ee.a.post("".concat(Ot,"/auth"),{email:O,password:p},{withCredentials:!0}).then((function(e){var t=e.data.client;a({client:t,refetch:!0}),o(!0)})).catch((function(){x({password:{error:!0},email:{error:!0}})}))}},"Login")))))))})),kt=(a(164),pe.ROUTING_SUBPATH),xt=Object(d.a)("div")({display:"flex",flex:"1",justifyContent:"center",alignItems:"center"}),St=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],c=a[1],i=function(){return c.apply(void 0,arguments)};return i.fetch=Object(fe.a)(be.a.mark((function e(){var t,a;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(Object(j.a)(Object(j.a)({},r),{},{loading:!0})),e.next=4,Ee.a.get("".concat(je,"/auth"),{withCredentials:!0});case 4:t=e.sent,a=t.data,i({client:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),i({error:!0,notAuthorized:!0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[r,i]}({loading:!0}),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c.fetch()}),[]),r.a.createElement(Oe.Provider,{value:function(){return[a,c]}},(null===a||void 0===a?void 0:a.loading)?r.a.createElement(xt,null,r.a.createElement(b.a,null)):r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(qe,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"".concat(kt,"/")},r.a.createElement(ye,null)),r.a.createElement(s.b,{path:"".concat(kt,"/registration")},r.a.createElement(jt,null)),r.a.createElement(s.b,{path:"".concat(kt,"/login")},r.a.createElement(Ct,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Rt=new o.a({uri:"http://localhost:4010/graphql",credentials:"include"});i.a.render(r.a.createElement(l.a,{client:Rt},r.a.createElement(St,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[134,1,2]]]);
//# sourceMappingURL=main.449c7aed.chunk.js.map