(window.webpackJsonp=window.webpackJsonp||[]).push([[26,4],{322:function(t,e,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("09bc21e5",content,!0,{sourceMap:!1})},326:function(t,e,r){"use strict";r(322)},327:function(t,e,r){var o=r(45)(!1);o.push([t.i,'.card[data-v-ce71baf8]{height:400px;border-radius:var(--standard_border_radius);padding:0;border:0;margin:40px 80px 40px 0}.card[data-v-ce71baf8],.card[data-v-ce71baf8]:hover{transition:all .1s linear}.card[data-v-ce71baf8]:hover{transform:translateY(-30px);box-shadow:0 0 30px rgba(0,0,0,.5)}.card-image[data-v-ce71baf8]{border-radius:var(--standard_border_radius) var(--standard_border_radius) 0 0;height:55%;-o-object-fit:cover;object-fit:cover;border:0;width:100%}.card-body[data-v-ce71baf8]{padding:10px}.title[data-v-ce71baf8]{font-weight:700;font-family:Montserrat,serif;font-size:32px;color:#fff}.desc[data-v-ce71baf8]{width:70%;font-size:18px;font-family:"Source Sans Pro";font-weight:400;color:#fff}.card-badge__icon-svg[data-v-ce71baf8]{fill:var(--white_hex)}.svg[data-v-ce71baf8]{width:60px;height:60px;background:rgba(var(--white),.7);border-radius:50%}@media screen and (max-width:768px){.card[data-v-ce71baf8]{height:auto;margin:10px}}',""]),t.exports=o},339:function(t,e,r){"use strict";r.r(e);var o=r(65),d={props:["data"],data:function(){return{imageUrl:o.k}}},n=(r(326),r(13)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"card",style:{backgroundColor:t.data.color}},[r("nuxt-link",{attrs:{to:"/admission/"+t.data.name+"?id="+t.data._id}},[r("img",{staticClass:"card-image",attrs:{src:t.imageUrl+t.data.images[0].url,alt:t.data.name}}),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"svg",domProps:{innerHTML:t._s(t.data.iconUrl)}}),t._v(" "),r("h3",{staticClass:"title"},[t._v(t._s(t.data.name))]),t._v(" "),r("h4",{staticClass:"desc"},[t._v(t._s(t.data.description))])])])],1)}),[],!1,null,"ce71baf8",null);e.default=component.exports},361:function(t,e,r){var content=r(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("dffb6b02",content,!0,{sourceMap:!1})},392:function(t,e,r){"use strict";r(361)},393:function(t,e,r){var o=r(45)(!1);o.push([t.i,".wrapper[data-v-4a7cdbeb]{margin-top:100px}.title-1[data-v-4a7cdbeb]{font-family:Montserrat;font-weight:700}.title-1[data-v-4a7cdbeb],h2[data-v-4a7cdbeb]{color:rgb(var(--color_primary))}h2[data-v-4a7cdbeb]{width:35%;font-size:18px}",""]),t.exports=o},429:function(t,e,r){"use strict";r.r(e);var o=r(7),d=(r(47),{layout:"light",data:function(){return{admissionData:[]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("requests/getAll","admission");case 2:t.admissionData=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),n=(r(392),r(13)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("h1",{staticClass:"title-1"},[t._v("Admission")]),t._v(" "),r("h2",[t._v("The most important things about admission and coming to Russia. How to apply? How to get a student visa? How to get to a university? And other crucial issues about starting study in Russia.")]),t._v(" "),r("div",{staticClass:"d-flex flex-wrap"},t._l(t.admissionData,(function(t,i){return r("div",{key:i,staticClass:"w-33"},[r("AdmissionCard",{attrs:{data:t}})],1)})),0)])}),[],!1,null,"4a7cdbeb",null);e.default=component.exports;installComponents(component,{AdmissionCard:r(339).default})}}]);