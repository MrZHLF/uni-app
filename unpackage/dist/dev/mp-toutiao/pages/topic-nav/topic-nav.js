(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/topic-nav/topic-nav"],{

/***/ 27:
/*!******************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/components/news/topic-list.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topic_list_vue_vue_type_template_id_ebb600f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topic-list.vue?vue&type=template&id=ebb600f6&scoped=true& */ 28);
/* harmony import */ var _topic_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topic-list.vue?vue&type=script&lang=js& */ 30);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _topic_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _topic_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _topic_list_vue_vue_type_style_index_0_id_ebb600f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic-list.vue?vue&type=style&index=0&id=ebb600f6&scoped=true&lang=css& */ 32);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _topic_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _topic_list_vue_vue_type_template_id_ebb600f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _topic_list_vue_vue_type_template_id_ebb600f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ebb600f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/zhou/Desktop/仿糗事百科/components/news/topic-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 28:
/*!*************************************************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/components/news/topic-list.vue?vue&type=template&id=ebb600f6&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_template_id_ebb600f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./topic-list.vue?vue&type=template&id=ebb600f6&scoped=true& */ 29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_template_id_ebb600f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_template_id_ebb600f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 29:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/zhou/Desktop/仿糗事百科/components/news/topic-list.vue?vue&type=template&id=ebb600f6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 30:
/*!*******************************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/components/news/topic-list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./topic-list.vue?vue&type=script&lang=js& */ 31);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 31:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/zhou/Desktop/仿糗事百科/components/news/topic-list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    item: Object,
    index: Number },

  methods: {
    opendetail: function opendetail() {
      uni.navigateTo({
        url: '../../pages/topic-detail/topic-detail' });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 32:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/components/news/topic-list.vue?vue&type=style&index=0&id=ebb600f6&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_style_index_0_id_ebb600f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./topic-list.vue?vue&type=style&index=0&id=ebb600f6&scoped=true&lang=css& */ 33);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_style_index_0_id_ebb600f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_style_index_0_id_ebb600f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_style_index_0_id_ebb600f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_style_index_0_id_ebb600f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_list_vue_vue_type_style_index_0_id_ebb600f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 33:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/zhou/Desktop/仿糗事百科/components/news/topic-list.vue?vue&type=style&index=0&id=ebb600f6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 83:
/*!************************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/main.js?{"page":"pages%2Ftopic-nav%2Ftopic-nav"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _topicNav = _interopRequireDefault(__webpack_require__(/*! ./pages/topic-nav/topic-nav.vue */ 84));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_topicNav.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 84:
/*!*****************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/pages/topic-nav/topic-nav.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topic_nav_vue_vue_type_template_id_5625f54c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topic-nav.vue?vue&type=template&id=5625f54c& */ 85);
/* harmony import */ var _topic_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topic-nav.vue?vue&type=script&lang=js& */ 87);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _topic_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _topic_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _topic_nav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic-nav.vue?vue&type=style&index=0&lang=css& */ 89);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _topic_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _topic_nav_vue_vue_type_template_id_5625f54c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _topic_nav_vue_vue_type_template_id_5625f54c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/zhou/Desktop/仿糗事百科/pages/topic-nav/topic-nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 85:
/*!************************************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/pages/topic-nav/topic-nav.vue?vue&type=template&id=5625f54c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_template_id_5625f54c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./topic-nav.vue?vue&type=template&id=5625f54c& */ 86);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_template_id_5625f54c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_template_id_5625f54c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 86:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/zhou/Desktop/仿糗事百科/pages/topic-nav/topic-nav.vue?vue&type=template&id=5625f54c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 87:
/*!******************************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/pages/topic-nav/topic-nav.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./topic-nav.vue?vue&type=script&lang=js& */ 88);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 88:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/zhou/Desktop/仿糗事百科/pages/topic-nav/topic-nav.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;







































