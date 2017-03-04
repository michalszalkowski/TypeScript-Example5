var person = {
    name: "Michal",
    age: 18,
    address: ["Polska", "Warszawa", "Street 18"],
    dev: true,
    sayHello: function () {
        return "Hello";
    }
};
// person = {} <- error
// person = {name:"michal"} <-error
person = {
    name: "Szalek",
    age: 18,
    address: ["Polska", "Warszawa", "Street 18"],
    dev: true,
    sayHello: function () {
        return "Hello";
    }
};
