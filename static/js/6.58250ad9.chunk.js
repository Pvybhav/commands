(this["webpackJsonpcommands-app"]=this["webpackJsonpcommands-app"]||[]).push([[6],{122:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return E}));var n=a(48),i=a(123),r=a(19),s=a(2),c=a(0),o=a.n(c),d=a(4),l=a(98),j=a(15),b=a(117),p=a(141),h=a(110),g=a(111),m=a(142),u=a(105),O=a(114),f=a(156),x=a(149),w=a(150),v=a(159),S=a(151),y=a(152),k=a(153),N=a(143),C=a(144),I=a(145),L=a(147),B=a(148),R=a(20),z=a(115),P=a(46),A=o.a.lazy((function(){return a.e(5).then(a.bind(null,128))})),D=240,J=Object(l.a)((function(t){var e;return{root:{display:"flex"},appBar:{transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(D,"px)"),marginLeft:D,transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})},homeButton:Object(r.a)({marginLeft:10,color:"honeydew"},t.breakpoints.down("sm"),{marginRight:0,marginLeft:0}),title:Object(r.a)({textAlign:"left",fontSize:"1.5rem"},t.breakpoints.down("sm"),{display:"block",fontSize:"1rem",marginRight:10}),menuButton:Object(r.a)({marginLeft:36,marginRight:36},t.breakpoints.down("sm"),{marginLeft:0,marginRight:0}),hide:{display:"none"},drawer:{width:D,flexShrink:0},drawerPaper:{width:D},drawerHeader:Object(i.a)(Object(i.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"}),drawerOpen:{width:D,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},drawerClose:Object(r.a)({transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),overflowX:"hidden",width:t.spacing(7)+1},t.breakpoints.up("sm"),{width:t.spacing(9)+1}),toolbar:Object(i.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar),content:{flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0},search:Object(r.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(j.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(r.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),activeItem:{color:"green"},sidebarIcon:(e={width:"1.5em",fontSize:40},Object(r.a)(e,t.breakpoints.down("sm"),{fontSize:30}),Object(r.a)(e,t.breakpoints.up("sm"),{fontSize:35}),Object(r.a)(e,t.breakpoints.up("md"),{fontSize:40}),e)}}));function E(t){var e=t.category,a=J(),i=Object(b.a)(),o=Object(c.useState)(!1),l=Object(n.a)(o,2),j=l[0],D=l[1],E=Object(c.useState)(""),F=Object(n.a)(E,2),G=F[0],H=F[1];return Object(s.jsxs)("div",{className:a.root,children:[Object(s.jsx)(p.a,{}),Object(s.jsx)(h.a,{position:"fixed",className:Object(d.a)(a.appBar,Object(r.a)({},a.appBarShift,j)),children:Object(s.jsxs)(g.a,{children:[Object(s.jsx)(m.a,{edge:"start",className:a.menuButton,onClick:function(){D(!0)},color:"inherit","aria-label":"menu",children:Object(s.jsx)(N.a,{})}),Object(s.jsx)(u.a,{variant:"h6",className:a.title,style:{flex:1},children:e.toUpperCase()}),Object(s.jsxs)("div",{className:a.search,children:[Object(s.jsx)("div",{className:a.searchIcon,children:Object(s.jsx)(C.a,{})}),Object(s.jsx)(O.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},value:G,onChange:function(t){return H(t.target.value)}})]}),Object(s.jsx)(R.b,{to:"/categories",style:{textDecoration:"none"},activeClassName:a.activeItem,children:Object(s.jsx)(m.a,{edge:"start",className:a.homeButton,color:"inherit","aria-label":"open drawer",children:Object(s.jsx)(I.a,{})})})]})}),Object(s.jsxs)(f.a,{className:a.drawer,variant:"persistent",anchor:"left",open:j,classes:{paper:a.drawerPaper},children:[Object(s.jsx)("div",{className:a.toolbar,children:Object(s.jsx)(m.a,{onClick:function(){D(!1)},children:"rtl"===i.direction?Object(s.jsx)(L.a,{}):Object(s.jsx)(B.a,{})})}),Object(s.jsx)(x.a,{}),Object(s.jsx)(w.a,{children:P.map((function(t){var e=t.name,n=t.fontAwesomeIconName;return Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)(R.b,{to:"/category/".concat(e.toLowerCase()),style:{textDecoration:"none"},children:Object(s.jsxs)(v.a,{button:!0,children:[Object(s.jsx)(S.a,{children:Object(s.jsx)(y.a,{className:"".concat(n," ").concat(a.sidebarIcon)})}),Object(s.jsx)(k.a,{primary:e})]},e)}),Object(s.jsx)(x.a,{})]},Object(z.a)())}))})]}),Object(s.jsxs)("main",{className:Object(d.a)(a.content,Object(r.a)({},a.contentShift,j)),children:[Object(s.jsx)("div",{className:a.toolbar}),Object(s.jsx)(A,{category:e,filterText:G})]})]})}}}]);
//# sourceMappingURL=6.58250ad9.chunk.js.map