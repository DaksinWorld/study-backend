(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{328:function(t,e,r){var content=r(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("bc9dd526",content,!0,{sourceMap:!1})},344:function(t,e,r){"use strict";r(328)},345:function(t,e,r){var d=r(45)(!1);d.push([t.i,'span[data-v-0fe3f9d1]{font-family:"Source Sans Pro";font-size:16px;font-weight:400;color:rgb(var(--color_primary))}.btn-primary[data-v-0fe3f9d1]{background-color:rgb(var(--color_primary));border:0}.card[data-v-0fe3f9d1]{background-color:#eeeff6;border-radius:1em;box-shadow:inset 0 0 0 .1em var(--middle_lavender);flex-direction:column;padding:20px;height:360px}.card[data-v-0fe3f9d1],.card-header[data-v-0fe3f9d1]{display:flex;justify-content:space-between}.card-header[data-v-0fe3f9d1]{flex-direction:row-reverse;background:none;padding:0;border:0}.card-specialty[data-v-0fe3f9d1]{color:rgb(var(--color_primary));font-weight:700;font-size:24px}.card-university-info[data-v-0fe3f9d1]{flex-direction:column}.card-detail-list[data-v-0fe3f9d1],.card-university-info[data-v-0fe3f9d1]{display:flex;justify-content:space-between}.card-detail-list[data-v-0fe3f9d1]{border-top:1px solid #dbdeec;color:rgb(var(--color_primary));padding:5px}li[data-v-0fe3f9d1]{display:flex;flex-direction:column}.logo[data-v-0fe3f9d1],.logo img[data-v-0fe3f9d1]{border-radius:50%}.logo img[data-v-0fe3f9d1]{-o-object-fit:cover;object-fit:cover}',""]),t.exports=d},359:function(t,e,r){"use strict";r.r(e);r(35),r(21),r(38),r(14),r(49),r(34),r(50);var d=r(15),o=(r(217),r(79)),n=r(65);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{data:{type:Array,required:!0}},data:function(){return{imageUrl:n.k}},computed:l(l({},Object(o.c)("cart",["cartList"])),{},{isAddedToCart:function(){var t=this;return this.cartList.findIndex((function(e){return e._id===t.data._id}))>-1}}),methods:{addToCart:function(){var t=l(l({},this.data),{},{qty:1});this.$store.dispatch("cart/addToCart",{product:t})}}},v=(r(344),r(13)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.data?r("article",{staticClass:"card"},[r("div",{staticClass:"card-top"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"logo"},[r("img",{attrs:{height:"90",width:"90",src:""+t.imageUrl+t.data.images[1].url,alt:""}})]),t._v(" "),r("div",{staticClass:"card-university-info"},[r("div",{staticClass:"d-flex flex-column"},[r("span",{staticClass:"university-description"},[t._v(t._s(t.data.universities))]),t._v(" "),r("span",{staticClass:"university-location d-flex align-items-center"},[r("img",{attrs:{width:"20",height:"20",src:"https://gt.education/img/svg/home.svg",alt:"location"}}),t._v(" "+t._s(t.data.location))])]),t._v(" "),r("span",{staticClass:"university-degree"},[t._v("Foundation Course/"+t._s(t.data.fieldOfCourse))])])]),t._v(" "),r("div",{staticClass:"card-specialty"},[t._v("\n        "+t._s(t.data.programs)+"\n      ")])]),t._v(" "),r("div",{staticClass:"card-bottom"},[r("ul",{staticClass:"card-detail-list"},[r("li",[t._v("\n          Tuition fee\n          "),r("span",[t._v(t._s(t.data.price))])]),t._v(" "),r("li",[t._v("\n          Application deadline\n          "),r("span",[t._v(t._s(t.data.deadline))])]),t._v(" "),r("li",[t._v("\n          Start Date\n          "),r("span",[t._v(t._s(t.data.startDate))])])]),t._v(" "),t.isAddedToCart?r("nuxt-link",{attrs:{to:"/cart"}},[r("div",{staticClass:"btn btn-primary"},[t._v("\n          Go To Cart\n        ")])]):r("div",{staticClass:"btn btn-primary",on:{click:t.addToCart}},[t._v("\n        Add to Cart\n      ")])],1)]):t._e()])}),[],!1,null,"0fe3f9d1",null);e.default=component.exports}}]);