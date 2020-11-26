<template>
  <div class="layui-layout-body">
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <a href="#" class="hd_logo fl">
          <img src="../assets/images/logo.png" alt="" class="img" />
        </a>
        <div class="hd_nav fl">
          <li class="cur">
            <a href="#" class="tit">首页</a>
          </li>
          <li class="has">
            <a href="javascript:;" class="tit">设备管理</a>
            <div class="drop">
              <a href="#" class="ic_2_1">物联设备</a>
              <a href="#" class="ic_2_2">站点列表</a>
              <a href="#" class="ic_2_3">日志告警</a>
            </div>
          </li>
          <li class="has">
            <a href="javascript:;" class="tit">片区管理</a>
            <div class="drop">
              <a href="#" class="ic_3_1">合伙人</a>
              <a href="#" class="ic_3_2">运营商</a>
              <a href="#" class="ic_3_3">物业</a>
              <a href="#" class="ic_3_4">个人</a>
            </div>
          </li>
          <li class="has">
            <a href="javascript:;" class="tit">会员系统</a>
            <div class="drop">
              <a href="#" class="ic_4_1">用户</a>
              <a href="#" class="ic_4_2">储值卡</a>
            </div>
          </li>
          <li class="has">
            <a href="javascript:;" class="tit">财务管理</a>
            <div class="drop">
              <p class="fz">收入管理</p>
              <a href="#" class="ic_5_1">订单管理</a>
              <a href="#" class="ic_5_2">发票管理</a>
              <p class="fz">清分结算</p>
              <a href="#" class="ic_5_3">提现管理</a>
              <a href="#" class="ic_5_4">分成明细</a>
              <a href="#" class="ic_5_5">转账明细</a>
            </div>
          </li>
          <li class="has">
            <a href="javascript:;" class="tit">收费模型</a>
            <div class="drop">
              <a href="#" class="ic_6_1">扫码套餐</a>
              <a href="#" class="ic_6_2">充值套餐</a>
              <a href="#" class="ic_6_3">计量费率</a>
            </div>
          </li>
          <li class="has">
            <a href="javascript:;" class="tit">员工管理</a>
            <div class="drop">
              <a href="#" class="ic_7_1">所有员工</a>
              <a href="#" class="ic_7_2">绩效管理</a>
              <a href="#" class="ic_7_3">排班管理</a>
            </div>
          </li>
          <li class="has">
            <a href="javascript:;" class="tit">售后管理</a>
            <div class="drop">
              <a href="#" class="ic_8_1">工单管理</a>
              <a href="#" class="ic_8_2">故障报修</a>
            </div>
          </li>
          <li>
            <a href="javascript:;" class="tit">
              <img src="../assets/images/icon_02.png" alt="" />
            </a>
            <div class="drop">
              <a href="#" class="ic_9_1">管理员</a>
              <a href="#" class="ic_9_2">二维码</a>
              <a href="#" class="ic_9_3">消息推送</a>
              <a href="#" class="ic_9_4">日志管理</a>
            </div>
          </li>
        </div>
        <div class="hd_user fr">
          <div class="name">
            <img
              src="../assets/images/icon_03.png"
              alt=""
              class="hdimg"
            />昵称18000
          </div>
          <div class="drop">
            <p class="fz clearfix">
              余额 <button class="button fr">提现</button>
            </p>
            <p class="price">￥9,999.99</p>
            <div class="lks">
              <a href="#" class="order">我的订单</a>
              <a href="#" class="income">我的收入</a>
              <a href="#" class="per">个人中心</a>
            </div>
            <button class="quit">退出登录</button>
          </div>
        </div>
      </div>

      <div class="layui-side">
        <div class="layui-side-scroll">
          <ul class="side_menu">
            <li class="item item_1">
              <a href="#" class="tit">数据统计</a>
            </li>
            <li class="item item_2">
              <a href="#" class="tit">物联地图</a>
            </li>
            <li class="item item_3 has">
              <a href="javascript:;" class="tit">智慧停车</a>
              <div class="drop">
                <div class="group">
                  <h6 class="smtit">路内停车</h6>
                  <div class="submenu">
                    <a href="#">道路资源<i class="num">23</i></a>
                    <a href="#">设备管理<i class="num">10</i></a>
                    <a href="#">正在停车<i class="num">100</i></a>
                  </div>
                </div>
                <div class="group">
                  <h6 class="smtit">停车场</h6>
                  <div class="submenu">
                    <a href="#">设备管理<i class="num">23</i></a>
                    <a href="#">正在停车<i class="num">10</i></a>
                  </div>
                </div>
                <div class="group">
                  <h6 class="smtit">业务管理</h6>
                  <div class="submenu">
                    <a href="#">车牌管理</a>
                    <a href="#">停车记录</a>
                    <a href="#">欠费记录</a>
                    <a href="#">取证记录</a>
                  </div>
                </div>
              </div>
            </li>
            <li class="item item_4 has">
              <a href="javascript:;" class="tit">智慧充电</a>
              <div class="drop">
                <div class="group">
                  <h6 class="smtit">充电桩</h6>
                  <div class="submenu">
                    <a href="#">直流直流桩</a>
                    <a href="#">汽车交流桩</a>
                    <a href="#">电摩桩</a>
                  </div>
                </div>
                <div class="group">
                  <h6 class="smtit">共享充电</h6>
                  <div class="submenu">
                    <a href="#">充电宝</a>
                    <a href="#">电池柜</a>
                  </div>
                </div>
                <div class="group">
                  <h6 class="smtit">业务管理</h6>
                  <div class="submenu">
                    <a href="#">充电记录</a>
                  </div>
                </div>
              </div>
            </li>
            <li class="item item_5 has">
              <a href="javascript:;" class="tit">车联网</a>
              <div class="drop">
                <div class="group">
                  <div class="submenu">
                    <a href="#">汽车</a>
                    <a href="#">电摩</a>
                    <a href="#">车辆地图</a>
                    <a href="#">租用记录</a>
                  </div>
                </div>
              </div>
            </li>
            <li class="item item_6 has">
              <a href="javascript:;" class="tit">智慧用电</a>
              <div class="drop">
                <div class="group">
                  <div class="submenu">
                    <a href="#">智慧用电</a>
                    <a href="#">预警日志</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="layui-body">
        <div class="container m">
          <div class="idx_main m">
            <div class="map_map">
              <div class="mapbox">
                <div id="container"></div>
              </div>
              <div class="map_tb">
                <em class="ico ico_p"></em>
                <em class="ico ico_ac"></em>
              </div>
            </div>
            <div class="pub_search map_search">
              <input type="text" class="ipt ipt_txt" placeholder="查找关键词" />
            </div>
            <div class="map_choose layui-form">
              <li>
                <input type="radio" name="aa" value="" title="全部" />
                <div class="layui-unselect layui-form-radio">
                  <i class="layui-anim layui-icon"></i>
                  <div>全部</div>
                </div>
              </li>
              <li>
                <input type="radio" name="aa" value="" title="汽车快充" />
                <div class="layui-unselect layui-form-radio">
                  <i class="layui-anim layui-icon"></i>
                  <div>汽车快充</div>
                </div>
              </li>
              <li>
                <input type="radio" name="aa" value="" title="汽车慢充" />
                <div class="layui-unselect layui-form-radio">
                  <i class="layui-anim layui-icon"></i>
                  <div>汽车慢充</div>
                </div>
              </li>
              <li>
                <input type="radio" name="aa" value="" title="电摩桩" />
                <div class="layui-unselect layui-form-radio">
                  <i class="layui-anim layui-icon"></i>
                  <div>电摩桩</div>
                </div>
              </li>
              <li>
                <input type="radio" name="aa" value="" title="充电宝" />
                <div class="layui-unselect layui-form-radio">
                  <i class="layui-anim layui-icon"></i>
                  <div>充电宝</div>
                </div>
              </li>
              <li>
                <input type="radio" name="aa" value="" title="路边泊位" />
                <div class="layui-unselect layui-form-radio">
                  <i class="layui-anim layui-icon"></i>
                  <div>路边泊位</div>
                </div>
              </li>
              <li>
                <input type="radio" name="aa" value="" title="停车场" />
                <div class="layui-unselect layui-form-radio">
                  <i class="layui-anim layui-icon"></i>
                  <div>停车场</div>
                </div>
              </li>
              <li>
                <input type="radio" name="aa" value="" title="电表" />
                <div class="layui-unselect layui-form-radio">
                  <i class="layui-anim layui-icon"></i>
                  <div>电表</div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--弹窗-->
    <div class="pop_bg"></div>
    <div class="pop pop_map">
      <div class="p_top tabmenu">
        <li class="lk cur">基本信息</li>
        <li class="lk">充电状态</li>
        <li class="lk">电表状态</li>
        <div class="fr">
          <em class="ico dc"></em>
          <em class="ico xh"></em>
          <em class="ico close"></em>
        </div>
      </div>
      <div class="detail tabwrap">
        <div class="map_base clearfix module">
          <div class="lbox fl layui-form">
            <li class="item clearfix">
              <span class="tit">名称</span>
              <div class="info">
                <input type="text" class="ipt ipt_txt" value="金牛座1号桩" />
              </div>
            </li>
            <li class="item clearfix">
              <span class="tit">类型</span>
              <div class="info">
                <div class="selectbox">
                  <select name="" id="">
                    <option value="1">直流桩</option>
                    <option value="2">直流桩</option>
                    <option value="3">直流桩</option>
                  </select>
                </div>
              </div>
            </li>
            <li class="item clearfix">
              <span class="tit">机号</span>
              <div class="info">
                <p class="fz">1223828362894702358</p>
              </div>
            </li>
            <li class="item clearfix">
              <span class="tit">ICCID</span>
              <div class="info">
                <p class="fz">1223828362894702358</p>
              </div>
            </li>
            <li class="item clearfix">
              <span class="tit">地址</span>
              <div class="info">
                <textarea
                  name=""
                  value="杭州市金牛座"
                  class="ipt textarea"
                ></textarea>
              </div>
            </li>
            <li class="item clearfix">
              <span class="tit">扫码套餐</span>
              <div class="info">
                <div class="selectbox">
                  <select name="" id="">
                    <option value="1">系统套餐1</option>
                    <option value="2">系统套餐1</option>
                    <option value="3">系统套餐1</option>
                  </select>
                </div>
              </div>
            </li>
            <li class="item clearfix">
              <span class="tit">计费套餐</span>
              <div class="info">
                <div class="selectbox">
                  <select name="" id="">
                    <option value="1">1.5元/度</option>
                    <option value="2">1.5元/度</option>
                    <option value="3">1.5元/度</option>
                  </select>
                </div>
              </div>
            </li>
            <li class="item clearfix">
              <span class="tit">备注</span>
              <div class="info">
                <textarea name="" value="" class="ipt textarea"></textarea>
              </div>
            </li>
            <li class="item clearfix">
              <input type="submit" value="确定" class="ipt submit" />
            </li>
          </div>
          <div class="rbox fr">
            <div class="smt">
              <span class="fz">
                在线时间：<em class="c_green">5天12小时59分</em>
              </span>
              <span class="c_button fr">
                <select name="" id="" class="select">
                  <option value="">重启设备</option>
                  <option value="">重启设备</option>
                  <option value="">重启设备</option>
                </select>
              </span>
            </div>
            <span class="tag">经纬度（1920148S，10842043）</span>
            <div class="map">
              <img src="../assets/images/img_35.jpg" alt="" class="img" />
            </div>
            <p class="wz">
              固件版本号：10.0.1&nbsp;&nbsp;&nbsp;设备厂商：杭州橡树新能源
            </p>
          </div>
        </div>
        <div class="map_cd clearfix module" style="display: none">
          <div class="menu fl">
            <em class="lk">1号接口</em>
            <em class="lk this">2号接口</em>
            <em class="lk">3号接口</em>
            <em class="lk">4号接口</em>
            <em class="lk">5号接口</em>
            <em class="lk">6号接口</em>
            <em class="lk">7号接口</em>
            <em class="lk">8号接口</em>
            <em class="lk">9号接口</em>
            <em class="lk">10号接口</em>
            <em class="lk">11号接口</em>
            <em class="lk">12号接口</em>
          </div>
          <div class="wrapbox fr">
            <div class="bar">
              <button class="btn start">启动充电</button>
              <button class="btn pause">停止充电</button>
            </div>
            <div class="cenbox clearfix">
              <div class="lbox fl">
                <div class="showchart">
                  <div class="chart">
                    <img src="../assets/images/img_37.jpg" alt="" class="pic" />
                  </div>
                  <div class="wbox">
                    <p class="percent"><i>50</i>%</p>
                    <p class="ww">充电中...</p>
                  </div>
                </div>
                <ul class="list">
                  <li>
                    <p class="fz">
                      <img
                        src="../assets/images/icon_61.png"
                        alt=""
                        class="ico"
                      />
                      时间
                    </p>
                    <p class="wz">24H</p>
                  </li>
                  <li>
                    <p class="fz">
                      <img
                        src="../assets/images/icon_62.png"
                        alt=""
                        class="ico"
                      />
                      金额
                    </p>
                    <p class="wz">￥63.0</p>
                  </li>
                  <li>
                    <p class="fz">
                      <img
                        src="../assets/images/icon_63.png"
                        alt=""
                        class="ico"
                      />
                      50%
                    </p>
                    <p class="wz">24H</p>
                  </li>
                </ul>
                <div class="barline">
                  <div class="row">
                    <em class="fz">电压</em>
                    <em class="barbox b1"><i style="width: 50%"></i></em>
                    <em class="wz">220V/400V</em>
                  </div>
                  <div class="row">
                    <em class="fz">电流</em>
                    <em class="barbox b2"><i style="width: 70%"></i></em>
                    <em class="wz">18A/300A</em>
                  </div>
                  <div class="row">
                    <em class="fz">剩余时间</em>
                    <em class="barbox b3"><i style="width: 30%"></i></em>
                    <em class="wz">300分钟</em>
                  </div>
                </div>
              </div>
              <div class="rbox fr">
                <div class="num">订单号：11384093584</div>
                <div class="det">
                  <li>支付金额 <i class="fr">￥1920.00</i></li>
                  <li>支付账号 <i class="fr">1893743974993053059</i></li>
                  <li>卡号 <i class="fr">8773619103472839901</i></li>
                  <li>充电方式 <i class="fr">自动充满</i></li>
                  <li>充电金额 <i class="fr c_red">￥100.00</i></li>
                </div>
              </div>
            </div>
            <div class="botbox">
              <div class="chartbox">
                <img src="../assets/images/img_36.jpg" alt="" class="img" />
              </div>
            </div>
          </div>
        </div>
        <div class="map_db module" style="display: none">
          <div class="topbox clearfix">
            <div class="lbox fl">
              <div class="sm clearfix layui-form">
                <em class="fz">拉闸<i>（再次点击开关即实现合闸）</i></em>
                <span class="switch fr">
                  <input
                    type="checkbox"
                    name="close"
                    lay-skin="switch"
                    lay-text=""
                  />
                </span>
              </div>
              <div class="box">
                <div class="row clearfix">
                  <span class="fz">实时电量</span>
                  <span class="fz fr"><i>12,345</i>kwh</span>
                </div>
                <div class="row">
                  <span class="wz">温度 <i>123</i>℃</span>
                  <span class="wz fr">零线电流<i>1</i>A</span>
                </div>
              </div>
            </div>
            <div class="rbox fr">
              <table class="table">
                <thead>
                  <th>电相</th>
                  <th>电压 / V</th>
                  <th>电流 / A</th>
                  <th>功率 / W</th>
                  <th>电量 / kwh</th>
                </thead>
                <tbody>
                  <tr>
                    <td>A相</td>
                    <td>1</td>
                    <td>2</td>
                    <td>9405</td>
                    <td>930485</td>
                  </tr>
                  <tr>
                    <td>B相</td>
                    <td>120</td>
                    <td>3</td>
                    <td>023810</td>
                    <td>2930284</td>
                  </tr>
                  <tr>
                    <td>C相</td>
                    <td>02483</td>
                    <td>4594</td>
                    <td>98343</td>
                    <td>98308</td>
                  </tr>
                  <tr>
                    <td>合计</td>
                    <td>029302</td>
                    <td>24038</td>
                    <td>98347</td>
                    <td>02831</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="botbox">
            <div class="chartbox">
              <img src="../assets/images/img_36.jpg" alt="" class="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import "layui-src/dist/layui.all.js";
