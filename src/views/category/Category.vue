<template>
	<div id="category">
		<nav-bar class="category-nav">
			<div slot="center">商品分类</div>
		</nav-bar>
		<div class="content">
			<tab-menu :categories="categories" @selectItem="selectItem" class="tab-menu"/>
			<div  class="con">
				<tab-control v-show="showTabControl" ref="tabControl1" class="tab-control1" :titles="['综合','新品','销量']"@tabClick="tabClick" />
				<scroll ref="scroll" :probe-type="3" class="conten-scroll" @onScroll="onScroll">
					<tab-content-category :sub-categories="subCategories" />
					<tab-control ref="tabControl2" class="tab-control" :titles="['综合','新品','销量']"@tabClick="tabClick"/>
					<tab-content-detail :category-detail="categoryDetail"/>
				</scroll>
				<back-top @click.native="backClick" v-show="isShow"></back-top>
			</div>
		</div>
		
	</div>
</template>

<script>
import {getCategory,getSubcategory,getCategoryDetail} from '@/network/category'
import {backTopMixin,tabControlMixin} from '@/common/mixin.js'
import {debounce} from '@/common/util'

import NavBar from '@/components/common/navbar/NavBar.vue'
import TabMenu from './childComps/TabMenu.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import TabContentCategory from './childComps/TabContentCategory.vue'
import TabContentDetail from './childComps/TabContentDetail.vue'
export default {
  components: { NavBar,TabMenu, Scroll, TabContentCategory, TabContentDetail },
	name:'Category',
	mixins:[backTopMixin,tabControlMixin],
	data() {
		return {
			categories:[],
			categoryIndex:0,
			subCategories:[],
			categoryData:{
				'pop':[],
				'sell':[],
				'new':[]
			},
			showTabControl:false,
			tabOffsetTop:0,
			isShow:false,
		}
	},
	computed:{
		categoryDetail(){
			return this.categoryData[this.type]
		},
	},
	methods: {
		selectItem(index){
			this.categoryIndex=index
			this._getSubcategory(this.categoryIndex)
		},
		onScroll(position){
			const positionY=-position.y
			//是否吸顶
			this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
			this.showTabControl=positionY>this.tabOffsetTop
			//显示“是否返回顶部”
			this.isShow=positionY>1500
		},
		// categroyImgLoaded(){
		// 	console.log("contentCategory加载完成")
		// },

		_getCategory(){
			getCategory().then((res)=>{
			// 1.获取分类数据
				this.categories = res.data.category.list
				//默认为第一个
				this._getSubcategory(this.categoryIndex)
			})
		},

		_getSubcategory(index){
			const maitKey = this.categories[index].maitKey
			getSubcategory(maitKey).then((res)=>{
				this.subCategories=res.data.list

				//获取子类中“综合”、“新品”、“销量”的数据
				const miniWallkey=this.categories[this.categoryIndex].miniWallkey
				this._getCategoryDetail(miniWallkey,'new')
				this._getCategoryDetail(miniWallkey,'pop')
				this._getCategoryDetail(miniWallkey,'sell')
			})
		},

		//获取分类详细数据
		_getCategoryDetail(miniWallkey,type){
			getCategoryDetail(miniWallkey,type).then(res=>{
				// console.log("@@@",type,"-------",res)
				this.categoryData[type]=res
			})
		},

	},
	created() {
		//获取总分类数据
		this._getCategory()
	},
	mounted(){
		const refresh=debounce(this.$refs.scroll.refresh)
		//监听图片加载完成之后刷新可滚动高度
		this.$bus.$on("itemImageLoad",()=>{
			refresh()
			console.log("category中的图片已加载完成")
		})	
	},
	activated() {
		// 同时刷新better-scroll防止不能滚动
    this.$refs.scroll.refresh();
		console.log("进入category页面")
	},
	deactivated() {
		// 取消category组件事件总线的监听
		this.$bus.$off("imgLoad", this.imgListener);
		console.log("离开category页面")
	}, 

}
</script>

<style scoped>
#category{
	position: relative;
	height:100vh;
}
.category-nav{
	background-color: var(--color-tint);
	color:#fff;
	position: relative;
	z-index: 9;
}
.content{
	display: flex;
	height:calc(100% - 49px - 44px);
}
.tab-menu{
	width: 20%;
}
.con{
	width: 80%;
	/* border:2px solid red; */
}
.tab-control1{
	width: 80%;
	position: absolute;
	z-index: 9;
}
.conten-scroll {
	height:100%;
	/* border:2px solid blue; */
}
.tab-control{
	font-size:14px;
}
</style>