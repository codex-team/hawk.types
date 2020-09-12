/**
 * Represents affected user object
 */
export interface AffectedUser {
    /**
     * Internal user's identifier inside an app
     */
    id: string;
    /**
     * User public name
     */
    name?: string;
    /**
     * URL for user's details page
     */
    url?: string;
    /**
     * User's public picture
     */
    image?: string;
}
