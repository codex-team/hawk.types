import { DecodedEventData, EventData } from '../base/event/event';
import { PerformanceData } from '../base/performance/performance';
import type { JavaScriptAddons, PhpAddons, NodeJSAddons, GoAddons, PythonAddons, DefaultAddons } from '../base/event/addons';
/**
 * Type that represents all supported Catcher message types for events
 */
export declare type ErrorsCatcherType = 'errors/javascript' | 'errors/php' | 'errors/nodejs' | 'errors/go' | 'errors/python' | 'errors/default';
/**
 * Type that represents all supported Catcher message types for performance
 */
export declare type MetricsCatcherType = 'performance';
/**
 * Union type that represents all supported Catcher message types
 */
export declare type CatcherMessageType = ErrorsCatcherType | MetricsCatcherType;
/**
 * Type that represents the payload of a Catcher message based on its type
 */
export declare type CatcherMessagePayload<Type extends CatcherMessageType> = {
    'errors/default': DecodedEventData<DefaultAddons>;
    'errors/javascript': DecodedEventData<JavaScriptAddons>;
    'errors/php': EventData<PhpAddons>;
    'errors/nodejs': EventData<NodeJSAddons>;
    'errors/go': EventData<GoAddons>;
    'errors/python': EventData<PythonAddons>;
    'performance': PerformanceData;
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
export declare type CatcherMessageAccepted<Type extends CatcherMessageType> = Omit<CatcherMessage<Type>, 'token'> & {
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
