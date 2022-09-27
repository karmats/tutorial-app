import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SubmitButton from "../SubmitButton.vue";

describe("SubmitButton", () => {
  it("renders properly", () => {
    const name = "Hello";
    const wrapper = mount(SubmitButton, {
      props: {
        name,
      },
    });
    expect(wrapper.text()).toContain(name);
  });
});
