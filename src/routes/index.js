import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/portfolio',
		},
		{
			path: '/portfolio',
			component: () => import('@/views/Portfolio.vue'),
			name: 'portfolio',
		},
		{
			path: '/about',
			component: () => import('@/views/Profile.vue'),
			name: 'about',
		},
	],
});
