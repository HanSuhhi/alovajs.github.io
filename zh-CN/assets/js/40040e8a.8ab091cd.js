"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u9519\u8bef\u65e5\u5fd7",sidebar_position:110},l=void 0,i={unversionedId:"next-step/error-log",id:"next-step/error-log",title:"\u9519\u8bef\u65e5\u5fd7",description:"v2.6.0+",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/06-next-step/11-error-log.md",sourceDirName:"06-next-step",slug:"/next-step/error-log",permalink:"/zh-CN/next-step/error-log",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/06-next-step/11-error-log.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{title:"\u9519\u8bef\u65e5\u5fd7",sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"\u4e0b\u8f7d/\u4e0a\u4f20\u8fdb\u5ea6",permalink:"/zh-CN/next-step/download-upload-progress"},next:{title:"Strategy",permalink:"/zh-CN/category/strategy"}},p={},c=[{value:"\u5173\u95ed\u6253\u5370\u9519\u8bef\u65e5\u5fd7",id:"\u5173\u95ed\u6253\u5370\u9519\u8bef\u65e5\u5fd7",level:2},{value:"\u81ea\u5b9a\u4e49\u6253\u5370\u9519\u8bef\u65e5\u5fd7",id:"\u81ea\u5b9a\u4e49\u6253\u5370\u9519\u8bef\u65e5\u5fd7",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"v2.6.0+")),(0,o.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u8c03\u8bd5\uff0c\u5f53\u5728\u4f7f\u7528 use hooks \u8bf7\u6c42\u6216\u54cd\u5e94\u5904\u7406\u9519\u8bef\u65f6\u4f1a\u9ed8\u8ba4\u5728\u63a7\u5236\u53f0\u6253\u5370\u9519\u8bef\u65e5\u5fd7\uff0c\u5982\u679c\u4f60\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff08\u4f8b\u5982\u751f\u4ea7\u73af\u5883\uff09\u4e0d\u5e0c\u671b\u6253\u5370\u9519\u8bef\u4fe1\u606f\u6216\u81ea\u5b9a\u4e49\u63a7\u5236\u6253\u5370\u9519\u8bef\u4fe1\u606f\uff0calova \u4e5f\u63d0\u4f9b\u4e86\u5bf9\u5b83\u4eec\u7684\u652f\u6301\u3002"),(0,o.kt)("h2",{id:"\u5173\u95ed\u6253\u5370\u9519\u8bef\u65e5\u5fd7"},"\u5173\u95ed\u6253\u5370\u9519\u8bef\u65e5\u5fd7"),(0,o.kt)("p",null,"\u53ef\u5728\u521b\u5efa alova \u5b9e\u4f8b\u65f6\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"errorLogger"),"\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"false\u6216null"),"\u5173\u95ed\u65e5\u5fd7\u6253\u5370\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  // ...\n  errorLogger: false\n});\n")),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u6253\u5370\u9519\u8bef\u65e5\u5fd7"},"\u81ea\u5b9a\u4e49\u6253\u5370\u9519\u8bef\u65e5\u5fd7"),(0,o.kt)("p",null,"\u9519\u8bef\u65e5\u5fd7\u9ed8\u8ba4\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"console.error"),"\u8fdb\u884c\u6253\u5370\uff0c\u5982\u679c\u4f60\u7684\u9879\u76ee\u73af\u5883\u4e2d\u4e0d\u652f\u6301",(0,o.kt)("inlineCode",{parentName:"p"},"console.error"),"\uff0c\u6216\u8005\u5e0c\u671b\u6536\u96c6\u9519\u8bef\u4fe1\u606f\uff0c\u53ef\u4ee5\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"errorLogger"),"\u6307\u5b9a\u4e3a\u4e00\u4e2a\u51fd\u6570\u81ea\u5b9a\u4e49\u5904\u7406\u9519\u8bef\u65e5\u5fd7\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  // ...\n  // error\u4e3a\u9519\u8bef\u5bf9\u8c61\uff0cmethodInstance\u4e3a\u9519\u8bef\u51fa\u73b0\u5bf9\u5e94\u7684method\u5b9e\u4f8b\n  errorLogger(error, methodInstance) {\n    reportError(`${methodInstance.url}: ${error.message}`);\n  }\n});\n")))}u.isMDXComponent=!0}}]);