<template>
  <div class="todays-view" v-show="todaysViewList.length > 0">
    <span>today-views</span>
    <ul>
      <li v-for="(item, $index) in todaysViewList" :key="'todays-view-list' + $index">
        <router-link :to="'/products/' + item.uid">
          <img :src="'/temp/products/' + item.images" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'todays-view',
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      todaysViewList: 'todaysview/todaysViewList'
    })
  }
};
</script>

<style lang="scss">
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
}
</style>
