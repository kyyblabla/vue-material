/*!
 * Vue Material v0.6.3
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)})({0:function(e,t,n){e.exports=n(80)},1:function(e,t){e.exports=function(e,t,n,o){var i,a=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(i=e,a=e.default);var s="function"==typeof a?a.options:a;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),o){var c=s.computed||(s.computed={});Object.keys(o).forEach((function(e){var t=o[e];c[e]=function(){return t}}))}return{esModule:i,exports:a,options:s}}},64:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){var n=document.createElement("canvas");e.onload=function(){var e=0,o=void 0,i=void 0,a=void 0,r=void 0,s=void 0,c=void 0,u=void 0;n.width=this.width,n.height=this.height,o=n.getContext("2d"),o.drawImage(this,0,0),i=o.getImageData(0,0,n.width,n.height),a=i.data;for(var d=0,l=a.length;d<l;d+=4)r=a[d],s=a[d+1],c=a[d+2],u=Math.floor((r+s+c)/3),e+=u;t(Math.floor(e/(this.width*this.height)))}};t.default=n,e.exports=t.default},80:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){e.component("md-image",e.extend(r.default)),e.material.styles.push(c.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a=n(254),r=o(a),s=n(209),c=o(s);e.exports=t.default},127:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(64),a=o(i);t.default={props:{mdSrc:String},data:function(){return{loaded:!1,applyBlack:!0,imageElement:null}},watch:{mdSrc:function(){this.createImage()}},computed:{classes:function(){return{"md-loaded":this.loaded,"md-black-output":this.applyBlack}}},methods:{analyzeLightness:function(e){var t=this;(0,a.default)(e,(function(e){var n=256,o=(100*Math.abs(n-e)/n+15)/100;o>=.7&&(t.applyBlack=!0),t.$nextTick((function(){t.loaded=!0}))}))},createImage:function(){this.loaded=!1,this.applyBlack=!1,this.imageElement=null,this.mdSrc&&(this.imageElement=document.createElement("img"),this.imageElement.crossOrigin="",this.imageElement.src=this.mdSrc,this.analyzeLightness(this.imageElement))}},created:function(){this.createImage()}},e.exports=t.default},195:function(e,t){},209:function(e,t){e.exports=""},254:function(e,t,n){n(195);var o=n(1)(n(127),n(343),null,null);e.exports=o.exports},343:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{staticClass:"md-image",class:e.classes,attrs:{src:e.mdSrc}})},staticRenderFns:[]}}})}));