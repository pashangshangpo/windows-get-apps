const n=function(){function n(){}return n.prototype.then=function(r,e){const o=new n,i=this.s;if(i){const n=1&i?r:e;if(n){try{t(o,1,n(this.v))}catch(n){t(o,2,n)}return o}return this}return this.o=function(n){try{const i=n.v;1&n.s?t(o,1,r?r(i):i):e?t(o,1,e(i)):t(o,2,i)}catch(n){t(o,2,n)}},o},n}();function t(r,e,o){if(!r.s){if(o instanceof n){if(!o.s)return void(o.o=t.bind(null,r,e));1&e&&(e=o.s),o=o.v}if(o&&o.then)return void o.then(t.bind(null,r,e),t.bind(null,r,2));r.s=e,r.v=o;const i=r.o;i&&i(r)}}function r(t){return t instanceof n&&1&t.s}const e="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function o(o,i,u){if("function"==typeof o[e]){var s,a,c,f=o[e]();if(function e(o){try{for(;!((s=f.next()).done||u&&u());)if((o=i(s.value))&&o.then){if(!r(o))return void o.then(e,c||(c=t.bind(null,a=new n,2)));o=o.v}a?t(a,1,o):a=o}catch(r){t(a||(a=new n),2,r)}}(),f.return){var l=function(n){try{s.done||f.return()}catch(n){}return n};if(a&&a.then)return a.then(l,function(n){throw l(n)});l()}return a}if(!("length"in o))throw new TypeError("Object is not iterable");for(var h=[],v=0;v<o.length;v++)h.push(o[v]);return function(e,o,i){var u,s,a=-1;return function c(f){try{for(;++a<e.length&&(!i||!i());)if((f=o(a))&&f.then){if(!r(f))return void f.then(c,s||(s=t.bind(null,u=new n,2)));f=f.v}u?t(u,1,f):u=f}catch(r){t(u||(u=new n),2,r)}}(),u}(h,function(n){return i(h[n])},u)}"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var i=require("path"),u=require("fs-promise"),s=u.readFilePaths,a=u.writeFile,c=u.exists,f=require("extract-file-icon"),l=function(n,t){try{return Promise.resolve(function(n,t){try{for(var r=[],e={},o=0,u=n;o<u.length;o+=1)r.push(s(u[o],function(n){return t.includes(i.extname(n))}));return Promise.resolve(Promise.all(r)).then(function(n){for(var t=0,r=n;t<r.length;t+=1)for(var o=0,i=r[t];o<i.length;o+=1)e[i[o]]="";return Object.keys(e)})}catch(n){return Promise.reject(n)}}(n,t)).then(function(n){function t(){return Promise.resolve(Promise.all(e)).then(function(){return r})}var r=[],e=[],u=o(n,function(n){var t=i.basename(n).replace(i.extname(n),""),o=i.resolve(".","apps",t+".png");return r.push({name:t,icon:o}),Promise.resolve(c(o)).then(function(t){t||e.push(a(o,f(n,32)))})});return u&&u.then?u.then(t):t()})}catch(n){return Promise.reject(n)}};module.exports=function(n,t){void 0===n&&(n=[]),void 0===t&&(t=[]);for(var r=[".appref-ms",".exe",".lnk",".bat",".url"],e=["C:\\Users\\Default\\Links","C:\\Users\\Default\\Desktop","C:\\Users\\Administrator\\Desktop","C:\\Users\\Default\\AppData\\Roaming\\Microsoft\\Internet Explorer","C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs"],o=0,i=n;o<i.length;o+=1){var u=i[o];e.includes(u)||e.push(u)}for(var s=0,a=t;s<a.length;s+=1){var c=a[s];r.includes(c)||r.push(c)}return l(e,r)};
