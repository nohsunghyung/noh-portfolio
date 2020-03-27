<template>
	<div class="portfolio-content">
		<section class="keyvisual-section">
			<div class="keyvisual">
				<div class="text-area">
					<h2 class="subject">Portfolio</h2>
					<router-link to="/about" class="btn-view">이력서보기</router-link>
				</div>
			</div>
		</section>
		<div class="section-inner">
			<section class="portfolio-section personal">
				<h3 class="section-title"><span>P</span>ersonal project</h3>
				<personal-project
					:itemList="profileData.project.personal"
				></personal-project>
			</section>
			<section class="portfolio-section company">
				<h3 class="section-title"><span>W</span>ork experience</h3>
				<p class="stack">
					stack : html5, css3, scss, gulp, javascript, jquery
				</p>
				<portfolio-list
					:itemList="profileData.project.company"
				></portfolio-list>
			</section>
			<section class="portfolio-section">
				<h3 class="section-title"><span>B</span>efore project</h3>
				<old-portfolio
					:itemList="profileData.project.oldProject"
				></old-portfolio>
			</section>
		</div>
	</div>
</template>

<script>
import profileData from '@/data/portfolioData.js';
import portfolioList from '@/components/portfolioList.vue';
import personalProject from '@/components/personalProject.vue';
import oldPortfolio from '@/components/oldPortFolio.vue';
export default {
	components: {
		portfolioList,
		personalProject,
		oldPortfolio,
	},
	data() {
		return {
			profileData: profileData,
		};
	},
};
</script>

<style scoped lang="scss">
.portfolio-content {
	background-color: #fff;
}
.keyvisual {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 300px;
	background-color: #222;
	.text-area {
		padding: 0 20px;
		text-align: center;
	}
	.subject {
		font-family: 'NanumSquare';
		font-weight: bold;
		font-size: 65px;
		color: #fff;
		letter-spacing: 2px;
	}
	.sub-text {
		margin-top: 10px;
		font-weight: lighter;
		font-size: 20px;
		color: #fff;
	}
	.stack {
		margin-top: 15px;
		font-size: 16px;
		color: #fff;
	}
	.btn-view {
		transition: 0.3s;
		display: block;
		width: 130px;
		height: 35px;
		line-height: 33px;
		margin: 40px auto 0;
		border: 1px solid #fff;
		font-family: 'NanumSquare';
		font-size: 17px;
		font-weight: bold;
		color: #fff;
		&:hover {
			background-color: #fff;
			color: #222;
		}
	}
}
.portfolio-section {
	padding: 60px 0;
	border-top: 1px dashed #d1d1d1;
	.stack {
		margin-top: 15px;
		font-size: 16px;
		color: #888;
	}
}
</style>
