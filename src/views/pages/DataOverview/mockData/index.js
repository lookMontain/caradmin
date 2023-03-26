export const threeLineOptions = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['咨询', '投诉', '预警']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['2020', '2021', '2022', '2023']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '咨询',
            type: 'bar',
            stack: 'AD',
            markLine: {
                show: false,
                lineStyle: {
                    type: 'dashed'
                },
                data: [
                    [{ type: 'min' }, { type: 'max' }]
                ]
            },
            barWidth: '20px',
            data: [120, 332, 301, 100]
        },
        {
            name: '投诉',
            type: 'bar',
            stack: 'AD',

            markLine: {
                show: false,
                lineStyle: {
                    type: 'dashed'
                },
                data: [
                    [{ type: 'min' }, { type: 'max' }]
                ]
            },
            barWidth: '20px',
            data: [120, 110, 111, 150]
        },

        {
            name: '预警',
            type: 'bar',
            stack: 'AD',
            data: [820, 1018, 964, 1400],
            barWidth: '20px',
            markLine: {
                lineStyle: {
                    type: 'dashed'
                },
                data: [
                    [{ type: 'min' }, { type: 'max' }]
                ]
            }
        }
    ]
}
export const threeLine_serie_ItemOptions = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        data: [
            '售后',
            '产品',
            '活动',
            '营销',
            '中央服务',
            '流程',
            '方案'
        ]
    },
    series: [
        {
            name: 'detail',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            center: ["50%", "70%"],
            label: {
                position: 'inner',
                fontSize: 14
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1548, name: '售后' },
                { value: 775, name: '产品' },
                { value: 679, name: '活动', selected: true }
            ]
        },
        {
            name: 'detail',
            type: 'pie',
            center: ["50%", "70%"],
            radius: ['45%', '60%'],
            labelLine: {
                length: 30
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: [
                { value: 1048, name: '营销' },
                { value: 335, name: '中央服务' },
                { value: 310, name: '流程' },
                { value: 251, name: '方案' }
            ]
        }
    ]
};

export const searchOptions = {
    title: {
        show: true,
        text: '',
        textStyle: {
            color: '#000',
            fontSize: 14,
        }
    },
    legend: {},
    tooltip: {
        trigger: 'axis',
        showContent: false
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    dataset: {
        source: [
            ['product', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            ['咨询', 20, 30, 40, 35, 34, 15, 56, 15, 12, 25, 34, 42],
            ['投诉', 20, 15, 24, 55, 16, 45, 32, 25, 14, 32, 10, 20],
            ['预警', 40, 35, 34, 15, 56, 15, 12, 25, 34, 42, 20, 30]
        ]
    },
    series: [
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            // data: [20, 30, 40, 35, 34, 15, 56, 15, 12, 25, 34, 42],
            emphasis: { focus: 'series' }
        },
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            // data: [20, 15, 24, 55, 16, 45, 32, 25, 14, 32, 10, 20],
            emphasis: { focus: 'series' }
        },
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            // data:[40, 35, 34, 15, 56, 15, 12, 25, 34, 42, 20, 30],
            emphasis: { focus: 'series' }
        },
        {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {
                focus: 'self'
            },
            label: {
                formatter: '{b}: {@1月} ({d}%)'
            },
            encode: {
                itemName: 'product',
                value: '1月',
                tooltip: '1月'
            }
        }
    ]
}
export const heixinciTop1 = {
    title: {
        show: false,
        text: 'Nightingale Chart',
        subtext: 'Fake Data',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center'
    },
    series: [
        {
            name: '核心词',
            type: 'pie',
            radius: [20, 140],
            radius: ['10%', '80%'],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: true,
                formatter (param) {
                    // correct the percentage
                    return param.name + ' (' + param.percent * 2 + '%)';
                }
            },
            data: [
                { value: 120, name: '保养' },
                { value: 310, name: '驾驶' },
                { value: 180, name: '售后' },
                { value: 435, name: '记录仪' },
                { value: 100, name: '系统' }
            ]
        }
    ]
}
export const heixinciTop2 = {
    title: {
        show: false,
        text: '核心词Top2',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        // data: [
        //     '保养',
        //     '驾驶',
        //     '售后',
        //     '记录仪',
        //     '系统'
        // ]
    },
    series: [
        {
            name: '核心词',
            type: 'pie',
            radius: [20, 140],
            radius: ['10%', '80%'],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: true,
                formatter (param) {
                    // correct the percentage
                    return param.name + ' (' + param.percent * 2 + '%)';
                }
            },
            data: [
                { value: 335, name: '救援' },
                { value: 310, name: '车型' },
                { value: 274, name: '刹车' },
                { value: 235, name: '保养' },
                { value: 400, name: '配件' }
            ]
        }
    ]
}
export const heixinciTop3 = {
    title: {
        show: false,
        text: '核心词Top3',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
    },
    series: [
        {
            name: '核心词',
            type: 'pie',
            radius: [20, 140],
            radius: ['10%', '80%'],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: true,
                formatter (param) {
                    // correct the percentage
                    return param.name + ' (' + param.percent * 2 + '%)';
                }
            },
            data: [
                { value: 35, name: '道路' },
                { value: 30, name: '维修' },
                { value: 74, name: '手机' },
                { value: 25, name: '底盘' },
                { value: 40, name: '气囊' }
            ]
        }
    ]
}

