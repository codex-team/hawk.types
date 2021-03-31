import { JavaScriptAddons, WindowData, VueIntegrationAddons } from './javascript';
import { PhpAddons } from './php';

/**
 * Union Type describing all catcher-specific additional data
 */
type EventAddons =
  | JavaScriptAddons
  | PhpAddons
;

export {
  JavaScriptAddons,
  WindowData,
  VueIntegrationAddons,
  PhpAddons,
  EventAddons,
}
