<template>
  <!-- header -->
  <header class="common-header">
    <div class="common-header__container">
      <button
        type="button"
        class="btn-mobile-navigation"
        id="menuButton"
        aria-label="헤더 메뉴 버튼(모바일 기기 전용)"
      >
        <i></i><i></i><i></i>
      </button>
      <h1 class="common-header__logo">
        <a href="#" aria-label="뷰티하우스 로고" title="뷰티하우스 로고">
          <img
            src="~@/assets/images/logo_header_white.png"
            alt="뷰티하우스 로고 이미지"
          />
        </a>
      </h1>
      <div class="float_right">
        <nav class="web-gnb">
          <ul id="ul_gnb_header">
            <!-- <li class="on"><a href="#_">Home</a></li> -->
            <li><a href="#_">Products</a></li>
            <li><a href="#_">Event</a></li>
            <li><a href="#_">Contact us</a></li>
            <li><a href="#_">My page</a></li>
          </ul>
        </nav>
        <ul class="header-button-group">
          <li>
            <a href="#_" class="btn_login"><span>Login</span></a>
          </li>
          <li>
            <a href="#_" class="btn_signup"><span>SignUp</span></a>
          </li>
          <li>
            <a href="#_" class="btn_cart"
              ><span>Cart</span><span class="cart_count">0</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- aside : mobile-gnb -->
    <aside class="mobile-gnb" id="navigationMobile">
      <div class="mobile-gnb__dim"></div>
      <nav class="mobile-gnb__cotainer">
        <ul class="menu-list-main">
          <li class="on"><a href="#_">HOME</a></li>
          <li><a href="#_">PRODUCT</a></li>
          <li><a href="#_">EVENT</a></li>
          <li><a href="#_">JOIN</a></li>
          <li><a href="#_">MY PAGE</a></li>
        </ul>
        <ul class="menu-list-sub">
          <li><a href="#">Shipping</a></li>
          <li><a href="#">Returns / Exchage</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </aside>
  </header>
</template>

<script>
export default {
  name: "common-header",
  methods: {
    // needs nav_on toggle
  }
};
</script>

<style lang="scss">
/* header */
$modules: "common-header";
.#{$modules} {
  /*background-color:#fe708a;*/
  width: 100%;
  height: 52px;
  overflow: visible;
  position: relative;
  z-index: 5;

  &__container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 52px;
    background-color: #000;
    z-index: 5;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    @include clearfix;
    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }

  &__logo {
    width: 44px;
    height: 44px;
    position: absolute;
    top: 5px;
    left: 50%;
    margin-left: -22px;
    a,
    img {
      display: block;
      width: 100%;
      height: auto;
    }

    @media only screen and (min-width: 769px) {
      left: 25px;
      margin-left: 0;
    }
  }
}

/* moblie - navigation btn-mobile-navigation */
.btn-mobile-navigation {
  position: absolute;
  width: 22px;
  height: 14px;
  top: 18px;
  left: 12px;
  background-color: transparent;
  border: 0;
  overflow: visible;
  outline: 0;
  @media only screen and (min-width: 769px) {
    display: none;
  }
  & > i {
    position: absolute;
    width: 22px;
    height: 2.4px;
    background-color: #fff;
    border-radius: 4px;
    left: 0;
    top: 0;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  & > i:nth-child(2) {
    top: 49%;
  }
  & > i:nth-child(3) {
    top: 100%;
  }
  &.nav_on i:nth-child(1) {
    transform: rotate(-38deg);
    width: 12px;
    top: 25%;
  }
  &.nav_on i:nth-child(2) {
    transform: rotate(-180deg);
    left: 1px;
    top: 46.7%;
  }
  &.nav_on i:nth-child(3) {
    transform: rotate(38deg);
    width: 12px;
    top: 75%;
  }
}

// web-gnb
.web-gnb {
  float: left;
  margin-right: 4rem;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  ul {
    li {
      float: left;
      cursor: pointer;
      a {
        display: block;
        font-size: 16px;
        color: #fff;
        transition: color 0.2s ease-out;
        padding: 1rem;
      }
      &:hover a,
      &.on a {
        color: #fe708a;
      }
    }
  }
}

// header-button-group
.header-button-group {
  float: left;
  margin-right: 1rem;
  @media only screen and (max-width: 768px) {
    margin-right: 7px;
  }
  li {
    float: left;
    cursor: pointer;
    &:nth-child(2) {
      @media only screen and (max-width: 830px) {
        display: none;
      }
    }
    a {
      color: #c0c0c0;
      font-size: 15px;
      display: block;
      padding: 1rem;
      @media only screen and (max-width: 768px) {
        font-size: 13px;
        padding: 1.1rem 0.3rem;
      }
      &.btn_login:before {
        background-image: url("~@/assets/images/icon_login.png");
      }
      &.btn_signup:before {
        background-image: url("~@/assets/images/icon_join.png");
      }
      &.btn_cart:before {
        background-image: url("~@/assets/images/icon_cart.png");
      }
      &:before {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        background-size: cover;
        vertical-align: middle;
        @media only screen and (max-width: 768px) {
          width: 11px;
          height: 11px;
        }
      }
      span {
        display: inline-block;
        vertical-align: middle;
        padding-left: 5px;
        &.cart_count {
          display: inline-block;
          border-radius: 20px;
          width: 15px;
          height: 15px;
          text-align: center;
          color: #fff;
          background-color: #ccc;
          padding: 0;
          font-size: 12px;
          line-height: 1.3;
          margin-left: 3px;
          text-shadow: 1px 1px 0 #aaa;
        }
      }
    }
    &:hover a,
    &.on a {
      color: #fff;
    }
  }
}

$modules: "mobile-gnb";
.#{$modules} {
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 100%;
  top: 0;
  right: 100%;
  @media only screen and (min-width: 769px) {
    display: none;
  }
  &__dim {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    z-index: 2;
  }
  &.nav_on &__dim {
    display: block;
  }
  &__cotainer {
    position: absolute;
    top: 0;
    left: 0%;
    width: 84%;
    height: 100%;
    background-color: #151515;
    z-index: 3;
    transition: left 0.3s ease-out;
    @media only screen and (min-width: 480px) {
      width: 60%;
    }
    ul {
      width: 80%;
      margin: 0 auto;
      li {
        width: 100%;
      }

      &.menu-list-main {
        padding-top: 52px;
        & > li {
          border-bottom: 1px solid #fff;
        }
        & > li:first-child {
          border-top: 1px solid rgb(151, 147, 147);
        }
        & > li a {
          color: #fff;
          font-size: 1.25rem;
          font-weight: bold;
          padding: 1rem 0;
          display: block;
        }
      }

      &.menu-list-sub {
        padding-top: 3rem;
        li {
          padding: 0.5rem 0;
          text-align: right;
          a {
            color: #fff;
            font-size: 1rem;
          }
        }
      }
    }
  }

  &.nav_on &__cotainer {
    left: 100%;
  }
}
</style>
