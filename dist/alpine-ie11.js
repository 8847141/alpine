!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("core-js/modules/es.array.filter"),require("core-js/modules/es.array.for-each"),require("core-js/modules/es.array.from"),require("core-js/modules/es.string.iterator"),require("core-js/modules/web.dom-collections.for-each"),require("core-js/modules/es.object.keys"),require("core-js/modules/es.reflect.set"),require("core-js/modules/es.regexp.exec"),require("core-js/modules/es.string.match"),require("core-js/modules/es.string.split"),require("core-js/modules/es.array.concat"),require("core-js/modules/es.array.find"),require("core-js/modules/es.array.includes"),require("core-js/modules/es.array.map"),require("core-js/modules/es.array.splice"),require("core-js/modules/es.function.name"),require("core-js/modules/es.number.constructor"),require("core-js/modules/es.object.to-string"),require("core-js/modules/es.object.values"),require("core-js/modules/es.promise"),require("core-js/modules/es.string.includes"),require("core-js/modules/es.string.replace"),require("core-js/modules/es.string.starts-with"),require("core-js/modules/es.string.trim"),require("core-js/modules/es.array.join")):"function"==typeof define&&define.amd?define(["core-js/modules/es.array.filter","core-js/modules/es.array.for-each","core-js/modules/es.array.from","core-js/modules/es.string.iterator","core-js/modules/web.dom-collections.for-each","core-js/modules/es.object.keys","core-js/modules/es.reflect.set","core-js/modules/es.regexp.exec","core-js/modules/es.string.match","core-js/modules/es.string.split","core-js/modules/es.array.concat","core-js/modules/es.array.find","core-js/modules/es.array.includes","core-js/modules/es.array.map","core-js/modules/es.array.splice","core-js/modules/es.function.name","core-js/modules/es.number.constructor","core-js/modules/es.object.to-string","core-js/modules/es.object.values","core-js/modules/es.promise","core-js/modules/es.string.includes","core-js/modules/es.string.replace","core-js/modules/es.string.starts-with","core-js/modules/es.string.trim","core-js/modules/es.array.join"],e):(t=t||self).Alpine=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n,i,r,o,s){try{var a=t[o](s),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(i,r)}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function(t){var e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function a(t,e,n,i){var r=e&&e.prototype instanceof l?e:l,o=Object.create(r.prototype),s=new w(i||[]);return o._invoke=function(t,e,n){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return E()}for(n.method=r,n.arg=o;;){var s=n.delegate;if(s){var a=g(s,n);if(a){if(a===c)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var l=u(t,e,n);if("normal"===l.type){if(i=n.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i="completed",n.method="throw",n.arg=l.arg)}}}(t,n,s),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var c={};function l(){}function h(){}function d(){}var f={};f[r]=function(){return this};var v=Object.getPrototypeOf,p=v&&v(v(j([])));p&&p!==e&&n.call(p,r)&&(f=p);var m=d.prototype=l.prototype=Object.create(f);function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t){var e;this._invoke=function(i,r){function o(){return new Promise((function(e,o){!function e(i,r,o,s){var a=u(t[i],t,r);if("throw"!==a.type){var c=a.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,o,s)}),(function(t){e("throw",t,o,s)})):Promise.resolve(l).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,s)}))}s(a.arg)}(i,r,e,o)}))}return e=e?e.then(o,o):o()}}function g(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var i=u(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,c;var r=i.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return h.prototype=m.constructor=d,d.constructor=h,d[s]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(y.prototype),y.prototype[o]=function(){return this},t.AsyncIterator=y,t.async=function(e,n,i,r){var o=new y(a(e,n,i,r));return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},b(m),m[s]="Generator",m[r]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=j,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var a=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,c):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;_(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=u}catch(t){Function("r","regeneratorRuntime = r")(u)}function c(){var t=this;return new Promise(function(e){s(this,t),"loading"==document.readyState?document.addEventListener("DOMContentLoaded",e):e()}.bind(this))}function l(t){for(var e=t.concat(),n=0;n<e.length;++n)for(var i=n+1;i<e.length;++i)e[n]===e[i]&&e.splice(i--,1);return e}function h(){return navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")}function d(t,e){if(!1!==e(t))for(var n=t.firstElementChild;n;)d(n,e),n=n.nextElementSibling}function f(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Function(["$data"].concat(a(Object.keys(n))),"var result; with($data) { result = ".concat(t," }; return result")).apply(void 0,[e].concat(a(Object.values(n))))}function v(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Function(["dataContext"].concat(a(Object.keys(n))),"with(dataContext) { ".concat(t," }")).apply(void 0,[e].concat(a(Object.values(n))))}function p(t){var e=b(t.name);return/x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref)/.test(e)}function m(t,e){var n=this;return Array.from(t.attributes).filter(p).map(function(t){var e=this;s(this,n);var i=b(t.name),r=i.match(/x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref)/),o=i.match(/:([a-zA-Z\-:]+)/),a=i.match(/\.[^.\]]+(?=[^\]]*$)/g)||[];return{type:r?r[1]:null,value:o?o[1]:null,modifiers:a.map(function(t){return s(this,e),t.replace(".","")}.bind(this)),expression:t.value}}.bind(this)).filter(function(t){return s(this,n),!e||t.type===e}.bind(this))}function b(t){return t.startsWith("@")?t.replace("@","x-on:"):t.startsWith(":")?t.replace(":","x-bind:"):t}function y(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(i)return e();var r=m(t,"transition");if(r.length<1)return e();var o=(r.find(function(t){return s(this,n),"enter"===t.value}.bind(this))||{expression:""}).expression.split(" ").filter(function(t){return s(this,n),""!==t}.bind(this)),a=(r.find(function(t){return s(this,n),"enter-start"===t.value}.bind(this))||{expression:""}).expression.split(" ").filter(function(t){return s(this,n),""!==t}.bind(this)),u=(r.find(function(t){return s(this,n),"enter-end"===t.value}.bind(this))||{expression:""}).expression.split(" ").filter(function(t){return s(this,n),""!==t}.bind(this));x(t,o,a,u,e,function(){s(this,n)}.bind(this))}function g(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(i)return e();var r=m(t,"transition");if(r.length<1)return e();var o=(r.find(function(t){return s(this,n),"leave"===t.value}.bind(this))||{expression:""}).expression.split(" ").filter(function(t){return s(this,n),""!==t}.bind(this)),a=(r.find(function(t){return s(this,n),"leave-start"===t.value}.bind(this))||{expression:""}).expression.split(" ").filter(function(t){return s(this,n),""!==t}.bind(this)),u=(r.find(function(t){return s(this,n),"leave-end"===t.value}.bind(this))||{expression:""}).expression.split(" ").filter(function(t){return s(this,n),""!==t}.bind(this));x(t,o,a,u,function(){s(this,n)}.bind(this),e)}function x(t,e,n,i,r,o){var u,c,l=this,h=t.__x_original_classes||[];(u=t.classList).add.apply(u,a(n)),(c=t.classList).add.apply(c,a(e)),requestAnimationFrame(function(){var u=this;s(this,l);var c=1e3*Number(getComputedStyle(t).transitionDuration.replace("s",""));r(),requestAnimationFrame(function(){var r,l,d=this;s(this,u),(r=t.classList).remove.apply(r,a(n.filter(function(t){return s(this,d),!h.includes(t)}.bind(this)))),(l=t.classList).add.apply(l,a(i)),setTimeout(function(){var n,r,u=this;(s(this,d),o(),t.isConnected)&&((n=t.classList).remove.apply(n,a(e.filter(function(t){return s(this,u),!h.includes(t)}.bind(this)))),(r=t.classList).remove.apply(r,a(i.filter(function(t){return s(this,u),!h.includes(t)}.bind(this)))))}.bind(this),c)}.bind(this))}.bind(this))}function _(t,e,n,r){var o=this,a=function(t){var e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=t.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);if(!n)return;var i={};i.bunch=n[2].trim();var r=n[1].trim().replace(/^\(|\)$/g,""),o=r.match(e);o?(i.single=r.replace(e,"").trim(),i.iterator1=o[1].trim(),o[2]&&(i.iterator2=o[2].trim())):i.single=r;return i}(n),u=a.single,c=a.bunch,l=a.iterator1,h=a.iterator2,d=t.evaluateReturnExpression(e,c),f=e;d.forEach(function(n,a,c){var d=this;s(this,o);var v=function(t,e,n,r,o,a,u,c){var l=this,h=m(e,"bind").filter(function(t){return s(this,l),"key"===t.value}.bind(this))[0],d=i({},n,a);r&&(d[r]=u);o&&(d[o]=c);return h?t.evaluateReturnExpression(e,h.expression,function(){return s(this,l),d}.bind(this)):u}(t,e,u,l,h,n,a,c),p=f.nextElementSibling;if(p&&void 0!==p.__x_for_key){if(p.__x_for_key!==v)for(var b=p;b;){if(b.__x_for_key===v){e.parentElement.insertBefore(b,p),p=b;break}b=!(!b.nextElementSibling||void 0===b.nextElementSibling.__x_for_key)&&b.nextElementSibling}delete p.__x_for_key,p.__x_for_alias=u,p.__x_for_value=n,t.updateElements(p,function(){return s(this,d),i({},p.__x_for_alias,p.__x_for_value)}.bind(this))}else{var g=document.importNode(e.content,!0);e.parentElement.insertBefore(g,p),y(p=f.nextElementSibling,function(){s(this,d)}.bind(this),r),p.__x_for_alias=u,p.__x_for_value=n,t.initializeElements(p,function(){return s(this,d),i({},p.__x_for_alias,p.__x_for_value)}.bind(this))}p.__x_for_key=v,f=p}.bind(this));for(var v=!(!f.nextElementSibling||void 0===f.nextElementSibling.__x_for_key)&&f.nextElementSibling,p=function(){var t=this,e=v,n=v.nextElementSibling;g(v,function(){s(this,t),e.remove()}.bind(this)),v=!(!n||void 0===n.__x_for_key)&&n};v;)p()}function w(e,n,i,r,o){var a=this,u=e.evaluateReturnExpression(n,r,o);if("value"===i)if(void 0===u&&r.match(/\./).length&&(u=""),"radio"===n.type)n.checked=n.value==u;else if("checkbox"===n.type)if(Array.isArray(u)){var c=!1;u.forEach(function(t){s(this,a),t==n.value&&(c=!0)}.bind(this)),n.checked=c}else n.checked=!!u;else"SELECT"===n.tagName?function(t,e){var n=this,i=[].concat(e).map(function(t){return s(this,n),t+""}.bind(this));Array.from(t.options).forEach(function(t){s(this,n),t.selected=i.includes(t.value||t.text)}.bind(this))}(n,u):n.value=u;else if("class"===i)if(Array.isArray(u)){var h=n.__x_original_classes||[];n.setAttribute("class",l(h.concat(u)).join(" "))}else if("object"===t(u))Object.keys(u).forEach(function(t){var e=this;s(this,a),u[t]?t.split(" ").forEach(function(t){return s(this,e),n.classList.add(t)}.bind(this)):t.split(" ").forEach(function(t){return s(this,e),n.classList.remove(t)}.bind(this))}.bind(this));else{var d=n.__x_original_classes||[],f=u.split(" ");n.setAttribute("class",l(d.concat(f)).join(" "))}else["disabled","readonly","required","checked","hidden"].includes(i)?u?n.setAttribute(i,""):n.removeAttribute(i):n.setAttribute(i,u)}function j(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e?y(t,function(){s(this,n),1===t.style.length&&""!==t.style.display?t.removeAttribute("style"):t.style.removeProperty("display")}.bind(this),i):g(t,function(){s(this,n),t.style.display="none"}.bind(this),i)}function E(t,e,n){var i=this;"template"!==t.nodeName.toLowerCase()&&console.warn("Alpine: [x-if] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#x-if");var r=t.nextElementSibling&&!0===t.nextElementSibling.__x_inserted_me;if(e&&!r){var o=document.importNode(t.content,!0);t.parentElement.insertBefore(o,t.nextElementSibling),t.nextElementSibling.__x_inserted_me=!0,y(t.nextElementSibling,function(){s(this,i)}.bind(this),n)}else!e&&r&&g(t.nextElementSibling,function(){s(this,i),t.nextElementSibling.remove()}.bind(this),n)}function k(t,e,n,i,r){var o=this,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};if(i.includes("away")){var u=function(c){s(this,o),e.contains(c.target)||e.offsetWidth<1&&e.offsetHeight<1||(A(t,r,c,a),i.includes("once")&&document.removeEventListener(n,u))}.bind(this);document.addEventListener(n,u)}else{var c=i.includes("window")?window:i.includes("document")?document:e,l=function(e){s(this,o),S(n)&&L(e,i)||(i.includes("prevent")&&e.preventDefault(),i.includes("stop")&&e.stopPropagation(),A(t,r,e,a),i.includes("once")&&c.removeEventListener(n,l))}.bind(this);c.addEventListener(n,l)}}function A(t,e,n,i){var r=this;t.evaluateCommandExpression(n.target,e,function(){return s(this,r),o({},i(),{$event:n})}.bind(this))}function S(t){return["keydown","keyup"].includes(t)}function L(t,e){var n=this,i=e.filter(function(t){return s(this,n),!["window","document","prevent","stop"].includes(t)}.bind(this));if(0===i.length)return!1;if(1===i.length&&i[0]===$(t.key))return!1;var r=["ctrl","shift","alt","meta","cmd","super"].filter(function(t){return s(this,n),i.includes(t)}.bind(this));if((i=i.filter(function(t){return s(this,n),!r.includes(t)}.bind(this)),r.length>0)&&(r.filter(function(e){return s(this,n),"cmd"!==e&&"super"!==e||(e="meta"),t["".concat(e,"Key")]}.bind(this)).length===r.length&&i[0]===$(t.key)))return!1;return!0}function $(t){switch(t){case"/":return"slash";case" ":case"Spacebar":return"space";default:return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}}function O(t,e,n,i){var r="";return r="checkbox"===e.type?Array.isArray(t.$data[i])?"$event.target.checked ? ".concat(i,".concat([$event.target.value]) : ").concat(i,".filter(i => i !== $event.target.value)"):"$event.target.checked":"select"===e.tagName.toLowerCase()&&e.multiple?n.includes("number")?"Array.from($event.target.selectedOptions).map(option => { return parseFloat(option.value || option.text) })":"Array.from($event.target.selectedOptions).map(option => { return option.value || option.text })":n.includes("number")?"parseFloat($event.target.value)":n.includes("trim")?"$event.target.value.trim()":"$event.target.value","radio"===e.type&&(e.hasAttribute("name")||e.setAttribute("name",i)),"".concat(i," = ").concat(r)}var N,C,q=function(){function e(t){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t;var i,r=this.$el.getAttribute("x-data"),o=""===r?"{}":r,a=this.$el.getAttribute("x-init"),u=this.$el.getAttribute("x-created"),c=this.$el.getAttribute("x-mounted"),l=f(o,{});l.$el=this.$el,l.$refs=this.getRefsProxy(),this.nextTickStack=[],l.$nextTick=function(t){s(this,n),this.nextTickStack.push(t)}.bind(this),this.$data=this.wrapDataInObservable(l),a&&(this.pauseReactivity=!0,i=f(this.$el.getAttribute("x-init"),this.$data),this.pauseReactivity=!1),u&&(console.warn('AlpineJS Warning: "x-created" is deprecated and will be removed in the next major version. Use "x-init" instead.'),this.pauseReactivity=!0,v(this.$el.getAttribute("x-created"),this.$data),this.pauseReactivity=!1),this.initializeElements(this.$el),this.listenForNewElementsToInitialize(),"function"==typeof i&&i.call(this.$data),c&&(console.warn('AlpineJS Warning: "x-mounted" is deprecated and will be removed in the next major version. Use "x-init" (with a callback return) for the same behavior.'),v(c,this.$data))}var i,r,a;return i=e,(r=[{key:"wrapDataInObservable",value:function(e){var n=this,i={set:function(t,e,i){var r,o,a,u=this,c=Reflect.set(t,e,i);if(!n.pauseReactivity)return(r=function(){for(s(this,u),n.updateElements(n.$el);n.nextTickStack.length>0;)n.nextTickStack.shift()()}.bind(this),o=0,function(){var t=this,e=arguments,n=function(){a=null,r.apply(t,e)};clearTimeout(a),a=setTimeout(n,o)})(),c},get:function(e,n){return e[n]&&e[n].isRefsProxy?e[n]:e[n]&&e[n]instanceof Node?e[n]:"object"===t(e[n])&&null!==e[n]?new Proxy(e[n],i):e[n]}};return new Proxy(e,i)}},{key:"walkAndSkipNestedComponents",value:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){s(this,n)}.bind(this);d(t,function(t){return s(this,n),t.hasAttribute("x-data")&&!t.isSameNode(this.$el)?(t.__x||i(t),!1):e(t)}.bind(this))}},{key:"initializeElements",value:function(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){s(this,n)}.bind(this);for(this.walkAndSkipNestedComponents(t,function(t){if(s(this,n),void 0!==t.__x_for_key)return!1;this.initializeElement(t,i)}.bind(this),function(t){s(this,n),t.__x=new e(t)}.bind(this));this.nextTickStack.length>0;)this.nextTickStack.shift()()}},{key:"initializeElement",value:function(t,e){t.hasAttribute("class")&&m(t).length>0&&(t.__x_original_classes=t.getAttribute("class").split(" ")),this.registerListeners(t,e),this.resolveBoundAttributes(t,!0,e)}},{key:"updateElements",value:function(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){s(this,n)}.bind(this);this.walkAndSkipNestedComponents(t,function(t){if(s(this,n),void 0!==t.__x_for_key&&!t.isSameNode(this.$el))return!1;this.updateElement(t,i)}.bind(this),function(t){s(this,n),t.__x=new e(t)}.bind(this))}},{key:"updateElement",value:function(t,e){this.resolveBoundAttributes(t,!1,e)}},{key:"registerListeners",value:function(t,e){var n=this;m(t).forEach(function(i){var r=i.type,o=i.value,a=i.modifiers,u=i.expression;switch(s(this,n),r){case"on":k(this,t,o,a,u,e);break;case"model":!function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o="select"===e.tagName.toLowerCase()||["checkbox","radio"].includes(e.type)||n.includes("lazy")?"change":"input",s=O(t,e,n,i);k(t,e,o,n,s,r)}(this,t,a,u,e)}}.bind(this))}},{key:"resolveBoundAttributes",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2?arguments[2]:void 0;m(t).forEach(function(r){var o=r.type,a=r.value,u=(r.modifiers,r.expression);switch(s(this,e),o){case"model":w(this,t,"value",u,i);break;case"bind":if("template"===t.tagName.toLowerCase()&&"key"===a)return;w(this,t,a,u,i);break;case"text":void 0===(c=this.evaluateReturnExpression(t,u,i))&&u.match(/\./).length&&(c=""),t.innerText=c;break;case"html":t.innerHTML=this.evaluateReturnExpression(t,u,i);break;case"show":var c=this.evaluateReturnExpression(t,u,i);j(t,c,n);break;case"if":c=this.evaluateReturnExpression(t,u,i),E(t,c,n);break;case"for":_(this,t,u,n);break;case"cloak":t.removeAttribute("x-cloak")}}.bind(this))}},{key:"evaluateReturnExpression",value:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){s(this,n)}.bind(this);return f(e,this.$data,o({},i(),{$dispatch:this.getDispatchFunction(t)}))}},{key:"evaluateCommandExpression",value:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){s(this,n)}.bind(this);v(e,this.$data,o({},i(),{$dispatch:this.getDispatchFunction(t)}))}},{key:"getDispatchFunction",value:function(t){var e=this;return function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,e),t.dispatchEvent(new CustomEvent(n,{detail:i,bubbles:!0}))}.bind(this)}},{key:"listenForNewElementsToInitialize",value:function(){var t=this,n=this.$el;new MutationObserver(function(n){var i=this;s(this,t);for(var r=0;r<n.length;r++){var o=n[r].target.closest("[x-data]");if(!o||!o.isSameNode(this.$el))return;"attributes"===n[r].type&&"x-data"===n[r].attributeName&&function(){var t=this,e=f(n[r].target.getAttribute("x-data"),{});Object.keys(e).forEach(function(n){s(this,t),i.$data[n]!==e[n]&&(i.$data[n]=e[n])}.bind(this))}(),n[r].addedNodes.length>0&&n[r].addedNodes.forEach(function(t){s(this,i),1===t.nodeType&&(t.matches("[x-data]")?t.__x=new e(t):this.initializeElements(t))}.bind(this))}}.bind(this)).observe(n,{childList:!0,attributes:!0,subtree:!0})}},{key:"getRefsProxy",value:function(){var t=this,e=this,n={};return window.document.documentMode&&this.walkAndSkipNestedComponents(e.$el,function(e){s(this,t),e.hasAttribute("x-ref")&&(n.el=!0)}.bind(this)),new Proxy(n,{get:function(t,n){var i,r=this;return"isRefsProxy"===n||(e.walkAndSkipNestedComponents(e.$el,function(t){s(this,r),t.hasAttribute("x-ref")&&t.getAttribute("x-ref")===n&&(i=t)}.bind(this)),i)}})}}])&&n(i.prototype,r),a&&n(i,a),e}(),P={start:(N=regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h()){t.next=3;break}return t.next=3,c();case 3:this.discoverComponents(function(t){s(this,e),this.initializeComponent(t)}.bind(this)),document.addEventListener("turbolinks:load",function(){var t=this;s(this,e),this.discoverUninitializedComponents(function(e){s(this,t),this.initializeComponent(e)}.bind(this))}.bind(this)),this.listenForNewUninitializedComponentsAtRunTime(function(t){s(this,e),this.initializeComponent(t)}.bind(this));case 6:case"end":return t.stop()}}),t,this)})),C=function(){var t=this,n=arguments;return new Promise((function(i,r){var o=N.apply(t,n);function s(t){e(o,i,r,s,a,"next",t)}function a(t){e(o,i,r,s,a,"throw",t)}s(void 0)}))},function(){return C.apply(this,arguments)}),discoverComponents:function(t){var e=this;document.querySelectorAll("[x-data]").forEach(function(n){s(this,e),t(n)}.bind(this))},discoverUninitializedComponents:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=(n||document).querySelectorAll("[x-data]");Array.from(i).filter(function(t){return s(this,e),void 0===t.__x}.bind(this)).forEach(function(n){s(this,e),t(n)}.bind(this))},listenForNewUninitializedComponentsAtRunTime:function(t){var e=this,n=document.querySelector("body");new MutationObserver(function(t){var n=this;s(this,e);for(var i=0;i<t.length;i++)t[i].addedNodes.length>0&&t[i].addedNodes.forEach(function(t){var e=this;s(this,n),1===t.nodeType&&(t.parentElement.closest("[x-data]")||this.discoverUninitializedComponents(function(t){s(this,e),this.initializeComponent(t)}.bind(this),t.parentElement))}.bind(this))}.bind(this)).observe(n,{childList:!0,attributes:!0,subtree:!0})},initializeComponent:function(t){t.__x||(t.__x=new q(t))}};return h()||(window.Alpine=P,window.Alpine.start()),P}));
//# sourceMappingURL=alpine-ie11.js.map
