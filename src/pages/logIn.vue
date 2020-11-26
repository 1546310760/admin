<template>
  <div class="login_main">
    <div class="login_top">
      <!--logo-->
      <div class="auto clearfix">
        <!-- <img src="../assets/images/logo-1.png" alt="" class="smlogo" /> -->
      </div>
    </div>
    <div class="login_formwrap">
      <div class="font">OAKBOSS物联网平台</div>

      <div class="login_menu tabmenu">
        <li class="lk cur" @click="clear">密码登录</li>
        <li class="lk" @click="clear">验证码登录</li>
        <li class="lk" @click="clear">扫码登录</li>
      </div>
      <div v-if="numberMsg.errmsg" class="text">
        <img v-if="numberMsg.errmsg" src="../assets/images/gan.png" />
        <img v-else />
        {{ numberMsg.errmsg }}
      </div>
      <div v-else></div>

      <div class="wrap tabwrap">
        <div class="module">
          <div class="login_form">
            <li class="item">
              <input
                type="text"
                class="ipt ipt_txt ipt_user"
                v-model="num"
                auto-complete="off"
                prop="mobile"
                placeholder="请输入您的账号"
              />
            </li>
            <li class="item">
              <input
                type="password"
                class="ipt ipt_txt ipt_psd"
                v-model="password"
                auto-complete="off"
                prop="mobile"
                placeholder="请输入您的密码"
              />
            </li>
            <li class="item clearfix">
              <span class="typeFont">用户类型</span>
              <el-select
                v-model="value"
                id="sources"
                class="custom-select sources"
                placeholder="管理员"
              >
                <el-option value="管理员"></el-option>
                <el-option value="运营商"></el-option>
              </el-select>
            </li>
            <div class="bot">
              <input
                type="checkbox"
                name="vehicle"
                value="Car"
                v-model="checked"
              />记住密码
              <span><a href="#" class="c_green">忘记密码？</a></span>
            </div>
            <input
              @click="number"
              type="submit"
              v-model="login"
              class="ipt submit"
            />
          </div>
        </div>
        <div class="module" style="display: none">
          <div class="login_form">
            <li class="item">
              <input
                type="text"
                class="ipt ipt_txt shouji"
                v-model="num2"
                placeholder="请输入您的手机号"
              />
            </li>
            <li class="item fi">
              <input
                type="text"
                class="ipt ipt_txt yanzheng"
                v-model="cod"
                placeholder="请您输入验证码"
              />
              <button class="huoqu" @click="sendcode" :disabled="disabled">
                {{ btntxt }}
              </button>
              <!-- <div></div> -->
            </li>
            <input
              @click="phone"
              v-model="login"
              type="submit"
              value="登录"
              class="ipt submit"
            />
          </div>
        </div>
        <div class="module login_ewm" style="display: none">
          <div class="left">
            <div class="wx"><span style="color: #2eb982">微信</span>登录</div>
            <img src="../assets/images/img_30.jpg" alt="" class="pic" />
            <p class="fz">请使用微信扫描登录</p>
          </div>
          <div class="float">
            <div class="wx"><span style="color: #4d80fc">支付宝</span>登录</div>
            <img src="../assets/images/img_30.jpg" alt="" class="pic" />
            <p class="fz">请使用支付宝扫描登录</p>
          </div>
        </div>
      </div>
    </div>
    <div class="login_bot">版权信息</div>
  </div>
</template>

