import{n as l}from"./newsStore--bcPmCtq.js";import{_ as r,m as d,a as m,c as n,d as _,b as s,F as i,y as p,f as u,r as g,o as a,t}from"./index-BhaRJfxO.js";import"./swalToast-BohVCrFO.js";const h={computed:{...d(l,["news"])},methods:{...m(l,["getNews"])},mounted(){this.getNews(),console.log(this.news)}},b=u('<section class="news-banner img-box mb-4"><div class="container"><div class="news-banner-title text-center w-100"><h1 class="title mb-0">步道最新消息</h1><span class="english fs-5 title">Trails News</span></div><p class="fs-7 fw-normal text-center text-muted"> 僅提供目前有狀況之步道路況，步道路況為正常則不顯示 </p></div></section>',1),f={class:"container"},w={class:"news-list p-5 mb-5"},v={class:"mb-0"},x={class:"d-flex flex-column flex-lg-row align-items-start"},N={class:"news-list-date english text-primary me-3 mb-1 mb-lg-0"},T={class:"badge rounded-pill bg-primary me-3 mb-1 mb-lg-0"},$={class:"news-list-title fw-bold text-dark-green"},L=s("br",null,null,-1),y={class:"news-list-content text-muted"};function A(o,V,k,E,S,B){const c=g("VueLoading");return a(),n(i,null,[_(c,{active:o.isLoading},null,8,["active"]),b,s("div",f,[s("div",w,[s("ul",v,[(a(!0),n(i,null,p(o.news,e=>(a(),n("li",{class:"news-list-li fs-7 ls-2 fw-normal mb-3",key:e.TRAILID},[s("div",x,[s("div",N,t(e.ANN_DATE.replace(/(\d{4})(\d{2})(\d{2})/,"$1.$2.$3")),1),s("span",T,t(e.TR_TYP),1),s("div",null,[s("span",$,t(e.TR_CNAME),1),L,s("span",y,t(e.TITLE),1)])])]))),128))])])])],64)}const C=r(h,[["render",A]]);export{C as default};