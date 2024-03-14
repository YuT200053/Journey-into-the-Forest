import{_ as M,B as v,o as i,c as a,a as t,x as n,A as u,b as h,F as L,q as V,z as k,u as p,D as E,r as g,t as b}from"./index-RY6-qFNo.js";import{M as w,P as I,D}from"./DeleteModal-gHf-cL6Y.js";var C={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:T,VITE_PATH:R}=C,A={data(){return{editModal:"",isLoading:!1,fullPage:!1}},props:["tempProduct","isNew"],methods:{openModal(){this.editModal.show()},hideModal(){this.editModal.hide()},editProduct(){this.$emit("editProduct")},uploadImg(){const l=`${T}/api/${R}/admin/upload`,e=this.$refs.uploadImg.files[0],o=new FormData;o.append("file-to-upload",e),this.isLoading=!0,v.post(l,o).then(_=>{alert("圖片已上傳！"),this.tempProduct.imageUrl=_.data.imageUrl,this.$refs.uploadImg.value="",this.isLoading=!1}).catch(_=>{alert(_.response.data.message),this.isLoading=!1})}},mounted(){this.editModal=new w(this.$refs.editModal,{keyboard:!1,backdrop:"static"})}},N={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"editModal"},S={class:"modal-dialog modal-xl"},B={class:"modal-content"},F={class:"modal-header bg-dark"},H={class:"modal-title text-white"},O={key:0},$={key:1},G=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),J={class:"modal-body"},q={class:"row"},z={class:"col-4"},j={class:"mb-3"},K=t("label",{for:"imageUrl",class:"form-label"},"輸入主要圖片網址",-1),Q={class:"mb-3"},W=t("label",{for:"uploadImg",class:"form-label"},"或 上傳主要圖片",-1),X=["src","alt"],Y=t("label",{for:"imagesUrl",class:"form-label"},"圖片網址",-1),Z=["onUpdate:modelValue"],tt=["src","alt"],et={class:"col-8"},ot={class:"row"},st={class:"col-12 mb-3"},lt=t("label",{for:"title",class:"form-label"},"標題",-1),it={class:"col-6 mb-3"},at=t("label",{for:"category",class:"form-label"},"分類",-1),dt={class:"col-6 mb-3"},nt=t("label",{for:"unit",class:"form-label"},"單位",-1),rt={class:"col-6 mb-3"},ct=t("label",{for:"origin_price",class:"form-label"},"原價",-1),ut={class:"col-6 mb-3"},mt=t("label",{for:"price",class:"form-label"},"售價",-1),pt=t("hr",null,null,-1),_t={class:"mb-3"},ht=t("label",{for:"description",class:"form-label"},"產品描述",-1),gt={class:"mb-3"},bt=t("label",{for:"content",class:"form-label"},"說明內容",-1),ft={class:"mb-3"},Pt=t("label",{for:"is_enabled",class:"form-check-label"},"是否啟用",-1),vt={class:"modal-footer"},yt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ut(l,e,o,_,r,d){const y=g("VueLoading");return i(),a("div",N,[t("div",S,[t("div",B,[t("div",F,[t("h5",H,[o.isNew?(i(),a("span",O,"新增產品")):(i(),a("span",$,"編輯產品"))]),G]),t("div",J,[t("div",q,[t("div",z,[t("div",j,[K,n(t("input",{type:"text",id:"imageUrl",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=s=>o.tempProduct.imageUrl=s)},null,512),[[u,o.tempProduct.imageUrl]])]),t("div",Q,[h(y,{active:r.isLoading,"is-full-page":r.fullPage},null,8,["active","is-full-page"]),W,t("input",{type:"file",class:"form-control",id:"uploadImg",ref:"uploadImg",onChange:e[1]||(e[1]=(...s)=>d.uploadImg&&d.uploadImg(...s))},null,544)]),t("img",{class:"w-100 mb-3",src:o.tempProduct.imageUrl,alt:o.tempProduct.title},null,8,X),(i(!0),a(L,null,V(o.tempProduct.imagesUrl,(s,m)=>(i(),a("div",{key:"img"+m},[Y,n(t("input",{type:"text",id:"imagesUrl",class:"form-control mb-3",placeholder:"請輸入圖片連結","onUpdate:modelValue":U=>o.tempProduct.imagesUrl[m]=U},null,8,Z),[[u,o.tempProduct.imagesUrl[m]]]),s?(i(),a("img",{key:0,class:"w-100 mb-3",src:s,alt:"img"+m},null,8,tt)):k("",!0)]))),128)),!o.tempProduct.imagesUrl.length||o.tempProduct.imagesUrl[o.tempProduct.imagesUrl.length-1]?(i(),a("button",{key:0,type:"button",class:"btn btn-outline-primary w-100 mb-3",onClick:e[2]||(e[2]=p(s=>o.tempProduct.imagesUrl.push(""),["prevent"]))}," 新增圖片 ")):(i(),a("button",{key:1,type:"button",class:"btn btn-outline-danger w-100 mb-3",onClick:e[3]||(e[3]=p(s=>o.tempProduct.imagesUrl.pop(),["prevent"]))}," 刪除圖片 "))]),t("div",et,[t("div",ot,[t("div",st,[lt,n(t("input",{type:"text",id:"title",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[4]||(e[4]=s=>o.tempProduct.title=s)},null,512),[[u,o.tempProduct.title]])]),t("div",it,[at,n(t("input",{type:"text",id:"category",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[5]||(e[5]=s=>o.tempProduct.category=s)},null,512),[[u,o.tempProduct.category]])]),t("div",dt,[nt,n(t("input",{type:"text",id:"unit",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[6]||(e[6]=s=>o.tempProduct.unit=s)},null,512),[[u,o.tempProduct.unit]])]),t("div",rt,[ct,n(t("input",{type:"number",id:"origin_price",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[7]||(e[7]=s=>o.tempProduct.origin_price=s),min:"0"},null,512),[[u,o.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",ut,[mt,n(t("input",{type:"number",id:"price",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[8]||(e[8]=s=>o.tempProduct.price=s),min:"0"},null,512),[[u,o.tempProduct.price,void 0,{number:!0}]])])]),pt,t("div",_t,[ht,n(t("textarea",{name:"description",id:"description",class:"form-control",cols:"30",placeholder:"請輸入產品描述","onUpdate:modelValue":e[9]||(e[9]=s=>o.tempProduct.description=s)},null,512),[[u,o.tempProduct.description]])]),t("div",gt,[bt,n(t("textarea",{name:"content",id:"content",class:"form-control",cols:"30",placeholder:"請輸入說明內容","onUpdate:modelValue":e[10]||(e[10]=s=>o.tempProduct.content=s)},null,512),[[u,o.tempProduct.content]])]),t("div",ft,[n(t("input",{type:"checkbox",id:"is_enabled",class:"form-check-input me-1","onUpdate:modelValue":e[11]||(e[11]=s=>o.tempProduct.is_enabled=s)},null,512),[[E,o.tempProduct.is_enabled]]),Pt])])])]),t("div",vt,[yt,t("button",{type:"button",class:"btn btn-primary",onClick:e[12]||(e[12]=p((...s)=>d.editProduct&&d.editProduct(...s),["prevent"]))},"確認")])])])],512)}const Mt=M(A,[["render",Ut]]);var Lt={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f,VITE_PATH:P}=Lt,Vt={data(){return{products:[],pagination:{},isNew:!1,tempProduct:{imagesUrl:[]},deleteModal:"",isLoading:!1}},components:{PaginationComponent:I,EditModal:Mt,DeleteModal:D},methods:{getProducts(l=1){const e=`${f}/api/${P}/admin/products?page=${l}`;this.isLoading=!0,v.get(e).then(o=>{this.products=o.data.products,this.pagination=o.data.pagination,this.isLoading=!1}).catch(o=>{alert(o.response.data.message),this.isLoading=!1})},openModal(l,e){this.isLoading=!0,l==="add"?(this.isNew=!0,this.tempProduct={imagesUrl:[]},this.$refs.editModal.openModal(),this.isLoading=!1):l==="edit"?(this.isNew=!1,this.tempProduct={...e},this.tempProduct.imagesUrl=this.tempProduct.imagesUrl||[],this.$refs.editModal.openModal(),this.isLoading=!1):l==="delete"&&(this.tempProduct={...e},this.tempProduct.imagesUrl=this.tempProduct.imagesUrl||[],this.$refs.deleteModal.openModal(),this.isLoading=!1)},editProduct(){let l=`${f}/api/${P}/admin/product`,e="post";this.isNew||(l=`${f}/api/${P}/admin/product/${this.tempProduct.id}`,e="put"),console.log(e,l),this.isLoading=!0,v[e](l,{data:this.tempProduct}).then(o=>{alert(o.data.message),this.$refs.editModal.hideModal(),this.getProducts(),this.isLoading=!1}).catch(o=>{alert(o.response.data.message),this.isLoading=!1})},deleteProduct(){const l=`${f}/api/${P}/admin/product/${this.tempProduct.id}`;this.isLoading=!0,v.delete(l).then(e=>{alert(e.data.message),this.$refs.deleteModal.hideModal(),this.getProducts(),this.isLoading=!1}).catch(e=>{alert(e.response.data.message),this.isLoading=!1})}},mounted(){this.getProducts()}},xt={class:"container mx-auto"},kt=t("h2",{class:"text-center"},"後台產品列表",-1),Et={class:"text-end my-3"},wt={class:"table align-middle"},It=t("thead",null,[t("tr",null,[t("td",null,"分類"),t("td",{width:"25%"},"產品名稱"),t("td",null,"原價"),t("td",null,"售價"),t("td",null,"是否啟用"),t("td",null,"編輯")])],-1),Dt={key:0,class:"text-success"},Ct={key:1},Tt={class:"btn-group btn-group-sm",role:"group","aria-label":"edit"},Rt=["onClick"],At=["onClick"];function Nt(l,e,o,_,r,d){const y=g("VueLoading"),s=g("PaginationComponent"),m=g("EditModal"),U=g("DeleteModal");return i(),a("div",xt,[h(y,{active:r.isLoading},null,8,["active"]),kt,t("div",Et,[t("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=p(c=>d.openModal("add"),["prevent"]))}," 建立新產品 ")]),t("table",wt,[It,t("tbody",null,[(i(!0),a(L,null,V(r.products,c=>(i(),a("tr",{key:c.id},[t("td",null,b(c.category),1),t("td",null,b(c.title),1),t("td",null,b(c.origin_price),1),t("td",null,b(c.price),1),t("td",null,[c.is_enabled?(i(),a("span",Dt,"啟用")):(i(),a("span",Ct,"未啟用"))]),t("td",null,[t("div",Tt,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:p(x=>d.openModal("edit",c),["prevent"])}," 編輯 ",8,Rt),t("button",{type:"button",class:"btn btn-outline-danger",onClick:p(x=>d.openModal("delete",c),["prevent"])}," 刪除 ",8,At)])])]))),128))])]),h(s,{pagination:r.pagination,onGetProducts:d.getProducts},null,8,["pagination","onGetProducts"]),h(m,{ref:"editModal","temp-product":r.tempProduct,"is-new":r.isNew,onEditProduct:d.editProduct},null,8,["temp-product","is-new","onEditProduct"]),h(U,{ref:"deleteModal","temp-item":r.tempProduct,onDeleteItem:d.deleteProduct},null,8,["temp-item","onDeleteItem"])])}const Ft=M(Vt,[["render",Nt]]);export{Ft as default};
