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
      <div class="text-center mb-5">
        <a
          href="#"
          class="badge rounded-pill btn btn-primary text-white me-1"
          v-for="(category, index) in product.category ? product.category.split(',') : []"
          :key="'category' + index"
        >
          {{ `#${category}` }}
        </a>
      </div>
    </div>
  </section>
  <!-- product-detail -->
  <section class="container pb-5">
    <div class="row">
      <div class="col-12 col-lg-8">
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
      <div class="col-12 col-lg-4 product-add-cart">
        <div class="sticky-top">
          <div class="product-description p-5 mx-auto mb-6">
            <div>
              <h3 class="title mb-0">加購物車</h3>
              <span class="english fs-5 title">Features</span>
            </div>
            <div class="mt-4 text-muted ls-2">{{ product.description }}</div>
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
      product: {}
    };
  },
  methods: {},
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
