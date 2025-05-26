// FUNCTIONS AND METHODS
 /*
 Examples of functions in js

 // ✅ 1. Function Declaration (Named Function)
function greet(name) {
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