function randomNumBoth (Min = 10, Max = 500) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
export const gexinciTop10 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show: false,
    },
    grid: {
        top: 0,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['保养', '维修', '系统', '气囊', '安全气囊', '仪表盘', '机盖', '道路', '大灯'].reverse()
    },
    series: [
        {
            name: 'top10',
            type: 'bar',
            data: [58212, 56254, 41032, 12755, 9145, 7146, 6852, 5852, 4112].reverse(),
            itemStyle: {
                normal: {
                    color: function (params) {

                        // build a color map as your need.

                        var colorList = [

                            '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',

                            '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',

                            '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'

                        ];

                        return colorList[params.dataIndex]

                    },
                }
            }
        }
    ]
};

const ci = ['机油', '刹车片', '挡风玻璃', '玻璃水', '汽车', '气囊', '手机', '配件', '大灯', '轮胎']

const list1 = ci.map((x, index) => {
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
export const ciyun1 = {
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
            data: list1,
        },
    ],
};

const c2 = ['五星', '保养-预约保养', '维修-保养', '调节-检测问题-维修-使用-如何调节', , '中央服务', '销售', '电力问题', '车道保持', '商店', '语音']

const list2 = ci.map((x, index) => {
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
export const ciyun2 = {
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
            data: list2,
        },
    ],
};

