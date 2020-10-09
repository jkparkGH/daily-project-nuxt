<template>
  <section>
    <ContentTitle
      :info="{
        title: 'Product List',
        text: 'Lorem ipsum dolor sit amet List'
      }"
    />
    <ProductsSearch />
    <div class="common-item-box">
      <ProudctList />
    </div>
  </section>
</template>

<script>
import ContentTitle from "@/components/common/content-title";
import ProudctList from "@/components/pages/products/products-list";
import ProductsSearch from "@/components/pages/products/products-search";
export default {
  name: "products-index",
  components: {
    ContentTitle,
    ProductsSearch,
    ProudctList
  }
};
</script>
