// Task 1 — Student Result Analyzer

// let name = 'Mohit';
// let dep = 'Civil';
// let subject_marks = [95,89,18,88,90]

// let i = 0;
// for ( let mark of subject_marks){
//     i = i + mark
// };

// let total_marks = i;
// let avg_mark = total_marks/5;

// function grade(avg_mark){
//     if (avg_mark >= 90 && avg_mark <= 100){
//          return `Average is : ${avg_mark}. So Ur Grade is A `
//     }else if(avg_mark >= 75){
//         return `Average is : ${avg_mark}. So Ur Grade is B `
//     }else if(avg_mark >= 60){
//         return `Average is : ${avg_mark}. So Ur Grade is C `
//     }else if(avg_mark >= 50){
//         return `Average is : ${avg_mark}. So Ur Grade is D`
//     }else{
//         return `Sorry Your Average Is Less Than 50, So u fail.`
//     }
// };

// let Result = grade(avg_mark);

// console.log(`Total Marks : ${total_marks}`);
// console.log(Result);

// Task 2 — Employee Salary Calculator

// let Employee_detial = {
//     name: "Mohit",
//     role: "Frontend Developer",
//     salary: 80000,
//     experience: 5
// };

// function calculateSalary(emp){

//     let bonus = 0;

//     if (emp.experience >= 5){
//             bonus = emp.salary * 0.15
//         }else if (emp.experience >= 2){
//             bonus = emp.salary * 0.10
//     };

//     let finalSalary = emp.salary + bonus;

//     console.log(`Name : ${emp.name}`);
//     console.log(`Role : ${emp.role}`);
//     console.log(`Basic Salary : ${emp.salary}`);
//     console.log(`Final Salary : ${finalSalary}`);
//     console.log(`Experiance : ${emp.experience}`);

// };

// calculateSalary(Employee_detial)

// Task 3 — Product Filter System

// let products = [
//     { name: "Laptop", price: 55000, category: "electronics" },
//     { name: "Mouse", price: 800, category: "electronics" },
//     { name: "Shirt", price: 1200, category: "fashion" },
//     { name: "Shoes", price: 2500, category: "fashion" },
//     { name: "Phone", price: 30000, category: "electronics" }
// ];


// let product = products.filter( products => products.price < 2000)
// console.log("Products above ₹2,000",product);

// let electronics = products.filter( products => products.category === "electronics")
// console.log("Only electronics",electronics);

// let below = products.find(p => p.price < 1000);
// console.log("First product below ₹1000:", below);

// let totalPrice = products.reduce((sum, p) => sum + p.price, 0);
// console.log("Total price:", totalPrice);

// let Above = products.some(p => p.price > 50000);
// console.log("Any product above ₹50000?", Above);

// let allAbove= products.every(p => p.price > 500);
// console.log("Every product above ₹500?", allAbove);


// Task 4 — Employee Management

// let Employees = [{
//     id: 101,
//     name: "Koustubh",
//     role: "Full Stack Developer",
//     salary: 100000
// },
// {
//     id: 102,
//     name: "Nikhita",
//     role: "Frontend Developer",
//     salary: 40000
// },
// {
//     id: 103,
//     name: "Ashutosh",
//     role: ".Net Developer",
//     salary: 70000
// },
// {
//     id: 104,
//     name: "Gauri",
//     role: "Java Developer",
//     salary: 50000
// },
// {
//     id: 105,
//     name: "Siya",
//     role: "Python Developer",
//     salary: 70000
// },
// {
//     id: 106,
//     name: "Sakshi",
//     role: "Python Developer",
//     salary: 40000
// }];


// let emp = Employees.map( Emp => Emp.name);
// console.log(emp);

// let emp_above = Employees.filter( Emp => Emp.salary > 40000);
// console.log("employees earning above ₹40,000",emp_above);

// let emp_find = Employees.find( Emp => Emp.id === 103);
// console.log("employee with ID 103",emp_find);

// let emp_tolsal = Employees.reduce( (sum,Emp)=> (sum + Emp.salary),0);
// console.log("total employee salary",emp_tolsal);

// let high_emp = Employees.reduce((max, emp) => emp.salary > max.salary ? emp : max);
// console.log("Highest paid employee",high_emp);

// let emp_sort = Employees.sort( (a,b) => b.salary-a.salary);
// console.log("employee with ID 103",emp_sort);

// let emp_names = Employees.map(emp => emp.name);
// console.log("New Array of Employee Names:", emp_names);

// Task 5 — Shopping Cart

// let cart = [
//     { name: "Laptop", price: 50000, quantity: 9 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];


// function calculateCart(card){
//     let total = cart.reduce((sum, item) => {
//         let itemTotal = item.price * item.quantity;
//         console.log(`${item.name} Total: ${itemTotal}`);
//         return sum + itemTotal;
//     }, 0);

//     console.log("Cart Value:", total);

//     let discount = total > 50000 ? total * 0.10 : 0;
//     console.log("Discount:", discount);

