import{t as f}from"./swalToast-BoCl-Cz9.js";import{_ as b,c as o,d as g,b as e,t as n,F as i,y as c,g as a,r as x,o as l,n as k,h as y}from"./index-SM8O7_kU.js";var v={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",VITE_BASE_URL:"/Journey-into-the-Forest/",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_BASE_URL:L}=v,V={data(){return{area:{},isLoading:!1}},methods:{getArea(){const{id:d}=this.$route.params;this.isLoading=!0,this.axios.get(`${L}userAreas/userAreas.json`).then(_=>{this.area=_.data.find(h=>h.id==d),this.isLoading=!1}).catch(()=>{f.fire({icon:"error",title:"找不到資料！"})})}},watch:{"$route.params":"getArea"},mounted(){this.getArea()}},w={class:"area-img mb-4 mb-lg-5"},A={class:"img-box"},E=["src"],T={class:"text-center mb-4 mb-lg-5"},U={class:"title text-dark-green"},B={class:"english"},R={class:"border-top border-bottom border-1 py-4 p-sm-4 p-lg-5 fw-normal text-muted"},S={class:"py-4 p-sm-4 p-lg-5"},F=e("div",{class:"mb-2"},[e("h4",{class:"title"},"園區資訊"),e("span",{class:"english fs-7 title"},"Information")],-1),I={class:"area-information"},N={class:"ls-2 p-2 rounded-3"},D={class:"d-flex flex-column flex-md-row"},C=e("span",{class:"text-dark-green me-3"},[e("i",{class:"bi bi-geo-alt-fill me-1"}),a("園區地址")],-1),M=["href"],j={class:"ls-2 p-2 rounded-3"},J={class:"d-flex flex-column flex-md-row"},O=e("span",{class:"text-dark-green me-3"},[e("i",{class:"bi bi-clock me-1"}),a("開園時間")],-1),P=e("br",null,null,-1),z={class:"ls-2 p-2 rounded-3"},G={class:"d-flex flex-column flex-md-row"},H=e("span",{class:"text-dark-green me-3"},[e("i",{class:"bi bi-telephone me-1"}),a("聯繫電話")],-1),q={class:"text-muted"},K={class:"pe-2"},Q=["href"],W={class:"ls-2 p-2 rounded-3"},X={class:"d-flex"},Y=e("span",{class:"text-dark-green me-3"},[e("i",{class:"bi bi-emoji-smile me-1"}),a("社群平台")],-1),Z={key:0,class:"text-muted fw-normal"},$=["href"],ee=e("i",{class:"bi bi-facebook"},null,-1),se={class:"ls-2 p-2 rounded-3"},te=e("span",{class:"text-dark-green me-3"},[e("i",{class:"bi bi-ticket-perforated me-1"}),a("園內門票 ")],-1),oe={class:"table table-sm table-hover text-muted fs-7 ls-0"},le=e("thead",null,[e("tr",{class:"text-dark-green"},[e("th",{width:"120"},"票價"),e("th",null,"說明")])],-1),ne={key:0,class:"text-muted"},ae=e("br",null,null,-1),re={class:"fw-normal"},ie=e("br",null,null,-1),ce={class:"text-end fs-7"},de=["href"];function _e(d,_,h,he,s,me){const m=x("VueLoading");return l(),o(i,null,[g(m,{active:s.isLoading},null,8,["active"]),e("div",w,[e("div",A,[e("img",{src:s.area.imageUrl,alt:"",class:"w-100"},null,8,E)])]),e("div",T,[e("h2",U,n(s.area.name),1),e("span",B,n(s.area.engName),1)]),e("div",R,[(l(!0),o(i,null,c(s.area.content?s.area.content.split(";"):"",(t,r)=>(l(),o("p",{key:"content"+r,class:k({"mb-0":r===s.area.content.split(";").length-1})},n(t),3))),128))]),e("div",S,[F,e("ul",I,[e("li",N,[e("div",D,[C,e("a",{href:s.area.mapUrl,title:"前往 Google 地圖"},n(s.area.address),9,M)])]),e("li",j,[e("div",J,[O,e("div",null,[(l(!0),o(i,null,c(s.area.time?s.area.time.split(";"):"",(t,r)=>(l(),o("span",{class:"text-muted",key:"time"+r},[a(n(t),1),P]))),128))])])]),e("li",z,[e("div",G,[H,e("table",q,[(l(!0),o(i,null,c(s.area.tel,t=>(l(),o("tr",{key:t.name},[e("td",K,n(t.name),1),e("td",null,[e("a",{href:`tel:${t.num}`},n(t.num),9,Q)])]))),128))])])]),e("li",W,[e("div",X,[Y,s.area.fbUrl===""?(l(),o("span",Z,"無")):(l(),o("a",{key:1,href:s.area.fbUrl,class:"english ls-0"},[ee,a(" Facebook ")],8,$))])]),e("li",se,[te,e("table",oe,[le,e("tbody",null,[(l(!0),o(i,null,c(s.area.fee,(t,r)=>(l(),o("tr",{key:"fee"+r},[e("td",null,[a(n(t.feeType)+" ",1),t.dayType?(l(),o("span",ne," ("+n(t.dayType)+")",1)):y("",!0),ae,e("span",null,"$"+n(t.fee),1)]),e("td",re,[(l(!0),o(i,null,c(t.feeMemo?t.feeMemo.split(";"):"",(u,p)=>(l(),o("span",{key:"memo"+p},[a(n(u),1),ie]))),128))])]))),128))])]),e("div",ce,[a(" * "),e("a",{href:s.area.url,class:"fw-normal text-end"}," 查看園內其他門票價格 ",8,de)])])])])],64)}const fe=b(V,[["render",_e]]);export{fe as default};