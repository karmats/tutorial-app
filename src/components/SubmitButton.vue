<template>
  <button type="submit" @click="$emit('submit')">{{ name }}</button>
</template>

<script lang="ts" setup>
defineProps(["name"]);
defineEmits(["submit"]);
</script>
