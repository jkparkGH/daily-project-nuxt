<template>
  <h3 class="content-title">
    {{ info.title }}<br /><span>{{ info.text }}</span>
  </h3>
</template>

<script>
export default {
  name: 'content-title',
  props: {
    info: {
      title: '',
      text: '',
      default() {
        return {
          title: '-',
          text: '-'
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$modules: 'content-title';
.#{$modules} {
  position: relative;
  text-align: center;
  padding: 2rem;
  margin-top: 5rem;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  &:before {
    position: absolute;
    background-color: #fe708a;
    content: '';
    top: 10px;
    left: 50%;
    width: 40px;
    height: 2px;
    margin-left: -20px;
  }
  span {
    font-size: 0.78rem;
    font-weight: normal;
  }
}
</style>
