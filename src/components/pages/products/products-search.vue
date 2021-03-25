<template>
  <!-- products-search -->
  <div class="products-search">
    <div class="products-search__textfield">
      <input type="text" placeholder="Search Product Name" v-model="computedSearchText" />
    </div>
    <ul class="products-search__sort">
      <li>
        <span>Cost</span>
        <button
          type="button"
          title="sort button"
          :aria-label="`sort ${ascending.cost ? 'ascending' : 'descending'} button`"
          @click="ascendingTypeReverse('cost')"
        >
          {{ ascending.cost ? '▲' : '▼' }}
        </button>
      </li>
      <li>
        <span>Name</span>
        <button
          type="button"
          title="sort button"
          :aria-label="`sort ${ascending.name ? 'ascending' : 'descending'} button`"
          @click="ascendingTypeReverse('name')"
        >
          {{ ascending.name ? '▲' : '▼' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { useNamespacedGetters, useNamespacedActions } from 'vuex-composition-helpers';

export default defineComponent({
  name: 'product-search',
  setup() {
    const { searchInfo } = useNamespacedGetters('products', ['searchInfo']);
    const { ascending, searchText } = searchInfo.value;
    const { SET_SEARCH_INFO_TEXT, SET_SEARCH_INFO_ASCENDING } = useNamespacedActions('products', [
      'SET_SEARCH_INFO_TEXT',
      'SET_SEARCH_INFO_ASCENDING',
    ]);

    const computedSearchText = computed({
      get: function() {
        return searchText;
      },
      set: function(value) {
        SET_SEARCH_INFO_TEXT(value);
      },
    });

    function ascendingTypeReverse(typeString: string | null) {
      if (!typeString) return;

      SET_SEARCH_INFO_ASCENDING({
        [typeString]: !ascending[typeString],
      });
    }

    return {
      computedSearchText,
      ascending,
      ascendingTypeReverse,
    };
  },
});
</script>

<style lang="scss" scoped>
$modules: 'products-search';
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
      content: '';
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
