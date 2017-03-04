function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

function connect(val1: string, val2: string): string {
    return val1 + val2;
}

let myFunction: (val1: number, val2: number)=> number;

myFunction = multiply;
console.log(myFunction(1, 1));

// myFunction = connect;
// console.log(myFunction("1", "1"));