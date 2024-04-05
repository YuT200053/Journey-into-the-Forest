import{C as g}from"./bootstrap.esm-NBXIyAKZ.js";import{t as u}from"./swalToast-CsBLh-4m.js";import{_ as v,c as x,a as e,b as s,w as o,d as y,F as w,e as m,r as n,o as k,f as r,t as E,n as V}from"./index-CF5zW5Bt.js";import{_ as F}from"./logo-4l9ZEgIG.js";const T="/Journey-into-the-Forest/logo/logo-navbar.png";var R={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",VITE_BASE_URL:"/Journey-into-the-Forest/",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:C,VITE_PATH:S}=R,j={data(){return{carts:{},navbar:null}},methods:{getCart(){const l=`${C}/api/${S}/cart`;this.axios.get(l).then(t=>{this.carts=t.data.data}).catch(t=>{alert(t.response.data.message)})},addSub(){this.$refs.form.resetForm(),u.fire({icon:"success",title:"已成功訂閱漫途森旅！"})},navbarToggle(){this.navbar.toggle()}},mounted(){this.getCart(),this.navbar=new g(this.$refs.navbar,{toggle:!1}),this.$router.beforeEach((l,t,c)=>{this.navbar.hide(),c()})}},$={class:"navbar navbar-expand-lg fixed-top border-bottom"},L={class:"container py-2"},A=e("img",{src:T,alt:"Logo",height:"50",class:"d-inline-block align-text-top object-fit-cover w-100"},null,-1),B=e("i",{class:"bi bi-list fs-1 burger"},null,-1),I=[B],M={class:"collapse navbar-collapse mt-3 mt-lg-0",id:"navbar",ref:"navbar"},U={class:"navbar-nav ms-auto mb-2 mb-lg-0 text-center"},D=e("li",{class:"nav-item px-3 border-end-lg border-1 py-2"},[e("a",{class:"nav-link",href:"#"},"最新消息")],-1),N={class:"nav-item px-3 border-end-lg border-1 py-2"},P=e("li",{class:"nav-item px-3 border-end-lg border-1 py-2"},[e("a",{class:"nav-link",href:"#"},"所有地點")],-1),J={class:"nav-item px-3 py-2"},H={class:"nav-item px-3 py-2 py-lg-0"},O=e("i",{class:"bi bi-bag me-1"},null,-1),q={class:"badge bg-danger rounded-pill"},z={class:"footer bg-secondary"},G={class:"bg-light-green border-1 border-top border-bottom p-4 p-lg-6 d-flex justify-content-between flex-column flex-xl-row"},K=e("img",{src:F,alt:"漫途森旅",class:"footer-logo mb-4 mb-xl-0"},null,-1),Q={class:"text-start text-xl-end d-flex flex-column justify-content-between flex-shirk-1"},W=m('<div class="mb-3"><h3 class="fw-bold ls-5"> 享受無拘<span class="text-primary">漫遊之途</span><br> 浸入盎然<span class="text-primary">森林</span>來場放慢身心的<span class="text-primary">旅程</span></h3><h5 class="fw-bold">Meander, Explore, Forest &amp; Travel</h5></div>',1),X=e("div",{class:"text-muted mb-1 ls-2"},"立即訂閱，接收最新活動消息與優惠！",-1),Y={class:"d-flex justify-content-lg-end flex-column flex-sm-row"},Z={class:"me-1"},ee=e("button",{class:"btn btn-primary text-white btn-height",type:"submit"},"立即訂閱",-1),te={class:"px-4 px-lg-6 py-6"},se=m('<div class="d-flex justify-content-center justify-content-md-start fs-4 mb-3"><a href="https://www.facebook.com/" class="link-dark-green footer-icon"><i class="bi bi-facebook"></i></a><a href="https://www.instagram.com/" class="link-dark-green footer-icon"><i class="bi bi-instagram mx-4"></i></a><a href="mailto:journey-into-the-forest@gmail.com" class="link-dark-green footer-icon"><i class="bi bi-envelope"></i></a></div>',1),oe={class:"d-flex flex-column flex-md-row justify-content-between align-items-center"},ae=e("div",{class:"english fs-6 text-gray mb-3 mb-md-0"}," Copyright © 漫途森旅 All Rights Reserved. ",-1),ne=e("i",{class:"bi bi-laptop"},null,-1);function re(l,t,c,le,d,_){const a=n("RouterLink"),b=n("router-view"),p=n("VeeField"),h=n("ErrorMessage"),f=n("VeeForm");return k(),x(w,null,[e("header",null,[e("nav",$,[e("div",L,[s(a,{to:"/",class:"navbar-brand"},{default:o(()=>[A]),_:1}),e("button",{class:"navbar-toggler border-0",type:"button",onClick:t[0]||(t[0]=y(i=>_.navbarToggle(),["prevent"]))},I),e("div",M,[e("ul",U,[D,e("li",N,[s(a,{to:"/products",class:"nav-link"},{default:o(()=>[r("漫遊行程")]),_:1})]),P,e("li",J,[s(a,{to:"/accommodations",class:"nav-link"},{default:o(()=>[r("園內住宿")]),_:1})]),e("li",H,[s(a,{to:"/cart",class:"btn btn-primary text-white ms-lg-3"},{default:o(()=>[O,r("購物車 "),e("span",q,E(d.carts.carts?d.carts.carts.length:""),1)]),_:1})])])],512)])])]),s(b),e("footer",z,[e("div",G,[K,e("div",Q,[W,e("div",null,[X,s(f,{onSubmit:t[1]||(t[1]=i=>_.addSub()),ref:"form"},{default:o(({errors:i})=>[e("div",Y,[e("div",Z,[s(p,{id:"email",name:"email",type:"email",class:V(["form-control w-100",{"is-invalid":i.email}]),placeholder:"請輸入 Email",rules:"email|required"},null,8,["class"]),s(h,{name:"email",class:"invalid-feedback"})]),ee])]),_:1},512)])])]),e("div",te,[se,e("div",oe,[ae,s(a,{to:"/login",class:"btn btn-dark-green text-white",href:"#"},{default:o(()=>[ne,r(" 登入後台 ")]),_:1})])])])],64)}const me=v(j,[["render",re]]);export{me as default};
