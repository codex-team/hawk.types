import { JavaScriptAddons, WindowData, VueIntegrationAddons, BeautifiedUserAgent, ConsoleLogEvent } from './javascript';
import { PhpAddons } from './php';
import { NodeJSAddons } from './nodejs';
import { GoAddons } from './go';
import { PythonAddons } from './python';
import { DefaultAddons } from './default';
import { SentryAddons } from './sentry';
/**
 * Union Type describing all catcher-specific additional data
 */
declare type EventAddons = DefaultAddons | JavaScriptAddons | PhpAddons | NodeJSAddons | GoAddons | PythonAddons | DefaultAddons | SentryAddons;
export { WindowData, VueIntegrationAddons, BeautifiedUserAgent, ConsoleLogEvent, EventAddons, DefaultAddons, JavaScriptAddons, PhpAddons, NodeJSAddons, GoAddons, PythonAddons, SentryAddons, };
