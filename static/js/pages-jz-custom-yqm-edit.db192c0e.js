(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jz-custom-yqm-edit"],{"051b":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uniForms:a("df7d").default,uniFormsItem:a("c51d").default,uniDataCheckbox:a("dbbc").default,uniEasyinput:a("deed").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{value:t.formData,"validate-trigger":"submit","err-show-type":"toast"}},[a("uni-forms-item",{attrs:{name:"user_name_type",label:"账号平台"}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.user_name_type_localdata},model:{value:t.formData.user_name_type,callback:function(e){t.$set(t.formData,"user_name_type",e)},expression:"formData.user_name_type"}})],1),a("uni-forms-item",{attrs:{name:"user_name",label:"账号昵称"}},[a("uni-easyinput",{attrs:{placeholder:"账号昵称",trim:"both"},model:{value:t.formData.user_name,callback:function(e){t.$set(t.formData,"user_name",e)},expression:"formData.user_name"}})],1),a("uni-forms-item",{attrs:{name:"value",label:"邀请码"}},[a("uni-easyinput",{attrs:{placeholder:"邀请码",trim:"both"},model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),a("uni-forms-item",{attrs:{name:"status",label:"生效状态"}},[a("v-uni-switch",{attrs:{checked:t.formData.status},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("status",e.detail.value)}}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},i=[]},2580:function(t,e,a){"use strict";a.r(e);var n=a("2d6c"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"2d6c":function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("c975"),a("b64b"),a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("5530")),i=a("6985"),u=t.database(),o="jz-custom-yqm";function s(t){var e={};for(var a in i.validator)t.indexOf(a)>-1&&(e[a]=i.validator[a]);return e}var l={data:function(){var t={user_name_type:0,user_name:"",value:"",status:!0};return{formData:t,formOptions:{user_name_type_localdata:[{value:0,text:"微博"},{value:1,text:"抖音"}]},rules:(0,r.default)({},s(Object.keys(t)))}},onLoad:function(t){if(t.id){var e=t.id;this.formDataId=e,this.getDetail(e)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){return t.submitForm(e)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;return u.collection(o).doc(this.formDataId).update(t).then((function(t){uni.showToast({icon:"none",title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),u.collection(o).doc(t).field("user_name_type,user_name,value,status").get().then((function(t){var a=t.result.data[0];a&&(e.formData=a)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=l}).call(this,a("a9ff")["default"])},6985:function(t,e,a){"use strict";var n=a("4ea4");a("4d63"),a("ac1f"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.filterToWhere=s,e.enumConverter=e.validator=void 0;var r=n(a("3835")),i=n(a("b85c")),u={user_name_type:{rules:[{format:"int"},{range:[{value:0,text:"微博"},{value:1,text:"抖音"}]}],defaultValue:0,label:"账号平台"},user_name:{rules:[{format:"string"}],label:"账号昵称"},value:{rules:[{format:"string"}],label:"邀请码"},status:{rules:[{format:"bool"}],defaultValue:!0,label:"生效状态"}};e.validator=u;var o={user_name_type_valuetotext:{0:"微博",1:"抖音"}};function s(t,e){var a={};for(var n in t){var u=t[n],o=u.type,s=u.value;switch(o){case"search":"string"===typeof s&&s.length&&(a[n]=new RegExp(s));break;case"select":if(s.length){var l,c=[],d=(0,i.default)(s);try{for(d.s();!(l=d.n()).done;){var f=l.value;c.push(e.eq(f))}}catch(D){d.e(D)}finally{d.f()}a[n]=e.or(c)}break;case"range":if(s.length){var m=s[0],v=s[1];a[n]=e.and([e.gte(m),e.lte(v)])}break;case"date":if(s.length){var p=(0,r.default)(s,2),b=p[0],h=p[1],g=new Date(b),_=new Date(h);a[n]=e.and([e.gte(g),e.lte(_)])}break;case"timestamp":if(s.length){var x=(0,r.default)(s,2),y=x[0],w=x[1];a[n]=e.and([e.gte(y),e.lte(w)])}break}}return a}e.enumConverter=o},"91fe":function(t,e,a){"use strict";a.r(e);var n=a("051b"),r=a("2580");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("c263e");var u,o=a("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"0a6b43a5",null,!1,n["a"],u);e["default"]=s.exports},c263e:function(t,e,a){"use strict";var n=a("c92e"),r=a.n(n);r.a},c92e:function(t,e,a){var n=a("d6e3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("85016698",n,!0,{sourceMap:!1,shadowMode:!1})},d6e3:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".uni-container[data-v-0a6b43a5]{padding:15px}.uni-input-border[data-v-0a6b43a5],\n.uni-textarea-border[data-v-0a6b43a5]{width:100%;font-size:14px;color:#666;border:1px #e5e5e5 solid;border-radius:5px;box-sizing:border-box}.uni-input-border[data-v-0a6b43a5]{padding:0 10px;height:35px}.uni-textarea-border[data-v-0a6b43a5]{padding:10px;height:80px}.uni-button-group[data-v-0a6b43a5]{margin-top:50px;\ndisplay:flex;\njustify-content:center}.uni-button[data-v-0a6b43a5]{width:184px;padding:12px 20px;font-size:14px;border-radius:4px;line-height:1;margin:0}",""]),t.exports=e}}]);