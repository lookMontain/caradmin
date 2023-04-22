<template>
    <div>
        <el-button type="danger" class="export" @click="exportData" size="mini">导出数据</el-button>
        <el-table :height="height" :data="tableData" border style="width: 100%" align="center"
            :span-method="objectSpanMethod" :cell-style="cellStyle">
            <el-table-column prop="Level 1-中文" label="一级指标" width="100" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="Level 2-中文" label="二级指标" width="100" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="Level 3-中文" label="三级指标" width="160" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="m1" label="1月" header-align="center">
                <el-table-column prop="m1-value" label="值">
                </el-table-column>
                <el-table-column prop="m1-proportion" label="占比">
                </el-table-column>
            </el-table-column>

            <el-table-column prop="m1-h" label="环比增长率" width="100">
            </el-table-column>
            <el-table-column prop="m2" label="2月" header-align="center">
                <el-table-column prop="m2-value" label="值">
                </el-table-column>
                <el-table-column prop="m2-proportion" label="占比">
                </el-table-column>
            </el-table-column>
            <el-table-column prop="m2-h" label="环比增长率" width="100">
            </el-table-column>
            <el-table-column prop="m3" label="3月" header-align="center">
                <el-table-column prop="m3-value" label="值">
                </el-table-column>
                <el-table-column prop="m3-proportion" label="占比">
                </el-table-column>
            </el-table-column>
            <el-table-column prop="m3-h" label="环比增长率" width="100">
            </el-table-column>
            <el-table-column prop="m4" label="4月" header-align="center">
                <el-table-column prop="m4-value" label="值">
                </el-table-column>
                <el-table-column prop="m4-proportion" label="占比">
                </el-table-column>
            </el-table-column>
            <el-table-column prop="m4-h" label="环比增长率" width="100">
            </el-table-column>
            <el-table-column prop="m5" label="5月" header-align="center">
                <el-table-column prop="m5-value" label="值">
                </el-table-column>
                <el-table-column prop="m5-proportion" label="占比">
                </el-table-column>
            </el-table-column>
            <el-table-column prop="m5-h" label="环比增长率" width="100">
            </el-table-column>
            <el-table-column prop="m6" label="6月" header-align="center">
                <el-table-column prop="m6-value" label="值">
                </el-table-column>
                <el-table-column prop="m6-proportion" label="占比">
                </el-table-column>
            </el-table-column>
            <el-table-column prop="m6-h" label="环比增长率" width="100">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import uuT from '@/utils/exportExcel'