var _topicList = _interopRequireDefault(__webpack_require__(/*! ../../components/news/topic-list */ 27));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var swiperTabHead = function swiperTabHead() {return __webpack_require__.e(/*! import() | components/index/swiper-tab-head */ "components/index/swiper-tab-head").then(__webpack_require__.bind(null, /*! ../../components/index/swiper-tab-head.vue */ 126));};var noThing = function noThing() {return __webpack_require__.e(/*! import() | components/common/no-thing */ "components/common/no-thing").then(__webpack_require__.bind(null, /*! ../../components/common/no-thing */ 140));};var loadMore = function loadMore() {return __webpack_require__.e(/*! import() | components/common/load-more */ "components/common/load-more").then(__webpack_require__.bind(null, /*! ../../components/common/load-more */ 133));};var _default =
{
  data: function data() {
    return {
      swiperheight: 500, //高度
      tabIndex: 0, // 选中的
      tabBars: [
      { name: "关注", id: "guanzhu" },
      { name: "推荐", id: "tuijian" },
      { name: "体育", id: "tiyu" },
      { name: "热点", id: "redian" },
      { name: "财经", id: "caijing" },
      { name: "娱乐", id: "yule" }],

      newslist: [
      {
        loadtext: "上拉加载更多",
        list: [
        {
          titlepic: "/static/demo/topicpic/1.jpeg",
          title: "话题名称1",
          desc: "我是话题描述1",
          totalnum: 50,
          todaynum: 10 },

        {
          titlepic: "/static/demo/topicpic/2.jpeg",
          title: "话题名称1",
          desc: "我是话题描述1",
          totalnum: 50,
          todaynum: 10 },

        {
          titlepic: "/static/demo/topicpic/3.jpeg",
          title: "话题名称1",
          desc: "我是话题描述1",
          totalnum: 50,
          todaynum: 10 },

        {
          titlepic: "/static/demo/topicpic/4.jpeg",
          title: "话题名称1",
          desc: "我是话题描述1",
          totalnum: 50,
          todaynum: 10 }] },



      {
        loadtext: "上拉加载更多",
        list: [
        {
          titlepic: "/static/demo/topicpic/3.jpeg",
          title: "话题名称1",
          desc: "我是话题描述1",
          totalnum: 50,
          todaynum: 10 }] },



      {
        loadtext: "上拉加载更多",
        list: [{
          titlepic: "/static/demo/topicpic/10.jpeg",
          title: "话题名称5",
          desc: "我是话题描述1",
          totalnum: 50,
          todaynum: 10 },

        {
          titlepic: "/static/demo/topicpic/8.jpeg",
          title: "话题名称1",
          desc: "我是话题描述1",
          totalnum: 50,
          todaynum: 10 }] },


      {
        loadtext: "上拉加载更多",
        list: [] },

      {
        loadtext: "上拉加载更多",
        list: [] },

      {
        loadtext: "上拉加载更多",
        list: [] }] };



  },
  components: {
    swiperTabHead: swiperTabHead,
    noThing: noThing,
    loadMore: loadMore,
    topicList: _topicList.default },

  onLoad: function onLoad() {var _this = this;
    uni.getSystemInfo({
      success: function success(res) {
        var height = res.windowHeight - uni.upx2px(100);
        _this.swiperheight = height;
      } });

  },
  methods: {
    //滑动切换导航
    tabChange: function tabChange(e) {
      this.tabIndex = e.detail.current;
    },
    //接受子组件传过来的值点击切换导航
    tabtap: function tabtap(index) {
      this.tabIndex = index;
    },
    loadmore: function loadmore(index) {var _this2 = this;
      if (this.newslist[index].loadtext != "上拉加载更多") {return;}
      //修改状态
      this.newslist[index].loadtext = "加载中...";
      //获取数据
      setTimeout(function () {
        var obj = {
          titlepic: "/static/demo/topicpic/11.jpeg",
          title: "话题名称1",
          desc: "我是话题描述1",
          totalnum: 50,
          todaynum: 10 };

        _this2.newslist[index].list.push(obj);
        _this2.newslist[index].loadtext = "上拉加载更多";
      }, 1000);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 89:
/*!**************************************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/pages/topic-nav/topic-nav.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./topic-nav.vue?vue&type=style&index=0&lang=css& */ 90);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topic_nav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 90:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/zhou/Desktop/仿糗事百科/pages/topic-nav/topic-nav.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[83,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQzovVXNlcnMvemhvdS9EZXNrdG9wL+S7v+ezl+S6i+eZvuenkS9jb21wb25lbnRzL25ld3MvdG9waWMtbGlzdC52dWU/NzIwOSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvemhvdS9EZXNrdG9wL+S7v+ezl+S6i+eZvuenkS9jb21wb25lbnRzL25ld3MvdG9waWMtbGlzdC52dWU/YjQwNCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvemhvdS9EZXNrdG9wL+S7v+ezl+S6i+eZvuenkS9jb21wb25lbnRzL25ld3MvdG9waWMtbGlzdC52dWU/OTY2MCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvemhvdS9EZXNrdG9wL+S7v+ezl+S6i+eZvuenkS9jb21wb25lbnRzL25ld3MvdG9waWMtbGlzdC52dWU/NGIxZiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvemhvdS9EZXNrdG9wL+S7v+ezl+S6i+eZvuenkS9jb21wb25lbnRzL25ld3MvdG9waWMtbGlzdC52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3pob3UvRGVza3RvcC/ku7/ns5fkuovnmb7np5EvY29tcG9uZW50cy9uZXdzL3RvcGljLWxpc3QudnVlPzlmZTEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3pob3UvRGVza3RvcC/ku7/ns5fkuovnmb7np5EvY29tcG9uZW50cy9uZXdzL3RvcGljLWxpc3QudnVlPzIzZTgiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3pob3UvRGVza3RvcC/ku7/ns5fkuovnmb7np5EvbWFpbi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvemhvdS9EZXNrdG9wL+S7v+ezl+S6i+eZvuenkS9wYWdlcy90b3BpYy1uYXYvdG9waWMtbmF2LnZ1ZT84NTU5Iiwid2VicGFjazovLy9DOi9Vc2Vycy96aG91L0Rlc2t0b3Av5Lu/57OX5LqL55m+56eRL3BhZ2VzL3RvcGljLW5hdi90b3BpYy1uYXYudnVlP2EyYjMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3pob3UvRGVza3RvcC/ku7/ns5fkuovnmb7np5EvcGFnZXMvdG9waWMtbmF2L3RvcGljLW5hdi52dWU/Y2NmMiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvemhvdS9EZXNrdG9wL+S7v+ezl+S6i+eZvuenkS9wYWdlcy90b3BpYy1uYXYvdG9waWMtbmF2LnZ1ZT9hZGE2Iiwid2VicGFjazovLy9DOi9Vc2Vycy96aG91L0Rlc2t0b3Av5Lu/57OX5LqL55m+56eRL3BhZ2VzL3RvcGljLW5hdi90b3BpYy1uYXYudnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy96aG91L0Rlc2t0b3Av5Lu/57OX5LqL55m+56eRL3BhZ2VzL3RvcGljLW5hdi90b3BpYy1uYXYudnVlPzIxMGUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3pob3UvRGVza3RvcC/ku7/ns5fkuovnmb7np5EvcGFnZXMvdG9waWMtbmF2L3RvcGljLW5hdi52dWU/ZWE1NCJdLCJuYW1lcyI6WyJwcm9wcyIsIml0ZW0iLCJPYmplY3QiLCJpbmRleCIsIk51bWJlciIsIm1ldGhvZHMiLCJvcGVuZGV0YWlsIiwidW5pIiwibmF2aWdhdGVUbyIsInVybCIsImNyZWF0ZVBhZ2UiLCJQYWdlIiwiZGF0YSIsInN3aXBlcmhlaWdodCIsInRhYkluZGV4IiwidGFiQmFycyIsIm5hbWUiLCJpZCIsIm5ld3NsaXN0IiwibG9hZHRleHQiLCJsaXN0IiwidGl0bGVwaWMiLCJ0aXRsZSIsImRlc2MiLCJ0b3RhbG51bSIsInRvZGF5bnVtIiwiY29tcG9uZW50cyIsInN3aXBlclRhYkhlYWQiLCJub1RoaW5nIiwibG9hZE1vcmUiLCJ0b3BpY0xpc3QiLCJvbkxvYWQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsImhlaWdodCIsIndpbmRvd0hlaWdodCIsInVweDJweCIsInRhYkNoYW5nZSIsImUiLCJkZXRhaWwiLCJjdXJyZW50IiwidGFidGFwIiwibG9hZG1vcmUiLCJzZXRUaW1lb3V0Iiwib2JqIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFDLE9BRkc7QUFHVEMsY0FBSSxFQUFDLFNBSEk7QUFJVEMsa0JBQVEsRUFBQyxFQUpBO0FBS1RDLGtCQUFRLEVBQUMsRUFMQSxFQUFWOztBQU9BLGNBQUksQ0FBQ1AsUUFBTCxDQUFjZixLQUFkLEVBQXFCaUIsSUFBckIsQ0FBMEIwQixJQUExQixDQUErQkQsR0FBL0I7QUFDQSxjQUFJLENBQUMzQixRQUFMLENBQWNmLEtBQWQsRUFBcUJnQixRQUFyQixHQUFnQyxRQUFoQztBQUNBLE9BVlMsRUFVUixJQVZRLENBQVY7QUFXQSxLQXpCTSxFQXpHTSxFOzs7Ozs7Ozs7Ozs7O0FDekNmO0FBQUE7QUFBQTtBQUFBO0FBQWtqQyxDQUFnQiwrK0JBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F0a0MsdUMiLCJmaWxlIjoicGFnZXMvdG9waWMtbmF2L3RvcGljLW5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdG9waWMtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWJiNjAwZjYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdG9waWMtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RvcGljLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RvcGljLWxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWJiNjAwZjYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImViYjYwMGY2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ViYjYwMGY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ViYjYwMGY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90b3BpYy1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYmI2MDBmNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlYmI2MDBmNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzovVXNlcnMvemhvdS9EZXNrdG9wL+S7v+ezl+S6i+eZvuenkS9jb21wb25lbnRzL25ld3MvdG9waWMtbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTE3LTAhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0wLTEhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdG9waWMtbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWJiNjAwZjYmc2NvcGVkPXRydWUmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0wLTEhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdG9waWMtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTAtMSFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi90b3BpYy1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOntcblx0XHRpdGVtOk9iamVjdCxcblx0XHRpbmRleDpOdW1iZXJcblx0fSxcblx0bWV0aG9kczp7XG5cdFx0b3BlbmRldGFpbCgpe1xuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHR1cmw6ICcuLi8uLi9wYWdlcy90b3BpYy1kZXRhaWwvdG9waWMtZGV0YWlsJyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMSFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMC0xIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3RvcGljLWxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWJiNjAwZjYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTAtMSFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi90b3BpYy1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWViYjYwMGY2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnICAgICAgICAgICAgXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL3RvcGljLW5hdi90b3BpYy1uYXYudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdG9waWMtbmF2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NjI1ZjU0YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90b3BpYy1uYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90b3BpYy1uYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RvcGljLW5hdi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU2MjVmNTRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU2MjVmNTRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90b3BpYy1uYXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU2MjVmNTRjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU2MjVmNTRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOi9Vc2Vycy96aG91L0Rlc2t0b3Av5Lu/57OX5LqL55m+56eRL3BhZ2VzL3RvcGljLW5hdi90b3BpYy1uYXYudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xNy0wIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMC0xIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3RvcGljLW5hdi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTYyNWY1NGMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0wLTEhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdG9waWMtbmF2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMC0xIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3RvcGljLW5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBzd2lwZXJUYWJIZWFkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2luZGV4L3N3aXBlci10YWItaGVhZC52dWVcIjtcbmltcG9ydCBub1RoaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9uby10aGluZ1wiO1xuaW1wb3J0IGxvYWRNb3JlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9sb2FkLW1vcmVcIjtcbmltcG9ydCB0b3BpY0xpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmV3cy90b3BpYy1saXN0XCI7XG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN3aXBlcmhlaWdodDo1MDAsLy/pq5jluqZcblx0XHRcdHRhYkluZGV4OjAsLy8g6YCJ5Lit55qEXG5cdFx0XHR0YWJCYXJzOltcblx0XHRcdFx0eyBuYW1lOlwi5YWz5rOoXCIsaWQ6XCJndWFuemh1XCIgfSxcblx0XHRcdFx0eyBuYW1lOlwi5o6o6I2QXCIsaWQ6XCJ0dWlqaWFuXCIgfSxcblx0XHRcdFx0eyBuYW1lOlwi5L2T6IKyXCIsaWQ6XCJ0aXl1XCIgXHQgIH0sXG5cdFx0XHRcdHsgbmFtZTpcIueDreeCuVwiLGlkOlwicmVkaWFuXCIgIH0sXG5cdFx0XHRcdHsgbmFtZTpcIui0oue7j1wiLGlkOlwiY2FpamluZ1wiIH0sXG5cdFx0XHRcdHsgbmFtZTpcIuWoseS5kFwiLGlkOlwieXVsZVwiICAgIH0sXG5cdFx0XHRdLFxuXHRcdFx0bmV3c2xpc3Q6W1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bG9hZHRleHQ6XCLkuIrmi4nliqDovb3mm7TlpJpcIixcblx0XHRcdFx0XHRsaXN0Oltcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGl0bGVwaWM6XCIvc3RhdGljL2RlbW8vdG9waWNwaWMvMS5qcGVnXCIsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOlwi6K+d6aKY5ZCN56ewMVwiLFxuXHRcdFx0XHRcdFx0XHRkZXNjOlwi5oiR5piv6K+d6aKY5o+P6L+wMVwiLFxuXHRcdFx0XHRcdFx0XHR0b3RhbG51bTo1MCxcblx0XHRcdFx0XHRcdFx0dG9kYXludW06MTBcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcGljOlwiL3N0YXRpYy9kZW1vL3RvcGljcGljLzIuanBlZ1wiLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTpcIuivnemimOWQjeensDFcIixcblx0XHRcdFx0XHRcdFx0ZGVzYzpcIuaIkeaYr+ivnemimOaPj+i/sDFcIixcblx0XHRcdFx0XHRcdFx0dG90YWxudW06NTAsXG5cdFx0XHRcdFx0XHRcdHRvZGF5bnVtOjEwXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aXRsZXBpYzpcIi9zdGF0aWMvZGVtby90b3BpY3BpYy8zLmpwZWdcIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6XCLor53popjlkI3np7AxXCIsXG5cdFx0XHRcdFx0XHRcdGRlc2M6XCLmiJHmmK/or53popjmj4/ov7AxXCIsXG5cdFx0XHRcdFx0XHRcdHRvdGFsbnVtOjUwLFxuXHRcdFx0XHRcdFx0XHR0b2RheW51bToxMFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGl0bGVwaWM6XCIvc3RhdGljL2RlbW8vdG9waWNwaWMvNC5qcGVnXCIsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOlwi6K+d6aKY5ZCN56ewMVwiLFxuXHRcdFx0XHRcdFx0XHRkZXNjOlwi5oiR5piv6K+d6aKY5o+P6L+wMVwiLFxuXHRcdFx0XHRcdFx0XHR0b3RhbG51bTo1MCxcblx0XHRcdFx0XHRcdFx0dG9kYXludW06MTBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsb2FkdGV4dDpcIuS4iuaLieWKoOi9veabtOWkmlwiLFxuXHRcdFx0XHRcdGxpc3Q6W1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aXRsZXBpYzpcIi9zdGF0aWMvZGVtby90b3BpY3BpYy8zLmpwZWdcIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6XCLor53popjlkI3np7AxXCIsXG5cdFx0XHRcdFx0XHRcdGRlc2M6XCLmiJHmmK/or53popjmj4/ov7AxXCIsXG5cdFx0XHRcdFx0XHRcdHRvdGFsbnVtOjUwLFxuXHRcdFx0XHRcdFx0XHR0b2RheW51bToxMFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsb2FkdGV4dDpcIuS4iuaLieWKoOi9veabtOWkmlwiLFxuXHRcdFx0XHRcdGxpc3Q6W3tcblx0XHRcdFx0XHRcdFx0dGl0bGVwaWM6XCIvc3RhdGljL2RlbW8vdG9waWNwaWMvMTAuanBlZ1wiLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTpcIuivnemimOWQjeensDVcIixcblx0XHRcdFx0XHRcdFx0ZGVzYzpcIuaIkeaYr+ivnemimOaPj+i/sDFcIixcblx0XHRcdFx0XHRcdFx0dG90YWxudW06NTAsXG5cdFx0XHRcdFx0XHRcdHRvZGF5bnVtOjEwXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aXRsZXBpYzpcIi9zdGF0aWMvZGVtby90b3BpY3BpYy84LmpwZWdcIixcblx0XHRcdFx0XHRcdFx0dGl0bGU6XCLor53popjlkI3np7AxXCIsXG5cdFx0XHRcdFx0XHRcdGRlc2M6XCLmiJHmmK/or53popjmj4/ov7AxXCIsXG5cdFx0XHRcdFx0XHRcdHRvdGFsbnVtOjUwLFxuXHRcdFx0XHRcdFx0XHR0b2RheW51bToxMFxuXHRcdFx0XHRcdFx0fV1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxvYWR0ZXh0Olwi5LiK5ouJ5Yqg6L295pu05aSaXCIsXG5cdFx0XHRcdFx0bGlzdDpbXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bG9hZHRleHQ6XCLkuIrmi4nliqDovb3mm7TlpJpcIixcblx0XHRcdFx0XHRsaXN0OltdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsb2FkdGV4dDpcIuS4iuaLieWKoOi9veabtOWkmlwiLFxuXHRcdFx0XHRcdGxpc3Q6W11cblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudHM6e1xuXHRcdHN3aXBlclRhYkhlYWQsXG5cdFx0bm9UaGluZyxcblx0XHRsb2FkTW9yZSxcblx0XHR0b3BpY0xpc3Rcblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcblx0XHRcdHN1Y2Nlc3M6KHJlcyk9Pntcblx0XHRcdFx0bGV0IGhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQtdW5pLnVweDJweCgxMDApXG5cdFx0XHRcdHRoaXMuc3dpcGVyaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cdG1ldGhvZHM6e1xuXHRcdC8v5ruR5Yqo5YiH5o2i5a+86IiqXG5cdFx0dGFiQ2hhbmdlKGUpe1xuXHRcdFx0dGhpcy50YWJJbmRleCA9IGUuZGV0YWlsLmN1cnJlbnQ7XG5cdFx0fSxcblx0XHQvL+aOpeWPl+WtkOe7hOS7tuS8oOi/h+adpeeahOWAvOeCueWHu+WIh+aNouWvvOiIqlxuXHRcdHRhYnRhcChpbmRleCl7XG5cdFx0XHR0aGlzLnRhYkluZGV4ID0gaW5kZXg7XG5cdFx0fSxcblx0XHRsb2FkbW9yZShpbmRleCl7XG5cdFx0XHRpZih0aGlzLm5ld3NsaXN0W2luZGV4XS5sb2FkdGV4dCAhPVwi5LiK5ouJ5Yqg6L295pu05aSaXCIpe3JldHVybn1cblx0XHRcdC8v5L+u5pS554q25oCBXG5cdFx0XHR0aGlzLm5ld3NsaXN0W2luZGV4XS5sb2FkdGV4dD1cIuWKoOi9veS4rS4uLlwiXG5cdFx0XHQvL+iOt+WPluaVsOaNrlxuXHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRsZXQgb2JqID0ge1xuXHRcdFx0XHRcdHRpdGxlcGljOlwiL3N0YXRpYy9kZW1vL3RvcGljcGljLzExLmpwZWdcIixcblx0XHRcdFx0XHR0aXRsZTpcIuivnemimOWQjeensDFcIixcblx0XHRcdFx0XHRkZXNjOlwi5oiR5piv6K+d6aKY5o+P6L+wMVwiLFxuXHRcdFx0XHRcdHRvdGFsbnVtOjUwLFxuXHRcdFx0XHRcdHRvZGF5bnVtOjEwXG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMubmV3c2xpc3RbaW5kZXhdLmxpc3QucHVzaChvYmopO1xuXHRcdFx0XHR0aGlzLm5ld3NsaXN0W2luZGV4XS5sb2FkdGV4dCA9IFwi5LiK5ouJ5Yqg6L295pu05aSaXCI7XG5cdFx0XHR9LDEwMDApXG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0xIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0wLTEhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdG9waWMtbmF2LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0xIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0wLTEhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdG9waWMtbmF2LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==