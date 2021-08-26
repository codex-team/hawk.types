import { JavaScriptAddons, WindowData, VueIntegrationAddons, BeautifiedUserAgent } from './javascript';
import { PhpAddons } from './php';
import { NodeJSAddons } from './nodejs';
import { GoAddons } from './go';
import { PythonAddons } from './python';
import { DefaultAddons } from './default';
/**
 * Union Type describing all catcher-specific additional data
 */
declare type EventAddons = DefaultAddons | JavaScriptAddons | PhpAddons | NodeJSAddons | GoAddons | PythonAddons;
export { WindowData, VueIntegrationAddons, BeautifiedUserAgent, EventAddons, DefaultAddons, JavaScriptAddons, PhpAddons, NodeJSAddons, GoAddons, PythonAddons };
