import{_ as i,c as o,b as e,A as l,B as d,d as _,h as p,F as h,f as m,o as n,r as u}from"./index-DBvABxfy.js";const v={data(){return{area:"0"}},methods:{changeArea(){this.$router.push(`/areas/${this.area}`)}}},f=m('<section class="area-banner img-box mb-5"><div class="container"><div class="area-banner-title text-center w-100"><h1 class="title mb-0">所有國家森林遊樂區</h1><span class="english fs-5 title">National Forest Recreation Area</span></div></div></section>',1),b={class:"area-content mb-7"},g={class:"container"},x={class:"sticky-top"},k=e("option",{value:"0",disabled:"",selected:""},"今天，你想去哪座森林？",-1),A=e("option",{value:"1"},"太平山國家森林遊樂區",-1),N=e("option",{value:"2"},"滿月圓國家森林遊樂區",-1),V=e("option",{value:"3"},"內洞國家森林遊樂區",-1),w=[k,A,N,V],B={key:0,class:"area-info p-4 p-lg-5"};function C(F,t,$,y,s,r){const c=u("router-view");return n(),o(h,null,[f,e("section",b,[e("div",g,[e("div",x,[l(e("select",{class:"form-select mb-3 text-center ls-2 text-dark-green","aria-label":"Default select example",onChange:t[0]||(t[0]=a=>r.changeArea()),"onUpdate:modelValue":t[1]||(t[1]=a=>s.area=a)},w,544),[[d,s.area]])]),s.area!=="0"?(n(),o("div",B,[_(c)])):p("",!0)])])],64)}const S=i(v,[["render",C]]);export{S as default};
