import { nextTick } from "vue";
import type { VueI18n } from "vue-i18n";
import type { SupportedLocales } from "./messages.model";

export const SUPPORTED_LOCALES = ["sv", "en"] as const;

export const loadLocaleMessages = async (
  i18n: Pick<VueI18n, "availableLocales" | "setLocaleMessage">,
  locale: SupportedLocales
) => {
  if (SUPPORTED_LOCALES.includes(locale)) {
    document.querySelector("html")?.setAttribute("lang", locale);
    if (!i18n.availableLocales.includes(locale)) {
      const messages = await import(`@/locales/${locale}.json`);
      i18n.setLocaleMessage(locale, messages.default || messages);
    }
  }
  return nextTick();
};
