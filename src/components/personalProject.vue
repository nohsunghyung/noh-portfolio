<template>
	<ul class="portfolio-list">
		<li class="item" v-for="(item, index) in itemList" :key="index">
			<div class="image"><img :src="item.images" alt="" /></div>
			<div class="description">
				<h4 class="project-title">{{ item.subject }}</h4>
				<div class="summary">
					<span>{{ item.summary }}</span>
				</div>
				<div class="url">
					<a :href="item.url" target="_blank">{{ item.url }}</a>
				</div>
				<dl class="skils">
					<dt><strong>Skils</strong></dt>
					<dd>{{item.skils}}</span>
					</dd>
				</dl>
			</div>
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
	margin-top: 40px;
	.item {
		overflow: hidden;
		+ .item {
			margin-top: 60px;
		}
	}
	.image {
		float: left;
		border: 1px solid #d1d1d1;
		img {
			display: block;
			width: 500px;
		}
	}
	.description {
		float: left;
		margin-top: 40px;
		margin-left: 60px;
	}
	.project-title {
		font-family: 'NanumSquare';
		font-weight: bold;
		font-size: 26px;
	}
	.summary {
		margin-top: 20px;
		span {
			display: inline-block;
			padding: 8px 15px;
			font-size: 15px;
			border-radius: 7px;
			background-color: #f1f1f1;
		}
	}
	.url {
		margin-top: 15px;
		a {
			display: inline-block;
			border-bottom: 1px solid #ddd;
			font-size: 14px;
			color: #999;
		}
	}
	.skils {
		margin-top: 15px;
		dt,
		dd {
			display: inline-block;
			vertical-align: middle;
		}
		dt {
			strong {
				display: inline-block;
				padding: 5px 7px;
				font-weight: bold;
				font-size: 14px;
				color: #fff;
				background-color: #222;
			}
		}
		dd {
			padding-left: 12px;
			font-size: 15px;
			color: #888;
			span {
				position: relative;
				+ span {
					padding-left: 10px;
				}
				&:first-child {
					padding: 0;
					&:after {
						display: none;
					}
				}
				&:after {
					display: block;
					content: '';
					width: 1px;
					height: 12px;
					position: absolute;
					top: 50%;
					left: 3px;
					margin-top: -6px;
					background-color: #ddd;
				}
			}
		}
	}
}
</style>
