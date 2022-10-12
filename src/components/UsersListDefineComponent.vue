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
import { getUsers } from "@/apis/github.api";
import type { MessagesSchema } from "@/i18n/messages.model";
import type { GitHubUser } from "@/models/github-user";
import { ref, defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n<[MessagesSchema]>();
    const users = ref<GitHubUser[]>([]);
    const page = ref(1);

    return { t, users, page };
  },
  emits: ["userSelected"],
  computed: {
    randomUserId() {
      return this.page * Math.floor(Math.random() * 1000);
    },
  },
  mounted() {
    this.refreshUsers(1);
  },
  methods: {
    async refreshUsers(since?: number) {
      const result = await getUsers(since || this.randomUserId);
      this.users = result;
    },
    paginate() {
      this.refreshUsers();
    },
  },
});
</script>
<style scoped>
.width-20-percent {
  width: 20%;
}
</style>
