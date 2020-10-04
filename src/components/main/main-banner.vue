<template>
  <section>
    <h3 class="_blind">Main banner slide</h3>
    <!-- main-banner-slide -->
    <div class="main-banner-slide" id="mainBanner">
      <div class="main-banner-slide__item-container">
        <img
          class="img_full"
          src="~@/assets/images/main_banner02.jpg"
          alt="메인 배너 슬라이드 배경 이미지"
        />
        <div class="main-banner-slide__item-text">
          <h3>The best place</h3>
          <p>MORE BEST<br />ITEM &amp; BRANDS</p>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </span>
          <a class="link-more-view" href="#_">More View</a>
        </div>
      </div>
      <div class="main-banner-slide__item-container">
        <img
          class="img_full"
          src="~@/assets/images/main_banner01.jpg"
          alt="메인 배너 슬라이드 배경 이미지"
        />
        <div class="main-banner-slide__item-text">
          <h3>The best place</h3>
          <p>MORE BEST<br />ITEM &amp; BRANDS</p>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </span>
          <a class="link-more-view" href="#_">More View</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "main-banner",
};
</script>

<style lang="scss">
/* main-banner-slide */
$modules: "main-banner-slide";
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
      content: "";
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

@media only screen and (max-width: 640px) {
  .main-banner-slide__item-container {
    height: 240px;
    background-size: auto 100%;
    background-position: center center;
    img {
      opacity: 0;
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
      font-size: 0.78rem;
      padding-bottom: 5px;
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