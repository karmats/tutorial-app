<template>
  <div class="d-flex flex-column pa-md-10">
    <div id="barchart"></div>
    <div id="linechart"></div>
    <v-btn @click="updateData">Update data</v-btn>
  </div>
</template>

<script setup lang="ts">
import bb, { bar, line, type Chart } from "billboard.js";
import { onMounted, onUnmounted } from "vue";

let barChart: Chart;
let lineChart: Chart;

onMounted(() => {
  barChart = bb.generate({
    data: {
      columns: [["data1", 30, 40, 45, 50, 49, 60, 70, 91]],
      type: bar(),
    },
    color: {
      pattern: ["rgb(7, 128, 10)"],
    },
    bar: {
      width: {
        ratio: 0.5,
      },
    },
    tooltip: {
      grouped: false,
    },
    bindto: "#barchart",
  });
  lineChart = bb.generate({
    data: {
      columns: [["data1", 30, 40, 45, 50, 49, 60, 70, 91]],
      type: line(),
    },
    color: {
      pattern: ["rgb(7, 128, 10)"],
    },
    bar: {
      width: {
        ratio: 0.5,
      },
    },
    tooltip: {
      grouped: false,
    },
    bindto: "#linechart",
  });
});

onUnmounted(() => {
  barChart.unload();
  lineChart.unload();
});

const updateData = () => {
  const newData = barChart
    .data("data1")[0]
    .values.map((d) =>
      typeof d.value === "number"
        ? d.value + Math.floor(Math.random() * 100)
        : d
    ) as number[];
  barChart.load({
    columns: [["data1", ...newData]],
  });
  lineChart.load({
    columns: [["data1", ...newData]],
  });
};
</script>
