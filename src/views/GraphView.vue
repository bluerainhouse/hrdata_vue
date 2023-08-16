<template>
  <br />
  <div class="container">
    <br /><br /><br />
    <div id="chartContainer"></div>
    <br /><br /><br />
  </div>
</template>

<script>
import { renderChart } from "./chartRenderer.js"; // 替换为正确的路径
import authHeader from "@/services/auth-header";
import axios from "axios";

export default {
  name: "GraphView",
  computed: {
    BpHrChart() {
      const chartOptions = {
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
      };
      chartOptions.series = [
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
      ];

      return chartOptions;
    },
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
      chartData: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/record/chart/${this.user.username}`,
          {
            headers: authHeader(),
          }
        );
        this.responseData = response.data;
        this.responseData.forEach((item) => {
          this.categories.push(item.recordDate);
          this.highBp.push(item.highBp);
          this.lowBp.push(item.lowBp);
          this.hr.push(item.heartbeats);
          this.i1.push(item.i1);
          this.i2.push(item.i2);
          this.i3.push(item.i3);
          this.sum.push(item.i1 + item.i2 + item.i3);
        });
        this.chartData.categories = this.categories;
        this.chartData.highBp = this.highBp;
        this.chartData.lowBp = this.lowBp;
        this.chartData.hr = this.hr;
        console.log(this.chartData);
        this.renderChart(this.chartData);
      } catch (error) {
        console.error(error);
      }
    },
    renderChart(chartData) {
      renderChart(chartData);
    },
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>
