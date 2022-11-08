<template>
	<div>
		<goods-list :goods="categoryDetail"/>
	</div>

</template>

<script>
import GoodsList from '../../../components/content/goods/GoodsList.vue'
import GoodsListItem from '../../../components/content/goods/GoodsListItem.vue'
export default {
  components: { GoodsList, GoodsListItem },
	name:'TabContentDetail',
	props:{
		categoryDetail:{
			type:Array,
			default:()=>{[]}
		}
	},
}
</script>

<style>

</style>