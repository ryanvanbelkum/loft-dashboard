!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){var o,n,s,i,u,a,c,l,f,p,d,h,y,b,m;s=function(e,t,r){if(!f(t)||d(t)||h(t)||y(t)||l(t))return t;var o,n=0,i=0;if(p(t))for(o=[],i=t.length;n<i;n++)o.push(s(e,t[n],r));else for(var u in o={},t)Object.prototype.hasOwnProperty.call(t,u)&&(o[e(u,r)]=s(e,t[u],r));return o},i=function(e){return b(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)},u=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},a=function(e,t){return function(e,t){var r=(t=t||{}).separator||"_",o=t.split||/(?=[A-Z])/;return e.split(o).join(r)}(e,t).toLowerCase()},c=Object.prototype.toString,l=function(e){return"function"==typeof e},f=function(e){return e===Object(e)},p=function(e){return"[object Array]"==c.call(e)},d=function(e){return"[object Date]"==c.call(e)},h=function(e){return"[object RegExp]"==c.call(e)},y=function(e){return"[object Boolean]"==c.call(e)},b=function(e){return(e-=0)==e},m=function(e,t){var r=t&&"process"in t?t.process:t;return"function"!=typeof r?e:function(t,o){return r(t,e,o)}},void 0===(n="function"==typeof(o={camelize:i,decamelize:a,pascalize:u,depascalize:a,camelizeKeys:function(e,t){return s(m(i,t),e)},decamelizeKeys:function(e,t){return s(m(a,t),e,t)},pascalizeKeys:function(e,t){return s(m(u,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}})?o.call(t,r,t,e):o)||(e.exports=n)},function(e,t){e.exports=require("stream")},function(e,t){e.exports=require("zlib")},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("https")},function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),s=r(1),i=r(4),u=r(3),a=r(5),c=r(2);const l=s.Readable,f=Symbol("buffer"),p=Symbol("type");class d{constructor(){this[p]="";const e=arguments[0],t=arguments[1],r=[];let o=0;if(e){const t=e,n=Number(t.length);for(let e=0;e<n;e++){const n=t[e];let s;o+=(s=n instanceof Buffer?n:ArrayBuffer.isView(n)?Buffer.from(n.buffer,n.byteOffset,n.byteLength):n instanceof ArrayBuffer?Buffer.from(n):n instanceof d?n[f]:Buffer.from("string"==typeof n?n:String(n))).length,r.push(s)}}this[f]=Buffer.concat(r);let n=t&&void 0!==t.type&&String(t.type).toLowerCase();n&&!/[^\u0020-\u007E]/.test(n)&&(this[p]=n)}get size(){return this[f].length}get type(){return this[p]}text(){return Promise.resolve(this[f].toString())}arrayBuffer(){const e=this[f],t=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);return Promise.resolve(t)}stream(){const e=new l;return e._read=function(){},e.push(this[f]),e.push(null),e}toString(){return"[object Blob]"}slice(){const e=this.size,t=arguments[0],r=arguments[1];let o,n;o=void 0===t?0:t<0?Math.max(e+t,0):Math.min(t,e),n=void 0===r?e:r<0?Math.max(e+r,0):Math.min(r,e);const s=Math.max(n-o,0),i=this[f].slice(o,o+s),u=new d([],{type:arguments[2]});return u[f]=i,u}}function h(e,t,r){Error.call(this,e),this.message=e,this.type=t,r&&(this.code=this.errno=r.code),Error.captureStackTrace(this,this.constructor)}let y;Object.defineProperties(d.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}}),Object.defineProperty(d.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0}),h.prototype=Object.create(Error.prototype),h.prototype.constructor=h,h.prototype.name="FetchError";try{y=require("encoding").convert}catch(e){}const b=Symbol("Body internals"),m=s.PassThrough;function g(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.size;let n=void 0===o?0:o;var i=r.timeout;let u=void 0===i?0:i;null==e?e=null:v(e)?e=Buffer.from(e.toString()):j(e)||Buffer.isBuffer(e)||("[object ArrayBuffer]"===Object.prototype.toString.call(e)?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof s||(e=Buffer.from(String(e)))),this[b]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=u,e instanceof s&&e.on("error",function(e){const r="AbortError"===e.name?e:new h(`Invalid response body while trying to fetch ${t.url}: ${e.message}`,"system",e);t[b].error=r})}function w(){var e=this;if(this[b].disturbed)return g.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[b].disturbed=!0,this[b].error)return g.Promise.reject(this[b].error);let t=this.body;if(null===t)return g.Promise.resolve(Buffer.alloc(0));if(j(t)&&(t=t.stream()),Buffer.isBuffer(t))return g.Promise.resolve(t);if(!(t instanceof s))return g.Promise.resolve(Buffer.alloc(0));let r=[],o=0,n=!1;return new g.Promise(function(s,i){let u;e.timeout&&(u=setTimeout(function(){n=!0,i(new h(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(t){"AbortError"===t.name?(n=!0,i(t)):i(new h(`Invalid response body while trying to fetch ${e.url}: ${t.message}`,"system",t))}),t.on("data",function(t){if(!n&&null!==t){if(e.size&&o+t.length>e.size)return n=!0,void i(new h(`content size at ${e.url} over limit: ${e.size}`,"max-size"));o+=t.length,r.push(t)}}),t.on("end",function(){if(!n){clearTimeout(u);try{s(Buffer.concat(r,o))}catch(t){i(new h(`Could not create Buffer from response body for ${e.url}: ${t.message}`,"system",t))}}})})}function v(e){return"object"==typeof e&&"function"==typeof e.append&&"function"==typeof e.delete&&"function"==typeof e.get&&"function"==typeof e.getAll&&"function"==typeof e.has&&"function"==typeof e.set&&("URLSearchParams"===e.constructor.name||"[object URLSearchParams]"===Object.prototype.toString.call(e)||"function"==typeof e.sort)}function j(e){return"object"==typeof e&&"function"==typeof e.arrayBuffer&&"string"==typeof e.type&&"function"==typeof e.stream&&"function"==typeof e.constructor&&"string"==typeof e.constructor.name&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function S(e){let t,r,o=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return o instanceof s&&"function"!=typeof o.getBoundary&&(t=new m,r=new m,o.pipe(t),o.pipe(r),e[b].body=t,o=r),o}function O(e){return null===e?null:"string"==typeof e?"text/plain;charset=UTF-8":v(e)?"application/x-www-form-urlencoded;charset=UTF-8":j(e)?e.type||null:Buffer.isBuffer(e)?null:"[object ArrayBuffer]"===Object.prototype.toString.call(e)?null:ArrayBuffer.isView(e)?null:"function"==typeof e.getBoundary?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof s?null:"text/plain;charset=UTF-8"}function T(e){const t=e.body;return null===t?0:j(t)?t.size:Buffer.isBuffer(t)?t.length:t&&"function"==typeof t.getLengthSync&&(t._lengthRetrievers&&0==t._lengthRetrievers.length||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}g.prototype={get body(){return this[b].body},get bodyUsed(){return this[b].disturbed},arrayBuffer(){return w.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return w.call(this).then(function(t){return Object.assign(new d([],{type:e.toLowerCase()}),{[f]:t})})},json(){var e=this;return w.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(t){return g.Promise.reject(new h(`invalid json response body at ${e.url} reason: ${t.message}`,"invalid-json"))}})},text(){return w.call(this).then(function(e){return e.toString()})},buffer(){return w.call(this)},textConverted(){var e=this;return w.call(this).then(function(t){return function(e,t){if("function"!=typeof y)throw new Error("The package `encoding` must be installed to use the textConverted() function");const r=t.get("content-type");let o,n,s="utf-8";r&&(o=/charset=([^;]*)/i.exec(r));n=e.slice(0,1024).toString(),!o&&n&&(o=/<meta.+?charset=(['"])(.+?)\1/i.exec(n));!o&&n&&(o=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(n))&&(o=/charset=(.*)/i.exec(o.pop()));!o&&n&&(o=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(n));o&&("gb2312"!==(s=o.pop())&&"gbk"!==s||(s="gb18030"));return y(e,"UTF-8",s).toString()}(t,e.headers)})}},Object.defineProperties(g.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}}),g.mixIn=function(e){for(const t of Object.getOwnPropertyNames(g.prototype))if(!(t in e)){const r=Object.getOwnPropertyDescriptor(g.prototype,t);Object.defineProperty(e,t,r)}},g.Promise=global.Promise;const x=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,P=/[^\t\x20-\x7e\x80-\xff]/;function E(e){if(e=`${e}`,x.test(e)||""===e)throw new TypeError(`${e} is not a legal HTTP header name`)}function B(e){if(e=`${e}`,P.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function C(e,t){t=t.toLowerCase();for(const r in e)if(r.toLowerCase()===t)return r}const $=Symbol("map");class z{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(this[$]=Object.create(null),e instanceof z){const t=e.raw(),r=Object.keys(t);for(const e of r)for(const r of t[e])this.append(e,r)}else if(null==e);else{if("object"!=typeof e)throw new TypeError("Provided initializer must be an object");{const t=e[Symbol.iterator];if(null!=t){if("function"!=typeof t)throw new TypeError("Header pairs must be iterable");const r=[];for(const t of e){if("object"!=typeof t||"function"!=typeof t[Symbol.iterator])throw new TypeError("Each header pair must be iterable");r.push(Array.from(t))}for(const e of r){if(2!==e.length)throw new TypeError("Each header pair must be a name/value tuple");this.append(e[0],e[1])}}else for(const t of Object.keys(e)){const r=e[t];this.append(t,r)}}}}get(e){E(e=`${e}`);const t=C(this[$],e);return void 0===t?null:this[$][t].join(", ")}forEach(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=L(this),o=0;for(;o<r.length;){var n=r[o];const s=n[0],i=n[1];e.call(t,i,s,this),r=L(this),o++}}set(e,t){t=`${t}`,E(e=`${e}`),B(t);const r=C(this[$],e);this[$][void 0!==r?r:e]=[t]}append(e,t){t=`${t}`,E(e=`${e}`),B(t);const r=C(this[$],e);void 0!==r?this[$][r].push(t):this[$][e]=[t]}has(e){return E(e=`${e}`),void 0!==C(this[$],e)}delete(e){E(e=`${e}`);const t=C(this[$],e);void 0!==t&&delete this[$][t]}raw(){return this[$]}keys(){return k(this,"key")}values(){return k(this,"value")}[Symbol.iterator](){return k(this,"key+value")}}function L(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key+value";return Object.keys(e[$]).sort().map("key"===t?function(e){return e.toLowerCase()}:"value"===t?function(t){return e[$][t].join(", ")}:function(t){return[t.toLowerCase(),e[$][t].join(", ")]})}z.prototype.entries=z.prototype[Symbol.iterator],Object.defineProperty(z.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(z.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});const A=Symbol("internal");function k(e,t){const r=Object.create(R);return r[A]={target:e,kind:t,index:0},r}const R=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==R)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[A];const t=e.target,r=e.kind,o=e.index,n=L(t,r);return o>=n.length?{value:void 0,done:!0}:(this[A].index=o+1,{value:n[o],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));function U(e){const t=Object.assign({__proto__:null},e[$]),r=C(e[$],"Host");return void 0!==r&&(t[r]=t[r][0]),t}Object.defineProperty(R,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});const _=Symbol("Response internals"),q=i.STATUS_CODES;class H{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g.call(this,e,t);const r=t.status||200,o=new z(t.headers);if(null!=e&&!o.has("Content-Type")){const t=O(e);t&&o.append("Content-Type",t)}this[_]={url:t.url,status:r,statusText:t.statusText||q[r],headers:o,counter:t.counter}}get url(){return this[_].url||""}get status(){return this[_].status}get ok(){return this[_].status>=200&&this[_].status<300}get redirected(){return this[_].counter>0}get statusText(){return this[_].statusText}get headers(){return this[_].headers}clone(){return new H(S(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}}g.mixIn(H.prototype),Object.defineProperties(H.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}}),Object.defineProperty(H.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});const F=Symbol("Request internals"),M=u.parse,I=u.format,D="destroy"in s.Readable.prototype;function K(e){return"object"==typeof e&&"object"==typeof e[F]}class N{constructor(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};K(e)?t=M(e.url):(t=e&&e.href?M(e.href):M(`${e}`),e={});let o=r.method||e.method||"GET";if(o=o.toUpperCase(),(null!=r.body||K(e)&&null!==e.body)&&("GET"===o||"HEAD"===o))throw new TypeError("Request with GET/HEAD method cannot have body");let n=null!=r.body?r.body:K(e)&&null!==e.body?S(e):null;g.call(this,n,{timeout:r.timeout||e.timeout||0,size:r.size||e.size||0});const s=new z(r.headers||e.headers||{});if(null!=n&&!s.has("Content-Type")){const e=O(n);e&&s.append("Content-Type",e)}let i=K(e)?e.signal:null;if("signal"in r&&(i=r.signal),null!=i&&!function(e){const t=e&&"object"==typeof e&&Object.getPrototypeOf(e);return!(!t||"AbortSignal"!==t.constructor.name)}(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[F]={method:o,redirect:r.redirect||e.redirect||"follow",headers:s,parsedURL:t,signal:i},this.follow=void 0!==r.follow?r.follow:void 0!==e.follow?e.follow:20,this.compress=void 0!==r.compress?r.compress:void 0===e.compress||e.compress,this.counter=r.counter||e.counter||0,this.agent=r.agent||e.agent}get method(){return this[F].method}get url(){return I(this[F].parsedURL)}get headers(){return this[F].headers}get redirect(){return this[F].redirect}get signal(){return this[F].signal}clone(){return new N(this)}}function G(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}g.mixIn(N.prototype),Object.defineProperty(N.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(N.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}}),G.prototype=Object.create(Error.prototype),G.prototype.constructor=G,G.prototype.name="AbortError";const V=s.PassThrough,Z=u.resolve;function J(e,t){if(!J.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return g.Promise=J.Promise,new J.Promise(function(r,o){const n=new N(e,t),u=function(e){const t=e[F].parsedURL,r=new z(e[F].headers);if(r.has("Accept")||r.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof s.Readable&&!D)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let o=null;if(null==e.body&&/^(POST|PUT)$/i.test(e.method)&&(o="0"),null!=e.body){const t=T(e);"number"==typeof t&&(o=String(t))}o&&r.set("Content-Length",o),r.has("User-Agent")||r.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!r.has("Accept-Encoding")&&r.set("Accept-Encoding","gzip,deflate");let n=e.agent;return"function"==typeof n&&(n=n(t)),r.has("Connection")||n||r.set("Connection","close"),Object.assign({},t,{method:e.method,headers:U(r),agent:n})}(n),l=("https:"===u.protocol?a:i).request,f=n.signal;let p=null;const d=function(){let e=new G("The user aborted a request.");o(e),n.body&&n.body instanceof s.Readable&&n.body.destroy(e),p&&p.body&&p.body.emit("error",e)};if(f&&f.aborted)return void d();const y=function(){d(),g()},b=l(u);let m;function g(){b.abort(),f&&f.removeEventListener("abort",y),clearTimeout(m)}f&&f.addEventListener("abort",y),n.timeout&&b.once("socket",function(e){m=setTimeout(function(){o(new h(`network timeout at: ${n.url}`,"request-timeout")),g()},n.timeout)}),b.on("error",function(e){o(new h(`request to ${n.url} failed, reason: ${e.message}`,"system",e)),g()}),b.on("response",function(e){clearTimeout(m);const t=function(e){const t=new z;for(const r of Object.keys(e))if(!x.test(r))if(Array.isArray(e[r]))for(const o of e[r])P.test(o)||(void 0===t[$][r]?t[$][r]=[o]:t[$][r].push(o));else P.test(e[r])||(t[$][r]=[e[r]]);return t}(e.headers);if(J.isRedirect(e.statusCode)){const s=t.get("Location"),i=null===s?null:Z(n.url,s);switch(n.redirect){case"error":return o(new h(`redirect mode is set to error: ${n.url}`,"no-redirect")),void g();case"manual":if(null!==i)try{t.set("Location",i)}catch(e){o(e)}break;case"follow":if(null===i)break;if(n.counter>=n.follow)return o(new h(`maximum redirect reached at: ${n.url}`,"max-redirect")),void g();const s={headers:new z(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout};return 303!==e.statusCode&&n.body&&null===T(n)?(o(new h("Cannot follow redirect with body being a readable stream","unsupported-redirect")),void g()):(303!==e.statusCode&&(301!==e.statusCode&&302!==e.statusCode||"POST"!==n.method)||(s.method="GET",s.body=void 0,s.headers.delete("content-length")),r(J(new N(i,s))),void g())}}e.once("end",function(){f&&f.removeEventListener("abort",y)});let s=e.pipe(new V);const i={url:n.url,status:e.statusCode,statusText:e.statusMessage,headers:t,size:n.size,timeout:n.timeout,counter:n.counter},u=t.get("Content-Encoding");if(!n.compress||"HEAD"===n.method||null===u||204===e.statusCode||304===e.statusCode)return p=new H(s,i),void r(p);const a={flush:c.Z_SYNC_FLUSH,finishFlush:c.Z_SYNC_FLUSH};if("gzip"==u||"x-gzip"==u)return s=s.pipe(c.createGunzip(a)),p=new H(s,i),void r(p);if("deflate"!=u&&"x-deflate"!=u){if("br"==u&&"function"==typeof c.createBrotliDecompress)return s=s.pipe(c.createBrotliDecompress()),p=new H(s,i),void r(p);p=new H(s,i),r(p)}else{e.pipe(new V).once("data",function(e){s=8==(15&e[0])?s.pipe(c.createInflate()):s.pipe(c.createInflateRaw()),p=new H(s,i),r(p)})}}),function(e,t){const r=t.body;null===r?e.end():j(r)?r.stream().pipe(e):Buffer.isBuffer(r)?(e.write(r),e.end()):r.pipe(e)}(b,n)})}J.isRedirect=function(e){return 301===e||302===e||303===e||307===e||308===e},J.Promise=global.Promise;var Y=J;exports.handler=async(e,t,r)=>{const o=await Y("https://api.darksky.net/forecast/d8be2b19a521f77df55dfd0a103e3c9b/39.767450,-94.849930?exclude=daily,minutely,alerts,flags,hourly").then(e=>e.json()).then(e=>n.a.camelizeKeys(e));return{statusCode:200,body:JSON.stringify(o)}}}]));