(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{4651:function(n,r,e){"use strict";e.d(r,{Ee:function(){return h}});var i=e(6052),t=e(5031),a=e(7294),s=e(4697);function c(){return c=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},c.apply(this,arguments)}function l(n,r){if(null==n)return{};var e,i,t={},a=Object.keys(n);for(i=0;i<a.length;i++)e=a[i],r.indexOf(e)>=0||(t[e]=n[e]);return t}var o=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=a.forwardRef((function(n,r){var e=n.htmlWidth,i=n.htmlHeight,t=n.alt,s=l(n,o);return a.createElement("img",c({width:e,height:i,ref:r,alt:t},s))})),h=(0,i.Gp)((function(n,r){var e=n.fallbackSrc,o=n.fallback,h=n.src,f=n.srcSet,x=n.align,m=n.fit,j=n.loading,g=n.ignoreFallback,p=n.crossOrigin,b=l(n,u),v=null!=j||g||void 0===e&&void 0===o,k=function(n){var r=n.loading,e=n.src,i=n.srcSet,t=n.onLoad,c=n.onError,l=n.crossOrigin,o=n.sizes,u=n.ignoreFallback,d=(0,a.useState)("pending"),h=d[0],f=d[1];(0,a.useEffect)((function(){f(e?"loading":"pending")}),[e]);var x=(0,a.useRef)(),m=(0,a.useCallback)((function(){if(e){j();var n=new Image;n.src=e,l&&(n.crossOrigin=l),i&&(n.srcset=i),o&&(n.sizes=o),r&&(n.loading=r),n.onload=function(n){j(),f("loaded"),null==t||t(n)},n.onerror=function(n){j(),f("failed"),null==c||c(n)},x.current=n}}),[e,l,i,o,t,c,r]),j=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,s.a)((function(){if(!u)return"loading"===h&&m(),function(){j()}}),[h,m,u]),u?"loaded":h}(c({},n,{ignoreFallback:v})),w=c({ref:r,objectFit:m,objectPosition:x},v?b:(0,t.CE)(b,["onError","onLoad"]));return"loaded"!==k?o||a.createElement(i.m$.img,c({as:d,className:"chakra-image__placeholder",src:e},w)):a.createElement(i.m$.img,c({as:d,src:h,srcSet:f,crossOrigin:p,loading:j,className:"chakra-image"},w))}));t.Ts&&(h.displayName="Image")},2509:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/jframeapp",function(){return e(2310)}])},8598:function(n,r,e){"use strict";e.d(r,{Et:function(){return d},P4:function(){return u},Pg:function(){return h}});var i=e(5893),t=e(1664),a=e.n(t),s=e(5675),c=e.n(s),l=e(8527),o=e(917),u=function(n){var r=n.children,e=n.href,t=n.title,a=n.thumbnail;return(0,i.jsx)(l.xu,{w:"100%",align:"center",children:(0,i.jsxs)(l.fG,{cursor:"pointer",children:[(0,i.jsx)(c(),{src:a,alt:t,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,i.jsx)(l.AB,{href:e,target:"_blank",children:(0,i.jsx)(l.xv,{mt:2,children:t})}),(0,i.jsx)(l.xv,{fontSize:14,children:r})]})})},d=function(n){var r=n.children,e=n.id,t=n.title,s=n.thumbnail;return(0,i.jsx)(l.xu,{w:"100%",align:"center",children:(0,i.jsx)(a(),{href:"/works/".concat(e),passHref:!0,children:(0,i.jsxs)(l.fG,{cursor:"pointer",children:[(0,i.jsx)(c(),{src:s,alt:t,className:"grid-item-thumbnail",placeholder:"blur"}),(0,i.jsx)(l.AB,{href:"/works/".concat(e),children:(0,i.jsx)(l.xv,{mt:2,fontSize:20,children:t})}),(0,i.jsx)(l.xv,{fontSize:14,children:r})]})})})},h=function(){return(0,i.jsx)(o.xB,{styles:"\n  .grid-item-thumbnail {\n    border-radius: 12px;\n  }\n  "})}},951:function(n,r,e){"use strict";var i=e(5893),t=e(8816),a=e(9008),s=e(8598),c={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:20}};r.Z=function(n){var r=n.children,e=n.title;return(0,i.jsx)(t.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,i.jsxs)(i.Fragment,{children:[e&&(0,i.jsx)(a.default,{children:(0,i.jsxs)("title",{children:[e," - Dimas Tri Mustakim"]})}),r,(0,i.jsx)(s.Pg,{})]})})}},5930:function(n,r,e){"use strict";function i(){var n,r,e=(n=["\n  text-align: justify;\n  text-indent: 1em;\n"],r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}})));return i=function(){return e},e}var t=e(5934).Z.p(i());r.Z=t},8808:function(n,r,e){"use strict";e.d(r,{Dx:function(){return o},WZ:function(){return u},h_:function(){return d}});var i=e(5893),t=e(1664),a=e.n(t),s=e(8527),c=e(4651),l=e(9876),o=function(n){var r=n.children;return(0,i.jsxs)(s.xu,{children:[(0,i.jsx)(a(),{href:"/works",passHref:!0,children:(0,i.jsx)(s.rU,{children:"Works"})}),(0,i.jsxs)("span",{children:["\xa0",(0,i.jsx)(l.XC,{}),"\xa0"]}),(0,i.jsx)(s.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r})]})},u=function(n){var r=n.src,e=n.alt;return(0,i.jsx)(c.Ee,{borderRadius:"lg",w:"full",src:r,alt:e,mb:4})},d=function(n){var r=n.children;return(0,i.jsx)(s.Ct,{colorScheme:"green",mr:2,children:r})}},2310:function(n,r,e){"use strict";e.r(r);var i=e(5893),t=e(8527),a=e(9876),s=e(8808),c=e(5930),l=e(951);r.default=function(){return(0,i.jsx)(l.Z,{title:"Simple JFrame GUI App for managing cow sales",children:(0,i.jsxs)(t.W2,{children:[(0,i.jsxs)(s.Dx,{children:["GUI App Manajemen Sapi Qurban ",(0,i.jsx)(t.Ct,{children:"2021"})]}),(0,i.jsx)(c.Z,{children:"My first ever GUI app written in Java using JFrame. It is used to manage cow sales for qurban. It stores the data to a file using Serializable."}),(0,i.jsxs)(t.aV,{ml:4,my:4,children:[(0,i.jsxs)(t.HC,{children:[(0,i.jsx)(s.h_,{children:"Source Code On Github"}),(0,i.jsxs)(t.rU,{href:"https://github.com/tridims/Aplikasi-Manajemen-Penjualan-Sapi-Qurban",children:["https://github.com/tridims/Aplikasi-Manajemen-Penjualan-Sapi-Qurban"," ",(0,i.jsx)(a.h0,{mx:"2px"})]})]}),(0,i.jsxs)(t.HC,{children:[(0,i.jsx)(s.h_,{children:"Platform"}),(0,i.jsx)("span",{children:"Windows/Linux/macOS"})]}),(0,i.jsxs)(t.HC,{children:[(0,i.jsx)(s.h_,{children:"Stack"}),(0,i.jsx)("span",{children:"Java, OOP, JFrame"})]})]}),(0,i.jsx)(s.WZ,{src:"/images/works/ThumbJFrameApp.png",alt:"JFrameApp"})]})})}}},function(n){n.O(0,[774,888,179],(function(){return r=2509,n(n.s=r);var r}));var r=n.O();_N_E=r}]);