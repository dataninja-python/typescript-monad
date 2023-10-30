
interface FunctionWithTracking {
    function: Function;
    logs: string[];
}


// getUTCTime returns the time as of when this function was called and puts it in the UTC time format
function getUTCTime(): string {
    // Get the current timestamp
    const currentTimestamp: number = new Date().getTime();
    // Convert the timestamp to a UTC date string
    const utcDateString: string = new Date(currentTimestamp).toISOString();
    // This functions action
    return `ACTION: getUTCTime timestamp :: ${utcDateString}`;
}

// addActionTracking
function addActionTracking(input: (param1: any) => any):FunctionWithTracking {
    let functionAction =`ACTION: addActionTracking added tracking to the supplied function: ${input}`;

    return {
        function: input,
        logs: [functionAction],
    }
}

// addToLog uses concatenation to add to the existing logs
function addToLog(input: string[]): string[] {
    let functionAction: string = `ACTION: addStringToLog adds ${input} to a string[]`;
    let timestamp: string = getUTCTime()
    return input.concat(functionAction, timestamp)
}