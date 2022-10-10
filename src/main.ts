import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import App from "./App.vue";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import en from "./i18n/en.json";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import sv from "./i18n/sv.json";

loadFonts();

createApp(App)
  .use(router)
  .use(
    createVuetify({
      icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
          mdi,
        },
      },
      components,
      directives,
    })
  )
  .use(createPinia())
  .use(
    createI18n<[typeof en], "en" | "sv">({
      legacy: false,
      locale: "sv",
      availableLocales: ["en", "sv"],
      messages: {
        sv,
        en,
      },
    })
  )
  .mount("#app");
