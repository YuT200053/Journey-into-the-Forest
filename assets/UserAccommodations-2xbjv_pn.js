import{t as d}from"./swalToast-BohVCrFO.js";import{_,c as e,d as m,b as s,F as l,y as h,f as u,r as f,o as i,t as o,g as a}from"./index-BhaRJfxO.js";var g={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",VITE_BASE_URL:"/Journey-into-the-Forest/",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_BASE_URL:p}=g,v={data(){return{accommodations:[],isLoading:!1}},mounted(){this.isLoading=!0,this.axios.get(`${p}userAccommodations/userAccommodations.json`).then(c=>{this.accommodations=c.data,this.isLoading=!1}).catch(()=>{d.fire({icon:"error",title:"找不到資料！"})})}},b=u('<section class="accommodations-banner img-box"><div class="container"><div class="accommodations-banner-title text-center w-100"><h1 class="title mb-0">園內住宿</h1><span class="english fs-5 title">Accommodations</span></div><p class="text-center fs-7 my-3 fw-normal text-muted">點選以下連結或撥打聯絡電話聯繫訂房</p></div></section>',1),x={class:"accommodations-card container mb-7"},L={class:"row g-3"},V={class:"card h-100"},E=["href"],y={class:"img-box"},A=["src","alt"],S={class:"card-body"},B={class:"card-title bg-primary text-white title"},R={class:"list-group list-group-flush fs-7"},T={class:"list-group-item english"},w=["href"],U=s("i",{class:"bi bi-telephone-fill"},null,-1),D={class:"list-group-item"},F={href:"#"},I=s("i",{class:"bi bi-geo-alt-fill"},null,-1),N={class:"list-group-item text-muted"},$=s("i",{class:"bi bi-house-fill"},null,-1);function k(c,J,O,P,n,j){const r=f("VueLoading");return i(),e(l,null,[m(r,{active:n.isLoading},null,8,["active"]),b,s("section",x,[s("div",L,[(i(!0),e(l,null,h(n.accommodations,t=>(i(),e("div",{class:"col-12 col-md-6 col-lg-4 col-xl-3",key:t.id},[s("div",V,[s("a",{href:t.url},[s("div",y,[s("img",{src:t.image,class:"card-img-top w-100 h-100",alt:t.name},null,8,A)]),s("div",S,[s("h5",B,o(t.name),1)])],8,E),s("ul",R,[s("li",T,[s("a",{href:`tel:${t.phone}`},[U,a(" "+o(t.phone),1)],8,w)]),s("li",D,[s("a",F,[I,a(" "+o(t.area),1)])]),s("li",N,[$,a(" "+o(t.address),1)])])])]))),128))])])],64)}const M=_(v,[["render",k]]);export{M as default};