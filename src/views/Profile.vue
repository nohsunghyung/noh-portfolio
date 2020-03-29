<template>
	<div class="profile-content">
		<div class="profile-inner">
			<user-data :userData="profileData"></user-data>
			<section class="profile-section intro-section">
				<h3 class="section-title"><span>I</span>ntroduce</h3>
				<p class="profile-text">
					퍼블리싱 경력 3년차. 현재 javascript 및 Vue.js를 이용한 Front-end
					개발에 관심이 많으며 적극적이고 능동적이며<br />항상 고민하는
					front-end 개발자로 나아가기 위해 학습하며 노력하고 있습니다.
				</p>
			</section>
			<section class="profile-section career-section">
				<h3 class="section-title"><span>C</span>areer</h3>
				<ul class="list-container">
					<li
						class="item"
						v-for="(item, index) in profileData.career"
						:key="index"
					>
						<div class="date">
							<div class="period">
								{{ item.date }}
							</div>
						</div>
						<div class="article">
							<h4 class="title">{{ item.company }}</h4>
							<p class="sub-text">{{ item.position }}</p>
							<ul class="info-text">
								<li v-for="(list, index) in item.works" :key="index">
									{{ list }}
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</section>
			<section class="profile-section project-section">
				<h3 class="section-title"><span>P</span>ersonal project</h3>
				<ul class="list-container">
					<li
						class="item"
						v-for="(item, index) in profileData.project.personal"
						:key="index"
					>
						<div class="article">
							<h4 class="title">{{ item.subject }}</h4>
							<p class="sub-text">{{ item.summary }}</p>
							<ul class="info-text">
								<li>{{ item.skils }}</li>
							</ul>
						</div>
					</li>
				</ul>
			</section>
			<section class="profile-section project-section">
				<h3 class="section-title"><span>W</span>ork experience</h3>
				<ul class="list-container">
					<li
						class="item"
						v-for="(item, index) in profileData.project.company"
						:key="index"
					>
						<div class="date">
							<div class="period">
								{{ item.date }}
							</div>
						</div>
						<div class="article">
							<h4 class="title">{{ item.subject }}</h4>
							<p class="sub-text">{{ item.type }}</p>
							<ul class="info-text">
								<li v-for="(list, index) in item.works" :key="index">
									{{ list }}
								</li>
							</ul>
						</div>
					</li>
				</ul>
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
	padding-top: 60px;
	.section-title {
		margin-bottom: 20px;
	}
	.profile-text {
		margin-top: 35px;
		padding-left: 40px;
		font-family: 'NanumSquare';
		font-size: 18px;
		line-height: 1.5;
	}
	.list-container {
		padding-left: 40px;
		.item {
			overflow: hidden;
			padding: 35px 0;
			+ .item {
				border-top: 1px dashed #d1d1d1;
			}
		}
		.date {
			float: left;
			width: 270px;
		}
		.period {
			font-family: 'NanumSquare';
			font-weight: 500;
			font-size: 20px;
		}
		.article {
			overflow: hidden;
			.title {
				font-family: 'NanumSquare';
				font-size: 25px;
			}
			.sub-text {
				margin-top: 8px;
				font-size: 16px;
				color: #999;
			}
			.info-text {
				margin-top: 20px;
				li {
					position: relative;
					padding-left: 12px;
					font-size: 16px;
					&:before {
						display: inline-block;
						content: '';
						width: 5px;
						height: 1px;
						position: absolute;
						top: 9px;
						left: 0;
						background-color: #999;
					}
					+ li {
						margin-top: 5px;
					}
				}
			}
		}
	}
}
</style>
