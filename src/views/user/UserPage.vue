<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top border-bottom">
      <div class="container py-2">
        <RouterLink to="/" class="navbar-brand">
          <img
            src="/logo/logo-navbar.png"
            alt="Logo"
            height="50"
            class="d-inline-block align-text-top object-fit-cover w-100"
          />
        </RouterLink>
        <!-- burger list -->
        <button class="navbar-toggler border-0" type="button" @click.prevent="navbarToggle()">
          <i class="bi bi-list fs-1 burger"></i>
        </button>

        <div class="collapse navbar-collapse mt-3 mt-lg-0" id="navbar" ref="navbar">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item px-3 border-end-lg border-1 py-2">
              <RouterLink to="/news" class="nav-link" href="#">最新消息</RouterLink>
            </li>
            <li class="nav-item px-3 border-end-lg border-1 py-2">
              <RouterLink to="/products" class="nav-link">漫遊行程</RouterLink>
            </li>
            <li class="nav-item px-3 border-end-lg border-1 py-2">
              <RouterLink :to="{ name: 'area', params: { id: '0' } }" class="nav-link" href="#"
                >所有森林</RouterLink
              >
            </li>
            <li class="nav-item px-3 py-2">
              <RouterLink to="/accommodations" class="nav-link">園內住宿</RouterLink>
            </li>
            <li class="nav-item px-3 py-2 py-lg-0">
              <RouterLink to="/cart" class="btn btn-primary text-white ms-lg-3">
                <i class="bi bi-bag me-1"></i>購物車
                <span class="badge bg-danger rounded-pill" v-if="carts.carts">
                  {{ carts.carts.length }}
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <router-view />

  <footer class="footer bg-secondary">
    <div
      class="bg-light-green border-1 border-top border-bottom p-4 p-lg-6 d-flex justify-content-between flex-column flex-xl-row"
    >
      <img src="/logo/logo.png" alt="漫途森旅" class="footer-logo mb-4 mb-xl-0" />
      <div class="text-start text-xl-end d-flex flex-column justify-content-between flex-shirk-1">
        <div class="mb-3">
          <h3 class="fw-bold ls-5">
            享受無拘<span class="text-primary">漫遊之途</span>
            <br />
            浸入盎然<span class="text-primary">森林</span>來場放慢身心的<span class="text-primary"
              >旅程</span
            >
          </h3>
          <h5 class="fw-bold">Meander, Explore, Forest & Travel</h5>
        </div>
        <div>
          <div class="text-muted mb-1 ls-2">立即訂閱，接收最新活動消息與優惠！</div>

          <VeeForm v-slot="{ errors }" @submit="addSub()" ref="form">
            <div class="d-flex justify-content-xl-end flex-column flex-sm-row">
              <div class="me-sm-1 mb-1 mb-sm-0">
                <VeeField
                  id="email"
                  name="email"
                  type="email"
                  class="form-control w-100"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                />
                <ErrorMessage name="email" class="invalid-feedback" />
              </div>
              <button class="btn btn-primary text-white btn-height" type="submit">立即訂閱</button>
            </div>
          </VeeForm>
        </div>
      </div>
    </div>

    <div class="px-4 px-lg-6 py-5 py-md-6">
      <div class="d-flex justify-content-center justify-content-md-start fs-4 mb-3">
        <a href="https://www.facebook.com/" class="link-dark-green footer-icon">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/" class="link-dark-green footer-icon">
          <i class="bi bi-instagram mx-4"></i>
        </a>
        <a href="mailto:journey-into-the-forest@gmail.com" class="link-dark-green footer-icon">
          <i class="bi bi-envelope"></i>
        </a>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div class="english fs-6 text-gray mb-3 mb-md-0">
          Copyright © 漫途森旅 All Rights Reserved.
        </div>
        <RouterLink to="/login" class="btn btn-dark-green text-white" href="#">
          <i class="bi bi-laptop"></i> 登入後台
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<script>
import { Collapse } from 'bootstrap';
import { toast } from '@/mixins/swalToast.js';
import cartStore from '@/stores/cartStore.js';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      navbar: null
    };
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    addSub() {
      this.$refs.form.resetForm();
      toast.fire({
        icon: 'success',
        title: '已成功訂閱漫途森旅！'
      });
    },
    navbarToggle() {
      this.navbar.toggle();
    }
  },
  mounted() {
    this.navbar = new Collapse(this.$refs.navbar, { toggle: false });

    this.$router.beforeEach((to, from, next) => {
      this.navbar.hide();
      next();
    });

    this.getCart();
  }
};
</script>

<style>
.input-width {
  max-width: 270px;
}
.btn-height {
  max-height: 37.6px;
}
</style>
