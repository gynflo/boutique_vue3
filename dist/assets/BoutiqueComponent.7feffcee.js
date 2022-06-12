var j=Object.defineProperty,E=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var k=(t,e,o)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,I=(t,e)=>{for(var o in e||(e={}))M.call(e,o)&&k(t,o,e[o]);if(F)for(var o of F(e))V.call(e,o)&&k(t,o,e[o]);return t},S=(t,e)=>E(t,N(e));import{_ as f,d as _,o as a,c as u,a as r,t as p,F as v,r as h,b as x,e as T,f as D,g as m,w as A,u as d,C as w,T as R,p as g,h as b,n as L,i as O,j as U,k as P,l as G,m as H,q as J,s as q}from"./index.039a1af6.js";const K={class:"d-flex flex-row align-items-center mb-10 p-10 product"},Q={class:"mr-10"},W={class:"flex-fill mr-10"},X={class:"mr-10"},Y=_({props:{product:null},emits:["removeProductFromCart"],setup(t,{emit:e}){const o=t;return(n,s)=>(a(),u("div",K,[r("strong",Q,p(o.product.title),1),r("span",W,"x "+p(o.product.quantity),1),r("span",X,"Prix: "+p(o.product.price)+"\u20AC",1),r("button",{class:"btn btn-danger",onClick:s[0]||(s[0]=l=>e("removeProductFromCart",t.product._id))}," Supprimez ")]))}});var Z=f(Y,[["__scopeId","data-v-37627d58"]]);const tt={class:"d-flex flex-column"},et=_({props:{cart:null},emits:["removeProductFromCart"],setup(t,{emit:e}){const o=t;return(n,s)=>(a(),u("div",tt,[(a(!0),u(v,null,h(o.cart,l=>(a(),x(Z,{key:l._id,product:l,onRemoveProductFromCart:s[0]||(s[0]=c=>e("removeProductFromCart",c))},null,8,["product"]))),128))]))}});const z=t=>(g("data-v-5ea94ee1"),t=t(),b(),t),st={class:"cart-container"},ot=z(()=>r("i",{class:"uil uil-shopping-basket"},null,-1)),rt={class:"tag"},nt={key:1},lt={class:"d-flex flex-column p-20 card ml-20"},at=z(()=>r("h2",{class:"mb-10"},"Panier :",-1)),ct={class:"btn btn-success"},dt=_({props:{cart:null},emits:["removeProductFromCart"],setup(t,{emit:e}){const o=t,n=T({open:!1}),s=D(()=>o.cart.reduce((l,c)=>l+c.price*c.quantity,0));return(l,c)=>(a(),u("div",st,[m(R,{mode:"out-in"},{default:A(()=>[d(n).open?(a(),u("div",nt,[m(w,{open:d(n).open,onClose:c[1]||(c[1]=i=>d(n).open=!1)},null,8,["open"]),r("div",lt,[at,m(et,{class:"flex-fill",cart:o.cart,onRemoveProductFromCart:c[2]||(c[2]=i=>e("removeProductFromCart",i))},null,8,["cart"]),r("button",ct,"Commander ("+p(d(s))+"\u20AC)",1)])])):(a(),u("div",{key:0,class:"cart-holder d-flex justify-content-center align-items-center",onClick:c[0]||(c[0]=i=>d(n).open=!d(n).open)},[ot,r("span",rt,p(t.cart.length),1)]))]),_:1})]))}});var ut=f(dt,[["__scopeId","data-v-5ea94ee1"]]);const it={class:"product d-flex flex-column"},pt={class:"p-10 d-flex flex-column"},_t={class:"d-flex flex-row align-items-center"},mt={class:"flex-fill"},ft=_({props:{product:null},emits:["addProductToCart"],setup(t,{emit:e}){return(o,n)=>(a(),u("div",it,[r("div",{class:"product-image",style:L({backgroundImage:`url(${t.product.image})`})},null,4),r("div",pt,[r("h4",null,p(t.product.title),1),r("p",null,p(t.product.description),1),r("div",_t,[r("strong",mt,"Prix : "+p(t.product.price)+"\u20AC",1),r("button",{onClick:n[0]||(n[0]=s=>e("addProductToCart",t.product._id)),class:"btn btn-primary"}," Ajoutez au panier ")])])]))}});var vt=f(ft,[["__scopeId","data-v-65eadf50"]]);const ht={class:"grid mb-20"},xt={key:0,class:"d-flex align-items-center justify-content-center"},Ct=_({props:{products:null,moreResults:{type:Boolean},page:null},emits:["addProductToCart","IncPage"],setup(t,{emit:e}){const o=t,n=O(null);return U(()=>o.page,()=>{var s;o.page===1&&((s=n.value)==null||s.scrollTo(0,0))}),(s,l)=>(a(),u("div",{ref_key:"scrollableDiv",ref:n,class:"d-flex flex-column p-20"},[r("div",ht,[(a(!0),u(v,null,h(t.products,c=>(a(),x(vt,{product:c,key:c._id,onAddProductToCart:l[0]||(l[0]=i=>e("addProductToCart",i))},null,8,["product"]))),128))]),o.moreResults&&t.products.length?(a(),u("div",xt,[r("button",{onClick:l[1]||(l[1]=c=>e("IncPage")),class:"btn btn-primary"}," Chargez plus de produits ")])):P("",!0)],512))}});var gt=f(Ct,[["__scopeId","data-v-0a04d72c"]]);const $=t=>(g("data-v-69906349"),t=t(),b(),t),bt={class:"d-flex flex-column p-20"},Pt={class:"mb-20"},$t=$(()=>r("h3",{class:"mb-10"},"Recherchez :",-1)),yt=["value"],Ft={class:"mb-20"},kt=$(()=>r("h3",{class:"mb-10"},"Trier par prix :",-1)),It=["checked","id","onInput"],St=["for"],Tt={class:"mb-20 flex-fill"},At=$(()=>r("h3",{class:"mb-10"},"Trier par categories :",-1)),wt=["onClick"],Rt={class:"mb-5"},qt=H("Nombre de r\xE9sultats: "),zt=_({props:{filters:null,nbrOfResults:null},emits:["updateFilter"],setup(t,{emit:e}){return(o,n)=>(a(),u("div",bt,[r("section",Pt,[$t,r("input",{type:"text",value:t.filters.search,onInput:n[0]||(n[0]=s=>e("updateFilter",{search:s.target.value})),placeholder:"Rechercher"},null,40,yt)]),r("section",Ft,[kt,(a(!0),u(v,null,h([[0,1e4],[800,1e3],[1e3,1500],[1500,2e3],[2e3,1e4]],(s,l)=>(a(),u("div",{class:"mb-5",key:l},[r("input",{checked:t.filters.priceRange[0]===s[0],type:"radio",name:"priceRange",id:s[0]+"",onInput:c=>e("updateFilter",{priceRange:s})},null,40,It),r("label",{for:s[0]+""},p(s[0]===0?"Tous les prix":s[0]===2e3?"Plus de 2000\u20AC":`Entre ${s[0]} \u20AC et ${s[1]} \u20AC`),9,St)]))),128))]),r("section",Tt,[At,(a(!0),u(v,null,h(["all","desktop","gamer","streaming"],(s,l)=>(a(),u("p",{class:G([{selected:s===t.filters.category},"category"]),key:l,onClick:c=>e("updateFilter",{category:s})},p(s),11,wt))),128))]),r("small",Rt,[qt,r("strong",null,p(t.nbrOfResults),1)]),r("button",{class:"btn btn-danger m-20",onClick:n[1]||(n[1]=s=>e("updateFilter",{}))}," Supprimer les filtres ")]))}});var Bt=f(zt,[["__scopeId","data-v-69906349"]]);const B=t=>(g("data-v-05bb6bae"),t=t(),b(),t),jt={class:"d-flex shop-container"},Et={class:"d-flex flex-column"},Nt=B(()=>r("i",{class:"uil uil-search mr-10"},null,-1)),Mt=B(()=>r("span",null,"Rechercher",-1)),Vt=[Nt,Mt],Dt=_({props:{products:null,filters:null,page:null,moreResults:{type:Boolean}},emits:["addProductToCart","updateFilter","incPage"],setup(t,{emit:e}){const o=T({open:!matchMedia("(max-width: 575px)").matches,isMobile:matchMedia("( max-width: 575px )").matches});return(n,s)=>(a(),u("div",jt,[m(w,{open:d(o).open&&d(o).isMobile,transparent:!0,onClose:s[0]||(s[0]=l=>d(o).open=!1)},null,8,["open"]),m(R,null,{default:A(()=>[d(o).open?(a(),x(Bt,{key:0,class:"shop-filter","nbr-of-results":t.products.length,filters:t.filters,onUpdateFilter:s[1]||(s[1]=l=>e("updateFilter",l))},null,8,["nbr-of-results","filters"])):P("",!0)]),_:1}),r("div",Et,[r("button",{onClick:s[2]||(s[2]=l=>d(o).open=!d(o).open),class:"btn btn-primary d-flex justify-content-center align-items.center"},Vt),m(gt,{class:"flex-fill scrollable",products:t.products,"more-results":t.moreResults,page:t.page,onAddProductToCart:s[3]||(s[3]=l=>e("addProductToCart",l)),onIncPage:s[4]||(s[4]=l=>e("incPage"))},null,8,["products","more-results","page"])])]))}});var Lt=f(Dt,[["__scopeId","data-v-05bb6bae"]]);const Ot=J("cart",{state:()=>({cart:[]}),getters:{cartIsEmpty(t){return t.cart.length===0}},actions:{addProductToCart(t){const o=q().products.find(n=>n._id===t);if(o){const n=this.cart.find(s=>s._id===t);n?n.quantity++:this.cart.push(S(I({},o),{quantity:1}))}},removeProductFromCart(t){const e=this.cart.findIndex(o=>o._id===t);e!==-1&&(this.cart[e].quantity===1?this.cart.splice(e,1):this.cart[e].quantity--)}}}),Ut={class:"d-flex flex-column"},Jt=_({setup(t){const e=q(),o=Ot();function n(i){e.updateFilter(i)}function s(){e.incPage}function l(i){o.addProductToCart(i)}function c(i){o.removeProductFromCart(i)}return e.$onAction(({name:i,after:C,args:y})=>{console.log(y),i==="updateFilter"&&y[0].search===void 0?C(()=>{e.page=1,e.products=[],e.fetchProduct()}):i==="incPage"&&C(()=>{e.fetchProduct()})}),(i,C)=>(a(),u("div",Ut,[m(Lt,{class:"shop",products:d(e).filteredProducts,filters:d(e).filters,"more-results":d(e).moreResults,page:d(e).page,onAddProductToCart:l,onUpdateFilter:n,onIncPage:s},null,8,["products","filters","more-results","page"]),d(o).cartIsEmpty?P("",!0):(a(),x(ut,{key:0,cart:d(o).cart,onRemoveProductFromCart:c},null,8,["cart"]))]))}});export{Jt as default};
