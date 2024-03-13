<template>
  <!-- banner  -->
  <section class="cart-banner img-box mb-5">
    <div class="container">
      <!-- title -->
      <div class="cart-banner-title text-center w-100">
        <h1 class="title mb-0">購物車</h1>
        <span class="english fs-5 title">Cart</span>
      </div>
    </div>
  </section>
  <!-- cart -->
  <section class="container">
    <div class="row">
      <div class="col-8">
        <!-- cart list -->
        <div class="product-description p-5 mx-auto mb-5">
          <div>
            <h3 class="title mb-0">123</h3>
            <span class="english fs-5 title">123</span>
          </div>
          <div class="mt-4 text-muted ls-2">購物車清單、刪除單一&全部、調整數量</div>
        </div>
      </div>
      <!-- cart price -->
      <div class="col-4">
        <div class="product-description p-5 mx-auto mb-5">總計</div>
      </div>
    </div>
  </section>
  <!-- order information -->
  <section class="container">
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
