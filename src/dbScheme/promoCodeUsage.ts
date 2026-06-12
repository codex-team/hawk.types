import type { ObjectId } from 'bson';
import type { PromoCodeBenefitType } from './promoCode.ts';
import type { Utm } from '../base/utm.ts';

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
   * Plan to which promo was applied or which was granted
   */
  planId?: ObjectId;

  /**
   * Benefit type at the moment of application
   */
  benefitType: PromoCodeBenefitType;

  /**
   * Plan price before promo, for discount promos
   */
  originalAmount?: number;

  /**
   * Final price after promo, for discount promos
   */
  finalAmount?: number;

  /**
   * Actual discount amount in money, for discount promos
   */
  discountAmount?: number;

  /**
   * UTM parameters captured when promo code was applied. Used for analytics purposes
   */
  utm?: Utm;

  /**
   * Date when promo code was successfully applied
   * @example 2026-06-10T12:30:00.000Z
   */
  appliedAt: Date;
}
