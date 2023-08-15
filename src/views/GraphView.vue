<template>
  <br />
  <div class="container">
    <highcharts-chart :options="bpChart" />
    <br /><br /><br />
    <highcharts-chart :options="BpHrChart" />
    <br /><br /><br />
    <highcharts-chart :options="chartTwo" />
  </div>
</template>

<style>
.container {
  width: 700px;
  height: 500px;
  margin: 0 auto;
}
</style>

<script>
import HighchartsChart from "@/components/HighchartsChart.vue";
import authHeader from "@/services/auth-header";
import axios from "axios";

export default {
  name: "GraphView",
  components: {
    HighchartsChart,
  },
  props: ["user"],
  data() {
    return {
      responseData: [],
      bigarray: [],
      categories: [],
      highBp: [],
      lowBp: [],
      hr: [],
      i1: [],
      i2: [],
      i3: [],
      sum: [],
      bpChart: {
        title: {
          text: "血壓分布圖",
        },
        subtitle: {
          text: "來源: 量測儀器",
        },
        xAxis: {
          title: {
            enabled: true,
            text: "收縮壓 (mmHg)",
          },
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true,
          min: 90,
          max: 180,
          tickInterval: 10,
        },
        yAxis: {
          title: {
            text: "舒張壓 (mmHg)",
          },
          min: 50,
          max: 110,
          tickInterval: 10,
        },
        series: this.bigarray,
        plotOptions: {
          scatter: {
            marker: {
              radius: 5,
              states: {
                hover: {
                  enabled: true,
                  lineColor: "rgb(100,100,100)",
                },
              },
            },
            states: {
              hover: {
                marker: {
                  enabled: false,
                },
              },
            },
            tooltip: {
              pointFormat: "{point.x} mmHg, {point.y} mmHg",
            },
          },
        },
      },
      BpHrChart: {
        title: {
          text: "血壓與脈搏監測",
        },
        subtitle: {
          text: "來源: 量測儀器",
        },
        xAxis: {
          categories: this.categories,
        },
        yAxis: [
          {
            title: {
              text: "血壓 (mmHg)",
            },
          },
          {
            title: {
              text: "脈搏 (bpm)",
            },
            opposite: true,
          },
        ],
        series: [
          {
            type: "column",
            name: "脈搏",
            data: this.hr,
            marker: {
              lineColor: "rgb(100,100,100)",
            },
          },
          {
            type: "spline",
            name: "收縮壓",
            data: this.highBp,
            marker: {
              lineWidth: 2,
              lineColor: "rgb(100,100,100)",
              fillColor: "white",
            },
          },
          {
            type: "spline",
            name: "舒張壓",
            data: this.lowBp,
            marker: {
              lineWidth: 2,
              lineColor: "rgb(100,100,100)",
              fillColor: "white",
            },
          },
        ],
      },
    };
  },
  methods: {
    fetchData() {
      axios
        .get(`http://localhost:8080/api/record/chart/${this.user.username}`, {
          headers: authHeader(),
        })
        .then((response) => {
          // 成功處理返回的數據
          this.responseData = response.data;
          this.responseData.forEach((item) => {
            let time = item.recordDate;
            let smallarray = [];
            smallarray.push([item.highBp, item.lowBp]);
            this.bigarray.push({
              data: smallarray,
              name: time,
              showInLegend: false,
              marker: { symbol: "circle", fillColor: "#000000" },
            });
            this.categories.push(item.recordDate);
            this.highBp.push(item.highBp);
            this.lowBp.push(item.lowBp);
            this.hr.push(item.heartbeats);
            this.i1.push(item.i1);
            this.i2.push(item.i2);
            this.i3.push(item.i3);
            this.sum.push(item.i1 + item.i2 + item.i3);
          });
        })
        .catch((error) => {
          // 處理錯誤
          console.error(error);
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
