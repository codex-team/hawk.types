/**
 * Represents simple JSON-like document
 */
export declare type Json = {
    [key: string]: JsonNode;
};
/**
 * Represents possible field values in Dict
 */
export declare type JsonNode = string | number | boolean | Json;
