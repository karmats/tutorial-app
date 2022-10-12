import ProfileCard from "../ProfileCard.vue";
import type { GitHubUser } from "@/models/github-user";
import { renderWithVuetify } from "./test.utils";

// Mocks
vi.mock("@/apis/github.api", () => ({
  getProfileByUserName: (userName: string) =>
    Promise.resolve<GitHubUser>({
      id: 1,
      login: userName,
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
    const { findByLabelText, findByText } = renderWithVuetify(ProfileCard, {
      props: { userName },
    });

    const imageAltText = `Avatar for ${userName}`;
    expect(await findByLabelText(imageAltText)).toBeInTheDocument();
    // expect(await findByAltText(imageAltText)).toBeInTheDocument();
    expect(await findByText(userName)).toBeInTheDocument();
    // expect(await findByTitle(userName)).toBeInTheDocument();
  });
});
