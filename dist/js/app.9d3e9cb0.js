(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function s(t){return c.p+"js/"+({home:"home",servico:"servico",sobre:"sobre"}[t]||t)+"."+{home:"fa48e6e0",servico:"abed4ab1",sobre:"9e71503b"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={home:1,servico:1,sobre:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({home:"home",servico:"servico",sobre:"sobre"}[t]||t)+"."+{home:"907ad84f",servico:"8f60b068",sobre:"85b53f96"}[t]+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"06af":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto card-shandows card-body card-intespace",staticStyle:{"min-height":"550px"}},[n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("div",{staticClass:"center-image out-card"},[n("v-img",{staticClass:"my-10",attrs:{contain:"",src:t.card.imagem}})],1)]),n("v-card-text",{staticClass:"card-title text-center"},[t._v(" "+t._s(t.card.titulo)+" ")]),n("v-card-text",{staticClass:"card-subtitle text-center"},[t._v(" "+t._s(t.card.subtitulo)+" ")]),n("v-card-subtitle",{staticClass:"card-text"},[t._t("texto")],2)],1)},o=[],r={props:{card:{type:Object,required:!0}}},i=r,s=(n("df7b"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"73b2e34e",null);e["default"]=c.exports},1456:function(t,e,n){t.exports=n.p+"img/logo_whatsapp.acf51bc4.svg"},"1b62":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"my-0 py-0"},t._l(t.footerfields,(function(e){return n("v-col",{key:e.titulo,staticClass:"onne-footer",attrs:{cols:"4"}},[n("span",[t._v(t._s(e.titulo))])])})),1)},o=[],r={data:function(){return{footerfields:[{titulo:"TechOnne"},{titulo:"Nenhum direito reservado"},{titulo:"2021"}]}}},i=r,s=(n("85ea"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"4511a06d",null);e["default"]=c.exports},"1bce":function(t,e,n){t.exports=n.p+"img/laptop.03b7bccf.jpg"},"1fe1":function(t,e,n){"use strict";n("e98d")},"22a1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-space-between mb-2",staticStyle:{width:"100%"}},[n("OnneLogo"),t.windowsWith>700?n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("OnneMenu",{attrs:{menus:t.menuDisponivel}})],1):n("div",[n("v-col",{attrs:{cols:"auto"}},[n("v-dialog",{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary"}},"v-btn",o,!1),a),[t._v("=")])]}},{key:"default",fn:function(e){return[n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[t._v("Selecione o menu")]),n("v-card-text",{staticStyle:{padding:"1rem"}},t._l(t.menuDisponivel,(function(a){return n("div",{key:a.nome_rota,staticStyle:{padding:"0",margin:"1rem"}},[n("router-link",{staticClass:"navigation-button",attrs:{to:{name:a.nome_rota}}},[n("v-icon",{staticStyle:{padding:"12px"},attrs:{color:"primary"}},[t._v(" "+t._s(a.icone)+" ")]),n("span",{on:{click:function(t){e.value=!1}}},[t._v(t._s(a.titulo))])],1)],1)})),0),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{attrs:{text:""},on:{click:function(t){e.value=!1}}},[t._v("Close")])],1)],1)]}}])})],1)],1)],1)},o=[],r=n("2b0e"),i=r["default"].extend({data:function(){return{menuDisponivel:[{titulo:"Início",nome_rota:"home",icone:"mdi-home"},{titulo:"Sobre",nome_rota:"sobre",icone:"mdi-information"},{titulo:"Serviços",nome_rota:"servico",icone:"mdi-tools"}]}},computed:{windowsWith:function(){return screen.width}}}),s=i,c=(n("8f75"),n("2877")),l=Object(c["a"])(s,a,o,!1,null,"990d97b2",null);e["default"]=l.exports},"37dc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex"}},[n("v-img",{staticStyle:{margin:"12px"},attrs:{src:t.logo,height:"44",width:"44"}}),n("span",{staticStyle:{"font-size":"20px","align-self":"center",color:"#fff"}},[t._v(" TechOnne ")])],1)},o=[],r=n("2b0e"),i=n("9b19"),s=n.n(i),c=r["default"].extend({data:function(){return{logo:s.a}}}),l=c,u=n("2877"),d=Object(u["a"])(l,a,o,!1,null,null,null);e["default"]=d.exports},"3b50":function(t,e,n){"use strict";n("70fa")},"404c":function(t,e,n){"use strict";n("4a8e")},"48a0":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",{staticClass:"bold"},[t._v(t._s(t.titulo))]),n("div",[t._v(t._s(t.texto))])])},o=[],r={props:["titulo","texto"]},i=r,s=(n("6d9e"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"222e90fd",null);e["default"]=c.exports},"4a8e":function(t,e,n){},"4d50":function(t,e,n){},"4e89":function(t,e,n){"use strict";n("bc7e")},"615d":function(t,e,n){},"6aa5":function(t,e,n){t.exports=n.p+"img/chart.8ea4a153.jpg"},"6d51":function(t,e,n){t.exports=n.p+"img/logo_telegram.894018a5.svg"},"6d9e":function(t,e,n){"use strict";n("4d50")},"70fa":function(t,e,n){},"770d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dark-background"},[n("router-view")],1)},o=[],r=(n("e931"),n("2877")),i={},s=Object(r["a"])(i,a,o,!1,null,"e8760ae4",null);e["default"]=s.exports},8034:function(t,e,n){},"811a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"hidesmall"},[n("v-card",{staticClass:"mx-auto card-shandows card-body",attrs:{height:"450"}},[n("v-row",{staticStyle:{margin:"auto",height:"100%"}},[n("v-col",{attrs:{cols:"4"}},[n("div",{staticStyle:{display:"flex","justify-content":"center",height:"100%"}},[n("div",{staticClass:"contato-image"},[n("v-img",{staticClass:"my-10",attrs:{contain:"",src:t.card.imagem}})],1)])]),n("v-col",{attrs:{cols:"8"}},[n("div",{staticStyle:{display:"block","justify-content":"center",height:"100%"}},[n("v-card-text",{staticClass:"card-config white-title",staticStyle:{"padding-left":"3em"}},[t._v(" "+t._s(t.card.titulo)+" ")]),n("v-card-subtitle",{staticClass:"texto-card",staticStyle:{color:"#e2f5fd",padding:"3em 1em","text-align":"center"}},[n("div",{staticStyle:{padding:"0.2em","font-size":"2em !important",color:"#e2f5fd"}},[t._v("Nossa equipe esta pronta para atender você:")]),n("onne-contato-telefone",{attrs:{telefone:"51 99311-1243"}}),n("onne-contato-telefone",{attrs:{telefone:"51 99724-2304"}}),n("onne-contato-email",{attrs:{email:"techonnetecnologia@gmail.com"}})],1)],1)])],1)],1)],1),n("span",{staticClass:"showsmall"},[n("v-card",{staticClass:"espaco-card mx-auto card-shandows card-body",staticStyle:{"min-height":"400px"}},[n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("div",{staticClass:"center-image out-card"},[n("v-img",{staticClass:"my-10",attrs:{contain:"",src:t.card.imagem}})],1)]),n("v-card-text",{staticClass:"text-center card-config white-title"},[t._v(" "+t._s(t.card.titulo)+" ")]),n("v-card-subtitle",{staticClass:"texto-card",staticStyle:{color:"#e2f5fd",padding:"1em 1em","text-align":"center"}},[n("div",{staticStyle:{padding:"0.2em","font-size":"2em !important",color:"#e2f5fd"}},[t._v("Nossa equipe esta pronta para atender você:")]),n("onne-contato-telefone",{attrs:{telefone:"51 99311-1243"}}),n("onne-contato-telefone",{attrs:{telefone:"51 99724-2304"}}),n("onne-contato-email",{attrs:{email:"techonnetecnologia@gmail.com"}})],1)],1)],1)])},o=[],r={props:{card:{type:Object,required:!0}}},i=r,s=(n("b16f"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"3e352be5",null);e["default"]=c.exports},"85ea":function(t,e,n){"use strict";n("8034")},"8f75":function(t,e,n){"use strict";n("c6a3")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.a776ed18.svg"},ac46:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{attrs:{justify:"space-around"}},[n("v-icon",{on:{click:function(e){t.model--}}},[t._v(" mdi-minus ")]),t._v(" "+t._s(t.model)+" "),n("v-icon",{on:{click:function(e){t.model++}}},[t._v(" mdi-plus ")])],1),n("v-carousel",{attrs:{height:"1000"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.cards,(function(e){return n("v-carousel-item",{key:e.titulo},[n("v-sheet",{attrs:{color:"#000000d1",height:"100%",tile:""}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("img",{staticStyle:{float:"right",display:"block",width:"30vw",height:"100%",margin:"12px"},attrs:{src:e.image}})]),n("v-col",{attrs:{cols:"6"}},[n("div",{staticClass:"card-text"},[t._v(t._s(e.text))])])],1)],1)],1)})),1)],1)},o=[],r=n("1bce"),i=n.n(r),s=n("6aa5"),c=n.n(s),l={data:function(){return{cards:[{image:i.a,titulo:"Suporte",text:"Somos uma empresa jovem e com ações inovadoras. Iniciamos nossa trajetória em 2021 com a missão de ajudar nossos clientes a ter sucesso, encontrando soluções inteligentes para os desafios de gestão, hardware e software. E melhor ainda: Com investimento justo e acessível. Somos uma empresa de tecnologia e as inovações começam desde o princípio: Não temos loja física. Afinal, queremos estar acessíves de qualquer lugar, por qualquer pessoa. Sendo totalmente online conseguimos oferecer o melhor investimento. O melhor atendimento. O melhor futuro para seu negócio.",direction:"left"},{image:c.a,titulo:"Insight",text:"Nossa missão é promover o acesso a serviços centralizados, que atendam às necessidades de gestão, hardware e software superando as expectativas dos clientes.",direction:"right"},{image:c.a,titulo:"Fly",text:"Nossa visão é ser referencia em desenvolvimento e suporte no estado do Rio Grande do Sul até 2026.",direction:"left"}]}}},u=l,d=(n("404c"),n("2877")),f=Object(d["a"])(u,a,o,!1,null,"3148f637",null);e["default"]=f.exports},adb6:function(t,e,n){var a={"./OnneAppFooter.vue":"1b62","./OnneAppHeader.vue":"22a1","./OnneAppView.vue":"770d","./OnneCardApresentacao.vue":"06af","./OnneCardHorizontal.vue":"811a","./OnneCarrousel.vue":"ac46","./OnneContatoEmail.vue":"bda0","./OnneContatoTelefone.vue":"b56f","./OnneHomeCardItem.vue":"48a0","./OnneLogo.vue":"37dc","./OnneMenu.vue":"b172"};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="adb6"},b16f:function(t,e,n){"use strict";n("615d")},b172:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex"}},t._l(t.menus,(function(e){return n("div",{key:e.nome_rota},[n("router-link",{staticClass:"nav-pagina",attrs:{to:{name:e.nome_rota}}},[n("v-icon",{staticStyle:{padding:"12px",color:"#dadada !important"}},[t._v(" "+t._s(e.icone)+" ")]),n("span",[t._v(t._s(e.titulo))])],1)],1)})),0)},o=[],r=n("2b0e"),i=n("9b19"),s=n.n(i),c=r["default"].extend({props:{menus:{type:Array,required:!0}},data:function(){return{logo:s.a}}}),l=c,u=(n("1fe1"),n("2877")),d=Object(u["a"])(l,a,o,!1,null,"585cc270",null);e["default"]=d.exports},b56f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"line-height":"1rem",display:"inline-block","margin-bottom":"1rem"}},[n("div",{staticClass:"item-line"},[n("v-icon",{staticStyle:{color:"#fff",padding:"6px"}},[t._v("mdi-phone")]),t._v(" "+t._s(t.telefone)+" ")],1),n("div",{staticClass:"item-line"},[t._v(" Chame no WhatsApp "),n("v-img",{staticClass:"icon-rotate icon-whatsapp",attrs:{src:t.logo_whatsapp},on:{click:function(e){return t.openWhatsapp()}}})],1),n("div",{staticClass:"item-line"},[t._v(" Chame no Telegram "),n("v-img",{staticClass:"icon-rotate icon-telegram",attrs:{src:t.logo_telegram},on:{click:function(e){return t.openTelegram()}}})],1)])},o=[],r=(n("ac1f"),n("5319"),n("6d51")),i=n.n(r),s=n("1456"),c=n.n(s),l={props:{telefone:{type:String,required:!0}},data:function(){return{logo_telegram:i.a,logo_whatsapp:c.a}},methods:{openWhatsapp:function(){var t="55"+this.telefone.replace(/\s/g,""),e="https://api.whatsapp.com/send?phone="+t;window.open(e)},openTelegram:function(){var t="https://t.me/RodrigoMichel";window.open(t)}}},u=l,d=(n("4e89"),n("2877")),f=Object(d["a"])(u,a,o,!1,null,"5a1d286b",null);e["default"]=f.exports},bc7e:function(t,e,n){},bda0:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"line-height":"1rem",display:"inline-block","margin-bottom":"1rem"}},[n("div",{staticClass:"item-line"},[n("v-icon",{staticStyle:{color:"#fff",padding:"6px"}},[t._v("mdi-email")]),t._v(" "+t._s(t.email)+" ")],1),n("div",{staticClass:"item-line"},[t._v(" Enviar email "),n("v-icon",{staticClass:"icon-rotate",staticStyle:{color:"#fff"},on:{click:function(e){return t.openMail()}}},[t._v("mdi-email")])],1),n("div",{staticClass:"item-line"},[t._v(" ")])])},o=[],r={props:{email:{type:String,required:!0}},methods:{openMail:function(){var t=this.email,e="Contato",n="mailto:"+t+"?subject="+e;window.open(n)}}},i=r,s=(n("3b50"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"7711c57e",null);e["default"]=c.exports},c6a3:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319"),n("1276");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-app-bar",{staticClass:"py-1 dark",attrs:{fixed:""}},[n("OnneAppHeader")],1),n("v-main",[n("OnneAppView")],1),n("v-footer",{staticClass:"dark",attrs:{app:"",absolute:""}},[n("OnneAppFooter")],1)],1)},r=[],i=a["default"].extend({name:"App",data:function(){return{}}}),s=i,c=n("2877"),l=Object(c["a"])(s,o,r,!1,null,null,null),u=l.exports,d=(n("3ca3"),n("8c4f"));a["default"].use(d["a"]);var f=[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/sobre",name:"sobre",component:function(){return n.e("sobre").then(n.bind(null,"d09e"))}},{path:"/servico",name:"servico",component:function(){return n.e("servico").then(n.bind(null,"7959"))}}],p=new d["a"]({mode:"history",base:"/",routes:f}),m=p,v=n("2f62");a["default"].use(v["a"]);var h=new v["a"].Store({state:{},mutations:{},actions:{},modules:{}}),g=n("ce5b"),b=n.n(g);n("bf40");a["default"].use(b.a);var y=new b.a({theme:{themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",dark:"#141417"}}}}),_=(n("d5e8"),n("5363"),n("8103")),x=n.n(_),w=n("bba4"),C=n.n(w),O=n("8cb8");a["default"].config.productionTip=!1;var S=n("adb6");S.keys().forEach((function(t){var e=S(t),n=x()(C()(t.split("/").pop().replace(/\.\w+$/,"")));a["default"].component(n,e.default||e)})),a["default"].use(O["default"]),new a["default"]({router:m,store:h,vuetify:y,render:function(t){return t(u)}}).$mount("#app")},df7b:function(t,e,n){"use strict";n("e7be")},e7be:function(t,e,n){},e931:function(t,e,n){"use strict";n("fc20")},e98d:function(t,e,n){},fc20:function(t,e,n){}});
//# sourceMappingURL=app.9d3e9cb0.js.map