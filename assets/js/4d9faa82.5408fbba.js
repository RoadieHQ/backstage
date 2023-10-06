/*! For license information please see 4d9faa82.5408fbba.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[974503],{816319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(824246),r=n(511151);const s={id:"testing",title:"Testing with Jest",description:"Documentation on How to do unit testing with Jest"},o=void 0,l={unversionedId:"plugins/testing",id:"plugins/testing",title:"Testing with Jest",description:"Documentation on How to do unit testing with Jest",source:"@site/../docs/plugins/testing.md",sourceDirName:"plugins",slug:"/plugins/testing",permalink:"/docs/plugins/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/testing.md",tags:[],version:"current",frontMatter:{id:"testing",title:"Testing with Jest",description:"Documentation on How to do unit testing with Jest"},sidebar:"docs",previous:{title:"URL Reader",permalink:"/docs/plugins/url-reader"},next:{title:"Publish private",permalink:"/docs/plugins/publish-private"}},a={},c=[{value:"Running Tests",id:"running-tests",level:2},{value:"Naming Test Files",id:"naming-test-files",level:2},{value:"Third-Party Dependencies",id:"third-party-dependencies",level:2},{value:"Testing Utilities",id:"testing-utilities",level:2},{value:"Writing Unit Tests",id:"writing-unit-tests",level:2},{value:"Bad Unit Test Principle",id:"bad-unit-test-principle",level:3},{value:"Input/Output Principle",id:"inputoutput-principle",level:3},{value:"Blackbox Principle",id:"blackbox-principle",level:3},{value:"Scalability Principle",id:"scalability-principle",level:3},{value:"Increasing Complexity Principle",id:"increasing-complexity-principle",level:3},{value:"Broken Functionality Principle",id:"broken-functionality-principle",level:3},{value:"Example: Loading Indicator",id:"example-loading-indicator",level:3},{value:"Examples",id:"examples",level:2},{value:"Utility Functions",id:"utility-functions",level:3},{value:"Non-React Classes",id:"non-react-classes",level:3},{value:"API Testing Principles",id:"api-testing-principles",level:4},{value:"Mocking API Calls",id:"mocking-api-calls",level:4},{value:"React Components",id:"react-components",level:3},{value:"Working with the React Lifecycle",id:"working-with-the-react-lifecycle",level:4},{value:"Accessing <code>store</code>, <code>theme</code>, routing, browser history, etc",id:"accessing-store-theme-routing-browser-history-etc",level:4},{value:"Debugging Jest Tests",id:"debugging-jest-tests",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",pre:"pre",code:"code",strong:"strong",h3:"h3",blockquote:"blockquote",ul:"ul",li:"li",em:"em",ol:"ol",h4:"h4"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Backstage uses ",(0,i.jsx)(t.a,{href:"https://facebook.github.io/jest/",children:"Jest"})," for all our unit testing\nneeds."]}),"\n",(0,i.jsxs)(t.p,{children:["Jest is a Facebook-built unit testing framework specifically built for React. It\nfollows in the footsteps of other classic Node.js unit testing-related\nframeworks and libraries like ",(0,i.jsx)(t.a,{href:"https://mochajs.org/",children:"Mocha"}),",\n",(0,i.jsx)(t.a,{href:"https://jasmine.github.io/",children:"Jasmine"}),", and ",(0,i.jsx)(t.a,{href:"http://www.chaijs.com/",children:"Chai"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"running-tests",children:"Running Tests"}),"\n",(0,i.jsx)(t.p,{children:"Running all tests:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yarn test\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Running an individual test (e.g. ",(0,i.jsx)(t.code,{children:"MyComponent.test.tsx"}),"):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yarn test MyComponent\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To run both ",(0,i.jsx)(t.code,{children:"MyComponent.test.tsx"})," and ",(0,i.jsx)(t.code,{children:"MyControl.test.tsx"})," suite of tests:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yarn test MyCo\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note: if ",(0,i.jsx)(t.code,{children:"console.logs"})," are not appearing, run only the individual test you are\nworking on.\n",(0,i.jsx)(t.a,{href:"https://github.com/facebook/jest/issues/2441",children:"This is a bug in Jest"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"naming-test-files",children:"Naming Test Files"}),"\n",(0,i.jsxs)(t.p,{children:["Tests should be named ",(0,i.jsx)(t.code,{children:"[filename].test.ts"}),", or ",(0,i.jsx)(t.code,{children:"[filename].test.tsx"})," if it contains JSX (as is the case for a lot of React tests, e.g. components)."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, the tests for ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Link.tsx"})})," exist in the file ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Link.test.tsx"})}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"third-party-dependencies",children:"Third-Party Dependencies"}),"\n",(0,i.jsxs)(t.p,{children:["Jest has its own built-in assertion library with ",(0,i.jsx)(t.code,{children:"expect"}),", so there is no need\nto ",(0,i.jsx)(t.code,{children:"import"})," a third-party library like some of the older frameworks required.\nHowever since assertion libraries simply throw errors, it would be feasible to\nimport a third-party library if you needed (like Chai or\n",(0,i.jsx)(t.a,{href:"http://sinonjs.org/",children:"Sinon"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["We use the light-weight\n",(0,i.jsx)(t.a,{href:"https://github.com/kentcdodds/react-testing-library",children:"react-testing-library"})," to\nrender React components."]}),"\n",(0,i.jsx)(t.h2,{id:"testing-utilities",children:"Testing Utilities"}),"\n",(0,i.jsx)(t.p,{children:"TODO."}),"\n",(0,i.jsx)(t.h2,{id:"writing-unit-tests",children:"Writing Unit Tests"}),"\n",(0,i.jsx)(t.p,{children:"The following principles are good guides for determining if you are writing high\nquality frontend unit tests."}),"\n",(0,i.jsx)(t.h3,{id:"bad-unit-test-principle",children:"Bad Unit Test Principle"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"No unit test is better than a bad one."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Writing a poor unit test:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Gives the illusion your code is more secure or reliable than it actually is."}),"\n",(0,i.jsx)(t.li,{children:"Functions equivalent to a bad comment, in that it leads the next developer\ninto erroneous assumptions."}),"\n",(0,i.jsx)(t.li,{children:"Adds to future work by requiring updates to the unit test for irrelevant code\nchanges."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"inputoutput-principle",children:"Input/Output Principle"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"A unit test verifies an output matches an expected input."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For backend, this would be that when you provide configuration X, then the\nobject responds with Y. For frontend, this would be that when you provide\nproperties X to a component, then the visual functionality responds with Y."}),"\n",(0,i.jsx)(t.h3,{id:"blackbox-principle",children:"Blackbox Principle"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"A good unit test does not tell the object how it should do its job but should\nonly compare inputs to outputs."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Consider a unit test for a form. A good unit test would not test the order of\nthe form fields. Instead, it would verify that the inputs to the form fields\nlead to a certain backend call when submit is clicked."}),"\n",(0,i.jsx)(t.h3,{id:"scalability-principle",children:"Scalability Principle"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Unit test quality is directly proportionate to how much code can change\nwithout having to touch the unit test."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This is often overlooked! A unit test is not a test to verify the code never\nchanges. Poor unit tests are written so that every time you make a tiny change\nto the code, you have to update the unit test. A good unit test suite allows a\nlot of flexibility in ",(0,i.jsx)(t.em,{children:"how"})," the code is written so that future refactoring can\noccur without having to touch the original unit tests."]}),"\n",(0,i.jsx)(t.h3,{id:"increasing-complexity-principle",children:"Increasing Complexity Principle"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"The ordering of unit tests in a suite should proceed from least specific to\nmost specific."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Jest runs all tests in the order in which they are provided, regardless of the\ndepth of ",(0,i.jsx)(t.code,{children:"describe()"})," blocks you provide. We can use this to help us write tests\nthat will help the next developer debug what they broke."]}),"\n",(0,i.jsx)(t.p,{children:"The idea here is that if they were to break a unit test, the next developer\nshould be able to tell from the order in which the tests broke what they should\ndo to fix things."}),"\n",(0,i.jsx)(t.p,{children:"For example, good unit tests will verify the arguments to a function in a test\nprior to a test that validates the output. If you do not test this, then simply\nthrowing an error saying that output was incorrect will lead the next developer\ninto thinking they may have broken the entire functionality of the object rather\nthan simply letting them know they had an invalid input."}),"\n",(0,i.jsx)(t.h3,{id:"broken-functionality-principle",children:"Broken Functionality Principle"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Generally, a unit test should not test exactly how the output appears, it\nshould test that the functionality has an expected ",(0,i.jsx)(t.em,{children:"general"})," response to an\ninput change."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This piggybacks the Scalability Principle and applies primarily to frontend\ndevelopment. As a general guideline, frontends should be flexible enough so\nthat the UX or design can change while touching the least amount of code\npossible. So for example, a poor unit test would verify the color of a button\nwhen it is hovered. This would be a poor unit test, because if you decide to\ntest a slightly different color on the button the unit test will break. A better\nunit test would verify that the button's CSS classname is assigned properly on\nhover or test for something completely different."}),"\n",(0,i.jsx)(t.h3,{id:"example-loading-indicator",children:"Example: Loading Indicator"}),"\n",(0,i.jsx)(t.p,{children:"A classic unit test on frontends is verifying a loading indicator displays when\na backend request is being made."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Here are some things we could test for ",(0,i.jsx)(t.em,{children:"when data is loading"}),":"]})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Did the internal ",(0,i.jsx)(t.code,{children:"loading"})," state of the component change? (poor)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This is not a great test because it does not actually test that the\nfunctionality (displaying a message to the user) actually happens. It also\nbreaks the Blackbox Principle by expecting the internals of the component must\nwork a certain way. This could be a good test on its own right, but it does not\nactually achieve the goal of verifying that if our input (loading data) occurs,\nthen the output (displaying a message to the user) has happened."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Did the text ",(0,i.jsx)(t.code,{children:'"Loading!"'})," appear in the DOM? (better)"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This is a better test because it validates functionality, but it breaks the\nScalability principle. By testing for ",(0,i.jsx)(t.code,{children:"'Loading...'"})," we are linking our test\ncode to the component's message. If we want to add internationalization or\nsimply change the message to something more specific we will break our test and\nhave to update code in two places."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Did ",(0,i.jsx)(t.code,{children:"<Loading />"})," get mounted? (best)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This is the best test of these examples (there could be more depending on your\nimplementation)."}),"\n",(0,i.jsxs)(t.p,{children:["Verifying that ",(0,i.jsx)(t.code,{children:"<Loading />"})," is mounted when data is loading is the best test\nbecause it fulfills all the principles above:"]}),"\n",(0,i.jsxs)(t.p,{children:["\u2713 ",(0,i.jsx)(t.strong,{children:"Fulfills Input/Output Principle"}),": Verifies the output changes when the\ninput changes"]}),"\n",(0,i.jsxs)(t.p,{children:["\u2713 ",(0,i.jsx)(t.strong,{children:"Fulfills Blackbox Principle"}),": Does not verify ",(0,i.jsx)(t.em,{children:"how"})," the ",(0,i.jsx)(t.code,{children:"<Loading />"}),"\ncomponent is mounted, just that it is mounted in response to the input."]}),"\n",(0,i.jsxs)(t.p,{children:["\u2713 ",(0,i.jsx)(t.strong,{children:"Fulfills Scalability Principle"}),": If we decide to refactor the entire way\nthe loading indicator has displayed the test still works without touching it."]}),"\n",(0,i.jsxs)(t.p,{children:["\u2713 ",(0,i.jsx)(t.strong,{children:"Fulfills Broken Functionality Principle"}),": this test verifies the\nfunctionality (displaying an indicator) is working, rather than how it is\nworking."]}),"\n",(0,i.jsx)(t.p,{children:"The increasing complexity principle does not really apply to this example, so it\nwas excluded. However if you were to place this test in a suite of other tests,\nit would be best to test first that when the component is instructed to load\ndata then it actually does it. this way both tests fail if the data loading part\nbreaks and the next developer immediately know the problem is that the data\nloading is broken, not that the loading indicator is broken."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.h3,{id:"utility-functions",children:"Utility Functions"}),"\n",(0,i.jsx)(t.p,{children:"A utility function is a function with no side effects. It takes in arguments and\nreturns a result or displays an error or console message, like so:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"StringUtil ellipsis"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"export function ellipsis(text, maxLength, midCharIx = 0, ellipsis = '...') {\n  // Do something blackbox. We should not care about the internals,\n  // only inputs and outputs.\n  ...\n  return someFinalValue;\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"There are four things to test for in a utility function:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Handle Invalid Input"}),"\n",(0,i.jsx)(t.li,{children:"Verify default input arguments"}),"\n",(0,i.jsx)(t.li,{children:"Verify output for expected input arguments"}),"\n",(0,i.jsx)(t.li,{children:"Handle thrown errors"}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Handle Invalid Input (handle thrown errors):"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"it('Throws an error on improper arguments', () => {\n  expect(() => {\n    ellipsis();\n  }).toThrowError(\"Expected 'text' to be defined\");\n});\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Verify default input arguments:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"it('Works with defaults', () => {\n  expect(ellipsis('Hello world', 3)).toBe('Hel...');\n  expect(ellipsis('', 3)).toBe('');\n  expect(ellipsis('H', 3)).toBe('H');\n  expect(ellipsis('Hello', 5)).toBe('Hello');\n});\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Verify output for expected input arguments:"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This is especially true for edge cases!"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"it('Works with midCharIx', () => {\n  expect(ellipsis('Hello world', 3, 6)).toBe('...o w...');\n  expect(ellipsis('', 3, 6)).toBe('');\n  expect(ellipsis('Backstage is amazing', 4, 10)).toBe('...e is...');\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"non-react-classes",children:"Non-React Classes"}),"\n",(0,i.jsxs)(t.p,{children:["Testing a JavaScript object which is ",(0,i.jsx)(t.em,{children:"not"})," a React component follows a lot of\nthe same principles as testing objects in other languages."]}),"\n",(0,i.jsx)(t.h4,{id:"api-testing-principles",children:"API Testing Principles"}),"\n",(0,i.jsx)(t.p,{children:"Testing an API involves verifying four things:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Invalid inputs are caught before being sent to the server."}),"\n",(0,i.jsx)(t.li,{children:"Valid inputs translate into a valid browser request."}),"\n",(0,i.jsx)(t.li,{children:"Server response is translated into an expected JavaScript object."}),"\n",(0,i.jsx)(t.li,{children:"Server errors are handled gracefully."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"mocking-api-calls",children:"Mocking API Calls"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://facebook.github.io/jest/docs/en/mock-functions.html",children:"Mocking in Jest"}),"\ninvolves wrapping existing functions (like an API call function) with an\nalternative."]}),"\n",(0,i.jsx)(t.p,{children:"For example:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"./MyApi.ts"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"export async function fetchSomethingFromServer() {\n  // Live production call to a URI. Must be avoided during testing!\n  return fetch('blah');\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"./__mocks__/MyApi.ts"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"export async function fetchSomethingFromServer() {\n  // Simulate a production call response\n  return 'some result object simulating server data here';\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"./MyApi.test.ts"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// This import will actually return the contents of the file in the\n// __mocks__ folder now, due to the jest.mock line below\nimport { fetchSomethingFromServer } from './MyApi';\n\n// This instructs Jest to swap all imports of './MyApi.ts' to\n// './__mocks__/MyApi.ts' - this gets automatically hoisted to the top\n// of the file\njest.mock('./MyApi');\n\nit('loads data', async () => {\n  await expect(fetchSomethingFromServer()).resolves.toBe(\n    'some result object simulating server data here',\n  );\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"react-components",children:"React Components"}),"\n",(0,i.jsx)(t.h4,{id:"working-with-the-react-lifecycle",children:"Working with the React Lifecycle"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://reactjs.org/docs/state-and-lifecycle.html",children:"React lifecycle"})," is\nasynchronous."]}),"\n",(0,i.jsxs)(t.p,{children:["When you call ",(0,i.jsx)(t.code,{children:"setState"})," or update the ",(0,i.jsx)(t.code,{children:"props"})," of a component, there are several\nasynchronous stages that must occur before a rerender. Note the following\nexample:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"class MyComponent extends Component {\n  load() {\n    this.setState({loading: true});\n  }\n\n  render() {\n    return this.state.loading ? <Loading /> : 'Finished!';\n  }\n}\n\n...\n\n// INCORRECT\nit('Test loading', () => {\n  const wrapper = mount(<MyComponent />);\n  wrapper.load();\n  expect(wrapper.find('Loading').length).toEqual(1); // Will fail\n});\n\n// CORRECT\nit('Test loading', () => {\n  const wrapper = mount(<MyComponent />);\n  wrapper.load();\n  wrapper.update(); // This tells the components to run through a render cycle\n  expect(wrapper.find('Loading').length).toEqual(1);\n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"For more information:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://reactjs.org/docs/state-and-lifecycle.html",children:"React lifecycle"})}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"accessing-store-theme-routing-browser-history-etc",children:["Accessing ",(0,i.jsx)(t.code,{children:"store"}),", ",(0,i.jsx)(t.code,{children:"theme"}),", routing, browser history, etc"]}),"\n",(0,i.jsx)(t.p,{children:'The Backstage application has several core providers at its root. To run your\ntest wrapped in a "sample" Backstage application, you can use our utility\nfunctions:'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"wrapInTestApp"})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"import { wrapInTestApp } from '../../test-utils';\n...\nit('Definitely is not a coconut', () => {\n  const mangoWrapper = mount(wrapInTestApp(<Mango />));\n\n  expect(mangoWrapper.context().store).toBeDefined();\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note: wrapping in the test application ",(0,i.jsx)(t.strong,{children:"requires"})," you to do a ",(0,i.jsx)(t.code,{children:"find()"})," or\n",(0,i.jsx)(t.code,{children:"dive()"})," since the wrapped component is now the application."]}),"\n",(0,i.jsx)(t.h2,{id:"debugging-jest-tests",children:"Debugging Jest Tests"}),"\n",(0,i.jsxs)(t.p,{children:["You can find it ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/local-dev/cli-build-system#debugging-jest-tests",children:"here"})]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(r){return!1}}()?Object.assign:function(e,r){for(var s,o,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var c in s=Object(arguments[a]))n.call(s,c)&&(l[c]=s[c]);if(t){o=t(s);for(var d=0;d<o.length;d++)i.call(s,o[d])&&(l[o[d]]=s[o[d]])}}return l}},371426:(e,t,n)=>{n(862525);var i=n(827378),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;r=s("react.element"),t.Fragment=s("react.fragment")}var o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,s={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,i)&&!a.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:o.current}}t.jsx=c,t.jsxs=c},541535:(e,t,n)=>{var i=n(862525),r=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,l=60110,a=60112;t.Suspense=60113;var c=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;r=u("react.element"),s=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),o=u("react.provider"),l=u("react.context"),a=u("react.forward_ref"),t.Suspense=u("react.suspense"),c=u("react.memo"),d=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=x.prototype;var j=m.prototype=new y;j.constructor=m,i(j,x.prototype),j.isPureReactComponent=!0;var b={current:null},v=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var i,s={},o=null,l=null;if(null!=t)for(i in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,i)&&!w.hasOwnProperty(i)&&(s[i]=t[i]);var a=arguments.length-2;if(1===a)s.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(i in a=e.defaultProps)void 0===s[i]&&(s[i]=a[i]);return{$$typeof:r,type:e,key:o,ref:l,props:s,_owner:b.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var T=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var a=!1;if(null===e)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case s:a=!0}}if(a)return o=o(a=e),e=""===i?"."+S(a,0):i,Array.isArray(o)?(n="",null!=e&&(n=e.replace(T,"$&/")+"/"),C(o,t,n,"",(function(e){return e}))):null!=o&&(_(o)&&(o=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(T,"$&/")+"/")+e)),t.push(o)),1;if(a=0,i=""===i?".":i+":",Array.isArray(e))for(var c=0;c<e.length;c++){var d=i+S(l=e[c],c);a+=C(l,t,n,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(l=e.next()).done;)a+=C(l=l.value,t,n,d=i+S(l,c++),o);else if("object"===l)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function P(e,t,n){if(null==e)return e;var i=[],r=0;return C(e,i,"","",(function(e){return t.call(n,e,r++)})),i}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var O={current:null};function I(){var e=O.current;if(null===e)throw Error(p(321));return e}var E={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:i};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=x,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var s=i({},e.props),o=e.key,l=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,a=b.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)v.call(t,d)&&!w.hasOwnProperty(d)&&(s[d]=void 0===t[d]&&void 0!==c?c[d]:t[d])}var d=arguments.length-2;if(1===d)s.children=n;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];s.children=c}return{$$typeof:r,type:e.type,key:o,ref:l,props:s,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return I().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,n){return I().useReducer(e,t,n)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>s});var i=n(667294);const r=i.createContext({});function s(e){const t=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||o:s(e),i.createElement(r.Provider,{value:l},t)}}}]);