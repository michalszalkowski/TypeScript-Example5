var Person = (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person("Michał");
console.log(person.name);
person.name = "Adam";
console.log(person.name);
