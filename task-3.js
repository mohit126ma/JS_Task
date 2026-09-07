// // Task 1 — Variables
// var name = "Mohit Abbigeri";
// let age = 26;
// const city = "Pune";
// const college = "KLE Independent College";

// console.log("Name:", name);
// console.log("Age:", age);
// console.log("City:", city);
// console.log("College:", college);

// // Changing var value
// name = "Koustuh";
// console.log("Changed Name:", name);

// // Changing let value
// age = 26;
// console.log("Changed Age:", age);

// // Trying to change const
// // city = "Pune";
// // Error: Assignment to constant variable.

// // Redeclaring var
// var name = "Rahul";
// console.log("Redeclared var:", name);

// // Redeclaring let
// // let age = 30;
// // Error: Identifier 'age' has already been declared.

// // Redeclaring const
// // const city = "Coimbatore";
// // Error: Identifier 'city' has already been declared.



// // Task 2 — Printing Statements

// console.log("Hello JavaScript");

// alert("Welcome to JavaScript");

// confirm("Are you sure you want to continue?");

// let userName = prompt("Enter your name");
// console.log("User Name:", userName);

// document.writeln("JavaScript is easy to learn!");



// // Task 3 — User Details

// let name1 = prompt("Enter your name");
// let age1 = prompt("Enter your age");
// let city1 = prompt("Enter your city");
// let qualification = prompt("Enter your qualification");

// console.log("Name:", name1);
// console.log("Age:", age1);
// console.log("City:", city1);
// console.log("Qualification:", qualification);


// // Task 4 — Data Types

// let language = "JavaScript";
// let number = 100;
// let decimal = 99.5;
// let valueTrue = true;
// let valueFalse = false;
// let valueUndefined;
// let valueNull = null;

// console.log(language, typeof language);
// console.log(number, typeof number);
// console.log(decimal, typeof decimal);
// console.log(valueTrue, typeof valueTrue);
// console.log(valueFalse, typeof valueFalse);
// console.log(valueUndefined, typeof valueUndefined);
// console.log(valueNull, typeof valueNull);



// // Task 5 — Student Array

// let students = ["Ashutosh", "Gauri", "Sakashi", "Sanika", "Siya"];

// console.log("First student:", students[0]);
// console.log("Second student:", students[1]);
// console.log("Last student:", students[students.length - 1]);
// console.log("Total students:", students.length);


// // Task 6 — Employee Object

// let employee = {
//     name: "Mohit Abbigeri",
//     age: 26,
//     role: "Java Full Stack Developer",
//     skills: ["Java", "JavaScript", "React"],
//     isWorking: true,
//     qualification: ["B.Sc Computer Science", "Java Certification"]
// };

// console.log("Employee Name:", employee.name);
// console.log("Age:", employee.age);
// console.log("Role:", employee.role);
// console.log("First Skill:", employee.skills[0]);
// console.log("Last Qualification:",
//     employee.qualification[employee.qualification.length - 1]
// );
// console.log("Working Status:", employee.isWorking);



// // Task 7 — Calculator

// let a = 20;
// let b = 5;

// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.log("Exponentiation:", a ** b);


// // Task 8 — Shopping Bill

// let shirt = 999;
// let pant = 1499;
// let shoes = 1999;
// let bag = 799;

// let total = shirt + pant + shoes + bag;

// console.log("Total Price:", total);



// // TASK 9 — Increment & Decrement

// // A — Post Increment

// let a1 = 10;

// let b1 = a1++;

// console.log(a1); // Output: 11
// console.log(b1); // Output: 10


// // B — Pre Increment

// let c = 10;

// let d = ++c;

// console.log(c); // Output: 11
// console.log(d); // Output: 11


// // C — Post Decrement

// let e = 10;

// let f = e--;

// console.log(e); // Output: 9
// console.log(f); // Output: 10


// // D — Pre Decrement

// let g = 10;

// let h = --g;

// console.log(g); // Output: 9
// console.log(h); // Output: 9


// // Task 10

// let num = 10;
// num += 5;
// console.log("num += 5:", num);

// num = 10;
// num -= 3;
// console.log("num -= 3:", num);

// num = 10;
// num *= 2;
// console.log("num *= 2:", num);

// num = 10;
// num /= 4;
// console.log("num /= 4:", num);

// num = 10;
// num %= 3;
// console.log("num %= 3:", num);

// num = 10;
// num **= 2;
// console.log("num **= 2:", num);



// // TASK 11 — Comparison Operators

// console.log(10 > 5);       // Output: true
// console.log(10 < 5);       // Output: false
// console.log(10 >= 10);     // Output: true
// console.log(10 <= 9);      // Output: false

// console.log(5 == "5");     // Output: true
// console.log(5 === "5");    // Output: false

// console.log(10 != "10");   // Output: false
// console.log(10 !== "10");  // Output: true



// // TASK 12 — AND Operator

// console.log(true && true);     // Output: true
// console.log(true && false);    // Output: false
// console.log(false && true);    // Output: false
// console.log(false && false);   // Output: false



// // TASK 13 — OR Operator

// console.log(true || true);     // Output: true
// console.log(true || false);    // Output: true
// console.log(false || true);    // Output: true
// console.log(false || false);   // Output: false


