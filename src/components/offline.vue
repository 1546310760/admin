<template>
  <div class="z">
    <el-container style="border: 1px solid #eee">
      <div class="main">
        <div class="co">
          <div class="flo lo">
            <img src="../assets/images/help.png" alt="" />
            <img src="../assets/images/set up.png" alt="" />
          </div>
          <div class="flo">
            <img src="../assets/images/Head portrait.png" alt="" />
            <span>呢称</span>
          </div>
        </div>

        <el-container class="el c">
          <el-main style="overflow-x: hidden">
            <div>
              <el-input
                @keyup.enter.native="search_stade"
                style="width: 277px; height: 43px; margin: 0 16px 20px 19px"
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="ser"
              >
              </el-input>
              <el-button style="width: 117px" type="primary" icon="el-icon-plus"
                >添加站点</el-button
              >
            </div>

            <div class="odd">
              <div
                class="li"
                v-for="(item, i) in msg"
                :key="i"
                @click="sort(i)"
              >
                <img :src="img[msg[i].type]" alt="" />
                <div class="right">
                  <span>{{ msg[i].name }}</span>
                  <div>
                    <img src="../assets/images/weizhi.png" alt="" />
                    <span v-if="!msg[i].address">地址未配置</span>
                    <span>{{ msg[i].address }}</span>
                  </div>
                  <span>{{ type[msg[i].type] }}</span>
                  <span>({{ msg[i].stat.busy }}/{{ msg[i].stat.idle }})</span>
                  <span>5元/时</span>
                </div>
                <div
                  class="dian"
                  :class="{ display: hidd }"
                  @mouseenter.stop="enter4(i)"
                  @mouseleave.stop="leave4(i)"
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
        </el-container>

        <el-container class="el">
          <el-header style="font-size: 12px; width: 1000px">
            <div>
              <el-input
                style="width: 945px; height: 43px; margin: 0 2px 10px 0"
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="list_text"
              ></el-input>
              <el-button type="primary" icon="el-icon-search" @click="search"
                >查询</el-button
              >
              <el-button icon="el-icon-plus">添加</el-button>
            </div>
          </el-header>
          <el-main>
            <div class="wen we">
              <span>编号</span><span>名称</span><span>类型</span
              ><span>机号</span><span>状态</span><span>操作</span>
            </div>
            <div class="wen weng" v-for="(item, e) in list_msg" :key="e">
              <span>{{ list_msg[e].dev_id }}</span
              ><span>{{ list_msg[e].dev_id }}</span
              ><span>{{ list_msg[e].type }}</span
              ><span>{{ list_msg[e].mac }}</span
              ><span>
                <img
                  v-if="list_msg[e].online === true"
                  class="im"
                  src="../assets/images/offline.png"
                />
                <img
                  v-else
                  class="im"
                  src="../assets/images/quxiao.png"
                /> </span
              ><span class="xiaoshou"
                ><img
                  class="im"
                  @click="really(e)"
                  src="../assets/images/shan.png"
                  alt="" /><img src="../assets/images/bian.png" alt=""
              /></span>
              <div class="dalet" style="display: none" v-show="hidds">
                <div>删除信息</div>
                <div>您确定要删除这条信息吗？</div>
                <hr />
                <button class="ccc" style="float: right" @click="dalet(e)">
                  确认
                </button>
                <button style="float: right" @click="over">取消</button>
              </div>
            </div>

            <div class="foot">
              <span
                >共<span>{{ list_cont }}</span
                >条信息</span
              >
              <div class="shu">
                <a class="ab" href="#" @click="list_back"
                  ><img src="../assets/images/left.png"
                /></a>
                <a class="ab" href="#" @click="list_one">1</a>
                <a class="ab" href="#" @click="list_tow">2</a>
                <a class="ab" href="#" @click="list_Three">3</a>
                <a class="ab" href="#" @click="list_four">4</a>
                <a class="ab" href="#" @click="list_five">5</a>
                <a class="ab" href="#" @click="list_six">6</a>
                <a class="ab" href="#">...</a>
                <a class="ab" href="#" @click="list_last">{{
                  parseInt(this.list_cont / 15) + 1
                }}</a>
                <a class="ab" href="#"
                  ><img src="../assets/images/right.png"
                /></a>
              </div>
            </div>
          </el-main>
        </el-container>
      </div>
    </el-container>
    <div class="foot_left">
      <span>{{ page }}<span>/</span>{{ parseInt(this.cont / 10) + 1 }}</span>
      <div class="shu_left">
        <a class="ab" href="#" @click="back"
          ><img src="../assets/images/left.png"
        /></a>
        <a class="ab" href="#" @click="one">1</a>
        <a class="ab" href="#" @click="tow">2</a>
        <a class="ab" href="#">...</a>
        <a class="ab" href="#" @click="last">{{
          parseInt(this.cont / 6) + 1
        }}</a>
        <a class="ab" href="#" @click="next"
          ><img src="../assets/images/right.png"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      img: [
        require("../assets/images/comprehensive.png"),
        require("../assets/images/Charging pile.png"),
        require("../assets/images/parking.png"),
        require("../assets/images/Road parking.png"),
      ],
      type: ["综合站点", "充电站", "停车场", "道路"],
      chuange1: false,
      chuange2: true,
      chuange3: false,
      chuange4: false,
      chuange5: false,
      chuange6: false,
      ser: "",
      hidds: false,
      msg: [],
      token: JSON.parse(localStorage.getItem("token")),
      msg2: [],
      page: 1,
      cont: 1,
      list_msg: [],
      list_cont: 1,
      list_page: 1,
      list_conts: 1,
      list_text: "",
      id: 1,
      stade_id: 1,
    };
  },
  methods: {
    list_back() {
      console.log(this.list_page);
      if (this.list_page < 2) {
      } else {
        this.list_page--;
        axios
          .get("/admin/api/chargers", {
            params: {
              token: this.token,
              page: this.list_page,
              row: 15,
            },
          })
          .then((res) => {
            console.log(res);
            this.list_msg = res.data.chargers;
          });
      }
    },
    list_last() {
      this.list_conts = parseInt(this.list_cont / 15) + 1;
      console.log(this.list_conts);
      axios
        .get("admin/api/chargers", {
          params: {
            token: this.token,
            page: this.list_conts,
            row: 15,
          },
        })
        .then((res) => {
          this.list_msg = res.data.chargers;
          this.list_cont = res.data.total;
        });
    },
    list_six() {
      this.list_page = 6;
      axios
        .get("admin/api/chargers", {
          params: {
            token: this.token,
            page: this.list_page,
            row: 15,
          },
        })
        .then((res) => {
          this.list_msg = res.data.chargers;
          this.list_cont = res.data.total;
          console.log(this.list_msg);
        });
    },
    list_five() {
      this.list_page = 5;
      axios
        .get("admin/api/chargers", {
          params: {
            token: this.token,
            page: this.list_page,
            row: 15,
          },
        })
        .then((res) => {
          this.list_msg = res.data.chargers;
          this.list_cont = res.data.total;
          console.log(this.list_msg);
        });
    },
    list_four() {
      this.list_page = 4;
      axios
        .get("admin/api/chargers", {
          params: {
            token: this.token,
            page: this.list_page,
            row: 15,
          },
        })
        .then((res) => {
          this.list_msg = res.data.chargers;
          this.list_cont = res.data.total;
          console.log(this.list_msg);
        });
    },
    list_Three() {
      this.list_page = 3;
      axios
        .get("admin/api/chargers", {
          params: {
            token: this.token,
            page: this.list_page,
            row: 15,
          },
        })
        .then((res) => {
          this.list_msg = res.data.chargers;
          this.list_cont = res.data.total;
          console.log(this.list_msg);
        });
    },
    list_tow() {
      this.list_page = 2;
      axios
        .get("admin/api/chargers", {
          params: {
            token: this.token,
            page: this.list_page,
            row: 15,
          },
        })
        .then((res) => {
          this.list_msg = res.data.chargers;
          this.list_cont = res.data.total;
          console.log(this.list_msg);
        });
    },
    list_one() {
      this.list_page = 1;
      axios
        .get("admin/api/chargers", {
          params: {
            token: this.token,
            page: this.list_page,
            row: 15,
          },
        })
        .then((res) => {
          this.list_msg = res.data.chargers;
          this.list_cont = res.data.total;
          console.log(this.list_msg);
        });
    },
    sort(i) {
      // console.log(i);
      const id = this.msg[i].id;
      // console.log(id);
      axios
        .get(`/admin/api/station/${id}/chargers`, {
          params: {
            token: this.token,
            page: 1,
            row: 15,
          },
        })
        .then((res) => {
          console.log(res);
          this.list_msg = res.data.chargers;
          // console.log(this.list_msg);
          // console.log(this.list_msg[1].mac);
          // console.log(this.list_msg.chargers.dev_id);
        });
    },
    last() {
      const conts = parseInt(this.cont / 10) + 1;
      // console.log(a);
      axios
        .get("/admin/api/stations", {
          params: {
            token: this.token,
            page: conts,
            row: 6,
          },
        })
        .then((res) => {
          this.msg = res.data.stations;
        });
      this.page = conts;
    },
    back() {
      if (this.page < 2) {
      } else {
        this.page--;
        axios
          .get("/admin/api/stations", {
            params: {
              token: this.token,
              page: this.page,
              row: 6,
            },
          })
          .then((res) => {
            this.msg = res.data.stations;
          });
      }
      console.log(this.page);
    },
    next() {
      const conts = parseInt(this.cont / 10) + 1;
      if (this.page <= conts - 1) {
        this.page++;
        axios
          .get("/admin/api/stations", {
            params: {
              token: this.token,
              page: this.page,
              row: 6,
            },
          })
          .then((res) => {
            this.msg = res.data.stations;
          });
      } else {
        // this.page--;
      }
    },
    tow() {
      // console.log(this.a);
      this.page = 2;
      axios
        .get("/admin/api/stations", {
          params: {
            token: this.token,
            page: this.page,
            row: 6,
          },
        })
        .then((res) => {
          this.msg = res.data.stations;
          console.log(this.msg);
        });
    },
    one() {
      this.page = 1;
      axios
        .get("/admin/api/stations", {
          params: {
            token: this.token,
            page: this.page,
            row: 6,
          },
        })
        .then((res) => {
          this.msg = res.data.stations;
        });
    },
    leave4(i) {
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
    send() {
      console.log(this.list_msg);

      //   console.log(this.item)
      axios
        .get("/admin/api/stations", {
          params: {
            token: this.token,
            page: 1,
            row: 6,
          },
        })
        .then((res) => {
          this.msg = res.data.stations;
          this.cont = res.data.total;
        });

      axios
        .get("admin/api/chargers", {
          params: {
            token: this.token,
            page: 1,
            row: 25,
          },
        })
        .then((res) => {
          const { chargers } = res.data;
          console.log(res);
          chargers.forEach((item) => {
            // console.log(e);
            if (item.online === false) {
              this.list_msg.push(item);
            }

            //   console.log(res.data.chargers[e]);
          });
        });
    },
    search() {
      axios.get(`admin/api/chargers/${this.list_text}`).then((res) => {
        this.list_msg = res.data.chargers;
        this.list_cont = res.data.total;
        console.log(this.list_msg);
      });
    },
    dalet(e) {
      this.hidds = false;
      // const id = this.list_msg[e].id;
      console.log(this.id);
      axios
        .delete(`/admin/api/charger/${this.id}`, {
          params: {
            token: this.token,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.error == 0) {
            axios
              .get("admin/api/chargers", {
                params: {
                  token: this.token,
                  page: this.list_page,
                  row: 15,
                },
              })
              .then((res) => {
                this.list_msg = res.data.chargers;
              });
          } else {
            alert(res.data.errmsg);
          }
        });
    },
    search_stade() {
      if (this.ser == "综合站点" || this.ser == 0) {
        this.stade_id = 0;
      } else if (this.ser == "充电站" || this.ser == 1) {
        this.stade_id = 1;
      } else if (this.ser == "停车场" || this.ser == 2) {
        this.stade_id = 2;
      } else if (this.ser == "道路" || this.ser == 3) {
        this.stade_id = 3;
      } else {
        alert("请输入0-3,综合站点,充电站,停车场,道路");
      }
      axios
        .get(`/admin/api/stations/${this.stade_id}`, {
          params: {
            token: this.token,
            page: 1,
            row: 6,
          },
        })
        .then((res) => {
          console.log(res);
          this.msg = res.data.stations;
          this.cont = res.data.total;
        });
    },
    really(e) {
      this.id = this.list_msg[e].id;

      this.hidds = true;
    },
    over() {
      this.hidds = false;
    },
  },
  mounted() {
    this.send();
  },
};
</script>

