// DataTypes
/* A data type in JavaScript is like a box that holds information. 

Different boxes can hold different kinds of information, like numbers, words, or even instructions. 

Different types of DataTypes in JavaScript :**

- Primitive data types
- Non-primitive data types

- Primitive data types

Primitive data types are the basic building blocks of data in JavaScript. 

They are immutable, meaning their value cannot be changed after they are created. They have a **fixed size** in memory and are stored directly on the stack.

*/

// 1. Numbers : represents numeric values, like integers and decimals
// Define a variable of type Number
// let myAge = 24;

// // Print the variable
// console.log(myAge); // 24

// 2. String : Represents textual data, enclosed in quotes(Single or double quotes)

// // Define a variable of type String
// const message = "Hello Folks!";
// const SingleQuote = 'Hello Folks!';

// // Print the variable
// console.log(message); // Output: Hello Folks!
// console.log(SingleQuote); // Output: Hello Folks!


// 3. BigInt : Represents very large integers that cannot be represented by the standard number type.

// // Define a BigInt
// const bigNumber = 12345678901234567890n;

// // Print the variable
// console.log(bigNumber); // Output:12345678901234567890n


// 4. Boolean : Represents true or false values.

// // Define Boolean variables
// const isLoggedIn = true;
// const isNightTime = false;

// // Print the variable
// console.log(isLoggedIn); // Output: true
// console.log(isNightTime);// Output: false


// 5. Undefined : Indicates that a variable has been declared but not yet assigned a value.

// // Declare a variable without initialization
// let name;

// // Print the variable
// console.log(typeof name); // Output: "undefined"


// 6. null : Signifies the intentional absence of any object value.

// Assign null to a variable
// let emptyObject = null;

// // Print the variable
// console.log(typeof emptyObject); // output : object


// 7. Symbol : A unique and immutable primitive introduced in ES6 for creating private identifiers for object properties.

// // Create a symbol
// const symbol1 = Symbol();
// const symbol2 = Symbol('description');

// // Print the variable
// console.log(symbol1); // Symbol()
// console.log(symbol2); //Symbol(description)


/*
Non-primitive data types
The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. 

They are mutable, meaning their value can be changed after they are created. 

They have a dynamic size in memory and are stored on the heap. 

Examples of non-primitive data types include:
Objects, Arrays etc
*/


// NOTE: We will learn about the Non-Primitive Datatype in the further Topics


// Operators in JS

// JavaScript **operators** operate the operands, these are symbols that are used to manipulate a certain value or operand. 

// Operators are used to performing specific mathematical and logical computations on operands.

// There are different types of JavaScript operators:

// - Arithmetic Operators
// - Assignment Operators
// - Comparison Operators
// - String Operators
// - Logical Operators
// - Bitwise Operators
// - Ternary Operators

// - Arithmetic Operators : JavaScript arithmetic operators perform mathematical calculations on numbers. 

/*
1. Basic Operators:
    - `+`: Addition
    - `-`: Subtraction
    - `*`: Multiplication
    - `/`: Division
    - `%`: Modulus (remainder)
2. Unary Operators:
    - `++`: Increment (increases by 1)
    - `-`: Decrement (decreases by 1)
3. Exponentiation Operator:
    - `*`: Exponentiation (introduced in ES2016)
*/

// Examples


// // 1. +: Addition : The addition operator (+) adds numbers.

// let num1 = 10;
// let num2 = 5;

// // Addition
// let sum = num1 + num2; 
// console.log(sum); // Output will be 15



// 2. - : Subtraction : The subtraction operator (-) subtracts numbers.
// let num1 = 10;
// let num2 = 5;


// // Subtraction
// let difference = num1 - num2;
// console.log(difference); // 5


// 3. *: Multiplication : The multiplication operator (*) multiplies numbers.

// let num1 = 10;
// let num2 = 5;

// // // Multiplication
// let product = num1 * num2; 
// console.log(product);// 50

// 4. /: Division : The division operator (/) divides numbers.
// let num1 = 10;
// let num2 = 5;

// // Division
// let quotient = num1/ num2; 
// console.log(quotient);// 2


// 5. %: Modulus (remainder) : The modulus operator (%) returns the division remainder.

// let num1 = 10;
// let num2 = 5;

// // Modulus
// let remainder = num1 % num2;
// console.log(remainder); // 0

// 6. ++: Increment (increases by 1)  : The increment operator (++) increments numbers.

// let num1 = 1;

// // Increment
// num1++
// console.log(num1);// x becomes 2

// ++num1
// console.log(num1);// x becomes 3

// let num1 = 10;


// // Decrement
// num1--; // y becomes 9
// console.log(num1);
// --num1; // y becomes 8
// console.log(num1);



// **: Exponentiation (introduced in ES2016) : The exponentiation operator (**) raises the first operand to the power of the second operand.


// let num1 = 5;
// let num2 = 2;

// // Exponentiation
// let power = num1 ** num2; 
// console.log(power);// 5*5 = 25


