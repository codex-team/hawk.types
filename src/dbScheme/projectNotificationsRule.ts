import type { ObjectId } from 'bson';
import type { ReceiveTypes } from '../../index.ts';
import type { NotificationsChannelsDBScheme } from './notificationsChannels.ts';

/**
 * This structure represents a single rule of notifications settings
 */
export interface ProjectNotificationsRuleDBScheme {
  /**
   * Id of Rule
   */
  _id: ObjectId;

  /**
   * Allows to disable rule without removing
   */
  isEnabled: boolean;

  /**
   * Creator of the rule
   */
  uidAdded: ObjectId;

  /**
   * Receive type: 'SEEN_MORE'  or 'ONLY_NEW'
   */
  whatToReceive: ReceiveTypes;

  /**
   * Only those which contains passed words
   */
  including: string[];

  /**
   * Skip those which contains passed words
   */
  excluding: string[];

  /**
   * Available channels to receive
   */
  channels: NotificationsChannelsDBScheme;

  /**
   * If this number of events is reached in the eventThresholdPeriod, the rule will be triggered
   */
  threshold?: number;

  /**
   * Size of period (in milliseconds) to count events to compare to rule threshold
   */
  thresholdPeriod?: number;

  /**
   * If rule is created automatically (on project creation or conversion of old projects)
   */
  autoAdded?: string;
}
