<template>
  <v-btn type="submit" @click="$emit('submit')">{{ name }}</v-btn>
</template>

<script lang="ts" setup>
defineProps<{ name: string }>();
defineEmits<{ (e: "submit"): void }>();
</script>
