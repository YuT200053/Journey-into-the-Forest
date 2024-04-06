<template>
  <VueLoading :active="isLoading" />
  <section class="product-banner img-box">
    <div
      class="product-banner-bg"
      :style="{ 'background-image': 'url(' + product.banner + ')' }"
    ></div>
    <div class="container">
      <div class="product-banner-title text-center w-100 py-4">
        <h1 class="title mb-0">{{ product.title }}</h1>
      </div>

      <div class="text-center mb-3">
        <span
          class="badge rounded-pill bg-primary text-white me-1"
          v-for="(category, index) in product.category ? product.category.split(',') : []"
          :key="'category' + index"
        >
          {{ `#${category}` }}
        </span>
      </div>

      <div class="text-center mb-5 fs-5">
        <a href="#" class="link-dark-green">
          <i class="bi bi-geo-alt-fill me-1"></i>{{ product.unit }}
        </a>
      </div>
    </div>
  </section>

  <section class="container pb-5">
    <div class="row">
      <div class="col-12 col-lg-7">
        <div class="product-description p-5 mx-auto mb-5">
          <div>
            <h3 class="title mb-0">行程亮點</h3>
            <span class="english fs-5 title">Features</span>
          </div>
          <div class="mt-4 text-muted ls-2">{{ product.description }}</div>
        </div>

        <div class="product-content mb-7">
          <div class="text-center mb-3">
            <h3 class="title mb-0">每日行程</h3>
            <span class="english fs-5 title">Schedules</span>
          </div>
          <div
            class="product-content-schedule mx-auto border-1 border-top border-bottom mt-3"
            v-for="(content, index) in product.content ? product.content.split(':') : []"
            :key="'schedule' + index"
          >
            <div class="product-content-day px-5 py-3 w-100">
              <h5 class="d-block fw-bold english text-white mx-auto" :key="'day' + index">
                Day {{ index + 1 }}
              </h5>
            </div>
            <div class="product-content-time px-5 py-3 flex-shrink-1 w-100">
              <div v-for="(time, index) in content ? content.split(',') : []" :key="'time' + index">
                {{ time }}
              </div>
            </div>
          </div>
        </div>

        <div class="product-content mb-5 mb-lg-0">
          <div class="text-start mb-1">
            <h5 class="title mb-0">注意事項</h5>
            <span class="english fs-7 title">Notices</span>
          </div>
          <ol class="fs-7 text-muted fw-normal">
            <li>
              此票券優惠效期為購買日起 6 個月
              (到期日將顯示於您的電子票券上)，逾優惠效期使用此票券則依票面金額現場折抵其他專案行程，且恕不找零；若金額不足則需現場補足差額。
            </li>
            <li>此票券以為折扣後之優惠價，恕不得與現場其他優惠活動合併使用。</li>
            <li>
              如遇特殊節日，需依票面金額補足與現場定價差價後方可使用。特殊節日定義為：除夕、春節期間、清明兒童連假、母親節、端午連假、聖誕節及其他公告之特定活動日期
              (各節日定義依人事行政局公佈之日期為準)。
            </li>
            <li>
              此票券為套裝行程，請注意各景點、餐廳、旅館等地點的營業時間與開放時間，以免因時間不足而不法使用或錯過行程。
            </li>
            <li>此票券下單付款時已開立發票，使用當日則不再開立發票。</li>
            <li>
              使用此票券前，需事先致電至該國家森林遊樂區告知使用日期與人數，人數至少 2
              人以上，若人數不足，該國家森林遊樂區有權安排與其他使用票券者安排同房住宿。
            </li>
            <li>此票券售出後恕不能退換，請務必確認專案內容與注意事項後再進行購買。</li>
          </ol>
        </div>
      </div>

      <div class="col-12 col-lg-5 product-add-cart">
        <div class="sticky-top">
          <div class="product-description p-5 mx-auto mb-6">
            <div>
              <h4 class="fw-bold">{{ product.title }}</h4>
              <div class="my-4">
                <del class="text-muted">
                  原價
                  {{ product.origin_price ? product.origin_price.toLocaleString('en-US') : '' }} 元
                </del>
                <br />
                <span class="fs-5 fw-bold mb-0 text-danger">
                  限時特價 {{ product.price ? product.price.toLocaleString('en-US') : '' }} 元
                </span>
              </div>
            </div>
            <div class="my-4">
              <select class="form-select" aria-label="Default select example" v-model="qty">
                <option v-for="i in 10" :key="i" :value="i">{{ i }} 張</option>
              </select>
            </div>
            <button
              type="submit"
              class="btn btn-primary text-white w-100"
              :class="{ disabled: isLoading }"
              @click.prevent="addCart(product.id, qty)"
            >
              <i class="bi bi-bag me-1"></i>加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import { toast } from '@/mixins/swalToast.js';
import cartStore from '@/stores/cartStore.js';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      product: {},
      qty: 1,
      isLoading: false
    };
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    addCart(product_id, qty = 1) {
      const order = { product_id, qty };
      const api = `${VITE_URL}/api/${VITE_PATH}/cart`;

      this.axios
        .post(api, { data: order })
        .then(() => {
          toast.fire({
            icon: 'success',
            title: '已加入購物車！'
          });
          this.getCart();
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '加入購物車失敗。'
          });
        });
    }
  },
  mounted() {
    const { id } = this.$route.params;
    const api = `${VITE_URL}/api/${VITE_PATH}/product/${id}`;
    this.isLoading = true;
    this.getCart();

    this.axios
      .get(api)
      .then((res) => {
        this.product = res.data.product;
        this.isLoading = false;
      })
      .catch(() => {
        toast.fire({
          icon: 'error',
          title: '取得產品資訊失敗。'
        });
      });
  }
};
</script>
@/mixins/swalToast.js
