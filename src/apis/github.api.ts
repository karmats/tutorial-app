import type { GitHubUser } from "@/models/github-user";

export const getProfileByUserName = async (
  userName: string
): Promise<GitHubUser> =>
  await fetch(`https://api.github.com/users/${userName}`).then((r) => r.json());

export const getUsers = async (since = 1): Promise<GitHubUser[]> =>
  await fetch(`https://api.github.com/users?per_page=10&since=${since}`).then(
    (r) => r.json()
  );
