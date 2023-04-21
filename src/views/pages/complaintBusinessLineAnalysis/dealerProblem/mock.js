const echarts = require('echarts')
function randomNumBoth (Min = 10, Max = 500) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
export const list = [
    {
        name: '信守承诺',
        value: 1123,
        id: 1,
        children: [
            { name: '承诺赠送未兑现', value: 112 },
            { name: '承诺购车优惠未兑现', value: 206 },
            { name: '未按照约定提供相应配置或按时交车', value: 134 },
            { name: '承诺退费未兑现', value: 121 },
            { name: '承诺的加装未兑现', value: 145 },
            { name: '附加服务承诺纠纷', value: 132 },
            { name: '其他', value: 145 },

        ]
    },
    {
        name: '售前服务态度',
        value: 1245,
        id: 2,
        children: [
            { name: '态度', value: 112 },
            { name: '无人接待/无人理睬', value: 112 },
            { name: '沟通/服务意识/销售技巧', value: 112 },
            { name: '电话/微信', value: 112 },
            { name: '其他', value: 112 }
        ]
    },
    {
        name: '退还订/定金',
        id: 3,
        value: 1233,
        children: [
            { name: '签订合同', value: 203 },
            { name: '明确表示未签订合同', value: 208 },
            { name: '未提及合同', value: 321 },
            { name: '有收据/发票', value: 321 }
        ]
    },
    {
        name: '销售顾问专业水平',
        id: 4,
        value: 564,
        children: [
            { name: '销售技能专业水平', value: 112 },
            { name: '产品介绍专业水平', value: 143 },
            { name: '金融贷款纠纷', value: 125 },
            { name: '其他', value: 154 }
        ]
    },
    {
        name: '服务公约',
        id: 5,
        value: 456,
        children: [
            { name: '捆绑消费', value: 114 },
            { name: '强制消费', value: 112 },
            { name: '发票金额有出入', value: 124 },
            { name: '未提供发票', value: 231 },
        ]
    },
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
            name: '产品问题',
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
        name: '信守承诺',
        value: 630,
        id: 1,
        children: [
            { name: '承诺赠送未兑现', value: 112 },
            { name: '承诺购车优惠未兑现', value: 206 },
            { name: '未按照约定提供相应配置或按时交车', value: 134 },
            { name: '承诺退费未兑现', value: 121 },
            { name: '承诺的加装未兑现', value: 145 },
            { name: '附加服务承诺纠纷', value: 132 },
            { name: '其他', value: 145 },

        ]
    },

    {
        name: '售前服务态度',
        value: 1390,
        id: 1,
        children: [
            { name: '态度', value: 112 },
            { name: '无人接待/无人理睬', value: 112 },
            { name: '沟通/服务意识/销售技巧', value: 112 },
            { name: '电话/微信', value: 112 },
            { name: '其他', value: 112 }
        ]
    },

    {
        name: '服务公约',
        value: 1390,
        id: 1,
        children: [
            { name: '捆绑消费', value: 114 },
            { name: '强制消费', value: 112 },
            { name: '发票金额有出入', value: 124 },
            { name: '未提供发票', value: 231 },
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





const ciyuanList ='不可靠的服务,虚假广告,售后服务不满意,销售人员欺诈行为,汽车质量问题,价格不透明或不公平,交付延迟,维修和保养服务不满意,客户支持不足,隐藏费用,收费不合理,销售方案中的误导信息,缺乏透明度,客户数据隐私问题,未能履行承诺,销售人员不专业,售后服务质量差,保修服务不足,购车流程复杂,市场营销策略不当,经销商对消费者态度冷漠,员工缺乏技能培训,退款和退货政策不合理,处理纠纷时缺乏透明度,缺乏沟通和协商'
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