<template>
  <div>
    <div class="flex flex-col mt-8" :id="`${data.id}`">
      <h4 class="mb-2 text-2xl font-medium">
        {{ data.title }}
      </h4>
      <!-- layout 1-->
      <div v-if="layout === 1" class="grid grid-cols-3 grid-rows-2 gap-4">
        <img
          :src="data.images[0]"
          class="col-span-3 row-span-2 gallery-frame"
          alt=""
        />
        <img
          :src="data.images[1]"
          class="col-span-1 col-start-1 row-span-1 gallery-frame"
          alt=""
        />
        <img
          :src="data.images[2]"
          class="col-span-2 col-start-2 row-span-2 gallery-frame"
          alt=""
        />
        <img
          :src="data.images[3]"
          class="col-span-1 col-start-1 row-span-1 gallery-frame"
          alt=""
        />
      </div>
      <!-- layout 2-->

      <div v-if="layout === 2" class="grid grid-cols-3 gap-4">
        <img
          :src="data.images[0]"
          class="object-cover w-full col-span-2 h-505"
          alt=""
        />
        <img
          :src="data.images[1]"
          class="object-cover object-left w-full h-full col-span-1"
          alt=""
        />
        <img
          :src="data.images[2]"
          class="object-cover w-full h-full col-span-1"
          alt=""
        />
        <img
          :src="data.images[3]"
          class="object-cover w-full col-span-2 h-505"
          alt=""
        />
      </div>
      <!-- layout 3 -->
      <div v-if="layout === 3" class="grid grid-cols-6 gap-4">
        <img :src="data.images[0]" class="col-span-3 gallery-frame" alt="" />
        <img :src="data.images[1]" class="col-span-3 gallery-frame" alt="" />
        <img :src="data.images[2]" class="col-span-4 gallery-frame" alt="" />
        <img :src="data.images[3]" class="col-span-2 gallery-frame" alt="" />
      </div>
      <!-- layout 4 -->
      <div v-if="layout === 4" class="grid grid-cols-3 grid-rows-2 gap-4">
        <img
          :src="data.images[0]"
          class="col-span-2 col-start-1 row-span-2 gallery-frame"
          alt=""
        />
        <img
          :src="data.images[1]"
          class="col-span-1 col-start-3 row-span-1 gallery-frame"
          alt=""
        />
        <img
          :src="data.images[2]"
          class="col-span-1 col-start-3 row-span-1 gallery-frame"
          alt=""
        />
      </div>
      <!-- layout 5 -->
      <div v-if="layout === 5" class="grid grid-cols-3 gap-4">
        <img
          v-for="(x, index) in 3"
          :key="index"
          :src="data.images[index]"
          class="col-span-1 gallery-frame"
          alt=""
        />
      </div>
      <!-- layout 6 -->
      <div v-if="layout === 6" class="grid grid-cols-2 gap-4">
        <img
          v-for="(x, index) in 2"
          :key="index"
          :src="data.images[index]"
          class="col-span-1 gallery-frame"
          alt=""
        />
      </div>
      <!-- layout 7 -->
      <div v-if="layout === 7" class="grid grid-cols-3 gap-4">
        <img
          v-for="(x, index) in 3"
          :key="index"
          :src="data.images[index]"
          class="col-span-1 gallery-frame"
          alt=""
        />
        <img
          :src="data.images[3]"
          class="object-cover object-bottom w-full col-span-3 max-h-670"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
// WARNING: height should be max 724px
//layout1 3/3  -    |l2 2/3 1/3   |l3 1/2 1/2   |l4 2/3 1/3   |l5 1/3 1/3 1/3
//        1/3 2/3   |   1/3 2/3   |   2/3 1/3   |    -  1/3   |l6 1/2 1/2
//        1/3  -
// |l7 1/3 1/3 1/3
//      3/3

export default {
  props: {
    data: {
      type: Object,
    },
    layout: Number,
  },
}
</script>

<style >
</style>