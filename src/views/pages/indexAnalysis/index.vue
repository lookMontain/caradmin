<template>
    <el-table :data="tableData" border style="width: 100%" align="center" :span-method="objectSpanMethod"
    :cell-style="cellStyle"
    >
        <el-table-column prop="l1" label="一级指标">
        </el-table-column>
        <el-table-column prop="l2" label="二级指标">
        </el-table-column>
        <el-table-column prop="l3" label="三级指标">
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
</template>

<script>
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
                l2: '内部',
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
                l2: '内部',
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
                l2: '内部',
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
                l2: '内部',
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
                l2: '内部',
                l3: '内部相关',
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
                l2: '内部',
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
                l2: '内部',
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
                l2: '内部',
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
                l2: '内部',
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
            },{
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
            },{
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
            },{
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
            },{
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
            mergeArr: ['l1', 'l2'] // 表格中的列名
        }
    },
    mounted () {
        this.getSpanArr(this.tableData);
    },
    methods: {
        cellStyle({row, column, rowIndex, columnIndex}){
            const property=column.property
            const endWIh=property.endsWith('-h')// 说明是环比增长率
            const ou=rowIndex%2===0
            if(ou&&endWIh){
                return {
                    background:'#137c7f',
                    color:'#fff'
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
