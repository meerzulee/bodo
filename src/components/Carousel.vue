<template>
  <div class="overflow-hidden carousel">
    <div class="my-20">
      <div class="pt-12 pb-220 bg-solitude">
        <div class="relative z-0 container mx-auto">
          <!-- box -->
          <div class="z-20 px-12 py-10 mt-5 bg-white w-380">
            <h1 class="text-2xl font-bold leading-normal">
              Создаем уютные квартиры
            </h1>
            <p class="my-5 text-xl font-light leading-6">
              Посмотрите портфолио квартир, в которых мы недавно завершили
              ремонт.
            </p>
            <a href="#" class="text-blue-700">Смотреть портфолио →</a>
          </div>
          <div class="absolute left-0 w-full px-2 mt-6 -z-10 -top-1/2 ml-300">
            <a href="#">
              <img
                src="../assets/images/h1.jpg"
                class="w-11/12 max-h-670"
                alt=""
              />
              <!-- infobar -->
              <div
                class="absolute bottom-0 left-0 flex items-center h-16 mb-20 ml-24 font-semibold bg-gray-300 border-l-4 border-royal_blue"
              >
                <p class="flex items-center ml-10 mr-3">
                  Ремонт однокомнатной квартиры на ул. Сервантеса д.1 корп. 2
                  <svg class="w-8 h-8" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                    />
                  </svg>
                </p>
              </div>
            </a>
            <!-- chevron -->
            <div class="absolute bottom-0 left-0 flex mb-20 -ml-16">
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
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style >
</style>