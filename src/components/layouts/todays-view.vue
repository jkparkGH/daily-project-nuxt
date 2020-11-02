<template>
  <div class="todays-view" v-show="todaysViewList.length > 0">
    <span>today-views</span>
    <ul>
      <li v-for="(item, $index) in pagenationFilter(todaysViewList)" :key="'todays-view-list' + $index">
        <router-link :to="'/products/' + item.uid">
          <img :src="'/temp/products/' + item.images" loading="lazy" />
        </router-link>
      </li>
    </ul>
    <div v-show="todaysViewList.length > 4" class="todays-view__pagination">
      <button type="button" @click="movePrev">◀</button>
      <span>{{ crrIndex + 1 }}</span
      >&#47;<span>{{ totalPageCount }}</span>
      <button type="button" @click="moveNext">▶</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'todays-view',
  data() {
    return {
      crrIndex: 0,
      countPerPage: 4
    };
  },
  computed: {
    ...mapGetters({
      todaysViewList: 'todaysview/todaysViewList'
    }),
    totalPageCount() {
      return Math.ceil(this.todaysViewList.length / this.countPerPage);
    }
  },
  methods: {
    movePrev() {
      this.crrIndex > 0 && this.crrIndex--;
    },
    moveNext() {
      this.crrIndex + 1 < this.totalPageCount && this.crrIndex++;
    },
    pagenationFilter(todaysViewList) {
      return todaysViewList.slice(this.crrIndex * this.countPerPage, (this.crrIndex + 1) * this.countPerPage);
    }
  }
};
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
