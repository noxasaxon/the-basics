"use strict";(self.webpackChunkthe_basics=self.webpackChunkthe_basics||[]).push([[2861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,y=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},i="The Basics: Python",o={unversionedId:"intro",id:"intro",title:"The Basics: Python",description:"What is it?",source:"@site/../python/intro.md",sourceDirName:".",slug:"/intro",permalink:"/the-basics/python/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"01",permalink:"/the-basics/python/01/"}},s={},p=[{value:"What is it?",id:"what-is-it",level:2},{value:"Setup",id:"setup",level:2},{value:"1. Install PyEnv",id:"1-install-pyenv",level:3},{value:"2. Install the latest stable Python version via PyEnv",id:"2-install-the-latest-stable-python-version-via-pyenv",level:3},{value:"3. Set Global Python version to latest",id:"3-set-global-python-version-to-latest",level:3},{value:"4. Install some helpful development dependencies",id:"4-install-some-helpful-development-dependencies",level:3},{value:"4. Install this repo&#39;s Python dependencies",id:"4-install-this-repos-python-dependencies",level:3},{value:"External Resources",id:"external-resources",level:2}],u={toc:p};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-basics-python"},"The Basics: Python"),(0,a.kt)("h2",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,"Python is a high-level general-purpose programming language that is easy to learn and fast to write. It's great for ",(0,a.kt)("strong",{parentName:"p"},"prototyping")," but is used for everything from ",(0,a.kt)("strong",{parentName:"p"},"Backend"),", ",(0,a.kt)("strong",{parentName:"p"},"Web Development")," (using Django), ",(0,a.kt)("strong",{parentName:"p"},"DevOps")," & ",(0,a.kt)("strong",{parentName:"p"},"Security Automation")," scripts, ",(0,a.kt)("strong",{parentName:"p"},"Data Science and Analysis"),", ",(0,a.kt)("strong",{parentName:"p"},"Machine Learning")," & more."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("h3",{id:"1-install-pyenv"},"1. Install PyEnv"),(0,a.kt)("p",null,"Pyenv is an environment managment tool and the recommended way to install one or more versions of Python."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/pyenv/pyenv#installation"},"Installation Instructions")),(0,a.kt)("li",{parentName:"ul"},"don't forget to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv"},"setup your shell too"))),(0,a.kt)("h3",{id:"2-install-the-latest-stable-python-version-via-pyenv"},"2. Install the latest stable Python version via PyEnv"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/pyenv/pyenv#install-additional-python-versions"},"Installation of Python via Pyenv")),(0,a.kt)("li",{parentName:"ul"},"As of this writing, the latest stable is ",(0,a.kt)("inlineCode",{parentName:"li"},"3.10.4"))),(0,a.kt)("h3",{id:"3-set-global-python-version-to-latest"},"3. Set Global Python version to latest"),(0,a.kt)("p",null,"In a terminal, run ",(0,a.kt)("inlineCode",{parentName:"p"},"pyenv global 3.10.4")),(0,a.kt)("h3",{id:"4-install-some-helpful-development-dependencies"},"4. Install some helpful development dependencies"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"black")," is a formatter, ",(0,a.kt)("inlineCode",{parentName:"p"},"flake8")," is a linter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install black flake8 flake8-bugbear\n")),(0,a.kt)("h3",{id:"4-install-this-repos-python-dependencies"},"4. Install this repo's Python dependencies"),(0,a.kt)("p",null,"Python dependencies (3rd-party code we use in our programs) are typically installed via a tool called ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),", which is automatically included with Python."),(0,a.kt)("p",null,"Our repo's dependencies are stored in the ",(0,a.kt)("a",{target:"_blank",href:n(3634).Z},"./python/requirements.txt file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd python\npip install -r requirements.txt\n")),(0,a.kt)("h2",{id:"external-resources"},"External Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"})))}c.isMDXComponent=!0},3634:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/requirements-491eacdbd6b709b63b99e16e86f37e28.txt"}}]);