// // TASK 14 — NOT Operator

// console.log(!true);             // Output: false
// console.log(!false);            // Output: true
// console.log(!(5 > 10));         // Output: true
// console.log(!(10 > 5));         // Output: false



// // TASK 15 — Combination Operators

// console.log(5 == "5" && !(5 === 5) || 6 > 7);
// // Output: false


// console.log(10 > 5 && 8 < 12 || 4 === "4");
// // Output: true


// console.log(7 === 7 && 10 != "10" || 5 >= 5);
// // Output: true


// console.log(15 < 10 || 20 > 15 && 5 == "5");
// // Output: true



// // Task 16 — Voting

// let age2 = 20;

// let result = age2 >= 18
//     ? "Eligible to vote"
//     : "Not eligible";

// console.log(result);


// // Task 17 — Password

// let password = true;

// let loginMessage = password
//     ? "Login successful"
//     : "Wrong password";

// console.log(loginMessage);


// //Task 18 — User Introduction


// let name4 = "Mohit Abbigeri";
// let age4 = 26;
// let city4 = "Pune";

// console.log(
//     "My name is " + name4 +
//     ". I am " + age4 +
//     " years old. I live in " + city4 + "."

// );
// console.log(
//     `My name is ${name4}. I am ${age4} years old. I live in ${city4}.`
// );



// // Task 19 — String Conversion

// let aa = String(100);
// let bb = String(true);
// let cc = String(undefined);
// let dd = String(null);
// let ee = String([1, 2]);

// console.log(aa, typeof aa);
// console.log(bb, typeof bb);
// console.log(cc, typeof cc);
// console.log(dd, typeof dd);
// console.log(ee, typeof ee);


// //Task 20 — Number Conversion

// console.log(Number());
// console.log(Number(""));
// console.log(Number("123"));
// console.log(Number("a1"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));



// // Task 21 — Boolean Conversion

// console.log(Boolean());
// console.log(Boolean(""));
// console.log(Boolean("hello"));
// console.log(Boolean(123));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));



// // Task 22 — Voting Eligibility

// let agee = Number(prompt("Enter your age"));

// if (agee >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You can't vote");
// }



// // Task 23 — Positive or Negative

// let number1 = Number(prompt("Enter a number"));

// if (number1 > 0) {
//     console.log("Positive");
// } else if (number1 < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }



// // Task 24 — Grade System

// let marks = Number(prompt("Enter your marks"));

// if (marks >= 90 && marks <= 100) {
//     console.log("A Grade");
// } else if (marks >= 80 && marks <= 89) {
//     console.log("B Grade");
// } else if (marks >= 70 && marks <= 79) {
//     console.log("C Grade");
// } else if (marks >= 60 && marks <= 69) {
//     console.log("D Grade");
// } else if (marks >= 0 && marks < 60) {
//     console.log("Fail");
// } else {
//     console.log("Invalid marks");
// }



// // Task 25 — Job Eligibility

// let ageee = Number(prompt("Enter your age"));
// let height = Number(prompt("Enter your height"));
// let weight = Number(prompt("Enter your weight"));

// if (ageee >= 18) {

//     if (height >= 160) {

//         if (weight >= 60) {
//             console.log("Congratulations! You are selected");
//         } else {
//             console.log("You are not selected because your weight is below 60");
//         }

//     } else {
//         console.log("You are not selected because your height is below 160");
//     }

// } else {
//     console.log("You are not selected because your age is below 18");
// }



// // Task 26 — Traffic Light

// let color = prompt("Enter traffic light color");

// switch (color.toLowerCase()) {

//     case "red":
//         console.log("Stop");
//         break;

//     case "yellow":
//         console.log("Ready");
//         break;

//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("Invalid color");
// }



// // Task 27 — Day

// let day = 1;

// switch (day) {

//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid day");
// }






// // Task 28 — Student Result System

// // Get Student Details

// let name5 = prompt("Enter your name");
// let age5 = Number(prompt("Enter your age"));
// let city5 = prompt("Enter your city");

// //  Get Marks

// let tamil = Number(prompt("Enter Tamil mark"));
// let english = Number(prompt("Enter English mark"));
// let maths = Number(prompt("Enter Maths mark"));

// // Calculate Total and Average

// let total1 = tamil + english + maths;
// let average = total1 / 3;

// // Check Grade

// let grade;

// if (average >= 90) {
//     grade = "A";
// } else if (average >= 80) {
//     grade = "B";
// } else if (average >= 70) {
//     grade = "C";
// } else if (average >= 60) {
//     grade = "D";
// } else {
//     grade = "Fail";
// }

// //  Check Voting Eligibility

// let voting;

// if (age5 >= 18) {
//     voting = "Eligible";
// } else {
//     voting = "Not Eligible";
// }

// //  Display Result

// console.log(`
// Name: ${name5}
// Age: ${age5}
// City: ${city5}
// Tamil: ${tamil}
// English: ${english}
// Maths: ${maths}
// Total: ${total1}
// Average: ${average.toFixed(2)}
// Grade: ${grade}
// Voting: ${voting}
// `);