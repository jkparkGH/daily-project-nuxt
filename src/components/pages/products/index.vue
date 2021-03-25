<template>
  <section>
    <ContentTitle
      :info="{
        title: 'Product List',
        text: 'Lorem ipsum dolor sit amet List',
      }"
    />
    <ProductsSearch />
    <div class="common-item-box">
      <ProudctList />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import ContentTitle from '@/components/common/content-title.vue';
import ProudctList from '@/components/pages/products/products-list.vue';
import ProductsSearch from '@/components/pages/products/products-search.vue';

export default defineComponent({
  name: 'products-index',
  components: {
    ContentTitle,
    ProductsSearch,
    ProudctList,
  },
});
</script>
