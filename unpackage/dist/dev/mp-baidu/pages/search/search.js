(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/search/search"],{

/***/ 59:
/*!******************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/main.js?{"page":"pages%2Fsearch%2Fsearch"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _search = _interopRequireDefault(__webpack_require__(/*! ./pages/search/search.vue */ 60));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_search.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 60:
/*!***********************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/pages/search/search.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_2629670e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=2629670e& */ 61);
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ 63);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);





/* normalize component */

var component = Object(_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_2629670e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_2629670e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/zhou/Desktop/仿糗事百科/pages/search/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/*!******************************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/pages/search/search.vue?vue&type=template&id=2629670e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_2629670e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=template&id=2629670e& */ 62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_2629670e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_2629670e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 62:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/zhou/Desktop/仿糗事百科/pages/search/search.vue?vue&type=template&id=2629670e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 63:
/*!************************************************************************************!*\
  !*** C:/Users/zhou/Desktop/仿糗事百科/pages/search/search.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=script&lang=js& */ 64);
/* harmony import */ var _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilder_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 64:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/zhou/Desktop/仿糗事百科/pages/search/search.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var indxList = function indxList() {return __webpack_require__.e(/*! import() | components/index/index-list */ "components/index/index-list").then(__webpack_require__.bind(null, /*! ../../components/index/index-list.vue */ 175));};var noThing = function noThing() {return __webpack_require__.e(/*! import() | components/common/no-thing */ "components/common/no-thing").then(__webpack_require__.bind(null, /*! ../../components/common/no-thing */ 196));};var loadMore = function loadMore() {return __webpack_require__.e(/*! import() | components/common/load-more */ "components/common/load-more").then(__webpack_require__.bind(null, /*! ../../components/common/load-more */ 189));};var _default =


















{
  data: function data() {
    return {
      issearch: false, //搜索是否有内容
      loadtext: "上拉加载更多",
      list: [],
      searchtext: "", 搜索内容: 搜索内容 };

  },
  components: {
    indxList: indxList,
    noThing: noThing,
    loadMore: loadMore },

  onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
    // 监听原生标题导航按钮取消事件
    if (e.index == 0) {
      uni.navigateBack({
        delta: 1 });

    }
  },
  onNavigationBarSearchInputChanged: function onNavigationBarSearchInputChanged(e) {
    // 监听搜索框文本变化
    console.log(JSON.stringify(e.text), '监听搜索框文本变化');
    this.searchtext = e.text;
  },
  onNavigationBarSearchInputConfirmed: function onNavigationBarSearchInputConfirmed(e) {
    // 监听点击搜索按钮事件
    console.log(JSON.stringify(e.text), '监听点击搜索按钮事件');
    if (this.searchtext) {
      this.getdata();
    }
  },
  onReachBottom: function onReachBottom() {
    //上拉加载
    this.loadmore();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.getdata();
    uni.stopPullDownRefresh();
  },
  methods: {
    // 搜索
    getdata: function getdata() {var _this = this;
      //请求服务器,返回数据
      uni.showLoading();
      setTimeout(function () {
        var arr = [
        {
          userpic: "/static/demo/userpic/2.jpg",
          username: "昵称",
          isguanzhu: false,
          title: "我是标题1",
          type: "img", // img:图文,video:视频
          titlepic: "/static/demo/datapic/1.jpg",
          infonum: {
            index: 0, //0:没有操作，1:顶,2:踩；
            dingnum: 11,
            cainum: 11 },

          commentnum: 10,
          sharenum: 10 },

        {
          userpic: "/static/demo/userpic/3.jpg",
          username: "昵称",
          isguanzhu: true,
          title: "我是标题2",
          type: "video", // img:图文,video:视频
          titlepic: "/static/demo/datapic/2.jpg",
          playnum: "20w",
          long: "2:47",
          infonum: {
            index: 1, //0:没有操作，1:顶,2:踩；
            dingnum: 11,
            cainum: 11 },

          commentnum: 10,
          sharenum: 10 }];


        _this.list = arr;
        uni.hideLoading();
        _this.issearch = true;
      }, 1000);
    },
    //上拉加载
    loadmore: function loadmore() {var _this2 = this;
      if (this.loadtext != "上拉加载更多") {return;}
      //修改状态
      this.loadtext = "加载中...";
      //获取数据
      setTimeout(function () {
        var obj = {
          userpic: "/static/demo/userpic/20.jpg",
          username: "张三",
          isguanzhu: false,
          title: "模拟数据",
          type: "img", // img:图文,video:视频
          titlepic: "/static/demo/datapic/30.jpg",
          infonum: {
            index: 0, //0:没有操作，1:顶,2:踩；
            dingnum: 11,
            cainum: 11 },

          commentnum: 10,
          sharenum: 10 };

        _this2.list.push(obj);
        _this2.loadtext = "上拉加载更多";
      }, 1000);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["default"]))

