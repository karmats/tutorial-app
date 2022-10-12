import { ref } from "vue";
import { defineStore } from "pinia";
import type { GitHubUser } from "@/models/github-user";
import { getUsers } from "@/apis/github.api";

export const useGithubStore = defineStore("github", () => {
  const users = ref<GitHubUser[]>([]);
  const loadUsers = async (since?: number) => {
    const response = await getUsers(since || Math.floor(Math.random() * 1000));
    users.value = response;
  };

  const page = ref(1);
  const paginate = (p: number) => {
    page.value = p;
    loadUsers();
  };

  return { users, loadUsers, page, paginate };
});
