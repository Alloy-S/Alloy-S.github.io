import{d as B,r as d,m as b,c as C,w as M,B as P,o as n,f as v,a as e,e as N,v as A,h as r,l as x,t as o,k as u,F as p,n as R,u as V}from"./index-cI067N9l.js";import{_ as $}from"./TopAbsensiNavigation.vue_vue_type_script_setup_true_lang-Cuo44nEk.js";import{_ as D}from"./TopHeader.vue_vue_type_script_setup_true_lang-a98n4xa4.js";const H={class:"p-4"},T={class:"mt-3"},I={class:"mt-3"},S=["onClick"],W={class:"flex flex-col justify-center"},F={class:"text-5xl"},z={class:"flex flex-col justify-center items-start text-sm text-slate-800"},E={class:"font-semibold"},J={class:"font-semibold"},K={class:"font-semibold"},L={class:"flex justify-center items-center mt-4"},U={"aria-label":"Riwayat Absensi Pagination"},q={class:"flex items-center -space-x-px h-8 text-sm"},G=["disabled"],O=["onClick"],Q=["disabled"],c=5,se=B({__name:"RiwayatAbsensiView",setup(X){const h=V(),f=d(null),g=d([{id:"1",tanggal:"15",bulan:"Mar 2025",shift:"Normal(08:00-16:00)",jamMasuk:"07:50-16:10 WIB",status:"Hadir"},{id:"1",tanggal:"14",bulan:"Mar 2025",shift:"Normal(08:00-16:00)",jamMasuk:"07:50-16:10 WIB",status:"Hadir"},{id:"1",tanggal:"13",bulan:"Mar 2025",shift:"Normal(08:00-16:00)",jamMasuk:"07:50-16:10 WIB",status:"Hadir"}]),l=d(1),i=b(()=>Math.ceil(g.value.length/c)),y=b(()=>{const a=(l.value-1)*c,t=a+c;return g.value.slice(a,t)}),w=a=>{a>=1&&a<=i.value&&(l.value=a)},k=()=>{l.value>1&&l.value--},_=()=>{l.value<i.value&&l.value++},j=a=>{h.push(`riwayat/${a.id}`)};return(a,t)=>(n(),C(P,null,{default:M(()=>[v(D,{title:"Riwayat Absensi"}),v($),e("div",H,[t[9]||(t[9]=e("div",{class:"flex items-center gap-2 text-blue-400"},[e("i",{class:"fa-solid fa-clock"}),e("p",null,"Riwayat Absensi")],-1)),e("div",T,[t[1]||(t[1]=e("label",{for:"month-picker",class:"text-sm font-semibold text-gray-700"},"Periode Berdasarkan Bulan",-1)),N(e("input",{type:"month","onUpdate:modelValue":t[0]||(t[0]=s=>f.value=s),id:"month-picker",class:"w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"},null,512),[[A,f.value]])]),e("div",null,[t[8]||(t[8]=e("div",{class:"flex justify-between items-center mt-4"},[e("p",{class:"text-sm font-semibold text-gray-700"},"Riwayat Absensi")],-1)),e("div",I,[(n(!0),r(p,null,x(y.value,(s,m)=>(n(),r("button",{key:m,onClick:Y=>j(s),class:"w-full flex space-x-4 justify-between bg-white p-4 rounded-lg shadow mb-3 border-l-4 border-green-500"},[e("div",W,[e("p",F,o(s.tanggal),1),e("p",null,o(s.bulan),1)]),e("div",z,[e("p",null,[t[2]||(t[2]=u("Shift: ")),e("span",E,o(s.shift),1)]),e("p",null,[t[3]||(t[3]=u("Jam Hadir: ")),e("span",J,o(s.jamMasuk),1)]),e("p",null,[t[4]||(t[4]=u("Status Kehadiran: ")),e("span",K,o(s.status),1)])]),t[5]||(t[5]=e("div",{class:"flex flex-col justify-center"},[e("i",{class:"fa-solid fa-angle-right"})],-1))],8,S))),128))]),e("div",L,[e("nav",U,[e("ul",q,[e("li",null,[e("button",{onClick:k,disabled:l.value===1,class:"flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"},t[6]||(t[6]=[e("span",{class:"sr-only"},"Previous",-1),e("svg",{class:"w-2.5 h-2.5 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 1 1 5l4 4"})],-1)]),8,G)]),(n(!0),r(p,null,x(i.value,s=>(n(),r("li",{key:s},[e("button",{onClick:m=>w(s),class:R([{"text-blue-600 border-blue-300 bg-blue-50":l.value===s,"text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700":l.value!==s},"flex items-center justify-center px-3 h-8 leading-tight border"])},o(s),11,O)]))),128)),e("li",null,[e("button",{onClick:_,disabled:l.value===i.value,class:"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"},t[7]||(t[7]=[e("span",{class:"sr-only"},"Next",-1),e("svg",{class:"w-2.5 h-2.5 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})],-1)]),8,Q)])])])])])])]),_:1}))}});export{se as default};
