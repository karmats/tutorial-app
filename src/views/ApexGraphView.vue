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

const categories = [
  Intl.DateTimeFormat("sv", { year: "numeric", month: "short" }).format(
    new Date(1991, 0, 2),
  ),
  Intl.DateTimeFormat("sv", { year: "numeric", month: "short" }).format(
    new Date(1991, 6, 2),
  ),
  Intl.DateTimeFormat("sv", { year: "numeric", month: "short" }).format(
    new Date(1992, 0, 2),
  ),
  Intl.DateTimeFormat("sv", { year: "numeric", month: "short" }).format(
    new Date(1992, 6, 2),
  ),
  Intl.DateTimeFormat("sv", { year: "numeric", month: "short" }).format(
    new Date(1993, 0, 2),
  ),
  Intl.DateTimeFormat("sv", { year: "numeric", month: "short" }).format(
    new Date(1993, 6, 2),
  ),
  Intl.DateTimeFormat("sv", { year: "numeric", month: "short" }).format(
    new Date(1994, 0, 2),
  ),
  Intl.DateTimeFormat("sv", { year: "numeric", month: "short" }).format(
    new Date(1994, 6, 2),
  ),
];
const series1 = [30, 40, 45, 50, 49, 60, 70, 91];
const series2 = [10, 20, 105, 40, 49, 50, 10, 67];
const series = ref([
  {
    name: "series-1",
    data: series1,
  },
  {
    name: "series-2",
    data: series2,
  },
]);
const updateData = () => {
  series.value = series.value.map((serie) => ({
    ...serie,
    data: serie.data.map(
      (data) => Number(data) + Math.floor(Math.random() * 100),
    ),
  }));
};

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
    type: "category",
    tooltip: {
      enabled: false,
    },
    categories,
  },
});
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
  background: #ffff00;
  border: 1px solid #ffff00;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  color: #373d3f;
  font-size: 12px;
  padding: 10px;
}
</style>
