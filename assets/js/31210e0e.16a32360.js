/*! For license information please see 31210e0e.16a32360.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[729327],{626415:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=t(824246),o=t(511151);const c={id:"plugin-auth-backend.cloudflareaccessresult",title:"CloudflareAccessResult",description:"API reference for CloudflareAccessResult"},u=void 0,a={unversionedId:"reference/plugin-auth-backend.cloudflareaccessresult",id:"reference/plugin-auth-backend.cloudflareaccessresult",title:"CloudflareAccessResult",description:"API reference for CloudflareAccessResult",source:"@site/../docs/reference/plugin-auth-backend.cloudflareaccessresult.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.cloudflareaccessresult",permalink:"/docs/reference/plugin-auth-backend.cloudflareaccessresult",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend.cloudflareaccessresult.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.cloudflareaccessresult",title:"CloudflareAccessResult",description:"API reference for CloudflareAccessResult"}},s={},l=[];function i(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-backend.cloudflareaccessresult",children:(0,n.jsx)(r.code,{children:"CloudflareAccessResult"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type CloudflareAccessResult = {\n    claims: CloudflareAccessClaims;\n    cfIdentity: CloudflareAccessIdentityProfile;\n    expiresInSeconds?: number;\n    token: string;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.b,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-backend.cloudflareaccessclaims",children:"CloudflareAccessClaims"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-backend.cloudflareaccessidentityprofile",children:"CloudflareAccessIdentityProfile"})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,u,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in c=Object(arguments[s]))t.call(c,l)&&(a[l]=c[l]);if(r){u=r(c);for(var i=0;i<u.length;i++)n.call(c,u[i])&&(a[u[i]]=c[u[i]])}}return a}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,c={},l=null,i=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,n)&&!s.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:i,props:c,_owner:u.current}}r.jsx=l,r.jsxs=l},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var u=60109,a=60110,s=60112;r.Suspense=60113;var l=60115,i=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),u=f("react.provider"),a=f("react.context"),s=f("react.forward_ref"),r.Suspense=f("react.suspense"),l=f("react.memo"),i=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function m(){}function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var g=v.prototype=new m;g.constructor=v,n(g,b.prototype),g.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,t){var n,c={},u=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(u=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(c[n]=r[n]);var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){for(var l=Array(s),i=0;i<s;i++)l[i]=arguments[i+2];c.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===c[n]&&(c[n]=s[n]);return{$$typeof:o,type:e,key:u,ref:a,props:c,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function x(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case c:s=!0}}if(s)return u=u(s=e),e=""===n?"."+x(s,0):n,Array.isArray(u)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),S(u,r,t,"",(function(e){return e}))):null!=u&&(O(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,t+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),r.push(u)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var i=n+x(a=e[l],l);s+=S(a,r,t,i,u)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),l=0;!(a=e.next()).done;)s+=S(a=a.value,r,t,i=n+x(a,l++),u);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function R(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function A(){var e=P.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:R,forEach:function(e,r,t){R(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return R(e,(function(){r++})),r},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=b,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var c=n({},e.props),u=e.key,a=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,s=_.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(i in r)j.call(r,i)&&!k.hasOwnProperty(i)&&(c[i]=void 0===r[i]&&void 0!==l?l[i]:r[i])}var i=arguments.length-2;if(1===i)c.children=t;else if(1<i){l=Array(i);for(var f=0;f<i;f++)l[f]=arguments[f+2];c.children=l}return{$$typeof:o,type:e.type,key:u,ref:a,props:c,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:i,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return A().useCallback(e,r)},r.useContext=function(e,r){return A().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return A().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return A().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return A().useLayoutEffect(e,r)},r.useMemo=function(e,r){return A().useMemo(e,r)},r.useReducer=function(e,r,t){return A().useReducer(e,r,t)},r.useRef=function(e){return A().useRef(e)},r.useState=function(e){return A().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||u:c(e),n.createElement(o.Provider,{value:a},r)}}}]);