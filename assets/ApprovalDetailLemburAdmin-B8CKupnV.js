import{d as r,r as m,c as g,w as c,D as p,o as u,a as t,h as v,i as x,t as a,u as b,k as l,n as f}from"./index-BCxpIQ8Y.js";const k={class:"space-y-6"},_={class:"flex items-center justify-between"},y={class:"text-sm text-gray-500"},w={class:"bg-white shadow rounded-lg p-5 space-y-4"},D={class:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"},h={key:0,class:"flex justify-end gap-4 mt-4"},L=r({__name:"ApprovalDetailLemburAdmin",setup(j){const n=b(),o=()=>n.back(),s=m({date:"2025-04-06",time_start:"18:00",time_end:"20:30",status:"Menunggu"}),i=()=>{s.value.status="Disetujui",alert("Lembur telah disetujui.")},d=()=>{s.value.status="Ditolak",alert("Lembur telah ditolak.")};return(C,e)=>(u(),g(p,null,{default:c(()=>[t("div",k,[t("div",_,[t("div",null,[e[0]||(e[0]=t("h1",{class:"text-3xl font-semibold text-slate-800"},"Detail Lembur",-1)),t("p",y,"Informasi lembur pada tanggal "+a(s.value.date),1)]),t("button",{onClick:o,class:"text-sm text-blue-600 hover:underline"}," ← Kembali ")]),t("div",w,[t("div",D,[t("div",null,[e[1]||(e[1]=t("span",{class:"font-medium text-slate-600"},"Tanggal:",-1)),l(" "+a(s.value.date),1)]),t("div",null,[e[2]||(e[2]=t("span",{class:"font-medium text-slate-600"},"Jam Mulai:",-1)),l(" "+a(s.value.time_start),1)]),t("div",null,[e[3]||(e[3]=t("span",{class:"font-medium text-slate-600"},"Jam Selesai:",-1)),l(" "+a(s.value.time_end),1)]),t("div",null,[e[4]||(e[4]=t("span",{class:"font-medium text-slate-600"},"Status:",-1)),t("span",{class:f({"text-green-600":s.value.status==="Disetujui","text-yellow-600":s.value.status==="Menunggu","text-red-600":s.value.status==="Ditolak"})},a(s.value.status),3)])])]),s.value.status==="Menunggu"?(u(),v("div",h,[t("button",{onClick:d,class:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"}," Tolak "),t("button",{onClick:i,class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"}," Setujui ")])):x("",!0)]),e[5]||(e[5]=t("div",{class:"mb-20"},null,-1))]),_:1}))}});export{L as default};
