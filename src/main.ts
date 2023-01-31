import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createPinia } from "pinia";
import { createApp } from "vue";
import { createI18n, useI18n } from "vue-i18n";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import App from "./App.vue";
import { appva } from "./blueprints/appva.blueprint";
import type { MessagesSchema } from "./i18n/messages.model";
import sv from "./locales/sv.json";
import sentry from "./plugins/sentry";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";

loadFonts();

const i18n = createI18n<[MessagesSchema], "sv", false>({
  legacy: false,
  locale: "sv",
  availableLocales: ["sv"],
  messages: {
    sv,
  },
});

const pinia = createPinia();

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
  blueprint: appva,
  theme: {
    defaultTheme: "light",
  },
});

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(vuetify);
app.use(pinia);
app.use(sentry, {
  dsn: "https://083806bfa899402b817cf7fe594028d9@o4504095737577472.ingest.sentry.io/4504095738757120",
  router,
});

app.mount("#app");
