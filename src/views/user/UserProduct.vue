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
      <!-- description -->
      <div class="product-description p-5 w-100 w-md-50 mx-auto">
        <div>
          <h3 class="title mb-0">行程亮點</h3>
          <span class="english fs-5 title">Features</span>
        </div>
        <div class="mt-4 text-muted ls-2">{{ product.description }}</div>
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
