<template>
	<ul class="portfolio-list">
		<li
			class="item"
			v-for="(item, index) in itemList"
			:key="index"
			:style="{ 'background-image': `url(${item.images})` }"
		>
			<a :href="item.url || 'javascript:void(0)'" class="link" target="_blank">
				<div class="text-area">
					<h3 class="subject">{{ item.subject }}</h3>
					<div class="date">{{ item.date }}</div>
					<div class="type">{{ item.type }}</div>
					<ul class="works">
						<li v-for="(work, index) in item.works" :key="index">{{ work }}</li>
					</ul>
				</div>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		itemList: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
.portfolio-list {
	display: flex;
	flex-wrap: wrap;
}
.portfolio-list .item {
	width: 33.33%;
	height: 500px;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}
.portfolio-list .item:hover .link:after {
	opacity: 0.7;
	transform: scale(0.7);
}
.portfolio-list .link {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	height: 100%;
}
.portfolio-list .link:after {
	transition: 0.4s;
	display: block;
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	height: 100%;
	background-color: #fff;
}
.portfolio-list .text-area {
	position: relative;
	z-index: 3;
	text-align: center;
}
.portfolio-list .subject {
	display: inline-block;
	position: relative;
	font-family: 'NanumSquare';
	font-weight: bold;
	font-size: 30px;
	letter-spacing: -0.05em;
}
.portfolio-list .subject:after {
	display: inline-block;
	content: '';
	opacity: 0.5;
	width: 100%;
	height: 7px;
	position: absolute;
	top: 50%;
	left: 0;
	margin-top: -4px;
	z-index: -1;
	background: #faf076;
}
.portfolio-list .date {
	margin-top: 8px;
	font-weight: lighter;
	font-size: 14px;
	letter-spacing: -0.05em;
}
.portfolio-list .type {
	margin-top: 15px;
	font-weight: bold;
	font-size: 16px;
}
.portfolio-list .works {
	display: none;
	margin-top: 13px;
}
.portfolio-list .works li {
	font-size: 15px;
}
.portfolio-list .works li + li {
	margin-top: 7px;
}
</style>
