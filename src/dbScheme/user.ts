import type { ObjectId } from 'bson';
import type { UserNotificationsDBScheme } from '../../index.ts';
import type { BankCard } from './bankCard.ts';
import type { MembershipDBScheme } from './membership.ts';
import type { UserProjectsLastVisitDBScheme } from './userProjectsLastVisit.ts';

/**
 * Interface representing how user is stored in DB
 */
export interface UserDBScheme {
  /**
   * User's id
   */
  _id: ObjectId;

  /**
   * User's email
   */
  email?: string;

  /**
   * User's password
   */
  password?: string;

  /**
   * User's image url
   */
  image?: string;

  /**
   * User's name
   */
  name?: string;

  /**
   * User's GitHub profile id
   */
  githubId?: string;

  /**
   * User's workspaces membership
   * Record of workspace IDs to membership data
   */
  workspaces?: MembershipDBScheme;

  /**
   * User's original password (this field appears only after registration).
   * Using to send password to user after registration
   */
  generatedPassword?: string;

  /**
   * User notifications settings
   */
  notifications?: UserNotificationsDBScheme;

  /**
   * User's last visit timestamps for projects
   */
  projectsLastVisit?: UserProjectsLastVisitDBScheme;

  /**
   * Saved bank cards for one-click payments
   */
  bankCards?: BankCard[];

  /**
   * UTM parameters from signup - Data form where user went to sign up. Used for analytics purposes
   */
  utm?: {
    /**
     * UTM source - identifies which site sent the traffic
     */
    source?: string;

    /**
     * UTM medium - identifies what type of link was used
     */
    medium?: string;

    /**
     * UTM campaign - identifies a specific product promotion or strategic campaign
     */
    campaign?: string;

    /**
     * UTM content - identifies what specifically was clicked to bring the user to the site
     */
    content?: string;

    /**
     * UTM term - identifies search terms
     */
    term?: string;
  };

  /**
   * External identities for SSO (keyed by workspaceId)
   */
  identities?: {
    [workspaceId: string]: {
      /**
       * SAML-mode params
       */
      saml: {
        /**
         * NameID value from IdP (stable identifier)
         */
        id: string;

        /**
         * Email at the time of linking (for audit)
         */
        email: string;
      };
    };
  };
}
