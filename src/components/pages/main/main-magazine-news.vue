<template>
  <section>
    <div class="common-item-box">
      <ul class="magazine-news-list">
        <li>
          <a href="#_">
            <img
              class="image-magazine"
              src="~@/assets/images/magazine_img01.jpg"
              alt="매거진 썸네일 사진 : 2017.08.12"
              loading="lazy"
            />
            <p class="news-date">Tuesday, August 12, 2017</p>
            <p class="news-title">EXCEPTEUR SINT OCCAECA</p>
            <p class="news-content">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco
            </p>
          </a>
        </li>
        <li>
          <a href="#_">
            <img
              class="image-magazine"
              src="~@/assets/images/magazine_img02.jpg"
              alt="매거진 썸네일 사진 : 2017.08.13"
              loading="lazy"
            />
            <p class="news-date">thursday, August 13, 2017</p>
            <p class="news-title">EXCEPTEUR SINT OCCAECA</p>
            <p class="news-content">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco
            </p>
          </a>
        </li>
        <li>
          <a href="#_">
            <img
              class="image-magazine"
              src="~@/assets/images/magazine_img03.jpg"
              alt="매거진 썸네일 사진 : 2017.08.14"
              loading="lazy"
            />
            <p class="news-date">Friday, August 14, 2017</p>
            <p class="news-title">EXCEPTEUR SINT OCCAECA</p>
            <p class="news-content">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco
            </p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'main-magazine-news',
});
</script>

<style lang="scss" scoped>
$modules: 'magazine-news-list';
.#{$modules} {
  text-align: center;
  li {
    width: 330px;
    margin: 20px;
    display: inline-block;
    text-align: left;
    padding-bottom: 2rem;
    @media only screen and (max-width: 413px) {
      width: 290px;
      margin: 0 auto;
    }

    .image-magazine {
      width: 100%;
      display: block;
      border: 1px solid #ccc;
    }

    .news-date {
      font-size: 0.78rem;
      padding-top: 5px;
      color: #333;
    }

    .news-title {
      color: #fe708a;
      font-weight: bold;
      padding-top: 5px;
    }

    .news-content {
      font-size: 0.875rem;
      color: #aaa;
      padding-top: 8px;
    }
  }
}
</style>
