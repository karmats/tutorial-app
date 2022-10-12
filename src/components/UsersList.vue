<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          {{ t("users-list.header-avatar") }}
        </th>
        <th class="text-left">
          {{ t("users-list.header-name") }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td class="text-left width-20-percent">
          <v-avatar
            :image="user.avatar_url"
            @click="$emit('userSelected', user.login)"
          ></v-avatar>
        </td>
        <td class="text-left">
          {{ user.login }}
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">
          <v-pagination
            v-model="page"
            :length="6"
            :next-aria-label="t('$vuetify.pagination.ariaLabel.next')"
            @update:model-value="paginate"
          ></v-pagination>
        </td>
      </tr>
    </tfoot>
  </v-table>
</template>
<script lang="ts" setup>
import { getUsers } from "@/apis/github.api";
import type { MessagesSchema } from "@/i18n/messages.model";
import type { GitHubUser } from "@/models/github-user";
import { onMounted, ref, computed } from "vue";
import { useI18n } from "vue-i18n";

defineEmits<(e: "userSelected", name: string) => void>();

const users = ref<GitHubUser[]>([]);
const page = ref(1);
const highestId = computed(() => page.value * Math.floor(Math.random() * 1000));

const { t } = useI18n<[MessagesSchema]>();

const refreshUsers = async () => {
  const result = await getUsers(highestId.value);
  users.value = result;
};

const paginate = () => {
  refreshUsers();
};

onMounted(() => {
  refreshUsers();
});
</script>
<style scoped>
.width-20-percent {
  width: 20%;
}
</style>
