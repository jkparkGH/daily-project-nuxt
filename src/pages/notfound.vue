<template>
  <section class="not-found-page">
    <h4>404</h4>
    <p>OOPS! PAGE NOT BE FOUND</p>
    <span>
      sorry but the page you are looking for does not exist, name changed or is
      temporarity unavailable.
    </span>
  </section>
</template>

<script>
export default {
  name: "not-found-page"
};
</script>

<style lang="scss" scoped>
$modules: "not-found-page";
.#{$modules} {
  text-align: center;
  padding: 200px 20px;
  @media screen and (max-width: 480px) {
    padding: 100px 10px;
  }
  h4 {
    font-size: 140px;
    color: #fe708a;
    font-weight: 400;
  }
  p {
    font-size: 22px;
    font-weight: 600;
    padding-bottom: 10px;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    max-width: 400px;
    margin: 0 auto;
    display: block;
    word-break: break-word;
  }
}
</style>
