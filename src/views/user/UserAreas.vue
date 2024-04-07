<template>
  <!-- <VueLoading :active="isLoading" /> -->
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
          <option value="1">太平山國家森林遊樂區</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="area-info p-5" v-if="area !== '0'"><router-view /></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      area: '0'
    };
  },
  methods: {
    changeArea() {
      this.$router.push(`/areas/${this.area}`);
      console.log(this.area);
    }
  }
};
</script>
