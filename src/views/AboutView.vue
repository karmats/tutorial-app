<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>This is an about page</h1>
      </v-col>
      <v-col cols="12">
        <ProfileCard user-name="karmats"></ProfileCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import ProfileCard from "@/components/ProfileCard.vue";
</script>
