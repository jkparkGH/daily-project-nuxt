<template>
  <section>
    <ContentTitle
      :info="{
        title: 'Featured Category',
        text: 'Lorem ipsum dolor sit amet category'
      }"
    />
    <div class="common-item-box">
      <ul class="ul_category_list">
        <li>
          <a href="#_">
            <div class="div_category_img">
              <img
                src="~@/assets/images/collection1_image.jpg"
                alt="Product collection image"
              />
            </div>
            <span>Product<br />Collection</span>
          </a>
        </li>
        <li>
          <a href="#_">
            <div class="div_category_img">
              <img
                src="~@/assets/images/collection2_image.jpg"
                alt="Item collection image"
              />
            </div>
            <span>Item<br />Collection</span>
          </a>
        </li>
        <li>
          <a href="#_">
            <div class="div_category_img">
              <img
                src="~@/assets/images/collection3_image.jpg"
                alt="Event collection image"
              />
            </div>
            <span>Event<br />Collection</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ContentTitle from "./content-title";
export default {
  name: "main-featured-category",
  components: {
    ContentTitle
  }
};
</script>

<style lang="scss">
.ul_category_list {
  text-align: center;
}

.ul_category_list li {
  width: 330px;
  margin: 20px;
  position: relative;
  display: inline-block;
  text-align: left;
}

@media only screen and (max-width: 413px) {
  .ul_category_list li {
    width: 290px;
    margin: 0 auto;
  }
}

.ul_category_list li > a {
  display: block;
}

.ul_category_list li .div_category_img:before {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: 3px solid #e1e1e1;
  -webkit-transition: border 0.3s ease-out;
  transition: border 0.3s ease-out;
  content: "";
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.ul_category_list li:hover .div_category_img:before,
.ul_category_list a:focus .div_category_img:before {
  border-color: #fe708a;
}

.ul_category_list li img {
  display: block;
  width: 100%;
}

.ul_category_list li span {
  position: absolute;
  top: 38%;
  left: 10%;
  color: #333;
  font-size: 1.2rem;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.ul_category_list li:hover span,
.ul_category_list a:focus span {
  // font-size: 1.25rem;
  color: #ff355a;
}
</style>
