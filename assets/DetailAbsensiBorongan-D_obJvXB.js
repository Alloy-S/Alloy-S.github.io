import{r as d,c as i,o as n,w as c,f as b,a as t,k as r,t as s,h as l,l as p,F as g,B as m}from"./index-BCxpIQ8Y.js";import{_ as u}from"./TopHeader.vue_vue_type_script_setup_true_lang-DUatdJE8.js";const h={class:"p-4 space-y-6"},_={class:"bg-white shadow-md rounded-lg p-6"},y={class:"text-gray-600 mt-1"},x={class:"text-gray-600"},f={class:"overflow-x-auto bg-white shadow-md rounded-lg"},B={class:"w-full border-collapse"},N={class:"border p-3"},T={class:"border p-3 capitalize"},v={class:"border p-3 text-right"},L={class:"border p-3 text-right"},P={class:"border p-3 text-right"},A={class:"border p-3 text-right font-semibold text-blue-600"},S={__name:"DetailAbsensiBorongan",setup(D){const a=d({id:1,date:"2025-03-12",createdBy:"Admin",workers:[{name:"Budi",type:"borongan",jobType:"Angkut Pakan",tonNormal:5,tonLembur:2,totalPrice:35e4},{name:"Ani",type:"harian",jobType:"-",tonNormal:0,tonLembur:0,totalPrice:1e5},{name:"Doni",type:"borongan",jobType:"Panen Telur",tonNormal:6,tonLembur:3,totalPrice:45e4}]});return(j,o)=>(n(),i(m,null,{default:c(()=>[b(u,{title:"Detail Absensi Borongan"}),t("div",h,[t("div",_,[o[2]||(o[2]=t("h1",{class:"text-xl font-semibold text-gray-800"},"Detail Absensi Borongan",-1)),t("p",y,[o[0]||(o[0]=t("strong",null,"Tanggal:",-1)),r(" "+s(a.value.date),1)]),t("p",x,[o[1]||(o[1]=t("strong",null,"Dibuat oleh:",-1)),r(" "+s(a.value.createdBy),1)])]),t("div",f,[t("table",B,[o[3]||(o[3]=t("thead",{class:"bg-gray-100"},[t("tr",null,[t("th",{class:"border p-3 text-left"},"Nama"),t("th",{class:"border p-3 text-left"},"Tipe"),t("th",{class:"border px-4 py-2"},"Jenis Borongan"),t("th",{class:"border p-3 text-right"},"Ton Normal"),t("th",{class:"border p-3 text-right"},"Ton Lembur"),t("th",{class:"border p-3 text-right"},"Total Harga")])],-1)),t("tbody",null,[(n(!0),l(g,null,p(a.value.workers,e=>(n(),l("tr",{key:e.name,class:"hover:bg-gray-50"},[t("td",N,s(e.name),1),t("td",T,s(e.type),1),t("td",v,s(e.type==="borongan"?e.jobType:"-"),1),t("td",L,s(e.type==="borongan"?e.tonNormal:"-"),1),t("td",P,s(e.type==="borongan"?e.tonLembur:"-"),1),t("td",A,"Rp"+s(e.totalPrice.toLocaleString()),1)]))),128))])])])])]),_:1}))}};export{S as default};
