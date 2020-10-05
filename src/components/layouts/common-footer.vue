<template>
  <!-- footer -->
  <footer class="common-footer">
    <h3 class="_blind">common-footer__navigation</h3>
    <nav class="common-footer__navigation">
      <ul>
        <li>
          <div><a href="#_">Privacy Policy</a></div>
        </li>
        <li>
          <div><a href="#_">Terms &amp; Conditions</a></div>
        </li>
        <li>
          <div><a href="#_">About</a></div>
        </li>
        <li>
          <div><a href="#_">Shipping Info</a></div>
        </li>
      </ul>
      <ul>
        <li>
          <div><a href="#_">Contact Us</a></div>
        </li>
        <li>
          <div><a href="#_">Shipping &amp; Returns</a></div>
        </li>
        <li>
          <div><a href="#_">Ingredients</a></div>
        </li>
        <li>
          <div><a href="#_">FAQs</a></div>
        </li>
        <li>
          <div><a href="#_">Store Locator</a></div>
        </li>
      </ul>
      <ul>
        <li>
          <div><a href="#_">Vegan &amp; Gluten-Free</a></div>
        </li>
        <li>
          <div><a href="#_">Careers</a></div>
        </li>
        <li>
          <div><a href="#_">Press II</a></div>
        </li>
        <li>
          <div><a href="#_">Affiliates</a></div>
        </li>
        <li>
          <div><a href="#_">Site Map</a></div>
        </li>
      </ul>
    </nav>
    <p>Beauty house Copyright © 2020 All rights reserved.</p>
    <span class="_blind">
      이 페이지는 vue.js Nuxt를 위한 프로토타입 웹 페이지 입니다.
    </span>
  </footer>
</template>

<script>
export default {
  name: "common-footer"
};
</script>

<style lang="scss">
/* footer : common-footer */
.common-footer {
  width: 100%;
  background-color: #000;
  &__navigation {
    margin: 0 auto;
    width: 100%;
    max-width: 1080px;
    /*overflow:auto;*/
    padding: 1rem 0;
    &:after {
      clear: both;
      display: table;
      content: "";
    }
    ul {
      float: left;
      margin-right: 2rem;
      padding: 1rem;
      li {
        padding: 0.25rem;
        &:first-child {
          font-weight: bold;
        }
        & > div {
          position: relative;
          width: auto;
          display: inline-block;
          padding: 2px 0;
          &:before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0rem;
            width: 0;
            height: 1px;
            background: #fff;
            -webkit-transition: width 0.3s ease;
            transition: width 0.3s ease;
          }
          a {
            color: #fff;
            font-size: 0.938rem;
          }
        }
      }
    }
  }
  p {
    margin: 0 auto;
    width: 100%;
    max-width: 1080px;
    color: #fff;
    padding: 2rem;
    text-align: center;
    font-size: 0.78rem;
  }
  &__navigation li > div:hover:before {
    width: 98%;
  }
}
</style>
