<template>
  <div>
    <div
      class="flex flex-col w-full px-5 py-3 mx-4 mt-4 bg-solitude"
      v-for="(item, index) in data"
      :key="index"
    >
      <div
        class="flex items-center justify-between cursor-pointer"
        @click="toggleAcc(index)"
      >
        <p class="small-black">{{ item.title }}</p>
        <a>
          <svg
            v-if="!item.isActive"
            class="w-8 h-8"
            viewBox="0 0 40 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 42C8.97156 42 0 32.5799 0 21C0 9.42014 8.97156 0 20 0C31.0284 0 40 9.42014 40 21C40 32.5799 31.0284 42 20 42ZM20 2.625C10.35 2.625 2.5 10.8675 2.5 21C2.5 31.1325 10.35 39.375 20 39.375C29.65 39.375 37.5 31.1325 37.5 21C37.5 10.8675 29.65 2.625 20 2.625Z"
              fill="#3665db"
            />
            <path
              d="M28.75 22.3125H11.25C10.56 22.3125 10 21.7245 10 21C10 20.2755 10.56 19.6875 11.25 19.6875H28.75C29.44 19.6875 30 20.2755 30 21C30 21.7245 29.44 22.3125 28.75 22.3125Z"
              fill="#3665db"
            />
            <path
              d="M20 31.5C19.31 31.5 18.75 30.912 18.75 30.1875V11.8125C18.75 11.088 19.31 10.5 20 10.5C20.69 10.5 21.25 11.088 21.25 11.8125V30.1875C21.25 30.912 20.69 31.5 20 31.5Z"
              fill="#3665db"
            />
          </svg>
          <svg
            v-else
            class="w-8 h-8"
            viewBox="0 0 40 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 42C8.97156 42 0 32.5799 0 21C0 9.42014 8.97156 0 20 0C31.0284 0 40 9.42014 40 21C40 32.5799 31.0284 42 20 42ZM20 2.625C10.35 2.625 2.5 10.8675 2.5 21C2.5 31.1325 10.35 39.375 20 39.375C29.65 39.375 37.5 31.1325 37.5 21C37.5 10.8675 29.65 2.625 20 2.625Z"
              fill="#3665db"
            />
            <path
              d="M28.75 22.3125H11.25C10.56 22.3125 10 21.7245 10 21C10 20.2755 10.56 19.6875 11.25 19.6875H28.75C29.44 19.6875 30 20.2755 30 21C30 21.7245 29.44 22.3125 28.75 22.3125Z"
              fill="#3665db"
            />
          </svg>
        </a>
      </div>
      <transition-expand>
        <div v-if="item.isActive" class="mt-5 mr-4">
          <p class="">{{ item.value }}</p>
        </div>
      </transition-expand>
    </div>
  </div>
</template>
<script>
import { TransitionExpand } from 'vue-transition-expand'
import '@/assets/css/vue-transition-expand.css'

export default {
  components: {
    TransitionExpand,
  },
  props: ['data'],

  methods: {
    toggleAcc(index) {
      this.data.forEach((e, i) => {
        if (i != index) {
          e.isActive = false
        } else {
          e.isActive = !e.isActive
        }
      })
    },
  },
}
</script>