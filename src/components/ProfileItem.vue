<template>
	<section class="profile-section">
		<h1 class="name">{{ userData.profile.name }}</h1>
		<h3 class="position">{{ userData.profile.position }}</h3>
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

<style scoped>
.profile-section {
	margin-top: 100px;
}
</style>
