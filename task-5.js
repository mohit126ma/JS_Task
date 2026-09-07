// Q1: What is the difference between var, let, and const?
// var — function-scoped, can be redeclared and reassigned.
// let — block-scoped, cannot be redeclared in the same scope, but can be reassigned.
// const — block-scoped, cannot be redeclared or reassigned after initialization.

// var a = 55;
// var a = 65; // allowed

// let b = 6;
// b = 99; // allowed

// const c = 32;
// // c = 20; // Error

// Q2: Can you re-declare a variable with var? What about let and const?
// var:
// var x = 10;
// var x = 20; // allowed
// Yes, var allows redeclaration in the same scope.

// let and const
// let and const do not allow redeclaration in the same scope.

// let y = 10;
// // let y = 20; // Error
// const z = 10;
// // const z = 20; // Error

//  Q3: What is the output of this code?
//  var x = 5;
// let y = 10;
// const z = 15;
// x = 20;
// y = 25;
// z = 30;
// console.log(x, y, z);
// -->  Output: No console.log output.because a const variable cannot be reassigned.

// Q4: What is the difference between declaring and initializing a variable?
// Declaration means creating a variable without giving it a value.
// let name; // Declaration

// Initialization means assigning a value to a variable at the time of declaration or later.
// let name = "Mohit"; 

//  Q5: What will be the output?
//  let a;
// console.log(a);
// --->
// Output:undefined
// A declared but uninitialized variable has the value undefined.


// Q6: What is hoisting? Give an example.

// Hoisting is JavaScript's behavior of processing declarations before executing the code in their scope.
// console.log(x);
// var x = 256;
// Output:undefined

// var x;
// console.log(x);
// x = 10;
// let and const are also hoisted internally, but they remain in the Temporal Dead Zone (TDZ) 
// until their declaration is reached, so accessing them beforehand causes an error.

// Q7: What is the difference between null and undefined?
// -->undefined means a variable has been declared but hasn't been assigned a value.
// let a;
// console.log(a); // undefined

// -->null is an intentional assignment meaning "no value."
// let b = null;
// console.log(b); // null


// Q8: What will be the output?
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof []);
// console.log(typeof {});
// -->
// object
// undefined
// object
// object

// Q9: What is the difference between == and ===?
// == checks equality after possible type conversion.
// 5 == "5"   // true

// === checks both value and type, without implicit type conversion.
// 5 === "5"  // false

// Q10: What is the difference between ++i and i++?
// Both increase i by 1, but they differ in when the value is returned.

// ++i — pre-increment
// Increments first, then returns the value.
// let i = 5;
// console.log(++i);//6

// i++ — post-increment
// Returns the current value first, then increments.
// let i = 5;
// console.log(i++);//5
// console.log(i);//6


//  Q11: What will be the output?
//  let x = 10;
// let y = "5";
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// -->
// 105
// 5
// 50
// 2

// Q12: What are logical operators?

// AND &&
// Returns true when both conditions are true.

// true && true // true
// true && false // false

// OR ||
// Returns true when at least one condition is true.

// true || false // true
// false || false // false

// NOT !
// Reverses a Boolean value.

// !true  // false
// !false // true

// Q13: What will be the output?
// console.log(5 > 3 && 10 > 5);
// console.log(5 > 10 || 10 > 5);
// console.log(!(5 > 3));

// --->
// true
// true
// false

// Q14: What is the ternary operator?
// The ternary operator is a short form of if-else.
// syntax: condition ? expressionIfTrue : expressionIfFalse

// let age = 20;
// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);// Output: Adult

//  Q15: What is the difference between implicit and explicit type casting?
//  Implicit conversion
// JavaScript automatically converts one type to another.
// console.log("5" * 2);// Output: 10 (string "5" is converted to number)
 
// Explicit conversion
// The programmer manually converts the type.
// Number("5"); // 5
// String(100); // "100"
// Boolean(1);  // true

// Q16: What will be the output?
// console.log(Number("123"));
// console.log(Number("hello"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Boolean(0));
// console.log(Boolean("hello"));
// --->
// 123
// NaN
// 1
// 0
// false
// true


// Q17: What is NaN?
// -->NaN means Not-a-Number.It represents an invalid numeric result.
// let result = Number("hello");
// console.log(result);// Output: NaN

// Q18: What is the difference between if-else and switch?

// if-else
// Useful for conditions involving comparisons or complex expressions.
// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }


// switch
// Useful when comparing one value against several specific cases.
// let day = 2;
// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Invalid");
// }


// Q19: What will be the output?
// let age = 20;
// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
// Output:Adult

// Q20: What is nested if?
// A nested if is an if statement placed inside another if statement.

// let age = 20;
// let hasID = true;
// if (age >= 18) {
//     if (hasID) {
//         console.log("Entry allowed");
//     }
// }
// Output:Entry allowed


// Q21: Program to check even or odd using ternary
// let num = 7;
// let result = num % 2 === 0 ? "Even" : "Odd";
// console.log(result);
// Output:Odd

// Q22: What is the difference between while and do-while?
// while
// Checks the condition before executing the loop.
// let i = 10;
// while (i < 5) {
//     console.log(i);
// }


// do-while
// Executes the code at least once, then checks the condition.
// let i = 10;
// do {
//     console.log(i);// Output:10
// } while (i < 5);


// Q23: What will be the output?
// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Output:
// 1
// 2
// 3
// 4
// 5

// Q24: What is the difference between for-of and for-in?
// for-of iterates over the values of an iterable, such as an array.
// for-in iterates over the keys/indexes of an object or array.

// let arr = ["a", "b", "c"];
// for (let value of arr) {
//     console.log(value);
// }
// output:a b c


// Using for-in:
// for (let index in arr) {
//     console.log(index);
// }
// Output:
// 0
// 1
// 2

// Q25: Write a program to find the sum of numbers from 1 to 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);
// Output:5050

// Q26: What is the difference between slice and splice?

// slice()
// Does not modify the original array.
// Used to extract a portion of an array.
// let arr = [1, 2, 3, 4];
// let result = arr.slice(1, 3);
// console.log(result); // [2, 3]
// console.log(arr);    // [1, 2, 3, 4]

// splice()
// Modifies the original array.
// Can add, remove, or replace elements.
// let arr = [1, 2, 3, 4];
// arr.splice(1, 2);
// console.log(arr);// [1, 4]

// Q27: What will be the output?
// let arr = [1, 2, 3];
// arr.push(4);
// arr.pop();
// arr.unshift(0);
// arr.shift();
// console.log(arr);

// Step by step:
// [1, 2, 3]
// [1, 2, 3, 4]   // push
// [1, 2, 3]      // pop
// [0, 1, 2, 3]   // unshift
// [1, 2, 3]      // shift
// output: [1, 2, 3]


// Q28: What is the difference between function declaration and function expression?
// Function declaration
// function add(a, b) {
//     return a + b;
// }   
// console.log(add(2, 3));

// function add(a, b) {
//     return a + b;
// }

// Function expression
// The function is assigned to a variable.
// const add = function(a, b) {
//     return a + b;
// };

// Q29: What is an arrow function?
// An arrow function is a shorter syntax for writing functions.
// const add = (a, b) => {
//     return a + b;
// }
// For a single expression, it can be shortened further:
// const add = (a, b) => a + b;


// Q30: What will be the output?
// function greet() {
//     return "Hello";
// }
// let message = greet();
// console.log(message);
// Output:Hello