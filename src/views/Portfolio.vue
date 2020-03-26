<template>
	<div class="portfolio-content">
		<section class="keyvisual-section">
			<div class="keyvisual">
				<div class="text-area">
					<h2 class="subject">Portfolio</h2>
					<p class="sub-text">퍼블리싱(마크업) 프로젝트 리스트</p>
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
	created() {},
};
</script>

<style scoped>
.keyvisual {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 400px;
	background-color: #222;
}
.keyvisual .text-area {
	padding: 0 20px;
	text-align: center;
}
.keyvisual .subject {
	font-family: 'NanumSquare';
	font-weight: bold;
	font-size: 65px;
	color: #fff;
	letter-spacing: 2px;
}
.keyvisual .sub-text {
	margin-top: 10px;
	font-weight: lighter;
	font-size: 20px;
	color: #fff;
}
.old-portfolio-section {
	width: 1200px;
	margin: 40px auto;
	text-align: center;
}
.old-portfolio-section .subject {
	margin-bottom: 30px;
	font-family: 'NanumSquare';
	font-size: 40px;
	color: #333;
}
.old-portfolio-section .subject small {
	display: block;
	margin-top: 5px;
	font-weight: lighter;
	font-size: 18px;
	color: #999;
}
</style>
