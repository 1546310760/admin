<template>
  <div class="tou">
    <div class="zhong">个人中心</div>
    <myhead></myhead>

    <div class="user">
      <div class="user_dian">
        <div class="yuan"></div>
        <span>安全设置</span>
      </div>
      <div>
        <div class="tup">
          <img src="../../assets/images/timgr.png" alt="" />
          <div class="touxiang">修改头像</div>
        </div>
        <div class="zi">
          <div>
            <span
              >登录账号：<span style="margin-left: 4px" class="duiqi">{{
                msg.username
              }}</span
              >（<span style="color: #ffae00">未认证</span>,<span
                style="color: #1e69fe; margin-left: 15px"
                >点击进行实名认证领100积分</span
              >)</span
            >
          </div>
          <div>
            <span
              >账号ID：<span class="duiqi">{{ msg.id }}</span></span
            >
          </div>
          <div>
            <span
              >注册时间<span class="duiqi"
                >{{ date }} <span>{{ time }}</span></span
              ></span
            >
          </div>
          <div>
            <span
              >当前账号安全系数<span class="xishu"></span
              ><span class="xishu_2"></span
              ><span style="margin-left: 56px"
                >安全级别：<span style="color: #ff0000; margin-right: 30px"
                  >低</span
                ><span>建议开启安全产品</span></span
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <div style="clear: both" class="user_dian settu">
      <div class="yuan"></div>
      <span>更多设置</span>
    </div>
    <div>
      <div class="font_sizi">
        <span class="ssc">登录密码</span>
        <span class="font_sizi_our">
          安全性高的密码可以使账号安全。建议您定期更换密码，设置一个包含字母、符号或数字中至少两项且长
          度超过6位的密码。
        </span>
        <div class="xiugai">修改</div>

        <div class="shezi">
          <img src="../../assets/images/duide.png" alt="" />已设置
        </div>
      </div>
      <div class="font_sizi">
        <span class="ssc">手机绑定</span>
        <span class="font_sizi_our">
          您已绑定手机<span>173****3271</span>（您的手机为安全手机，可以找回密码，但不能用于登录）
          度超过6位的密码。
        </span>
        <div class="xiugai">修改</div>

        <div class="shezi">
          <img src="../../assets/images/duide.png" alt="" />已设置
        </div>
      </div>
      <div class="font_sizi">
        <span class="ssc">备用邮箱</span>
        <span class="font_sizi_our">
          备用邮箱绑定后可用来接受OAKBOSS物联网平台的各类系统、营销、服务通知
          度超过6位的密码。
        </span>
        <div class="xiugai">修改</div>

        <div class="shezi">
          <img src="../../assets/images/gantanhao2.png" alt="" />未设置
        </div>
      </div>
      <div class="font_sizi">
        <span class="ssc">密保问题</span>
        <span class="font_sizi_our">
          建议您设置三个容易记住，且最不容易被他人获取的问题及答案，更有效保障您的密码安全
          度超过6位的密码。
        </span>
        <div class="xiugai">修改</div>

        <div class="shezi">
          <img src="../../assets/images/gantanhao2.png" alt="" />未设置
        </div>
      </div>
      <div class="font_sizi">
        <span class="ssc">注销账号</span>
        <div class="font_sizi_our">
          如果您不再使用此账号，可以将其注销。账号成功注销后，其他所以服务、数据及隐私信息将会被删除并
          将无法恢复 度超过6位的密码。
        </div>
        <div class="xiugai zhuxiao">注销账号</div>
      </div>
    </div>
  </div>
</template>



<script>
import myhead from "../myhead";
import axios from "axios";
export default {
  data() {
    return {
      option: "",
      token: JSON.parse(localStorage.getItem("token")),
      admin: JSON.parse(localStorage.getItem("admin")),
      msg: [],
      date: "",
      time: "",
    };
  },
  components: {
    myhead,
  },
  mounted() {
    this.send();
  },
  methods: {
    send() {
      const id = this.admin.id;
      console.log(id);
      axios
        .get(`admin/api/profile/`, {
          params: {
            token: this.token,
          },
        })
        .then((res) => {
          this.msg = res.data.admin;
          const da = res.data.admin.date_created;
          this.date = da.substring(0, 10);
          this.time = da.substring(11, 16);
        });
    },
  },
};
</script>

<style scoped lang='stylus'>
@import '../../assets/js/varibles.styl';

.zhuxiao {
  margin-right: 37px;
}

.font_sizi {
  width: 100%;
}

.ssc {
  display: inline-block;
  height: 19px;
  margin: 0 113px 77px 92px;
  font-size: 20px;
  font-family: 'PingFang SC';
  font-weight: 400;
  color: #000000;
  line-height: 34px;
}

.shezi img {
  padding-right: 11px;
}

.shezi {
  float: right;
  display: inline-block;
  color: #5ea627;
  width: auto;
  height: 18px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 300;
}

.xiugai {
  margin-left: 26px;
  float: right;
  /* margin-left:  27px; */
  display: inline-block;
  width: 91px;
  height: 19px;
  font-size: 20px;
  font-weight: 300;
  color: #1e69fe;
}

.el-menu {
  border-right: none !important;
}

.font_sizi_our {
  word-wrap: break-word;
  margin-top: -40px;
  width: 50%;
  height: 52px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 300;
  color: #494949;
  /* margin: 0  169px 0  114px; */
  display: inline-block;
  overflow: hidden;
  word-wrap: break-word;
}

