!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.windowsGetApps={})}(this,function(e){const n=function(){function e(){}return e.prototype.then=function(n,r){const o=new e,i=this.s;if(i){const e=1&i?n:r;if(e){try{t(o,1,e(this.v))}catch(e){t(o,2,e)}return o}return this}return this.o=function(e){try{const i=e.v;1&e.s?t(o,1,n?n(i):i):r?t(o,1,r(i)):t(o,2,i)}catch(e){t(o,2,e)}},o},e}();function t(e,r,o){if(!e.s){if(o instanceof n){if(!o.s)return void(o.o=t.bind(null,e,r));1&r&&(r=o.s),o=o.v}if(o&&o.then)return void o.then(t.bind(null,e,r),t.bind(null,e,2));e.s=r,e.v=o;const i=e.o;i&&i(e)}}function r(e){return e instanceof n&&1&e.s}const o="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function i(e,i,u){if("function"==typeof e[o]){var s,f,c,a=e[o]();if(function e(o){try{for(;!((s=a.next()).done||u&&u());)if((o=i(s.value))&&o.then){if(!r(o))return void o.then(e,c||(c=t.bind(null,f=new n,2)));o=o.v}f?t(f,1,o):f=o}catch(e){t(f||(f=new n),2,e)}}(),a.return){var l=function(e){try{s.done||a.return()}catch(e){}return e};if(f&&f.then)return f.then(l,function(e){throw l(e)});l()}return f}if(!("length"in e))throw new TypeError("Object is not iterable");for(var h=[],p=0;p<e.length;p++)h.push(e[p]);return function(e,o,i){var u,s,f=-1;return function c(a){try{for(;++f<e.length&&(!i||!i());)if((a=o(f))&&a.then){if(!r(a))return void a.then(c,s||(s=t.bind(null,u=new n,2)));a=a.v}u?t(u,1,a):u=a}catch(e){t(u||(u=new n),2,e)}}(),u}(h,function(e){return i(h[e])},u)}"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var u=require("path"),s=require("fs-promise"),f=s.readFilePaths,c=s.writeFile,a=s.exists,l=require("extract-file-icon"),h=function(e,n){try{return Promise.resolve(function(e,n){try{for(var t=[],r={},o=0,i=e;o<i.length;o+=1)t.push(f(i[o],function(e){return n.includes(u.extname(e))}));return Promise.resolve(Promise.all(t)).then(function(e){for(var n=0,t=e;n<t.length;n+=1)for(var o=0,i=t[n];o<i.length;o+=1)r[i[o]]="";return Object.keys(r)})}catch(e){return Promise.reject(e)}}(e,n)).then(function(e){function n(){return Promise.resolve(Promise.all(r)).then(function(){return t})}var t=[],r=[],o=i(e,function(e){var n=u.basename(e).replace(u.extname(e),""),o=u.resolve(".","apps",n+".png");return t.push({name:n,icon:o}),Promise.resolve(a(o)).then(function(n){n||r.push(c(o,l(e,32)))})});return o&&o.then?o.then(n):n()})}catch(e){return Promise.reject(e)}};e.getApp=function(e){try{var n=u.basename(e).replace(u.extname(e),""),t=u.resolve(".","apps",n+".png");return Promise.resolve(a(t)).then(function(r){function o(){return{name:n,icon:t}}var i=function(){if(!r)return Promise.resolve(c(t,l(e,32))).then(function(){})}();return i&&i.then?i.then(o):o()})}catch(e){return Promise.reject(e)}},e.default=function(e,n){void 0===e&&(e=[]),void 0===n&&(n=[]);for(var t=[".appref-ms",".exe",".lnk",".bat",".url"],r=["C:\\Users\\Default\\Links","C:\\Users\\Default\\Desktop","C:\\Users\\Administrator\\Desktop","C:\\Users\\Default\\AppData\\Roaming\\Microsoft\\Internet Explorer","C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs"],o=0,i=e;o<i.length;o+=1){var u=i[o];r.includes(u)||r.push(u)}for(var s=0,f=n;s<f.length;s+=1){var c=f[s];t.includes(c)||t.push(c)}return h(r,t)}});