<script>
// import CryptoJS from 'crypto-js' //加密js
import md5 from "js-md5";
import axios from "axios";
import $ from "jquery";
import "../assets/layui/layui";
import "../assets/js/common";
let Base64 = require("js-base64").Base64;
export default {
  data() {
    return {
      login: "登录",
      cod: "",
      a: 2,
      num: "",
      password: "",
      num2: "",
      pass: "",
      numberMsg: "",
      disabled: false,
      time: 5,
      btntxt: "发送验证码",
      phoneMsg: [],
      value: "管理员",
      checked: true,
    };
  },
  methods: {
    clear: function () {
      if (this.numberMsg.errmsg) {
        this.numberMsg.errmsg = "";
      } else {
        return;
      }
    },
    sendcode: function () {
      if (this.numberMsg.errmsg) {
        this.numberMsg.errmsg = "";
      } else {
        this.timer();
      }
      this.time = 60;
      this.timer();
      axios
        .post("/api/captcha", {
          type: 1,
          telephone: this.num2,
        })
        .then((res) => {
          console.log(res);
        });
    },
    timer() {
      //倒计时
      if (this.time > 0) {
        this.disabled = true;
        this.time--;
        this.btntxt = this.time + "秒";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "发送验证码";
        this.disabled = false;
      }
    },

    number: function () {
      this.login = "登录中...";
      let password = md5(this.password);
      axios
        .post("/admin/api/token", {
          username: this.num,
          password: password,
        })
        .then((res) => {
          this.login = "登录";
          console.log(res.data);
          this.numberMsg = res.data;
          if (res.data.error == 0) {
            if (this.checked == true) {
              this.checked == true
              console.log(this.checked);
              window.document.cookie = "userName" + "=" + this.num;
              console.log(document.cookie);

              window.document.cookie = "pas" + "=" + this.password;
            } else {
              this.checked == false
              console.log(this.checked);

              window.document.cookie="userName" + "=" + '';
              window.document.cookie="pas" + "=" + '';
              console.log(window.document.cookie);

            }
            localStorage.setItem("token", JSON.stringify(this.numberMsg.token));
            localStorage.setItem("admin", JSON.stringify(this.numberMsg.admin));
            this.$router.push({ path: "/summary" });
            return;
          } else {
          }
        });
    },

    getCookie() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split(";");
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("=");
          console.log(arr2);
          if (arr2[0].includes("userName")) {
            this.num = arr2[1];
            console.log(arr2[1]);
          } else if (arr2[0].includes("")) {
            this.password = arr2[1];
            console.log(this.password);
          }
        }
      }
    },

    phone: function () {
      this.login = "登录中...";
      console.log(this.num2, this.pass);
      axios
        .post("/admin/api/token", {
          telephone: this.num2,
          code: this.cod,
        })
        .then((res) => {
          this.login = "登录";
          console.log(res);
          this.numberMsg = res.data;
          if (res.data.error == 0) {
            this.$router.push({ path: "/summary" });
            return;
          } else {
          }
        });
    },
  },
  mounted() {
    this.getCookie();
  },
};
</script>

<style>
@import url("../assets/css/style.css");
.font {
  width: 293px;
  height: 28px;
  font-size: 30px;
  font-family: "PingFang SC";
  font-weight: 400;
  color: #000000;
  margin: 0 auto;
  line-height: 83px;
}
.typeFont {
  font-size: 16px;
  color: #999999;
  font-family: "microsoft yahei";
  padding-right: 14px;
}
input::-webkit-input-placeholder {
  color: #999999;
}
#sources {
  color: #999999;
  height: 50px;
  width: 265px;
  border: none;
  background-color: #f1f2f7;
  border-radius: 30px;
  padding-left: 20px;
}
.clearfix {
  margin: 0 auto;
  text-align: center;
}
select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: url("../assets/images/sanjiao.png") no-repeat scroll right center
    transparent;
  background-size: 60px 60px;
}
option {
  font-size: 16px;
  background-color: #f1f2f7;
  outline: 0;
  border: none;
  color: black;
  height: 300px;
}
.wx {
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
}
.left {
  margin-left: 45px;
  float: left;
}
.float {
  float: right;
  margin-right: 45px;
}
.fz {
  font-size: 48px;
}
.huoqu {
  font-size: 17px;
  border-radius: 40px;
  width: 122px;
  height: 50px;
  float: right;
  border: none;
  cursor: pointer;
  background-color: #3b89fa;
  color: white;
  margin-right: 56px;
  text-align: center;
}
.shouji {
  background-image: url(../assets/images/shouji.png);
  border-radius: 30px;
  background-size: 15px 24px !important;
}
.yanzheng {
  background-image: url(../assets/images/yanzheng.png);
  border-radius: 30px;
  background-size: 15px 24px !important;
  width: 214px !important;
  margin-left: 55px !important;
}

.fi {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text {
  font-size: 14px;
  font-family: "PingFang SC";
  font-weight: 400;
  color: #000000;
  width: 351px;
  border: 2px #ff0000 solid;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #fef2f2;
  border-radius: 5px;
  padding-left: 30px;
  letter-spacing: 1px;
}
.text img {
  padding-right: 5px;
}
</style>