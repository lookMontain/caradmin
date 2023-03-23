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
    legend: {
        show:false,
    },
    grid: {
        top:10,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E', 'F']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '车系1',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
                focus: 'series'
            },
            barWidth: '20px',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '车系2',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '车系3',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '车系4',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '车系5',
            type: 'bar',
            stack: 'Ad',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
                focus: 'series'
            },
            markLine: {
                lineStyle: {
                    type: 'dashed'
                },
                data: [[{ type: 'min' }, { type: 'max' }]]
            }
        },
        {
            name: '车系6',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            }, stack: 'Ad',
            data: [620, 732, 701, 734, 1090, 1130, 1120]

        }
    ]
}