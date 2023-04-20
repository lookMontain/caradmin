const echarts = require('echarts')
function randomNumBoth (Min = 10, Max = 500) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
export const list = [
    {
        name: '特殊购买类型',
        value: 1620,
        id: 1,
        children: [
            { name: '大客户购车', value: 112 },
            { name: '二手车购置', value: 206 },
            { name: '留学生购车', value: 298 },
            { name: '使馆购车', value: 432 },


        ]
    },
    {
        name: '购买与交付',
        value: 3320,
        id: 2,
        children: [
            { name: '试乘试驾/新车上市时间', value: 112 },
            { name: '配置查询', value: 112 },
            { name: '预订', value: 123 },
            { name: '物流运输', value: 146 },

            { name: '上牌事宜', value: 112 },
            { name: '保险事宜', value: 123 },
            { name: 'PDI', value: 146 },
            { name: '合同相关', value: 123 },
            { name: '新车交车环节', value: 146 },
        ]
    },
    {
        name: '车辆价格',
        id: 3,
        value: 5320,
        children: [
            { name: '市场指导价', value: 203 },
            { name: '选装套餐价格', value: 208 },
            { name: '购车产生的额外费用', value: 321 }
        ]
    },
    {
        name: '金融与租赁',
        id: 4,
        value: 3320,
        children: [
            { name: '审批流程', value: 112 },
            { name: '贷款利率及计算/金融服务费', value: 143 },
            { name: '解押相关', value: 176 },
            { name: '还款事宜', value: 124 },
            { name: '租赁相关', value: 203 },
        ]
    },
    {
        name: '售前信息反馈',
        id: 5,
        value: 2320,
        children: [
            { name: '销售流程建议', value: 114 },
            { name: '精品相关', value: 112 },
            { name: '索要产品手册/杂志', value: 124 },
 
        ]
    },
    {
        name: '维修与保修咨询',
        id: 6,
        value: 1820,
        children: [
            { name: '三包&保修政策', value: 203 },
            { name: '自费零部件保修', value: 333 },
            { name: '维修进度查询', value: 333 },
        ]
    },
    {
        name: '保养咨询',
        id: 6,
        value: 1560,
        children: [
            { name: '保养政策', value: 203 },
            { name: '保养相关', value: 333 },
        ]
    },
    {
        name: '售后产品购买',
        id: 6,
        value: 1782,
        children: [
            { name: '修养套餐购买', value: 203 },
            { name: '延保购买', value: 333 }
        ]
    },
    {
        name: '道路救援',
        id: 6,
        value: 1980,
        children: [
            { name: '紧急道路救援', value: 203 },
            { name: '道路救援报销', value: 333 }
        ]
    },
    {
        name: '保险相关',
        id: 6,
        value: 1562,
        children: [
            { name: '咨询车辆续保', value: 203 },
            { name: '车辆事故出保', value: 333 }
        ]
    },
    {
        name: '售后信息反馈',
        id: 6,
        value: 1980,
        children: [
            { name: '售后流程建议', value: 203 },
        ]
    }
]
export const echartsConfig = {
    title: {
        text: '二级指标',
        // subtext: 'l2指标'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params) {
            var tar = params[0];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: { show: false },
        data: []// 根据list 来生成
    },
    yAxis: {
        type: 'value'
    },
    series: [

        {
            name: '产品关注',
            type: 'bar',
            barWidth: '30px',
            itemStyle: {
                color: "#137c7f",
                normal: {
                    // 设置每个柱状条的颜色为线性渐变
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#90cacb' },
                            { offset: 0.5, color: '#3f8588' },
                            { offset: 1, color: '#137c7f' }
                        ]
                    )
                }
            },
            label: {
                show: true,
                position: 'inside'
            },
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
            data: []
        }
    ]
}
export const l3_l45List = [
    {
        name: '预订',
        value: 1390,
        id: 1,
        children: [
            { name: '预订购买车辆', value: 100 },
            { name: '预订购买零部件', value: 200 },
            { name: '特殊要求车辆预订', value: 320 },
            { name: '特殊要求零部件预订', value: 120 },
            { name: '现车咨询', value: 110 }

        ]
    },

    {
        name: '配置查询',
        value: 1390,
        id: 1,
        children: [
            { name: '配置咨询', value: 108 },
            { name: '车型对比咨询', value: 219 },
            { name: '配置加装咨询', value: 179 },
            { name: '配置选装咨询', value: 279 },
        ]
    },

    {
        name: '上牌事宜',
        value: 1390,
        id: 1,
        children: [
            { name: '上牌相关流程咨询', value: 85 },
            { name: '环保清单相关咨询', value: 135 },
            { name: '发动机拓印相关咨询', value: 203 },
            { name: '车架号拓印相关咨询', value: 109 },
            { name: '补办购车发票', value: 209 },
            { name: '进京证相关咨询', value: 111 },
            { name: '排放标准相关咨询', value: 209 },
            { name: '补办合格证', value: 143 }
        ]
    },

]
export const l2_l3pie = {
    // backgroundColor:'rgb(19, 124, 127)',
    legend: {
        top: 'bottom'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    toolbox: {
        show: true,
        //         iconStyle:{
        // color:'#000'
        //         },
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: '指标',
            type: 'pie',
            radius: ['30%', '40%'],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            label: {
                normal: {
                    formatter: '{b}：{d}%'
                }
            },
            data: [

            ]
        }
    ]
};





