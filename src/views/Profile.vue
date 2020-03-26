<template>
	<profile-item :userData="profileData"></profile-item>
</template>

<script>
import profileData from '@/data/portfolioData.js';
import ProfileItem from '@/components/ProfileItem.vue';
export default {
	components: {
		ProfileItem,
	},
	data() {
		return {
			profileData: profileData,
		};
	},
};
</script>

<style></style>
