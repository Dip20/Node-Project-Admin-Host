import{u as p,r as u,c as n,h as i,a as t,i as m,w as h,e as _,v as y,l as b,t as g,b as f,o as d,j as v}from"./index-DvIucCfW.js";import{S as w,H as C}from"./Header-COgp6Avw.js";import{a as c}from"./axios-Cm0UX6qg.js";import"./dark-logo-B7jH5WIl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const T={class:"page-wrapper",id:"main-wrapper","data-layout":"vertical","data-navbarbg":"skin6","data-sidebartype":"full","data-sidebar-position":"fixed","data-header-position":"fixed"},S={class:"body-wrapper"},V={class:"container-fluid"},A={class:"card"},j={class:"card-body"},k={class:"d-flex justify-content-between"},M=t("h5",{class:"card-title fw-semibold mb-4"},"Edit Category",-1),x={class:"row"},E=t("label",{for:""},"Category Name",-1),F={class:"col-lg-4 mt-2"},H=["model","value"],B={class:"row mt-3"},N=t("div",{class:"col-lg-3"},[t("button",{type:"submit",class:"btn-success btn btn-md"},"Submit")],-1),U={key:0,class:"error text-danger mt-4"},D="https://node-project-backend-nu.vercel.app/api/category/update",K="https://node-project-backend-nu.vercel.app/api/category/get/",L={data(){return{category:"",error:"",id:""}},mounted(){this.fetchCategoryData()},methods:{async submit(){const e=await c.post(D,{name:this.category,id:$("._id").val()},{headers:{"Content-Type":"application/json",Authorization:"lFM0vdsTK2HBwMTEVxjUF4LKCd2c2qS58MAy3hw5bmATF8hOuXPVYLHATiUA9ISV"}}),o=e==null?void 0:e.data;o&&(o==null?void 0:o.status)=="success"?(Swal.fire({title:o.msg,icon:"success"}),this.$router.push("/Category")):(console.log(e),this.error=o.msg)},fetchCategoryData(){c.get(K+$("._id").val(),{headers:{"Content-Type":"application/json",Authorization:"lFM0vdsTK2HBwMTEVxjUF4LKCd2c2qS58MAy3hw5bmATF8hOuXPVYLHATiUA9ISV"}}).then(e=>{this.category=e.data.data[0].name}).catch(e=>{console.error("Error fetching category data:",e)})}}},X=Object.assign(L,{__name:"edit_category",setup(e){const o=p();return(s,a)=>{const l=u("router-link");return d(),n("div",T,[i(w),t("div",S,[i(C),t("div",V,[t("div",A,[t("div",j,[t("div",k,[M,i(l,{class:"btn btn-primary",to:"/category"},{default:m(()=>[v("Show")]),_:1})]),t("form",{onSubmit:a[1]||(a[1]=h((...r)=>s.submit&&s.submit(...r),["prevent"]))},[t("div",x,[E,t("div",F,[_(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=r=>s.category=r),class:"form-control"},null,512),[[y,s.category]]),t("input",{type:"hidden",name:"id",class:"_id",model:s.id,value:b(o).params.id},null,8,H)])]),t("div",B,[N,s.error?(d(),n("p",U,"Error: "+g(s.error),1)):f("",!0)])],32)])])])])])}}});export{X as default};
