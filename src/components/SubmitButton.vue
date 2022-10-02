<template>
  <v-btn type="submit" :disabled="disabled" @click="$emit('submit')">{{
    name
  }}</v-btn>
</template>

<script lang="ts" setup>
defineProps<{ name: string; disabled?: boolean }>();
defineEmits<{ (e: "submit"): void }>();
</script>