.settu {
  margin-top: 240px !important;
}

.xishu {
  left: 22px;
  top: 5px;
  position: relative;
  z-index: 10;
  display: inline-block;
  margin-right: -20px;
  width: 67px;
  height: 21px;
  background: #ff0000;
  border-radius: 8px;
}

.xishu_2 {
  top: 5px;
  position: relative;
  display: inline-block;
  width: 250px;
  height: 21px;
  background: #e5e5e5;
  z-index: -1;
  border-radius: 8px;
}

.duiqi {
  margin-left: 20px;
}

.zi {
  height: 20px;
  font-size: 20px;
  font-family: 'PingFang SC';
  font-weight: 400;
  color: black;
  line-height: 34px;
}

.tup img {
  width: 155px;
  height: 155px;
  float: left;
  margin: 0 53px 19px 29px;
}

.user_dian > span {
  display: inline-block;
  margin: -10px 0 0 10px;
  width: auto;
  height: 19px;
  font-size: 20px;
  font-family: 'PingFang SC';
  font-weight: 600;
  color: #000000;
  /* line-height:  34px; */
}

.yuan {
  float: left;
  background: #1e69fe;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-top: 3px;
}

.user_dian {
  margin: 47px 0 50px 59px;
}

.user {
  width: 100%;
  height: auto;
}

.touxiang {
  width: 160px;
  height: 20px;
  font-size: 20px;
  font-family: 'PingFang SC';
  font-weight: 400;
  color: #1e69fe;
  line-height: 34px;
  margin-left: 65px;
}

.tou {
  width: calc(100% - 200px);
  height: 1079px;
  background: #ffffff;
  border-radius: 50px 0px 0px 50px;
  /* margin: -5px 0 0 -27px; */
  z-index: 2;
}

.zhong {
  display: inline-block;
  padding: 45px 0 0 58px;
  font-size: 24px;
  font-family: 'PingFang SC';
  font-weight: 400;
  color: #000000;
  line-height: 34px;
}

body {
  background-color: #1e69fe;
}

.el-table td {
  padding: 0 0;
}

.el-input__inner {
  height: 30px;
  border: none;
}

.tanchu {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.tanchu-text {
  width: 248px;
  height: 17px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #7b7b7b;
  margin-left: 5px;
}

.active {
  background-color: white;
}

.operation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70px;
  margin: 0 auto;
}

.el-table__footer-wrapper, .el-table__header-wrapper {
  margin-top: 10px;
  background-color: #edf1f5;
}

.textWord {
  width: 390px;
  height: 30px;
  border: none;
}

/* .is-opened>div::nth-child(1) {
  background-color: white !important;
} */
.cell {
  text-align: center;
  font-size: 16px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.el-table .cell {
  line-height: 44px;
}

.UserAssets-bgcolor {
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #1e69fe;
}

.UserAssets-right {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}

/* 菜单选项卡字体颜色 */
.menu-word {
  color: white;
}

/* 顶部按钮 */
.el-button--primary {
  border-radius: 10px;
  height: 37px;
}

.el-button--default {
  border-radius: 10px;
  padding: 10px 20px;
}

.el-table {
  color: #908e8e;
}

.UserAssets-right-top {
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 20px auto;
  margin-top: 40px;
}

.UserAssets-left {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 1079px;
  background-color: #1e69fe;
}

.UserAssets-logo {
  text-align: center;
  margin: 30px 0px;
}

.LOGO {
  width: 67px;
  height: 20px;
  font-family: MyriadPro-Regular;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 44px;
  letter-spacing: 0px;
  color: #ffffff;
}

.el-col-12 {
  width: 100%;
  text-align: center;
  margin-top: 50px !important;
}

/* 字体 */
.vive {
  font-size: 20px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: row;
  margin: 20px 55px;
}

.el-submenu {
  margin: 0 0 20px 0 !important;
}

.el-submenu__title {
  padding-right: 0px !important;
  font-size: 20px;
  width: 100%;
}

/* 按钮字体 */
.el-button {
  font-size: 16px;
}

.el-menu-item {
  font-size: 16px;
  color: #dbdbdb;
}

.menu-op {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 1%;
}

.menu-op div {
  padding: 0px 15px;
  width: 40px;
}

.user-word {
  width: 47px;
  height: 23px;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 1px;
  color: #000000;
}

.user-left {
  width: 90%;
}

.user-right {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.user-right {
  width: 10%;
}

.user-right span {
  color: #8a9199;
}

.user-img {
  height: 40px;
  width: 40px;
  overflow: hidden;
  border-radius: 100%;
}

.el-menu-item.is-active:hover {
  background-color: #1e69fe;
}

.UserAssets-right-text {
  width: 39%;
  margin-left: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.select1 {
  width: 200px;
  height: 34px;
  border-radius: 10px;
  border: solid 1px #1e69fe;
  font-size: 16px;
  padding: 0 2%;
  margin: 0;
}

.textBox {
  width: 422px;
  height: 34px;
  border-radius: 10px;
  border: solid 1px #1e69fe;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.UserAssets-bottom {
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 29px auto;
}

.UserAssets-bottom-left {
  width: 50%;
}

.UserAssets-bottom-right {
  width: 50%;
  text-align: right;
}

.UserAssets-bottom-left span {
  width: 137px;
  height: 18px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #333333;
}

.set {
  width: 40px;
}

.select1 option {
  text-align: center;
}

.sear-img {
  width: 15px;
  height: 15px;
}
</style>
