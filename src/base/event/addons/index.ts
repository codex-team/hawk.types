import { JavaScriptAddons, WindowData, VueIntegrationAddons } from './javascript';
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
  EventAddons,
  JavaScriptAddons,
  PhpAddons,
  NodeJSAddons,
  GoAddons,
  PythonAddons
}
