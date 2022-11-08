<template>
  <div id="app">
		<tab-bar>
			<tab-bar-item v-for="(item,index) in tabData" :key="index" :path="item.path" @click.native="tabBarClick(index)" >
				<img slot="item-icon" :src="iconURL(item.icon)" >
				<img slot="item-icon-activity":src="iconURL(item.iconActive)" >
				<div slot="item-text">{{item.text}}</div>
			</tab-bar-item>
		</tab-bar>
  </div>
</template>

<script>
import TabBar from '../common/tabbar/TabBar.vue'
import TabBarItem from '../common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
	components:{TabBar, TabBarItem},
	props:{
		tabData:{
			type:Array,
			default:()=>[]
		},
	},
	data(){
		return {
		}
	},
	methods: {
		iconURL(url){
			return require('@/assets/img/tabbar/'+url)
		},
		tabBarClick(index){
			this.$emit('tabBarClick',index)
		}
	},
}
</script>

<style scoped>
	@import "../../assets/css/base.css";
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height:49px;
	}
</style>
