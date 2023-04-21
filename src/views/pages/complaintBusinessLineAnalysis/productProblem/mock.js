const echarts = require('echarts')
function randomNumBoth (Min = 10, Max = 500) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
export const list = [
    {
        name: '发动机问题',
        value: randomNumBoth(500,1000),
        id: 1,
        children: [
            { name: '漏油', value: 112 },
            { name: '烧机油', value: 206 },
            { name: '异响', value: 134 },
            { name: '燃烧不完全', value: 121 },
            { name: '过热', value: 145 },
            { name: '启动困难', value: 132 }
        ]
    },
    {
        name: '座舱问题',
        value: randomNumBoth(500,1000),
        id: 2,
        children: [
            { name: '空调系统故障', value: 112 },
            { name: '座椅磨损', value: 112 },
            { name: '电子设备故障', value: 112 },
            { name: '内饰异味', value: 112 },
            { name: '车灯问题', value: 112 }
        ]
    },
    {
        name: '车载系统',
        id: 3,
        value: randomNumBoth(500,1000),
        children: [
            { name: '音频娱乐系统无法工作或音质下降', value: 203 },
            { name: '无法连接卫星', value: 208 },
            { name: '倒车雷达故障或误报', value: 321 },
            { name: 'USB接口或蓝牙连接问题', value: 321 },
            { name: '空调或加热系统失灵', value: 321 }
        ]
    },
    {
        name: '质量问题',
        id: 4,
        value: randomNumBoth(500,1000),
        children: [
            { name: '轮胎不耐用', value: 112 },
            { name: '刹车不好使', value: 143 },
            { name: '车灯太小', value: 125 },
            { name: '不省油', value: 154 }
        ]
    },
    {
        name: '维修成本',
        id: 5,
        value:randomNumBoth(500,1000),
        children: [
            { name: '费用高', value: 114 },
            { name: '费时间', value: 112 },
            { name: '不好修', value: 124 },
            { name: '修不好', value: 231 },
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
        name: '发动机问题',
        value: 630,
        id: 1,
        children: [
            { name: '燃油经济性下降', value: 112 },
            { name: '发动机漏油', value: 206 },
            { name: '缸体磨损', value: 134 },
            { name: '发动机启动困难或无法启动', value: 121 },
            { name: '发动机噪音增加', value: 145 },
            { name: '发动机抖动', value: 132 },
            { name: '发动机无法熄火', value: 145 },
        ]
    },

    {
        name: '导航问题',
        value: 1390,
        id: 1,
        children: [
            { name: '定位不准确', value: 112 },
            { name: '地图数据不完善或过时', value: 231 },
            { name: '语音指令不清晰或错误', value: 156 },
            { name: '音量调节问题', value: 234 },
            { name: '操作方法不熟悉', value: 124 },
            { name: '不稳定的软件和设备问题', value: 213 },
            { name: '升级和维护问题', value: 134 }
        ]
    },

    {
        name: '仪表盘问题',
        value: 1123,
        id: 1,
        children: [
            { name: '电源故障', value: 114 },
            { name: '传感器故障', value: 112 },
            { name: '熔断器损坏', value: 124 },
            { name: '显示屏故障', value: 231 },
            { name: '机械故障', value: 145 },
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





const ciyuanList ='故障,维修,召回,事故,安全,质量问题,保养,保修,退款,服务,保险,索赔,不良品,速度,燃油效率,刹车,方向盘,发动机,排放,电池问题,空调问题,车门问题,电子设备问题,制动系统问题,变速器问题,轮胎问题,车灯问题,悬挂系统问题,冷却系统问题,噪音问题,异味问题,内饰问题,外观问题,停车问题,路感问题,动力系统问题,方向盘问题,车身稳定性问题,燃油系统问题'
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