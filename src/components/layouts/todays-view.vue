<template>
  <div class="todays-view" v-show="todaysView.list.length > 0">
    <span>today-views</span>
    <ul>
      <li
        v-for="(item, $index) in pagenationFilter(todaysView.list)"
        :key="'todays-view-list' + $index"
      >
        <router-link :to="'/products/' + item.uid">
          <img :src="'/temp/products/' + item.imageURL" loading="lazy" />
        </router-link>
      </li>
    </ul>
    <div v-show="todaysView.list.length > 4" class="todays-view__pagination">
      <button type="button" @click="movePrev">◀</button>
      <span>{{ crrIndex + 1 }}</span>
      &#47;
      <span>{{ totalPageCount }}</span>
      <button type="button" @click="moveNext">▶</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from '@nuxtjs/composition-api';
import { useNamespacedGetters } from 'vuex-composition-helpers';

interface todaysViewData {
  uid: number;
  imageURL: string;
}

export default defineComponent({
  name: 'TodaysView',
  setup() {
    const { getTodaysView } = useNamespacedGetters('todaysview', ['getTodaysView']);

    // TODO: Array type으로 변경
    const todaysView: { list: todaysViewData[] } = {
      list: [],
    };

    const crrIndex = ref(0);

    const countPerPage = ref(4);

    const totalPageCount = computed(() => {
      return Math.ceil(todaysView.list.length / countPerPage.value);
    });

    watch(
      getTodaysView,
      (newValue: any) => {
        todaysView.list = newValue.list;
      },
      { immediate: true, deep: true }
    );

    function movePrev() {
      crrIndex.value > 0 && crrIndex.value--;
    }

    function moveNext() {
      crrIndex.value + 1 < totalPageCount.value && crrIndex.value++;
    }

    function pagenationFilter(todaysViewList: todaysViewData[]) {
      return todaysViewList.slice(
        crrIndex.value * countPerPage.value,
        (crrIndex.value + 1) * countPerPage.value
      );
    }

    return {
      crrIndex,
      totalPageCount,
      todaysView,
      movePrev,
      moveNext,
      pagenationFilter,
    };
  },
});
</script>

<style lang="scss" scoped>
$modules: 'todays-view';
.#{$modules} {
  position: fixed;
  z-index: 1;
  top: 36%;
  right: 5px;
  background-color: #e1e1e1;
  width: 62px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e1e1e1;
  padding: 3px;
  text-align: center;
  opacity: 0.5;
  & > span {
    font-size: 0.4rem;
    left: -0.5px;
    font-weight: bold;
  }
  &:hover {
    opacity: 1;
  }
  ul {
    max-height: 400px;
    padding-top: 3px;
  }
  li {
    margin-bottom: 3px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    padding: 5px;
    border: 1px solid #ddd;
    &:last-child {
      margin-bottom: 0;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  &__pagination {
    margin-top: 3px;
    font-size: 0.4rem;
    left: -0.5px;
    font-weight: bold;
    button {
      font-size: 0.4rem;
      left: -0.5px;
      font-weight: bold;
    }
  }
}
</style>
