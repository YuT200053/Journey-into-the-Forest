<template>
  <VueLoading :active="isLoading" />
  <section class="cart-banner img-box mb-4">
    <div class="container">
      <div class="cart-banner-title text-center w-100">
        <h1 class="title mb-0">購物車</h1>
        <span class="english fs-5 title">Cart</span>
      </div>
    </div>
  </section>

  <section class="container mb-7">
    <!-- if cart is empty -->
    <div
      class="d-flex flex-column align-items-center text-muted"
      role="alert"
      v-if="carts.carts ? !carts.carts.length : 0"
    >
      目前購物車是空的，趕快加入你的漫遊行程吧！
      <router-link to="/products" class="btn btn-primary text-white mt-1">
        <i class="bi bi-stars me-1"></i>立即尋找專屬行程
      </router-link>
    </div>

    <div class="row">
      <div class="col-12 col-lg-8 mb-5 mb-lg-0">
        <div
          class="p-3 mb-2 bg-secondary rounded-3 d-flex border border-1"
          v-for="product in carts.carts"
          :key="product.id"
        >
          <div class="row gx-2 align-items-center">
            <div class="col-12 col-sm-3 mb-1 mb-sm-0">
              <img
                :src="product.product.imageUrl"
                :alt="product.product.title"
                class="w-100 rounded-3"
              />
            </div>
            <div class="col-12 col-sm-5 mb-1 mb-sm-0">
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
            <div class="col-12 col-sm-2">
              <select
                class="form-select form-select-sm mb-1 mb-sm-0"
                :disabled="isLoading"
                v-model="product.qty"
                @change="changeQty(product, product.qty)"
              >
                <option v-for="i in 10" :key="i" :value="i">{{ i }} 張</option>
              </select>
            </div>
            <div class="col-12 col-sm-2 text-end text-primary">
              小計 ${{ product.total ? product.total.toLocaleString('en-US') : '' }}
            </div>
          </div>
          <button
            type="button"
            class="btn ps-3"
            :disabled="isLoading"
            @click.prevent="deleteModal(false, product)"
            title="刪除此行程"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div
          class="d-flex justify-content-between pe-3"
          v-if="carts.carts ? carts.carts.length : 0"
        >
          <button
            type="button"
            class="btn btn-outline-dark-green"
            :disabled="isLoading"
            @click.prevent="deleteModal(true)"
          >
            <i class="bi bi-trash3 me-1"></i>清空購物車
          </button>
          <div class="fs-4 text-danger ls-2">
            總計 ${{ carts.total ? carts.total.toLocaleString('en-US') : '' }}
          </div>
        </div>
      </div>

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
                name="電子信箱"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['電子信箱'] }"
                placeholder="請輸入電子信箱"
                rules="email|required"
                v-model="form.user.email"
              />
              <label for="email">電子信箱</label>
              <ErrorMessage name="電子信箱" class="invalid-feedback" />
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
              />
              <label for="name">姓名</label>
              <ErrorMessage name="姓名" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-3">
              <VeeField
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                :rules="{ required: true, max: 10, min: 8 }"
                v-model="form.user.tel"
              />
              <label for="tel">聯繫電話</label>
              <ErrorMessage name="電話" class="invalid-feedback" />
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
              />
              <label for="address">聯繫地址</label>
              <ErrorMessage name="地址" class="invalid-feedback" />
            </div>
            <div class="form-floating mb-3">
              <VeeField
                id="pay"
                name="付款後五碼"
                type="number"
                class="form-control"
                :class="{ 'is-invalid': errors['付款後五碼'] }"
                placeholder="請輸入付款後五碼"
                rules="required|min:5|max:5"
                v-model="form.user.pay"
              />
              <label for="pay">付款銀行帳號後五碼</label>
              <ErrorMessage name="付款後五碼" class="invalid-feedback" />
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
import cartStore from '@/stores/cartStore.js';
import { mapState, mapActions } from 'pinia';
import { toast, question } from '@/mixins/swalToast.js';

export default {
  data() {
    return {
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
  computed: {
    ...mapState(cartStore, ['carts', 'isLoading'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    deleteModal(all, product) {
      if (all) {
        question
          .fire({
            icon: 'question',
            title: `確定要清空購物車嗎？`
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.deleteAll();
            }
          });
      } else {
        question
          .fire({
            icon: 'question',
            title: `確定要刪除「${product.product.title}」嗎？`
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.deleteCart(product.id);
            }
          });
      }
    },
    deleteCart(id) {
      const api = `${VITE_URL}/api/${VITE_PATH}/cart/${id}`;

      this.axios
        .delete(api)
        .then(() => {
          this.getCart();
          toast.fire({
            icon: 'success',
            title: '已刪除此產品！'
          });
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '刪除產品失敗。'
          });
        });
    },
    deleteAll() {
      const api = `${VITE_URL}/api/${VITE_PATH}/carts`;

      this.axios
        .delete(api)
        .then(() => {
          this.getCart();
          toast.fire({
            icon: 'success',
            title: '已清空購物車！'
          });
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '清空購物車失敗。'
          });
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
        .then(() => {
          this.getCart();
          toast.fire({
            icon: 'success',
            title: '已更新產品數量！'
          });
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '產品數量更新失敗。'
          });
        });
    },
    createOrder() {
      const api = `${VITE_URL}/api/${VITE_PATH}/order`;
      const order = this.form;

      this.axios
        .post(api, { data: order })
        .then(() => {
          toast.fire({
            icon: 'success',
            title: '已成功送出訂單！'
          });

          this.$router.push('/order');
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '訂單送出失敗。'
          });
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請正確的手機號碼';
    }
  },
  mounted() {
    this.getCart();
  }
};
</script>

<style>
.swal2-actions .cancelBtn {
  background-color: transparent;
  border: 1px solid #7d8b72;
  color: #7d8b72;
}
.swal2-actions .cancelBtn:hover {
  background-color: #7d8b72;
  border: 1px solid #7d8b72;
  color: #fff;
}
</style>
