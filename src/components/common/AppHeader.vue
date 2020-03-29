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

<style scoped lang="scss">
#header {
	position: absolute;
	top: 30px;
	right: 120px;
	z-index: 10;
	.gnb {
		text-align: right;
		overflow: hidden;
	}
	.gnb-menu {
		float: left;
		+ .gnb-menu {
			margin-left: 20px;
		}
		a {
			display: block;
			transition: color 0.3s;
			font-family: 'NanumSquare';
			font-weight: bold;
			font-size: 25px;
			color: #fff;
			text-shadow: 1px 1px 1px #222;
			&.router-link-active {
				color: #f4e533;
			}
		}
	}
	&.active {
		a {
			color: #000;
		}
	}
}
</style>
