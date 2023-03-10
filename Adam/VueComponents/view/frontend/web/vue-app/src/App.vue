<template>
   <div class="bg-green-500 text-lg">{{ message }}</div>
</template>
<script>
export default {
	data() {
		return {
			message:"Hello"
		}
	},
	async created() {
		const appElement = document.getElementById('app');
		const slug = appElement.getAttribute('data-id');
		this.message = slug
	}
}
</script>