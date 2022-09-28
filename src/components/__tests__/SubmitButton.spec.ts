import { describe, it, expect } from "vitest";

import { render } from "@testing-library/vue";
import SubmitButton from "../SubmitButton.vue";

describe("SubmitButton", () => {
  it("renders properly", () => {
    const name = "Hello";
    const { getByText } = render(SubmitButton, {
      props: {
        name,
      },
    });
    expect(getByText(name)).toBeDefined();
  });

  it("emits submit event on click", () => {
    const name = "Button";
    const { getByText, emitted } = render(SubmitButton, {
      props: {
        name,
      },
    });

    const button = getByText(name);
    button.click();

    expect(emitted("submit")).toBeTruthy();
  });
});
