(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-login-page-pwd-login-pwd-weibo"],{"04ddc":function(t,n,e){"use strict";e.r(n);var a=e("ad2f"),i=e("22a6");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("d3a6");var r,d=e("f0c5"),c=Object(d["a"])(i["default"],a["b"],a["c"],!1,null,"056d9607",null,!1,a["a"],r);n["default"]=c.exports},"22a6":function(t,n,e){"use strict";e.r(n);var a=e("9b21"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"67c5":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"uni-view[data-v-056d9607]{display:flex;box-sizing:border-box;flex-direction:column}\n.content[data-v-056d9607]{padding:0 %?50?%;width:%?750?%;flex:1}.input-box[data-v-056d9607]{padding:0 15px;margin-bottom:10px;background-color:#f8f8f8;border-radius:6px;font-size:%?28?%}.get-code[data-v-056d9607]{margin:0;margin-top:15px;background-color:#7275d3;color:#fff}.input-box[data-v-056d9607],\r\n.get-code[data-v-056d9607]{height:45px;line-height:45px}.title[data-v-056d9607]{text-align:center;padding-bottom:5px}.tip[data-v-056d9607]{color:#666;font-size:%?26?%;margin:6px 0}.easyinput[data-v-056d9607]{background-color:#f8f8f8;border-radius:%?6?%}.send-btn[data-v-056d9607]{width:100%;margin-top:15px;border-radius:%?6?%}.link[data-v-056d9607]{color:#04498c}.slot-content[data-v-056d9607]{padding:10px}.usercenter-top[data-v-056d9607]{color:#fff;font-size:16px;height:44px;line-height:44px}.usercenter-top-left[data-v-056d9607]{position:absolute;left:4px;top:12px}.usercenter-top-mine[data-v-056d9607]{text-align:center}.login-back[data-v-056d9607]{height:100vh;background:linear-gradient(#777ece,rgb(255 255 255));background-size:cover;background-repeat:no-repeat;background-position:50%}\r\n/* .pwd-login{\r\n\tpadding-top: 10em;\r\n}\r\n.pwd-login .title{\r\n\tfont-size: 24px;\r\n\tmargin-bottom: 20px;\r\n} */.auth-box[data-v-056d9607]{\r\n\t/* flex-direction: row;\r\n\tjustify-content: right; */margin-top:20px;text-align:right}.auth-box .link[data-v-056d9607]{font-size:%?26?%}.login-text-sub[data-v-056d9607]{color:#8a8f8b}.toRegister[data-v-056d9607]{margin-top:80px;width:%?600?%}.captcha-box[data-v-056d9607]{flex-direction:row;align-items:center;justify-content:flex-end}.captcha-img[data-v-056d9607]{margin:15px 15px 0 0;width:%?250?%}.captcha[data-v-056d9607]{width:%?350?%}.login-back-con[data-v-056d9607]{width:80%;margin:0 auto;margin-top:40px}.login-back-con .u-btn[data-v-056d9607]{border-radius:50px}.login-back-con .input-box[data-v-056d9607]{height:40px;line-height:40px}",""]),t.exports=n},7724:function(t,n,e){var a=e("67c5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("420aca9e",a,!0,{sourceMap:!1,shadowMode:!1})},"9b21":function(t,n,e){"use strict";(function(t){var a=e("4ea4");e("d3b7"),e("e25e"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var i=a(e("1da1")),o=a(e("bbb6")),r={mixins:[o.default],data:function(){return{showmodel:!1,weiboname:"",wbcontent:"山河不足重，重在遇知己"}},created:function(){var t=getApp().globalData.weiboyz,n=parseInt(Math.random()*t.length);this.$set(this,"wbcontent",t[n])},computed:{},methods:{goback:function(){uni.navigateBack()},confirmnc:function(){var n=this;return new Promise(function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(a){var i,o,r,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.database(),o=i.getCloudEnv("$cloudEnv_uid"),r=i.collection("uni-id-users"),e.next=5,r.where({_id:o}).update({weibocontent:n.wbcontent,weiboname:n.weiboname});case 5:d=e.sent,0==d.result.code?uni.showModal({title:"提示",showCancel:!1,confirmText:"退出",content:"您的申请已提交，请尽快发微博，待管理员审核后方可登录",success:function(t){if(t.confirm&&"undefined"!=typeof plus){var n=plus.webview.currentWebview().opener();mui.fire(n,"quit",{data:"quit"}),console.log("在这里退出App")}}}):uni.showToast({title:"操作出错，请联系管理员",icon:"none"});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},confirmweibo:function(){if(!this.weiboname)return uni.showToast({title:"请输入微博主页链接地址",icon:"none"});this.showmodel=!0}}};n.default=r}).call(this,e("a9ff")["default"])},ad2f:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={uNavbar:e("01c9").default,uImage:e("d72a").default,uButton:e("5e1b").default,uModal:e("f33b").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:" pwd-login"},[e("v-uni-view",{staticClass:"login-back"},[e("v-uni-view",{staticClass:"usercenter-top"},[e("u-navbar",{attrs:{"is-back":!0,title:"微博主页地址","border-bottom":!1,"title-color":"#fff","back-icon-color":"#fff",background:{background:"none"}}})],1),e("v-uni-view",{staticClass:"login_back_logo"},[e("u-image",{attrs:{width:"100%",src:"/static/login-index/login_back.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"login-back-con"},[e("v-uni-input",{staticClass:"input-box",attrs:{inputBorder:!1,placeholder:"http://"},model:{value:t.weiboname,callback:function(n){t.weiboname=n},expression:"weiboname"}}),e("u-button",{staticClass:"send-btn",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirmweibo.apply(void 0,arguments)}}},[t._v("确定")])],1),e("u-modal",{attrs:{"show-cancel-button":!0,width:"85%"},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.confirmnc.apply(void 0,arguments)}},model:{value:t.showmodel,callback:function(n){t.showmodel=n},expression:"showmodel"}},[e("v-uni-view",{staticClass:"slot-content"},[e("v-uni-view",{staticStyle:{"text-indent":"2em"}},[t._v("请确认微博主页地址【"+t._s(t.weiboname)+"】输入正确，并在自己微博发送一条【"+t._s(t.wbcontent)+"】的微博。")]),e("v-uni-view",{staticStyle:{"text-indent":"2em"}},[t._v("如你确认无误，请点击确认按钮申请，待管理员审核微博通过后可重新进入本系统。")]),e("v-uni-view",{staticStyle:{"text-indent":"2em"}},[t._v("注意请不要重复注册账号，加大管理组的审核工作量，多余的账号将会被锁定。")])],1)],1)],1)],1)},o=[]},d3a6:function(t,n,e){"use strict";var a=e("7724"),i=e.n(a);i.a}}]);