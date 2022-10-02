import { describe, it, expect, vi } from "vitest";

import { render } from "@testing-library/vue";
import ProfileCard from "../ProfileCard.vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import type { GitHubUser } from "@/models/github-user";
import { renderWithVuetify } from "./test.utils";

// Mocks
vi.mock("@/apis/github.api", () => ({
  getProfileByUserName: (userName: string) =>
    Promise.resolve<GitHubUser>({
      name: userName,
      company: "Test company",
      avatar_url: "https://some-url.com/avatar",
    }),
}));

describe("ProfileCard", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  it("renders properly", async () => {
    const userName = "user";
    const { findByLabelText, findByAltText } = renderWithVuetify(ProfileCard, {
      props: { userName },
    });

    const imageAltText = `Avatar for ${userName}`;
    expect(await findByLabelText(imageAltText)).not.toBeNull();
    // expect(await findByAltText(imageAltText)).not.toBeNull();
  });
});
