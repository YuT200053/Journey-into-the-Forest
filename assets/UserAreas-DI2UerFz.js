import{_ as c,c as s,b as o,A as p,B as d,d as u,h as v,F as _,f as i,o as n,r as m}from"./index-sEemeYXh.js";const h={data(){return{area:"0"}},methods:{changeArea(){this.$router.push(`/areas/${this.area}`)}}},f=i('<section class="area-banner img-box mb-5"><div class="container"><div class="area-banner-title text-center w-100"><h1 class="title mb-0">所有國家森林遊樂區</h1><span class="english fs-5 title">National Forest Recreation Area</span></div></div></section>',1),b={class:"area-content mb-7"},g={class:"container"},x={class:"sticky-top"},k=i('<option value="0" disabled selected>今天，你想去哪座森林？</option><option value="1">太平山國家森林遊樂區</option><option value="2">滿月圓國家森林遊樂區</option><option value="3">內洞國家森林遊樂區</option><option value="4">東眼山國家森林遊樂區</option><option value="5">觀霧國家森林遊樂區</option><option value="6">拉拉山國家森林遊樂區</option><option value="7">武陵國家森林遊樂區</option><option value="8">八仙山國家森林遊樂區</option><option value="9">大雪山國家森林遊樂區</option><option value="10">合歡山國家森林遊樂區</option>',11),A=[k],N={key:0,class:"area-info p-4 p-lg-5"};function V(w,e,B,C,t,r){const l=m("router-view");return n(),s(_,null,[f,o("section",b,[o("div",g,[o("div",x,[p(o("select",{class:"form-select mb-3 text-center ls-2 text-dark-green","aria-label":"Default select example",onChange:e[0]||(e[0]=a=>r.changeArea()),"onUpdate:modelValue":e[1]||(e[1]=a=>t.area=a)},A,544),[[d,t.area]])]),t.area!=="0"?(n(),s("div",N,[u(l)])):v("",!0)])])],64)}const $=c(h,[["render",V]]);export{$ as default};