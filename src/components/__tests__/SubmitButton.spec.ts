import SubmitButton from "../SubmitButton.vue";
import { renderWithVuetify } from "./test.utils";

describe("SubmitButton", () => {
  it("renders properly", () => {
    const name = "Hello";
    const { getByText } = renderWithVuetify(SubmitButton, {
      props: {
        name,
      },
    });
    expect(getByText(name)).toBeInTheDocument();
  });

  it("emits submit event on click", () => {
    const name = "Button";
    const { getByText, emitted } = renderWithVuetify(SubmitButton, {
      props: {
        name,
      },
    });

    const button = getByText(name);
    button.click();

    expect(emitted().submit).toHaveLength(1);
  });
});
