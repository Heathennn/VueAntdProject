<template>
    <div class="school-container">
            <swiper class="swiper-wrapper" :options="swiperOption">
                <swiper-slide class="swiper-slide">
                    1
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    2
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    3
                </swiper-slide>
                     <div class="swiper-pagination" slot="pagination" style="bottom: -10px"></div>
            </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
export default {
    name: 'School',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOption: {
               direction: 'horizontal',
               autoplay: {
                 delay: 1500,
                 stopOnLastSlide: false,
                 disableOnInteraction: false
               },
               slidesPerView: "auto",
               // 初始化定位
               initialSlide: 1,
               centeredSlides:true,
               spaceBetween: 20,
               // 注意swiper版本写法，不同版本写法不同
               pagination: {
                 el: ".swiper-pagination",
                 clickable: true,
                 type: "bullets"
               }
             },
        }
    },
    methods: {
        
    },
    mounted() {
        // this.init();
    }
}
</script>

<style lang="less">
.pc {
    .school-container {
        width: 960px;
        margin: 0 auto;
        .swiper-slide {
            width: 960px;
            height: 408px;
            background: #fff;
            box-shadow: 0 8px 30px #ddd;
            display: flex;
            align-items: center;
        }
    }
}
</style>
