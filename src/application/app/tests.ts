
export function addTestingWrapper(functionInput: any, inputFunction: (input: any) => any): Function {
    return () => {
        console.log("add testing wrapper function")
    }
}