<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<tab-control ref="tabControl1" class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" v-show="showTabControl"/>
		<scroll class="content" ref="scroll" :probeType="3" @onScroll="onScroll" :pullUpLoad="true" @pullingUp="loadMore">
			<home-swiper :banners="banners" @swiperLoaded="swiperLoaded"/>
			<recomend-view :recommends="recommends"/>
			<feature-view/>
			<tab-control ref="tabControl2" class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
			<goods-list :goods="showGoods"/>
		</scroll>
		<back-top @click.native="backClick" v-show="isShow"></back-top>

		<!-- ul>li{列表$}*10   可以快速生成10个li -->
	</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'

import HomeSwiper from './childComps/HomeSwiper.vue'
import RecomendView from './childComps/Recomend.vue'
import FeatureView from './childComps/FeatureView.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

import {getHomeMultiData,getHomeGoods} from '@/network/home'
import {debounce} from '@/common/util'
import {backTopMixin,tabControlMixin} from '@/common/mixin.js'

export default {
  components: { NavBar, HomeSwiper, RecomendView, FeatureView,  GoodsList, Scroll, GoodsList },
	name:'Home',
	mixins:[backTopMixin,tabControlMixin],
	data(){
		return{
			banners:[],
			recommends:[],
			goods:{
				'pop':{page:0,list:[]},
				'new':{page:0,list:[]},
				'sell':{page:0,list:[]},
			},
			showTabControl:false,
			tabOffsetTop:0
		}
	},
	computed:{
		showGoods(){
			return this.goods[this.type].list
		}
	},
	methods: {
		// 监听轮播图加载完成
		swiperLoaded() {
			// 获取tabControl的位置
			this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
			// console.log("@@@@@@@@@@",this.tabOffsetTop)
			// this.tabOffsetTop>=524?this.showTabControl=true:this.showTabControl=false
		},
		//“滚动事件”监听
		onScroll(position){
			//显示“是否返回顶部”
			this.isShow=-position.y>1500

			//是否吸顶
			this.showTabControl=(-position.y)>this.tabOffsetTop
		},
		//监听上拉加载中
		loadMore(){
			this.getHomeGoodsMethods(this.type)
		},
		
		/**
		 * 网络请求函数
		 */
		getHomeMultiDataMethods(){
			getHomeMultiData().then(res=>{
				// console.log("data@@@",res.data)
				
				let bannerList=res.data.banner.list
				this.banners.push(...bannerList)
				// for(var index in bannerList){
				// 	this.banners.push(bannerList[index])
				// }

				let recommendsList=res.data.recommend.list
				for(var index in recommendsList){
					this.recommends.push(recommendsList[index])
				}

			})
		},
		getHomeGoodsMethods(type){
			const page=this.goods[type].page+1
			getHomeGoods(type,page).then(res=>{
				// console.log("请求",type,"商品数据-------",res)
				this.goods[type].list.push(...res.data.list)
				this.goods[type].page+=1

				this.$refs.scroll.finishedPullUp()
			})
		}
	},
	//页面一渲染，就发送请求
	created() {
		//请求轮播图数据、推介数据
		this.getHomeMultiDataMethods()

		//请求商品数据
		this.getHomeGoodsMethods('pop')
		this.getHomeGoodsMethods('new')
		this.getHomeGoodsMethods('sell')
		
		
	},

	mounted() {

		const refresh=debounce(this.$refs.scroll.refresh)

		//监听图片加载完成之后刷新可滚动高度
		this.$bus.$on("itemImageLoad",()=>{
			refresh()
			// console.log("home中的图片已加载完成")
		})	

		//$el是获取该组件中所有的元素（但是此时还没有全部加载完图片）
		// setTimeout(()=>{console.log(this.$refs.tabControl2.$el.offsetTop)},200)
		
		
	},
	
	activated() {
		// 同时刷新better-scroll防止不能滚动
    this.$refs.scroll.refresh();
		console.log("进入home页面")
	},
	deactivated() {
		// 取消home组件事件总线的监听
		this.$bus.$off("imgLoad", this.imgListener);
		console.log("离开home页面")
	}, 
	

}
</script>

<style scoped>
	#home{
		/* padding-top: 44px; */
		position: relative;
		height: 100vh;
		
	}

	.home-nav{
		background-color: var(--color-tint);
		color:#fff;
		/* position: fixed;
		left: 0;
		right: 0;
		top:0; 
		z-index: 9;*/
	}
	.tab-control{
		position: sticky;/* sticky是判断是否固定位置，其中需要和top一起使用（滑动了top距离之后固定） */
		top:44px;
		z-index: 9;
	}
	.content{
		position: absolute;
		top:44px;
		bottom: 49px;
		right:0;
		left:0;
		overflow: hidden;
	}
</style>