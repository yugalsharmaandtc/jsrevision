// FUNCTIONS AND METHODS



// In JavaScript, a function is a reusable block of code designed to perform a particular task. It allows you to group together related statements and execute them as a single unit, often with input values (called parameters) and a result (called a return value).

 /*
 Examples of functions in js

 // ✅ 1. Function Declaration (Named Function)
function greet(name) {// Name is called parameter
  return `Hello, ${name}`;
}
console.log(greet("Alice")); // "Hello, Alice"

// ✅ 2. Function Expression
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5

// ✅ 3. Arrow Function (ES6)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// ✅ 4. Arrow Function (One-liner, implicit return)
const square = n => n * n;
console.log(square(6)); // 36

// ✅ 5. Anonymous Function (commonly used in callbacks)
setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);

// ✅ 6. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("This runs immediately");
})();

// ✅ 7. Function with Default Parameters
function welcome(name = "Guest") {
  console.log(`Welcome, ${name}`);
}
welcome();           // "Welcome, Guest"
welcome("Sam");      // "Welcome, Sam"

// ✅ 8. Rest Parameters
function sumAll(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// ✅ 9. Function Returning Another Function (Closure)
function outer(x) {
  return function inner(y) {
    return x + y;
  };
}
const add5 = outer(5);
console.log(add5(3)); // 8

// ✅ 10. Callback Function
function process(callback) {
  callback("Data processed");
}
process(msg => console.log(msg)); // "Data processed"

// ✅ 11. Recursive Function
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120


 */

// Function t calculate sum of two numbers

function sum(){
  let a=parseInt(prompt("Enter first number: "));
  let b=parseInt(prompt("Enter second number: "));
  return Sum=a+b;
}
console.log(sum()); // Output: 5

/*
suppose in the above function if there is any statement after return statement then it wont never be executed baecoz the lines after the return statement are unreachable.  
Example:
function unreachableExample() {
  return "This will be returned";
  console.log("This will never be executed"); // Unreachable code
}
unreachableExample(); // "This will be returned"


*/

function sum(a, b) {
  let s= a + b;
  return s;

}
// a,b in parameters are only live inside the function they are dead as soon as the function execution is over.
let s=sum(2, 3);
console.log(s); // Output: 5







// Arrow function(Modern Js)

function sum(a,b){
  return a+b;
}
 
const sum=(a,b)=>{
  return a+b;
}

const multiply=(x,y)=>{

return x*y;

}

console.log(multiply(2,3)); // Output: 6

// Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

let a=prompt("Enter a string: ");
function vowel(a){
  let count=0;
  for(let w of a){
    if(w=='a' || w=='e' || w=='i' || w=='o' || w=='u' || w=='A' || w=='E' || w=='I' || w=='O' || w=='U')
      {count++};
  }
  return count
}
let num=vowel(a);
console.log(`Number of vowels in ${a} is ${num}`)


/*
Diffrence between function and method
Above is for function and below points are for methods


Definition:	A function is a reusable block of code that performs a task and can be called independently.
	A method is a function that is associated with an object (i.e., it is a property of an object).
Context:	Defined globally or inside other functions.
Defined inside an object.
Call Style:	Called directly by its name (e.g., sum()).
Called on an object (e.g., person.sayHello()).
this keyword:	Refers to the global object or undefined in strict mode.	Refers to the object the method belongs to.
*/







// FOR EACH LOOP IN ARRAYS (Method of functions)(it is basicalyy used when dealing with array or any string like when doing dsa)

/*

arr.forEach( callBackFunction)
CallbackFunction: Here, it is a function to execute for each element in the array
*A callback is a function passed as an argument to another function

Note: In js functions can be passed as arguments/parameters to other functions, and this is called a callback function also any returned value of a function can be passed as an argument to another function.

eg 

function abc(){
console.log("Hello from abc");

}

function xyz(abc){
return abc
}

eg
arr.forEach( (val) => {
console.log(val);
});

*/

let arr=[1,2,3,4,5,6,7,8,9,10];
arr.forEach(function printValue(val) {
// this val variable inside printValue() will have all the elements of the array which will be passed by the for.Each function
  console.log(val);
  val=val+1; // this will not change the original array
  console.log(val)
});

/*

NOTE

There are 3 values we can pass in the parameters while using for each and they are  elements of array,thier index, and the array itself.

eg

let arr=["apple","banana","cherry"];
arr.forEach(function(value,index,array){
console.log(value,index,array);
});
*/


/*
NOTE: What are higher order functions/Methods?
=> A Higher-Order Function (HOF) is a function that does at least one of the following:

1.Takes another function as an argument, or

2.Returns a function as its result.

=> In JavaScript, functions are first-class citizens, which means they can be:

Stored in variables

Passed as arguments

Returned from other functions


=> Why Use HOFs?
They help make your code more flexible, modular, and clean, especially for things like:

Iteration

Filtering

Mapping

Delayed execution

Callbacks

Function composition

=>
   Built-in HOFs in JavaScript:
Function	         Description
.map()	           Transforms each element in an array
.filter()	         Filters elements based on a condition
.reduce()	         Reduces an array to a single value
.forEach()	       Iterates over elements
.sort()	           Sorts elements (optionally with a function)

eg

function greet(message) {
  return function(name) {
    console.log(message + ', ' + name);
  };
}

const sayHello = greet('Hello');
sayHello('Alice'); // Output: Hello, Alice

*/

/*
Q. Qs. For a given array of numbers, print the square of each value using the forEach loop.

let arr=[2,4,6,8,10];
arr.forEach((val)=>{
val=val*val
console.log(val);
  });
*/



// # Map() Method(Creates a new array with the results of some operation. The value its callback returns are used to form new array )

/*
syntax:
arr.map(callbackfn(value, index, array)

Eg.
let nums = [67, 52, 39];
nums.map ( (val) = {
console. log(val);
});

Note: To make a new array using map()

let arr=[2,3,4,5]

let newArr=arr.map((val)=>{
  return val*val
  })

  console.log(newArr);


  NOTE:FOR EACH IS USED WHEN WE HAVE TO PERFORM ANY OPERATION ON THE ARRAY AND WE DONT NEED TO STORE THE RESULT IN A NEW ARRAY BUT IN CASE OF MAP() WE USE IT WHEN WE WANT TO STORE THE RESULT IN A NEW ARRAY.


*/


// # Filter() Method(Creates a new array with all elements that pass the test implemented by the provided function.)
/*
 let arr=[1,2,3,4,5,6,7,8,9,10];
 let filterArr=arr.filter((val)=>{
  if(val%2==0)
  return val
  })

  console.log(filterArr);


*/

// # Reduce() Method (Executes a reducer function on each element of the array, resulting in a single output value.)

/*
Eg

let arr=[1,2,3,4,5];
let sum=arr.reduce((result, current) => {
  return result + current;
})
  console.log(sum)

  Note: Biigest example for use reduce if we ewant to return the bigggest number in the array we can use the reduce because it stores the previous and next elements of the array

  Eg.

  let arr=[12,9,3,4,5];

  let big=arr.reduce((prev,next)=>{
    return prev>next?prev:next
    })

    console.log(big);
*/


/*
QUESTIONS AND ANSWERS

Os. We are given array of marks of students. Filter out of the marks of students that scored 90+.

Q2 Take a number n as inpuit from user. Create an array of numbers from 1 to n

Use the reduce() method to find the sum of all the numbers in the array.

use the reduce method to find the product of all the numbers in the array.

*/