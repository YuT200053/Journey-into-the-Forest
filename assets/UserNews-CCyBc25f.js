import{n as l}from"./newsStore-CMidzuA4.js";import{_ as c,m as r,a as d,c as n,b as s,F as o,y as m,f as _,o as a,t}from"./index-BavfkZmv.js";import"./swalToast-Dtef6YC1.js";const p={computed:{...r(l,["news"])},methods:{...d(l,["getNews"])},mounted(){this.getNews(),console.log(this.news)}},b=_('<section class="news-banner img-box mb-4"><div class="container"><div class="news-banner-title text-center w-100"><h1 class="title mb-0">步道最新消息</h1><span class="english fs-5 title">Trails News</span></div></div></section>',1),h={class:"container news-list p-5 mb-7"},u={class:"mb-0"},f={class:"d-flex flex-column flex-lg-row align-items-start"},g={class:"news-list-date english text-primary me-3 mb-1 mb-lg-0"},w={class:"badge rounded-pill bg-primary me-3 mb-1 mb-lg-0"},x={class:"news-list-title fw-bold text-dark-green"},N=s("br",null,null,-1),v={class:"news-list-content text-muted"};function T(i,$,y,A,k,E){return a(),n(o,null,[b,s("div",h,[s("ul",u,[(a(!0),n(o,null,m(i.news,e=>(a(),n("li",{class:"news-list-li fs-7 ls-2 fw-normal mb-3",key:e.TRAILID},[s("div",f,[s("div",g,t(e.ANN_DATE.replace(/(\d{4})(\d{2})(\d{2})/,"$1.$2.$3")),1),s("span",w,t(e.TR_TYP),1),s("div",null,[s("span",x,t(e.TR_CNAME),1),N,s("span",v,t(e.TITLE),1)])])]))),128))])])],64)}const I=c(p,[["render",T]]);export{I as default};
