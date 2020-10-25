<template>
  <!-- cards -->
  <div class="pb-32 phone-down:pb-2">
    <div class="py-12 bg-solitude">
      <div class="container relative pb-24 mx-auto phone-down:pb-4">
        <h1 class="ml-4 text-4xl font-bold">Цены на ремонт загородного дома</h1>
        <div class="flex items-stretch mt-8 mb-4 tab-mini-down:hidden">
          <div
            class="flex flex-col items-stretch w-1/3 h-full mx-4 cursor-pointer group"
            v-for="(item, index) in cardArray"
            :key="index"
          >
            <a
              href="#"
              class="relative flex flex-col items-stretch justify-between h-full"
            >
              <img
                :src="require('@/assets/images/d' + (index + 1) + '.jpeg')"
                class="object-cover w-full h-220"
                alt=""
              />

              <div
                class="flex items-center justify-between px-5 py-6 bg-white group-hover:bg-royal_blue"
              >
                <h1
                  class="text-2xl font-bold tab-land-down:text-xl group-hover:text-white text-royal_blue"
                >
                  {{ item.name }}
                </h1>
                <div
                  class="text-base font-bold text-black group-hover:text-white"
                >
                  от
                  <span class="text-2xl tab-land-down:text-xl">{{
                    item.price
                  }}</span>
                  сом/м<sup>2</sup>
                </div>
              </div>
              <!-- TODO: link -->
            </a>
          </div>
        </div>
        <!-- SLIDER -->
        <swiper
          :options="swiperOption"
          class="flex items-stretch mt-8 mb-4 swiper tab-mini-up:hidden"
        >
          <swiper-slide
            class="flex flex-col items-stretch w-full h-full px-4 cursor-pointer group"
            v-for="(item, index) in cardArray"
            :key="index"
          >
            <a
              href="#"
              class="relative flex flex-col items-stretch justify-between h-full"
            >
              <img
                :src="require('@/assets/images/d' + (index + 1) + '.jpeg')"
                class="object-cover w-full h-300"
                alt=""
              />

              <div
                class="flex items-center justify-between px-5 py-6 bg-white phone-down:flex-col phone-down:items-start group-hover:bg-royal_blue"
              >
                <h1
                  class="text-2xl font-bold tab-mini-down:text-3xl group-hover:text-white text-royal_blue"
                >
                  {{ item.name }}
                </h1>
                <div
                  class="text-base font-bold text-black group-hover:text-white"
                >
                  от
                  <span class="text-2xl tab-mini-down:text-3xl">{{
                    item.price
                  }}</span>
                  сом/м<sup>2</sup>
                </div>
              </div>
              <!-- TODO: link -->
            </a>
          </swiper-slide>
        </swiper>
        <div class="flex justify-center w-full py-4">
          <div class="z-20 w-100 card-dom-swiper" slot="pagination"></div>
        </div>
        <!--  -->
        <CardCTA />
      </div>
    </div>
  </div>
</template>

<script>
import CardCTA from '@/components/CardCTA.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    CardCTA,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      cardArray: [
        {
          name: 'Ремонт таунхаусов',
          price: '9000',
          desc:
            'Ремонт квартиры по тарифу Стандарт является традиционным капитальным ремонтом «под ключ», где преимущественно используются недорогие материалы: обои, ламинат, натяжной потолок',
          link: '#',
          img: '/images/j1.jpeg',
        },
        {
          name: 'Ремонт коттеджей',
          price: '12 500',
          desc:
            'Евроремонт с более сложными дизайнерскими решениями. Используются материалы среднего ценового сегмента (покраска стен или дизайнерские обои, паркетная или инженерная доска, потолки из гипсокартона).',
          link: '#',
          img: '/images/j2.jpeg',
        },
        {
          name: 'Ремонт Премиум',
          price: '16 500',
          desc:
            'Ремонт квартиры по тарифу "Премиум" является капитальным ремонтом "под ключ" с применением инновационных инженерных решений и дорогостоящих материалов. Работа выполняется специалистами высочайшего уровня с использованием специального дорогостоящего оборудования.',
          link: '#',
          img: '/images/j3.jpeg',
        },
      ],
      swiperOption: {
        loop: true,
        pagination: {
          el: '.card-dom-swiper',
          clickable: true,
        },
      },
    }
  },
}
</script>

<style scoped>
</style>