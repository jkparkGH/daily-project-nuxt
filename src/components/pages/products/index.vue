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
      <MainProudctList />
    </div>
  </section>
</template>

<script>
import ContentTitle from "@/components/common/content-title";
import MainProudctList from "@/components/pages/main/main-product-list";
import ProductsSearch from "@/components/pages/products/products-search";
export default {
  name: "products",
  components: {
    ContentTitle,
    ProductsSearch,
    MainProudctList
  }
};
</script>
