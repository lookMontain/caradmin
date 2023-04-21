const echarts = require('echarts')
function randomNumBoth (Min = 10, Max = 500) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
export const list = [
    {
        name: '智能互联（互联1.0）',
        value: 1620,
        id: 1,
        children: [
            { name: '软件下载', value: 112 },
            { name: '注册&登陆', value: 206 },
            { name: '功能使用相关', value: 298 },
            { name: '续费', value: 432 },


        ]
    },
    {
        name: 'Mercedes me互联商店',
        value: 112,
        id: 2,
        children: [
            { name: '购买服务/续费', value: 112 },
        ]
    },
    {
        name: 'Mercedes me 互联/ MMA app（互联2.0）',
        id: 3,
        value: 1233,
        children: [
            { name: '软件下载', value: 123 },
            { name: '注册&登陆', value: 125 },
            { name: '实名认证', value: 342 },
            { name: '车辆绑定', value: 124 },
            { name: '功能使用相关', value: 423 }
        ]
    },
    {
        name: '梅赛德斯奔驰官方应用程序',
        id: 4,
        value: 3213,
        children: [
            { name: '软件下载', value: 187 },
            { name: '注册&登陆', value: 156 },
            { name: '实名认证', value: 176 },
            { name: '车辆绑定', value: 122 },
            { name: '功能使用相关', value: 122 },
        ]
    },
    {
        name: '其他应用',
        id: 5,
        value: 123,
        children: [
            { name: '奔驰微信小程序相关咨询', value: 123 },
 
        ]
    },
    {
        name: '经销商相关问询',
        id: 6,
        value: 1820,
        children: [
            { name: '经销商信息', value: 244 },
            { name: '经销商销售问题反馈', value: 134 },
            { name: '经销商售后问题反馈', value: 122 },
            { name: '撤销投诉', value: 123 },
            { name: '经销商员工问询', value: 145 },
        ]
    },
    {
        name: '非奔驰乘用车业务',
        id: 6,
        value: 1560,
        children: [
            { name: '奔驰卡车咨询', value: 198 },
            { name: '腾势', value: 125 },
            { name: '巴博斯/劳伦士/卡尔森', value: 234 },
            { name: '进口商务车', value: 123 },
        ]
    },
    {
        name: '公司信息和公共关系',
        id: 6,
        value: 1782,
        children: [
            { name: '个人信息修改', value: 203 },
            { name: '核实电话真实性', value: 124 },
            { name: '第三方协查/走私车', value: 203 },
            { name: '公共关系', value: 248 },
            { name: '热点事件', value: 203 },
            { name: '市场合作', value: 333 },
            { name: '经销商网络开发', value: 123 },
            { name: '非奔驰车主咨询', value: 321 },
            { name: '奔驰公司信息咨询', value: 145 },
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
        axisLabel:{
            interval:0,
            rotate:0,
            formatter: function (value) {
                if (value.length > 6) {
                  return `${value.slice(0, 6)}...`;
                }
                return value;
              }
        },
        data: []// 根据list 来生成
    },
    yAxis: {
        type: 'value'
    },
    series: [

        {
            name: '服务焦点',
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
        name: '经销商信息',
        value: 479,
        id: 1,
        children: [
            { name: '客户问询有销售权限经销商信息', value: 123 },
            { name: '客户问询有售后服务权限经销商信息', value: 456 },

        ]
    },

    {
        name: '功能使用相关',
        value: 1390,
        id: 1,
        children: [
            { name: '远程定位车辆相关咨询', value: 108 },
            { name: '远程发送导航目的地相关咨询', value: 219 },
            { name: '远程解锁车辆相关咨询', value: 179 },
            { name: 'ME互联功能咨询', value: 279 },

            { name: 'ME互联续费咨询', value: 234 },
            { name: '互联APP使用问题（绑定等）', value: 123 },
            { name: '互联APP使用问题（开通、PIN码重置等）', value: 321 },
            { name: '蓄电池临界点短信咨询', value: 112 },

            { name: '在线购车', value: 241 },
            { name: '星友荟', value: 134 },
            { name: '维修保养预约功能', value: 157 },
            { name: '道路救援功能', value: 132 },
        ]
    },

    {
        name: '车辆绑定',
        value: 434,
        id: 1,
        children: [
            { name: '车辆绑定咨询', value: 123 },
            { name: '车辆解绑咨询', value: 321 },

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





const ciyuanList = '软件下载,注册&登陆,功能使用相关,续费,购买服务/续费,软件下载,注册&登陆,实名认证,车辆绑定,功能使用相关,软件下载,注册&登陆,实名认证,车辆绑定,功能使用相关,奔驰微信小程序相关咨询,经销商信息,经销商销售问题反馈,经销商售后问题反馈,撤销投诉,车门和车窗,经销商员工问询,奔驰卡车咨询,腾势,巴博斯/劳伦士/卡尔森,进口商务车,个人信息修改,核实电话真实性,第三方协查/走私车,公共关系,热点事件,市场合作,经销商网络开发,非奔驰车主咨询,奔驰公司信息咨询'


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