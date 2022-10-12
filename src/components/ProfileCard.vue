<template>
  <v-card class="mx-auto" max-width="434" tile>
    <v-avatar color="grey" size="150" rounded="0">
      <v-img
        :src="userData?.avatar_url"
        :alt="'Avatar for ' + userData?.name"
      ></v-img>
    </v-avatar>
    <v-list-item
      :title="userData?.name"
      :subtitle="userData?.company"
    ></v-list-item>
  </v-card>
</template>
<script lang="ts" setup>
import { getProfileByUserName } from "@/apis/github.api";
import type { GitHubUser } from "@/models/github-user";
import { ref, watchEffect } from "vue";

const props = defineProps<{ userName: string }>();
const userData = ref<GitHubUser | null>(null);

watchEffect(async () => {
  const result = await getProfileByUserName(props.userName);
  userData.value = result;
});
</script>
