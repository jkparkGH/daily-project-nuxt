<template>
  <section>
    <!-- New Arrivals -->
    <div class="common-item-box">
      <ul v-lazy-container="{ selector: 'img' }" class="product-list">
        <li
          v-for="(item, $index) in filteredProductList"
          :key="'products' + $index"
          :class="{ new: item.new, sale: item.sale }"
          :data-product-uid="item.uid"
        >
          <div class="product-list__label-container">
            <span v-if="item.new" class="label-new">New</span>
            <span v-if="item.sale" class="label-sale">Sale</span>
          </div>
          <div class="product-list__image-container">
            <img
              class="product-image"
              :data-src="'/temp/products/' + item.imageURL"
              alt="product image"
              loading="lazy"
            />
            <router-link class="product-dim" :to="'/products/' + item.uid">
              <span class="product-dim__view-detail">View detail</span>
            </router-link>
          </div>

          <p class="product-list__category">
            {{ item.gender }}
          </p>

          <p class="product-list__item-name">
            {{ item.name }}
          </p>

          <p class="product-list__price-before">
            ￦
            <span>{{ toCurrency(item.before_price) }}</span>
          </p>

          <p class="product-list__price-current">
            ￦
            <span>{{ toCurrency(item.crr_price) }}</span>
          </p>

          <div class="product-list__button-container">
            <button type="button" class="btn-product add-cart">
              Add
              <br />
              Cart
            </button>
            <button type="button" class="btn-product buy-now">
              Buy
              <br />
              Now
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from '@nuxtjs/composition-api';
import { useNamespacedGetters, useNamespacedActions } from 'vuex-composition-helpers';

import { toCurrency } from '~/utils/functions';

export default defineComponent({
  name: 'ProductList',
  setup() {
    const { getProducts } = useNamespacedGetters('products', ['getProducts']);

    const { getSearchFilter } = useNamespacedGetters('searchFilter', ['getSearchFilter']);

    const { GET_PRODUCTS } = useNamespacedActions('products', ['GET_PRODUCTS']);

    const filteredProductList = computed(() => {
      const { ascending, searchText } = getSearchFilter.value;

      let result = [...getProducts.value];

      if (searchText) {
        result = result.filter((el) => {
          return el.name.toLowerCase().includes(searchText);
        });
      }

      if (typeof ascending.cost === 'boolean') {
        result = result.slice().sort((a, b) => {
          return ascending.cost ? a.crr_price - b.crr_price : b.crr_price - a.crr_price;
        });
      }

      if (typeof ascending.name === 'boolean') {
        result = result.slice().sort(() => {
          return ascending.name ? -1 : 1;
        });
      }

      return result;
    });

    function fetchData() {
      GET_PRODUCTS();
    }

    onMounted(() => {
      fetchData();
    });

    return {
      toCurrency,
      filteredProductList,
    };
  },
});
</script>

<style lang="scss" scoped>
$modules: 'product-list';
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
      content: '';
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
        content: '';
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
        content: '';
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
        content: '';
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

.product-list li:hover .btn-product,
.btn-product:focus {
  opacity: 1;
}

.product-list li:hover .btn-product:before,
.btn-product:focus:before {
  width: 100%;
}

.product-list li:hover .btn-product:after,
.btn-product:focus:after {
  height: 100%;
}
</style>
