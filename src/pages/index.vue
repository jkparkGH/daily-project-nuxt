<template>
  <div class="main-container">
    <MainBanner />
    <MainProudctList />
    <MainFeaturedCategory />
    <MainMagazineNews />
    <MainCoperationList />
    <MainSlogan />
  </div>
</template>

<script>
import MainBanner from "@/components/main/main-banner";
import MainProudctList from "@/components/main/main-product-list";
import MainFeaturedCategory from "@/components/main/main-featured-category";
import MainMagazineNews from "@/components/main/main-magazine-news";
import MainCoperationList from "@/components/main/main-coperation-list";
import MainSlogan from "@/components/main/main-slogan";
export default {
  name: "main-landing",
  components: {
    MainBanner,
    MainProudctList,
    MainFeaturedCategory,
    MainMagazineNews,
    MainCoperationList,
    MainSlogan
  }
};
</script>

<style lang="scss">
.main-container {
  min-height: 400px;
  padding-bottom: 4rem;
}
</style>
