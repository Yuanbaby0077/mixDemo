var People = /** @class */ (function () {
    function People(name, age) {
        this.name = null;
        this.age = null;
        this.name = name;
        this.age = age;
    }
    People.prototype.sayHello = function () {
        return this.name + " is " + this.age + " years old";
    };
    return People;
}());
module.exports = People;
