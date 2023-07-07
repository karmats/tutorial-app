<template>
  <div class="d-flex flex-column pa-md-10">
    <Bar id="bar-chart" :options="chartOptions" :data="chartData" />
    <Line id="line-chart" :options="chartOptions" :data="chartData" />
    <v-btn @click="updateData">Update data</v-btn>
  </div>
</template>

<script setup lang="ts">
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { ref } from "vue";
import { Bar, Line } from "vue-chartjs";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  datasets: [
    {
      data: [30, 40, 45, 50, 49, 60, 70, 91],
      label: "Revenue",
      backgroundColor: "#07800a",
      borderColor: "#07800a",
    },
  ],
});
const chartOptions = ref({ responsive: true });

const updateData = () => {
  const newData = chartData.value.datasets[0].data.map(
    (d) => d + Math.floor(Math.random() * 100)
  );

  chartData.value.datasets[0].data = newData;
};
</script>
