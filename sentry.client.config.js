import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: 'https://df15d51df97371766b31299d9a5614a1@o4509195528437760.ingest.de.sentry.io/4509195529879632',
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  enableLogs: true,
  tracesSampleRate: 0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
