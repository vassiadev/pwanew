import{d as w,g as L,t as l,v as a,T as v,U as x,P as V,M as r,L as g,N as u,y as h,r as d,Q as N,O as _,x as t,C,D as H,_ as I,z as c,A as b,X as B,Z as j,a2 as z,W as D}from"./BpL2NDGi.js";import{v as E}from"./BJDt-3ks.js";const T=["onClick"],U=w({__name:"Navmenu",props:["settings"],setup(e){const s=e,o=i=>i===s.settings.active?s.settings.itemClass+" "+s.settings.itemClassActive:s.settings.itemClass;return(i,m)=>{const p=L("fa");return l(),a("div",null,[(l(!0),a(v,null,x(e.settings.items,n=>(l(),a("div",{key:n[e.settings.itemValueKey],style:V(e.settings.itemStyle),onClick:y=>i.$emit("go",n[e.settings.itemValueKey]),class:r(o(n[e.settings.itemValueKey]))},[e.settings.itemIconKey!==void 0?(l(),g(p,{key:0,class:r(e.settings.itemIconClass),icon:[n[e.settings.itemIconKey].type,n[e.settings.itemIconKey].src]},null,8,["class","icon"])):u("",!0),e.settings.itemLabelKey!==void 0||e.settings.itemLabelKey!==!1?(l(),a("span",{key:1,class:r(e.settings.itemLabelClass)},h(n[e.settings.itemLabelKey]),3)):u("",!0)],14,T))),128))])}}}),k=e=>(C("data-v-32dbbb49"),e=e(),H(),e),A={class:"d-flex flex-column w-100 ar1 ovfxy"},M={key:0,class:"animate__animated animate__fadeIn w-100 h-100 pos-relative"},P=["src"],q={class:"d-flex flex-row jcb w-100 h-100 pos-absolute pe-none",style:{top:"0px","z-index":"66666"}},F={class:"d-flex flex-column h-100 jcb pb-4 pb-xl-5 ps-4 px-xl-5"},O=k(()=>t("span",{class:"text-light animate__animated animate__fadeInLeft animate__delay"},null,-1)),Q={class:"text-white cardh1 animate__animated animate__fadeInUp animate__delay"},R={class:"fs-1 my-0 font-weight-black ws-pw lh-sm"},W=k(()=>t("div",{class:"d-flex flex-column h-100 jcb pe-4 pb-4 pe-xl-5 pb-xl-5"},null,-1)),X=w({__name:"Card",props:["card"],setup(e){d(null);const s=d(!1);d(null);function o(m){s.value=m,s.value&&i()}const i=async()=>{console.log("loadContent")};return(m,p)=>N((l(),a("div",null,[t("div",A,[s.value?(l(),a("div",M,[t("img",{class:"w-100 h-100",src:"/default/"+e.card.id+".jpg"},null,8,P),t("div",q,[t("div",F,[O,t("span",Q,[t("span",R,h(e.card.label),1)])]),W])])):u("",!0)])])),[[_(E),o]])}}),Z=I(X,[["__scopeId","data-v-32dbbb49"]]),G=e=>(C("data-v-40073e03"),e=e(),H(),e),J={class:"d-flex flex-column w-100 h-100 ovfxy"},Y={class:"d-flex flex-row jcb aic shadow px-3 bg-dark"},ee={class:"d-none d-md-block"},te=G(()=>t("div",null,null,-1)),se={class:"d-flex flex-column w-100 h-100 ovfys"},le=w({__name:"sbbv",setup(e){const s=d({items:[{id:"news",label:"News"},{id:"tournaments",label:"Tournaments"},{id:"trainings",label:"Trainings"},{id:"media",label:"Media"},{id:"inscriptions",label:"Camps"},{id:"inscriptions",label:"Shop"}],itemIdKey:"id",itemLabelKey:"label",itemClass:"text-uppercase me-3 text-white"}),o=d([{type:"logo",id:"logo"},{type:"posts",id:"post1",label:"Hello new website"},{type:"tournaments",id:"tournament1",label:"Hello new website"},{type:"trainings",id:"training1",label:"Hello new website"},{type:"camps",id:"camp1",label:"Hello new website"},{type:"persons",id:"person1",label:"Hello new website"},{type:"products",id:"product1",label:"Hello new website"},{type:"videos",id:"video1",label:"Hello new website"},{type:"photos",id:"photo1",label:"Hello new website"},{type:"stadiums",id:"stadium1",label:"Hello new website"},{type:"posts",id:"post2",label:"Hello new website"},{type:"tournaments",id:"tournament2",label:"Hello new website"},{type:"trainings",id:"training2",label:"Hello new website"},{type:"camps",id:"camp2",label:"Hello new website"},{type:"persons",id:"person2",label:"Hello new website"},{type:"products",id:"product2",label:"Hello new website"},{type:"videos",id:"video2",label:"Hello new website"},{type:"photos",id:"photo2",label:"Hello new website"}]);return(i,m)=>{const p=U,n=Z,y=D,$=B,K=j,S=z;return l(),a("div",J,[t("div",Y,[t("div",ee,[c(p,{settings:_(s),class:"d-flex flex-row py-4"},null,8,["settings"])]),te]),t("div",se,[c(K,{fluid:"",class:"mx-0 px-0"},{default:b(()=>[c($,{class:"mx-0"},{default:b(()=>[(l(!0),a(v,null,x(_(o),f=>(l(),g(y,{key:f.id,xs:"12",md:"6",lg:"4",xl:"3",class:"p-0"},{default:b(()=>[c(n,{card:f},null,8,["card"])]),_:2},1024))),128))]),_:1})]),_:1}),c(S)])])}}}),ie=I(le,[["__scopeId","data-v-40073e03"]]);export{ie as default};
