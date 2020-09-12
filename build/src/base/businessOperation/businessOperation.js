"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Business operations statuses
 */
var BusinessOperationStatus;
(function (BusinessOperationStatus) {
    /**
     * Business operation is pending
     */
    BusinessOperationStatus["Pending"] = "PENDING";
    /**
     * Business operation is confirmed
     */
    BusinessOperationStatus["Confirmed"] = "CONFIRMED";
    /**
     * Business operation is rejected
     */
    BusinessOperationStatus["Rejected"] = "REJECTED";
})(BusinessOperationStatus = exports.BusinessOperationStatus || (exports.BusinessOperationStatus = {}));
/**
 * Types of business operations
 */
var BusinessOperationType;
(function (BusinessOperationType) {
    /**
     * Workspace plan purchase by payment worker
     */
    BusinessOperationType["WorkspacePlanPurchase"] = "WORKSPACE_PLAN_PURCHASE";
    /**
     * Workspace deposit balance by user
     */
    BusinessOperationType["DepositByUser"] = "DEPOSIT_BY_USER";
})(BusinessOperationType = exports.BusinessOperationType || (exports.BusinessOperationType = {}));
