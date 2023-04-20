<template>
    <el-container>
        <el-header class="header-box">
            <div>
                <span style="color: #409eff;font-weight: 800;">产品:共18071条有效数据,包含6个二级指标，44个三级指标</span>
            </div>
            <div style="margin-top: 5px;color: #909399;">
                产品重点的三级指标分别为车钥匙和锁、车联网相关和警示灯
            </div>
        </el-header>
        <el-main>
            <div>
                <!-- <div class="l2-box">
                    <div class="l2-item" v-for="(item, index) in list" :key="index">
                        {{ item.name }}
                    </div>
                </div> -->

                <div>
                    <el-row :gutter="20">
                        <el-col :span="8"> <dv-scroll-ranking-board :config="config"
                                style="width:100%;height:300px"></dv-scroll-ranking-board></el-col>
                        <el-col :span="16"> <base-echarts style="width: 100%;"
                                :options="echartsConfig"></base-echarts></el-col>

                    </el-row>
                    <el-divider content-position="left">L3重点指标</el-divider>
                    <el-row :gutter="20" style="margin-top: 10px;">
                        <el-col :span="8" v-for="(item, index) in l3_l45ListComputed">
                            <div class="grid-content bg-purple">
                                <div>
                                    <el-link type="primary">L3_{{ item.name + item.value }}</el-link>
        
                                </div>
                                <el-table :data="item.children" style="width: 100%" stripe height="500">
                                    <el-table-column prop="name" label="名称" width="180">
                                    </el-table-column>
                                    <el-table-column prop="percent" label="百分比" width="80">
                                        <template slot-scope="props">
                                            {{ props.row.percent }} %
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="value" label="数值">
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-col>

                    </el-row>


                </div>
            </div>

        </el-main>
    </el-container>
</template>
<script>

import { list, echartsConfig, l3_l45List } from './mock'
import BaseEcharts from "@/components/Echart/baseEcharts.vue";
export default {
    components: { BaseEcharts },
    data () {

        return {
            list: list,
            L3tableData1: [],
            l3_l45List
        }

    },
    computed: {
        config () {
            const data = list.map(item => {
                return {
                    name: item.name,
                    value: item.value
                }
            })
            return {

                data
            }
        },
        echartsConfig () {
            const xAxisData = list.map(item => item.name)
            const seriesData = list.map(item => item.value)
            echartsConfig.xAxis.data = xAxisData
            echartsConfig.series[0].data = seriesData
            return echartsConfig
        },
        l3_l45ListComputed () {
            this.l3_l45List.forEach(element => {
                const { children } = element
                let sum = children.reduce((prev, cur) => {
                    prev = prev + cur.value
                    return prev
                }, 0)
                element.value = sum
                children.forEach(item => {
                    item.percent = ((item.value / sum)*100).toFixed(2)
                })
            });
            return this.l3_l45List

        }
    },
    methods: {

    }
}
</script>
<style>
.header-box {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: aliceblue;
}

.l2-box {
    width: 200px;
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
}

.l2-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    background-color: antiquewhite;
    border-bottom: 1px solid #d4d4d4;
}

.info-name {
    color: black !important;
}

.ranking-value {

    color: black !important;
}
</style>

