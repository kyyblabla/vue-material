/*!
 * Vue Material v0.6.3
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(s){if(d[s])return d[s].exports;var i=d[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var d={};return t.m=e,t.c=d,t.p="/",t(0)})({0:function(e,t,d){e.exports=d(93)},1:function(e,t){e.exports=function(e,t,d,s){var i,c=e=e||{},n=typeof e.default;"object"!==n&&"function"!==n||(i=e,c=e.default);var o="function"==typeof c?c.options:c;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),d&&(o._scopeId=d),s){var r=o.computed||(o.computed={});Object.keys(s).forEach((function(e){var t=s[e];r[e]=function(){return t}}))}return{esModule:i,exports:c,options:o}}},2:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},93:function(e,t,d){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function i(e){e.component("md-switch",e.extend(n.default)),e.material.styles.push(r.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var c=d(273),n=s(c),o=d(220),r=s(o);e.exports=t.default},146:function(e,t,d){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=d(2),c=s(i),n=75,o="-1px";t.default={props:{name:String,value:Boolean,id:String,disabled:Boolean,type:{type:String,default:"button"}},mixins:[c.default],data:function(){return{leftPos:o,checked:this.value}},computed:{classes:function(){return{"md-checked":Boolean(this.value),"md-disabled":this.disabled}},styles:function(){return{transform:"translate3D("+this.leftPos+", -50%, 0)"}}},watch:{checked:function(){this.setPosition()},value:function(e){this.changeState(e)}},methods:{setPosition:function(){this.leftPos=this.checked?n+"%":o},changeState:function(e,t){this.checked=e,this.$emit("change",this.checked,t),this.$emit("input",this.checked,t)},toggle:function(e){this.disabled||this.changeState(!this.checked,e)}},mounted:function(){this.$nextTick(this.setPosition)}},e.exports=t.default},190:function(e,t){},220:function(e,t){e.exports=".THEME_NAME.md-switch.md-checked .md-switch-container{background-color:ACCENT-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked .md-switch-thumb{background-color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ripple{opacity:.38}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-container{background-color:PRIMARY-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-thumb{background-color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-container{background-color:WARN-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-thumb{background-color:WARN-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-switch.md-disabled .md-switch-container,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-container{background-color:rgba(0,0,0,0.12)}.THEME_NAME.md-switch.md-disabled .md-switch-thumb,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-thumb{background-color:#bdbdbd}\n"},273:function(e,t,d){d(190);var s=d(1)(d(146),d(337),null,null);e.exports=s.exports},337:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",{staticClass:"md-switch",class:[e.themeClass,e.classes]},[d("div",{staticClass:"md-switch-container",on:{click:function(t){e.toggle(t)}}},[d("div",{staticClass:"md-switch-thumb",style:e.styles},[d("input",{attrs:{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled},domProps:{value:e.value}}),e._v(" "),d("button",{staticClass:"md-switch-holder",attrs:{type:e.type}}),e._v(" "),d("md-ink-ripple",{attrs:{"md-disabled":e.disabled}})],1)]),e._v(" "),e.$slots.default?d("label",{staticClass:"md-switch-label",attrs:{for:e.id||e.name}},[e._t("default")],2):e._e()])},staticRenderFns:[]}}})}));