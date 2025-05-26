// Loops and Strings
/*
In JavaScript, loops are control structures that allow you to repeatedly execute a block of code as long as a specified condition is met or for a set number of iterations. They are used to automate repetitive tasks, iterate over data structures like arrays or objects, or perform operations until a condition changes. JavaScript provides several types of loops: for, while, do...while, for...in, and for...of. Below, I’ll define each loop type and provide examples to illustrate their usage.
*/

/*Types of Loops in JavaScript

1.for Loop

Definition: Executes a block of code a specific number of times, typically used when the number of iterations is known. It consists of three parts: initialization, condition, and increment/decrement.

Syntax:
for (initialization; condition; increment/decrement) {
  // Code to execute
}

eg:
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`); // Output: Iteration 1, Iteration 2, ..., Iteration 5
}
console.log(i)
NOTE:  the above console .log(i) will throw an error because we hav used let in for loop and it is a block scoped variable if we had used var then it must have peinted some value but we use let because its good

2.while Loop

Definition: Executes a block of code as long as a condition is true. It’s used when the number of iterations is unknown but depends on a condition.

Syntax:
while (stopping condition) {
  // Code to execute
}
eg
let count = 1;
while (count <= 5) {
  console.log(`Count: ${count}`); // Output: Count: 1, Count: 2, ..., Count: 5
  count++;
}

Explanation: Checks if count <= 5 before each iteration. If true, executes the block and increments count. Stops when count > 5.

3. do...while Loop

Definition: Similar to while, but guarantees at least one execution of the code block before checking the condition. Useful when the code must run at least once.

Syntax:
do {
  // Code to execute
} while (condition);    

eg
let num = 1;
do {
  console.log(`Number: ${num}`); // Output: Number: 1, Number: 2, ..., Number: 5
  num++;
} while (num <= 5);

Explanation: Executes the block first, then checks num <= 5. Continues if true, stops when num > 5. Even if num were initially 6, it would run once.

NOTE:in while loop the condition check is at last of block and in do while the condition is at first of the block

4.for...in Loop

Definition: Iterates over the enumerable properties of an object (e.g., keys of an object). Primarily used for objects, not arrays (though it works with arrays).

Syntax:
for (let key in object) {
  // Code to execute
}
eg
let person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`); // Output: name: Alice, age: 25, city: New York
  console.log(key)
}


Explanation: Iterates over each property name (key) in person, accessing its value with person[key].

5.for...of Loop

Definition: Iterates over iterable objects like arrays, strings, or other iterables (e.g., Maps, Sets). Ideal for arrays and other collections.

Syntax:
for (let value of iterable) {
  // Code to execute
}

eg
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(`Fruit: ${fruit}`); // Output: Fruit: apple, Fruit: banana, Fruit: orange
}

Explanation: Iterates over each value in the fruits array directly, assigning it to fruit.

*/

// Q ANs
let i=1
for(let i=1;i<100;i++){
    if(i%2==0){
        console.log(i)
    }
}

//Q2

let num=prompt("Guess the number")
let guess=25

while(num!=guess){
    num=prompt("You have entered wrong number try again !")
}
console.log("You win")

// # STRINGS

//eg

let str="jhndn"// This is a string

// Methods in string