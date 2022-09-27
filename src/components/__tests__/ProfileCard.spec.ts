import { describe, it, expect, vi } from "vitest";

import { render } from "@testing-library/vue";
import ProfileCard from "../ProfileCard.vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Mocks
vi.mock("@/apis/github.api", () => ({
  getProfileByUserName: (userName: string) =>
    Promise.resolve({
      name: userName,
      company: "Test company",
      avatar_url: "https://some-url.com/avatar",
    }),
}));

describe("ProfileCard", () => {
  it("renders properly", async () => {
    const userName = "user";
    const { getByLabelText } = await render(ProfileCard, {
      props: { userName },
      global: {
        plugins: [
          createVuetify({
            components,
            directives,
          }),
        ],
      },
    });
    expect(getByLabelText(`Avatar for ${userName}`)).toBeDefined();
  });
});