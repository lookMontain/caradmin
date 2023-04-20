const echarts = require('echarts')
function randomNumBoth (Min = 10, Max = 500) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
export const list = [
    {
        name: '市场营销，传播与活动',
        value: 1620,
        id: 1,
        children: [
            { name: '车主认证类', value: 112 },
            { name: '五星服务', value: 206 },


        ]
    },
    {
        name: '调研',
        value: 3320,
        id: 2,
        children: [
            { name: '产品类', value: 112 },
            { name: '服务类', value: 112 },
        ]
    },
    {
        name: '销售活动',
        id: 3,
        value: 5320,
        children: [
            { name: '金融', value: 203 },
            { name: '电商平台', value: 208 },
            { name: '售后服务措施', value: 321 }
        ]
    },
    {
        name: '经销商活动',
        id: 4,
        value: 3320,
        children: [
            { name: '经销商销售活动', value: 112 },
            { name: '经销商售后活动', value: 143 }
        ]
    },
    {
        name: '其他活动',
        id: 5,
        value: 2320,
        children: [
            { name: '其他活动1', value: 114 },
            { name: '其他活动2', value: 112 },

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
        name: '五星服务',
        value: 630,
        id: 1,
        children: [
            { name: '星驿站咨询', value: 100 },
            { name: '星助理咨询', value: 200 },
            { name: '机场停车服务相关咨询', value: 320 },

        ]
    },

    {
        name: '金融',
        value: 1390,
        id: 1,
        children: [
            { name: '购置税相关咨询', value: 108 },
            { name: '重购政策咨询', value: 219 },
            { name: '金融置换服务咨询（置换补贴）', value: 179 },
            { name: '金融购车相关（贷款/还款）', value: 279 },
        ]
    },

    {
        name: '其他活动',
        value: 1390,
        id: 1,
        children: [
            { name: '星友荟活动相关咨询', value: 85 },
            { name: "She's Mercedes活动", value: 135 },
            { name: 'AMG Club活动', value: 85 },
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





const ciyuanList = '车主认证类,五星服务,产品类,服务类,金融,电商平台,售后服务措施,经销商销售活动,经销商售后活动,其他活动'


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