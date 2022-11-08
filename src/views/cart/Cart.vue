<template>
	<div class="cart">
		<nav-bar class="cart-nav">
			<div slot="center">购物车({{cartLength}})</div>
			<div v-if="isManage" slot="right" class="cart-nav-left" @click="manageClick">管理</div>
			<div v-else slot="right" class="cart-nav-left" @click="manageClick">退出管理</div>
		</nav-bar>
		<cart-list class="cart-list" :is-manage="isManage"></cart-list>
		<cart-bottom-bar class="cart-bottom" :is-selected-list="isSelectedList"/>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

import NavBar from '../../components/common/navbar/NavBar.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import CartList from './childComps/cartList.vue'
import CartBottomBar from './childComps/cartBottomBar.vue'


export default {
	name:'Cart',
  components: { NavBar, CartList, Scroll, CartBottomBar },
	data(){
		return{
			isManage:true,
		}
	},
	computed:{
		...mapGetters({cartLength:'cartLength',isSelectedList:'getIsSelectedList',})
	},
	methods: {
		manageClick(){
			this.isManage=!this.isManage
		}
	},
	mounted() {
		this.$store.state.cartList = JSON.parse(localStorage.getItem('cartList'))
	},
}
</script>

<style scoped>
.cart{
	height: 100vh;
}
.cart-nav{
	background-color: var(--color-tint);
	color:#fff;
}
.cart-nav-left{
	font-size:13px;
}
.cart-list{
	height:calc(100% - 44px - 49px - 40px);
	overflow: hidden;
}
.cart-bottom{
	position: relative;
	z-index: 20;
}
</style>