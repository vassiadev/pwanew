const __vite__fileDeps=["./DDWZNPsu.js","./hje1EMmz.js","./entry.BYsVMPQz.css","./BCCtJZhL.js","./DJFreUkv.js","./BaQ9YLAi.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as i,o as f,O as l,v as m,T as w,U as h,$ as P,z as g,N as v,t as r,L as y,a3 as D,a4 as s,a2 as E,a5 as c}from"./hje1EMmz.js";const C={key:0,class:"d-flex flex-column w-100 h-100 ovfys"},j={__name:"pwa",setup(k){const u={Header:s(()=>c(()=>import("./DDWZNPsu.js"),__vite__mapDeps([0,1,2]),import.meta.url)),Cards:s(()=>c(()=>import("./BCCtJZhL.js"),__vite__mapDeps([3,1,2,4]),import.meta.url)),Picture:s(()=>c(()=>import("./BaQ9YLAi.js"),__vite__mapDeps([5,1,2]),import.meta.url))},n=i();i("HeaderComponent");async function _(){try{const e=d();let o;if(["localhost"].includes(e)){const t=p("site");o=t?`${t}.json`:"default.json"}else o=e.replace(/^www\./,"")+".json";let a;try{if(a=await fetch(`/${o}`),!a.ok)throw new Error("Файл не найден")}catch{a=await fetch("/default.json")}n.value=await a.json()}catch{}}function d(){return window.location.hostname}function p(e){return new URLSearchParams(window.location.search).get(e)}return f(()=>{_()}),(e,o)=>{const a=E;return l(n)?(r(),m("div",C,[(r(!0),m(w,null,h(l(n).pages[(e._.provides[P]||e.$route).name].components,t=>(r(),y(D(u[t.name]),{settings:t.settings,key:t.name},null,8,["settings"]))),128)),g(a)])):v("",!0)}}};export{j as default};
