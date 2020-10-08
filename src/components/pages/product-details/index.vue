<template>
  <div class="common-layout">
    <h3 class="_blind">Product Detail</h3>
    <p class="category-tag">
      <a href="#_" class="back-to-list">◀<span>Back to List</span></a>
      <span
        >Products | <strong>{{ productDetailData.name }}</strong></span
      >
    </p>
    <div class="product-details">
      <div class="product-details__container">
        <div class="product-details__image">
          <img
            :src="'/temp/products/' + productDetailData.images"
            :alt="`product ${productDetailData.uid}`"
          />
        </div>
      </div>
      <div class="product-details__container">
        <h4 class="product-details__product-name">
          {{ productDetailData.name }}
        </h4>
        <p class="product-details__price">
          <span class="_price-before"
            >￦{{ productDetailData.beforePrice | toCurrency }}</span
          >
          <span class="_price-current"
            >￦{{ productDetailData.crrPrice | toCurrency }}</span
          >
        </p>
        <p
          class="product-details__info-summary"
          :html="productDetailData.summary"
        ></p>
        <div class="product-details__purchase-amount-select">
          <select name="" id="cust_purchase_count">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button class="btn-purchase" type="button">Purchase</button>
          <button class="btn-add-cart" type="button">Add Cart</button>
        </div>
        <ul class="product-details__product-info-list">
          <li>
            <h4>Info</h4>
            <p v-html="productDetailData.infoList.info"></p>
          </li>
          <li>
            <h4>Reviews</h4>
            <p v-html="productDetailData.infoList.reviews"></p>
          </li>
          <li>
            <h4>Shipping</h4>
            <p v-html="productDetailData.infoList.shipping"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "product-details-index",
  computed: {
    // ...mapGetters({
    //   productDetailData: "products/productDetailData"
    // })
    productDetailData() {
      return this.$store.getters["products/productDetailData"];
    }
  },
  methods: {
    ...mapActions({
      GET_PRODUCT_DETAIL: "products/GET_PRODUCT_DETAIL"
    })
  },
  mounted() {
    this.GET_PRODUCT_DETAIL({
      uid: this.$route.params.uid
    });
  }
};
</script>

<style lang="scss">
$modules: "category-tag";
.#{$modules} {
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: right;
  font-size: 0.78rem;
  @include clearfix;
  & > span {
    float: right;
    max-width: calc(100% - 90px);
  }
  .back-to-list {
    float: left;
    color: #555;
    font-weight: bold;
    &:hover span {
      text-decoration: underline;
    }
  }
}

$modules: "product-details";
.#{$modules} {
  background-color: #fff;
  width: 100%;
  max-width: 1080px;
  margin: 2rem auto;
  text-align: center;
  @include clearfix;
  &__container {
    width: 48%;
    min-width: 300px;
    margin: 0 auto;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    padding-bottom: 1rem;
  }
  &__image {
    width: 60%;
    min-width: 300px;
    border: 1px solid #efefef;
    margin: 0 auto;
    img {
      width: 100%;
      display: block;
    }
  }
  &__product-name {
    font-size: 1.6rem;
    padding-bottom: 2rem;
    width: 90%;
    word-break: break-word;
  }
  &__price {
    width: 90%;
    // text-align: right;
    padding-right: 1rem;
    ._price-before {
      color: #ccc;
      text-decoration: line-through;
      font-size: 0.875rem;
      padding-right: 5px;
    }
    ._price-current {
      color: #ff355a;
      font-size: 1.05rem;
    }
  }
  &__info-summary {
    width: 90%;
    padding: 1rem 0;
  }
  &__purchase-amount-select {
    padding-bottom: 1.2rem;
    select {
      padding: 0.68rem 1rem;
      border: 1px solid #aaa;
    }
    .btn-purchase {
      padding: 0.78rem 1rem;
      background-color: #fe708a;
      color: #fff;
    }
    .btn-add-cart {
      padding: 0.78rem 1rem;
      background-color: #222;
      color: #fff;
    }
  }
  &__product-info-list {
    padding: 1rem 0;
    li {
      padding: 1.5rem 0;
      h4 {
        width: 30%;
        min-width: 100px;
        padding-bottom: 0.3rem;
        border-bottom: 2px solid #333;
        margin-bottom: 1rem;
        font-size: 1.25rem;
      }
      p {
        color: #444;
      }
    }
  }
}
</style>
