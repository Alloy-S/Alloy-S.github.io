import{r as n,m as w,c as R,o as r,w as P,f as U,a as e,e as i,v as u,h as m,l as V,k as x,t as y,F as B,i as C,B as j}from"./index-BCxpIQ8Y.js";import{_ as q}from"./TopHeader.vue_vue_type_script_setup_true_lang-DUatdJE8.js";const I={class:"p-4 space-y-4"},N={class:"mb-4"},D={class:"space-y-4"},F=["onUpdate:modelValue"],L={class:"grid grid-cols-2 gap-4"},S=["onUpdate:modelValue"],T=["onUpdate:modelValue"],A={class:"text-sm text-right"},H={class:"font-semibold"},$={class:"text-right"},E=["onClick"],J={class:"mt-4"},K={key:0,class:"mt-2"},M=["src"],O={class:"text-right font-semibold"},z={class:"text-blue-600"},X={__name:"AddReimburse",setup(G){const d=n(""),a=n([{description:"",quantity:1,unitPrice:0}]),b=n(null),c=n(null),f=l=>{const t=l.target.files[0];t&&(b.value=t,c.value=URL.createObjectURL(t))},k=()=>{a.value.push({description:"",quantity:1,unitPrice:0})},_=l=>{a.value.splice(l,1)},p=w(()=>a.value.reduce((l,t)=>{const s=(t.quantity||0)*(t.unitPrice||0);return l+s},0)),g=l=>l.toLocaleString("id-ID"),h=()=>{const l={note:d.value,total:p.value,items:a.value,file:b.value};console.log(l),alert("Reimburse berhasil diajukan!")};return(l,t)=>(r(),R(j,null,{default:P(()=>[U(q,{title:"Pengajuan Reimburse"}),e("div",I,[t[10]||(t[10]=e("h1",{class:"text-lg font-semibold"},"Form Pengajuan Reimburse",-1)),e("div",N,[t[1]||(t[1]=e("label",{for:"note",class:"block text-sm font-medium mb-1"},"Keterangan",-1)),i(e("input",{id:"note",type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>d.value=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[u,d.value]])]),e("div",D,[t[6]||(t[6]=e("h2",{class:"text-sm font-semibold"},"Detail Item Reimburse",-1)),(r(!0),m(B,null,V(a.value,(s,v)=>(r(),m("div",{key:v,class:"bg-white border rounded-lg p-4 space-y-2"},[e("div",null,[t[2]||(t[2]=e("label",{class:"block text-sm"},"Deskripsi",-1)),i(e("input",{"onUpdate:modelValue":o=>s.description=o,type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"},null,8,F),[[u,s.description]])]),e("div",L,[e("div",null,[t[3]||(t[3]=e("label",{class:"block text-sm"},"Jumlah",-1)),i(e("input",{"onUpdate:modelValue":o=>s.quantity=o,type:"number",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"},null,8,S),[[u,s.quantity,void 0,{number:!0}]])]),e("div",null,[t[4]||(t[4]=e("label",{class:"block text-sm"},"Harga Satuan",-1)),i(e("input",{"onUpdate:modelValue":o=>s.unitPrice=o,type:"number",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"},null,8,T),[[u,s.unitPrice,void 0,{number:!0}]])])]),e("div",A,[t[5]||(t[5]=x(" Subtotal: ")),e("span",H,"Rp "+y(g(s.quantity*s.unitPrice||0)),1)]),e("div",$,[e("button",{onClick:o=>_(v),class:"text-red-500 text-sm hover:underline"},"Hapus",8,E)])]))),128)),e("button",{onClick:k,class:"text-sm text-blue-600 hover:underline"},"+ Tambah Item")]),e("div",J,[t[8]||(t[8]=e("label",{class:"block mb-1 text-sm font-medium"},"Upload Bukti",-1)),e("input",{type:"file",onChange:f,accept:"image/*",class:"w-full border p-2 rounded-md"},null,32),c.value?(r(),m("div",K,[t[7]||(t[7]=e("p",{class:"text-sm text-gray-600"},"Preview Bukti:",-1)),e("img",{src:c.value,alt:"Preview",class:"w-32 h-32 object-cover rounded-md border"},null,8,M)])):C("",!0)]),e("div",O,[t[9]||(t[9]=x(" Total Reimburse: ")),e("span",z,"Rp "+y(g(p.value)),1)]),e("button",{onClick:h,class:"w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"}," Ajukan Reimburse ")])]),_:1}))}};export{X as default};
