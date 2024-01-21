/*!
 * @danielhaim/event-modulator - v1.0.22 - 2024-01-21
 * https://github.com/danielhaim1/event-modulator.git
 * Copyright (c) 2024 Daniel Haim, Licensed Apache-2.0
 */(()=>{var e={497:(e,t,r)=>{var o,n;e=r.nmd(e),o=[r(352)],void 0===(n=function(t){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}"object"===r(e)&&e.exports&&(e.exports={modulate:t.modulate}),"object"===("undefined"==typeof window?"undefined":r(window))&&(window.modulate=t.modulate)}.apply(t,o))||(e.exports=n)},352:(e,t,r)=>{var o;e=r.nmd(e),void 0===(o=function(r){"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t){var r,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:100,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;if("function"!=typeof e)throw new TypeError("Expected a function for the first parameter");if("number"!=typeof t||isNaN(t))throw new TypeError("Expected a number for the second parameter");if("number"!=typeof t||isNaN(t))throw new TypeError("Expected a number for the second parameter (wait)");if("boolean"!=typeof o)throw new TypeError("Expected a boolean for the third parameter");if("number"!=typeof i||isNaN(i))throw new TypeError("Expected a number for the fifth parameter");if(null!==u&&("number"!=typeof u||isNaN(u)))throw new TypeError("Expected a number for the sixth parameter");if(null!==u&&u<t)throw new TypeError("Expected the sixth parameter to be greater than or equal to the second parameter");var a=[],f=new Map,p=0,l=!1,c=function(){for(var c=arguments.length,m=new Array(c),s=0;s<c;s++)m[s]=arguments[s];return new Promise((function(l){function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=Date.now()-o;if("function"!=typeof e)return Promise.reject(new Error("Expected a function for the first parameter"));if("number"!=typeof t||isNaN(t)||t<=0)return Promise.reject(new Error("Expected a number for the second parameter"));if("number"!=typeof n||isNaN(n)||n<0)return Promise.reject(new Error("Invalid timeSinceLast value"));if(r||n>=t||null!==u&&n>=u)return e(),Promise.resolve(Date.now());var i=t-n;return i<=0?Promise.resolve(Date.now()):new Promise((function(e){return setTimeout((function(){return e(Date.now())}),i)}))}var s=o&&!r,d=Date.now()-p,y=null!==u&&d>=u;if(clearTimeout(r),r=y?setTimeout(c,d):setTimeout((function(){return c(e,t,s,p)}),null!==u?u:t),s&&!y){var h=e.apply(n,m);a.push(h),f.set(JSON.stringify(m),h),f.size>i&&f.delete(f.keys().next().value),l(h),p=Date.now()}var w=f.get(JSON.stringify(m));void 0!==w&&l(w)})).finally((function(){l&&(a=[],f.clear()),l=!1}))};return c.cancel=function(){clearTimeout(r),l=!0},c.result=function(){return a},c}Object.defineProperty(r,"__esModule",{value:!0}),t.modulate=n,"object"===o(e)&&e.exports&&(e.exports={modulate:n})}.apply(t,[t]))||(e.exports=o)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o](i,i.exports,r),i.loaded=!0,i.exports}r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);r(497)})();