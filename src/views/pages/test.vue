<template>
    <div>
      <el-button type="primary" @click="changeOptions">改变</el-button>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
          <el-card><pie-echarts :pieData="pieData"></pie-echarts></el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
          <el-card><pie-echarts :pieData="pieData"></pie-echarts></el-card
        ></el-col>
        <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
          <el-card><pie-echarts :pieData="pieData"></pie-echarts></el-card
        ></el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  import PieEcharts from "@/components/Echart/pieEcharts.vue";
  export default {
    name: "App",
    components: {
      PieEcharts,
    },
    data() {
      return {
        pieData: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      };
    },
    methods: {
      changeOptions() {
        setInterval(() => {
          let randomNum = Math.random().toFixed(3);
          this.pieData = [
            { value: randomNum * 100 + 100, name: "Search Engine" },
            { value: randomNum * 200 + 230, name: "Direct" },
            { value: randomNum * 10 + 158, name: "Email" },
            { value: randomNum * 1000 + 355, name: "Union Ads" },
            { value: randomNum * 500 + 498, name: "Video Ads" },
          ];
        }, 2000);
      },
    },
  };
  </script>
  
