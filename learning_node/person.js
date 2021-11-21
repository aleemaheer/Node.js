// Module Wrapper function
// (function (exports, require, module, __filename, __dirname) {

//});
//console.log(__dirname, __filename);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hello my name is ${this.name} and i am ${this.age}.`);
    }
    night() {
        console.log(`Good night ${this.name}`);
    }
}

module.exports = Person;