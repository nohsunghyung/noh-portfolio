<template>
	<div class="profile-content">
		<div class="profile-inner">
			<user-data :userData="profileData"></user-data>
			<section class="profile-section intro-section">
				<h3 class="section-title"><span>I</span>ntroduce</h3>
				<p class="profile-text">
					퍼블리싱 경력 3년차. 현재 javascript 및 Vue.js를 이용한 Front-end
					개발에 관심이 많으며<br />
					적극적이고 능동적이며 항상 고민하는 front-end 개발자로 나아가기 위해
					학습하며 노력하고 있습니다.
				</p>
			</section>
			<section class="profile-section">
				<profile-list :profileData="profileData.career">
					<template slot="title"><span>C</span>areer</template>
				</profile-list>
			</section>
			<section class="profile-section">
				<profile-list :profileData="profileData.project.personal">
					<template slot="title"><span>P</span>ersonal project</template>
				</profile-list>
			</section>
			<section class="profile-section">
				<profile-list :profileData="profileData.project.company">
					<template slot="title"><span>W</span>ork experience</template>
				</profile-list>
			</section>
			<profile-list
				:profileData="profileData.project.oldProject"
				:oldChk="true"
			></profile-list>
		</div>
	</div>
</template>

<script>
import profileData from '@/data/portfolioData.js';
import UserData from '@/components/UserData.vue';
import ProfileList from '@/components/ProfileList.vue';
export default {
	components: {
		UserData,
		ProfileList,
	},
	data() {
		return {
			profileData: profileData,
		};
	},
	created() {},
};
</script>

<style scoped lang="scss">
.profile-content {
	width: 1100px;
	margin: 100px auto 50px;
	padding: 40px;
	background-color: #fff;
	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
}
.profile-section {
	padding-top: 70px;
}
.profile-text {
	margin-top: 50px;
	padding-left: 40px;
	font-family: 'NanumSquare';
	font-size: 18px;
	line-height: 1.5;
}
</style>
