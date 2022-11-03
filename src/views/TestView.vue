<template>
  <v-container>
    <h2 class="my-3">Buttons</h2>
    <div class="d-flex flex-row">
      <v-btn @click="handleDefaultClick">Default</v-btn>
      <v-btn variant="outlined">Outlined</v-btn>
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
        title="This is a title"
        subtitle="This is a subtitle"
        text="This is content"
      ></v-card>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const check = ref(true);

const handleDefaultClick = () => {
  throw new Error("Lol, error :O");
};
</script>

<style scoped>
.d-flex {
  column-gap: 1rem;
}
</style>
