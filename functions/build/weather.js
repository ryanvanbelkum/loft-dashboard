!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return{statusCode:200,headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT","Access-Control-Allow-Headers":"Authorization, Content-type"},body:JSON.stringify({})}}function c(e){return o({},e,{headers:o({},e.headers,{"Access-Control-Allow-Origin":"*"})})}r.d(t,"a",function(){return i}),r.d(t,"b",function(){return c})},function(e,t){e.exports=require("humps")},function(e,t){e.exports=require("node-fetch")},,,,function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),u=r(2),i=r.n(u),c=r(0);exports.handler=async(e,t,r)=>{"OPTIONS"===e.httpMethod&&Object(c.a)(r);const n=await i()("https://api.darksky.net/forecast/d8be2b19a521f77df55dfd0a103e3c9b/39.767450,-94.849930?exclude=daily,minutely,alerts,flags,hourly").then(e=>e.json()).then(e=>o.a.camelizeKeys(e));return Object(c.b)({statusCode:200,body:JSON.stringify(n)})}}]));