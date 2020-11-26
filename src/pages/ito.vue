<template>
  <div>
    <el-container style="border: 1px solid #eee">
      <el-aside style="height: 800px">
        <el-menu :default-openeds="['1', '3']" background-color="#1E69FEFF">
          <span class="span">LOGO</span>
          <div class="con" :class="{ e: chuange1 }" @click="e1">
            <div class="iconfont icon-tubiao_ditu"></div>
            <span>物联地图</span>
          </div>
          <div
            class="con"
            :class="[{ ec: chuange1 }, { e: chuange2 }]"
            @click="e2"
          >
            <div class="iconfont icon-shebei"></div>
            <span>物联设备</span>
          </div>
          <div class="con" :class="{ e: chuange3 }" @click="e3">
            <div class="iconfont icon-other"></div>
            <span> 全部</span>
          </div>
          <div class="con" :class="{ e: chuange4 }" @click="e4">
            <div class="iconfont icon-zaixiankefu"></div>
            <span>在线</span>
          </div>
          <div class="con" :class="{ e: chuange5 }" @click="e5">
            <div class="iconfont icon-lixian"></div>
            <span>离线</span>
          </div>
          <div class="con" :class="{ e: chuange6 }" @click="e6">
            <div class="iconfont icon-data-"></div>
            <span>故障</span>
          </div>

          <el-submenu index="7" style="clear: both">
            <template slot="title"
              ><i class="el-icon-setting"></i>SIM卡管理</template
            >
            <el-menu-item index="3-1">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title"
              ><i class="el-icon-menu"></i>联网日志</template
            >
          </el-submenu>
        </el-menu>
      </el-aside>

      <div class="main">
        <div class="co">
          <div class="flo lo">
            <img src="../assets/images/help.png" alt="">
            <img src="../assets/images/set up.png" alt="">
          </div>
          <div class="flo">
            <img src="../assets/images/Head portrait.png" alt="">
            <span>呢称</span>
          </div>
        </div>

        <el-container class="el c">
          <el-scrollbar>
            <el-main>
              <div>
                <el-input
                  style="width: 196px; margin: 0 2px 10px 0"
                  placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  v-model="ser"
                >
                </el-input>
                <el-button type="primary">主要按钮</el-button>
              </div>

              <div class="odd">
                <div class="li">
                  <img src="../assets/images/parking.png" alt="" />
                  <div class="right">
                    <span>测试地点</span>
                    <div>
                      <img src="../assets/images/weizhi.png" alt="" />
                      <span>地址未配置</span>
                    </div>
                    <span>停车场</span>
                    <span>{0/3}</span>
                    <span>5元/时</span>
                  </div>
                  <div
                    class="dian"
                    :class="{ display: hidd }"
                    @mouseenter.stop="enter4"
                    @mouseleave.stop="leave4"
                  >
                    ...
                  </div>
                  <div class="img" style="display: none" v-show="hidd">
                    <img src="../assets/images/Modify .png" alt="" />
                    <img src="../assets/images/positioning1.png" alt="" />
                    <img src="../assets/images/delete2.png" alt="" />
                  </div>
                </div>
                <div class="li">
                  <img src="../assets/images/parking.png" alt="" />
                  <div class="right">
                    <span>测试地点</span>
                    <div>
                      <img src="../assets/images/weizhi.png" alt="" />
                      <span>地址未配置</span>
                    </div>
                    <span>停车场</span>
                    <span>{0/3}</span>
                    <span>5元/时</span>
                  </div>
                  <div
                    class="dian"
                    :class="{ display: hidd }"
                    @mouseenter.stop="enter4"
                    @mouseleave.stop="leave4"
                  >
                    ...
                  </div>
                  <div class="img" style="display: none" v-show="hidd">
                    <img src="../assets/images/Modify .png" alt="" />
                    <img src="../assets/images/positioning1.png" alt="" />
                    <img src="../assets/images/delete2.png" alt="" />
                  </div>
                </div>
                <div class="li">
                  <img src="../assets/images/parking.png" alt="" />
                  <div class="right">
                    <span>测试地点</span>
                    <div>
                      <img src="../assets/images/weizhi.png" alt="" />
                      <span>地址未配置</span>
                    </div>
                    <span>停车场</span>
                    <span>{0/3}</span>
                    <span>5元/时</span>
                  </div>
                  <div
                    class="dian"
                    :class="{ display: hidd }"
                    @mouseenter.stop="enter4"
                    @mouseleave.stop="leave4"
                  >
                    ...
                  </div>
                  <div class="img" style="display: none" v-show="hidd">
                    <img src="../assets/images/Modify .png" alt="" />
                    <img src="../assets/images/positioning1.png" alt="" />
                    <img src="../assets/images/delete2.png" alt="" />
                  </div>
                </div>
                <div class="li">
                  <img src="../assets/images/parking.png" alt="" />
                  <div class="right">
                    <span>测试地点</span>
                    <div>
                      <img src="../assets/images/weizhi.png" alt="" />
                      <span>地址未配置</span>
                    </div>
                    <span>停车场</span>
                    <span>{0/3}</span>
                    <span>5元/时</span>
                  </div>
                  <div
                    class="dian"
                    :class="{ display: hidd }"
                    @mouseenter.stop="enter4"
                    @mouseleave.stop="leave4"
                  >
                    ...
                  </div>
                  <div class="img" style="display: none" v-show="hidd">
                    <img src="../assets/images/Modify .png" alt="" />
                    <img src="../assets/images/positioning1.png" alt="" />
                    <img src="../assets/images/delete2.png" alt="" />
                  </div>
                </div>
                <div class="li">
                  <img src="../assets/images/parking.png" alt="" />
                  <div class="right">
                    <span>测试地点</span>
                    <div>
                      <img src="../assets/images/weizhi.png" alt="" />
                      <span>地址未配置</span>
                    </div>
                    <span>停车场</span>
                    <span>{0/3}</span>
                    <span>5元/时</span>
                  </div>
                  <div
                    class="dian"
                    :class="{ display: hidd }"
                    @mouseenter.stop="enter4"
                    @mouseleave.stop="leave4"
                  >
                    ...
                  </div>
                  <div class="img" style="display: none" v-show="hidd">
                    <img src="../assets/images/Modify .png" alt="" />
                    <img src="../assets/images/positioning1.png" alt="" />
                    <img src="../assets/images/delete2.png" alt="" />
                  </div>
                </div>
                <div class="li">
                  <img src="../assets/images/parking.png" alt="" />
                  <div class="right">
                    <span>测试地点</span>
                    <div>
                      <img src="../assets/images/weizhi.png" alt="" />
                      <span>地址未配置</span>
                    </div>
                    <span>停车场</span>
                    <span>{0/3}</span>
                    <span>5元/时</span>
                  </div>
                  <div
                    class="dian"
                    :class="{ display: hidd }"
                    @mouseenter.stop="enter4"
                    @mouseleave.stop="leave4"
                  >
                    ...
                  </div>
                  <div class="img" style="display: none" v-show="hidd">
                    <img src="../assets/images/Modify .png" alt="" />
                    <img src="../assets/images/positioning1.png" alt="" />
                    <img src="../assets/images/delete2.png" alt="" />
                  </div>
                </div>
                <div class="li">
                  <img src="../assets/images/parking.png" alt="" />
                  <div class="right">
                    <span>测试地点</span>
                    <div>
                      <img src="../assets/images/weizhi.png" alt="" />
                      <span>地址未配置</span>
                    </div>
                    <span>停车场</span>
                    <span>{0/3}</span>
                    <span>5元/时</span>
                  </div>
                  <div
                    class="dian"
                    :class="{ display: hidd }"
                    @mouseenter.stop="enter4"
                    @mouseleave.stop="leave4"
                  >
                    ...
                  </div>
                  <div class="img" style="display: none" v-show="hidd">
                    <img src="../assets/images/Modify .png" alt="" />
                    <img src="../assets/images/positioning1.png" alt="" />
                    <img src="../assets/images/delete2.png" alt="" />
                  </div>
                </div>
                <div class="li">
                  <img src="../assets/images/parking.png" alt="" />
                  <div class="right">
                    <span>测试地点</span>
                    <div>
                      <img src="../assets/images/weizhi.png" alt="" />
                      <span>地址未配置</span>
                    </div>
                    <span>停车场</span>
                    <span>{0/3}</span>
                    <span>5元/时</span>
                  </div>
                  <div
                    class="dian"
                    :class="{ display: hidd }"
                    @mouseenter.stop="enter4"
                    @mouseleave.stop="leave4"
                  >
                    ...
                  </div>
                  <div class="img" style="display: none" v-show="hidd">
                    <img src="../assets/images/Modify .png" alt="" />
                    <img src="../assets/images/positioning1.png" alt="" />
                    <img src="../assets/images/delete2.png" alt="" />
                  </div>
                </div>
              </div>
            </el-main>    
          </el-scrollbar>
        </el-container>

        <el-container class="el">
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </el-header>
          <el-main>
            <el-table :data="tableData">
              <el-table-column prop="date" label="日期" width="140">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120">
              </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
      chuange1: false,
      chuange2: false,
      chuange3: false,
      chuange4: false,
      chuange5: false,
      chuange6: false,
      ser: "",
      hidd: false,
    };
  },
  methods: {
    leave4() {
      this.hidd = false;
    },
    enter4() {
      this.hidd = true;
    },
    e1() {
      this.chuange1 = true;
      this.chuange2 = false;
      this.chuange3 = false;
      this.chuange4 = false;
      this.chuange5 = false;
      this.chuange6 = false;
    },
    e2() {
      this.chuange1 = false;
      this.chuange2 = true;
      this.chuange3 = false;
      this.chuange4 = false;
      this.chuange5 = false;
      this.chuange6 = false;
    },
    e3() {
      this.chuange1 = false;
      this.chuange2 = false;
      this.chuange3 = true;
      this.chuange4 = false;
      this.chuange5 = false;
      this.chuange6 = false;
    },
    e4() {
      this.chuange1 = false;
      this.chuange2 = false;
      this.chuange3 = false;
      this.chuange4 = true;
      this.chuange5 = false;
      this.chuange6 = false;
    },
    e5() {
      this.chuange1 = false;
      this.chuange2 = false;
      this.chuange3 = false;
      this.chuange4 = false;
      this.chuange5 = true;
      this.chuange6 = false;
    },
    e6() {
      this.chuange1 = false;
      this.chuange2 = false;
      this.chuange3 = false;
      this.chuange4 = false;
      this.chuange5 = false;
      this.chuange6 = true;
    },
  },
};
</script>

