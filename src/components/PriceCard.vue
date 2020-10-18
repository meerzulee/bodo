<template>
  <!-- cards -->
  <div class="pb-32">
    <div class="py-12 bg-solitude">
      <div class="relative container pb-24 mx-auto">
        <h1 class="ml-4 text-4xl font-bold">
          Цены на ремонт квартир «под ключ»:
        </h1>
        <div class="flex mt-8 mb-4">
          <div
            class="flex flex-col w-1/3 mx-4 cursor-pointer group"
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
                <p class="mx-4 mt-10 text-lg font-light leading-tight">
                  {{ item.desc }}
                </p>
              </div>
              <!-- TODO: link -->
              <h3 class="mx-5 mt-2 text-blue-700">Узнать больше →</h3>
            </router-link>
          </div>
        </div>

        <!--  -->
        <div class="absolute w-1/2 p-4 px-6 mt-12 text-white bg-royal_blue">
          <h1 class="text-2xl font-bold">Нужна консультация специалиста?</h1>
          <p class="mt-6 mb-8 font-light">
            Получите бесплатную консультацию по вопросам
          </p>
          <div class="flex items-center justify-between mt-4">
            <button class="px-5 py-4 font-semibold text-black bg-d_tangerine">
              Получить консультацию
            </button>
            <div class="flex">
              <a href="tel:+ 123 123 123" class="text-lg font-bold"
                >+123 (123) 456 789</a
              >

              <a href="#" class="mx-3">
                <img
                  src="../assets/images/icons/telegram.png"
                  class="w-full h-full"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="../assets/images/icons/whatsapp.png"
                  class="w-full h-full"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardArray: [
        {
          name: 'Стандарт',
          price: '9000',
          desc:
            'Ремонт квартиры по тарифу Стандарт является традиционным капитальным ремонтом «под ключ», где преимущественно используются недорогие материалы: обои, ламинат, натяжной потолок',
          link: '/remont-kvartir/standard',
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