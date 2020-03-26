<template>
	<div class="profile-content">
		<div class="profile-inner">
			<user-data :userData="profileData"></user-data>
			<section class="profile-section intro-section">
				<h4 class="section-title"><span>W</span>ork experience</h4>
			</section>
		</div>
	</div>
</template>

<script>
import profileData from '@/data/portfolioData.js';
import UserData from '@/components/UserData.vue';
export default {
	components: {
		UserData,
	},
	data() {
		return {
			profileData: profileData,
		};
	},
};
</script>

<style scoped lang="scss">
.profile-content {
	width: 1100px;
	margin: 100px auto 50px;
	padding: 40px;
	background-color: #fff;
	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
	.section-title {
		font-family: 'NanumSquare';
		font-weight: bold;
		font-size: 35px;
		span {
			color: #faf076;
			text-shadow: 1px 1px 1px #666;
		}
	}
}
.profile-section {
	padding: 20px 0;
	border-top: 1px dashed #d1d1d1;
}
</style>
