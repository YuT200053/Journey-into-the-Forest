<template>
  <header>
    <!-- navbar  -->
    <nav class="navbar navbar-expand-lg fixed-top border-bottom">
      <div class="container py-2">
        <!-- logo -->
        <RouterLink to="/" class="navbar-brand">
          <img
            src="/logo/logo-navbar.png"
            alt="Logo"
            height="50"
            class="d-inline-block align-text-top object-fit-cover w-100"
          />
        </RouterLink>
        <!-- burger -->
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list fs-1 burger"></i>
        </button>
        <!-- navbar list -->
        <div class="collapse navbar-collapse mt-3 mt-lg-0" id="navbar">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item px-3 border-end-lg border-1 py-2">
              <a class="nav-link" href="#">最新消息</a>
            </li>
            <li class="nav-item px-3 border-end-lg border-1 py-2">
              <RouterLink to="/products" class="nav-link">漫遊行程</RouterLink>
            </li>
            <li class="nav-item px-3 border-end-lg border-1 py-2">
              <a class="nav-link" href="#">所有地點</a>
            </li>
            <li class="nav-item px-3 py-2">
              <a class="nav-link" href="#">園內住宿</a>
            </li>
            <li class="nav-item px-3 py-2 py-lg-0">
              <RouterLink to="/cart" class="btn btn-primary text-white ms-lg-3">
                <i class="bi bi-bag me-1"></i>查看購物車
                <span class="badge bg-danger rounded-pill"> {{ carts.carts.length }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <router-view></router-view>

  <footer class="footer bg-secondary">
    <!-- subscription -->
    <div
      class="bg-light-green border-1 border-top p-4 p-lg-6 d-flex justify-content-between flex-column flex-xl-row"
    >
      <!-- logo -->
      <img src="/logo/logo.png" alt="漫途森旅" class="footer-logo mb-4 mb-xl-0" />
      <div class="text-start text-xl-end d-flex flex-column justify-content-between flex-shirk-1">
        <!-- slogan -->
        <div class="mb-3">
          <h3 class="fw-bold ls-5">
            享受無拘<span class="text-primary">漫遊之途</span><br />浸入盎然<span
              class="text-primary"
              >森林</span
            >來場放慢身心的<span class="text-primary">旅程</span>
          </h3>
          <h5 class="fw-bold">Meander, Explore, Forest & Travel</h5>
        </div>
        <div>
          <div class="text-muted mb-1 ls-2">立即訂閱，接收最新活動消息與優惠！</div>
          <div class="input-group me-auto me-xl-0 ms-xl-auto">
            <input
              type="email"
              class="form-control"
              placeholder="輸入您的 Email"
              aria-label="subscription email"
              aria-describedby="button-addon2"
              id="sub-button"
            />
            <button class="btn btn-primary text-white" type="button" id="button-addon2">
              立即訂閱
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- footer list -->
    <ul
      class="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center mb-2 mb-lg-0 px-4 px-lg-6 py-3 text-center border-top border-bottom border-1"
    >
      <li class="border-end-md border-1 px-4 pe-md-4 ps-md-0 py-2">
        <a class="link-gray" href="#">最新消息</a>
      </li>
      <li class="border-end-md border-1 px-4 py-2">
        <router-link to="/products" class="link-gray">漫遊行程</router-link>
      </li>
      <li class="border-end-md border-1 px-4 py-2">
        <a class="link-gray" href="#">所有地點</a>
      </li>
      <li class="px-4 py-2">
        <a class="link-gray" href="#">園內住宿</a>
      </li>
      <li class="py-2 py-lg-0">
        <router-link to="/cart" class="btn btn-primary text-white ms-lg-3 h-100">
          <i class="bi bi-bag me-1"></i>查看購物車
          <span class="badge bg-danger rounded-pill"> {{ carts.carts.length }}</span>
        </router-link>
      </li>
    </ul>
    <!-- social & admin -->
    <div class="px-4 px-lg-6 py-6">
      <div class="d-flex justify-content-center justify-content-md-start fs-4 mb-3">
        <a href="#" class="link-dark-green footer-icon">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="#" class="link-dark-green footer-icon">
          <i class="bi bi-instagram mx-4"></i>
        </a>
        <a href="#" class="link-dark-green footer-icon">
          <i class="bi bi-envelope"></i>
        </a>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div class="english fs-6 text-gray mb-3 mb-md-0">
          Copyright © 漫途森旅 All Rights Reserved.
        </div>
        <button type="button" class="btn btn-dark-green text-white" href="#">
          <i class="bi bi-laptop"></i> 登入後台
        </button>
      </div>
    </div>
  </footer>
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
