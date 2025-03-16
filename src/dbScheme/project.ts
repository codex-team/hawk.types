import { ObjectId } from 'mongodb';
import { ProjectNotificationsRuleDBScheme } from '../../index';
import { ProjectEventGroupingPatternsDBScheme } from '../../index';

/**
 * Structure represents a Project in DataBase
 */
export interface ProjectDBScheme {
  /**
   * Project ID
   */
  _id: ObjectId;

  /**
   * Unique integration id, that's used as collector domain url for sending events
   *
   * @example `wss://${integrationId}.k1.hawk.so/ws`
   */
  integrationId: string;

  /**
   * Project Integration Token
   */
  token: string;

  /**
   * Project name
   */
  name: string;

  /**
   * User who created project
   */
  uidAdded: ObjectId;

  /**
   * Workspace id which project is belong
   */
  workspaceId: ObjectId;

  /**
   * Project description
   */
  description?: string;

  /**
   * URL of a project logo
   */
  image?: string;

  /**
   * Project notifications settings
   */
  notifications: ProjectNotificationsRuleDBScheme[];

  /**
   * Patterns for manual event grouping
   */
  eventGroupingPatterns: ProjectEventGroupingPatternsDBScheme[];
}
