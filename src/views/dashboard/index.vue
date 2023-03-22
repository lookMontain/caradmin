<template>
  <div>
    <el-row :gutter="10" class="row">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>年度趋势</span>
            <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
          </div>
          <base-echarts height="300px" ref="myChart" :options="mainData"></base-echarts>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row">
      <el-col :xs="24" :sm="12" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>占有率</span>
            <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
          </div>
          <base-echarts height="300px" :options="mainData2"></base-echarts>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row">
      <el-col :xs="24" :sm="12" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>状态</span>
            <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
          </div>
          <base-echarts height="300px" :options="mainData3"></base-echarts>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PieEcharts from "@/components/Echart/pieEcharts.vue";
import BaseEcharts from "@/components/Echart/baseEcharts.vue";
import * as echarts from "echarts";
export default {
  name: "kehu",
  components: {
    PieEcharts,
    BaseEcharts
  },
  data () {
    return {

      mainData: this.getMainData(),
      mainData2: this.getMainData2(),
      mainData3: this.getMainData3()
    };
  },
  methods: {
    getMainData () {
      const getSymbolData = (datas) => {
        let arr = [];
        for (var i = 0; i < datas.length; i++) {
          arr.push({
            value: datas[i],
            symbolPosition: "end",
          });
        }
        return arr;
      };

      const createSpirit = (data) => {
        const spiritGreen =
          "image://data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOSA0NSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxOTRlNjA7fS5jbHMtMntmaWxsOiMyYjc2ODE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7otYTmupAgMTM8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiPjxyZWN0IGlkPSLmqZnmlrnlvaIiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjI5IiBoZWlnaHQ9IjQ1Ii8+PHBvbHlnb24gaWQ9IuapmeiPseW9oiIgY2xhc3M9ImNscy0yIiBwb2ludHM9IjI5IDIzIDAgNDUgMCAyMiAyOSAwIDI5IDIzIi8+PC9nPjwvZz48L3N2Zz4=";
        const spiritOrange =
          "image://data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOSA0NSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM1MTNCM0I7fS5jbHMtMntmaWxsOiNCQTY4NEY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7otYTmupAgMTM8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiPjxyZWN0IGlkPSLmqZnmlrnlvaIiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjI5IiBoZWlnaHQ9IjQ1Ii8+PHBvbHlnb24gaWQ9IuapmeiPseW9oiIgY2xhc3M9ImNscy0yIiBwb2ludHM9IjI5IDIzIDAgNDUgMCAyMiAyOSAwIDI5IDIzIi8+PC9nPjwvZz48L3N2Zz4=";
        let seriesData = [];
        for (let i = 0; i < data.length; i++) {
          let spirit = spiritGreen;
          if (i % 3 == 0 && i != 0) {
            spirit = spiritOrange;
          }
          seriesData.push({
            value: data[i],
            symbol: spirit,
            symbolRepeat: "fixed",
            symbolMargin: 0,
            symbolClip: true,
            symbolSize: [25, 41],
          });
        }
        return seriesData;
      };

      let xaxisData = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
      let yaxisData = [90, 80, 100, 70, 65, 69, 80, 100, 70, 65, 69, 66];

      const option = {
        backgroundColor: "#001829",
        tooltip: {
          show: false,
        },
        yAxis: [
          {
            name: "(个)",
            nameTextStyle: {
              color: "#AEC9FF",
              fontWeight: 400,
              fontSize: 14,
            },
            axisLabel: {
              color: "#AEC9FF",
            },
            axisLine: {
              show: true,
              symbol: ["none", "rect"],
              symbolSize: [6, 12],
              lineStyle: {
                width: 2,
                color: "#537DAA",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
          {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(7, 28, 47, 0.8)", "rgba(10, 34, 56, 0.8)"],
              },
            },
          },
        ],
        xAxis: {
          data: xaxisData,
          axisLabel: {
            color: "#AEC9FF",
            interval: 0,
          },
          axisLine: {
            show: true,
            symbol: ["none", "rect"],
            symbolSize: [6, 12],
            lineStyle: {
              width: 2,
              color: "#537DAA",
            },
          },
          axisTick: {
            show: false,
          },
        },
        grid: {
          top: "15%",
          left: "1%",
          right: "1%",
          bottom: "1%",
          containLabel: true,
        },
        dataZoom: [
          {
            xAxisIndex: 0, //这里是从X轴的0刻度开始
            show: false, //是否显示滑动条，不影响使用
            type: "inside", // 这个 dataZoom 组件是 inside 型 dataZoom 组件
            startValue: 0, // 从头开始。
            endValue: 5, // 一次性展示4个。
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 1,
            color: "rgba(0,0,0,0)",
            label: {
              show: true,
              position: "top",
              fontSize: 18,
              color: "#fff",
              fontFamily: "PangMenZhengDao",
            },
            data: yaxisData,
            z: 1,
          },
          {
            type: "pictorialBar",
            data: createSpirit(yaxisData),
            z: 10,
          },
          {
            type: "pictorialBar",
            symbol: "react",
            symbolSize: [32, 8],
            symbolOffset: [0, -0],
            z: 12,
            itemStyle: {
              color: "#fff",
            },
            data: getSymbolData(yaxisData),
          },
        ],
      };

      //自动滚动
      let timeInterval = setInterval(() => {
        if (option.dataZoom[0].endValue == xaxisData.length) {
          option.dataZoom[0].endValue = 5;
          option.dataZoom[0].startValue = 0;
        } else {
          option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
          option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
        }
        this.$refs.myChart.setOption(option);
      }, 2000);
      return option
    },
    getMainData2 () {
      return {
        title: {
          show:false,
          text: '渐变标签',
        },

        backgroundColor: '#ffffff',
        color: ['#f36119', '#ff9921', '#20c8ff', '#2cb7ff', '#1785ef'],
        "tooltip": {
          "trigger": "axis",
          "axisPointer": {
            "type": "cross",
            "label": {
              "backgroundColor": "red"
            },
            "lineStyle": {
              "color": "#9eb2cb"
            }
          }
        },

        "legend": {
          show: false,
          "top": "top",
          "left": "2%",
          "textStyle": {
            "color": "#000"
          },
          "itemHeight": 2,
          "data": ['意向', '方案', '商务', '即将成交', '赢单']
        },
        "grid": {
          "top": 20,
          "left": "2%",
          "right": 20,
          "bottom": 30,
          "containLabel": true,
          "borderWidth": 0.5
        },

        series: [
          {
            top: 0,
            type: 'funnel',
            left: '10%',
            width: '80%',
            gap: 16,
            minSize: 150,
            maxSize: 410,
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}  ({c}万)'
            },
            data: [
              { value: 100, name: '意向' },
              { value: 80, name: '方案' },
              { value: 60, name: '商务' },
              { value: 40, name: '即将成交' },
              { value: 20, name: '赢单' },

            ]
          },
          // 复制一份第一个的，隐藏主体把延长线放长
          {
            top: 0,
            type: 'funnel',
            left: '20%',
            width: '80%',
            gap: 16,
            z: 1,
            minSize: 150,
            maxSize: 150,
            label: {
              normal: {
                color: '#000000',
                position: 'right',
                borderWidth: 1,
                borderRadius: 4,
                padding: [11, 2],
                width: 100

              }

            },
            //右侧的百分比显示的地方
            labelLine: {
              show: true,
              normal: {
                length: 200,
                position: 'right',
                lineStyle: {
                  width: 3,
                  type: 'solid',
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                      offset: 0.4,
                      color: '#ffffff' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#EB080C' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  }

                },
              },

            },
            //主体是透明的
            itemStyle: {
              normal: {
                color: 'transparent',
                borderWidth: 0,
                opacity: 1
              }
            },
            data: [
              { value: 100, name: '意向' },
              { value: 80, name: '方案' },
              { value: 60, name: '商务' },
              { value: 40, name: '即将成交' },
              { value: 20, name: '赢单' },

            ]
          }
        ]
      };
      ;


    },
    getMainData3(){
      let data = [
  {
    name: "完成",
    value: 0
  },
  {
    name: "待综合",
    value: 0
  },
  {
    name: "待复评",
    value: 80
  },
  {
    name: "待自评",
    value: 249
  }
];
return {
  tooltip: {
    trigger: 'item',
    formatter: "{b} : {d}%"
  },
  series: [
    {
      top: 0,
      type: "funnel",
      gap: -1,
      minSize: 50,
      left: "12%",
      width: "70%",
      sort: "ascending",
      z: 2,
      label: {
        show: true,
        position: 'inside',
        formatter: function (params) {
          return params.name + params.value;
        },
        color: '#8F919B',
        fontSize: 13,
        position: 'right',
      },
      data: data,
    },
    {
      top: 0,
      type: "funnel",
      gap: 0,
      minSize: 50,
      left: "12%",
      width: "70%",
      sort: "ascending",
      label: {
        show: true,

        formatter: function (params) {
          return params.percent + '%';
        },
        color: '#fff',
        fontSize: 13,
        position: 'center',
      },
      data: data,
    },
  ],
};
    }
  },
};
</script>
<style scoped>
.row {
  margin: 5px -5px;

}
</style>

