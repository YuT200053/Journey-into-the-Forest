import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// 導入 vue axios，可以直接用 this.axios
import axios from 'axios';
import VueAxios from 'vue-axios';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// 需客製變數，bootstrap 由 all.scss 導入
import './assets/all.scss';

import App from './App.vue';
import router from './router';

// Vee-Validate 規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// Vee-Validate 語系
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
});

// 設定預設語系
setLocale('zh_TW');

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(VueAxios, axios);
app.component('VeeForm', Form);
app.component('VeeField', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('VueLoading', Loading);

app.mount('#app');
