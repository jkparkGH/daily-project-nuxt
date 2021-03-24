<template>
  <section>
    <MainBanner />
    <ContentTitle
      :info="{
        title: 'New Arrivals',
        text: 'Lorem ipsum dolor sit amet Arrivals',
      }"
    />
    <ProudctList />
    <ContentTitle
      :info="{
        title: 'Featured Category',
        text: 'Lorem ipsum dolor sit amet category',
      }"
    />
    <MainFeaturedCategory />
    <ContentTitle
      :info="{
        title: 'Magazine News',
        text: 'Lorem ipsum dolor sit amet News',
      }"
    />
    <MainMagazineNews />
    <MainCoperationList />
    <MainSlogan />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import ContentTitle from '@/components/common/content-title.vue';
import MainBanner from '@/components/pages/main/main-banner.vue';
import ProudctList from '@/components/pages/products/products-list.vue';
import MainFeaturedCategory from '@/components/pages/main/main-featured-category.vue';
import MainMagazineNews from '@/components/pages/main/main-magazine-news.vue';
import MainCoperationList from '@/components/pages/main/main-coperation-list.vue';
import MainSlogan from '@/components/pages/main/main-slogan.vue';

export default defineComponent({
  name: 'main-index',
  components: {
    ContentTitle,
    MainBanner,
    ProudctList,
    MainFeaturedCategory,
    MainMagazineNews,
    MainCoperationList,
    MainSlogan,
  },
});
</script>
