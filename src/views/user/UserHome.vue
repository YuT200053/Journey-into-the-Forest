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
            <h3 class="title mb-0">最新消息</h3>
            <span class="english fs-5 title">NEWS</span>
          </div>

          <div class="news-link my-4">
            <ul>
              <li>
                <a href="#" class="fs-7 ls-2 fw-normal d-flex flex-column flex-md-row mb-3">
                  <!-- sm 時分兩行，flex-shrink 保持本身大小 -->
                  <div
                    class="d-flex flex-shrink-0 justify-content-between news-link-date link-gray me-3"
                  >
                    <span class="english">2024.02.26</span>
                    <span class="fw-bold link-dark-green">公告</span>
                  </div>
                  <div class="news-link-text link-gray">
                    加里山登山步道大坪支線因修繕工程自 3 月 4 日起至 3 月 29
                    日暫時封閉，請山友提前改道或繞道通行
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="fs-7 ls-2 fw-normal d-flex flex-column flex-md-row mb-3">
                  <div
                    class="d-flex flex-shrink-0 justify-content-between news-link-date link-gray me-3"
                  >
                    <span class="english">2024.02.23</span>
                    <span class="fw-bold link-dark-green">活動</span>
                  </div>
                  <div class="news-link-text link-gray">
                    「林林盡致 / 山林有色-無牆展演系列二：烏來台車職人 & 旅人圖鑑」特展 歡迎前往參觀
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="fs-7 ls-2 fw-normal d-flex flex-column flex-md-row mb-3">
                  <div
                    class="d-flex flex-shrink-0 justify-content-between news-link-date link-gray me-3"
                  >
                    <span class="english">2024.02.23</span>
                    <span class="fw-bold link-dark-green">活動</span>
                  </div>
                  <div class="news-link-text link-gray">
                    迎接浪漫春日，大雪山霧社櫻盛放~
                    遊客中心試營運，快來文創賣店把森林精選好物帶回家！
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="fs-7 ls-2 fw-normal d-flex flex-column flex-md-row mb-3">
                  <div
                    class="d-flex flex-shrink-0 justify-content-between news-link-date link-gray me-3"
                  >
                    <span class="english">2024.02.22</span>
                    <span class="fw-bold link-dark-green">公告</span>
                  </div>
                  <div class="news-link-text link-gray">
                    大鹿林道 22K - 24.5K 自 113 年 2 月 17 日起實施交通管制
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="fs-7 ls-2 fw-normal d-flex flex-column flex-md-row mb-3">
                  <div
                    class="d-flex flex-shrink-0 justify-content-between news-link-date link-gray me-3"
                  >
                    <span class="english">2024.02.21</span>
                    <span class="fw-bold link-dark-green">公告</span>
                  </div>
                  <div class="news-link-text link-gray">
                    熱血志工照過來，步道手作等您來挽袖-林業及自然保育署新竹分署環境維護志工召募開始報名
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div class="text-end">
            <a href="#" class="read-more english link-primary me-2">
              <span class="pe-2">Read More </span>
              <i class="read-more-icon bi bi-arrow-up-right-circle-fill"></i>
            </a>
          </div>
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
                    <div class="card-tags p-3">
                      <a
                        href="#"
                        class="badge rounded-pill btn btn-primary text-white me-1"
                        v-for="(category, index) in firstProduct.category
                          ? firstProduct.category.split(',')
                          : []"
                        :key="'category' + index"
                      >
                        {{ `#${category}` }}
                      </a>
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
                      <div>
                        <div class="text-end">
                          <RouterLink
                            :to="`/products/${firstProduct.id}`"
                            class="read-more english link-primary me-4"
                          >
                            <span class="pe-2">Read More </span>
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
                    <div class="card-tags p-3">
                      <a
                        href="#"
                        class="badge rounded-pill btn btn-primary text-white me-1"
                        v-for="(category, index) in product.category
                          ? product.category.split(',').slice(0, 3)
                          : []"
                        :key="'category' + index"
                      >
                        {{ `#${category}` }}
                      </a>
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
                            class="read-more english link-primary me-4"
                          >
                            <span class="pe-2">Read More </span>
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
          class="read-all link-dark-green text-center border-top border-bottom border-1 py-5 d-block fs-4 ls-5"
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
        :centeredSlides="true"
        :spaceBetween="30"
        :grabCursor="true"
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
          class="read-all link-dark-green text-center border-top border-bottom border-1 py-5 d-block fs-4 ls-5"
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
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Autoplay],
      firstProduct: {},
      products: [],
      isLoading: false
    };
  },
  mounted() {
    const api = `${VITE_URL}/api/${VITE_PATH}/products`;
    this.isLoading = true;

    this.axios
      .get(api)
      .then((res) => {
        this.firstProduct = res.data.products.slice(0, 1)[0];
        this.products = res.data.products.slice(1, 3);
        this.isLoading = false;
      })
      .catch((err) => {
        alert(err.Response.data.message);
      });
  }
};
</script>
