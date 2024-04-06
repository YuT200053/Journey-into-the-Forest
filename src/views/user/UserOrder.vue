<template>
  <!-- <VueLoading :active="isLoading" /> -->
  <section class="order-banner img-box mb-3">
    <div class="container">
      <div class="order-banner-title text-center w-100">
        <h1 class="title mb-3">
          <i class="bi bi-check-circle-fill text-success me-1"></i>感謝您的購買
        </h1>
        <span class="fs-6 text-primary fw-normal">
          我們已成功收到您的訂單！<br />確認完您的款項後，將寄送電子票券至您的電子郵件。
        </span>
      </div>
      <div class="order-banner-btn py-5 my-5 border-top border-bottom border-1 text-center">
        <h4 class="fw-bold ls-2">立即查看您的詳細訂單資料</h4>
        <button type="button" class="btn btn-primary text-white">
          <i class="bi bi-list-nested me-1"></i>前往我的訂單
        </button>
      </div>
    </div>
  </section>

  <section class="container order-info pb-7">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 mb-3">
        <div class="sticky-top">
          <div class="product-description p-5">
            <div class="mb-3">
              <h4 class="title mb-0">購買人資料</h4>
              <span class="english title ls-2 fs-7">Purchaser Information</span>
            </div>
            <div class="mb-3">
              姓名<br />
              <span class="text-dark-green">{{ user.name }}</span>
            </div>
            <div class="mb-3">
              電子信箱<br />
              <span class="text-dark-green">{{ user.email }}</span>
            </div>
            <div class="mb-3">
              聯繫電話<br />
              <span class="text-dark-green">{{ user.tel }}</span>
            </div>
            <div class="mb-3">
              聯繫地址<br />
              <span class="text-dark-green">{{ user.address }}</span>
            </div>
            <div class="mb-3">
              付款後五碼<br />
              <span class="text-dark-green">{{ user.pay }}</span>
            </div>
            <div class="text-end">
              <span class="text-muted fs-7">訂單編號：{{ orderId }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-8">
        <div class="mb-5">
          <div
            class="p-3 mb-2 bg-secondary rounded-3 d-flex border border-1"
            v-for="product in products"
            :key="product.id"
          >
            <div class="row gx-2 align-items-center">
              <div class="col-12 col-lg-3 mb-1 mb-sm-0">
                <img :src="product.product.imageUrl" class="w-100 rounded-3 mb-1 mb-lg-0" />
              </div>
              <div class="col-12 col-lg-9">
                <h5 class="fw-bold">{{ product.product.title }}</h5>
                <div class="mb-1">
                  <a href="#" class="link-primary">
                    <i class="bi bi-geo-alt-fill me-1"></i>{{ product.product.unit }}
                  </a>
                  <br />
                  <span class="text-dark-green">
                    $ {{ product.product.price.toLocaleString('en-US') }} / 張
                  </span>
                  <div class="text-muted">共 {{ product.qty }} 張</div>
                </div>
                <div class="text-end">
                  <button type="button" class="btn btn-outline-primary btn-sm">
                    <i class="bi bi-telephone-forward me-1"></i>立即預約行程
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="product-content mb-5 mb-lg-0">
          <div class="text-start mb-1">
            <h5 class="title mb-0">備註</h5>
            <span class="english fs-7 title">Notes</span>
          </div>
          <ol class="fs-7 text-muted fw-normal">
            <li>
              您所購買的電子票券將於付款日後 3 - 5 個工作天 (不包含例假日與國定假日)
              寄送至您的電子郵件中，若未收到也請記得於垃圾郵件中察看是否有收到電子票券。
            </li>
            <li>
              若您所購買的電子票券未於付款日後 3 - 5個工作天 (不包含例假日與國定假日)
              寄送至您的電子郵件中，請立刻聯繫我們。客服專線：<a href="tel:(02)1234-5678"
                >(02)1234-5678</a
              >，客服 Email：<a href="mailto:journey-into-the-forest@gmail.com"
                >journey-into-the-forest@gmail.com</a
              >。
            </li>
            <li>
              使用電子票券前，請至少提前一週自行致電至該國家森林遊樂區預約接駁專車、導覽活動、用餐時間與入住日期等。若未提前預約行程，無法於該國家森林遊樂區立即使用該電子票券。
            </li>
            <li>
              預訂行程依該國家森林遊樂區當期房況、人數等不保證使用電子票券便能立刻預訂成功，因此若遇例假日、國定假日或其他熱門檔期，建議提早確認並預訂。
            </li>
            <li>
              各國家森林遊樂區聯繫方式歡迎至此頁面確認：<a href="#">所有地點</a
              >。或是直接點擊上方您所購買的電子票券旁按鈕，立即預約行程。
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
import { toast } from '@/mixins/swalToast.js';

export default {
  data() {
    return {
      orderId: '',
      user: {},
      products: {}
    };
  },
  mounted() {
    const api = `${VITE_URL}/api/${VITE_PATH}/orders`;

    this.axios
      .get(api)
      .then((res) => {
        this.user = res.data.orders[0].user;
        this.products = Object.values(res.data.orders[0].products);
        this.orderId = res.data.orders[0].id;
      })
      .catch(() => {
        toast.fire({
          icon: 'error',
          title: '取得訂單資料失敗。'
        });
      });
  }
};
</script>
