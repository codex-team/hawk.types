import { ObjectId } from 'mongodb';
/**
 * Information about all patterns for one project
 * Represents data that would be stored in db patterns collection
 */
export interface EventPatternDBScheme {
    /**
     * Id of the object that stores event patterns for project
     */
    id: string;

    /**
     * Id of the project, that has event grouping patterns
     */
    projectId: ObjectId;

    /**
     * List of patterns for one project
     * There would be stored regular expressions in string format
     */
    patterns: string[],
}