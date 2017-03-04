const colors = ["White", "Red", "Blue"];
const [c1, c2, c3] = colors;
console.log(c1);
console.log(c2);
console.log(c3);

// -----------------

const person = {
    name: "Michał",
    age: 18
};

const {name: personName, age: personAge} = person;

console.log(personName, personAge);