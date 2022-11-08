<template>
	<div>
		<!-- <swiper :imglist="banners"></swiper> -->
		<swiper :imglist="banners">
			<swiper-item v-for="(item,index) in banners" :key="index" slot="swipeItem">
				<a :href="item.link" slot="itemimg">
					<img :src="item.image" width="100%" @load="imageLoaded">
				</a>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'

export default {
 name: "HomeSwiper",
	props: {
		banners: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			isLoaded: false
		}
	},
	components: {
		Swiper,SwiperItem
	},
	/* methods: {
		startTimer() {
			this.$refs.swiper && this.$refs.swiper.startTimer()
		},
		stopTimer() {
			this.$refs.swiper && this.$refs.swiper.stopTimer()
		},
	} */
	methods: {
		imageLoaded() {
			if (!this.isLoaded) {
				this.$emit('swiperLoaded')
				this.isLoaded = true
			}
		}
	}
		
}
</script>

<style scoped>
</style>