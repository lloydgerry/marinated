(function(e){function t(t){for(var r,n,c=t[0],l=t[1],o=t[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},i={app:0},s=[];function c(e){return l.p+"js/"+({about:"about",mealplan:"mealplan","new-recipe":"new-recipe",recipe:"recipe",savedforlater:"savedforlater"}[e]||e)+"."+{about:"04f398a5",mealplan:"a038fb9d","new-recipe":"39c914ab",recipe:"92ce12b9",savedforlater:"7c9f19ca"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"new-recipe":1,recipe:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({about:"about",mealplan:"mealplan","new-recipe":"new-recipe",recipe:"recipe",savedforlater:"savedforlater"}[e]||e)+"."+{about:"31d6cfe0",mealplan:"31d6cfe0","new-recipe":"277ef77e",recipe:"f7b75156",savedforlater:"31d6cfe0"}[e]+".css",i=l.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var o=s[c],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===r||u===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){o=d[c],u=o.getAttribute("data-href");if(u===r||u===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[e],p.parentNode.removeChild(p),a(s)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,a){r=i[e]=[t,a]}));t.push(r[2]=s);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=i[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}i[e]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"258e":function(e,t,a){},2868:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s=a("2877"),c={},l=Object(s["a"])(c,n,i,!1,null,null,null),o=l.exports,u=(a("d3b7"),a("8c4f")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("NavBar"),a("DivSpace"),e.mealCardIsOpen?a("div",[a("PlanDrawer")],1):e._e(),a("RecipeCardsCarousel",{attrs:{RecipeCards:e.RecipeCards}})],1)},p=[],f=a("f464"),m=a("ecfc"),v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"drawer"},[a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"}),a("div",{staticClass:"grid-item"})])])}],g=(a("b245"),{name:"PlanDrawer"}),C=g,b=Object(s["a"])(C,v,h,!1,null,null,null),_=b.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("draggable",{model:{value:e.recipeCarouselArray,callback:function(t){e.recipeCarouselArray=t},expression:"recipeCarouselArray"}},[a("transition-group",{staticClass:"recipe-carousel centered"},e._l(e.RecipeCards,(function(e){return a("div",{key:e.id,staticClass:"recipe-carousel-item recipe-card"},[a("RecipeCard",{staticClass:"recipe-carousel-item recipe-card",attrs:{recipe:e}})],1)})),0)],1)],1)},w=[],O=a("310e"),j=a.n(O),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-container"},[a("Card",[a("router-link",{staticClass:"card u-clearfix",attrs:{to:{name:"recipe",params:{id:e.recipe.id}}}},[a("img",{staticClass:"card-media",attrs:{src:e.recipe.image_url,alt:""}}),a("h2",{staticClass:"card-title"},[e._v(e._s(e.recipe.title)+" ")]),a("span",{staticClass:"card-summary subtle"},[e._v(e._s(e.recipe.summary))])]),a("div",{staticClass:"card-shadow"})],1)],1)},k=[],E={components:{Card:R},props:["recipe"],data:function(){return{recipeCard:{}}}},S=E,P=(a("c084"),Object(s["a"])(S,x,k,!1,null,"30ab5b44",null)),R=P.exports,A={name:"RecipeCardCarousel",components:{draggable:j.a,RecipeCard:R},props:["RecipeCards"],data:function(){return{recipeCarouselArray:[{id:1,title:"card 1",summary:"stuffstuffstuff",img_url:"https://i.ndtvimg.com/i/2015-11/avocado_625x350_71446534495.jpg"},{id:2,title:"is this a title?",summary:"oh man this is a summary",img_url:"https://i.ndtvimg.com/i/2015-11/avocado_625x350_71446534495.jpg"},{id:3,title:"this is another item",summary:"another summary",img_url:"https://i.ndtvimg.com/i/2015-11/avocado_625x350_71446534495.jpg"}]}}},D=A,N=(a("6c1a"),Object(s["a"])(D,y,w,!1,null,"623a2e7e",null)),$=N.exports,L=a("bc3a"),T={name:"home",components:{NavBar:f["a"],PlanDrawer:_,RecipeCardsCarousel:$,DivSpace:m["a"]},data:function(){return{mealCardIsOpen:!1,RecipeCards:[]}},created:function(){this.fetchData()},methods:{mealCardClose:function(){this.mealCardIsOpen=!1},mealCardOpen:function(){this.mealCardIsOpen=!0},fetchData:function(){var e=this;L.get("/api/recipes").then((function(t){e.RecipeCards=t.data,console.log("vue returning the recipe data: ",t.data)})).catch((function(e){return console.log("error from fetch data",e)}))}}},M=T,B=Object(s["a"])(M,d,p,!1,null,null,null),I=B.exports;r["a"].use(u["a"]);var q=[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/mealplan",name:"mealplan",component:function(){return a.e("mealplan").then(a.bind(null,"82cf"))}},{path:"/recipe/:id",name:"recipe",component:function(){return a.e("recipe").then(a.bind(null,"2d11"))}},{path:"/savedforlater",name:"savedforlater",component:function(){return a.e("savedforlater").then(a.bind(null,"8f1c"))}},{path:"/new-recipe",name:"new-recipe",component:function(){return a.e("new-recipe").then(a.bind(null,"7584"))}}],J=new u["a"]({routes:q}),U=J,F=a("2f62");r["a"].use(F["a"]);var H=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:U,store:H,render:function(e){return e(o)}}).$mount("#app")},"6c1a":function(e,t,a){"use strict";var r=a("258e"),n=a.n(r);n.a},b245:function(e,t,a){},be93:function(e,t,a){},c084:function(e,t,a){"use strict";var r=a("dc06"),n=a.n(r);n.a},dc06:function(e,t,a){},ea45:function(e,t,a){"use strict";var r=a("be93"),n=a.n(r);n.a},ecfc:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},n=[],i={name:"DivSpace"},s=i,c=(a("ff87"),a("2877")),l=Object(c["a"])(s,r,n,!1,null,"f186dd24",null);t["a"]=l.exports},f464:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav-bar"},[a("router-link",{attrs:{to:"/",title:"Marinated"}},[a("h1",[e._v("Marinated")])]),a("ul",{attrs:{id:"navigation"}},e._l(e.navList,(function(t){return a("li",{key:t.index},[t.children?[a("a",{class:{active:e.active},attrs:{title:t.name},on:{click:function(t){e.isOpen=!e.isOpen,e.active=!e.active}}},[e._v(" "+e._s(t.name)+" ▾ ")]),a("div",{staticClass:"dropdown",class:{isOpen:e.isOpen}},[a("ul",e._l(t.children,(function(t){var r=t.url,n=t.name,i=t.index;return a("li",{key:i},[a("router-link",{staticClass:"nav-link",attrs:{to:r,title:n}},[e._v(" "+e._s(n)+" ")])],1)})),0)])]:[a("a",{attrs:{href:t.url,title:t.name}},[e._v(" "+e._s(t.name)+" ")])]],2)})),0)],1)},n=[],i={name:"NavBar",props:["item"],data:function(){return{isOpen:!1,active:!1,navList:[{url:"#",name:"UserName",children:[{url:"/new-recipe",name:"Add New Recipe"},{url:"/mealplan",name:"Meal Plan"},{url:"user-saved",name:"View Saved"},{url:"/logout",name:"Logout"}]},{url:"#",name:"Search"}]}}},s=i,c=(a("ea45"),a("2877")),l=Object(c["a"])(s,r,n,!1,null,"e6d5843e",null);t["a"]=l.exports},ff87:function(e,t,a){"use strict";var r=a("2868"),n=a.n(r);n.a}});
//# sourceMappingURL=app.588f2548.js.map