<template>
    <el-container class="page-box">

        <el-header class="header-box">
            <div>
                <span style="color: #409eff;font-weight: 800;">活动:共{{totle}}条有效数据，包含{{totleL2}}个二级指标，{{totleL3}}个三级指标
                </span>
            </div>
            <div style="margin-top: 5px;color: #909399;">
                活动重点的三级指标分别为电商平台、金融和其他活动
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
                        <el-col :span="16"> <base-echarts @click="clickL2Item" style="width: 100%;"
                                :options="echartsConfig"></base-echarts></el-col>

                    </el-row>
                    <el-divider content-position="left">三级重点指标</el-divider>
                    <el-row :gutter="20" style="margin-top: 10px;">
                        <el-col :span="8" v-for="(item, index) in l3_l45ListComputed" :key="index">
                            <div class="grid-content bg-purple">
                                <div class="l3-l45-title">
                                    三级指标:{{ item.name }}_{{ item.value }}
                                </div>
                                <el-table :data="item.children" style="width: 100%" stripe height="300" border>
                                    <el-table-column prop="name" label="名称" width="180" show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column prop="percent" label="百分比" width="80">
                                        <template slot-scope="props">
                                            {{ props.row.percent }} %
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="value" label="数值" sortable>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-col>

                    </el-row>


                </div>
            </div>
            <div style="margin: 30px;">
                <base-echarts style="width: 100%;" :options="ciyun"></base-echarts>

            </div>
            <el-drawer :title="l3Ttile" :visible.sync="drawerVisible" direction="rtl">
                <div style=" height: 800px;overflow-y: scroll;padding-bottom: 100px;">
                    <div v-if="drawerVisible">
                        <base-echarts height="400px" style="width: 400px" :options="l2_l3pie"></base-echarts>
                    </div>
                    <div style="width: 400px;padding: 20px; ">
                        <el-table :data="currentl2l3" style="width: 100%" stripe border>
                            <el-table-column prop="name" label="名称" width="180" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="percent" label="百分比" width="80">
                                <template slot-scope="props">
                                    {{ props.row.percent }} %
                                </template>
                            </el-table-column>
                            <el-table-column prop="value" label="数值" sortable>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-drawer>
        </el-main>
    </el-container>
</template>
<script>
import '@/utils/echarts-wordcloud.min.js'
import { list, echartsConfig, l2_l3pie, ciyun } from './mock'
import BaseEcharts from "@/components/Echart/baseEcharts.vue";
import { cloneDeep } from 'lodash'

import l1l2l3Data from '@/mock/l1l2l3.js'
import l4l5Data from '@/mock/l4l5.js'
import { getGroupData } from '@/utils'
// 处理一级指标
const list_l1 = getGroupData('Level 1-中文', l1l2l3Data).find(item => item.name === '活动兴趣').children || []
const list_l2 = getGroupData('Level 2-中文', list_l1)
list_l2.forEach(item => {
    const { children } = item
    let sum = children.reduce((prev, cur) => {
        prev = prev + cur.value
        return prev
    }, 0)
    item.value = sum
})

// 处理三级指标
const l3Type = ['五星服务', '金融', '其他活动']
const l4l5 = getGroupData('L3', l4l5Data).filter(item => l3Type.includes(item.name))
l4l5.forEach(item => {
    item.children.forEach(x => {
        x.name = x['L4/L5']
    })
})
export default {
    components: { BaseEcharts },
    data () {

        return {
            
            list: list_l2,
            l3_l45List: l4l5,
            l3Ttile: '二级指标',
            drawerVisible: false,
            l2_l3pie: l2_l3pie,
            currentl2l3: [],
            ciyun
        }

    },
    computed: {
        totleL3(){
           let sum =0
           this.list.forEach(item=>{
            sum+= item.children.length
           })
           return sum

        },
        totleL2(){
            return this.list.length
        },
        totle(){
            let sum =  this.list.reduce((prev, cur) => {
                    prev = prev + cur.value
                    return prev
                }, 0)
            return sum

        },
        config () {
            const data = this.list.map(item => {
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
            const xAxisData = this.list.map(item => item.name)
            const seriesData = this.list.map(item => item.value)
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
                    item.percent = ((item.value / sum) * 100).toFixed(2)
                })
            });
            return this.l3_l45List
        }
    },
    methods: {
        clickL2Item (params) {
            const { name } = params
            const target = this.list.find(item => item.name == name)
            const children = cloneDeep(target.children)
            children.forEach(item => {
                item.name = item['Level 3-中文']
            })
            this.l2_l3pie.series[0].data = cloneDeep(children)
            let sum = children.reduce((prev, cur) => {
                prev = prev + cur.value
                return prev
            }, 0)
            this.l3Ttile = '二级指标：' + name + ` (${sum})`
     
            children.forEach(item => {
                item.percent = ((item.value / sum) * 100).toFixed(2)
            })
            this.currentl2l3 = cloneDeep(children)
            this.drawerVisible = true
        },
    }
}
</script>
<style scoped>
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

.page-box>>>.info-name {
    color: black !important;
}

.page-box>>>.ranking-value {

    color: black !important;
}

.l3-l45-title {
    background: rgb(19, 124, 127);
    color: rgb(255, 255, 255);
    height: 30px;
    line-height: 30px;


}
</style>

