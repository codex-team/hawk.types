import { ObjectId, Timestamp } from 'mongodb';

/**
 * Source map with parsed file names, stored in the release
 */
export interface SourceMapDataExtended {
  /**
   * Name of source-map file
   *
   * @example main.min.js.map
   */
  mapFileName: string;

  /**
   * Bundle or chunk name
   *
   * @example main.min.js
   */
  originFileName: string;

  /**
   * Source map body in string.
   * After saving to the db, this field will be removed, and _id of saved file will be added instead
   */
  content?: string;

  /**
   * When file will be saved to GridFS, there will be its id instead of 'content'
   */
  _id?: ObjectId;
}

/**
 * Object represents a file structure stored in Mongo GridFS
 *
 * @see https://github.com/mongodb/specifications/blob/master/source/gridfs/gridfs-spec.rst#definitions
 */
export interface SourceMapFileChunk {
  /**
   * Unique id of a file chunk
   */
  _id: ObjectId;

  /**
   * Chunk size in bytes
   */
  length: number;

  /**
   * Maximum chunk size in bytes. By default is 261120
   */
  chunkSize: number;

  /**
   * Uploading date  stored as a BSON datetime value 'Timestamp'.
   *
   * @example 2020-02-18T14:51:40.400Z
   */
  uploadDate: Timestamp;

  /**
   * Uploaded file name
   */
  filename: string;

  /**
   * Hash of the contents of the stored file
   */
  md5: string;
}

/**
 * Source maps passed from user after bundle
 */
export interface SourcemapCollectedData {
  /**
   * Bundle or chunk name
   */
  name: string;

  /**
   * Source map body
   */
  payload: string;
}
