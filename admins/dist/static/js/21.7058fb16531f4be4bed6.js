webpackJsonp([21],{"5ztq":function(s,t){},"I+KT":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={components:{Input:e("VrLL").a},data:()=>({userinfo:{},npass:"",passform:{newpass:"",confirmpass:""},passRule:{newpass:[{required:!0,trigger:"blur"}],confirmpass:[{required:!0,trigger:"blur"}]}}),mounted(){let s=this;this.passRule.newpass[0].validator=function(t,e,a){if(!e.trim())return a(new Error("请输入新密码"));s.npass=e,a()},this.passRule.confirmpass[0].validator=function(t,e,a){return e.trim()?s.npass!=e?a(new Error("两次密码输入不一致")):void a():a(new Error("请输入新密码"))},this.getuser()},methods:{getuser(){this.$http.post("user/find").then(s=>{this.userinfo=s.data.data})},passSubmit(){this.$refs.passVal.validate(s=>{s?this.$http.post("user/upPwd",{newpwd:this.passform.newpass}).then(s=>{200!=s.data.status?this.$Message.error(s.data.info):this.$Message.success(s.data.info)}):this.$Message.error("提交失败，请查看原因!")})}}},r={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("Row",{staticStyle:{"border-bottom":"2px solid #EEE","padding-bottom":"10px"}},[e("Col",{attrs:{span:"18"}},[e("div",{staticClass:"cpageTitle"},[e("Icon",{attrs:{size:"20",type:"md-lock"}}),e("span",[s._v("修改密码")])],1)]),s._v(" "),e("Col",{staticStyle:{"text-align":"right"},attrs:{span:"6"}})],1),s._v(" "),e("div",{staticClass:"epsd"},[e("Form",{ref:"passVal",attrs:{model:s.passform,rules:s.passRule,"label-width":80}},[e("FormItem",{attrs:{label:"登录名"}},[e("div",{staticStyle:{"text-align":"left"}},[s._v(s._s(s.userinfo.username))])]),s._v(" "),e("FormItem",{attrs:{label:"密码",prop:"newpass"}},[e("Input",{attrs:{type:"password"},model:{value:s.passform.newpass,callback:function(t){s.$set(s.passform,"newpass",t)},expression:"passform.newpass"}})],1),s._v(" "),e("FormItem",{attrs:{prop:"confirmpass",label:"再次确认"}},[e("Input",{attrs:{type:"password"},model:{value:s.passform.confirmpass,callback:function(t){s.$set(s.passform,"confirmpass",t)},expression:"passform.confirmpass"}})],1),s._v(" "),e("FormItem",{attrs:{label:""}},[e("Button",{attrs:{type:"primary",size:"large"},nativeOn:{click:function(t){return s.passSubmit(t)}}},[s._v("保存")])],1)],1)],1)],1)},staticRenderFns:[]};var n=e("VU/8")(a,r,!1,function(s){e("5ztq")},"data-v-31353b20",null);t.default=n.exports}});