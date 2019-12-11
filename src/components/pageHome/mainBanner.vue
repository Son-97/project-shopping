<template>
  <div>
    <div class="main-banner">
      <carousel :autoplay="true" :nav="false" :items="1">
        <img
          src="../../assets/image/banners/Main-Banner1_1.jpg"
          alt="main-banner1"
          class="img-responsive"
        />
        <img
          src="../../assets/image/banners/Main-Banner2_1.jpg"
          alt="main-banner2"
          class="img-responsive"
        />
        <img
          src="../../assets/image/banners/Main-Banner3_1.jpg"
          alt="main-banner3"
          class="img-responsive"
        />
      </carousel>
    </div>
    <div class="container">
      <div class="cms_banner">
        <div class="cms-banner-left">
          <a href="#">
            <img alt="#" src="../../assets/image/banners/subbanner1_1.jpg" />
          </a>
        </div>
        <div class="cms-banner-middle">
          <a href="#">
            <img alt="#" src="../../assets/image/banners/subbanner2_1.jpg" />
          </a>
        </div>
        <div class="cms-banner-right">
          <a href="#">
            <img alt="#" src="../../assets/image/banners/subbanner3_1.jpg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel2";
export default {
  components: { carousel }
};
</script>

<style lang="less" scoped>
</style>