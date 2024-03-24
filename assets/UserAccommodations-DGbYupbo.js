import{_ as r,c as i,b as m,a as s,F as l,s as _,d as h,r as u,o as a,t as e,e as c}from"./index-Co9_8mVy.js";const g={data(){return{accommodations:[],isLoading:!1}},mounted(){this.isLoading=!0,this.axios.get("/userAccommodations/userAccommodations.json").then(o=>{this.accommodations=o.data,this.isLoading=!1}).catch(o=>{alert(o.response.data.message)})}},f=h('<section class="accommodations-banner img-box"><div class="container"><div class="accommodations-banner-title text-center w-100"><h1 class="title mb-0">園內住宿</h1><span class="english fs-5 title">Accommodations</span></div><p class="text-center ls-2 my-3 fw-normal text-muted">點選以下連結或撥打聯絡電話聯繫訂房</p></div></section>',1),p={class:"accommodations-card container mb-7"},b={class:"row g-3"},x={class:"card h-100"},v=["href"],L={class:"img-box"},V=["src","alt"],w={class:"card-body"},y={class:"card-title bg-primary text-white title"},A={class:"list-group list-group-flush fs-7"},N={class:"list-group-item english"},k=["href"],B=s("i",{class:"bi bi-telephone-fill"},null,-1),$={class:"list-group-item"},F={href:"#"},S=s("i",{class:"bi bi-geo-alt-fill"},null,-1),j={class:"list-group-item text-muted"},C=s("i",{class:"bi bi-house-fill"},null,-1);function D(o,E,T,U,n,q){const d=u("VueLoading");return a(),i(l,null,[m(d,{active:n.isLoading},null,8,["active"]),f,s("section",p,[s("div",b,[(a(!0),i(l,null,_(n.accommodations,t=>(a(),i("div",{class:"col-12 col-md-6 col-lg-4 col-xl-3",key:t.id},[s("div",x,[s("a",{href:t.url},[s("div",L,[s("img",{src:t.image,class:"card-img-top w-100 h-100",alt:t.name},null,8,V)]),s("div",w,[s("h5",y,e(t.name),1)])],8,v),s("ul",A,[s("li",N,[s("a",{href:`tel:${t.phone}`},[B,c(" "+e(t.phone),1)],8,k)]),s("li",$,[s("a",F,[S,c(" "+e(t.area),1)])]),s("li",j,[C,c(" "+e(t.address),1)])])])]))),128))])])],64)}const G=r(g,[["render",D]]);export{G as default};
