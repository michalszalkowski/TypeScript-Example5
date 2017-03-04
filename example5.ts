type Person = {name: string, age: number, address: string[], dev: boolean, sayHello: () => string};

// person = {} <- error

// person = {name:"michal"} <-error

let person: Person = {
    name: "Szalek",
    age: 18,
    address: ["Polska", "Warszawa", "Street 18"],
    dev: true,
    sayHello: function (): string {
        return "Hello"
    }
}