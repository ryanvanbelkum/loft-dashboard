!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return{statusCode:200,headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT","Access-Control-Allow-Headers":"Authorization, Content-type"},body:JSON.stringify({})}}function u(e){return o({},e,{headers:o({},e.headers,{"Access-Control-Allow-Origin":"*"})})}n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u})},,,function(e,t){e.exports=require("firebase-admin")},function(e){e.exports=JSON.parse('{"type":"service_account","project_id":"loft-82248","private_key_id":"abd34710194511d5d4a879799265b39ccece8c4f","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDgyhcXihvFHqsV\\nOaMf+t3cj/5ambvAYmSsmgUg/gLYsXoyWa4SNC3w8EaUWiU2SeWVsuaq+8wdajmJ\\nktda4qkupRK8kkA4FZueOwKSVDK0TFcQm7mzqI1/7yMywxucmA8hg3A+Bph7UUTI\\ns6crh0lh/ejAlsqxQaFIT9d3AgrTdEMOl+Y++GFB1FarRZ01e2b1yKs1qmfLknM2\\njLHqL4p3apCd+BOBkUT79nYh42P3Jjr0RB6mozOBWyS3Kzj/5mj0Vvu9Uk8CRdvk\\nKJOaV2YK3luAuasMuVVLPlgwxh3mbmCI91vXQZ+f0XrJTKgZvUfBRCLKAEqvg6ie\\nXftSBj9zAgMBAAECggEAGHbWCYlN2Werje1ObBIU6EbBk2Gs1dS/iStgCIWskKHM\\nH0O0VqXYJCM6QzYGW8CyHFcylIQ/5Cml5muVRX5qlDmB7wTpuVDctV1Nu9gvBoFS\\nbmvMS5m6AKTpi0JBtIq2BtszsYRtPuqK1l77ABlCqsgD90XR/HWclG6gEAMoY3fM\\n+Cf/bkG1gnzS0IlDk/FQKxWfdx0AwqQyvCleqO/2pLsRpay1LZKmemHGFxSZRShC\\n/Vd65VWkTWdeT4+evfcwpPmL92ZmdH+F6IGc/IqCdgIq/urlVxkcyMW2tiR4OWI0\\nYisjKKtgGT0WpkqulhjuzBtOOLutzUGA4h4ZdN3l1QKBgQD7lsJP3sRfg5Q8ipNC\\nd1hwVuii8OCXVSLcZJ1hzAWROEYmAnZduNX72Fe0RaEdrdKy6IvWX9u7p9d1Biec\\nNhvLbSArgm628GFrqQQ8lgPHkevSP6fpZLylyLGDsizQ5dayJ/hXUBhOguCMeT32\\nT91/lJk+ASmooc59mN3oIrRO/wKBgQDkuwsZbSxQ/FmAtlPrHG3LVqZetMpko0Q8\\nabyIOVkGcqz0QzxDp8DB5ZJbiZMlCozKur+dHS3PNZJEyh+B9LPteMdVtuadOVs+\\nksWIBZ5vmMdt/bjJ7fXVnQ50aqwYVgSjy5hD1J19Yb1N4SzLWgQSk8gdsKH+/5K+\\nGkzj5fZDjQKBgQDxono9+9bfZaCaBP4qeDWYr9//nxoWPs6cnoYJx8oRD9tP5k2I\\n9l2O5NpXagi0WJ5k9rRX0PlZ4notCxxADDflyYl8QGnVikoG/O30wqAerSexZzH+\\nF6KYF4lm01n3yMfLlFgQg/zUax7/y/KW/13divsjcjpwm/eW6Zs3uR00QQKBgDKv\\nzF7fFZIAyei+/su8KgyEcCvOjodMsuNcXx4k7ziBkxgyChnIA+wz7oIAc64ir16B\\nkdLEU5F2gqphzCelTXYTbMDu3h37RuAP8FwbOqfqSE90iU2eQPsMadaciPR/o1mU\\n1XI6nIfbb/LhMmcB1KM1QoRpzwxOIHumImHiZPdFAoGAAjt97ixVLrhmn/BNyH4v\\nqfD5Y64GWTKL8iit1IDpdgezuwg88WTtaNyn8hbeXWTZN31uLRPOcw8xNNiXmSgE\\nxZ+l7krUVEFTWzTKs5pvjOKTyBDcZwqXHBqDXRBMRvqmFZK8IZbHrb4xBo/swZOT\\nlZodomzSBjWeb3gJr1yVfqc=\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-kb9we@loft-82248.iam.gserviceaccount.com","client_id":"108294975236920274622","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kb9we%40loft-82248.iam.gserviceaccount.com"}')},,,function(e,t,n){"use strict";n.r(t);var r=n(0);const o=n(3),c=n(4);console.log(o.apps.length);const i=(o.apps.length?o.app():o.initializeApp({credential:o.credential.cert(c)})).firestore();exports.handler=async(e,t,n)=>("OPTIONS"===e.httpMethod&&Object(r.a)(n),"POST"===e.httpMethod?(await async function(){return i.collection("dashboard").doc("coffee").set({lastUpdateTimestamp:Date.now()}).then(e=>console.log("success")).catch(e=>console.log("failure"))}(),Object(r.b)({statusCode:204,body:JSON.stringify({})})):{statusCode:405})}]));