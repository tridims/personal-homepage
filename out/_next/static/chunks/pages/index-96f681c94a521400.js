(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4651:function(e,n,r){"use strict";r.d(n,{Ee:function(){return h}});var t=r(6052),i=r(5031),a=r(7294),l=r(4697);function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},c.apply(this,arguments)}function s(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}var o=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=a.forwardRef((function(e,n){var r=e.htmlWidth,t=e.htmlHeight,i=e.alt,l=s(e,o);return a.createElement("img",c({width:r,height:t,ref:n,alt:i},l))})),h=(0,t.Gp)((function(e,n){var r=e.fallbackSrc,o=e.fallback,h=e.src,f=e.srcSet,x=e.align,m=e.fit,g=e.loading,j=e.ignoreFallback,p=e.crossOrigin,v=s(e,u),b=null!=g||j||void 0===r&&void 0===o,y=function(e){var n=e.loading,r=e.src,t=e.srcSet,i=e.onLoad,c=e.onError,s=e.crossOrigin,o=e.sizes,u=e.ignoreFallback,d=(0,a.useState)("pending"),h=d[0],f=d[1];(0,a.useEffect)((function(){f(r?"loading":"pending")}),[r]);var x=(0,a.useRef)(),m=(0,a.useCallback)((function(){if(r){g();var e=new Image;e.src=r,s&&(e.crossOrigin=s),t&&(e.srcset=t),o&&(e.sizes=o),n&&(e.loading=n),e.onload=function(e){g(),f("loaded"),null==i||i(e)},e.onerror=function(e){g(),f("failed"),null==c||c(e)},x.current=e}}),[r,s,t,o,i,c,n]),g=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,l.a)((function(){if(!u)return"loading"===h&&m(),function(){g()}}),[h,m,u]),u?"loaded":h}(c({},e,{ignoreFallback:b})),w=c({ref:n,objectFit:m,objectPosition:x},b?v:(0,i.CE)(v,["onError","onLoad"]));return"loaded"!==y?o||a.createElement(t.m$.img,c({as:d,className:"chakra-image__placeholder",src:r},w)):a.createElement(t.m$.img,c({as:d,src:h,srcSet:f,crossOrigin:p,loading:g,className:"chakra-image"},w))}));i.Ts&&(h.displayName="Image")},8581:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1912)}])},8598:function(e,n,r){"use strict";r.d(n,{Et:function(){return d},P4:function(){return u},Pg:function(){return h}});var t=r(5893),i=r(1664),a=r.n(i),l=r(5675),c=r.n(l),s=r(8527),o=r(917),u=function(e){var n=e.children,r=e.href,i=e.title,a=e.thumbnail;return(0,t.jsx)(s.xu,{w:"100%",align:"center",children:(0,t.jsxs)(s.fG,{cursor:"pointer",children:[(0,t.jsx)(c(),{src:a,alt:i,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,t.jsx)(s.AB,{href:r,target:"_blank",children:(0,t.jsx)(s.xv,{mt:2,children:i})}),(0,t.jsx)(s.xv,{fontSize:14,children:n})]})})},d=function(e){var n=e.children,r=e.id,i=e.title,l=e.thumbnail;return(0,t.jsx)(s.xu,{w:"100%",align:"center",children:(0,t.jsx)(a(),{href:"/works/".concat(r),passHref:!0,children:(0,t.jsxs)(s.fG,{cursor:"pointer",children:[(0,t.jsx)(c(),{src:l,alt:i,className:"grid-item-thumbnail",placeholder:"blur"}),(0,t.jsx)(s.AB,{href:"/works/".concat(r),children:(0,t.jsx)(s.xv,{mt:2,fontSize:20,children:i})}),(0,t.jsx)(s.xv,{fontSize:14,children:n})]})})})},h=function(){return(0,t.jsx)(o.xB,{styles:"\n  .grid-item-thumbnail {\n    border-radius: 12px;\n  }\n  "})}},951:function(e,n,r){"use strict";var t=r(5893),i=r(8816),a=r(9008),l=r(8598),c={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:20}};n.Z=function(e){var n=e.children,r=e.title;return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsx)(a.default,{children:(0,t.jsxs)("title",{children:[r," - Dimas Tri Mustakim"]})}),n,(0,t.jsx)(l.Pg,{})]})})}},5930:function(e,n,r){"use strict";function t(){var e,n,r=(e=["\n  text-align: justify;\n  text-indent: 1em;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return t=function(){return r},r}var i=r(5934).Z.p(t());n.Z=i},2112:function(e,n,r){"use strict";var t=r(5893),i=r(8816),a=r(6052),l=(0,a.m$)(i.E.div,{shouldForwardProp:function(e){return(0,a.x9)(e)||"transition"===e}});n.Z=function(e){var n=e.children,r=e.delay,i=void 0===r?0:r;return(0,t.jsx)(l,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:i},mb:6,children:n})}},1912:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return y},default:function(){return w}});var t=r(5893),i=r(1664),a=r.n(i),l=r(8527),c=r(949),s=r(4651),o=r(5193),u=r(2112),d=r(5930),h=r(9876),f=r(5934);function x(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function m(){var e=x(["\n  padding-left: 3.4em;\n  text-indent: -3.4em;\n"]);return m=function(){return e},e}function g(){var e=x(["\n  font-weight: bold;\n  margin-right: 1em;\n"]);return g=function(){return e},e}var j=(0,f.Z)(l.xu)(m()),p=f.Z.span(g()),v=r(951),b=r(155),y=!0,w=function(){return(0,t.jsx)(v.Z,{children:(0,t.jsxs)(l.W2,{children:[(0,t.jsx)(l.xu,{borderRadius:"lg",bg:(0,c.ff)("whiteAlpha.500","whiteAlpha.200"),p:3,mb:6,align:"center",children:"Hello, I'm a student in Brawijaya University!"}),(0,t.jsxs)(l.xu,{display:{md:"flex"},children:[(0,t.jsxs)(l.xu,{flexGrow:1,children:[(0,t.jsx)(l.X6,{as:"h2",variant:"page-title",children:"Dimas Tri Mustakim"}),(0,t.jsx)("p",{children:"IT Enthusiast / Student / Developer"})]}),(0,t.jsx)(l.xu,{flexShrink:0,mt:{base:4,md:0},ml:{md:6},align:"center",children:(0,t.jsx)(s.Ee,{borderColor:"whiteAlpha.800",borderWidth:2,borderStyle:"solid",maxWidth:"100px",display:"inline-block",borderRadius:"full",src:"/images/dimas.jpg",alt:"Profile Image"})})]}),(0,t.jsxs)(u.Z,{delay:.1,children:[(0,t.jsx)(l.X6,{as:"h3",variant:"section-title",children:"Work"}),(0,t.jsxs)(d.Z,{children:["I am a student in Brawijaya University in my second year. Currently I have interest in Software Engineering, Full-Stack Development, Machine Learning, and Security. Not yet to decide which one i would really want, but i belive that learning all of those will be helpful in building good stuff in the future. Pls chekout my website in"," ",(0,t.jsx)(a(),{href:"https://www.dimastri.online",passHref:!0,children:(0,t.jsx)(l.rU,{children:"here."})})]}),(0,t.jsx)(l.xu,{align:"center",my:4,children:(0,t.jsx)(a(),{href:"/works",passHref:!0,children:(0,t.jsx)(o.zx,{rightIcon:(0,t.jsx)(h.XC,{}),colorScheme:"teal",children:"My Portofolio"})})})]}),(0,t.jsxs)(u.Z,{delay:.2,children:[(0,t.jsx)(l.X6,{as:"h3",variant:"section-title",children:"Bio"}),(0,t.jsxs)(j,{children:[(0,t.jsx)(p,{children:"2001"}),"Born in Batu, Jawa Timur."]}),(0,t.jsxs)(j,{children:[(0,t.jsx)(p,{children:"2020"}),"Started education in informatics at Brawijaya University."]})]}),(0,t.jsxs)(u.Z,{delay:.3,children:[(0,t.jsx)(l.X6,{as:"h3",variant:"section-title",children:"Hobbys \u2764\ufe0f"}),(0,t.jsx)(d.Z,{children:"Exploring tech related stuff, reading manga."})]}),(0,t.jsxs)(u.Z,{delay:.4,children:[(0,t.jsx)(l.X6,{as:"h3",variant:"section-title",children:"Social Media"}),(0,t.jsxs)(l.aV,{children:[(0,t.jsx)(l.HC,{children:(0,t.jsx)(l.rU,{href:"https://github.com/tridims",target:"_blank",children:(0,t.jsx)(o.zx,{variant:"ghost",colorScheme:"teal",leftIcon:(0,t.jsx)(b.JOq,{}),children:"@Dimas Tri"})})}),(0,t.jsx)(l.HC,{children:(0,t.jsx)(l.rU,{href:"#",target:"_blank",children:(0,t.jsx)(o.zx,{variant:"ghost",colorScheme:"teal",leftIcon:(0,t.jsx)(b.gXb,{}),children:"Dimas Tri Mustakim"})})})]})]})]})})}},5177:function(e,n,r){"use strict";r.d(n,{w_:function(){return o}});var t=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=t.createContext&&t.createContext(i),l=function(){return l=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},l.apply(this,arguments)},c=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]])}return r};function s(e){return e&&e.map((function(e,n){return t.createElement(e.tag,l({key:n},e.attr),s(e.child))}))}function o(e){return function(n){return t.createElement(u,l({attr:l({},e.attr)},n),s(e.child))}}function u(e){var n=function(n){var r,i=e.attr,a=e.size,s=e.title,o=c(e,["attr","size","title"]),u=a||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:r,style:l(l({color:e.color||n.color},n.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&t.createElement("title",null,s),e.children)};return void 0!==a?t.createElement(a.Consumer,null,(function(e){return n(e)})):n(i)}}},function(e){e.O(0,[260,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);