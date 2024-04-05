import { defineStore } from 'pinia';
import axios from 'axios';
import { toast } from '@/mixins/swalToast.js';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('cartStore', {
  // data, methods, computed
  // state, action, getters
  state: () => {
    return {
      carts: [],
      isLoading: false
    };
  },
  actions: {
    getCart() {
      const api = `${VITE_URL}/api/${VITE_PATH}/cart`;
      this.isLoading = true;

      return axios
        .get(api)
        .then((res) => {
          this.carts = res.data.data;

          this.isLoading = false;
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '取得購物車列表失敗。'
          });
          this.isLoading = false;
        });
    }
  }
});
