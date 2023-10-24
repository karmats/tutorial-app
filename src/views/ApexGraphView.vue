<template>
  <div class="d-flex flex-column pa-md-10">
    <apexchart
      type="bar"
      height="275"
      :options="options"
      :series="series"
    ></apexchart>
    <apexchart
      type="line"
      height="275"
      :options="options"
      :series="series"
    ></apexchart>
    <v-btn @click="updateData">Update chart</v-btn>
  </div>
</template>

<script setup lang="ts">
import type { ApexOptions } from "apexcharts";
import type { Ref } from "vue";
import { getCurrentInstance, onMounted, ref, watch } from "vue";

const options: Ref<ApexOptions> = ref({
  chart: {
    id: "vuechart-example",
    width: "100%",
    height: 275,
    fontFamily: "Roboto, sans-serif",
  },
  colors: ["#07800a", "#216fad"],
  tooltip: {
    cssClass: "tooltip",
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          width: 400,
        },
      },
    },
  ],

  xaxis: {
    type: "datetime",

    tooltip: {
      enabled: false,
    },
  },
});
const categories = [
  new Date(1991, 0, 2),
  new Date(1992, 0, 2),
  new Date(1993, 0, 2),
  new Date(1994, 0, 2),
  new Date(1995, 0, 2),
  new Date(1996, 0, 2),
  new Date(1997, 0, 2),
  new Date(1998, 0, 2),
];
const series1 = [30, 40, 45, 50, 49, 60, 70, 91];
const series2 = [10, 20, 105, 40, 49, 50, 10, 67];
const series = ref([
  {
    name: "series-1",
    data: categories.map((c, i) => ({ x: c, y: series1[i] })),
  },
  {
    name: "series-2",
    data: categories.map((c, i) => ({ x: c, y: series2[i] })),
  },
]);
const updateData = () => {
  series.value = series.value.map((serie) => ({
    ...serie,
    data: serie.data.map((data) => ({
      x: data.x,
      y: Number(data.y) + Math.floor(Math.random() * 100),
    })),
  }));
};
onMounted(() => {
  const instance = getCurrentInstance();
  const vuetify = instance?.proxy?.$vuetify;
  if (vuetify?.theme) {
    watch(vuetify.theme, (updatedTheme) => {
      options.value = {
        ...options.value,
        theme: {
          mode: updatedTheme.current.dark ? "dark" : "light",
        },
      };
    });
  }
});
</script>
<style>
.apexcharts-tooltip.tooltip.apexcharts-theme-light {
  background: #ff0000;
  border: 1px solid #ff0000;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  color: #373d3f;
  font-size: 12px;
  padding: 10px;
}
</style>
