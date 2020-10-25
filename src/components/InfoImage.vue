<template>
  <div class="mt-20">
    <div class="tab-mini-up:hidden">
      <swiper v-if="true" class="swiper" :options="swiperOption">
        <swiper-slide
          ><div class="flex pt-4 mx-8 tab-mini-down:flex-col">
            <div
              class="flex flex-col justify-center w-5/12 tab-mini-down:w-full tab-mini-down:mx-auto tab-land-down:w-6/12"
            >
              <h1 class="leading-none heading-5 tab-land-down:text-3xl">
                Считаем смету <br class="tab-land-down:hidden" />
                за 30 мин
              </h1>
              <p class="my-8 text-justify simple-text tab-land-down:text-xl">
                Инновационное решение от компании «Авальремонт» — расчет точной
                сметы на работы и черновые материалы прямо во время замера.
                Всего 30 минут — и смета готова!
              </p>
              <a href="#" class="text-blue-500">Узнать больше →</a>
            </div>
            <div
              class="w-7/12 tab-mini-down:w-2/3 tab-mini-down:mt-4 tab-mini-down:mx-auto tab-land-down:w-6/12"
            >
              <img src="@/assets/images/huge-ipad.png" alt="" />
            </div></div
        ></swiper-slide>
        <swiper-slide>
          <div class="flex tab-mini-down:flex-col-reverse">
            <div class="w-5/12 tab-mini-down:w-2/3 tab-mini-down:mx-auto">
              <div class="relative">
                <div
                  class="absolute top-0 right-0 mr-10 tab-mini-down:mr-0 tab-land-down:mr-0"
                >
                  <p class="text-lg font-light tab-land-down:text-base">
                    <span class="font-semibold">PFT G4 </span> <br />
                    Механизированная <br />
                    штукатурная станция
                  </p>
                </div>
                <img
                  src="@/assets/images/agregat.jpg"
                  class="h-auto max-w-full"
                  alt=""
                />
              </div>
            </div>
            <div
              class="flex flex-col justify-center w-7/12 tab-mini-down:w-full tab-mini-down:mx-auto tab-land-down:pl-10 tab-mini-down:pl-0"
            >
              <h1
                class="text-4xl font-bold leading-none tab-land-down:text-3xl"
              >
                Выполняем черновую <br />отделку в два раза быстрее
              </h1>
              <p class="my-8 text-2xl font-light tab-land-down:text-xl">
                Внедрив механизированные технологии, мы улучшили качество работ
                и ускорили черновую отделку в два раза.
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="flex justify-center w-full py-4">
        <div class="w-100 ii-swiper-pagination" slot="pagination"></div>
      </div>
    </div>

    <div class="tab-mini-down:hidden">
      <div class="flex pt-4 tab-mini-down:flex-col">
        <div
          class="flex flex-col justify-center w-5/12 -mt-10 tab-mini-down:w-full tab-mini-down:mx-auto tab-land-down:w-6/12"
        >
          <h1 class="leading-none heading-5 tab-land-down:text-3xl">
            Считаем смету <br class="tab-land-down:hidden" />
            за 30 мин
          </h1>
          <p class="my-8 text-justify simple-text tab-land-down:text-xl">
            Инновационное решение от компании «Авальремонт» — расчет точной
            сметы на работы и черновые материалы прямо во время замера. Всего 30
            минут — и смета готова!
          </p>
          <a href="#" class="text-blue-500">Узнать больше →</a>
        </div>
        <div
          class="w-7/12 tab-mini-down:w-2/3 tab-mini-down:mt-4 tab-mini-down:mx-auto tab-land-down:w-6/12"
        >
          <img src="@/assets/images/huge-ipad.png" alt="" />
        </div>
      </div>
      <div class="flex tab-mini-down:flex-col-reverse">
        <div class="w-5/12 tab-mini-down:w-2/3 tab-mini-down:mx-auto">
          <div class="relative">
            <div
              class="absolute top-0 right-0 mr-10 tab-mini-down:mr-0 tab-land-down:mr-0"
            >
              <p class="text-lg font-light tab-land-down:text-base">
                <span class="font-semibold">PFT G4 </span> <br />
                Механизированная <br />
                штукатурная станция
              </p>
            </div>
            <img
              src="@/assets/images/agregat.jpg"
              class="h-auto max-w-full"
              alt=""
            />
          </div>
        </div>
        <div
          class="flex flex-col justify-center w-7/12 tab-mini-down:w-full tab-mini-down:mx-auto tab-land-down:pl-10 tab-mini-down:pl-0"
        >
          <h1 class="text-4xl font-bold leading-none tab-land-down:text-3xl">
            Выполняем черновую <br />отделку в два раза быстрее
          </h1>
          <p class="my-8 text-2xl font-light tab-land-down:text-xl">
            Внедрив механизированные технологии, мы улучшили качество работ и
            ускорили черновую отделку в два раза.
          </p>
        </div>
      </div>
    </div>
    <!--  -->
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
          el: '.ii-swiper-pagination',
          clickable: true,
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
</style>