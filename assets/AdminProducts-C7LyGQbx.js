import{_ as M,E as v,o as i,c as a,a as t,x as r,B as c,b as h,A as U,F as L,u as V,d as _,H as E,r as g,t as b}from"./index-aJT6rMcZ.js";import{P as k,D as w}from"./DeleteModal-21XLLfhJ.js";import{M as I}from"./bootstrap.esm-NBXIyAKZ.js";var T={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",VITE_BASE_URL:"/Journey-into-the-Forest/",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:C,VITE_PATH:R}=T,A={data(){return{editModal:"",isLoading:!1,fullPage:!1,tempProductData:{...this.tempProduct}}},props:["tempProduct","isNew"],methods:{openModal(){console.log(this.tempProduct),this.tempProductData={...this.tempProduct},this.editModal.show()},hideModal(){this.editModal.hide()},editProduct(){this.$emit("editProduct",this.tempProductData)},uploadImg(){const l=`${C}/api/${R}/admin/upload`,e=this.$refs.uploadImg.files[0],n=new FormData;n.append("file-to-upload",e),this.isLoading=!0,v.post(l,n).then(u=>{alert("圖片已上傳！"),this.tempProductData.imageUrl=u.data.imageUrl,this.$refs.uploadImg.value="",this.isLoading=!1}).catch(u=>{alert(u.response.data.message),this.isLoading=!1})}},mounted(){this.editModal=new I(this.$refs.editModal,{keyboard:!1,backdrop:"static"})}},B={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"editModal"},S={class:"modal-dialog modal-xl"},N={class:"modal-content"},F={class:"modal-header bg-dark"},H={class:"modal-title text-white"},J={key:0},O={key:1},G=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),j={class:"modal-body"},q={class:"row"},z={class:"col-4"},K={class:"mb-3"},Q=t("label",{for:"imageUrl",class:"form-label"},"輸入主要圖片網址",-1),W={class:"mb-3"},X=t("label",{for:"uploadImg",class:"form-label"},"或 上傳主要圖片",-1),Y=["src","alt"],Z={class:"mb-3"},$=t("label",{for:"imageUrl",class:"form-label"},"輸入 Banner 網址",-1),tt=["src","alt"],et=t("label",{for:"imagesUrl",class:"form-label"},"圖片網址",-1),ot=["onUpdate:modelValue"],st=["src","alt"],lt={class:"col-8"},it={class:"row"},at={class:"col-12 mb-3"},nt=t("label",{for:"title",class:"form-label"},"標題",-1),dt={class:"col-6 mb-3"},rt=t("label",{for:"category",class:"form-label"},"分類",-1),ct={class:"col-6 mb-3"},ut=t("label",{for:"unit",class:"form-label"},"單位",-1),mt={class:"col-6 mb-3"},pt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),_t={class:"col-6 mb-3"},ht=t("label",{for:"price",class:"form-label"},"售價",-1),gt=t("hr",null,null,-1),bt={class:"mb-3"},ft=t("label",{for:"description",class:"form-label"},"產品描述",-1),Pt={class:"mb-3"},vt=t("label",{for:"content",class:"form-label"},"說明內容",-1),Dt={class:"mb-3"},yt=t("label",{for:"is_enabled",class:"form-check-label"},"是否啟用",-1),Ut={class:"modal-footer"},Mt=t("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"}," 取消 ",-1);function Lt(l,e,n,u,o,d){const D=g("VueLoading");return i(),a("div",B,[t("div",S,[t("div",N,[t("div",F,[t("h5",H,[n.isNew?(i(),a("span",J,"新增產品")):(i(),a("span",O,"編輯產品"))]),G]),t("div",j,[t("div",q,[t("div",z,[t("div",K,[Q,r(t("input",{type:"text",id:"imageUrl",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=s=>o.tempProductData.imageUrl=s)},null,512),[[c,o.tempProductData.imageUrl]])]),t("div",W,[h(D,{active:o.isLoading,"is-full-page":o.fullPage},null,8,["active","is-full-page"]),X,t("input",{type:"file",class:"form-control",id:"uploadImg",ref:"uploadImg",onChange:e[1]||(e[1]=(...s)=>d.uploadImg&&d.uploadImg(...s))},null,544)]),t("img",{class:"w-100 mb-3",src:o.tempProductData.imageUrl,alt:o.tempProductData.title},null,8,Y),t("div",Z,[$,r(t("input",{type:"text",id:"imageUrl",class:"form-control",placeholder:"請輸入 Banner 連結","onUpdate:modelValue":e[2]||(e[2]=s=>o.tempProductData.banner=s)},null,512),[[c,o.tempProductData.banner]])]),o.tempProductData.banner?(i(),a("img",{key:0,class:"w-100 mb-3",src:o.tempProductData.banner,alt:o.tempProductData.title+"banner"},null,8,tt)):U("",!0),(i(!0),a(L,null,V(o.tempProductData.imagesUrl,(s,p)=>(i(),a("div",{key:"img"+p},[et,r(t("input",{type:"text",id:"imagesUrl",class:"form-control mb-3",placeholder:"請輸入圖片連結","onUpdate:modelValue":y=>o.tempProductData.imagesUrl[p]=y},null,8,ot),[[c,o.tempProductData.imagesUrl[p]]]),s?(i(),a("img",{key:0,class:"w-100 mb-3",src:s,alt:"img"+p},null,8,st)):U("",!0)]))),128)),!o.tempProductData.imagesUrl.length||o.tempProductData.imagesUrl[o.tempProductData.imagesUrl.length-1]?(i(),a("button",{key:1,type:"button",class:"btn btn-outline-primary w-100 mb-3",onClick:e[3]||(e[3]=_(s=>o.tempProductData.imagesUrl.push(""),["prevent"]))}," 新增圖片 ")):(i(),a("button",{key:2,type:"button",class:"btn btn-outline-danger w-100 mb-3",onClick:e[4]||(e[4]=_(s=>o.tempProductData.imagesUrl.pop(),["prevent"]))}," 刪除圖片 "))]),t("div",lt,[t("div",it,[t("div",at,[nt,r(t("input",{type:"text",id:"title",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=s=>o.tempProductData.title=s)},null,512),[[c,o.tempProductData.title]])]),t("div",dt,[rt,r(t("input",{type:"text",id:"category",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=s=>o.tempProductData.category=s)},null,512),[[c,o.tempProductData.category]])]),t("div",ct,[ut,r(t("input",{type:"text",id:"unit",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=s=>o.tempProductData.unit=s)},null,512),[[c,o.tempProductData.unit]])]),t("div",mt,[pt,r(t("input",{type:"number",id:"origin_price",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=s=>o.tempProductData.origin_price=s),min:"0"},null,512),[[c,o.tempProductData.origin_price,void 0,{number:!0}]])]),t("div",_t,[ht,r(t("input",{type:"number",id:"price",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=s=>o.tempProductData.price=s),min:"0"},null,512),[[c,o.tempProductData.price,void 0,{number:!0}]])])]),gt,t("div",bt,[ft,r(t("textarea",{name:"description",id:"description",class:"form-control",cols:"30",placeholder:"請輸入產品描述","onUpdate:modelValue":e[10]||(e[10]=s=>o.tempProductData.description=s)},null,512),[[c,o.tempProductData.description]])]),t("div",Pt,[vt,r(t("textarea",{name:"content",id:"content",class:"form-control",cols:"30",placeholder:"請輸入說明內容","onUpdate:modelValue":e[11]||(e[11]=s=>o.tempProductData.content=s)},null,512),[[c,o.tempProductData.content]])]),t("div",Dt,[r(t("input",{type:"checkbox",id:"is_enabled",class:"form-check-input me-1","onUpdate:modelValue":e[12]||(e[12]=s=>o.tempProductData.is_enabled=s)},null,512),[[E,o.tempProductData.is_enabled]]),yt])])])]),t("div",Ut,[Mt,t("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=_((...s)=>d.editProduct&&d.editProduct(...s),["prevent"]))},"確認")])])])],512)}const Vt=M(A,[["render",Lt]]);var xt={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",VITE_BASE_URL:"/Journey-into-the-Forest/",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f,VITE_PATH:P}=xt,Et={data(){return{products:[],pagination:{},isNew:!1,tempProduct:{imagesUrl:[]},deleteModal:"",isLoading:!1}},components:{PaginationComponent:k,EditModal:Vt,DeleteModal:w},methods:{getProducts(l=1){const e=`${f}/api/${P}/admin/products?page=${l}`;this.isLoading=!0,v.get(e).then(n=>{this.products=n.data.products,this.pagination=n.data.pagination,this.isLoading=!1}).catch(n=>{alert(n.response.data.message),this.isLoading=!1})},openModal(l,e){this.isLoading=!0,l==="add"?(this.isNew=!0,this.tempProduct={imagesUrl:[]},this.$nextTick(()=>{this.$refs.editModal.openModal()}),this.isLoading=!1):l==="edit"?(this.isNew=!1,this.tempProduct={...e},this.tempProduct.imagesUrl=this.tempProduct.imagesUrl||[],this.$nextTick(()=>{this.$refs.editModal.openModal()}),this.isLoading=!1):l==="delete"&&(this.tempProduct={...e},this.tempProduct.imagesUrl=this.tempProduct.imagesUrl||[],this.$refs.deleteModal.openModal(),this.isLoading=!1)},editProduct(l){let e=`${f}/api/${P}/admin/product`,n="post";console.log(l),this.isNew||(e=`${f}/api/${P}/admin/product/${l.id}`,n="put"),this.isLoading=!0,v[n](e,{data:l}).then(u=>{alert(u.data.message),this.$refs.editModal.hideModal(),this.getProducts(),this.isLoading=!1}).catch(u=>{alert(u.response.data.message),this.isLoading=!1})},deleteProduct(){const l=`${f}/api/${P}/admin/product/${this.tempProduct.id}`;this.isLoading=!0,v.delete(l).then(e=>{alert(e.data.message),this.$refs.deleteModal.hideModal(),this.getProducts(),this.isLoading=!1}).catch(e=>{alert(e.response.data.message),this.isLoading=!1})}},mounted(){this.getProducts()}},kt={class:"container mx-auto"},wt=t("h2",{class:"text-center"},"後台產品列表",-1),It={class:"text-end my-3"},Tt={class:"table align-middle"},Ct=t("thead",null,[t("tr",null,[t("td",null,"分類"),t("td",{width:"25%"},"產品名稱"),t("td",null,"原價"),t("td",null,"售價"),t("td",null,"是否啟用"),t("td",null,"編輯")])],-1),Rt={key:0,class:"text-success"},At={key:1},Bt={class:"btn-group btn-group-sm",role:"group","aria-label":"edit"},St=["onClick"],Nt=["onClick"];function Ft(l,e,n,u,o,d){const D=g("VueLoading"),s=g("PaginationComponent"),p=g("EditModal"),y=g("DeleteModal");return i(),a("div",kt,[h(D,{active:o.isLoading},null,8,["active"]),wt,t("div",It,[t("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=_(m=>d.openModal("add"),["prevent"]))}," 建立新產品 ")]),t("table",Tt,[Ct,t("tbody",null,[(i(!0),a(L,null,V(o.products,m=>(i(),a("tr",{key:m.id},[t("td",null,b(m.category),1),t("td",null,b(m.title),1),t("td",null,b(m.origin_price),1),t("td",null,b(m.price),1),t("td",null,[m.is_enabled?(i(),a("span",Rt,"啟用")):(i(),a("span",At,"未啟用"))]),t("td",null,[t("div",Bt,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:_(x=>d.openModal("edit",m),["prevent"])}," 編輯 ",8,St),t("button",{type:"button",class:"btn btn-outline-danger",onClick:_(x=>d.openModal("delete",m),["prevent"])}," 刪除 ",8,Nt)])])]))),128))])]),h(s,{pagination:o.pagination,onGetProducts:d.getProducts},null,8,["pagination","onGetProducts"]),h(p,{ref:"editModal","temp-product":o.tempProduct,"is-new":o.isNew,onEditProduct:d.editProduct},null,8,["temp-product","is-new","onEditProduct"]),h(y,{ref:"deleteModal","temp-item":o.tempProduct,onDeleteItem:d.deleteProduct},null,8,["temp-item","onDeleteItem"])])}const Gt=M(Et,[["render",Ft]]);export{Gt as default};