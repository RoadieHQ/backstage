/*! For license information please see f9ef5dc6.455dc311.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[399717],{276056:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var t=r(824246),c=r(511151);const a={id:"plugin-catalog-backend",title:"@backstage/plugin-catalog-backend",description:"API Reference for @backstage/plugin-catalog-backend"},s=void 0,o={unversionedId:"reference/plugin-catalog-backend",id:"reference/plugin-catalog-backend",title:"@backstage/plugin-catalog-backend",description:"API Reference for @backstage/plugin-catalog-backend",source:"@site/../docs/reference/plugin-catalog-backend.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend",permalink:"/docs/reference/plugin-catalog-backend",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend",title:"@backstage/plugin-catalog-backend",description:"API Reference for @backstage/plugin-catalog-backend"}},l={},i=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-catalog-backend"})})]}),"\n",(0,t.jsx)(n.p,{children:"The Backstage backend plugin that provides the Backstage catalog"}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Class"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.annotatelocationentityprocessor",children:"AnnotateLocationEntityProcessor"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.annotatescmslugentityprocessor",children:"AnnotateScmSlugEntityProcessor"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.builtinkindsentityprocessor",children:"BuiltinKindsEntityProcessor"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:"CatalogBuilder"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"A builder that helps wire up all of the component parts of the catalog."}),(0,t.jsx)(n.p,{children:"The touch points where you can replace or extend behavior are as follows:"}),(0,t.jsx)(n.p,{children:"- Entity policies can be added or replaced. These are automatically run after the processors' pre-processing steps. All policies are given the chance to inspect the entity, and all of them have to pass in order for the entity to be considered valid from an overall point of view. - Location analyzers can be added. These are responsible for analyzing repositories when onboarding them into the catalog, by finding catalog-info.yaml files and other artifacts that can help automatically register or create catalog data on the user's behalf. - Placeholder resolvers can be replaced or added. These run on the raw structured data between the parsing and pre-processing steps, to replace dollar-prefixed entries with their actual values (like $file). - Field format validators can be replaced. These check the format of individual core fields such as metadata.name, to ensure that they adhere to certain rules. - Processors can be added or replaced. These implement the functionality of reading, parsing, validating, and processing the entity data before it is persisted in the catalog."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.codeownersprocessor",children:"CodeOwnersProcessor"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.defaultcatalogcollator",children:"DefaultCatalogCollator"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.filereaderprocessor",children:"FileReaderProcessor"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.locationentityprocessor",children:"LocationEntityProcessor"})}),(0,t.jsx)(n.td,{children:"Legacy processor, should not be used."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.placeholderprocessor",children:"PlaceholderProcessor"})}),(0,t.jsx)(n.td,{children:"Traverses raw entity JSON looking for occurrences of $-prefixed placeholders that it then fills in with actual data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.urlreaderprocessor",children:"UrlReaderProcessor"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.createrandomprocessinginterval",children:"createRandomProcessingInterval(options)"})}),(0,t.jsx)(n.td,{children:"Creates a function that returns a random processing interval between minSeconds and maxSeconds."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.parseentityyaml",children:"parseEntityYaml(data, location)"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Interface"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessingengine",children:"CatalogProcessingEngine"})}),(0,t.jsx)(n.td,{children:"Represents the engine that drives the processing and stitching loops. Some backend instances may choose to not call start, if they focus only on API interactions."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalog_conflicts_topic",children:"CATALOG_CONFLICTS_TOPIC"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.defaultcatalogcollatorentitytransformer",children:"defaultCatalogCollatorEntityTransformer"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.defaultcatalogcollatorfactory",children:"DefaultCatalogCollatorFactory"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.locationspectolocationentity",children:"locationSpecToLocationEntity"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.locationspectometadataname",children:"locationSpecToMetadataName"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.processingresult",children:"processingResult"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type Alias"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.analyzelocationentityfield",children:"AnalyzeLocationEntityField"})}),(0,t.jsx)(n.td,{children:"This is where I get really vague. Something like this perhaps? Or it could be something like a json-schema that contains enough info for the frontend to be able to present a form and explanations"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.analyzelocationexistingentity",children:"AnalyzeLocationExistingEntity"})}),(0,t.jsx)(n.td,{children:"If the folder pointed to already contained catalog info yaml files, they are read and emitted like this so that the frontend can inform the user that it located them and can make sure to register them as well if they weren't already"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.analyzelocationgenerateentity",children:"AnalyzeLocationGenerateEntity"})}),(0,t.jsx)(n.td,{children:"This is some form of representation of what the analyzer could deduce. We should probably have a chat about how this can best be conveyed to the frontend. It'll probably contain a (possibly incomplete) entity, plus enough info for the frontend to know what form data to show to the user for overriding/completing the info."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.analyzelocationrequest",children:"AnalyzeLocationRequest"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.analyzelocationresponse",children:"AnalyzeLocationResponse"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.analyzeoptions",children:"AnalyzeOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogcollatorentitytransformer",children:"CatalogCollatorEntityTransformer"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogenvironment",children:"CatalogEnvironment"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogpermissionruleinput",children:"CatalogPermissionRuleInput"})}),(0,t.jsxs)(n.td,{children:["This is a duplicate of the alpha ",(0,t.jsx)(n.code,{children:"CatalogPermissionRule"})," type, for use in the stable API."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessor",children:"CatalogProcessor"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorcache",children:"CatalogProcessorCache"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessoremit",children:"CatalogProcessorEmit"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorentityresult",children:"CatalogProcessorEntityResult"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorerrorresult",children:"CatalogProcessorErrorResult"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorlocationresult",children:"CatalogProcessorLocationResult"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorparser",children:"CatalogProcessorParser"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorrefreshkeysresult",children:"CatalogProcessorRefreshKeysResult"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorrelationresult",children:"CatalogProcessorRelationResult"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.catalogprocessorresult",children:"CatalogProcessorResult"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.defaultcatalogcollatorfactoryoptions",children:"DefaultCatalogCollatorFactoryOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.deferredentity",children:"DeferredEntity"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.entitiessearchfilter",children:"EntitiesSearchFilter"})}),(0,t.jsx)(n.td,{children:"Matches rows in the search table."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.entityfilter",children:"EntityFilter"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"A filter expression for entities."}),(0,t.jsx)(n.p,{children:"Any (at least one) of the outer sets must match, within which all of the individual filters must match."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.entityprovider",children:"EntityProvider"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.entityproviderconnection",children:"EntityProviderConnection"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.entityprovidermutation",children:"EntityProviderMutation"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.entityrelationspec",children:"EntityRelationSpec"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.locationanalyzer",children:"LocationAnalyzer"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.locationentityprocessoroptions",children:"LocationEntityProcessorOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.locationspec",children:"LocationSpec"})}),(0,t.jsx)(n.td,{children:"Holds the entity location information."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.placeholderprocessoroptions",children:"PlaceholderProcessorOptions"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.placeholderresolver",children:"PlaceholderResolver"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.placeholderresolverparams",children:"PlaceholderResolverParams"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.placeholderresolverread",children:"PlaceholderResolverRead"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.placeholderresolverresolveurl",children:"PlaceholderResolverResolveUrl"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.processingintervalfunction",children:"ProcessingIntervalFunction"})}),(0,t.jsx)(n.td,{children:"Function that returns the catalog processing interval in seconds."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend.scmlocationanalyzer",children:"ScmLocationAnalyzer"})}),(0,t.jsx)(n.td,{})]})]})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(c){return!1}}()?Object.assign:function(e,c){for(var a,s,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var i in a=Object(arguments[l]))r.call(a,i)&&(o[i]=a[i]);if(n){s=n(a);for(var d=0;d<s.length;d++)t.call(a,s[d])&&(o[s[d]]=a[s[d]])}}return o}},371426:(e,n,r)=>{r(862525);var t=r(827378),c=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;c=a("react.element"),n.Fragment=a("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var t,a={},i=null,d=null;for(t in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!l.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:c,type:e,key:i,ref:d,props:a,_owner:s.current}}n.jsx=i,n.jsxs=i},541535:(e,n,r)=>{var t=r(862525),c=60103,a=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var s=60109,o=60110,l=60112;n.Suspense=60113;var i=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;c=h("react.element"),a=h("react.portal"),n.Fragment=h("react.fragment"),n.StrictMode=h("react.strict_mode"),n.Profiler=h("react.profiler"),s=h("react.provider"),o=h("react.context"),l=h("react.forward_ref"),n.Suspense=h("react.suspense"),i=h("react.memo"),d=h("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function x(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}function g(){}function y(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}x.prototype.isReactComponent={},x.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,n,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=x.prototype;var b=y.prototype=new g;b.constructor=y,t(b,x.prototype),b.isPureReactComponent=!0;var m={current:null},k=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,r){var t,a={},s=null,o=null;if(null!=n)for(t in void 0!==n.ref&&(o=n.ref),void 0!==n.key&&(s=""+n.key),n)k.call(n,t)&&!v.hasOwnProperty(t)&&(a[t]=n[t]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var i=Array(l),d=0;d<l;d++)i[d]=arguments[d+2];a.children=i}if(e&&e.defaultProps)for(t in l=e.defaultProps)void 0===a[t]&&(a[t]=l[t]);return{$$typeof:c,type:e,key:s,ref:o,props:a,_owner:m.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var C=/\/+/g;function w(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function E(e,n,r,t,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case c:case a:l=!0}}if(l)return s=s(l=e),e=""===t?"."+w(l,0):t,Array.isArray(s)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),E(s,n,r,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,n){return{$$typeof:c,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),n.push(s)),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var d=t+w(o=e[i],i);l+=E(o,n,r,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),i=0;!(o=e.next()).done;)l+=E(o=o.value,n,r,d=t+w(o,i++),s);else if("object"===o)throw n=""+e,Error(f(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return l}function R(e,n,r){if(null==e)return e;var t=[],c=0;return E(e,t,"","",(function(e){return n.call(r,e,c++)})),t}function O(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function A(){var e=S.current;if(null===e)throw Error(f(321));return e}var T={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:m,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:R,forEach:function(e,n,r){R(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return R(e,(function(){n++})),n},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(f(143));return e}},n.Component=x,n.PureComponent=y,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.cloneElement=function(e,n,r){if(null==e)throw Error(f(267,e));var a=t({},e.props),s=e.key,o=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,l=m.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(d in n)k.call(n,d)&&!v.hasOwnProperty(d)&&(a[d]=void 0===n[d]&&void 0!==i?i[d]:n[d])}var d=arguments.length-2;if(1===d)a.children=r;else if(1<d){i=Array(d);for(var h=0;h<d;h++)i[h]=arguments[h+2];a.children=i}return{$$typeof:c,type:e.type,key:s,ref:o,props:a,_owner:l}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:o,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=P,n.createFactory=function(e){var n=P.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:i,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return A().useCallback(e,n)},n.useContext=function(e,n){return A().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return A().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return A().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return A().useLayoutEffect(e,n)},n.useMemo=function(e,n){return A().useMemo(e,n)},n.useReducer=function(e,n,r){return A().useReducer(e,n,r)},n.useRef=function(e){return A().useRef(e)},n.useState=function(e){return A().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>o,ah:()=>a});var t=r(667294);const c=t.createContext({});function a(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function o({components:e,children:n,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||s:a(e),t.createElement(c.Provider,{value:o},n)}}}]);