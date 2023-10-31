
// NumberWithLogs is the data structure
interface FunctionsWithTracking {
    result: number;
    logs: string[];
}

// Main runs the application
export function Main() {
    let num1 = 5
    let num2 = 10
    let result = 0

    console.log(`num1 = ${num1} and num2 = ${num2}`)
    console.log(`${num1} * ${num1}`)
    result = Square(num1)
    console.log(`${num1} squared = ${result}`)
    console.log(`${num2} * ${num2}`)
    result = Square(num2)
    console.log(`${num2} squared = ${result}`)
    console.log(`${num2} + 1`)
    result = AddOne(num2)
    console.log(`${num2} + 1 = ${result}`)
    console.log(`${num2} + 1`)
    result = Square(num2)
    console.log(`${num2} + 1 = ${result}`)


}

// Square = number * number
export function Square(number: number): number {
    return number * number
}

// SquareTracked = number * number
export function SquareTracked(number: number): FunctionsWithTracking {
    let sq = number * number;
    return {
        result: sq,
        logs: [`Squared ${number} to get ${sq}`],
    }
}

// AddOne = number + 1
export function AddOne(number: number): number {
    return number + 1
}

// AddOneTracked = number + 1
export function AddOneTracked(number: number): FunctionsWithTracking {
    let added = number + 1;
    return {
        result: added,
        logs: [`Added 1 to ${number} to get ${added}`],
    }
}

// WithWithLogs adds a logging wrapper
export function WrapWithLogs(number: number): FunctionsWithTracking {
    return {
        result: number,
        logs: [],
    }
}

// RunWithLogs executes the code with logging
export function RunWithLogs(
    input: FunctionsWithTracking,
    transform: (_: number) => FunctionsWithTracking
): FunctionsWithTracking {
    const newFunctionWithTracking = transform(input.result)
    return {
        result: newFunctionWithTracking.result,
        logs: input.logs.concat(newFunctionWithTracking.logs)
    }
}
