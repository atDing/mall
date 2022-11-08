<template>
	<div id="profile">
		<nav-bar class="profile-nav">
			<div slot="center">我的档案</div>
		</nav-bar>
		<user-info/>
		<account-info/>
		<normal-list-view :list-view="orderList"/>
		<normal-list-view :list-view="serviceList"/>
	</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import UserInfo from './childComps/UserInfo.vue'
import AccountInfo from './childComps/AccountInfo.vue'
import NormalListView from './childComps/NormalListView.vue'
export default {
	name:'Profile',
  components: { NavBar, UserInfo, AccountInfo, NormalListView },
	data(){
		return{
			orderList: [
				{icon: 'message.svg', info: '我的消息'},
				{icon: 'pointer.svg', info: '积分商城'},
				{icon: 'vip.svg', info: '会员卡'},
			],
			serviceList: [
				{icon: 'cart.svg', info: '我的购物车'},
				{icon: 'shopping.svg', info: '下载购物APP'},
			]
		}
	}
}
</script>

<style scoped>
.profile-nav{
	color: #fff;
	background-color: var(--color-tint);
}
</style>