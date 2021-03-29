import { Json } from '../../../utils';
/**
 * Additional data that can be sent by the JavaScript Catcher
 */
export interface JavaScriptAddons {
    /**
     * Information about the window
     */
    window: WindowData;
    /**
     * User Agent string
     */
    userAgent: string;
    /**
     * Where error happened
     */
    url: string;
    /**
     * Query parameters for the current URL
     */
    get?: Json;
    /**
     * Unparsed error data that can be send by enabling 'debug' option on the catcher side
     */
    RAW_EVENT_DATA?: Json;
    /**
     * Vue integration data
     */
    vue?: VueIntegrationAddons;
}
/**
 * Information about the window
 */
export interface WindowData {
    /**
     * Window offset width in pixels
     */
    innerWidth: number;
    /**
     * Window offset height in pixels
     */
    innerHeight: number;
}
/**
 * Additional data spoiled from Vue app
 */
export interface VueIntegrationAddons {
    /**
     * A Vue-specific error info, e.g. which lifecycle hook the error was found in.
     */
    lifecycle: string;
    /**
     * Component name where error occurred
     */
    component: string;
    /**
     * Component props
     */
    props?: Json;
    /**
     * Component local variables
     */
    data?: Json;
    /**
     * Component computed variables
     */
    computed?: Json;
}
