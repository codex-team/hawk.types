import { ObjectId } from "mongodb";
import { SourceMapDataExtended } from './sourceMap';

/**
 * Git commit data needed to create a release
 */
 export interface CommitData {
  /**
   * Commit hash
   */
  hash: string;

  /**
   * Title of the commit
   */
  title: string;

  /**
   * Commit author
   */
  author: string;

  /**
   * Commit date
   */
  date: string;
}

/**
 * Interface representing how project releases are stored in the DB
 */
export interface ReleaseDBScheme {
  /**
   * Release's id
   */
  _id: ObjectId;

  /**
   * ProjectId associated with the release 
   */
  projectId: string;

  /**
   * Release name
   */
  release: string;

  /**
   * Type of catcher used in the project 
   */
  catcherType: string;

  /**
   * Commit data, to identify suspicious ones
   */
  commits: CommitData[];

  /**
   * List of source maps for all chunks
   */
  files?: SourceMapDataExtended[];
}
