<template>
    <div class="main-banner banner-item">
      <carousel class="parallax" :autoplay="true" :nav="false" :items="1">
          <div class="item">
            <div class="panel-default">
              <div class="testimonial-image"><img src="../../assets/image/t1.jpg" alt="#"></div>
              <div class="testimonial-name"><h2>Janet Wilson</h2></div>
              <div class="testimonial-designation"><p>Web Designer</p></div>
              <div class="testimonial-desc">Rem ipsum doLoremRem ipsum doLorem ipsum ut labore et dolore ma ipsum ut labore et <br> dolore  Rem ipsum doLorem ipsum ut labore et dolore mamagna.Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipisicing.</div>
            </div>
          </div>
          <div class="item">
            <div class="panel-default">
              <div class="testimonial-image"><img src="../../assets/image/t2.jpg" alt="#"></div>
              <div class="testimonial-name"><h2>Linda Howard</h2></div>
              <div class="testimonial-designation"><p>Web Deweloper</p></div>
              <div class="testimonial-desc">Rem ipsum doLoremRem ipsum doLorem ipsum ut labore et dolore ma ipsum ut labore et <br> dolore  Rem ipsum doLorem ipsum ut labore et dolore mamagna.Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipisicing.</div>
            </div>
          </div>
          <div class="item">
            <div class="panel-default">
              <div class="testimonial-image"><img src="../../assets/image/t3.jpg" alt="#"></div>
              <div class="testimonial-name"><h2>Janet Wilson</h2></div>
              <div class="testimonial-designation"><p>Web Designer</p></div>
              <div class="testimonial-desc">Rem ipsum doLoremRem ipsum doLorem ipsum ut labore et dolore ma ipsum ut labore et <br> dolore  Rem ipsum doLorem ipsum ut labore et dolore mamagna.Lorem ipsum doLorem ipsum dolor sit amet, consectetur adipisicing.</div>

            </div>
          </div>
      </carousel>
    </div>
</template>

<script>
import carousel from "vue-owl-carousel2";
export default {
  components: { carousel }
};
</script>

<style lang="less" scoped>
.banner-item {
  .parallax {
    .item {
      .testimonial-image {
        max-width: 75px;
        margin: 0 auto;
      }
      .testimonial-designation {
        p {
          color: #b3b3b3;
        }
      }
      .testimonial-name {
        margin-top: 20px;
        h2 {
          font-size: 22px;
          text-transform: uppercase;
          margin: 0;
          color: #D3AE80;
          font-family: "Roboto",Arial,Helvetica,sans-serif;
        }
      }
      .testimonial-desc {
        color: #b3b3b3;
        margin: 0 auto;
        font-size: 14px;
        line-height: 24px;
        max-width: 800px;
        @media (max-width: 750px) {
          padding: 0 20px;
        }
      }
    }
  }
  
}
</style>