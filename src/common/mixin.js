import BackTop from '@/components/content/backTop/BackTop.vue'
import TabControl from '@/components/content/tabControl.vue'


export const backTopMixin = {
	components: {BackTop},
	data() { 
		return {
			isShow: false,
		}
			
	},
	methods: {
		//点击按钮，回到顶部
		backClick(){
			this.$refs.scroll.scrollToXY(0,0)
			console.log("回到顶部")
		},
	},
} 

export const tabControlMixin = {
	components: { TabControl },
	data() { 
		return {
			type:'pop',
		}
	},
	methods: { 
		tabClick(index){
			console.log("index---",index)
			switch(index){
				case 0:
					this.type='pop'
					break
				case 1:
					this.type='new'
					break
				case 2:
					this.type='sell'
					break
			}
			this.$refs.tabControl1.currentIndex=index
			this.$refs.tabControl2.currentIndex=index
		}
	}
}