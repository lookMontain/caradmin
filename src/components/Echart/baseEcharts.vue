<template>
    <div class="base-echarts">
      <div ref="echartsRef" :style="{ width: width, height: height }"></div>
    </div>
  </template>
  
  <script>
  import * as echarts from "echarts";
  export default {
    name: "BaseEcharts",
    props: {
      options: {
        type: Object,
        require: true,
      },
      width: {
        type: String,
        default: "100%",
      },
      height: {
        type: String,
        default: "300px",
      },
    },
    computed:{
      echart(){
        return this.$refs.echartsRef
      }
    },
    data(){
     return {
       echartsInstance:null
     }
    },
    mounted() {
      const el = this.$refs["echartsRef"];
      //创建实例
      this.echartsInstance = echarts.init(el);
      this.echartsInstance.setOption(this.options);
      //适应屏幕缩放
      window.addEventListener("resize", () => {
        this.reload()
      });
      this.echartsInstance.on('click', (params)=> {
        this.$emit('click',params)
      })
    },
    watch:{
      options:{
        handler(){ 
          //监听options的改变，重新调用setOption方法
          this.echartsInstance.setOption(this.options);
        },
        deep:true
      }
    },
    methods:{
      getEchart(){
        return  this.echartsInstance
      },
      reload(){
        this.echartsInstance.resize();
      },
      setOption(options){
        this.echartsInstance.setOption(options);
      }
    }
  };
  </script>
  
  <style></style>