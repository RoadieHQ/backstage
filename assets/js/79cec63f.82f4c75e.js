/*! For license information please see 79cec63f.82f4c75e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[543111],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,g=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[f]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},928839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"plugin-scaffolder-backend.creategithubrepopushaction",title:"createGithubRepoPushAction()",description:"API reference for createGithubRepoPushAction()"},u=void 0,c={unversionedId:"reference/plugin-scaffolder-backend.creategithubrepopushaction",id:"reference/plugin-scaffolder-backend.creategithubrepopushaction",title:"createGithubRepoPushAction()",description:"API reference for createGithubRepoPushAction()",source:"@site/../docs/reference/plugin-scaffolder-backend.creategithubrepopushaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.creategithubrepopushaction",permalink:"/docs/reference/plugin-scaffolder-backend.creategithubrepopushaction",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.creategithubrepopushaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.creategithubrepopushaction",title:"createGithubRepoPushAction()",description:"API reference for createGithubRepoPushAction()"}},s={},l=[{value:"Parameters",id:"parameters",level:2}],f={toc:l};function p(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-scaffolder-backend"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-scaffolder-backend"))," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-scaffolder-backend.creategithubrepopushaction"}),(0,r.kt)("inlineCode",{parentName:"a"},"createGithubRepoPushAction"))),(0,r.kt)("p",null,"Creates a new action that initializes a git repository of the content in the workspace and publishes it to GitHub."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),'function createGithubRepoPushAction(options: {\n    integrations: ScmIntegrationRegistry;\n    config: Config;\n    githubCredentialsProvider?: GithubCredentialsProvider;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    description?: string | undefined;\n    defaultBranch?: string | undefined;\n    protectDefaultBranch?: boolean | undefined;\n    protectEnforceAdmins?: boolean | undefined;\n    gitCommitMessage?: string | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n    requireCodeOwnerReviews?: boolean | undefined;\n    dismissStaleReviews?: boolean | undefined;\n    bypassPullRequestAllowances?: {\n        users?: string[];\n        teams?: string[];\n        apps?: string[];\n    } | undefined;\n    requiredApprovingReviewCount?: number | undefined;\n    restrictions?: {\n        users: string[];\n        teams: string[];\n        apps?: string[];\n    } | undefined;\n    requiredStatusCheckContexts?: string[] | undefined;\n    requireBranchesToBeUpToDate?: boolean | undefined;\n    requiredConversationResolution?: boolean | undefined;\n    sourcePath?: string | undefined;\n    token?: string | undefined;\n    requiredCommitSigning?: boolean | undefined;\n}>;\n')),(0,r.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"options"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"{ integrations: ",(0,r.kt)("a",o({parentName:"td"},{href:"/docs/reference/integration.scmintegrationregistry"}),"ScmIntegrationRegistry"),"; config: ",(0,r.kt)("a",o({parentName:"td"},{href:"/docs/reference/config.config"}),"Config"),"; githubCredentialsProvider?: ",(0,r.kt)("a",o({parentName:"td"},{href:"/docs/reference/integration.githubcredentialsprovider"}),"GithubCredentialsProvider"),"; }"),(0,r.kt)("td",o({parentName:"tr"},{align:null}))))),(0,r.kt)("b",null,"Returns:"),(0,r.kt)("p",null,'import("@backstage/plugin-scaffolder-node").',(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-scaffolder-node.templateaction"}),"TemplateAction"),"<","{ repoUrl: string; description?: string ","|"," undefined; defaultBranch?: string ","|"," undefined; protectDefaultBranch?: boolean ","|"," undefined; protectEnforceAdmins?: boolean ","|"," undefined; gitCommitMessage?: string ","|"," undefined; gitAuthorName?: string ","|"," undefined; gitAuthorEmail?: string ","|"," undefined; requireCodeOwnerReviews?: boolean ","|"," undefined; dismissStaleReviews?: boolean ","|"," undefined; bypassPullRequestAllowances?: { users?: string","[","]","; teams?: string","[","]","; apps?: string","[","]","; } ","|"," undefined; requiredApprovingReviewCount?: number ","|"," undefined; restrictions?: { users: string","[","]","; teams: string","[","]","; apps?: string","[","]","; } ","|"," undefined; requiredStatusCheckContexts?: string","[","]"," ","|"," undefined; requireBranchesToBeUpToDate?: boolean ","|"," undefined; requiredConversationResolution?: boolean ","|"," undefined; sourcePath?: string ","|"," undefined; token?: string ","|"," undefined; requiredCommitSigning?: boolean ","|"," undefined; }",">"))}p.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,u,c=o(e),s=1;s<arguments.length;s++){for(var l in a=Object(arguments[s]))n.call(a,l)&&(c[l]=a[l]);if(t){u=t(a);for(var f=0;f<u.length;f++)r.call(a,u[f])&&(c[u[f]]=a[u[f]])}}return c}},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;var a=60109,u=60110,c=60112;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),a=f("react.provider"),u=f("react.context"),c=f("react.forward_ref"),f("react.suspense"),s=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function h(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}function m(){}function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var v=y.prototype=new m;v.constructor=y,r(v,h.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,i={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)O.call(t,r)&&!w.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,n,r,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===r?"."+S(c,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),A(a,t,n,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=r+S(u=e[s],s);c+=A(u,t,n,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(u=e.next()).done;)c+=A(u=u.value,t,n,l=r+S(u,s++),a);else if("object"===u)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function N(e,t,n){if(null==e)return e;var r=[],o=0;return A(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function q(){var e=_.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);