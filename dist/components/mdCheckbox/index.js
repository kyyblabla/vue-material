/*!
 * Vue Material v0.6.3
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(c){if(o[c])return o[c].exports;var r=o[c]={exports:{},id:c,loaded:!1};return e[c].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="/",t(0)})({0:function(e,t,o){e.exports=o(74)},1:function(e,t){e.exports=function(e,t,o,c){var r,d=e=e||{},n=typeof e.default;"object"!==n&&"function"!==n||(r=e,d=e.default);var a="function"==typeof d?d.options:d;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),o&&(a._scopeId=o),c){var i=a.computed||(a.computed={});Object.keys(c).forEach((function(e){var t=c[e];i[e]=function(){return t}}))}return{esModule:r,exports:d,options:a}}},2:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},74:function(e,t,o){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}function r(e){e.component("md-checkbox",e.extend(n.default)),e.material.styles.push(i.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var d=o(241),n=c(d),a=o(204),i=c(a);e.exports=t.default},118:function(e,t,o){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(2),d=c(r);t.default={props:{name:String,value:[String,Boolean],id:String,disabled:Boolean},mixins:[d.default],data:function(){return{checked:this.value}},computed:{classes:function(){return{"md-checked":Boolean(this.checked),"md-disabled":this.disabled}}},watch:{value:function(){this.checked=this.value}},methods:{toggleCheck:function(e){this.disabled||(this.checked=!this.checked,this.$emit("change",this.checked,e),this.$emit("input",this.checked,e))}}},e.exports=t.default},191:function(e,t){},204:function(e,t){e.exports=".THEME_NAME.md-checkbox.md-checked .md-checkbox-container{background-color:ACCENT-COLOR;border-color:ACCENT-COLOR}.THEME_NAME.md-checkbox.md-checked .md-checkbox-container:after{border-color:ACCENT-CONTRAST}.THEME_NAME.md-checkbox .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-checkbox .md-ripple{opacity:.26}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container{background-color:PRIMARY-COLOR;border-color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container:after{border-color:PRIMARY-CONTRAST}.THEME_NAME.md-checkbox.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container{background-color:WARN-COLOR;border-color:WARN-COLOR}.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container:after{border-color:WARN-CONTRAST}.THEME_NAME.md-checkbox.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-checkbox.md-disabled.md-checked .md-checkbox-container{background-color:rgba(0,0,0,0.26);border-color:transparent}.THEME_NAME.md-checkbox.md-disabled:not(.md-checked) .md-checkbox-container{border-color:rgba(0,0,0,0.26)}\n"},241:function(e,t,o){o(191);var c=o(1)(o(118),o(340),null,null);e.exports=c.exports},340:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"md-checkbox",class:[e.themeClass,e.classes]},[o("div",{staticClass:"md-checkbox-container",attrs:{tabindex:"0"},on:{click:function(t){t.stopPropagation(),e.toggleCheck(t)}}},[o("input",{attrs:{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled,tabindex:"-1"},domProps:{value:e.value}}),e._v(" "),o("md-ink-ripple",{attrs:{"md-disabled":e.disabled}})],1),e._v(" "),e.$slots.default?o("label",{staticClass:"md-checkbox-label",attrs:{for:e.id||e.name}},[e._t("default")],2):e._e()])},staticRenderFns:[]}}})}));