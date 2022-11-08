<template>
	<div v-if="Object.keys(detailInfo).length!==0" class="goods-info">
		<div class="info-desc clear-fix">
			<div  class="start"></div>
			<div class="desc">{{detailInfo.desc}}</div>
			<div  class="end"></div>
		</div>
		<div class="info-key">{{detailInfo.detailImage[0].key}}</div>
		<div class="info-list">
			<img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="">
		</div>
	</div>
</template>

<script>
export default {
	name:'DetailGoodsInfo',
	props:{
		detailInfo:{
			type:Object,
			default(){
				return {}
			}
		}
	},
	data(){
		return{
			counter:0,
			imagesLength:0,
		}
	},
	methods: {
		imgLoad(){
			if(++this.counter===this.imagesLength){
				this.$emit('imageLoad')
			}
		}
	},
	watch:{
		detailInfo(){
			this.imagesLength=this.detailInfo.detailImage[0].list.length
		}
	}
}
</script>

<style scoped>
.goods-info{
	padding: 15px 0;
	border-bottom: 5px solid #f2f5f8;
}
.info-desc{
	margin:15px;

}
.clear-fix ::before,.clear-fix ::after{
	content:"";
	display: block;
	clear: both;
}
.info-desc .start::before,.info-desc .end::after{
	width: 5px;
  height: 5px;
  background-color: #333333;	
}
.info-desc .start,.info-desc .end{
	position: relative;
	width:25%;
	height:1px;
	background-color: #a3a3a5;
}
.info-desc .end::after {
	position: absolute;
  right: 0;
}
.info-desc .desc{
	font-size: 12px;
	text-align:justify;
	padding:15px 0 10px 0;
}
.info-desc .start{
	float: left;
	display: inline-block;
}
.info-desc .end{
	float: right;
}
.info-key{
	font-size: 13px;
  margin: 10px 0 10px 15px;
  color: #333333;
}
.info-list img {
  width: 100%;
}
</style>