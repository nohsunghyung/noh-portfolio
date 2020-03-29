<template>
	<section class="info-section">
		<div class="user-image">
			<img :src="userData.profile.image" alt="프로필사진" />
		</div>
		<div class="user-info">
			<h1 class="user-name">{{ userData.profile.name }}</h1>
			<h3 class="user-position">{{ userData.profile.position }}</h3>
			<div class="info-wrapper">
				<dl
					class="info-list"
					v-for="(item, index) in userData.profile.links"
					:key="index"
				>
					<dt class="type" v-show="item.name !== 'Email'">{{ item.name }} -</dt>
					<dd class="url">
						<a
							:href="item.name === 'Email' ? `mailto:${item.url}` : item.url"
							target="_blank"
							>{{ item.url }}</a
						>
					</dd>
				</dl>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		userData: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped lang="scss">
.info-section {
	text-align: right;
	.user-info {
		padding-bottom: 40px;
	}
	.user-image {
		display: flex;
		justify-content: flex-end;
		img {
			display: block;
			width: 260px;
		}
	}
	.user-name {
		margin-top: 25px;
		font-family: 'NanumSquare';
		font-weight: bold;
		font-size: 30px;
		letter-spacing: 2px;
	}
	.user-position {
		margin-top: 5px;
		font-weight: bold;
		font-size: 16px;
		color: #999;
	}
	.info-wrapper {
		margin-top: 20px;
	}
	.info-list {
		margin-top: 10px;
		dt,
		dd {
			display: inline-block;
			vertical-align: top;
		}
		dt {
			font-weight: bold;
			margin-right: 10px;
		}
		dd {
			letter-spacing: -0.02em;
		}
		a {
			border-bottom: 1px solid #666;
		}
	}
}
</style>
