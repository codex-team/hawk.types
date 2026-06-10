import type { ObjectId } from 'bson';
/**
 * Promo code usage representation in DataBase
 */
export interface PromoCodeUsageDBScheme {
    /**
     * Promo code usage id
     */
    _id: ObjectId;
    /**
     * Applied promo code id
     */
    promoCodeId: ObjectId;
    /**
     * User who applied promo code
     */
    userId: string;
    /**
     * Workspace where promo code was applied
     */
    workspaceId: ObjectId;
    /**
     * Date when promo code was applied
     * @example 2026-06-10T12:30:00.000Z
     */
    appliedAt: Date;
}
