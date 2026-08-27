// 1) What is a variable in JavaScript?
// ->A variable is a named container used to store data values.

// 2) What are the three keywords used to create variables?
// -> var, let, and const

// 3)Write the syntax to create a variable using var.
// var age = 25;

// 4)Write the syntax to create a variable using let.
// let age = 25;

// 5)Write the syntax to create a variable using const.
// const age = 25;

// 6)What is declaration?
// ->Declaration is the process of defining a variable and its name in the code, without assigning it a value. It tells the JavaScript engine that a variable exists and reserves space for it in memory.


// 7) What is initialization?
// ->Initialization is the process of assigning a value to a variable at the time of its declaration. It sets the initial value of the variable in memory.

// 8)What is reassignment?
// ->Reassignment is the process of changing the value of an already declared variable. It allows you to update the value stored in the variable after it has been initialized.

// 9)What is redeclaration?
// ->Redeclaration is the process of declaring a variable again with the same name in the same scope. In JavaScript, using var allows redeclaration, while let and const do not allow it in the same scope.

// 10)Which keyword allows redeclaration?
// ->The keyword "var" allows redeclaration of variables in the same scope.

// 11)Which keyword allows reassignment?
// ->The keywords "var" and "let" allow reassignment of variables, while "const" does not allow reassignment.

// 12)Which keyword requires initialization when declared?
// ->The keyword "const" requires initialization when declared. A variable declared with const must be assigned a value at the time of declaration and cannot be left uninitialized.

// 13)Identify the declaration and initialization:let age = 25;
// ->Declaration: let age;
// ->Initialization: age = 25;

// 14)What is the value of a?
// var a = 100;
// console.log(a);
// ->The value of a is 100. The console.log(a) statement will output 100 to the console.

// 15)Change the value of this variable to 200:
// let number = 100;
// ->To change the value of the variable "number" to 200, you can use reassignment as follows:
// number = 200;

// 16)What will be the output?
// var a = 10;
// console.log(a);
// ->The output will be 10. The console.log(a) statement will print the value of the variable "a" to the console, which is 10.

// 17)What will be the output?
// var a = 10;
// a = 20;
// console.log(a);
// ->The output will be 20. The variable "a" is first assigned the value 10, then it is reassigned to 20. The console.log(a) statement will print the updated value of "a", which is 20.

// 18)What will be the output?
// var a = 10;
// var a = 30;
// console.log(a);
// ->The output will be 30. The variable "a" is first assigned the value 10, then it is redeclared and reassigned to 30. The console.log(a) statement will print the final value of "a", which is 30.

// 19)Write a var variable named name with the value "John".
// var name = "John";

// 20)Create a var variable named price with the value 500.
// var price = 500;
// console.log(price);

// 21)Reassign price from 500 to 1000.
// -To reassign the variable "price" from 500 to 1000, you can use the following code:
// price = 1000;
// console.log(price);

// 22)What will be the output?
// var x = 50;
// x = 100;
// console.log(x);
// ->The output will be 100. The variable "x" is first assigned the value 50, then it is reassigned to 100. The console.log(x) statement will print the updated value of "x", which is 100.

// 23)Can a var variable be reassigned?
// ->Yes, a var variable can be reassigned. You can change the value of a var variable after it has been declared and initialized.

// 24)Can a var variable be redeclared?
// ->Yes, a var variable can be redeclared in the same scope. You can declare a var variable with the same name multiple times without causing an error.   

// 25)Write an example of var redeclaration.
// -Here is an example of var redeclaration:
// var city = "New York";
// var city = "Los Angeles";  
// console.log(city);  

// 26)Create a let variable named age with the value 25.
// let age = 25;
// console.log(age);

// 27)What will be the output?
// let age = 20;
// age = 30;
// console.log(age);
// ->The output will be 30. The variable "age" is first assigned the value 20, then it is reassigned to 30. The console.log(age) statement will print the updated value of "age", which is 30.

// 28)Can a let variable be reassigned?
// ->Yes, a let variable can be reassigned. You can change the value of a let variable after it has been declared and initialized.

// 29)Can a let variable be redeclared?
// ->No, a let variable cannot be redeclared in the same scope. If you try to declare a let variable with the same name in the same scope, it will result in a syntax error.

// 30)Find the error:
// let name = "John";
// let name = "David";
// ->The error is that the variable "name" is being redeclared using the let keyword in the same scope. This will result in a syntax error because let does not allow redeclaration of variables in the same scope. To fix this, you can either use a different variable name or remove the second declaration.

// 31)Create a let variable called city and assign "Chennai".
// let city = "Chennai";
// console.log(city);

// 32)Change the value of city to "Salem".
// ->To change the value of the variable "city" to "Salem", you can use reassignment as follows:
// city = "Salem";
// console.log(city);

