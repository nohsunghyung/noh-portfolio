<template>
	<div id="content">
		<!-- <userProfile :userData="contents"></userProfile> -->
		<section class="portfolio-section">
			<portfolio-list :itemList="contents.project"></portfolio-list>
		</section>
	</div>
</template>

<script>
import profileData from '@/data/portfolioData.js';
// import userProfile from '@/components/userProfile.vue';
import portfolioList from '@/components/portfolioList.vue';
export default {
	components: {
		// userProfile,
		portfolioList,
	},
	data() {
		return {
			contents: profileData,
		};
	},
	created() {},
};
</script>

<style>
@import './assets/css/reset.css';
</style>
