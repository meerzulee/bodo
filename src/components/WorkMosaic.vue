<template>
  <div>
    <!-- works -->
    <h1 class="mt-8 mb-5 text-4xl font-bold">Наши работы</h1>
    <div class="grid w-full grid-cols-6 gap-8 mt-3 tab-mini-down:hidden">
      <div class="col-span-4 bg-royal_blue">
        <router-link to="/project" class="relative block cursor-pointer group">
          <img
            src="@/assets/images/h1.jpg"
            class="object-cover w-full group-hover:opacity-25 h-505"
            alt=""
          />
          <div class="absolute inset-0 w-full h-full bg-smoke-200"></div>
          <div
            class="absolute bottom-0 left-0 z-10 flex flex-col m-8 text-white"
          >
            <h1 class="text-xl font-bold">
              ЖК Кутузов GRAD <br />
              62 м<sup>2</sup>
            </h1>
            <p class="font-light">
              Ремонт двухкомнатной квартиры на ул. Рябиновая д.3
            </p>
          </div>
        </router-link>
      </div>
      <div class="col-span-2 bg-royal_blue">
        <a class="relative block cursor-pointer group">
          <img
            src="@/assets/images/r1.jpg"
            class="object-cover w-full group-hover:opacity-25 h-505"
            alt=""
          />
          <div class="absolute inset-0 w-full h-full bg-smoke-200"></div>
          <div class="absolute bottom-0 left-0 flex flex-col m-8 text-white">
            <h1 class="text-xl font-bold">
              ЖК Кутузов GRAD <br />
              62 м<sup>2</sup>
            </h1>
            <p class="font-light">
              Ремонт двухкомнатной квартиры на ул. Рябиновая д.3
            </p>
          </div>
        </a>
      </div>
      <div class="col-span-3 bg-royal_blue">
        <a class="relative block cursor-pointer group">
          <img
            src="@/assets/images/r1.jpg"
            class="object-cover w-full group-hover:opacity-25 h-505"
            alt=""
          />
          <div class="absolute inset-0 w-full h-full bg-smoke-200"></div>
          <div class="absolute bottom-0 left-0 flex flex-col m-8 text-white">
            <h1 class="text-xl font-bold">
              ЖК Кутузов GRAD <br />
              62 м<sup>2</sup>
            </h1>
            <p class="font-light">
              Ремонт двухкомнатной квартиры на ул. Рябиновая д.3
            </p>
          </div>
        </a>
      </div>
      <div class="col-span-3 bg-royal_blue">
        <a class="relative block cursor-pointer group">
          <img
            src="@/assets/images/h1.jpg"
            class="object-cover w-full group-hover:opacity-25 h-505"
            alt=""
          />
          <div class="absolute inset-0 w-full h-full bg-smoke-200"></div>
          <div class="absolute bottom-0 left-0 flex flex-col m-8 text-white">
            <h1 class="text-xl font-bold">
              ЖК Кутузов GRAD <br />
              62 м<sup>2</sup>
            </h1>
            <p class="font-light">
              Ремонт двухкомнатной квартиры на ул. Рябиновая д.3
            </p>
          </div>
        </a>
      </div>
    </div>
    <div class="w-full mt-3 tab-mini-up:hidden">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="px-2" v-for="(x, index) in 5" :key="index">
          <router-link
            to="/project"
            class="relative block cursor-pointer group"
          >
            <img
              src="@/assets/images/r1.jpg"
              class="object-cover w-full group-hover:opacity-25 phone-down:h-400 h-505"
              alt=""
            />
            <div class="absolute inset-0 w-full h-full bg-smoke-200"></div>
            <div
              class="absolute bottom-0 left-0 z-10 flex flex-col m-8 text-white"
            >
              <h1 class="text-xl font-bold">
                ЖК Кутузов GRAD <br />
                62 м<sup>2</sup>
              </h1>
              <p class="font-light">
                Ремонт двухкомнатной квартиры на ул. Рябиновая д.3
              </p>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
      <div class="flex justify-center w-full py-4">
        <div class="w-auto mosaic-pagination" slot="pagination"></div>
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
          el: '.mosaic-pagination',
          clickable: true,
        },
      },
    }
  },
}
</script>

<style scoped>
</style>