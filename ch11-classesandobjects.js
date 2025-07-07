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

(In JavaScript, the super keyword is used in class-based inheritance to access and call methods or the constructor of a parent class from a child class. It’s primarily used within the class syntax introduced in ES6 and is essential for properly setting up inheritance.)


The super keyword is used to call the constructor of its parent class to access the parent's
properties and methods.
super( args) // calls Parent's constructor
super.parentMethod( args )// calls Parent's method

EG:Using super() to Call the Parent Constructor

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent (Animal) constructor to set 'name'
    this.breed = breed; // Add child-specific property
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Output: Buddy makes a sound.
console.log(myDog.breed); // Output: Golden Retriever

EG2: Using super to Call a Parent Method

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    super.speak(); // Call the parent’s speak method
    console.log(`${this.name} the ${this.breed} barks loudly!`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak();
// Output:
// Buddy makes a sound.
// Buddy the Golden Retriever barks loudly!

EG3: Using super in a More Complex Scenario

class Vehicle {
  constructor(brand) {
    this.brand = brand;
    this.speed = 0;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} is moving at ${this.speed} km/h.`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // Initialize 'brand' and 'speed' from Vehicle
    this.model = model;
  }
  accelerate() {
    super.accelerate(); // Call parent’s accelerate method
    console.log(`The ${this.model} feels sporty!`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.accelerate();
// Output:
// Toyota is moving at 10 km/h.
// The Corolla feels sporty!


NOTES:(Important Notes:
->Must Call super() Before this: In a child class’s constructor, you must call super() before accessing this. Otherwise, you’ll get a ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.

class Dog extends Animal {
  constructor(name, breed) {
    this.breed = breed; // Error: 'this' is not allowed before super()
    super(name);
  }
}
->No super in Constructor Functions: In traditional constructor functions (non-class syntax), you use Parent.call(this, args) instead of super. Example:


function Animal(name) {
  this.name = name;
}
function Dog(name, breed) {
  Animal.call(this, name); // Equivalent to super(name)
  this.breed = breed;
}
->Static Methods: super can also be used in static methods to call a parent class’s static method, though this is less common.

class Animal {
  static describe() {
    return "This is an animal class.";
  }
}
class Dog extends Animal {
  static describe() {
    return super.describe() + " Specifically, it’s for dogs.";
  }
}
console.log(Dog.describe()); // Output: This is an animal class. Specifically, it’s for dogs.


->Common Pitfalls:
1.Forgetting super(): If you omit super() in a child class’s constructor, you’ll get an error.
2.Using super Outside Classes: super only works in class syntax, not in regular functions or arrow functions.
3.Overriding Without super: If you override a parent method and don’t call super.methodName(), you lose the parent’s functionality unless that’s intentional.

->When to Use super:
1.Use super() in the constructor to initialize parent properties.
2.Use super.methodName() to reuse or extend parent methods.

3.It’s essential in inheritance to ensure the parent class’s setup is properly applied to the child class.
)

EG From video(
class Person{
constructor{
this.species = "homo sapiens";
}
eat(){
console.log ("eat");
}
class Engineer extends Person (
constructor (branch){
super(); //to invoke parent class constructor
this.branch = branch;
}
work(){
console. log("solve problems,new Engineer");
}
}

let engObj=new Engineer("computer science");


Questions:

1.Qs. You are creating a website for your college. Create a class User with 2 properties, name &
email. It also has a method called viewData() that allows user to view website data.

2.Qs. Create a new class called Admin which inherits from User. Add a new method called
editData to Admin that allows it to edit website data.

1=

class User{
constructor(name,email){
this.name = name;
this.email = email;
}
viewData(){
console.log(`The name is ${this.name} and the mail id is ${this.email})
}
}

let userObj=new User("John","john@example.com");
userObj.viewData(); // Output: The name is John and the mail id is john@example.com


class Admin extends User{
super(name,email); //to invoke parent class constructor
editData(newname,newEmail){
console.log(`The updated name is ${newname} and the updated mail id is ${newEmail}`);
}
}

let adminObj=new Admin("Jane","jane@example.com");
adminObj.viewData(); // Output: The name is Jane and the mail id is jane@example.com

---->>>below is updated part for second question after getting the mistake the above one is written by me and below by ai by giving questions to it.


class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    const websiteData = "Welcome to our college website!"; // Example website data
    console.log(`User: ${this.name}, Email: ${this.email}, Website Data: ${websiteData}`);
  }
}




class Admin extends User {
  constructor(name, email) {
    super(name, email); // Properly inherit name and email
  }
  editData(newName, newEmail) {
    this.name = newName;
    this.email = newEmail;
    console.log(`Updated: Name is ${this.name}, Email is ${this.email}`);
  }
}




)

*/




