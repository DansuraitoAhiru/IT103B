
// ===== STUDENT MANAGEMENT SYSTEM =====

let students = [
  { id: 1, name: "Nguyen Van An", age: 20, gpa: 8.5, status: "active" },
  { id: 2, name: "Tran Thi Bich", age: 17, gpa: 7.2, status: "active" },
  { id: 3, name: "Le Hoang Cuong", age: 22, gpa: 9.1, status: "inactive" },
  { id: 4, name: "Pham Thi Dung", age: 19, gpa: 6.8, status: "active" },
];

let nextId = 5;

// ===== HELPER FUNCTIONS =====

function showMenu() {
  return prompt(
    `===== STUDENT MANAGEMENT SYSTEM =====
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates (GPA > 8.0)
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
0. Exit
======================================
Enter your choice:`
  );
}

function formatStudent(s) {
  return `ID: ${s.id} | Name: ${s.name} | Age: ${s.age} | GPA: ${s.gpa} | Status: ${s.status}`;
}

function formatList(list, title = "Student List") {
  if (list.length === 0) return `${title}\n(No records found)`;
  const divider = "-".repeat(60);
  const rows = list.map((s) => formatStudent(s)).join("\n");
  return `${title}\n${divider}\n${rows}\n${divider}\nTotal: ${list.length} student(s)`;
}

// ===== 1. CREATE STUDENT =====
function createStudent() {
  const name = prompt("Enter student name:");
  if (!name || name.trim() === "") return alert("Name cannot be empty!");

  const age = parseInt(prompt("Enter age:"));
  if (isNaN(age) || age <= 0) return alert("Invalid age!");

  const gpa = parseFloat(prompt("Enter GPA (0.0 - 10.0):"));
  if (isNaN(gpa) || gpa < 0 || gpa > 10) return alert("Invalid GPA!");

  const statusInput = prompt("Enter status (active / inactive):").trim().toLowerCase();
  if (statusInput !== "active" && statusInput !== "inactive")
    return alert('Status must be "active" or "inactive"!');

  const newStudent = {
    id: nextId++,
    name: name.trim(),
    age,
    gpa,
    status: statusInput,
  };

  students.push(newStudent);
  alert(`Student created successfully!\n${formatStudent(newStudent)}`);
}

// ===== 2. READ ALL STUDENTS =====
function readAllStudents() {
  alert(formatList(students, "===== ALL STUDENTS ====="));
}

// ===== 3. FILTER SCHOLARSHIP CANDIDATES =====
function filterScholarship() {
  const candidates = students.filter((s) => s.gpa > 8.0);
  alert(formatList(candidates, "===== SCHOLARSHIP CANDIDATES (GPA > 8.0) ====="));
}

// ===== 4. UPDATE STUDENT PROFILE =====
function updateStudent() {
  const id = parseInt(prompt("Enter student ID to update:"));
  const student = students.find((s) => s.id === id);

  if (!student) return alert(`No student found with ID: ${id}`);

  alert(`Found:\n${formatStudent(student)}\n\nLeave blank to keep current value.`);

  const newName = prompt(`New name (current: ${student.name}):`);
  const newGpa = prompt(`New GPA (current: ${student.gpa}):`);

  if (newName && newName.trim() !== "") student.name = newName.trim();

  if (newGpa && newGpa.trim() !== "") {
    const parsedGpa = parseFloat(newGpa);
    if (!isNaN(parsedGpa) && parsedGpa >= 0 && parsedGpa <= 10) {
      student.gpa = parsedGpa;
    } else {
      alert("Invalid GPA value. GPA not updated.");
    }
  }

  alert(`Student updated successfully!\n${formatStudent(student)}`);
}

// ===== 5. DELETE RECORD =====
function deleteStudent() {
  const id = parseInt(prompt("Enter student ID to delete:"));
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) return alert(`No student found with ID: ${id}`);

  const removed = students[index];
  const confirm = prompt(`Are you sure you want to delete?\n${formatStudent(removed)}\n\nType "yes" to confirm:`);

  if (confirm && confirm.trim().toLowerCase() === "yes") {
    students = students.filter((s) => s.id !== id);
    alert(`Student "${removed.name}" has been deleted.`);
  } else {
    alert("Deletion cancelled.");
  }
}

// ===== 6. COMPLIANCE VERIFICATION =====
function complianceVerification() {
  const hasMinor = students.some((s) => s.age < 18);
  const allActive = students.every((s) => s.status === "active");

  let result = "===== COMPLIANCE VERIFICATION =====\n";
  result += `\nHas at least one student under 18: ${hasMinor ? "YES" : "NO"}`;

  if (hasMinor) {
    const minors = students.filter((s) => s.age < 18);
    result += "\n   Minors found:";
    minors.forEach((s) => {
      result += `\n   → ${s.name} (Age: ${s.age})`;
    });
  }

  result += `\n\nAll students have "active" status: ${allActive ? "YES" : "NO"}`;

  if (!allActive) {
    const inactive = students.filter((s) => s.status !== "active");
    result += "\n   Inactive students:";
    inactive.forEach((s) => {
      result += `\n   → ${s.name} (Status: ${s.status})`;
    });
  }

  alert(result);
}

// ===== 7. ACADEMIC STATISTICS =====
function academicStatistics() {
  if (students.length === 0) return alert("No students in the list!");

  const totalGpa = students.reduce((acc, s) => acc + s.gpa, 0);
  const avgGpa = totalGpa / students.length;

  const highest = students.reduce((max, s) => (s.gpa > max.gpa ? s : max), students[0]);
  const lowest = students.reduce((min, s) => (s.gpa < min.gpa ? s : min), students[0]);

  let result = "===== ACADEMIC STATISTICS =====\n";
  result += `\nTotal students   : ${students.length}`;
  result += `\nTotal GPA sum    : ${totalGpa.toFixed(2)}`;
  result += `\nAverage GPA      : ${avgGpa.toFixed(2)}`;
  result += `\n\nHighest GPA: ${highest.name} (${highest.gpa})`;
  result += `\nLowest GPA : ${lowest.name} (${lowest.gpa})`;

  alert(result);
}

// ===== 8. DATA NORMALIZATION =====
function dataNormalization() {
  const normalized = students.map((s) => ({
    ...s,
    name: s.name.toUpperCase(),
  }));

  alert(formatList(normalized, "===== NORMALIZED DATA (UPPERCASE NAMES) ====="));
  console.log("Normalized student list:", normalized);
}

// ===== MAIN LOOP =====
function main() {
  let running = true;

  while (running) {
    const choice = showMenu();

    switch (choice) {
      case "1":
        createStudent();
        break;
      case "2":
        readAllStudents();
        break;
      case "3":
        filterScholarship();
        break;
      case "4":
        updateStudent();
        break;
      case "5":
        deleteStudent();
        break;
      case "6":
        complianceVerification();
        break;
      case "7":
        academicStatistics();
        break;
      case "8":
        dataNormalization();
        break;
      case "0":
        alert("Goodbye! Thank you for using Student Management System.");
        running = false;
        break;
      case null:
        // User pressed Cancel
        running = false;
        break;
      default:
        alert("Invalid choice! Please enter a number from 0 to 8.");
    }
  }
}

// ===== RUN =====
main();
    