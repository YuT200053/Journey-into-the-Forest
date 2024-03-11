<template>
  <div>首頁</div>
  <!-- subscription -->
  <div
    class="bg-light-green border-1 border-top p-5 p-lg-6 d-flex justify-content-between flex-column flex-xl-row"
  >
    <!-- logo -->
    <img src="../../../public/logo/logo.png" alt="漫途森旅" class="footer-logo mb-5 mb-xl-0" />
    <div class="text-start text-xl-end d-flex flex-column justify-content-between flex-shirk-1">
      <!-- slogan -->
      <div class="mb-3">
        <h3 class="fw-bold ls-5">
          享受無拘<span class="text-primary">漫遊之途</span><br />浸入盎然<span class="text-primary"
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
</template>
