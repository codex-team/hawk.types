import { ObjectId } from "mongodb";
/**
 * Plan representation in DataBase
 */
export interface PlanDBScheme {
    /**
     * Plan's id
     */
    _id: ObjectId;
    /**
     * Plan's name
     */
    name: string;
    /**
     * Monthly charge for plan in dollars
     */
    monthlyCharge: number;
    /**
     * Maximum amount of events available for plan
     */
    eventsLimit: number;
    /**
     * Is this plan used by default?
     */
    isDefault: boolean;
}