<style >
@import url("../assets/css/icon.css");
.odd>.li:nth-of-type(even) {
background: #EDF1F5FF;
}
.display {
  display: none;
}
.img img {
  margin-top: 10px;
  padding: 6px;
  width: 5.7px !important;
  height: 5.7px !important;
  background: #0c52deff;
  border-radius: 40px;
}
.dian {
  font-size: 19px;
  color: #cccbcbff;
  float: right;
  margin-right: 15px;
  cursor: pointer;
}
.main {
  margin-left: -36px;
  background: white;
  border-radius: 40px;
  z-index: 999;
  padding-left: 30px;
  
}
.el {
  margin: 70px 0px 30px 30px !important;
  width: 340px;
  height: 843px;
  float: left;
  position:absolute;

}
.span {
  display: block;
  margin: 0 auto;
  width: 67px;
  height: 44px;
  font-size: 28px;
  font-family: "Myriad Pro";
  font-weight: 400;
  color: white;
}
.con:nth-of-type(n + 3) {
  color: #dbdbdbff;
}
.con {
  padding-left: 10px;
  float: right;
  width: 200px;
  height: 34px;
  /* background: chartreuse; */
  color: #f0f5f7;
  font-size: 16px;
  font-family: "PingFang SC";
  font-weight: 400;
  line-height: 32px;
  margin-top: 26px;
  cursor: pointer;
}
.iconfont {
  display: inline-block;
  width: 16px;
  height: 15px;
  margin-right: 3px;
  margin-left: 30px;
}
</style>