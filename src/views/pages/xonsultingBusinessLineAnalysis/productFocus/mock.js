const echarts = require('echarts')
 export const list = [
    {
        name: '仪表盘',
        value: 1320,
        id: 1,
        children: [
            { name: '警示灯' },
            { name: '信息显示' },
            { name: '操作设置' },
            { name: '智能辅助操作系统' },
            { name: '雨刮操作' },

        ]
    },
    {
        name: '车辆召回',
        value: 3320,
        id: 2,
        children: [
            { name: '咨询召回原因和范围' },
            { name: '咨询召回时间' },
            { name: '咨询召回费用' },
            { name: '咨询召回政策' }
        ]
    },
    {
        name: 'COMAND系统',
        id: 3,
        value: 5320,
        children: [
            { name: '导航' },
            { name: '收音机' },
            { name: '电话' },
            { name: '媒体' },
            { name: '车辆' },
            { name: '辅助' },
            { name: '系统' },
            { name: '空调' },
            { name: '蓝牙' },
            { name: '车联网相关' },
            { name: '行车记录仪' },
            { name: '常用选项' },
            { name: '背景主题' },
            { name: '屏幕显示' }
        ]
    },
    {
        name: '外部',
        id: 4,
        value: 3320,
        children: [
            { name: '前机舱' },
            { name: '后尾部' },
            { name: '外部后视镜' },
            { name: '底盘' },
            { name: '车钥匙和锁' },
            { name: '轮毂和轮胎' },
            { name: '车外部照明' },
            { name: '三电系统' },
            { name: '整车相关' }
        ]
    },
    {
        name: '内部',
        id: 5,
        value: 2320,
        children: [
            { name: '方向盘' },
            { name: '天窗及前后风挡玻璃' },
            { name: '座椅' },
            { name: '车内后视镜' },
            { name: '车内照明' },
            { name: '音响' },
            { name: '随车配件及供电设备' },
            { name: '后排娱乐系统' },
            { name: '内部相关' }
        ]
    },
    {
        name: '墙盒',
        id: 6,
        value: 1320,
        children: [
            { name: '墙盒售后问题' },
            { name: '墙盒安装问题' }
        ]
    }
]
export const echartsConfig = {
    title: {
        text: 'L2指标',
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