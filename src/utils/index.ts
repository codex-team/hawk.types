/**
 * Represents simple JSON-like document
 */
export type Json = { [key: string]: JsonNode };

/**
 * Represents possible field values in Dict
 */
export type JsonNode = string | number | boolean | Json;
