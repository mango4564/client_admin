import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import login from '../views/login.vue';
import forgot from '../views/forgot.vue';
import register from '../views/register.vue';
Vue.use(VueRouter)

const routes = [
	// 主页
	{
		path: '/',
		name: 'index',
		component: index,
		meta: {
			index: 0,
			title: '首页'
		}
	},

	// 登录
	{
		path: '/login',
		name: 'login',
		component: login,
		meta: {
			index: 0,
			title: '登录'
		}
	},
	// 注册
	{
		path: '/register',
		name: 'register',
		component: register,
		meta: {
			index: 0,
			title: '注册'
		}
	},

	// 忘记密码
	{
		path: '/forgot',
		name: "forgot",
		component: forgot,
		meta: {
			index: 0,
			title: '忘记密码'
		}
	},

	// 修改密码
	{
		path: '/user/password',
		name: "password",
		component: () => import("../views/user/password.vue"),
		meta: {
			index: 0,
			title: '修改密码'
		}
	},

	// 视频播放页
	{
		path: "/media/video",
		name: "video",
		component: () => import('../views/media/video.vue'),
		meta: {
			index: 0,
			title: "视频"
		}
	},

	// 音频播放页
	{
		path: "/media/audio",
		name: "audio",
		component: () => import('../views/media/audio.vue'),
		meta: {
			index: 0,
			title: "音频"
		}
	},
	// 学生路由
	{
		path: '/student/table',
		name: 'student_table',
		component: () => import('../views/student/table.vue')
	},
	{
		path: '/student/view',
		name: 'student_view',
		component: () => import('../views/student/view.vue')
	},
	// 宿管人员路由
	{
		path: '/housekeeping_personnel/table',
		name: 'housekeeping_personnel_table',
		component: () => import('../views/housekeeping_personnel/table.vue')
	},
	{
		path: '/housekeeping_personnel/view',
		name: 'housekeeping_personnel_view',
		component: () => import('../views/housekeeping_personnel/view.vue')
	},
	// 宿舍信息路由
	{
		path: '/dormitory_information/table',
		name: 'dormitory_information_table',
		component: () => import('../views/dormitory_information/table.vue')
	},
	{
		path: '/dormitory_information/view',
		name: 'dormitory_information_view',
		component: () => import('../views/dormitory_information/view.vue')
	},
	// 宿舍分配路由
	{
		path: '/dormitory_allocation/table',
		name: 'dormitory_allocation_table',
		component: () => import('../views/dormitory_allocation/table.vue')
	},
	{
		path: '/dormitory_allocation/view',
		name: 'dormitory_allocation_view',
		component: () => import('../views/dormitory_allocation/view.vue')
	},
	// 宿舍报修路由
	{
		path: '/dormitory_repair/table',
		name: 'dormitory_repair_table',
		component: () => import('../views/dormitory_repair/table.vue')
	},
	{
		path: '/dormitory_repair/view',
		name: 'dormitory_repair_view',
		component: () => import('../views/dormitory_repair/view.vue')
	},
	// 宿舍通知路由
	{
		path: '/dormitory_notice/table',
		name: 'dormitory_notice_table',
		component: () => import('../views/dormitory_notice/table.vue')
	},
	{
		path: '/dormitory_notice/view',
		name: 'dormitory_notice_view',
		component: () => import('../views/dormitory_notice/view.vue')
	},

	// 用户路由
	{
		path: '/user/table',
		name: 'user_table',
		component: () => import('../views/user/table.vue'),
		meta: {
			index: 0,
			title: '用户列表'
		}
	},
	{
		path: '/user/view',
		name: 'user_view',
		component: () => import('../views/user/view.vue'),
		meta: {
			index: 0,
			title: '用户详情'
		}
	},
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue'),
		meta: {
			index: 0,
			title: '个人信息'
		}
	},
	// 用户组路由
	{
		path: '/user_group/table',
		name: 'user_group_table',
		component: () => import('../views/user_group/table.vue'),
		meta: {
			index: 0,
			title: '用户组列表'
		}
	},
	{
		path: '/user_group/view',
		name: 'user_group_view',
		component: () => import('../views/user_group/view.vue'),
		meta: {
			index: 0,
			title: '用户组详情'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	let token = to.query.token;
	if (token){
		$.db.set("token",token,120);
	}
	next();
})

router.afterEach((to, from, next) => {
	let title = "学生宿舍管理系统-admin";
	document.title = title;
})

export default router
