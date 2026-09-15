const API_URL = "https://dummyjson.com/users";

let employees = [];
let currentDepartment = "All";
let currentSearch = "";
let currentViewMode = "grid";  
 
const employeeContainer = document.getElementById("employeeContainer");
const employeeCount = document.getElementById("employeeCount");
const totalSalary = document.getElementById("totalSalary");
const averageSalary = document.getElementById("averageSalary");
const highestPaid = document.getElementById("highestPaid");
const highestEmployeeName = document.getElementById("highestEmployeeName");
const highestEmployeeSalary = document.getElementById("highestEmployeeSalary");
const topDepartmentEl = document.getElementById("topDepartment");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const statusMessage = document.getElementById("statusMessage");
const employeeForm = document.getElementById("employeeForm");
const sortSelect = document.getElementById("sortSelect");
 
const themeToggleBtn = document.getElementById("themeToggleBtn");
const exportCsvBtn = document.getElementById("exportCsvBtn");
const gridViewBtn = document.getElementById("gridViewBtn");
const tableViewBtn = document.getElementById("tableViewBtn");
const editModal = document.getElementById("editModal");
const closeModal = document.getElementById("closeModal");
const editEmployeeForm = document.getElementById("editEmployeeForm");

// Initialize Data Fetch
function fetchEmployees() {
  if (statusMessage) statusMessage.innerHTML = "⏳ Fetching employees...";

  fetch(API_URL)
    .then((res) => {
      if (!res.ok) throw new Error("API Fetch failed");
      return res.json();
    })
    .then((data) => {
      employees = (data.users || []).map((user) => ({
        id: user.id,
        name:
          `${user.firstName || ""} ${user.lastName || ""}`.trim() || "Unknown",
        age: user.age || 0,
        email: user.email || "N/A",
        phone: user.phone || "Not available",
        department: user.company?.department || "General",
        image: user.image || "https://via.placeholder.com/100",
        salary: 30000 + (user.age || 25) * 1000,
      }));

      if (statusMessage) statusMessage.innerHTML = "";
      displayFilteredEmployees();
    })
    .catch((err) => {
      console.error(err);
      if (statusMessage)
        statusMessage.innerHTML = "❌ Failed to load employee records.";
    });
}

