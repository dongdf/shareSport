webpackJsonp([0],{"/RKR":function(t,e){},"9Xvl":function(t,e,i){"use strict";e.b=function(t,e){for(let i=0;i<e.length;i++)if(t===e[i])return!0;return!1},i.d(e,"a",function(){return s});const a=i("7+uW").default.prototype.$isServer;!a&&(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver);function s(t,e,i){i="string"==typeof e?[e]:e;let a=t.$parent,s=a.$options.name;for(;a&&(!s||i.indexOf(s)<0);)(a=a.$parent)&&(s=a.$options.name);return a}},CaWR:function(t,e){},G7MN:function(t,e,i){"use strict";i("qI5z");var a={name:"product-report",data:()=>({isStop:!0,doneReport:1,zj_total:"",bigtext:"正在生成，请稍后...",isbaogao:!0,curyear:"123",qyId:"",fxlist:[{list:{title:"税负指标",state:1,value:"",children:[{title:"增值税税负率",state:1,value:1,api:"financial/reportService/analysisZzsfl"},{title:"企业所得税税负率",state:1,value:2,api:"financial/reportService/analysisQysfl"},{title:"企业所得税贡献率",state:1,value:2,api:"financial/reportService/analysisQygxl"}]}},{list:{title:"税源指标",state:1,value:"",children:[{title:"速动比率",state:1,value:2,api:"financial/bbzbService/syzbfx/sdbl"},{title:"流动比率",state:1,value:1,api:"financial/bbzbService/syzbfx/ldbl"},{title:"资产负债率",state:1,value:3,api:"financial/bbzbService/syzbfx/zcfzl"},{title:"存货周转率",state:1,value:4,api:"financial/bbzbService/syzbfx/chzzl"},{title:"应收账款周转率",state:1,value:5,api:"financial/bbzbService/syzbfx/yszkzzl"},{title:"毛利率",state:1,value:5,api:"financial/bbzbService/syzbfx/mll"},{title:"销售费用率",state:1,value:5,api:"financial/bbzbService/syzbfx/xsfyl"},{title:"管理费用率",state:1,value:5,api:"financial/bbzbService/syzbfx/glfyl"},{title:"营业利润率",state:1,value:5,api:"financial/bbzbService/syzbfx/yylrl"},{title:"利润率",state:1,value:5,api:"financial/bbzbService/syzbfx/lrl"}]}},{list:{title:"主要项目",state:1,value:"",children:[{title:"增值税申报表主表计税销售额与企业所得税申报表主表营业收入比对",state:1,value:1,api:"financial/reportService/analysisZzsJsxs"},{title:"增值税申报表主表计税销售额与利润表表营业收入比对",state:1,value:1,api:"financial/reportService/analysisZzsJsxs_lrsr"},{title:"企业所得税申报表主表前13行与利润表相关项目比对",state:1,value:1,api:"financial/reportService/analysisQysdsyysr"},{title:"货币资金",state:1,value:1,api:"financial/reportService/analysisHbzj"},{title:"应收票据+应收账款",state:1,value:2,api:"financial/reportService/analysisYspj"},{title:"存货",state:1,value:4,api:"financial/reportService/analysisCh"},{title:"长期股权投资",state:1,value:5,api:"financial/reportService/analysisCqgqtz"},{title:"固定资产原值",state:1,value:6,api:"financial/reportService/analysisGdzcjz"},{title:"累计折旧",state:1,value:1,api:"financial/reportService/analysisLjzj"},{title:"无形资产",state:1,value:2,api:"financial/reportService/analysisWxzc"},{title:"短期借款+长期借款",state:1,value:3,api:"financial/reportService/analysisDqjk"},{title:"应付账款",state:1,value:4,api:"financial/reportService/analysisYfzk"},{title:"其他应付款",state:1,value:5,api:"financial/reportService/analysisQtyfk"},{title:"实收资本（股本）",state:1,value:6,api:"financial/reportService/analysisSszb"},{title:"资本公积",state:1,value:6,api:"financial/reportService/analysisZbgj"},{title:"盈余公积",state:1,value:6,api:"financial/reportService/analysisYygj"},{title:"未分配利润",state:1,value:6,api:"financial/reportService/analysisWfplr"},{title:"营业收入",state:1,value:6,api:"financial/reportService/analysisYysr"},{title:"营业成本",state:1,value:6,api:"financial/reportService/analysisYycb"},{title:"销售费用",state:1,value:6,api:"financial/reportService/analysisXsfy"},{title:"管理费用",state:1,value:6,api:"financial/reportService/analysisGlfy"}]}}],userinfo:{}}),mounted(){this.getuser()},methods:{gobb(){this.$http.get("financial/reportService/result2Html?type=1&year="+this.curyear+"&companyId="+this.qyId).then(t=>{1!=t.data.code?this.$Message.error(t.data.msg):(setTimeout(()=>{window.open(t.data.data)},50),this.$el.parentNode.removeChild(this.$el))})},useKey(){this.$http.get("financial/userService/useKeyt").then(t=>{})},getuser(){this.$http.post("financial/userService/getCurUser").then(t=>{this.userinfo=t.data})},cancle(){this.isStop=!1,this.$el.parentNode.removeChild(this.$el)},gobuy(){this.$el.parentNode.removeChild(this.$el),"function"==typeof this.onBuy&&this.onBuy(this)},updateList(){"function"==typeof this.updateList&&this.updateList(this)},startFx(){let t=this;var e=0;this.$http.get("financial/reportService/analysisStart?userId="+this.userinfo.id+"&qyId="+t.qyId).then(i=>{1!=i.data.code?this.$Message.error(i.data.msg):(t.doneReport=2,function i(a,s,n){if(!t.isStop)return!1;t.$http.get(t.fxlist[n].list.children[s].api+"?year=2018&qyId="+t.qyId).then(a=>{console.log(s),t.fxlist[n].list.children[s].state=3,t.bigtext="正在计算"+t.fxlist[n].list.children[s].title,t.fxlist[n].list.children[s].value=a.data.data.value,2==n&&s==t.fxlist[n].list.children.length-1&&(t.bigtext="计算完成",t.zj_total=a.data.data.zj_value,t.curyear=a.data.data.nf,t.doneReport=3,t.updateList()),e++,document.getElementById("proingC").scrollTop=30*e,s++,1==a.data.code?s>t.fxlist[n].list.children.length-1?(t.fxlist[n].list.value=a.data.data.xm_value,n++,s=0,setTimeout(function(){i("",s,n)},100)):setTimeout(function(){i("",s,n)},100):t.isStop=!1},e=>{t.isStop=!1,alert("分析出错，请进行重新分析！")})}(0,0,0))})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"ivu-modal-mask"}),t._v(" "),i("div",{staticClass:"ivu-modal-wrap"},[i("div",{staticClass:"ivu-modal",staticStyle:{width:"620px",top:"20%"}},[i("div",{staticClass:"ivu-modal-content"},[i("div",{staticClass:"ivu-modal-header"},[i("div",{staticClass:"ivu-modal-header-inner",staticStyle:{height:"60px"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.doneReport,expression:"doneReport == 1"}],staticClass:"tijian"},[i("div",{staticClass:"fl bigicon2"},[i("Icon",{attrs:{size:"30",color:"#FFF",type:"ios-bulb-outline"}})],1),t._v(" "),i("div",{staticClass:"icontext fl"},[t._m(0),t._v(" "),i("p",{staticClass:"small"},[t._v("当前秘钥 "+t._s(t.userinfo.keyt_num)+" 个,还可以生成"+t._s(t.userinfo.keyt_num)+"次报告 "),i("b",{staticStyle:{cursor:"pointer"},on:{click:t.gobuy}},[t._v("购买秘钥>>")])])]),t._v(" "),i("div",{staticClass:"actbtn"},[i("Button",{attrs:{size:"large",type:"primary",disabled:!t.userinfo.keyt_num},on:{click:t.startFx}},[t._v("生成报告")]),t._v(" "),i("Button",{attrs:{size:"large",type:"text"},on:{click:t.cancle}},[t._v("取消")])],1)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2==t.doneReport,expression:"doneReport == 2"}],staticClass:"tijian"},[i("div",{staticClass:"fl bigicon"},[i("Icon",{attrs:{color:"#FFF",size:"30",type:"ios-hammer"}})],1),t._v(" "),i("div",{staticClass:"icontext fl"},[i("h3",[t._v("正在生成报告...")]),t._v(" "),i("p",{staticClass:"small"},[i("b",[t._v(t._s(t.bigtext))])])]),t._v(" "),i("div",{staticClass:"actbtn"},[i("Button",{attrs:{size:"large",type:"text"},on:{click:t.cancle}},[t._v("取消")])],1)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:3==t.doneReport,expression:"doneReport == 3"}],staticClass:"tijian"},[t.zj_total<=3?i("div",{staticClass:"fl bigicon2"},[i("Icon",{attrs:{color:"#FFF",size:"30",type:"md-checkmark"}})],1):t._e(),t._v(" "),t.zj_total>3&&t.zj_total<=7?i("div",{staticClass:"fl bigicon2",staticStyle:{background:"#F60"}},[i("Icon",{attrs:{type:"md-warning",color:"#FFF",size:"30"}})],1):t._e(),t._v(" "),t.zj_total>7?i("div",{staticClass:"fl bigicon2",staticStyle:{background:"red"}},[i("Icon",{attrs:{color:"#FFF",size:"30",type:"ios-sad-outline"}})],1):t._e(),t._v(" "),i("div",{staticClass:"icontext fl"},[i("h3",[t._v("该企业税收风险等级为\n                  "),t.zj_total<=3?i("span",{staticStyle:{color:"green"}},[t._v("初级")]):t._e(),t._v(" "),t.zj_total>3&&t.zj_total<=7?i("span",{staticStyle:{color:"#F60"}},[t._v("中级")]):t._e(),t._v(" "),t.zj_total>7?i("span",{staticStyle:{color:"red"}},[t._v("高级")]):t._e()]),t._v(" "),t._m(1)]),t._v(" "),i("div",{staticClass:"actbtn"},[i("Button",{attrs:{size:"large",type:"primary"},on:{click:t.gobb}},[t._v("查看报告")]),t._v(" "),i("Button",{attrs:{size:"large",type:"text"},on:{click:t.cancle}},[t._v("关闭")])],1)])])]),t._v(" "),i("div",{staticClass:"ivu-modal-body"},[i("div",{staticClass:"proingC",attrs:{id:"proingC"}},[i("div",{staticClass:"times"},[i("Timeline",t._l(t.fxlist,function(e,a){return i("TimelineItem",{key:a,attrs:{color:"green"}},[i("Icon",{attrs:{slot:"dot",type:"ios-paper",size:"20"},slot:"dot"}),t._v(" "),i("p",{staticClass:"time"}),i("h3",[t._v(t._s(e.list.title)),i("span",{directives:[{name:"show",rawName:"v-show",value:e.list.value,expression:"item.list.value"}],staticClass:"fr xjf"},[t._v(t._s(e.list.value)+"分")])]),i("p"),t._v(" "),t._l(e.list.children,function(e,a){return i("p",{key:a,staticClass:"content ",class:2==e.state?"cur":""},[i("span",[i("Icon",{attrs:{type:"ios-add"}}),t._v(t._s(e.title))],1),t._v(" "),i("span",{staticClass:"fr"},[i("Icon",{directives:[{name:"show",rawName:"v-show",value:1==e.state,expression:"x.state ==1"}],attrs:{size:"16",size:20,type:"ios-time-outline"}}),t._v(" "),i("Icon",{directives:[{name:"show",rawName:"v-show",value:2==e.state,expression:"x.state ==2"}],attrs:{type:"ios-hammer",size:20,color:"#F60"}}),t._v(" "),3==e.state?[e.value<0?i("Badge",{attrs:{status:"default",text:"异常"}}):t._e(),t._v(" "),e.value>0?i("Badge",{attrs:{status:"error",text:e.value+"分"}}):t._e(),t._v(" "),0==e.value?i("Badge",{attrs:{status:"success",text:e.value+"分"}}):t._e()]:t._e()],2)])})],2)}))],1)])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("生成报告将消耗 "),e("span",[this._v("1")]),this._v("个秘钥")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"small"},[this._v("提示:等级越高风险越大"),e("b")])}]};var n=i("VU/8")(a,s,!1,function(t){i("nhP2")},"data-v-9fb034d4",null);e.a=n.exports},VrLL:function(t,e,i){"use strict";var a=i("9Xvl");const s="\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",n=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];let l,o={};function r(t,e=null,i=null,a=!1){l||(l=document.createElement("textarea"),document.body.appendChild(l)),t.getAttribute("wrap")?l.setAttribute("wrap",t.getAttribute("wrap")):l.removeAttribute("wrap");let{paddingSize:r,borderSize:c,boxSizing:u,sizingStyle:d}=function(t,e=!1){const i=t.getAttribute("id")||t.getAttribute("data-reactid")||t.getAttribute("name");if(e&&o[i])return o[i];const a=window.getComputedStyle(t),s=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),l=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),r=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),c={sizingStyle:n.map(t=>`${t}:${a.getPropertyValue(t)}`).join(";"),paddingSize:l,borderSize:r,boxSizing:s};return e&&i&&(o[i]=c),c}(t,a);l.setAttribute("style",`${d};${s}`),l.value=t.value||t.placeholder||"";let p,h=Number.MIN_SAFE_INTEGER,v=Number.MAX_SAFE_INTEGER,f=l.scrollHeight;if("border-box"===u?f+=c:"content-box"===u&&(f-=r),null!==e||null!==i){l.value=" ";let t=l.scrollHeight-r;null!==e&&(h=t*e,"border-box"===u&&(h=h+r+c),f=Math.max(h,f)),null!==i&&(v=t*i,"border-box"===u&&(v=v+r+c),p=f>v?"":"hidden",f=Math.min(v,f))}return i||(p="hidden"),{height:`${f}px`,minHeight:`${h}px`,maxHeight:`${v}px`,overflowY:p}}const c="ivu-input";var u={name:"Input",mixins:[{methods:{dispatch(t,e,i){let a=this.$parent||this.$root,s=a.$options.name;for(;a&&(!s||s!==t);)(a=a.$parent)&&(s=a.$options.name);a&&a.$emit.apply(a,[e].concat(i))},broadcast(t,e,i){(function t(e,i,a){this.$children.forEach(s=>{s.$options.name===e?s.$emit.apply(s,[i].concat(a)):t.apply(s,[e,i].concat([a]))})}).call(this,t,e,i)}}}],props:{type:{validator:t=>Object(a.b)(t,["text","textarea","password","url","email","date"]),default:"text"},value:{type:[String,Number],default:""},size:{validator:t=>Object(a.b)(t,["small","large","default"]),default(){return this.$IVIEW&&""!==this.$IVIEW.size?this.$IVIEW.size:"default"}},placeholder:{type:String,default:""},maxlength:{type:Number},disabled:{type:Boolean,default:!1},icon:String,autosize:{type:[Boolean,Object],default:!1},rows:{type:Number,default:2},readonly:{type:Boolean,default:!1},name:{type:String},number:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},spellcheck:{type:Boolean,default:!1},autocomplete:{validator:t=>Object(a.b)(t,["on","off"]),default:"off"},clearable:{type:Boolean,default:!1},elementId:{type:String},wrap:{validator:t=>Object(a.b)(t,["hard","soft"]),default:"soft"},prefix:{type:String,default:""},suffix:{type:String,default:""},search:{type:Boolean,default:!1},enterButton:{type:[Boolean,String],default:!1}},data(){return{currentValue:this.value,prefixCls:c,prepend:!0,append:!0,slotReady:!1,textareaStyles:{},showPrefix:!1,showSuffix:!1}},computed:{wrapClasses(){return["ivu-input-wrapper",{[`ivu-input-wrapper-${this.size}`]:!!this.size,"ivu-input-type":this.type,"ivu-input-group":this.prepend||this.append||this.search&&this.enterButton,[`ivu-input-group-${this.size}`]:(this.prepend||this.append||this.search&&this.enterButton)&&!!this.size,"ivu-input-group-with-prepend":this.prepend,"ivu-input-group-with-append":this.append||this.search&&this.enterButton,"ivu-input-hide-icon":this.append,"ivu-input-with-search":this.search&&this.enterButton}]},inputClasses(){return["ivu-input",{[`ivu-input-${this.size}`]:!!this.size,"ivu-input-disabled":this.disabled,"ivu-input-with-prefix":this.showPrefix,"ivu-input-with-suffix":this.showSuffix||this.search&&!1===this.enterButton}]},textareaClasses(){return["ivu-input",{"ivu-input-disabled":this.disabled}]}},methods:{handleEnter(t){this.$emit("on-enter",t),this.search&&this.$emit("on-search",this.currentValue)},handleKeydown(t){this.$emit("on-keydown",t)},handleKeypress(t){this.$emit("on-keypress",t)},handleKeyup(t){this.$emit("on-keyup",t)},handleIconClick(t){this.$emit("on-click",t)},handleFocus(t){this.$emit("on-focus",t)},handleBlur(t){this.$emit("on-blur",t),Object(a.a)(this,["DatePicker","TimePicker","Cascader","Search"])||this.dispatch("FormItem","on-form-blur",this.currentValue)},handleInput(t){let e=t.target.value;this.number&&""!==e&&(e=Number.isNaN(Number(e))?e:Number(e)),this.$emit("input",e),this.setCurrentValue(e),this.$emit("on-change",t)},handleChange(t){this.$emit("on-input-change",t)},setCurrentValue(t){t!==this.currentValue&&(this.$nextTick(()=>{this.resizeTextarea()}),this.currentValue=t,Object(a.a)(this,["DatePicker","TimePicker","Cascader","Search"])||this.dispatch("FormItem","on-form-change",t))},resizeTextarea(){const t=this.autosize;if(!t||"textarea"!==this.type)return!1;const e=t.minRows,i=t.maxRows;this.textareaStyles=r(this.$refs.textarea,e,i)},focus(){"textarea"===this.type?this.$refs.textarea.focus():this.$refs.input.focus()},blur(){"textarea"===this.type?this.$refs.textarea.blur():this.$refs.input.blur()},handleClear(){this.$emit("input",""),this.setCurrentValue(""),this.$emit("on-change",{target:{value:""}})},handleSearch(){if(this.disabled)return!1;this.$refs.input.focus(),this.$emit("on-search",this.currentValue)}},watch:{value(t){this.setCurrentValue(t)}},mounted(){"textarea"!==this.type?(this.prepend=void 0!==this.$slots.prepend,this.append=void 0!==this.$slots.append,this.showPrefix=""!==this.prefix||void 0!==this.$slots.prefix,this.showSuffix=""!==this.suffix||void 0!==this.$slots.suffix):(this.prepend=!1,this.append=!1),this.slotReady=!0,this.resizeTextarea()}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.wrapClasses},["textarea"!==t.type?[t.prepend?i("div",{directives:[{name:"show",rawName:"v-show",value:t.slotReady,expression:"slotReady"}],class:[t.prefixCls+"-group-prepend"]},[t._t("prepend")],2):t._e(),t._v(" "),t.clearable&&t.currentValue?i("i",{staticClass:"ivu-icon",class:["ivu-icon-ios-close-circle",t.prefixCls+"-icon",t.prefixCls+"-icon-clear",t.prefixCls+"-icon-normal"],on:{click:t.handleClear}}):t.icon?i("i",{staticClass:"ivu-icon",class:["ivu-icon-"+t.icon,t.prefixCls+"-icon",t.prefixCls+"-icon-normal"],on:{click:t.handleIconClick}}):t.search&&!1===t.enterButton?i("i",{staticClass:"ivu-icon ivu-icon-ios-search",class:[t.prefixCls+"-icon",t.prefixCls+"-icon-normal",t.prefixCls+"-search-icon"],on:{click:t.handleSearch}}):t.showSuffix?i("span",{staticClass:"ivu-input-suffix"},[t._t("suffix",[t.suffix?i("i",{staticClass:"ivu-icon",class:["ivu-icon-"+t.suffix]}):t._e()])],2):t._e(),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.icon?t._e():i("i",{staticClass:"ivu-icon ivu-icon-ios-loading ivu-load-loop",class:[t.prefixCls+"-icon",t.prefixCls+"-icon-validate"]})]),t._v(" "),i("input",{ref:"input",class:t.inputClasses,attrs:{id:t.elementId,autocomplete:t.autocomplete,spellcheck:t.spellcheck,type:t.type,placeholder:t.placeholder,disabled:t.disabled,maxlength:t.maxlength,readonly:t.readonly,name:t.name,number:t.number,autofocus:t.autofocus},domProps:{value:t.currentValue},on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleEnter(e):null},t.handleKeyup],keypress:t.handleKeypress,keydown:t.handleKeydown,focus:t.handleFocus,blur:t.handleBlur,input:t.handleInput,change:t.handleChange}}),t._v(" "),t.append?i("div",{directives:[{name:"show",rawName:"v-show",value:t.slotReady,expression:"slotReady"}],class:[t.prefixCls+"-group-append"]},[t._t("append")],2):t.search&&t.enterButton?i("div",{class:[t.prefixCls+"-group-append",t.prefixCls+"-search"],on:{click:t.handleSearch}},[!0===t.enterButton?i("i",{staticClass:"ivu-icon ivu-icon-ios-search"}):[t._v(t._s(t.enterButton))]],2):t.showPrefix?i("span",{staticClass:"ivu-input-prefix"},[t._t("prefix",[t.prefix?i("i",{staticClass:"ivu-icon",class:["ivu-icon-"+t.prefix]}):t._e()])],2):t._e()]:i("textarea",{ref:"textarea",class:t.textareaClasses,style:t.textareaStyles,attrs:{id:t.elementId,wrap:t.wrap,autocomplete:t.autocomplete,spellcheck:t.spellcheck,placeholder:t.placeholder,disabled:t.disabled,rows:t.rows,maxlength:t.maxlength,readonly:t.readonly,name:t.name,autofocus:t.autofocus},domProps:{value:t.currentValue},on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleEnter(e):null},t.handleKeyup],keypress:t.handleKeypress,keydown:t.handleKeydown,focus:t.handleFocus,blur:t.handleBlur,input:t.handleInput}})],2)},staticRenderFns:[]},p=i("VU/8")(u,d,!1,null,null,null);e.a=p.exports},afWL:function(t,e,i){"use strict";var a={name:"send-report",data:()=>({message:null,name:null,sendcrm:!1,cids:3,sendurl:"",nf:"",social:{},companyInfo:{},checkcontact:[]}),mounted(){this.getdetail()},methods:{sendbb(){console.log(this.checkcontact.join(","));this.cids;this.$http.post("financial/userService/sendReportSms",{subData:{userIds:this.checkcontact.join(","),reportId:this.bbid,nf:this.nf,showUrl:this.sendurl}}).then(t=>{1==t.data.code?(this.$el.parentNode.removeChild(this.$el),this.$Message.success(t.data.msg)):this.$Message.error(t.data.msg)})},getdetail(){this.$http.post("financial/companyService/infoCompany",{subData:this.cids}).then(t=>{this.companyInfo=t.data.data})},cancle(){this.$el.parentNode.removeChild(this.$el)},ok(){this.$el.parentNode.removeChild(this.$el),"function"==typeof this.onOk&&this.onOk(this)}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"ivu-modal-mask"}),t._v(" "),i("div",{staticClass:"ivu-modal-wrap"},[i("div",{staticClass:"ivu-modal",staticStyle:{width:"520px"}},[i("div",{staticClass:"ivu-modal-content"},[i("a",{staticClass:"ivu-modal-close"},[i("i",{staticClass:"ivu-icon ivu-icon-ios-close",staticStyle:{"font-size":"30px",color:"#666"},on:{click:t.close}})]),t._v(" "),i("div",{staticClass:"ivu-modal-header"},[i("div",{staticClass:"ivu-modal-header-inner"},[i("Icon",{attrs:{color:"#08F",type:"md-mail"}}),t._v("发送报告")],1)]),t._v(" "),i("div",{staticClass:"ivu-modal-body"},[i("div",{staticClass:"msgtips"},[t._v("将"),i("span",{staticStyle:{color:"#08F"}},[t._v(t._s(t.companyInfo.company_name))]),t._v("的评估报告发送给")]),t._v(" "),i("div",{staticClass:"ckbx"},[i("CheckboxGroup",{model:{value:t.checkcontact,callback:function(e){t.checkcontact=e},expression:"checkcontact"}},t._l(t.companyInfo.contactList,function(e,a){return i("Checkbox",{key:a,attrs:{label:e.id}},[i("span",[t._v(t._s(e.contact_name)+" "+t._s(e.contact_phone))])])}))],1),t._v(" "),i("div",{staticClass:"confirms"},[i("br"),t._v(" "),i("Button",{attrs:{type:"primary",disabled:0==t.checkcontact.length,size:"large"},on:{click:function(e){t.sendbb()}}},[t._v("确定发送")])],1)])])])])])},staticRenderFns:[]};var n=i("VU/8")(a,s,!1,function(t){i("/RKR")},"data-v-9bde717c",null);e.a=n.exports},gMJu:function(t,e,i){"use strict";var a={name:"Icon",props:{type:{type:String,default:""},size:[Number,String],color:String,custom:{type:String,default:""}},computed:{classes(){return["ivu-icon",{[`ivu-icon-${this.type}`]:""!==this.type,[`${this.custom}`]:""!==this.custom}]},styles(){let t={};return this.size&&(t["font-size"]=`${this.size}px`),this.color&&(t.color=this.color),t}},methods:{handleClick(t){this.$emit("click",t)}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("i",{class:this.classes,style:this.styles,on:{click:this.handleClick}})},staticRenderFns:[]},n=i("VU/8")(a,s,!1,null,null,null).exports,l=i("9Xvl");var o={name:"Button",mixins:[{props:{to:{type:[Object,String]},replace:{type:Boolean,default:!1},target:{type:String,validator:t=>Object(l.b)(t,["_blank","_self","_parent","_top"]),default:"_self"}},computed:{linkUrl(){return"string"===typeof this.to?this.to:null}},methods:{handleClick(t=!1){if(t)window.open(this.to);else{this.$router?this.replace?this.$router.replace(this.to):this.$router.push(this.to):window.location.href=this.to}},handleCheckClick(t,e=!1){if(this.to){if("_blank"===this.target)return!1;t.preventDefault(),this.handleClick(e)}}}}],components:{Icon:n},props:{type:{validator:t=>Object(l.b)(t,["default","primary","dashed","text","info","success","warning","error"]),default:"default"},shape:{validator:t=>Object(l.b)(t,["circle","circle-outline"])},size:{validator:t=>Object(l.b)(t,["small","large","default"]),default(){return this.$IVIEW&&""!==this.$IVIEW.size?this.$IVIEW.size:"default"}},loading:Boolean,disabled:Boolean,htmlType:{default:"button",validator:t=>Object(l.b)(t,["button","submit","reset"])},icon:{type:String,default:""},customIcon:{type:String,default:""},long:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1}},data:()=>({showSlot:!0}),computed:{classes(){return["ivu-btn",`ivu-btn-${this.type}`,{"ivu-btn-long":this.long,[`ivu-btn-${this.shape}`]:!!this.shape,[`ivu-btn-${this.size}`]:"default"!==this.size,"ivu-btn-loading":null!=this.loading&&this.loading,"ivu-btn-icon-only":!this.showSlot&&(!!this.icon||!!this.customIcon||this.loading),"ivu-btn-ghost":this.ghost}]}},methods:{handleClickLink(t,e=!1){this.$emit("click",t),this.handleCheckClick(t,e)}},mounted(){this.showSlot=void 0!==this.$slots.default}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.to?i("a",{class:t.classes,attrs:{disabled:t.disabled,href:t.linkUrl,target:t.target},on:{click:[function(e){if(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return null;t.handleClickLink(e,!1)},function(e){if(!e.ctrlKey)return null;t.handleClickLink(e,!0)},function(e){if(!e.metaKey)return null;t.handleClickLink(e,!0)}]}},[t.loading?i("Icon",{staticClass:"ivu-load-loop",attrs:{type:"ios-loading"}}):t._e(),t._v(" "),!t.icon&&!t.customIcon||t.loading?t._e():i("Icon",{attrs:{type:t.icon,custom:t.customIcon}}),t._v(" "),t.showSlot?i("span",{ref:"slot"},[t._t("default")],2):t._e()],1):i("button",{class:t.classes,attrs:{type:t.htmlType,disabled:t.disabled},on:{click:t.handleClickLink}},[t.loading?i("Icon",{staticClass:"ivu-load-loop",attrs:{type:"ios-loading"}}):t._e(),t._v(" "),!t.icon&&!t.customIcon||t.loading?t._e():i("Icon",{attrs:{type:t.icon,custom:t.customIcon}}),t._v(" "),t.showSlot?i("span",{ref:"slot"},[t._t("default")],2):t._e()],1)},staticRenderFns:[]},c=i("VU/8")(o,r,!1,null,null,null);e.a=c.exports},nhP2:function(t,e){},vp4Q:function(t,e,i){"use strict";var a={data:()=>({name:null,optbtn:!1,message:null,mtinfo:{},mid:""}),mounted(){this.getmeetinfo()},methods:{getmeetinfo(){this.$http.get("affair/find?id="+this.mid).then(t=>{this.mtinfo=t.data.data.data})},cancle(){this.$el.parentNode.removeChild(this.$el)},ok(){"function"==typeof this.onOk&&(this.onOk(this),this.$el.parentNode.removeChild(this.$el))}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"ivu-modal-mask"}),t._v(" "),i("div",{staticClass:"ivu-modal-wrap"},[i("div",{staticClass:"ivu-modal",staticStyle:{width:"700px"}},[i("div",{staticClass:"ivu-modal-content"},[i("a",{staticClass:"ivu-modal-close"},[i("i",{staticClass:"ivu-icon ivu-icon-ios-close",on:{click:t.close}})]),t._v(" "),i("div",{staticClass:"ivu-modal-header"},[i("div",{staticClass:"ivu-modal-header-inner"},[t._v("会议详情【"+t._s(t.mtinfo.info.id)+"】")])]),t._v(" "),i("div",{staticClass:"ivu-modal-body"},[i("Row",{staticClass:"meetinfo"},[i("Col",{attrs:{span:"24"}},[i("b",[t._v("会议标题：")]),t._v(t._s(t.mtinfo.info.title))]),t._v(" "),i("Col",{attrs:{span:"24"}},[i("h5",[t._v("会议地点："+t._s(t.mtinfo.info.adr_name))]),i("p",[t._v(t._s(t.mtinfo.info.address))])]),t._v(" "),i("Col",{attrs:{span:"8"}},[i("b",[t._v("活动时间：")]),t._v(t._s(t.mtinfo.info.active_time))]),t._v(" "),i("Col",{attrs:{span:"8"}},[i("b",[t._v("保证金：")]),t._v(t._s(t.mtinfo.info.promise_money))]),t._v(" "),i("Col",{attrs:{span:"8"}},[i("b",[t._v("参与人数：")]),t._v(t._s(t.mtinfo.info.quota)+"人")]),t._v(" "),i("Col",{attrs:{span:"8"}},[i("b",[t._v("关门时间：")]),t._v(t._s(t.mtinfo.info.close_time))]),t._v(" "),i("Col",{attrs:{span:"8"}},[i("b",[t._v("保证金总额：")]),t._v("2012-12-12 10:28")])],1),t._v(" "),i("div",{staticClass:"joinmeetTitle"},[t._v("参会人员")]),t._v(" "),i("Row",{staticClass:"meetinfo"},[i("div",{staticClass:"iqds",staticStyle:{background:"#F8F8F8"}},[i("Col",{attrs:{span:"4"}},[t._v("姓名")]),t._v(" "),i("Col",{attrs:{span:"4"}},[t._v("电话")]),t._v(" "),i("Col",{attrs:{span:"4"}},[t._v("保证金")]),t._v(" "),i("Col",{attrs:{span:"6"}},[t._v("签到状态")]),t._v(" "),i("Col",{attrs:{span:"6"}},[t._v("红包状态")]),t._v(" "),i("div",{staticStyle:{display:"block",clear:"both"}})],1),t._v(" "),t._l(t.mtinfo.list,function(e){return i("div",{staticClass:"iqds"},[i("Col",{attrs:{span:"4"}},[t._v(t._s(e.name))]),t._v(" "),i("Col",{attrs:{span:"4"}},[t._v(t._s(e.mobile))]),t._v(" "),i("Col",{attrs:{span:"4"}},[t._v(t._s(e.order_money)),i("label",{directives:[{name:"show",rawName:"v-show",value:1==e.pay_type,expression:"p.pay_type == 1"}]},[t._v("已支付")]),i("label",{directives:[{name:"show",rawName:"v-show",value:1!=e.pay_type,expression:"p.pay_type != 1"}],staticStyle:{color:"red"}},[t._v("未支付")])]),t._v(" "),i("Col",{attrs:{span:"6"}},[i("label",{directives:[{name:"show",rawName:"v-show",value:2==e.status,expression:"p.status == 2"}]},[t._v("已签到")]),i("label",{directives:[{name:"show",rawName:"v-show",value:2!=e.status,expression:"p.status != 2"}]},[t._v("未签到/迟到")])]),t._v(" "),i("Col",{attrs:{span:"6"}},[i("label",{directives:[{name:"show",rawName:"v-show",value:1==e.hb_type,expression:"p.hb_type == 1"}]},[t._v("已领取")]),i("label",{directives:[{name:"show",rawName:"v-show",value:1!=e.hb_type,expression:"p.hb_type != 1"}]},[t._v("未领取")]),t._v(" "+t._s(e.red_money))]),t._v(" "),i("div",{staticStyle:{display:"block",clear:"both"}})],1)})],2)],1),t._v(" "),t.optbtn?i("div",{staticClass:"ivu-modal-footer",staticStyle:{"text-align":"center"}},[t._m(0),t._v(" "),t._m(1)]):t._e()])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"ivu-btn ivu-btn-primary ivu-btn-large",attrs:{type:"button"}},[e("span",[this._v("审批通过")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"ivu-btn ivu-btn-error ivu-btn-large",attrs:{type:"button"}},[e("span",[this._v("驳回")])])}]};var n=i("VU/8")(a,s,!1,function(t){i("CaWR")},"data-v-99f3c792",null);e.a=n.exports}});