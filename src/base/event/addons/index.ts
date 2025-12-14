import type { JavaScriptAddons, WindowData, VueIntegrationAddons, BeautifiedUserAgent, ConsoleLogEvent } from './javascript.ts';
import type { PhpAddons } from './php.ts';
import type { NodeJSAddons } from './nodejs.ts';
import type { GoAddons } from './go.ts';
import type { PythonAddons } from './python.ts';
import type { DefaultAddons } from './default.ts';
import type { SentryAddons } from './sentry.ts';

/**
 * Union Type describing all catcher-specific additional data
 */
type EventAddons =
  | DefaultAddons
  | JavaScriptAddons
  | PhpAddons
  | NodeJSAddons
  | GoAddons
  | PythonAddons

  | SentryAddons;

export type {
  WindowData,
  VueIntegrationAddons,
  BeautifiedUserAgent,
  ConsoleLogEvent,
  EventAddons,
  DefaultAddons,
  JavaScriptAddons,
  PhpAddons,
  NodeJSAddons,
  GoAddons,
  PythonAddons,
  SentryAddons
};
