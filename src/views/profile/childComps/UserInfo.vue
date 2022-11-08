<template>
	<div class="user-info">
		<img src="@/assets/img/profile/avatar.svg">
		<div class="info-center">
			<div class="login">登录/注册</div>
			<div class="bind">
				<img src="@/assets/img/profile/phone.svg">
				<span>暂无绑定手机号</span>
			</div>
		</div>
		<div class="info-right">
			<img src="../../../assets/img/common/arrow-left.svg">
		</div>
	</div>
</template>

<script>
export default {
	name:'UserInfo',
}
</script>

<style scoped>
.user-info{
	position:relative;
	background-color: var(--color-tint);
	padding:5px 8px;
	color: #fff;
	display: flex;
}
.user-info img{
	width:20%;
}
.info-center{
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.info-center .login{
	font-size: 14px;
	margin:3px 5px;
}
.info-center .bind {
}
.info-center .bind img{
	width:20px;
	vertical-align: middle;
}
.info-center .bind span{
	font-size: 12px;
}
.info-right{
}
.info-right img{
	width:20px;
	position:absolute;
	right: 10px;
	top:35%;
}
</style>