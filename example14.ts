class Person {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

let person = new Person("Michał");
console.log(person.getName());

person.setName("Adam");

console.log(person.getName());
