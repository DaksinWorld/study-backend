(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{419:function(e,t,r){"use strict";r.r(t);var o=r(7),n=(r(47),r(24),r(21),r(39),r(14),r(66),r(65)),l={layout:"admin",data:function(){return{response:"",name:"",degree:"",programs:"",fieldOfStudy:"",description:"",price:"",language:"",location:"",duration:"",foundationCoursePrice:"",file:"",degreeData:n.i,fieldOfStudyData:n.k,programsData:n.o}},methods:{SubmitHandler:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,(o=new FormData).append("file",t.file),o.append("name",t.name),o.append("fieldOfStudy",t.fieldOfStudy),o.append("programs",t.programs),o.append("degree",t.degree),o.append("description",t.description),o.append("price",t.price),o.append("language",t.language),o.append("location",t.location),o.append("duration",t.duration),o.append("foundationCoursePrice",t.foundationCoursePrice),o.append("createdAt",Date.now().toString()),r.next=17,t.$axios.$post("/api/product/create",o,{headers:{Authorization:"Bearer "+localStorage.getItem("jwt"),"Content-Type":"multipart/form-data"}});case 17:t.$store.dispatch("setMessage",{value:n.b,type:"primary"}),r.next=24;break;case 20:return r.prev=20,r.t0=r.catch(1),r.next=24,t.$store.dispatch("setMessage",{value:r.t0,type:"danger"});case 24:case"end":return r.stop()}}),r,null,[[1,20]])})))()},getFile:function(){this.file=this.$refs.file.files[0]}}},c=r(13),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.SubmitHandler.apply(null,arguments)}}},[r("label",[e._v("Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),r("label",[e._v("Degree")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.degree,expression:"degree"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.degree=t.target.multiple?r:r[0]}}},e._l(e.degreeData,(function(t,i){return r("option",{key:i,domProps:{value:t}},[e._v(e._s(t))])})),0),e._v(" "),r("label",[e._v("Field Of Study")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.fieldOfStudy,expression:"fieldOfStudy"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.fieldOfStudy=t.target.multiple?r:r[0]}}},e._l(e.fieldOfStudyData,(function(t,i){return r("option",{key:i,domProps:{value:t}},[e._v(e._s(t))])})),0),e._v(" "),r("label",[e._v("Programs")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.programs,expression:"programs"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.programs=t.target.multiple?r:r[0]}}},e._l(e.programsData,(function(t,i){return r("option",{key:i,domProps:{value:t}},[e._v(e._s(t))])})),0),e._v(" "),r("label",[e._v("Description")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),e._v(" "),r("label",[e._v("Price")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],staticClass:"form-control",attrs:{type:"number",placeholder:"price"},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}}),e._v(" "),r("label",[e._v("Language")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.language,expression:"language"}],staticClass:"form-control",attrs:{type:"text",placeholder:"language"},domProps:{value:e.language},on:{input:function(t){t.target.composing||(e.language=t.target.value)}}}),e._v(" "),r("label",[e._v("Location")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],staticClass:"form-control",attrs:{type:"text",placeholder:"location"},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}}),e._v(" "),r("label",[e._v("Duration")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.duration,expression:"duration"}],staticClass:"form-control",attrs:{type:"number",placeholder:"duration"},domProps:{value:e.duration},on:{input:function(t){t.target.composing||(e.duration=t.target.value)}}}),e._v(" "),r("label",[e._v("Foundation Course Price")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.foundationCoursePrice,expression:"foundationCoursePrice"}],staticClass:"form-control",attrs:{multiple:"",value:"",type:"number",placeholder:"foundationCoursePrice"},domProps:{value:e.foundationCoursePrice},on:{input:function(t){t.target.composing||(e.foundationCoursePrice=t.target.value)}}}),e._v(" "),r("label",[e._v("Image")]),e._v(" "),r("label",{staticClass:"custom-file-upload w-100",attrs:{for:"file-upload"}},[e._v("\n      Upload Image\n    ")]),e._v(" "),e.file.name?r("span",[e._v(e._s(e.file.name))]):e._e(),e._v(" "),r("input",{ref:"file",staticClass:"form-control",attrs:{id:"file-upload",type:"file"},on:{change:e.getFile}}),e._v(" "),r("button",{staticClass:"btn btn-primary mt-5 w-100",attrs:{type:"submit"}},[e._v("Submit")])])])}),[],!1,null,"8b7c9b36",null);t.default=component.exports}}]);