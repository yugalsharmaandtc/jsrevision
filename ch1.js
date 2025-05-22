//Variables and data-types in JavaScript

age=20; //age is a variable that stores the value 20 and is of type number
console.log(age); //outputs 20
name="sachin"; //name is a variable that stores the string "sachin" and is of type string
x= null; //x is a variable that stores the null value and is of type object
y=undefined; //undefined is a special value that represents the absence of any value
console.log(y);
console.log(x);
y=undefined;
y=undefined; //undefined is a special value that represents the absence of any value                
console.log(y);
z= 99.99; //z is a variable that stores the value 99.99 and is of type float or number
console.log(z);

isFollowing=true; //isFollowing is a variable that stores the boolean value true or false

///////////////////////////////////////////////////////////////////////

// let, const, and var are used to declare variables in JavaScript we will mostly use let and const.

// let is used to declare variables that can be reassigned later, const is used to declare variables that cannot be reassigned later.

// const is used to declare variables that are block-scoped and cannot be reassigned later.

// var is used to declare variables that are function-scoped and can be reassigned later var was used before 2015 and is still used in some older code. 


let age=20; //age is a variable that stores the value 20 and is of type number
console.log(age); //outputs 20
const name="sachin"; //name is a variable that stores the string "sachin" and is of type string
let x= null; //x is a variable that stores the null value and is of type object

// if i want to reassign the age again i would just write 

age=30;
console.log(age); //outputs 30

// if i try to reassign the name i would get an error

name="dhoni"; //this will give an error

//also we can write the variable at start and not assign it a value using let
let a;
console.log(a); //outputs undefined
a=20;
console.log(a); //outputs 20

// while with const we can declare variables but we have to assign them a value before using them.

const b=20; //this will give an error
console.log(b); //outputs error
b=20;
console.log(b); //outputs  still error

////////////////////////////////////////////////////////////////////////


// Datatypes in JavaScript

// In JavaScript, there are 6 data types:

// below are primitive data types

- Number (integer or float)
- String (text)
- Boolean (true or false)
- Undefined (no value)
- Null (no value)
- Bigint (large integers)
- Symbol (unique identifier) // the bigint and symbol are very rare

// Number

// In JavaScript, numbers are represented as either integers or floating-point numbers.

// Integer

let num1 = 10;
console.log(num1); //outputs 10

// Float

let num2 = 3.14;
console.log(num2); //outputs 3.14

// String

let str1 = "Hello";
console.log(str1); //outputs "Hello"

// Boolean

let bool1 = true;
console.log(bool1); //outputs true

// Undefined

let undef1 = undefined;
console.log(undef1); //outputs undefined

//BigInt

// BigInt is a new data type in JavaScript that can represent integers of arbitrary size.

// To create a BigInt, we use the n suffix, which stands for "n-ary" or "numeric".

let bigInt1 = 12345678901234567890n;
console.log(bigInt1); //outputs 

// Symbol

// Symbol is a new data type in JavaScript that is used to create unique identifiers.

// To create a Symbol, we use the Symbol() function.

let sym1 = Symbol("Hello");
console.log(sym1); //outputs Symbol(Hello)

// Below is non-primitive data types in JavaScript

- Object
- Array
- Function

// Array and function are sub-categoried as objects in JavaScript.

// Object example

let obj1 = {name: "John", age: 30, city: "New York"};
console.log(obj1); //outputs {name: "John", age: 30, city: "New York"}
console.log(obj1.name); //outputs "John"
console.log(obj1.age); //outputs 30
console.log(obj1.city); //outputs "New York"

// If we want to change the value of the object we can do it like this

obj1.age=obj1.age += 1;

// Array example

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1); //outputs [1, 2, 3, 4, 5]
console.log(arr1[0]); //outputs 1
console.log(arr1[1]); //outputs 2
console.log(arr1[2]); //outputs 3
console.log(arr1[3]); //outputs 4
console.log(arr1[4]); //outputs 5

// Function example

function myFunction() {
  console.log("Hello World");
}

myFunction(); //outputs "Hello World"

/////////////////////////////////////////////////////////////////////////

//typeof operator

// The typeof operator returns a string indicating the type of a variable.

let num3 = 10;
console.log(typeof num3); //outputs "number"

let str2 = "Hello";
console.log(typeof str2); //outputs "string"

/////////////////////////////////////////////////////////////////////////

// Practice questions

// Qs1. Create a const object called “product” to store information shown in the picture


const product = {
    name:"Parker Jotter Standard CT Ball Pen",
    color:"Black",
    isDeals:true,
    rating:"4.5/5",
    offer:true,
    offerValue:"20%",
    price:270,
}

//Qs2. Create a const object called "profile" to store information shown in the picture

const profile = {
name:"yugal",
isVerified:true,
showFolow:true,
posts:100,
followers:1000,
following:500,
username:"yugal",
bio:"I am a software developer",

}