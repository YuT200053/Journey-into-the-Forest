<template>
  <VueLoading :active="isLoading" />
  <section class="news-banner img-box mb-4">
    <div class="container">
      <div class="news-banner-title text-center w-100">
        <h1 class="title mb-0">步道最新消息</h1>
        <span class="english fs-5 title">Trails News</span>
      </div>
      <p class="fs-7 fw-normal text-center text-muted">
        僅提供目前有狀況之步道路況，步道路況為正常則不顯示
      </p>
    </div>
  </section>

  <div class="container">
    <div class="news-list p-5 mb-5">
      <ul class="mb-0">
        <li class="news-list-li fs-7 ls-2 fw-normal mb-3" v-for="news in news" :key="news.TRAILID">
          <div class="d-flex flex-column flex-lg-row align-items-start">
            <div class="news-list-date english text-primary me-3 mb-1 mb-lg-0">
              {{ news.ANN_DATE.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3') }}
            </div>
            <span class="badge rounded-pill bg-primary me-3 mb-1 mb-lg-0">
              {{ news.TR_TYP }}
            </span>
            <div>
              <span class="news-list-title fw-bold text-dark-green">
                {{ news.TR_CNAME }}
              </span>
              <br />
              <span class="news-list-content text-muted">
                {{ news.TITLE }}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import newsStore from '@/stores/newsStore.js';
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(newsStore, ['news'])
  },
  methods: {
    ...mapActions(newsStore, ['getNews'])
  },
  mounted() {
    this.getNews();
    console.log(this.news);
  }
};
</script>