// Render Logic (Grid vs Table)
function displayEmployees(list) {
  if (!employeeContainer) return;

  employeeContainer.innerHTML = "";
  updateMetrics(list);

  if (list.length === 0) {
    employeeContainer.innerHTML = `<div class="no-employees">No employees found.</div>`;
    return;
  }

  if (currentViewMode === "grid") {
    employeeContainer.className = "employee-container grid-view";
    list.forEach((emp) => {
      const card = document.createElement("div");
      card.className = "employee-card";
      card.innerHTML = `
                <img src="${emp.image}" alt="${emp.name}" />
                <h3>${emp.name}</h3>
                <p><span>Age:</span> <strong>${emp.age}</strong></p>
                <p><span>Dept:</span> <strong>${emp.department}</strong></p>
                <p><span>Email:</span> <strong>${emp.email}</strong></p>
                <p><span>Salary:</span> <strong>${formatCurrency(emp.salary)}</strong></p>
                <div class="card-actions">
                    <button class="edit-btn" onclick="openEditModal(${emp.id})">Edit</button>
                    <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete</button>
                </div>
            `;
      employeeContainer.appendChild(card);
    });
  } else {
    employeeContainer.className = "employee-container table-view";
    let tableHTML = `
            <table class="employee-table">
                <thead>
                    <tr>
                        <th>Name</th><th>Age</th><th>Department</th><th>Email</th><th>Salary</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;
    list.forEach((emp) => {
      tableHTML += `
                <tr>
                    <td><strong>${emp.name}</strong></td>
                    <td>${emp.age}</td>
                    <td>${emp.department}</td>
                    <td>${emp.email}</td>
                    <td>${formatCurrency(emp.salary)}</td>
                    <td>
                        <button class="edit-btn" onclick="openEditModal(${emp.id})">Edit</button>
                        <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete</button>
                    </td>
                </tr>
            `;
    });
    tableHTML += `</tbody></table>`;
    employeeContainer.innerHTML = tableHTML;
  }
}

// Metrics Engine
function updateMetrics(list) {
  if (employeeCount) employeeCount.innerText = list.length;

  if (!list || list.length === 0) {
    if (totalSalary) totalSalary.innerText = "₹0";
    if (averageSalary) averageSalary.innerText = "₹0";
    if (highestPaid) highestPaid.innerText = "N/A";
    if (topDepartmentEl) topDepartmentEl.innerText = "N/A";
    return;
  }

  const total = list.reduce((acc, curr) => acc + curr.salary, 0);
  const avg = total / list.length;
  const topEmp = list.reduce(
    (max, curr) => (curr.salary > max.salary ? curr : max),
    list[0],
  );

  // Calculate dominant department
  const deptCounts = {};
  list.forEach(
    (e) => (deptCounts[e.department] = (deptCounts[e.department] || 0) + 1),
  );
  const topDept = Object.keys(deptCounts).reduce(
    (a, b) => (deptCounts[a] > deptCounts[b] ? a : b),
    "N/A",
  );

  if (totalSalary) totalSalary.innerText = formatCurrency(total);
  if (averageSalary) averageSalary.innerText = formatCurrency(avg);
  if (highestPaid) highestPaid.innerText = topEmp.name;
  if (highestEmployeeName) highestEmployeeName.innerText = topEmp.name;
  if (highestEmployeeSalary)
    highestEmployeeSalary.innerText = formatCurrency(topEmp.salary);
  if (topDepartmentEl) topDepartmentEl.innerText = topDept;
}

// Search and Filter Handlers
function displayFilteredEmployees() {
  let result = employees;

  if (currentDepartment !== "All") {
    result = result.filter(
      (e) => e.department.toLowerCase() === currentDepartment.toLowerCase(),
    );
  }

  if (currentSearch !== "") {
    result = result.filter(
      (e) =>
        e.name.toLowerCase().includes(currentSearch) ||
        e.email.toLowerCase().includes(currentSearch),
    );
  }

  result = sortList(result);
  displayEmployees(result);
}

function sortList(list) {
  const sorted = [...list];
  const mode = sortSelect ? sortSelect.value : "";
  if (mode === "nameAsc") sorted.sort((a, b) => a.name.localeCompare(b.name));
  if (mode === "nameDesc") sorted.sort((a, b) => b.name.localeCompare(a.name));
  if (mode === "salaryDesc") sorted.sort((a, b) => b.salary - a.salary);
  if (mode === "salaryAsc") sorted.sort((a, b) => a.salary - b.salary);
  if (mode === "ageAsc") sorted.sort((a, b) => a.age - b.age);
  if (mode === "ageDesc") sorted.sort((a, b) => b.age - a.age);
  return sorted;
}

// Delete Action
function deleteEmployee(id) {
  employees = employees.filter((e) => e.id !== id);
  displayFilteredEmployees();
}

// Edit Modal Actions
function openEditModal(id) {
  const emp = employees.find((e) => e.id === id);
  if (!emp) return;
  document.getElementById("editEmpId").value = emp.id;
  document.getElementById("editName").value = emp.name;
  document.getElementById("editDepartment").value = emp.department;
  document.getElementById("editSalary").value = emp.salary;
  editModal.style.display = "flex";
}

closeModal.onclick = () => (editModal.style.display = "none");

editEmployeeForm.onsubmit = (e) => {
  e.preventDefault();
  const id = Number(document.getElementById("editEmpId").value);
  const emp = employees.find((e) => e.id === id);
  if (emp) {
    emp.name = document.getElementById("editName").value;
    emp.department = document.getElementById("editDepartment").value;
    emp.salary = Number(document.getElementById("editSalary").value);
    displayFilteredEmployees();
  }
  editModal.style.display = "none";
};

// CSV Export Feature
exportCsvBtn.addEventListener("click", () => {
  let csv = "ID,Name,Department,Salary,Email\n";
  employees.forEach((e) => {
    csv += `${e.id},"${e.name}","${e.department}",${e.salary},"${e.email}"\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "employees_export.csv";
  a.click();
});

// View Toggle Switch
gridViewBtn.addEventListener("click", () => {
  currentViewMode = "grid";
  gridViewBtn.classList.add("active");
  tableViewBtn.classList.remove("active");
  displayFilteredEmployees();
});

tableViewBtn.addEventListener("click", () => {
  currentViewMode = "table";
  tableViewBtn.classList.add("active");
  gridViewBtn.classList.remove("active");
  displayFilteredEmployees();
});

// Dark Mode Toggle
themeToggleBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  themeToggleBtn.innerText = isDark ? "🌙 Dark Mode" : "☀️ Light Mode";
});

// Add Employee Handler
employeeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const age = Number(document.getElementById("age").value);
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value;
  const salary = Number(document.getElementById("salary").value);

  if (!name || !age || !email || !department || !salary) return;

  employees.push({
    id: Date.now(),
    name,
    age,
    email,
    department,
    salary,
    image: "https://via.placeholder.com/100",
  });

  displayFilteredEmployees();
  employeeForm.reset();
});

// Search and Filter Listeners
if (searchInput)
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value.trim().toLowerCase();
    displayFilteredEmployees();
  });

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentDepartment = btn.getAttribute("data-department");
    displayFilteredEmployees();
  });
});

if (sortSelect) sortSelect.addEventListener("change", displayFilteredEmployees);

// Helpers
function formatCurrency(amt) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amt);
}

function updateDateTime() {
  const now = new Date();
  document.getElementById("currentDate").innerText = now.toLocaleDateString(
    "en-IN",
    { day: "2-digit", month: "short", year: "numeric" },
  );
  document.getElementById("currentTime").innerText = now.toLocaleTimeString(
    "en-IN",
    { hour: "2-digit", minute: "2-digit", second: "2-digit" },
  );
}

// App Initialization
updateDateTime();
setInterval(updateDateTime, 1000);
fetchEmployees();
