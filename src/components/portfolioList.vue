<template>
	<ul class="portfolio-list">
		<li
			class="item"
			v-for="(item, index) in itemList"
			:key="index"
			:style="{ 'background-image': `url(${item.images})` }"
		>
			<a
				:href="item.url || 'javascript:void(0)'"
				class="link"
				:target="item.url ? '_blank' : '_self'"
			>
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

<style scoped lang="scss">
.portfolio-list {
	display: flex;
	flex-wrap: wrap;
	margin-top: 20px;
	.item {
		width: 33.33%;
		height: 350px;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		&:hover {
			.link:after {
				opacity: 0.8;
				transform: scale(0.9);
			}
			.works {
				transform: translateY(-10px);
				opacity: 1;
			}
		}
		.link {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;
			width: 100%;
			height: 100%;
			&:after {
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
		}
	}
	.text-area {
		width: 100%;
		position: relative;
		z-index: 3;
		text-align: center;
	}
	.subject {
		display: inline-block;
		position: relative;
		font-family: 'NanumSquare';
		font-weight: bold;
		font-size: 30px;
		letter-spacing: -0.05em;
		&:after {
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
	}
	.date {
		margin-top: 8px;
		font-weight: lighter;
		font-size: 14px;
		letter-spacing: -0.05em;
	}
	.type {
		margin-top: 15px;
		font-weight: bold;
		font-size: 16px;
	}
	.works {
		transition: 0.3s;
		transform: translateY(40px);
		opacity: 0;
		position: absolute;
		top: 115px;
		left: 0;
		width: 100%;
	}
	.works li {
		font-size: 15px;
	}
	.works li + li {
		margin-top: 7px;
	}
}
</style>
