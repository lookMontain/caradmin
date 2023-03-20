<template>
    <div class="pie-echarts">
      <base-echarts :options="options"></base-echarts>
    </div>
  </template>
  
  <script>
  import BaseEcharts from "./baseEcharts.vue";
  export default {
    name: "PieEcharts",
    components: {
      BaseEcharts,
    },
    props: {
      pieData: {
        type: Array,
        require: true,
      },
    },
    computed: {
      options() {
        return {
          tooltip: {
            trigger: "item",
          },
          legend: {
            top: "5%",
            left: "center",
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "40",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: this.pieData
            },
          ],
        };
      },
    },
  };
  </script>
  
  <style></style>