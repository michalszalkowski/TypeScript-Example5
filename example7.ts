const add1 = function (num1: number, num2: number): number {
    return num1 + num2;
};

const add2 = (num1: number, num2: number): number => num1 + num2;

console.log(add1(3, 7));
console.log(add2(3, 7));

// ---------------------------

const add3 = function (num: number): number {
    return num + 10;
}

const add4 = num => num + 10;

// ---------------------------

const log1 = function () {
    console.log("Log 1");
};

const log2 = () => {
    console.log("Log 2");
};

const log3 = () => {
    console.log("Log 3");
};


