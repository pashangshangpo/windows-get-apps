!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.windowsGetApps={})}(this,function(e){const n=function(){function e(){}return e.prototype.then=function(n,r){const o=new e,i=this.s;if(i){const e=1&i?n:r;if(e){try{t(o,1,e(this.v))}catch(e){t(o,2,e)}return o}return this}return this.o=function(e){try{const i=e.v;1&e.s?t(o,1,n?n(i):i):r?t(o,1,r(i)):t(o,2,i)}catch(e){t(o,2,e)}},o},e}();function t(e,r,o){if(!e.s){if(o instanceof n){if(!o.s)return void(o.o=t.bind(null,e,r));1&r&&(r=o.s),o=o.v}if(o&&o.then)return void o.then(t.bind(null,e,r),t.bind(null,e,2));e.s=r,e.v=o;const i=e.o;i&&i(e)}}function r(e){return e instanceof n&&1&e.s}const o="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function i(e,i,u){if("function"==typeof e[o]){var s,f,c,a=e[o]();if(function e(o){try{for(;!((s=a.next()).done||u&&u());)if((o=i(s.value))&&o.then){if(!r(o))return void o.then(e,c||(c=t.bind(null,f=new n,2)));o=o.v}f?t(f,1,o):f=o}catch(e){t(f||(f=new n),2,e)}}(),a.return){var l=function(e){try{s.done||a.return()}catch(e){}return e};if(f&&f.then)return f.then(l,function(e){throw l(e)});l()}return f}if(!("length"in e))throw new TypeError("Object is not iterable");for(var h=[],p=0;p<e.length;p++)h.push(e[p]);return function(e,o,i){var u,s,f=-1;return function c(a){try{for(;++f<e.length&&(!i||!i());)if((a=o(f))&&a.then){if(!r(a))return void a.then(c,s||(s=t.bind(null,u=new n,2)));a=a.v}u?t(u,1,a):u=a}catch(e){t(u||(u=new n),2,e)}}(),u}(h,function(e){return i(h[e])},u)}"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var u=require("path"),s=require("fs-promise"),f=s.readFilePaths,c=s.writeFile,a=s.exists,l=require("extract-file-icon"),h=function(e,n,t){try{return Promise.resolve(function(e,n){try{for(var t=[],r={},o=0,i=e;o<i.length;o+=1)t.push(f(i[o],function(e){return n.includes(u.extname(e))}));return Promise.resolve(Promise.all(t)).then(function(e){for(var n=0,t=e;n<t.length;n+=1)for(var o=0,i=t[n];o<i.length;o+=1)r[i[o]]="";return Object.keys(r)})}catch(e){return Promise.reject(e)}}(e,n)).then(function(e){function n(){return Promise.resolve(Promise.all(o)).then(function(){return r})}var r=[],o=[],s=i(e,function(e){var n=u.basename(e).replace(u.extname(e),""),i=t?u.resolve(t,n+".png"):u.resolve(".","apps",n+".png");return r.push({name:n,icon:i}),Promise.resolve(a(i)).then(function(n){n||o.push(c(i,l(e,32)))})});return s&&s.then?s.then(n):n()})}catch(e){return Promise.reject(e)}};e.getApp=function(e,n){try{var t=u.basename(e).replace(u.extname(e),""),r=n?u.resolve(n,t+".png"):u.resolve(".","apps",t+".png");return Promise.resolve(a(r)).then(function(n){function o(){return{name:t,icon:r}}var i=function(){if(!n)return Promise.resolve(c(r,l(e,32))).then(function(){})}();return i&&i.then?i.then(o):o()})}catch(e){return Promise.reject(e)}},e.default=function(e,n,t){void 0===e&&(e=""),void 0===n&&(n=[]),void 0===t&&(t=[]);for(var r=[".appref-ms",".exe",".lnk",".bat",".url"],o=["C:\\Users\\Default\\Links","C:\\Users\\Default\\Desktop","C:\\Users\\Administrator\\Desktop","C:\\Users\\Default\\AppData\\Roaming\\Microsoft\\Internet Explorer","C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs"],i=0,u=n;i<u.length;i+=1){var s=u[i];o.includes(s)||o.push(s)}for(var f=0,c=t;f<c.length;f+=1){var a=c[f];r.includes(a)||r.push(a)}return h(o,r,e)}});
