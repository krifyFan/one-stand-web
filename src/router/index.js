import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from '../views/mainPage.vue'
import Home from '../views/homePage.vue'
import ProductIntroduce from '../views/productIntroduce.vue'
import CustomerCase from '../views/customerCase.vue'
import NewsInformation from '../views/newsInformation.vue'
import NewsDetail from '../views/newsDetail.vue'
import AboutUS from '../views/aboutUS.vue'
import adminLogin from '../views/adminLogin.vue'
import Apply from '../views/apply.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/mainPage'
	},
	{
		path: '/mainpage',
		name: 'mainPage',
		redirect: '/home',
		component: mainPage,
		children: [
			{
				path: '/home',
				name: 'home',
				component: Home
			},
			{
				path: '/product',
				name: 'product',
				component: ProductIntroduce
			},
			{
				path: '/case',
				name: 'case',
				component: CustomerCase
			},
			{
				path:'/news',
				name: 'news',
				component: NewsInformation,
			}, 
			{
				path:'/newsDetail/:id',
				name: 'newsDetail',
				component: NewsDetail
			},
			{
				path: '/about',
				name: 'about',
				component: AboutUS
			},
			{
				path: '/apply',
				name: 'apply',
				component: Apply
			}
		]
	},
	{
		path: '/adminLogin',
		name: 'adminLogin',
		component: adminLogin
	}
]

const router = new VueRouter({
  routes
})

export default router
