/*! For license information please see af81b72f.3b3b38ab.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[714158],{187113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(824246),o=n(511151);const i={id:"index",title:"Intro to plugins",description:"Documentation on Introduction to Plugins"},a=void 0,u={unversionedId:"plugins/index",id:"plugins/index",title:"Intro to plugins",description:"Documentation on Introduction to Plugins",source:"@site/../docs/plugins/index.md",sourceDirName:"plugins",slug:"/plugins/",permalink:"/docs/plugins/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Intro to plugins",description:"Documentation on Introduction to Plugins"},sidebar:"docs",previous:{title:"Org Data",permalink:"/docs/integrations/ldap/org"},next:{title:"Existing plugins",permalink:"/docs/plugins/existing-plugins"}},s={},c=[{value:"Creating a plugin",id:"creating-a-plugin",level:2},{value:"Suggesting a plugin",id:"suggesting-a-plugin",level:2},{value:"Integrate into the Software Catalog",id:"integrate-into-the-software-catalog",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",img:"img",h2:"h2"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Backstage is a single-page application composed of a set of plugins."}),"\n",(0,r.jsxs)(t.p,{children:["Our goal for the plugin ecosystem is that the definition of a plugin is flexible\nenough to allow you to expose pretty much any kind of infrastructure or software\ndevelopment tool as a plugin in Backstage. By following strong\n",(0,r.jsx)(t.a,{href:"/docs/dls/design",children:"design guidelines"})," we ensure the overall user experience\nstays consistent between plugins."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"plugin",src:n(242914).Z+"",width:"1552",height:"989"})}),"\n",(0,r.jsx)(t.h2,{id:"creating-a-plugin",children:"Creating a plugin"}),"\n",(0,r.jsxs)(t.p,{children:["To create a plugin, follow the steps outlined ",(0,r.jsx)(t.a,{href:"/docs/plugins/create-a-plugin",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"suggesting-a-plugin",children:"Suggesting a plugin"}),"\n",(0,r.jsxs)(t.p,{children:["If you start developing a plugin that you aim to release as open source, we\nsuggest that you create a\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?labels=plugin&template=plugin_template.md&title=%5BPlugin%5D+THE+PLUGIN+NAME",children:"new Issue"}),".\nThis helps the community know what plugins are in development."]}),"\n",(0,r.jsx)(t.p,{children:"You can also use this process if you have an idea for a good plugin but you hope\nthat someone else will pick up the work."}),"\n",(0,r.jsx)(t.h2,{id:"integrate-into-the-software-catalog",children:"Integrate into the Software Catalog"}),"\n",(0,r.jsxs)(t.p,{children:['If your plugin isn\'t supposed to live as a standalone page, but rather needs to\nbe presented as a part of a Software Catalog (e.g. a separate tab or a card on\nan "Overview" tab), then check out\n',(0,r.jsx)(t.a,{href:"/docs/plugins/integrating-plugin-into-software-catalog",children:"the instruction"})," on how to do it."]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},242914:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/my-plugin_screenshot-f22dc7520c6896fbaeeff8f717227c1b.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))n.call(i,c)&&(u[c]=i[c]);if(t){a=t(i);for(var l=0;l<a.length;l++)r.call(i,a[l])&&(u[a[l]]=i[a[l]])}}return u}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:a.current}}t.jsx=c,t.jsxs=c},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,u=60110,s=60112;t.Suspense=60113;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),a=f("react.provider"),u=f("react.context"),s=f("react.forward_ref"),t.Suspense=f("react.suspense"),c=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}function m(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var b=v.prototype=new m;b.constructor=v,r(b,y.prototype),b.isPureReactComponent=!0;var _={current:null},w=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,i={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,r)&&!j.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:_.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===r?"."+S(s,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),C(a,t,n,"",(function(e){return e}))):null!=a&&(x(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=r+S(u=e[c],c);s+=C(u,t,n,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(u=e.next()).done;)s+=C(u=u.value,t,n,l=r+S(u,c++),a);else if("object"===u)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function E(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function I(){var e=$.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var i=r({},e.props),a=e.key,u=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,s=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!j.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){c=Array(l);for(var f=0;f<l;f++)c[f]=arguments[f+2];i.children=c}return{$$typeof:o,type:e.type,key:a,ref:u,props:i,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return I().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,n){return I().useReducer(e,t,n)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>u,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function u({components:e,children:t,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:u},t)}}}]);