// This is the entry point for the entire application

// Problem:
// Create a monad in typescript to confirm the concept is understood well enough to be implemented in any language

// square multiplies a supplied number by itself
const square = (aNumber: number): number => {
    return aNumber * aNumber
}

// addOne adds one to a supplied number
const addOne = (aNumber: number): number => {
    return aNumber + 1
}

// main is the entry point for the application
const main = () => {
    console.log("Hello World From Main!")
    let numberList: number[] = [ 1, 2, 4, 7, 89, -2, -90, 200, 20045]
    numberList.ForEach((numberFromList: number, numberIndex: number) => {
        console.log(`Index: ${numberIndex} -> Value: ${numberFromList}`)
    })
}