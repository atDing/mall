<template>
	<div class="bottom-bar">
		<div class="bar-left">
			<div>
				<img class="icon service" src="@/assets/img/detail/serve.png"></img>
				<div class="text">客服</div>
			</div>
			<div>
				<img class="icon shop" src="@/assets/img/detail/shop.png"></img>
				<div class="text">店铺</div>
			</div>
			<div>
				<img class="icon collect" src="@/assets/img/detail/collect.png"></img>
				<div class="text">收藏</div>
			</div>
		</div>
		<div class="bar-right bar-item">
			<div class="cart" @click="addToCart">加入购物车</div>
			<div class="buy">立即购买</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'DetailBottomBar',
	methods: {
		addToCart(){
			this.$emit("addCart")
		}
	},
}
</script>

<style scoped>
.bottom-bar{
	height:49px;
	background-color: #fff;
	position:relative;
	display: flex;
	text-align: center;
	padding:6px 0;
}
.bar-left{
	width:40%;
	font-size: 13px;
	display: flex;
	justify-content: space-around;
}
.bar-right{
	width:60%;
	display: flex;
	justify-content: space-around;
	line-height: 35px;
	text-align: center;
	font-size: 11px;
	color: #fff; 
}
.bar-right .cart{
	width:50%;
	background-image: linear-gradient(to right, #ffe200 ,#ff8a17 );
	border-radius: 45px 0px 0px 45px;
}
.bar-right .buy{
	width:50%;
	background-image: linear-gradient(to right, #ff5e34,#f00 );
	border-radius: 0px 50px 50px 0px;
}
</style>