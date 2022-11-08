<template>
	<div class="sub-category clearfix">
		<div v-for="(item,index) in subCategories" :key="index" class="sub">
			<div class="sub-item">
				<a :href="item.link" class="item-a">
					<img :src="item.image" class="item-img" @load="categroyImgLoaded">
					<div class="item-title">{{item.title}}</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'TabContentCategory',
	props:{
		subCategories:Array,
	},
	data(){
		return{

		}
	},
	methods: {
		categroyImgLoaded(){
			this.$emit('categroyImgLoaded')
		}
	},
}
</script>

<style scoped>
.sub-category {
  overflow: hidden;
}
.sub{
	/* border:2px solid black; */
	width:33%;
	height:100px;
	float: left;
}
.sub-item{
	/* border:1px solid blue; */
	margin:10px;
}
.item-img{
	width:80%;
	display:block;
	margin:0 auto;
	
}
.item-title{
	font-size:13px;
	text-align: center;
	margin-top:10px;
}
</style>