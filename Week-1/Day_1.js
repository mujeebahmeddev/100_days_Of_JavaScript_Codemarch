// // variables

// // Declaring the variable using the let keyword.
// var userId = 1234;

// // Display the userName.
// console.log(userId); // 1234

// userId = 3456;

// console.log(userId);  // 3456





// // Display the userName before initializing it will throw an error. 
// /*
// ReferenceError: Cannot access 'userName' before initialization
// */
// // console.log(userName);

// // Declaring the variable using the let keyword.
// let userName = "Mujeeb Ahmed";

//  // let userName = "Mujeeb"; // we cannnot redeclare the variable using the Let keyword we will get an Error which is SyntaxError: Identifier 'userName' has already been declared.

// // Display the userName.
// console.log(userName);

// // block scope {}
// {
//     let num = 15;
//     console.log(`this is variable which is having block scope :`,num);
// }
// // Cannot access the variable because it is out of scope and it is block scope.
// // console.log(num); // ReferenceError: num is not defined





// // constants
// // Declaring the variable using the const keyword.
// const accountNumber = 9876543232;

// // Reassigning the value of the accountNumber.
// // accountNumber = 6789;  

// // will throw an error since we cannot change the value of the constant variable.
// console.log(accountNumber); 






// 👉 Notes

// 👉 Scope :  Scope determines the accessibility of variables, objects, and functions from different parts of the code.

// 👉 { block scope } --> whatever comes within this curly braces is termed as block scope
// 👉 global scope { block scope } --> whatever comes outside this curly braces is termed as global scope


// 👉 var keyword

// Example
// 👉 Variables Declared by using var keyword cannot be Redeclared

// // Declaring a variable num1 using var keyword.
// var num1 = 33;

// // Redeclaring a variable num1 using var keyword.
// var num1 = 23;

// // will not throw an error : SyntaxError: Identifier 'num1' has already been declared
// console.log(num1);// 23


// 👉 Variables defined with var Keyword can be reassigned.

// var number_0 = 13;

// number_0 = 94;

// console.log(number_0); // outputs : 94


// 👉 Variables defined with var must be Declared before use.
// // this will not throw and error : ReferenceError: ReferenceError: Cannot access 'num_2' before initialization
// console.log(num_2); // undefined

// var num_2 = 12;



// // 👉 Variables defined with var have global Scope.

// {
//     var num_3 = 100;
//     console.log("Block Scope : ", num_3); // Outputs: 100
// }
// console.log("Gloabal Scope : ",num_3); // Outputs: 100




// 👉 let Keyword
// Variables Declared by using let keyword cannot be Redeclared

// Example
// 👉 Variables defined with let cannot be Redeclared.
// // Declaring a variable num1 using let keyword.
// let num1 = 33;

// // Redeclaring a variable num1 using let keyword.
// let num1 = 23;

// // SyntaxError: Identifier 'num1' has already been declared
// console.log(num1);


// 👉 Variables defined with let Keyword can be reassigned.

// let number_0 = 13;

// number_0 = 34;

// console.log(number_0); // outputs : 34


// 👉 Variables defined with let must be Declared before use.

// ReferenceError: Cannot access 'num2' before initialization
// console.log(num2);

// let num2 = 22;



// 👉 Variables defined with let have Block Scope.

// {
//     let num3 = 44;
//     console.log(num3); // Outputs: 44
// }
// console.log(num3); // ReferenceError: num3 is not defined



// Constants

// 👉 Variables defined with let cannot be Redeclared.

// // Declaring a variable num1 using const keyword.
// const number_1 = 23;

// // Redeclaring a variable num1 using const keyword.
// const number_1 = 23;

// // SyntaxError: Identifier 'number_1' has already been declared
// console.log(number_1);

// 👉 Variables defined with const cannot be reassigned.

// const number_0 = 23;

// number_0 = 54;

// console.log(number_0); //TypeError: Assignment to constant variable.



// 👉 Variables defined with const must be Declared before use.

// // ReferenceError: Cannot access 'number_1' before initialization
// console.log(number_1);

// const number_1 = 22; 


// 👉 Variables defined with const cannot be Reassigned. Also, you cannot declare a constant without initializing it.

// const num;

// num = 90;

// console.log(num); // SyntaxError: Missing initializer in const declaration

// 👉 Variables defined with const have Block Scope.
// {} --> is a Block. 
// {
//     const number_2 = 46;
//     console.log(number_2); // Outputs: 46
// }
// console.log(number_2); // ReferenceError: number_2 is not defined



// 👉 Best Practices

// There are some rule to create a variable

// // 👉 1. The variable's name cannot begin with a number.

// var 123;
// console.log(123); // SyntaxError: Unexpected number

// // 👉 2. The name of the variables can start with letter , underscore  ( _  )  or dollar sign ( $ ) .

// let name = "Mujeeb";
// console.log(name); //. Output : Mujeeb

// let _Name = "Codemarch";
// console.log(_Name); //. Output : Codemarch

// let _123 = 5678 ;
// console.log(_123); //. Output : 5678

// // 👉 3. variable name is case-sensitive name, Name are different

// let name = "mujeeb";
// console.log(Name); // ReferenceError: Name is not defined


// // 👉 4. Variable names cannot contain spaces.

// let My name is = "Mujeeb";
// console.log(My name is); // SyntaxError: Unexpected identifier

