# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 目录结构
## src
		assets：资源文件 
		common：该项目下的公共的js文件
		components：公共组件
				common：除了这个项目需要的组件，其他项目也许也要使用到的组件
				content：与当前业务相关的组件，其他项目不能使用
		network：网络相关
		router: 路由相关
		store：vuex
		views: 大的视图

## 安装
	npm install axios   
	npm i vue-router@3  
	npm i unplugin-vue-components -D   
	npm i better-scroll@1.13.2 --save
	npm i vant@latest-v2 --save
	npm -i vuex@3 --save

		
# 技术栈
		vue-router、axios、
		vant、better-scroll、

# 遇到的问题：
		（1）在使用props传参实现轮播图时，Home想要给HomeSwiper传递一个数组时，
				使用直接赋值不能实现，
				就采用了for循环，一个一个赋值，也可以采用（...arr）的形式的赋值方法。

		（2）在“首页”使用better-scroll时，最后一直向上滚动（向下翻页）时，能够一直滚动
				原因：未设置height，使得height很高
				解决方法：height:100vh     (vh表示视口，100vh表示100%的视口大小（可见视口位置）)

		(3)针对“目”型（上方占有高度，下方占有高度，想要确定中间的高度）的解决方法：
				a.使用calc（100%-（上+下））进行计算
				b.使用position：absolute定位（父元素也要定位），给top、bottom，right=0，left=0

		(4)better-scroll中的一个tab-control导航栏组件无法达到顶部后固定位置
				复制一个一样的tab-control组件在想要固定的位置，
				使用v-show
						当滚动到那个高度的条件时，标志值flag=true，v-show="flag",即v-show="true"	==>改变css样式：display:block
						当没有滚动到那个高度的条件时，标志值为flase,即v-show="false"			==>改变css样式：display:none
				ps:
						v-if也可以用来判断是否显示，但是改变的是dom元素。性能消耗更高

		(5)better-scroll后，页面滚动出现bug：
			good-list-item组件中的图片，在页面使用better-scroll计算可滚动高度之后，图片还没有加载出来（页面先加载，图片后加载）
			也就是说，better-scroll在页面的图片加载之前已经计算好了可滚动高度（并未包括图片高度），所以，理想可滚动高度 < 实际可滚动高度

			better-scroll中，在决定可滚动高度时，是使用scrollerHeight属性决定的
					scrollerHeight属性是根据放在content中的子内容的高度决定的
					但是首页中，刚开始加载页面时，并没有加载完图片内容
					导致scrollerHeight是没有包括完整的图片的，
					在图片加载完成之后，scrollerHeight没有进行更新，
					所以出现了该bug


			解决方法：监听图片加载完之后，对better-scroll进行刷新（refresh），重新计算可滚动高度
							可以使用vuex（管理状态）或事件总线（管理事件）

			步骤：（一）监听图片什么时候加载完成（vue中使用@load='',js中使用img.onload=function(){}）
					（二）调用BScroll中的.refresh()刷新scrollerHeight属性
			
			新bug：
						cannot read property 'refresh' of undefine
			原因：
						在Home组件中使用$bus时，是在created生命周期中使用的refresh，
						而在Scroll组件中的scroll可能还没来得及创建实例，因此没有refresh
			解决方法：
						将$bus使用的refresh的调用放在mounted中


P177

-------------------------------------------------------------------------------------------------		

	路由传参的方式
		query:
				参数会显示在地址栏中		==》get
		param: 
				参数不会在地址栏中显示出来	==》post
				传参时，只能用name

	在每次进入一个新的详情时，发现都是第一次进入的详情id,
	因为，在重新进入一个Detail组件后，iid也keep-alive了，因此没有改变详情页的iid
			解决：<keep-alive exclude="Detail"></keep-alive>排除“Detail”


	防抖：
				想要完成某个操作，但是这个操作要执行很多次
					==》不要立即执行该操作，等一会看看有没有相同操作，如果有等一起，没有就立即执行了。
			eg:	加载页面中一系列图片，等图片加载完获取页面高度
					==》可以使用防抖，等图片加载完再同一获取页面高度

----------------------------------------------------------------------------------------------------------

/Detail.vue
	获取标签的offsetTop，以下方法不可用：
			1）created()
					==》获取不到元素
				created(){}
			2）mounted()
					==》由于有v-if或v-show，不一定能保证在mounted之前，已经把v-if或v-show中的数据请求到，因此，不能渲染DOM，获取不到$el
				mounted(){
					this.themeTopYs.push(0)
					this.themeTopYs.push(this.$refs.param.$el.offsetTop)		//获取不到$el==>undefine
					this.themeTopYs.push(this.$refs.comment.$el.offsetTop)		//获取不到$el==>undefine
					this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
					console.log(this.themeTopYs)
				} 
			3）created中，请求完getDetail数据后，使用this.$nextTick
					==>DOM渲染出来了，但是image还没有渲染出来，获取到的数据不正确
	

	---------------------------------------------------------------------------------------------------
	212
	-------------
	Toast封装
	