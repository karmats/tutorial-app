<template>
  <v-btn type="submit" @click="$emit('submit')">{{ name }}</v-btn>
</template>

<script lang="ts" setup>
defineProps(["name"]);
defineEmits(["submit"]);
</script>
