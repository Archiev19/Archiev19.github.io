import posthog from 'posthog-js'

const posthogKey = import.meta.env.VITE_POSTHOG_KEY || 'phc_qtBtwfxWmuyP8WZ9qkc5REBfUt8gAtugZPjkS9qFnvaP'
const posthogHost = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com'

if (!posthogKey) {
  if (import.meta.env.DEV) {
    throw new Error('VITE_POSTHOG_KEY variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_POSTHOG_KEY is configured')
  }
} else if (!posthogHost) {
  if (import.meta.env.DEV) {
    throw new Error('VITE_POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_POSTHOG_HOST is configured')
  }
} else {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    defaults: '2026-08-30',
    autocapture: true,
    capture_pageview: 'history_change',
    capture_pageleave: true,
    session_recording: {
      maskAllInputs: false,
    },
    capture_exceptions: {
      capture_unhandled_errors: true,
      capture_unhandled_rejections: true,
      capture_console_errors: false,
    },
    logs: {
      serviceName: 'archiev19-github-io',
      environment: import.meta.env.MODE,
    },
  })
}

export default posthog
