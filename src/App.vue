<template>
  <div id="app">
    <div id="nav" class="relative flex flex-col">
      <div
        class="container items-center justify-between hidden w-full px-3 py-1 mx-auto bg-white tab-land:flex"
      >
        <div class="flex">
          <router-link to="/" class="nav-el">Bodo </router-link>
        </div>

        <div class="flex items-center">
          <div class="mt-1 mr-6 text-2xl font-bold">+7 (777) 420-69-69</div>
          <div class="flex items-center mr-4">
            <a href="#" class="mr-3">
              <img
                src="./assets/images/icons/telegram.png"
                class="w-full h-full"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="./assets/images/icons/whatsapp.png"
                class="w-full h-full"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div
        class="w-full py-2 text-white"
        :class="[
          $route.path === '/project11' ? ['bg-gray-600'] : ' bg-royal_blue',
        ]"
      >
        <div
          class="container flex items-center justify-between w-full h-full px-3 mx-auto tab-land:py-3"
        >
          <div class="flex">
            <router-link to="/" class="nav-el tab-land:hidden"
              >Bodo
            </router-link>
            <router-link to="/remont-kvartir" class="nav-el"
              >Ремонт квартир
            </router-link>
            <router-link to="/remont-domov" class="nav-el"
              >Ремонт домов
              <svg
                class=""
                style="width: 20px; height: 20px"
                viewBox="0 0 22 22"
              >
                <path
                  fill="currentColor"
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                /></svg
            ></router-link>
            <router-link to="/project" class="nav-el"
              >Портфолио
              <svg
                class=""
                style="width: 20px; height: 20px"
                viewBox="0 0 22 22"
              >
                <path
                  fill="currentColor"
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                /></svg
            ></router-link>
          </div>
          <div class="flex">
            <a href="#" class="nav-el">О компании </a>
            <a href="#" class="nav-el">Контакты </a>
            <a href="#" class="nav-el">Блог </a>
          </div>
          <div class="flex items-center tab-land:hidden">
            <div class="mt-1 mr-6 text-2xl font-bold">+7 (777) 420-69-69</div>
            <div class="flex items-center mr-4">
              <a href="#" class="mr-3">
                <img
                  src="./assets/images/icons/telegram.png"
                  class="w-full h-full"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="./assets/images/icons/whatsapp.png"
                  class="w-full h-full"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <!-- fff -->
    <div class="hidden py-10 text-white bg-dark tab-land-up:block">
      <div class="container mx-auto">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold">Хотите знать больше о ремонте?</h1>
          <h3 class="leading-normal">Напишите имя и номер телефона</h3>
          <div class="flex mt-6">
            <input
              type="text"
              class="px-4 py-2 mr-8 bg-white rounded-md"
              placeholder="Ваше имя"
              size="28"
            />
            <input
              type="text"
              class="px-4 py-2 mr-8 bg-white rounded-md"
              placeholder="Ваш номер телефона"
              size="28"
            />
            <button
              class="px-5 py-2 font-bold text-black rounded-md bg-d_tangerine"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex py-10 bg-darker">
      <div class="container flex w-full mx-auto text-white">
        <div class="flex flex-col w-1/4">
          <a href="#" class="footer-links">Ремонт квартир</a>
          <a href="#" class="footer-links">Ремонт домов</a>
        </div>
        <div class="flex flex-col w-1/4">
          <a href="#" class="footer-links">Портфолио ремонтов</a>
          <a href="#" class="footer-links">Блог</a>
        </div>
        <div class="flex flex-col w-1/4">
          <a href="#" class="footer-links">Контакты</a>
          <a href="#" class="footer-links">О компании</a>
        </div>
        <div class="flex flex-col w-1/4">
          <h3 class="font-semibold">Телефон</h3>
          <div class="flex">
            <a href="tel:+123123123" class="text-xl font-bold"
              >+1 (231) 23123</a
            >
            <a href="#" class="mx-3">
              <img
                src="./assets/images/icons/telegram.png"
                class="w-6 h-6"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="./assets/images/icons/whatsapp.png"
                class="w-6 h-6"
                alt=""
              />
            </a>
          </div>
          <a href="#" class="flex text-lg font-light underline"
            >Заказать звонок</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
