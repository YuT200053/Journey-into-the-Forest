<template>
  <div class="container mx-auto">
    <VueLoading :active="isLoading" />
    <h2 class="text-center">後台訂單</h2>
    <table class="table align-middle">
      <thead>
        <tr>
          <td>購買時間</td>
          <td width="25%">Email</td>
          <td width="25%">購買款項</td>
          <td>應付金額</td>
          <td>是否付款</td>
          <td>編輯</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <!-- 將 create_at 轉換為時間，要記得乘 1000，並轉換為當地時間格式 -->
          <td>{{ new Date(order.create_at * 1000).toLocaleDateString() }}</td>
          <td>{{ order.user.email }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="product in order.products" :key="product.id">
                {{ product.product.title }} {{ product.qty }} {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ order.total }}</td>
          <td>
            <div class="form-check form-switch">
              <!-- 已付款時切為 checked 狀態 -->
              <!-- 當變更 input 狀態時，觸發 updateOrder -->
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                :id="`paidSwitch${order.id}`"
                v-model="order.is_paid"
                :checked="order.is_paid"
                @change="updateOrder(order)"
              />
              <label class="form-check-label" :for="`paidSwitch${order.id}`">
                <span v-if="order.is_paid">已付款</span><span v-else>未付款</span></label
              >
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm" role="group" aria-label="edit">
              <button
                type="button"
                class="btn btn-outline-primary"
                @click.prevent="openModal(order, 'view')"
              >
                檢視
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click.prevent="openModal(order, 'delete')"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationComponent :pagination="pagination" @get-products="getOrders" />
    <OrderModal ref="orderModal" :temp-order="tempOrder" @update-order="updateOrder" />
    <DeleteModal ref="deleteModal" :temp-item="tempOrder" @delete-item="deleteOrder" />
  </div>
</template>

<script>
import axios from 'axios';
import PaginationComponent from '@/components/PaginationComponent.vue';
import OrderModal from '@/components/OrderModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import { toast } from '@/mixins/swalToast.js';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      orders: {},
      pagination: {},
      isLoading: false,
      tempOrder: {}
    };
  },
  components: {
    PaginationComponent,
    OrderModal,
    DeleteModal
  },
  methods: {
    getOrders(page = 1) {
      const api = `${VITE_URL}/api/${VITE_PATH}/admin/orders?page=${page}`;
      this.isLoading = true;

      axios
        .get(api)
        .then((res) => {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '取得訂單列表失敗。'
          });
          this.isLoading = false;
        });
    },
    openModal(order, isView) {
      this.tempOrder = { ...order };
      this.isLoading = true;

      if (isView === 'view') {
        this.$nextTick(() => {
          this.$refs.orderModal.openModal();
        });

        this.isLoading = false;
      } else if (isView === 'delete') {
        this.$refs.deleteModal.openModal();
        this.isLoading = false;
      }
    },
    // 修改付款資訊
    updateOrder(order) {
      const api = `${VITE_URL}/api/${VITE_PATH}/admin/order/${order.id}`;
      const paid = {
        is_paid: order.is_paid
      };
      this.isLoading = true;

      axios
        .put(api, { data: paid })
        .then(() => {
          toast.fire({
            icon: 'success',
            title: '成功付款資訊！'
          });
          this.$refs.orderModal.hideModal();
          this.getOrders(this.pagination.current_page);
          this.isLoading = false;
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '修改付款資訊失敗。'
          });
          this.isLoading = false;
        });
    },
    deleteOrder() {
      const api = `${VITE_URL}/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`;
      this.isLoading = true;

      axios
        .delete(api)
        .then((rs) => {
          toast.fire({
            icon: 'success',
            title: '已成功刪除此訂單！'
          });
          this.getOrders(this.pagination.current_page);
          this.$refs.deleteModal.hideModal();
          this.isLoading = false;
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '刪除訂單失敗。'
          });
          this.isLoading = false;
        });
    }
  },
  mounted() {
    this.getOrders();
  }
};
</script>
@/mixins/swalToast.js
