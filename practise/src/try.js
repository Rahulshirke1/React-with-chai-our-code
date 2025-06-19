// Class with Constructor
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

// creating an object of the class
const person1 = new Person("Rahul", 20);

// Calling the method
person1.greet();