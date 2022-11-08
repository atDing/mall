<template>
	<div id="detail">
		<detail-nav-bar ref="nav" @titleClick="titleClick" class="detail-nav"></detail-nav-bar>
		<scroll class="content" ref="scroll" :probe-type="3" @onScroll="contentScroll">
			<detail-swiper :top-images="topImages" class="el1"></detail-swiper>
			<detail-base-info :goods="goods"/>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
			<detail-param-info ref="param" class="el2" :param-info="paramInfo" />
			<detail-comment-info ref="comment" class="el3" :comment-info="commentInfo"/>
			<goods-list ref="recommend" class="el4" :goods="recommend" :is-recommend="true"/>
		</scroll>
		<back-top @click.native="backClick" v-show="isShow"></back-top>
		<detail-bottom-bar @addCart="addToCart"/>


	</div>
</template>

<script>
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail'
import{debounce} from '@/common/util'
import {backTopMixin} from '@/common/mixin'

import DetailNavBar from './childComps/DetailNavBar.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'
export default {
  components: { DetailNavBar,DetailSwiper, DetailBaseInfo, DetailShopInfo, Scroll, DetailGoodsInfo, DetailParamInfo, DetailCommentInfo, GoodsList, DetailBottomBar},
	name:'Detail',
	mixins:[backTopMixin],
	data(){
		return {
			iid:null,
			topImages:[],
			goods:{},
			shop:{},
			detailInfo:{},
			paramInfo:{},
			commentInfo:{},
			recommend:[],
			themeTopYs:[],
			getThemeTopY:null,
			contentIndex:0,
		}
	},
	methods: {
		_getDetail(iid){
			getDetail(iid).then(res=>{
				// console.log("详情数据",res)
				const data=res.result
				//1.获取轮播图数据
				this.topImages=res.result.itemInfo.topImages
				//2.获取商品信息
				this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
				//3.获取店铺信息
				this.shop=new Shop(data.shopInfo)
				//4.保存商品详情数据
				this.detailInfo=data.detailInfo
				//5.保存商品的参数信息
				this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
				//6.保存评论信息
				if(data.rate.cRate!==0){
					this.commentInfo=data.rate.list[0]
				}
			})
		},
		_getRecommend(){
			getRecommend().then(res=>{
				console.log("推荐数据",res)
				this.recommend=res.data.list
			})
		},

		imageLoad(){
			this.$refs.scroll.refresh()
			this.getThemeTopY()
		},

		titleClick(index){
			/**
			 * 方法一
			this.themeTopYs=[]
			this.themeTopYs.push(0)
			this.themeTopYs.push(this.$refs.param.$el.offsetTop)
			this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
			this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
			console.log(this.themeTopYs)
			this.$refs.scroll.scrollToXY(0,-(this.themeTopYs[index])) 
			*/

			/**
			 * 方法二 
			switch(index){
				case 0:
					this.$refs.scroll.scrollToElement('.el1',300)
					break
				case 1:
					this.$refs.scroll.scrollToElement('.el2',300)
					console.log("参数")
					break
				case 2:
					this.$refs.scroll.scrollToElement('.el3',300)
					console.log("评论")
					break
				case 3:
					this.$refs.scroll.scrollToElement('.el4',300)
					console.log("推荐")
					break
					
			} */
			this.$refs.scroll.scrollToXY(0,-(this.themeTopYs[index])) 
			this.contentIndex=index
			// console.log(index)
			
		},

		contentScroll(position){
			const positionY=-position.y
			for(let i in this.themeTopYs){
				i=parseInt(i)			//i=0,1,2,3
				// if(i<this.themeTopYs.length-1){		//i=0,1,2
					if(positionY<this.themeTopYs[i+1]&& positionY>=this.themeTopYs[i] &&i!=this.contentIndex){
						this.contentIndex=i
						this.$refs.nav.currentIndex=this.contentIndex
					}
				// }else{		//i=3
					// if(positionY>=this.themeTopYs[i] &&i!=this.contentIndex){
						// this.contentIndex=i
						// this.$refs.nav.currentIndex=this.contentIndex
					// }
				// }
				
			}
			
			//是否显示“返回顶部”图片
			this.isShow=(positionY<1000)?false:true	

			// if(positionY<this.themeTopYs[1]-10 && positionY>=this.themeTopYs[0]){
			// 	this.contentIndex=0
			// }else if(positionY<this.themeTopYs[2]-10 && positionY>=this.themeTopYs[1]-10){
			// 	this.contentIndex=1
			// }else if(positionY<this.themeTopYs[3]-10 && positionY>=this.themeTopYs[2]-10){
			// 	this.contentIndex=2
			// }else if(positionY>=this.themeTopYs[3]-10){
			// 	this.contentIndex=3
			// }
			// console.log(this.contentIndex)
			// this.$refs.nav.currentIndex=this.currentIndex
		},

		//添加到购物车
		addToCart(){
			//1.获取购物车要展示的信息
			const product={}
			product.image=this.topImages[0]
			product.desc=this.goods.desc
			product.title=this.goods.title
			product.price=this.goods.newPrice.split('~')[0]
			product.iid=this.iid
			product.count=1
			// console.log("----------",product)

			//2.添加商品到购物车
			this.$store.dispatch('addCart',product).then(res=>{
				console.log("------------",res)
			})
			localStorage.setItem('cartList', JSON.stringify(this.$store.state.cartList))	
		}
	},
	created() {
		//1.保存传入的iid
		this.iid=this.$route.params.iid

		//2.根据iid请求数据
		this._getDetail(this.iid)

		//3.请求推荐数据
		this._getRecommend()
		
		//4.
		this.getThemeTopY=debounce(()=>{
			this.themeTopYs=[]
			this.themeTopYs.push(0)
			this.themeTopYs.push(this.$refs.param.$el.offsetTop)
			this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
			this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
			this.themeTopYs.push(Number.MAX_VALUE)
			console.log(this.themeTopYs)
		},100)
		
	},
}
</script>

<style scoped>
#detail{
	height:100vh;
}
.detail-nav{
	position:relative;
	z-index: 9;
	background-color: #fff;
}
.content{
	height: calc(100% - 44px - 49px);
}
</style>