<template>
  <section>
    <div class="common-item-box">
      <ul class="featured-category-list">
        <li>
          <a href="#_">
            <div class="category-image">
              <img
                src="~@/assets/images/collection1_image.jpg"
                alt="Product collection image"
                loading="lazy"
              />
            </div>
            <span>
              Product
              <br />
              Collection
            </span>
          </a>
        </li>
        <li>
          <a href="#_">
            <div class="category-image">
              <img
                src="~@/assets/images/collection2_image.jpg"
                alt="Item collection image"
                loading="lazy"
              />
            </div>
            <span>
              Item
              <br />
              Collection
            </span>
          </a>
        </li>
        <li>
          <a href="#_">
            <div class="category-image">
              <img
                src="~@/assets/images/collection3_image.jpg"
                alt="Event collection image"
                loading="lazy"
              />
            </div>
            <span>
              Event
              <br />
              Collection
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'main-featured-category',
});
</script>

<style lang="scss" scoped>
$modules: 'featured-category-list';
.#{$modules} {
  text-align: center;
  li {
    width: 330px;
    margin: 20px;
    position: relative;
    display: inline-block;
    text-align: left;
    @media only screen and (max-width: 413px) {
      width: 290px;
      margin: 0 auto;
    }
    & > a {
      display: block;
    }
    .category-image:before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: 3px solid #e1e1e1;
      -webkit-transition: border 0.3s ease-out;
      transition: border 0.3s ease-out;
      content: '';
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    img {
      display: block;
      width: 100%;
    }

    span {
      position: absolute;
      top: 38%;
      left: 10%;
      color: #333;
      font-size: 1.2rem;
      -webkit-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }
  }
  li:hover .category-image:before,
  a:focus .category-image:before {
    border-color: #fe708a;
  }
  li:hover span,
  a:focus span {
    color: #ff355a;
  }
}
</style>
