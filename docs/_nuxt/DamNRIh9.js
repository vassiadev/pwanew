const __vite__fileDeps=["./1EcfU2m7.js","./DFhbHYl6.js","./entry.BYsVMPQz.css","./CsQc1lEA.js","./BqCWrCi0.js","./BXCo_PaV.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as d,o as f,v as s,B as w,y as h,O as c,T as g,U as v,$ as y,z as P,N as D,x as E,t as r,L as C,a3 as N,a4 as i,a2 as V,a5 as l}from"./DFhbHYl6.js";const k={class:"d-flex flex-column w-100 h-100 ovfys"},x=E("span",null,"Hello",-1),L={key:0},B={__name:"pwa",setup(b){const u={Header:i(()=>l(()=>import("./1EcfU2m7.js"),__vite__mapDeps([0,1,2]),import.meta.url)),Cards:i(()=>l(()=>import("./CsQc1lEA.js"),__vite__mapDeps([3,1,2,4]),import.meta.url)),Picture:i(()=>l(()=>import("./BXCo_PaV.js"),__vite__mapDeps([5,1,2]),import.meta.url))},n=d();d("HeaderComponent");async function m(){try{const e=_();let a;if(["localhost","pwanew-408.pages.dev"].includes(e)){const t=p("site");a=t?`${t}`:"default.json"}else a=e.replace(/^www\./,"");let o;try{if(console.log(`https://pub-dfe68d058a7349ccbf50d909c9ced095.r2.dev/${a}/config.json`),o=await fetch(`https://pub-dfe68d058a7349ccbf50d909c9ced095.r2.dev/${a}/config.json`),!o.ok)throw new Error("Файл не найден")}catch{o=await fetch("/default.json")}n.value=await o.json()}catch{}}function _(){return window.location.hostname}function p(e){return new URLSearchParams(window.location.search).get(e)}return f(()=>{m()}),(e,a)=>{const o=V;return r(),s("div",k,[x,w(" "+h(c(n))+" ",1),c(n)?(r(),s("div",L,[(r(!0),s(g,null,v(c(n).pages[(e._.provides[y]||e.$route).name].components,t=>(r(),C(N(u[t.name]),{settings:t.settings,key:t.name},null,8,["settings"]))),128)),P(o)])):D("",!0)])}}};export{B as default};