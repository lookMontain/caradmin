<template>
    <div>
        <!-- <el-button type="primary" @click="changeOptions">改变</el-button> -->
        <el-row :gutter="10" class="row">
            <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>核心词</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="l4l5Option"></base-echarts>
                </el-card>

            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>level1定级</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="Level1PieOption"></base-echarts>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>核心词top1</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="hexinciTop1"></base-echarts>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="row">
            <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>描述词</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="miaosuci"></base-echarts>
                </el-card>

            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>level2定级</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="Level2PieOption"></base-echarts>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>核心词top2</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="hexinciTop2"></base-echarts>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="row">
            <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>临时词</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="linshici"></base-echarts>
                </el-card>

            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>level3定级</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="Level3PieOption"></base-echarts>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>核心词top3</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="hexinciTop3"></base-echarts>
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
            l4l5Option: {
                title: {
                    show: false,
                    text: '核心词'
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {

                        // interval: 0,
                        // rotate: 70,
                    },
                    data: ['保养', '救援', '刹车', '配件', '空调', '车型', '贷款']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: "top",
                                formatter: "{c}",
                                color: '#00C0FF'
                            }
                        },
                        // showBackground: true,
                        backgroundStyle: {
                            // color: 'rgba(180, 180, 180, 0.2)'
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
            Level1PieOption: {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center',
                },
                series: [
                    {
                        name: 'level1定级',
                        type: 'pie',
                        radius: ['20%', '50%'],
                        center: ['50%', '50%'],
                        // adjust the start angle
                        startAngle: 180,
                        label: {
                            show: true,
                            formatter (param) {
                                // correct the percentage
                                return param.name + ' (' + param.percent + '%)';
                            }
                        },
                        data: [
                            { value: 1048, name: '售后' },
                            { value: 735, name: '产品' },
                            { value: 580, name: '活动' },
                            { value: 484, name: '中央服务' },
                            { value: 300, name: '销售' },

                        ]
                    }
                ]
            },
            Level2PieOption: {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center',
                },
                series: [
                    {
                        name: 'level2定级',
                        type: 'pie',
                        radius: ['20%', '50%'],
                        center: ['50%', '50%'],
                        // adjust the start angle
                        startAngle: 180,
                        label: {
                            show: true,
                            formatter (param) {
                                // correct the percentage
                                return param.name + ' (' + param.percent + '%)';
                            }
                        },
                        data: [
                            { value: 1048, name: '保养咨询' },
                            { value: 735, name: '外部' },
                            { value: 580, name: '车辆召回' },
                            { value: 484, name: '购买与交付' },
                            { value: 300, name: '售后信息反馈' },

                        ]
                    }
                ]
            },
            Level3PieOption: {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center',
                },
                series: [
                    {
                        name: 'level3定级',
                        type: 'pie',
                        radius: ['20%', '50%'],
                        center: ['50%', '65%'],
                        // adjust the start angle
                        startAngle: 180,
                        label: {
                            show: true,
                            formatter (param) {
                                // correct the percentage
                                return param.name + ' (' + param.percent + '%)';
                            }
                        },
                        data: [
                            { value: 1048, name: '保养相关' },
                            { value: 735, name: '车门和车窗' },
                            { value: 580, name: '咨询召回政策' },
                            { value: 484, name: '行车记录仪' },
                            { value: 300, name: '售后服务措施' },

                        ]
                    }
                ]
            },
            hexinciTop1: {
                title: {
                    show: false,
                    text: '核心词Top1'
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {

                        // interval: 0,
                        // rotate: 70,
                    },
                    data: ['保养', '驾驶', '售后', '记录仪', '系统', '救援', '气囊']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'line',
                        label: {
                            normal: {
                                show: true,
                                position: "top",
                                formatter: "{c}",
                                color: '#00C0FF'
                            }
                        },
                        // showBackground: true,
                        backgroundStyle: {
                            // color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }
                ]
            },
            hexinciTop2: {
                title: {
                    show: false,
                    text: '核心词Top1'
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {

                        // interval: 0,
                        // rotate: 70,
                    },
                    data: ['救援', '车型', '刹车', '保养', '配件', '道路', '仪表盘']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [90, 100, 50, 180, 20, 90, 70],
                        type: 'line',
                        label: {
                            normal: {
                                show: true,
                                position: "top",
                                formatter: "{c}",
                                color: '#00C0FF'
                            }
                        },
                        // showBackground: true,
                        backgroundStyle: {
                            // color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }
                ]
            },
            hexinciTop3: {
                title: {
                    show: false,
                    text: '核心词Top1'
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {

                        // interval: 0,
                        // rotate: 70,
                    },
                    data: ['道路', '售后', '维修', '手机', '车型', '驾驶', '地址']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [90, 100, 50, 180, 20, 90, 70],
                        type: 'line',
                        label: {
                            normal: {
                                show: true,
                                position: "top",
                                formatter: "{c}",
                                color: '#00C0FF'
                            }
                        },
                        // showBackground: true,
                        backgroundStyle: {
                            // color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }
                ]
            },
            miaosuci: this.getMiaosuci1(),
            miaosuciTop1: this.getMiaosuci2(),
            linshici:this.getMiasuci3()
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
        getMiaosuci1 () {

            let data = [
                {
                    name: '保养-预约保养',
                    value: 180
                },
                {
                    name: '互联-定位-开启/关闭',
                    value: 150
                },
                {
                    name: '召回-维修-检测问题',
                    value:30
                },
                {
                    name: '购车-系统-连接问题-开启/关闭',
                    value: 12
                },
                {
                    name: '系统-配件',
                    value: 50
                },
                {
                    name: '召回-提示-更换-碎片',
                    value: 76
                },
                {
                    name: '召回-更换-如何处理',
                    value: 14
                },
                {
                    name: '召回-提示-保险-使用',
                    value: 1
                },
                {
                    name: '电力问题-操作方式-无法锁上',
                    value:11
                }
            ];
            let unit = '次';
            let colorObj = { 0: 'rgba(44, 212, 153, 1)', 1: 'rgba(152, 222, 61, 0.85)' };
            let attaData = [];
            data.forEach((it, index) => {
                if (it.value) {
                    attaData[index] = it.value
                } else {
                    attaData[index] = ''
                }
            })
            const sortData = data
            sortData.sort((a, b) => { return b.value - a.value })
            let salvProMax = []; // 背景按最大值
            for (let i = 0; i < sortData.length; i++) {
                if (sortData[i] === '') {
                    salvProMax.push(0)
                } else {
                    salvProMax.push(sortData[0] === '0' ? '1' : sortData[0])
                }
            }

            function attackSourcesDataFmt (sData) {
                let sss = []
                sData.forEach(function (item, i) {
                    sss.push({
                        value: item,
                        name: data[i].name
                    })
                })
                return sss
            }
            return {
                //你的代码
                tooltip: {
                    show: false,
                    backgroundColor: 'rgba(3,169,244, 0.5)', // 背景颜色（此时为默认色）
                    textStyle: {
                        fontSize: 16
                    }
                },
                color: ['#F7B731'],
                grid: {
                    left: '1%',
                    right: '0%',
                    bottom: '15%',
                    top: '5%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                },
                yAxis:
                {
                    type: 'category',
                    inverse: true,
                    axisTick: 'none',
                    axisLine: 'none',
                    show: true,
                }
                ,
                dataZoom: [
                    {
                        show: attackSourcesDataFmt(attaData).length > 6,
                        // realtime: true,
                        // start: 0,
                        right: '5%',
                        width: 8,
                        // height: 10, // 组件高度
                        showDetail: false, // 即拖拽时候是否显示详细数值信息 默认true
                        // end: 35,
                        startValue: 0,
                        endValue: 5,
                        brushSelect: false, // 是否开启刷选功能
                        orient: 'vertical',
                        backgroundColor: 'transparent',
                        showDataShadow: false,
                        fillerColor: 'rgba(64, 83, 133, 0.8)',
                        // borderColor: 'transparent',
                        handleSize: 0
                    },
                    {
                        zoomLock: true, // 这个开启之后只能通过鼠标左右拉动，不能滚动显示
                        type: 'inside',
                        orient: 'vertical'
                    }
                ],
                series: [
                    {
                        // 左侧底部椭圆 1号
                        type: 'pictorialBar',
                        symbolSize: [12, 15],
                        symbolOffset: [0, 0],
                        z: 12,
                        itemStyle: {
                            normal: {
                                color: (params) => {
                                    return colorObj['0']
                                }
                            }
                        },
                        data: [100, 100, 100, 100, 100, 100, 100]
                    },
                    //   中间椭圆 3 号
                    {
                        type: 'pictorialBar',
                        symbolSize: [12, 15],
                        symbolOffset: [0, 0],
                        z: 12,
                        symbolPosition: 'end',
                        itemStyle: {
                            normal: {
                                color: (params) => {
                                    return colorObj['1']
                                }
                            }
                        },
                        data: attackSourcesDataFmt(attaData)
                    },
                    {
                        name: '',
                        type: 'bar',
                        barWidth: '15px',
                        nameTextStyle: {
                            width: 20,
                            fontSize: 14,
                            fontFamily: 'Times New Roman',
                            borderColor: '#51bbfe',
                            borderWidth: 1,
                            backgroundColor: '#022453',
                            color: '#fff',
                            padding: [4, 5, 4, 165]
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 7,
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color: colorObj['0']
                                    },
                                    {
                                        offset: 1,
                                        color: colorObj['1']
                                    }
                                ])
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: ['0', '-20'],
                                formatter: function (params) {
                                    console.log('{a|' + params.name + '}' + '{' + 'b|' + params.value + '}' + '{c|' + unit + '}')
                                    return params.name + params.value + unit
                                    // const valueStyle = params.dataIndex > 2 ? 'b1' : 'b0'
                                    return '{a|' + params.name + '}' + '{' + 'b|' + params.value + '}' + '{c|' + unit + '}'
                                },
                                rich: {
                                    a: {
                                        color: '#5B5B5B',
                                        //   verticalAlign: 'bottom',
                                        align: 'top',
                                        padding: [0, 875, 0, 5],
                                        lineHeight: 35,
                                        fontSize: 14,
                                        width: 70,
                                        height: 22,
                                        fontFamily: 'PingFangSC-Regular, PingFang SC',
                                        fontWweight: 400
                                    },
                                    b: {
                                        width: 10,
                                        height: 18,
                                        color: ' #5B5B5B',
                                        fontSize: 16,
                                        lineHeight: 30,
                                        align: 'right',
                                        padding: [0, 5, 0, 0]
                                    },
                                    c: {
                                        color: '#909399',
                                        fontFamily: 'Microsoft YaHei',
                                        fontSize: 10,
                                        lineHeight: 30,
                                        align: 'right',
                                        padding: [0, 0, 0, 0]
                                    }
                                }
                            }
                        },
                        data: attackSourcesDataFmt(attaData)
                    },
                    {
                        type: 'bar',
                        barWidth: '15px',
                        barGap: '-100%',
                        margin: '20',
                        data: salvProMax,
                        textStyle: {
                            // 图例文字的样式
                            fontSize: 10,
                            color: '#DADADA'
                        },
                        itemStyle: {
                            normal: {
                                color: '#DADADA',
                                fontSize: 10,
                                barBorderRadius: 30,
                                opacity: 0.2
                            }
                        }
                    }
                ]
            };

        },
        getMiaosuci2 () {

            let data = [
                {
                    name: '商业服务业设施用地',
                    value: 7654.2332
                },
                {
                    name: '物流仓储用地',
                    value: 3654.2442
                },
                {
                    name: '工业用地',
                    value: 8654.2442
                },
                {
                    name: '采矿用地',
                    value: 4654.2332
                },
                {
                    name: '盐田',
                    value: 7654.2442
                },
                {
                    name: '城镇住宅用地',
                    value: 7654.2332
                },
                {
                    name: '农村宅基地',
                    value: 7654.2222
                },
                {
                    name: '机关团体新闻出版用地',
                    value: 654.4333
                },
                {
                    name: '科教文卫用地',
                    value: 7654.2332
                }
            ];
            let unit = '万公顷';
            let colorObj = { 0: 'rgba(44, 212, 153, 1)', 1: 'rgba(152, 222, 61, 0.85)' };
            let attaData = [];
            data.forEach((it, index) => {
                if (it.value) {
                    attaData[index] = it.value
                } else {
                    attaData[index] = ''
                }
            })
            const sortData = data
            sortData.sort((a, b) => { return b.value - a.value })
            let salvProMax = []; // 背景按最大值
            for (let i = 0; i < sortData.length; i++) {
                if (sortData[i] === '') {
                    salvProMax.push(0)
                } else {
                    salvProMax.push(sortData[0] === '0' ? '1' : sortData[0])
                }
            }

            function attackSourcesDataFmt (sData) {
                let sss = []
                sData.forEach(function (item, i) {
                    sss.push({
                        value: item,
                        name: data[i].name
                    })
                })
                return sss
            }
            return {
                //你的代码
                tooltip: {
                    show: false,
                    backgroundColor: 'rgba(3,169,244, 0.5)', // 背景颜色（此时为默认色）
                    textStyle: {
                        fontSize: 16
                    }
                },
                color: ['#F7B731'],
                grid: {
                    left: '1%',
                    right: '0%',
                    bottom: '15%',
                    top: '5%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                },
                yAxis:
                {
                    type: 'category',
                    inverse: true,
                    axisTick: 'none',
                    axisLine: 'none',
                    show: true,
                }
                ,
                dataZoom: [
                    {
                        show: attackSourcesDataFmt(attaData).length > 6,
                        // realtime: true,
                        // start: 0,
                        right: '5%',
                        width: 8,
                        // height: 10, // 组件高度
                        showDetail: false, // 即拖拽时候是否显示详细数值信息 默认true
                        // end: 35,
                        startValue: 0,
                        endValue: 5,
                        brushSelect: false, // 是否开启刷选功能
                        orient: 'vertical',
                        backgroundColor: 'transparent',
                        showDataShadow: false,
                        fillerColor: 'rgba(64, 83, 133, 0.8)',
                        // borderColor: 'transparent',
                        handleSize: 0
                    },
                    {
                        zoomLock: true, // 这个开启之后只能通过鼠标左右拉动，不能滚动显示
                        type: 'inside',
                        orient: 'vertical'
                    }
                ],
                series: [
                    {
                        // 左侧底部椭圆 1号
                        type: 'pictorialBar',
                        symbolSize: [12, 15],
                        symbolOffset: [0, 0],
                        z: 12,
                        itemStyle: {
                            normal: {
                                color: (params) => {
                                    return colorObj['0']
                                }
                            }
                        },
                        data: [100, 100, 100, 100, 100, 100, 100]
                    },
                    //   中间椭圆 3 号
                    {
                        type: 'pictorialBar',
                        symbolSize: [12, 15],
                        symbolOffset: [0, 0],
                        z: 12,
                        symbolPosition: 'end',
                        itemStyle: {
                            normal: {
                                color: (params) => {
                                    return colorObj['1']
                                }
                            }
                        },
                        data: attackSourcesDataFmt(attaData)
                    },
                    {
                        name: '',
                        type: 'bar',
                        barWidth: '15px',
                        nameTextStyle: {
                            width: 20,
                            fontSize: 14,
                            fontFamily: 'Times New Roman',
                            borderColor: '#51bbfe',
                            borderWidth: 1,
                            backgroundColor: '#022453',
                            color: '#fff',
                            padding: [4, 5, 4, 165]
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 7,
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color: colorObj['0']
                                    },
                                    {
                                        offset: 1,
                                        color: colorObj['1']
                                    }
                                ])
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: ['-5', '-30'],
                                formatter: function (params) {
                                    // const valueStyle = params.dataIndex > 2 ? 'b1' : 'b0'
                                    return '{a|' + params.name + '}' + '{' + 'b|' + params.value + '}' + '{c|' + unit + '}'
                                },
                                rich: {
                                    a: {
                                        color: '#5B5B5B',
                                        //   verticalAlign: 'bottom',
                                        align: 'top',
                                        padding: [0, 875, 0, 5],
                                        lineHeight: 35,
                                        fontSize: 14,
                                        width: 70,
                                        height: 22,
                                        fontFamily: 'PingFangSC-Regular, PingFang SC',
                                        fontWweight: 400
                                    },
                                    b: {
                                        width: 10,
                                        height: 18,
                                        color: ' #5B5B5B',
                                        fontSize: 16,
                                        lineHeight: 30,
                                        align: 'right',
                                        padding: [0, 5, 0, 0]
                                    },
                                    c: {
                                        color: '#909399',
                                        fontFamily: 'Microsoft YaHei',
                                        fontSize: 10,
                                        lineHeight: 30,
                                        align: 'right',
                                        padding: [0, 0, 0, 0]
                                    }
                                }
                            }
                        },
                        data: attackSourcesDataFmt(attaData)
                    },
                    {
                        type: 'bar',
                        barWidth: '15px',
                        barGap: '-100%',
                        margin: '20',
                        data: salvProMax,
                        textStyle: {
                            // 图例文字的样式
                            fontSize: 10,
                            color: '#DADADA'
                        },
                        itemStyle: {
                            normal: {
                                color: '#DADADA',
                                fontSize: 10,
                                barBorderRadius: 30,
                                opacity: 0.2
                            }
                        }
                    }
                ]
            };

        },
        getMiasuci3(){
                  // 复制代码
      const chartData = [
        {
          value: 38,
          name: "音乐",
        },
        {
          value: 145,
          name: "商店",
        },
        {
          value: 45,
          name: "语音",
        },
        {
          value: 21,
          name: "屏幕-商店",
        },
        {
          value: 51,
          name: "视频",
        },
        {
          value: 9,
          name: "导航",
        },
      ];
      const colorList = ['#88D9FF', '#0092FF', '#81EDD2', '#B0FA93', '#63F2FF', '#9999FE'];
      const sum = chartData.reduce((per, cur) => per + cur.value, 0);
      const gap = (1 * sum) / 100;
      const pieData1 = [];
      const pieData2 = [];
      const gapData = {
        name: "",
        value: gap,
        itemStyle: {
          color: "transparent",
        },
      };

      //图标位置显示
      let lefts = ["4%", "4%", "4%", "80%", "80%", "80%"];
      let tops = ["24%", "37%", "55%", "24%", "37%", "55%"];
      let legendData = [];
      let total = 0;
      chartData.forEach((item) => {
        total += item.value;
      });

      for (let i = 0; i < chartData.length; i++) {
        // 第一圈数据
        pieData1.push({
          ...chartData[i],
          itemStyle: {
            borderRadius: 10,
          },
        });
        pieData1.push(gapData);

        // 第二圈数据
        pieData2.push({
          ...chartData[i],
          itemStyle: {
            color: colorList[i],
            opacity: 0.21,
          },
        });
        pieData2.push(gapData);

        //  分散图例
        let bfb = parseInt((chartData[i].value / total) * 100) + "%";
        legendData.push({
          show: true,
          icon: "circle", //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
          left: lefts[i],
          top: tops[i],
          // itemWidth: '10px',
          // itemHeight:'10px',
          itemStyle: {
            color: colorList[i],
          },
          formatter:
            `{aa| ` + chartData[i].name + ` }` + `\n\n` + `{bb| ` + bfb + `}`, // 也可以是个函数return
          x: "left",
          textStyle: {
            // color: "#BAFF7F",
            rich: {
              aa: {
                color: "#ffffff",
              },
              bb: {
                color: colorList[i],
              },
            },
          },
          data: [chartData[i].name],
        });
      }
      // console.log("pieData2---------", pieData2);

      return {
        backgroundColor: '#0F141B',
        title: {
          text: "全部",
          subtext: "600",
          x: "49%",
          y: "38%",
          itemGap:15,
          textStyle: {
            color: "#f5f5f6",
            fontSize: 15,
            fontWeight: "bold",
          },
          subtextStyle: {
             
            color: "#f5f5f6",
            fontSize: 30,
            fontWeight: "bold",
          },
          textAlign:'center'
        },

        // backgroundColor: "#0F141B",
        tooltip: {
          show: true,
          backgroundColor: "rgba(0, 0, 0,.8)",
          textStyle: {
            color: "#fff",
          },
        },
        legend: legendData,
        grid: {
          top: 30,
          right: 20,
          bottom: 10,
          left: 10,
        },
        color: colorList,
        series: [
              {
                name: '',
                type: 'pie',
                roundCap: true,
                radius: ['66%', '70%'],
                center: ['50%', '45%'],
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                data: pieData1
            },
                 {
                type: 'pie',
                radius: ['66%', '60%'],
                center: ['50%', '45%'],
                gap: 1.71,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                silent: true,
                data: pieData2
            },
            {
         type: 'gauge',
         zlevel: 2,
         splitNumber: 90,
         radius: '60%',
         center: ['50%', '45%'],
         startAngle: 90,
         endAngle: -269.9999,
         axisLine: {
            show: false,
         },
         axisTick: {
            show: false,
         },
         axisLabel: {
            show: false,
         },
         splitLine: {
            show: true,
            length: 7,
            lineStyle: {
               width: 4,
               color: 'rgb(33,85,130)',
            },
         },
         pointer: {
            show: 0,
         },
         detail: {
            show: 0,
         },
      },
    {
                type: 'pie',
                center: ['50%', '45%'],
                radius: [0, '45.6%'],
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                itemStyle: {
                    color: 'rgba(75, 126, 203,.1)'
                },
                silent: true,
                data: [
                    {
                        value: 100,
                        name: ''
                    }
                ]
            }
        ],
      };

        },

    },
};
</script>
<style>
.row{
    margin: 5px -5px;
}
</style>
  
