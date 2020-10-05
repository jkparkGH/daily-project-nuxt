<template>
  <!-- products-search -->
  <div class="products-search">
    <div class="products-search__textfield">
      <input type="text" placeholder="Search Product Name" />
    </div>
    <ul class="products-search__sort">
      <li>
        <span>Cost</span>
        <button type="button" title="sort up" aria-label="sort up">
          ▲
        </button>
      </li>
      <li>
        <span>Name</span>
        <button type="button" title="sort down" aria-label="sort down">
          ▼
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
/* Product List : search bar & list */
$modules: "products-search";
.#{$modules} {
  width: 80%;
  max-width: 1080px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 2rem;
  &__textfield {
    display: inline-block;
    vertical-align: middle;
    width: 35%;
    min-width: 200px;
    border: 1px solid #fe708a;
    border-radius: 2px;
    padding: 0.5rem;
    input {
      width: 100%;
      display: block;
      margin: 0 auto;
      border: 0;
      outline: 0 none;
      font-weight: bold;
      &::placeholder {
        font-weight: 200;
        font-size: 0.813rem;
        opacity: 0.5;
      }
    }
  }

  &__sort {
    display: inline-block;
    vertical-align: middle;
    width: auto;
    margin: 0 0.5rem;
    &:after {
      content: "";
      display: table;
      clear: both;
    }
    li {
      float: left;
      padding: 1rem 0.5rem;
      text-align: right;
      span {
        font-size: 0.875rem;
        display: inline-block;
        vertical-align: middle;
      }
      button {
        padding: 3px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>
