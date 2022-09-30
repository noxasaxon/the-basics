"use strict";(self.webpackChunkthe_basics=self.webpackChunkthe_basics||[]).push([[5542],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6736:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>u,assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:4},s="Markdown Features",i={unversionedId:"tutorial/tutorial-basics/markdown-features",id:"tutorial/tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial/tutorial-basics",slug:"/tutorial/tutorial-basics/markdown-features",permalink:"/the-basics/docs/tutorial/tutorial-basics/markdown-features",draft:!1,editUrl:"https://github.com/noxasaxon/the-basics/tree/main/docs-site/docs/docs/tutorial/tutorial-basics/markdown-features.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/the-basics/docs/tutorial/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/the-basics/docs/tutorial/tutorial-basics/deploy-your-site"}},l={},c=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],u=e=>{let{children:t,color:a}=e;return(0,r.kt)("span",{style:{backgroundColor:a,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${a} with label ${t}`)}},t)},p={toc:c,Highlight:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"markdown-features"},"Markdown Features"),(0,r.kt)("p",null,"Docusaurus supports ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))," and a few ",(0,r.kt)("strong",{parentName:"p"},"additional features"),"."),(0,r.kt)("h2",{id:"front-matter"},"Front Matter"),(0,r.kt)("p",null,"Markdown documents have metadata at the top called ",(0,r.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/create-a-page).\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](./create-a-page.md).\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Let's see how to ",(0,r.kt)("a",{parentName:"p",href:"/the-basics/docs/tutorial/tutorial-basics/create-a-page"},"Create a page"),"."),(0,r.kt)("h2",{id:"images"},"Images"),(0,r.kt)("p",null,"Regular Markdown images are supported."),(0,r.kt)("p",null,"You can use absolute paths to reference images in the static directory (",(0,r.kt)("inlineCode",{parentName:"p"},"static/img/docusaurus.png"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/img/docusaurus.png)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus logo",src:a(1467).Z,width:"512",height:"512"})),(0,r.kt)("p",null,"You can reference images relative to the current file as well, as shown in ",(0,r.kt)("a",{parentName:"p",href:"/the-basics/docs/tutorial/tutorial-extras/manage-docs-versions"},"the extra guides"),"."),(0,r.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,r.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,r.kt)("h2",{id:"admonitions"},"Admonitions"),(0,r.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,r.kt)("admonition",{title:"My tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use this awesome feature option")),(0,r.kt)("admonition",{title:"Take care",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This action is dangerous")),(0,r.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,r.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,r.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,r.kt)("p",null,"This is ",(0,r.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,r.kt)("p",null,"This is ",(0,r.kt)(u,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}d.isMDXComponent=!0},1467:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/docusaurus-a4b71f6c212c24d43fcbddad67e6c1b0.png"}}]);