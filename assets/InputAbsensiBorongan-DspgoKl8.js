import{r,c as N,o,w as A,f as D,a as e,h as d,i as k,e as b,x as v,l as g,t as n,F as c,v as x,B as V}from"./index-BCxpIQ8Y.js";import{_ as L}from"./TopHeader.vue_vue_type_script_setup_true_lang-DUatdJE8.js";const C={class:"p-4 space-y-4"},P=["value"],U={key:0,class:"bg-gray-50 p-4 rounded-md"},H=["value"],I={key:1,class:"mt-4"},S={class:"overflow-x-auto bg-white shadow-md rounded-lg"},j={class:"w-full border-collapse"},E={class:"border p-2"},F={class:"border p-2 capitalize"},K={class:"border p-2"},M={class:"border p-2"},$={class:"border p-2"},z={class:"border p-2"},W=["onClick"],Q={__name:"InputAbsensiBorongan",setup(q){const h=[{id:1,name:"Budi"},{id:2,name:"Ani"},{id:3,name:"Doni"}],w=[{id:1,name:"Ayam Hidup"},{id:2,name:"Pakan Ayam"},{id:3,name:"Telur"}],u=r(null),l=r("harian"),i=r(null),m=r(0),p=r(0),s=r([]),B=()=>{if(!u.value){alert("Pilih karyawan terlebih dahulu!");return}if(l.value==="borongan"&&!i.value){alert("Pilih barang yang dikerjakan!");return}s.value.push({worker:u.value,type:l.value,item:l.value==="borongan"?i.value:null,tonNormal:l.value==="borongan"?m.value:0,tonLembur:l.value==="borongan"?p.value:0}),u.value=null,l.value="harian",i.value=null,m.value=0,p.value=0},T=f=>{s.value.splice(f,1)},_=()=>{console.log("Data yang disimpan:",s.value),alert("Data absensi berhasil disimpan!"),s.value=[]};return(f,a)=>(o(),N(V,null,{default:A(()=>[D(L,{title:"Input Absensi Borongan"}),e("div",C,[a[13]||(a[13]=e("h1",{class:"text-lg font-semibold text-gray-700"},"Input Absensi Borongan",-1)),e("div",null,[a[5]||(a[5]=e("label",{class:"block font-medium text-gray-600"},"Pilih Karyawan:",-1)),b(e("select",{"onUpdate:modelValue":a[0]||(a[0]=t=>u.value=t),class:"w-full border-slate-300 p-2 rounded-md"},[(o(),d(c,null,g(h,t=>e("option",{key:t.id,value:t},n(t.name),9,P)),64))],512),[[v,u.value]])]),e("div",null,[a[7]||(a[7]=e("label",{class:"block font-medium text-gray-600"},"Tipe:",-1)),b(e("select",{"onUpdate:modelValue":a[1]||(a[1]=t=>l.value=t),class:"w-full border-slate-300 p-2 rounded-md"},a[6]||(a[6]=[e("option",{value:"harian"},"Harian",-1),e("option",{value:"borongan"},"Borongan",-1),e("option",{value:"harian borongan"},"1/2 Hari & Borongan",-1)]),512),[[v,l.value]])]),l.value==="borongan"||l.value==="harian borongan"?(o(),d("div",U,[a[8]||(a[8]=e("label",{class:"block font-medium text-gray-600"},"Barang yang dikerjakan:",-1)),b(e("select",{"onUpdate:modelValue":a[2]||(a[2]=t=>i.value=t),class:"w-full border p-2 rounded-md"},[(o(),d(c,null,g(w,t=>e("option",{key:t.id,value:t},n(t.name),9,H)),64))],512),[[v,i.value]]),a[9]||(a[9]=e("label",{class:"block font-medium text-gray-600 mt-2"},"Ton Normal:",-1)),b(e("input",{type:"number","onUpdate:modelValue":a[3]||(a[3]=t=>m.value=t),class:"w-full border p-2 rounded-md"},null,512),[[x,m.value]]),a[10]||(a[10]=e("label",{class:"block font-medium text-gray-600 mt-2"},"Ton Lembur:",-1)),b(e("input",{type:"number","onUpdate:modelValue":a[4]||(a[4]=t=>p.value=t),class:"w-full border p-2 rounded-md"},null,512),[[x,p.value]])])):k("",!0),e("button",{onClick:B,class:"w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 transition"}," + Tambah ke Daftar "),s.value.length>0?(o(),d("div",I,[a[12]||(a[12]=e("h2",{class:"text-lg font-semibold text-gray-700"},"Daftar Absensi",-1)),e("div",S,[e("table",j,[a[11]||(a[11]=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{class:"border p-2 text-left"},"Karyawan"),e("th",{class:"border p-2 text-left"},"Tipe"),e("th",{class:"border p-2 text-left"},"Barang"),e("th",{class:"border p-2 text-left"},"Ton Normal"),e("th",{class:"border p-2 text-left"},"Ton Lembur"),e("th",{class:"border p-2 text-left"},"Aksi")])],-1)),e("tbody",null,[(o(!0),d(c,null,g(s.value,(t,y)=>(o(),d("tr",{key:y},[e("td",E,n(t.worker.name),1),e("td",F,n(t.type),1),e("td",K,n(t.type==="borongan"?t.item.name:"-"),1),e("td",M,n(t.type==="borongan"?t.tonNormal:"-"),1),e("td",$,n(t.type==="borongan"?t.tonLembur:"-"),1),e("td",z,[e("button",{onClick:G=>T(y),class:"px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-700 transition"}," Hapus ",8,W)])]))),128))])])])])):k("",!0),e("button",{onClick:_,class:"w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-700 transition"}," Simpan Absensi ")])]),_:1}))}};export{Q as default};
