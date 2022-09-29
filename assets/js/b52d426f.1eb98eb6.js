"use strict";(self.webpackChunkthe_basics=self.webpackChunkthe_basics||[]).push([[1473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,y=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="The Basics: Python",i={unversionedId:"setup",id:"setup",title:"The Basics: Python",description:"What is it?",source:"@site/../python/setup.md",sourceDirName:".",slug:"/setup",permalink:"/the-basics/python/setup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar"},s={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"Setup",id:"setup",level:2},{value:"1. Install PyEnv",id:"1-install-pyenv",level:3},{value:"2. Install the latest stable Python version via PyEnv",id:"2-install-the-latest-stable-python-version-via-pyenv",level:3},{value:"3. Set Global Python version to latest",id:"3-set-global-python-version-to-latest",level:3},{value:"4. Install some helpful development dependencies",id:"4-install-some-helpful-development-dependencies",level:3},{value:"4. Install this repo&#39;s Python dependencies",id:"4-install-this-repos-python-dependencies",level:3}],u={toc:p};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-basics-python"},"The Basics: Python"),(0,r.kt)("h2",{id:"what-is-it"},"What is it?"),(0,r.kt)("p",null,"Python is a high-level general-purpose programming language that is easy to learn and fast to write. It's great for ",(0,r.kt)("strong",{parentName:"p"},"prototyping")," but is used for everything from ",(0,r.kt)("strong",{parentName:"p"},"Backend"),", ",(0,r.kt)("strong",{parentName:"p"},"Web Development")," (using Django), ",(0,r.kt)("strong",{parentName:"p"},"DevOps")," & ",(0,r.kt)("strong",{parentName:"p"},"Security Automation")," scripts, ",(0,r.kt)("strong",{parentName:"p"},"Data Science and Analysis"),", ",(0,r.kt)("strong",{parentName:"p"},"Machine Learning")," & more."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"1-install-pyenv"},"1. Install PyEnv"),(0,r.kt)("p",null,"Pyenv is an environment managment tool and the recommended way to install one or more versions of Python."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pyenv/pyenv#installation"},"Installation Instructions")),(0,r.kt)("li",{parentName:"ul"},"don't forget to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv"},"setup your shell too"))),(0,r.kt)("h3",{id:"2-install-the-latest-stable-python-version-via-pyenv"},"2. Install the latest stable Python version via PyEnv"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pyenv/pyenv#install-additional-python-versions"},"Installation of Python via Pyenv")),(0,r.kt)("li",{parentName:"ul"},"As of this writing, the latest stable is ",(0,r.kt)("inlineCode",{parentName:"li"},"3.10.4"))),(0,r.kt)("h3",{id:"3-set-global-python-version-to-latest"},"3. Set Global Python version to latest"),(0,r.kt)("p",null,"In a terminal, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pyenv global 3.10.4")),(0,r.kt)("h3",{id:"4-install-some-helpful-development-dependencies"},"4. Install some helpful development dependencies"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"black")," is a formatter, ",(0,r.kt)("inlineCode",{parentName:"p"},"flake8")," is a linter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip install black flake8 flake8-bugbear\n")),(0,r.kt)("h3",{id:"4-install-this-repos-python-dependencies"},"4. Install this repo's Python dependencies"),(0,r.kt)("p",null,"Python dependencies (3rd-party code we use in our programs) are typically installed via a tool called ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),", which is automatically included with Python."),(0,r.kt)("p",null,"Our repo's dependencies are stored in the ",(0,r.kt)("a",{target:"_blank",href:n(3634).Z},"./python/requirements.txt file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd python\npip install -r requirements.txt\n")))}c.isMDXComponent=!0},3634:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/requirements-491eacdbd6b709b63b99e16e86f37e28.txt"}}]);