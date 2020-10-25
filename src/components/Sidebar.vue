<template>
  <div class="sidebar">
    <!-- button -->
    <div
      class="fixed top-0 right-0 flex items-center justify-center w-16 h-16 p-3 m-5 border rounded-full shadow-md cursor-pointer bg-solitude sidebar-overlay"
      @click="open()"
    >
      <transition name="fade">
        <svg class="w-12 h-12" viewBox="0 0 24 24">
          <path
            v-if="!isActive"
            fill="currentColor"
            d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
          />
          <path
            v-else
            fill="currentColor"
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          />
        </svg>
      </transition>
    </div>

    <!-- menu -->
    <transition name="slide">
      <div
        v-if="isActive"
        class="w-full h-screen"
        @click="isActive = !isActive"
      >
        <div
          v-if="isActive"
          class="absolute top-0 left-0 flex flex-col h-screen bg-darker sidebar-overlay w-300"
        >
          <router-link to="/" class="">
            <div
              class="flex items-center w-full p-4 text-2xl text-white bg-gray-600 border-l-4 border-royal_blue"
            >
              Bodo
            </div></router-link
          >

          <router-link
            :to="item.url"
            v-for="(item, index) in navList"
            :key="index"
          >
            <div
              class="flex items-center w-full p-3 mt-1 text-xl text-white bg-gray-600 border-l-4 border-royal_blue"
            >
              {{ item.title }}
            </div>
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      navList: [
        { title: 'Ремонт Квартир', url: '/remont-kvartir' },
        { title: 'Ремонт Домов', url: '/remont-domov' },
        { title: 'Проекты', url: '/project' },
      ],
    }
  },
  methods: {
    open() {
      this.isActive = !this.isActive
    },
  },
}
</script>
<style >
.sidebar-overlay {
  z-index: 99999;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>