import type { ObjectId } from 'bson';
/**
 * Defines what a promo code grants to the user or workspace
 */
export type PromoCodeBenefitType = 'grant_plan' | 'percent_discount' | 'amount_discount' | 'fixed_price';
/**
 * Grant plan benefit — assigns a tariff to workspace immediately
 */
export interface GrantPlanPromoCodeBenefit {
    /**
     * Benefit type
     */
    type: 'grant_plan';
    /**
     * Tariff plan to grant to workspace
     */
    planId: ObjectId;
}
/**
 * Reduces plan price by a percentage when purchasing a tariff
 */
export interface PercentDiscountPromoCodeBenefit {
    /**
     * Benefit type
     */
    type: 'percent_discount';
    /**
     * Discount size in percent. Greater than 0, maximum 100
     * @example 20
     */
    percent: number;
    /**
     * Plan ids this promo can be applied to.
     * If not set or empty — applicable to any available plan
     */
    applicablePlanIds?: ObjectId[];
    /**
     * Minimum final price after discount.
     * If not set — defaults to 1
     */
    minFinalPrice?: number;
}
/**
 * Fixed amount discount benefit
 */
export interface AmountDiscountPromoCodeBenefit {
    /**
     * Benefit type
     */
    type: 'amount_discount';
    /**
     * Discount size in money. Must be greater than 0
     */
    amount: number;
    /**
     * Plan ids this promo can be applied to.
     * If not set or empty — applicable to any available plan
     */
    applicablePlanIds?: ObjectId[];
    /**
     * Minimum final price after discount.
     * If not set — defaults to 1
     */
    minFinalPrice?: number;
}
/**
 * Sets a fixed final price for selected plans when purchasing a tariff
 */
export interface FixedPricePromoCodeBenefit {
    /**
     * Benefit type
     */
    type: 'fixed_price';
    /**
     * Final tariff price after promo is applied
     */
    amount: number;
    /**
     * Plan ids this promo can be applied to.
     * If not set or empty — applicable to any available plan
     */
    applicablePlanIds?: ObjectId[];
}
/**
 * Promo code benefit union
 */
export type PromoCodeBenefit = GrantPlanPromoCodeBenefit | PercentDiscountPromoCodeBenefit | AmountDiscountPromoCodeBenefit | FixedPricePromoCodeBenefit;
/**
 * Promo code representation in DataBase
 */
export interface PromoCodeDBScheme {
    /**
     * Promo code id
     */
    _id: ObjectId;
    /**
     * Promo code value entered by user.
     * Normalized: trim + uppercase. Allowed: A-Z, 0-9, "-", "_". Must be unique
     * @example HAWK-2026
     */
    value: string;
    /**
     * What this promo code grants
     */
    benefit: PromoCodeBenefit;
    /**
     * Maximum total successful usages count.
     * If not set — no global limit
     * @example 100
     */
    limit?: number;
    /**
     * Date after which promo code cannot be used.
     * If not set — no expiration
     * @example 2026-12-31T23:59:59.000Z
     */
    expiresAt?: Date;
    /**
     * Date when promo code was created
     * @example 2026-06-10T12:00:00.000Z
     */
    createdAt: Date;
    /**
     * Date when promo code was updated
     * @example 2026-06-10T12:00:00.000Z
     */
    updatedAt: Date;
    /**
     * User or system id that created promo code
     * @example 507f1f77bcf86cd799439013
     */
    createdBy: string;
}
