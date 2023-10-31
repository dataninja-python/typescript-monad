"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunWithLogs = exports.WrapWithLogs = exports.AddOneTracked = exports.AddOne = exports.SquareTracked = exports.Square = exports.Main = void 0;
// Main runs the application
function Main() {
    var num1 = 5;
    var num2 = 10;
    var result = 0;
    console.log("num1 = ".concat(num1, " and num2 = ").concat(num2));
    console.log("".concat(num1, " * ").concat(num1));
    result = Square(num1);
    console.log("".concat(num1, " squared = ").concat(result));
    console.log("".concat(num2, " * ").concat(num2));
    result = Square(num2);
    console.log("".concat(num2, " squared = ").concat(result));
    console.log("".concat(num2, " + 1"));
    result = AddOne(num2);
    console.log("".concat(num2, " + 1 = ").concat(result));
    console.log("".concat(num2, " + 1"));
    result = Square(num2);
    console.log("".concat(num2, " + 1 = ").concat(result));
}
exports.Main = Main;
// Square = number * number
function Square(number) {
    return number * number;
}
exports.Square = Square;
// SquareTracked = number * number
function SquareTracked(number) {
    var sq = number * number;
    return {
        result: sq,
        logs: ["Squared ".concat(number, " to get ").concat(sq)],
    };
}
exports.SquareTracked = SquareTracked;
// AddOne = number + 1
function AddOne(number) {
    return number + 1;
}
exports.AddOne = AddOne;
// AddOneTracked = number + 1
function AddOneTracked(number) {
    var added = number + 1;
    return {
        result: added,
        logs: ["Added 1 to ".concat(number, " to get ").concat(added)],
    };
}
exports.AddOneTracked = AddOneTracked;
// WithWithLogs adds a logging wrapper
function WrapWithLogs(number) {
    return {
        result: number,
        logs: [],
    };
}
exports.WrapWithLogs = WrapWithLogs;
// RunWithLogs executes the code with logging
function RunWithLogs(input, transform) {
    var newFunctionWithTracking = transform(input.result);
    return {
        result: newFunctionWithTracking.result,
        logs: input.logs.concat(newFunctionWithTracking.logs)
    };
}
exports.RunWithLogs = RunWithLogs;
