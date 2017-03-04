function sayLorem(): void {
    console.log("Lorem");
}

function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

function connect(val1: string, val2: number): string {
    return val1 + val2;
}

sayLorem();
console.log(multiply(5, 5));
console.log(connect("Lorem ", 25));