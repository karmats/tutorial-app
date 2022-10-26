// Icons
import { mdi } from "vuetify/iconsets/mdi";

// Types
import type { Blueprint } from "vuetify/framework";

export const appva: Blueprint = {
  defaults: {
    VAppBar: {
      color: "primary",
    },
    VAutocomplete: {
      variant: "filled",
    },
    VBtn: {
      color: "primary",
      rounded: "l",
    },
    VCard: {
      rounded: "lg",
      variant: "outlined",
    },
    VCheckbox: {
      color: "primary",
    },
    VChip: {
      rounded: "sm",
    },
    VCombobox: {
      variant: "filled",
    },
    VNavigationDrawer: {
      // VList: {
      //   nav: true,
      //   VListItem: {
      //     rounded: 'xl',
      //   },
      // },
    },
    VRadio: {
      color: "primary",
    },
    VSelect: {
      variant: "outlined",
      density: "compact",
    },
    VSlider: {
      color: "primary",
    },
    VTextarea: {
      variant: "outlined",
    },
    VTextField: {
      variant: "outlined",
    },
  },
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          background: "#F3F3F3",
          surface: "#FFFFFF",
          primary: "#07800A",
          "primary-darken-1": "#3700B3",
          secondary: "#03DAC6",
          "secondary-darken-1": "#018786",
          error: "#C21313",
          info: "#216FAD",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
};
