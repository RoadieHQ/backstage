/*! For license information please see 5c39b56c.4b3df0ce.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[526839],{958357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>u,toc:()=>a});var n=r(824246),i=r(511151);const o={id:"plugin-cicd-statistics.cicddefaults.hidelimit",title:"CicdDefaults.hideLimit",description:"API reference for CicdDefaults.hideLimit"},c=void 0,u={unversionedId:"reference/plugin-cicd-statistics.cicddefaults.hidelimit",id:"reference/plugin-cicd-statistics.cicddefaults.hidelimit",title:"CicdDefaults.hideLimit",description:"API reference for CicdDefaults.hideLimit",source:"@site/../docs/reference/plugin-cicd-statistics.cicddefaults.hidelimit.md",sourceDirName:"reference",slug:"/reference/plugin-cicd-statistics.cicddefaults.hidelimit",permalink:"/docs/reference/plugin-cicd-statistics.cicddefaults.hidelimit",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-cicd-statistics.cicddefaults.hidelimit.md",tags:[],version:"current",frontMatter:{id:"plugin-cicd-statistics.cicddefaults.hidelimit",title:"CicdDefaults.hideLimit",description:"API reference for CicdDefaults.hideLimit"}},s={},a=[];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-cicd-statistics"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.cicddefaults",children:(0,n.jsx)(t.code,{children:"CicdDefaults"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.cicddefaults.hidelimit",children:(0,n.jsx)(t.code,{children:"hideLimit"})})]}),"\n",(0,n.jsx)(t.p,{children:"Default hide stages with a max-duration below this value"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.b,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"hideLimit: number;\n"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,c,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var a in o=Object(arguments[s]))r.call(o,a)&&(u[a]=o[a]);if(t){c=t(o);for(var f=0;f<c.length;f++)n.call(o,c[f])&&(u[c[f]]=o[c[f]])}}return u}},371426:(e,t,r)=>{r(862525);var n=r(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,o={},a=null,f=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(f=t.ref),t)u.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:a,ref:f,props:o,_owner:c.current}}t.jsx=a,t.jsxs=a},541535:(e,t,r)=>{var n=r(862525),i=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,u=60110,s=60112;t.Suspense=60113;var a=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;i=l("react.element"),o=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),c=l("react.provider"),u=l("react.context"),s=l("react.forward_ref"),t.Suspense=l("react.suspense"),a=l("react.memo"),f=l("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var _=g.prototype=new v;_.constructor=g,n(_,m.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:b.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case o:s=!0}}if(s)return c=c(s=e),e=""===n?"."+x(s,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),S(c,t,r,"",(function(e){return e}))):null!=c&&(k(c)&&(c=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),t.push(c)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=n+x(u=e[a],a);s+=S(u,t,r,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(u=e.next()).done;)s+=S(u=u.value,t,r,f=n+x(u,a++),c);else if("object"===u)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function E(e,t,r){if(null==e)return e;var n=[],i=0;return S(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(p(321));return e}var L={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var o=n({},e.props),c=e.key,u=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,s=b.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in t)j.call(t,f)&&!w.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==a?a[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){a=Array(f);for(var l=0;l<f;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:i,type:e.type,key:c,ref:u,props:o,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:a,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>u,ah:()=>o});var n=r(667294);const i=n.createContext({});function o(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function u({components:e,children:t,disableParentContext:r}){let u;return u=r?"function"==typeof e?e({}):e||c:o(e),n.createElement(i.Provider,{value:u},t)}}}]);