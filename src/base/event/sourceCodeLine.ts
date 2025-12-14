/**
 * Representation of source code line,
 * Used in event.payload.backtrace[].sourceCode
 */
export interface SourceCodeLine {
  /**
   * Line number
   */
  line: number;

  /**
   * Line content
   */
  content: string;
}