import mockData from '@/mock/l1l2l3'
import { getGroupData } from '@/utils'
export default {
    props: {
        tableData1: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            tableData: [{
                l1: '产品',
                l2: '座舱',
                l3: '座椅',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            }, {
                l1: '产品',
                l2: '座舱',
                l3: '音响',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            },
            {
                l1: '产品',
                l2: '座舱',
                l3: '天窗及前后风挡玻璃',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            },
            {
                l1: '产品',
                l2: '座舱',
                l3: '随车配件及供电设备',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            },
            {
                l1: '产品',
                l2: '座舱',
                l3: '座舱相关',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            },
            {
                l1: '产品',
                l2: '座舱',
                l3: '后排娱乐系统',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            },
            {
                l1: '产品',
                l2: '座舱',
                l3: '方向盘',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            },
            {
                l1: '产品',
                l2: '座舱',
                l3: '车内照明',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            }, {
                l1: '产品',
                l2: '座舱',
                l3: '车内后视镜',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            }, {
                l1: '产品',
                l2: '车辆召回',
                l3: '咨询召回政策',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            }, {
                l1: '产品',
                l2: '车辆召回',
                l3: '咨询召回原因和范围',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            }, {
                l1: '产品',
                l2: '车辆召回',
                l3: '咨询召回时间',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            }, {
                l1: '产品',
                l2: '车辆召回',
                l3: '咨询召回费用',
                m1: '',
                "m1-value": "100",
                "m1-proportion": '19.7%',
                'm1-h': "7.2%",
                m1: '',
                "m2-value": "110",
                "m2-proportion": '20.7%',
                'm2-h': "7.6%",
                m3: '',
                "m3-value": "140",
                "m3-proportion": '21.7%',
                'm3-h': "7.9%",
                m4: '',
                "m4-value": "123",
                "m4-proportion": '11.7%',
                'm4-h': "7.6%",
                m5: '',
                "m5-value": "123",
                "m5-proportion": '11.7%',
                'm5-h': "7.6%",
                m6: '',
                "m6-value": "123",
                "m6-proportion": '11.7%',
                'm6-h': "7.6%",
            }],
            mergeObj: {}, // 用来记录需要合并行的下标
            mergeArr: ['Level 1-中文', 'Level 2-中文'],// 表格中的列名
            columnProps: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6'],
            height: window.innerHeight - 60 + 'px',
            keyObj: {
                '1': '产品关注',
                '2': '营销关注',
                '3': '活动兴趣',
                '4': '服务焦点'
            }, index: 1
        }
    },
    mounted () {
        console.log(this.$route.query)

        const index = this.$route.query.index
        this.index = index
        const keyWord = this.keyObj[index]
        this.tableData = this.handleData(keyWord)
        // this.handleTableData()
        this.getSpanArr(this.tableData);


    },
    methods: {
        handleSerieName (serieName) {
            const data = mockData.filter(item => item['Level 1-中文'] === serieName)
            data.forEach(item => {
                this.columnProps.forEach(key => {
                    item[key] = this.randomNumBothRound()
                    item[key + '-value'] = this.randomNumBothRound()
                    item[key + '-proportion'] = this.randomNumBoth() + '%'
                    item[key + '-h'] = this.randomNumBoth() + '%'
                })
            })
            return data
        },
        handleData (keyWord) {
            const data = this.handleSerieName(keyWord)
            // 按照分组
            const list = getGroupData('Level 2-中文', data).reduce((prev, cur) => {
                prev.push(...cur.children)
                return prev
            }, [])
            return list
        },
        exportData () {
            const data = this.tableData
            const row = data[0]
            const tHeader = ['Level 1-中文=Level 1-中文', 'Level 2-中文=Level 2-中文', 'Level 3-中文=Level 3-中文',
                '1月=m1-value', '1月占比=m1-proportion', '1月环比=m1-h',
                '2月=m2-value', '2月占比=m2-proportion', '2月环比=m2-h',
                '3月=m3-value', '3月占比=m3-proportion', '3月环比=m3-h',
                '4月=m4-value', '4月占比=m4-proportion', '4月环比=m4-h',
                '5月=m5-value', '5月占比=m5-proportion', '5月环比=m5-h',
                '6月=m6-value', '6月占比=m6-proportion', '6月环比=m6-h',
            ]
            // Object.keys(row).map(key=>{
            //     return `${key}=${key}`
            // })
            uuT.exportToExcel(tHeader, data, this.keyObj[this.index]+'指标')
        },
        randomNumBothRound (Min = 50, Max = 500) {
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range); //四舍五入
            return num;
        },
        randomNumBoth (Min = 2, Max = 20) {
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Rand * Range; //四舍五入
            return num.toFixed(2);
        },
        handleTableData () {
            this.tableData.forEach(item => {
                item['m1-value'] = this.randomNumBothRound()
                item['m1-proportion'] = this.randomNumBoth() + '%'
                item['m1-h'] = this.randomNumBoth() + '%'

                item['m2-value'] = this.randomNumBothRound()
                item['m2-proportion'] = this.randomNumBoth() + '%'
                item['m2-h'] = this.randomNumBoth() + '%'

                item['m3-value'] = this.randomNumBothRound()
                item['m3-proportion'] = this.randomNumBoth() + '%'
                item['m3-h'] = this.randomNumBoth() + '%'

                item['m4-value'] = this.randomNumBothRound()
                item['m4-proportion'] = this.randomNumBoth() + '%'
                item['m4-h'] = this.randomNumBoth() + '%'

                item['m5-value'] = this.randomNumBothRound()
                item['m5-proportion'] = this.randomNumBoth() + '%'
                item['m5-h'] = this.randomNumBoth() + '%'

                item['m6-value'] = this.randomNumBothRound()
                item['m6-proportion'] = this.randomNumBoth() + '%'
                item['m6-h'] = this.randomNumBoth() + '%'
            })

        },
        cellStyle ({ row, column, rowIndex, columnIndex }) {
            const property = column.property
            const endWIh = property.endsWith('-h')// 说明是环比增长率
            const ou = rowIndex % 2 === 0
            if (ou && endWIh) {
                return {
                    background: '#137c7f',
                    color: '#fff'
                }
            }
        },
        // getSpanArr方法
        getSpanArr (data) {
            this.mergeArr.forEach((key, index1) => {
                let count = 0; // 用来记录需要合并行的起始位置
                this.mergeObj[key] = []; // 记录每一列的合并信息
                data.forEach((item, index) => {
                    // index == 0表示数据为第一行，直接 push 一个 1
                    if (index === 0) {
                        this.mergeObj[key].push(1);
                    } else {
                        // 判断当前行是否与上一行其值相等 如果相等 在 count 记录的位置其值 +1 表示当前行需要合并 并push 一个 0 作为占位
                        if (item[key] === data[index - 1][key]) {
                            this.mergeObj[key][count] += 1;
                            this.mergeObj[key].push(0);
                        } else {
                            // 如果当前行和上一行其值不相等 
                            count = index; // 记录当前位置 
                            this.mergeObj[key].push(1); // 重新push 一个 1
                        }
                    }
                })
            })
        },
        // objectSpanMethod方法
        // 默认接受四个值 { 当前行的值, 当前列的值, 行的下标, 列的下标 }
        objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
            // 判断列的属性
            if (this.mergeArr.indexOf(column.property) !== -1) {
                // 判断其值是不是为0 
                if (this.mergeObj[column.property][rowIndex]) {
                    return [this.mergeObj[column.property][rowIndex], 1]
                } else {
                    // 如果为0则为需要合并的行
                    return [0, 0];
                }
            }
        }

    }
}
</script>
<style>
.export {

    position: absolute;
    top: 0px;
    right: 10px;
    z-index: 9999;
}
</style>
