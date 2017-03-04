var Person = (function () {
    function Person(name, age, isValid, shit) {
        this.shit = shit;
        this.name = name;
        this.age = age;
        this.isValid = isValid;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var person = new Person("Michał", 18, true, "don`t use this");
console.log(person.name); // not full OOP but still valid
console.log(person.shit); // I don't like this
console.log(person.getAge()); // OOP
