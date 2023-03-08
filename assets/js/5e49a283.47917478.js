/*! For license information please see 5e49a283.47917478.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[787742],{603905:(r,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>y});var n=t(667294);function o(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function a(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function c(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function u(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var i=n.createContext({}),l=function(r){var e=n.useContext(i),t=e;return r&&(t="function"==typeof r?r(e):c(c({},e),r)),t},s=function(r){var e=l(r.components);return n.createElement(i.Provider,{value:e},r.children)},f="mdxType",p={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(r,e){var t=r.components,o=r.mdxType,a=r.originalType,i=r.parentName,s=u(r,["components","mdxType","originalType","parentName"]),f=l(t),d=o,y=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(y,c(c({ref:e},s),{},{components:t})):n.createElement(y,c({ref:e},s))}));function y(r,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof r||o){var a=t.length,c=new Array(a);c[0]=d;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=r,u[f]="string"==typeof r?r:o,c[1]=u;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},802432:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>s});t(827378);var n=t(603905);function o(){return o=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},o.apply(this,arguments)}function a(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}const c={id:"errors.forwardederror._constructor_",title:"ForwardedError.(constructor)",description:"API reference for ForwardedError.(constructor)"},u=void 0,i={unversionedId:"reference/errors.forwardederror._constructor_",id:"reference/errors.forwardederror._constructor_",title:"ForwardedError.(constructor)",description:"API reference for ForwardedError.(constructor)",source:"@site/../docs/reference/errors.forwardederror._constructor_.md",sourceDirName:"reference",slug:"/reference/errors.forwardederror._constructor_",permalink:"/docs/reference/errors.forwardederror._constructor_",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/errors.forwardederror._constructor_.md",tags:[],version:"current",frontMatter:{id:"errors.forwardederror._constructor_",title:"ForwardedError.(constructor)",description:"API reference for ForwardedError.(constructor)"}},l={},s=[{value:"Parameters",id:"parameters",level:2}],f={toc:s};function p(r){var{components:e}=r,t=a(r,["components"]);return(0,n.kt)("wrapper",o({},f,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/errors"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/errors"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/errors.forwardederror"}),(0,n.kt)("inlineCode",{parentName:"a"},"ForwardedError"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/errors.forwardederror._constructor_"}),(0,n.kt)("inlineCode",{parentName:"a"},"(constructor)"))),(0,n.kt)("p",null,"Constructs a new instance of the ",(0,n.kt)("inlineCode",{parentName:"p"},"ForwardedError")," class"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"constructor(message: string, cause: Error | unknown);\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"cause"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Error ","|"," unknown"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))))}p.isMDXComponent=!0},862525:r=>{var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(r,a){for(var c,u,i=o(r),l=1;l<arguments.length;l++){for(var s in c=Object(arguments[l]))t.call(c,s)&&(i[s]=c[s]);if(e){u=e(c);for(var f=0;f<u.length;f++)n.call(c,u[f])&&(i[u[f]]=c[u[f]])}}return i}},541535:(r,e,t)=>{var n=t(862525),o=60103,a=60106;var c=60109,u=60110,i=60112;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),c=f("react.provider"),u=f("react.context"),i=f("react.forward_ref"),f("react.suspense"),l=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(r){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+r,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+r+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function b(r,e,t){this.props=r,this.context=e,this.refs=m,this.updater=t||y}function g(){}function h(r,e,t){this.props=r,this.context=e,this.refs=m,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(r,e){if("object"!=typeof r&&"function"!=typeof r&&null!=r)throw Error(d(85));this.updater.enqueueSetState(this,r,e,"setState")},b.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")},g.prototype=b.prototype;var v=h.prototype=new g;v.constructor=h,n(v,b.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(r,e,t){var n,a={},c=null,u=null;if(null!=e)for(n in void 0!==e.ref&&(u=e.ref),void 0!==e.key&&(c=""+e.key),e)w.call(e,n)&&!O.hasOwnProperty(n)&&(a[n]=e[n]);var i=arguments.length-2;if(1===i)a.children=t;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];a.children=l}if(r&&r.defaultProps)for(n in i=r.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:r,key:c,ref:u,props:a,_owner:k.current}}function _(r){return"object"==typeof r&&null!==r&&r.$$typeof===o}var P=/\/+/g;function N(r,e){return"object"==typeof r&&null!==r&&null!=r.key?function(r){var e={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,(function(r){return e[r]}))}(""+r.key):e.toString(36)}function E(r,e,t,n,c){var u=typeof r;"undefined"!==u&&"boolean"!==u||(r=null);var i=!1;if(null===r)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(r.$$typeof){case o:case a:i=!0}}if(i)return c=c(i=r),r=""===n?"."+N(i,0):n,Array.isArray(c)?(t="",null!=r&&(t=r.replace(P,"$&/")+"/"),E(c,e,t,"",(function(r){return r}))):null!=c&&(_(c)&&(c=function(r,e){return{$$typeof:o,type:r.type,key:e,ref:r.ref,props:r.props,_owner:r._owner}}(c,t+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+r)),e.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(r))for(var l=0;l<r.length;l++){var s=n+N(u=r[l],l);i+=E(u,e,t,s,c)}else if(s=function(r){return null===r||"object"!=typeof r?null:"function"==typeof(r=p&&r[p]||r["@@iterator"])?r:null}(r),"function"==typeof s)for(r=s.call(r),l=0;!(u=r.next()).done;)i+=E(u=u.value,e,t,s=n+N(u,l++),c);else if("object"===u)throw e=""+r,Error(d(31,"[object Object]"===e?"object with keys {"+Object.keys(r).join(", ")+"}":e));return i}function S(r,e,t){if(null==r)return r;var n=[],o=0;return E(r,n,"","",(function(r){return e.call(t,r,o++)})),n}function C(r){if(-1===r._status){var e=r._result;e=e(),r._status=0,r._result=e,e.then((function(e){0===r._status&&(e=e.default,r._status=1,r._result=e)}),(function(e){0===r._status&&(r._status=2,r._result=e)}))}if(1===r._status)return r._result;throw r._result}var x={current:null};function F(){var r=x.current;if(null===r)throw Error(d(321));return r}},827378:(r,e,t)=>{t(541535)}}]);