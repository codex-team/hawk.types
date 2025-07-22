import { SentryAddons } from "./sentry";

/**
 * This interface represents data that can be additionally collected by Default Catcher
 */
export interface DefaultAddons {
  /**
   * Additional data extracted from the Sentry event addons
   */
  sentry?: SentryAddons;
}
