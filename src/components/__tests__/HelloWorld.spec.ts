import { describe, it, expect } from "vitest";

import { render } from "@testing-library/vue";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const { getByText } = render(HelloWorld);

    expect(getByText("Welcome to Vuetify 3 Beta")).toBeDefined();
  });

  it("renders important links", () => {
    const { getByText } = render(HelloWorld);

    expect(getByText("github").tagName).toBe("A");
    expect(getByText("awesome-vuetify").tagName).toBe("A");
    expect(getByText("Chat").tagName).toBe("A");
    expect(getByText("Twitter").tagName).toBe("A");
  });
});