const ciyuanList = '大客户购车,二手车购置,留学生购车,使馆购车,试乘试驾/新车上市时间,配置查询,预订,物流运输,上牌事宜,保险事宜,PDI,合同相关,新车交车环节,市场指导价,选装套餐价格,购车产生的额外费用,审批流程,贷款利率及计算/金融服务费,解押相关,还款事宜,租赁相关,销售流程建议,精品相关,索要产品手册/杂志,三包&保修政策,自费零部件保修,维修进度查询,保养政策,保养相关,修养套餐购买,延保购买,紧急道路救援,道路救援报销,道路救援相关政策,咨询车辆续保,车辆事故出保,售后流程建议'


const c1list = ciyuanList.split(',').map((x, index) => {
    if (index === 5) {
        return {
            value: randomNumBoth(10, 40),
            name: x,
            textStyle: {
                shadowBlur: 4,
                shadowColor: '#ECEFFF',
                shadowOffsetY: 14,
                color: '#73DDFF',
            }
        }
    }
    return {
        value: randomNumBoth(10, 40),
        name: x
    }
})

export const ciyun = {
    tooltip: {
        show: true,
        borderColor: '#fe9a8bb3',
        borderWidth: 1,
        padding: [10, 15, 10, 15],
        confine: true,
        backgroundColor: 'rgba(255, 255, 255, .9)',
        textStyle: {
            color: 'hotpink',
            lineHeight: 22
        },
        extraCssText: 'box-shadow: 0 4px 20px -4px rgba(199, 206, 215, .7);border-radius: 4px;'
    },
    series: [
        {
            type: 'wordCloud',
            // The shape of the "cloud" to draw. Can be any polar equation represented as a
            // callback function, or a keyword present. Available presents are circle (default),
            // cardioid (apple or heart shape curve, the most known polar equation), diamond (
            // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

            shape: 'pentagon',

            // A silhouette image which the white area will be excluded from drawing texts.
            // The shape option will continue to apply as the shape of the cloud to grow.

            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.

            left: 'center',
            top: 'center',
            width: '100%',
            height: '100%',
            right: null,
            bottom: null,

            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.

            sizeRange: [14, 50],

            // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

            rotationRange: [0, 0],
            rotationStep: 0,

            // size of the grid in pixels for marking the availability of the canvas
            // the larger the grid size, the bigger the gap between words.

            gridSize: 25,

            // set to true to allow word being draw partly outside of the canvas.
            // Allow word bigger than the size of the canvas to be drawn
            drawOutOfBound: false,

            // If perform layout animation.
            // NOTE disable it will lead to UI blocking when there is lots of words.
            layoutAnimation: true,

            // Global text style
            textStyle: {
                fontFamily: 'PingFangSC-Semibold',
                fontWeight: 600,
                color: function (params) {
                    let colors = ['#fe9a8bb3', '#fe9a8bb3', '#fe9a8b03', '#9E87FFb3', '#9E87FFb3', '#9E87FFb3', '#fe9a8bb3', '#fe9a8bb3', '#fe9a8bb3', '#73DDFF', '#58D5FF']
                    return colors[parseInt(Math.random() * 10)];
                },
            },
            emphasis: {
                focus: 'none',
            },

            // Data is an array. Each array item must have name and value property.
            data: c1list,
        },
    ],
};