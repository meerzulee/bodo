<template>
  <div class="home">
    <div class="container flex flex-col mx-auto">
      <h1 class="mt-12 heading-1">Ремонт квартир без забот</h1>
      <h3 class="text-justify simple-text">
        Дизайн интерьера, ремонт квартиры, комплектация — <br />
        решение любых вопросов в одной компании.
      </h3>
    </div>
    <!-- top carousel start -->
    <Carousel />
    <!-- end -->
    <!-- section -->
    <div class="mt-20">
      <div class="bg-gradient-to-t from-solitude">
        <div class="container relative px-5 pb-40 mx-auto mt-20">
          <p class="text-justify simple-text">
            Ищете компанию по ремонту квартир в Москве? Мы фанатично относимся к
            качеству и отвечаем за него. Берем на себя все заботы — от
            согласования перепланировки до финальной уборки после окончания
            работ.
          </p>
          <h1 class="mt-24 heading-5">
            Хороший ремонт квартиры начинается с дизайна
          </h1>
          <!-- slider component -->
          <div class="relative mt-6">
            <a href="#" class="relative block">
              <img
                src="../assets/images/r1.jpg"
                class="w-11/12 max-h-670"
                alt=""
              />
              <!-- box -->
              <div
                class="absolute top-0 right-0 z-20 p-10 bg-white shadow-2xl mt-100 w-380"
              >
                <p class="my-4 text-xl font-light leading-6">
                  Дизайн проект двухкомнатной квартиры в ЖК Кутузов GRAD
                </p>
                <h1 class="pt-2 text-2xl font-bold leading-6">
                  62 м<sup>2</sup>
                </h1>
              </div>
            </a>
            <!-- chevron -->
            <div class="absolute bottom-0 right-0 flex mb-20 mr-8 shadow-md">
              <!-- chevron left -->
              <div
                class="flex items-center justify-center bg-white hover:bg-royal_blue"
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
                class="flex items-center justify-center bg-white hover:bg-royal_blue"
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
          <div class="absolute w-3/4 p-8 mt-20 bg-d_tangerine">
            <p class="text-justify text-black simple-text">
              Хороший дизайн-проект — тот, который легко реализовать. Наши
              дизайнеры создают максимально продуманное и удобное решение,
              учитывая каждую мелочь. Правильно выполненный дизайн-проект
              сократит время ремонта квартиры и сэкономит ваш бюджет.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-48">
      <div class="container px-6 mx-auto">
        <h1 class="tracking-wider heading-5">
          <span class="font-black">КАЧЕСТВЕННЫЙ РЕМОНТ </span>
          <span class="font-semibold">МОЖЕТ БЫТЬ БЫСТРЫМ</span> <br />
          <span class="tracking-wide text-justify heading-3"
            >bodo — первая строительная компания Бишкека, внедрившая современные
            технологии комплексно во все процессы ремонта квартир</span
          >
        </h1>

        <div class="flex pt-4 mt-12">
          <div class="flex flex-col justify-center w-5/12 -mt-10">
            <h1 class="leading-none heading-5">
              Считаем смету <br />
              за 30 мин
            </h1>
            <p class="my-8 text-justify simple-text">
              Инновационное решение от компании «Авальремонт» — расчет точной
              сметы на работы и черновые материалы прямо во время замера. Всего
              30 минут — и смета готова!
            </p>
            <a href="#" class="text-blue-500">Узнать больше →</a>
          </div>
          <div class="w-7/12">
            <img src="../assets/images/huge-ipad.png" alt="" />
          </div>
        </div>
        <div class="flex">
          <div class="w-5/12">
            <div class="relative">
              <div class="absolute top-0 right-0 mr-10">
                <p class="text-lg font-light">
                  <span class="font-semibold">PFT G4 </span> <br />
                  Механизированная <br />
                  штукатурная станция
                </p>
              </div>
              <img
                src="../assets/images/agregat.jpg"
                class="h-auto max-w-full"
                alt=""
              />
            </div>
          </div>
          <div class="flex flex-col justify-center w-7/12">
            <h1 class="text-4xl font-bold leading-none">
              Выполняем черновую <br />отделку в два раза быстрее
            </h1>
            <p class="my-8 text-2xl font-light">
              Внедрив механизированные технологии, мы улучшили качество работ и
              ускорили черновую отделку в два раза.
            </p>
          </div>
        </div>
        <!--  -->
        <div class="flex mt-10 mb-24">
          <div
            class="flex flex-col items-center justify-center w-1/3 mx-3 shadow-xl h-400"
          >
            <img
              src="../assets/images/icons/icon-speed-up.svg"
              class="w-150"
              alt=""
            />
            <h3 class="mt-10 text-xl font-semibold">Соблюдаем сроки</h3>
          </div>
          <div
            class="flex flex-col items-center justify-center w-1/3 mx-3 shadow-xl h-400"
          >
            <img
              src="../assets/images/icons/icon-cpo.svg"
              class="w-220"
              alt=""
            />
            <h3 class="mt-10 text-xl font-semibold text-center">
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
            <h3 class="mt-10 text-xl font-semibold">Даем гарантию</h3>
          </div>
        </div>
      </div>
    </div>

    <PriceCard />

    <!-- mosaic -->
    <div class="mt-8 mb-20 bg-white">
      <div class="container flex flex-col mx-auto">
        <h1 class="mb-10 text-4xl font-bold">Как мы работаем:</h1>
        <!-- tabs -->
        <div class="flex flex-col">
          <!-- nav -->
          <ul class="flex text-xl font-medium border-b border-gray-800">
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
          <div
            v-for="(x, index) in tabText"
            :key="index"
            class="flex px-4 py-8"
            :class="[openTab === index + 1 ? 'block' : 'hidden']"
          >
            <div class="w-5/12">
              <img
                :src="require(`@/assets/images/screen${index + 1}.png`)"
                alt=""
              />
            </div>
            <div class="relative flex flex-col justify-between w-7/12 px-4">
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
                class="flex flex-col justify-between w-full p-6"
                :class="[
                  index === 3
                    ? ['bg-royal_blue', 'shadow-none', 'text-white']
                    : 'know-more',
                ]"
              >
                <h1 class="text-xl font-bold">
                  Хотите узнать больше о процеcсе ремонта?
                </h1>
                <div class="flex items-center mt-4">
                  <button
                    class="px-5 py-4 mr-8 font-semibold text-black bg-d_tangerine"
                  >
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
        <WorkMosaic class="mt-8" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Carousel from '@/components/Carousel.vue'
import PriceCard from '@/components/PriceCard'
import WorkMosaic from '@/components/WorkMosaic'
export default {
  name: 'Home',
  components: { PriceCard, WorkMosaic, Carousel },
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