import "../assets/js/common";
export default {
  data() {
    return {
      msg: [],
      ms: [],
      size: [],
    };
  },
  methods: {},
  mounted() {
    axios.get("map/gd/chargers/1,2,3,4,5,6,7,8").then((res) => {
      this.msg = res.data.chargers;
      console.log(this.msg);
      this.ms = this.msg.filter((item) => !item["name"].includes("测试"));
      console.log(this.ms);
      console.log(this.msg.length);
      console.log(this.msg[1].id);

      var map = new AMap.Map("container");
      var style = [
        {
          url: "https://a.amap.com/jsapi_demos/static/images/mass0.png",
          anchor: new AMap.Pixel(6, 6),
          size: new AMap.Size(11, 11),
        },
        {
          url: "https://a.amap.com/jsapi_demos/static/images/mass1.png",
          anchor: new AMap.Pixel(4, 4),
          size: new AMap.Size(7, 7),
        },
        {
          url: "https://a.amap.com/jsapi_demos/static/images/mass2.png",
          anchor: new AMap.Pixel(3, 3),
          size: new AMap.Size(5, 5),
        },
      ];

      var mass = new AMap.MassMarks(this.ms, {
        opacity: 0.8,
        zIndex: 111,
        cursor: "pointer",
        style: style,
      });

      var marker = new AMap.Marker({ content: " ", map: map });

      mass.on("mouseover", function (e) {
        marker.setPosition(e.data.lnglat);
        marker.setLabel({ content: e.data.name });
      });

      mass.setMap(map);

      function setStyle(multiIcon) {
        if (multiIcon) {
          mass.setStyle(style);
        } else {
          mass.setStyle(style[2]);
        }
      }
    });

    //layui
    layui.use(["layer", "form"], function () {
      var layer = layui.layer,
        form = layui.form;
      layer.msg("Hello World");
    });

    //地图
    window.onLoad = function () {
      var map = new AMap.Map("container");
      // var markerList = [marker1];
      // map.add(markerList);
    };

    var di = "2eb5ac2718d05f0859ff0689993fc859";
    var url = `https://webapi.amap.com/maps?v=1.4.15&key=${di}&callback=onLoad`;
    var s = document.createElement('script');
    s.type = 'text/javascript'
    s.src = 'https://a.amap.com/jsapi_demos/static/citys.js'
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(s);
    document.head.appendChild(jsapi);

  },
};
</script>

<style scoped >
@import url("../assets/layui/css/layui.css");
@import url("../assets/css/style.css");
@import url("//at.alicdn.com/t/font_2198833_3m02argp90j.css");
#container {
  width: 100%;
  height: 100%;
}
</style>