//     let finalAmount = total - discount;
//     console.log("Final Payable Amount:", finalAmount);

//     return finalAmount;
// };

// calculateCart(cart);
// Task 6 — Student Search System

// let students = [
//     { name: "Arun", age: 21, mark: 85 },
//     { name: "Priya", age: 22, mark: 92 },
//     { name: "Karthi", age: 20, mark: 67 },
//     { name: "Dinesh", age: 23, mark: 45 }
// ];

// let students_name = students.map( name => name.name);
// console.log('Students Name' ,students_name);

// let student_above = students.filter(s => s.mark > 80);
// console.log("Students who scored above 80:", student_above);

// let student_name = students.find( name => name.name === "Mansi");
// console.log('Student Name Mansi Detials',student_name);

// let student_avg = students.reduce((sum,s) => (sum+s.mark),0) / students.length;
// console.log('students average',student_avg);

// let student_fail = students.some(s => s.mark < 40);
// console.log('anyone failed',student_fail);

// let all_student = students.every( s => s.mark >= 40);
// console.log('everyone scored above 40',all_student);

// let student_sort = students.sort((a,b) => (b-a));
// console.log('Sort students by marks',student_sort);

// Task 7 — Array Transformation Challenge

// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


// let number = numbers.map( a => a*2 );
// console.log('new array containing numbers × 2 : ',number);

// let even_number = numbers.filter( a => a % 2 == 0);
// console.log('only even numbers : ',even_number);

// let above_number = numbers.filter( a => a > 15 )
// console.log('numbers greater than 15 :',above_number);

// let find_number = numbers.find( a => a > 20);
// console.log('first number greater than 20 :',find_number);

// let total_number = numbers.reduce((a,b) => (a+b),0)
// console.log('total of all numbers :',total_number);

// let some_number = numbers.some( a => a > 40 )
// console.log('any number is greater than 40 :',some_number);

// let positive = numbers.every(n => n > 0);
// console.log("All numbers positive?", positive);

// let sort_number = numbers.sort(( a,b ) => ( b-a ))
// console.log('Sort from highest to lowest',sort_number);

// Task 8 — String Analyzer

// let a = "JavaScript is very powerful"

// console.log(a);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.includes('JavaScript'));
// console.log(a.slice(0, 1));
// console.log(a.slice(-1));
// let words = a.split(' ')
// console.log(words.length);
// console.log(a.replace('JavaScript','Python'));
// console.log(a.split(' '));

// Final Mini Project — Employee Dashboard

// let employees = [
//     {
//         id: 101,
//         name: "Mohit",
//         department: "IT",
//         salary: 95000,
//         experience: 5
//     },
//     {
//         id: 102,
//         name: "Koustubh",
//         department: "HR",
//         salary: 70000,
//         experience: 8
//     },
//     {
//         id: 103,
//         name: "Ashutosh",
//         department: "IT",
//         salary: 85000,
//         experience: 2
//     }
// ];

// function Employees() {
//     employees.forEach(emp => console.log(emp));
// };
// Employees()


// function searchEmployee(name) {
//     let result = employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
//     console.log("Search Result:", result);
// };
// searchEmployee('agi')

// function filter_Dep(dept) {
//     let result = employees.filter(emp => emp.department.toUpperCase() === dept.toUpperCase());
//     console.log(`Employees in ${dept}:`, result);
// };
// filter_Dep('it')


// function filter_sal() {
//     let result = employees.filter(emp => emp.salary > 50000)
//     console.log("employees earning more than ₹50,000",result);
// };
// filter_sal()

// function total_sal() {
//     let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
//     console.log("Total Company Salary: ₹" + total);
//     return total;
// };

// total_sal()

// function highest_sal() {
//     let highest = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max, employees[0]);
//     console.log("Highest Paid Employee:", highest);
//     return highest;
// };
// highest_sal()

// function exp_Emp() {
//     let result = employees.filter(emp => emp.experience > 3);
//     console.log(`Employees with more than 3 years experience:`, result);
// };
// exp_Emp()

// function sort_sal(order = "asc") {
//     let sorted = [...employees].sort((a, b) => order === "asc" ? a.salary - b.salary : b.salary - a.salary);
//     console.log(`Employees sorted by salary(asc) (${order}):`, sorted);
// };
// sort_sal('asc')

// function sort_sal(order = "asc") {
//     let sorted = [...employees].sort((a, b) => order === "asc" ? a.salary - b.salary : b.salary - a.salary);
//     console.log(`Employees sorted by salary(d) (${order}):`, sorted);
// };
// sort_sal('decs')

// function statistics() {
//     let totalEmp = employees.length;
//     let totalSal = total_sal();
//     let highest = highest_sal().salary;
//     let avgSal = Math.round(totalSal / totalEmp);

//     console.log("Total Employees:", totalEmp);
//     console.log("Total Salary: ₹" + totalSal);
//     console.log("Highest Salary: ₹" + highest);
//     console.log("Average Salary: ₹" + avgSal);
// }
// statistics()
