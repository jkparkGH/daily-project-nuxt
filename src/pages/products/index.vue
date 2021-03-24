<template>
  <div class="common-layout">
    <ProductsComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import ProductsComponent from '@/components/pages/products/index.vue';
export default defineComponent({
  name: 'products',
  components: {
    ProductsComponent,
  },
});
</script>
