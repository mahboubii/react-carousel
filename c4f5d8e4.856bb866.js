(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{127:function(t,e,n){"use strict";n.r(e);n(1),n(179);var r=n(0),i=n.n(r),s=(n(137),n(141),n(138),n(136),n(139),n(149),n(128),n(142));i.a.Fragment,i.a.Fragment,i.a.Fragment,i.a.Fragment,i.a.Fragment,i.a.Fragment;e.default=function(){return i.a.createElement(s.a,{to:"/react-carousel/docs/installation"})}},149:function(t,e,n){"use strict";n.d(e,"a",(function(){return _})),n.d(e,"b",(function(){return E}));n(150),n(155),n(157),n(164);var r=n(0),i=n.n(r),s=function(){return(s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function o(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var a="styles-module_carousel-base__3keqD",l="styles-module_item-provider__YgMwz",c="styles-module_item-container__a8zaY",u="styles-module_item-tracker__3bypy",f="styles-module_carousel-arrow__26sRw";o(".styles-module_carousel-base__3keqD {\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\toutline: none;\n}\n\n.styles-module_item-provider__YgMwz {\n\toverflow: hidden;\n\twidth: 100%;\n\tcursor: pointer;\n}\n\n.styles-module_item-container__a8zaY img {\n\t-webkit-user-select: none;\n\t        user-select: none;\n\t-webkit-user-drag: none;\n}\n\n.styles-module_item-tracker__3bypy {\n\theight: 100%;\n\tdisplay: flex;\n}\n\n.styles-module_carousel-arrow__26sRw {\n\tz-index: 1;\n}\n");var d,h=function(t){return i.a.createElement("button",{className:f,onClick:t.onClick,"data-direction":t.direction})};!function(t){t[t.Right=-1]="Right",t[t.Left=1]="Left"}(d||(d={}));var m=function(){function t(t,e){this.arr=t,this.currentIndex=e}return t.prototype.next=function(){var t=this.currentIndex,e=this.arr;return this.currentIndex=t<e.length-1?t+1:0,this.current()},t.prototype.prev=function(){var t=this.currentIndex,e=this.arr;return this.currentIndex=t>0?t-1:e.length-1,this.current()},t.prototype.current=function(){return this.arr[this.currentIndex]},t}(),v=function(t,e,n){return n*t*e},g=function(t,e,n,r){var i=t>e;return n?{left:i,right:i}:{left:i&&0!==r,right:i&&r+e<t}};function p(t){return t.nativeEvent instanceof MouseEvent?t.nativeEvent.pageX:t.nativeEvent instanceof TouchEvent?t.nativeEvent.changedTouches[0].pageX:0}var w=function(t){var e=Object(r.useState)(200),n=e[0],o=e[1],a=Object(r.useCallback)((function(e){if(null!==e){var n=e.getBoundingClientRect().width/t.show;o(n),t.widthCallBack(n)}}),[n]);t.responsive&&function(t){var e=Object(r.useState)(window.innerWidth),n=e[0],i=e[1];Object(r.useLayoutEffect)((function(){var e=function(){var e=n-window.innerWidth;i(window.innerWidth),t(e)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[])}((function(t){o(n-t)}));var f=Object(r.useState)({initial:t.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0}),h=f[0],m=f[1],v=function(e){e.persist(),m(s(s({},h),{isDown:!0,start:p(e),initial:t.transform,finished:!1}))},g=function(e){if(e.persist(),!h.finished){if(Math.abs(h.drag)<n*t.swipeOn)return t.dragCallback(t.transform),m({initial:t.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0});t.slideCallback(h.drag>0?d.Right:d.Left),m(s(s({},h),{drag:0,isDown:!1,finished:!0,pointers:!0}))}},w=function(t){if(t.persist(),h.isDown){var e=p(t);m(s(s({},h),{drag:h.start-e,pointers:!1}))}},y=t.swiping?{onTouchCancel:g,onTouchEnd:g,onTouchMove:w,onTouchStart:v,onMouseDown:v,onMouseLeave:g,onMouseUp:g,onMouseMove:w}:{};return i.a.createElement("div",{ref:a,className:l},i.a.createElement("div",s({"data-testid":"trackList"},y,{className:u,style:{transform:"translateX("+(t.transform-h.drag)+"px)",transition:"transform "+t.transition+"s ease 0s",width:n*t.items.length}}),t.items.map((function(t,e){return i.a.createElement("div",{key:e,style:{width:n,pointerEvents:h.pointers?"all":"none"},className:c},t)}))))},y={children:[],show:1,slide:1,transition:.5,swiping:!1,swipeOn:1,responsive:!1,infinite:!0,className:"",useArrowKeys:!1,a11y:{},dynamic:!1},_=function(t){var e=s(s({},y),t),n=Object(r.useState)(function(t,e,n){if(!n)return t;for(var r=Array.from(t),i=new m(t,0),s=0;s<e;s++)r.unshift(i.prev());return r}(e.children,e.slide,e.infinite)),o=n[0],l=n[1],c=Object(r.useState)(0),u=c[0],f=c[1],p=Object(r.useState)({transform:0,transition:0,isSliding:!1}),_=p[0],b=p[1],L=Object(r.useState)(0),k=L[0],E=L[1],x=Object(r.useState)(g(e.children.length,e.show,e.infinite,k)),C=x[0],O=x[1];e.dynamic&&i.a.useEffect((function(){var e=function(t,e){return t.map((function(t){return e.find((function(e){return t.key===e.key}))}))}(o,t.children);l(e)}),t.children);var S=function(t,n){if(!(_.isSliding||t===d.Right&&!C.right||t===d.Left&&!C.left)){var r=function(t,e,n,r){var i=t-r*e;return i<0?n+i:n<=i?i-n:i}(k,n,e.children.length,t),i=e.infinite?function(t,e,n,r,i,s){var o=new m(t,n),a=Array.from(e);switch(+s){case d.Left:for(var l=i;l>=0;l--)(i-l<0||!a[l-i])&&a.unshift(o.current()),o.prev();break;case d.Right:for(l=0;l<r+i;l++)a[2*i+l]||a.push(o.current()),o.next()}return a}(e.children,o,r,e.show,n,t):o;e.infinite&&t===d.Right&&l(i),b({transform:_.transform+v(u,n,t),transition:e.transition,isSliding:!0}),E(r),O(g(e.children.length,e.show,e.infinite,r)),setTimeout((function(){e.infinite&&l(function(t,e,n){return n===d.Left?t.slice(0,-1*e):t.slice(e)}(i,n,t)),b({transform:e.infinite?v(u,n,d.Right):_.transform+v(u,n,t),transition:0,isSliding:!1})}),1e3*e.transition)}};return i.a.createElement("div",s({},e.a11y,{"data-testid":"carousel",tabIndex:0},e.useArrowKeys?{onKeyDown:function(t){37===t.keyCode?S(d.Left,e.slide):39===t.keyCode&&S(d.Right,e.slide)}}:{},{className:a+" "+e.className}),C.left&&i.a.createElement(h,{direction:"left",onClick:function(){return S(d.Left,e.slide)}}),i.a.createElement(w,s({},e,{transition:_.transition,items:o,transform:_.transform,slideCallback:function(t){S(t,e.slide)},dragCallback:function(t){b({transform:t,transition:e.transition,isSliding:!1}),setTimeout((function(){return b(s(s({},_),{transition:0}))}),1e3*e.transition)},widthCallBack:function(t){f(t),b({transform:e.infinite?v(t,e.slide,d.Right):0,transition:0,isSliding:!1})}})),C.right&&i.a.createElement(h,{direction:"right",onClick:function(){return S(d.Right,e.slide)}}))},b="styles-module_sliderBase__swkx1",L="styles-module_slider__o0fqa",k="styles-module_sliding__3T6T6";o(".styles-module_sliderBase__swkx1 {\n\twidth: 100%;\n\tposition: relative;\n}\n\n.styles-module_slider__o0fqa {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tscrollbar-width: none; /* Firefox 64 */\n\t-ms-overflow-style: none; /* Internet Explorer 11 */\n}\n\n.styles-module_slider__o0fqa::-webkit-scrollbar {\n\t/** WebKit */\n\tdisplay: none;\n}\n\n.styles-module_slider__o0fqa > * {\n\tflex: 0 0 auto;\n}\n\n.styles-module_sliding__3T6T6 > * {\n\tpointer-events: none;\n}\n");var E=function(t){var e=t.children,n=t.className,s=Object(r.useRef)(null),o=Object(r.useState)(!1),a=o[0],l=o[1],c=Object(r.useState)({startX:0,scrollLeft:0}),u=c[0],f=c[1],h=function(){var t=s.current;return{left:!!t&&t.scrollLeft>0,right:!!t&&t.scrollWidth>t.scrollLeft+t.offsetWidth}},m=Object(r.useState)(h()),v=m[0],g=m[1],p=function(t){g(h())},w=Object(r.useCallback)((function(t){null!==t&&(Object.defineProperty(s,"current",{value:t}),g(h()),t.addEventListener("scroll",p))}),[s,e]),y=function(t){l(!1),g(h()),s.current.classList.remove(k)},_=function(t){var e=function(t){for(var e,n,r=s.current,i=t===d.Left?r.scrollLeft+r.offsetWidth:r.scrollLeft,o=0,a=0,l=Array.from(r.children);a<l.length;a++){var c=l[a],u=(e=c,n=void 0,n=getComputedStyle(e),e.offsetWidth+(parseInt(n.marginLeft,10)||0)+(parseInt(n.marginRight,10)||0));if((o+=u)>=i){var f=t===d.Left?o-i:u;return(r.offsetWidth-f)*t}}return r.offsetWidth}(t),n=s.current.scrollLeft;E(500,e,n)},E=function(t,e,n){for(var r=0,i=0;r<=t;i++)window.setTimeout(x,r,i*e/100+n),r+=t/100},x=function(t){s.current.scrollLeft=t};return i.a.createElement("div",{className:b+" "+n},v.left&&i.a.createElement("div",{"data-arrow":"left"},i.a.createElement("button",{onClick:function(){return _(d.Right)}})),v.right&&i.a.createElement("div",{"data-arrow":"right"},i.a.createElement("button",{onClick:function(){return _(d.Left)}})),i.a.createElement("div",{ref:w,onMouseDown:function(t){l(!0),f({startX:t.pageX-s.current.offsetLeft,scrollLeft:s.current.scrollLeft})},onMouseLeave:y,onMouseUp:y,onMouseMove:function(t){if(a){t.preventDefault(),s.current.classList.add(k);var e=t.pageX-s.current.offsetLeft-u.startX;s.current.scrollLeft=u.scrollLeft-e}},className:L},e))}}}]);