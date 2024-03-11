<template>
  <main>
    <!-- banner & news -->
    <section class="banner img-box mb-6">
      <div class="container">
        <!-- logo & slogan -->
        <div class="text-center mb-5">
          <img src="/logo/logo.png" alt="漫途森旅" class="object-fit-cover mb-5 banner-logo" />
          <h3 class="fw-bold ls-2">
            享受無拘<span class="text-primary">漫遊之途</span>，浸入盎然<span class="text-primary"
              >森林</span
            >來場放慢身心的<span class="text-primary">旅程</span>
          </h3>
          <h5 class="fw-bold">Meander, Explore, Forest & Travel</h5>
        </div>
        <!-- link -->
        <div class="row banner-list gy-3 mb-3">
          <div class="col-12 col-lg-4">
            <router-link to="/products" class="link-secondary text-center fs-3">
              <div class="img-box">
                <img src="/userHome/journey.png" alt="漫遊行程" />
                <div class="banner-list-text">漫 遊 行 程</div>
              </div>
            </router-link>
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
            <a href="#" class="link-secondary text-center fs-3">
              <div class="img-box">
                <img src="/userHome/accomidation.png" alt="住宿" />
                <div class="banner-list-text">園 內 住 宿</div>
              </div>
            </a>
          </div>
        </div>
        <!-- news -->
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

          <!-- news read more -->
          <div class="text-end">
            <a href="#" class="read-more english link-primary me-2">
              <span class="pe-2">Read More </span>
              <i class="read-more-icon bi bi-arrow-up-right-circle-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- journey -->
    <section class="journey pb-7 bg-secondary">
      <!-- 跑馬燈 -->
      <div class="journey-text">
        <swiper
          :slidesPerView="'auto'"
          :allowTouchMove="false"
          :spaceBetween="0"
          :speed="80000"
          :loop="true"
          :autoplay="{ delay: 0, disableOnInteraction: false }"
          :modules="modules"
          class="journey-swiper fs-1 py-3 ls-5"
        >
          <swiper-slide>
            在山林之中深呼吸．Take a deep breath in the forest．在山林之中深呼吸．
          </swiper-slide>
          <swiper-slide>
            Take a deep breath in the forest．在山林之中深呼吸．Take a deep breath in the forest．
          </swiper-slide>
        </swiper>
      </div>
      <!-- journey-title -->
      <div class="mt-5 text-center">
        <h3 class="title mb-0">精選漫遊行程</h3>
        <span class="english fs-5 title">Top Picks Tours </span>
      </div>
      <!-- card -->
      <div class="container">
        <div class="row g-3 my-4">
          <div class="col-12">
            <div class="card mb-3">
              <div class="row g-0">
                <a href="#" class="col-md-6 img-box">
                  <img
                    src="/userHome/test.jpg"
                    class="img-fluid rounded-start h-100 w-100 object-fit-cover"
                    alt="太平山"
                  />
                </a>
                <div class="col-md-6">
                  <div class="card-body d-flex flex-column h-100">
                    <a href="#">
                      <!-- px-3 py-4 -->
                      <h4 class="card-title fw-bold mb-0 link-dark-green bg-light-green">
                        太平山│林鐵追憶一日遊
                      </h4>
                    </a>
                    <div class="card-tags p-3">
                      <a href="#" class="badge rounded-pill btn btn-primary text-white me-1">
                        #宜蘭
                      </a>
                      <a href="#" class="badge rounded-pill btn btn-primary text-white me-1">
                        #自然步道
                      </a>
                      <a href="#" class="badge rounded-pill btn btn-primary text-white me-1">
                        #森林鐵路
                      </a>
                      <a href="#" class="badge rounded-pill btn btn-primary text-white me-1">
                        #一日遊
                      </a>
                    </div>
                    <p class="card-text fw-normal link-gray px-3">
                      漫步於見晴懷古步道，於寧靜山林之中探索太平山林鐵遺跡，而後搭乘太平山蹦蹦車，穿梭於巨木參天的林蔭之中，欣賞沿途山巒疊翠，最終抵達茂興懷舊步道，蜿蜒行走於國寶貴重木樹林之中，見證太平山林業盛產的歲月。
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-end px-3 pb-4 flex-grow-1"
                    >
                      <div>
                        <del class="text-gray fs-7 fw-normal">NT$ 999 /位</del><br />
                        <span class="text-danger fs-5">NT$ 800 /位</span>
                      </div>
                      <div>
                        <div class="text-end">
                          <a href="#" class="read-more english link-primary me-4">
                            <span class="pe-2">Read More </span>
                            <i class="read-more-icon bi bi-arrow-up-right-circle-fill"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div class="card mb-3">
              <div class="row g-0">
                <a href="#" class="col-md-6 img-box">
                  <img
                    src="/userHome/test.jpg"
                    class="img-fluid rounded-start h-100 w-100 object-fit-cover"
                    alt="太平山"
                  />
                </a>
                <div class="col-md-6">
                  <div class="card-body d-flex flex-column h-100">
                    <a href="#">
                      <!-- px-3 py-4 -->
                      <h4 class="card-title fw-bold mb-0 link-dark-green bg-light-green">
                        太平山│林鐵追憶一日遊
                      </h4>
                    </a>
                    <div class="card-tags p-3">
                      <a href="#" class="badge rounded-pill btn btn-primary text-white me-1">
                        #宜蘭
                      </a>
                      <a href="#" class="badge rounded-pill btn btn-primary text-white me-1">
                        #自然步道
                      </a>
                      <a href="#" class="badge rounded-pill btn btn-primary text-white me-1">
                        #森林鐵路
                      </a>
                      <a href="#" class="badge rounded-pill btn btn-primary text-white me-1">
                        #一日遊
                      </a>
                    </div>
                    <p class="card-text fw-normal link-gray px-3">
                      漫步於見晴懷古步道，於寧靜山林之中探索太平山林鐵遺跡，而後搭乘太平山蹦蹦車，穿梭於巨木參天的林蔭之中，欣賞沿途山巒疊翠，最終抵達茂興懷舊步道，蜿蜒行走於國寶貴重木樹林之中，見證太平山林業盛產的歲月。
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-end px-3 pb-4 flex-grow-1"
                    >
                      <div>
                        <del class="text-gray fs-7 fw-normal">NT$ 999 /位</del><br />
                        <span class="text-danger fs-5">NT$ 800 /位</span>
                      </div>
                      <div>
                        <div class="text-end">
                          <a href="#" class="read-more english link-primary me-4">
                            <span class="pe-2">Read More </span>
                            <i class="read-more-icon bi bi-arrow-up-right-circle-fill"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div class="card mb-3">
              <div class="row g-0">
                <a href="#" class="col-md-6 img-box">
                  <img
                    src="/userHome/test.jpg"
                    class="img-fluid rounded-start h-100 w-100 object-fit-cover"
                    alt="太平山"
                  />
                </a>
                <div class="col-md-6">
                  <div class="card-body d-flex flex-column h-100">
                    <a href="#">
                      <!-- px-3 py-4 -->
                      <h4 class="card-title fw-bold mb-0 link-dark-green bg-light-green">
                        太平山│林鐵追憶一日遊
                      </h4>
                    </a>
                    <div class="card-tags p-3">
                      <a href="#" class="badge rounded-pill btn btn-primary text-white me-1">
                        #宜蘭
                      </a>
                      <a href="#" class="badge rounded-pill btn btn-primary text-white me-1">
                        #自然步道
                      </a>
                      <a href="#" class="badge rounded-pill btn btn-primary text-white me-1">
                        #森林鐵路
                      </a>
                      <a href="#" class="badge rounded-pill btn btn-primary text-white me-1">
                        #一日遊
                      </a>
                    </div>
                    <p class="card-text fw-normal link-gray px-3">
                      漫步於見晴懷古步道，於寧靜山林之中探索太平山林鐵遺跡，而後搭乘太平山蹦蹦車，穿梭於巨木參天的林蔭之中，欣賞沿途山巒疊翠，最終抵達茂興懷舊步道，蜿蜒行走於國寶貴重木樹林之中，見證太平山林業盛產的歲月。
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-end px-3 pb-4 flex-grow-1"
                    >
                      <div>
                        <del class="text-gray fs-7 fw-normal">NT$ 999 /位</del><br />
                        <span class="text-danger fs-5">NT$ 800 /位</span>
                      </div>
                      <div>
                        <div class="text-end">
                          <a href="#" class="read-more english link-primary me-4">
                            <span class="pe-2">Read More </span>
                            <i class="read-more-icon bi bi-arrow-up-right-circle-fill"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 更多行程 -->
        <router-link
          to="/products"
          class="read-all link-dark-green text-center border-top border-bottom border-1 py-5 d-block fs-4 ls-5"
        >
          <span class="pe-2">更多行程</span>
          <i class="read-all-icon bi bi-arrow-up-right-circle-fill"></i>
        </router-link>
      </div>
    </section>

    <!-- area -->
    <section class="area pb-8 bg-secondary">
      <!-- area-title -->
      <div class="area-bg text-center">
        <div class="area-title">
          <h3 class="title mb-0 text-light-green">今天，你想去哪座森林？</h3>
          <span class="english fw-bold">Which forest do you want to go to today?</span>
        </div>
      </div>
      <!-- area-swiper -->
      <swiper
        :slidesPerView="'auto'"
        :centeredSlides="true"
        :spaceBetween="30"
        :grabCursor="true"
        :modules="modules"
        class="area-swiper"
      >
        <swiper-slide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">阿里山<br />國家森林遊樂區</h4>
            <!-- border border-white rounded-pill -->
            <p class="fs-7 px-3 py-2 text-white mb-0">非假日 08:00-17:00<br />例假日 07:00-17:00</p>
          </a>
          <img src="/userHome/home_bg.jpg" alt="阿里山" />
        </swiper-slide>
        <swiper-slide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">阿里山<br />國家森林遊樂區</h4>
            <!-- border border-white rounded-pill -->
            <p class="fs-7 px-3 py-2 text-white mb-0">非假日 08:00-17:00<br />例假日 07:00-17:00</p>
          </a>
          <img src="/userHome/home_bg.jpg" alt="阿里山" />
        </swiper-slide>
        <swiper-slide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">阿里山<br />國家森林遊樂區</h4>
            <!-- border border-white rounded-pill -->
            <p class="fs-7 px-3 py-2 text-white mb-0">非假日 08:00-17:00<br />例假日 07:00-17:00</p>
          </a>
          <img src="/userHome/home_bg.jpg" alt="阿里山" />
        </swiper-slide>
        <swiper-slide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">阿里山<br />國家森林遊樂區</h4>
            <!-- border border-white rounded-pill -->
            <p class="fs-7 px-3 py-2 text-white mb-0">非假日 08:00-17:00<br />例假日 07:00-17:00</p>
          </a>
          <img src="/userHome/home_bg.jpg" alt="阿里山" />
        </swiper-slide>
        <swiper-slide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">阿里山<br />國家森林遊樂區</h4>
            <!-- border border-white rounded-pill -->
            <p class="fs-7 px-3 py-2 text-white mb-0">非假日 08:00-17:00<br />例假日 07:00-17:00</p>
          </a>
          <img src="/userHome/home_bg.jpg" alt="阿里山" />
        </swiper-slide>
        <swiper-slide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">阿里山<br />國家森林遊樂區</h4>
            <!-- border border-white rounded-pill -->
            <p class="fs-7 px-3 py-2 text-white mb-0">非假日 08:00-17:00<br />例假日 07:00-17:00</p>
          </a>
          <img src="/userHome/home_bg.jpg" alt="阿里山" />
        </swiper-slide>
        <swiper-slide>
          <a href="#" class="swiper-slide-link">
            <h4 class="fw-bold ls-5 text-white">阿里山<br />國家森林遊樂區</h4>
            <!-- border border-white rounded-pill -->
            <p class="fs-7 px-3 py-2 text-white mb-0">非假日 08:00-17:00<br />例假日 07:00-17:00</p>
          </a>
          <img src="/userHome/home_bg.jpg" alt="阿里山" />
        </swiper-slide>
      </swiper>
      <!-- 更多森林 -->
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
  <!-- subscription -->
  <div
    class="bg-light-green border-1 border-top p-5 p-lg-6 d-flex justify-content-between flex-column flex-xl-row"
  >
    <!-- logo -->
    <img src="/logo/logo.png" alt="漫途森旅" class="footer-logo mb-5 mb-xl-0" />
    <div class="text-start text-xl-end d-flex flex-column justify-content-between flex-shirk-1">
      <!-- slogan -->
      <div class="mb-3">
        <h3 class="fw-bold ls-5">
          享受無拘<span class="text-primary">漫遊之途</span><br />浸入盎然<span class="text-primary"
            >森林</span
          >來場放慢身心的<span class="text-primary">旅程</span>
        </h3>
        <h5 class="fw-bold">Meander, Explore, Forest & Travel</h5>
      </div>
      <div>
        <div class="text-muted mb-1 ls-2">立即訂閱，接收最新活動消息與優惠！</div>
        <div class="input-group me-auto me-xl-0 ms-xl-auto">
          <input
            type="email"
            class="form-control"
            placeholder="輸入您的 Email"
            aria-label="subscription email"
            aria-describedby="button-addon2"
            id="sub-button"
          />
          <button class="btn btn-primary text-white" type="button" id="button-addon2">
            立即訂閱
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Autoplay]
    };
  }
};
</script>

<style></style>
