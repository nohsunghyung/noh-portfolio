<template>
	<header id="header" :class="{ active: isActive }">
		<ul class="gnb">
			<li class="gnb-menu"><router-link to="/about">About</router-link></li>
			<li class="gnb-menu">
				<router-link to="/portfolio">Portfolio</router-link>
			</li>
		</ul>
	</header>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		// 헤더 활성화
		isActive() {
			return this.$route.name === 'about' ? true : false;
		},
	},
};
</script>

<style scoped>
#header {
	position: absolute;
	top: 30px;
	right: 120px;
	z-index: 10;
}
#header.active .gnb-menu a {
	color: #000;
}
.gnb {
	text-align: right;
	overflow: hidden;
}
.gnb-menu {
	float: left;
}
.gnb-menu + .gnb-menu {
	margin-left: 20px;
}
.gnb-menu a {
	display: block;
	transition: color 0.3s;
	font-family: 'NanumSquare';
	font-weight: bold;
	font-size: 25px;
	color: #fff;
}
#header .gnb-menu a.router-link-active {
	color: #4dc28a;
}
</style>
