<template>
  <div>
    <aside class="todays-view">
      <span>today-views</span>
      <ul>
        <!-- <li v-for="(item, $index) in []" :key="'todays-view-list' + $index"> -->
        <li>
          <router-link>
            <img src="'_nuxt/src/assets/images/main_banner02.jpg'" />
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'todays-view',
  data() {
    return {};
  }
};
</script>

<style lang="scss">
$modules: 'todays-view';
.#{$modules} {
  position: fixed;
  top: 36%;
  right: 5px;
  background-color: #e1e1e1;
  width: 60px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e1e1e1;
  padding: 3px;
  text-align: center;
  font-size: 0.6rem;
  font-weight: bold;
  opacity: 0.5;
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
