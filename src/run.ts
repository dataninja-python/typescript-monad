// This is the entry point for the entire application

// Problem:
// Create a monad in typescript to confirm the concept is understood well enough to be implemented in any language

// Create the main data structure used throughout this application
interface ModuleData {
    listOfNumbers: number[];
    mainMsg: string;
    squareMsg: string;
    addOneMsg: string;
}

// create Calculate With Logs interface to keep track of action taken at each step
interface ResultWithTracking {
    result: number;
    actionsLog: string[];
}

// dataObj allows the passing of the original immutable data
const dataObj: ModuleData = {
    listOfNumbers: [],
    mainMsg: "",
    squareMsg: "",
    addOneMsg: ""
}


// square multiplies a supplied number by itself
const square = (aNumber: number): number => {
    return aNumber * aNumber;
}

// squareTracked performs square function operation but adds action tracking
const squareTracked = (aNumber: ResultWithTracking): ResultWithTracking => {
    let tmpResult = square(aNumber.result)
    let tmpAction = `Squared: ${aNumber.result} x ${aNumber.result} = ${tmpResult}`
    return {
        result: tmpResult,
        actionsLog: aNumber.actionsLog.concat(tmpAction),
    }
}

// addOne adds one to a supplied number
const addOne = (aNumber: number): number => {
    return aNumber + 1;
}

// addOneTracked performs addOne function operation but adds action tracking
const addOneTracked = (aNumber: ResultWithTracking): ResultWithTracking => {
    let tmpResult = addOne(aNumber.result)
    let tmpAction = `AddOne: ${aNumber.result} + 1 = ${tmpResult}`
    return {
        result: tmpResult,
        actionsLog: aNumber.actionsLog.concat(tmpAction)
    }
}

// addTrackingWrapper transforms a function that takes a number and returns a number into a function that returns
// a ResultWithTracking
const addTrackingWrapper = (aNumber: number): ResultWithTracking => {
    return {
        result: aNumber,
        actionsLog: [],
    }
}

// runWithTracking takes an input and a function and
const runWithTracking = (aNumber: ResultWithTracking, transform: (_) => ResultWithTracking ): ResultWithTracking => {
    const newNumberTracked = transform(aNumber.result)
    return {
        result: newNumberTracked.result,
        actionsLog: aNumber.actionsLog.concat(newNumberTracked.actionsLog)
    }
}




// addOneToSquared runs addOne function on result of the square function
const addOneToSquare = (aNumber: number): number => {
    return addOne(square(aNumber))
}

// init sets up the application
const init = () :void => {
    /*
        Set up the program to run
    * */

    // 1. create variables
    let numberList: number[] = [ 1, 2, 4, 7, 89, -2, -90, 200, 20045];
    let mainMessage: string = "Running the main function";
    let squareMessage: string = "Running the square function";
    let addOneMessage: string = "Running the addOne function";

    // 2. store created variable values in module dataObj as the original values
    dataObj.listOfNumbers = numberList;
    dataObj.mainMsg = mainMessage;
    dataObj.squareMsg = squareMessage;
    dataObj.addOneMsg = addOneMessage;

    console.log("finished initializing variables")
    console.log("dataObj contains:")
    console.log(dataObj)
}

// main is the entry point for the application
const main = () => {
    // console.log("Hello World From Main!")
    // let numberList: number[] = [ 1, 2, 4, 7, 89, -2, -90, 200, 20045]
    /* numberList.forEach((numberFromList: number, numberIndex: number) => {
        console.log(`Index: ${numberIndex} -> Value: ${numberFromList}`)
    })*/

    // declare local variables
    let result: number = 0

    init()
    console.log(dataObj.mainMsg)
    dataObj.listOfNumbers.forEach((aNumber, numberIndex) => {
        console.log(`${dataObj.squareMsg} on: ${aNumber} at index: ${numberIndex}`)
        result = square(aNumber)
        console.log(`${result} = ${aNumber} x ${aNumber}`)
        console.log(`${dataObj.addOneMsg} on: ${aNumber} at index: ${numberIndex}`)
        result = addOne(aNumber)
        console.log(`${result} = ${aNumber} + 1`)
        console.log("Combining addOne and square function. addOne(square(2)) = 5")
        result = addOneToSquare(aNumber)
        console.log(`${result} = addOne(square(${aNumber}))`)
        console.log(`squareTracked(squareTracked(addTrackingWrapper(${aNumber})))`)
        let resultTracked = squareTracked(squareTracked(addTrackingWrapper(aNumber)))
        console.log(`${resultTracked.result} ${resultTracked.actionsLog}`)
        console.log(`addOneTracked(addOneTracked(addTrackingWrapper(${aNumber})))`)
        resultTracked = addOneTracked(addOneTracked(addTrackingWrapper(aNumber)))
        console.log(`${resultTracked.result} ${resultTracked.actionsLog}`)

        // use newly created monad
        const a = addTrackingWrapper(3)
        const b = runWithTracking(a, squareTracked)
        const c = runWithTracking(b, addOneTracked)

        console.log(a)
        console.log(b)
        console.log(c)

    })
}

// run the application
main()