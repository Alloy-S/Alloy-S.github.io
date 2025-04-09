import{d as v,r as f,c as h,w as p,D as x,o as i,a as t,f as k,k as o,p as w,R as y,t as l,n as R,h as b,l as _,F as B,u as C}from"./index-BCxpIQ8Y.js";const D={class:"space-y-6 mt-4"},P={class:"flex items-center justify-between"},j={class:"bg-white shadow-md rounded-lg p-6 space-y-2"},S={class:"text-blue-600 font-semibold"},q={class:"bg-white shadow-md rounded-lg overflow-x-auto"},N={class:"w-full border-collapse"},L={class:"p-3 border"},T={class:"p-3 border"},A={class:"p-3 border"},K={class:"p-3 border"},V={class:"p-3 border font-semibold"},F={class:"bg-white shadow-md rounded-lg p-6"},I=["src"],z=v({__name:"ApprovalDetailReimburse",setup(M){const u=C(),s=f({id:1,name:"Dewi Kartika",date:"2025-04-05",status:"Menunggu",note:"Pembelian alat tulis kantor",total:25e4,items:[{description:"Pulpen",quantity:10,unitPrice:3e3},{description:"Kertas A4",quantity:5,unitPrice:15e3},{description:"Map folder",quantity:3,unitPrice:12e3}],imageUrl:"https://via.placeholder.com/300x300.png?text=Bukti+Reimburse"}),n=r=>r.toLocaleString("id-ID"),m=r=>{switch(r.toLowerCase()){case"disetujui":return"text-green-600 font-semibold";case"ditolak":return"text-red-600 font-semibold";default:return"text-yellow-600 font-semibold"}},c=()=>{s.value.status="Disetujui",alert("Reimburse disetujui!"),u.push("/admin/reimburse")},g=()=>{s.value.status="Ditolak",alert("Reimburse ditolak!"),u.push("/admin/reimburse")};return(r,e)=>(i(),h(x,null,{default:p(()=>[t("div",D,[t("div",P,[e[1]||(e[1]=t("h1",{class:"text-2xl font-semibold text-slate-800"},"Approval Reimburse",-1)),k(w(y),{to:"/admin/reimburse",class:"text-blue-600 hover:underline"},{default:p(()=>e[0]||(e[0]=[o("← Kembali")])),_:1})]),t("div",j,[t("p",null,[e[2]||(e[2]=t("strong",null,"Nama:",-1)),o(" "+l(s.value.name),1)]),t("p",null,[e[3]||(e[3]=t("strong",null,"Tanggal:",-1)),o(" "+l(s.value.date),1)]),t("p",null,[e[4]||(e[4]=t("strong",null,"Status Saat Ini:",-1)),t("span",{class:R(m(s.value.status))},l(s.value.status),3)]),t("p",null,[e[5]||(e[5]=t("strong",null,"Catatan:",-1)),o(" "+l(s.value.note||"-"),1)]),t("p",null,[e[6]||(e[6]=t("strong",null,"Total:",-1)),e[7]||(e[7]=o()),t("span",S,"Rp"+l(n(s.value.total)),1)])]),t("div",q,[t("table",N,[e[8]||(e[8]=t("thead",{class:"bg-gray-100 text-left"},[t("tr",null,[t("th",{class:"p-3 border"},"No"),t("th",{class:"p-3 border"},"Deskripsi"),t("th",{class:"p-3 border"},"Jumlah"),t("th",{class:"p-3 border"},"Harga Satuan"),t("th",{class:"p-3 border"},"Subtotal")])],-1)),t("tbody",null,[(i(!0),b(B,null,_(s.value.items,(a,d)=>(i(),b("tr",{key:d,class:"hover:bg-gray-50"},[t("td",L,l(d+1),1),t("td",T,l(a.description),1),t("td",A,l(a.quantity),1),t("td",K,"Rp"+l(n(a.unitPrice)),1),t("td",V,"Rp"+l(n(a.quantity*a.unitPrice)),1)]))),128))])])]),t("div",F,[e[9]||(e[9]=t("h2",{class:"text-lg font-semibold mb-2"},"Bukti Reimburse",-1)),t("img",{src:s.value.imageUrl,alt:"Bukti Reimburse",class:"w-64 h-64 object-cover rounded-md border"},null,8,I)]),t("div",{class:"flex gap-4"},[t("button",{onClick:c,class:"px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-lg"}," Setujui "),t("button",{onClick:g,class:"px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg"}," Tolak ")])]),e[10]||(e[10]=t("div",{class:"mb-20"},null,-1))]),_:1}))}});export{z as default};
