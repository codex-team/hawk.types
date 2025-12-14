import type { ObjectId } from 'bson';
/**
 * Project admin can specify regular expression patterns to group events into categories.
 * We store them in the database to be able to use them in the UI.
 */
export interface ProjectEventGroupingPatternsDBScheme {
    /**
     * If of the pattern
     */
    _id: ObjectId;
    /**
     * String that represents regular expression pattern
     */
    pattern: string;
}
