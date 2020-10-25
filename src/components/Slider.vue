<template>
  <div class="relative mt-6">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(x, index) in 3" :key="index">
        <a href="#" class="relative block">
          <img
            src="@/assets/images/r1.jpg"
            class="w-11/12 tab-land-down:w-full max-h-670"
            alt=""
          />
          <!-- box -->
          <div
            class="absolute top-0 right-0 z-20 p-10 bg-white shadow-2xl tab-mini-down:hidden tab-land-down:mr-8 tab-land-down:mt-12 tab-land-down:p-8 mt-100 w-380"
          >
            <p
              class="my-4 text-xl font-light leading-6 tab-land-down:mt-0 tab-land-down:mb-2"
            >
              Дизайн проект двухкомнатной квартиры в ЖК Кутузов GRAD
            </p>
            <h1 class="pt-2 text-2xl font-bold leading-6">62 м<sup>2</sup></h1>
          </div>
        </a>
      </swiper-slide>
    </swiper>

    <!-- chevron -->
    <div class="absolute bottom-0 right-0 z-10 flex mb-20 mr-8 shadow-md">
      <!-- chevron left -->
      <div
        class="flex items-center justify-center bg-white slider-btn-prev hover:bg-royal_blue"
      >
        <svg
          class="w-16 h-16 fill-current stroke-0 hover:text-white text-royal_blue"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
          />
        </svg>
      </div>
      <!-- chevron right -->
      <div
        class="flex items-center justify-center bg-white slider-btn-next hover:bg-royal_blue"
      >
        <svg
          class="w-16 h-16 fill-current stroke-0 hover:text-white text-royal_blue"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.slider-btn-next',
          prevEl: '.slider-btn-prev',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
</style>