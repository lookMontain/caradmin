const echarts = require('echarts')
function randomNumBoth (Min = 10, Max = 500) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
export const list = [
    {
        name: '仪表盘',
        value: 1320,
        id: 1,
        children: [
            { name: '警示灯', value: 112 },
            { name: '信息显示', value: 206 },
            { name: '操作设置', value: 298 },
            { name: '智能辅助操作系统', value: 432 },
            { name: '雨刮操作', value: 112 },

        ]
    },
    {
        name: '车辆召回',
        value: 3320,
        id: 2,
        children: [
            { name: '咨询召回原因和范围', value: 111 },
            { name: '咨询召回时间', value: 112 },
            { name: '咨询召回费用', value: 123 },
            { name: '咨询召回政策', value: 146 }
        ]
    },
    {
        name: 'COMAND系统',
        id: 3,
        value: 5320,
        children: [
            { name: '导航', value: 203 },
            { name: '收音机', value: 208 },
            { name: '电话', value: 321 },
            { name: '媒体', value: 124 },
            { name: '车辆', value: 132 },
            { name: '辅助', value: 169 },
            { name: '系统', value: 177 },
            { name: '空调', value: 115 },
            { name: '蓝牙', value: 214 },
            { name: '车联网相关', value: 301 },
            { name: '行车记录仪', value: 121 },
            { name: '常用选项', value: 212 },
            { name: '背景主题', value: 115 },
            { name: '屏幕显示', value: 118 }
        ]
    },
    {
        name: '外部',
        id: 4,
        value: 3320,
        children: [
            { name: '前机舱', value: 112 },
            { name: '后尾部', value: 143 },
            { name: '外部后视镜', value: 176 },
            { name: '底盘', value: 124 },
            { name: '车钥匙和锁', value: 203 },
            { name: '轮毂和轮胎', value: 178 },
            { name: '车外部照明', value: 187 },
            { name: '三电系统', value: 214 },
            { name: '整车相关', value: 132 }
        ]
    },
    {
        name: '座舱',
        id: 5,
        value: 2320,
        children: [
            { name: '方向盘', value: 114 },
            { name: '天窗及前后风挡玻璃', value: 112 },
            { name: '座椅', value: 124 },
            { name: '车内后视镜', value: 203 },
            { name: '车内照明', value: 333 },
            { name: '音响', value: 68 },
            { name: '随车配件及供电设备', value: 179 },
            { name: '后排娱乐系统', value: 180 },
            { name: '座舱相关', value: 200 }
        ]
    },
    {
        name: '墙盒',
        id: 6,
        value: 1320,
        children: [
            { name: '墙盒售后问题', value: 142 },
            { name: '墙盒安装问题', value: 78 }
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
        name: '警示灯',
        value: 1390,
        id: 1,
        children: [
            { name: '停止运作(SOS、ESP)', value: 100 },
            { name: '故障灯消除方式', value: 200 },
            { name: '油表灯亮剩余行驶能力咨询', value: 320 },
            { name: '蓄电池故障', value: 120 },
            { name: '警示灯报警提示(主动制动辅助系统)', value: 110 },
            { name: '警示灯报警提示(冷却液)', value: 100 },
            { name: '警示灯报警提示(发动机)', value: 119 },
            { name: '警示灯报警提示(气囊)', value: 128 },
            { name: '警示灯报警提示(胎压)', value: 148 },
            { name: '警示灯报警提示(防侧滑/ABS故障)', value: 88 },
            { name: '警示灯报警提示(驻车制动器)', value: 68 },
            { name: '警示灯种类咨询', value: 218 },

        ]
    },

    {
        name: '车联网相关',
        value: 1390,
        id: 1,
        children: [
            { name: 'baidu coffe问题咨询', value: 108 },
            { name: 'carplay投屏问题', value: 219 },
            { name: 'carplay连接问题', value: 179 },
            { name: '咨询是否有carplay功能', value: 279 },
            { name: '应用商店咨询', value: 65 },
            { name: '微信互联咨询', value: 125 },
            { name: '投屏问题咨询', value: 139 },
            { name: '浏览器咨询', value: 35 }
        ]
    },

    {
        name: '车钥匙和锁',
        value: 1390,
        id: 1,
        children: [
            { name: '儿童锁问题咨询', value: 85 },
            { name: '定位问题', value: 135 },
            { name: '开启/关闭问题', value: 203 },
            { name: '无钥匙进入咨询', value: 109 },
            { name: '电力问题', value: 209 },
            { name: '车钥匙功能咨询', value: 111 },
            { name: '车钥匙损坏', value: 209 },
            { name: '车钥匙维修', value: 143 },
            { name: '车钥匙询价', value: 129 },
            { name: '车钥匙锁在车内的解决办法', value: 69 },
            { name: '远程解锁/操作问询', value: 96 },
            { name: '配钥匙相关咨询', value: 128 },
            { name: '钥匙丢失问题咨询', value: 201 },
            { name: '钥匙检测问题咨询', value: 106 }
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





const ciyuanList = '发动机,变速器,离合器,燃油泵,点火器,散热器,空气滤清器,燃油滤清器,机油滤清器,防冻液箱,刹车盘,刹车片,刹车油管,刹车液,刹车助力器,方向机,车灯,尾灯,前雾灯,后雾灯,转向灯,雨刷器,雨刷片,轮胎,轮毂,轮轴,悬挂系统,减震器,弹簧,手刹,座椅,安全带,玻璃,车门,车顶,空调,空调滤清器,空调压缩机,空调冷凝器,空调蒸发器,空调风扇,空调控制器,节气门,油门,换挡杆,油箱,轿车,跑车,越野车,货车,客车,敞篷车,救护车,消防车,警车,校车,巴士,车身,底盘,汽油,柴油,电动车,涡轮增压器,后桥,前桥,驱动轴,离合器片,离合器盘,摩擦片,离合器离合器,润滑油,传动轴,万向节,凸轮轴,连杆,曲轴,活塞,缸套,气门,火花塞,缸盖,缸底盘,气门导管,气门弹簧,摩擦片,摩擦垫,制动灯,制动鼓,驻车制动,制动踏板,真空泵,进气歧管,排气管,催化转化器,轮轴承,发电机,电瓶,电机,前叉,后叉,车把,车床,车轮,车把手,车铃,车篮,链条,链轮,行车电脑,驾驶员信息显示器,排气系统,排气歧管,排气管中段,排气消声器,排气管末端,加速踏板,刹车踏板,离合器踏板,制动器,制动盘,转向盘,方向机传动装置,前避震器,后避震器,空气弹簧,膨胀水箱,发动机支撑装置,螺旋弹簧,吸气管'


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