const e=function(){function e(){}return e.prototype.then=function(t,r){const o=new e,i=this.s;if(i){const e=1&i?t:r;if(e){try{n(o,1,e(this.v))}catch(e){n(o,2,e)}return o}return this}return this.o=function(e){try{const i=e.v;1&e.s?n(o,1,t?t(i):i):r?n(o,1,r(i)):n(o,2,i)}catch(e){n(o,2,e)}},o},e}();function n(t,r,o){if(!t.s){if(o instanceof e){if(!o.s)return void(o.o=n.bind(null,t,r));1&r&&(r=o.s),o=o.v}if(o&&o.then)return void o.then(n.bind(null,t,r),n.bind(null,t,2));t.s=r,t.v=o;const i=t.o;i&&i(t)}}function t(n){return n instanceof e&&1&n.s}const r="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function o(o,i,u){if("function"==typeof o[r]){var s,a,c,f=o[r]();if(function r(o){try{for(;!((s=f.next()).done||u&&u());)if((o=i(s.value))&&o.then){if(!t(o))return void o.then(r,c||(c=n.bind(null,a=new e,2)));o=o.v}a?n(a,1,o):a=o}catch(t){n(a||(a=new e),2,t)}}(),f.return){var l=function(e){try{s.done||f.return()}catch(e){}return e};if(a&&a.then)return a.then(l,function(e){throw l(e)});l()}return a}if(!("length"in o))throw new TypeError("Object is not iterable");for(var h=[],v=0;v<o.length;v++)h.push(o[v]);return function(r,o,i){var u,s,a=-1;return function c(f){try{for(;++a<r.length&&(!i||!i());)if((f=o(a))&&f.then){if(!t(f))return void f.then(c,s||(s=n.bind(null,u=new e,2)));f=f.v}u?n(u,1,f):u=f}catch(t){n(u||(u=new e),2,t)}}(),u}(h,function(e){return i(h[e])},u)}"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var i=require("path"),u=require("fs-promise"),s=u.readFilePaths,a=u.writeFile,c=u.exists,f=require("extract-file-icon"),l=function(e,n,t){try{return Promise.resolve(function(e,n){try{for(var t=[],r={},o=0,u=e;o<u.length;o+=1)t.push(s(u[o],function(e){return n.includes(i.extname(e))}));return Promise.resolve(Promise.all(t)).then(function(e){for(var n=0,t=e;n<t.length;n+=1)for(var o=0,i=t[n];o<i.length;o+=1)r[i[o]]="";return Object.keys(r)})}catch(e){return Promise.reject(e)}}(e,n)).then(function(e){function n(){return Promise.resolve(Promise.all(u)).then(function(){return r})}var r=[],u=[],s=o(e,function(e){var n=i.basename(e).replace(i.extname(e),""),o=t?i.resolve(t,n+".png"):i.resolve(".","apps",n+".png");return r.push({name:n,icon:o,path:e}),Promise.resolve(c(o)).then(function(n){n||u.push(a(o,f(e,32)))})});return s&&s.then?s.then(n):n()})}catch(e){return Promise.reject(e)}},h=function(e,n){try{var t=i.basename(e).replace(i.extname(e),""),r=n?i.resolve(n,t+".png"):i.resolve(".","apps",t+".png");return Promise.resolve(c(r)).then(function(n){function o(){return{name:t,icon:r,path:e}}var i=function(){if(!n)return Promise.resolve(a(r,f(e,32))).then(function(){})}();return i&&i.then?i.then(o):o()})}catch(e){return Promise.reject(e)}};export default function(e,n,t){void 0===e&&(e=""),void 0===n&&(n=[]),void 0===t&&(t=[]);for(var r=[".appref-ms",".exe",".lnk",".bat",".url"],o=["C:\\Users\\Default\\Links","C:\\Users\\Default\\Desktop","C:\\Users\\Administrator\\Desktop","C:\\Users\\Default\\AppData\\Roaming\\Microsoft\\Internet Explorer","C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs"],i=0,u=n;i<u.length;i+=1){var s=u[i];o.includes(s)||o.push(s)}for(var a=0,c=t;a<c.length;a+=1){var f=c[a];r.includes(f)||r.push(f)}return l(o,r,e)}export{h as getApp};
