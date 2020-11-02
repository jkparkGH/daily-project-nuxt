<template>
  <section>
    <h3 class="_blind">Main banner slide</h3>
    <!-- main-banner-slide -->
    <Swiper class="main-banner-slide" @slideChange="onSlideChange" :options="swiperOptionsObject">
      <SwiperSlide class="main-banner-slide__item-container" v-for="(item, index) in dummySlide" :key="'dummyslide' + index">
        <img class="img_full swiper-lazy" :src="item.images" :data-src="item.images" alt="메인 배너 슬라이드 배경 이미지" />
        <div class="main-banner-slide__item-text">
          <h3>{{ item.title }}</h3>
          <p v-html="item.subtitle"></p>
          <span>
            {{ item.content }}
          </span>
          <router-link class="link-more-view" :to="'/products'">
            More View
          </router-link>
        </div>
        <!-- <div class="swiper-lazy-preloader"></div> -->
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'main-banner',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      homeUrl: 'https://daily-beauty-house.netlify.app/',
      dummySlide: [
        {
          title: 'The best place',
          subtitle: 'MORE BEST<br />ITEM &amp; BRANDS',
          content: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam First.',
          images: 'temp/main_banner02.jpg'
        },
        {
          title: 'The best place',
          subtitle: 'MORE BEST<br />ITEM &amp; BRANDS',
          content: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Second.',
          images: 'temp/main_banner01.jpg'
        }
      ],
      swiperOptionsObject: {
        loop: true,
        preloadImages: false,
        lazy: {
          loadPrevNext: true
        },
        slidesPerView: 1,
        breakpoints: {
          480: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      }
    };
  },
  methods: {
    onSlideChange(e) {
      console.log('slide change', e);
    }
  }
};
</script>

<style lang="scss" scoped>
$modules: 'main-banner-slide';
.#{$modules} {
  width: 100%;
  overflow: hidden;
  padding-bottom: 10px;
  &__item-container {
    width: 100%;
    height: auto;
    background-size: 0 0;
    position: relative;
    cursor: pointer;
    &:before {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
      background-color: rgba(255, 255, 255, 0.4);
      content: '';
    }
  }

  &__item-text {
    position: absolute;
    bottom: 10%;
    left: 7%;
    padding: 1.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    max-width: 500px;
    h3 {
      font-size: 1.3rem;
      color: #fe708a;
      margin-bottom: 5px;
    }
    p {
      color: #fff;
      font-size: 2.5rem;
      margin-bottom: 10px;
    }
    span {
      color: #333;
      font-size: 0.875rem;
      display: block;
      line-height: 1.4;
      padding-bottom: 1.4rem;
    }
    .link-more-view {
      display: inline-block;
      padding: 0.6rem 0.7rem;
      border: 2px solid #fff;
      color: #333;
      font-weight: bold;
      margin-top: 5px;
    }
  }
}

@media only screen and (max-width: 540px) {
  .main-banner-slide__item-container {
    height: 240px;
    background-size: auto 100%;
    background-position: center center;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      height: 100%;
      width: auto;
      right: calc(0% - 100px);
      z-index: -1;
    }
  }
  .main-banner-slide__item-text {
    h3 {
      font-size: 0.938rem;
    }
    p {
      font-size: 1.6rem;
    }
    span {
      display: none;
    }
  }
}

@media only screen and (min-width: 541px) and (max-width: 640px) {
  .main-banner-slide__item-text {
    h3 {
      font-size: 0.938rem;
    }
    p {
      font-size: 1.6rem;
    }
    span {
      display: none;
    }
  }
}

@media only screen and (min-width: 641px) and (max-width: 840px) {
  .main-banner-slide__item-text {
    h3 {
      font-size: 0.938rem;
    }
    p {
      font-size: 1.8rem;
      margin-bottom: 5px;
    }
    span {
      display: none;
    }
  }
}

@media only screen and (min-width: 841px) and (max-width: 960px) {
  .main-banner-slide__item-text {
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 2.2rem;
      margin-bottom: 5px;
    }
    span {
      font-size: 0.78rem;
      padding-bottom: 5px;
    }
  }
}

@media only screen and (min-width: 1200px) {
  .main-banner-slide__item-text {
    position: absolute;
    bottom: 16%;
  }
}
</style>
