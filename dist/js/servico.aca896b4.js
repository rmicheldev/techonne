(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["servico"],{2785:function(e,t,o){},"5aed":function(e,t,o){"use strict";o("2785")},"6aa5":function(e,t,o){e.exports=o.p+"img/chart.8ea4a153.jpg"},7959:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"fixed-image"}),o("div",[o("v-container",[o("div",{staticStyle:{"margin-top":"10vh"}},[o("v-row",{staticStyle:{"align-items":"center"}},[o("v-col",{attrs:{cols:"12"}},[o("v-card",{staticClass:"mx-auto glass",staticStyle:{padding:"12px",color:"#ffffff"},attrs:{loading:e.loading}},[o("div",{staticClass:"py-2"},[e._v("Selecione o serviço:")]),o("v-select",{attrs:{items:e.servicos,label:"Solo field",solo:""},model:{value:e.servico_selecionado,callback:function(t){e.servico_selecionado=t},expression:"servico_selecionado"}}),"Support"==e.servico_selecionado?o("div",[o("div",[e._v(" Temos um serviço para ajudar a sua vida, preencha os campos abaixo: ")]),o("v-row",{staticStyle:{padding:"12px 42px"}},[o("v-col",{attrs:{cols:"12"}},[o("div",{staticStyle:{"font-size":"14px","font-weight":"bold"}},[e._v(" Escolha o serviço: ")]),o("v-checkbox",{attrs:{color:"#ffffff",light:!0,"hide-details":""},scopedSlots:e._u([{key:"label",fn:function(){return[o("span",{staticStyle:{color:"#ffffff"}},[e._v("Formatação")])]},proxy:!0}],null,!1,581660468),model:{value:e.suporte.formatacao,callback:function(t){e.$set(e.suporte,"formatacao",t)},expression:"suporte.formatacao"}}),o("v-checkbox",{attrs:{color:"#ffffff",light:!0,"hide-details":""},scopedSlots:e._u([{key:"label",fn:function(){return[o("span",{staticStyle:{color:"#ffffff"}},[e._v("Instalção de software")])]},proxy:!0}],null,!1,3776541173),model:{value:e.suporte.instalacao,callback:function(t){e.$set(e.suporte,"instalacao",t)},expression:"suporte.instalacao"}})],1)],1)],1):"Insights"==e.servico_selecionado?o("div",[e._v("Grafico")]):"Fly"==e.servico_selecionado?o("div",[e._v(" Caso você tenha interesse em um projeto da "),o("span",{staticStyle:{"font-weight":"800"}},[e._v(" OnneTech "+e._s(e.servico_selecionado)+" ")]),e._v(" Por favor entre em contato com: "),o("v-row",{staticStyle:{"margin-top":"22px"}},e._l(e.videos_yt,(function(e){return o("v-col",{key:e,staticStyle:{height:"25vh"},attrs:{cols:"4"}},[o("iframe",{attrs:{width:"100%",height:"100%",src:e,title:"OnneTech no YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}})])})),1)],1):o("div",[e._v("Por favor entre em contato com.")])],1)],1)],1)],1)])],1)])},s=[],i=o("2b0e"),n=o("6aa5"),c=o.n(n),r=i["default"].extend({data:function(){return{loading:!1,selection:1,servicos:["Support","Insights","Fly","outros"],servico_selecionado:"Support",videos_yt:["https://www.youtube.com/embed/ONs3KKeNU8E","https://www.youtube.com/embed/1PWFnf_VOn0","https://www.youtube.com/embed/QEyT7CZLus0"],suporte:{formatacao:!1,instalacao:!1},card:{image:c.a,titulo:"Bussines ",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",direction:"left"}}},methods:{reserve:function(){var e=this;this.loading=!0,setTimeout((function(){return e.loading=!1}),2e3)}}}),l=r,d=(o("5aed"),o("2877")),u=Object(d["a"])(l,a,s,!1,null,"09b3f540",null);t["default"]=u.exports}}]);
//# sourceMappingURL=servico.aca896b4.js.map