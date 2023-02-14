import { defineConfig } from "cypress";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const getCompareSnapshotsPlugin = require("cypress-visual-regression/dist/plugin");

export default defineConfig({
  env: {
    screenshotsFolder: "./cypress/snapshots/actual",
    trashAssetsBeforeRuns: true,
    video: false,
    type: "actual",
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
});