/***/ })

},[[59,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQzovVXNlcnMvemhvdS9EZXNrdG9wL+S7v+ezl+S6i+eZvuenkS9tYWluLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy96aG91L0Rlc2t0b3Av5Lu/57OX5LqL55m+56eRL3BhZ2VzL3NlYXJjaC9zZWFyY2gudnVlP2NiNmQiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3pob3UvRGVza3RvcC/ku7/ns5fkuovnmb7np5EvcGFnZXMvc2VhcmNoL3NlYXJjaC52dWU/NTE1ZiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvemhvdS9EZXNrdG9wL+S7v+ezl+S6i+eZvuenkS9wYWdlcy9zZWFyY2gvc2VhcmNoLnZ1ZT81ZWM4Iiwid2VicGFjazovLy9DOi9Vc2Vycy96aG91L0Rlc2t0b3Av5Lu/57OX5LqL55m+56eRL3BhZ2VzL3NlYXJjaC9zZWFyY2gudnVlPzU1NTAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3pob3UvRGVza3RvcC/ku7/ns5fkuovnmb7np5EvcGFnZXMvc2VhcmNoL3NlYXJjaC52dWUiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiLCJkYXRhIiwiaXNzZWFyY2giLCJsb2FkdGV4dCIsImxpc3QiLCJzZWFyY2h0ZXh0Iiwi5pCc57Si5YaF5a65IiwiY29tcG9uZW50cyIsImluZHhMaXN0Iiwibm9UaGluZyIsImxvYWRNb3JlIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwIiwiZSIsImluZGV4IiwidW5pIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRleHQiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCIsImdldGRhdGEiLCJvblJlYWNoQm90dG9tIiwibG9hZG1vcmUiLCJvblB1bGxEb3duUmVmcmVzaCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJtZXRob2RzIiwic2hvd0xvYWRpbmciLCJzZXRUaW1lb3V0IiwiYXJyIiwidXNlcnBpYyIsInVzZXJuYW1lIiwiaXNndWFuemh1IiwidGl0bGUiLCJ0eXBlIiwidGl0bGVwaWMiLCJpbmZvbnVtIiwiZGluZ251bSIsImNhaW51bSIsImNvbW1lbnRudW0iLCJzaGFyZW51bSIsInBsYXludW0iLCJsb25nIiwiaGlkZUxvYWRpbmciLCJvYmoiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBLHdDQUFtQjs7QUFFbkI7QUFDQSwrRjtBQUNBQSxVQUFVLENBQUNDLGVBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMOzs7QUFHckQ7QUFDNkk7QUFDN0ksZ0JBQWdCLG1KQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQXd5QixDQUFnQix5d0JBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbUI3eUI7QUFDZEMsTUFEYyxrQkFDUDtBQUNOLFdBQU87QUFDTkMsY0FBUSxFQUFDLEtBREgsRUFDVTtBQUNoQkMsY0FBUSxFQUFDLFFBRkg7QUFHTkMsVUFBSSxFQUFDLEVBSEM7QUFJTkMsZ0JBQVUsRUFBQyxFQUpMLEVBSVNDLElBQUksRUFBSkEsSUFKVCxFQUFQOztBQU1BLEdBUmE7QUFTZEMsWUFBVSxFQUFDO0FBQ1ZDLFlBQVEsRUFBUkEsUUFEVTtBQUVWQyxXQUFPLEVBQVBBLE9BRlU7QUFHVkMsWUFBUSxFQUFS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WkMsa0JBQVEsRUFBQyw2QkFOQTtBQU9UQyxpQkFBTyxFQUFDO0FBQ1AxQixpQkFBSyxFQUFDLENBREMsRUFDQztBQUNSMkIsbUJBQU8sRUFBQyxFQUZEO0FBR1BDLGtCQUFNLEVBQUMsRUFIQSxFQVBDOztBQVlUQyxvQkFBVSxFQUFDLEVBWkY7QUFhVEMsa0JBQVEsRUFBQyxFQWJBLEVBQVY7O0FBZUEsY0FBSSxDQUFDdkMsSUFBTCxDQUFVNEMsSUFBVixDQUFlRCxHQUFmO0FBQ0EsY0FBSSxDQUFDNUMsUUFBTCxHQUFnQixRQUFoQjtBQUNBLE9BbEJTLEVBa0JSLElBbEJRLENBQVY7QUFtQkEsS0F0RU8sRUExQ0ssRSIsImZpbGUiOiJwYWdlcy9zZWFyY2gvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnICAgICAgICAgICAgXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL3NlYXJjaC9zZWFyY2gudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjI5NjcwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjYyOTY3MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjYyOTY3MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjYyOTY3MGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjYyOTY3MGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6L1VzZXJzL3pob3UvRGVza3RvcC/ku7/ns5fkuovnmb7np5EvcGFnZXMvc2VhcmNoL3NlYXJjaC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTE3LTAhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0wLTEhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjI5NjcwZSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTAtMSFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFFOlxcXFzliY3nq6/nvJbovpHlmahcXFxcSEJ1aWxkZXJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUU6XFxcXOWJjeerr+e8lui+keWZqFxcXFxIQnVpbGRlclxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0wLTEhRTpcXFxc5YmN56uv57yW6L6R5ZmoXFxcXEhCdWlsZGVyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuaW1wb3J0IGluZHhMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5kZXgvaW5kZXgtbGlzdC52dWUnO1xuaW1wb3J0IG5vVGhpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbW9uL25vLXRoaW5nXCJcbmltcG9ydCBsb2FkTW9yZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vbG9hZC1tb3JlXCJcbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXNzZWFyY2g6ZmFsc2UsIC8v5pCc57Si5piv5ZCm5pyJ5YaF5a65XG5cdFx0XHRsb2FkdGV4dDpcIuS4iuaLieWKoOi9veabtOWkmlwiLFxuXHRcdFx0bGlzdDpbXSxcblx0XHRcdHNlYXJjaHRleHQ6XCJcIiwg5pCc57Si5YaF5a65XG5cdFx0fVxuXHR9LFxuXHRjb21wb25lbnRzOntcblx0XHRpbmR4TGlzdCxcblx0XHRub1RoaW5nLFxuXHRcdGxvYWRNb3JlXG5cdH0sXG5cdG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcChlKXtcblx0XHQvLyDnm5HlkKzljp/nlJ/moIfpopjlr7zoiKrmjInpkq7lj5bmtojkuovku7Zcblx0XHRpZihlLmluZGV4PT0wKXtcblx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xuXHRcdFx0XHRkZWx0YToxXG5cdFx0XHR9KVxuXHRcdH1cblx0fSxcblx0b25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkKGUpe1xuXHRcdC8vIOebkeWQrOaQnOe0ouahhuaWh+acrOWPmOWMllxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGUudGV4dCksJ+ebkeWQrOaQnOe0ouahhuaWh+acrOWPmOWMlicpO1xuXHRcdHRoaXMuc2VhcmNodGV4dCA9IGUudGV4dDtcblx0fSxcblx0b25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQoZSl7XG5cdFx0Ly8g55uR5ZCs54K55Ye75pCc57Si5oyJ6ZKu5LqL5Lu2XG5cdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZS50ZXh0KSwn55uR5ZCs54K55Ye75pCc57Si5oyJ6ZKu5LqL5Lu2Jylcblx0XHRpZih0aGlzLnNlYXJjaHRleHQpe1xuXHRcdFx0dGhpcy5nZXRkYXRhKClcblx0XHR9XG5cdH0sXG5cdG9uUmVhY2hCb3R0b20oKSB7XG5cdFx0Ly/kuIrmi4nliqDovb1cblx0XHR0aGlzLmxvYWRtb3JlKClcblx0fSxcblx0b25QdWxsRG93blJlZnJlc2goKSB7XG5cdFx0dGhpcy5nZXRkYXRhKCk7XG5cdFx0dW5pLnN0b3BQdWxsRG93blJlZnJlc2goKVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Ly8g5pCc57SiXG5cdFx0Z2V0ZGF0YSgpe1xuXHRcdFx0Ly/or7fmsYLmnI3liqHlmags6L+U5Zue5pWw5o2uXG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoKVxuXHRcdFx0c2V0VGltZW91dCgoKSA9Pntcblx0XHRcdFx0bGV0IGFyciA9IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1c2VycGljOlwiL3N0YXRpYy9kZW1vL3VzZXJwaWMvMi5qcGdcIixcblx0XHRcdFx0XHRcdHVzZXJuYW1lOlwi5pi156ewXCIsXG5cdFx0XHRcdFx0XHRpc2d1YW56aHU6ZmFsc2UsXG5cdFx0XHRcdFx0XHR0aXRsZTpcIuaIkeaYr+agh+mimDFcIixcblx0XHRcdFx0XHRcdHR5cGU6XCJpbWdcIiwgLy8gaW1nOuWbvuaWhyx2aWRlbzrop4bpopFcblx0XHRcdFx0XHRcdHRpdGxlcGljOlwiL3N0YXRpYy9kZW1vL2RhdGFwaWMvMS5qcGdcIixcblx0XHRcdFx0XHRcdGluZm9udW06e1xuXHRcdFx0XHRcdFx0XHRpbmRleDowLC8vMDrmsqHmnInmk43kvZzvvIwxOumhtiwyOui4qe+8m1xuXHRcdFx0XHRcdFx0XHRkaW5nbnVtOjExLFxuXHRcdFx0XHRcdFx0XHRjYWludW06MTEsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0Y29tbWVudG51bToxMCxcblx0XHRcdFx0XHRcdHNoYXJlbnVtOjEwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dXNlcnBpYzpcIi9zdGF0aWMvZGVtby91c2VycGljLzMuanBnXCIsXG5cdFx0XHRcdFx0XHR1c2VybmFtZTpcIuaYteensFwiLFxuXHRcdFx0XHRcdFx0aXNndWFuemh1OnRydWUsXG5cdFx0XHRcdFx0XHR0aXRsZTpcIuaIkeaYr+agh+mimDJcIixcblx0XHRcdFx0XHRcdHR5cGU6XCJ2aWRlb1wiLCAvLyBpbWc65Zu+5paHLHZpZGVvOuinhumikVxuXHRcdFx0XHRcdFx0dGl0bGVwaWM6XCIvc3RhdGljL2RlbW8vZGF0YXBpYy8yLmpwZ1wiLFxuXHRcdFx0XHRcdFx0cGxheW51bTpcIjIwd1wiLFxuXHRcdFx0XHRcdFx0bG9uZzpcIjI6NDdcIixcblx0XHRcdFx0XHRcdGluZm9udW06e1xuXHRcdFx0XHRcdFx0XHRpbmRleDoxLC8vMDrmsqHmnInmk43kvZzvvIwxOumhtiwyOui4qe+8m1xuXHRcdFx0XHRcdFx0XHRkaW5nbnVtOjExLFxuXHRcdFx0XHRcdFx0XHRjYWludW06MTEsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0Y29tbWVudG51bToxMCxcblx0XHRcdFx0XHRcdHNoYXJlbnVtOjEwLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0XHR0aGlzLmxpc3QgPSBhcnI7XG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xuXHRcdFx0XHR0aGlzLmlzc2VhcmNoID0gdHJ1ZTtcblx0XHRcdH0sMTAwMClcblx0XHR9LFxuXHRcdC8v5LiK5ouJ5Yqg6L29XG5cdFx0bG9hZG1vcmUoKXtcblx0XHRcdGlmKHRoaXMubG9hZHRleHQgIT1cIuS4iuaLieWKoOi9veabtOWkmlwiKXtyZXR1cm59XG5cdFx0XHQvL+S/ruaUueeKtuaAgVxuXHRcdFx0dGhpcy5sb2FkdGV4dD1cIuWKoOi9veS4rS4uLlwiXG5cdFx0XHQvL+iOt+WPluaVsOaNrlxuXHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRsZXQgb2JqID0ge1xuXHRcdFx0XHRcdHVzZXJwaWM6XCIvc3RhdGljL2RlbW8vdXNlcnBpYy8yMC5qcGdcIixcblx0XHRcdFx0XHR1c2VybmFtZTpcIuW8oOS4iVwiLFxuXHRcdFx0XHRcdGlzZ3VhbnpodTpmYWxzZSxcblx0XHRcdFx0XHR0aXRsZTpcIuaooeaLn+aVsOaNrlwiLFxuXHRcdFx0XHRcdHR5cGU6XCJpbWdcIiwgLy8gaW1nOuWbvuaWhyx2aWRlbzrop4bpopFcblx0XHRcdFx0XHR0aXRsZXBpYzpcIi9zdGF0aWMvZGVtby9kYXRhcGljLzMwLmpwZ1wiLFxuXHRcdFx0XHRcdGluZm9udW06e1xuXHRcdFx0XHRcdFx0aW5kZXg6MCwvLzA65rKh5pyJ5pON5L2c77yMMTrpobYsMjrouKnvvJtcblx0XHRcdFx0XHRcdGRpbmdudW06MTEsXG5cdFx0XHRcdFx0XHRjYWludW06MTEsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjb21tZW50bnVtOjEwLFxuXHRcdFx0XHRcdHNoYXJlbnVtOjEwLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLmxpc3QucHVzaChvYmopO1xuXHRcdFx0XHR0aGlzLmxvYWR0ZXh0ID0gXCLkuIrmi4nliqDovb3mm7TlpJpcIjtcblx0XHRcdH0sMTAwMClcblx0XHR9LFxuXHRcdFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9