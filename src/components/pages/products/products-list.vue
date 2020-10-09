<template>
  <section>
    <!-- New Arrivals -->
    <div class="common-item-box">
      <ul class="main-product-list">
        <li
          v-for="(item, $index) in products"
          :key="'products' + $index"
          :class="{ new: item.new, sale: item.sale }"
          :data-product-uid="item.uid"
        >
          <div class="main-product-list__label-container">
            <span class="label-new" v-if="item.new">New</span>
            <span class="label-sale" v-if="item.sale">Sale</span>
          </div>
          <div class="main-product-list__image-container">
            <img
              class="product-image"
              :src="'/temp/products/' + item.images"
              alt="product image"
            />
            <router-link class="product-dim" :to="'/products/' + item.uid">
              <span class="product-dim__view-detail">View detail</span>
            </router-link>
          </div>
          <p class="main-product-list__category">{{ item.gender }}</p>
          <p class="main-product-list__item-name">
            {{ item.name }}
          </p>
          <p class="main-product-list__price-before">
            ￦<span>{{ item.beforePrice | toCurrency }}</span>
          </p>
          <p class="main-product-list__price-current">
            ￦<span>{{ item.crrPrice | toCurrency }}</span>
          </p>
          <div class="main-product-list__button-container">
            <button type="button" class="btn-product add-cart">
              Add<br />Cart
            </button>
            <button type="button" class="btn-product buy-now">
              Buy<br />Now
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "main-product-list",
  computed: {
    ...mapGetters({
      products: "products/products"
    })
  },
  methods: {
    ...mapActions({
      GET_PRODUCTS: "products/GET_PRODUCTS"
    })
  },
  mounted() {
    this.GET_PRODUCTS().then(() => {
      console.log(this.products); // ? 왜 안됨??
    });
  }
};
</script>

<style lang="scss">
/* New Arrivals : main-product-list */
$modules: "main-product-list";
.#{$modules} {
  width: 100%;
  text-align: center;
  li {
    width: 238px;
    margin: 20px;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    position: relative;
    display: inline-block;
    vertical-align: top;

    &:hover {
      .product-dim {
        opacity: 1;
        &:before,
        &:after {
          width: 140px;
          opacity: 1;
        }
      }
    }
  }

  &__label-container {
    position: absolute;
    top: 7px;
    left: 7px;
    z-index: 2;
    min-height: 166px;
    &:after {
      content: "";
      display: table;
      clear: both;
    }

    .label-new {
      /*position:absolute;top:8px;left:7px;*/
      float: left;
      border-radius: 20px;
      background-color: #333;
      color: #fff;
      font-size: 0.813rem;
      width: 36px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      display: block;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.35);
      z-index: 2;
      display: block;
      margin-right: 3px;
    }

    .label-sale {
      /*position:absolute;top:8px;left:45px;*/
      float: left;
      border-radius: 20px;
      background-color: #fe708a;
      color: #fff;
      font-size: 0.813rem;
      width: 36px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      display: block;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.35);
      z-index: 2;
      display: block;
    }
  }

  &__image-container {
    width: 100%;
    position: relative;

    .product-image {
      width: 100%;
      display: block;
      height: auto;
    }
    .product-dim {
      width: auto;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      -webkit-transition: opacity 0.5s ease-out;
      transition: opacity 0.5s ease-out;
      outline: 0;
      cursor: pointer;

      &:before,
      &:after {
        position: absolute;
        content: "";
        /*width:140px;*/
        height: 1.6px;
        background-color: #fff;
        top: 50%;
        -webkit-transition: all 0.5s ease-out;
        transition: all 0.5s ease-out;
        width: 0px;
      }

      &:before {
        left: 50%;
        margin-left: -94px;
        margin-top: -14px;
      }

      &:after {
        right: 50%;
        margin-right: -94px;
        margin-top: 14px;
      }

      &:focus {
        opacity: 1;
      }

      &:focus:before,
      &:focus:after {
        width: 140px;
        opacity: 1;
      }

      .product-dim__view-detail {
        position: absolute;
        font-size: 16px;
        color: #fff;
        top: 50%;
        left: 50%;
        margin-left: -50px;
        margin-top: -12px;
        width: 100px;
        height: 24px;
        line-height: 24px;
      }
    }
  }

  &__category {
    color: #ccc;
    text-align: center;
    font-size: 0.78rem;
    padding: 0.78rem 0;
    font-weight: bold;
  }

  &__item-name {
    padding-bottom: 1rem;
    min-height: 52px;
  }

  &__price-before {
    color: #ccc;
    text-decoration: line-through;
    font-size: 0.78rem;
    margin-bottom: 3px;
  }

  &__price-current {
    color: #ff355a;
    font-size: 1.05rem;
  }

  &__button-container {
    .btn-product {
      position: absolute;
      display: block;
      bottom: 0;
      color: #999;
      background-color: #fff;
      padding: 0.65rem;
      font-weight: bold;
      letter-spacing: -0.5px;
      opacity: 0;
      -webkit-transition: all 0.5s ease-out;
      transition: all 0.5s ease-out;
      outline: 0;

      &.add-cart {
        left: 0;
      }

      &.buy-now {
        right: 0;
      }

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 1px;
        background-color: #ccc;
        -webkit-transition: all 0.5s ease-out;
        transition: all 0.5s ease-out;
      }

      &:after {
        content: "";
        position: absolute;
        width: 1px;
        height: 0px;
        background-color: #ccc;
        -webkit-transition: all 0.5s ease-out;
        transition: all 0.5s ease-out;
      }

      &.add-cart:after {
        right: 0;
        top: 0;
      }

      &.buy-now:after {
        left: 0;
        bottom: 0;
      }

      &:hover {
        color: #fff;
        background-color: #333;
      }
    }
  }
}

.main-product-list li:hover .btn-product,
.btn-product:focus {
  opacity: 1;
}

.main-product-list li:hover .btn-product:before,
.btn-product:focus:before {
  width: 100%;
}

.main-product-list li:hover .btn-product:after,
.btn-product:focus:after {
  height: 100%;
}
</style>
