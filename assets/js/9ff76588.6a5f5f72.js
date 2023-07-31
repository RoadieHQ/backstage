/*! For license information please see 9ff76588.6a5f5f72.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[944743],{42087:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var t=n(824246),s=n(511151);const c={id:"plugin-kubernetes-backend.kubernetesbuilder",title:"KubernetesBuilder",description:"API reference for KubernetesBuilder"},d=void 0,i={unversionedId:"reference/plugin-kubernetes-backend.kubernetesbuilder",id:"reference/plugin-kubernetes-backend.kubernetesbuilder",title:"KubernetesBuilder",description:"API reference for KubernetesBuilder",source:"@site/../docs/reference/plugin-kubernetes-backend.kubernetesbuilder.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesbuilder",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.kubernetesbuilder.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend.kubernetesbuilder",title:"KubernetesBuilder",description:"API reference for KubernetesBuilder"}},l={},o=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function u(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder",children:(0,t.jsx)(r.code,{children:"KubernetesBuilder"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.b,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class KubernetesBuilder \n"})}),"\n",(0,t.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Constructor"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder._constructor_",children:"(constructor)(env)"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:["Constructs a new instance of the ",(0,t.jsx)(r.code,{children:"KubernetesBuilder"})," class"]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.env",children:"env"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"readonly"})})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesenvironment",children:"KubernetesEnvironment"})}),(0,t.jsx)(r.td,{})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Method"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.build",children:"build()"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildauthtranslatormap",children:"buildAuthTranslatorMap()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildclustersupplier",children:"buildClusterSupplier(refreshInterval)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildcustomresources",children:"buildCustomResources()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildfetcher",children:"buildFetcher()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildhttpservicelocator",children:"buildHttpServiceLocator(_clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildmultitenantservicelocator",children:"buildMultiTenantServiceLocator(clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildobjectsprovider",children:"buildObjectsProvider(options)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildproxy",children:"buildProxy(logger, clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildrouter",children:"buildRouter(objectsProvider, clusterSupplier, catalogApi, proxy, permissionApi)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildservicelocator",children:"buildServiceLocator(method, clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.createbuilder",children:"createBuilder(env)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"static"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.fetchclusterdetails",children:"fetchClusterDetails(clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getauthtranslatormap",children:"getAuthTranslatorMap()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getclustersupplier",children:"getClusterSupplier()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getfetcher",children:"getFetcher()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getobjectsprovider",children:"getObjectsProvider(options)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getobjecttypestofetch",children:"getObjectTypesToFetch()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getproxy",children:"getProxy(logger, clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getservicelocator",children:"getServiceLocator()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getservicelocatormethod",children:"getServiceLocatorMethod()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setauthtranslatormap",children:"setAuthTranslatorMap(authTranslatorMap)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setclustersupplier",children:"setClusterSupplier(clusterSupplier)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setdefaultclusterrefreshinterval",children:"setDefaultClusterRefreshInterval(refreshInterval)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setfetcher",children:"setFetcher(fetcher)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setobjectsprovider",children:"setObjectsProvider(objectsProvider)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setproxy",children:"setProxy(proxy)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setservicelocator",children:"setServiceLocator(serviceLocator)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]})]})]})]})}const a=function(e={}){const{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(s){return!1}}()?Object.assign:function(e,s){for(var c,d,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var o in c=Object(arguments[l]))n.call(c,o)&&(i[o]=c[o]);if(r){d=r(c);for(var u=0;u<d.length;u++)t.call(c,d[u])&&(i[d[u]]=c[d[u]])}}return i}},371426:(e,r,n)=>{n(862525);var t=n(827378),s=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;s=c("react.element"),r.Fragment=c("react.fragment")}var d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var t,c={},o=null,u=null;for(t in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,t)&&!l.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:s,type:e,key:o,ref:u,props:c,_owner:d.current}}r.jsx=o,r.jsxs=o},541535:(e,r,n)=>{var t=n(862525),s=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var d=60109,i=60110,l=60112;r.Suspense=60113;var o=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),c=a("react.portal"),r.Fragment=a("react.fragment"),r.StrictMode=a("react.strict_mode"),r.Profiler=a("react.profiler"),d=a("react.provider"),i=a("react.context"),l=a("react.forward_ref"),r.Suspense=a("react.suspense"),o=a("react.memo"),u=a("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function j(e,r,n){this.props=e,this.context=r,this.refs=b,this.updater=n||p}function x(){}function k(e,r,n){this.props=e,this.context=r,this.refs=b,this.updater=n||p}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=j.prototype;var y=k.prototype=new x;y.constructor=k,t(y,j.prototype),y.isPureReactComponent=!0;var g={current:null},v=Object.prototype.hasOwnProperty,m={key:!0,ref:!0,__self:!0,__source:!0};function _(e,r,n){var t,c={},d=null,i=null;if(null!=r)for(t in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(d=""+r.key),r)v.call(r,t)&&!m.hasOwnProperty(t)&&(c[t]=r[t]);var l=arguments.length-2;if(1===l)c.children=n;else if(1<l){for(var o=Array(l),u=0;u<l;u++)o[u]=arguments[u+2];c.children=o}if(e&&e.defaultProps)for(t in l=e.defaultProps)void 0===c[t]&&(c[t]=l[t]);return{$$typeof:s,type:e,key:d,ref:i,props:c,_owner:g.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var O=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function w(e,r,n,t,d){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case s:case c:l=!0}}if(l)return d=d(l=e),e=""===t?"."+C(l,0):t,Array.isArray(d)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),w(d,r,n,"",(function(e){return e}))):null!=d&&(S(d)&&(d=function(e,r){return{$$typeof:s,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(d,n+(!d.key||l&&l.key===d.key?"":(""+d.key).replace(O,"$&/")+"/")+e)),r.push(d)),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var o=0;o<e.length;o++){var u=t+C(i=e[o],o);l+=w(i,r,n,u,d)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),o=0;!(i=e.next()).done;)l+=w(i=i.value,r,n,u=t+C(i,o++),d);else if("object"===i)throw r=""+e,Error(f(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function P(e,r,n){if(null==e)return e;var t=[],s=0;return w(e,t,"","",(function(e){return r.call(n,e,s++)})),t}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(f(321));return e}var M={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:P,forEach:function(e,r,n){P(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(f(143));return e}},r.Component=j,r.PureComponent=k,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,r.cloneElement=function(e,r,n){if(null==e)throw Error(f(267,e));var c=t({},e.props),d=e.key,i=e.ref,l=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,l=g.current),void 0!==r.key&&(d=""+r.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in r)v.call(r,u)&&!m.hasOwnProperty(u)&&(c[u]=void 0===r[u]&&void 0!==o?o[u]:r[u])}var u=arguments.length-2;if(1===u)c.children=n;else if(1<u){o=Array(u);for(var a=0;a<u;a++)o[a]=arguments[a+2];c.children=o}return{$$typeof:s,type:e.type,key:d,ref:i,props:c,_owner:l}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},r.createElement=_,r.createFactory=function(e){var r=_.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=S,r.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:o,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>i,ah:()=>c});var t=n(667294);const s=t.createContext({});function c(e){const r=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const d={};function i({components:e,children:r,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||d:c(e),t.createElement(s.Provider,{value:i},r)}}}]);