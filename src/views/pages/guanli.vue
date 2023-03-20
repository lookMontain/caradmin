<template>
    <div>
        <!-- <el-button type="primary" @click="changeOptions">改变</el-button> -->
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
                <el-card><base-echarts :options="l4l5Option"></base-echarts></el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                <el-card><pie-echarts :pieData="pieData"></pie-echarts></el-card></el-col>
            <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
                <el-card><pie-echarts :pieData="pieData"></pie-echarts></el-card></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
                <el-card><pie-echarts :pieData="pieData"></pie-echarts></el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                <el-card><pie-echarts :pieData="pieData"></pie-echarts></el-card></el-col>
            <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
                <el-card><pie-echarts :pieData="pieData"></pie-echarts></el-card></el-col>
        </el-row>
    </div>
</template>
  
<script>
import PieEcharts from "@/components/Echart/pieEcharts.vue";
import BaseEcharts from "@/components/Echart/baseEcharts.vue";
export default {
    name: "kehu",
    components: {
        PieEcharts,
        BaseEcharts
    },
    data () {
        return {
            l4l5Option: {
                title: {
                    text: 'L4L5定级'
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {

                        interval: 0,
                        rotate: 70,
                    },
                    data: ['预约保养', '车门无法打开', '轮胎故障', '异地保养咨询', '保险退款咨询', '出风口调节咨询', '车门车窗解锁问题咨询']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }
                ]
            },
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
        changeOptions () {
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
  
