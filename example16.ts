abstract class Animal {
    protected name: string = "Animal";
    abstract getName(): string;
}

class Human extends Animal {

    constructor(name: string) {
        super();
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

const michal = new Human("Michał");
console.log(michal.getName());