import{D as o,E as r}from"./index-B91Vb9RS.js";import{t as i}from"./swalToast-S84LL-kW.js";const f=o("newsStore",{state:()=>({news:[],isLoading:!1}),actions:{getNews(){return this.isLoading=!0,r.get("https://recreation.forest.gov.tw/mis/api/OpenStatus/Trail").then(t=>{this.news=Object.values(t.data).sort((e,s)=>{const a=parseInt(e.ANN_DATE);return parseInt(s.ANN_DATE)-a}),console.log(this.news),this.isLoading=!1}).catch(()=>{i.fire({icon:"error",title:"取得購物車列表失敗。"}),this.isLoading=!1})}}});export{f as n};
