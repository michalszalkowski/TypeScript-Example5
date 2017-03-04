var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Michał");
console.log(person.getName());
person.setName("Adam");
console.log(person.getName());
