<template>
  <!-- cards -->
  <div class="pb-32 phone-down:pb-2">
    <div class="py-12 bg-solitude">
      <div class="container relative pb-24 mx-auto phone-down:pb-4">
        <h1 class="ml-4 text-4xl font-bold">
          Цены на ремонт квартир «под ключ»:
        </h1>
        <div class="flex mt-8 mb-4">
          <!-- without slider -->
          <div
            class="flex flex-col w-1/3 mx-4 cursor-pointer tab-mini-down:hidden tab-land-down:mx-2 group"
            v-for="(item, index) in cardArray"
            :key="index"
          >
            <router-link
              :to="item.link"
              class="relative flex flex-col justify-between h-full"
            >
              <div>
                <img
                  :src="require('@/assets/images/j' + (index + 1) + '.jpeg')"
                  class="w-full"
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
                <p
                  class="mx-4 mt-10 text-lg tab-land-down:text-base font-lightleading-tight"
                >
                  {{ item.desc }}
                </p>
              </div>
              <!-- TODO: link -->
              <h3 class="mx-5 mt-2 text-royal_blue">Узнать больше →</h3>
            </router-link>
          </div>
          <!-- with slider -->
          <swiper :options="swiperOption" class="tab-mini-up:hidden swiper">
            <swiper-slide
              class="flex flex-col w-full px-10 cursor-pointer group"
              v-for="(item, index) in cardArray"
              :key="index"
            >
              <router-link
                :to="item.link"
                class="relative flex flex-col justify-between h-full"
              >
                <div>
                  <img
                    :src="require('@/assets/images/j' + (index + 1) + '.jpeg')"
                    class="object-cover w-full h-300"
                    alt=""
                  />
                  <div
                    class="flex items-center justify-between px-5 py-6 bg-white group-hover:bg-royal_blue"
                  >
                    <h1
                      class="text-2xl font-bold group-hover:text-white text-royal_blue"
                    >
                      {{ item.name }}
                    </h1>
                    <div
                      class="text-base font-bold text-black group-hover:text-white"
                    >
                      от
                      <span class="text-2xl">{{ item.price }}</span>
                      сом/м<sup>2</sup>
                    </div>
                  </div>
                  <p
                    class="mx-4 mt-10 text-lg font-light leading-snug text-justify"
                  >
                    {{ item.desc }}
                  </p>
                </div>
                <!-- TODO: link -->
                <h3 class="mx-5 mt-2 text-royal_blue">Узнать больше →</h3>
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
        <div class="flex justify-center w-full py-4">
          <div class="z-20 w-100 card-kv-swiper" slot="pagination"></div>
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
      swiperOption: {
        loop: true,
        pagination: {
          el: '.card-kv-swiper',
          clickable: true,
        },
      },
      cardArray: [
        {
          name: 'Стандарт',
          price: '3200',
          desc:
            'Ремонт квартиры по тарифу Стандарт является традиционным капитальным ремонтом «под ключ», где преимущественно используются недорогие материалы: обои, ламинат, натяжной потолок',
          link: '/remont-kvartir/standard',
          img: '/images/j1.jpeg',
        },
        {
          name: 'Комфорт',
          price: '6 500',
          desc:
            'Евроремонт с более сложными дизайнерскими решениями. Используются материалы среднего ценового сегмента (покраска стен или дизайнерские обои, паркетная или инженерная доска, потолки из гипсокартона).',
          link: '#',
          img: '/images/j2.jpeg',
        },
        {
          name: 'Премиум',
          price: '9 000',
          desc:
            'Ремонт квартиры по тарифу "Премиум" является капитальным ремонтом "под ключ" с применением инновационных инженерных решений и дорогостоящих материалов. Работа выполняется специалистами высочайшего уровня с использованием специального дорогостоящего оборудования.',
          link: '#',
          img: '/images/j3.jpeg',
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>