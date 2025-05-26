// ARRAYS
/*
An array in JavaScript is a special type of object used to store multiple values in a single variable.
Each value (called an element) has a numeric index starting from 0.

Key Features
Can hold multiple data types: numbers, strings, objects, functions, etc.

Dynamic: You can add or remove elements anytime.

Indexed: Access elements by index (starting from 0).

Has many built-in methods for manipulating data.
*/

/*

// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
let marks=[96,58,65,25,78];

console.log(fruits);          // ["Apple", "Banana", "Cherry"]
console.log(fruits[0]);       // "Apple"
console.log(fruits.length);   // 3

// Adding an element
fruits.push("Mango");  add item at last       // Add to end
console.log(fruits);          // ["Apple", "Banana", "Cherry", "Mango"]

// Removing an element
fruits.pop();  remove item at last               // Removes "Mango"
console.log(fruits);          // ["Apple", "Banana", "Cherry"]

// Iterating over array
fruits.forEach((item, index) => {
  console.log(index, item);
});
// Output:
// 0 "Apple"
// 1 "Banana"
// 2 "Cherry"

*/
let marks=[96,58,65,25,78];

console.log(marks[0]); // 96
console.log(marks[1]); // 58
console.log(marks[2]); // 65
marks[3]=50
console.log(marks[3]); // 50
// Note: Arrays are mutable, meaning you can change their elements.
// You can also use methods like push, pop, shift, unshift to manipulate arrays.

// # Looping ovver array

let heroes=["Batman","Superman","Wonder Woman","Iron Man","Hulk"]

// Using for loop
for(i=0;i<heroes.length;i++){
    console.log(heroes[i])
}

let j=0;
while(j<heroes.length){
    console.log(heroes[j])
    j++
}

// NOTE: WE CAN USE FOR OF LOOP AND FOR IN LOOP WO MOVE OR ITERATE OVER THE ARRAY ELEMENTS BUT IN CASE OF ARRAYS WE PREFER FOR OF LOOP AS IT IS MORE EFFICIENT AND EASY TO READ

// Using for...of loop

for(let hero of heroes){
    console.log(hero);
}

// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.
let marks1=[85, 97, 44, 37, 76, 60];
let sum=0;
for(let val of marks1){
    sum += val;
}
// Note: Add the console.log(sum) in above block and see the result i will print first element then ele+1,ele+1+2 etc
avg= sum / marks1.length;
console.log(avg);
console.log(sum);

//Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 501
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer.

let price=[250, 645, 300, 900, 50]
let final=[];
for(let off of price){
    off=off-off*0.1;
    // console.log(off);
    final.push(off);

}
console.log(final); // [225, 580.5, 270, 810, 45]
/*

// MORE METHODS OF ARRAYS

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// ✅ Concatenation
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]

// ✅ Push & Pop (End)
let nums = [10, 20];
nums.push(30);          // Add at end
console.log(nums);      // [10, 20, 30]
nums.pop();             // Remove last
console.log(nums);      // [10, 20]

// ✅ Unshift & Shift (Start)
nums.unshift(0);        // Add at start
console.log(nums);      // [0, 10, 20]
nums.shift();           // Remove first
console.log(nums);      // [10, 20]

// ✅ Slice (does not modify original)
let sliced = combined.slice(1, 4);
console.log(sliced);    // [2, 3, 4]

// ✅ Splice (modifies original)
let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow", "purple");
console.log(colors);    // ["red", "yellow", "purple", "blue"]

// ✅ Index and Search
console.log(colors.indexOf("blue"));     // 3
console.log(colors.includes("green"));   // false

// ✅ Join
console.log(colors.join(" - ")); // "red - yellow - purple - blue"

// ✅ Reverse
colors.reverse();
console.log(colors);    // ["blue", "purple", "yellow", "red"]

// ✅ Sort
let nums2 = [5, 2, 10];
nums2.sort();           // Lexical sort
console.log(nums2);     // [10, 2, 5]
nums2.sort((a, b) => a - b); // Numeric sort
console.log(nums2);     // [2, 5, 10]

// ✅ Map
let doubled = arr1.map(x => x * 2);
console.log(doubled);   // [2, 4, 6]

// ✅ Filter
let even = arr1.filter(x => x % 2 === 0);
console.log(even);      // [2]

// ✅ Reduce
let sum = arr1.reduce((acc, val) => acc + val, 0);
console.log(sum);       // 6

// ✅ forEach
arr1.forEach((item, index) => {
  console.log(`Index ${index}: ${item}`);
});

// ✅ Find & FindIndex
let firstOver2 = arr1.find(x => x > 2);           // 3
let indexOver2 = arr1.findIndex(x => x > 2);      // 2

// ✅ Flat (flatten nested arrays)
let nested = [1, [2, [3, 4]]];
console.log(nested.flat());        // [1, 2, [3, 4]]
console.log(nested.flat(2));       // [1, 2, 3, 4]

// ✅ isArray
console.log(Array.isArray(arr1));  // true

// ✅ Fill
let filled = new Array(3).fill("A");
console.log(filled);               // ["A", "A", "A"]

// ✅ from
let str = "hello";
let chars = Array.from(str);
console.log(chars);                // ["h", "e", "l", "l", "o"]
*/



