(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{367:function(t,e,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("94afbbee",content,!0,{sourceMap:!1})},404:function(t,e,n){"use strict";n(367)},405:function(t,e,n){var o=n(45)(!1);o.push([t.i,".custom-file-upload[data-v-757fc3ce]{border:1px solid #ccc;display:inline-block;padding:6px 12px;cursor:pointer;width:100%}input[type=file][data-v-757fc3ce]{display:none}",""]),t.exports=o},437:function(t,e,n){"use strict";n.r(e);var o=n(7),l=(n(47),n(24),n(21),n(39),n(65)),r={layout:"admin",data:function(){return{data:[],description:"",name:"",location:"",totalStudents:"",intStudents:"",founded:"",file:"",faculty:"",universityData:l.o,cities:l.g}},methods:{SubmitHandler:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.prev=1,o=new FormData,""!==e.file&&o.append("file",e.file),o.append("name",e.name),o.append("location",e.location),o.append("description",e.description),o.append("founded",e.founded),o.append("intStudents",e.intStudents),o.append("faculty",e.faculty),o.append("totalStudents",e.totalStudents),n.next=13,e.$axios.$post("/api/univ",o,{headers:{Authorization:"Bearer "+localStorage.getItem("jwt"),"Content-Type":"multipart/form-data"}});case 13:e.$store.dispatch("setMessage",{value:"Univ created",type:"primary"}),n.next=20;break;case 16:return n.prev=16,n.t0=n.catch(1),n.next=20,e.$store.dispatch("setMessage",{value:n.t0,type:"danger"});case 20:case"end":return n.stop()}}),n,null,[[1,16]])})))()},getFile:function(){this.file=this.$refs.file.files[0]}}},c=(n(404),n(13)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.SubmitHandler.apply(null,arguments)}}},[n("label",[t._v("Name")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.name=e.target.multiple?n:n[0]}}},t._l(t.universityData,(function(e,i){return n("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])})),0),t._v(" "),n("label",[t._v("Location")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.location=e.target.multiple?n:n[0]}}},t._l(t.cities,(function(e,i){return n("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])})),0),t._v(" "),n("label",[t._v("Description")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),n("label",[t._v("Int'l Students")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.intStudents,expression:"intStudents"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Int'l students"},domProps:{value:t.intStudents},on:{input:function(e){e.target.composing||(t.intStudents=e.target.value)}}}),t._v(" "),n("label",[t._v("Founded")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.founded,expression:"founded"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Founded"},domProps:{value:t.founded},on:{input:function(e){e.target.composing||(t.founded=e.target.value)}}}),t._v(" "),n("label",[t._v("Faculty")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.faculty,expression:"faculty"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Faculty"},domProps:{value:t.faculty},on:{input:function(e){e.target.composing||(t.faculty=e.target.value)}}}),t._v(" "),n("label",[t._v("Total Students")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.totalStudents,expression:"totalStudents"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Total Students"},domProps:{value:t.totalStudents},on:{input:function(e){e.target.composing||(t.totalStudents=e.target.value)}}}),t._v(" "),n("label",[t._v("Image")]),t._v(" "),n("label",[t._v("Image")]),t._v(" "),n("label",{staticClass:"custom-file-upload",attrs:{for:"file-upload"}},[t._v("\n      Upload Image\n    ")]),t._v(" "),n("input",{ref:"file",staticClass:"form-control",attrs:{id:"file-upload",type:"file"},on:{change:t.getFile}}),t._v(" "),t.data.images?n("img",{attrs:{width:"100",height:"130",src:"/images"+t.data.images[1].url,alt:"image"}}):t._e(),t._v(" "),n("button",{staticClass:"btn btn-primary mt-5 w-100",attrs:{type:"submit"}},[t._v("Submit")])])])}),[],!1,null,"757fc3ce",null);e.default=component.exports}}]);