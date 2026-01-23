/**
 * Task Manager item linked to a particular Event (e.g., GitHub Issue)
 */
export interface TaskManagerItem {
  /**
   * Type of task manager item (currently only 'github-issue' is supported)
   */
  type: 'github-issue';

  /**
   * Task number (e.g., GitHub Issue number)
   */
  number: number;

  /**
   * URL to the task (e.g., GitHub Issue URL)
   */
  url: string;

  /**
   * Task title
   */
  title: string;

  /**
   * How the task was created (automatically by worker or manually by user)
   */
  createdBy: 'auto' | 'manual';

  /**
   * Task creation timestamp
   */
  createdAt: Date;

  /**
   * Agent assigned to the task (e.g., 'copilot' for GitHub Copilot)
   */
  assignee: 'copilot' | null;
}