export const chexiOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'a1',
            type: 'bar',
            stack: 'Ad',
            barWidth: 15,
            emphasis: {
                focus: 'series'
            },
            data: [320, 0, 0, 0, 0]
        },
        {
            name: 'a2',
            type: 'bar',
            stack: 'Ad',
            barWidth: 15,
            emphasis: {
                focus: 'series'
            },
            data: [120, 0, 0, 0, 0]
        },
        {
            name: 'b1',
            type: 'bar',
            stack: 'bd',
            barWidth: 15,
            emphasis: {
                focus: 'series'
            },
            data: [0, 182, 0, 0, 0]
        },
        {
            name: 'b2',
            type: 'bar',
            stack: 'bd',
            barWidth: 15,
            emphasis: {
                focus: 'series'
            },
            data: [0, 232, 0, 0, 0]
        },
        {
            name: 'c1',
            type: 'bar',
            barWidth: 15,
            data: [0, 0, 964, 0, 0],
            emphasis: {
                focus: 'series'
            },
            stack: 'cd'
        },
        {
            name: 'c2',
            type: 'bar',
            barWidth: 15,
            stack: 'cd',
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 701, 0, 0]
        },
        {
            name: 'd1',
            type: 'bar',
            data: [0, 0, 0, 100, 0],
            emphasis: {
                focus: 'series'
            },
            stack: 'dd'
        },
        {
            name: 'd2',
            type: 'bar',
            barWidth: 15,
            stack: 'dd',
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 540, 0]
        },
        {
            name: 'e1',
            type: 'bar',
            barWidth: 15,
            data: [0, 0, 0, 0, 400],
            emphasis: {
                focus: 'series'
            },
            stack: 'e'
        },
        {
            name: 'e2',
            type: 'bar',
            barWidth: 15,
            stack: 'e',
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 0, 0, 550]
        }
    ]
}
//情感系数
export const affectiveCoefficientOption = {
    legend: {
        data: ['咨询', '投诉', '预警']
    },
    radar: {
        //shape: 'circle',
        indicator: [
            { name: '产品', max: 100 },
            { name: '活动', max: 100 },
            { name: '售后', max: 100 },
            { name: '中央服务', max: 100 },
            { name: '销售', max: 100 },
            { name: '综合', max: 100 }
        ]
    },
    series: [
        {
            name: '情感系数',
            type: 'radar',
            label: {
                show: true,
            },
            data: [
                {
                    value: [95, 98, 89, 91, 85, 99],
                    name: '咨询',

                },
                {
                    value: [98, 89, 91, 99, 94, 90],
                    name: '投诉'
                },
                {
                    value: [80, 81, 84, 85, 78, 69],
                    name: '预警'
                }
            ]
        }
    ]
}
export function initD3Option()  {

    /*************************
pie3D 尝试

更新时间: 2020.7.21 13:30 v0.5
使用组件: grid3D、xAxis3D、yAxis3D、zAxis3D、surface

*************************
【 getParametricEquation 函数说明 】 :
*************************
    根据传入的
    startRatio（浮点数）: 当前扇形起始比例，取值区间 [0, endRatio)
    endRatio（浮点数）: 当前扇形结束比例，取值区间 (startRatio, 1]
    isSelected（布尔值）:是否选中，效果参照二维饼图选中效果（单选）
    isHovered（布尔值）: 是否放大，效果接近二维饼图高亮（放大）效果（未能实现阴影）
    
    生成 3D 扇形曲面

*************************
【 getPie3D 函数说明 】 :
*************************
    根据传入的饼图数据，生成模拟 3D 饼图的配置项 option
    
    饼图数据格式示意：
    [{
        name: '数据1',
        value: 10
    }, {
        // 数据项名称
        name: '数据2',
        value : 56,
        itemStyle:{
            // 透明度
            opacity: 0.5,
            // 扇形颜色
            color: 'green'
        }
    }]
    
*************************
【 鼠标事件监听说明 】 :
*************************
    click： 实现饼图的选中效果（单选）
            大致思路是，通过监听点击事件，获取到被点击数据的系列序号 params.seriesIndex，
            然后将对应扇形向外/向内移动 10% 的距离。
            
    mouseover： 近似实现饼图的高亮（放大）效果
            大致思路是，在饼图外部套一层透明的圆环，然后监听 mouseover 事件，获取
            到对应数据的系列序号 params.seriesIndex 或系列名称 params.seriesName，
            如果鼠标移到了扇形上，则先取消高亮之前的扇形（如果有）,再高亮当前扇形；
            如果鼠标移到了透明圆环上，则只取消高亮之前的扇形（如果有），不做任何高亮。
            
    globalout： 当鼠标移动过快，直接划出图表区域时，有可能监听不到透明圆环的 mouseover，
            导致此前高亮没能取消，所以补充了对 globalout 的监听。

        
*************************/

    // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
    function getParametricEquation (startRatio, endRatio, isSelected, isHovered, k, height) {

        // 计算
        let midRatio = (startRatio + endRatio) / 2;

        let startRadian = startRatio * Math.PI * 2;
        let endRadian = endRatio * Math.PI * 2;
        let midRadian = midRatio * Math.PI * 2;

        // 如果只有一个扇形，则不实现选中效果。
        if (startRatio === 0 && endRatio === 1) {
            isSelected = false;
        }

        // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
        k = typeof k !== 'undefined' ? k : 1 / 3;

        // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
        let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
        let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;

        // 计算高亮效果的放大比例（未高亮，则比例为 1）
        let hoverRate = isHovered ? 1.05 : 1;

        // 返回曲面参数方程
        return {

            u: {
                min: -Math.PI,
                max: Math.PI * 3,
                step: Math.PI / 32
            },

            v: {
                min: 0,
                max: Math.PI * 2,
                step: Math.PI / 20
            },

            x: function (u, v) {
                if (u < startRadian) {
                    return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
                }
                if (u > endRadian) {
                    return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
                }
                return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
            },

            y: function (u, v) {
                if (u < startRadian) {
                    return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
                }
                if (u > endRadian) {
                    return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
                }
                return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
            },

            z: function (u, v) {
                if (u < - Math.PI * 0.5) {
                    return Math.sin(u);
                }
                if (u > Math.PI * 2.5) {
                    return Math.sin(u);
                }
                return Math.sin(v) > 0 ? 1 * height : -1;
            }
        };
    };

    // 生成模拟 3D 饼图的配置项
    function getPie3D (pieData, internalDiameterRatio) {

        let series = [];
        let sumValue = 0;
        let startValue = 0;
        let endValue = 0;
        let legendData = [];
        let k = typeof internalDiameterRatio !== 'undefined' ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio) : 1 / 3;

        // 为每一个饼图数据，生成一个 series-surface 配置
        for (let i = 0; i < pieData.length; i++) {

            sumValue += pieData[i].value;

            let seriesItem = {
                name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
                type: 'surface',
                parametric: true,
                wireframe: {
                    show: false
                },
                pieData: pieData[i],
                pieStatus: {
                    selected: false,
                    hovered: false,
                    k: k
                }
            };

            if (typeof pieData[i].itemStyle != 'undefined') {

                let itemStyle = {};

                typeof pieData[i].itemStyle.color != 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null;
                typeof pieData[i].itemStyle.opacity != 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null;

                seriesItem.itemStyle = itemStyle;
            }
            series.push(seriesItem);
        }

        // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
        // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
        for (let i = 0; i < series.length; i++) {
            endValue = startValue + series[i].pieData.value;
            console.log(series[i]);
            series[i].pieData.startRatio = startValue / sumValue;
            series[i].pieData.endRatio = endValue / sumValue;
            series[i].parametricEquation = getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio, false, false, k, series[i].pieData.value);

            startValue = endValue;

            legendData.push(series[i].name);
        }

        // // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
        series.push({
            name: 'mouseoutSeries',
            type: 'surface',
            parametric: true,
            wireframe: {
                show: false,
            },
            itemStyle: {
                opacity: 0.1,
                color: '#E1E8EC',
            },
            parametricEquation: {
                u: {
                    min: 0,
                    max: Math.PI * 2,
                    step: Math.PI / 20,
                },
                v: {
                    min: 0,
                    max: Math.PI,
                    step: Math.PI / 20,
                },
                x: function (u, v) {
                    return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 2;
                },
                y: function (u, v) {
                    return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 2;
                },
                z: function (u, v) {
                    return Math.cos(v) > 0 ? -0.5 : -5;
                },
            },
        });

        // // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
        series.push({
            name: 'mouseoutSeries',
            type: 'surface',
            parametric: true,
            wireframe: {
                show: false,
            },
            itemStyle: {
                opacity: 0.1,
                color: '#E1E8EC',
            },
            parametricEquation: {
                u: {
                    min: 0,
                    max: Math.PI * 2,
                    step: Math.PI / 20,
                },
                v: {
                    min: 0,
                    max: Math.PI,
                    step: Math.PI / 20,
                },
                x: function (u, v) {
                    return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 2;
                },
                y: function (u, v) {
                    return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 2;
                },
                z: function (u, v) {
                    return Math.cos(v) > 0 ? -5 : -7;
                },
            },
        });
        series.push({
            name: 'mouseoutSeries',
            type: 'surface',
            parametric: true,
            wireframe: {
                show: false,
            },
            itemStyle: {
                opacity: 0.1,
                color: '#E1E8EC',

            },

            parametricEquation: {
                u: {
                    min: 0,
                    max: Math.PI * 2,
                    step: Math.PI / 20,
                },
                v: {
                    min: 0,
                    max: Math.PI,
                    step: Math.PI / 20,
                },
                x: function (u, v) {
                    return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 2.2;
                },
                y: function (u, v) {
                    return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 2.2;
                },
                z: function (u, v) {
                    return Math.cos(v) > 0 ? -7 : -7;
                },
            },
        });
        return series;
    }
    // 传入数据生成 option
    const optionsData = [
        {
            name: '在线',
            value: 94,
            itemStyle: {
                //   opacity: 0.5,
                color: '#dc3545',
            },
        },

        {
            name: '离线',
            value: 87,
            itemStyle: {
                //   opacity: 0.5,
                color: '#007bff',
            },
        },
        {
            name: '作业中',
            value: 11,
            itemStyle: {
                //   opacity: 0.5,
                color: '#F5B64C',
            },
        },
    ];

    const series = getPie3D(optionsData, 0.8, 240, 28, 26, 0.5);

    series.push({
        name: 'pie2d',
        type: 'pie',
        label: {
            opacity: 1,
            fontSize: 13,
            lineHeight: 20,
            textStyle: {
                fontSize: 22,
            },
        },
        labelLine: {

            length: 60,
            length2: 60,
        },
        startAngle: -30, //起始角度，支持范围[0, 360]。
        clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ['20%', '50%'],

        center: ['50%', '50%'],
        data: optionsData,
        itemStyle: {
            opacity: 0,
        },
    });
    // 准备待返回的配置项，把准备好的 legendData、series 传入。
    const option = {
        legend: {
            tooltip: {
                show: true,
            },
            data: ['在线', '离线', '作业中'],
            bottom: '5%',
            textStyle: {
                color: '#fff',
                fontSize: 32,
            },
        },
        animation: true,
        tooltip: {
            formatter: params => {
                if (params.seriesName !== 'mouseoutSeries' && params.seriesName !== 'pie2d') {
                    return `${params.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>${option.series[params.seriesIndex].pieData.value + '辆'}`;
                }
            },
            textStyle: {
                fontSize: 45
            },
        },
        title: {

            x: 'center',
            top: '20',
            textStyle: {
                color: '#fff',
                fontSize: 22,
            },
        },
        backgroundColor: '#333',
        labelLine: {
            show: true,
            lineStyle: {
                color: '#7BC0CB',
            },
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{b} \n{c} {d}%',
        },
        xAxis3D: {
            min: -1,
            max: 1,
        },
        yAxis3D: {
            min: -1,
            max: 1,
        },
        zAxis3D: {
            min: -1,
            max: 1,
        },
        grid3D: {
            show: false,
            boxHeight: 0.5,
            //top: '30%',
            bottom: '50%',
            environment: '#021041',

            viewControl: {
                distance: 180,
                alpha: 25,
                beta: 60,

                autoRotate: false, // 自动旋转
            },

        },

        series: series,
    };
    return option
}
export const d3Option=initD3Option()

