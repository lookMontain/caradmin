<template>
  <div class="base-echarts">
    <div ref="echartsRef" :style="{ width: width, height: height }"></div>
  </div>
</template>
  
<script>
import * as echarts from "echarts";
import { debounce } from 'lodash'
let elementResizeDetectorMaker = require("element-resize-detector");
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
  computed: {
    echart () {
      return this.$refs.echartsRef
    }
  },
  data () {
    return {
      echartsInstance: null
    }
  },
  mounted () {
    this.echartsInstance&&this.echartsInstance.dispose()
    const el = this.$refs["echartsRef"];
    //创建实例
    this.echartsInstance = echarts.init(el);
    this.echartsInstance.setOption(this.options);
    //适应屏幕缩放
    window.addEventListener("resize", this.reload);
    this.echartsInstance.on('click', (params) => {
      this.itemClick(params)
    })
    var erd = elementResizeDetectorMaker();
    erd.listenTo(el, debounce(this.reload));
  },
  watch: {
    options: {
      handler () {
        //监听options的改变，重新调用setOption方法

        this.echartsInstance.setOption(this.options);
      },
      deep: true
    }
  },
  beforeDestroy(){
    window.removeEventListener('resize',this.reload)
  },
  methods: {
    itemClick(params){
      this.$emit('click', params)
    },
    getEchart () {
      return this.echartsInstance
    },
    reload () {
      this.echartsInstance.resize();
    },
    setOption (options) {
      this.echartsInstance.setOption(options);
    }
  }
};
</script>
  
<style></style>