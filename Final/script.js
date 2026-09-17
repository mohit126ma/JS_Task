const API_URL = "https://dummyjson.com/users?limit=25";

let employees = [];
let currentDepartment = "All";
let currentSearch = "";
let currentViewMode = "grid";
let activeDossierId = null;

const employeeContainer = document.getElementById("employeeContainer");
const employeeCount = document.getElementById("employeeCount");
const totalSalary = document.getElementById("totalSalary");
const averageSalary = document.getElementById("averageSalary");
const highestPaid = document.getElementById("highestPaid");
const highestEmployeeSalary = document.getElementById("highestEmployeeSalary");
const topDepartmentEl = document.getElementById("topDepartment");

const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const sortSelect = document.getElementById("sortSelect");
const statusMessage = document.getElementById("statusMessage");

const themeToggleBtn = document.getElementById("themeToggleBtn");
const exportCsvBtn = document.getElementById("exportCsvBtn");
const gridViewBtn = document.getElementById("gridViewBtn");
const tableViewBtn = document.getElementById("tableViewBtn");
const viewTopExecutiveBtn = document.getElementById("viewTopExecutiveBtn");

const profileModal = document.getElementById("profileModal");
const closeProfileModal = document.getElementById("closeProfileModal");
const dossierCloseBtn = document.getElementById("dossierCloseBtn");
const dossierEditTrigger = document.getElementById("dossierEditTrigger");

const dossierAvatar = document.getElementById("dossierAvatar");
const dossierName = document.getElementById("dossierName");
const dossierRole = document.getElementById("dossierRole");
const dossierDeptBadge = document.getElementById("dossierDeptBadge");
const dossierSalary = document.getElementById("dossierSalary");
const dossierAge = document.getElementById("dossierAge");
const dossierEmail = document.getElementById("dossierEmail");
const dossierPhone = document.getElementById("dossierPhone");
const dossierLocation = document.getElementById("dossierLocation");
const dossierId = document.getElementById("dossierId");
const dossierSkills = document.getElementById("dossierSkills");

const editModal = document.getElementById("editModal");
const closeModal = document.getElementById("closeModal");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const editEmployeeForm = document.getElementById("editEmployeeForm");
const employeeForm = document.getElementById("employeeForm");

function triggerToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fa-solid ${
    type === "success" ? "fa-circle-check" : "fa-triangle-exclamation"
  }"></i> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Initial Data Fetch
async function fetchEmployees() {
  if (statusMessage) {
    statusMessage.innerHTML = `<p><i class="fa-solid fa-spinner fa-spin"></i> Establishing handshake with cloud directory...</p>`;
  }

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("API Fetch error");
    const data = await res.json();

    const sampleSkills = [
      ["Cloud Architectures", "Docker/K8s", "Go/Rust"],
      ["Omnichannel Media", "SEO Audits", "Brand Positioning"],
      ["Direct Sales", "Account Retention", "CRM Systems"],
      ["Talent Pipeline", "Labor Compliance", "Workforce DEI"],
      ["SLA Governance", "Infrastructure Upkeep", "Client Escalations"],
    ];

    employees = (data.users || []).map((user, idx) => {
      const department = user.company?.department || "Engineering";
      const title = user.company?.title || "Senior Associate";
      const skills = sampleSkills[idx % sampleSkills.length];

      return {
        id: user.id,
        name:
          `${user.firstName || ""} ${user.lastName || ""}`.trim() ||
          "Confidential",
        age: user.age || 28,
        email: user.email || "unlisted@nexuscorp.com",
        phone: user.phone || "+91 (080) 4567 8900",
        department: department,
        roleTitle: title,
        location: `${user.address?.city || "Bangalore"}, IN`,
        image: user.image || `https://i.pravatar.cc/150?u=${user.id}`,
        salary: 450000 + (user.age || 25) * 48000,
        skills: skills,
      };
    });

    if (statusMessage) statusMessage.innerHTML = "";
    displayFilteredEmployees();
    triggerToast("Workforce telemetry updated successfully.");
  } catch (err) {
    console.error(err);
    if (statusMessage) {
      statusMessage.innerHTML = `<p style="color:var(--accent-red)"><i class="fa-solid fa-circle-xmark"></i> Direct feed failed. Fallback to offline cache.</p>`;
    }
  }
}

