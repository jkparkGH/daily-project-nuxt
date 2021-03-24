<template>
  <section>
    <!-- Slogan -->
    <h3 class="_blind">
      Slogan
      <br />
      <span>Lorem ipsum dolor sit amet conse</span>
    </h3>
    <div class="common-item-box">
      <div class="main-slogan">
        <img
          class="main-slogan__image"
          src="~@/assets/images/main_banner03.jpg"
          alt="slogan box background image"
          loading="lazy"
        />
        <div class="main-slogan__text">
          <div>
            <p>10% of every MAKE sale supports worker-owned businesses</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'main-slogan',
});
</script>

<style lang="scss" scoped>
$modules: 'main-slogan';
.#{$modules} {
  width: 100%;
  margin: 3rem auto;
  max-width: 1080px;
  position: relative;
  &__image {
    width: 100%;
    display: block;
  }
  &__text {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    & > div {
      display: table;
      width: 100%;
      height: 100%;
    }
    p {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      color: #fff;
      font-size: 1.75rem;
      padding: 2rem;
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);
      @media only screen and (max-width: 414px) {
        font-size: 1.35rem;
      }
    }
  }
}
</style>
