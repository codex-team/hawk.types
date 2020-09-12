import { ObjectId } from 'mongodb';
/**
 * Business operations statuses
 */
export declare enum BusinessOperationStatus {
    /**
     * Business operation is pending
     */
    Pending = "PENDING",
    /**
     * Business operation is confirmed
     */
    Confirmed = "CONFIRMED",
    /**
     * Business operation is rejected
     */
    Rejected = "REJECTED"
}
/**
 * Types of business operations
 */
export declare enum BusinessOperationType {
    /**
     * Workspace plan purchase by payment worker
     */
    WorkspacePlanPurchase = "WORKSPACE_PLAN_PURCHASE",
    /**
     * Workspace deposit balance by user
     */
    DepositByUser = "DEPOSIT_BY_USER"
}
/**
 * Business operation payload type for `DepositByUser` operation type
 */
export interface PayloadOfDepositByUser {
    /**
     * Workspace ID to which the payment is credited
     */
    workspaceId: ObjectId;
    /**
     * Amount of payment
     */
    amount: number;
    /**
     * ID of the user who made the payment
     */
    userId: ObjectId;
    /**
     * PAN of card which user made the payment
     */
    cardPan: string;
}
/**
 * Business operation payload type for `WorkspacePlanPurchase` operation type
 */
export interface PayloadOfWorkspacePlanPurchase {
    /**
     * Workspace ID to which the payment is debited
     */
    workspaceId: ObjectId;
    /**
     * Amount of payment
     */
    amount: number;
}
/**
 * Type of business operation payload, it depends of type field
 */
export declare type BusinessOperationPayloadType = PayloadOfDepositByUser | PayloadOfWorkspacePlanPurchase;
