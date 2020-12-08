<template>
  <div class="wulian">
    <div class="UserAssets-left">
      <div class="UserAssets-logo">
        <span class="LOGO">LOGO</span>
      </div>

      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#1e69fe"
          text-color="#fff"
          active-text-color="white"
          unique-opened
        >
          <el-submenu index="30">
            <template slot="title">
              <router-link to="/summary/carCharging">
                <div class="menu-op">
                  <div>
                    <img src="../assets/images/shebei.png" />
                  </div>
                  <span class="menu-word">充电站</span>
                </div>
              </router-link>
            </template>

            <el-menu-item-group>
              <router-link to="/summary/carCharging">
                <el-menu-item index="5-1">
                  <div class="menu-op">
                    <div>
                      <img src="../assets/images/all.png" />
                    </div>
                    <span class="menu-word">站点</span>
                  </div>
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group>

                <el-menu-item index="5-2">
                  <router-link to="/DC">
                  <div class="menu-op">
                    <div>
                      <img src="../assets/images/zai.png" />
                    </div>
                    <span class="menu-word">直流桩</span>
                  </div>
                  </router-link>
                </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <router-link to="/AC">
                <el-menu-item index="5-3">
                  <div class="menu-op">
                    <div>
                      <img src="../assets/images/li.png" />
                    </div>
                    <span class="menu-word">交流桩</span>
                  </div>
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <router-link to="/charge">
                <div class="menu-op">
                  <div>
                    <img src="../assets/images/sim.png" />
                  </div>
                  <span class="menu-word">充电订单</span>
                </div>
              </router-link>
            </template>

            <el-menu-item-group>
              <router-link to="/simall">
                <el-menu-item index="3-1">
                  <div class="menu-op">
                    <div>
                      <img src="../assets/images/all.png" />
                    </div>
                    所有
                  </div>
                </el-menu-item>
              </router-link>
              <router-link to="/online">
                <el-menu-item index="3-2">
                  <div class="menu-op">
                    <div>
                      <img src="../assets/images/zai.png" />
                    </div>
                    <span class="menu-word">实时订单</span>
                  </div>
                </el-menu-item>
              </router-link>

              <router-link to="/off_line">
                <el-menu-item index="3-3">
                  <div class="menu-op">
                    <div>
                      <img src="../assets/images/li.png" />
                    </div>
                    <span class="menu-word">历史订单</span>
                  </div>
                </el-menu-item>
              </router-link>

              <router-link to="/off_line">
                <el-menu-item index="3-3">
                  <div class="menu-op">
                    <div>
                      <img src="../assets/images/li.png" />
                    </div>
                    <span class="menu-word">退款订单</span>
                  </div>
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <!-- 5 -->
          <el-submenu index="5">
            <template slot="title">
              <router-link to="/code">
                <div class="menu-op">
                  <div>
                    <img src="../assets/images/erweima.png" />
                  </div>
                  <span class="menu-word">预付费套餐</span>
                </div>
              </router-link>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">
                <router-link to="/code">
                  <div class="menu-op">
                    <div>
                      <img src="../assets/images/all.png" />
                    </div>
                    <span class="menu-word">所有</span>
                  </div>
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="5-2">
                <router-link to="/bind">
                  <div class="menu-op">
                    <div>
                      <img src="../assets/images/all.png" />
                    </div>
                    <span class="menu-word">扫码套餐</span>
                  </div>
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="5-3">
                <router-link to="/unbound">
                  <div class="menu-op">
                    <div>
                      <img src="../assets/images/all.png" />
                    </div>
                    <span class="menu-word">刷卡套餐</span>
                  </div>
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import myhead from "../components/myhead";
export default {
  components: {
    myhead,
  },
  data() {
    return {
    };
  },

  mounted() {
  },
};
</script>

<style>
.left {
  position: relative;
  float: right;
  width: 100%;
  height: 100%;
}
.shebie {
  width: 80%;
  height: 50%;
  background: blue;
}

.wulian {
  width: 100%;
  height: 100%;
  display: flex;
  background: #1e69fe;
  flex-direction: row;
}

.wulianfont {
  clear: both;
  display: inline-block;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #000000;
  top: 4%;
  position: absolute;
  left: 20%;
}

body {
  width: 100%;
}

.zhuxiao {
  margin-right: 37px;
}

.font_sizi {
  width: 100%;
}

html,
body,
element {
  background: #ffffff !important;
}

.el-scrollbar__thumb {
  background-color: #1e69feff !important;
}

.el-container.is-vertical {
  position: relative;
  left: 100%;
  top: 0%;
  clear: both;
}

.el-header {
  width: 1220px !important;
  margin-left: -20px;
}
.el-main:nth-child(2) {
  width: 1189px !important;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}
.el-main {
  padding: 20px 0 0 0 !important;
  overflow-y: hidden !important;
}
.el-container {
  height: 1000px;
  border: none !important;
}
.el-aside {
  background-color: #1e69feff;
  height: 100% !important;
  width: 328px !important;
  overflow-y: scroll !important;
  overflow-x: hidden !important;
}

.el-menu {
  font-size: 16px !important;
  height: auto;
}
.el-container {
  height: 1000px;
  /* overflow-x: scroll !important; */
}

.el-submenu__title:hover {
  border-radius: 400px !important;

  background-color: #1e69feff !important ;
}
.el-submenu__title:visited {
  background-color: red !important ;
  border-radius: 400px !important;
}
.el-submenu__title {
  font-size: 15px !important;
  font-family: "PingFang SC";
  font-weight: 300;
  padding-left: 18%;
  color: #ffffff;
  margin: 0 auto;
  width: 160px;
  font-size: 16px;
}

.ssc {
  display: inline-block;
  height: 19px;
  margin: 0 113px 77px 92px;
  font-size: 20px;
  font-family: "PingFang SC";
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

.font_sizi_our {
  word-wrap: break-word;
  margin-top: px(-40);
  width: auto;
  height: 52px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 300;
  color: #494949;
  /* margin: 0  169px 0  114px; */
  display: inline-block;
}

.settu {
  margin-top: 240px !important;
}

.xishu {
  left: 22px;
  top: 5px;
  position: relative;
  z-index: 999;
  display: inline-block;
  margin-right: px(-20);
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
  font-family: "PingFang SC";
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
  margin: px(-10) 0 0 10px;
  width: auto;
  height: 19px;
  font-size: 20px;
  font-family: "PingFang SC";
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
  font-family: "PingFang SC";
  font-weight: 400;
  color: #1e69fe;
  line-height: 34px;
  margin-left: 65px;
}

.tou {
  width: 100%;
  height: 1079px;
  background: #ffffff;
  border-radius: 30px 0px 0px 30px;
  margin-left: px(-27);
  z-index: 2;
}

.zhong {
  display: inline-block;
  padding: 45px 0 0 58px;
  font-size: 24px;
  font-family: "PingFang SC";
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
.el-menu {
  border-right: none !important;
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

.el-table__footer-wrapper,
.el-table__header-wrapper {
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
  min-width: 200px;
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
  padding-right: 20px !important;
  font-size: 20px;
  width: 100%;
  margin-left: -1%;
}

/* 按钮字体 */
.el-button {
  font-size: 16px;
}

.el-menu-item {
  font-size: 13px;
  color: #dbdbdb;
}

.menu-op {
  display: flex;
  flex-direction: row;
  width: 100%;
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

/* 第一行数据类型 */
.el-table thead {
  color: black;
}
</style>