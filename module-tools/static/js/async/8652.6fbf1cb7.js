"use strict";(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([[8652],{11533:function(t){!function(e,i,s){let n;(n=s.define)&&n.amd?n([],(function(){return i})):(n=s.modules)?n["FlexSearch".toLowerCase()]=i:t.exports=i}(0,function t(e){function i(t,e){const i=e?e.id:t&&t.id;this.id=i||0===i?i:P++,this.init(t,e),o(this,"index",(function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)})),o(this,"length",(function(){return this.index.length}))}function s(t,e,i,s){return this.u!==this.g&&(this.o=this.o.concat(i),this.u++,s&&this.o.length>=s&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(e,this.o),this.F&&this.F(this.o))),this}function n(t){const e=D();for(const i in t)if(t.hasOwnProperty(i)){const s=t[i];w(s)?e[i]=s.slice(0):k(s)?e[i]=n(s):e[i]=s}return e}function r(t,e){const i=t.length,s=b(e),n=[];for(let r=0,h=0;r<i;r++){const i=t[r];(s&&e(i)||!s&&!e[i])&&(n[h++]=i)}return n}function h(t,e,i,s,n,r,h,o,l,c){let u;if(i=y(i,h?0:n,o,r,e,l,c),o&&(o=i.page,u=i.next,i=i.result),h)e=this.where(h,null,n,i);else{for(e=i,i=this.l,n=e.length,r=Array(n),h=0;h<n;h++)r[h]=i[e[h]];e=r}return i=e,s&&(b(s)||(S=s.split(":"),1<S.length?s=g:(S=S[0],s=p)),i.sort(s)),i=v(o,u,i),this.cache&&this.j.set(t,i),i}function o(t,e,i){Object.defineProperty(t,e,{get:i})}function l(t){return new RegExp(t,"g")}function c(t,e){for(let i=0;i<e.length;i+=2)t=t.replace(e[i],e[i+1]);return t}function u(t,e,i,s,n,r,h,o){return e[i]?e[i]:(n=n?(o-(h||o/1.5))*r+(h||o/1.5)*n:r,e[i]=n,n>=h&&((t=(t=t[o-(n+.5>>0)])[i]||(t[i]=[]))[t.length]=s),n)}function a(t,e){if(t){const i=Object.keys(t);for(let s=0,n=i.length;s<n;s++){const n=i[s],r=t[n];if(r)for(let i=0,s=r.length;i<s;i++){if(r[i]===e){1===s?delete t[n]:r.splice(i,1);break}k(r[i])&&a(r[i],e)}}}}function f(t){let e="",i="";var s="";for(let n=0;n<t.length;n++){const r=t[n];r!==i&&(n&&"h"===r?(s="a"===s||"e"===s||"i"===s||"o"===s||"u"===s||"y"===s,(("a"===i||"e"===i||"i"===i||"o"===i||"u"===i||"y"===i)&&s||" "===i)&&(e+=r)):e+=r),s=n===t.length-1?"":t[n+1],i=r}return e}function d(t,e){return 0>(t=t.length-e.length)?1:t?-1:0}function p(t,e){return(t=t[S])<(e=e[S])?-1:t>e?1:0}function g(t,e){const i=S.length;for(let s=0;s<i;s++)t=t[S[s]],e=e[S[s]];return t<e?-1:t>e?1:0}function v(t,e,i){return t?{page:t,next:e?""+e:null,result:i}:i}function y(t,e,i,s,n,r,h){let o,l=[];if(!0===i){i="0";var c=""}else c=i&&i.split(":");const u=t.length;if(1<u){const w=D(),b=[];let k,x;var a,f=0;let Z;var d=!0;let j,O,A,C,P,W,M=0;if(c&&(2===c.length?(C=c,c=!1):c=P=parseInt(c[0],10)),h){for(k=D();f<u;f++)if("not"===n[f])for(x=t[f],Z=x.length,a=0;a<Z;a++)k["@"+x[a]]=1;else A=f+1;if(F(A))return v(i,o,l);f=0}else O=m(n)&&n;for(;f<u;f++){const m=f===(A||u)-1;if(!O||!f)if((a=O||n&&n[f])&&"and"!==a){if("or"!==a)continue;W=!1}else W=r=!0;if(x=t[f],Z=x.length){if(d){if(!j){j=x;continue}var p=j.length;for(a=0;a<p;a++){var g="@"+(d=j[a]);h&&k[g]||(w[g]=1,r||(l[M++]=d))}j=null,d=!1}for(g=!1,a=0;a<Z;a++){var y="@"+(p=x[a]);const t=r?w[y]||0:f;if(!(!t&&!s||h&&k[y]||!r&&w[y]))if(t===f){if(m){if((!P||--P<M)&&(l[M++]=p,e&&M===e))return v(i,M+(c||0),l)}else w[y]=f+1;g=!0}else s&&((y=b[t]||(b[t]=[]))[y.length]=p)}if(W&&!g&&!s)break}else if(W&&!s)return v(i,o,x)}if(j)if(f=j.length,h)for(a=c?parseInt(c,10):0;a<f;a++)k["@"+(t=j[a])]||(l[M++]=t);else l=j;if(s)for(M=l.length,C?(f=parseInt(C[0],10)+1,a=parseInt(C[1],10)+1):(f=b.length,a=0);f--;)if(p=b[f]){for(Z=p.length;a<Z;a++)if(s=p[a],(!h||!k["@"+s])&&(l[M++]=s,e&&M===e))return v(i,f+":"+a,l);a=0}}else!u||n&&"not"===n[0]||(l=t[0],c&&(c=parseInt(c[0],10)));return e&&(h=l.length,c&&c>h&&(c=0),o=(c=c||0)+e,o<h?l=l.slice(c,o):(o=0,c&&(l=l.slice(c)))),v(i,o,l)}function m(t){return"string"==typeof t}function w(t){return t.constructor===Array}function b(t){return"function"==typeof t}function k(t){return"object"==typeof t}function F(t){return void 0===t}function x(t){const e=Array(t);for(let i=0;i<t;i++)e[i]=D();return e}function D(){return Object.create(null)}function Z(){let t,e;self.onmessage=function(i){if(i=i.data)if(i.search){const s=e.search(i.content,i.threshold?{limit:i.limit,threshold:i.threshold,where:i.where}:i.limit);self.postMessage({id:t,content:i.content,limit:i.limit,result:s})}else i.add?e.add(i.id,i.content):i.update?e.update(i.id,i.content):i.remove?e.remove(i.id):i.clear?e.clear():i.info?((i=e.info()).worker=t,console.log(i)):i.register&&(t=i.id,i.options.cache=!1,i.options.async=!1,i.options.worker=!1,e=new Function(i.register.substring(i.register.indexOf("{")+1,i.register.lastIndexOf("}")))(),e=new e(i.options))}}function j(i,s,n,r){i=e("flexsearch","id"+i,Z,(function(t){(t=t.data)&&t.result&&r(t.id,t.content,t.result,t.limit,t.where,t.cursor,t.suggest)}),s);const h=t.toString();return n.id=s,i.postMessage({register:h,options:n,id:s}),i}const O={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},A={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},C=[];let P=0;const W={},M={};let S;i.create=function(t,e){return new i(t,e)},i.registerMatcher=function(t){for(const e in t)t.hasOwnProperty(e)&&C.push(l(e),t[e]);return this},i.registerEncoder=function(t,e){return I[t]=e.bind(I),this},i.registerLanguage=function(t,e){return W[t]=e.filter,M[t]=e.stemmer,this},i.encode=function(t,e){return I[t](e)},i.prototype.init=function(t,e){if(this.v=[],e){var r=e.preset;t=e}else t||(t=O),r=t.preset;if(e={},m(t)?(e=A[t],t={}):r&&(e=A[r]),r=t.worker)if("undefined"==typeof Worker)t.worker=!1,this.m=null;else{var h=parseInt(r,10)||4;this.C=-1,this.u=0,this.o=[],this.F=null,this.m=Array(h);for(var o=0;o<h;o++)this.m[o]=j(this.id,o,t,s.bind(this))}if(this.f=t.tokenize||e.f||this.f||O.f,this.split=F(r=t.split)?this.split||O.split:m(r)?l(r):r,this.D=t.rtl||this.D||O.D,this.async="undefined"==typeof Promise||F(r=t.async)?this.async||O.async:r,this.g=F(r=t.worker)?this.g||O.g:r,this.threshold=F(r=t.threshold)?e.threshold||this.threshold||O.threshold:r,this.b=F(r=t.resolution)?r=e.b||this.b||O.b:r,r<=this.threshold&&(this.b=this.threshold+1),this.depth="strict"!==this.f||F(r=t.depth)?e.depth||this.depth||O.depth:r,this.w=(r=F(r=t.encode)?e.encode||O.encode:r)&&I[r]&&I[r].bind(I)||(b(r)?r:this.w||!1),(r=t.matcher)&&this.addMatcher(r),r=(e=t.lang)||t.filter){if(m(r)&&(r=W[r]),w(r)){h=this.w,o=D();for(var c=0;c<r.length;c++){var u=h?h(r[c]):r[c];o[u]=1}r=o}this.filter=r}if(r=e||t.stemmer){var a;for(a in e=m(r)?M[r]:r,h=this.w,o=[],e)e.hasOwnProperty(a)&&(c=h?h(a):a,o.push(l(c+"($|\\W)"),h?h(e[a]):e[a]));this.stemmer=a=o}if(this.a=o=(r=t.doc)?n(r):this.a||O.a,this.i=x(this.b-(this.threshold||0)),this.h=D(),this.c=D(),o){if(this.l=D(),t.doc=null,a=o.index={},e=o.keys=[],h=o.field,c=o.tag,u=o.store,w(o.id)||(o.id=o.id.split(":")),u){var f=D();if(m(u))f[u]=1;else if(w(u))for(let t=0;t<u.length;t++)f[u[t]]=1;else k(u)&&(f=u);o.store=f}if(c){if(this.G=D(),u=D(),h)if(m(h))u[h]=t;else if(w(h))for(f=0;f<h.length;f++)u[h[f]]=t;else k(h)&&(u=h);for(w(c)||(o.tag=c=[c]),h=0;h<c.length;h++)this.G[c[h]]=D();this.I=c,h=u}if(h){let s;for(w(h)||(k(h)?(s=h,o.field=h=Object.keys(h)):o.field=h=[h]),o=0;o<h.length;o++)w(c=h[o])||(s&&(t=s[c]),e[o]=c,h[o]=c.split(":")),a[c]=new i(t)}t.doc=r}return this.B=!0,this.j=!!(this.cache=r=F(r=t.cache)?this.cache||O.cache:r)&&new _(r),this},i.prototype.encode=function(t){return t&&(C.length&&(t=c(t,C)),this.v.length&&(t=c(t,this.v)),this.w&&(t=this.w(t)),this.stemmer&&(t=c(t,this.stemmer))),t},i.prototype.addMatcher=function(t){const e=this.v;for(const i in t)t.hasOwnProperty(i)&&e.push(l(i),t[i]);return this},i.prototype.add=function(t,e,i,s,n){if(this.a&&k(t))return this.A("add",t,e);if(e&&m(e)&&(t||0===t)){var h="@"+t;if(this.c[h]&&!s)return this.update(t,e);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:t,content:e}),this.c[h]=""+this.C,i&&i(),this;if(!n){if(this.async&&"function"!=typeof importScripts){let n=this;return h=new Promise((function(i){setTimeout((function(){n.add(t,e,null,s,!0),n=null,i()}))})),i?(h.then(i),this):h}if(i)return this.add(t,e,null,s,!0),i(),this}if(!(e=this.encode(e)).length)return this;n=b(i=this.f)?i(e):e.split(this.split),this.filter&&(n=r(n,this.filter));const d=D();d._ctx=D();const p=n.length,g=this.threshold,v=this.depth,y=this.b,m=this.i,w=this.D;for(let e=0;e<p;e++){var o=n[e];if(o){var l=o.length,c=(w?e+1:p-e)/p,a="";switch(i){case"reverse":case"both":for(var f=l;--f;)u(m,d,a=o[f]+a,t,w?1:(l-f)/l,c,g,y-1);a="";case"forward":for(f=0;f<l;f++)u(m,d,a+=o[f],t,w?(f+1)/l:1,c,g,y-1);break;case"full":for(f=0;f<l;f++){const e=(w?f+1:l-f)/l;for(let i=l;i>f;i--)u(m,d,a=o.substring(f,i),t,e,c,g,y-1)}break;default:if(l=u(m,d,o,t,1,c,g,y-1),v&&1<p&&l>=g)for(l=d._ctx[o]||(d._ctx[o]=D()),o=this.h[o]||(this.h[o]=x(y-(g||0))),0>(c=e-v)&&(c=0),(a=e+v+1)>p&&(a=p);c<a;c++)c!==e&&u(o,l,n[c],t,0,y-(c<e?e-c:c-e),g,y-1)}}}this.c[h]=1,this.B=!1}return this},i.prototype.A=function(t,e,i){if(w(e)){var s=e.length;if(s--){for(var n=0;n<s;n++)this.A(t,e[n]);return this.A(t,e[s],i)}}else{var r,h=this.a.index,o=this.a.keys,l=this.a.tag;n=this.a.store;var c=this.a.id;s=e;for(var u=0;u<c.length;u++)s=s[c[u]];if("remove"===t&&(delete this.l[s],c=o.length,c--)){for(e=0;e<c;e++)h[o[e]].remove(s);return h[o[c]].remove(s,i)}if(l){for(r=0;r<l.length;r++){var a=l[r],f=e;for(c=a.split(":"),u=0;u<c.length;u++)f=f[c[u]];f="@"+f}r=(r=this.G[a])[f]||(r[f]=[])}for(let n=0,r=(c=this.a.field).length;n<r;n++){for(a=c[n],l=e,f=0;f<a.length;f++)l=l[a[f]];a=h[o[n]],f="add"===t?a.add:a.update,n===r-1?f.call(a,s,l,i):f.call(a,s,l)}if(n){for(i=Object.keys(n),t=D(),h=0;h<i.length;h++)if(n[o=i[h]]){let i,s;for(o=o.split(":"),c=0;c<o.length;c++)i=(i||e)[l=o[c]],s=(s||t)[l]=i}e=t}r&&(r[r.length]=e),this.l[s]=e}return this},i.prototype.update=function(t,e,i){return this.a&&k(t)?this.A("update",t,e):(this.c["@"+t]&&m(e)&&(this.remove(t),this.add(t,e,i,!0)),this)},i.prototype.remove=function(t,e,i){if(this.a&&k(t))return this.A("remove",t,e);var s="@"+t;if(this.c[s]){if(this.g)return this.m[this.c[s]].postMessage({remove:!0,id:t}),delete this.c[s],e&&e(),this;if(!i){if(this.async&&"function"!=typeof importScripts){let i=this;return s=new Promise((function(e){setTimeout((function(){i.remove(t,null,!0),i=null,e()}))})),e?(s.then(e),this):s}if(e)return this.remove(t,null,!0),e(),this}for(e=0;e<this.b-(this.threshold||0);e++)a(this.i[e],t);this.depth&&a(this.h,t),delete this.c[s],this.B=!1}return this},i.prototype.search=function(t,e,i,s){if(k(e)){if(w(e))for(var n=0;n<e.length;n++)e[n].query=t;else e.query=t;t=e,e=1e3}else e&&b(e)?(i=e,e=1e3):e||0===e||(e=1e3);if(!this.g){var o=[],l=t;if(k(t)&&!w(t)){i||(i=t.callback)&&(l.callback=null);var c=t.sort,u=t.page;e=t.limit,Z=t.threshold;var a=t.suggest;t=t.query}if(this.a){Z=this.a.index;const r=l.where;var f=l.bool||"or",p=l.field;let d,y,b=f;if(p)w(p)||(p=[p]);else if(w(l)){var g=l;p=[],b=[];for(var v=0;v<l.length;v++)n=(s=l[v]).bool||f,p[v]=s.field,b[v]=n,"not"===n?d=!0:"and"===n&&(y=!0)}else p=this.a.keys;for(f=p.length,v=0;v<f;v++)g&&(l=g[v]),u&&!m(l)&&(l.page=null,l.limit=0),o[v]=Z[p[v]].search(l,0);if(i)return i(h.call(this,t,b,o,c,e,a,r,u,y,d));if(this.async){const i=this;return new Promise((function(s){Promise.all(o).then((function(n){s(h.call(i,t,b,n,c,e,a,r,u,y,d))}))}))}return h.call(this,t,b,o,c,e,a,r,u,y,d)}if(Z||(Z=this.threshold||0),!s){if(this.async&&"function"!=typeof importScripts){let t=this;return Z=new Promise((function(i){setTimeout((function(){i(t.search(l,e,null,!0)),t=null}))})),i?(Z.then(i),this):Z}if(i)return i(this.search(l,e,null,!0)),this}if(!t||!m(t))return o;if(l=t,this.cache)if(this.B){if(i=this.j.get(t))return i}else this.j.clear(),this.B=!0;if(!(l=this.encode(l)).length)return o;i=b(i=this.f)?i(l):l.split(this.split),this.filter&&(i=r(i,this.filter)),g=i.length,s=!0,n=[];var F=D(),x=0;if(1<g&&(this.depth&&"strict"===this.f?f=!0:i.sort(d)),!f||(v=this.h)){const t=this.b;for(;x<g;x++){let e=i[x];if(e){if(f){if(!p)if(v[e])p=e,F[e]=1;else if(!a)return o;if(a&&x===g-1&&!n.length)f=!1,e=p||e,F[e]=0;else if(!p)continue}if(!F[e]){const i=[];let r=!1,h=0;const o=f?v[p]:this.i;if(o){let s;for(let n=0;n<t-Z;n++)(s=o[n]&&o[n][e])&&(i[h++]=s,r=!0)}if(r)p=e,n[n.length]=1<h?i.concat.apply([],i):i[0];else if(!a){s=!1;break}F[e]=1}}}}else s=!1;return s&&(o=y(n,e,u,a)),this.cache&&this.j.set(t,o),o}this.F=i,this.u=0,this.o=[];for(var Z=0;Z<this.g;Z++)this.m[Z].postMessage({search:!0,limit:e,content:t})},i.prototype.find=function(t,e){return this.where(t,e,1)[0]||null},i.prototype.where=function(t,e,i,s){const n=this.l,r=[];let h,o=0;var l;let c;if(k(t)){i||(i=e);var u=Object.keys(t),a=u.length;if(h=!1,1===a&&"id"===u[0])return[n[t.id]];if((l=this.I)&&!s)for(var f=0;f<l.length;f++){var d=l[f],p=t[d];if(!F(p)){if(c=this.G[d]["@"+p],0==--a)return c;u.splice(u.indexOf(d),1),delete t[d];break}}for(l=Array(a),f=0;f<a;f++)l[f]=u[f].split(":")}else{if(b(t)){for(i=(e=s||Object.keys(n)).length,u=0;u<i;u++)t(a=n[e[u]])&&(r[o++]=a);return r}if(F(e))return[n[t]];if("id"===t)return[n[e]];u=[t],a=1,l=[t.split(":")],h=!0}for(f=(s=c||s||Object.keys(n)).length,d=0;d<f;d++){p=c?s[d]:n[s[d]];let f=!0;for(let i=0;i<a;i++){h||(e=t[u[i]]);const s=l[i],n=s.length;let r=p;if(1<n)for(let t=0;t<n;t++)r=r[s[t]];else r=r[s[0]];if(r!==e){f=!1;break}}if(f&&(r[o++]=p,i&&o===i))break}return r},i.prototype.info=function(){if(!this.g)return{id:this.id,items:this.length,cache:!(!this.cache||!this.cache.s)&&this.cache.s.length,matcher:C.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f};for(let t=0;t<this.g;t++)this.m[t].postMessage({info:!0,id:this.id})},i.prototype.clear=function(){return this.destroy().init()},i.prototype.destroy=function(){if(this.cache&&(this.j.clear(),this.j=null),this.i=this.h=this.c=null,this.a){const t=this.a.keys;for(let e=0;e<t.length;e++)this.a.index[t[e]].destroy();this.a=this.l=null}return this},i.prototype.export=function(t){const e=!t||F(t.serialize)||t.serialize;if(this.a){const e=!t||F(t.doc)||t.doc;var i=!t||F(t.index)||t.index;t=[];let s=0;if(i)for(i=this.a.keys;s<i.length;s++){const e=this.a.index[i[s]];t[s]=[e.i,e.h,Object.keys(e.c)]}e&&(t[s]=this.l)}else t=[this.i,this.h,Object.keys(this.c)];return e&&(t=JSON.stringify(t)),t},i.prototype.import=function(t,e){(!e||F(e.serialize)||e.serialize)&&(t=JSON.parse(t));const i=D();if(this.a){var s=!e||F(e.doc)||e.doc,n=0;if(!e||F(e.index)||e.index){const s=(e=this.a.keys).length;for(var r=t[0][2];n<r.length;n++)i[r[n]]=1;for(n=0;n<s;n++){r=this.a.index[e[n]];const s=t[n];s&&(r.i=s[0],r.h=s[1],r.c=i)}}s&&(this.l=k(s)?s:t[n])}else{for(s=t[2],n=0;n<s.length;n++)i[s[n]]=1;this.i=t[0],this.h=t[1],this.c=i}};const B=function(){const t=l("\\s+"),e=l("[^a-z0-9 ]"),i=[l("[-/]")," ",e,"",t," "];return function(t){return f(c(t.toLowerCase(),i))}}(),I={icase:function(t){return t.toLowerCase()},simple:function(){const t=l("\\s+"),e=l("[^a-z0-9 ]"),i=l("[-/]"),s=[l("[\xe0\xe1\xe2\xe3\xe4\xe5]"),"a",l("[\xe8\xe9\xea\xeb]"),"e",l("[\xec\xed\xee\xef]"),"i",l("[\xf2\xf3\xf4\xf5\xf6\u0151]"),"o",l("[\xf9\xfa\xfb\xfc\u0171]"),"u",l("[\xfd\u0177\xff]"),"y",l("\xf1"),"n",l("[\xe7c]"),"k",l("\xdf"),"s",l(" & ")," and ",i," ",e,"",t," "];return function(t){return" "===(t=c(t.toLowerCase(),s))?"":t}}(),advanced:function(){const t=l("ae"),e=l("ai"),i=l("ay"),s=l("ey"),n=l("oe"),r=l("ue"),h=l("ie"),o=l("sz"),u=l("zs"),a=l("ck"),d=l("cc"),p=[t,"a",e,"ei",i,"ei",s,"ei",n,"o",r,"u",h,"i",o,"s",u,"s",l("sh"),"s",a,"k",d,"k",l("th"),"t",l("dt"),"t",l("ph"),"f",l("pf"),"f",l("ou"),"o",l("uo"),"u"];return function(t,e){return t?(2<(t=this.simple(t)).length&&(t=c(t,p)),e||1<t.length&&(t=f(t)),t):t}}(),extra:function(){const t=[l("p"),"b",l("z"),"s",l("[cgq]"),"k",l("n"),"m",l("d"),"t",l("[vw]"),"f",l("[aeiouy]"),""];return function(e){if(!e)return e;if(1<(e=this.advanced(e,!0)).length){e=e.split(" ");for(let i=0;i<e.length;i++){const s=e[i];1<s.length&&(e[i]=s[0]+c(s.substring(1),t))}e=f(e=e.join(" "))}return e}}(),balance:B},_=function(){function t(t){this.clear(),this.H=!0!==t&&t}return t.prototype.clear=function(){this.cache=D(),this.count=D(),this.index=D(),this.s=[]},t.prototype.set=function(t,e){if(this.H&&F(this.cache[t])){let i=this.s.length;if(i===this.H){i--;const t=this.s[i];delete this.cache[t],delete this.count[t],delete this.index[t]}this.index[t]=i,this.s[i]=t,this.count[t]=-1,this.cache[t]=e,this.get(t)}else this.cache[t]=e},t.prototype.get=function(t){const e=this.cache[t];if(this.H&&e){var i=++this.count[t];const e=this.index;let n=e[t];if(0<n){const r=this.s;for(var s=n;this.count[r[--n]]<=i&&-1!==n;);if(n++,n!==s){for(i=s;i>n;i--)s=r[i-1],r[i]=s,e[s]=i;r[n]=t,e[t]=n}}}return e},t}();return i}(function(){const t={},e="undefined"!=typeof Blob&&"undefined"!=typeof URL&&URL.createObjectURL;return function(i,s,n,r,h){return n=e?URL.createObjectURL(new Blob(["("+n.toString()+")()"],{type:"text/javascript"})):i+".min.js",t[i+="-"+s]||(t[i]=[]),t[i][h]=new Worker(n),t[i][h].onmessage=r,t[i][h]}}()),this)},48652:function(t,e,i){i.r(e),i.d(e,{PageSearcher:function(){return A}});var s=i(40600),n=i(23180),r=i(68633),h=i(20784),o=i(82882),l=i(39106),c=i(39933),u=i(11533),a=i.n(u),f=i(96934),d=i(71837),p=i(60205);const g=/[\|\u3131-\u3163\uAC00-\uD7A3]|[\u3400-\u4DB5\u4E00-\u9FCC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|(?:[\uD840-\uD868](?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|(?:\uD869(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDED6\uDF00-\uDFFF])|(?:[\uD86A-\uD86C](?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|(?:\uD86D(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDF34\uDF40-\uDFFF])|(?:\uD86E(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDC1D])|[\u3041-\u3096]|[\u30A1-\u30FA]/gi,v=["home","api","404","custom"];var y=new WeakMap,m=new WeakMap,w=new WeakMap,b=new WeakMap,k=new WeakMap,F=new WeakMap,x=new WeakMap,D=new WeakSet,Z=new WeakSet,j=new WeakSet,O=new WeakSet;class A{constructor(t){(0,n.Z)(this,O),(0,n.Z)(this,j),(0,n.Z)(this,Z),(0,n.Z)(this,D),(0,r.Z)(this,y,{writable:!0,value:void 0}),(0,r.Z)(this,m,{writable:!0,value:void 0}),(0,r.Z)(this,w,{writable:!0,value:{}}),(0,r.Z)(this,b,{writable:!0,value:void 0}),(0,r.Z)(this,k,{writable:!0,value:void 0}),(0,r.Z)(this,F,{writable:!0,value:[]}),(0,r.Z)(this,x,{writable:!0,value:void 0}),(0,l.Z)(this,b,t.langRoutePrefix),(0,l.Z)(this,k,t.defaultLang),(0,l.Z)(this,F,t.langs)}async init(t={}){(0,l.Z)(this,x,await(0,o.Z)(this,D,C).call(this));const e=(0,h.Z)(this,x).filter((t=>{if("/"===(0,h.Z)(this,b)){return!(0,h.Z)(this,F).filter((t=>t!==(0,h.Z)(this,k))).map((t=>(0,d.pJ)(t))).every((e=>t.routePath.startsWith(e)))}return t.routePath.startsWith((0,d.pJ)((0,h.Z)(this,b)))})),i=e.filter((t=>{var e;return!v.includes((null===(e=t.frontmatter)||void 0===e?void 0:e.pageType)||"")})).map((t=>{var e,i,s,n;const r=(t.toc||[]).map((t=>t.text));return{title:null!==(e=null!==(i=null!==(s=t.title)&&void 0!==s?s:null===(n=t.frontmatter)||void 0===n?void 0:n.title)&&void 0!==i?i:t.routePath.split("/").pop())&&void 0!==e?e:"",headers:r,headerStr:r.join(" "),content:(0,f.gS)(t.content||""),path:t.routePath,rawHeaders:t.toc||[]}}));(0,l.Z)(this,w,e.reduce(((t,e)=>((e.toc||[]).forEach((i=>{t[e.routePath+i.text]=i.id})),t)),{}));const n=(0,s.Z)({encode:"simple",tokenize:"forward",split:/\W+/,async:!0,doc:{id:"path",field:["title","headerStr","content"]}},t);(0,l.Z)(this,y,a().create(n)),(0,l.Z)(this,m,a().create((0,s.Z)((0,s.Z)({},n),{},{encode:!1,tokenize(t){const e=[];let i=null;do{i=g.exec(t),i&&e.push(i[0])}while(i);return e}}))),(0,h.Z)(this,y).add(i),(0,h.Z)(this,m).add(i)}async match(t,e=7){var i,s;const n=(await Promise.all([null===(i=(0,h.Z)(this,y))||void 0===i?void 0:i.search({query:t,limit:e}),null===(s=(0,h.Z)(this,m))||void 0===s?void 0:s.search(t,e)])).flat(2).filter(Boolean),r=[];n.forEach((e=>{(0,o.Z)(this,Z,P).call(this,e,t,r)||(0,o.Z)(this,j,W).call(this,e,t,r)}));return(0,c.Z)(r,"link")}}async function C(){return(await fetch(`/static/${p.Zi}`)).json()}function P(t,e,i){const{headers:s,rawHeaders:n}=t;for(const[r,o]of s.entries())if(o.includes(e)){const s=(0,h.Z)(this,w)[t.path+o],l=(0,f.is)(n,r).map((t=>t.text)).join(" > ");return i.push({type:"header",title:t.title,header:l,headerHighlightIndex:l.indexOf(e),link:`${(0,p.yc)(t.path)}#${s}`}),!0}return!1}function W(t,e,i){var s;const{content:n,headers:r}=t,h=n.indexOf(e);if(-1===h)return;const l=r.map((t=>n.indexOf(t))),c=l.findIndex(((t,e)=>{if(!(e<r.length-1))return t<h;{const i=l[e+1];if(t<=h&&i>=h)return!0}return!1})),u=null!==(s=r[c])&&void 0!==s?s:t.title;let a=n.slice(0,h).lastIndexOf("\n");a=-1===a?0:a;const f=n.indexOf("\n",h+e.length);let d=n.slice(a,f);d.length>100&&(d=(0,o.Z)(this,O,M).call(this,d,e)),i.push({type:"content",title:t.title,header:u,statement:d,statementHighlightIndex:d.indexOf(e),link:`${(0,p.yc)(t.path)}#${u}`})}function M(t,e){const i=t.indexOf(e),s=Math.floor((100-e.length)/2);let n=t.slice(0,i);n.length>s&&(n=`...${t.slice(i-s+3,i)}`);let r=t.slice(i+e.length);return r.length>s&&(r=`${t.slice(i+e.length,i+s-3)}...`),n+e+r}}}]);