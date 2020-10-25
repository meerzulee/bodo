<template>
  <div class="header">
    <div class="relative pb-12">
      <!-- bg -->
      <div class="absolute inset-0 w-full h-full -z-10">
        <img :src="data.image" class="z-0 object-cover w-full h-full" alt="" />
        <div
          class="absolute inset-0 w-full h-full"
          :class="[project ? 'bg-gr' : 'bg-smoke']"
        ></div>
      </div>

      <div class="container pt-10 mx-auto text-white tab-land:px-8">
        <!-- content house -->
        <div v-if="house" class="flex flex-col">
          <h1 class="mt-20 heading-huge phone-down:text-5xl">
            {{ data.heading }}
          </h1>
          <!-- subheading & features -->
          <div
            class="flex flex-col justify-between w-1/2 mt-10 phone-down:w-full"
          >
            <div class="flex items-center">
              <p class="text-xl font-bold">{{ data.subheading }}</p>
            </div>
            <div class="flex flex-wrap mt-6">
              <div
                class="flex items-center w-1/2 mb-6"
                v-for="(item, index) in data.features"
                :key="index"
              >
                <img src="@/assets/images/check.png" class="w-6 h-6" alt="" />
                <p class="ml-3 text-lg font-thin">{{ item }}</p>
              </div>
            </div>
          </div>
          <!-- YellowButton -->
          <div class="flex flex-col pl-4 mt-10 border-l-4 border-white">
            <YellowButton />
          </div>
        </div>
        <!-- content houseType -->
        <div v-if="houseType" class="flex flex-col">
          <h1
            class="mt-20 heading-huge phone-down:text-5xl"
            v-html="data.heading"
          ></h1>
          <div class="flex flex-col justify-between w-2/3 mt-10">
            <div class="flex items-center">
              <p class="text-xl">{{ data.description }}</p>
            </div>
          </div>
          <!--  -->
          <div class="flex flex-col items-start mt-10">
            <div class="flex flex-col px-6 py-5 pr-32 bg-royal_blue">
              <h3 class="text-xl font-bold leading-none">
                от <span class="text-4xl">{{ data.price }}</span> сом/м<sup
                  >2</sup
                >
              </h3>
              <button
                class="px-5 py-4 mt-8 font-semibold text-black bg-d_tangerine"
              >
                Узнать точную стоимость
              </button>
              <div class="flex mt-8">
                <a href="tel:+996 223 120 120" class="text-lg font-bold"
                  >+996 223 120 120</a
                >

                <a href="#" class="mx-3">
                  <img
                    src="@/assets/images/icons/telegram.png"
                    class="w-6 h-6"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="@/assets/images/icons/whatsapp.png"
                    class="w-6 h-6"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- content project -->
        <div v-if="project" class="flex flex-col">
          <h1
            class="mt-20 heading-huge phone-down:text-5xl"
            v-html="data.heading"
          ></h1>

          <div
            class="flex flex-wrap justify-between w-3/4 mt-12 phone-down:w-full"
          >
            <div
              class="flex items-center w-1/2 my-3"
              v-for="(item, index) in data.info"
              :key="index"
            >
              <svg
                class="w-12 h-12"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-html="item.svg"
              ></svg>
              <p class="ml-2 text-2xl font-bold" v-html="item.text"></p>
            </div>
          </div>
          <!--  -->
          <div class="flex flex-col pl-4 mt-10 border-l-4 border-white">
            <div>
              <a href="#" class="w-auto px-4 pt-2 pb-3 border"
                >Смотреть все фото
              </a>
            </div>
            <ul class="mt-6 pr-top">
              <li v-for="(x, index) in links" :key="index">
                <a :href="`${$router.currentRoute.path}#${x.id}`">{{
                  x.title
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YellowButton from '@/components/Buttons/YellowButton.vue'
export default {
  props: {
    data: Object,
    house: Boolean,
    houseType: Boolean,
    project: Boolean,
    links: Array,
  },
  components: {
    YellowButton,
  },
}
</script>

<style lang="css" scoped>
</style>