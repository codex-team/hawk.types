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
     * Charge for plan in currencry specified in `chargeCurrency` with frequency specified in `chargeFrequency`
     */
    charge: number;

    /**
     * Currency of `charge`
     */
    chargeCurrency: string;

    /**
     * How often to charge payment for the plan.
     * Monthly by default
     */
    chargeFrequency?: 'monthly' | 'daily';

    /**
     * Maximum amount of events available for plan
     */
    eventsLimit: number;

    /**
     * Is this plan used by default?
     */
    isDefault: boolean;

    /**
     * Special plans to be selected manually
     * No one cannot be switched to this plan by api
     */
    isHidden?: boolean;
}
