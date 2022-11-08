import Vue from "vue"
import Vuex from "vuex"

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)


const state = {
	cartList:[],
}

//创建Store对象
const store = new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
})

//挂在到vue实例上
export default store