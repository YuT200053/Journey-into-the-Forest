<template>
  <VueLoading :active="isLoading" />
  <section class="accommodations-banner img-box">
    <div class="container">
      <div class="accommodations-banner-title text-center w-100">
        <h1 class="title mb-0">園內住宿</h1>
        <span class="english fs-5 title">Accommodations</span>
      </div>
      <p class="text-center ls-2 my-3 fw-normal text-muted">點選以下連結或撥打聯絡電話聯繫訂房</p>
    </div>
  </section>

  <section class="accommodations-card container mb-7">
    <div class="row g-3">
      <div
        class="col-12 col-md-6 col-lg-4 col-xl-3"
        v-for="place in accommodations"
        :key="place.id"
      >
        <div class="card h-100">
          <a :href="place.url">
            <div class="img-box">
              <img :src="place.image" class="card-img-top w-100 h-100" :alt="place.name" />
            </div>
            <div class="card-body">
              <h5 class="card-title bg-primary text-white title">{{ place.name }}</h5>
            </div></a
          >
          <ul class="list-group list-group-flush fs-7">
            <li class="list-group-item english">
              <a :href="`tel:${place.phone}`">
                <i class="bi bi-telephone-fill"></i> {{ place.phone }}
              </a>
            </li>
            <li class="list-group-item">
              <a href="#"> <i class="bi bi-geo-alt-fill"></i> {{ place.area }} </a>
            </li>
            <li class="list-group-item text-muted">
              <i class="bi bi-house-fill"></i> {{ place.address }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const { VITE_BASE_URL } = import.meta.env;
import { toast } from '@/mixins/swalToast.js';

export default {
  data() {
    return {
      accommodations: [],
      isLoading: false
    };
  },
  mounted() {
    this.isLoading = true;

    this.axios
      .get(`${VITE_BASE_URL}userAccommodations/userAccommodations.json`)
      .then((res) => {
        this.accommodations = res.data;
        this.isLoading = false;
      })
      .catch(() => {
        toast.fire({
          icon: 'error',
          title: '找不到資料！'
        });
      });
  }
};
</script>
@/mixins/swalToast.js
