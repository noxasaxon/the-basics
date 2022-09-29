"use strict";(self.webpackChunkthe_basics=self.webpackChunkthe_basics||[]).push([[6344],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},l="The Basics: Typescript",s={unversionedId:"setup",id:"setup",title:"The Basics: Typescript",description:"What is it?",source:"@site/../typescript/setup.md",sourceDirName:".",slug:"/setup",permalink:"/the-basics/../typescript/setup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar"},o={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"Setup",id:"setup",level:2},{value:"1. Install NVM (Node Version Manager)",id:"1-install-nvm-node-version-manager",level:3},{value:"2. Install Node (a Javascript Runtime) via NVM",id:"2-install-node-a-javascript-runtime-via-nvm",level:3},{value:"3. Install Typescript Globally",id:"3-install-typescript-globally",level:3},{value:"Additional Resources",id:"additional-resources",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-basics-typescript"},"The Basics: Typescript"),(0,r.kt)("h2",{id:"what-is-it"},"What is it?"),(0,r.kt)("p",null,'Typescript is a "superset" of Javascript, that adds typechecking and other features to the Javascript language. Typescript doesn\'t have its own runtime, instead it is ',(0,r.kt)("em",{parentName:"p"},"compiled")," into Javascript, which is then run on the Javascript runtime."),(0,r.kt)("p",null,"Why do we use it instead of plain Javascript?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'adds a semblance of "type checking" to Javascript, which can reduce many common bugs (',(0,r.kt)("a",{parentName:"li",href:"https://earlbarr.com/publications/typestudy.pdf"},"15% of all Javascript bugs according to this study"),")"),(0,r.kt)("li",{parentName:"ul"},"adds new features that Javascript doesn't have, and compiles them down to be compatible with any JS version"),(0,r.kt)("li",{parentName:"ul"},"makes it easier to understand an unfamiliar codebase"),(0,r.kt)("li",{parentName:"ul"},"A good way to get started with learning static types if languages like Rust or Java are interesting but you want to start out slow")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"1-install-nvm-node-version-manager"},"1. Install NVM (Node Version Manager)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"Installing & Updating NVM"))),(0,r.kt)("h3",{id:"2-install-node-a-javascript-runtime-via-nvm"},"2. Install Node (a Javascript Runtime) via NVM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#usage"},"Instructions"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"nvm install node\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"in a new terminal window, test that it works:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node --version\n")),(0,r.kt)("h3",{id:"3-install-typescript-globally"},"3. Install Typescript Globally"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"node")," automatically comes with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," a Package Manager for Javascript/Typescript projects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g typescript\n")),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"},"Typescript Handbook")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/learn-typescript-beginners-guide/"},"Typescript Beginners Guide @ FreeCodeCamp"))))}u.isMDXComponent=!0}}]);