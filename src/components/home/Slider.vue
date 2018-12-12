<template>
  <!-- Slider main container -->
  <div class="swiper-container" ref="slider">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <router-link v-for="(slide, index) in slides" :key="index" :to="{ name: 'detail', params: { id: slide.id } }" class="swiper-slide" tag="div">
            <img :src="slide.img_url" alt="">
          </router-link>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination" ref="pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  props: ['slides'],
  mounted () {
    this.swiperInit()
  },
  methods: {
    swiperInit () {
      // eslint-disable-next-line
      new Swiper(this.$refs.slider, {
        pagination: {
          el: this.$refs.pagination,
          clickable: true
        },
        spaceBetween: 0,
        centeredSliders: true,
        autoplay: {
          delay: 2000
        },
        autoplayDisableOninteraction: true,
        initialSlide: 0,
        loop: true,
        speed: 900
      })
    }
  }
}
</script>
