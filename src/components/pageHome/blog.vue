<template>
  <div class="blog">
    <div class="blog-heading">
      <h3>Latest Blogs</h3>
    </div>
    <carousel :items="2" :dots="false">
      <item-blog />
      <item-blog />
      <item-blog />
      <item-blog />
      <item-blog />
      <item-blog />
      <item-blog />
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel2";
import ItemBlog from './itemBlog'

export default {
  components: { 
    carousel,
    ItemBlog
 }
};
</script>

<style lang="less" scoped>
.blog {
  .blog-heading {
    h3 {
      font-family: "Roboto", Arial, Helvetica, sans-serif;
      font-size: 24px;
      clear: both;
      margin: 28px 0 25px;
      display: inline-block;
      width: 100%;
      padding: 12px 0;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
}
</style>