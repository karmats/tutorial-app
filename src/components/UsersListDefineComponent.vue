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
<script lang="ts">
import type { MessagesSchema } from "@/i18n/messages.model";
import { useGithubStore } from "@/stores/github";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n<[MessagesSchema]>();
    const store = useGithubStore();
    const { users, page } = storeToRefs(store);
    const { loadUsers, paginate } = store;

    return { t, users, loadUsers, page, paginate };
  },
  emits: ["userSelected"],
  mounted() {
    this.loadUsers(1);
  },
});
</script>
<style scoped>
.width-20-percent {
  width: 20%;
}
</style>
