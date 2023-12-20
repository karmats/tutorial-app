<template>
  <v-container>
    <h2 class="my-3">Buttons</h2>
    <div class="d-flex flex-row">
      <v-btn @click="handleDefaultClick">Default</v-btn>
      <v-btn variant="outlined" @click="extendTimeout"
        >Outlined (Extend timeout)</v-btn
      >
      <v-btn variant="text">Text</v-btn>
      <v-btn variant="tonal">Tonal</v-btn>
      <v-btn variant="plain">Plain</v-btn>
    </div>
    <h2 class="mt-8 mb-3">Form controls</h2>
    <div class="d-flex flex-row">
      <v-checkbox label="Checkbox" v-model="check"></v-checkbox>
      <v-text-field :counter="10" label="First name" required></v-text-field>
      <v-select
        label="Select"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
      ></v-select>
      <v-slider></v-slider>
    </div>

    <h2 class="mt-8 mb-3">Card</h2>
    <div class="d-flex flex-row">
      <v-card
        width="400"
        :title="timeString"
        subtitle="This is a subtitle"
        :text="timeoutMessage"
      ></v-card>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useIntervalFn, useTimeoutFn } from "@vueuse/core";
import { computed } from "vue";
import { ref } from "vue";

const check = ref(true);

const time = ref(2000);
const timeLeft = ref(2000);
const timeString = computed(() => `${timeLeft.value}ms`);
const timeoutMessage = ref("Wait for it...");
const updateInterval = useIntervalFn(() => {
  timeLeft.value = timeLeft.value - 500;
  if (timeLeft.value <= 0) {
    updateInterval.pause();
  }
}, 500);
const timeout = useTimeoutFn(() => {
  timeoutMessage.value = "And we are done!";
}, time);
const extendTimeout = () => {
  time.value += 2000;
  timeLeft.value = time.value;
  timeout.start();
};

const handleDefaultClick = () => {
  throw new Error("Lol, error :O");
};
</script>

<style scoped>
.d-flex {
  column-gap: 1rem;
}
</style>
