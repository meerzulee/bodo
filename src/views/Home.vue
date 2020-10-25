<template>
  <div class="home">
    <div class="container flex flex-col mx-auto">
      <h1
        class="mt-12 tab-land-down:mt-8 heading-1 phone-down:text-4xl tab-land-down:text-6sm"
      >
        Ремонт квартир без забот
      </h1>
      <h3
        class="text-justify tab-land-down:mt-3 phone-down:text-xl simple-text"
      >
        Дизайн интерьера, ремонт квартиры, комплектация —
        <br class="phone-down:hidden" />
        решение любых вопросов в одной компании.
      </h3>
    </div>
    <!-- top carousel start -->
    <Carousel />
    <!-- end -->
    <!-- section -->
    <div class="mt-20 tab-land-down:mt-16">
      <div class="bg-gradient-to-t from-solitude">
        <div
          class="container relative px-5 pb-40 mx-auto mt-20 phone-down:pb-12 tab-land-down:mt-16"
        >
          <p class="text-justify simple-text">
            Ищете компанию по ремонту квартир в Бишкеке? Мы фанатично относимся
            к качеству и отвечаем за него. Берем на себя все заботы — от
            согласования перепланировки до финальной уборки после окончания
            работ.
          </p>
          <h1 class="mt-24 tab-land-down:mt-20 heading-5">
            Хороший ремонт квартиры начинается с дизайна
          </h1>
          <!-- slider component -->

          <Slider />

          <div
            class="absolute w-3/4 p-8 mt-20 phone-down:relative phone-down:w-full bg-d_tangerine tab-land-down:w-10/12"
          >
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

    <div class="mt-48 phone-down:mt-12 tab-land-down:mt-56">
      <div class="container px-6 mx-auto">
        <h1 class="tracking-wider heading-5 tab-land-down:text-3xl">
          <span class="font-black">КАЧЕСТВЕННЫЙ РЕМОНТ </span>
          <span class="font-semibold">МОЖЕТ БЫТЬ БЫСТРЫМ</span> <br />
          <span
            class="tracking-wide text-justify heading-3 tab-land-down:text-4xl"
            >bodo — первая строительная компания Бишкека, внедрившая современные
            технологии комплексно во все процессы ремонта квартир</span
          >
        </h1>

        <InfoImage />
        <!--  -->
        <div class="mt-10 mb-24">
          <FeaturesCard />
        </div>
      </div>
    </div>

    <PriceCard />

    <!-- mosaic -->
    <div class="mt-8 mb-20 bg-white tab-mini-down:mt-16">
      <div class="container flex flex-col mx-auto">
        <h1 class="mb-10 text-4xl font-bold phone-down:mb-2">
          Как мы работаем:
        </h1>
        <!-- tabs -->
        <InfoTabs />
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
import InfoTabs from '@/components/InfoTabs'
import Slider from '@/components/Slider'
import InfoImage from '@/components/InfoImage'
import FeaturesCard from '@/components/FeaturesCard'
export default {
  name: 'Home',
  components: {
    PriceCard,
    WorkMosaic,
    Carousel,
    Slider,
    InfoImage,
    FeaturesCard,
    InfoTabs,
  },
  data() {
    return {}
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
