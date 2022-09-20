<template>
  <v-card class="mx-auto" max-width="434" tile>
    <v-avatar color="grey" size="150" rounded="0">
      <v-img :src="userData?.avatar_url"></v-img>
    </v-avatar>
    <v-list-item
      :title="userData?.name"
      :subtitle="userData?.company"
    ></v-list-item>
  </v-card>
</template>
<script lang="ts" setup>
import { watchEffect, ref } from "vue";
const { userName } = defineProps<{ userName: string }>();

const userData = ref<{
  name: string;
  company: string;
  avatar_url: string;
} | null>(null);

watchEffect(async () => {
  const result = await fetch(`https://api.github.com/users/${userName}`).then(
    (r) => r.json()
  );
  userData.value = result;
});
</script>
