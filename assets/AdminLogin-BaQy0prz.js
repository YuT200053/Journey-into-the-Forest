import{_ as c,E as m,c as u,a as s,d as p,x as l,B as d,o as _}from"./index-aJT6rMcZ.js";var h={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yu-t-200053",VITE_BASE_URL:"/Journey-into-the-Forest/",BASE_URL:"/Journey-into-the-Forest/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f}=h,w={data(){return{user:{username:"",password:""}}},methods:{login(){const a=`${f}/admin/signin`;m.post(a,this.user).then(e=>{const{token:n,expired:r}=e.data;document.cookie=`yu-t-200053=${n};expires=${new Date(r)};`,alert(e.data.message),this.$router.push("/admin/products")}).catch(e=>{alert(e.response.data.message)})}}},x={class:"container text-center d-flex align-items-center",style:{height:"100vh"}},g={class:"row w-100"},v={class:"col-12 col-md-5 col-lg-4 mx-auto"},b=s("h2",{class:"mb-3"},"請先登入",-1),E={class:"form-floating mb-3"},y=s("label",{for:"email"},"Email address",-1),V={class:"form-floating mb-3"},B=s("label",{for:"password"},"Password",-1),R=s("button",{type:"submit",class:"btn btn-primary text-white btn-lg w-100 fw-bold"}," 登入 ",-1);function T(a,e,n,r,t,i){return _(),u("div",x,[s("div",g,[s("div",v,[b,s("form",{onSubmit:e[2]||(e[2]=p((...o)=>i.login&&i.login(...o),["prevent"]))},[s("div",E,[l(s("input",{type:"email",name:"email",class:"form-control",id:"email",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=o=>t.user.username=o)},null,512),[[d,t.user.username]]),y]),s("div",V,[l(s("input",{type:"password",name:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=o=>t.user.password=o)},null,512),[[d,t.user.password]]),B]),R],32)])])])}const D=c(w,[["render",T]]);export{D as default};
