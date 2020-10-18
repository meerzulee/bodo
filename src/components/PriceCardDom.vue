<template>
  <!-- cards -->
  <div class="pb-32">
    <div class="py-12 bg-solitude">
      <div class="container relative pb-24 mx-auto">
        <h1 class="ml-4 text-4xl font-bold">Цены на ремонт загородного дома</h1>
        <div class="flex items-stretch mt-8 mb-4">
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
                  class="text-2xl font-bold group-hover:text-white text-royal_blue"
                >
                  {{ item.name }}
                </h1>
                <div
                  class="text-base font-bold text-black group-hover:text-white"
                >
                  от <span class="text-2xl">{{ item.price }}</span> сом/м<sup
                    >2</sup
                  >
                </div>
              </div>
              <!-- TODO: link -->
            </a>
          </div>
        </div>

        <!--  -->
        <CardCTA />
      </div>
    </div>
  </div>
</template>

<script>
import CardCTA from '@/components/CardCTA.vue'
export default {
  components: {
    CardCTA,
  },
  data() {
    return {
      cardArray: [
        {
          name: 'Стандарт',
          price: '9000',
          desc:
            'Ремонт квартиры по тарифу Стандарт является традиционным капитальным ремонтом «под ключ», где преимущественно используются недорогие материалы: обои, ламинат, натяжной потолок',
          link: '#',
          img: '/images/j1.jpeg',
        },
        {
          name: 'Комфорт',
          price: '12 500',
          desc:
            'Евроремонт с более сложными дизайнерскими решениями. Используются материалы среднего ценового сегмента (покраска стен или дизайнерские обои, паркетная или инженерная доска, потолки из гипсокартона).',
          link: '#',
          img: '/images/j2.jpeg',
        },
        {
          name: 'Премиум',
          price: '16 500',
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