import type { GitHubUser } from "@/models/github-user";

export const getProfileByUserName = async (
  userName: string
): Promise<GitHubUser> =>
  await fetch(`https://api.github.com/users/${userName}`).then((r) => r.json());
