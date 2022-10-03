import { describe, it, expect } from "vitest";

import HelloWorld from "../HelloWorld.vue";
import { renderWithVuetify } from "./test.utils";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const { getByText } = renderWithVuetify(HelloWorld);

    expect(getByText("Welcome to Vuetify 3 Beta")).toBeDefined();
  });

  it("renders important links", () => {
    const { getByText } = renderWithVuetify(HelloWorld);

    expect(getByText("github").tagName).toBe("A");
    expect(getByText("awesome-vuetify").tagName).toBe("A");
    expect(getByText("Chat").tagName).toBe("A");
    expect(getByText("Twitter").tagName).toBe("A");
  });
});
