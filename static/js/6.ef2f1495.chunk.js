(this["webpackJsonpcommands-app"]=this["webpackJsonpcommands-app"]||[]).push([[6,8],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var o=a(1),n=a(0),r=a.n(n),i=a(35);function l(e,t){var a=function(t,a){return r.a.createElement(i.a,Object(o.a)({ref:a},t),e)};return a.muiName=i.a.muiName,r.a.memo(r.a.forwardRef(a))}},133:function(e,t,a){"use strict";var o=a(1),n=a(3),r=a(0),i=(a(6),a(4)),l=a(5),c=a(15),s=a(59),d=a(8),p=r.forwardRef((function(e,t){var a=e.edge,l=void 0!==a&&a,c=e.children,p=e.classes,m=e.className,u=e.color,f=void 0===u?"default":u,g=e.disabled,b=void 0!==g&&g,h=e.disableFocusRipple,v=void 0!==h&&h,y=e.size,j=void 0===y?"medium":y,O=Object(n.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return r.createElement(s.a,Object(o.a)({className:Object(i.a)(p.root,m,"default"!==f&&p["color".concat(Object(d.a)(f))],b&&p.disabled,"small"===j&&p["size".concat(Object(d.a)(j))],{start:p.edgeStart,end:p.edgeEnd}[l]),centerRipple:!0,focusRipple:!v,disabled:b,ref:t},O),r.createElement("span",{className:p.label},c))}));t.a=Object(l.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(c.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(p)},140:function(e,t,a){"use strict";a.r(t);var o=a(2),n=a(0),r=a(3),i=a(1),l=(a(6),a(4)),c=a(15),s=a(5),d=a(58),p=a(125),m=Object(p.a)(n.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),u=Object(p.a)(n.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),f=Object(p.a)(n.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),g=Object(p.a)(n.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),b=Object(p.a)(n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),h=a(133),v=a(8),y={success:n.createElement(m,{fontSize:"inherit"}),warning:n.createElement(u,{fontSize:"inherit"}),error:n.createElement(f,{fontSize:"inherit"}),info:n.createElement(g,{fontSize:"inherit"})},j=n.createElement(b,{fontSize:"small"}),O=n.forwardRef((function(e,t){var a=e.action,o=e.children,c=e.classes,s=e.className,p=e.closeText,m=void 0===p?"Close":p,u=e.color,f=e.icon,g=e.iconMapping,b=void 0===g?y:g,O=e.onClose,C=e.role,z=void 0===C?"alert":C,E=e.severity,x=void 0===E?"success":E,S=e.variant,k=void 0===S?"standard":S,M=Object(r.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return n.createElement(d.a,Object(i.a)({role:z,square:!0,elevation:0,className:Object(l.a)(c.root,c["".concat(k).concat(Object(v.a)(u||x))],s),ref:t},M),!1!==f?n.createElement("div",{className:c.icon},f||b[x]||y[x]):null,n.createElement("div",{className:c.message},o),null!=a?n.createElement("div",{className:c.action},a):null,null==a&&O?n.createElement("div",{className:c.action},n.createElement(h.a,{size:"small","aria-label":m,title:m,color:"inherit",onClick:O},j)):null)})),C=Object(s.a)((function(e){var t="light"===e.palette.type?c.a:c.d,a="light"===e.palette.type?c.d:c.a;return{root:Object(i.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:a(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:a(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:a(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:a(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(O);t.default=function(e){var t=e.severity,a=void 0===t?"info":t,n=e.alertHeader,r=e.alertMessage;return Object(o.jsxs)(C,{severity:a,style:{justifyContent:"center",alignItems:"center",height:"80vh",width:"80%",margin:"0px auto"},icon:!1,children:[Object(o.jsx)("b",{style:{fontSize:"2rem"},children:n})," ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{style:{fontSize:"1.5rem"},children:r})]})}}}]);
//# sourceMappingURL=6.ef2f1495.chunk.js.map