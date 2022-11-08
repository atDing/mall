<template>
	<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		<slot name="swipeItem"></slot>
		<!-- <van-swipe-item v-for="(item,index) in images" :key="index">
			<a :href="item.link">
				<van-image
				width="100%"
				height="120%"
				:src="item.image"
			/>
			</a>
		</van-swipe-item> -->
	</van-swipe>
</template>
<script>
export default {
	name:"Swiper",
	props:{
		imglist:{
			type:Array,
			default:()=>[]
		},
	},
	data() {
		return {
			images:[],
			className: "",
			isLoaded:false,
		}
	},
	watch: { //监听父组件传过来的selectItems 
		imglist: { 
			handler(newVal,oldVal){ 
					this.images = newVal; 
					if(newVal) {//如果数据变化则重新创建数据用于渲染 
					//this.itemsCreat();//处理数据 
					} 
			}, 
			immediate:true,//immediate:true代表如果在 wacth 里声明了之后，就会立即先去执行里面的handler方法，如果为 false，不会在绑定的时候就执行。 
			deep:true//deep，默认值是 false，代表是否深度监听。 
		} 
	},
	mounted() {
		// this.imglist=this.images
		// console.log("imglist-------",this.imglist)
	},
	methods: {
		// imageLoaded(){
		// 	if(!this.isLoaded){
		// 		this.$emit("imageLoaded")
		// 		this.isLoaded=true
		// 	}
		// }
	},
}
</script>
<style scoped>
	.van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 0px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
