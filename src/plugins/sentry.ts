import type { App } from "vue";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";
import type { Router } from "vue-router";

export default {
  install: (app: App, { dsn, router }: { dsn: string; router: Router }) => {
    // Only install in production
    if (import.meta.env.PROD) {
      Sentry.init({
        app,
        dsn,
        integrations: [
          new BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracingOrigins: ["localhost", "my-site-url.com", /^\//],
          }),
        ],
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
      });
    }
  },
};
