import { ObjectId } from "mongodb";

export interface ProjectEventGroupingPatternsDBScheme {
  /**
   * If of the pattern
   */
  _id: ObjectId,

  /**
   * String that represents regular expression pattern
   */
  pattern: string,
}