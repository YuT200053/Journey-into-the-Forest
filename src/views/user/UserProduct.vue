<template>
  <div>單一產品頁面</div>
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
