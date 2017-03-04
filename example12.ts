class Person {

    public name: string;
    private age: number;
    protected isValid: boolean;

    constructor(name: string, age: number, isValid: boolean, public shit: string) {
        this.name = name;
        this.age = age;
        this.isValid = isValid;
    }

    public getAge(): number {
        return this.age;
    }
}

let person = new Person("Michał", 18, true, "don`t use this");

console.log(person.name); // not full OOP but still valid
console.log(person.shit); // I don't like this
console.log(person.getAge()); // OOP