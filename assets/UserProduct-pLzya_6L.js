import{_ as y,c,a as t,v as x,u as o,F as d,q as u,e as _,x as f,y as k,t as w,o as i}from"./index-B818EaH6.js";var S={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h,VITE_PATH:m}=S,E={data(){return{product:{},qty:1}},methods:{addCart(a,l=1){const n={product_id:a,qty:l};console.log(n);const p=`${h}/api/${m}/cart`;this.axios.post(p,{data:n}).then(s=>{alert(s.data.message),console.log(n)}).catch(s=>{alert(s.response.data.message)})}},mounted(){const{id:a}=this.$route.params,l=`${h}/api/${m}/product/${a}`;this.axios.get(l).then(n=>{this.product=n.data.product,console.log(this.product)}).catch(n=>{alert(n.Response.data.message)})}},U={class:"product-banner img-box"},V={class:"container"},D={class:"product-banner-title text-center w-100 py-4"},T={class:"title mb-0"},L={class:"text-center mb-3"},R={class:"text-center mb-5 fs-5"},q={href:"#",class:"link-dark-green"},B=t("i",{class:"bi bi-geo-alt-fill me-1"},null,-1),F={class:"container pb-5"},I={class:"row"},P={class:"col-12 col-lg-7"},A={class:"product-description p-5 mx-auto mb-5"},C=t("div",null,[t("h3",{class:"title mb-0"},"行程亮點"),t("span",{class:"english fs-5 title"},"Features")],-1),M={class:"mt-4 text-muted ls-2"},H={class:"product-content mb-5 mb-lg-0"},N=t("div",{class:"text-center mb-3"},[t("h3",{class:"title mb-0"},"每日行程"),t("span",{class:"english fs-5 title"},"Schedules")],-1),O={class:"product-content-day px-5 py-3 w-100"},z={class:"product-content-time px-5 py-3 flex-shrink-1 w-100"},J={class:"col-12 col-lg-5 product-add-cart"},j={class:"sticky-top"},G={class:"product-description p-5 mx-auto mb-6"},K={class:"fw-bold"},Q={class:"my-4"},W={class:"text-muted"},X=t("br",null,null,-1),Y={class:"fs-5 fw-bold mb-0 text-danger"},Z={class:"my-4"},$=["value"],tt=t("i",{class:"bi bi-bag me-1"},null,-1);function st(a,l,n,p,s,b){return i(),c(d,null,[t("section",U,[t("div",{class:"product-banner-bg",style:x({"background-image":"url("+s.product.imageUrl+")"})},null,4),t("div",V,[t("div",D,[t("h1",T,o(s.product.title),1)]),t("div",L,[(i(!0),c(d,null,u(s.product.category?s.product.category.split(","):[],(e,r)=>(i(),c("a",{href:"#",class:"badge rounded-pill btn btn-primary text-white me-1",key:"category"+r},o(`#${e}`),1))),128))]),t("div",R,[t("a",q,[B,_(o(s.product.unit),1)])])])]),t("section",F,[t("div",I,[t("div",P,[t("div",A,[C,t("div",M,o(s.product.description),1)]),t("div",H,[N,(i(!0),c(d,null,u(s.product.content?s.product.content.split(":"):[],(e,r)=>(i(),c("div",{class:"product-content-schedule mx-auto border-1 border-top border-bottom mt-3",key:"schedule"+r},[t("div",O,[(i(),c("h5",{class:"d-block fw-bold english text-white mx-auto",key:"day"+r}," Day "+o(r+1),1))]),t("div",z,[(i(!0),c(d,null,u(e?e.split(","):[],(v,g)=>(i(),c("div",{key:"time"+g},o(v),1))),128))])]))),128))])]),t("div",J,[t("div",j,[t("div",G,[t("div",null,[t("h4",K,o(s.product.title),1),t("div",Q,[t("del",W," 原價 "+o(s.product.origin_price?s.product.origin_price.toLocaleString("en-US"):"")+" 元 ",1),X,t("span",Y," 限時特價 "+o(s.product.price?s.product.price.toLocaleString("en-US"):"")+" 元 ",1)])]),t("div",Z,[f(t("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":l[0]||(l[0]=e=>s.qty=e)},[(i(),c(d,null,u(10,e=>t("option",{key:e,value:e},o(e)+" 張",9,$)),64))],512),[[k,s.qty]])]),t("button",{type:"submit",class:"btn btn-primary text-white w-100",onClick:l[1]||(l[1]=w(e=>b.addCart(s.product.id,s.qty),["prevent"]))},[tt,_("加入購物車 ")])])])])])])],64)}const ot=y(E,[["render",st]]);export{ot as default};
