<template>
	<swiper class="detail-swiper" :imglist="topImages">
		<swiper-item slot="swipeItem" v-for="(item,index) in topImages" :key="index">
			<img :src="item" slot="itemimg" width="100%">
		</swiper-item>
	</swiper>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
export default {
	name:'DetailSwiper',
  components: { Swiper, SwiperItem },
	props:{
		topImages:{
			type:Array,
			default:()=>[]
		}
	}
}
</script>

<style scoped>
	.detail-swiper{
		height: 300px;
		overflow: hidden;
	}
</style>