<template>
  <section class="area-banner img-box mb-5">
    <div class="container">
      <div class="area-banner-title text-center w-100">
        <h1 class="title mb-0">所有國家森林遊樂區</h1>
        <span class="english fs-5 title">National Forest Recreation Area</span>
      </div>
    </div>
  </section>

  <section class="area-content mb-7">
    <div class="container">
      <div class="sticky-top">
        <select
          class="form-select mb-3 text-center ls-2 text-dark-green"
          aria-label="Default select example"
          @change="changeArea()"
          v-model="area"
        >
          <option value="0" disabled selected>今天，你想去哪座森林？</option>
          <option :value="i" v-for="i in areas.length" :key="'area' + i">
            {{ areas[i - 1].name }}
          </option>
        </select>
      </div>

      <div class="area-info p-4 p-lg-5" v-if="area !== '0'"><RouterView /></div>
    </div>
  </section>
</template>

<script>
const { VITE_BASE_URL } = import.meta.env;
import { toast } from '@/mixins/swalToast.js';

export default {
  data() {
    return {
      area: '0',
      areas: []
    };
  },
  methods: {
    changeArea() {
      this.$router.push(`/areas/${this.area}`);
    },
    changeId() {
      this.area = this.$route.params.id;
      this.changeArea();
    }
  },
  watch: {
    // 當網址改變，select的值也改變
    '$route.params': 'changeId'
  },
  mounted() {
    this.axios
      .get(`${VITE_BASE_URL}userAreas/userAreas.json`)
      .then((res) => {
        this.areas = res.data;
      })
      .catch(() => {
        toast.fire({
          icon: 'error',
          title: '找不到資料！'
        });
      });
    this.changeId();
  }
};
</script>
