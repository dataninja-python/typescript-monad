// This is the entry point for the entire application
// dataObj allows the passing of the original immutable data
var dataObj = {
    listOfNumbers: [],
    mainMsg: "",
    squareMsg: "",
    addOneMsg: ""
};
// square multiplies a supplied number by itself
var square = function (aNumber) {
    return aNumber * aNumber;
};
// squareTracked performs square function operation but adds action tracking
var squareTracked = function (aNumber) {
    var tmpResult = square(aNumber.result);
    var tmpAction = "Squared: ".concat(aNumber.result, " x ").concat(aNumber.result, " = ").concat(tmpResult);
    return {
        result: tmpResult,
        actionsLog: aNumber.actionsLog.concat(tmpAction),
    };
};
// addOne adds one to a supplied number
var addOne = function (aNumber) {
    return aNumber + 1;
};
// addOneTracked performs addOne function operation but adds action tracking
var addOneTracked = function (aNumber) {
    var tmpResult = addOne(aNumber.result);
    var tmpAction = "AddOne: ".concat(aNumber.result, " + 1 = ").concat(tmpResult);
    return {
        result: tmpResult,
        actionsLog: aNumber.actionsLog.concat(tmpAction),
    };
};
// addTrackingWrapper transforms a function that takes a number and returns a number into a function that returns
// a ResultWithTracking
var addTrackingWrapper = function (aNumber) {
    return {
        result: aNumber,
        actionsLog: [],
    };
};
// addOneToSquared runs addOne function on result of the square function
var addOneToSquare = function (aNumber) {
    return addOne(square(aNumber));
};
// init sets up the application
var init = function () {
    /*
        Set up the program to run
    * */
    // 1. create variables
    var numberList = [1, 2, 4, 7, 89, -2, -90, 200, 20045];
    var mainMessage = "Running the main function";
    var squareMessage = "Running the square function";
    var addOneMessage = "Running the addOne function";
    // 2. store created variable values in module dataObj as the original values
    dataObj.listOfNumbers = numberList;
    dataObj.mainMsg = mainMessage;
    dataObj.squareMsg = squareMessage;
    dataObj.addOneMsg = addOneMessage;
    console.log("finished initializing variables");
    console.log("dataObj contains:");
    console.log(dataObj);
};
// main is the entry point for the application
var main = function () {
    // console.log("Hello World From Main!")
    // let numberList: number[] = [ 1, 2, 4, 7, 89, -2, -90, 200, 20045]
    /* numberList.forEach((numberFromList: number, numberIndex: number) => {
        console.log(`Index: ${numberIndex} -> Value: ${numberFromList}`)
    })*/
    // declare local variables
    var result = 0;
    init();
    console.log(dataObj.mainMsg);
    dataObj.listOfNumbers.forEach(function (aNumber, numberIndex) {
        console.log("".concat(dataObj.squareMsg, " on: ").concat(aNumber, " at index: ").concat(numberIndex));
        result = square(aNumber);
        console.log("".concat(result, " = ").concat(aNumber, " x ").concat(aNumber));
        console.log("".concat(dataObj.addOneMsg, " on: ").concat(aNumber, " at index: ").concat(numberIndex));
        result = addOne(aNumber);
        console.log("".concat(result, " = ").concat(aNumber, " + 1"));
        console.log("Combining addOne and square function. addOne(square(2)) = 5");
        result = addOneToSquare(aNumber);
        console.log("".concat(result, " = addOne(square(").concat(aNumber, "))"));
        console.log("squareTracked(squareTracked(addTrackingWrapper(".concat(aNumber, ")))"));
        var resultTracked = squareTracked(squareTracked(addTrackingWrapper(aNumber)));
        console.log("".concat(resultTracked.result, " ").concat(resultTracked.actionsLog));
    });
};
// run the application
main();
