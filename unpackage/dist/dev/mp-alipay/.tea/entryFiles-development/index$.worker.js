if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../components/index/index-list');
require('../../components/index/swiper-tab-head');
require('../../components/common/load-more');
require('../../components/common/no-thing');
require('../../components/uni-status-bar/uni-status-bar');
require('../../components/uni-icon/uni-icon');
require('../../components/uni-nav-bar/uni-nav-bar');
require('../../components/news/news-nav-bar');
require('../../components/common/common-list');
require('../../components/news/topic-nav');
require('../../components/common/uploud-images/uploud-images');
require('../../components/uni-popup/uni-popup');
require('../../pages/index/index');
require('../../pages/news/news');
require('../../pages/paper/paper');
require('../../pages/home/home');
require('../../pages/search/search');
require('../../pages/add-input/add-input');
require('../../components/common/uploud-images/uploud-images');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}