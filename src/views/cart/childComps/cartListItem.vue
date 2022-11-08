<template>
	<div class="list-item">
		<div class="list-item-left" @click="CHANGE_SELECT(cartListItem)">
			<img v-if="cartListItem.select==true" src="@/assets/img/cart/isSelect.png">
			<img v-else src="@/assets/img/cart/isNotSelect.png">
		</div>
		<div class="list-item-mid">
			<img :src="cartListItem.image" >
		</div>
		<div class="list-item-right" @click="itemClick">
			<div class="item-title">
				{{cartListItem.title}}
			</div>
			<div class="item-desc">
				{{cartListItem.desc}}
			</div>
			<div class="item-other">
				<div class="other-price">{{cartListItem.price}}</div>
				<div class="other-count">x{{cartListItem.count}}</div>
			</div>
		</div>
		<div class="del" :class="{manage:isManage==false}" @click="DEL_ITEM(cartListItem)">
			<img src="../../../assets/img/cart/del.png">
		</div>
	</div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
	name:'cartListItem',
	data(){
		return{
			isSelect:false,
		}
	},
	props:{
		cartListItem:{
			type:Object,
			default:()=>{}
		},
		isManage:Boolean,
	},
	methods: {
		//改变“选中框”状态
		...mapMutations(['CHANGE_SELECT']),
		itemClick(){
			this.$router.push('/detail/'+this.cartListItem.iid)
		},
		// "删除该商品"
		...mapMutations(['DEL_ITEM']),
	},
}
</script>

<style scoped>
.list-item{
	position:relative;
	width:100%;
	display: flex;
	padding: 10px 0 5px 0;
	border-bottom: 2px solid #bebebe;
}
.list-item-left img{
	position: relative;
	top:40%;
	padding:0 3px;
}
.list-item-mid img{
	width:65px;
	border-radius: 7px;
	/* padding:0 5px; */
}

.list-item-right{
	position:relative;
	font-size:16px;
	color: #333;
	padding-left:10px;
}

.item-title , .item-desc {
	width:200px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.item-title{
	margin-top:8px;
}
.item-desc{
	color:#777;
	font-size:13px;
	margin:11px 0 20px 0;
}
.item-other{
	display: flex;
	justify-content: space-between;
	padding-right:10px;
}
.other-price{
	color:orangered;
}
.del{
	/* border:2px solid red; */
	position:absolute;
	right:0;
	top:3px;
	height:calc(100% - 10px);
	width:0px;
	display: flex;
	align-items: center;
	transition:width 1s;
	/* padding-left:5px; */
	text-align: center;
}
.del img{
	width:70%;
}
.manage {
	width:30px;
	transition:width 1s;
	/* backdrop-filter: blur(10px); */
	box-shadow:-10px 0px 3px #fff;
	background:#fff;
}
</style>