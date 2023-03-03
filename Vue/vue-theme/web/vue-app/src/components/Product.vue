<template>
	<div class="product">{{ product.name }}</div>
</template>
<script>
import { getToken, getCmsPage, getProductById } from '../../api';
export default {
	data() {
		return {
			sku: this.$attrs.data.sku,
			product: {}
		}
	},
	async created() {
		// Call the Magento 2 API to get a CMS page
		const magentoToken = await getToken('admin', 'admin321');
    	console.log(magentoToken)
		//let productId = 'WSH12'
		const product = await getProductById(this.$attrs.data.sku, magentoToken);
		this.product = product;
		console.log(product)
	}
}
</script>