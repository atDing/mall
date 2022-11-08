<template>
	<div v-if="Object.keys(goods).length!==0" class="base-info">
		<div class="info-title">{{goods.title}}</div>
		<div class="info-price">
			<span class="n-price">{{goods.newPrice}}</span>
			<span class="o-price">{{goods.oldPrice}}</span>
			<span v-if="goods.discount" class="discount" :style="{'background-color':goods.discountBgColor}">{{goods.discount}}</span>
		</div>
		<div class="info-other">
			<span>{{ goods.columns[0] }}</span>
			<span>{{ goods.columns[1] }}</span>
			<span>{{ goods.services[goods.services.length - 1].name }}</span>
		</div>
		<div class="info-service">
			<span class="info-service-item" v-for="index in goods.services.length-1" 
				:key="index">
				<img :src="goods.services[index-1].icon">
				<span>{{goods.services[index-1].name}}</span>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name:'DetailBaseInfo',
	props:{
		goods:{
			type:Object,
			defaule(){
				return {}
			}
		}
	}

}
</script>

<style scoped>

.base-info{
	width: 100%;
  margin-top: 15px;
  padding: 0 10px;
  color: #999999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title{
	color:black;
	font-size: 15px;
	letter-spacing: 1px;
}
.info-price{
	margin-top: 10px;
}
.info-price .n-price{
	font-size: 24px;
  color: var(--color-high-text);
}
.info-price .o-price{
	font-size: 12px;
	margin-left: 5px;
	text-decoration: line-through;
}
.info-price .discount{
	position:relative;
	top:-4px;
	color:#fff;
	font-size:12px;
	margin-left:5px;
	padding:4px 7px;
	border-radius:7px;
}
.info-other{
	margin-top:15px;
	font-size:12px;
  /* line-height: 30px; */
	padding-bottom: 8px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-service {
	display: flex;
	justify-content: space-between;
	margin:15px 0px;
}
.info-service-item img{
	position:relative;
	top:2px;
	width:12px;
	height:12px;
	margin-right:5px;
}
.info-service-item span{
	font-size:12px;
	color:#000;
}
</style>