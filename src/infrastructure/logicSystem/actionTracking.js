"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToLog = exports.addActionTracking = exports.getUTCTime = void 0;
// getUTCTime returns the time as of when this function was called and puts it in the UTC time format
function getUTCTime() {
    // Get the current timestamp
    var currentTimestamp = new Date().getTime();
    // Convert the timestamp to a UTC date string
    var utcDateString = new Date(currentTimestamp).toISOString();
    // This functions action
    return "ACTION: getUTCTime timestamp :: ".concat(utcDateString);
}
exports.getUTCTime = getUTCTime;
// addActionTracking is
function addActionTracking(input) {
    var functionAction = "ACTION: addActionTracking added tracking to the supplied function: ".concat(input);
    return {
        function: input,
        logs: [functionAction],
    };
}
exports.addActionTracking = addActionTracking;
// addToLog uses concatenation to add to the existing logs
function addToLog(input) {
    var functionAction = "ACTION: addStringToLog adds ".concat(input, " to a string[]");
    var timestamp = getUTCTime();
    return input.concat(functionAction, timestamp);
}
exports.addToLog = addToLog;
