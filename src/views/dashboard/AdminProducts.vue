<template>
  <div class="container mx-auto">
    <VueLoading :active="isLoading" />
    <h2 class="text-center">後台產品列表</h2>
    <div class="text-end my-3">
      <button type="button" class="btn btn-primary" @click.prevent="openModal('add')">
        建立新產品
      </button>
    </div>

    <table class="table align-middle">
      <thead>
        <tr>
          <td>分類</td>
          <td width="25%">產品名稱</td>
          <td>原價</td>
          <td>售價</td>
          <td>是否啟用</td>
          <td>編輯</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.origin_price }}</td>
          <td>{{ product.price }}</td>
          <td>
            <span v-if="product.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group btn-group-sm" role="group" aria-label="edit">
              <button
                type="button"
                class="btn btn-outline-primary"
                @click.prevent="openModal('edit', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click.prevent="openModal('delete', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <PaginationComponent :pagination="pagination" @get-products="getProducts" />

    <EditModal
      ref="editModal"
      :temp-product="tempProduct"
      :is-new="isNew"
      @edit-product="editProduct"
    />

    <DeleteModal ref="deleteModal" :temp-item="tempProduct" @delete-item="deleteProduct" />
  </div>
</template>

<script>
import axios from 'axios';
import PaginationComponent from '@/components/PaginationComponent.vue';
import EditModal from '@/components/EditModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import { toast } from '@/mixins/swalToast.js';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      pagination: {},
      // 用來判斷是不是要新增產品
      isNew: false,
      tempProduct: {
        imagesUrl: []
      },
      deleteModal: '',
      isLoading: false
    };
  },
  components: {
    PaginationComponent,
    EditModal,
    DeleteModal
  },
  methods: {
    getProducts(page = 1) {
      const api = `${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}`;
      this.isLoading = true;

      axios
        .get(api)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '取得產品列表失敗。'
          });
          this.isLoading = false;
        });
    },
    // 判斷開啟哪個 modal
    openModal(isNew, item) {
      this.isLoading = true;

      if (isNew === 'add') {
        this.isNew = true;
        this.tempProduct = {
          imagesUrl: []
        };

        // 初始化完成後，可用名稱直接叫
        this.$nextTick(() => {
          this.$refs.editModal.openModal();
        });

        this.isLoading = false;
      } else if (isNew === 'edit') {
        this.isNew = false;
        this.tempProduct = { ...item };
        // tempProduct.imagesUrl 要補上空陣列，否則沒有東西會出錯
        this.tempProduct.imagesUrl = this.tempProduct.imagesUrl || [];

        // this.$refs.editModal.openModal();
        this.$nextTick(() => {
          this.$refs.editModal.openModal();
        });

        this.isLoading = false;
      } else if (isNew === 'delete') {
        this.tempProduct = { ...item };
        this.tempProduct.imagesUrl = this.tempProduct.imagesUrl || [];
        this.$refs.deleteModal.openModal();

        this.isLoading = false;
      }
    },
    // 判斷是編輯產品還是新增
    editProduct(tempProductData) {
      // 預設為新增產品
      let api = `${VITE_URL}/api/${VITE_PATH}/admin/product`;
      let http = 'post';

      // 用 isNew 判斷是不是編輯
      if (!this.isNew) {
        api = `${VITE_URL}/api/${VITE_PATH}/admin/product/${tempProductData.id}`;
        http = 'put';
      }

      this.isLoading = true;

      axios[http](api, { data: tempProductData })
        .then(() => {
          toast.fire({
            icon: 'success',
            title: '已成功新增/編輯產品！'
          });
          this.$refs.editModal.hideModal();
          this.getProducts();
          this.isLoading = false;
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '新增/編輯產品失敗。'
          });
          this.isLoading = false;
        });
    },
    deleteProduct() {
      const api = `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;

      axios
        .delete(api)
        .then(() => {
          toast.fire({
            icon: 'success',
            title: '已成功刪除此產品！'
          });
          this.$refs.deleteModal.hideModal();
          this.getProducts();
          this.isLoading = false;
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '刪除此產品失敗。'
          });
          this.isLoading = false;
        });
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>
@/mixins/swalToast.js
