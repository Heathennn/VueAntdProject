<template>
  <div class="c2c-swiper-container">
    <div class="header">周边环境</div>
    <swiper :options="swiperOption" class="c2c-swiper-wrapper">
      <swiper-slide class="c2c-scroll-content" :style="{ backgroundColor: '#f1f1f1'}">
        周边1
      </swiper-slide>
      <swiper-slide class="c2c-scroll-content" :style="{backgroundColor: '#f3f3f3'}">
        周边2
      </swiper-slide>
      <swiper-slide class="c2c-scroll-content" :style="{backgroundColor: '#BABABA'}">
        周边2
      </swiper-slide>
      <!-- 分页指示器，如果需要的话 -->
<!--      <div class="swiper-scrollbar" slot="pagination"></div>-->
    </swiper>
  </div>
</template>

<script>
  import 'swiper/css/swiper.css'
  import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
  export default {
    name: "SwiperDemo",
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          initialSlide: 1,
          centeredSlides: true,
          loop: false,
          slidesPerView: 3,
          coverflowEffect: {
            rotate: 0,
            stretch: 20,
            depth: 100,
            modifier: 1,
            slideShadows: false
          },
          // pagination: {
          //   el: '.swiper-scrollbar'
          // }
        }
      }
    }
  }
</script>

<style lang="less">
  .c2c-swiper-container {
    width: 600px;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
    box-sizing: border-box;
    /*border: 1px solid black;*/
    padding: 20px 0;
    .header {
      height: 80px;
      line-height: 80px;
      margin-top: 50px;
      text-align: center;
    }
    .c2c-swiper-wrapper {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
    .c2c-scroll-content {
      color: #000000;
      width: 230px!important;
      height: 160px!important;
    }
  }
</style>
