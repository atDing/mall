<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActivity"><slot name="item-icon"></slot></div>
		<div v-else><slot  name="item-icon-activity"></slot></div>
		<div :style="activityStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
export default {
	name:'TabBarItem',
	props:{
		path:String,
		activityColor:{
			type:String,
			default:'red',
		},
	},
	data(){
		return{
			// isActivity:false,
		}
	},
	computed:{
		isActivity:{
			get(){
				// console.log(this.$route.path,"###",this.$route.path.indexOf(this.path))
				return this.$route.path.indexOf(this.path) !== -1 		//有则返回起始位置，无则-1
			},
			set(){
				return {}
			}
		},
		activityStyle(){
			return this.isActivity?{color:this.activityColor}:{}
		}
	},
	methods: {
		itemClick(){
			this.isActivity=true
			// console.log(this.$router)
			// this.$router.push(this.path)//向history栈添加一个新的记录
			this.$router.replace(this.path)		//替换history栈中最后一个记录
			
		}
	},

}
</script>

<style scoped>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height:49px;
	}
	.tab-bar-item img{
		width:24px;
		height: 24px;
		margin-top:3px;
		vertical-align: middle;
		margin-bottom: 2px;
	}
	.activity{
		color: blue;
	}
</style>