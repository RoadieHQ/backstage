/*! For license information please see 5b10bb72.0288d344.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[327419],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),y=o,g=p["".concat(l,".").concat(y)]||p[y]||f[y]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},336857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>p});r(827378);var n=r(603905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"create-a-plugin",title:"Create a Backstage Plugin",description:"Documentation on How to Create a Backstage Plugin"},l=void 0,u={unversionedId:"plugins/create-a-plugin",id:"plugins/create-a-plugin",title:"Create a Backstage Plugin",description:"Documentation on How to Create a Backstage Plugin",source:"@site/../docs/plugins/create-a-plugin.md",sourceDirName:"plugins",slug:"/plugins/create-a-plugin",permalink:"/docs/plugins/create-a-plugin",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/create-a-plugin.md",tags:[],version:"current",frontMatter:{id:"create-a-plugin",title:"Create a Backstage Plugin",description:"Documentation on How to Create a Backstage Plugin"},sidebar:"docs",previous:{title:"Existing plugins",permalink:"/docs/plugins/existing-plugins"},next:{title:"Plugin Development",permalink:"/docs/plugins/plugin-development"}},s={},p=[{value:"Create a Plugin",id:"create-a-plugin",level:2}],f={toc:p};function y(e){var{components:t}=e,c=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,c),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A Backstage Plugin adds functionality to Backstage."),(0,n.kt)("h2",{id:"create-a-plugin"},"Create a Plugin"),(0,n.kt)("p",null,"To create a new plugin, make sure you've run ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn install")," and installed\ndependencies, then run the following on your command line (a shortcut to\ninvoking the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/local-dev/cli-commands#new"},(0,n.kt)("inlineCode",{parentName:"a"},"backstage-cli new --select plugin")),")\nfrom the root of your project."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn new --select plugin\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(988828).Z,width:"454",height:"530"})),(0,n.kt)("p",null,"This will create a new Backstage Plugin based on the ID that was provided. It\nwill be built and added to the Backstage App automatically."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the Backstage App is already running (with ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn start")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn dev"),") you\nshould be able to see the default page for your new plugin directly by\nnavigating to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/my-plugin"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(242914).Z,width:"1552",height:"989"})),(0,n.kt)("p",null,"You can also serve the plugin in isolation by running ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn start")," in the plugin\ndirectory. Or by using the yarn workspace command, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn workspace @backstage/plugin-my-plugin start # Also supports --check\n")),(0,n.kt)("p",null,"This method of serving the plugin provides quicker iteration speed and a faster\nstartup and hot reloads. It is only meant for local development, and the setup\nfor it can be found inside the plugin's ",(0,n.kt)("inlineCode",{parentName:"p"},"dev/")," directory."))}y.isMDXComponent=!0},988828:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-plugin_output-9d6c4192d058ed85c75109a4d907eae6.png"},242914:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/my-plugin_screenshot-f22dc7520c6896fbaeeff8f717227c1b.png"},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,l=o(e),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))r.call(i,s)&&(l[s]=i[s]);if(t){c=t(i);for(var p=0;p<c.length;p++)n.call(i,c[p])&&(l[c[p]]=i[c[p]])}}return l}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var i=60109,c=60110,l=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function b(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||g}function m(){}function h(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var v=h.prototype=new m;v.constructor=h,n(v,b.prototype),v.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===n?"."+_(l,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),S(i,t,r,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=n+_(c=e[u],u);l+=S(c,t,r,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(c=e.next()).done;)l+=S(c=c.value,t,r,s=n+_(c,u++),i);else if("object"===c)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function x(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function D(){var e=N.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);