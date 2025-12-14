"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessOperationType = exports.BusinessOperationStatus = void 0;
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
})(BusinessOperationStatus || (exports.BusinessOperationStatus = BusinessOperationStatus = {}));
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
    /**
     * Charge minimal amount of money to link a card for further recurrent payments
     */
    BusinessOperationType["CardLinkCharge"] = "CARD_LINK_CHARGE";
    /**
     * Refund the money that were charged to link a card
     */
    BusinessOperationType["CardLinkRefund"] = "CARD_LINK_REFUND";
})(BusinessOperationType || (exports.BusinessOperationType = BusinessOperationType = {}));
