<template>
	<div class="cart-bottom">
		<nav-bar>
			<div slot="left" @click="changeCheck" class="nav-left">
				<img v-if="selectedAll" src="@/assets/img/cart/isSelect.png">
				<img v-else src="@/assets/img/cart/isNotSelect.png">
				全选
			</div>
			<div slot="center" class="nav-center">合计:<span>￥{{account}}</span></div>
			<div slot="right" class="nav-right">去结算({{getIsSelectedList.length}})</div>
		</nav-bar>
	</div>
</template>

<script>
import {mapMutations,mapState,mapGetters} from 'vuex'

import NavBar from '../../../components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
	name:'cartBottomBar',
	data() {
		return {
			selectedAll:false,
		}
	},
	props:{
		isSelectedList:{
			type:Array,
			default:()=>[]
		}
	},
	computed:{
		account(){
			let sum=0
			this.isSelectedList.forEach((item,index)=>{
				sum+=Number(item.price.substring(1))*item.count
			})
			return sum.toFixed(2)
		},
		...mapState(['cartList']),
		...mapGetters(['getIsSelectedList']),
	},
	methods: {
		changeCheck(){
			this.selectedAll=!this.selectedAll
			this.$store.commit('selectAll',this.selectedAll)
		},
	},
	updated() {
		if(this.cartList.length){
			if(this.cartList.length==this.getIsSelectedList.length){
				this.selectedAll=true
			}else{
				this.selectedAll=false
			}
		}
	},
}
</script>

<style scoped>
.cart-bottom{
	/* border:1px solid red; */
	height:40px;
	background-color: #eee;
	box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
	font-size: 13px;
	color:#333;
}
.nav-left img{
	width:25%;
	vertical-align: middle;
}
.nav-center{
	text-align: left;
	margin-left:3px;
}
.nav-center span{
	color:red;
}
.nav-right{
	width:120%;
	background-color: orangered;
	color:#fff;
	position:relative;
	right:15px;
}
</style>