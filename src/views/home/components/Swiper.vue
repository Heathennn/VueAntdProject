<template>
  <div class="swiper-container">
    <swiper :options="swiperOption" class="swiper-wrapper">
      <swiper-slide class="scroll-content" :style="{ backgroundColor: 'red'}">
        新闻1
      </swiper-slide>
      <swiper-slide class="scroll-content" :style="{ backgroundColor: 'black'}">
        新闻2
      </swiper-slide>
      <swiper-slide class="scroll-content" :style="{ backgroundColor: 'blue'}">
        新闻3
      </swiper-slide>
      <!-- 分页指示器，如果需要的话 -->
      <div class="swiper-scrollbar" slot="pagination"></div>
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
          centeredSlides: true,
          loop: true,
          slidesPerView: 2,
          coverflowEffect: {
            rotate: 0,
            stretch: 20,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-scrollbar'
          }
        }
      }
    }
  }
</script>

<style lang="less">
.swiper-container {
  width: 800px;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid black;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    /*display: flex;*/
  }
  .scroll-content {
    color: #ffffff;
    width: 400px;
    height: 400px;
  }
}
</style>
