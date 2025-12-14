"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiveTypes = void 0;
/**
 * Available options of 'What to receive'
 */
var ReceiveTypes;
(function (ReceiveTypes) {
    /**
     * If event seen more than threshold in thresholdPeriod
     */
    ReceiveTypes["SEEN_MORE"] = "SEEN_MORE";
    /**
     * Only first occurrence
     */
    ReceiveTypes["ONLY_NEW"] = "ONLY_NEW";
})(ReceiveTypes || (exports.ReceiveTypes = ReceiveTypes = {}));
