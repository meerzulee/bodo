<template>
  <div class="standard">
    <Header :data="headerData" houseType />
    <div class="container py-24 mx-auto">
      <h1 class="text-4xl font-bold leading-none">
        Что входит в стоимость ремонта:
      </h1>
      <div class="flex mt-6">
        <div class="flex flex-col w-8/12">
          <div
            class="flex p-6"
            v-for="(item, index) in listArr"
            :key="index"
            :class="[index % 2 === 0 ? '' : 'bg-solitude']"
          >
            <div class="w-3/12">
              <h3 class="text-lg font-semibold">{{ item.title }}</h3>
            </div>
            <div class="w-9/12 pl-3">
              <ul class="mb-1 text-lg font-light">
                <li
                  class="mb-2"
                  v-for="(x, index) in item.array"
                  :key="index"
                  v-html="x"
                ></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-4/12"></div>
      </div>
      <!--  -->
    </div>
    <div class="relative w-full">
      <div class="absolute top-0 right-0 w-1/2 -mt-40">
        <img
          src="@/assets/images/stock2.jpg"
          class="object-contain w-full"
          alt=""
        />
      </div>
      <div class="flex flex-col container mx-auto">
        <div class="flex flex-col">
          <h1 class="mt-12 text-4xl font-bold leading-none">
            Что потребуется дополнительно?
          </h1>
          <div class="relative flex flex-col">
            <div class="flex flex-col w-1/2">
              <h1 class="mt-12 mb-2 text-4xl font-bold leading-none">
                Черновые материалы
              </h1>
              <p class="mt-6 text-lg font-light leading-tight">
                Наличие собственного склада позволяет производить закупки на
                прямую у производителей, что исключает возможность нарваться на
                поддельный материал.
              </p>
              <p class="mt-6 text-lg font-light leading-tight">
                А также наличие собственного грузового транспорта дает
                возможность оперативно осуществлять доставку на объекты и
                исключать простои в ремонтных работах.
              </p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="flex mt-56 mb-10">
          <div class="flex flex-col w-1/2">
            <h1 class="text-4xl font-bold leading-snug">
              <span class="text-2xl">Закупка чистовых материалов и мебели </span
              ><br />
              <span>ПО ВЫГОДНЫМ ЦЕНАМ </span>
            </h1>
            <p class="my-8 text-lg font-light leading-tight text-justify">
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
          <div class="w-1/2 pl-20">
            <div class="flex">
              <img
                src="@/assets/images/cards.jpg"
                class="w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
        <!--  -->
        <WorkMosaic class="mb-20" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import WorkMosaic from '@/components/WorkMosaic'
export default {
  components: {
    WorkMosaic,
    Header,
  },
  data() {
    return {
      listArr: [
        {
          title: 'Подготовительные работы',
          array: [
            '• Расчет точной сметы на работы на основании дизайн проекта',
            '• Расчет стоимости черновых и чистовых материалов',
            '• Утверждение графика производства работ',
            '• Заключение Договора',
          ],
        },
        {
          title: 'Черновые работы',
          array: [
            ' • Монтаж (замена) инженерных сетей (электрика, сантехника)',
            '• Возведение межкомнатных перегородок',
            '• Штукатурка стен и стяжка пола механизированным способом',
            '• Устройство гидроизоляции стен и пола в мокрых зонах <br/>(сан. узлы и кухня)',
          ],
        },
        {
          title: 'Чистовые работы',
          array: [
            '• Укладка напольной и настенной плитки',
            '• Подготовка стен под обои механизированным способом',
            '• Укладка напольного покрытия (ламинат, кварц винил, паркетная доска)',
            '• Оклейка стен обоями',
            '• Установка розеток, светильников и выключателей',
            '• Установка сантехнического оборудования',
          ],
        },
        {
          title: 'Менеджмент и  контроль качества',
          array: [
            '• Координация всех работ Руководителем проекта',
            '• Согласование всей необходимой документации <br> с управляющей компанией',
            '• Независимый контроль качества инженером <br> технического надзора',
            '• Авторский надзор',
          ],
        },
        {
          title: 'Подготовка к сдаче квартиры',
          array: [
            '• Генеральная уборка',
            '• Подписание закрывающих документов',
            '• Выдача гарантийного сертификата',
            '• Сдача ключей',
          ],
        },
      ],
      headerData: {
        heading: ` РЕМОНТ <br />
            «СТАНДАРТ»`,
        description: `  Ремонт квартиры по тарифу Стандарт является традиционным
                капитальным ремонтом «под ключ», где преимущественно
                используются недорогие материалы: обои, ламинат, натяжной
                потолок`,
        price: '9000',
        image: require('@/assets/images/bg-standard.png'),
      },
    }
  },
}
</script>

<style lang="scss" scoped>
</style>