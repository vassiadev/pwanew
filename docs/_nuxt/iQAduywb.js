import{d as w,r as n,o as x,t as m,v as g,O as l,x as i,N as f,S as b,T as h,U as k,R as A,_ as B}from"./ah3Vr_zj.js";const V={key:0,class:"pos-relative w-100 h-100"},M=w({__name:"BeforeAfter",props:["settings","api"],setup(p){const e=p,v=n(!1),c=n(!1),u=n(!1),a=n(50);x(()=>{console.log(e.settings),_()});async function _(){try{await y(e.settings.images),v.value=!0}catch{}}const y=async d=>{console.log(1),c.value=!0;function t(s){return new Promise((r,I)=>{const o=new Image;o.onload=()=>r(o),o.onerror=I,o.src=s})}try{const s=await Promise.all(d.map(r=>t(e.api+"/"+r)));u.value=!0,console.log("Images loaded successfully"),c.value=!1}catch(s){console.error("Error loading images",s)}};return(d,t)=>(m(),g("div",null,[l(u)?(m(),g("div",V,[i("div",{class:"beforeAfterFirstImage",style:f("background-image:url("+e.api+"/"+e.settings.images[0]+")")},null,4),i("div",{class:"beforeAfterSecondImage",style:f("background-image:url("+e.api+"/"+e.settings.images[1]+"); width:"+l(a)+"%;")},null,4),b(i("input",{class:"beforeAfterInput",type:"range",min:"0",max:"100",step:"1","onUpdate:modelValue":t[0]||(t[0]=s=>k(a)?a.value=s:null)},null,512),[[h,l(a)]])])):A("",!0)]))}}),S=B(M,[["__scopeId","data-v-5d0c040e"]]);export{S as default};
