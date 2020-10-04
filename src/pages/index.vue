<template>
  <div class="main-container">
    <MainBanner />
  </div>
</template>

<script>
import MainBanner from "@/components/main/main-banner";
export default {
  name: "main-landing",
  components: {
    MainBanner,
  },
};
</script>

<style lang="scss">
.main-container {
  min-height: 400px;
  padding-bottom: 4rem;
}
</style>

