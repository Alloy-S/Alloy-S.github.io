import{d,r as i,c as r,w as m,D as b,o as c,a as e,e as p,k as l,v as x,f,p as g,u as v}from"./index-BCxpIQ8Y.js";import{Q as y}from"./vue-quill.snow-T8UrAZnr.js";const k={class:"space-y-3"},w={class:"flex space-x-3"},B={class:"flex-[7] space-y-5"},h={class:"bg-white p-5 rounded-md shadow-md space-y-4"},V=d({__name:"TambahPengumumanAdmin",setup(j){const n=v(),a=()=>{n.back()},s=i({judul:"",isi:""}),u=()=>{console.log("Data akan disimpan:",s.value)};return(P,t)=>(c(),r(b,null,{default:m(()=>[e("div",k,[t[5]||(t[5]=e("div",{class:"mb-10 mt-5 flex justify-between items-start"},[e("p",{class:"text-3xl font-semibold text-slate-800"},"Tambah Pengumuman")],-1)),e("div",w,[e("div",B,[e("div",h,[e("div",null,[t[2]||(t[2]=e("label",{class:"block mb-2 text-sm font-medium text-gray-900"},[l("Judul Pengumuman"),e("span",{class:"text-red-600"},"*")],-1)),p(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.value.judul=o),type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[x,s.value.judul]])]),e("div",null,[t[3]||(t[3]=e("label",{class:"block mb-2 text-sm font-medium text-gray-900"},[l("Isi Pengumuman"),e("span",{class:"text-red-600"},"*")],-1)),f(g(y),{content:s.value.isi,"onUpdate:content":t[1]||(t[1]=o=>s.value.isi=o),contentType:"html",theme:"snow",class:"bg-white"},null,8,["content"])]),e("div",{class:"flex justify-end pt-4 space-x-2"},[e("button",{type:"button",onClick:a,class:"text-red-500 hover:text-white border border-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"}," Batal "),e("button",{onClick:u,type:"button",class:"text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"}," Simpan ")])])]),t[4]||(t[4]=e("div",{class:"flex-[3]"},null,-1))])]),t[6]||(t[6]=e("div",{class:"mb-20"},null,-1))]),_:1}))}});export{V as default};
