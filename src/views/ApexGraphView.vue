<template>
  <div class="d-flex flex-column pa-md-10">
    <apex-charts
      type="bar"
      height="275"
      :options="options"
      :series="series"
    ></apex-charts>
    <apex-charts
      type="line"
      height="275"
      :options="options"
      :series="series"
    ></apex-charts>
    <v-btn @click="updateData">Update chart</v-btn>
  </div>
</template>

<script setup lang="ts">
import type { ApexOptions } from "apexcharts";
import type { Ref } from "vue";
import { getCurrentInstance, onMounted, ref, watch } from "vue";
import ApexCharts from "vue3-apexcharts";

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
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
});
const series = ref([
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
  {
    name: "series-2",
    data: [10, 20, 105, 40, 49, 50, 10, 67],
  },
]);
const updateData = () => {
  series.value = series.value.map((serie) => ({
    ...serie,
    data: serie.data.map((data) =>
      typeof data === "number" ? data + Math.floor(Math.random() * 100) : data,
    ),
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
