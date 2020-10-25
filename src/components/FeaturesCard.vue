<template>
  <div>
    <div class="flex tab-mini-down:hidden">
      <div
        class="flex flex-col items-center justify-center w-1/3 mx-3 shadow-xl h-400"
      >
        <img
          src="../assets/images/icons/icon-speed-up.svg"
          class="w-150"
          alt=""
        />
        <h3 class="features-card-text">Соблюдаем сроки</h3>
      </div>
      <div
        class="flex flex-col items-center justify-center w-1/3 mx-3 shadow-xl h-400"
      >
        <img src="../assets/images/icons/icon-cpo.svg" class="w-220" alt="" />
        <h3 class="text-center features-card-text">
          Имеем нужные допуски и разрешения
        </h3>
      </div>
      <div
        class="flex flex-col items-center justify-center w-1/3 mx-3 shadow-xl h-400"
      >
        <img
          src="../assets/images/icons/icon-three-years.svg"
          class="w-150"
          alt=""
        />
        <h3 class="features-card-text">Даем гарантию</h3>
      </div>
    </div>
    <!--  -->
    <div class="relative tab-mini-up:hidden">
      <swiper :options="options">
        <swiper-slide v-for="(item, index) in data" :key="index">
          <div class="flex flex-col items-center justify-center w-full mx-3">
            <img
              :src="item.img"
              class="h-full"
              :class="[index == 1 ? ['w-220', 'mb-4'] : 'w-150']"
              alt=""
            />
            <h3 class="mt-10 text-xl font-semibold">{{ item.title }}</h3>
          </div>
        </swiper-slide>
      </swiper>
      <div
        class="absolute left-0 z-10 flex items-center justify-center bg-white fc-prev top-1/2 hover:bg-royal_blue"
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
        class="absolute right-0 z-10 flex items-center justify-center bg-white fc-next top-1/2 hover:bg-royal_blue"
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
      options: {
        loop: true,
        navigation: {
          nextEl: '.fc-next',
          prevEl: '.fc-prev',
        },
      },
      data: [
        {
          img: require('../assets/images/icons/icon-speed-up.svg'),
          title: 'Соблюдаем сроки',
        },
        {
          img: require('../assets/images/icons/icon-cpo.svg'),
          title: ' Имеем нужные допуски и разрешения',
        },
        {
          img: require('../assets/images/icons/icon-three-years.svg'),
          title: 'Даем гарантию',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>