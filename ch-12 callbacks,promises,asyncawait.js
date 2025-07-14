// This chapter basically covers the use of callbacks, promises, and async/await in JavaScript. Also the what is asynchronous programming and how it works in JavaScript.

// NOTE: IN JS ASYNC AWAIT>>PROMISE CHAINS>> CALLBACK HELL MEANS THAT ASYNC AWAIT IS THE BEST WAY TO HANDLE ASYNCHRONOUS CODE AND AFTER THAT THERE ARE PROMISE CHAINS AND THEN CALLBACK HELL IS THE WORST WAY TO HANDLE ASYNCHRONOUS CODE.

/*
#  Sync in JS
->Synchronous
Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.


-> Asynchronous
Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the Ul.
Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
*/


/*
// # CALLBACKS

In JavaScript, a callback is a function passed as an argument to another function, which is then executed inside that function, often after some operation completes. Callbacks are commonly used for asynchronous operations like timers, event handling, or API calls, allowing code to run after a task finishes.

Key Points:
-> A callback is just a regular function passed as a parameter.
-> It’s often used to handle asynchronous tasks (e.g., after a delay or when data is fetched).
-> Callbacks help manage the flow of asynchronous code.


Eg: 
// Define a callback function
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback(); // Call the callback function
}

// Define the function to be used as a callback
function sayGoodbye() {
  console.log("Goodbye!");
}

// Call greet with sayGoodbye as the callback
greet("Alice", sayGoodbye);

Settimeout also takes a callback function as an argument, which is executed after the specified time delay.
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
    }, 2000); // 2000 milliseconds = 2 seconds  

function hi() {
    console.log("hi");
}

setTimeout(hi, 1000); // hi will be printed after 1 second

#  Callback hell

Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)
This style of programming becomes difficult to understand & manage.

// Example of Callback Hell

// First function with a callback
function getUser(userId, callback) {
  setTimeout(() => {
    console.log("Fetched user with ID: " + userId);
    callback("Alice"); // Pass user data to callback
  }, 1000); // 1-second delay
}

// Second function with a callback
function getPosts(userName, callback) {
  setTimeout(() => {
    console.log("Fetched posts for: " + userName);
    callback(["Post 1", "Post 2"]); // Pass posts to callback
  }, 1000); // 1-second delay
}

// Nested callback example
getUser(1, function(user) {
  console.log("User data: " + user);
  getPosts(user, function(posts) {
    console.log("User posts: " + posts);
  });
});

// Output:
(After 1 second)
Fetched user with ID: 1
User data: Alice
(After another 1 second)
Fetched posts for: Alice
User posts: Post 1,Post 2

Explanation:
getUser simulates fetching a user by ID after a 1-second delay and calls its callback with the user’s name ("Alice").
Inside the callback of getUser, we log the user data and call getPosts, passing the user’s name and another callback.
getPosts simulates fetching posts for the user after another 1-second delay and calls its callback with an array of posts.
The second callback logs the posts.


NOTE: A complex example of callback like a real-life scenerio code using callbacs

function getData(dataId, getNextData){
setTimeout (() => {
console. log("data", datald);
if (getNextData) {
getNextData ();
}, 2000):
}

getData (1 ()=>{,
getData (2) ;
});
*/