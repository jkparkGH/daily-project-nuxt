<template>
  <button
    type="button"
    class="common-move-top on"
    id="common-move-top"
    aria-label="scroll top button"
    title="scroll top button"
  >
    ▲
  </button>
</template>

<script>
export default {
  name: "common-move-top"
};
</script>

<style lang="scss">
/* scroll top button */
$modules: "common-move-top";
.#{$modules} {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  transform: translateY(80px);
  transition: transform 0.3s ease-out;
  font-weight: bold;
  color: #fff;
  background-color: #ccc;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  display: block;
  text-align: center;
  width: 30px;
  height: 30px;
  line-height: 16px;
  outline: 0;
  font-size: 0.875rem;
  overflow: hidden;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  &.on {
    transform: translateY(0px);
  }
}
</style>
