import type { DecodedEventData, EventData } from '../base/event/event.ts';
import type { PerformanceData } from '../base/performance/performance.ts';

import type {
  JavaScriptAddons,
  PhpAddons,
  NodeJSAddons,
  GoAddons,
  PythonAddons,
  DefaultAddons
} from '../base/event/addons/index.ts';

/**
 * Type that represents all supported Catcher message types for events
 */
export type ErrorsCatcherType = 'errors/javascript'
  | 'errors/php'
  | 'errors/nodejs'
  | 'errors/go'
  | 'errors/python'
  | 'errors/default';

/**
 * Type that represents all supported Catcher message types for performance
 */
export type MetricsCatcherType = 'performance';

/**
 * Union type that represents all supported Catcher message types
 */
export type CatcherMessageType = ErrorsCatcherType | MetricsCatcherType;

/**
 * Type that represents the payload of a Catcher message based on its type
 */
export type CatcherMessagePayload<Type extends CatcherMessageType> = {
  /**
   * Addons that can be added to all errors except those which have a separate workers
   */
  'errors/default': DecodedEventData<DefaultAddons>;
  /**
   * Added by JavaScript SDK
   */
  'errors/javascript': DecodedEventData<JavaScriptAddons>;
  /**
   * Added by PHP SDK
   */
  'errors/php': EventData<PhpAddons>;
  /**
   * Added by Node.js SDK
   */
  'errors/nodejs': EventData<NodeJSAddons>;
  /**
   * Added by Go SDK
   */
  'errors/go': EventData<GoAddons>;
  /**
   * Added by Python SDK
   */
  'errors/python': EventData<PythonAddons>;
  /**
   * Performance monitoring data
   */
  performance: PerformanceData;
}[Type];

/**
 * Interface that represents a message sent by a Catcher
 * It calculates the type of the payload based on the Catcher type
 */
export interface CatcherMessage<Type extends CatcherMessageType> {
  /**
   * User project's Integration Token
   */
  token: string;

  /**
   * Hawk Catcher name
   */
  catcherType: Type;

  /**
   * All information about the event
   */
  payload: CatcherMessagePayload<Type>;
}

/**
 * Type that represents a Catcher message accepted by the collector
 * It omits the token field and adds projectId and timestamp
 */
export type CatcherMessageAccepted<Type extends CatcherMessageType> = Omit<CatcherMessage<Type>, 'token'> & {
  /**
   * Id of the project that sent the message
   */
  projectId: string;

  /**
   * Timestamp of when the message was accepted by the collector
   * This is the current time in milliseconds since the Unix epoch
   */
  timestamp: number;
};
