import{_ as L,E as D,o as i,c as n,b as t,A as r,C as c,d as b,h as M,F as V,y as x,e as p,H as k,r as f,t as g}from"./index-BhaRJfxO.js";import{P as w,D as I}from"./DeleteModal-On64R1Xk.js";import{M as T}from"./bootstrap.esm-NBXIyAKZ.js";import{t as h}from"./swalToast-BohVCrFO.js";var C={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",VITE_BASE_URL:"/Journey-into-the-Forest/",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:R,VITE_PATH:A}=C,B={data(){return{editModal:"",isLoading:!1,fullPage:!1,tempProductData:{...this.tempProduct}}},props:["tempProduct","isNew"],methods:{openModal(){console.log(this.tempProduct),this.tempProductData={...this.tempProduct},this.editModal.show()},hideModal(){this.editModal.hide()},editProduct(){this.$emit("editProduct",this.tempProductData)},uploadImg(){const l=`${R}/api/${A}/admin/upload`,o=this.$refs.uploadImg.files[0],a=new FormData;a.append("file-to-upload",o),this.isLoading=!0,D.post(l,a).then(_=>{alert("圖片已上傳！"),this.tempProductData.imageUrl=_.data.imageUrl,this.$refs.uploadImg.value="",this.isLoading=!1}).catch(_=>{alert(_.response.data.message),this.isLoading=!1})}},mounted(){this.editModal=new T(this.$refs.editModal,{keyboard:!1,backdrop:"static"})}},S={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"editModal"},N={class:"modal-dialog modal-xl"},F={class:"modal-content"},H={class:"modal-header bg-dark"},J={class:"modal-title text-white"},O={key:0},G={key:1},j=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),q={class:"modal-body"},z={class:"row"},K={class:"col-4"},Q={class:"mb-3"},W=t("label",{for:"imageUrl",class:"form-label"},"輸入主要圖片網址",-1),X={class:"mb-3"},Y=t("label",{for:"uploadImg",class:"form-label"},"或 上傳主要圖片",-1),Z=["src","alt"],$={class:"mb-3"},tt=t("label",{for:"imageUrl",class:"form-label"},"輸入 Banner 網址",-1),et=["src","alt"],ot=t("label",{for:"imagesUrl",class:"form-label"},"圖片網址",-1),st=["onUpdate:modelValue"],lt=["src","alt"],it={class:"col-8"},nt={class:"row"},at={class:"col-12 mb-3"},dt=t("label",{for:"title",class:"form-label"},"標題",-1),rt={class:"col-6 mb-3"},ct=t("label",{for:"category",class:"form-label"},"分類",-1),ut={class:"col-6 mb-3"},mt=t("label",{for:"unit",class:"form-label"},"單位",-1),pt={class:"col-6 mb-3"},_t=t("label",{for:"origin_price",class:"form-label"},"原價",-1),ht={class:"col-6 mb-3"},bt=t("label",{for:"price",class:"form-label"},"售價",-1),ft=t("hr",null,null,-1),gt={class:"mb-3"},Pt=t("label",{for:"description",class:"form-label"},"產品描述",-1),vt={class:"mb-3"},Dt=t("label",{for:"content",class:"form-label"},"說明內容",-1),yt={class:"mb-3"},Ut=t("label",{for:"is_enabled",class:"form-check-label"},"是否啟用",-1),Mt={class:"modal-footer"},Lt=t("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"}," 取消 ",-1);function Vt(l,o,a,_,e,d){const y=f("VueLoading");return i(),n("div",S,[t("div",N,[t("div",F,[t("div",H,[t("h5",J,[a.isNew?(i(),n("span",O,"新增產品")):(i(),n("span",G,"編輯產品"))]),j]),t("div",q,[t("div",z,[t("div",K,[t("div",Q,[W,r(t("input",{type:"text",id:"imageUrl",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProductData.imageUrl=s)},null,512),[[c,e.tempProductData.imageUrl]])]),t("div",X,[b(y,{active:e.isLoading,"is-full-page":e.fullPage},null,8,["active","is-full-page"]),Y,t("input",{type:"file",class:"form-control",id:"uploadImg",ref:"uploadImg",onChange:o[1]||(o[1]=(...s)=>d.uploadImg&&d.uploadImg(...s))},null,544)]),t("img",{class:"w-100 mb-3",src:e.tempProductData.imageUrl,alt:e.tempProductData.title},null,8,Z),t("div",$,[tt,r(t("input",{type:"text",id:"imageUrl",class:"form-control",placeholder:"請輸入 Banner 連結","onUpdate:modelValue":o[2]||(o[2]=s=>e.tempProductData.banner=s)},null,512),[[c,e.tempProductData.banner]])]),e.tempProductData.banner?(i(),n("img",{key:0,class:"w-100 mb-3",src:e.tempProductData.banner,alt:e.tempProductData.title+"banner"},null,8,et)):M("",!0),(i(!0),n(V,null,x(e.tempProductData.imagesUrl,(s,m)=>(i(),n("div",{key:"img"+m},[ot,r(t("input",{type:"text",id:"imagesUrl",class:"form-control mb-3",placeholder:"請輸入圖片連結","onUpdate:modelValue":U=>e.tempProductData.imagesUrl[m]=U},null,8,st),[[c,e.tempProductData.imagesUrl[m]]]),s?(i(),n("img",{key:0,class:"w-100 mb-3",src:s,alt:"img"+m},null,8,lt)):M("",!0)]))),128)),!e.tempProductData.imagesUrl.length||e.tempProductData.imagesUrl[e.tempProductData.imagesUrl.length-1]?(i(),n("button",{key:1,type:"button",class:"btn btn-outline-primary w-100 mb-3",onClick:o[3]||(o[3]=p(s=>e.tempProductData.imagesUrl.push(""),["prevent"]))}," 新增圖片 ")):(i(),n("button",{key:2,type:"button",class:"btn btn-outline-danger w-100 mb-3",onClick:o[4]||(o[4]=p(s=>e.tempProductData.imagesUrl.pop(),["prevent"]))}," 刪除圖片 "))]),t("div",it,[t("div",nt,[t("div",at,[dt,r(t("input",{type:"text",id:"title",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProductData.title=s)},null,512),[[c,e.tempProductData.title]])]),t("div",rt,[ct,r(t("input",{type:"text",id:"category",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProductData.category=s)},null,512),[[c,e.tempProductData.category]])]),t("div",ut,[mt,r(t("input",{type:"text",id:"unit",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProductData.unit=s)},null,512),[[c,e.tempProductData.unit]])]),t("div",pt,[_t,r(t("input",{type:"number",id:"origin_price",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProductData.origin_price=s),min:"0"},null,512),[[c,e.tempProductData.origin_price,void 0,{number:!0}]])]),t("div",ht,[bt,r(t("input",{type:"number",id:"price",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProductData.price=s),min:"0"},null,512),[[c,e.tempProductData.price,void 0,{number:!0}]])])]),ft,t("div",gt,[Pt,r(t("textarea",{name:"description",id:"description",class:"form-control",cols:"30",placeholder:"請輸入產品描述","onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProductData.description=s)},null,512),[[c,e.tempProductData.description]])]),t("div",vt,[Dt,r(t("textarea",{name:"content",id:"content",class:"form-control",cols:"30",placeholder:"請輸入說明內容","onUpdate:modelValue":o[11]||(o[11]=s=>e.tempProductData.content=s)},null,512),[[c,e.tempProductData.content]])]),t("div",yt,[r(t("input",{type:"checkbox",id:"is_enabled",class:"form-check-input me-1","onUpdate:modelValue":o[12]||(o[12]=s=>e.tempProductData.is_enabled=s)},null,512),[[k,e.tempProductData.is_enabled]]),Ut])])])]),t("div",Mt,[Lt,t("button",{type:"button",class:"btn btn-primary",onClick:o[13]||(o[13]=p((...s)=>d.editProduct&&d.editProduct(...s),["prevent"]))},"確認")])])])],512)}const xt=L(B,[["render",Vt]]);var Et={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",VITE_BASE_URL:"/Journey-into-the-Forest/",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:P,VITE_PATH:v}=Et,kt={data(){return{products:[],pagination:{},isNew:!1,tempProduct:{imagesUrl:[]},deleteModal:"",isLoading:!1}},components:{PaginationComponent:w,EditModal:xt,DeleteModal:I},methods:{getProducts(l=1){const o=`${P}/api/${v}/admin/products?page=${l}`;this.isLoading=!0,D.get(o).then(a=>{this.products=a.data.products,this.pagination=a.data.pagination,this.isLoading=!1}).catch(()=>{h.fire({icon:"error",title:"取得產品列表失敗。"}),this.isLoading=!1})},openModal(l,o){this.isLoading=!0,l==="add"?(this.isNew=!0,this.tempProduct={imagesUrl:[]},this.$nextTick(()=>{this.$refs.editModal.openModal()}),this.isLoading=!1):l==="edit"?(this.isNew=!1,this.tempProduct={...o},this.tempProduct.imagesUrl=this.tempProduct.imagesUrl||[],this.$nextTick(()=>{this.$refs.editModal.openModal()}),this.isLoading=!1):l==="delete"&&(this.tempProduct={...o},this.tempProduct.imagesUrl=this.tempProduct.imagesUrl||[],this.$refs.deleteModal.openModal(),this.isLoading=!1)},editProduct(l){let o=`${P}/api/${v}/admin/product`,a="post";this.isNew||(o=`${P}/api/${v}/admin/product/${l.id}`,a="put"),this.isLoading=!0,D[a](o,{data:l}).then(()=>{h.fire({icon:"success",title:"已成功新增/編輯產品！"}),this.$refs.editModal.hideModal(),this.getProducts(),this.isLoading=!1}).catch(()=>{h.fire({icon:"error",title:"新增/編輯產品失敗。"}),this.isLoading=!1})},deleteProduct(){const l=`${P}/api/${v}/admin/product/${this.tempProduct.id}`;this.isLoading=!0,D.delete(l).then(()=>{h.fire({icon:"success",title:"已成功刪除此產品！"}),this.$refs.deleteModal.hideModal(),this.getProducts(),this.isLoading=!1}).catch(()=>{h.fire({icon:"error",title:"刪除此產品失敗。"}),this.isLoading=!1})}},mounted(){this.getProducts()}},wt={class:"container mx-auto"},It=t("h2",{class:"text-center"},"後台產品列表",-1),Tt={class:"text-end my-3"},Ct={class:"table align-middle"},Rt=t("thead",null,[t("tr",null,[t("td",null,"分類"),t("td",{width:"25%"},"產品名稱"),t("td",null,"原價"),t("td",null,"售價"),t("td",null,"是否啟用"),t("td",null,"編輯")])],-1),At={key:0,class:"text-success"},Bt={key:1},St={class:"btn-group btn-group-sm",role:"group","aria-label":"edit"},Nt=["onClick"],Ft=["onClick"];function Ht(l,o,a,_,e,d){const y=f("VueLoading"),s=f("PaginationComponent"),m=f("EditModal"),U=f("DeleteModal");return i(),n("div",wt,[b(y,{active:e.isLoading},null,8,["active"]),It,t("div",Tt,[t("button",{type:"button",class:"btn btn-primary",onClick:o[0]||(o[0]=p(u=>d.openModal("add"),["prevent"]))}," 建立新產品 ")]),t("table",Ct,[Rt,t("tbody",null,[(i(!0),n(V,null,x(e.products,u=>(i(),n("tr",{key:u.id},[t("td",null,g(u.category),1),t("td",null,g(u.title),1),t("td",null,g(u.origin_price),1),t("td",null,g(u.price),1),t("td",null,[u.is_enabled?(i(),n("span",At,"啟用")):(i(),n("span",Bt,"未啟用"))]),t("td",null,[t("div",St,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:p(E=>d.openModal("edit",u),["prevent"])}," 編輯 ",8,Nt),t("button",{type:"button",class:"btn btn-outline-danger",onClick:p(E=>d.openModal("delete",u),["prevent"])}," 刪除 ",8,Ft)])])]))),128))])]),b(s,{pagination:e.pagination,onGetProducts:d.getProducts},null,8,["pagination","onGetProducts"]),b(m,{ref:"editModal","temp-product":e.tempProduct,"is-new":e.isNew,onEditProduct:d.editProduct},null,8,["temp-product","is-new","onEditProduct"]),b(U,{ref:"deleteModal","temp-item":e.tempProduct,onDeleteItem:d.deleteProduct},null,8,["temp-item","onDeleteItem"])])}const qt=L(kt,[["render",Ht]]);export{qt as default};