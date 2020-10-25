<template>
  <div class="authorsWords">
    <div class="flex items-start justify-between tab-mini-down:flex-col">
      <div class="flex flex-col w-7/12 tab-mini-down:w-full">
        <img src="@/assets/images/icons/quote.png" class="w-16" alt="" />
        <!-- <div class="w-full h-full bg-yellow-600"></div> -->
        <div :class="[tshow ? 'overflow-hidden max-h-432' : ' ']">
          <p
            class="mt-4 text-xl font-light phone-down:mt-2"
            v-html="data.text"
          ></p>
        </div>
        <a
          @click="
            {
              tshow = !tshow
            }
          "
          class="mt-2 text-blue-500 underline cursor-pointer"
          >{{ tshow ? 'Показать еще' : 'Скрыть' }}</a
        >
      </div>
      <div
        class="flex flex-col items-center w-4/12 mt-20 mr-8 phone-down:w-3/4 tab-mini-down:w-1/2 tab-mini-down:mx-auto tab-mini-down:mt-10"
      >
        <img :src="data.author.avatar" class="w-full px-20" alt="" />
        <h1 class="text-3xl font-bold text-center tab-mini-down:mt-4">
          {{ data.author.name }} <br class="tab-mini-down:hidden" />
          {{ data.author.lastname }}
        </h1>
        <h3 class="text-3xl">{{ data.author.job }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      tshow: true,
    }
  },
}
</script>

<style ></style>
