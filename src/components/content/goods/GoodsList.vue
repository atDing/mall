<template>
	<div class="goods-list-box">
		<p class="recommend" v-if="isRecommend">推荐商品</p>
		<div class="goods-list">
			<goods-list-item v-for="item in goods" :goodsItem="item"/>
		</div>
	</div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
	name:'GoodsList',
  components: { GoodsListItem },
	data(){
		return {
			goodsData:[]
		}
	},
	props:{
		goods:{
			type:Array,
			default:()=>[],
		},
		isRecommend:{
			type:Boolean,
			default:false
		}
	},
	mounted() {
		// console.log("goods-------",this.goods)
	},

}
</script>

<style scoped>
	.recommend{
		font-size: 13px;
		margin:7px;
	}
	.goods-list{
		display: flex;
		flex-wrap: wrap;		/*是否换行 */
		justify-content: space-around;
		padding:2px;
	}
</style>