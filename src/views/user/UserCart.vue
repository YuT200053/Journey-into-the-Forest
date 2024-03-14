<template>
  <!-- banner  -->
  <section class="cart-banner img-box mb-4">
    <div class="container">
      <!-- title -->
      <div class="cart-banner-title text-center w-100">
        <h1 class="title mb-0">購物車</h1>
        <span class="english fs-5 title">Cart</span>
      </div>
    </div>
  </section>
  <!-- cart -->
  <section class="container mb-7">
    <!-- if cart is empty -->
    <div
      class="alert alert-secondary border border-1 text-center"
      role="alert"
      v-if="carts.carts ? !carts.carts.length : 0"
    >
      <i class="bi bi-stars me-1"></i>目前購物車是空的，趕快加入你的漫遊行程吧！
    </div>
    <div class="row">
      <div class="col-12 col-lg-8">
        <!-- cart list -->
        <div
          class="p-3 mb-2 bg-secondary rounded-3 d-flex border border-1"
          v-for="product in carts.carts"
          :key="product.id"
        >
          <button type="button" class="btn ps-0" @click.prevent="deleteCart(product.id)">
            <i class="bi bi-x-lg"></i>
          </button>
          <div class="row gx-2 align-items-center">
            <div class="col-3">
              <img
                :src="product.product.imageUrl"
                :alt="product.product.title"
                class="w-100 rounded-3"
              />
            </div>
            <div class="col-5">
              <span class="fs-5">{{ product.product.title }}</span>
              <br />
              <del class="text-muted fs-7">
                原 ${{
                  product.product.origin_price
                    ? product.product.origin_price.toLocaleString('en-US')
                    : ''
                }}
              </del>
              <span class="text-dark-green">
                特價 ${{
                  product.product.price ? product.product.price.toLocaleString('en-US') : ''
                }}
              </span>
            </div>
            <div class="col-2">
              <select
                class="form-select form-select-sm"
                v-model="product.qty"
                @change="changeQty(product, product.qty)"
              >
                <option v-for="i in 10" :key="i" :value="i">{{ i }} 張</option>
              </select>
            </div>
            <div class="col-2 text-end text-primary">
              小計 ${{ product.total ? product.total.toLocaleString('en-US') : '' }}
            </div>
          </div>
        </div>
        <!-- delete all & total price -->
        <div
          class="d-flex justify-content-between pe-3"
          v-if="carts.carts ? carts.carts.length : 0"
        >
          <button type="button" class="btn btn-outline-dark-green" @click.prevent="deleteAll()">
            <i class="bi bi-trash3 me-1"></i>清空購物車
          </button>
          <div class="fs-4 text-danger ls-2">
            總計 ${{ carts.total ? carts.total.toLocaleString('en-US') : '' }}
          </div>
        </div>
      </div>
      <!-- order information -->
      <div class="col-12 col-lg-4" v-if="carts.carts ? carts.carts.length : 0">
        <div class="product-description p-5">
          <div class="mb-3">
            <h4 class="title mb-0">購買人資料</h4>
            <span class="english title ls-2 fs-7">Purchaser Information</span>
          </div>
          <VeeForm v-slot="{ errors }" @submit="createOrder()" ref="form">
            <div class="form-floating mb-3">
              <VeeField
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></VeeField>
              <label for="email">Email</label>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="form-floating mb-3">
              <VeeField
                id="name"
                name="姓名"
                type="name"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></VeeField>
              <label for="name">收件人姓名</label>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="form-floating mb-3">
              <VeeField
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required|min:8||numeric"
                v-model="form.user.tel"
              ></VeeField>
              <label for="tel">收件人電話</label>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>
            <div class="form-floating mb-3">
              <VeeField
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></VeeField>
              <label for="address">收件人地址</label>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>
            <div class="form-floating mb-3">
              <textarea
                id="message"
                name="留言"
                class="form-control"
                placeholder="請輸入留言"
                v-model="form.message"
              ></textarea>
              <label for="message">留言</label>
            </div>
            <div class="text-end">
              <button
                type="submit"
                class="btn btn-primary text-white"
                :disabled="carts.carts ? carts.carts.final_total : '' === 0"
              >
                <i class="bi bi-send me-1"></i>送出訂單
              </button>
            </div>
          </VeeForm>
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
      carts: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
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
    },
    deleteCart(id) {
      const api = `${VITE_URL}/api/${VITE_PATH}/cart/${id}`;

      this.axios
        .delete(api)
        .then((res) => {
          alert(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    deleteAll() {
      const api = `${VITE_URL}/api/${VITE_PATH}/carts`;

      this.axios
        .delete(api)
        .then((res) => {
          alert(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    changeQty(cart, qty) {
      const order = {
        product_id: cart.product_id,
        qty
      };
      const api = `${VITE_URL}/api/${VITE_PATH}/cart/${cart.id}`;

      this.axios
        .put(api, { data: order })
        .then((res) => {
          alert(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    createOrder() {
      const api = `${VITE_URL}/api/${VITE_PATH}/order`;
      const order = this.form;
      console.log('1');

      this.axios
        .post(api, { data: order })
        .then((res) => {
          alert(res.data.message);
          this.$refs.form.resetForm();
          this.getCart();
          console.log('2');
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
