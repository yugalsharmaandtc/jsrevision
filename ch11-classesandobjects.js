// # PROTOTYPES IN JS

/*
# PROTOTYPES IN JS

A javaScript object is an entity having state and behavior (properties and method).
JS objects have a special property called prototype.
We can set prototype using __proto__

EG
const student ={
fullName:"shradha khapra",
marks:94.4,
printMarks: function () {
console. log ("marks =", this.marks);
}
};

NOTE: THE FULLNAME AND MARKS ARE CALLED THE PROPERTIES OF THE OBJECT AND THE PRINTMARKS IS CALLED THE METHOD OF THE OBJECT

*/
const student ={
fullName:"shradha khapra",
marks:94.4,
printMarks: function () {
console. log ("marks =", this.marks);
}
};

console.log(student)
console.log(student.fullName);

/*
=>What Are Prototypes in JavaScript?
In JavaScript, prototypes are a fundamental concept used to implement inheritance.

=>In Simple Terms:
Every JavaScript object has a prototype, which is another object that it inherits properties and methods from.

EG:

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};

let john = new Person("John");
john.sayHello(); // Output: Hello, my name is John

john does not have a sayHello method directly.

JavaScript looks up the prototype chain (john.__proto__) to find it in Person.prototype.

If a property or method is not found on an object, JavaScript looks up the prototype chain until it finds it (or reaches null).

john → Person.prototype → Object.prototype → null

BELOW IS EXAMPLE OF MAKING A PROTOTYPE OF MYSELF

const employee = {
calctax(){
    consolog("The tax is at 10%")
    }

}

const newEmployee={
salary: 50000,
};

now to use the prototype of employee in newEmployee we can write

newEmployee.__proto__ = employee;
newEmployee2.__proto__ = employee;
newEmployee3.__proto__ = employee;
newEmployee4.__proto__ = employee;
newEmployee5.__proto__ = employee;
newEmployee6.__proto__ = employee;

*/

/*
# CLASSES IN JS

Class is a program-code template for creating objects.
Those objects will have some state (variables) & some behaviour (functions) inside it.

NOTE: WHEN WE HAVE TO MAKE THE OBJECTS IN BULK LIKE FOR EXAPLE IF WE HAVE TO MAKE OBJECTS FOR THE EMPLOYEES OF THE COMPANY THE WE USE CLASSES AS THE BLUEPRINT OR REFERENCE TO MAKE THE OBJECTS

SYNTAX:

class MyClass {
constructor () {...}
myMethod() {...}
}

let myObj=newMyClass();

eg:

class ToyotaCar{
start(){

console.log("The car is started")
}

stop(){
console.log("The car is stopped")
}

}

*/