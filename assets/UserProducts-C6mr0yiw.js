import{_ as b,c as a,a as e,F as _,q as p,s as g,u,d as x,o as i,b as h,w as m,t as o,r as k}from"./index-CTKLNDsr.js";var y={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:w,VITE_PATH:P}=y,T={data(){return{products:[],pagination:{}}},methods:{getProducts(f=1){const n=`${w}/api/${P}/products?page=${f}`;this.axios.get(n).then(l=>{this.products=l.data.products,this.pagination=l.data.pagination}).catch(l=>{alert(l.Response.data.message)})}},mounted(){this.getProducts()}},E={class:"bg-secondary"},V=x('<section class="products-banner img-box"><div class="container"><div class="products-banner-title text-center w-100"><h1 class="title mb-0">漫遊行程</h1><span class="english fs-5 title">Top Picks Tours </span></div></div></section>',1),C={class:"products-journey container pb-6"},R={class:"row g-3 my-4"},N={class:"card mb-3"},S={class:"row g-0"},U=["src","alt"],$={class:"col-md-6"},j={class:"card-body d-flex flex-column h-100"},B={class:"card-title fw-bold mb-0 link-dark-green bg-light-green"},D={class:"card-tags p-3"},I={class:"card-text fw-normal link-gray px-3"},L={class:"d-flex justify-content-between align-items-end px-3 pb-4 flex-grow-1"},A={class:"text-gray fs-7 fw-normal"},F=e("br",null,null,-1),M={class:"text-danger fs-5"},H={class:"text-end"},O=e("span",{class:"pe-2"},"Read More ",-1),q=e("i",{class:"read-more-icon bi bi-arrow-up-right-circle-fill"},null,-1),z={"aria-label":"Page navigation example"},J={class:"pagination justify-content-center"},G=e("span",{"aria-hidden":"true"},"«",-1),K=[G],Q=["onClick"],W=e("span",{"aria-hidden":"true"},"»",-1),X=[W];function Y(f,n,l,Z,s,r){const c=k("router-link");return i(),a("main",E,[V,e("section",C,[e("div",R,[(i(!0),a(_,null,p(s.products,t=>(i(),a("div",{class:"col-12 col-xl-6",key:t.id},[e("div",N,[e("div",S,[h(c,{to:`/products/${t.id}`,class:"col-md-6 img-box"},{default:m(()=>[e("img",{src:t.imageUrl,class:"img-fluid rounded-start h-100 w-100 object-fit-cover",alt:t.title},null,8,U)]),_:2},1032,["to"]),e("div",$,[e("div",j,[h(c,{to:`/products/${t.id}`},{default:m(()=>[e("h4",B,[e("span",null,o(t.title),1)])]),_:2},1032,["to"]),e("div",D,[(i(!0),a(_,null,p(t.category.split(",").slice(0,3),(d,v)=>(i(),a("a",{href:"#",class:"badge rounded-pill btn btn-primary text-white me-1",key:"category"+v},o(`#${d}`),1))),128))]),e("p",I,o(t.description),1),e("div",L,[e("div",null,[e("del",A,"NT$ "+o(t.origin_price)+" /位",1),F,e("span",M,"NT$ "+o(t.price)+" /位",1)]),e("div",null,[e("div",H,[h(c,{to:`/products/${t.id}`,class:"read-more english link-primary me-4"},{default:m(()=>[O,q]),_:2},1032,["to"])])])])])])])])]))),128))]),e("nav",z,[e("ul",J,[e("li",{class:g(["page-item",{disabled:s.pagination.current_page===1}])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:n[0]||(n[0]=u(t=>r.getProducts(s.pagination.current_page-1),["prevent"]))},K)],2),(i(!0),a(_,null,p(s.pagination.total_pages,(t,d)=>(i(),a("li",{class:g(["page-item",{active:t===s.pagination.current_page}]),key:d},[e("a",{class:"page-link",href:"#",onClick:u(v=>r.getProducts(t),["prevent"])},o(t),9,Q)],2))),128)),e("li",{class:g(["page-item",{disabled:s.pagination.current_page===s.pagination.total_pages}])},[e("a",{class:"page-link",href:"#","aria-label":"Next",onClick:n[1]||(n[1]=u(t=>r.getProducts(s.pagination.current_page+1),["prevent"]))},X)],2)])])])])}const te=b(T,[["render",Y]]);export{te as default};
