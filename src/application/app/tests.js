"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTestingWrapper = void 0;
function addTestingWrapper(functionInput, inputFunction) {
    return function () {
        console.log("add testing wrapper function");
    };
}
exports.addTestingWrapper = addTestingWrapper;
