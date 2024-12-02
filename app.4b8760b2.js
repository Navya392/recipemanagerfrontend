(function(){"use strict";var e={4366:function(e,n,t){var r=t(5130),o=t(6768);const a={id:"app"};function i(e,n,t,r,i,c){const u=(0,o.g2)("BaseLayout");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(u,{searchQuery:i.searchQuery},null,8,["searchQuery"])])}const c={class:"home-container"};function u(e,n,t,r,a,i){const u=(0,o.g2)("NavbarSection"),s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",c,[(0,o.Lk)("div",null,[(0,o.bF)(u)]),(0,o.Lk)("div",null,[(0,o.bF)(s)]),n[0]||(n[0]=(0,o.Lk)("footer",{class:"footer"},[(0,o.Lk)("p",null,"© 2024 Recipe Manager. All rights reserved.")],-1))])}const s={class:"navbar"},l={class:"navbar-container"},p={class:"navbar-links"};function d(e,n,t,r,a,i){const c=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("nav",s,[(0,o.Lk)("div",l,[n[4]||(n[4]=(0,o.Lk)("div",{class:"navbar-logo"},[(0,o.Lk)("h1",null,"Amma Chethi Ruchulu")],-1)),(0,o.Lk)("ul",p,[(0,o.Lk)("li",null,[(0,o.bF)(c,{to:"/"},{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.eW)("Home")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(c,{to:"/about"},{default:(0,o.k6)((()=>n[1]||(n[1]=[(0,o.eW)("About")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(c,{to:"/menu"},{default:(0,o.k6)((()=>n[2]||(n[2]=[(0,o.eW)("Menu")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(c,{to:"/recipes"},{default:(0,o.k6)((()=>n[3]||(n[3]=[(0,o.eW)("Recipes")]))),_:1})])])])]),n[5]||(n[5]=(0,o.Lk)("header",{class:"header"},[(0,o.Lk)("div",{class:"scrolling-text"},[(0,o.Lk)("span",null,[(0,o.Lk)("b",null,"PULL UP A CHAIR.TAKE A TASTE. COME JOIN US. LIFE IS SO ENDLESSLY DELICIOUS.")])])],-1))],64)}var f={name:"NavbarSection"},v=t(1241);const m=(0,v.A)(f,[["render",d],["__scopeId","data-v-0dd8b3a2"]]);var h=m,k={name:"HomeSection",components:{NavbarSection:h}};const L=(0,v.A)(k,[["render",u],["__scopeId","data-v-1a003c10"]]);var b=L,g={data(){return{searchQuery:""}},methods:{updateSearchQuery(e){this.searchQuery=e}},name:"App",components:{BaseLayout:b}};const y=(0,v.A)(g,[["render",i]]);var _=y,S=t(1387);const A={class:"main-content"},C={class:"content-wrapper"},E={class:"image-section"},O=["src"];function w(e,n,r,a,i,c){const u=(0,o.g2)("AboutSection"),s=(0,o.g2)("MenuSection"),l=(0,o.g2)("RecipeList");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("main",A,[(0,o.Lk)("div",C,[n[0]||(n[0]=(0,o.Lk)("div",{class:"text-section"},[(0,o.Lk)("h2",null,"Enjoy Our Delicious Meal"),(0,o.Lk)("p",null,' "Good food is the foundation of genuine happiness. Savor every bite with our curated dishes." '),(0,o.Lk)("button",{class:"cta-button"},"Order Now")],-1)),(0,o.Lk)("div",E,[(0,o.Lk)("img",{src:t(8823),alt:"Delicious food",class:"featured-image"},null,8,O)])]),(0,o.Lk)("div",null,[(0,o.bF)(u)]),n[1]||(n[1]=(0,o.Lk)("br",null,null,-1)),(0,o.Lk)("div",null,[(0,o.bF)(s)]),n[2]||(n[2]=(0,o.Lk)("br",null,null,-1)),(0,o.Lk)("div",null,[(0,o.bF)(l)])])])}const I={class:"recipe-list"},R={class:"recipe-cards"};function j(e,n,t,r,a,i){const c=(0,o.g2)("RecipeCard");return(0,o.uX)(),(0,o.CE)("div",I,[n[0]||(n[0]=(0,o.Lk)("h2",null,"Our Signature Recipes",-1)),(0,o.Lk)("div",R,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.recipes,(e=>((0,o.uX)(),(0,o.Wv)(c,{key:e.id,recipe:e},null,8,["recipe"])))),128))])])}t(8992),t(4520);var F=t(4373),M=t(4232);const W={class:"recipe-card"},X=["src","alt"];function P(e,n,t,r,a,i){return(0,o.uX)(),(0,o.CE)("div",W,[(0,o.Lk)("h3",null,(0,M.v_)(t.recipe.name),1),(0,o.Lk)("img",{src:t.recipe.image,alt:t.recipe.name,class:"recipe-image"},null,8,X),(0,o.Lk)("p",null,[n[0]||(n[0]=(0,o.Lk)("strong",null,"Ingredients:",-1)),(0,o.eW)(" "+(0,M.v_)(t.recipe.ingredients.join(", ")),1)]),(0,o.Lk)("p",null,[n[1]||(n[1]=(0,o.Lk)("strong",null,"Steps:",-1)),(0,o.eW)(" "+(0,M.v_)(t.recipe.steps.join(" -> ")),1)]),(0,o.Lk)("p",null,[n[2]||(n[2]=(0,o.Lk)("strong",null,"Cooking Time:",-1)),(0,o.eW)(" "+(0,M.v_)(t.recipe.cookingTime),1)])])}var x={props:{recipe:Object}};const T=(0,v.A)(x,[["render",P],["__scopeId","data-v-330c987a"]]);var $=T,Q={data(){return{recipes:[],searchQuery:""}},mounted(){this.fetchRecipes()},methods:{async fetchRecipes(){try{const e=await F.A.get("http://localhost:8888/.netlify/functions/recipes");this.recipes=e.data}catch(e){console.error("Error fetching recipes:",e)}}},computed:{filteredRecipes(){return this.recipes.filter((e=>e.name.toLowerCase().includes(this.searchQuery.toLowerCase())))}},components:{RecipeCard:$}};const U=(0,v.A)(Q,[["render",j],["__scopeId","data-v-f4ffaac2"]]);var D=U;const H={class:"about-container"},N={class:"about-content"},B={class:"about-image"},K=["src"];function q(e,n,r,a,i,c){return(0,o.uX)(),(0,o.CE)("div",H,[n[1]||(n[1]=(0,o.Lk)("h1",null,"About Us",-1)),(0,o.Lk)("div",N,[(0,o.Lk)("div",B,[(0,o.Lk)("img",{src:t(6687),alt:"Delicious food"},null,8,K)]),n[0]||(n[0]=(0,o.Lk)("div",{class:"about-text"},[(0,o.Lk)("p",null,[(0,o.eW)(" Welcome to "),(0,o.Lk)("b",null,"Amma Chethi Ruchulu"),(0,o.eW)(", a place where we celebrate the rich tradition of home-cooked meals, bringing authentic flavors to your plate. ")]),(0,o.Lk)("p",null," Inspired by our love for cooking, we have created this recipe manager to make it easier for everyone to find, organize, and enjoy their favorite dishes. Whether you are looking for traditional South Indian recipes, quick snacks, or gourmet delights, we've got you covered. "),(0,o.Lk)("p",null,[(0,o.eW)(" Our mission is to preserve the essence of homemade food and help you rediscover the joy of cooking."),(0,o.Lk)("br"),(0,o.Lk)("b",null," Happy cooking!")])],-1))])])}var z={name:"AboutSection"};const G=(0,v.A)(z,[["render",q],["__scopeId","data-v-5025de6f"]]);var J=G,V=t(2758),Y={name:"HomeSection",components:{RecipeList:D,AboutSection:J,MenuSection:V["default"]}};const Z=(0,v.A)(Y,[["render",w],["__scopeId","data-v-16e687cc"]]);var ee=Z;const ne=[{path:"/",name:"Home",component:ee},{path:"/recipes",name:"Recipes",component:D},{path:"/about",name:"About",component:J},{path:"/menu",name:"Menu",component:()=>Promise.resolve().then(t.bind(t,2758))}],te=(0,S.aE)({history:(0,S.LA)(),routes:ne});var re=te;const oe=(0,r.Ef)(_);oe.use(re),oe.mount("#app")},2758:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(6768),o=t(4232);const a={class:"menu-container"},i={class:"menu-content"},c={class:"recipe-name"},u={class:"recipe-price"};function s(e,n,t,s,l,p){return(0,r.uX)(),(0,r.CE)("div",a,[n[0]||(n[0]=(0,r.Lk)("h1",null,"Our Menu",-1)),(0,r.Lk)("div",i,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.menuItems,((e,n)=>((0,r.uX)(),(0,r.CE)("div",{class:"menu-item",key:n},[(0,r.Lk)("span",c,(0,o.v_)(e.name),1),(0,r.Lk)("span",u,(0,o.v_)(e.price),1)])))),128))])])}var l={name:"MenuSection",data(){return{menuItems:[{name:"Idli with Sambar",price:"$10"},{name:"Masala Dosa",price:"$8"},{name:"Medu Vada",price:"$12"},{name:"Pesarattu",price:"$10"},{name:"Poori with Potato Curry",price:"$6"},{name:"Uttapam",price:"$7"},{name:"Bisi Bele Bath",price:"$9"},{name:"Puliyodarai (Tamarind Rice)",price:"$6"},{name:"Curd Rice",price:"$5"},{name:"Upma",price:"$5"}]}}},p=t(1241);const d=(0,p.A)(l,[["render",s],["__scopeId","data-v-08340b33"]]);var f=d},6687:function(e,n,t){e.exports=t.p+"img/icon.05403ddf.jpg"},8823:function(e,n,t){e.exports=t.p+"img/main.3eb913eb.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],c=r[1],u=r[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var l=u(t)}for(n&&n(r);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkrecipes_manager_frontend"]=self["webpackChunkrecipes_manager_frontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(4366)}));r=t.O(r)})();
//# sourceMappingURL=app.4b8760b2.js.map