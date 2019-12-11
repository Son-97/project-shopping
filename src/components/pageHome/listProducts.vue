<template>
  <div class="products">
    <div class="customtab-wrapper">
      <ul class="customtab-inner">
        <li class="tab">
          <a href="#tab-latest">Latest Product</a>
        </li>
        <li class="tab">
          <a href="#tab-special">Special Product</a>
        </li>
        <li class="tab">
          <a href="#tab-bestseller">Bestseller Items</a>
        </li>
      </ul>
    </div>
    <carousel :items="4" :dots="false">
      <item-product />
      <item-product />
      <item-product />
      <item-product />
      <item-product />
      <item-product />
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel2";
import itemProduct from './itemListProduct'

export default {
  components: { 
    carousel,
    itemProduct
  }
};
</script>

<style lang="less" scoped>
</style>