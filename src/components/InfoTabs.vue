<template>
  <div class="flex flex-col">
    <!-- nav -->
    <ul
      class="flex text-xl font-medium border-b border-gray-800 tab-mini-down:py-5 tab-mini-down:flex-col tab-mini-down:text-2xl"
    >
      <li
        @click="toggleTabs(1)"
        :class="[openTab === 1 ? 'tab-active' : 'tab-inactive']"
      >
        1. Планирование
      </li>
      <li
        @click="toggleTabs(2)"
        :class="[openTab === 2 ? 'tab-active' : 'tab-inactive']"
      >
        2. Черновые работы
      </li>
      <li
        @click="toggleTabs(3)"
        :class="[openTab === 3 ? 'tab-active' : 'tab-inactive']"
      >
        3. Чистовая отделка
      </li>
      <li
        @click="toggleTabs(4)"
        :class="[openTab === 4 ? 'tab-active' : 'tab-inactive']"
      >
        4. Сдача объекта
      </li>
    </ul>
    <!-- tab1 -->
    <transition-group name="tfade" tag="div">
      <div
        v-for="(x, index) in tabText"
        :key="index"
        class="flex px-4 py-8"
        :class="[openTab === index + 1 ? 'block' : 'hidden']"
      >
        <div class="w-5/12 tab-mini-down:hidden tab-land-down:w-4/12">
          <img
            :src="require(`@/assets/images/screen${index + 1}.png`)"
            alt=""
          />
        </div>

        <div
          class="relative flex flex-col justify-between w-7/12 px-4 tab-mini-down:px-0 tab-mini-down:w-full tab-land-down:w-8/12"
        >
          <ul class="text-xl font-light">
            <li
              class="flex items-center my-4"
              v-for="(y, index2) in x"
              :key="index2"
            >
              <svg
                class="w-6 h-6 mr-2 text-green-600 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                />
              </svg>
              {{ y }}
            </li>
          </ul>
          <!--  -->
          <div
            class="flex flex-col justify-between w-full p-6 tab-mini-down:text-center"
            :class="[
              index === 3
                ? ['bg-royal_blue', 'shadow-none', 'text-white']
                : 'know-more',
            ]"
          >
            <h1 class="text-xl font-bold tab-mini-down:text-2xl">
              Хотите узнать больше о процеcсе ремонта?
            </h1>
            <div
              class="flex items-center mt-4 tab-mini-down:mb-4 tab-mini-down:flex-col"
            >
              <button
                class="px-5 py-4 mr-8 font-semibold text-black tab-mini-down:mr-0 tab-mini-down:font-medium tab-mini-down:w-full tab-mini-down:text-xl tab-mini-down:mb-6 tab-mini-down:py-5 tab-land-down:p-3 bg-d_tangerine"
              >
                Получить консультацию
              </button>
              <div class="flex items-center">
                <a
                  href="tel:+ 123 123 123"
                  class="text-lg font-bold tab-mini-down:text-2xl"
                  >+123 (123) 456 789</a
                >

                <a href="#" class="mx-3">
                  <img
                    src="../assets/images/icons/telegram.png"
                    class="social-icons"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="../assets/images/icons/whatsapp.png"
                    class="social-icons"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openTab: 1,
      tabText: [
        [
          'Подписание Договора на дизайн проект',
          'Знакомство с Руководителем проекта и дизайнером',
          'Разработка дизайн проекта',
          'Точный расчет всех затрат на ремонт',
          'Знамоства с членами рабочей группы и создание удобного чата для коммуникации',
        ],
        [
          'Закупка и доставка черновых материалов',
          'Выполнение черновых работ',
          'Приемка работ тех. надзором',
          'Авторский надзор',
        ],
        [
          'Закупка и доставка чистовых материалов',
          'Выполнение чистовой отделки',
          'Авторский и технический надзор в процессе выполнения',
          'Уборка и укрытие финишных покрытий перед привозом мебели',
        ],
        [
          'Подпись электроавтоматов и коллекторной группы',
          'Контроль установки мебели',
          'Приемка объекта дизайнером и руководителем проектов',
          'Сдача объекта и выдача гарантийного сертификата',
        ],
      ],
    }
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },
    getPic(index) {
      return '../assets/images/j' + [index + 1] + '.jpeg'
    },
  },
}
</script>

<style  >
.tfade-enter-active,
.tfade-leave-active {
  transition: opacity 0.5s;
}
.tfade-enter, .tfade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>