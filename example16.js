var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
        this.name = "Animal";
    }
    return Animal;
}());
var Human = (function (_super) {
    __extends(Human, _super);
    function Human(name) {
        _super.call(this);
        this.name = name;
    }
    Human.prototype.getName = function () {
        return this.name;
    };
    return Human;
}(Animal));
var michal = new Human("Michał");
console.log(michal.getName());
