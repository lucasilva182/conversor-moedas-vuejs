(function(e){function t(t){for(var r,n,c=t[0],i=t[1],l=t[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);v&&v(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,n=1;n<o.length;n++){var c=o[n];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={app:0},a={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-30fdfb94":"0e695584"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o={"chunk-30fdfb94":1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise((function(t,o){for(var r="css/"+({}[e]||e)+"."+{"chunk-30fdfb94":"9445378d"}[e]+".css",a=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[e],v.parentNode.removeChild(v),o(s)},v.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(v)})).then((function(){n[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,o){r=a[e]=[t,o]}));t.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(v);var o=a[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,o[1](d)}a[e]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var v=u;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},4436:function(e,t,o){"use strict";o("96cc")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h1",{staticClass:"titulo-page"},[e._v("CONVERSOR DE MOEDAS EM VUE.JS")]),o("div",{staticClass:"linha"},[o("h1",[e._v("Conversor de Dólar $")]),o("div",{staticClass:"bloco"},[o("Conversor",{staticClass:"bloco-conversor",attrs:{simbolo:"R$","moeda-a":"USD","moeda-b":"BRL"}}),o("Conversor",{staticClass:"bloco-conversor",attrs:{simbolo:"$","moeda-a":"BRL","moeda-b":"USD"}})],1)]),o("div",{staticClass:"linha"},[o("h1",[e._v("Conversor de Euro €")]),o("div",{staticClass:"bloco"},[o("Conversor",{staticClass:"bloco-conversor",attrs:{simbolo:"R$","moeda-a":"EUR","moeda-b":"BRL"}}),o("Conversor",{staticClass:"bloco-conversor",attrs:{simbolo:"€","moeda-a":"BRL","moeda-b":"EUR"}})],1)]),o("div",{staticClass:"linha"},[o("h1",[e._v("Conversor de Libra Esterlina £")]),o("div",{staticClass:"bloco"},[o("Conversor",{staticClass:"bloco-conversor",attrs:{simbolo:"R$","moeda-a":"GBP","moeda-b":"BRL"}}),o("Conversor",{staticClass:"bloco-conversor",attrs:{simbolo:"£","moeda-a":"BRL","moeda-b":"GBP"}})],1)]),o("Footer")],1)},a=[],s=(o("d3b7"),o("3ca3"),o("ddb0"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"conversor"},[o("h2",[e._v(e._s(e.moedaA)+" para "+e._s(e.moedaB))]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.moedaA_value,expression:"moedaA_value"}],staticClass:"valor",attrs:{id:"valor",type:"text",maxlength:"9",placeholder:e.moedaA},domProps:{value:e.moedaA_value},on:{keyup:e.mask,input:function(t){t.target.composing||(e.moedaA_value=t.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"button",value:"Converter"},on:{click:e.converter}}),o("h2",[e._v(e._s(e.simbolo)+" "+e._s(e.moedaB_value))])])}),c=[],i=(o("b680"),o("ac1f"),o("5319"),{name:"Conversor",props:["moedaA","moedaB","simbolo"],data:function(){return{moedaA_value:"",moedaB_value:0}},methods:{converter:function(){var e=this,t=this.moedaA+"_"+this.moedaB,o="https://free.currconv.com/api/v7/convert?q="+t+"&compact=ultra&apiKey=3c14b1e552ce5f781131";fetch(o).then((function(e){return e.json()})).then((function(o){var r=o[t];e.moedaB_value=(r*parseFloat(e.moedaA_value.replace(",","."))).toFixed(2),isNaN(e.moedaB_value)&&(e.moedaB_value="0")}))},mask:function(){var e=document.getElementById("valor"),t=e.value;e.value=t,"NaN"==t&&(e.value="")}}}),l=i,u=(o("4436"),o("2877")),d=Object(u["a"])(l,s,c,!1,null,"d036a422",null),v=d.exports,f={name:"App",components:{Conversor:v,Footer:function(){return o.e("chunk-30fdfb94").then(o.bind(null,"fd2d"))}}},m=f,p=(o("034f"),Object(u["a"])(m,n,a,!1,null,null,null)),h=p.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,o){},"96cc":function(e,t,o){}});
//# sourceMappingURL=app.9ef6a43d.js.map