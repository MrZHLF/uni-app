import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 挂载全局
import config from './common/config.js'
Vue.prototype.config = config

import lib from './common/lib.js'
Vue.prototype.lib = lib

App.mpType = 'app'

const app = new Vue({
    ...App,
	lib
})
app.$mount()
