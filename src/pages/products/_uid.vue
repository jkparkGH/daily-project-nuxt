<template>
  <section>
    <ProductDetailsComponents />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import ProductDetailsComponents from '@/components/pages/product-details/index.vue';

export default defineComponent({
  name: 'products-details-uid',
  components: {
    ProductDetailsComponents,
  },
});
</script>
