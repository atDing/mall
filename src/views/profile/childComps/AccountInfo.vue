<template>
	<div class="account-info">
		<div class="account-item">
			<span class="num">0.00</span>元
			<div class="text">我的余额</div>
		</div>
		<div class="account-item">
			<span class="num">0</span>个
			<div class="text">我的优惠</div>
		</div>
		<div class="account-item">
			<span class="num">0</span>分
			<div class="text">我的积分</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'AccountInfo',
}
</script>

<style scoped>
.account-info{
	display: flex;
	font-size:10px;
	justify-content: space-around;
}
.account-item{
	padding:10px;
}
.num{
	color: #ff5f3e;
	font-weight: 700;
	font-size:20px;
	line-height: 30px;
}
</style>