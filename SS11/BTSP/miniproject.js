let students = [
    { id: 1, name: "Pham Van Thai", age: 20, gpa: 8.5, status: "active" },
    { id: 2, name: "Truong Cong Duy", age: 17, gpa: 7.2, status: "active" },
    { id: 3, name: "Tran Huy Dat", age: 22, gpa: 9.1, status: "inactive" },
    { id: 4, name: "Vu Nhat Thong", age: 19, gpa: 6.8, status: "active" },
    { id: 5, name: "Dansuraito Ahiru", age: 100000, gpa: 10.0, status: "immortal" }
];

let nextId = 6;

let choice;

const creatStudent = () => {
    let name;
    let age;
    let gpa;
    let status;
    do {
        name = prompt("Enter student name:").trim();
    } while (name === "");

    do {
        age = parseInt(prompt("Enter age:").trim());
    } while (isNaN(age) || age <= 0);

    do {
        gpa = parseFloat(prompt("Enter GPA (0.0 - 10.0):").trim());
    } while (isNaN(gpa) || gpa < 0 || gpa > 10.0);

    do {
        status = prompt("Enter status (active / inactive):").trim();
    } while (status !== "active" && status !== "inactive" || status === "");

    const newStudent = {
        id: nextId++,
        name,
        age,
        gpa,
        status,
    };

    students.push(newStudent);
    alert(`Student created successfully!\nID: ${newStudent.id} | Name: ${newStudent.name} | Age: ${newStudent.age} | GPA: ${newStudent.gpa} | Status: ${newStudent.status}`);
};

const readAllStudent = () => {
    let list = [];
    students.forEach((s) => {
        list.push(`ID: ${s.id} | Name: ${s.name} | Age: ${s.age} | GPA: ${s.gpa} | Status: ${s.status}`);
    });
    if (list.length > 0) {
        alert(`===== ALL STUDENTS =====
-----------------------------------------------
${list.join("\n")}
-----------------------------------------------
Total: ${list.length} student(s)`);
    } else {
        alert(`No record found!`);
    }
};

const filterScholarShip = () => {
    const candidates = students.filter((s) => s.gpa > 8.0);
    const list=candidates.map((s) => `ID: ${s.id} | Name: ${s.name} | Age: ${s.age} | GPA: ${s.gpa} | Status: ${s.status}`);
    if(candidates.length===0){
        alert(`No scholarship candidates found!`);
    } else {
    alert(`===== SCHOLARSHIP CANDIDATES (GPA > 8.0) =====
---------------------------------------------------
${list.join("\n")};
---------------------------------------------------
Total: ${candidates.length} student(s)`);
    }
};

const updateStudent=() => {
    let id=parseInt(prompt("Enter student ID to update:").trim());
    const found=students.find((s) => s.id===id);

    if(found){
        alert(`Found:\nID: ${found.id} | Name: ${found.name} | Age: ${found.age} | GPA: ${found.gpa} | Status: ${found.status}
            
Leave blank to keep current value.`);
        const newName=prompt(`New name (current: ${found.name}):`).trim();
        const newGpa=parseFloat(prompt(`New GPA (current: ${found.gpa}):`).trim());
        if(newName && newName !=="") found.name=newName;
        if(newGpa && newGpa !=="" && !isNaN(newGpa) && newGpa>=0 && newGpa<=10){
            found.gpa=newGpa;
        } else {
            alert("Invalid GPA value. GPA not updated.");
        }
    } else {
        alert(`No students found with ID: ${id}`);
        return;
    }
    alert(`Student updated successfully!
ID: ${found.id} | Name: ${found.name} | Age: ${found.age} | GPA: ${found.gpa} | Status: ${found.status}`);
};

const deleteStudent=() => {
    let id=parseInt(prompt("Enter student ID to update:").trim());
    const index=students.findIndex((s) => s.id===id);

    if(index!==-1){
        const removed=students[index];
        const confirm=prompt(`Are you sure you want to delete?
ID: ${students[index].id} | Name: ${students[index].name} | Age: ${students[index].age} | GPA: ${students[index].gpa} | Status: ${students[index].status}
            
Type "yes" to confirm:`).trim();
        if(confirm && confirm.toLowerCase() === "yes"){
            students.splice(index,1);
            alert(`Student "${removed.name}" has been deleted!`);
        } else {
            alert(`Deletion cancelled!`);
        }
    } else {
        alert(`No students found with id: ${id}`);
    }
};

const complianceVerification=() => {
    const hasMinor=students.some((s) => s.age<18);
    const allActive=students.every((s) => s.status==="active");
    let result="===== COMPLIANCE VERIFICATION =====\n";

    if(hasMinor){
        result+="\nMinors found:";
        const minors=students.filter((s) => s.age<18);
        minors.forEach((element) => result+=`\n   → ${element.name} (Age: ${element.age})`);
    }
    result+=`\n\nAll students have "active" status: ${allActive ? "YES" : "NO"}`;

    if(!allActive){
        result+="\nInactive students:";
        const notActive=students.filter((s) => s.status !== "active");
        notActive.forEach((element) => result+=`\n   → ${element.name} (Status: ${element.status})`);
    }
    alert(result);
};

const academicStatistics=() => {
    if(students.length===0) alert(`No students in the list!`);
    const totalGpa=students.reduce((prev, curr) => prev+curr.gpa, 0);
    const avg=totalGpa/students.length;
    const highest=students.reduce((max,s) => (s.gpa>max.gpa ? s : max), students[0]);
    const lowest=students.reduce((min,s) => (s.gpa<min.gpa ? s: min), students[0]);

    let result = "===== ACADEMIC STATISTICS =====\n";
    result+=`\nTotal students: ${students.length}`;
    result+=`\nTotal GPA sum: ${totalGpa.toFixed(2)}`;
    result+=`\nAverage GPA: ${avg.toFixed(2)}`;
    result+=`\n\nHighest GPA: ${highest.name} (${highest.gpa})`;
    result+=`\nLowest GPA: ${lowest.name} (${lowest.gpa})`;

    alert(result);
};

const dataNormalization=() => {
    const list=students.map((s) => `ID: ${s.id} | Name: ${s.name.toUpperCase()} | Age: ${s.age} | GPA: ${s.gpa} | Status: ${s.status}`);
    alert(`===== NORMALIZED DATA (UPPERCASE NAMES) =====
--------------------------------------------------------------------
${list.join("\n")}
---------------------------------------------------------------------`);
};

do {
    choice = +prompt(`===== STUDENT MANAGEMENT SYSTEM =====
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
Enter your choice:`);
    switch (choice) {
        case 0:
            alert("Goodbye! Thank you for using Student Management System.");
            break;
        case 1:
            creatStudent();
            break;
        case 2:
            readAllStudent();
            break;
        case 3:
            filterScholarShip();
            break;
        case 4:
            updateStudent();
            break;
        case 5:
            deleteStudent();
            break;
        case 6:
            complianceVerification();
            break;
        case 7:
            academicStatistics();
            break;
        case 8:
            dataNormalization();
            break;
        default:
            alert(`Invalid choice! Please enter a number from 0 to 8.`);
            break;
    }
} while (choice !== 0);
