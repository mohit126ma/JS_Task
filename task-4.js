// Loops
// Task 1 —Print numbers from 1 to 10 using a for loop.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Task 2 — Reverse Number

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

//  Task 3 — Even Numbers

//  for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

//  Task 4 — Odd Numbers

//  for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// Task 5 — Multiplication Table

// function printTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }
// } 
// printTable(5);

// While Loop
// Task 6 — Countdown

// let count = 10;
// while (count >= 1) {
//     console.log(count);
//     count--;
// }

// Task 7 — Sum of Numbers
// Using while, calculate:

// let i = 1;
// let sum = 0;
// while (i <= 10) {
//     sum += i;
//     i++;
// }
// console.log(sum);  

// Do While
// Task 8 — Print Numbers
// Use do...while to print:

// let n = 1;
// do {
//     console.log(n);
//     n++;
// } while (n <= 5);

// Task 9 — Do While Understanding
// What is the output?
// let a = 10;
// do {
//     console.log(a); 
//     a++;
// } while (a <= 5);

// Output: 10
// Explanation: A do...while loop is an exit-controlled loop. Unlike a regular while loop, the code block executes once unconditionally before the boolean
//  condition (a <= 5) is evaluated.Since a starts at 10, console.log(a) logs 10, a increments to 11, and then 11 <= 5 evaluates to false, terminating the loop.


// For of loop
// Task 10 — String Characters
// let name = "javascript";

// for (let char of name) {
//     console.log(char);
// }

// Task 11 — Array Values
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];
// Use for...of to print every fruit.

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// Task 12 — Student Names
// Create an array of 5 student names.
// Use for...of to print: 

// let students = ["Arun", "Priya", "Karthik", "Divya", "Suresh"];
// for (let student of students) {
//     console.log(`Student: ${student}`);
// }

// For in loop
// Task 13 — Employee Object
// Create:
// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };
// for (let key in employee) {
//     console.log(`${key} ${employee[key]}`);
// }

// Task 14 — Product Object

// let product = {
//     productName: "Wireless Headphones",
//     price: 2999,
//     brand: "Boat",
//     category: "Electronics",
//     stock: 50
// };

// for (let prop in product) {
//     console.log(`${prop}: ${product[prop]}`);
// }

//  Functions
// Task 15 — Simple Function
// Create a function called welcome().

// function welcome() {
//     console.log("Welcome to JavaScript");
// }

// welcome();
// welcome();
// welcome();

// Task 16 — Function With Parameter
// Create:
// function greet(name) {
//     console.log(`Hello ${name}`);
// }
// greet("Naveen");
// greet("Arun");
// greet("Priya");

// Task 17 — Multiple Parameters
// Create a function:
// student(name, age, department)
// Print all three values.
// Call it with 3 different students.
// Your syllabus specifically covers parameters and arguments.

// function student(name, age, department) {
//     console.log(`Name: ${name}, Age: ${age}, Department: ${department}`);
// }

// student("Arun", 21, "Computer Science");
// student("Priya", 22, "Information Technology");
// student("Rahul", 20, "Electronics");

//  Return
// Task 18 — Addition Function
// Create:
// function add(a, b) { 
//     return a + b;
// }

// let result = add(10, 20);
// console.log(result);
// output: 30


// Task 19 — Salary
// Create:

// function salary(amount) {
//     return amount;
// }
// let empSalary = salary(45000);
// console.log(empSalary);

// Task 20 — Bonus Calculator
// Create:
// function bonus(salary, bonusAmount)
// Return:
// salary + bonusAmount

// function bonus(salary, bonusAmount) {
//     return salary + bonusAmount;
// }

// let totalCompensation = bonus(50000, 5000);
// console.log(`Total = ${totalCompensation}`); 
//  Output: Total = 55000

//   Default Parameter
// Task 21
// Create:
// function employee(name, role = "Developer") {
//     console.log(`Name: ${name}, Role: ${role}`);
// }

// employee("Arun");              
// employee("Priya", "Designer");
// output: Name: Arun, Role: Developer
// Output: Name: Priya, Role: Designer

// Function Types
// Task 22 — Named Function
// Create a named function:
// function square(number) {
//     return number * number;
// }
// Call it with 5 different numbers.

// function square(number) {
//     return number * number;
// }

// console.log(square(2));   
// console.log(square(3)); 
// console.log(square(4));   
// console.log(square(5));   
// console.log(square(10));  

