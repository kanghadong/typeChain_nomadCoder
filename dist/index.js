"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const kang = new Human("kang", 28, "male");
const sayHi = (person) => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};
sayHi(kang);
//# sourceMappingURL=index.js.map