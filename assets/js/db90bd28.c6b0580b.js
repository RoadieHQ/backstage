/*! For license information please see db90bd28.c6b0580b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[709779],{479020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(824246),a=n(511151);const s={id:"v1.16.0",title:"v1.16.0",description:"Backstage Release v1.16.0"},i=void 0,o={unversionedId:"releases/v1.16.0",id:"releases/v1.16.0",title:"v1.16.0",description:"Backstage Release v1.16.0",source:"@site/../docs/releases/v1.16.0.md",sourceDirName:"releases",slug:"/releases/v1.16.0",permalink:"/docs/releases/v1.16.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.16.0.md",tags:[],version:"current",frontMatter:{id:"v1.16.0",title:"v1.16.0",description:"Backstage Release v1.16.0"},sidebar:"releases",next:{title:"v1.15.0",permalink:"/docs/releases/v1.15.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Continued support for Material-UI V5",id:"continued-support-for-material-ui-v5",level:3},{value:"More plugins support the new Backend System",id:"more-plugins-support-the-new-backend-system",level:3},{value:"<strong>BREAKING</strong>: <code>@backstage/plugin-catalog-backend-module-incremental-ingestion</code>",id:"breaking-backstageplugin-catalog-backend-module-incremental-ingestion",level:3},{value:"<strong>BREAKING</strong>: <code>@backstage/plugin-scaffolder-backend-module-confluence-to-markdown</code>",id:"breaking-backstageplugin-scaffolder-backend-module-confluence-to-markdown",level:3},{value:"<code>@backstage/plugin-lighthouse</code>",id:"backstageplugin-lighthouse",level:3},{value:"<code>@backstage/plugin-home</code>",id:"backstageplugin-home",level:3},{value:"<code>@backstage/plugin-search</code>",id:"backstageplugin-search",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",strong:"strong"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["These are the release notes for the v1.16.0 release of ",(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for their hard work in getting this release developed and done. A little smaller release this time with the Summer Holidays, hope you\u2019re all having some deserved time off also!"}),"\n",(0,r.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(t.h3,{id:"continued-support-for-material-ui-v5",children:"Continued support for Material-UI V5"}),"\n",(0,r.jsx)(t.p,{children:"There have been some more tweaks here or there to types and the theme system to ensure a smooth future migration toward Material-UI version 5. This should be mostly transparent to adopters, but please let us know if you encounter any oddities around the theme system after upgrading to this release."}),"\n",(0,r.jsx)(t.h3,{id:"more-plugins-support-the-new-backend-system",children:"More plugins support the new Backend System"}),"\n",(0,r.jsxs)(t.p,{children:["There\u2019s been some more plugins that have been ported across to using the new ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/",children:"Backend System"}),". They are as follows:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@backstage/plugin-adr-backend"})," - Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/angeliski",children:"@angeliski"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18377",children:"#18377"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@backstage/plugin-airbrake-backend"})," - Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/anicke",children:"@anicke"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18598",children:"#18598"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@backstage/plugin-azure-devops-backend"})," - Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/awanlin",children:"@awanlin"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18320",children:"#18320"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@backstage/plugin-badges-backend"})," - Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/awanlin",children:"@awanlin"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18464",children:"#18464"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@backstage/plugin-devtools-backend"})," - Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/awanlin",children:"@awanlin"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18320",children:"#18320"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@backstage/plugin-linguist-backend"})," - Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/awanlin",children:"@awanlin"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18320",children:"#18320"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@backstage/plugin-entity-feedback-backend"})," - Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/anicke",children:"@anicke"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18361",children:"#18361"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@backstage/plugin-lighthouse-backend"})," - Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/jroebu14",children:"@jroebu14"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18633",children:"#18633"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Stay tuned for more updates on the future of the Backend System as we move to make this a stable API!"}),"\n",(0,r.jsxs)(t.h3,{id:"breaking-backstageplugin-catalog-backend-module-incremental-ingestion",children:[(0,r.jsx)(t.strong,{children:"BREAKING"}),": ",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-incremental-ingestion"})]}),"\n",(0,r.jsx)(t.p,{children:"Incremental event handlers are now async by default, and their response shape has been changed to allow further extension."}),"\n",(0,r.jsxs)(t.p,{children:["Instead of returning ",(0,r.jsx)(t.code,{children:"null"})," or ",(0,r.jsx)(t.code,{children:"undefined"})," from an event handler to indicate no-oop, instead return the value ",(0,r.jsx)(t.code,{children:'{ type: "ignored" }'}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/cowboyd",children:"@cowboyd"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18216",children:"#18216"})]}),"\n",(0,r.jsxs)(t.h3,{id:"breaking-backstageplugin-scaffolder-backend-module-confluence-to-markdown",children:[(0,r.jsx)(t.strong,{children:"BREAKING"}),": ",(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-confluence-to-markdown"})]}),"\n",(0,r.jsxs)(t.p,{children:["The configuration has been changed and the authentication property of ",(0,r.jsx)(t.code,{children:"confluence.auth"})," is now an ",(0,r.jsx)(t.code,{children:"object"})," instead to allow further evolution."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/jsundquist",children:"@jsundquist"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18583",children:"#18583"})]}),"\n",(0,r.jsx)(t.h3,{id:"backstageplugin-lighthouse",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-lighthouse"})}),"\n",(0,r.jsx)(t.p,{children:"Added more verbose component for when no audits for a website corresponding to the provided url were found."}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/Zaperex",children:"@Zaperex"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18399",children:"#18399"})]}),"\n",(0,r.jsx)(t.h3,{id:"backstageplugin-home",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-home"})}),"\n",(0,r.jsxs)(t.p,{children:["A reference to material-ui\u2019s dependency has been updated from ",(0,r.jsx)(t.code,{children:"@rjsf/material-ui"})," to ",(0,r.jsx)(t.code,{children:"@rjsf/material-ui-v5"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/mario-mui",children:"@mario-mui"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18432",children:"#18432"})]}),"\n",(0,r.jsxs)(t.p,{children:["It is now possible to customize the settings widget for different properties by using the",(0,r.jsx)(t.code,{children:"uiSchema"})," property."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/ivangonzalezacuna",children:"@ivangonzalezacuna"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18574",children:"#18574"})]}),"\n",(0,r.jsx)(t.h3,{id:"backstageplugin-search",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search"})}),"\n",(0,r.jsxs)(t.p,{children:["Fixed bug in ",(0,r.jsx)(t.code,{children:"View Full Results"})," link of Search Modal that did not navigate to the full results page."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/ciprianna",children:"@ciprianna"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18407",children:"#18407"})]}),"\n",(0,r.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,r.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,r.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,r.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage's ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.16.0-changelog.md",children:"Changelog"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage ",(0,r.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,r.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Sign up for our ",(0,r.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var s,i,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in s=Object(arguments[c]))n.call(s,l)&&(o[l]=s[l]);if(t){i=t(s);for(var u=0;u<i.length;u++)r.call(s,i[u])&&(o[i[u]]=s[i[u]])}}return o}},371426:(e,t,n)=>{n(862525);var r=n(827378),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),t.Fragment=s("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:u,props:s,_owner:i.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),a=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,o=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),s=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),i=d("react.provider"),o=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function m(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var y=k.prototype=new m;y.constructor=k,r(y,b.prototype),y.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,s={},i=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!v.hasOwnProperty(r)&&(s[r]=t[r]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===s[r]&&(s[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:o,props:s,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case s:c=!0}}if(c)return i=i(c=e),e=""===r?"."+S(c,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),O(i,t,n,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+S(o=e[l],l);c+=O(o,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)c+=O(o=o.value,t,n,u=r+S(o,l++),i);else if("object"===o)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function R(e,t,n){if(null==e)return e;var r=[],a=0;return O(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var B={current:null};function P(){var e=B.current;if(null===e)throw Error(p(321));return e}var $={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=b,t.PureComponent=k,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var s=r({},e.props),i=e.key,o=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,c=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)x.call(t,u)&&!v.hasOwnProperty(u)&&(s[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:a,type:e.type,key:i,ref:o,props:s,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:o,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return P().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,n){return P().useReducer(e,t,n)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>s});var r=n(667294);const a=r.createContext({});function s(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:s(e),r.createElement(a.Provider,{value:o},t)}}}]);