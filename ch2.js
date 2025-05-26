// OPERATORS AND CONDITIONAL STATEMENTS

//Operators
/*
1. (+,-,*,/)
2. Modulus
3.Exponential
4. Increment
5. Decrement
*/

let a=5
let b=5

console.log(a+b)
console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus: 0
console.log(a ** b); // Exponentiation: 100000
// These below are uniary operators they dont require 2 inputs like a and b they just perform on 1 variable
// These are of 2 types pre and post the pre says first i will increment then do the assigned work and post says firts i will do assigned work then i will do inc or dec
console.log(++a); // Increment: 11
console.log(--b); // Decrement: 4

let x = 5;
console.log(++x); // Increments x to 6, then returns 6
console.log(x); // x is now 6

let y = 5;
console.log(y++); // Returns 5, then increments y to 6
console.log(y); // y is now 6

let a = 5;
console.log(--a); // Decrements a to 4, then returns 4
console.log(a); // a is now 4

let b = 5;
console.log(b--); // Returns 5, then decrements b to 4
console.log(b); // b is now 4


// # ASSIGNMENT OPERATOIRS

let x = 10; // Assignment
x += 5; // Addition assignment: x = x + 5 → 15
x -= 3; // Subtraction assignment: x = x - 3 → 12
x *= 2; // Multiplication assignment: x = x * 2 → 24
x /= 4; // Division assignment: x = x / 4 → 6
x %= 5; // Modulus assignment: x = x % 5 → 1
x **= 2; // Exponentiation assignment: x = x ** 2 → 1
console.log(x); // 1


// COMPARISON OPERATORS

let a = 10, b = 5, c = "10";
console.log(a == b); // Equal to: false
console.log(a === c); // Strict equal (value and type): false IF IN THIS CASE HERE THE NORMAL == THEN IT WOULD SAISD TRUE BEACUSE WHEN THERE IS A NUMBER IN STRING QUOTES ("") THEN JS INPLICITLY CONVERTS THE STRING INTO NUMBER
console.log(a != b); // Not equal: true
console.log(a !== c); // Strict not equal: true
console.log(a > b); // Greater than: true
console.log(a < b); // Less than: false
console.log(a >= b); // Greater than or equal: true
console.log(a <= b); // Less than or equal: false

// LOGICAL OPERATORS (Combine or manipulate boolean values.)

// EXAMPLES
let a = true, b = false;
console.log(a && b); // false (because b is false)
console.log(a && true); // true (both are true)

let x = 5, y = 0, z = "Hello";
console.log(x && y); // 0 (y is falsy, so it returns y)
console.log(x && z); // "Hello" (both are truthy, so it returns the last value, z)

let user = { name: "Alice", age: 20 };
if (user && user.age > 18) {
  console.log("User is an adult"); // Output: User is an adult
}

/*Purpose: Returns true if both operands are true; otherwise, returns false.
Behavior: Evaluates expressions from left to right and stops (short-circuits) as soon as it encounters a false value, returning that value (or the last value if all are truthy).
Truthy/Falsy: JavaScript considers values like 0, null, undefined, "" (empty string), NaN, and false as falsy; all other values are truthy.
Return Value: Returns the first falsy value or the last truthy value if all operands are truthy.*/

let a = true, b = false;
console.log(a || b); // true (a is true)
console.log(false || false); // false (both are false)

/*Purpose: Returns true if at least one operand is true; otherwise, returns false.
Behavior: Evaluates from left to right and short-circuits as soon as it encounters a true value, returning that value (or the last value if all are falsy).
Return Value: Returns the first truthy value or the last falsy value if all operands are falsy.
*/


let x = true;
console.log(!x); // false
console.log(!false); // true

/*
Purpose: Returns true if at least one operand is true; otherwise, returns false.
Behavior: Evaluates from left to right and short-circuits as soon as it encounters a true value, returning that value (or the last value if all are falsy).
Return Value: Returns the first truthy value or the last falsy value if all operands are falsy.
*/


// CONDITIONAL STATEMENTS

// IF STATEMENT

let age=20
if(age>=18){

    console.log("Cleared")
}

// If-Else

let age1=20
if(age1>=18){

    console.log("Cleared")
}

else{
    console.log("Not") // Else always comes with if not alone but if block can be alone
}

// Elseif

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // Output: Grade: B
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}


let temperature = 25;
let isRaining = false;

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature >= 20 && !isRaining) {
  console.log("It's a nice day!"); // Output: It's a nice day!
} else if (temperature >= 20 && isRaining) {
  console.log("It's warm but raining.");
} else {
  console.log("It's cold!");
}

//TERNARY OPERATOR (IT IS THE ONLY JS OPERATOR WHICH TAKES 3 OPERANDS)

//  condition ? expressionIfTrue : expressionIfFalse

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: Adult


let isLoggedIn = true;
console.log(`User is ${isLoggedIn ? "online" : "offline"}`); // Output: User is online



// let a= prompt("ERnter a number");

// if(a||5==0){
//     console.log("Multiple of 5");
// }
// else{
//     console.log("Not");
// }

// Q2

let marks=prompt("Please enter marks");
if(marks>=80 && marks<=100){
    console.log("Grade:A")
    }

else if(marks>=70 && marks<=89){
    console.log("Grade:B")
    }
else if(marks>=60 && marks<=69){
    console.log("Grade:C")
    }
 else{
        console.log("Failed")
    }