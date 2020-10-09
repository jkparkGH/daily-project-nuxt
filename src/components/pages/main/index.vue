<template>
  <section>
    <MainBanner />
    <ContentTitle
      :info="{
        title: 'New Arrivals',
        text: 'Lorem ipsum dolor sit amet Arrivals'
      }"
    />
    <ProudctList />
    <ContentTitle
      :info="{
        title: 'Featured Category',
        text: 'Lorem ipsum dolor sit amet category'
      }"
    />
    <MainFeaturedCategory />
    <ContentTitle
      :info="{
        title: 'Magazine News',
        text: 'Lorem ipsum dolor sit amet News'
      }"
    />
    <MainMagazineNews />
    <MainCoperationList />
    <MainSlogan />
  </section>
</template>

<script>
import ContentTitle from "@/components/common/content-title";
import MainBanner from "@/components/pages/main/main-banner";
import ProudctList from "@/components/pages/products/products-list";
import MainFeaturedCategory from "@/components/pages/main/main-featured-category";
import MainMagazineNews from "@/components/pages/main/main-magazine-news";
import MainCoperationList from "@/components/pages/main/main-coperation-list";
import MainSlogan from "@/components/pages/main/main-slogan";
export default {
  name: "main-index",
  components: {
    ContentTitle,
    MainBanner,
    ProudctList,
    MainFeaturedCategory,
    MainMagazineNews,
    MainCoperationList,
    MainSlogan
  }
};
</script>
