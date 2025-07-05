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



this below code will print for newEmployee that the tax is at 10%
const employee = {
calcTax(){
    console.log("The tax is at 10%")
    }

}

const newEmployee={
salary: 50000,
};

newEmployee.__proto__ = employee;
newEmployee.calcTax()



when there is same named method or property is used in an object and its method then the method or property inside the object will be used instead of the prototype method or property

EG:

const employee = {
calcTax (){
console. log ("tax rate is 10%");
},
};
const karanArjun = {
salary: 50000,
calcTax () {
console. log("tax rate is 20%");
},
};
karanArjun._proto_ = employee;
karanArjun.calcTax(); // Output: tax rate is 20%

*/

/*
# CLASSES IN JS

Class is a program-code template for creating objects.
Those objects will have some state (variables) & some behaviour (functions) inside it.

NOTE: WHEN WE HAVE TO MAKE THE OBJECTS IN BULK LIKE FOR EXAPLE IF WE HAVE TO MAKE OBJECTS FOR THE EMPLOYEES OF THE COMPANY THE WE USE CLASSES AS THE BLUEPRINT OR REFERENCE TO MAKE THE OBJECTS and make a main class and then use that class to make the objects

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

NOTE: In class we dont have to separate the properties and methods with commas like in objects



let fortuner=new ToyotaCar()
typeof fortuner; // Output: object which have methods and properties of the class ToyotaCar
fortuner.start(); // Output: The car is started
fortuner.stop(); // Output: The car is stopped

*/

// Now using one more function in class

/*
class ToyotaCar{
start(){

console.log("The car is started")
}

stop(){
console.log("The car is stopped")
}


setBrand(brand){
this.brand=brand;
//this.brand and the =brand are different
//this.brand is the property of the class/object and (=brand) is the parameter passed to the function
}

}

let fortuner=new ToyotaCar()
fortuner.setBrand("Maruti");
console.log(fortuner.brandname); // Output: Maruti
*/
//---------------------------------------------------------------------------------------------------------------------------------------
// CONTRUCTOR IN CLASS

/*

#--In JavaScript, a constructor is a special function used to create and initialize objects. It’s typically used with the new keyword to instantiate objects from a class or a constructor function. Here's a concise explanation:

Key Points:
Purpose: A constructor defines how an object is created and what initial properties or methods it should have.
Usage: Constructors are invoked using the new keyword, which creates a new object, binds this to it, and returns the object.
Types:
Constructor Functions: Traditional way to create objects before ES6.
Class Constructors: Introduced in ES6, used within class syntax.

EG:wherather we dont have constructur in class the js automatcically creates a constructor for us and when we use new its makes a new object

class ToyotaCar{
constructor() {
console.log("creating new object");
}
start() {
console. log ("start"):
}
stop(){
console. log ("stop");
}
setBrand (brand) {
this.brand = brand;
}
}
let fortuner = new ToyotaCar("fortuner"); //constructor
let lexus = new ToyotaCar(); //constructor

# Another example of constructor in class

class ToyotaCar{
constructor (brand, mileage){
console.log ("creating new object");
this.brand = brand;
this.mileage = mileage;
}
start(){
console.log ("start");
}
stop(){
console.log ("stop");
}
}
let fortuner = new ToyotaCar ("fortuner", 10);
console.log(fortuner);
let lexus = new ToyotaCar ("lexus", 12);
console.log(lexus);
*/
//---------------------------------------------------------------------------------------------------------------------------------------


//# INHERITANCE IN JS 

/*
inheritance is passing down properties & methods from parent class to child class.
class Parent {
}
class Child extends parent{ 
}
Note: If child and parent have same methodfs then childs methods will be used instead of parents methods which is called method overriding


EG:

class Parent{
hello(){
console.log("hello from parent");
}
}
class Child extends Parent{}

let obj=new child();
obj.hello(); // Output: hello from parent

Another example:

class Person{
eat() {
console.log ("eat");
}
sleep(){
console.log("sleep");
}
work() {
console.log("work");
}
class Engineer extends Person{
work(){
console. log ("solve problems, build something");
}
}
class Doctor extends Person{
work(){
console. log ("treat patients");
}
}

let Yugal=new Engineer();
Yugal.eat(); // Output: eat
Yugal.work(); // Output: solve problems, build something


let Raju=new Doctor();
Raju.eat(); // Output: eat  
Raju.work(); // Output: treat patients
*/
//---------------------------------------------------------------------------------------------------------------------------------------  

// SUPER KEYWORD IN JS

/*
The super keyword is used to call the constructor of its parent class to access the parent's
properties and methods.
super( args) // calls Parent's constructor
super.parentMethod( args )// calls Parent's method
*/




