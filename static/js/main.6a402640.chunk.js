(this["webpackJsonpcommands-app"]=this["webpackJsonpcommands-app"]||[]).push([[0],{48:function(A){A.exports=JSON.parse('[{"name":"Git","description":"Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git is easy to learn and has a tiny footprint with lightning fast performance.","fontAwesomeIconName":"fab fa-github","documentationUrl":"https://git-scm.com/docs/git"},{"name":"NPM","description":"npm is a package manager for the JavaScript programming language. npm, Inc. is a subsidiary of GitHub, an American multinational corporation that provides hosting for software development and version control with the usage of Git. It is the default package manager for the JavaScript runtime environment Node.js.","fontAwesomeIconName":"fab fa-npm","documentationUrl":"https://docs.npmjs.com/getting-started"},{"name":"Windows","description":"cmd.exe is the default command-line interpreter for the OS/2, eComStation, ArcaOS, Microsoft Windows, and ReactOS operating systems. The name refers to its executable filename. It is also commonly referred to as cmd or the Command Prompt, referring to the default window title on Windows.","fontAwesomeIconName":"fab fa-windows","documentationUrl":"https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands"},{"name":"Linux","description":"Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution.","fontAwesomeIconName":"fab fa-linux","documentationUrl":"https://ubuntu.com/tutorials/command-line-for-beginners"},{"name":"Docker","description":"Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.","fontAwesomeIconName":"fab fa-docker","documentationUrl":"https://docs.docker.com/engine/reference/commandline/docker/"}]')},68:function(A){A.exports=JSON.parse('{"git":[{"text":"git --version","description":"To get version of git"},{"text":"git add <path/to/file/file-name.ext>","description":"Add file contents to the index"}],"npm":[{"text":"npm -v","description":"To get version of npm","alternateText":"npm --version"}],"windows":[{"text":"winver","description":"To get version of windows"}],"linux":[{"text":"lsb_release -a","description":"To get version of linux"}],"docker":[{"text":"docker -v","description":"To get version of docker","alternateText":"docker --version"}]}')},80:function(A,e,t){},81:function(A,e,t){},93:function(A,e,t){"use strict";t.r(e);var n=t(2),a=t(0),i=t.n(a),r=t(9),o=t.n(r),s=(t(80),t(81),t(39)),c=t(11),d=t(118),g=t(131),l=t(132),E=t(149),b=t(120),f=t(122),m=t(123),p=t(124),u=t(51),R=t(125),j=t(126),h=t(127),B=t(128),w=t(24),O=t.p+"static/media/windows.d56a4f2b.png",C=t.p+"static/media/linux.acfdf48f.png",x=t.p+"static/media/command.fde68e8d.png",v=Object(d.a)((function(A){var e;return{root:(e={margin:15,maxWidth:345,height:370,textAlign:"center"},Object(c.a)(e,A.breakpoints.down("sm"),{margin:0,marginTop:10,marginBottom:10}),Object(c.a)(e,A.breakpoints.down("md"),{margin:10}),e),media:{height:100,width:"50",textAlign:"center"},active:{background:"papayawhip"}}})),I=function(A){var e=A.title,t=A.description,a=(A.iconPath,A.documentationUrl),i=v(),r=e.toLowerCase(),o="git"===r?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAAB3RJTUUH4QYRDiAaFFFXDwAAF2NJREFUeNrt3XmYHHWdx/F3dZKpIRBOATlWSUOmEo5UotIRT9h1RUkDEg+82F3dR9n1UVB0EQQk3LIusrC4HqvPuj66Kohy9AoCwrKCSouamgSTCkknKiJKMIQrU5PM/PaPmg6TMDPprru7P6/nmechma6qbxX5fvtXVb8DRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERESkt1l5ByBSNAsOwTK2PQsolUbMs79aM7wl75jS0hUFYF316F0N1geBdwBHAn3AeuAO4Jpyrb4m7xil2FzHPgL4O+ANwFygf+xXo8AjwAPAjSVj3fir1UNb8443KR1fABrVysuBG4GXTvKRADi7XKtfm3esUjwLnL7dDNa1hMnfSj74wPs8P/hp3rEnoaMLQKNaOQa4Hdi9hY8vLdfqF+UdsxSHO9feDcNdwKI2Nw2At3h+cHve5xBXKe8Aomoz+QGWNqqVC/OOWwrEcDXtJz+ADXzLHbAPzPsU4urIAhAh+ZtUBASABY49F3h/jF3sicW5eZ9HXB1XAGIkf5OKgGDgNOL/+3/PwgF7Rt7nEkdHFYAEkr9JRUBen8A+9hq1mJ/3icTRMQWgUa28imSSv0lFoLfNKdh+ctERBWAs+W8jueRvWtqoVpbmfX6Siz0Ltp9cTM87gJ1JMfmbLmxUK6Vyrf7pvM9VMjVasP3gOnaZsCPS1Az3eKuDh5M4ZqELQAbJ33RBo1pBRaCnPA78RUL7ScqbgM/v9FMWpwGJFIDC3gI0qpWXkk3yN13QqFbUUah3PFSw/cDkvVlTU9gCMLtW/w3wbxkf9tONauXivM9dMnFnAvtYvykIVicYk5P1RShsAbCA2bX6+cBlGR/6AhWB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/LiOHXVcxGbgW8D1YO7z/OFIbwbcgf7dscxrCd//v5PoS2UB/GTAD159Q9oXrcsUrgBA7kWgJ5IfwHXsJK7zVuBhYA3h1FZPAM8RLn65hXDU5TTC5J5F2BPwIMIuu4eQTCt0K3CM5wcPZn4RO1whCwDkVgR6JvkBXMd2CFeoKey/gxYt9fzgoryD6ESFeQawoxyeCfRU8gN4fuADN+UdR0w3WJaV9wI1HauwBQAyLQI9l/zjfJRwdZtO9F1jrPcuWzXU6XMa5qbQBQAyKQK9nPx4fvBb4G20/0YgT6PA5SMjnDq4uv1ZcOR5HXPv16hWzgGuSHi3PZ3847mO/WrgBtpbITgPa4APen5wT96BdIPCtwCayrX6Z4BzE9ylkn8czw/utwzzgf+kmNOE/xE4C4sjlfzJ6ZgWQFNCLYGumcwjDa5jzyNcgutd5D9B6M+A/zDW6LcGV23ppNuUjtBxBQBiFwElf4sWzLN3NaOcACwmnEo98R6AE3gOuB/4IXCT5wdr874O3awjCwBELgJK/hhcx96PcAThEcAc4FDCZwYH0P4IvqcJh+6uJ+xItAJYBpbn+Xqwl5WOLQDQdhHYTHjPf2fecXcj9/C+PmtraZaxzO4GdrUspmOYTtgL0FhYWwxstjBPWbDxV36g5nwBdHQBAGhUK2cDn9nJuTxDOHvvXXnHK1IkHfMWYDLlWv2fgRMJm5ETuRdYpOQXeaGObwE0rTnpmFJpdORVhPeouxO+Nrq3XKuvzDs2ERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERkWL6f7GleJN3MNiMAAAALnpUWHRkYXRlOmNyZWF0ZQAAeNozMjA01zUw0zU0DzE0sTI2sjIy1TYwsDIwAABCAgUR8xVL0QAAAC56VFh0ZGF0ZTptb2RpZnkAAHjaMzIwNNc1MNM1NA8xNLEyNrIyMtU2MLAyMAAAQgIFEdoq41kAAAAASUVORK5CYII=":"npm"===r?"data:image/png;base64,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":"windows"===r?O:"linux"===r?C:"docker"===r?"data:image/png;base64,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":x;return Object(n.jsxs)(b.a,{className:i.root,children:[Object(n.jsxs)(f.a,{children:[Object(n.jsx)(m.a,{className:i.media,image:o,title:"Contemplative Reptile",style:{width:"50%",height:"90px",margin:"auto"}}),Object(n.jsx)(w.b,{to:"/category/".concat(e.toLowerCase()),style:{textDecoration:"none"},children:Object(n.jsxs)(p.a,{className:"hello",children:[Object(n.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e}),Object(n.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",style:{height:"150px"},children:t})]})})]}),Object(n.jsxs)(R.a,{children:[Object(n.jsx)(j.a,{size:"small",color:"primary",children:Object(n.jsx)(h.a,{style:{fill:"yellow"}})}),Object(n.jsx)(j.a,{size:"small",color:"primary",children:Object(n.jsx)("a",{href:a,target:"_blank",children:Object(n.jsx)(B.a,{})})})]})]})},Q=t(129),D=t(130),y=t(151),P=t(13),S=t(65),F=t.n(S),k=Object(d.a)((function(A){return{root:{flexGrow:1,margin:50},menuButton:{marginRight:A.spacing(2)},title:Object(c.a)({flexGrow:1,display:"none"},A.breakpoints.up("sm"),{display:"block"}),search:Object(c.a)({position:"relative",borderRadius:A.shape.borderRadius,backgroundColor:Object(P.b)(A.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.b)(A.palette.common.white,.25)},marginLeft:0,width:"100%"},A.breakpoints.up("sm"),{marginLeft:A.spacing(1),width:"auto"}),searchIcon:{padding:A.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(c.a)({padding:A.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(A.spacing(4),"px)"),transition:A.transitions.create("width"),width:"100%"},A.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function L(A){var e=A.filterText,t=A.setFilterText,a=k();return Object(n.jsx)("div",{className:a.root,children:Object(n.jsx)(Q.a,{position:"fixed",children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)(w.b,{to:"/",style:{color:"#fdfffd"}}),Object(n.jsx)(u.a,{className:a.title,variant:"h6",noWrap:!0,children:"Select Category"}),Object(n.jsxs)("div",{className:a.search,children:[Object(n.jsx)("div",{className:a.searchIcon,children:Object(n.jsx)(F.a,{})}),Object(n.jsx)(y.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},value:e,onChange:function(A){return t(A.target.value)}})]})]})})})}var G=t(48),N=Object(d.a)((function(A){return{root:{flexGrow:1},paper:{textAlign:"center",color:A.palette.text.secondary},grid:Object(c.a)({padding:0,margin:0},A.breakpoints.up("sm"),{margin:20}),cardGrid:{padding:0,margin:0}}}));function X(){var A=N(),e=Object(a.useState)(""),t=Object(s.a)(e,2),i=t[0],r=t[1];function o(e){var t=e.filterText;return Object(n.jsx)(g.a,{container:!0,spacing:3,className:A.grid,children:G.filter((function(A){return A.name.toLowerCase().includes(t.toLowerCase())})).map((function(A){var e=A.name,a=A.description,i=A.iconPath,r=A.documentationUrl;return Object(n.jsx)(g.a,{direction:"row",xs:12,sm:6,md:4,lg:3,children:Object(n.jsx)(I,{title:e,description:a,iconPath:i,documentationUrl:r,filterText:t})},Object(E.a)())}))})}return Object(n.jsxs)("div",{className:A.root,children:[Object(n.jsx)(L,{filterText:i,setFilterText:r}),Object(n.jsx)(l.a,{fixed:!0,children:Object(n.jsx)(g.a,{container:!0,className:A.cardGrid,children:Object(n.jsx)(o,{filterText:i})})})]})}var U=t(12),M=t(50),H=t(4),T=t(21),W=t(139),z=t(140),J=t(148),K=t(137),V=t(138),Y=t(153),q=t(146),Z=t(147),_=t(136),$=t(141),AA=t(142),eA=t(143),tA=t(144),nA=t(145),aA=t(150),iA=t(134),rA=t(135),oA=t(152),sA=t(66),cA=t.n(sA),dA=t(49),gA=function(A){cA()(A),dA.b.info("\ud83d\ude00 Command Copied to clipboard!",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},lA=Object(d.a)((function(A){return{inline:{display:"inline"},command:{color:"#52c4ff"},avatar:{cursor:"pointer"},unSelectable:{userSelect:"none"}}})),EA=function(A){var e=A.command,t=e.text,a=e.description,i=A.isLastItem,r=lA();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(Y.a,{alignItems:"flex-start",children:[Object(n.jsx)(aA.a,{title:"Copy command to clipboard",TransitionComponent:iA.a,placement:"top",arrow:!0,children:Object(n.jsx)(rA.a,{onClick:function(){return gA(t)},className:r.avatar,children:Object(n.jsx)(oA.a,{alt:"Copy",src:"dummy.jpg",children:Object(n.jsx)("i",{className:"fas fa-clipboard"})})})}),Object(n.jsx)(_.a,{primary:Object(n.jsx)("b",{className:"".concat(r.command," ").concat(r.unSelectable),children:t}),secondary:Object(n.jsxs)("span",{className:r.unSelectable,children:[a," "]})})]}),!i&&Object(n.jsx)(K.a,{variant:"inset",component:"li"})]})},bA=t(68),fA=function(A){return bA[A]},mA=Object(d.a)((function(A){return{root:{width:"100%",backgroundColor:A.palette.background.paper},inline:{display:"inline"}}}));function pA(A){var e=A.category,t=void 0===e?"git":e,a=A.filterText,i=mA(),r=fA(t);return Object(n.jsx)(V.a,{className:i.root,children:r.filter((function(A){return A.text.toLowerCase().includes(a.toLowerCase())})).map((function(A,e){return Object(n.jsx)(EA,{command:A,isLastItem:Boolean(e===r.length-1)},Object(E.a)())}))})}var uA=240,RA=Object(d.a)((function(A){var e;return{root:{display:"flex"},appBar:{transition:A.transitions.create(["margin","width"],{easing:A.transitions.easing.sharp,duration:A.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(uA,"px)"),marginLeft:uA,transition:A.transitions.create(["margin","width"],{easing:A.transitions.easing.easeOut,duration:A.transitions.duration.enteringScreen})},homeButton:Object(c.a)({marginLeft:10,color:"honeydew"},A.breakpoints.down("sm"),{marginRight:0,marginLeft:0}),title:Object(c.a)({textAlign:"left",fontSize:"1.5rem"},A.breakpoints.down("sm"),{display:"block",fontSize:"1rem",marginRight:10}),menuButton:Object(c.a)({marginLeft:36,marginRight:36},A.breakpoints.down("sm"),{marginLeft:0,marginRight:0}),hide:{display:"none"},drawer:{width:uA,flexShrink:0},drawerPaper:{width:uA},drawerHeader:Object(M.a)(Object(M.a)({display:"flex",alignItems:"center",padding:A.spacing(0,1)},A.mixins.toolbar),{},{justifyContent:"flex-end"}),drawerOpen:{width:uA,transition:A.transitions.create("width",{easing:A.transitions.easing.sharp,duration:A.transitions.duration.enteringScreen})},drawerClose:Object(c.a)({transition:A.transitions.create("width",{easing:A.transitions.easing.sharp,duration:A.transitions.duration.leavingScreen}),overflowX:"hidden",width:A.spacing(7)+1},A.breakpoints.up("sm"),{width:A.spacing(9)+1}),toolbar:Object(M.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:A.spacing(0,1)},A.mixins.toolbar),content:{flexGrow:1,padding:A.spacing(3),transition:A.transitions.create("margin",{easing:A.transitions.easing.sharp,duration:A.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:A.transitions.create("margin",{easing:A.transitions.easing.easeOut,duration:A.transitions.duration.enteringScreen}),marginLeft:0},search:Object(c.a)({position:"relative",borderRadius:A.shape.borderRadius,backgroundColor:Object(P.b)(A.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.b)(A.palette.common.white,.25)},marginLeft:0,width:"100%"},A.breakpoints.up("sm"),{marginLeft:A.spacing(1),width:"auto"}),searchIcon:{padding:A.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(c.a)({padding:A.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(A.spacing(4),"px)"),transition:A.transitions.create("width"),width:"100%"},A.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),activeItem:{color:"green"},sidebarIcon:(e={width:"1.5em",fontSize:40},Object(c.a)(e,A.breakpoints.down("sm"),{fontSize:30}),Object(c.a)(e,A.breakpoints.up("sm"),{fontSize:35}),Object(c.a)(e,A.breakpoints.up("md"),{fontSize:40}),e)}}));function jA(A){var e=A.category,t=RA(),i=Object(T.a)(),r=Object(a.useState)(!1),o=Object(s.a)(r,2),d=o[0],g=o[1],l=Object(a.useState)(""),b=Object(s.a)(l,2),f=b[0],m=b[1];return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(W.a,{}),Object(n.jsx)(Q.a,{position:"fixed",className:Object(H.a)(t.appBar,Object(c.a)({},t.appBarShift,d)),children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)(z.a,{edge:"start",className:t.menuButton,onClick:function(){g(!0)},color:"inherit","aria-label":"menu",children:Object(n.jsx)($.a,{})}),Object(n.jsx)(u.a,{variant:"h6",className:t.title,style:{flex:1},children:e.toUpperCase()}),Object(n.jsxs)("div",{className:t.search,children:[Object(n.jsx)("div",{className:t.searchIcon,children:Object(n.jsx)(AA.a,{})}),Object(n.jsx)(y.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},value:f,onChange:function(A){return m(A.target.value)}})]}),Object(n.jsx)(w.b,{to:"/categories",style:{textDecoration:"none"},activeClassName:t.activeItem,children:Object(n.jsx)(z.a,{edge:"start",className:t.homeButton,color:"inherit","aria-label":"open drawer",children:Object(n.jsx)(eA.a,{})})})]})}),Object(n.jsxs)(J.a,{className:t.drawer,variant:"persistent",anchor:"left",open:d,classes:{paper:t.drawerPaper},children:[Object(n.jsx)("div",{className:t.toolbar,children:Object(n.jsx)(z.a,{onClick:function(){g(!1)},children:"rtl"===i.direction?Object(n.jsx)(tA.a,{}):Object(n.jsx)(nA.a,{})})}),Object(n.jsx)(K.a,{}),Object(n.jsx)(V.a,{children:G.map((function(A){var e=A.name,i=A.fontAwesomeIconName;return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)(w.b,{to:"/category/".concat(e.toLowerCase()),style:{textDecoration:"none"},children:Object(n.jsxs)(Y.a,{button:!0,children:[Object(n.jsx)(q.a,{children:Object(n.jsx)(Z.a,{className:"".concat(i," ").concat(t.sidebarIcon)})}),Object(n.jsx)(_.a,{primary:e})]},e)}),Object(n.jsx)(K.a,{})]},Object(E.a)())}))})]}),Object(n.jsxs)("main",{className:Object(H.a)(t.content,Object(c.a)({},t.contentShift,d)),children:[Object(n.jsx)("div",{className:t.toolbar}),Object(n.jsx)(pA,{category:e,filterText:f})]})]})}var hA=Object(d.a)((function(A){return{root:{flexGrow:1},paper:{padding:A.spacing(2),textAlign:"center",color:A.palette.text.secondary}}})),BA=function(A){var e=A.match.params.category,t=hA();return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(jA,{category:e})})},wA=function(){return Object(n.jsx)("div",{children:"NotFound"})};var OA=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(l.a,{maxWidth:"xl",children:Object(n.jsxs)(U.d,{children:[Object(n.jsx)(U.b,{exact:!0,path:"/categories",component:X}),Object(n.jsx)(U.b,{exact:!0,path:"/",children:Object(n.jsx)(U.a,{to:"/categories"})}),Object(n.jsx)(U.b,{exact:!0,path:"/category/:category",component:BA}),Object(n.jsx)(U.b,{path:"/",component:wA})]})})})},CA=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,154)).then((function(e){var t=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;t(A),n(A),a(A),i(A),r(A)}))};t(92);o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsxs)(w.a,{basename:"".concat("/commands"),children:[Object(n.jsx)(OA,{}),Object(n.jsx)(dA.a,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0})]})}),document.getElementById("root")),CA()}},[[93,1,2]]]);
//# sourceMappingURL=main.6a402640.chunk.js.map