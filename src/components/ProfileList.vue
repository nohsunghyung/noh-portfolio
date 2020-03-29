<template>
	<div>
		<template v-if="!oldChk">
			<h3 class="section-title"><slot name="title"></slot></h3>
			<ul class="list-container">
				<li class="item" v-for="(item, index) in profileData" :key="index">
					<template v-if="item.date">
						<div class="date">
							<div class="period">{{ item.date }}</div>
						</div>
					</template>
					<div class="article">
						<h4 class="title">
							<template v-if="item.company">{{ item.company }}</template>
							<template v-else>{{ item.subject }}</template>
						</h4>
						<p class="sub-text">
							<template v-if="item.position">{{ item.position }}</template>
							<template v-else-if="item.summary">{{ item.summary }}</template>
							<template v-else>{{ item.type }}</template>
						</p>
						<ul class="info-text">
							<template v-if="item.works">
								<li v-for="(list, index) in item.works" :key="index">
									{{ list }}
								</li>
							</template>
							<template v-else>
								<li class="skils">{{ item.skils }}</li>
							</template>
						</ul>
					</div>
				</li>
			</ul>
		</template>
		<template v-else>
			<ul class="list-container old-list-container">
				<li class="item old">
					<div class="date">
						<div class="period">2018년 이전</div>
					</div>
					<div class="article">
						<ul class="old-list">
							<li v-for="(item, index) in profileData" :key="index">
								{{ item }}
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</template>
	</div>
</template>

<script>
export default {
	props: {
		profileData: {
			type: [Object, Array],
			required: true,
		},
		oldChk: {
			type: Boolean,
		},
	},
};
</script>

<style scoped lang="scss">
.section-title {
	margin-bottom: 20px;
}
.list-container {
	padding-left: 60px;
	.item {
		overflow: hidden;
		padding: 40px 0;
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
		color: #999;
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
				&.skils {
					display: inline-block;
					padding: 5px 10px;
					font-weight: bold;
					background-color: #f1f1f1;
					&:before {
						display: none;
					}
				}
			}
		}
	}
}
.old-list-container {
	border-top: 1px dashed #d1d1d1;
}
.old-list {
	overflow: hidden;
	li {
		float: left;
		position: relative;
		padding: 0 10px;
		margin-bottom: 15px;
		font-size: 15px;
		&:before {
			display: block;
			content: '';
			position: absolute;
			top: 50%;
			right: 0;
			width: 1px;
			height: 12px;
			margin-top: -6px;
			background-color: #ddd;
		}
		&:last-child {
			&:before {
				display: none;
			}
		}
	}
}
</style>
