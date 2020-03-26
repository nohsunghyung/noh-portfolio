<template>
	<header id="header">
		<ul class="gnb">
			<li class="gnb-menu"><router-link to="/about">About</router-link></li>
			<li class="gnb-menu">
				<router-link to="/portfolio">Portfolio</router-link>
			</li>
		</ul>
	</header>
</template>

<script>
export default {};
</script>

<style scoped>
#header {
	position: absolute;
	top: 30px;
	right: 120px;
	z-index: 10;
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
.gnb-menu .router-link-active {
	color: #4dc28a;
}
</style>
