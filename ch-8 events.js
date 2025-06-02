// NOTE CH 6 AND 7 WERE ABOUT DOM AND ITS MANIPULATION SO THEY WERE NOT HERE

// EVENTS IN JS

// The change in the state of an object is known as an Event
// Events are fired to notify code of "interesting changes" that may affect code execution.

/*
• Mouse events (click, doubli
• Keyboard events (keypress
• Form events (submit etc.)
• Print event & many more

*/

/*

syntax:

node.event = () => {
//handle here
}

Note:node is like any button or div or anything from dom
.event is like onclick and ondblclick or anything
ck, mouseover etc.)
*/
console.log("Events in JS");

let button= document.getElementById("myButton");

button.onclick= function() {
    alert("Button clicked");
}

//Alternatively, using addEventListener (preferred modern approach):

let button1 = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("Button clicked");
});

let button2= document.getElementById("myButton2");

button2.ondblclick= function() {
    alert("Button clicked 2 times");
}

// NOTE: IF EVENT LIOSTENER IS USED ON HTML AS INLINE JS AND ALSO IN EXTERNAL JS FILE THEN THE INLINE JS WILL OVERRIDE THE EXTERNAL JS FILE

// NOTE: ALSO IF WE USE SAME EVENT LISTENER TWICE ON SAME ELEMENT THEN THE LAST ONE WILL OVERRIDE THE PREVIOUS ONE

/*
Event Object
It is a special object that has details about the event.
All event handlers have access to the Event Object's properties and methods.

node.event = (e){
//handle here
}
IMP EVENT OBJECT=> e.target, e.type, e.clientX, e.clientY 14

*/


// # EVENT LISTENERS

// NOTE: We dont use inline js because it makes the code heavy and leangthy and on external js we can define only one event for any element.so for that reason event listeners are used they always listens to any event and the moment it happens it executes the code written in the callback function.


/*

node.addEventListener (event, callback)(callback is also called event handler) 
node.removeEventListener (event, callback)
Note: the callback reference should be same to remove

*/

let button3 = document.getElementById("myButton3");

button3.addEventListener("click",()=>{
    alert("Button 3 clicked");
})
button3.addEventListener("click",()=>{
    console.log("Button 3 clicked");
})