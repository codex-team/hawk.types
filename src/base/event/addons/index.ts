import { JavaScriptAddons, WindowData, VueIntegrationAddons, BeautifiedUserAgent } from './javascript';
import { PhpAddons } from './php';
import { NodeJSAddons } from './nodejs';
import { GoAddons } from './go';
import { PythonAddons } from './python';

/**
 * Union Type describing all catcher-specific additional data
 */
type EventAddons =
  | JavaScriptAddons
  | PhpAddons
  | NodeJSAddons
  | GoAddons
  | PythonAddons
;

export {
  WindowData,
  VueIntegrationAddons,
  BeautifiedUserAgent,
  EventAddons,
  JavaScriptAddons,
  PhpAddons,
  NodeJSAddons,
  GoAddons,
  PythonAddons
}
