(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jz-custom-yqm-detail"],{"11d2":function(t,e,n){"use strict";n.r(e);var a=n("9b17"),o=n("9a4a"),i=n("52fd"),r=n("e0e4"),s=n("68f3");e["default"]={en:a,es:o,fr:i,"zh-Hans":r,"zh-Hant":s}},1300:function(t){t.exports=JSON.parse('{"uni-load-more.contentdown":"上拉显示更多","uni-load-more.contentrefresh":"正在加载...","uni-load-more.contentnomore":"没有更多数据了"}')},"3f11":function(t,e,n){"use strict";n.r(e);var a=n("fd2b"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"4af1":function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("4160"),n("c975"),n("fb6a"),n("a434"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("2909")),i=n("37dc"),r=a(n("11d2")),s=(0,i.initVueI18n)(r.default),d=s.t,c={load:"load",error:"error"},u={add:"add",replace:"replace"},l={auto:"auto",onready:"onready",manual:"manual"},f=["pageCurrent","pageSize","spaceInfo","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"],h={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},spaceInfo:{type:Object,default:function(){return{}}},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{},errorMessage:""}},computed:{collectionArgs:function(){return Array.isArray(this.collection)?this.collection:[this.collection]},isLookup:function(){return Array.isArray(this.collection)&&this.collection.length>1||"string"===typeof this.collection&&this.collection.indexOf(",")>-1},mainCollection:function(){if("string"===typeof this.collection)return this.collection.split(",")[0];var t=JSON.parse(JSON.stringify(this.collection[0]));return t.$db[0].$param[0]}},created:function(){var t=this;this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((function(){var e=[];return f.forEach((function(n){e.push(t[n])})),e}),(function(e,n){if(t.paginationInternal.size=t.pageSize,e[0]!==n[0]&&(t.paginationInternal.current=t.pageCurrent),t.loadtime!==l.manual){for(var a=!1,o=2;o<e.length;o++)if(e[o]!==n[o]){a=!0;break}a&&(t.clear(),t.reset()),t._execLoadData()}})),this.manual||this.loadtime!==l.auto||this.loadData()},beforeDestroy:function(){},methods:{loadData:function(t,e){var n=null,a=!1;"object"===typeof t?(t.clear&&(this.pageData===u.replace?this.clear():a=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"===typeof e&&(n=e)):"function"===typeof t&&(n=t),this._execLoadData(n,a)},loadMore:function(){this._isEnded||this.loading||(this.pageData===u.add&&this.paginationInternal.current++,this._execLoadData())},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.action,o=n.showToast,i=void 0===o||o,r=n.toastTitle,s=n.success,c=n.fail,u=n.complete,l=n.needConfirm,f=void 0===l||l,h=n.needLoading,m=void 0===h||h,g=n.loadingTitle,p=void 0===g?"":g;m&&uni.showLoading({title:p});var v=t.database(this.spaceInfo);a&&(v=v.action(a)),v.collection(this.mainCollection).add(e).then((function(t){s&&s(t),i&&uni.showToast({title:r||d("uniCloud.component.add.success")})})).catch((function(t){c&&c(t),f&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){m&&uni.hideLoading(),u&&u()}))},remove:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.action,o=n.success,i=n.fail,r=n.complete,s=n.confirmTitle,c=n.confirmContent,u=n.needConfirm,l=void 0===u||u,f=n.needLoading,h=void 0===f||f,m=n.loadingTitle,g=void 0===m?"":m;t&&t.length&&(l?uni.showModal({title:s||d("uniCloud.component.remove.showModal.title"),content:c||d("uniCloud.component.remove.showModal.content"),showCancel:!0,success:function(n){n.confirm&&e._execRemove(t,a,o,i,r,l,h,g)}}):this._execRemove(t,a,o,i,r,l,h,g))},update:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=a.action,i=a.showToast,r=void 0===i||i,s=a.toastTitle,c=a.success,u=a.fail,l=a.complete,f=a.needConfirm,h=void 0===f||f,m=a.needLoading,g=void 0===m||m,p=a.loadingTitle,v=void 0===p?"":p;g&&uni.showLoading({title:v});var w=t.database(this.spaceInfo);return o&&(w=w.action(o)),w.collection(this.mainCollection).doc(e).update(n).then((function(t){c&&c(t),r&&uni.showToast({title:s||d("uniCloud.component.update.success")})})).catch((function(t){u&&u(t),h&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){g&&uni.hideLoading(),l&&l()}))},getTemp:function(){var e,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=t.database(this.spaceInfo);this.action&&(a=a.action(this.action)),a=(e=a).collection.apply(e,(0,o.default)(this.collectionArgs)),this.where&&Object.keys(this.where).length&&(a=a.where(this.where)),this.field&&(a=a.field(this.field)),this.foreignKey&&(a=a.foreignKey(this.foreignKey)),this.groupby&&(a=a.groupBy(this.groupby)),this.groupField&&(a=a.groupField(this.groupField)),!0===this.distinct&&(a=a.distinct()),this.orderby&&(a=a.orderBy(this.orderby));var i=this.paginationInternal,r=i.current,s=i.size,d={};this.getcount&&(d.getCount=this.getcount);var c={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(d.getTree=c),this.gettreepath&&(d.getTreePath=c),a=a.skip(s*(r-1)).limit(s),n?(a=a.getTemp(d),a.udb=this):a=a.get(d),a},setResult:function(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData:function(t,e){var n=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(a){n.loading=!1,n._execLoadDataSuccess(a.result,t,e)})).catch((function(e){n.loading=!1,n._execLoadDataFail(e,t)})))},_execLoadDataSuccess:function(t,e,n){var a=t.data,i=t.count;this._isEnded=void 0!==i?this.paginationInternal.current*this.paginationInternal.size>=i:a.length<this.pageSize,this.hasMore=!this._isEnded;var r,s=this.getone?a.length?a[0]:void 0:a;(this.getcount&&(this.paginationInternal.count=i),e&&e(s,this._isEnded,this.paginationInternal),this._dispatchEvent(c.load,s),this.getone||this.pageData===u.replace)?this.dataList=s:n?this.dataList=s:(r=this.dataList).push.apply(r,(0,o.default)(s))},_execLoadDataFail:function(t,e){this.errorMessage=t,e&&e(),this.$emit(c.error,t)},_getExec:function(){return this.getTemp(!1)},_execRemove:function(e,n,a,o,i,r,s,d){var c=this;if(this.collection&&e){var l=Array.isArray(e)?e:[e];if(l.length){s&&uni.showLoading({mask:!0,title:d});var f=t.database(this.spaceInfo),h=f.command,m=f;n&&(m=m.action(n)),m.collection(this.mainCollection).where({_id:h.in(l)}).remove().then((function(t){a&&a(t.result),c.pageData===u.replace?c.refresh():c.removeData(l)})).catch((function(t){o&&o(t),r&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){s&&uni.hideLoading(),i&&i()}))}}},removeData:function(t){for(var e=t.slice(0),n=this.dataList,a=n.length-1;a>=0;a--){var o=e.indexOf(n[a]._id);o>=0&&(n.splice(a,1),e.splice(o,1))}},_dispatchEvent:function(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded,this.paginationInternal):this.$emit(t,e,this._isEnded,this.paginationInternal)}}};e.default=h}).call(this,n("a9ff")["default"])},"4b8f":function(t,e,n){"use strict";var a=n("6dd1"),o=n.n(a);o.a},"52fd":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"68f3":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否刪除數據"}')},6985:function(t,e,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.filterToWhere=d,e.enumConverter=e.validator=void 0;var o=a(n("3835")),i=a(n("b85c")),r={user_name_type:{rules:[{format:"int"},{range:[{value:0,text:"微博"},{value:1,text:"抖音"}]}],defaultValue:0,label:"账号平台"},user_name:{rules:[{format:"string"}],label:"账号昵称"},value:{rules:[{format:"string"}],label:"邀请码"},status:{rules:[{format:"bool"}],defaultValue:!0,label:"生效状态"}};e.validator=r;var s={user_name_type_valuetotext:{0:"微博",1:"抖音"}};function d(t,e){var n={};for(var a in t){var r=t[a],s=r.type,d=r.value;switch(s){case"search":"string"===typeof d&&d.length&&(n[a]=new RegExp(d));break;case"select":if(d.length){var c,u=[],l=(0,i.default)(d);try{for(l.s();!(c=l.n()).done;){var f=c.value;u.push(e.eq(f))}}catch(A){l.e(A)}finally{l.f()}n[a]=e.or(u)}break;case"range":if(d.length){var h=d[0],m=d[1];n[a]=e.and([e.gte(h),e.lte(m)])}break;case"date":if(d.length){var g=(0,o.default)(d,2),p=g[0],v=g[1],w=new Date(p),b=new Date(v);n[a]=e.and([e.gte(w),e.lte(b)])}break;case"timestamp":if(d.length){var y=(0,o.default)(d,2),k=y[0],x=y[1];n[a]=e.and([e.gte(k),e.lte(x)])}break}}return n}e.enumConverter=s},"6dd1":function(t,e,n){var a=n("9829");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("36d7d90a",a,!0,{sourceMap:!1,shadowMode:!1})},"7f92":function(t,e,n){"use strict";var a=n("b736"),o=n.n(a);o.a},"848e":function(t,e,n){"use strict";n.r(e);var a=n("4af1"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"8bc9":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[!t.webviewHide&&("circle"===t.iconType||"auto"===t.iconType&&"android"===t.platform)&&"loading"===t.status&&t.showIcon?n("svg",{staticClass:"uni-load-more__img uni-load-more__img--android-H5",style:{width:t.iconSize+"px",height:t.iconSize+"px"},attrs:{width:"24",height:"24",viewBox:"25 25 50 50"}},[n("circle",{style:{color:t.color},attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":3}})]):!t.webviewHide&&"loading"===t.status&&t.showIcon?n("v-uni-view",{staticClass:"uni-load-more__img uni-load-more__img--ios-H5",style:{width:t.iconSize+"px",height:t.iconSize+"px"}},[n("v-uni-image",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZV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",mode:"widthFix"}})],1):t._e(),n("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentdownText:"loading"===t.status?t.contentrefreshText:t.contentnomoreText))])],1)},i=[]},"960d":function(t,e,n){"use strict";n.r(e);var a=n("d47d"),o=n("848e");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var r,s=n("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=d.exports},9829:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/***字体大小规范***/\r\n/***颜色定义***/\r\n/***行间距***/.uni-load-more[data-v-5214a5cf]{display:flex;flex-direction:row;height:40px;align-items:center;justify-content:center}.uni-load-more__text[data-v-5214a5cf]{font-size:15px}.uni-load-more__img[data-v-5214a5cf]{width:24px;height:24px;margin-right:8px}.uni-load-more__img--nvue[data-v-5214a5cf]{color:#666}.uni-load-more__img--android[data-v-5214a5cf],\r\n.uni-load-more__img--ios[data-v-5214a5cf]{width:24px;height:24px;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.uni-load-more__img--android[data-v-5214a5cf]{-webkit-animation:loading-ios 1s 0s linear infinite;animation:loading-ios 1s 0s linear infinite}@-webkit-keyframes loading-android-data-v-5214a5cf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-android-data-v-5214a5cf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.uni-load-more__img--ios-H5[data-v-5214a5cf]{position:relative;-webkit-animation:loading-ios-H5-data-v-5214a5cf 1s 0s step-end infinite;animation:loading-ios-H5-data-v-5214a5cf 1s 0s step-end infinite}.uni-load-more__img--ios-H5 > uni-image[data-v-5214a5cf]{position:absolute;width:100%;height:100%;left:0;top:0}@-webkit-keyframes loading-ios-H5-data-v-5214a5cf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}8%{-webkit-transform:rotate(30deg);transform:rotate(30deg)}16%{-webkit-transform:rotate(60deg);transform:rotate(60deg)}24%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}32%{-webkit-transform:rotate(120deg);transform:rotate(120deg)}40%{-webkit-transform:rotate(150deg);transform:rotate(150deg)}48%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}56%{-webkit-transform:rotate(210deg);transform:rotate(210deg)}64%{-webkit-transform:rotate(240deg);transform:rotate(240deg)}73%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}82%{-webkit-transform:rotate(300deg);transform:rotate(300deg)}91%{-webkit-transform:rotate(330deg);transform:rotate(330deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-ios-H5-data-v-5214a5cf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}8%{-webkit-transform:rotate(30deg);transform:rotate(30deg)}16%{-webkit-transform:rotate(60deg);transform:rotate(60deg)}24%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}32%{-webkit-transform:rotate(120deg);transform:rotate(120deg)}40%{-webkit-transform:rotate(150deg);transform:rotate(150deg)}48%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}56%{-webkit-transform:rotate(210deg);transform:rotate(210deg)}64%{-webkit-transform:rotate(240deg);transform:rotate(240deg)}73%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}82%{-webkit-transform:rotate(300deg);transform:rotate(300deg)}91%{-webkit-transform:rotate(330deg);transform:rotate(330deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.uni-load-more__img--android-H5[data-v-5214a5cf]{-webkit-animation:loading-android-H5-rotate-data-v-5214a5cf 2s linear infinite;animation:loading-android-H5-rotate-data-v-5214a5cf 2s linear infinite;-webkit-transform-origin:center center;transform-origin:center center}.uni-load-more__img--android-H5 > circle[data-v-5214a5cf]{display:inline-block;-webkit-animation:loading-android-H5-dash-data-v-5214a5cf 1.5s ease-in-out infinite;animation:loading-android-H5-dash-data-v-5214a5cf 1.5s ease-in-out infinite;stroke:currentColor;stroke-linecap:round}@-webkit-keyframes loading-android-H5-rotate-data-v-5214a5cf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-android-H5-rotate-data-v-5214a5cf{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loading-android-H5-dash-data-v-5214a5cf{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}100%{stroke-dasharray:90,150;stroke-dashoffset:-120}}@keyframes loading-android-H5-dash-data-v-5214a5cf{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}100%{stroke-dasharray:90,150;stroke-dashoffset:-120}}',""]),t.exports=e},"9a4a":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"9b17":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"Success","uniCloud.component.update.success":"Success","uniCloud.component.remove.showModal.title":"Tips","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"9ca0":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".container[data-v-0d017265]{padding:10px}.btns[data-v-0d017265]{margin-top:10px;\ndisplay:flex;\nflex-direction:row}.btns uni-button[data-v-0d017265]{flex:1}.btn-delete[data-v-0d017265]{margin-left:10px}",""]),t.exports=e},"9eed":function(t,e,n){"use strict";n.r(e);var a=n("8bc9"),o=n("3f11");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("4b8f");var r,s=n("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"5214a5cf",null,!1,a["a"],r);e["default"]=d.exports},b736:function(t,e,n){var a=n("9ca0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("7c812963",a,!0,{sourceMap:!1,shadowMode:!1})},b8c3:function(t,e,n){"use strict";n.r(e);var a=n("df83"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},bf45:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={unicloudDb:n("960d").default,uniLoadMore:n("9eed").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("unicloud-db",{ref:"udb",attrs:{options:t.options,collection:"jz-custom-yqm",field:"user_name_type,user_name,value,status",where:t.queryWhere,getone:!0,manual:!0},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data,o=e.loading,i=e.error,r=e.options;return[i?n("v-uni-view",[t._v(t._s(i.message))]):o?n("v-uni-view",[n("uni-load-more",{attrs:{contentText:t.loadMore,status:"loading"}})],1):a?n("v-uni-view",[n("v-uni-view",[n("v-uni-text",[t._v("账号平台")]),n("v-uni-text",[t._v(t._s(r.user_name_type_valuetotext[a.user_name_type]))])],1),n("v-uni-view",[n("v-uni-text",[t._v("账号昵称")]),n("v-uni-text",[t._v(t._s(a.user_name))])],1),n("v-uni-view",[n("v-uni-text",[t._v("邀请码")]),n("v-uni-text",[t._v(t._s(a.value))])],1),n("v-uni-view",[n("v-uni-text",[t._v("生效状态")]),n("v-uni-text",[t._v(t._s(1==a.status?"✅":"❌"))])],1)],1):t._e()]}}])}),n("v-uni-view",{staticClass:"btns"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleUpdate.apply(void 0,arguments)}}},[t._v("修改")]),n("v-uni-button",{staticClass:"btn-delete",attrs:{type:"warn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDelete.apply(void 0,arguments)}}},[t._v("删除")])],1)],1)},i=[]},ce8b:function(t){t.exports=JSON.parse('{"uni-load-more.contentdown":"Pull up to show more","uni-load-more.contentrefresh":"loading...","uni-load-more.contentnomore":"No more data"}')},d47d:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t._t("default",null,{options:t.options,data:t.dataList,pagination:t.paginationInternal,loading:t.loading,hasMore:t.hasMore,error:t.errorMessage})],2)},i=[]},d5d2:function(t,e,n){"use strict";n.r(e);var a=n("bf45"),o=n("b8c3");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("7f92");var r,s=n("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"0d017265",null,!1,a["a"],r);e["default"]=d.exports},da37:function(t){t.exports=JSON.parse('{"uni-load-more.contentdown":"上拉顯示更多","uni-load-more.contentrefresh":"正在加載...","uni-load-more.contentnomore":"沒有更多數據了"}')},de01:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("ce8b")),i=a(n("1300")),r=a(n("da37")),s={en:o.default,"zh-Hans":i.default,"zh-Hant":r.default};e.default=s},df83:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("5530")),i=n("6985"),r={data:function(){return{queryWhere:"",loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},options:(0,o.default)({},i.enumConverter)}},onLoad:function(t){this._id=t.id},onReady:function(){this._id&&(this.queryWhere='_id=="'+this._id+'"')},methods:{handleUpdate:function(){var t=this;uni.navigateTo({url:"./edit?id="+this._id,events:{refreshData:function(){t.$refs.udb.loadData({clear:!0})}}})},handleDelete:function(){this.$refs.udb.remove(this._id,{success:function(t){uni.navigateTo({url:"./list"})}})}}};e.default=r},e0e4:function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},fd2b:function(t,e,n){"use strict";var a=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=n("37dc"),r=a(n("de01"));setTimeout((function(){o=uni.getSystemInfoSync().platform}),16);var s=(0,i.initVueI18n)(r.default),d=s.t,c={name:"UniLoadMore",emits:["clickLoadMore"],props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},iconSize:{type:Number,default:24},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"",contentrefresh:"",contentnomore:""}}}},data:function(){return{webviewHide:!1,platform:o}},computed:{iconSnowWidth:function(){return 2*(Math.floor(this.iconSize/24)||1)},contentdownText:function(){return this.contentText.contentdown||d("uni-load-more.contentdown")},contentrefreshText:function(){return this.contentText.contentrefresh||d("uni-load-more.contentrefresh")},contentnomoreText:function(){return this.contentText.contentnomore||d("uni-load-more.contentnomore")}},mounted:function(){},methods:{onClick:function(){this.$emit("clickLoadMore",{detail:{status:this.status}})}}};e.default=c}}]);