function getResultStatus(){
    let datas = [
        { value: 40,value1: 188.82, name: '已建议', rate: '94.41%' },
        { value: 24,value1: 33.45, name: '转接后解决', rate: '66.9%' },
        { value: 32,value1: 228.1, name: '已解决', rate: '87.06%' },
         { value: 22,value1: 128.1, name: '核实中', rate: '12.06%' },
      ];
      
      let datap = [];
      let colorList = ['#3399ff', '#85c285', '#ffc266', '#ff8585', '#c299ff'];
      let color = colorList.splice(0, datas.length);
      for (let i = 0; i < datas.length; i++) {
        datap.push({
          value: datas[i].value,
          name: 'rosetemp' + i,
        });
        color.push('#FFFFFF');
      }
      datap = datas.concat(datap);
      
      return {
        backgroundColor: '#fff',
        legend: {
          bottom: '2%',
        //   left: 'center',
          orient: 'vertical',
          data: datas,
          icon: 'circle',
          itemWith: 8,
          itemHeight: 8,
          itemGap: 10,
          // padding: [5, 10, 5, 0],
          formatter(name) {
            const item = datas.filter((item) => item.name === name)[0];
            return `{name|${name}}{value1| ${item.value1+'（条）}'}{name2|${item.rate}}`;
          },
          textStyle: {
            rich: {
              name: {
                color: '#595959',
                fontSize: 14,
                width: 150,
                fontWeight:600
              },
              name2: {
                color: '#595959',
                fontSize: 14,
                width: 200,
                fontWeight:600
              },
              value1: {
                color: '#595959',
                fontSize: 14,
                width: 170,
                fontWeight:600
              },
            },
          },
        },
        title: {
          text: '处理结果状态指标',
          show:false,
          top: '17%',
          textAlign: 'center',
          left: '49.5%',
          textStyle: {
            color: '#262626',
            fontSize: 18,
            fontWeight: '600',
          },
        },
        color: color,
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [40, 200],
            center: ['50%', '65%'],
            roseType: 'radius',
            silent: true,
            startAngle: 180,
            legendHoverLink: false,
            itemStyle: {
              borderRadius: 0,
            },
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: false,
              },
            },
            color: ['#f6f8fe', '#ffffff'],
            data: [
              { value: 10, name: 'r' },
              { value: 10, name: 'ro' },
            ],
          },
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [40, 190],
            center: ['50%', '65%'],
            roseType: 'radius',
            startAngle: 180,
            legendHoverLink: false,
            itemStyle: {
              borderRadius: 0,
              borderColor: '#fff',
              borderWidth: 1,
            },
            label: {
              show: true,
              position: 'inside',
              color: '#fff',
              formatter(params) {
                return params.data.rate;
              },
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: datap,
          },
        ],
      };
}
export const handleResultStatus=getResultStatus()

