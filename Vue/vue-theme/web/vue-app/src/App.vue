<template>
  <div>
    <h1 v-if="page.title">{{ page.title.rendered }}</h1>
    <div v-if="page.acf.pagebuilder">
      <div v-for="(component, i) in page.acf.pagebuilder" :key="i">
        <component :data="component" :is="formatComponentName(component.acf_fc_layout)"></component>
      </div>
    </div>
    <Slider />
  </div>
</template>

<script>
import { getPage } from '../wp-api';
import Slider from './components/Slider.vue';
import Product from './components/Product.vue';
import TextBlock from './components/Text_Block.vue';

export default {
  components: {
    Slider,
    Product,
    TextBlock
  },
  data() {
    return {
      page: {},
      product: {},
      magePage: {}
    }
  },
  methods: {
    formatComponentName: (string) => {
            let camelCase = string.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
            return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
        }
  },
  async created() {
    
    //  const magentoPage = await getCmsPage(2, magentoToken);
    // // Set the `page` data property to the Magento page object
    // this.magePage = magentoPage;

    // Call the WordPress REST API to get a page
    const wpPageId = 9; // Replace with the ID of the WordPress page you want to display
    const wpPage = await getPage(wpPageId);
    this.page = wpPage

  }
}
</script>
