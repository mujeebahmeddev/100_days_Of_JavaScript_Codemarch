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




/*
Comparison operators

- Comparison operators are used to compare two values and determine their equality or inequality. 
- They are essential building blocks for conditional statements, loops, and other decision-making structures in JavaScript.

Different types of Operators are :

Equal to : =
Not equal to : !=
Strict equal to: ===
Strict not equal to : ==
Greater than: >
Greater than equal to : >=
Less than: <
Lesser than equal to : <=
*/


// 1. Equal to (==) Operator : The equal to operator (`==`) checks if the operands are equal and returns `true` if they are, regardless of their data types.


// const a = 5, b = 2, c = 'hello';

// console.log(a == 5);    // true
// console.log(b == '2');  // true
// console.log(c == 'Hello');  // false


// 2. ## Not Equal to (!=) Operator : The not equal to operator (`!=`) checks if the operands are not equal and returns `true` if they are not.


// const a = 3, b = 'hello';

// console.log(a != 2);        // true
// console.log(b != 'Hello');  // true


// 3. ## Strict Equal to (===) Operator : The strict equal to operator (`===`) not only compares values but also checks if they are of the same type.

// const a = 2;

// console.log(a === 2);   // true
// console.log(a === '2'); // false

// NOTE: The === operator evaluates to true only if the values and their data types are identical.


// 4. Strict Not Equal to (!==) Operator: The strict not equal to operator (`!==`) checks if the operands are not equal or if they are of different types.

// const a = 2, b = 'hello';

// console.log(a !== 2);       // false
// console.log(a !== '2');     // true
// console.log(b !== 'Hello'); // true

// The !== operator evaluates to true if the values are not equal or if their data types differ.


// 5. Greater Than (>) Operator : The greater than operator (`>`) returns `true` if the left operand is greater than the right operand.

// const a = 3;

// console.log(a > 2);  // true

// 6. Greater Than or Equal to (>=) Operator:

// const a = 3;
// const b = 3;

// // Check if a is greater than or equal to b
// const result = a >= b;

// console.log(result); // Output: true


// 7. Less Than (<) Operator: The less than operator (`<`) returns `true` if the left operand is less than the right operand.

// const a = 3, b = 2;

// console.log(a < 2);  // false
// console.log(b < 3);  // true

// 8. Less Than or Equal to (<=) Operator

// const x = 2;
// const y = 3;

// // Check if x is less than or equal to y
// const result = x <= y;

// console.log(result); // Output: true

// // 9. Nullish Coalescing (??) Operator

// let age = null;

// // Use nullish coalescing to assign a default value if age is null or undefined
// const defaultAge = age ?? 24;

// console.log(defaultAge); // Output: 24

/**
Assignment Operators
- Assignment operators assign values to variables. 
- They consist of a special symbol (`=`) and an operand (the value being assigned). 
- In essence, they tell JavaScript to store a specific value in a designated variable for later use.


Different types of Assignment Operators are :

- Assignment operator
- Addition assignment
- Subtraction Assignment
- Multiplication Assignment
- Division Assignment
- Remainder Assignment
- Exponentiation Assignment
 */

// 1. Simple Assignment Operator (`=`) : This is the most basic assignment operator. It assigns the value on the right side of the operator to the variable on the left side.

// let x = 10; // assigns 10 to variable x
// let y = "Hello"; // assigns "Hello" to variable y

// console.log(x);// 10
// console.log(y);// Hello


// 2. **Compound Assignment Operators : These operators combine assignment with an arithmetic or bitwise operation. They apply the specified operation to the variable's current value before assigning the new value.

// a) Addition Assignment Operator (`+=`): Adds the right operand to the variable's current value and assigns the result.

// let x = 5;
// x += 3; // x becomes 8 (5 + 3)
// console.log(x);// 8

// b) Subtraction Assignment Operator (`-=`): Subtracts the right operand from the variable's current value and assigns the result.

// let y = 10;
// y -= 2; // y becomes 8 (10 - 2)

// console.log(y); // 8

// c) Multiplication Assignment Operator (`*=`): Multiplies the right operand by the variable's current value and assigns the result.

// let z = 2;
// z *= 5; // z becomes 10 (2 * 5)

// console.log(z);// 10

// d) Division Assignment Operator (`/=`) : Divides the variable's current value by the right operand and assigns the result.

// let w = 100;
// w /= 5; // w becomes 20 (100 / 5)

// console.log(w);// 20


// e) Remainder Assignment Operator (`%=`) : Assigns the remainder of dividing the variable's current value by the right operand.

// let a = 11;
// a %= 3; // a becomes 2 (remainder of 11 / 3)

// console.log(a);// 2

// f) Exponentiation Assignment Operator (**=) : Raises the variable's current value to the power of the right operand and assigns the result.

// let b = 2;
// b **= 3; // b becomes 8 (2 ^ 3)

// console.log(b); // 8


/**
Logical operators

Logical operators are powerful tools in JavaScript that allow you to combine multiple conditions and evaluate them together. 

They return a boolean value (`true` or `false`) based on the operands provided.


Different types of Logical operators are :
- Logical AND (&&)
- Logical OR (||)
- Logical NOT (!)

NOTE : we will learn this after completing the conditonals Statements.
 */

/**
 Ternary Operator

 NOTE : We will learn this ternary operator after completing If Conditionals.
 */



/* 
BitWise Operator (After teaching Loops)

Different Types of Bitwise Operators are :

<< : Bitwise Left
>> : Bitwise right
~ : Bitwise Inversion
& : Bitwise And
| : Bitwise Or
^ :Bitwise Exclusive Or

NOTE : We will learn this operators after completing the loops
*/




