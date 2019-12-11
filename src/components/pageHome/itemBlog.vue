<template>
  <fragment>
    <div class="blog-slider-item">
      <div class="panel-default">
        <div class="blog-image">
          <a href="#" class="blog-imagelink">
            <img src="../../assets/image/blog/blog_1_1.jpg" alt="#" />
          </a>
          <span class="blog-hover"></span>
          <span class="blog-date">06/07/2015</span>
          <span class="blog-readmore-outer">
            <a href="#" class="blog-readmore">Read More</a>
          </span>
        </div>
        <div class="blog-content">
          <a href="#" class="blog-name">
            <h2>Artisan wines from Napa Valley</h2>
          </a>
          <div
            class="blog-desc"
          >Rem ipsum doLorem ipsum ut labore et dolore magna.Lorem ipsum doLorem ipsum dolor sit amet, consectetur Lorem ipsum doLorem ipsum dolor sit amet doLorem ipsum dolor sit amet adipisicing...</div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.blog-slider-item {
    padding: 0px 10px;
    &:hover {
      .blog-hover {
        opacity: 1;
        transition-duration: 500ms;
      }
      .blog-readmore-outer {
        display: block
      }
    }
    .blog-image {
      position: relative;
      .blog-hover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        opacity: 0;
        transition-duration: 500ms;
      }
      .blog-date {
        padding: 7px 15px;
        font-weight: 500;
        background: rgba(14, 16, 17, 0.5) none repeat scroll 0 0;
        color: #ffffff;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .blog-readmore-outer {
        display: none;
        position: absolute;
        right: 0;
        left: 0;
        top: 45%;
        text-align: center;
        opacity: 0;
        transition-duration: 500ms;
        .blog-readmore {
          padding: 8px 15px;
          background: #D3AE80;
          color: #fff;
        }
      }
    }
    .blog-content {
      text-align: left;
      .blog-name {
        color: #000;
        text-decoration: none;
        h2 {
          margin: 15px 0 10px;
          font-size: 18px;
        }
      }
    }
  }
</style>