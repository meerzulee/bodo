<template>
  <div class="remont-kvartir">
    <Header :data="vdata" house />
    <PriceCard />
    <!--  -->
    <div class="container mx-auto mt-8">
      <div class="flex flex-col">
        <h1 class="heading-5">Правильный ремонт квартир «под ключ» — это:</h1>
        <div class="flex mt-8">
          <!-- left -->
          <div class="flex flex-col w-7/12">
            <p class="small-light">
              Идеальный баланс между качеством проделанной работы,
              высокотехнологичными материалами и приемлемой ценой. <br />
              Возможно вы планируете просто освежить внешний вид квартиры, или
              хотите сделать бюджетную реставрацию помещения, наша компания
              снимет с вас хлопоты по организации процесса. Для каждого
              заказчика, наша команда специалистов создает уникальную VR
              визуализацию, которая учитывает все пожелания клиента.
            </p>
            <h3 class="mt-4 small-black">Преимущества дизайн-проекта:</h3>
            <ul class="text-xl font-light">
              <li
                class="flex items-center my-4"
                v-for="(y, index2) in textArr"
                :key="index2"
              >
                <svg
                  class="w-6 h-6 mr-2 text-green-600 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                  />
                </svg>
                {{ y }}
              </li>
            </ul>
            <!-- CTA -->
            <CTA />
          </div>
          <!-- right -->
          <div class="w-5/12 pl-10 -mt-4">
            <div class="flex items-center justify-between mb-2">
              <h3 class="small-black">Примеры дизайн проектов</h3>
              <!-- chevron -->
              <div class="flex">
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
            <div class="relative w-full">
              <div class="absolute inset-0 w-full h-full -z-10">
                <img
                  src="@/assets/images/pk1.jpg"
                  class="object-cover w-full h-full"
                  alt=""
                />
                <div class="absolute inset-0 w-full h-full bg-smoke"></div>
              </div>
              <div class="flex flex-col p-8 text-white">
                <h1 class="text-xl font-bold leading-tight">
                  Дизайн проект двухкомнатной квартиры в ЖК Кутузов GRAD
                </h1>
                <h3 class="my-3 mb-10 text-6xl font-bold">62 м<sup>2</sup></h3>
                <div class="mb-8">
                  <a
                    href="#"
                    class="px-4 py-3 pt-2 text-lg border border-white hover:text-gray-800 hover:bg-gray-300"
                    >Смотреть дизайн проект</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- agregat -->
        <div class="flex mt-20">
          <div class="w-5/12 tab-land-down:px-6">
            <div class="relative">
              <div class="absolute top-0 right-0 mr-10 tab-land-down:mr-0">
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
            class="flex flex-col justify-center w-7/12 px-20 tab-land-down:px-8"
          >
            <h1 class="big-text">Высокое качество работ</h1>
            <p class="my-8 descr">
              Компания Авальремонт активно использует высокотехнологичное
              оборудование в работе “под ключ” в Москве и подмосковье. Те услуги
              по ремонту, которые ранее проводились только вручную, теперь
              выполняются при помощи специального оборудования. Благодаря такому
              подходу черновая отделка помещения занимает вдвое меньше времени.
            </p>
          </div>
        </div>
        <!-- price -->
        <div class="flex mt-20">
          <div class="w-5/12">
            <div class="relative mt-20">
              <img
                src="@/assets/images/cards.jpg"
                class="h-auto max-w-full"
                alt=""
              />
            </div>
          </div>
          <div
            class="flex flex-col justify-center w-7/12 px-20 tab-land-down:px-8"
          >
            <h1 class="heading-5 tab-land-down:flex tab-land-down:flex-col">
              <span class="text-2xl"
                >Закупка чистовых материалов и мебели
              </span>
              <span>ПО ВЫГОДНЫМ ЦЕНАМ </span>
            </h1>
            <p class="my-6 descr">
              Мы давно и плодотворно сотрудничаем с большим количеством торговых
              марок чистовых материалов и мебели, поэтому закупаем все
              необходимое по выгодным ценам. Внедренная программа лояльности
              позволяет нашим клиентам сэкономить на закупке чистовых
              материалов.
            </p>
            <h3 class="mt-4 small-black">Преимущства карты лояльности:</h3>
            <ul class="mt-2 text-lg font-light">
              <li
                class="flex items-center my-2"
                v-for="(y, index2) in [
                  'Скидки у наших партнеров (более 100 популярных брендов)',
                  'Оперативная доставка и разгрузка',
                  'Личный менеджер',
                ]"
                :key="index2"
              >
                <svg
                  class="w-6 h-6 mr-2 text-green-600 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                  />
                </svg>
                {{ y }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-24">
          <div class="flex flex-col"></div>
          <h1 class="mb-8 big-text">«Почему мы?»</h1>
          <p class="descr">
            Авальремонт очень много времени и финансов уделяет повышению
            квалификации сотрудников. Мы постоянно инвестируем в обучение
            команды современным методам отделки квартиры и применению высоких
            технологий в ремонте. Это позволяет значительно повысить качество, а
            также сократить продолжительность работ.
          </p>
          <p class="my-4 descr">
            Одним из главных преимуществ заказа ремонта квартир “под ключ” -
            тщательная проработка дизайн-проекта. В нашей команде работают
            дизайнеры практики, которые создают реализуемые проекты, а не только
            “красивые картинки”. Высокое внимание уделяется деталям и
            функциональности пространства.
          </p>
          <p class="my-4 descr">
            Авальремонт минимизирует участие заказчика в ремонте квартиры “под
            ключ”. Мы берем на себя документальное сопровождение проекта,
            оформление справок в соответствующих инстанциях, самостоятельно
            закупаем строительные материалы и организовываем доставку.
          </p>
          <p class="mt-4 descr">
            Компания использует инновационные инженерные решения при прокладке
            коммуникаций. Например: вместо устаревших стальных и
            полипропиленовых труб, мы используем трубы из сшитого полиэтилена,
            немецкого бренда Rehau. Такая продукция позволяет минимизировать
            риск протечек, а также показывает более высокую износостойкость
            именно поэтому они широко распространены в Европе.
          </p>
          <h1 class="mt-12 mb-8 big-text">Этапы ремонта квартир «под ключ»</h1>
          <p class="descr">
            Сотрудничество с заказчиком, мы начинаем с разработки
            дизайн-проекта, сметы. Пожалуй, это самый важный момент, поскольку
            наша задача сделать не только красивый ремонт квартиры, но и
            функциональное, комфортное пространство. На основании визуализации
            намечается четкий план предстоящих работ, просчитываются затраты,
            устанавливаются сроки. В расчете указан индивидуальный прайс,
            который не меняется в процессе проведения работ. После проработки
            всех нюансов, деталей и учета пожеланий, подписывается официальный
            договор.
          </p>
          <p class="my-4 descr">
            Основной этап реставрации “под ключ” это замена коммуникаций:
            водоснабжения, электро разводки. Инженерные процедуры отвечают за
            комфорт и безопасность жилья. Также, проводятся черновые работы по
            выравниванию полов и стен. Монтаж потолка.
          </p>
          <p class="my-t descr">
            Чистовая отделка квартиры в Москве и области заключается в настиле
            пола, укладке плитки, покраске стен или поклейке обоев. На этом
            этапе вырисовывается конечный вид квартиры. Монтируются светильники,
            розетки, система “умный дом”. Последний шаг ремонта “под ключ” -
            генеральная уборка помещения после которой клиенту возвращаются
            ключи и выдается гарантия.
          </p>
          <h1 class="mt-12 mb-8 big-text">Сколько стоит ремонт?</h1>
          <p class="descr">
            Цена хорошей реставрации квартиры “под ключ” формируется на
            основании метража помещения, технических нюансов, качества
            материалов и пожеланий клиента. Стоимость стартует от 9000 руб за
            м2. с гарантией. После подписания договора прайс не меняется,
            дополнительных расходов в процессе ремонта не возникает. Поможет
            просчитать цену удобный калькулятор, который можно найти на сайте.
          </p>
        </div>
        <WorkMosaic />
        <div class="my-4">
          <FAQ />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import CTA from '@/components/Buttons/CTA'

import PriceCard from '@/components/PriceCard'
import WorkMosaic from '@/components/WorkMosaic'
import FAQ from '@/components/FAQ'

export default {
  components: { PriceCard, WorkMosaic, FAQ, Header, CTA },
  data() {
    return {
      textArr: [
        'Точный расчет стоимости ремонта, до его начала;',
        'Возможность создания не только красивого, но и практичного дома;',
        'Страхо вка от непредвиденных затрат в процессе ремонта;',
        'Исключение необдуманных решений при реставрации.',
      ],
      vdata: {
        heading: 'РЕМОНТ КВАРТИР «ПОД КЛЮЧ»',
        subheading: 'РЕМОНТ «ПОД КЛЮЧ» — ЭТО:',
        features: [
          'Дизайн–проект',
          'Закупка материалов',
          'Ремонт',
          'Соблюдение сроков',
        ],
        image: require('@/assets/images/bg-kvartir.png'),
      },
    }
  },
}
</script>

<style scoped>
</style>