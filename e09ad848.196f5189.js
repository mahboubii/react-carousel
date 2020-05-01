(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"Highlight",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(1),i=n(6),o=(n(0),n(135)),a=n(149),s={id:"infinity",title:"Infinite Carousel"},l={id:"infinity",title:"Infinite Carousel",description:"Carousel is infinite at default",source:"@site/docs/infinityCarousel.md",permalink:"/react-carousel/docs/infinity",editUrl:"https://github.com/trendyol/react-carousel/edit/master/website/docs/infinityCarousel.md",sidebar:"someSidebar",previous:{title:"Scrolling Carousel",permalink:"/react-carousel/docs/scrolling-carousel-api"},next:{title:"Swipeable Carousel",permalink:"/react-carousel/docs/swipible"}},c=[],u=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"90px 0",display:"block",height:"200px",margin:"16px 16px 16px 0"}}," ",t," ")},f={rightToc:c,Highlight:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Carousel is infinite at default"),Object(o.b)(a.a,{className:"exampleCarousel1",show:3.5,slide:2,transition:.5,mdxType:"Carousel"},Object(o.b)(u,{color:"#f27a1a",mdxType:"Highlight"},"We love Trendyol orange"),Object(o.b)("a",{target:"_blank",href:"https://github.com/trendyol/"},Object(o.b)(u,{color:"#d53f8c",mdxType:"Highlight"},"This is our github")),Object(o.b)(u,{color:"#16be48",mdxType:"Highlight"},"We love Trendyol green"),Object(o.b)("a",{target:"_blank",href:"https://trendyol.com/"},Object(o.b)(u,{color:"#3f51b5",mdxType:"Highlight"},"This is our website"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<Carousel show={3.5} slide={2} transition={0.5}>\n    <Highlight color="#f27a1a">We love Trendyol orange</Highlight>\n    <Highlight color="#d53f8c">This is our github</Highlight>\n    <Highlight color="#16be48">We love Trendyol green</Highlight>\n    <Highlight color="#3f51b5">This is our website</Highlight>\n</Carousel>\n')))}d.isMDXComponent=!0},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},f=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),h=r,p=f["".concat(a,".").concat(h)]||f[h]||d[h]||o;return n?i.a.createElement(p,s({ref:t},c,{components:n})):i.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return x}));var r=n(0),i=n.n(r),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var s="styles-module_carousel-base__3keqD",l="styles-module_item-provider__YgMwz",c="styles-module_item-container__a8zaY",u="styles-module_item-tracker__3bypy",f="styles-module_carousel-arrow__26sRw";a(".styles-module_carousel-base__3keqD {\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\toutline: none;\n}\n\n.styles-module_item-provider__YgMwz {\n\toverflow: hidden;\n\twidth: 100%;\n\tcursor: pointer;\n}\n\n.styles-module_item-container__a8zaY img {\n\t-webkit-user-select: none;\n\t        user-select: none;\n\t-webkit-user-drag: none;\n}\n\n.styles-module_item-tracker__3bypy {\n\theight: 100%;\n\tdisplay: flex;\n}\n\n.styles-module_carousel-arrow__26sRw {\n\tz-index: 1;\n}\n");var d,h=function(e){return i.a.createElement("button",{className:f,onClick:e.onClick,"data-direction":e.direction})};!function(e){e[e.Right=-1]="Right",e[e.Left=1]="Left"}(d||(d={}));var p=function(){function e(e,t){this.arr=e,this.currentIndex=t}return e.prototype.next=function(){var e=this.currentIndex,t=this.arr;return this.currentIndex=e<t.length-1?e+1:0,this.current()},e.prototype.prev=function(){var e=this.currentIndex,t=this.arr;return this.currentIndex=e>0?e-1:t.length-1,this.current()},e.prototype.current=function(){return this.arr[this.currentIndex]},e}(),m=function(e,t,n){return n*e*t},g=function(e,t,n,r){var i=e>t;return n?{left:i,right:i}:{left:i&&0!==r,right:i&&r+t<e}};function b(e){return e.nativeEvent instanceof MouseEvent?e.nativeEvent.pageX:e.nativeEvent instanceof TouchEvent?e.nativeEvent.changedTouches[0].pageX:0}var y=i.a.memo((function(e){var t=Object(r.useState)(200),n=t[0],a=t[1],s=Object(r.useCallback)((function(t){if(null!==t){var n=t.getBoundingClientRect().width/e.show;a(n),e.widthCallBack(n,e.slide)}}),[n]);e.responsive&&function(e){var t=Object(r.useState)(window.innerWidth),n=t[0],i=t[1];Object(r.useLayoutEffect)((function(){var t=function(){var t=n-window.innerWidth;i(window.innerWidth),e(t)};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[])}((function(e){a(n-e)}));var f=Object(r.useState)({initial:e.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0}),h=f[0],p=f[1],m=function(t){t.persist(),p(o(o({},h),{isDown:!0,start:b(t),initial:e.transform,finished:!1}))},g=function(t){if(t.persist(),!h.finished){if(Math.abs(h.drag)<n*e.swipeOn)return e.dragCallback(e.transform),p({initial:e.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0});e.slideCallback(h.drag>0?d.Right:d.Left),p(o(o({},h),{drag:0,isDown:!1,finished:!0,pointers:!0}))}},y=function(e){if(e.persist(),h.isDown){var t=b(e);p(o(o({},h),{drag:h.start-t,pointers:!1}))}},v=e.swiping?{onTouchCancel:g,onTouchEnd:g,onTouchMove:y,onTouchStart:m,onMouseDown:m,onMouseLeave:g,onMouseUp:g,onMouseMove:y}:{};return i.a.createElement("div",{ref:s,className:l},i.a.createElement("div",o({"data-testid":"trackList"},v,{className:u,style:{transform:"translateX("+(e.transform-h.drag)+"px)",transition:"transform "+e.transition+"s ease 0s",width:n*e.items.length}}),e.items.map((function(e,t){return i.a.createElement("div",{key:t,style:{width:n,pointerEvents:h.pointers?"all":"none"},className:c},e)}))))})),v={children:[],show:1,slide:1,transition:.5,swiping:!1,swipeOn:1,responsive:!1,infinite:!0,className:"",useArrowKeys:!1,a11y:{}},w=function(e){var t=o(o({},v),e),n=Object(r.useState)(function(e,t,n){if(!n)return e;for(var r=Array.from(e),i=new p(e,0),o=0;o<t;o++)r.unshift(i.prev());return r}(t.children,t.slide,t.infinite)),a=n[0],l=n[1],c=Object(r.useState)(0),u=c[0],f=c[1],b=Object(r.useState)({transform:0,transition:0,isSliding:!1}),w=b[0],O=b[1],_=Object(r.useState)(0),j=_[0],x=_[1],C=Object(r.useState)(g(t.children.length,t.show,t.infinite,j)),k=C[0],E=C[1],T=function(e,n){if(!(w.isSliding||e===d.Right&&!k.right||e===d.Left&&!k.left)){var r=function(e,t,n,r){var i=e-r*t;return i<0?n+i:n<=i?i-n:i}(j,n,t.children.length,e),i=t.infinite?function(e,t,n,r,i,o){var a=new p(e,n),s=Array.from(t);switch(+o){case d.Left:for(var l=i;l>=0;l--)(i-l<0||!s[l-i])&&s.unshift(a.current()),a.prev();break;case d.Right:for(l=0;l<r+i;l++)s[2*i+l]||s.push(a.current()),a.next()}return s}(t.children,a,r,t.show,n,e):a;t.infinite&&e===d.Right&&l(i),O({transform:w.transform+m(u,n,e),transition:t.transition,isSliding:!0}),x(r),E(g(t.children.length,t.show,t.infinite,r)),setTimeout((function(){t.infinite&&l(function(e,t,n){return n===d.Left?e.slice(0,-1*t):e.slice(t)}(i,n,e)),O({transform:t.infinite?m(u,n,d.Right):w.transform+m(u,n,e),transition:0,isSliding:!1})}),1e3*t.transition)}};return i.a.createElement("div",o({},t.a11y,{"data-testid":"carousel",tabIndex:0},t.useArrowKeys?{onKeyDown:function(e){37===e.keyCode?T(d.Left,t.slide):39===e.keyCode&&T(d.Right,t.slide)}}:{},{className:s+" "+t.className}),k.left&&i.a.createElement(h,{direction:"left",onClick:function(){return T(d.Left,t.slide)}}),i.a.createElement(y,o({},t,{transition:w.transition,items:a,transform:w.transform,slideCallback:function(e){T(e,t.slide)},dragCallback:function(e){O({transform:e,transition:t.transition,isSliding:!1}),setTimeout((function(){return O(o(o({},w),{transition:0}))}),1e3*t.transition)},widthCallBack:function(e,n){f(e),O({transform:t.infinite?m(e,n,d.Right):0,transition:0,isSliding:!1})}})),k.right&&i.a.createElement(h,{direction:"right",onClick:function(){return T(d.Right,t.slide)}}))},O="styles-module_sliderBase__swkx1",_="styles-module_slider__o0fqa",j="styles-module_sliding__3T6T6";a(".styles-module_sliderBase__swkx1 {\n\twidth: 100%;\n\tposition: relative;\n}\n\n.styles-module_slider__o0fqa {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tscrollbar-width: none; /* Firefox 64 */\n\t-ms-overflow-style: none; /* Internet Explorer 11 */\n}\n\n.styles-module_slider__o0fqa::-webkit-scrollbar {\n\t/** WebKit */\n\tdisplay: none;\n}\n\n.styles-module_slider__o0fqa > * {\n\tflex: 0 0 auto;\n}\n\n.styles-module_sliding__3T6T6 > * {\n\tpointer-events: none;\n}\n");var x=function(e){var t=e.children,n=e.className,o=Object(r.useRef)(null),a=Object(r.useState)(!1),s=a[0],l=a[1],c=Object(r.useState)({startX:0,scrollLeft:0}),u=c[0],f=c[1],h=function(){var e=o.current;return{left:!!e&&e.scrollLeft>0,right:!!e&&e.scrollWidth>e.scrollLeft+e.offsetWidth}},p=Object(r.useState)(h()),m=p[0],g=p[1],b=function(e){g(h())},y=Object(r.useCallback)((function(e){null!==e&&(Object.defineProperty(o,"current",{value:e}),g(h()),e.addEventListener("scroll",b))}),[o]),v=function(e){l(!1),g(h()),o.current.classList.remove(j)},w=function(e){var t=function(e){for(var t,n,r=o.current,i=e===d.Left?r.scrollLeft+r.offsetWidth:r.scrollLeft,a=0,s=0,l=Array.from(r.children);s<l.length;s++){var c=l[s],u=(t=c,n=void 0,n=getComputedStyle(t),t.offsetWidth+(parseInt(n.marginLeft,10)||0)+(parseInt(n.marginRight,10)||0));if((a+=u)>=i){var f=e===d.Left?a-i:u;return(r.offsetWidth-f)*e}}return r.offsetWidth}(e),n=o.current.scrollLeft;x(500,t,n)},x=function(e,t,n){for(var r=0,i=0;r<=e;i++)window.setTimeout(C,r,i*t/100+n),r+=e/100},C=function(e){o.current.scrollLeft=e};return i.a.createElement("div",{className:O+" "+n},m.left&&i.a.createElement("div",{"data-arrow":"left"},i.a.createElement("button",{onClick:function(){return w(d.Right)}})),m.right&&i.a.createElement("div",{"data-arrow":"right"},i.a.createElement("button",{onClick:function(){return w(d.Left)}})),i.a.createElement("div",{ref:y,onMouseDown:function(e){l(!0),f({startX:e.pageX-o.current.offsetLeft,scrollLeft:o.current.scrollLeft})},onMouseLeave:v,onMouseUp:v,onMouseMove:function(e){if(s){e.preventDefault(),o.current.classList.add(j);var t=e.pageX-o.current.offsetLeft-u.startX;o.current.scrollLeft=u.scrollLeft-t}},className:_},t))}}}]);