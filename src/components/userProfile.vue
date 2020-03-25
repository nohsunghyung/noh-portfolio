<template>
	<section class="user-info">
		<h1 class="user-name">{{ userData.profile.name }}</h1>
		<h3 class="user-position">{{ userData.profile.position }}</h3>
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

<style></style>
