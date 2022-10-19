import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import App from "./App.vue";
import { createApp } from "vue";
import { createI18n, useI18n } from "vue-i18n";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import sv from "./locales/sv.json";
import type { MessagesSchema } from "./i18n/messages.model";

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
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
});

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(vuetify);
app.use(pinia);

app.mount("#app");
