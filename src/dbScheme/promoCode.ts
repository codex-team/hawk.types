import type { ObjectId } from 'bson';

/**
 * Promo code representation in DataBase
 */
export interface PromoCodeDBScheme {
  /**
   * Promo code id
   */
  _id: ObjectId;

  /**
   * Normalized promo code value
   * @example HAWK-2026
   */
  code: string;

  /**
   * Tariff plan assigned by this promo code
   */
  planId: ObjectId;

  /**
   * Maximum total usages count
   * @example 100
   */
  limit?: number;

  /**
   * Date after which promo code cannot be used
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
