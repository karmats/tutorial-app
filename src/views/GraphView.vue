<template>
  <div id="barchart"></div>
</template>

<script setup lang="ts">
import bb, { bar, type Chart } from "billboard.js";
import { onMounted } from "vue";
import { onUnmounted } from "vue";

let chart: Chart;

onMounted(() => {
  chart = bb.generate({
    data: {
      columns: [
        ["data1", 30, 200, 100, 400, 150, 250],
        ["data2", 130, 100, 140, 200, 150, 50],
      ],
      type: bar(),
    },
    bar: {
      width: {
        ratio: 0.5,
      },
    },
    bindto: "#barchart",
  });
});

onUnmounted(() => {
  chart.unload();
});
</script>