// 33)What will be the output?
// let x = 10;
// x = 50;
// console.log(x);
// ->The output will be 50. The variable "x" is first assigned the value 10, then it is reassigned to 50. The console.log(x) statement will print the updated value of "x", which is 50.

// 34)Write a let variable called salary with the value 25000.
// let salary = 25000;
// console.log(salary);

// 35)Reassign salary to 30000.
// ->To reassign the variable "salary" to 30000, you can use the following code:
// salary = 30000;
// console.log(salary);

// 36)Create a const variable called pi with the value 3.14.
// const pi = 3.14;
// console.log(pi);

// 37)Can a const variable be reassigned?
// ->No, a const variable cannot be reassigned. Once a const variable is assigned a value, it cannot be changed or reassigned to a different value.

// 38)Can a const variable be redeclared?
// ->No, a const variable cannot be redeclared in the same scope. If you try to declare a const variable with the same name in the same scope, it will result in a syntax error.

// 39)What is wrong with this code?
// const age;
// age = 25;
// ->The error in this code is that the const variable "age" is declared without being initialized. In JavaScript, a const variable must be assigned a value at the time of declaration. To fix this, you should initialize the variable when declaring it, like this:
// const age = 25; 

// 40)What happens here?
// const price = 500;
// price = 1000;
// ->The error in this code is that the const variable "price" is being reassigned to a new value (1000) after it has already been initialized with the value 500. In JavaScript, const variables cannot be reassigned after their initial assignment. This will result in a TypeError.

// 41)Create a const variable called country with the value "India".
// const country = "India";

// 42)What will be the output?
// const x = 100;
// console.log(x);
// ->The output will be 100. The console.log(x) statement will print the value of the const variable "x", which is 100.

// 43)Which keyword should you use if the value should not be reassigned?
// ->You should use the "const" keyword if the value should not be reassigned. A const variable is read-only and cannot be changed after it has been initialized.

// 44)What is the difference between let and const?
// ->The main difference between let and const is that let allows reassignment of the variable's value, while const does not. A variable declared with let can be updated to a new value, whereas a variable declared with const must be initialized at the time of declaration and cannot be changed afterward. Additionally, both let and const have block scope, but const is used for values that should remain constant throughout the program.'  

// 45)What is the difference between var and const?
// ->The main difference between var and const is that var allows both reassignment and redeclaration of variables, while const does not allow either. A variable declared with var can be updated to a new value and can be redeclared in the same scope, whereas a variable declared with const must be initialized at the time of declaration and cannot be changed or redeclared afterward. Additionally, var has function scope, while const has block scope.

// 46)Write JavaScript code to print Hello World using console.log().
// -Here is the JavaScript code to print "Hello World" using console.log():
// console.log("Hello World");

// 47)Write JavaScript code to print the number 500 using console.log().
// -Here is the JavaScript code to print the number 500 using console.log():
// console.log(500);

// 48)What is the purpose of console.warn()?
// ->The purpose of console.warn() is to display warning messages in the console. It is used to indicate potential issues or important information that developers should be aware of while debugging their code. The messages displayed using console.warn() are typically highlighted in yellow to differentiate them from regular log messages.

// 49)What is the purpose of console.error()?
// ->The purpose of console.error() is to display error messages in the console. It is used to indicate that an error has occurred in the code, which may prevent the program from functioning correctly. The messages displayed using console.error() are typically highlighted in red to differentiate them from regular log messages and warnings, making it easier for developers to identify and address issues during debugging. 

// 50)What is the purpose of each?
// alert()
// prompt()
// confirm()
// document.writeln()
// console.log() 
// ->  Displays a dialog box that prompts the user for input and returns the input value as a string.
//     alert("Hello!");
// ->  Displays a dialog box that asks the user to confirm an action, returning true if the user clicks "OK" and false if the user clicks "Cancel".
//     let name = prompt("What is your name?");
// ->  Writes text or HTML content directly to the document, typically used for displaying output on a web page.
//     let result = confirm("Are you sure?");
// ->  Outputs messages to the browser's  console, useful for debugging and logging information during development'. 
//     console.log("Program started");


// //--------------------------



// 1) Create variables for student name, age, and mark and print all three
// ->
// let studentName = "Rahul";
// let age = 20;
// let mark = 85;

// console.log("Name:", studentName);
// console.log("Age:", age);
// console.log("Mark:", mark);


// 2)Ask the user's name using prompt() and display it using alert()'
// ->
// let name = prompt("What is your name?");
// alert("Hello, " + name + "!");


// 3)Ask the user's age using prompt() and print it using console.log()'.
// ->
// let age = prompt("What is your age?");
// console.log("Your age is:", age);

// 4)Ask the user a question using confirm()
// ->
// let answer = confirm("Do you like JavaScript?");

// console.log("User's answer:", answer);

// 5)Ask the user's name and display it on the webpage using document.writeln()'.
// ->
// let name = prompt("What is your name?");

// document.writeln("Welcome, " + name + "!");




