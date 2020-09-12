import { SourceCodeLine } from "./sourceCodeLine";
/**
 * Single item of backtrace
 */
export interface BacktraceFrame {
    /**
     * File
     */
    file: string;
    /**
     * Line number
     */
    line: number;
    /**
     * Column number
     */
    column: number;
    /**
     * Sibling source code lines: some above and some below
     */
    sourceCode?: SourceCodeLine[];
    /**
     * Function name extracted from current stack frame
     */
    function?: string;
    /**
     * Function arguments extracted from current stack frame
     */
    arguments?: string[];
}
