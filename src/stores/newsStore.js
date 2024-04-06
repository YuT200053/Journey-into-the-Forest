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
            // 将日期字符串转换为数字进行比较，例如 "20220406" 变成 20220406
            const dateA = parseInt(a.ANN_DATE);
            const dateB = parseInt(b.ANN_DATE);
            // 比较日期，并返回比较结果
            return dateB - dateA;
          });
          console.log(this.news);
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
