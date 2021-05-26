import { ObjectId } from "mongodb";
import { SourceMapDataExtended } from './sourceMap';

/**
 * Git commit data stored in the release
 */
export interface CommitData {
  /**
   * Commit hash
   * 
   * @example 599575d00e62924d08b031defe0a6b10133a75fc
   */
  hash: string;

  /**
   * Title of the commit
   * 
   * @example Hot fix
   */
  title: string;

  /**
   * Commit author
   * 
   * @example codex-team@codex.so
   */
  author: string;

  /**
   * Commit date
   * 
   * @example 2021-04-23T10:54:01.000+00:00
   */
  date: Date;
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
   * 
   * @example Version 1.0
   */
  release: string;

  /**
   * Commit data, to identify suspicious ones
   */
  commits: CommitData[];

  /**
   * List of source maps for all chunks
   */
  files?: SourceMapDataExtended[];
}
