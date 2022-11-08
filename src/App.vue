<template>
  <div id="app">
		<keep-alive exclude="Detail">
			<router-view></router-view> 
		</keep-alive>
		<main-tab-bar v-show="$route.meta.footShow" :tab-data="tabData" @tabBarClick="tabBarClick"/>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue'
export default {
  name: 'App',
	components:{MainTabBar},
	data(){
		return {
			tabData:[
				{text:'首页',icon:'home.png',iconActive:'home_activity.png',path:'/home'},
				{text:'分类',icon:'category.png',iconActive:'category_activity.png',path:'/category'},
				{text:'购物车',icon:'cart.png',iconActive:'cart_activity.png',path:'/cart'},
				{text:'我的',icon:'profile.png',iconActive:'profile_activity.png',path:'/profile'}
			],
		}
	},
	methods: {
		tabBarClick(index){
			// console.log("index",index)
		}
	},
}
</script>

<style>
@import "@/assets/css/base.css";
</style>