export function get30Day(){
    var xData = (function () {
        var data = [];
        for (var i = 1; i < 31; i++) {
          data.push(i);
        }
        return data;
      })();
      var arr = new Array(30).fill(0);
      let s1=[]
      let s2=[]
      let s3=[]
      arr.forEach(x=>{
        s1.push(randomNumBoth(20,30))
        s2.push(randomNumBoth(10,20))
        s3.push(randomNumBoth(1,10))
      })
    return {
        backgroundColor: "#fff",
        title: {
          show:false,
          text: "本年商场顾客男女人数统计",
          subtext: "BY Wang Dingding",
          x: "4%",
      
          textStyle: {
            color: "#fff",
            fontSize: "22",
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: "16",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          borderWidth: 0,
          top: 100,
          bottom: 95,
          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          // x: "4%",
          // top: "8%",
          // textStyle: {
          //   color: "#90979c",
          // },
          data: ['咨询', "投诉", "预警"],
        },
      
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#000",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            axisLabel: {
              interval: 0,
            },
            data: xData,
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#000",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
            },
            splitArea: {
              show: false,
            },
          },
        ],
        dataZoom: [
          {
            show: true,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,
            // start: 10,
            // end: 80,
            startValue: 0,
            handleIcon:
              "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
            handleSize: "110%",
            handleStyle: {
              color: "#d3dee5",
            },
            textStyle: {
              color: "#000",
            },
            borderColor: "#90979c",
          },
          {
            type: "inside",
            show: true,
            height: 15,
            // start: 1,
            // end: 35,
            startValue: 0
          },
        ],
        series: [
          {
            name: '咨询',
            type: 'line',
            stack: 'a',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: s1
          },
          {
            name: '投诉',
            type: 'line',
            stack: 'a',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: s2
          },
          {
            name: '预警',
            type: 'line',
            stack: 'a',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: s3
          },
        ],
      };
      
}
export const day30Option=get30Day()