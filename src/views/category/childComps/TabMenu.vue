<template>
	<scroll id="tab-menu" :probe-type="3">
		<div class="menu-list">
			<div class="menu-list-item" 
				:class="{active:index==currentIndex}"
				v-for="(item,index) in categories"
				:key="index"
				@click="itemClick(index)"
			>
				{{item.title}}
			</div>
		</div>
	</scroll>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll.vue'
export default {
  components: { Scroll },
	name:'TabMenu',
	props: {
		categories: Array
	},
	data(){
		return{
			currentIndex:0
		}
	},
	methods: {
		itemClick(index){
			this.currentIndex=index
			this.$emit('selectItem', index)
		}
	},
}
</script>

<style scoped>
#tab-menu{
	height: 100%;
  background-color: #f6f6f6;
	font-size: 14px;
}
.menu-list-item{
	height:45px;
	line-height: 45px;
	text-align: center;
}

.active{
	background-color: #fff;
	border-left: 3px solid var(--color-high-text);
  color: var(--color-high-text);
	font-weight: 700;
}
</style>