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
