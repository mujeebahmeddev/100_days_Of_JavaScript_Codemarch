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