function openProfileDossier(id) {
  const emp = employees.find((e) => e.id === id);
  if (!emp) return;

  activeDossierId = emp.id;
  dossierAvatar.src = emp.image;
  dossierName.innerText = emp.name;
  dossierRole.innerText = emp.roleTitle || "Senior Operations Associate";
  dossierDeptBadge.innerText = emp.department;
  dossierSalary.innerText = formatCurrency(emp.salary);
  dossierAge.innerText = `${emp.age} yrs`;
  dossierEmail.innerText = emp.email;
  dossierPhone.innerText = emp.phone;
  dossierLocation.innerText = emp.location || "Bangalore, IN";
  dossierId.innerText = `NX-${String(emp.id).padStart(4, "0")}`;

  dossierSkills.innerHTML = (
    emp.skills || ["Cross-functional Operations", "Business Analytics"]
  )
    .map((skill) => `<span class="skill-tag">${skill}</span>`)
    .join("");

  profileModal.classList.add("active");
  profileModal.setAttribute("aria-hidden", "false");
}

function closeDossier() {
  profileModal.classList.remove("active");
  profileModal.setAttribute("aria-hidden", "true");
}

function displayEmployees(list) {
  if (!employeeContainer) return;
  employeeContainer.innerHTML = "";
  updateMetrics(list);

  if (list.length === 0) {
    employeeContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px; background: var(--surface); border-radius: var(--radius-md); border: 1px solid var(--border);">
        <i class="fa-solid fa-user-slash" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 12px;"></i>
        <h3>No Staff Records Identified</h3>
        <p class="section-desc">Try loosening search constraints or choosing another operational filter.</p>
      </div>`;
    return;
  }

  if (currentViewMode === "grid") {
    employeeContainer.className = "employee-container grid-view";
    list.forEach((emp) => {
      const card = document.createElement("div");
      card.className = "employee-card";
      card.innerHTML = `
        <div class="card-avatar-box">
          <img src="${emp.image}" alt="${emp.name}" loading="lazy" />
          <span class="dept-pill">${emp.department}</span>
        </div>
        <h3 onclick="openProfileDossier(${emp.id})">${emp.name}</h3>
        <p class="emp-email">${emp.email}</p>
        <div class="emp-meta-box">
          <div class="emp-meta-row"><span>Compensation:</span> <strong>${formatCurrency(emp.salary)}</strong></div>
          <div class="emp-meta-row"><span>Age:</span> <strong>${emp.age}</strong></div>
        </div>
        <div class="card-cta-bar">
          <button class="btn-card-action view" onclick="openProfileDossier(${emp.id})"><i class="fa-regular fa-eye"></i> View</button>
          <button class="btn-card-action edit" onclick="openEditModal(${emp.id})"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-card-action delete" onclick="deleteEmployee(${emp.id})"><i class="fa-regular fa-trash-can"></i></button>
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
            <th>Personnel</th>
            <th>Department</th>
            <th>Age</th>
            <th>Annual CTC</th>
            <th>Direct Email</th>
            <th style="text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody>
    `;

    list.forEach((emp) => {
      tableHTML += `
        <tr>
          <td>
            <div class="table-user-cell">
              <img src="${emp.image}" alt="${emp.name}" />
              <div>
                <strong style="cursor:pointer" onclick="openProfileDossier(${emp.id})">${emp.name}</strong>
                <p style="font-size:0.75rem; color:var(--text-muted)">ID: NX-${emp.id}</p>
              </div>
            </div>
          </td>
          <td><span class="dept-badge">${emp.department}</span></td>
          <td>${emp.age}</td>
          <td><strong>${formatCurrency(emp.salary)}</strong></td>
          <td>${emp.email}</td>
          <td style="text-align: right;">
            <button class="btn-card-action view" onclick="openProfileDossier(${emp.id})"><i class="fa-regular fa-eye"></i></button>
            <button class="btn-card-action edit" onclick="openEditModal(${emp.id})"><i class="fa-solid fa-pen"></i></button>
            <button class="btn-card-action delete" onclick="deleteEmployee(${emp.id})"><i class="fa-regular fa-trash-can"></i></button>
          </td>
        </tr>
      `;
    });

    tableHTML += `</tbody></table>`;
    employeeContainer.innerHTML = tableHTML;
  }
}

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
  if (highestEmployeeSalary)
    highestEmployeeSalary.innerText = formatCurrency(topEmp.salary);
  if (topDepartmentEl) topDepartmentEl.innerText = topDept;

  if (viewTopExecutiveBtn) {
    viewTopExecutiveBtn.onclick = () => openProfileDossier(topEmp.id);
  }
}

// Filtering and Search
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
        e.email.toLowerCase().includes(currentSearch) ||
        e.department.toLowerCase().includes(currentSearch),
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

// Delete Employee
function deleteEmployee(id) {
  const target = employees.find((e) => e.id === id);
  if (
    !confirm(
      `Are you certain you want to purge ${target?.name || "this employee"} from the roster?`,
    )
  )
    return;

  employees = employees.filter((e) => e.id !== id);
  displayFilteredEmployees();
  triggerToast("Personnel asset deleted permanently.", "danger");
}

// Edit Form Modal Handlers
function openEditModal(id) {
  const emp = employees.find((e) => e.id === id);
  if (!emp) return;

  document.getElementById("editEmpId").value = emp.id;
  document.getElementById("editName").value = emp.name;
  document.getElementById("editDepartment").value = emp.department;
  document.getElementById("editSalary").value = emp.salary;

  editModal.classList.add("active");
  editModal.setAttribute("aria-hidden", "false");
}

function closeEditModal() {
  editModal.classList.remove("active");
  editModal.setAttribute("aria-hidden", "true");
}

editEmployeeForm.onsubmit = (e) => {
  e.preventDefault();
  const id = Number(document.getElementById("editEmpId").value);
  const emp = employees.find((e) => e.id === id);

  if (emp) {
    emp.name = document.getElementById("editName").value.trim();
    emp.department = document.getElementById("editDepartment").value;
    emp.salary = Number(document.getElementById("editSalary").value);

    displayFilteredEmployees();
    triggerToast(`Record for ${emp.name} updated.`);
    if (activeDossierId === id) openProfileDossier(id);
  }
  closeEditModal();
};

employeeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const age = Number(document.getElementById("age").value);
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value;
  const salary = Number(document.getElementById("salary").value);
  const roleTitle = document.getElementById("roleTitle").value.trim();

  // Basic Validation
  let isValid = true;
  if (!name) {
    document.getElementById("nameError").innerText = "Name is mandatory";
    isValid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  if (!age || age < 18) {
    document.getElementById("ageError").innerText = "Valid age (18+) required";
    isValid = false;
  } else {
    document.getElementById("ageError").innerText = "";
  }

  if (!email || !email.includes("@")) {
    document.getElementById("emailError").innerText =
      "Corporate email required";
    isValid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  if (!department) {
    document.getElementById("departmentError").innerText = "Select unit";
    isValid = false;
  } else {
    document.getElementById("departmentError").innerText = "";
  }

  if (!salary || salary <= 0) {
    document.getElementById("salaryError").innerText = "Salary value required";
    isValid = false;
  } else {
    document.getElementById("salaryError").innerText = "";
  }

  if (!isValid) return;

  const newEmp = {
    id: Date.now(),
    name,
    age,
    email,
    department,
    salary,
    roleTitle: roleTitle || "Specialist",
    image: `https://i.pravatar.cc/150?u=${Date.now()}`,
    location: "Bangalore, IN",
    skills: ["Onboarding Certified", "Enterprise Tools"],
  };

  employees.unshift(newEmp);
  displayFilteredEmployees();
  employeeForm.reset();
  triggerToast(`Onboarded ${name} to ${department}`);
});

