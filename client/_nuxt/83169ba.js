(window.webpackJsonp=window.webpackJsonp||[]).push([[28,6,8,14],{323:function(t,e,r){var content=r(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("3c8bda1b",content,!0,{sourceMap:!1})},328:function(t,e,r){var content=r(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("bc9dd526",content,!0,{sourceMap:!1})},329:function(t,e,r){var content=r(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("6b047374",content,!0,{sourceMap:!1})},330:function(t,e,r){"use strict";r(323)},331:function(t,e,r){var o=r(45)(!1);o.push([t.i,'span[data-v-31fbcbe6]{font-family:"Source Sans Pro";font-size:16px;font-weight:400;color:rgb(var(--color_primary))}.btn-primary[data-v-31fbcbe6]{background-color:rgb(var(--color_primary));border:0}.card[data-v-31fbcbe6]{background-color:#eeeff6;border-radius:1em;box-shadow:inset 0 0 0 .1em var(--middle_lavender);flex-direction:column;padding:20px;height:360px}.card[data-v-31fbcbe6],.card-header[data-v-31fbcbe6]{display:flex;justify-content:space-between}.card-header[data-v-31fbcbe6]{flex-direction:row-reverse;background:none;padding:0;border:0}.card-specialty[data-v-31fbcbe6]{color:rgb(var(--color_primary));font-weight:700;font-size:24px}.card-university-info[data-v-31fbcbe6]{flex-direction:column}.card-detail-list[data-v-31fbcbe6],.card-university-info[data-v-31fbcbe6]{display:flex;justify-content:space-between}.card-detail-list[data-v-31fbcbe6]{border-top:1px solid #dbdeec;color:rgb(var(--color_primary));padding:5px}li[data-v-31fbcbe6]{display:flex;flex-direction:column}.logo[data-v-31fbcbe6],.logo img[data-v-31fbcbe6]{border-radius:50%}.logo img[data-v-31fbcbe6]{-o-object-fit:cover;object-fit:cover}',""]),t.exports=o},340:function(t,e,r){"use strict";r.r(e);r(35),r(21),r(38),r(14),r(49),r(34),r(50);var o=r(15),n=(r(217),r(65)),l=r(79);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:["data"],data:function(){return{imageUrl:n.k}},computed:c(c({},Object(l.c)("cart",["cartList"])),{},{isAddedToCart:function(){var t=this;return this.cartList.findIndex((function(e){return e._id===t.data._id}))>-1}}),methods:{addToCart:function(){var t=c(c({},this.data),{},{qty:1});this.$store.dispatch("cart/addToCart",{product:t})}}},v=(r(330),r(13)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data?r("article",{staticClass:"card"},[r("div",{staticClass:"card-top"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"logo"},[r("img",{attrs:{height:"90",width:"90",src:""+t.imageUrl+t.data.images[1].url,alt:""}})]),t._v(" "),r("div",{staticClass:"card-university-info"},[r("div",{staticClass:"d-flex flex-column"},[r("span",{staticClass:"university-description"},[t._v(t._s(t.data.description))]),t._v(" "),r("span",{staticClass:"university-location d-flex align-items-center"},[r("img",{attrs:{width:"20",height:"20",src:"https://gt.education/img/svg/home.svg",alt:"location"}}),t._v(" "+t._s(t.data.location))])]),t._v(" "),r("span",{staticClass:"university-degree"},[t._v(t._s(t.data.degree)+"/"+t._s(t.data.fieldOfStudy))])])]),t._v(" "),r("div",{staticClass:"card-specialty"},[t._v("\n        "+t._s(t.data.programs)+"\n    ")])]),t._v(" "),r("div",{staticClass:"card-bottom"},[r("ul",{staticClass:"card-detail-list"},[r("li",[t._v("\n        Tuition fee\n        "),r("span",[t._v(t._s(t.data.price))])]),t._v(" "),r("li",[t._v("\n        Duration\n        "),r("span",[t._v(t._s((t.data.duration/12).toFixed())+" Years")])]),t._v(" "),r("li",[t._v("\n        Language\n        "),r("span",[t._v(t._s(t.data.language))])]),t._v(" "),r("li",[t._v("\n        Foundation course\n        "),r("span",[t._v(t._s(t.data.foundationCoursePrice))])])]),t._v(" "),t.isAddedToCart?r("nuxt-link",{attrs:{to:"/cart"}},[r("div",{staticClass:"btn btn-primary"},[t._v("\n        Go To Cart\n      ")])]):r("div",{staticClass:"btn btn-primary",on:{click:t.addToCart}},[t._v("\n      Add to Cart\n    ")])],1)]):t._e()}),[],!1,null,"31fbcbe6",null);e.default=component.exports},344:function(t,e,r){"use strict";r(328)},345:function(t,e,r){var o=r(45)(!1);o.push([t.i,'span[data-v-0fe3f9d1]{font-family:"Source Sans Pro";font-size:16px;font-weight:400;color:rgb(var(--color_primary))}.btn-primary[data-v-0fe3f9d1]{background-color:rgb(var(--color_primary));border:0}.card[data-v-0fe3f9d1]{background-color:#eeeff6;border-radius:1em;box-shadow:inset 0 0 0 .1em var(--middle_lavender);flex-direction:column;padding:20px;height:360px}.card[data-v-0fe3f9d1],.card-header[data-v-0fe3f9d1]{display:flex;justify-content:space-between}.card-header[data-v-0fe3f9d1]{flex-direction:row-reverse;background:none;padding:0;border:0}.card-specialty[data-v-0fe3f9d1]{color:rgb(var(--color_primary));font-weight:700;font-size:24px}.card-university-info[data-v-0fe3f9d1]{flex-direction:column}.card-detail-list[data-v-0fe3f9d1],.card-university-info[data-v-0fe3f9d1]{display:flex;justify-content:space-between}.card-detail-list[data-v-0fe3f9d1]{border-top:1px solid #dbdeec;color:rgb(var(--color_primary));padding:5px}li[data-v-0fe3f9d1]{display:flex;flex-direction:column}.logo[data-v-0fe3f9d1],.logo img[data-v-0fe3f9d1]{border-radius:50%}.logo img[data-v-0fe3f9d1]{-o-object-fit:cover;object-fit:cover}',""]),t.exports=o},346:function(t,e,r){"use strict";r(329)},347:function(t,e,r){var o=r(45)(!1);o.push([t.i,".lds-facebook[data-v-63299658]{display:inline-block;position:relative;width:80px;height:80px}.lds-facebook div[data-v-63299658]{display:inline-block;position:absolute;left:8px;width:16px;background:rgb(var(--color_primary));-webkit-animation:lds-facebook-data-v-63299658 1.2s cubic-bezier(0,.5,.5,1) infinite;animation:lds-facebook-data-v-63299658 1.2s cubic-bezier(0,.5,.5,1) infinite}.lds-facebook div[data-v-63299658]:first-child{left:8px;-webkit-animation-delay:-.24s;animation-delay:-.24s}.lds-facebook div[data-v-63299658]:nth-child(2){left:32px;-webkit-animation-delay:-.12s;animation-delay:-.12s}.lds-facebook div[data-v-63299658]:nth-child(3){left:56px;-webkit-animation-delay:0;animation-delay:0}@-webkit-keyframes lds-facebook-data-v-63299658{0%{top:8px;height:64px}50%,to{top:24px;height:32px}}@keyframes lds-facebook-data-v-63299658{0%{top:8px;height:64px}50%,to{top:24px;height:32px}}",""]),t.exports=o},359:function(t,e,r){"use strict";r.r(e);r(35),r(21),r(38),r(14),r(49),r(34),r(50);var o=r(15),n=(r(217),r(79)),l=r(65);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{data:{type:Array,required:!0}},data:function(){return{imageUrl:l.k}},computed:c(c({},Object(n.c)("cart",["cartList"])),{},{isAddedToCart:function(){var t=this;return this.cartList.findIndex((function(e){return e._id===t.data._id}))>-1}}),methods:{addToCart:function(){var t=c(c({},this.data),{},{qty:1});this.$store.dispatch("cart/addToCart",{product:t})}}},v=(r(344),r(13)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.data?r("article",{staticClass:"card"},[r("div",{staticClass:"card-top"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"logo"},[r("img",{attrs:{height:"90",width:"90",src:""+t.imageUrl+t.data.images[1].url,alt:""}})]),t._v(" "),r("div",{staticClass:"card-university-info"},[r("div",{staticClass:"d-flex flex-column"},[r("span",{staticClass:"university-description"},[t._v(t._s(t.data.universities))]),t._v(" "),r("span",{staticClass:"university-location d-flex align-items-center"},[r("img",{attrs:{width:"20",height:"20",src:"https://gt.education/img/svg/home.svg",alt:"location"}}),t._v(" "+t._s(t.data.location))])]),t._v(" "),r("span",{staticClass:"university-degree"},[t._v("Foundation Course/"+t._s(t.data.fieldOfCourse))])])]),t._v(" "),r("div",{staticClass:"card-specialty"},[t._v("\n        "+t._s(t.data.programs)+"\n      ")])]),t._v(" "),r("div",{staticClass:"card-bottom"},[r("ul",{staticClass:"card-detail-list"},[r("li",[t._v("\n          Tuition fee\n          "),r("span",[t._v(t._s(t.data.price))])]),t._v(" "),r("li",[t._v("\n          Application deadline\n          "),r("span",[t._v(t._s(t.data.deadline))])]),t._v(" "),r("li",[t._v("\n          Start Date\n          "),r("span",[t._v(t._s(t.data.startDate))])])]),t._v(" "),t.isAddedToCart?r("nuxt-link",{attrs:{to:"/cart"}},[r("div",{staticClass:"btn btn-primary"},[t._v("\n          Go To Cart\n        ")])]):r("div",{staticClass:"btn btn-primary",on:{click:t.addToCart}},[t._v("\n        Add to Cart\n      ")])],1)]):t._e()])}),[],!1,null,"0fe3f9d1",null);e.default=component.exports},364:function(t,e,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("fc221aac",content,!0,{sourceMap:!1})},386:function(t,e,r){"use strict";r.r(e);var o={name:"Pure"},n=(r(346),r(13)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lds-facebook"},[e("div"),e("div"),e("div")])}],!1,null,"63299658",null);e.default=component.exports},398:function(t,e,r){"use strict";r(364)},399:function(t,e,r){var o=r(45)(!1);o.push([t.i,'.pickedBtn[data-v-83b8c95e]{border:1px solid rgb(var(--color_primary))}label[data-v-83b8c95e]{font-family:"Source Sans Pro",serif;font-weight:400;color:rgb(var(--color_primary))}.center[data-v-83b8c95e]{display:flex;justify-content:center}.loader[data-v-83b8c95e]{width:200px;text-align:center}.t23[data-v-83b8c95e]{border:1px solid rgb(var(--color_primary))}.filter-card[data-v-83b8c95e]{position:-webkit-sticky;position:sticky}.were-found[data-v-83b8c95e]{font-weight:500;color:rgb(var(--color_primary));display:flex;align-items:center;padding-left:20px}.grid-temp[data-v-83b8c95e]{display:grid;grid-template:"sidebar catalog"/23% 76%;grid-gap:10px}@media screen and (max-width:1024px){.grid-temp[data-v-83b8c95e]{grid-template:"sidebar" "catalog"/1fr}}.first-filter[data-v-83b8c95e]{display:flex;flex-direction:column;flex-wrap:wrap;width:170px}.catalog-sort[data-v-83b8c95e]{display:flex;flex-direction:row}.wrapper[data-v-83b8c95e]{margin-top:100px}',""]),t.exports=o},432:function(t,e,r){"use strict";r.r(e);var o=r(7),n=(r(216),r(38),r(14),r(48),r(56),r(47),r(359)),l=r(65),d={components:{CoursesCard:n.default},layout:"light",data:function(){return{products:[],courses:[],isLoading:null,sortBy:"newest",pickedValue:"degree",universitiesValue:"",fieldCoursesValue:"",degreeVal:"",fieldStudyValue:"",programsValue:"",degree:l.h,fieldOfStudy:l.j,fieldOfCourses:l.i,universities:l.o,programsData:l.n}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,l,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.$store.dispatch("requests/getAll","product");case 4:return t.products=e.sent,e.next=7,t.$store.dispatch("requests/getAll","courses");case 7:t.courses=e.sent,t.isLoading=!1,r=t.$route.query.field,o=t.$route.query.univ,n=t.$route.query.degree,l=t.$route.query.type,d=t.$route.query.fieldStudy,c=t.$route.query.program,"degree"===l?(t.degreeVal=n,t.fieldStudyValue=d,t.programsValue=c):"courses"===l&&(t.pickedValue="courses",t.universitiesValue=o,t.fieldCoursesValue=r),e.next=20;break;case 18:e.prev=18,e.t0=e.catch(0);case 20:case"end":return e.stop()}}),e,null,[[0,18]])})))()},computed:{sortedData:function(){var t=this;return this.products.filter((function(e){var r=t.degreeVal;return r?e.degree.includes(r):e})).filter((function(e){var r=t.fieldStudyValue;return r?e.fieldOfStudy.includes(r):e})).filter((function(e){var r=t.programsValue;return r?e.programs.includes(r):e})).sort((function(a,b){var e=t.sortBy;return"newest"===e?a.createdAt-b.createdAt?-1:1:"oldest"===e?a.createdAt-b.createdAt?1:-1:"cost_highest"===e?parseFloat(a.price)-parseFloat(b.price)?-1:1:parseFloat(a.price)-parseFloat(b.price)?1:-1}))},sortedCoursesData:function(){var t=this;return this.courses.filter((function(e){var r=t.universitiesValue;return r?e.universities.includes(r):e})).filter((function(e){var r=t.fieldCoursesValue;return r?e.fieldOfCourse.includes(r):e})).sort((function(a,b){var e=t.sortBy;return"newest"===e?a.createdAt-b.createdAt?-1:1:"oldest"===e?a.createdAt-b.createdAt?1:-1:"cost_highest"===e?parseFloat(a.price)-parseFloat(b.price)?-1:1:parseFloat(a.price)-parseFloat(b.price)?1:-1}))},catalog:function(){return this.$route.query.type}},methods:{setPickedValue:function(text){this.pickedValue=text}}},c=(r(398),r(13)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper grid-temp"},[r("div",{staticClass:"toggle-buttons"},[r("div",{staticClass:"filter-card"},[r("div",{staticClass:"card t23 p-3"},[r("div",{staticClass:"card-toggle"},[r("button",{staticClass:"btn",class:{pickedBtn:"degree"===t.pickedValue},on:{click:function(e){return t.setPickedValue("degree")}}},[t._v("DEGREE PROGRAMS\n          ")]),t._v(" "),r("button",{staticClass:"btn",class:{pickedBtn:"courses"===t.pickedValue},on:{click:function(e){return t.setPickedValue("courses")}}},[t._v("FOUNDATION COURSES\n          ")])]),t._v(" "),r("div",{staticClass:"filters"},["degree"===t.pickedValue?r("div",{staticClass:"firstFilters"},[r("div",{staticClass:"degree"},[r("label",{attrs:{for:"degree"}},[t._v("Degree")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.degreeVal,expression:"degreeVal"}],staticClass:"form-control",attrs:{id:"degree"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.degreeVal=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("All Degrees")]),t._v(" "),t._l(t.degree,(function(e,i){return r("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),t._v(" "),r("div",{staticClass:"fieldOfStudy"},[r("label",{attrs:{for:"fieldOfStudy"}},[t._v("Field Of Study")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.fieldStudyValue,expression:"fieldStudyValue"}],staticClass:"form-control",attrs:{id:"fieldOfStudy"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.fieldStudyValue=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("All Fields of study")]),t._v(" "),t._l(t.fieldOfStudy,(function(e,i){return r("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),t._v(" "),r("div",{staticClass:"fieldOfStudy"},[r("label",{attrs:{for:"Programs"}},[t._v("Programs")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.programsValue,expression:"programsValue"}],staticClass:"form-control",attrs:{id:"Programs"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.programsValue=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("All Fields of study")]),t._v(" "),t._l(t.programsData,(function(e,i){return r("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])}))],2)])]):r("div",{staticClass:"secondFilters"},[r("div",{staticClass:"degree"},[r("label",{attrs:{for:"fieldOfStudy2"}},[t._v("Field Of Study")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.fieldCoursesValue,expression:"fieldCoursesValue"}],staticClass:"form-control",attrs:{id:"fieldOfStudy2"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.fieldCoursesValue=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("All Fields of study")]),t._v(" "),t._l(t.fieldOfCourses,(function(e,i){return r("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),t._v(" "),r("div",{staticClass:"fieldOfStudy"},[r("label",{attrs:{for:"Universities"}},[t._v("Universities")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.universitiesValue,expression:"universitiesValue"}],staticClass:"form-control",attrs:{id:"Universities"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.universitiesValue=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("All Universities")]),t._v(" "),t._l(t.universities,(function(e,i){return r("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])}))],2)])])])])])]),t._v(" "),r("div",{staticClass:"catalog"},[t.isLoading?r("div",{staticClass:"center"},[r("LoaderPure",{staticClass:"loader"})],1):r("div",{staticClass:"d-flex flex-wrap flex-column"},[r("div",{staticClass:"catalog-sort my-2"},[r("div",{staticClass:"first-filter"},[r("label",{attrs:{for:"sortBy"}},[t._v("Sort By")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.sortBy,expression:"sortBy"}],staticClass:"form-control",attrs:{id:"sortBy"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.sortBy=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"newest"}},[t._v("Newest")]),t._v(" "),r("option",{attrs:{value:"oldest"}},[t._v("Oldest")]),t._v(" "),r("option",{attrs:{value:"cost_lowest"}},[t._v("Cost: Lowest first")]),t._v(" "),r("option",{attrs:{value:"cost_highest"}},[t._v("Cost: Highest first")])])]),t._v(" "),"courses"===t.pickedValue?r("span",{staticClass:"were-found"},[t._v(t._s(t.sortedCoursesData.length)+" courses were found in "+t._s(t.courses.length)+" courses")]):r("span",{staticClass:"were-found"},[t._v(t._s(t.products.length)+" programs were found in "+t._s(t.sortedData.length)+" programs")])]),t._v(" "),r("div",{staticClass:"d-flex flex-wrap flex-row"},[t._l(t.sortedData,(function(e,i){return"degree"===t.pickedValue?r("div",{key:i,staticClass:"w-33"},[r("Card",{staticClass:"mr-3 my-2",attrs:{data:e}})],1):t._e()})),t._v(" "),t._l(t.sortedCoursesData,(function(e){return"courses"===t.pickedValue?r("div",{key:e.name,staticClass:"w-33"},[r("CoursesCard",{staticClass:"mr-3 my-2",attrs:{data:e}})],1):t._e()}))],2)])])])}),[],!1,null,"83b8c95e",null);e.default=component.exports;installComponents(component,{LoaderPure:r(386).default,Card:r(340).default,CoursesCard:r(359).default})}}]);