<template>
    <div>
        <el-row :gutter="10" class="row">
            <el-col :xs="24" :sm="24" :md="17" :lg="17" :xl="17">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>总览</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <div style="display: flex;width: 100%;">
                        <base-echarts ref="allDataViewRef" :options="threeLineOptions" style="flex: 1;"
                            @click="showItemDetail"></base-echarts>
                        <base-echarts ref="allDataViewDetailRef" width="600px" v-if="itemDetailVisible"
                            :options="threeLine_serie_ItemOptions"></base-echarts>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
                <el-card class="box-card" style="height:206px">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="搜索" name="first">
                            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </el-tab-pane>
                        <el-tab-pane label="项目" name="second">
                            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </el-tab-pane>
                        <el-tab-pane label="客户" name="third">
                            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </el-tab-pane>
                        <el-tab-pane label="流程" name="fourth">
                            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
                <el-card class="box-card" >
                    <div slot="header" class="clearfix">
                        <span>常用功能</span>
                        <!-- <i class="el-icon-more" style="float: right; padding: 3px 0"></i> -->
                    </div>
                    <div class="toolbox">
                        <div>
                            <img style="width:64px;height:64px" :src="fankuiIcon">
                            <div class="toolbox-text">反馈</div>
                        </div>
                        <div>
                            <img style="width:64px;height:64px" :src="guanliIcon">
                            <div class="toolbox-text">管理</div>
                        </div>
                        <div>
                            <img style="width:64px;height:64px" :src="fenxiIcon">
                            <div class="toolbox-text">分析</div>
                        </div>
                        <div>
                            <img style="width:64px;height:64px" :src="zixunIcon">
                            <div class="toolbox-text">咨询</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="row">
            <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <el-form :inline="true" :model="searchParam" style="height: 24px;">
                            <el-form-item label="区域">
                                <el-select style="width:120px" v-model="searchParam.area" placeholder="请选择区域" size="mini">
                                    <el-option v-for="item in optionsArea" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="年份">
                                <el-select style="width:120px" v-model="searchParam.year" placeholder="请选择年份" size="mini">
                                    <el-option v-for="item in optionsYear" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="经销商">
                                <el-select style="width:120px" v-model="searchParam.dealer" placeholder="请选择经销商" size="mini">
                                    <el-option v-for="item in optionsDealer" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-button size="mini" type="primary" @click="onSubmit">查询</el-button>
                            </el-form-item>
                        </el-form>

                    </div>
                    <base-echarts ref="myChartSearch" height="500px" :options="searchOptions"></base-echarts>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>近一个月变化数据</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts height="500px" :options="day30Option"></base-echarts>
                </el-card>

            </el-col>
        </el-row>
        <el-row :gutter="10" class="row">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>核心词Top1</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="heixinciTop1"></base-echarts>
                </el-card>

            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>核心词Top2</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="heixinciTop2"></base-echarts>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>核心词Top3</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="heixinciTop3"></base-echarts>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="row">
            <el-col :xs="24" :sm="14" :md="14" :lg="14" :xl="14">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>核心词综合Top10</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="heixinciTop10"></base-echarts>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>情感系数</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="affectiveCoefficientOption"></base-echarts>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="row">
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>level1定级</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="hexinciTop1"></base-echarts>
                </el-card>

            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>level2定级</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="hexinciTop2"></base-echarts>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>level3定级</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="hexinciTop3"></base-echarts>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="row">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>车系统计</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="chexiOption"></base-echarts>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24"  :md="12" :lg="12" :xl="12">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>状态指标</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="handleResultStatus"></base-echarts>
                </el-card>

            </el-col>
        </el-row>
        <el-row :gutter="10" class="row">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>产品词云</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="ciyun1"></base-echarts>
                </el-card>

            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>概况词云</span>
                        <i class="el-icon-more" style="float: right; padding: 3px 0"></i>
                    </div>
                    <base-echarts :options="ciyun2"></base-echarts>
                </el-card>

            </el-col>
        </el-row>
    </div>
</template>
  
