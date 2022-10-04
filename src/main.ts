import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { loadFonts } from "./plugins/webfontloader";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { createPinia } from "pinia";

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
  .mount("#app");
