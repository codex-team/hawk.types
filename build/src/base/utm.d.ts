/**
 * UTM parameters captured for analytics.
 */
export interface Utm {
    /**
     * UTM source - identifies which site sent the traffic.
     */
    source?: string;
    /**
     * UTM medium - identifies what type of link was used.
     */
    medium?: string;
    /**
     * UTM campaign - identifies a specific product promotion or strategic campaign.
     */
    campaign?: string;
    /**
     * UTM content - identifies what specifically was clicked to bring the user to the site.
     */
    content?: string;
    /**
     * UTM term - identifies search terms.
     */
    term?: string;
}
