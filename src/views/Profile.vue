<template>
	<div class="profile-content">
		<div class="profile-inner">
			<user-data :userData="profileData"></user-data>
			<section class="profile-section intro-section">
				<h4 class="section-title">Work experience</h4>
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
		display: inline-block;
		position: relative;
		font-family: 'NanumSquare';
		font-weight: bold;
		font-size: 35px;
		letter-spacing: -0.02em;
		&:after {
			display: inline-block;
			content: '';
			opacity: 0.5;
			width: 100%;
			height: 7px;
			position: absolute;
			top: 50%;
			left: 0;
			margin-top: -2px;
			z-index: -1;
			background: #faf076;
		}
	}
}
.profile-section {
	position: relative;
	z-index: 2;
	padding: 20px 0;
	border-top: 1px dashed #d1d1d1;
}
</style>
