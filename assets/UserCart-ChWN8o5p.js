import{_ as r,c as l,a as d,b as t,w as m,F as p,d as _,r as a,o as u,s as v}from"./index-DJ7lbtWh.js";var h={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f,VITE_PATH:b}=h,V={data(){return{carts:{}}},methods:{getCart(){const s=`${f}/api/${b}/cart`;this.axios.get(s).then(e=>{this.carts=e.data.data}).catch(e=>{alert(e.response.data.message)})}},mounted(){this.getCart()}},g=_('<section class="cart-banner img-box mb-5"><div class="container"><div class="cart-banner-title text-center w-100"><h1 class="title mb-0">購物車</h1><span class="english fs-5 title">Cart</span></div></div></section><section class="container"><div class="row"><div class="col-8"><div class="product-description p-5 mx-auto mb-5"><div><h3 class="title mb-0">123</h3><span class="english fs-5 title">123</span></div><div class="mt-4 text-muted ls-2">購物車清單、刪除單一&amp;全部、調整數量</div></div></div><div class="col-4"><div class="product-description p-5 mx-auto mb-5">總計</div></div></div></section>',2),x={class:"container"};function E(s,e,C,F,S,T){const o=a("VeeField"),i=a("error-message"),c=a("VeeForm");return u(),l(p,null,[g,d("section",x,[t(c,{onSubmit:s.onSubmit},{default:m(({errors:n})=>[t(o,{id:"email",name:"email",type:"email",class:v(["form-control",{"is-invalid":n.email}]),placeholder:"請輸入 Email",rules:"email|required"},null,8,["class"]),t(i,{name:"email",class:"invalid-feedback"})]),_:1},8,["onSubmit"])])],64)}const R=r(V,[["render",E]]);export{R as default};
