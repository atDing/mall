<template>
	<scroll :probeType="3" class="cart-content" ref="scrolls">
		<div v-for="(item,index) in cartList" :key="index" class="con-item">
			<cart-list-item :cartListItem="item" :is-manage="isManage"/>
		</div>
	</scroll>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
import cartListItem from './cartListItem.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'

export default {
  components: { cartListItem, Scroll },
	name:'CartList',
	props:{
		isManage:Boolean,
	},
	data(){
		return{
			// cartList:{}
		}
	},
	computed:{
		...mapState(['cartList']),
		// ...mapGetters({'cartList':'cartListFromStorage'})
		...mapGetters({'getIsSelectedList':'getIsSelectedList'}),
	},
	watch:{
		// cartList:{
		// 	immediate:true,	//初始化时，让handle调用一下
		// 	handler(newVal) {
		// 		this.cartList = newVal
		// 	},
		// 	deep: true,        //划重点
		// 	set(){}
    // },
	},
	methods: {
		// ...mapMutations({updateCart:'UPDATESTATE'})
	},
	activated() {
		this.$refs.scrolls.refresh()
		// this.$store.state.cartList = JSON.parse(localStorage.getItem('cartList'))
	},
}
</script>

<style scoped>
.cart-content{
}
.con-item{}
</style>