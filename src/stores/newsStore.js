import { defineStore } from 'pinia';
import axios from 'axios';
import { toast } from '@/mixins/swalToast.js';

export default defineStore('newsStore', {
  state: () => {
    return {
      news: [],
      isLoading: false
    };
  },
  actions: {
    getNews() {
      this.isLoading = true;

      return axios
        .get('https://recreation.forest.gov.tw/mis/api/OpenStatus/Trail')
        .then((res) => {
          this.news = Object.values(res.data).sort((a, b) => {
            const dateA = parseInt(a.ANN_DATE);
            const dateB = parseInt(b.ANN_DATE);
            return dateB - dateA;
          });
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
