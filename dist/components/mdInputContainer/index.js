/*!
 * Vue Material v0.6.3
 * Made with love by Marcos Moura
 * Released under the MIT License.
 */
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)})({0:function(e,t,n){e.exports=n(289)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},16:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(t,n){return!(!t||!t.$el)&&(0!==t._uid&&(t.$el.classList.contains(n)?t:e(t.$parent,n)))};t.default=n,e.exports=t.default},67:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.constructor===Array};t.default=n,e.exports=t.default},70:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:[String,Number],disabled:Boolean,required:Boolean,maxlength:[Number,String],placeholder:String},watch:{value:function(e){this.$el.value=e,this.setParentValue(e)},disabled:function(){this.setParentDisabled()},required:function(){this.setParentRequired()},placeholder:function(){this.setParentPlaceholder()},maxlength:function(){this.handleMaxLength()}},methods:{handleMaxLength:function(){this.parentContainer.enableCounter=this.maxlength>0,this.parentContainer.counterLength=this.maxlength},setParentValue:function(e){this.parentContainer.setValue(e||this.$el.value)},setParentDisabled:function(){this.parentContainer.isDisabled=this.disabled},setParentRequired:function(){this.parentContainer.isRequired=this.required},setParentPlaceholder:function(){this.parentContainer.hasPlaceholder=!!this.placeholder},onFocus:function(){this.parentContainer.isFocused=!0},onBlur:function(){this.parentContainer.isFocused=!1,this.setParentValue()},onInput:function(){var e=this.$el.value;this.setParentValue(),this.parentContainer.inputLength=e?e.length:0,this.$emit("change",e),this.$emit("input",e)}}},e.exports=t.default},84:function(e,t){e.exports=".THEME_NAME.md-input-container.md-input-invalid:after{background-color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-invalid label,.THEME_NAME.md-input-container.md-input-invalid input,.THEME_NAME.md-input-container.md-input-invalid textarea,.THEME_NAME.md-input-container.md-input-invalid .md-error,.THEME_NAME.md-input-container.md-input-invalid .md-count,.THEME_NAME.md-input-container.md-input-invalid .md-icon:not(.md-icon-delete){color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-focused.md-input-inline label{color:rgba(0,0,0,0.54)}.THEME_NAME.md-input-container.md-input-focused.md-input-required label:after{color:WARN-COLOR}.THEME_NAME.md-input-container.md-input-focused:after{height:2px;background-color:PRIMARY-COLOR}.THEME_NAME.md-input-container.md-input-focused input,.THEME_NAME.md-input-container.md-input-focused textarea{color:PRIMARY-COLOR;text-shadow:0 0 0 BACKGROUND-CONTRAST;-webkit-text-fill-color:transparent}.THEME_NAME.md-input-container.md-input-focused label,.THEME_NAME.md-input-container.md-input-focused .md-icon:not(.md-icon-delete){color:PRIMARY-COLOR}.THEME_NAME.md-input-container.md-input-disabled label,.THEME_NAME.md-input-container.md-input-disabled input,.THEME_NAME.md-input-container.md-input-disabled textarea,.THEME_NAME.md-input-container.md-input-disabled .md-error,.THEME_NAME.md-input-container.md-input-disabled .md-count,.THEME_NAME.md-input-container.md-input-disabled .md-icon:not(.md-icon-delete),.THEME_NAME.md-input-container.md-input-disabled ::-webkit-input-placeholder{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-input-container .md-icon:not(.md-icon-delete):after{background:BACKGROUND-COLOR}\n"},103:function(e,t){},163:function(e,t,n){var i,o;i=n(336);var r=n(203);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=i},164:function(e,t,n){var i,o;n(103),i=n(337);var r=n(198);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=i},165:function(e,t,n){var i,o;i=n(338);var r=n(210);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=i},198:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-input-container",class:[e.themeClass,e.classes]},[e._t("default"),e._v(" "),e.enableCounter?n("span",{staticClass:"md-count"},[e._v(e._s(e.inputLength)+" / "+e._s(e.counterLength))]):e._e(),e._v(" "),e.mdHasPassword?n("md-button",{staticClass:"md-icon-button md-toggle-password",on:{click:e.togglePasswordType}},[n("md-icon",[e._v(e._s(e.showPassword?"visibility_off":"visibility"))])],1):e._e()],2)},staticRenderFns:[]}},203:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{staticClass:"md-input",attrs:{type:e.type,disabled:e.disabled,required:e.required,placeholder:e.placeholder,maxlength:e.maxlength},domProps:{value:e.value},on:{focus:e.onFocus,blur:e.onBlur,keydown:function(t){e._k(t.keyCode,"up",38)||e.onInput(t)}}})},staticRenderFns:[]}},210:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{staticClass:"md-input",attrs:{disabled:e.disabled,required:e.required,placeholder:e.placeholder,maxlength:e.maxlength},domProps:{value:e.value},on:{focus:e.onFocus,blur:e.onBlur,input:e.onInput}})},staticRenderFns:[]}},275:function(e,t,n){var i,o,r;!(function(n,a){o=[t,e],i=a,r="function"==typeof i?i.apply(t,o):i,!(void 0!==r&&(e.exports=r))})(this,(function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),u="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(u)&&(u=0),s()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function i(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function o(){var t=e.style.height,n=i(e),o=document.documentElement&&document.documentElement.scrollTop;e.style.height="auto";var r=e.scrollHeight+u;return 0===e.scrollHeight?void(e.style.height=t):(e.style.height=r+"px",d=e.clientWidth,n.forEach((function(e){e.node.scrollTop=e.scrollTop})),void(o&&(document.documentElement.scrollTop=o)))}function s(){o();var t=Math.round(parseFloat(e.style.height)),i=window.getComputedStyle(e,null),r=Math.round(parseFloat(i.height));if(r!==t?"visible"!==i.overflowY&&(n("visible"),o(),r=Math.round(parseFloat(window.getComputedStyle(e,null).height))):"hidden"!==i.overflowY&&(n("hidden"),o(),r=Math.round(parseFloat(window.getComputedStyle(e,null).height))),l!==r){l=r;var s=a("autosize:resized");try{e.dispatchEvent(s)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var u=null,d=e.clientWidth,l=null,c=function(){e.clientWidth!==d&&s()},p=function(t){window.removeEventListener("resize",c,!1),e.removeEventListener("input",s,!1),e.removeEventListener("keyup",s,!1),e.removeEventListener("autosize:destroy",p,!1),e.removeEventListener("autosize:update",s,!1),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),r.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",p,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",s,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",s,!1),e.addEventListener("autosize:update",s,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",r.set(e,{destroy:p,update:s}),t()}}function i(e){var t=r.get(e);t&&t.destroy()}function o(e){var t=r.get(e);t&&t.update()}var r="function"==typeof Map?new Map:(function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,i){e.indexOf(n)===-1&&(e.push(n),t.push(i))},delete:function(n){var i=e.indexOf(n);i>-1&&(e.splice(i,1),t.splice(i,1))}}})(),a=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){a=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var s=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(s=function(e){return e},s.destroy=function(e){return e},s.update=function(e){return e}):(s=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return n(e,t)})),e},s.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e},s.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e}),t.exports=s}))},289:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-input-container",a.default),e.component("md-input",u.default),e.component("md-textarea",l.default),e.material.styles.push(p.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(164),a=i(r),s=n(163),u=i(s),d=n(165),l=i(d),c=n(84),p=i(c);e.exports=t.default},336:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(70),r=i(o),a=n(16),s=i(a);t.default={mixins:[r.default],props:{type:{type:String,default:"text"}},mounted:function(){if(this.parentContainer=(0,s.default)(this.$parent,"md-input-container"),!this.parentContainer)throw this.$destroy(),new Error("You should wrap the md-input in a md-input-container");this.setParentDisabled(),this.setParentRequired(),this.setParentPlaceholder(),this.setParentValue(),this.handleMaxLength()}},e.exports=t.default},337:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=i(o),a=n(67),s=i(a);t.default={props:{mdInline:Boolean,mdHasPassword:Boolean},mixins:[r.default],data:function(){return{value:"",input:!1,showPassword:!1,enableCounter:!1,hasSelect:!1,hasPlaceholder:!1,hasFile:!1,isDisabled:!1,isRequired:!1,isFocused:!1,counterLength:0,inputLength:0}},computed:{hasValue:function(){return(0,s.default)(this.value)?this.value.length>0:Boolean(this.value)},classes:function(){return{"md-input-inline":this.mdInline,"md-has-password":this.mdHasPassword,"md-has-select":this.hasSelect,"md-has-file":this.hasFile,"md-has-value":this.hasValue,"md-input-placeholder":this.hasPlaceholder,"md-input-disabled":this.isDisabled,"md-input-required":this.isRequired,"md-input-focused":this.isFocused}}},methods:{isInput:function(){return this.input&&"input"===this.input.tagName.toLowerCase()},togglePasswordType:function(){this.isInput()&&("password"===this.input.type?(this.input.type="text",this.showPassword=!0):(this.input.type="password",this.showPassword=!1),this.input.focus())},setValue:function(e){this.value=e}},mounted:function(){if(this.input=this.$el.querySelectorAll("input, textarea, select, .md-file")[0],!this.input)throw this.$destroy(),new Error("Missing input/select/textarea inside md-input-container")}},e.exports=t.default},338:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(275),r=i(o),a=n(70),s=i(a),u=n(16),d=i(u);t.default={mixins:[s.default],watch:{value:function(){var e=this;this.$nextTick((function(){r.default.update(e.$el)}))}},mounted:function(){if(this.parentContainer=(0,d.default)(this.$parent,"md-input-container"),!this.parentContainer)throw this.$destroy(),new Error("You should wrap the md-textarea in a md-input-container");this.setParentDisabled(),this.setParentRequired(),this.setParentPlaceholder(),this.setParentValue(),this.handleMaxLength(),this.$el.getAttribute("rows")||this.$el.setAttribute("rows","1"),(0,r.default)(this.$el)},beforeDestroy:function(){r.default.destroy(this.$el)}},e.exports=t.default}})}));