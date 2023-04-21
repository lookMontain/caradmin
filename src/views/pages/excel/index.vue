<template>
    <el-upload action=""
               multiple :show-file-list="false"
               style="display: contents"
               accept=".xls,.XLS,.xlsx,.XLSX"
               :limit="3"
               :http-request="httpRequest">
      <el-button type="primary" icon="el-icon-upload2">导入</el-button>
    </el-upload>
  </template>
   
  <script>
import * as XLSX from   'xlsx'
  import moment from 'moment/moment'
  export default {
    name: 'test5',
    data () {
      return {
        jsondata: [], // 导入后转换成json
        numbersuccess: 0, // 导入成功数
        numberusered: 0, // 已存在数
        resdata: []// 导入post请求返回的值
      }
    },
    methods: {
      httpRequest (e) {
        let file = e.file // 文件信息
        // 错误情况判断
        if (!file) {
          return false
        } else if (!/\.(xls|xlsx)$/.test(file.name.toLowerCase())) {
          this.$message.error('上传格式不正确，请上传xls或者xlsx格式')
          return false
        }
        const fileReader = new FileReader()// 读取文件
        fileReader.onload = (ev) => {
          try {
            const data = ev.target.result// 获取结果
            // 获取所有表的信息
            console.log(XLSX)
            const workbook = XLSX.read(data, {
              type: 'binary', // 以字符编码的方式解析
              cellDates: true// 将excel中日期类型数据，转化为标准日期格式，而不是默认的数字格式
            })
            // 获取第一张表的表名
            const exlname = workbook.SheetNames[0]
            // 转换成json数据
            const exl = XLSX.utils.sheet_to_json(workbook.Sheets[exlname]) // 生成json表格内容
            // 打印 ws 就可以看到读取出的表格数据
            console.log(exl)
            // 数据处理
            // this.submit_from(exl)
          } catch (e) {
            console.log(e)
            return false
          }
        }
        fileReader.readAsBinaryString(file)
      },
      // 数据处理成需要的格式
      submit_from (data) {
        // 遍历处理数据（根据你自己实际情况修改内容）
        data.forEach((item) => {
          let obj = {}
          for (let i = 0; i <= data.length; i++) {
            obj.id = item.账号
            obj.name = item.用户名
            obj.address = item.地址
            obj.job = item.职业
            obj.status = item.账号状态 === '启用' ? 'true' : 'false'
            obj.birthday = moment(item.生日).format('YYYY-MM-DD')
          }
          // 赋值给参数jsondata
          this.jsondata.push(obj)
        })
        console.log(this.jsondata)
        // 遍历post请求添加数据到mysql（换成你自己的post接口）
        this.jsondata.forEach((item) => {
          this.$api.addgameuser(item.id, item.name, item.job, item.birthday, item.address, item.status, '')
            .then((res) => {
              this.resdata.push(res.data)// 返回添加结果
            })
            .catch((err) => {
              console.log(err)
            })
        })
        // 输出post请求结果
        console.log(this.resdata)
        // 提示添加成功数据的数量（延时处理）
        setTimeout(() => {
          // 对返回的结果做判断（我的接口返回true或者'exist_user'，根据你自己实际情况配置）
          for (var i = 0; i < this.resdata.length; i++) {
            if (this.resdata[i] === true) {
              this.numbersuccess = this.numbersuccess + 1// 成功数
            } else if (this.resdata[i] === 'exist_user') {
              this.numberusered = this.numberusered + 1// 已存在用户数
            }
          }
          this.$alert('添加总数：' + this.jsondata.length + '------成功数：' + this.numbersuccess + '（其中' + this.numberusered + '名用户已存在,无需添加!）',
            '上传结果',
            {
              confirmButtonText: '确定'
            })
          this.cleanresdata() // 初始化上传结果数据
          // 如果有成功上传，刷新路由页面
          if (this.numbersuccess > 0) {
            this.$router.replace('/test3')
          }
        }, 1500)
      },
      // 初始化上传结果数据
      cleanresdata () {
        // eslint-disable-next-line no-unused-expressions,no-sequences
        this.jsondata = [], // 导入后转换成json
        this.numbersuccess = 0, // 导入成功数
        this.numberusered = 0, // 已存在数
        this.resdata = []
      }
   
    }
  }
  </script>