(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],l=0,f=[];l<i.length;l++)s=i[l],o[s]&&f.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);m&&m(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var m=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},1728:function(e,t,n){"use strict";var r=n("8767"),o=n.n(r);o.a},"184b":function(e,t,n){},"1d53":function(e,t,n){"use strict";var r=n("b566"),o=n.n(r);o.a},"1f87":function(e,t,n){"use strict";var r=n("afbb"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("8c4f"),a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v(" teste ")])])}],i={name:"HelloWorld",props:{msg:String}},u=i,c=(n("94b1"),n("2877")),m=Object(c["a"])(u,a,s,!1,null,"37029edd",null);m.options.__file="HelloWorld.vue";var l=m.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-form",{on:{submit:e.onSubmit}},[n("b-form-group",{attrs:{id:"email",label:"Email address:","label-for":"email"}},[n("b-form-input",{attrs:{id:"exampleInput1",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("b-form-group",{attrs:{id:"password",label:"Password:","label-for":"password"}},[n("b-form-input",{attrs:{id:"password",type:"password",required:"",placeholder:"Enter your password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Login")])],1)],1)},p=[],h=(n("96cf"),n("1da1")),d=(n("7f7f"),n("d4ec")),v=n("bee2"),b=n("bc3a"),k=n.n(b),g="https://pokeapi.co/api/v2/",_="api/v1/users",w="api/v1/auth",P=function(){function e(){Object(d["a"])(this,e)}return Object(v["a"])(e,null,[{key:"createUser",value:function(e){return k.a.post(_,{email:e.email,name:e.name,favouritePokemon:e.favouritePokemon,password:e.password,birthDate:e.birthDate})}},{key:"loginUserCreateToken",value:function(e){return k.a.post("".concat(w,"/login"),{email:e.email,password:e.password})}},{key:"getUserInfo",value:function(e,t){var n={headers:{"x-access-token":t}};return k.a.get("".concat(_,"/joao.crulhas@gmail.com"),n).then(function(e){return e}).catch(function(e){return e})}},{key:"getAllPokemons",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(g,"pokemon/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPokemonInfo",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(g,"pokemon/").concat(t,"/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"catchPokemon",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,n,r){var o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o={headers:{"x-access-token":r}},e.next=3,k.a.post("".concat(_,"/catchpokemon"),{id:t,pokemon:n},o);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getMyPokemons",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={headers:{"x-access-token":n}},e.abrupt("return",k.a.get("".concat(_,"/mypokemons/").concat(t),r).then(function(e){return e}).catch(function(e){return e}));case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),x=P,y={data:function(){return{form:{email:"",password:""}}},methods:{onSubmit:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("to aqui"),e.next=3,x.loginUserCreateToken(this.form);case 3:if(n=e.sent,200!==n.status){e.next=11;break}return e.next=7,x.getUserInfo(this.form.email,n.data.token);case 7:r=e.sent,this.$store.commit("DEFINE_TOKEN",n.data.token),this.$store.commit("LOGIN_USER",r.data),this.$router.push("Profile");case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},O=y,$=(n("eabd"),Object(c["a"])(O,f,p,!1,null,"334823a2",null));$.options.__file="Login.vue";var E=$.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.show?n("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[n("b-form-group",{attrs:{id:"email",label:"Email address:","label-for":"email"}},[n("b-form-input",{attrs:{id:"exampleInput1",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("b-form-group",{attrs:{id:"name",label:"Your Name:","label-for":"name"}},[n("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("b-form-group",{attrs:{id:"birthDate",label:"Birth Date:","label-for":"birthDate"}},[n("b-form-input",{attrs:{id:"birthDate",type:"date",required:"",placeholder:"Enter your favourite pokemon"},model:{value:e.form.birthDate,callback:function(t){e.$set(e.form,"birthDate",t)},expression:"form.birthDate"}})],1),n("b-form-group",{attrs:{id:"favouritePokemon",label:"Favourite Pokemon:","label-for":"favouritePokemon"}},[n("b-form-input",{attrs:{id:"favouritePokemon",type:"text",required:"",placeholder:"Enter your favourite pokemon"},model:{value:e.form.favouritePokemon,callback:function(t){e.$set(e.form,"favouritePokemon",t)},expression:"form.favouritePokemon"}})],1),n("b-form-group",{attrs:{id:"password",label:"Password:","label-for":"password"}},[n("b-form-input",{attrs:{id:"password",type:"password",required:"",placeholder:"Enter your password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e()],1)},R=[],M={data:function(){return{form:{email:"",password:"",name:"",favouritePokemon:"",birthDate:""},show:!0}},methods:{onSubmit:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.createUser(this.form);case 2:if(n=e.sent,201!==n.status){e.next=10;break}return this.$store.commit("LOGIN_USER",this.form),e.next=7,x.loginUserCreateToken(this.form);case 7:r=e.sent,this.$store.commit("DEFINE_TOKEN",r.data.token),this.$router.push("Profile");case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.name="",this.form.favouritePokemon="",this.form.birthDate="",this.form.password="",this.show=!1,this.$nextTick(function(){t.show=!0})}}},N=M,S=(n("1d53"),Object(c["a"])(N,j,R,!1,null,"188f745d",null));S.options.__file="Signup.vue";var D=S.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("sifgnout")])])}],U={},C=U,T=(n("6ed5"),Object(c["a"])(C,I,L,!1,null,"2cf9dc2c",null));T.options.__file="Signout.vue";var A=T.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v(" Name: "+e._s(e.returnProfileUser.name))]),n("p",[e._v(" Email: "+e._s(e.returnProfileUser.email))]),n("p",[e._v(" Favourite Pokemon: "+e._s(e.returnProfileUser.favouritePokemon))]),n("p",[e._v(" Birth date: "+e._s(e.returnProfileUser.birthDate))])])},K=[],F={computed:{returnProfileUser:function(){return this.$store.state.user}}},G=F,H=(n("8109"),Object(c["a"])(G,q,K,!1,null,"d66b8566",null));H.options.__file="Prof.vue";var W=H.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{attrs:{id:"pokemons"}},e._l(e.pokemons,function(t){return n("li",{key:t.url},[e._v("\n      "+e._s(t.name)+" - "),n("router-link",{attrs:{to:{path:"/pokemon/"+t.name,params:{namePokemon:t.name}}}},[e._v("Info")])],1)})),n("br"),n("b-pagination",{attrs:{size:"md","total-rows":900,"per-page":100},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},J=[],B={data:function(){return{pokemons:"",currentPage:1}},created:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(0!==this.$store.getters.getPokemons.length){e.next=8;break}return e.next=3,x.getAllPokemons();case 3:t=e.sent,this.pokemons=t.data.results,this.$store.commit("POKEMONS",t.data.results),e.next=9;break;case 8:this.pokemons=this.$store.getters.getPokemons;case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},z=B,Q=(n("8c14"),Object(c["a"])(z,Y,J,!1,null,"947ebb48",null));Q.options.__file="Pokemons.vue";var V=Q.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v(" Para capturar o seu pokemon insira um número de 0 a 9 no input em questão, caso seja o mesmo número do sorteado, você irá capturá-lo ")]),n("hr"),n("div",{directives:[{name:"show",rawName:"v-show",value:e.flagAlert,expression:"flagAlert"}]},[n("b-alert",{attrs:{show:""}},[e._v("You catched a new pokemon :D ")])],1),n("p",[e._v("Restam "+e._s(4-e.attempts)+" tentativas ")]),n("p",[e._v(" Pokemon sort: "+e._s(e.pokemon.name))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{placeholder:"Catch yout pokemon"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}}),n("div",{staticClass:"row"},[n("b-button",{on:{click:e.catchit}},[e._v(" Catch!")])],1)])},Z=[],ee={data:function(){return{flagAlert:!1,attempts:1,number:"",pokemon:{name:"teste"}}},created:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.$store.state.login){e.next=4;break}this.$router.push("Login"),e.next=13;break;case 4:if(0!==this.$store.getters.getPokemons.length){e.next=12;break}return e.next=7,x.getAllPokemons();case 7:t=e.sent,this.$store.commit("POKEMONS",t.data.results),this.pokemon.name=this.$store.getters.getRandomPokemon,e.next=13;break;case 12:this.pokemon.name=this.$store.getters.getRandomPokemon;case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{catchit:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.flagAlert=!1,t=Math.floor(9*Math.random())+1,!(t==this.number&&this.attempts<4)){e.next=11;break}return e.next=5,x.catchPokemon(this.$store.state.user._id,this.pokemon.name,this.$store.state.token);case 5:this.attempts=1,this.flagAlert=!0,n=this.$store.state.pokemons[Math.floor(949*Math.random())+1],this.pokemon.name=n.name,e.next=12;break;case 11:this.attempts++;case 12:this.attempts>=4&&(this.attempts=1,r=this.$store.state.pokemons[Math.floor(949*Math.random())+1],this.pokemon.name=r.name);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},te=ee,ne=(n("aae7"),Object(c["a"])(te,X,Z,!1,null,"7ddadb94",null));ne.options.__file="CatchPokemons.vue";var re=ne.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v(" "+e._s(this.$route.params.namePokemon)+" ")]),e.loading?n("div",{staticClass:"loading"},[e._v("\n        Loading Pokemon info...\n    ")]):n("div",[n("h4",[e._v("Abilities")]),n("ul",e._l(e.pokemonInfo,function(t){return n("li",{key:t},[e._v("\n            "+e._s(t)+"\n        ")])}))])])},ae=[],se=(n("ac6a"),{data:function(){return{loading:!1,post:null,error:null,pokemonInfo:[]}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,x.getPokemonInfo(this.$route.params.namePokemon);case 3:t=e.sent,t=t.data.abilities,t.forEach(function(e){n.pokemonInfo.push(e.ability.name)}),this.loading=!1;case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}),ie=se,ue=(n("e32e"),Object(c["a"])(ie,oe,ae,!1,null,"4d6749f5",null));ue.options.__file="PokemonInfo.vue";var ce=ue.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Meus pokemons: ")]),n("ul",{attrs:{id:"example-1"}},e._l(e.myPokemons,function(t){return n("li",{key:t._id},[e._v("\n            Name: "+e._s(t.pokemonName)+" - Catched:  "+e._s(t.created)+"\n\n        ")])}))])},le=[],fe={data:function(){return{myPokemons:[]}},created:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.$store.state.login){e.next=4;break}this.$router.push("Login"),e.next=10;break;case 4:return e.next=6,x.getMyPokemons(this.$store.state.user._id,this.$store.state.token);case 6:t=e.sent,t=t.data,this.myPokemons=t,this.$store.commit("MYPOKEMONS",this.myPokemons);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},pe=fe,he=(n("1728"),Object(c["a"])(pe,me,le,!1,null,"1db948fe",null));he.options.__file="MyPokemons.vue";var de=he.exports;r["a"].use(o["a"]);var ve=new o["a"]({routes:[{path:"/",name:"HelloWorld",component:l},{path:"/login",name:"Login",component:E},{path:"/signup",name:"Signup",component:D},{path:"/signout",name:"Signout",component:A},{path:"/profile",name:"Profile",component:W},{path:"/pokemons",name:"Pokemons",component:V},{path:"/catch",name:"CatchPokemons",component:re},{path:"/pokemon/:namePokemon",name:"PokemonInfo",component:ce},{path:"/mypokemons",name:"MyPokemons",component:de}]}),be=n("2f62"),ke={user:{email:"",name:"",birthDate:"",favouritePokemon:"",password:"",_id:""},login:!1,token:"",pokemons:[],myPokemons:[]},ge={LOGIN_USER:function(e,t){e.user=t},DEFINE_TOKEN:function(e,t){e.login=!0,e.token=t},LOGOUT:function(e){e.login=!1,e.token="",e.user.email="",e.user.favouritePokemon="",e.user.name="",e.user.password="",e.user.birthDate=""},POKEMONS:function(e,t){e.pokemons=t},MYPOKEMONS:function(e,t){e.myPokemons=t},CATCHNEWPOKEMON:function(e,t){}},_e={getPokemons:function(e){return e.pokemons},getRandomPokemon:function(e){if(e.pokemons.length>0){var t=Math.floor(949*Math.random())+1;return console.log(t),e.pokemons[t].name}},getMyPokemons:function(e){return e.myPokemons}};r["a"].use(be["a"]);var we=new be["a"].Store({state:ke,mutations:ge,getters:_e}),Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},xe=[],ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-navbar-brand",{attrs:{to:{name:"HelloWorld"}}},[e._v("PokedexJP")]),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:{name:"Pokemons"}}},[e._v("Pokemons")]),n("b-nav-item",{attrs:{to:{name:"CatchPokemons"}}},[e._v("Catch Pokemons")]),n("b-nav-item",{attrs:{to:{name:"MyPokemons"}}},[e._v("MyPokemons")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[e.userLogged?n("b-nav-item-dropdown",{attrs:{right:""}},[n("template",{slot:"button-content"},[n("em",[e._v(" "+e._s(e.userName)+" ")])]),n("b-dropdown-item",{attrs:{href:"#"}},[n("router-link",{attrs:{to:{name:"Profile"}}},[e._v("Profile")])],1),n("b-dropdown-item",{on:{click:e.logout}},[e._v("Logout")])],2):n("b-nav-item-dropdown",{attrs:{right:""}},[n("template",{slot:"button-content"},[n("em",[e._v(" Login ")])]),n("b-dropdown-item",{attrs:{href:"#"}},[n("router-link",{attrs:{to:{name:"Login"}}},[e._v("Login")])],1),n("b-dropdown-item",{attrs:{href:"#"}},[n("router-link",{attrs:{to:{name:"Signup"}}},[e._v("Signup")])],1)],2)],1)],1)],1)],1)},Oe=[],$e={name:"Navbar",computed:{userLogged:function(){return this.$store.state.login},userName:function(){return this.$store.state.user.name}},methods:{logout:function(){this.$store.commit("LOGOUT")}}},Ee=$e,je=(n("1f87"),Object(c["a"])(Ee,ye,Oe,!1,null,"1dfd07e3",null));je.options.__file="Navbar.vue";var Re=je.exports,Me={name:"app",components:{Navbar:Re}},Ne=Me,Se=(n("034f"),Object(c["a"])(Ne,Pe,xe,!1,null,null,null));Se.options.__file="App.vue";var De=Se.exports,Ie=n("9f7b");n("f9e3"),n("2dd8");r["a"].use(Ie["a"]),r["a"].config.productionTip=!1,new r["a"]({store:we,router:ve,render:function(e){return e(De)}}).$mount("#app")},6153:function(e,t,n){},"64a9":function(e,t,n){},"6ed5":function(e,t,n){"use strict";var r=n("184b"),o=n.n(r);o.a},"802e":function(e,t,n){},8077:function(e,t,n){},8109:function(e,t,n){"use strict";var r=n("f800"),o=n.n(r);o.a},8767:function(e,t,n){},"8c14":function(e,t,n){"use strict";var r=n("d2b0"),o=n.n(r);o.a},"94b1":function(e,t,n){"use strict";var r=n("6153"),o=n.n(r);o.a},a5ac:function(e,t,n){},aae7:function(e,t,n){"use strict";var r=n("802e"),o=n.n(r);o.a},afbb:function(e,t,n){},b566:function(e,t,n){},d2b0:function(e,t,n){},e32e:function(e,t,n){"use strict";var r=n("a5ac"),o=n.n(r);o.a},eabd:function(e,t,n){"use strict";var r=n("8077"),o=n.n(r);o.a},f800:function(e,t,n){}});
//# sourceMappingURL=app.cb0a0d1c.js.map