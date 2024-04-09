<template>
  <VueLoading :active="isLoading" />
  <div class="area-img mb-4 mb-lg-5">
    <div class="img-box">
      <img :src="area.imageUrl" alt="" class="w-100" />
    </div>
  </div>
  <div class="text-center mb-4 mb-lg-5">
    <h2 class="title text-dark-green">{{ area.name }}</h2>
    <span class="english">{{ area.engName }}</span>
  </div>
  <div class="border-top border-bottom border-1 py-4 p-sm-4 p-lg-5 fw-normal text-muted">
    <p
      v-for="(content, index) in area.content ? area.content.split(';') : ''"
      :key="'content' + index"
      :class="{ 'mb-0': index === area.content.split(';').length - 1 }"
    >
      {{ content }}
    </p>
  </div>
  <div class="py-4 p-sm-4 p-lg-5">
    <div class="mb-2">
      <h4 class="title">園區資訊</h4>
      <span class="english fs-7 title">Information</span>
    </div>
    <ul class="area-information">
      <li class="ls-2 p-2 rounded-3">
        <div class="d-flex flex-column flex-md-row">
          <span class="text-dark-green me-3"><i class="bi bi-geo-alt-fill me-1"></i>園區地址</span>
          <a :href="area.mapUrl" title="前往 Google 地圖">{{ area.address }}</a>
        </div>
      </li>
      <li class="ls-2 p-2 rounded-3">
        <div class="d-flex flex-column flex-md-row">
          <span class="text-dark-green me-3"><i class="bi bi-clock me-1"></i>開園時間</span>
          <div>
            <span
              class="text-muted"
              v-for="(time, index) in area.time ? area.time.split(';') : ''"
              :key="'time' + index"
            >
              {{ time }}<br />
            </span>
          </div>
        </div>
      </li>
      <li class="ls-2 p-2 rounded-3">
        <div class="d-flex flex-column flex-md-row">
          <span class="text-dark-green me-3"><i class="bi bi-telephone me-1"></i>聯繫電話</span>
          <table class="text-muted">
            <tr v-for="tel in area.tel" :key="tel.name">
              <td class="pe-2">{{ tel.name }}</td>
              <td>
                <a :href="`tel:${tel.num}`">{{ tel.num }}</a>
              </td>
            </tr>
          </table>
        </div>
      </li>
      <li class="ls-2 p-2 rounded-3">
        <div class="d-flex">
          <span class="text-dark-green me-3"><i class="bi bi-emoji-smile me-1"></i>社群平台</span>
          <span v-if="area.fbUrl === ''" class="text-muted fw-normal">無</span>
          <a :href="area.fbUrl" class="english ls-0" v-else>
            <i class="bi bi-facebook"></i> Facebook
          </a>
        </div>
      </li>
      <li class="ls-2 p-2 rounded-3">
        <span class="text-dark-green me-3">
          <i class="bi bi-ticket-perforated me-1"></i>園內門票
        </span>
        <table class="table table-sm table-hover text-muted fs-7 ls-0">
          <thead>
            <tr class="text-dark-green">
              <th width="120">票價</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fee, index) in area.fee" :key="'fee' + index">
              <td>
                {{ fee.feeType }}
                <span v-if="fee.dayType" class="text-muted"> ({{ fee.dayType }})</span><br /><span
                  >${{ fee.fee }}</span
                >
              </td>

              <td class="fw-normal">
                <span
                  v-for="(memo, index) in fee.feeMemo ? fee.feeMemo.split(';') : ''"
                  :key="'memo' + index"
                  >{{ memo }}<br
                /></span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-end fs-7">
          *
          <a :href="area.url" class="fw-normal text-end"> 查看園內其他門票價格 </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const { VITE_BASE_URL } = import.meta.env;
import { toast } from '@/mixins/swalToast.js';

export default {
  data() {
    return {
      area: {},
      isLoading: false
    };
  },
  methods: {
    getArea() {
      const { id } = this.$route.params;

      this.isLoading = true;

      this.axios
        .get(`${VITE_BASE_URL}userAreas/userAreas.json`)
        .then((res) => {
          this.area = res.data.find((area) => area.id == id);
          this.isLoading = false;
        })
        .catch(() => {
          toast.fire({
            icon: 'error',
            title: '找不到資料！'
          });
        });
    }
  },
  watch: {
    // 監聽 id 變化觸發 getArea()
    '$route.params': 'getArea'
  },
  mounted() {
    this.getArea();
  }
};
</script>
