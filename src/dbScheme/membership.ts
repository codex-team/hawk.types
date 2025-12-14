import type { ObjectId } from 'bson';

/**
 * Represents confirmed member info in DB
 */
export interface ConfirmedMemberDBScheme {
  /**
   * Document id
   */
  _id: ObjectId;

  /**
   * Id of the member of workspace
   */
  userId: ObjectId;

  /**
   * Is user admin in workspace
   */
  isAdmin?: boolean;
}

/**
 * Represents pending member info in DB
 */
export interface PendingMemberDBScheme {
  /**
   * Document id
   */
  _id: ObjectId;

  /**
   * User email for invitation
   */
  userEmail: string;
}

/**
 * Represents full structure of team collection documents
 */
export type MemberDBScheme = ConfirmedMemberDBScheme | PendingMemberDBScheme;
