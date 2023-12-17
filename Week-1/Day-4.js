// Conditional Statements 

/**
Conditional statements in JavaScript allow you to execute specific blocks of code based on conditions. 

If the condition meets then a particular block of action will be executed otherwise it will execute another block of action that satisfies that particular condition.

There are several methods that can be used to perform Conditional Statements in JavaScript.

- if Statement
- if-else Statement
- else if Statement
- switch Statement
- break Statement
- Continue Statement
- Ternary Operator
 */

// if statement : The `if` statement is one of the fundamental building blocks in JavaScript. 

// It allows you to control the flow of your program based on specific conditions.

// let age = 20;

// if (age >= 18) {
//   console.log("You are eligible to vote!");
// }

// The condition age >= 18 is evaluated. If it's true, which means the user's age is 18 or older, the code inside the {} block will be executed, printing "You are eligible to vote!" to the console.



// if…else statement : Imagine you're making a decision. You ask yourself a question, like "Is it raining?" , Based on the answer (yes or no), you choose different actions.Similarly, an `if...else` statement in JavaScript asks a question (condition) and executes different code blocks based on the answer (true or false).

// let temperature = 15;

// if (temperature > 20) {
//   console.log("It's a warm day!");
// } else {
//   console.log("It's a cool day.");
// }

// we check if the temperature is greater than 20 degrees. If it is, we log "It's a warm day!". Otherwise, we log "It's a cool day.".



// `if...else if...else` statement : The `else if` statement is a powerful tool in your JavaScript belt, allowing you to handle multiple scenarios based on various conditions.

// let score = 85;

// if (score >= 90) {
//   console.log("A Grade");
// } else if (score >= 80) {
//   console.log("B Grade");
// } else if (score >= 70) {
//   console.log("C Grade");
// } else if (score >= 60) {
//   console.log("D Grade");
// } else {
//   console.log("F Grade");
// }


// Nested `if...else` statements : Nested `if...else` statements are powerful tools in JavaScript that allow you to control the flow of your code based on multiple conditions.

// let age = 18;
// let isCitizen = true;

// if (age >= 18) {
//   console.log("You are old enough to vote.");

//   if (isCitizen) {
//     console.log("You are also a citizen, so you can vote!");
//   } else {
//     console.log("However, you are not a citizen, so you cannot vote.");
//   }

// } else {
//   console.log("You are not old enough to vote.");
// }



// switch statement : The switch statement is a powerful tool in JavaScript that allows you to execute different blocks of code based on a given expression's value. It's a cleaner and more readable alternative to nested `if-else` statements, especially when dealing with multiple conditions.

// Example of Traffic lights

// let color = "green";
// switch (color) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "yellow":
//     console.log("Caution");
//     break;
//   case "green":
//     console.log("Go");
//     break;
//   default:
//     console.log("Invalid color");
// }



