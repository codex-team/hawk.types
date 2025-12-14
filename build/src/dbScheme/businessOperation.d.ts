import type { ObjectId } from 'bson';
import type { BusinessOperationStatus, BusinessOperationType, BusinessOperationPayloadType } from '../base/businessOperation/businessOperation.ts';
/**
 * Structure represents a Business operation in DataBase
 */
export interface BusinessOperationDBScheme<T extends BusinessOperationPayloadType = BusinessOperationPayloadType> {
    /**
     * Business operation ID
     */
    _id?: ObjectId;
    /**
     * Business operation Transaction ID
     */
    transactionId: string;
    /**
     * Business operation type
     */
    type: BusinessOperationType;
    /**
     * Business operation status
     */
    status: BusinessOperationStatus;
    /**
     * Business operation payload
     */
    payload: T;
    /**
     * Date when operation was created
     */
    dtCreated: Date;
}
