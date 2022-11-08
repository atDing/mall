<template>
	<div class="normal-list">
		<div v-for="(item,index) in listView" class="item">
			<span><img :src="iconURL(item.icon)"></span>
			<span class="item-info">{{item.info}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name:'NormalListView',
	props:{
		listView:Array,
	},
	methods: {
		iconURL(svg){
			return require('@/assets/img/profile/'+svg)
		}
	},
}
</script>

<style scoped>
.normal-list{
	border-top:10px solid #ece9e9;
}
.item{
	font-size: 14px;
	padding:10px;
	border-top:1px solid #ece9e9;
}
.item span{
	padding-right:10px;
	vertical-align: middle;

}
.item img{
	width:20px;
	vertical-align: middle;
}

</style>