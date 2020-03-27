<template>
	<div id="content">
		<app-header></app-header>
		<router-view></router-view>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
export default {
	components: {
		AppHeader,
	},
};
</script>

<style lang="scss">
@import './assets/css/reset.css';
@import './assets/scss/common.scss';
</style>
