(this["webpackJsonpreact-input-search"]=this["webpackJsonpreact-input-search"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),u=n.n(a),r=n(4),o=n.n(r),s=(n(10),n(2)),i=(n(11),function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),u=n[0],r=n[1],o=Object(a.useState)([]),i=Object(s.a)(o,2),l=i[0],f=i[1],j=Object(a.useState)(!1),b=Object(s.a)(j,2),v=b[0],p=b[1],d=Object(a.useState)(-1),h=Object(s.a)(d,2),O=h[0],m=h[1],g=Object(a.useRef)();Object(a.useEffect)((function(){var e=function(e){g.current&&!g.current.contains(e.target)&&(m(-1),p(!1))};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]);var k=function(e){r(e.target.value),x(e.target.value)},x=function(t){f([]);var n=function(t){return t.length?e.options.filter((function(e){return e.value.includes(t)||e.key.includes(t)})):[]}(t);f(n),p(!0)},w=function(e,t){m(-1),t&&m(e)};return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("input",{className:"input",type:"text",name:"search",placeholder:"Enter Text",value:u,onFocus:k,onChange:k,onKeyDown:function(e){switch(e.key){case"ArrowDown":O<l.length-1&&m(O+1);break;case"ArrowUp":O>0&&m(O-1);break;case"Enter":p(!1),r(l[O].value)}},autoComplete:"off"}),l.length>0&&v&&Object(c.jsx)("ul",{className:"searchResults",ref:g,children:l.map((function(e,t){return Object(c.jsx)("li",{onClick:function(){return function(e){p(!1),r(e.value)}(e)},className:"".concat(O===t&&"active"),onMouseEnter:function(){return w(t,!0)},onMouseLeave:function(){return w(t,!1)},children:e.value},t)}))})]})});var l=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(i,{options:[{key:"apple",value:"Apple"},{key:"ball",value:"Ball"},{key:"cat",value:"Cat"}]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,u=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),u(e),r(e)}))};o.a.render(Object(c.jsx)(u.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),f()}},[[12,1,2]]]);
//# sourceMappingURL=main.cda38bea.chunk.js.map