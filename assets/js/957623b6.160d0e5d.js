"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6323],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(u,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(y,s(s({ref:e},p),{},{components:n})):r.createElement(y,s({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68957:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),s=["components"],o={title:"\u5207\u6362\u5230\u65b0\u7684\u8f93\u5165\u7cfb\u7edfInput System",sidebar_position:1,slug:"/inputsystem"},u="\u6559\u7a0b\uff1a\u5207\u6362\u5230\u65b0\u7684\u8f93\u5165\u7cfb\u7edfInput System",c={unversionedId:"lang/articles/advanced/tutorial12_inputsystem",id:"lang/articles/advanced/tutorial12_inputsystem",title:"\u5207\u6362\u5230\u65b0\u7684\u8f93\u5165\u7cfb\u7edfInput System",description:"1. \u6309\u56fe\u793a\u4fee\u6539\u9879\u76ee\u914d\u7f6e\u4e2d\u8f93\u5165\u6a21\u5f0f\u4e3a Input System",source:"@site/docs/lang/articles/advanced/tutorial12_inputsystem.md",sourceDirName:"lang/articles/advanced",slug:"/inputsystem",permalink:"/docs/master/inputsystem",editUrl:"https://github.com/XCharts-Team/XCharts/edit/master/docs/lang/articles/advanced/tutorial12_inputsystem.md",tags:[],version:"current",lastUpdatedBy:"monitor1394",lastUpdatedAt:1676244441,formattedLastUpdatedAt:"2023/2/13",sidebarPosition:1,frontMatter:{title:"\u5207\u6362\u5230\u65b0\u7684\u8f93\u5165\u7cfb\u7edfInput System",sidebar_position:1,slug:"/inputsystem"},sidebar:"langSidebar",previous:{title:"\u5fc3\u7535\u56fe\u6548\u679c\u5b9e\u73b0",permalink:"/docs/master/tutorial03"}},p=[{value:"1. \u6309\u56fe\u793a\u4fee\u6539\u9879\u76ee\u914d\u7f6e\u4e2d\u8f93\u5165\u6a21\u5f0f\u4e3a Input System",id:"1-\u6309\u56fe\u793a\u4fee\u6539\u9879\u76ee\u914d\u7f6e\u4e2d\u8f93\u5165\u6a21\u5f0f\u4e3a-input-system",children:[],level:2},{value:"2. \u4f7f\u7528 Unity Package Manager \u5b89\u88c5 Input System",id:"2-\u4f7f\u7528-unity-package-manager-\u5b89\u88c5-input-system",children:[],level:2},{value:"3. \u9009\u4e2d\u573a\u666f\u4e2d EventSystem \u6e38\u620f\u5bf9\u8c61\uff0c\u66f4\u6362\u8f93\u5165\u6a21\u7ec4",id:"3-\u9009\u4e2d\u573a\u666f\u4e2d-eventsystem-\u6e38\u620f\u5bf9\u8c61\u66f4\u6362\u8f93\u5165\u6a21\u7ec4",children:[],level:2}],l={toc:p};function m(t){var e=t.components,o=(0,a.Z)(t,s);return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6559\u7a0b\u5207\u6362\u5230\u65b0\u7684\u8f93\u5165\u7cfb\u7edfinput-system"},"\u6559\u7a0b\uff1a\u5207\u6362\u5230\u65b0\u7684\u8f93\u5165\u7cfb\u7edfInput System"),(0,i.kt)("h2",{id:"1-\u6309\u56fe\u793a\u4fee\u6539\u9879\u76ee\u914d\u7f6e\u4e2d\u8f93\u5165\u6a21\u5f0f\u4e3a-input-system"},"1. \u6309\u56fe\u793a\u4fee\u6539\u9879\u76ee\u914d\u7f6e\u4e2d\u8f93\u5165\u6a21\u5f0f\u4e3a Input System"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Project Settings",src:n(58015).Z,width:"784",height:"453"})),(0,i.kt)("h2",{id:"2-\u4f7f\u7528-unity-package-manager-\u5b89\u88c5-input-system"},"2. \u4f7f\u7528 Unity Package Manager \u5b89\u88c5 Input System"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"UPM",src:n(29167).Z,width:"800",height:"380"})),(0,i.kt)("h2",{id:"3-\u9009\u4e2d\u573a\u666f\u4e2d-eventsystem-\u6e38\u620f\u5bf9\u8c61\u66f4\u6362\u8f93\u5165\u6a21\u7ec4"},"3. \u9009\u4e2d\u573a\u666f\u4e2d EventSystem \u6e38\u620f\u5bf9\u8c61\uff0c\u66f4\u6362\u8f93\u5165\u6a21\u7ec4"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Input Module",src:n(33125).Z,width:"680",height:"633"})))}m.isMDXComponent=!0},29167:function(t,e,n){e.Z=n.p+"assets/images/inputsystem01-1d81144cc6e77d5ad2cb8214dbdf4964.png"},58015:function(t,e,n){e.Z=n.p+"assets/images/inputsystem02-525e89f1d32885c1454a42b52fe04053.png"},33125:function(t,e,n){e.Z=n.p+"assets/images/inputsystem03-6a7cfefbc9bedf9add603c11e73d786b.png"}}]);