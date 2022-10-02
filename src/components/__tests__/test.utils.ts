import { render, type RenderOptions } from "@testing-library/vue";
import type { Component } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export const renderWithVuetify = (
  component: Component,
  options?: RenderOptions
) =>
  render(component, {
    ...options,
    global: {
      ...options?.global,
      plugins: [
        createVuetify({
          components,
          directives,
        }),
      ],
    },
  });
