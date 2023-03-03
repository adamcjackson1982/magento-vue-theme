<template>
	<div v-if="$attrs.data" class="slider">
		<img v-if="$attrs.data.image" :src="$attrs.data.image.url" />
	</div>
</template>
<script></script>