import { defineStore } from 'pinia';

export default defineStore('cartStore', {
  // data, methods, computed
  // state, action, getters
  state: () => {
    return {
      cart: []
    };
  },
  actions: {
    // 加入購物車
  }
});
