<template>
  <div class="carousel">
    <div class="my-20 overflow-hidden tab-land-down:mb-0">
      <div class="pt-12 pb-220 tab-land-down:pb-16 bg-solitude">
        <div class="container relative z-0 mx-auto">
          <!-- infobox outside -->
          <div
            class="z-20 px-12 py-10 mt-5 bg-white w-380 tab-land-down:hidden"
          >
            <h1 class="text-2xl font-bold leading-normal">
              Создаем уютные квартиры
            </h1>
            <p class="my-5 text-xl font-light leading-6">
              Посмотрите портфолио квартир, в которых мы недавно завершили
              ремонт.
            </p>
            <a href="#" class="text-blue-700">Смотреть портфолио →</a>
          </div>

          <div
            class="absolute left-0 w-full px-2 mt-6 tab-land-down:-mt-20 -z-10 -top-1/2 tab-land-down:top-1/2 ml-300 tab-land-down:relative tab-land-down:ml-0"
          >
            <!-- infobox inside -->
            <div
              class="absolute top-0 left-0 z-20 flex flex-col px-4 py-4 mx-12 mt-10 bg-white border-4 border-royal_blue tab-land-up:hidden"
            >
              <h1 class="text-lg font-bold leading-normal">Наши работы</h1>
              <!-- <p class="my-1 font-light leading-6">
                Посмотрите портфолио квартир, в которых мы недавно завершили
                ремонт.
              </p> -->
              <a href="#" class="text-blue-700">Смотреть портфолио →</a>
            </div>
            <!-- /info -->
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="(x, index) in 3" :key="index">
                <a href="#">
                  <img
                    src="../assets/images/h1.jpg"
                    class="w-11/12 max-h-670 tab-land-down:w-full"
                    alt=""
                  />
                  <!-- infobar -->
                  <div
                    class="absolute bottom-0 left-0 flex items-center h-16 mb-20 ml-24 font-semibold bg-gray-300 border-l-4 tab-mini-down:hidden tab-land-down:mr-12 tab-land-down:right-0 tab-land-down:left-auto border-royal_blue tab-land-down:mb-12 tab-land-down:h-12"
                  >
                    <p class="flex items-center ml-10 mr-3">
                      Ремонт однокомнатной квартиры на ул. Сервантеса д.1 корп.
                      2
                      <svg class="w-8 h-8" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                        />
                      </svg>
                    </p>
                  </div>
                </a>
              </swiper-slide>
            </swiper>

            <!-- chevrons -->
            <div
              class="absolute bottom-0 left-0 z-10 flex mb-20 -ml-16 tab-mini-down:hidden tab-land-down:mb-12 tab-land-down:ml-12"
            >
              <!-- chevron left -->
              <div
                class="flex items-center justify-center bg-white btn-prev hover:bg-royal_blue"
              >
                <svg
                  class="fill-current stroke-0 chevron-size hover:text-white text-royal_blue"
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
                class="flex items-center justify-center bg-white btn-next tab-land-down:border-l-2 hover:bg-royal_blue"
              >
                <svg
                  class="fill-current stroke-0 chevron-size hover:text-white text-royal_blue"
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
          <div class="flex justify-center w-full py-4">
            <div class="w-100 swiper-pagination" slot="pagination"></div>
          </div>
        </div>
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
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        navigation: {
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        },
      },
    }
  },
}
</script>

<style >
.swiper-pagination-bullet {
  @apply mx-1;
}
</style>