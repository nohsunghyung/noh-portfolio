<template>
	<ul class="old-project-list">
		<li v-for="(item, index) in itemList" :key="index">{{ item }}</li>
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
.old-project-list {
	margin-top: 40px;
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
