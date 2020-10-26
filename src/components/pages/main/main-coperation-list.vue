<template>
  <section>
    <h3 class="_blind">With us<br /><span>bland list</span></h3>
    <div class="common-item-box">
      <ul class="coperation-list">
        <li>
          <a href="#_" aria-label="Ralph-Lauen link" title="Ralph-Lauen link">
            <img src="~@/assets/images/logo1_image.png" alt="Ralph-Lauen logo image" />
          </a>
        </li>
        <li>
          <a href="#_" aria-label="TOMMY-HILFIGER link" title="TOMMY-HILFIGER link">
            <img src="~@/assets/images/logo2_image.png" alt="TOMMY-HILFIGER logo image" />
          </a>
        </li>
        <li>
          <a href="#_" aria-label="DAVIDOFF link">
            <img src="~@/assets/images/logo3_image.png" alt="DAVIDOFF logo image" />
          </a>
        </li>
        <li>
          <a href="#_" aria-label="Calvn-Klein link" title="Calvn-Klein link">
            <img src="~@/assets/images/logo4_image.png" alt="Calvn-Klein logo image" />
          </a>
        </li>
        <li>
          <a href="#_" aria-label="HUGO-BOSS link" title="HUGO-BOSS link">
            <img src="~@/assets/images/logo5_image.png" alt="HUGO-BOSS logo image" />
          </a>
        </li>
        <li>
          <a href="#_" aria-label="ESCADA link" title="ESCADA link">
            <img src="~@/assets/images/logo6_image.png" alt="ESCADA logo image" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'main-coperation-list'
};
</script>

<style lang="scss" scoped>
$modules: 'coperation-list';
.#{$modules} {
  width: 100%;
  margin: 8rem auto;
  max-width: 1080px;
  padding: 10px 0;
  font-size: 0px;
  text-align: center;
  li {
    width: 180px;
    display: inline-block;
    padding: 10px 0;
    @media screen and (max-width: 480px) {
      display: block;
      margin: 0 auto;
      & + li {
        padding-top: 20px;
      }
    }
    a {
      display: block;
    }

    img {
      width: 100%;
      opacity: 0.5;
    }
  }
  li:hover img {
    opacity: 1;
  }
}
</style>
