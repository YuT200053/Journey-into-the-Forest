<template>
  <section class="container cart">
    <h2 class="text-center fw-bold">前台購物車</h2>
    {{ carts.carts[0] }}
  </section>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      carts: {}
    };
  },
  methods: {
    getCart() {
      const api = `${VITE_URL}/api/${VITE_PATH}/cart`;
      this.axios
        .get(api)
        .then((res) => {
          this.carts = res.data.data;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  },
  mounted() {
    this.getCart();
  }
};
</script>
