<template>
  <header>
    <!-- navbar  -->
    <nav class="navbar navbar-expand-lg fixed-top border-bottom">
      <div class="container py-2">
        <!-- logo -->
        <RouterLink to="/" class="navbar-brand">
          <img
            src="../../../public/logo/logo-navbar.png"
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
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <router-view></router-view>

  <footer class="footer bg-secondary">
    <!-- footer list -->
    <ul class="d-flex mb-2 mb-lg-0 px-5 px-lg-6 py-3 text-center border-top border-bottom border-1">
      <li class="border-end border-1 pe-4 py-2">
        <a class="link-gray" href="#">最新消息</a>
      </li>
      <li class="border-end border-1 px-4 py-2">
        <router-link to="/products" class="link-gray">漫遊行程</router-link>
      </li>
      <li class="border-end border-1 px-4 py-2">
        <a class="link-gray" href="#">所有地點</a>
      </li>
      <li class="px-4 py-2">
        <a class="link-gray" href="#">園內住宿</a>
      </li>
      <li class="py-2 py-lg-0">
        <router-link to="/cart" class="btn btn-primary text-white ms-lg-3 h-100">
          <i class="bi bi-bag me-1"></i>查看購物車
        </router-link>
      </li>
    </ul>
    <div class="px-5 px-lg-6 py-6">
      <div class="fs-4 mb-3">
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
      <div class="d-flex justify-content-between align-items-center">
        <div class="english fs-6 text-gray">Copyright © 漫途森旅 All Rights Reserved.</div>
        <button type="button" class="btn btn-dark-green text-white" href="#">
          <i class="bi bi-laptop"></i> 登入後台
        </button>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style></style>
