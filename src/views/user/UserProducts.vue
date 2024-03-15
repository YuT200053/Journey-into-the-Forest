<template>
  <main class="bg-secondary">
    <!-- banner  -->
    <section class="products-banner img-box">
      <div class="container">
        <!-- title -->
        <div class="products-banner-title text-center w-100">
          <h1 class="title mb-0">漫遊行程</h1>
          <span class="english fs-5 title">Top Picks Tours </span>
        </div>
      </div>
    </section>
    <!-- products-card -->
    <section class="products-journey container pb-6">
      <!-- card -->
      <div class="row g-3 my-4">
        <div class="col-12 col-xl-6" v-for="product in products" :key="product.id">
          <div class="card mb-3">
            <div class="row g-0">
              <router-link :to="`/products/${product.id}`" class="col-md-6 img-box">
                <img
                  :src="product.imageUrl"
                  class="img-fluid rounded-start h-100 w-100 object-fit-cover"
                  :alt="product.title"
                />
              </router-link>
              <div class="col-md-6">
                <div class="card-body d-flex flex-column h-100">
                  <router-link :to="`/products/${product.id}`">
                    <h4 class="card-title fw-bold mb-0 link-dark-green bg-light-green">
                      <span>{{ product.title }}</span>
                    </h4>
                  </router-link>
                  <div class="card-tags p-3">
                    <a
                      href="#"
                      class="badge rounded-pill btn btn-primary text-white me-1"
                      v-for="(category, index) in product.category.split(',').slice(0, 3)"
                      :key="'category' + index"
                    >
                      {{ `#${category}` }}
                    </a>
                  </div>
                  <p class="card-text fw-normal link-gray px-3">
                    {{ product.description }}
                  </p>
                  <div class="d-flex justify-content-between align-items-end px-3 pb-4 flex-grow-1">
                    <div>
                      <del class="text-gray fs-7 fw-normal"
                        >NT$
                        {{
                          product.origin_price ? product.origin_price.toLocaleString('en-US') : ''
                        }}
                        /位</del
                      ><br />
                      <span class="text-danger fs-5"
                        >NT$
                        {{ product.price ? product.price.toLocaleString('en-US') : '' }} /位</span
                      >
                    </div>
                    <div>
                      <div class="text-end">
                        <router-link
                          :to="`/products/${product.id}`"
                          class="read-more english link-primary me-4"
                        >
                          <span class="pe-2">Read More </span>
                          <i class="read-more-icon bi bi-arrow-up-right-circle-fill"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- pagination -->
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: pagination.current_page === 1 }">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              @click.prevent="getProducts(pagination.current_page - 1)"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            class="page-item"
            v-for="(item, index) in pagination.total_pages"
            :key="index"
            :class="{ active: item === pagination.current_page }"
          >
            <a class="page-link" href="#" @click.prevent="getProducts(item)">{{ item }}</a>
          </li>
          <li
            class="page-item"
            :class="{ disabled: pagination.current_page === pagination.total_pages }"
          >
            <a
              class="page-link"
              href="#"
              aria-label="Next"
              @click.prevent="getProducts(pagination.current_page + 1)"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </main>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      pagination: {}
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${VITE_URL}/api/${VITE_PATH}/products?page=${page}`;

      this.axios
        .get(api)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          alert(err.Response.data.message);
        });
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>
