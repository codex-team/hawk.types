/**
 * Stream part that carries generated text.
 */
export type AiStreamTextDeltaPart = {
    /**
     * Discriminant of a text-carrying part.
     */
    type: 'text-delta';
    /**
     * Text generated for this part.
     */
    delta: string;
};
/**
 * Stream part that carries a generation failure.
 */
export type AiStreamErrorPart = {
    /**
     * Discriminant of a failure-carrying part.
     */
    type: 'error';
    /**
     * Description of the failure.
     */
    errorText: string;
};
/**
 * Discriminated union of parts an AI stream consists of.
 */
export type AiStreamPart = AiStreamTextDeltaPart | AiStreamErrorPart;
/**
 * Asynchronous sequence of parts forming an AI-generated answer.
 */
export type AiStream = AsyncIterable<AiStreamPart>;
