import { render, type RenderOptions } from "@testing-library/vue";
import type { Component } from "vue";
import { createI18n } from "vue-i18n";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import en from "@/locales/en.json";
import sv from "@/locales/sv.json";
import type { MessagesSchema, SupportedLocales } from "@/i18n/messages.model";

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
        createI18n<[MessagesSchema], SupportedLocales>({
          legacy: false,
          locale: "en",
          availableLocales: ["en", "sv"],
          messages: {
            en,
            sv,
          },
        }),
      ],
    },
  });
