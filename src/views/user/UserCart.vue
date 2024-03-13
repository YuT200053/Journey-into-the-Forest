<template>
  <section class="container cart">
    <h2 class="text-center fw-bold">前台購物車</h2>
    <VeeForm v-slot="{ errors }" @submit="onSubmit">
      <VeeField
        id="email"
        name="email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors['email'] }"
        placeholder="請輸入 Email"
        rules="email|required"
      ></VeeField>
      <error-message name="email" class="invalid-feedback"></error-message>
    </VeeForm>
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
