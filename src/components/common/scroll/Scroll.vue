<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name:'Scroll',
	data(){
		return{
			scroll:null,
		}
	},
	props:{
		probeType:{
			type:Number,
			default:0
		},
		pullUpLoad: {
			type: Boolean,
			default: false
		},
	},
	mounted() {
		//创建Better-Scroll对象
		this.scroll=new BScroll(this.$refs.wrapper,{
			click:true,
			probeType:this.probeType,
			pullUpLoad:this.pullUpLoad,
		})

		//监听实时滚动位置
		if(this.probeType===2 || this.probeType===3){
			this.scroll.on('scroll',position=>{
				this.$emit('onScroll',position)
				// console.log("------------------",-position.y)
			})
		}
		
		//监听上拉加载
		if(this.pullUpLoad){
			this.scroll.on('pullingUp',()=>{
				this.$emit('pullingUp')
			})
		}
		
		/* //刷新
		this.scroll.on("refresh",()=>{
			this.$emit("refresh")
		}) */
		
	},
	methods: {
		scrollToXY(x,y,time=300){
			this.scroll && this.scroll.scrollTo(x,y,time)
		},
		scrollToElement(el,time,offsetX,offsetY){
			this.scroll && this.scroll.scrollToElement(el,time,offsetX,offsetY)
		},
		//完成加载（加载结束）
		finishedPullUp() {
			// console.log("上拉加载完成")
			this.scroll && this.scroll.finishPullUp()
		},

		//刷新
		refresh(){
			this.scroll.refresh()
		}
	},
}
</script>

<style>

</style>