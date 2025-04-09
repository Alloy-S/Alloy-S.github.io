import{d as h,r as o,c,w as p,D as k,o as d,a as e,h as n,i as f,e as b,v as u,t as m,l as v,F as w,u as j}from"./index-BCxpIQ8Y.js";const C={class:"bg-white p-3 mb-5 rounded-md shadow-md"},D={class:"flex justify-center items-end space-x-2"},B={class:""},_={class:"flex space-x-2 mt-2"},A=["min"],N={key:0,class:"text-red-500 text-sm mt-2"},P={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},R={class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},S={class:"odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"},T={class:"px-6 py-4 space-x-3"},V=["onClick"],M=h({__name:"RiwayatAbsensiAdmin",setup(K){const y=j(),t=o(""),a=o(""),l=o(""),g=()=>{t.value&&a.value&&t.value>a.value?(l.value="Tanggal akhir harus setelah tanggal mulai!",a.value=t.value):l.value=""},x=i=>{y.push(`absensi/${i}`)};return(i,r)=>(d(),c(k,null,{default:p(()=>[r[10]||(r[10]=e("div",{class:"my-5 flex justify-between items-center"},[e("p",{class:"text-3xl font-semibold text-slate-800"},"Riwayat Absensi")],-1)),e("div",C,[e("div",D,[r[3]||(r[3]=e("div",{class:"w-full max-w-md"},[e("label",{class:"block mb-2 text-sm font-medium text-gray-700"},"Cari Nama Karyawan"),e("input",{type:"text",id:"simple-search",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Cari Nama...",required:""})],-1)),e("div",B,[r[2]||(r[2]=e("label",{class:"block text-sm font-medium text-gray-700"},"Pilih Rentang Tanggal",-1)),e("div",_,[b(e("input",{type:"date","onUpdate:modelValue":r[0]||(r[0]=s=>t.value=s),onChange:g,class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[u,t.value]]),b(e("input",{type:"date","onUpdate:modelValue":r[1]||(r[1]=s=>a.value=s),onChange:g,class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",min:t.value},null,40,A),[[u,a.value]])]),l.value?(d(),n("p",N,m(l.value),1)):f("",!0)]),r[4]||(r[4]=e("button",{type:"submit",class:"flex items-center space-x-2 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[e("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})]),e("p",null,"Cari")],-1))])]),e("div",P,[e("table",R,[r[9]||(r[9]=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Nama Karyawan "),e("th",{scope:"col",class:"px-6 py-3"}," Lokasi "),e("th",{scope:"col",class:"px-6 py-3"}," Shift "),e("th",{scope:"col",class:"px-6 py-3"}," Status "),e("th",{scope:"col",class:"px-6 py-3"}," Action ")])],-1)),e("tbody",null,[(d(),n(w,null,v(10,s=>e("tr",S,[r[5]||(r[5]=e("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"}," Bambang ",-1)),r[6]||(r[6]=e("td",{class:"px-6 py-4"}," Kandang A ",-1)),r[7]||(r[7]=e("td",{class:"px-6 py-4"}," Shift Pagi~ ",-1)),r[8]||(r[8]=e("td",{class:"px-6 py-4"}," Hadir ",-1)),e("td",T,[e("a",{onClick:F=>x(s),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},"Detail",8,V)])])),64))])])]),r[11]||(r[11]=e("div",{class:"mb-16 flex justify-end mt-4"},[e("nav",{"aria-label":"Page navigation example"},[e("ul",{class:"inline-flex -space-x-px text-sm"},[e("li",null,[e("a",{href:"#",class:"flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},"Previous")]),e("li",null,[e("a",{href:"#",class:"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},"1")]),e("li",null,[e("a",{href:"#",class:"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},"2")]),e("li",null,[e("a",{href:"#","aria-current":"page",class:"flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"},"3")]),e("li",null,[e("a",{href:"#",class:"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},"4")]),e("li",null,[e("a",{href:"#",class:"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},"5")]),e("li",null,[e("a",{href:"#",class:"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},"Next")])])])],-1))]),_:1}))}});export{M as default};