<script>
import '@/utils/echarts-wordcloud.min.js'
import PieEcharts from "@/components/Echart/pieEcharts.vue";
import BaseEcharts from "@/components/Echart/baseEcharts.vue";
import * as echarts from "echarts";
import fankuiIcon from '@/assets/fankui.png'
import guanliIcon from '@/assets/guanli.png'
import fenxiIcon from '@/assets/fenxi.png'
import zixunIcon from '@/assets/zixun.png'
import { threeLineOptions, threeLine_serie_ItemOptions, searchOptions, heixinciTop1, heixinciTop2, heixinciTop3, gexinciTop10, ciyun1, ciyun2, chexiOption,affectiveCoefficientOption,day30Option,handleResultStatus} from './mockData'
export default {
    name: "dataOverview",// 数据总览
    components: {
        PieEcharts,
        BaseEcharts
    },
    data () {
        return {
            threeLineOptions,// 第一个图
            threeLine_serie_ItemOptions,// 第一个图的详情
            input3: '',
            searchOptions: searchOptions,
            ciyun1,
            ciyun2,
            chexiOption,
            affectiveCoefficientOption,// 情感系数
            day30Option,
            handleResultStatus,
            fankuiIcon,
            guanliIcon,
            fenxiIcon,
            zixunIcon,
            itemDetailVisible: false,
            activeName: 'first',
            searchParam: {
                area: '',
                year: '',
                dealer: ""
            },
            optionsArea: [{ value: '东北', label: '东北' }, { value: '华北', label: '华北' }, { value: '西南', label: '西南' }],
            optionsYear: [{ value: '2020', label: '2020' }, { value: '2021', label: '2021' }, { value: '2022', label: '2022' }, { value: '2023', label: '2023' }],
            optionsDealer: [{ value: 'A', label: 'A' }, { value: 'B', label: 'B' }, { value: 'C', label: 'C' }],
            pieData: [
                { value: 1048, name: "Search Engine" },
                { value: 735, name: "Direct" },
                { value: 580, name: "Email" },
                { value: 484, name: "Union Ads" },
                { value: 300, name: "Video Ads" },
            ],
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
                    },
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        label: {
                            normal: {
                                show: false,
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
                    },
                    {
                        data: [90, 100, 50, 180, 20, 90, 70],
                        type: 'bar',
                        label: {
                            normal: {
                                show: false,
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
                        data: [10, 80, 30, 10, 20, 70, 20],
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
                    },
                    {
                        data: [10, 80, 30, 10, 20, 70, 20],
                        type: 'bar',
                        label: {
                            normal: {
                                show: false,
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

            heixinciTop1: heixinciTop1,
            heixinciTop2: heixinciTop2,
            heixinciTop3: heixinciTop3,
            heixinciTop10: gexinciTop10
        };
    },
    mounted () {
        setTimeout(() => {
            this.$nextTick(() => {
                this.handleSearchOptions(searchOptions)
            })
        })

    },
    methods: {
        handleSearchOptions (searchOptions) {
            const echarts = this.$refs.myChartSearch.getEchart()
            echarts.on('updateAxisPointer', (event) => {
                const xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                    const dimension = xAxisInfo.value + 1;
                    echarts.setOption({
                        series: {
                            name: 'minxi',
                            id: 'pie',
                            label: {
                                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                            },
                            encode: {
                                value: dimension,
                                tooltip: dimension
                            }
                        }
                    });
                }
            });
            echarts.setOption(searchOptions);
        },
        onSubmit () {
            // 改变

            let dataValue = [20, 30, 40, 35, 34, 15, 56, 15, 12, 25, 34, 42];
            dataValue = dataValue.map(item => {
                return this.randomNumBoth(10, 40)
            })
            let dataValue1 = [40, 35, 34, 15, 56, 15, 12, 25, 34, 42, 20, 30,];
            dataValue1 = dataValue1.map(item => {
                return this.randomNumBoth(10, 100)
            })
            let dataValue2 = [40, 35, 34, 15, 56, 15, 12, 25, 34, 42, 20, 30,];
            dataValue2 = dataValue2.map(item => {
                return this.randomNumBoth(10, 300)
            })
            const data = [
                ['product', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                ['咨询', ...dataValue],
                ['投诉', ...dataValue1],
                ['预警', ...dataValue2]
            ]
            searchOptions.title.text =`${this.searchParam.area}-${this.searchParam.year}-${this.searchParam.dealer}`
            searchOptions.dataset.source=data
            this.handleSearchOptions(searchOptions)
            //this.xifen = this.getxifen(this.searchParam.area + '-' + this.searchParam.year + '-' + this.searchParam.dealer)
        },
        randomNumBoth (Min = 10, Max = 500) {
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range); //四舍五入
            return num;
        },
        showItemDetail (parmas) {
            debugger
            this.itemDetailVisible = true
            this.threeLine_serie_ItemOptions.series.forEach(item => {
                item.data.forEach(x => {
                    x.value = this.randomNumBoth(10, 500)
                })
                item.name = parmas.seriesName
            })
            debugger
            this.$nextTick(() => {
                this.$refs.allDataViewRef.reload()
                this.$refs.allDataViewDetailRef.reload()
            })

        },
    },
};
</script>
<style scoped>
.row {
    margin: 5px -5px;
}

.toolbox {
    display: flex;
    justify-content: space-between;
}

.toolbox-text {
    margin-top: 10px;
    text-align: center;
}
</style>
  
