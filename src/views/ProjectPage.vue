<template>
  <div class="project-page">
    <div class="relative pb-12">
      <!-- bg -->
      <div class="absolute inset-0 w-full h-full -z-10">
        <img
          src="../assets/images/r1.jpg"
          class="z-0 object-cover w-full h-full"
          alt=""
        />
        <div class="absolute inset-0 w-full h-full bg-gr"></div>
      </div>

      <div class="max-w-6xl pt-10 mx-auto text-white">
        <!-- #TODO: navigation-->
        <div class="flex flex-col">
          <h1 class="mt-20 heading-huge">
            Дизайн проект <br />
            двухкомнатной квартиры в <br />
            ЖК Кутузов GRAD
          </h1>

          <div class="flex flex-wrap justify-between w-3/4 mt-12">
            <div
              class="flex items-center w-1/2 my-3"
              v-for="(item, index) in info"
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
              <li><a href="#">Кухня</a></li>
              <li><a href="#">Гостиная</a></li>
              <li><a href="#">Спальня</a></li>
              <li><a href="#">Ванная</a></li>
              <li><a href="#">Туалет</a></li>
              <li><a href="#">Прихожая</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--  -->

    <div class="max-w-6xl mx-auto my-20">
      <div class="flex items-start justify-between">
        <div class="flex flex-col w-7/12">
          <img src="../assets/images/icons/quote.png" class="w-16" alt="" />
          <p class="mt-4 text-xl font-light">
            Этот интерьер создавался для жизнерадостной и энергичной дамы,
            возрастом около 40 лет. Заказчица хотела «воздушный интерьер»,
            легкий и не привязанный ко времени. Ей необходима была «свобода
            выбора», чтобы по настроению менять интерьер с помощью мебели,
            декора и текстиля. При первой встрече мы долго обсуждали и
            рассматривали возможные варианты дизайна будущей квартиры и
            остановились на современной стилистике минимализма с акцентом на
            лаконичность «чистого» пространства и натуральные материалы. Этот
            интерьер создавался как «чистый лист» на котором, заказчица смогла
            бы отражать себя, привнося и убирая по настроению. Выбранное
            направление минимализма удачно совмещается в себе «универсальность
            времени» и чистоту восприятия. В итоге было принято решение сделать
            объединенное пространство гостиной, отделенное от коридора и
            прихожей реечной перегородкой,
            <span :class="[tshow ? 'inline' : 'hidden']"
              >плавно перетекающее в просторную зону кухни-столовой. Зону кухни
              с мягким пудровым оттенком кухонного гарнитура, выделили необычной
              раскладкой плитки формы «шеврон», причем эту форму сделали
              частично и для инженерной доски. Лоджия используется как зона для
              медитаций – здесь расположено кресло-качался и биокамин. В
              санузлах в качестве акцента выступает плитка с рисунком мрамора,
              которую мягко совместили с серо-розовыми компаньонами. В спальне
              разместили большой и вместительный зеркальный шкаф в форме
              трапеции, а мягкую атмосферу создает карнизная подсветка,
              выявляющая перелив декоративной покраски.</span
            ><br />
            <a
              @click="
                {
                  tshow = !tshow
                }
              "
              class="text-blue-500 underline cursor-pointer"
              >{{ tshow ? 'Скрыть' : 'Показать еще' }}</a
            >
          </p>
        </div>
        <div class="flex flex-col items-center w-4/12 mt-20">
          <img src="../assets/images/girl.png" class="w-full px-20" alt="" />
          <h1 class="text-3xl font-bold text-center">
            Маргарита <br />
            Ветрюк
          </h1>
          <h3 class="text-3xl">Дизайнер проекта</h3>
        </div>
      </div>
      <!-- kitchen -->
      <div class="flex flex-col mt-20" id="#kitchen">
        <h4 class="mb-2 text-2xl font-medium">Кухня</h4>
        <div class="grid grid-cols-2 gap-4">
          <img
            src="../assets/images/pk1.jpg"
            class="w-full h-auto col-span-1"
            alt=""
          />
          <img
            src="../assets/images/pk2.jpg"
            class="w-full h-auto col-span-1"
            alt=""
          />
        </div>
      </div>
      <!-- living room -->
      <div class="flex flex-col mt-20" id="#livingroom">
        <h4 class="mb-2 text-2xl font-medium">Гостиная</h4>
        <div class="grid grid-cols-3 grid-rows-2 gap-4">
          <img
            src="../assets/images/pl1.jpg"
            class="w-full h-auto col-span-3 row-span-2"
            alt=""
          />
          <img
            src="../assets/images/pl2.jpg"
            class="w-full h-auto col-span-1 col-start-1 row-span-1"
            alt=""
          />
          <img
            src="../assets/images/pl4.jpg"
            class="w-full h-auto col-span-2 col-start-2 row-span-2"
            alt=""
          />
          <img
            src="../assets/images/pl3.jpg"
            class="w-full h-auto col-span-1 col-start-1 row-span-1"
            alt=""
          />
        </div>
      </div>
      <!-- bed room -->
      <div class="flex flex-col mt-20" id="#bedroom">
        <h4 class="mb-2 text-2xl font-medium">Спальня</h4>
        <div class="grid grid-cols-3 gap-4">
          <img
            src="../assets/images/ps1.jpg"
            class="w-full h-auto col-span-1"
            alt=""
          />
          <img
            src="../assets/images/ps2.jpg"
            class="flex-grow w-full h-auto col-span-1"
            alt=""
          />
          <img
            src="../assets/images/ps3.jpg"
            class="w-full h-auto col-span-1"
            alt=""
          />
          <img
            src="../assets/images/ps4.jpg"
            class="object-cover object-bottom w-full col-span-3 max-h-670"
            alt=""
          />
        </div>
      </div>
      <!-- bath room -->
      <div class="flex flex-col mt-20" id="#bedroom">
        <h4 class="mb-2 text-2xl font-medium">Ванная</h4>
        <div class="grid grid-cols-3 gap-4">
          <img
            src="../assets/images/pb1.jpg"
            class="w-full h-auto col-span-1"
            alt=""
          />
          <img
            src="../assets/images/pb2.jpg"
            class="w-full h-auto col-span-1"
            alt=""
          />
          <img
            src="../assets/images/pb3.jpg"
            class="w-full h-auto col-span-1"
            alt=""
          />
        </div>
      </div>
      <!-- toilet -->
      <div class="flex flex-col mt-20" id="#bedroom">
        <h4 class="mb-2 text-2xl font-medium">Туалет</h4>
        <div class="grid grid-cols-3 gap-4">
          <img
            src="../assets/images/pt1.jpg"
            class="w-full h-auto col-span-1"
            alt=""
          />
          <img
            src="../assets/images/pt2.jpg"
            class="w-full h-auto col-span-1"
            alt=""
          />
        </div>
      </div>
      <!-- hallway -->
      <div class="flex flex-col mt-20" id="#bedroom">
        <h4 class="mb-2 text-2xl font-medium">Прихожая</h4>
        <div class="grid grid-cols-3 gap-4">
          <img
            src="../assets/images/pc1.jpg"
            class="object-cover w-full col-span-2 h-505"
            alt=""
          />
          <img
            src="../assets/images/pc2.jpg"
            class="object-cover object-left w-full h-full col-span-1"
            alt=""
          />
          <img
            src="../assets/images/pc3.jpg"
            class="object-cover w-full h-full col-span-1"
            alt=""
          />
          <img
            src="../assets/images/pc4.jpg"
            class="object-cover w-full col-span-2 h-505"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tshow: false,
      info: [
        {
          svg: `<g clip-path="url(#clip0)">
<path d="M18.6206 8.1084C16.013 8.1084 13.8906 10.2308 13.8906 12.8384C13.8906 15.446 16.013 17.5684 18.6206 17.5684C21.2282 17.5684 23.3506 15.446 23.3506 12.8384C23.3506 10.2308 21.2282 8.1084 18.6206 8.1084ZM18.6206 16.217C16.7577 16.217 15.2421 14.7013 15.2421 12.8384C15.2421 10.9754 16.7577 9.45982 18.6206 9.45982C20.4836 9.45982 21.9992 10.9754 21.9992 12.8384C21.9992 14.7013 20.4836 16.217 18.6206 16.217Z" fill="white" stroke="white"/>
<path d="M27.6636 3.79548C25.2162 1.34805 21.962 0 18.501 0C15.0393 0 11.7858 1.34805 9.33832 3.79548C4.80902 8.32411 4.24615 16.8448 8.11934 22.0073L18.501 37L28.8671 22.0282C32.7558 16.8448 32.1929 8.32411 27.6636 3.79548ZM27.7711 21.2383L18.501 34.6255L9.21602 21.2174C5.70299 16.5333 6.20639 8.83832 10.2945 4.75094C12.4865 2.55892 15.4008 1.35143 18.501 1.35143C21.6012 1.35143 24.5155 2.55892 26.7082 4.75094C30.7963 8.83832 31.2997 16.5333 27.7711 21.2383Z" fill="white" stroke="white"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="37" height="37" fill="white"/>
</clipPath>
</defs>`,
          text: 'Рябиновая д.3 корп. 3',
        },
        {
          svg: `<path d="M0 48H50V50H0V48Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 2H4V48H19V2ZM2 0V50H21V0H2Z" fill="white"/>
<path d="M2 45H11V46H2V45Z" fill="white"/>
<path d="M19 45H26V46H19V45Z" fill="white"/>
<path d="M30 45H35V46H30V45Z" fill="white"/>
<path d="M30 41H35V42H30V41Z" fill="white"/>
<path d="M30 37H35V38H30V37Z" fill="white"/>
<path d="M30 33H35V34H30V33Z" fill="white"/>
<path d="M30 29H35V30H30V29Z" fill="white"/>
<path d="M30 25H35V26H30V25Z" fill="white"/>
<path d="M19 41H26V42H19V41Z" fill="white"/>
<path d="M19 37H26V38H19V37Z" fill="white"/>
<path d="M19 33H26V34H19V33Z" fill="white"/>
<path d="M19 29H26V30H19V29Z" fill="white"/>
<path d="M19 25H26V26H19V25Z" fill="white"/>
<path d="M19 21H26V22H19V21Z" fill="white"/>
<path d="M19 17H26V18H19V17Z" fill="white"/>
<path d="M2 41H11V42H2V41Z" fill="white"/>
<path d="M2 37H11V38H2V37Z" fill="white"/>
<path d="M2 33H11V34H2V33Z" fill="white"/>
<path d="M2 29H11V30H2V29Z" fill="white"/>
<path d="M2 25H11V26H2V25Z" fill="white"/>
<path d="M2 21H11V22H2V21Z" fill="white"/>
<path d="M2 17H11V18H2V17Z" fill="white"/>
<path d="M2 13H11V14H2V13Z" fill="white"/>
<path d="M2 9H11V10H2V9Z" fill="white"/>
<path d="M2 5H11V6H2V5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 10V50H32V14L19 10ZM21 12.7079V48H30V15.4771L21 12.7079Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 18V50H39V22L30 18ZM32 21.0775V48H37V23.2997L32 21.0775Z" fill="white"/>
<path d="M44 43H46V50H44V43Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45 43C45.7112 43 47 42.0964 47 40C47 37.9036 45.7112 37 45 37C44.2888 37 43 37.9036 43 40C43 42.0964 44.2888 43 45 43ZM45 45C47.2091 45 49 42.7614 49 40C49 37.2386 47.2091 35 45 35C42.7909 35 41 37.2386 41 40C41 42.7614 42.7909 45 45 45Z" fill="white"/>
`,
          text: 'Квартира',
        },
        {
          svg: `<g clip-path="url(#clip0)">
<rect y="46" width="4" height="2" fill="white"/>
<rect x="6" y="6" width="4" height="2" transform="rotate(-90 6 6)" fill="white"/>
<rect x="6" y="5" width="2" height="44" transform="rotate(-90 6 5)" fill="white"/>
<rect x="48" y="6" width="4" height="2" transform="rotate(-90 48 6)" fill="white"/>
<rect y="8" width="4" height="2" fill="white"/>
<rect x="1" y="8" width="2" height="39" fill="white"/>
<path d="M36 39V47H7V9H49V38H37H36V39Z" stroke="white" stroke-width="2"/>
<path d="M22 22L25 27V30H24L22 27V31H19V22H22Z" fill="white"/>
<path d="M27 22L24 27V30H25L27 27V31H30V22H27Z" fill="white"/>
<path d="M37 25.2409V27H31.3718V25.6106L34.0775 22.8655C34.3391 22.5966 34.5146 22.3688 34.6041 22.1821C34.6936 21.9879 34.7384 21.7937 34.7384 21.5994C34.7384 21.3455 34.6592 21.1475 34.5009 21.0056C34.3425 20.8637 34.1119 20.7927 33.8089 20.7927C33.5404 20.7927 33.2926 20.8599 33.0654 20.9944C32.8451 21.1214 32.6627 21.3081 32.5181 21.5546L31 20.6359C31.2823 20.1279 31.6781 19.7283 32.1876 19.437C32.6971 19.1457 33.2995 19 33.9948 19C34.5456 19 35.031 19.0971 35.4509 19.2913C35.8778 19.4855 36.2083 19.7656 36.4423 20.1317C36.6833 20.4902 36.8038 20.9085 36.8038 21.3866C36.8038 21.8123 36.7177 22.2157 36.5456 22.5966C36.3804 22.9701 36.0568 23.3959 35.5749 23.8739L34.2117 25.2409H37Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0">
<path d="M0 0H50V50H0V0Z" fill="white"/>
</clipPath>
</defs>`,
          text: '62 м&sup2;',
        },
        {
          svg: `<path d="M44 29.5C44 39.7173 35.7173 48 25.5 48C21.8957 48 18.5321 46.9692 15.6879 45.1864C15.2748 44.9274 14.7343 44.9738 14.3895 45.3186C13.9494 45.7587 14.0081 46.4899 14.5337 46.8233C17.705 48.8351 21.4664 50 25.5 50C36.8218 50 46 40.8218 46 29.5C46 18.1782 36.8218 9 25.5 9C18.9137 9 13.0528 12.1061 9.30225 16.9333C8.97408 17.3557 9.06741 17.9599 9.49138 18.286C9.94253 18.633 10.5902 18.5311 10.9417 18.0835C14.3287 13.7705 19.5908 11 25.5 11C35.7173 11 44 19.2827 44 29.5Z" fill="white"/>
<path d="M5.12916 27.1859C5.20353 26.524 5.92533 26.1593 6.53096 26.4367C6.94219 26.625 7.15465 27.0544 7.10641 27.5041C7.03608 28.1598 7 28.8257 7 29.5C7 31.8467 7.43694 34.0914 8.2339 36.157C8.38431 36.5469 8.30124 36.9916 8.00577 37.2871C7.50723 37.7857 6.66632 37.6399 6.40884 36.9835C5.49937 34.6652 5 32.1409 5 29.5C5 28.7176 5.04383 27.9455 5.12916 27.1859Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.7071 18.304C38.0976 18.7094 38.0976 19.3666 37.7071 19.772L24 34L17.2929 27.038C16.9024 26.6326 16.9024 25.9754 17.2929 25.57C17.6834 25.1647 18.3166 25.1647 18.7071 25.57L24 31.0641L36.2929 18.304C36.6834 17.8987 37.3166 17.8987 37.7071 18.304Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6991 5.46957C17.7048 5.03855 18.8702 5.49571 19.3146 6.49558L20.9138 10.0939L19.0862 10.9061L17.487 7.30786L15.8687 8.00138L17.3944 11.0528L15.6056 11.9472L14.0799 8.89581C13.5652 7.86655 14.0232 6.61639 15.0809 6.16309L16.6991 5.46957Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.5858 12.0001C41.3668 11.219 42.6332 11.219 43.4142 12.0001L44.5 13.0859C45.281 13.8669 45.281 15.1333 44.5 15.9143L42.2071 18.2072L40.7929 16.793L43.0858 14.5001L42 13.4143L39.7071 15.7072L38.2929 14.293L40.5858 12.0001Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.2649 7.17377L29.8712 6.62705L29.2562 9.31959L31.6499 9.8663L32.2649 7.17377ZM28.3667 4.23193L26.8611 10.824L33.1544 12.2614L34.66 5.66931L28.3667 4.23193Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.2559 3.91751L28.5904 2.39512L28.1806 4.18956L34.8461 5.71194L35.2559 3.91751ZM27.0859 0L25.7854 5.69402L36.3505 8.10706L37.651 2.41304L27.0859 0Z" fill="white"/>
<path d="M3 42C3 41.4477 3.44772 41 4 41H10C10.5523 41 11 41.4477 11 42C11 42.5523 10.5523 43 10 43H4C3.44772 43 3 42.5523 3 42Z" fill="white"/>
<path d="M0 21C0 20.4477 0.447715 20 1 20H7C7.55228 20 8 20.4477 8 21C8 21.5523 7.55228 22 7 22H1C0.447715 22 0 21.5523 0 21Z" fill="white"/>
<path d="M3 12C3 11.4477 3.44772 11 4 11H9C9.55228 11 10 11.4477 10 12C10 12.5523 9.55228 13 9 13H4C3.44772 13 3 12.5523 3 12Z" fill="white"/>
<path d="M40.2147 23.2182C40.2147 23.2181 40.2149 23.218 40.2151 23.2178C41.6662 26.6166 41.8978 30.4187 40.861 33.9766C39.7774 37.6948 37.382 40.8937 34.1192 42.98C30.8563 45.0663 26.9475 45.8983 23.1178 45.3217C19.2881 44.7451 15.7975 42.799 13.2937 39.8444C10.7898 36.8898 9.44255 33.1273 9.50188 29.2549C9.56121 25.3825 11.0231 21.6631 13.6163 18.7866C16.2095 15.9101 19.758 14.0719 23.6036 13.6128C27.2833 13.1736 30.996 14.0257 34.1108 16.0147C34.1105 16.0149 34.1104 16.0149 34.1103 16.015C34.1097 16.0154 34.108 16.0163 34.1051 16.0169C34.0989 16.018 34.0919 16.017 34.0851 16.0127C30.9767 14.034 27.2745 13.1868 23.605 13.6249C19.7624 14.0835 16.2165 15.9204 13.6253 18.7947C11.034 21.669 9.57329 25.3857 9.514 29.2551C9.45472 33.1246 10.8009 36.8842 13.3029 39.8365C15.8049 42.7889 19.2928 44.7335 23.1196 45.3097C26.9464 45.8859 30.8522 45.0545 34.1126 42.9698C37.373 40.8851 39.7666 37.6886 40.8494 33.9732C41.8833 30.4253 41.6549 26.6343 40.2128 23.2434C40.2096 23.2359 40.2098 23.2289 40.212 23.223C40.2124 23.2219 40.2128 23.221 40.2132 23.2203C40.2138 23.2192 40.2144 23.2185 40.2147 23.2182Z" stroke="white"/>
`,
          text: '53 дня',
        },
        {
          svg: `<g clip-path="url(#clip0)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31 42H34V46H46V25H34V30H31V24H19V22H31V4H4V22H8V24H4V46H31V42ZM30 45V41H35V45H45V26H35V31H30V25H18V21H30V5H5V21H9V25H5V45H30Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45 29H41V42H45V29ZM40 28V43H46V28H40Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 8H27V18H30V8ZM26 7V19H31V7H26Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 43H8V45H22V43ZM7 42V46H23V42H7Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 38H9V42H11V38ZM8 37V43H12V37H8Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 38H19V42H21V38ZM18 37V43H22V37H18Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 40H12V42H18V40ZM11 39V43H19V39H11Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 5H8V16H19V5ZM7 4V17H20V4H7Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 5H8V8H19V5ZM7 4V9H20V4H7Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5H8V8H13V5ZM7 4V9H14V4H7Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1464 29.8536L8.14642 24.8536L8.85353 24.1465L13.8535 29.1465L13.1464 29.8536Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9069 34.2095L30.9069 41.2095L30.0931 41.7907L25.0931 34.7907L25.9069 34.2095Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 23V2H1.98233C1.9172 10.2388 1.91863 21.626 1.93779 31.246C1.94816 36.4528 1.96371 41.1391 1.97667 44.5236C1.98203 45.9236 1.98695 47.1008 1.99087 48H48V23H33ZM50 21V50H1.80826e-05C1.80826e-05 50 -0.165916 16.6667 1.80826e-05 0H35V21H50Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0">
<path d="M0 0H50V50H0V0Z" fill="white"/>
</clipPath>
</defs>`,
          text: '2 комнаты',
        },
        {
          svg: `<circle cx="33.5" cy="33.5" r="15.5" stroke="white" stroke-width="2"/>
<circle cx="16.5" cy="33.5" r="15.5" stroke="white" stroke-width="2"/>
<circle cx="25" cy="17" r="16" stroke="white" stroke-width="2"/>
`,
          text: 'Современный',
        },
      ],
    }
  },
}
</script>

<style lang="css" >
</style>