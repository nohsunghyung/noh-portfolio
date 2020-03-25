<template>
	<div>
		<section
			class="user-info"
			v-for="(item, index) in this.contents"
			:key="index"
		>
			<h1 class="user-name">{{ item.profile.name }}</h1>
			<h3 class="user-position">Front-end developer</h3>
		</section>
	</div>
</template>

<script>
import profileData from './utils/profile';
export default {
	data() {
		return {
			contents: profileData,
		};
	},
	created() {
		// for (var item in this.contents) {
		// 	console.log(this.contents[item]);
		// }
		console.log(this.contents);
	},
};
</script>

<style></style>
