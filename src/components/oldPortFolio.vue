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

<style scoped>
.old-project-list li {
	font-size: 15px;
}
.old-project-list li + li {
	margin-top: 12px;
}
</style>