// output: 4, 9, 16, 25, 100

// Task 23 — Anonymous Function
// Create an anonymous function and store it in a variable.
// let calculate = function(a, b) {
//     return a + b;
// };
// Call it and print the result.

// let calculate = function(a, b) {
//     return a + b;
// };

// console.log(calculate(15, 25));
// output: 40


// Task 24 — Arrow Function
// Create an arrow function that accepts two numbers and returns their multiplication.
// let multiply = (a, b) => {
//     return a * b;
// };

// let multiply = (a, b) => {
//     return a * b;
// };
 
// console.log(multiply(4, 5)); 
// output: 20

// Scope
// Task 25 — Predict the Output
// function test() {
//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// test();
// output: 10, 20, 30, 10, ReferenceError: b is not defined, ReferenceError: c is not defined


//  Hoisting
// Task 26 — Predict
// console.log(a);
// var a = 10;
// What happens?
// Output: undefined
// Explanation: var declarations are hoisted and initialized to undefined during the compilation phase.

// Task 27
// Predict:
// console.log(b);
// let b = 20;
// output: ReferenceError: Cannot access 'b' before initialization

// Task 28
// Predict:
// console.log(c);
// const c = 30;
// output: ReferenceError: Cannot access 'c' before initialization

//  IIFE
// Task 29 — Self Invoking Function
// Create an IIFE that immediately prints:
// Welcome to JavaScript
// Then create another IIFE that accepts:
// product
// discount
// and prints the discount message.

// (function() {
//     console.log("Welcome to JavaScript");
// })();
 
// (function(product, discount) {
//     console.log(`Product: ${product}, Discount: ${discount}%`);
// })("Laptop", 15);

// Callback / Higher-Order Function
// Task 30
// Create:
// function welcome() {
//     console.log("Welcome");
// }
// function execute(callback) {
//     callback();
// }
// execute(welcome);

//  Higher-Order Function: execute (because it accepts another function as an argument).

// Callback Function: welcome (because it is passed into execute to be called inside it).


//  Generator Function
// Task 31 — Cashback
// Create a generator:
// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }

// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }

// let generatorObj = cashback();

// for (let value of generatorObj) {
//     console.log(value);
// }




//  FINAL MINI PROJECT

//  Task 32 — Employee Management Console


//  --->



//  // 1. Employee Data
// let employees = [
//     {
//         name: "Arun",
//         age: 25,
//         department: "IT",
//         role: "Developer",
//         salary: 45000
//     },
//     {
//         name: "Priya",
//         age: 24,
//         department: "HR",
//         role: "HR Executive",
//         salary: 35000
//     },
//     {
//         name: "Karthik",
//         age: 29,
//         department: "IT",
//         role: "Team Lead",
//         salary: 60000
//     }
// ];

// // 8. Generator for employee benefits
// function* employeeBenefits() {
//     yield "Medical Insurance";
//     yield "Transport";
//     yield "Food Allowance";
//     yield "Bonus";
// }

// // 5. Function with return to get employee salary
// function getSalary(emp) {
//     return emp.salary;
// }

// // 7. Arrow function for tax/deduction calculation
// const calculateTax = (salary) => salary * 0.1;

// // 3 & 4. Function with parameters to display employee info
// function displayEmployee(emp) {
//     console.log(`\n--- Details for ${emp.name} ---`);

//     // 2. for...in to print each employee's keys and values
//     for (let key in emp) {
//         console.log(`${key}: ${emp[key]}`);
//     }

//     let currentSalary = getSalary(emp);
//     let tax = calculateTax(currentSalary);
//     console.log(`Estimated Tax (10%): Rs. ${tax}`);

//     // 6. Condition: Check salary >= 40000
//     if (currentSalary >= 40000) {
//         console.log("Status: High-Earner Band (Salary >= 40,000)");
//     } else {
//         console.log("Status: Standard Band (Salary < 40,000)");
//     }
// }

// // 1. for...of loop to iterate over all employees
// console.log("=== EMPLOYEE MANAGEMENT SYSTEM ===");
// for (let emp of employees) {
//     displayEmployee(emp);
// }

// // Printing generator benefits
// console.log("\n=== STANDARD COMPANY BENEFITS ===");
// let benefits = employeeBenefits();
// for (let benefit of benefits) {
//     console.log(`• ${benefit}`);
// }




