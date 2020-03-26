<template>
	<div class="portfolio-content">
		<section class="keyvisual-section">
			<div class="keyvisual">
				<div class="text-area">
					<h2 class="subject">Portfolio</h2>
					<p class="sub-text">퍼블리싱(마크업) 프로젝트 리스트</p>
					<p class="stack">
						stack : html5, css3, scss, gulp, javascript, jquery
					</p>
					<router-link to="/about" class="btn-view">이력서보기</router-link>
				</div>
			</div>
		</section>
		<section class="portfolio-section">
			<portfolio-list :itemList="profileData.project"></portfolio-list>
		</section>
		<section class="old-portfolio-section">
			<h3 class="subject">
				2018년 이전 프로젝트<small>(프로젝트명만 기재)</small>
			</h3>
			<old-portfolio :itemList="profileData.oldProject"></old-portfolio>
		</section>
	</div>
</template>

<script>
import profileData from '@/data/portfolioData.js';
import portfolioList from '@/components/portfolioList.vue';
import oldPortfolio from '@/components/oldPortFolio.vue';
export default {
	components: {
		portfolioList,
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
.keyvisual {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 400px;
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
.old-portfolio-section {
	margin: 50px auto;
	padding: 40px;
	text-align: center;
	background-color: #fff;
	.subject {
		margin-bottom: 30px;
		font-family: 'NanumSquare';
		font-size: 30px;
		color: #333;
		small {
			display: block;
			margin-top: 7px;
			font-weight: lighter;
			font-size: 16px;
			color: #999;
		}
	}
}
</style>
