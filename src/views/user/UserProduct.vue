<template>
  <!-- banner  -->
  <section class="product-banner img-box">
    <div
      class="product-banner-bg"
      :style="{ 'background-image': 'url(' + product.imageUrl + ')' }"
    ></div>
    <div class="container">
      <!-- title -->
      <div class="product-banner-title text-center w-100 py-4">
        <h1 class="title mb-0">{{ product.title }}</h1>
      </div>
      <!-- category -->
      <div class="text-center mb-3">
        <a
          href="#"
          class="badge rounded-pill btn btn-primary text-white me-1"
          v-for="(category, index) in product.category ? product.category.split(',') : []"
          :key="'category' + index"
        >
          {{ `#${category}` }}
        </a>
      </div>
      <!-- area -->
      <div class="text-center mb-5 fs-5">
        <a href="#" class="link-dark-green">
          <i class="bi bi-geo-alt-fill me-1"></i>{{ product.unit }}
        </a>
      </div>
    </div>
  </section>
  <!-- product-detail -->
  <section class="container pb-5">
    <div class="row">
      <div class="col-12 col-lg-7">
        <!-- description -->
        <div class="product-description p-5 mx-auto mb-5">
          <div>
            <h3 class="title mb-0">行程亮點</h3>
            <span class="english fs-5 title">Features</span>
          </div>
          <div class="mt-4 text-muted ls-2">{{ product.description }}</div>
        </div>
        <!-- content -->
        <div class="product-content mb-5 mb-lg-0">
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
      </div>
      <!-- add-cart -->
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

export default {
  data() {
    return {
      product: {},
      qty: 1
    };
  },
  methods: {
    addCart(product_id, qty = 1) {
      const order = { product_id, qty };
      console.log(order);
      const api = `${VITE_URL}/api/${VITE_PATH}/cart`;

      this.axios
        .post(api, { data: order })
        .then((res) => {
          alert(res.data.message);
          console.log(order);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  },
  mounted() {
    const { id } = this.$route.params;
    const api = `${VITE_URL}/api/${VITE_PATH}/product/${id}`;

    this.axios
      .get(api)
      .then((res) => {
        this.product = res.data.product;
        console.log(this.product);
      })
      .catch((err) => {
        alert(err.Response.data.message);
      });
  }
};
</script>
