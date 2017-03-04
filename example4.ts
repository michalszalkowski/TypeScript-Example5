let person: {name: string, age: number, address: string[], dev: boolean, sayHello: () => string} = {
    name: "Michal",
    age: 18,
    address: ["Polska", "Warszawa", "Street 18"],
    dev: true,
    sayHello: function (): string {
        return "Hello"
    }
}

// person = {} <- error

// person = {name:"michal"} <-error


person = {
    name: "Szalek",
    age: 18,
    address: ["Polska", "Warszawa", "Street 18"],
    dev: true,
    sayHello: function (): string {
        return "Hello"
    }
}