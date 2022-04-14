"use strict";(self.webpackChunkpan_documentation=self.webpackChunkpan_documentation||[]).push([[290],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8884:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Purchasing PAN tokens",sidebar_position:1},c=void 0,u={unversionedId:"making-transfers/purchasing",id:"making-transfers/purchasing",title:"Purchasing PAN tokens",description:"Players can buy, sell, and trade items by using the stablecoin PAN. It can be acquired through the following methods:",source:"@site/docs/making-transfers/purchasing.md",sourceDirName:"making-transfers",slug:"/making-transfers/purchasing",permalink:"/making-transfers/purchasing",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/making-transfers/purchasing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Purchasing PAN tokens",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"PAN-X",permalink:"/"},next:{title:"Trading with other users",permalink:"/making-transfers/trading"}},l={},p=[],f={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Players can buy, sell, and trade items by using the stablecoin PAN. It can be acquired through the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Credit card: exchange currency with tokens (PAN fees applicable)."),(0,o.kt)("li",{parentName:"ul"},"Play-to-win: play games and win tokens."),(0,o.kt)("li",{parentName:"ul"},"Wallet transfer: receive an amount of tokens from another wallet.")),(0,o.kt)("p",null,"Currently, PAN-X only offers credit card as a method for purchasing PAN tokens, but this could be expanded in the future. The credit card details are handled directly by the payment processor and are not stored inside PAN\u2019s application for security purposes. "),(0,o.kt)("p",null,"The maximum and minimum amount of tokens allowed for purchase is configured in the application and enforced in the API calls to ensure that these constraints are applied even in the case of attempts of bypassing. After the payment is successfully completed, the wrapping process is carried out by the PAN operation, resulting in PAN tokens being minted in the user\u2019s wallet."),(0,o.kt)("p",null,"In case your purchase is canceled, it means that something went wrong with the payment processor and the purchase could not be completed. The payment should be returned to the user, but in case this does not happen, please contact our support channels."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"PAN",src:n(6425).Z,width:"1440",height:"1024"})))}d.isMDXComponent=!0},6425:function(e,t,n){t.Z=n.p+"assets/images/buy-cb646666c7896e47f741d3f1f0fbbeb8.png"}}]);