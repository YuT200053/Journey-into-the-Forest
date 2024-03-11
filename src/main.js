// 導入 bootstrap
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// 導入 vue axios，可以直接用 this.axios
import axios from 'axios';
import VueAxios from 'vue-axios';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// 需客製變數，bootstrap 由 all.scss 導入
import './assets/all.scss';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.mount('#app');
