import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import ('../views/home/Home.vue')
const Category=()=>import ('../views/category/Category.vue')
const Cart=()=>import ('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail=()=>import ('../views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect:'/home'		//重定向
	},
	{
		path: '/home',
		component: Home,
		meta: {
			footShow:true
		},
	},
	{
		path: '/category',
		component: Category,
		meta: {
			footShow:true
		},
	},
	{
		path: '/cart',
		component: Cart,
		meta: {
			footShow:true
		},
	},
	{
		path: '/profile',
		component: Profile,
		meta: {
			footShow:true
		},
	},
	{
		path: '/detail/:iid',			//params传参
		name:Detail,
		component: Detail,
	}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

//防止重复点击导航栏。控制台报错
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function pusreplaceh(to) {
	return VueRouterReplace.call(this, to).catch(err => err)
}
export default router