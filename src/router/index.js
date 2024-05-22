import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: () => import("@/views/layout/LayoutView.vue"),
		children: [
			{
				path: "/",
				name: "Home",
				component: () => import("@/views/HomeView.vue"),
			},
			{
				path: "/contact",
				name: "Contact",
				component: () => import("@/views/pages/ContactView.vue"),
			},
			{
				path: "/meeting",
				name: "MeetingRoom",
				component: () => import("@/views/pages/TempatView.vue"),
			},
			{
				path: "/meeting/:slug",
				name: "DetailMeetingRoom",
				component: () => import("@/views/pages/TempatDetail.vue"),
			},
			{
				path: "/wedding",
				name: "WeddingPlace",
				component: () => import("@/views/pages/TempatView.vue"),
			},
			{
				path: "/wedding/:slug",
				name: "DetailWeddingPlace",
				component: () => import("@/views/pages/TempatDetail.vue"),
			},
			{
				path: "/tenis",
				name: "TenisPlace",
				component: () => import("@/views/pages/TempatView.vue"),
			},
			{
				path: "/tenis/:slug",
				name: "DetailTenisPlace",
				component: () => import("@/views/pages/TempatDetail.vue"),
			},
			{
				path: "/wisma",
				name: "WismaPlace",
				component: () => import("@/views/pages/TempatView.vue"),
			},
			{
				path: "/wisma/:slug",
				name: "DetailWismaPlace",
				component: () => import("@/views/pages/TempatDetail.vue"),
			},
		],
	},

	{
		path: "/",
		component: () => import("@/views/layout/LayoutBlank.vue"),
		children: [
			{
				path: "*",
				name: "404",
				component: () => import("@/views/pages/Error/404.vue"),
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	const isAuthenticated = localStorage.getItem('token');

	if (to.matched.some((route) => route.meta.requiresAuth)) {
		if (!isAuthenticated) {
			next({ path: '/login' });
		} else {
			next();
		}
	} else if (to.matched.some((route) => route.meta.requiresGuest)) {
		if (isAuthenticated) {
			next({ path: '/mytweet' });
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router;
