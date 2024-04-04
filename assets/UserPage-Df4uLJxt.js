import{S as c}from"./sweetalert2.all-DNUN9BcK.js";import{C as g}from"./bootstrap.esm-NBXIyAKZ.js";import{_ as v,c as x,a as e,b as s,w as a,d as y,F as w,e as b,r,o as k,f as i,t as E,n as T}from"./index-aJT6rMcZ.js";import{_ as V}from"./logo-4l9ZEgIG.js";const S="/Journey-into-the-Forest/logo/logo-navbar.png";var F={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",VITE_BASE_URL:"/Journey-into-the-Forest/",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:C,VITE_PATH:R}=F,j=c.mixin({toast:!0,position:"top-end",showConfirmButton:!1,background:"#f4f9f3",color:"#505843",timer:3e3,timerProgressBar:!0,didOpen:o=>{o.onmouseenter=c.stopTimer,o.onmouseleave=c.resumeTimer}}),$={data(){return{carts:{},navbar:null}},methods:{getCart(){const o=`${C}/api/${R}/cart`;this.axios.get(o).then(t=>{this.carts=t.data.data}).catch(t=>{alert(t.response.data.message)})},addSub(){this.$refs.form.resetForm(),j.fire({icon:"success",title:"已成功訂閱漫途森旅！"})},navbarToggle(){this.navbar._isShown?this.navbar.hide():this.navbar.show()}},mounted(){this.getCart(),this.navbar=new g(this.$refs.navbar,{toggle:!1}),this.navbar.hide(),this.$router.beforeEach((o,t,d)=>{this.navbar.hide(),d()})}},B={class:"navbar navbar-expand-lg fixed-top border-bottom"},L={class:"container py-2"},A=e("img",{src:S,alt:"Logo",height:"50",class:"d-inline-block align-text-top object-fit-cover w-100"},null,-1),I=e("i",{class:"bi bi-list fs-1 burger"},null,-1),M=[I],P={class:"collapse navbar-collapse mt-3 mt-lg-0",id:"navbar",ref:"navbar"},U={class:"navbar-nav ms-auto mb-2 mb-lg-0 text-center"},D=e("li",{class:"nav-item px-3 border-end-lg border-1 py-2"},[e("a",{class:"nav-link",href:"#"},"最新消息")],-1),N={class:"nav-item px-3 border-end-lg border-1 py-2"},J=e("li",{class:"nav-item px-3 border-end-lg border-1 py-2"},[e("a",{class:"nav-link",href:"#"},"所有地點")],-1),O={class:"nav-item px-3 py-2"},H={class:"nav-item px-3 py-2 py-lg-0"},q=e("i",{class:"bi bi-bag me-1"},null,-1),z={class:"badge bg-danger rounded-pill"},G={class:"footer bg-secondary"},K={class:"bg-light-green border-1 border-top border-bottom p-4 p-lg-6 d-flex justify-content-between flex-column flex-xl-row"},Q=e("img",{src:V,alt:"漫途森旅",class:"footer-logo mb-4 mb-xl-0"},null,-1),W={class:"text-start text-xl-end d-flex flex-column justify-content-between flex-shirk-1"},X=b('<div class="mb-3"><h3 class="fw-bold ls-5"> 享受無拘<span class="text-primary">漫遊之途</span><br> 浸入盎然<span class="text-primary">森林</span>來場放慢身心的<span class="text-primary">旅程</span></h3><h5 class="fw-bold">Meander, Explore, Forest &amp; Travel</h5></div>',1),Y=e("div",{class:"text-muted mb-1 ls-2"},"立即訂閱，接收最新活動消息與優惠！",-1),Z={class:"d-flex justify-content-lg-end flex-column flex-sm-row"},ee={class:"me-1"},te=e("button",{class:"btn btn-primary text-white btn-height",type:"submit"},"立即訂閱",-1),se={class:"px-4 px-lg-6 py-6"},oe=b('<div class="d-flex justify-content-center justify-content-md-start fs-4 mb-3"><a href="https://www.facebook.com/" class="link-dark-green footer-icon"><i class="bi bi-facebook"></i></a><a href="https://www.instagram.com/" class="link-dark-green footer-icon"><i class="bi bi-instagram mx-4"></i></a><a href="mailto:journey-into-the-forest@gmail.com" class="link-dark-green footer-icon"><i class="bi bi-envelope"></i></a></div>',1),ae={class:"d-flex flex-column flex-md-row justify-content-between align-items-center"},ne=e("div",{class:"english fs-6 text-gray mb-3 mb-md-0"}," Copyright © 漫途森旅 All Rights Reserved. ",-1),re=e("i",{class:"bi bi-laptop"},null,-1);function ie(o,t,d,le,m,_){const n=r("RouterLink"),h=r("router-view"),p=r("VeeField"),f=r("ErrorMessage"),u=r("VeeForm");return k(),x(w,null,[e("header",null,[e("nav",B,[e("div",L,[s(n,{to:"/",class:"navbar-brand"},{default:a(()=>[A]),_:1}),e("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation",onClick:t[0]||(t[0]=y(l=>_.navbarToggle(),["prevent"]))},M),e("div",P,[e("ul",U,[D,e("li",N,[s(n,{to:"/products",class:"nav-link"},{default:a(()=>[i("漫遊行程")]),_:1})]),J,e("li",O,[s(n,{to:"/accommodations",class:"nav-link"},{default:a(()=>[i("園內住宿")]),_:1})]),e("li",H,[s(n,{to:"/cart",class:"btn btn-primary text-white ms-lg-3"},{default:a(()=>[q,i("購物車 "),e("span",z,E(m.carts.carts?m.carts.carts.length:""),1)]),_:1})])])],512)])])]),s(h),e("footer",G,[e("div",K,[Q,e("div",W,[X,e("div",null,[Y,s(u,{onSubmit:t[1]||(t[1]=l=>_.addSub()),ref:"form"},{default:a(({errors:l})=>[e("div",Z,[e("div",ee,[s(p,{id:"email",name:"email",type:"email",class:T(["form-control w-100",{"is-invalid":l.email}]),placeholder:"請輸入 Email",rules:"email|required"},null,8,["class"]),s(f,{name:"email",class:"invalid-feedback"})]),te])]),_:1},512)])])]),e("div",se,[oe,e("div",ae,[ne,s(n,{to:"/login",class:"btn btn-dark-green text-white",href:"#"},{default:a(()=>[re,i(" 登入後台 ")]),_:1})])])])],64)}const be=v($,[["render",ie]]);export{be as default};