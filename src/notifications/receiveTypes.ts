/**
 * Available options of 'What to receive'
 */
export enum ReceiveTypes {
    /**
     * If event seen more than threshold in thresholdPeriod
     */
    SEEN_MORE = 'SEEN_MORE',

    /**
     * Only first occurrence
     */
    ONLY_NEW = 'ONLY_NEW',
}
