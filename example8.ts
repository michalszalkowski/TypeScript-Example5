const add = (num1: number, num2: number = 10): number => {
    return num1 + num2;
};

console.log(add(1));
console.log(add(1, 10));
console.log(add(1, 20));