// CSV Export
exportCsvBtn.addEventListener("click", () => {
  let csv = "ID,Name,Department,Salary,Email,Location\n";
  employees.forEach((e) => {
    csv += `${e.id},"${e.name}","${e.department}",${e.salary},"${e.email}","${e.location || "HQ"}"\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nexus_workforce_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  triggerToast("Data pipeline exported to CSV.");
});

// View Toggle
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

themeToggleBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  themeToggleBtn.innerHTML = isDark
    ? '<i class="fa-solid fa-moon"></i> <span>Dark Mode</span>'
    : '<i class="fa-solid fa-sun"></i> <span>Light Mode</span>';
});

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value.trim().toLowerCase();
  clearSearchBtn.classList.toggle("hidden", currentSearch.length === 0);
  displayFilteredEmployees();
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  currentSearch = "";
  clearSearchBtn.classList.add("hidden");
  displayFilteredEmployees();
});

document.querySelectorAll(".chip").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".chip")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentDepartment = btn.getAttribute("data-department");
    displayFilteredEmployees();
  });
});

if (sortSelect) sortSelect.addEventListener("change", displayFilteredEmployees);

closeProfileModal.onclick = closeDossier;
dossierCloseBtn.onclick = closeDossier;
closeModal.onclick = closeEditModal;
cancelEditBtn.onclick = closeEditModal;

dossierEditTrigger.onclick = () => {
  closeDossier();
  if (activeDossierId) openEditModal(activeDossierId);
};

window.onclick = (e) => {
  if (e.target === profileModal) closeDossier();
  if (e.target === editModal) closeEditModal();
};

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
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  );
  document.getElementById("currentTime").innerText = now.toLocaleTimeString(
    "en-IN",
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
  );
}

// Bootstrap
updateDateTime();
setInterval(updateDateTime, 1000);
fetchEmployees();
