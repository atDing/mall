<template>
	<nav-bar>
		<img slot="left" src="@/assets/img/common/back.svg" class="back" @click="backClick">
		<div slot="center" class="title">
			<div 
				v-for="(item,index) in titles"  
				class="title-item"
				:class="{active:index===currentIndex}"
				@click="titleClick(index)"
			>
				{{item}}
			</div>
		</div>
	</nav-bar>

</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'

export default {
	name:'DetailNavBar',
  components: { NavBar },
	data(){
		return {
			titles:['商品','参数','评论','推荐'],
			currentIndex:0
		}
	},
	methods: {
		titleClick(index){
			this.currentIndex=index
			this.$emit("titleClick",index)
		},
		backClick(){
			// this.$router.go(-1)
			this.$router.back()
		}
	},

}
</script>

<style>
	.back{
		margin-top:12px;
	}
	.title{
		/* background-color: pink; */
		display: flex;
	}
	.title-item{
		flex:1;
		font-size: 14px;
	}
	.active{
		color:var(--color-high-text);
	}
</style>