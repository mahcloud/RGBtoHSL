!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("RGBtoHSL",[],t):"object"==typeof exports?exports.RGBtoHSL=t():e.RGBtoHSL=t()}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=1)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,o=e[0]/255,n=e[1]/255,r=e[2]/255,u=Math.max(o,n,r),f=Math.min(o,n,r),i=u-f,c=void 0,l=void 0;return u===f?c=0:o===u?c=(n-r)/i:n===u?c=2+(r-o)/i:r===u&&(c=4+(o-n)/i),(c=Math.min(60*c,360))<0&&(c+=360),t=(f+u)/2,l=u===f?0:t<=.5?i/(u+f):i/(2-u-f),[c,Math.floor(100*l),Math.floor(100*t)]}},function(e,t,o){e.exports=o(0)}])});