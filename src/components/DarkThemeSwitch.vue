<template>
  <v-switch
    :model-value="isDark"
    :label="label"
    @change="toggleDark"
  ></v-switch>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDark } from "@vueuse/core";
import { useTheme } from "vuetify";

const theme = useTheme();
const isDark = useDark({
  onChanged: (isDark) => {
    theme.global.name.value = isDark ? "dark" : "light";
  },
});
const toggleDark = () => {
  isDark.value = !isDark.value;
};
const label = computed(() => {
  return `Turn ${isDark.value ? "on" : "off"} the lights`;
});
</script>
