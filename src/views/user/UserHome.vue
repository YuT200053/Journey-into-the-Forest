<template>
  <main>
    <VueLoading :active="isLoading" />
    <section class="banner img-box mb-6">
      <div class="container">
        <div class="text-center mb-5">
          <img src="/logo/logo.png" alt="漫途森旅" class="object-fit-cover mb-5 banner-logo" />
          <h3 class="fw-bold ls-2">
            享受無拘<span class="text-primary">漫遊之途</span>，浸入盎然<span class="text-primary"
              >森林</span
            >來場放慢身心的<span class="text-primary">旅程</span>
          </h3>
          <h5 class="fw-bold">Meander, Explore, Forest & Travel</h5>
        </div>

        <div class="row banner-list gy-3 mb-3">
          <div class="col-12 col-lg-4">
            <RouterLink to="/products" class="link-secondary text-center fs-3">
              <div class="img-box">
                <img src="/userHome/journey.png" alt="漫遊行程" />
                <div class="banner-list-text">漫 遊 行 程</div>
              </div>
            </RouterLink>
          </div>
          <div class="col-12 col-lg-4">
            <a href="#" class="link-secondary text-center fs-3">
              <div class="img-box">
                <img src="/userHome/ticket.png" alt="票券" />
                <div class="banner-list-text">票 券</div>
              </div>
            </a>
          </div>
          <div class="col-12 col-lg-4">
            <RouterLink to="/accommodations" class="link-secondary text-center fs-3">
              <div class="img-box">
                <img src="/userHome/accomidation.png" alt="住宿" />
                <div class="banner-list-text">園 內 住 宿</div>
              </div>
            </RouterLink>
          </div>
        </div>

        <div class="news p-5">
          <div>
            <h3 class="title mb-0">步道最新消息</h3>
            <span class="english fs-5 title">Trails News</span>
          </div>

          <div class="news-link my-4">
            <ul class="mb-0">
              <li
                class="news-list-li fs-7 ls-2 fw-normal mb-3"
                v-for="news in newsList"
                :key="news.TRAILID"
              >
                <div class="d-flex flex-column flex-lg-row align-items-start">
                  <div class="news-list-date english text-primary me-3 mb-1 mb-lg-0">
                    {{ news.ANN_DATE.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3') }}
                  </div>
                  <span class="badge rounded-pill bg-primary me-3 mb-1 mb-lg-0">
                    {{ news.TR_TYP }}
                  </span>
                  <div>
                    <span class="news-list-title fw-bold text-dark-green">
                      {{ news.TR_CNAME }}
                    </span>
                    <br />
                    <span class="news-list-content text-muted">
                      {{ news.TITLE }}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <RouterLink
            to="/news"
            class="read-more me-2 d-flex justify-content-end align-items-center"
          >
            <span class="pe-2 me-1 fs-7 ls-2 fw-normal">閱讀更多</span>
            <i class="read-more-icon bi bi-arrow-up-right-circle-fill"></i>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="journey pb-7 bg-secondary">
      <div class="journey-text">
        <Swiper
          :slidesPerView="'auto'"
          :allowTouchMove="false"
          :spaceBetween="0"
          :speed="80000"
          :loop="true"
          :autoplay="{ delay: 0, disableOnInteraction: false }"
          :modules="modules"
          class="journey-swiper fs-1 py-3 ls-5"
        >
          <SwiperSlide>
            在山林之中深呼吸．Take a deep breath in the forest．在山林之中深呼吸．
          </SwiperSlide>
          <SwiperSlide>
            Take a deep breath in the forest．在山林之中深呼吸．Take a deep breath in the forest．
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="mt-5 text-center">
        <h3 class="title mb-0">精選漫遊行程</h3>
        <span class="english fs-5 title">Top Picks Tours </span>
      </div>

      <div class="container">
        <div class="row g-3 my-4">
          <div class="col-12">
            <div class="card mb-3">
              <div class="row g-0">
                <RouterLink :to="`/products/${firstProduct.id}`" class="col-md-6 img-box">
                  <img
                    :src="firstProduct.imageUrl"
                    class="img-fluid rounded-start h-100 w-100 object-fit-cover"
                    :alt="firstProduct.title"
                  />
                </RouterLink>
                <div class="col-md-6">
                  <div class="card-body d-flex flex-column h-100">
                    <RouterLink :to="`/products/${firstProduct.id}`">
                      <h4 class="card-title fw-bold mb-0 link-dark-green bg-light-green">
                        {{ firstProduct.title }}
                      </h4>
                    </RouterLink>
                    <div class="p-3">
                      <span
                        class="badge rounded-pill bg-primary text-white me-1"
                        v-for="(category, index) in firstProduct.category
                          ? firstProduct.category.split(',')
                          : []"
                        :key="'category' + index"
                      >
                        {{ `#${category}` }}
                      </span>
                    </div>
                    <p class="card-text fw-normal link-gray px-3">
                      {{ firstProduct.description }}
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-end px-3 pb-4 flex-grow-1"
                    >
                      <div>
                        <del class="text-gray fs-7 fw-normal">
                          NT$
                          {{
                            firstProduct.origin_price
                              ? firstProduct.origin_price.toLocaleString('en-US')
                              : ''
                          }}
                          /位
                        </del>
                        <br />
                        <span class="text-danger fs-5">
                          NT$
                          {{ firstProduct.price ? firstProduct.price.toLocaleString('en-US') : '' }}
                          /位
                        </span>
                      </div>

                      <RouterLink
                        :to="`/products/${firstProduct.id}`"
                        class="read-more me-2 d-flex justify-content-end align-items-center"
                      >
                        <span class="me-1 fs-7 fw-normal ls-2">閱讀更多</span>
                        <i class="read-more-icon bi bi-arrow-up-right-circle-fill"></i>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6" v-for="product in products" :key="product.id">
            <div class="card mb-3">
              <div class="row g-0">
                <RouterLink :to="`/products/${product.id}`" class="col-md-6 img-box">
                  <img
                    :src="product.imageUrl"
                    class="img-fluid rounded-start h-100 w-100 object-fit-cover"
                    :alt="product.title"
                  />
                </RouterLink>
                <div class="col-md-6">
                  <div class="card-body d-flex flex-column h-100">
                    <RouterLink :to="`/products/${product.id}`">
                      <h4 class="card-title fw-bold mb-0 link-dark-green bg-light-green">
                        {{ product.title }}
                      </h4>
                    </RouterLink>
                    <div class="p-3">
                      <span
                        class="badge rounded-pill bg-primary text-white me-1"
                        v-for="(category, index) in product.category
                          ? product.category.split(',').slice(0, 3)
                          : []"
                        :key="'category' + index"
                      >
                        {{ `#${category}` }}
                      </span>
                    </div>
                    <p class="card-text fw-normal link-gray px-3">
                      {{ product.description }}
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-end px-3 pb-4 flex-grow-1"
                    >
                      <div>
                        <del class="text-gray fs-7 fw-normal">
                          NT$
                          {{
                            product.origin_price ? product.origin_price.toLocaleString('en-US') : ''
                          }}
                          /位
                        </del>
                        <br />
                        <span class="text-danger fs-5">
                          NT$
                          {{ product.price ? product.price.toLocaleString('en-US') : '' }} /位
                        </span>
                      </div>
                      <div>
                        <div class="text-end">
                          <RouterLink
                            :to="`/products/${product.id}`"
                            class="read-more me-2 d-flex justify-content-end align-items-center"
                          >
                            <span class="me-1 fs-7 fw-normal ls-2">閱讀更多</span>
                            <i class="read-more-icon bi bi-arrow-up-right-circle-fill"></i>
                          </RouterLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RouterLink
          to="/products"
          class="read-all link-dark-green text-center border-top border-bottom border-1 py-5 d-flex justify-content-center align-items-center fs-4 ls-5"
        >
          <span class="pe-2">更多行程</span>
          <i class="read-all-icon bi bi-arrow-up-right-circle-fill"></i>
        </RouterLink>
      </div>
    </section>

    <section class="area pb-8 bg-secondary">
      <div class="area-bg text-center">
        <div class="area-title">
          <h3 class="title mb-0 text-light-green">今天，你想去哪座森林？</h3>
          <span class="english fw-bold">Which forest do you want to go to today?</span>
        </div>
      </div>

      <Swiper
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :loop="true"
        :centeredSlides="true"
        :pagination="{
          clickable: true
        }"
        :navigation="true"
        :modules="modules"
        class="area-swiper"
      >
        <SwiperSlide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">阿里山<br />國家森林遊樂區</h4>
            <p class="fs-7 px-3 py-2 text-white mb-0">全年 24 小時開放</p>
          </a>
          <img src="/userHome/area_阿里山.jpg" alt="阿里山" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">太平山<br />國家森林遊樂區</h4>
            <p class="fs-7 px-3 py-2 text-white mb-0">平日 06:00-18:00<br />假日 04:00-18:00</p>
          </a>
          <img src="/userHome/area_太平山.jpg" alt="太平山" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">大雪山<br />國家森林遊樂區</h4>
            <p class="fs-7 px-3 py-2 text-white mb-0">每日 06:30-17:00</p>
          </a>
          <img src="/userHome/area_大雪山.jpg" alt="大雪山" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">內洞<br />國家森林遊樂區</h4>
            <p class="fs-7 px-3 py-2 text-white mb-0">平日 08:00-17:00<br />假日 07:00-17:00</p>
          </a>
          <img src="/userHome/area_內洞.jpg" alt="內洞" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">東眼山<br />國家森林遊樂區</h4>
            <p class="fs-7 px-3 py-2 text-white mb-0">平日 08:00-17:00<br />假日 07:00-17:00</p>
          </a>
          <img src="/userHome/area_東眼山.jpg" alt="東眼山" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">武陵<br />國家森林遊樂區</h4>
            <p class="fs-7 px-3 py-2 text-white mb-0">全年 24 小時開放<br />配合武陵農場</p>
          </a>
          <img src="/userHome/area_武陵.jpg" alt="武陵" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">奧萬大<br />國家森林遊樂區</h4>
            <p class="fs-7 px-3 py-2 text-white mb-0">每天 08:00-17:00</p>
          </a>
          <img src="/userHome/area_奧萬大.jpg" alt="奧萬大" />
        </SwiperSlide>
      </Swiper>

      <div class="container my-5">
        <a
          href="#"
          class="read-all link-dark-green text-center border-top border-bottom border-1 py-5 d-flex justify-content-center align-items-center fs-4 ls-5"
        >
          <span class="pe-2">所有森林</span>
          <i class="read-all-icon bi bi-arrow-up-right-circle-fill"></i>
        </a>
      </div>
    </section>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { toast } from '@/mixins/swalToast.js';
import newsStore from '@/stores/newsStore.js';
import { mapState, mapActions } from 'pinia';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    ...mapState(newsStore, ['news', 'isLoading'])
  },
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      firstProduct: {},
      products: [],
      isLoading: false,
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      },
      newsList: {}
    };
  },
  methods: {
    ...mapActions(newsStore, ['getNews'])
  },
  mounted() {
    const api = `${VITE_URL}/api/${VITE_PATH}/products`;
    this.isLoading = true;
    this.getNews();
    this.newsList = this.news.slice(0, 5);

    this.axios
      .get(api)
      .then((res) => {
        this.firstProduct = res.data.products.slice(0, 1)[0];
        this.products = res.data.products.slice(1, 3);
        this.isLoading = false;
      })
      .catch(() => {
        toast.fire({
          icon: 'error',
          title: '取得產品列表失敗。'
        });
      });
  }
};
</script>
@/mixins/swalToast.js
