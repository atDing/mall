import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { Image, Swipe, SwipeItem } from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Image)


new Vue({
  render: h => h(App),
	router,
	store,
	//模板解析前就创建一个Vue实例对象，实现让其他组件也能访问到
	beforeCreate() {
		Vue.prototype.$bus = this
	},

	
}).$mount('#app')
