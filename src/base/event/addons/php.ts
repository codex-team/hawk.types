import { Json } from '../../../utils';

/**
 * This interface represents data that can be additionally collected by PHP Catcher
 */
export interface PhpAddons {
  /**
   * GET parameters
   */
  get?: Json;

  /**
   * POST parameters
   */
  post?: Json;

  /**
   * HTTP Headers
   */
  headers?: Json;
}
