(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-chat/user-chat"],{

/***/ 106:
/*!************************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/main.js?{"page":"pages%2Fuser-chat%2Fuser-chat"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _userChat = _interopRequireDefault(__webpack_require__(/*! ./pages/user-chat/user-chat.vue */ 107));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_userChat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 107:
/*!*****************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/pages/user-chat/user-chat.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_chat_vue_vue_type_template_id_17e01978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-chat.vue?vue&type=template&id=17e01978& */ 108);
/* harmony import */ var _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-chat.vue?vue&type=script&lang=js& */ 110);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);





/* normalize component */

var component = Object(_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_chat_vue_vue_type_template_id_17e01978___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_chat_vue_vue_type_template_id_17e01978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/zhou/Desktop/仿糗事百科/pages/user-chat/user-chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 108:
/*!************************************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/pages/user-chat/user-chat.vue?vue&type=template&id=17e01978& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_17e01978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-chat.vue?vue&type=template&id=17e01978& */ 109);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_17e01978___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_17e01978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 109:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/zhou/Desktop/仿糗事百科/pages/user-chat/user-chat.vue?vue&type=template&id=17e01978& ***!
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

/***/ 110:
/*!******************************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/pages/user-chat/user-chat.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-chat.vue?vue&type=script&lang=js& */ 111);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 111:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/zhou/Desktop/仿糗事百科/pages/user-chat/user-chat.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
















var _time = _interopRequireDefault(__webpack_require__(/*! ../../common/time.js */ 112));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var userChatBottom = function userChatBottom() {return __webpack_require__.e(/*! import() | components/user-chat/user-chat-bottom */ "components/user-chat/user-chat-bottom").then(__webpack_require__.bind(null, /*! ../../components/user-chat/user-chat-bottom */ 294));};var userChatList = function userChatList() {return __webpack_require__.e(/*! import() | components/user-chat/user-chat-list */ "components/user-chat/user-chat-list").then(__webpack_require__.bind(null, /*! ../../components/user-chat/user-chat-list */ 301));};var _default =
{
  data: function data() {
    return {
      scrollTop: 0,
      list: [],
      style: {
        contentH: 0,
        itemH: 0 } };


  },
  components: {
    userChatBottom: userChatBottom,
    userChatList: userChatList },

  onLoad: function onLoad() {
    this.getdata();
    this.initdata();
  },
  onReady: function onReady() {
    this.pageToBottom();
  },
  methods: {
    // 初始化参数
    initdata: function initdata() {
      // 动态获取数据
      try {
        var res = uni.getSystemInfoSync();
        this.style.contentH = res.windowHeight - uni.upx2px(120);
      } catch (e) {}
    },
    pageToBottom: function pageToBottom() {var _this = this;
      var q = uni.createSelectorQuery();
      q.select('#scrollview').boundingClientRect();
      q.selectAll('.user-chat-item').boundingClientRect();
      q.exec(function (res) {
        res[1].forEach(function (ret) {
          console.log(ret);
          _this.style.itemH += ret.height;
        });
        if (_this.style.itemH > _this.style.contentH) {
          _this.scrollTop = _this.style.itemH;
        }
      });
    },
    //获取聊天数据
    getdata: function getdata() {
      var arr = [
      {
        isme: false,
        userpic: "../../static/demo/userpic/11.jpg",
        type: "text",
        data: "哈哈哈",
        time: "1555146412" },

      {
        isme: true,
        userpic: "../../static/demo/userpic/10.jpg",
        type: "img",
        data: "../../static/demo/3.jpg",
        time: "1555146414" },

      {
        isme: false,
        userpic: "../../static/demo/userpic/11.jpg",
        type: "text",
        data: "哈哈哈",
        time: "1555146412" },

      {
        isme: true,
        userpic: "../../static/demo/userpic/10.jpg",
        type: "img",
        data: "../../static/demo/4.jpg",
        time: "1555146414" }];


      for (var i = 0; i < arr.length; i++) {
        arr[i].gstime = _time.default.gettime.getChatTime(arr[i].time, i > 0 ? arr[i - 1].time : 0);
      }
      this.list = arr;
    },
    submit: function submit(data) {
      //发布
      var now = new Date().getTime();
      var obj = {
        isme: true,
        userpic: "../../static/demo/userpic/10.jpg",
        type: "text",
        data: data,
        time: now,
        gstime: _time.default.gettime.getChatTime(now, this.list[this.list.length - 1].time) };

      this.list.push(obj);
      this.pageToBottom();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[106,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-chat/user-chat.js.map