(()=>{"use strict";var n={96:(n,e,t)=>{t.d(e,{c:()=>a});var r=t(500),o=t.n(r),i=t(312),s=t.n(i)()(o());s.push([n.id,".news {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  margin: 0 auto;\n  gap: 24px;\n  max-width: 1680px;\n  padding: 0 16px;\n}\n\n@media (min-width: 991px) {\n  .news {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    padding: 0 32px;\n  }\n}\n\n.news__item {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n  margin-bottom: 1.6%;\n  background: #fff;\n  color: #333;\n  line-height: 1.4;\n  font-family: Arial, sans-serif;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n  transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n  position: relative;\n  height: 200px;\n}\n\n.news__item .news__meta-photo {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n  margin: auto;\n  padding: 0;\n  list-style: none;\n}\n\n.news__item .news__meta-details {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -120%;\n  margin: auto;\n  transition: left 0.2s;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  padding: 10px;\n  width: 100%;\n  font-size: 0.9rem;\n}\n\n.news__item .news__description {\n  padding: 1rem;\n  background: #fff;\n  position: relative;\n  z-index: 1;\n}\n\n.news__item .news__description h2 {\n  line-height: 1;\n  margin: 0;\n  font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n  font-size: 1rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  color: #a2a2a2;\n  margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n  text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n  color: #5ad67d;\n  display: inline-block;\n  position: relative;\n  text-decoration: none;\n  font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n  content: '→';\n  margin-left: -10px;\n  opacity: 0;\n  vertical-align: middle;\n  transition:\n    margin 0.3s,\n    opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n  margin-left: 5px;\n  opacity: 1;\n}\n\n.news__item p {\n  margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n  margin-top: 1.25rem;\n  position: relative;\n}\n\n.news__item p:first-of-type:before {\n  content: '';\n  position: absolute;\n  height: 5px;\n  background: #5ad67d;\n  width: 35px;\n  top: -0.75rem;\n  border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n  left: 0%;\n}\n\n@media (min-width: 640px) {\n  .news__item {\n    flex-direction: row;\n    /* max-width: 700px; */\n  }\n\n  .news__item .news__meta {\n    flex-basis: 40%;\n    height: auto;\n  }\n\n  .news__item .news__description {\n    flex-basis: 60%;\n  }\n\n  .news__item .news__description:before {\n    -webkit-transform: skewX(-3deg);\n    transform: skewX(-3deg);\n    content: '';\n    background: #fff;\n    width: 30px;\n    position: absolute;\n    left: -10px;\n    top: 0;\n    bottom: 0;\n    z-index: -1;\n  }\n\n  .news__item.alt {\n    flex-direction: row-reverse;\n  }\n\n  .news__item.alt .news__description:before {\n    left: inherit;\n    right: -10px;\n    -webkit-transform: skew(3deg);\n    transform: skew(3deg);\n  }\n\n  .news__item.alt .news__meta-details {\n    padding-left: 25px;\n  }\n}\n",""]);const a=s},376:(n,e,t)=>{t.d(e,{c:()=>a});var r=t(500),o=t.n(r),i=t(312),s=t.n(i)()(o());s.push([n.id,".sources {\n  display: flex;\n  flex-wrap: nowrap;\n  width: 100%;\n  height: 120px;\n  overflow: auto;\n  align-items: center;\n  font:\n    300 1em 'Fira Sans',\n    sans-serif;\n\n  margin: 0 auto;\n  max-width: 1680px;\n  padding: 0 16px;\n}\n\n@media (min-width: 991px) {\n  .sources {\n    padding: 0 32px;\n  }\n}\n\n.source__item {\n  background: none;\n  border: 2px solid #30c5ff;\n  font: inherit;\n  line-height: 1;\n  margin: 0.5em;\n  padding: 1em 2em;\n  color: #70d6ff;\n  transition: 0.25s;\n  cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n  border-color: #3fcc59;\n  color: #69db7e;\n  box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n  transform: translateY(-0.25em);\n}\n\n.source__item-name {\n  font-weight: 400;\n  white-space: nowrap;\n}\n",""]);const a=s},308:(n,e,t)=>{t.d(e,{c:()=>a});var r=t(500),o=t.n(r),i=t(312),s=t.n(i)()(o());s.push([n.id,"body {\n  color: #fff;\n  background: #17181c;\n  font-family: sans-serif;\n}\n\nheader {\n  margin: 0 auto;\n  max-width: 1680px;\n  padding: 0 16px;\n}\n\n@media (min-width: 991px) {\n  header {\n    padding: 0 32px;\n  }\n}\n\nheader h1 {\n  font-size: 40px;\n  font-weight: 800;\n}\n\nfooter {\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\nfooter .copyright {\n  font-size: 14px;\n  color: #333;\n  text-align: center;\n}\nfooter .copyright a {\n  color: #444;\n}\nfooter .copyright a:hover {\n  color: #555;\n}\nfooter .copyright:before {\n  content: '©';\n}\n",""]);const a=s},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);r&&s[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},s=[],a=0;a<n.length;a++){var c=n[a],u=r.base?c[0]+r.base:c[0],p=i[u]||0,l="".concat(u," ").concat(p);i[u]=p+1;var d=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var m=o(f,r);r.byIndex=a,e.splice(a,0,{identifier:l,updater:m,references:1})}s.push(l)}return s}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<i.length;s++){var a=t(i[s]);e[a].references--}for(var c=r(n,o),u=0;u<i.length;u++){var p=t(i[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=c}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n,e=function(){function n(n,e){this.baseLink=n,this.options=e}return n.prototype.getResp=function(n,e){void 0===e&&(e=function(){console.error("No callback for GET response")});var t=n.endpoint,r=n.options,o=void 0===r?{}:r;this.load("GET",t,e,o)},n.prototype.errorHandler=function(n){if(!n.ok)throw 401!==n.status&&404!==n.status||console.log("Sorry, but there is ".concat(n.status," error: ").concat(n.statusText)),Error(n.statusText);return n},n.prototype.makeUrl=function(n,e){var t=this,r="".concat(this.baseLink).concat(e,"?");return Object.keys(this.options).forEach((function(n){r+="".concat(n,"=").concat(t.options[n],"&")})),Object.keys(n).forEach((function(e){r+="".concat(e,"=").concat(n[e],"&")})),r.slice(0,-1)},n.prototype.load=function(n,e,t,r){void 0===r&&(r={}),fetch(this.makeUrl(r,e),{method:n}).then(this.errorHandler).then((function(n){return n.json()})).then((function(n){return t(n)})).catch((function(n){return console.error(n)}))},n}(),r=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});const o=function(n){function e(){return n.call(this,"https://rss-news-api.onrender.com/",{apiKey:"99bfabb9c4ef4d46a82c5c1c5e71dd9b"})||this}return r(e,n),e}(e);var i=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();const s=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return i(e,n),e.prototype.getSources=function(e){n.prototype.getResp.call(this,{endpoint:"sources"},e)},e.prototype.getNews=function(e,t){for(var r=e.target,o=e.currentTarget;r!==o;){if(r.classList.contains("source__item")){var i=r.getAttribute("data-source-id");if(!i)return;return void(o.getAttribute("data-source")!==i&&(o.setAttribute("data-source",i),n.prototype.getResp.call(this,{endpoint:"everything",options:{sources:i}},t)))}r=r.parentNode}},e}(o);var a=t(596),c=t.n(a),u=t(520),p=t.n(u),l=t(176),d=t.n(l),f=t(120),m=t.n(f),_=t(808),h=t.n(_),w=t(936),g=t.n(w),v=t(96),y={};y.styleTagTransform=g(),y.setAttributes=m(),y.insert=d().bind(null,"head"),y.domAPI=p(),y.insertStyleElement=h(),c()(v.c,y),v.c&&v.c.locals&&v.c.locals;var x=function(){function n(){}return n.prototype.draw=function(n){var e=document.querySelector(".news");if(e){var t=n.length>=10?n.filter((function(n,e){return e<10})):n,r=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp");t.forEach((function(n,e){var t=o.content.cloneNode(!0),i=t.querySelector(".news__item"),s=t.querySelector(".news__meta-author"),a=t.querySelector(".news__meta-date"),c=t.querySelector(".news__description-title"),u=t.querySelector(".news__description-source"),p=t.querySelector(".news__description-content"),l=t.querySelector(".news__read-more a");i&&s&&a&&c&&u&&p&&l&&(e%2&&i.classList.add("alt"),t.querySelector(".news__meta-photo").style.backgroundImage="url(".concat(n.urlToImage||"img/news_placeholder.jpg",")"),s.textContent=n.author||n.source.name,a.textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"),c.textContent=n.title,u.textContent=n.source.name,p.textContent=n.description,l.setAttribute("href",n.url),r.append(t))})),e.innerHTML="",e.appendChild(r)}},n}();const b=x;var S=t(376),k={};k.styleTagTransform=g(),k.setAttributes=m(),k.insert=d().bind(null,"head"),k.domAPI=p(),k.insertStyleElement=h(),c()(S.c,k),S.c&&S.c.locals&&S.c.locals;const T=function(){function n(){}return n.prototype.draw=function(n){var e=document.querySelector(".sources");if(e){var t=document.createDocumentFragment(),r=document.querySelector("#sourceItemTemp");n.forEach((function(n){var e=r.content.cloneNode(!0),o=e.querySelector(".source__item-name"),i=e.querySelector(".source__item");o&&i&&(o.textContent=n.name,i.setAttribute("data-source-id",n.id),t.append(e))})),e.append(t)}},n}();var A=function(){function n(){this.news=new b,this.sources=new T}return n.prototype.drawNews=function(n){var e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)},n.prototype.drawSources=function(n){var e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.draw(e)},n}();const E=function(){function n(){this.controller=new s,this.view=new A}return n.prototype.start=function(){var n=this,e=document.querySelector(".sources");e&&(e.addEventListener("click",(function(e){return n.controller.getNews(e,(function(e){return n.view.drawNews(e)}))})),this.controller.getSources((function(e){return n.view.drawSources(e)})))},n}();var C=t(308),j={};j.styleTagTransform=g(),j.setAttributes=m(),j.insert=d().bind(null,"head"),j.domAPI=p(),j.insertStyleElement=h(),c()(C.c,j),C.c&&C.c.locals&&C.c.locals,(new E).start()})()})();