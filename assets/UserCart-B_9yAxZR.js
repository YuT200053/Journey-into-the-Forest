import{c as k}from"./cartStore-DMgsjY27.js";import{_ as T,m as $,a as A,c as r,d as i,b as e,g as b,w as S,h as V,F as y,y as U,e as x,t as m,f as F,r as f,o as d,A as L,B as N,n as h,C as B}from"./index-CS9Rg4Wp.js";import{q,t as n}from"./swalToast-Dm2hVMXa.js";var I={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",VITE_BASE_URL:"/Journey-into-the-Forest/",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:g,VITE_PATH:v}=I,R={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},computed:{...$(k,["carts","isLoading"])},methods:{...A(k,["getCart"]),deleteModal(s,t){s?q.fire({icon:"question",title:"確定要清空購物車嗎？"}).then(c=>{c.isConfirmed&&this.deleteAll()}):q.fire({icon:"question",title:`確定要刪除「${t.product.title}」嗎？`}).then(c=>{c.isConfirmed&&this.deleteCart(t.id)})},deleteCart(s){const t=`${g}/api/${v}/cart/${s}`;this.axios.delete(t).then(()=>{this.getCart(),n.fire({icon:"success",title:"已刪除此產品！"})}).catch(()=>{n.fire({icon:"error",title:"刪除產品失敗。"})})},deleteAll(){const s=`${g}/api/${v}/carts`;this.axios.delete(s).then(()=>{this.getCart(),n.fire({icon:"success",title:"已清空購物車！"})}).catch(()=>{n.fire({icon:"error",title:"清空購物車失敗。"})})},changeQty(s,t){const c={product_id:s.product_id,qty:t},C=`${g}/api/${v}/cart/${s.id}`;this.axios.put(C,{data:c}).then(()=>{this.getCart(),n.fire({icon:"success",title:"已更新產品數量！"})}).catch(()=>{n.fire({icon:"error",title:"產品數量更新失敗。"})})},createOrder(){const s=`${g}/api/${v}/order`,t=this.form;this.axios.post(s,{data:t}).then(()=>{n.fire({icon:"success",title:"已成功送出訂單！"}),this.$router.push("/order")}).catch(()=>{n.fire({icon:"error",title:"訂單送出失敗。"})})},isPhone(s){return/^(09)[0-9]{8}$/.test(s)?!0:"請正確的手機號碼"}},mounted(){this.getCart()}},D=F('<section class="cart-banner img-box mb-4"><div class="container"><div class="cart-banner-title text-center w-100"><h1 class="title mb-0">購物車</h1><span class="english fs-5 title">Cart</span></div></div></section>',1),P={class:"container mb-7"},O={key:0,class:"d-flex flex-column align-items-center text-muted",role:"alert"},H=e("i",{class:"bi bi-stars me-1"},null,-1),J={class:"row"},Q={class:"col-12 col-lg-8 mb-5 mb-lg-0"},j={class:"row gx-2 align-items-center"},z={class:"col-12 col-sm-3 mb-1 mb-sm-0"},G=["src","alt"],K={class:"col-12 col-sm-5 mb-1 mb-sm-0"},W={class:"fs-5"},X=e("br",null,null,-1),Y={class:"text-muted fs-7"},Z={class:"text-dark-green"},ee={class:"col-12 col-sm-2"},se=["disabled","onUpdate:modelValue","onChange"],te=["value"],oe={class:"col-12 col-sm-2 text-end text-primary"},le=["disabled","onClick"],ie=e("i",{class:"bi bi-x-lg"},null,-1),ae=[ie],ne={key:0,class:"d-flex justify-content-between pe-3"},re=["disabled"],de=e("i",{class:"bi bi-trash3 me-1"},null,-1),ce={class:"fs-4 text-danger ls-2"},me={key:0,class:"col-12 col-lg-4"},ue={class:"product-description p-5"},_e=e("div",{class:"mb-3"},[e("h4",{class:"title mb-0"},"購買人資料"),e("span",{class:"english title ls-2 fs-7"},"Purchaser Information")],-1),fe={class:"form-floating mb-3"},he=e("label",{for:"email"},"電子信箱",-1),pe={class:"form-floating mb-3"},be=e("label",{for:"name"},"姓名",-1),ge={class:"form-floating mb-3"},ve=e("label",{for:"tel"},"聯繫電話",-1),Ve={class:"form-floating mb-3"},ye=e("label",{for:"address"},"聯繫地址",-1),Ce={class:"form-floating mb-3"},ke=e("label",{for:"pay"},"付款銀行帳號後五碼",-1),Se={class:"form-floating mb-3"},Ue=e("label",{for:"message"},"留言",-1),xe={class:"text-end"},Le=["disabled"],qe=e("i",{class:"bi bi-send me-1"},null,-1);function Ee(s,t,c,C,a,p){const E=f("VueLoading"),w=f("router-link"),u=f("VeeField"),_=f("ErrorMessage"),M=f("VeeForm");return d(),r(y,null,[i(E,{active:s.isLoading},null,8,["active"]),D,e("section",P,[s.carts.carts&&!s.carts.carts.length?(d(),r("div",O,[b(" 目前購物車是空的，趕快加入你的漫遊行程吧！ "),i(w,{to:"/products",class:"btn btn-primary text-white mt-1"},{default:S(()=>[H,b("立即尋找專屬行程 ")]),_:1})])):V("",!0),e("div",J,[e("div",Q,[(d(!0),r(y,null,U(s.carts.carts,o=>(d(),r("div",{class:"p-3 mb-2 bg-secondary rounded-3 d-flex border border-1",key:o.id},[e("div",j,[e("div",z,[e("img",{src:o.product.imageUrl,alt:o.product.title,class:"w-100 rounded-3"},null,8,G)]),e("div",K,[e("span",W,m(o.product.title),1),X,e("del",Y," 原 $"+m(o.product.origin_price?o.product.origin_price.toLocaleString("en-US"):""),1),e("span",Z," 特價 $"+m(o.product.price?o.product.price.toLocaleString("en-US"):""),1)]),e("div",ee,[L(e("select",{class:"form-select form-select-sm mb-1 mb-sm-0",disabled:s.isLoading,"onUpdate:modelValue":l=>o.qty=l,onChange:l=>p.changeQty(o,o.qty)},[(d(),r(y,null,U(10,l=>e("option",{key:l,value:l},m(l)+" 張",9,te)),64))],40,se),[[N,o.qty]])]),e("div",oe," 小計 $"+m(o.total?o.total.toLocaleString("en-US"):""),1)]),e("button",{type:"button",class:"btn ps-3",disabled:s.isLoading,onClick:x(l=>p.deleteModal(!1,o),["prevent"]),title:"刪除此行程"},ae,8,le)]))),128)),s.carts.carts&&s.carts.carts.length?(d(),r("div",ne,[e("button",{type:"button",class:"btn btn-outline-dark-green",disabled:s.isLoading,onClick:t[0]||(t[0]=x(o=>p.deleteModal(!0),["prevent"]))},[de,b("清空購物車 ")],8,re),e("div",ce," 總計 $"+m(s.carts.total?s.carts.total.toLocaleString("en-US"):""),1)])):V("",!0)]),s.carts.carts&&s.carts.carts.length?(d(),r("div",me,[e("div",ue,[_e,i(M,{onSubmit:t[7]||(t[7]=o=>p.createOrder()),ref:"form"},{default:S(({errors:o})=>[e("div",fe,[i(u,{id:"email",name:"電子信箱",type:"email",class:h(["form-control",{"is-invalid":o.電子信箱}]),placeholder:"請輸入電子信箱",rules:"email|required",modelValue:a.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=l=>a.form.user.email=l)},null,8,["class","modelValue"]),he,i(_,{name:"電子信箱",class:"invalid-feedback"})]),e("div",pe,[i(u,{id:"name",name:"姓名",type:"name",class:h(["form-control",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:a.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=l=>a.form.user.name=l)},null,8,["class","modelValue"]),be,i(_,{name:"姓名",class:"invalid-feedback"})]),e("div",ge,[i(u,{id:"tel",name:"電話",type:"tel",class:h(["form-control",{"is-invalid":o.電話}]),placeholder:"請輸入電話",rules:{required:!0,max:10,min:8},modelValue:a.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=l=>a.form.user.tel=l)},null,8,["class","modelValue"]),ve,i(_,{name:"電話",class:"invalid-feedback"})]),e("div",Ve,[i(u,{id:"address",name:"地址",type:"text",class:h(["form-control",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:a.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=l=>a.form.user.address=l)},null,8,["class","modelValue"]),ye,i(_,{name:"地址",class:"invalid-feedback"})]),e("div",Ce,[i(u,{id:"pay",name:"付款後五碼",type:"number",class:h(["form-control",{"is-invalid":o.付款後五碼}]),placeholder:"請輸入付款後五碼",rules:"required|min:5|max:5",modelValue:a.form.user.pay,"onUpdate:modelValue":t[5]||(t[5]=l=>a.form.user.pay=l)},null,8,["class","modelValue"]),ke,i(_,{name:"付款後五碼",class:"invalid-feedback"})]),e("div",Se,[L(e("textarea",{id:"message",name:"留言",class:"form-control",placeholder:"請輸入留言","onUpdate:modelValue":t[6]||(t[6]=l=>a.form.message=l)},null,512),[[B,a.form.message]]),Ue]),e("div",xe,[e("button",{type:"submit",class:"btn btn-primary text-white",disabled:s.carts.carts?s.carts.carts.final_total:""===0},[qe,b("送出訂單 ")],8,Le)])]),_:1},512)])])):V("",!0)])])],64)}const $e=T(R,[["render",Ee]]);export{$e as default};
