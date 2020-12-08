<template>
  <div>
    <div class="users-right">
      <div class="users-right-w">
        <div>
          <img src="../assets/images/help.png" />
        </div>
        <div>
          <img src="../assets/images/set up.png" />
        </div>

        <div class="user-img">
          <img
            @click="change"
            style="max-width: 200%"
            src="../assets/images/bgm.png"
          />
        </div>
        <div>
          <span>{{ msg.username }}</span>
        </div>
      </div>
    </div>
    <div  v-if="falg">
      <div class="hei"></div>
      <div class="aside">
        <div class="head">
          <span>账号</span>
          <span>产品</span>
          <img @click="change" class="img1" src="../assets/images/cancel.png" />
        </div>
        <div class="zhanghu">
          <span>我的账户</span>
          <router-link to="/centre">
            <span style="color: #1e69fe">个人中心</span>
          </router-link>
        </div>
        <div class="touxian">
          <img src="../assets/images/timgr.png" alt="" />
          <div class="nicheng">
            <span
              >昵称：<span>{{ msg.fullname }}</span></span
            >
            <div>个人实名认证</div>
          </div>
        </div>
        <div class="cont">
          <div class="one">
            <div>账号：</div>
            <span>{{ msg.username }}</span>
          </div>
          <div class="one">
            <div>手机号：</div>
            <span>{{ msg.telephone }}</span>
          </div>
          <div class="one">
            <div>余额：</div>
            <span
              >￥<span>{{ msg.creator }}</span></span
            >
            <span class="chong">充值</span>
          </div>
          <!-- <div class="one">
          <div>收入：</div>
          <span>￥<span>0</span></span> <span class="chong">提现</span
          ><span style="color: #ff6000; margin-left: 10%">收入明细</span>
        </div> -->
        </div>
        <div class="foot">退出登录</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      falg: false,
      token: JSON.parse(localStorage.getItem("token")),
      msg: [],
    };
  },
  mounted() {
    this.send();
  },
  methods: {
    change() {
      this.falg = !this.falg;
    },
    send() {
      axios
        .get(`admin/api/profile/`, {
          params: {
            token: this.token,
          },
        })
        .then((res) => {
          this.msg = res.data.admin;
          // console.log(res);
        });
    },
  },
};
</script>
<style scoped>
.hei {
  position:fixed;
  top: 0px;
  right: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
  z-index: 111;
}
.head span:nth-child(1) {
  color: #ffffff !important;
}
.foot {
  position: absolute;
  bottom: 66px;
  left: 27%;
  width: 134px;
  height: 53px;
  background: #d2d2d2;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  line-height: 55px;
}
.chong {
  display: inline-block;
  width: 51px;
  height: 24px;
  text-align: center;
  border: 1px solid #1e69fe;
  border-radius: 9px;
  line-height: 22px;
}
.one {
  margin: 3% 0 3% 3%;
}
.one > span {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #1e69fe;
  margin-right: 5%;
}
.one > div {
  width: 90px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 300;
  color: #000000;
  float: left;
  line-height: 28px;
}
.nicheng div {
  width: 100px;
  position: relative;
  bottom: -11px;
  left: 1%;
  padding: 1%;
  background: #e9f6ed;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 300;
  color: #49b51a;
  line-height: 28px;
  margin-top: 5%;
}
.sear-img {
  width: 15px;
  height: 15px;
  border-radius:100%
}
.nicheng span {
  display: inline-block;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 28px;
}
.nicheng {
  display: inline-block;
}
.zhanghu span:nth-child(1) {
  margin: 2% 30% 5% 3%;
  display: inline-block;
  width: 81px;
  height: 20px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 28px;
}
.head span {
  display: inline-block;
  margin: 5% 3% 3% 11%;
  width: 58px;
  height: 19px;
  font-size: 20px;
  font-family: "PingFang SC";
  font-weight: 400;
  color: #b9b9b9;
  line-height: 28px;
  cursor: pointer;
}
.head {
  width: 100%;
  height: 83px;
  background: #1e69fe;
  /* text-align: center; */
  border-radius: 20px 0px 0px 0px;
}
.img1 {
  width: 19px;
  height: 19px;
  margin: -1% 0 0 15%;
}
.aside {
  position: fixed;
  right: -10%;
  top: 0;
  width: 35%;
  height: 100%;
  background: white;
  z-index: 999;
  border-radius: 20px 0px 0px 20px;
  background: white;
}
.users-right-w {
  position: fixed;

  top: 43px;
  right: 78px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
  justify-content: space-between;
  float: right;
}

.users-right {
  width: 50%;
}
</style>