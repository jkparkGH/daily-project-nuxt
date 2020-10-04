<template>
  <div class="main-container">
    <MainBanner />
    <MainProudctList />
  </div>
</template>

<script>
import MainBanner from "@/components/main/main-banner";
import MainProudctList from "@/components/main/main-product-list";
export default {
  name: "main-landing",
  components: {
    MainBanner,
    MainProudctList,
  },
};
</script>

<style lang="scss">
.main-container {
  min-height: 400px;
  padding-bottom: 4rem;
}
</style>

